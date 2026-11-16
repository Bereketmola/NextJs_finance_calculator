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
