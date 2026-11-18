export type MortgageInput = {
  amount: number;
  annualRate: number;
  years: number;
};

export type MortgageResult = {
  /** Estimated monthly repayment. */
  monthly: number;
  /** Total repaid over the full term. */
  total: number;
  /** Total interest paid over the full term. */
  interest: number;
  /** Interest as a share of the total repaid (0–1). */
  interestShare: number;
};

/**
 * Estimate the monthly repayment for a repayment mortgage using the standard
 * amortisation formula: M = P · r(1 + r)^n / ((1 + r)^n − 1).
 */
export function calculateMortgage({
  amount,
  annualRate,
  years,
}: MortgageInput): MortgageResult {
  const months = Math.max(Math.round(years * 12), 1);
  const monthlyRate = annualRate / 100 / 12;
  const growth = (1 + monthlyRate) ** months;
  const monthly =
    monthlyRate === 0
      ? amount / months
      : (amount * monthlyRate * growth) / (growth - 1);
  const total = monthly * months;
  const interest = total - amount;

  return {
    monthly,
    total,
    interest,
    interestShare: total > 0 ? interest / total : 0,
  };
}

export type MortgageRepaymentInput = {
  /** Purchase price of the property. */
  propertyPrice: number;
  /** Deposit paid up front. */
  deposit: number;
  annualRate: number;
  years: number;
};

export type MortgageRepaymentResult = MortgageResult & {
  /** Amount borrowed after the deposit is taken off. */
  loanAmount: number;
  /** Deposit actually applied, capped at the property price. */
  deposit: number;
  /** Deposit as a share of the property price (0–1). */
  depositShare: number;
  /** Loan as a share of the property price (0–1). */
  loanToValue: number;
};

/**
 * Estimate mortgage repayments from a property price and deposit. The deposit
 * is capped at the property price so the loan can never go negative.
 */
export function calculateMortgageRepayments({
  propertyPrice,
  deposit,
  annualRate,
  years,
}: MortgageRepaymentInput): MortgageRepaymentResult {
  const price = Math.max(propertyPrice, 0);
  const appliedDeposit = Math.min(Math.max(deposit, 0), price);
  const loanAmount = price - appliedDeposit;
  const mortgage = calculateMortgage({
    amount: loanAmount,
    annualRate: Math.max(annualRate, 0),
    years,
  });

  return {
    ...mortgage,
    loanAmount,
    deposit: appliedDeposit,
    depositShare: price > 0 ? appliedDeposit / price : 0,
    loanToValue: price > 0 ? loanAmount / price : 0,
  };
}

export type AmortizationRow = {
  /** Payment number, starting at 1. */
  month: number;
  /** Year of the term this payment falls in, starting at 1. */
  year: number;
  /** Amount paid this month. */
  payment: number;
  /** Interest portion of the payment. */
  interest: number;
  /** Capital portion of the payment. */
  principal: number;
  /** Balance remaining after the payment. */
  balance: number;
};

export type AmortizationSchedule = {
  rows: AmortizationRow[];
  /** Total paid across all rows. */
  totalPaid: number;
  /** Total interest charged across all rows. */
  totalInterest: number;
  /** Total capital repaid across all rows. */
  totalPrincipal: number;
};

/**
 * Build a month-by-month amortisation schedule for a repayment mortgage.
 * The final payment is adjusted so the balance closes at exactly zero.
 */
export function calculateAmortizationSchedule({
  amount,
  annualRate,
  years,
}: MortgageInput): AmortizationSchedule {
  const loanAmount = Math.max(Number.isFinite(amount) ? amount : 0, 0);
  const safeRate = Math.max(Number.isFinite(annualRate) ? annualRate : 0, 0);
  const safeYears = Math.max(Number.isFinite(years) ? years : 0, 0);
  const months = Math.max(Math.round(safeYears * 12), 1);

  if (loanAmount === 0) {
    return { rows: [], totalPaid: 0, totalInterest: 0, totalPrincipal: 0 };
  }

  const { monthly } = calculateMortgage({
    amount: loanAmount,
    annualRate: safeRate,
    years: months / 12,
  });
  const monthlyRate = safeRate / 100 / 12;

  const rows: AmortizationRow[] = [];
  let balance = loanAmount;
  let totalPaid = 0;
  let totalInterest = 0;
  let totalPrincipal = 0;

  for (let month = 1; month <= months; month += 1) {
    const interest = balance * monthlyRate;
    let principal = monthly - interest;
    let payment = monthly;

    // Clear any remaining balance on the last payment so rounding cannot
    // leave a tiny residual balance behind.
    if (month === months || principal >= balance) {
      principal = balance;
      payment = principal + interest;
    }

    balance = Math.max(balance - principal, 0);
    totalPaid += payment;
    totalInterest += interest;
    totalPrincipal += principal;

    rows.push({
      month,
      year: Math.ceil(month / 12),
      payment,
      interest,
      principal,
      balance,
    });

    if (balance === 0) {
      break;
    }
  }

  return { rows, totalPaid, totalInterest, totalPrincipal };
}

export type GrowthPoint = {
  /** Axis label, e.g. `5y`. */
  label: string;
  /** Money contributed so far. */
  contributions: number;
  /** Interest earned so far. */
  interest: number;
  /** Total balance at this point. */
  balance: number;
};

export type CompoundInput = {
  principal: number;
  monthlyContribution: number;
  annualRate: number;
  years: number;
};

export type CompoundResult = {
  points: GrowthPoint[];
  balance: number;
  contributions: number;
  interest: number;
  /** Interest as a share of the final balance (0–1). */
  interestShare: number;
};

/**
 * Project compound growth with monthly compounding and monthly contributions.
 * Returns a year-by-year series so the result can be charted.
 */
export function calculateCompoundGrowth({
  principal,
  monthlyContribution,
  annualRate,
  years,
}: CompoundInput): CompoundResult {
  const monthlyRate = annualRate / 100 / 12;
  const totalMonths = Math.max(Math.round(years * 12), 1);

  const points: GrowthPoint[] = [
    {
      label: "Start",
      contributions: principal,
      interest: 0,
      balance: principal,
    },
  ];

  let balance = principal;
  let contributions = principal;

  for (let month = 1; month <= totalMonths; month += 1) {
    balance = balance * (1 + monthlyRate) + monthlyContribution;
    contributions += monthlyContribution;

    if (month % 12 === 0 || month === totalMonths) {
      points.push({
        label: `${Math.ceil(month / 12)}y`,
        contributions: Math.round(contributions),
        interest: Math.round(balance - contributions),
        balance: Math.round(balance),
      });
    }
  }

  const interest = balance - contributions;

  return {
    points,
    balance,
    contributions,
    interest,
    interestShare: balance > 0 ? interest / balance : 0,
  };
}
