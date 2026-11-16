"use client";

import { useMemo, useState } from "react";
import { TrendingUpIcon } from "lucide-react";

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
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { GrowthChart } from "@/components/growth-chart";
import { calculateCompoundGrowth } from "@/lib/finance";
import { formatCurrency, formatPercent } from "@/lib/format";

const DEFAULTS = {
  principal: 10_000,
  monthly: 500,
  rate: 7,
  years: 20,
};

export function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(DEFAULTS.principal);
  const [monthly, setMonthly] = useState(DEFAULTS.monthly);
  const [rate, setRate] = useState(DEFAULTS.rate);
  const [years, setYears] = useState(DEFAULTS.years);

  const result = useMemo(
    () =>
      calculateCompoundGrowth({
        principal,
        monthlyContribution: monthly,
        annualRate: rate,
        years,
      }),
    [principal, monthly, rate, years],
  );

  const growthPercent = Math.round(result.interestShare * 100);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Compound interest calculator</CardTitle>
        <CardDescription>
          See how regular contributions and compound growth add up over time.
        </CardDescription>
        <CardAction>
          <Badge variant="secondary">
            <TrendingUpIcon data-icon="inline-start" />
            Investing
          </Badge>
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="compound-principal">
              Initial investment
              <Badge variant="secondary" className="ml-auto">
                {formatCurrency(principal)}
              </Badge>
            </FieldLabel>
            <Slider
              id="compound-principal"
              value={[principal]}
              onValueChange={(value) => setPrincipal((value as number[])[0])}
              min={1_000}
              max={250_000}
              step={1_000}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="compound-monthly">
              Monthly contribution
              <Badge variant="secondary" className="ml-auto">
                {formatCurrency(monthly)}
              </Badge>
            </FieldLabel>
            <Slider
              id="compound-monthly"
              value={[monthly]}
              onValueChange={(value) => setMonthly((value as number[])[0])}
              min={0}
              max={5_000}
              step={50}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="compound-rate">
              Annual interest rate
              <Badge variant="secondary" className="ml-auto">
                {formatPercent(rate)}
              </Badge>
            </FieldLabel>
            <Slider
              id="compound-rate"
              value={[rate]}
              onValueChange={(value) => setRate((value as number[])[0])}
              min={1}
              max={15}
              step={0.5}
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="compound-years">
              Investment duration
              <Badge variant="secondary" className="ml-auto">
                {years} years
              </Badge>
            </FieldLabel>
            <Slider
              id="compound-years"
              value={[years]}
              onValueChange={(value) => setYears((value as number[])[0])}
              min={1}
              max={40}
              step={1}
            />
          </Field>
        </FieldGroup>

        <Separator />

        <div className="flex flex-col gap-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="flex flex-col gap-1">
              <span className="text-sm text-muted-foreground">
                Projected balance in {years} years
              </span>
              <span className="text-3xl font-semibold tracking-tight tabular-nums">
                {formatCurrency(result.balance)}
              </span>
            </div>
            <Badge variant="secondary">
              <TrendingUpIcon data-icon="inline-start" />
              {growthPercent}% growth
            </Badge>
          </div>

          <GrowthChart data={result.points} />

          <dl className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <dt className="text-sm text-muted-foreground">
                Total contributions
              </dt>
              <dd className="text-base font-medium tabular-nums">
                {formatCurrency(result.contributions)}
              </dd>
            </div>
            <div className="flex flex-col gap-1">
              <dt className="text-sm text-muted-foreground">Interest earned</dt>
              <dd className="text-base font-medium tabular-nums">
                {formatCurrency(result.interest)}
              </dd>
            </div>
          </dl>
        </div>
      </CardContent>

      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Projections assume a constant rate with monthly compounding and do not
          account for fees or inflation.
        </p>
      </CardFooter>
    </Card>
  );
}
