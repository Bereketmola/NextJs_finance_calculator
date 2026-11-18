"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { HouseIcon } from "lucide-react";

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
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { calculateMortgage } from "@/lib/finance";
import { formatCurrency, formatPercent } from "@/lib/format";

const DEFAULTS = {
  amount: 320_000,
  rate: 5.5,
  years: 30,
};

export function MortgageCalculator() {
  const [amount, setAmount] = useState(DEFAULTS.amount);
  const [rate, setRate] = useState(DEFAULTS.rate);
  const [years, setYears] = useState(DEFAULTS.years);

  const result = useMemo(
    () => calculateMortgage({ amount, annualRate: rate, years }),
    [amount, rate, years],
  );

  const interestPercent = Math.round(result.interestShare * 100);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Mortgage repayment calculator</CardTitle>
        <CardDescription>
          Adjust the sliders to see how your monthly repayment changes.
        </CardDescription>
        <CardAction>
          <Badge variant="secondary">
            <HouseIcon data-icon="inline-start" />
            Home loan
          </Badge>
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="mortgage-amount">
              Loan amount
              <Badge variant="secondary" className="ml-auto">
                {formatCurrency(amount)}
              </Badge>
            </FieldLabel>
            <Slider
              id="mortgage-amount"
              value={[amount]}
              onValueChange={(value) => setAmount((value as number[])[0])}
              min={50_000}
              max={1_500_000}
              step={5_000}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="mortgage-rate">
              Interest rate
              <Badge variant="secondary" className="ml-auto">
                {formatPercent(rate)}
              </Badge>
            </FieldLabel>
            <Slider
              id="mortgage-rate"
              value={[rate]}
              onValueChange={(value) => setRate((value as number[])[0])}
              min={0.5}
              max={12}
              step={0.1}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="mortgage-term">
              Repayment term
              <Badge variant="secondary" className="ml-auto">
                {years} years
              </Badge>
            </FieldLabel>
            <Slider
              id="mortgage-term"
              value={[years]}
              onValueChange={(value) => setYears((value as number[])[0])}
              min={5}
              max={40}
              step={1}
            />
          </Field>
        </FieldGroup>

        <Separator />

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">
              Estimated monthly repayment
            </span>
            <span className="text-3xl font-semibold tracking-tight tabular-nums">
              {formatCurrency(result.monthly)}
            </span>
          </div>

          <Progress
            value={interestPercent}
            format={{ maximumFractionDigits: 0 }}
          >
            <ProgressLabel>Interest share of total cost</ProgressLabel>
            <ProgressValue>{() => `${interestPercent}%`}</ProgressValue>
          </Progress>

          <dl className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <dt className="text-sm text-muted-foreground">Total interest</dt>
              <dd className="text-base font-medium tabular-nums">
                {formatCurrency(result.interest)}
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-sm text-muted-foreground">Total repaid</dt>
              <dd className="text-base font-medium tabular-nums">
                {formatCurrency(result.total)}
              </dd>
            </div>
          </dl>
        </div>
      </CardContent>

      <CardFooter className="justify-between gap-3">
        <p className="text-xs text-muted-foreground">
          Estimates only. Lender fees, insurance and taxes are not included.
        </p>
        <Link
          href="/mortgage-repayments-calculator#amortization"
          className="shrink-0 rounded text-xs font-medium text-brand outline-none transition-colors hover:text-brand/80 focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Full schedule
        </Link>
      </CardFooter>
    </Card>
  );
}
