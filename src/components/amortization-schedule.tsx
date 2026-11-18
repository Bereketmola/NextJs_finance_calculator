"use client";

import { useMemo, useState } from "react";
import { CalendarRangeIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { calculateAmortizationSchedule } from "@/lib/finance";
import {
  formatCurrency,
  formatCurrencyPrecise,
  formatPercent,
} from "@/lib/format";

const ALL_YEARS = "all";

type AmortizationScheduleProps = {
  /** Amount borrowed after the deposit. */
  loanAmount: number;
  annualRate: number;
  years: number;
};

export function AmortizationSchedule({
  loanAmount,
  annualRate,
  years,
}: AmortizationScheduleProps) {
  const [selectedYear, setSelectedYear] = useState("1");

  const schedule = useMemo(
    () =>
      calculateAmortizationSchedule({
        amount: loanAmount,
        annualRate,
        years,
      }),
    [loanAmount, annualRate, years],
  );

  const totalYears = Math.max(Math.ceil(schedule.rows.length / 12), 1);
  const isAllYears = selectedYear === ALL_YEARS;
  const selectedYearNumber = Number.parseInt(selectedYear, 10);
  const activeYear =
    isAllYears || (selectedYearNumber >= 1 && selectedYearNumber <= totalYears)
      ? selectedYear
      : "1";

  const visibleRows = isAllYears
    ? schedule.rows
    : schedule.rows.filter((row) => row.year === Number(activeYear));

  const totals = visibleRows.reduce(
    (accumulator, row) => ({
      payment: accumulator.payment + row.payment,
      interest: accumulator.interest + row.interest,
      principal: accumulator.principal + row.principal,
    }),
    { payment: 0, interest: 0, principal: 0 },
  );

  const endingBalance = visibleRows[visibleRows.length - 1]?.balance ?? 0;

  const yearOptions = [
    { value: ALL_YEARS, label: "All years" },
    ...Array.from({ length: totalYears }, (_, index) => {
      const year = index + 1;
      return { value: String(year), label: `Year ${year}` };
    }),
  ];

  const termLabel = `${years} ${years === 1 ? "year" : "years"}`;

  return (
    <Card id="amortization" className="mt-2 scroll-mt-24">
      <CardHeader>
        <CardTitle>Amortisation schedule</CardTitle>
        <CardDescription>
          See how each monthly payment splits between interest and capital as
          the balance falls.
        </CardDescription>
        <CardAction>
          <Badge variant="secondary">
            <CalendarRangeIcon data-icon="inline-start" />
            {formatCurrency(loanAmount)} loan
          </Badge>
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-col gap-4">
        {schedule.rows.length === 0 ? (
          <div className="rounded-lg border border-dashed border-border/70 px-4 py-8 text-center text-sm text-muted-foreground">
            Add a deposit below the property price to see the amortisation
            schedule.
          </div>
        ) : (
          <>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span
                  id="amortization-year-label"
                  className="text-sm text-muted-foreground"
                >
                  Show
                </span>
                <Select
                  items={yearOptions}
                  value={activeYear}
                  onValueChange={(value) => setSelectedYear(String(value))}
                >
                  <SelectTrigger
                    className="w-36 data-[size=default]:h-9"
                    aria-labelledby="amortization-year-label"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {yearOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <p className="text-sm text-muted-foreground tabular-nums">
                {formatCurrency(loanAmount)} at {formatPercent(annualRate)} over{" "}
                {termLabel}
              </p>
            </div>

            <div className="overflow-hidden rounded-lg ring-1 ring-foreground/10 [&_[data-slot=table-container]]:max-h-[26rem]">
              <Table className="min-w-[34rem]">
                <TableCaption className="sr-only">
                  Month-by-month amortisation schedule showing the payment,
                  interest, capital and remaining balance.
                </TableCaption>
                <TableHeader className="[&_th]:sticky [&_th]:top-0 [&_th]:z-10 [&_th]:border-b [&_th]:border-border [&_th]:bg-card">
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="text-left">Month</TableHead>
                    <TableHead className="text-right">Payment</TableHead>
                    <TableHead className="text-right">Interest</TableHead>
                    <TableHead className="text-right">Capital</TableHead>
                    <TableHead className="text-right">Balance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visibleRows.map((row) => (
                    <TableRow key={row.month}>
                      <TableCell className="text-left tabular-nums text-muted-foreground">
                        {row.month}
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {formatCurrencyPrecise(row.payment)}
                      </TableCell>
                      <TableCell className="text-right tabular-nums text-muted-foreground">
                        {formatCurrencyPrecise(row.interest)}
                      </TableCell>
                      <TableCell className="text-right tabular-nums">
                        {formatCurrencyPrecise(row.principal)}
                      </TableCell>
                      <TableCell className="text-right font-medium tabular-nums">
                        {formatCurrencyPrecise(row.balance)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                <TableFooter>
                  <TableRow className="hover:bg-transparent">
                    <TableCell className="text-left">
                      {isAllYears ? "Totals" : `Year ${activeYear}`}
                    </TableCell>
                    <TableCell className="text-right tabular-nums">
                      {formatCurrencyPrecise(totals.payment)}
                    </TableCell>
                    <TableCell className="text-right tabular-nums">
                      {formatCurrencyPrecise(totals.interest)}
                    </TableCell>
                    <TableCell className="text-right tabular-nums">
                      {formatCurrencyPrecise(totals.principal)}
                    </TableCell>
                    <TableCell className="text-right tabular-nums">
                      {formatCurrencyPrecise(endingBalance)}
                    </TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>
          </>
        )}
      </CardContent>

      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Based on a fixed interest rate. Overpayments and lender fees are not
          included.
        </p>
      </CardFooter>
    </Card>
  );
}
