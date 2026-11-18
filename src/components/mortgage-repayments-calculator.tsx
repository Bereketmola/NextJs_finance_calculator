"use client";

import { useMemo, useState } from "react";
import { BadgeCheckIcon, CalculatorIcon, RotateCcwIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Progress,
  ProgressLabel,
  ProgressValue,
} from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { AmortizationSchedule } from "@/components/amortization-schedule";
import { calculateMortgageRepayments } from "@/lib/finance";
import { formatCurrency, formatPercent } from "@/lib/format";

const DEFAULTS = {
  propertyPrice: "400000",
  deposit: "80000",
  rate: "5.5",
  term: "30",
};

const LIMITS = {
  rate: { min: 0, max: 20 },
  term: { min: 1, max: 40 },
};

const NUMBER_INPUT_CLASS =
  "h-10 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none";

function parseNumber(value: string): number {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function normalize(
  value: string,
  min: number,
  max: number,
  fallback: number,
): string {
  const parsed = Number.parseFloat(value);
  if (!Number.isFinite(parsed)) {
    return String(fallback);
  }
  return String(clamp(parsed, min, max));
}

export function MortgageRepaymentsCalculator() {
  const [propertyPrice, setPropertyPrice] = useState(DEFAULTS.propertyPrice);
  const [deposit, setDeposit] = useState(DEFAULTS.deposit);
  const [rate, setRate] = useState(DEFAULTS.rate);
  const [term, setTerm] = useState(DEFAULTS.term);

  const priceValue = Math.max(parseNumber(propertyPrice), 0);
  const parsedDeposit = Math.max(parseNumber(deposit), 0);
  const parsedRate = parseNumber(rate);
  const parsedTerm = parseNumber(term);

  const rateValue = clamp(parsedRate, LIMITS.rate.min, LIMITS.rate.max);
  const termValue = clamp(parsedTerm, LIMITS.term.min, LIMITS.term.max);

  const depositTooHigh = priceValue > 0 && parsedDeposit > priceValue;
  const rateOutOfRange =
    parsedRate < LIMITS.rate.min || parsedRate > LIMITS.rate.max;
  const termOutOfRange =
    parsedTerm < LIMITS.term.min || parsedTerm > LIMITS.term.max;

  const result = useMemo(
    () =>
      calculateMortgageRepayments({
        propertyPrice: priceValue,
        deposit: parsedDeposit,
        annualRate: rateValue,
        years: termValue,
      }),
    [priceValue, parsedDeposit, rateValue, termValue],
  );

  const interestPercent = Math.round(result.interestShare * 100);
  const depositPercent = Math.round(result.depositShare * 100);
  const loanToValuePercent = Math.round(result.loanToValue * 100);
  const numberOfPayments = Math.round(termValue * 12);
  const termLabel = `${termValue} ${termValue === 1 ? "year" : "years"}`;

  function reset() {
    setPropertyPrice(DEFAULTS.propertyPrice);
    setDeposit(DEFAULTS.deposit);
    setRate(DEFAULTS.rate);
    setTerm(DEFAULTS.term);
  }

  return (
    <>
      <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <Card>
          <CardHeader>
            <CardTitle>Your mortgage details</CardTitle>
            <CardDescription>
              Enter your figures — the estimate updates as you type.
            </CardDescription>
            <CardAction>
              <Badge variant="secondary">
                <CalculatorIcon data-icon="inline-start" />
                Home loan
              </Badge>
            </CardAction>
          </CardHeader>

          <CardContent>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="mortgage-property-price">
                  Property price
                </FieldLabel>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 flex w-7 items-center justify-center text-sm text-muted-foreground"
                  >
                    $
                  </span>
                  <Input
                    id="mortgage-property-price"
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={1000}
                    value={propertyPrice}
                    onChange={(event) => setPropertyPrice(event.target.value)}
                    onBlur={() =>
                      setPropertyPrice(
                        normalize(propertyPrice, 0, 10_000_000, 0),
                      )
                    }
                    className={`${NUMBER_INPUT_CLASS} pl-7 tabular-nums`}
                    aria-describedby="mortgage-property-price-description"
                  />
                </div>
                <FieldDescription id="mortgage-property-price-description">
                  The purchase price of the property.
                </FieldDescription>
              </Field>

              <Field data-invalid={depositTooHigh || undefined}>
                <FieldLabel htmlFor="mortgage-deposit">Deposit</FieldLabel>
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 flex w-7 items-center justify-center text-sm text-muted-foreground"
                  >
                    $
                  </span>
                  <Input
                    id="mortgage-deposit"
                    type="number"
                    inputMode="decimal"
                    min={0}
                    step={1000}
                    value={deposit}
                    onChange={(event) => setDeposit(event.target.value)}
                    onBlur={() =>
                      setDeposit(
                        normalize(
                          deposit,
                          0,
                          priceValue,
                          Number(DEFAULTS.deposit),
                        ),
                      )
                    }
                    className={`${NUMBER_INPUT_CLASS} pl-7 tabular-nums`}
                    aria-invalid={depositTooHigh || undefined}
                    aria-describedby={
                      depositTooHigh
                        ? "mortgage-deposit-error"
                        : "mortgage-deposit-description"
                    }
                  />
                </div>
                {depositTooHigh ? (
                  <FieldError id="mortgage-deposit-error">
                    Your deposit cannot be more than the property price.
                  </FieldError>
                ) : (
                  <FieldDescription id="mortgage-deposit-description">
                    {formatPercent(depositPercent, 0)} of the property price.
                  </FieldDescription>
                )}
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field data-invalid={rateOutOfRange || undefined}>
                  <FieldLabel htmlFor="mortgage-interest-rate">
                    Interest rate
                  </FieldLabel>
                  <div className="relative">
                    <Input
                      id="mortgage-interest-rate"
                      type="number"
                      inputMode="decimal"
                      min={LIMITS.rate.min}
                      max={LIMITS.rate.max}
                      step={0.1}
                      value={rate}
                      onChange={(event) => setRate(event.target.value)}
                      onBlur={() =>
                        setRate(
                          normalize(
                            rate,
                            LIMITS.rate.min,
                            LIMITS.rate.max,
                            Number(DEFAULTS.rate),
                          ),
                        )
                      }
                      className={`${NUMBER_INPUT_CLASS} pr-7 tabular-nums`}
                      aria-invalid={rateOutOfRange || undefined}
                      aria-describedby={
                        rateOutOfRange
                          ? "mortgage-interest-rate-error"
                          : "mortgage-interest-rate-description"
                      }
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center text-sm text-muted-foreground"
                    >
                      %
                    </span>
                  </div>
                  {rateOutOfRange ? (
                    <FieldError id="mortgage-interest-rate-error">
                      Enter a rate between 0% and 20%.
                    </FieldError>
                  ) : (
                    <FieldDescription id="mortgage-interest-rate-description">
                      The annual interest rate.
                    </FieldDescription>
                  )}
                </Field>

                <Field data-invalid={termOutOfRange || undefined}>
                  <FieldLabel htmlFor="mortgage-term">Mortgage term</FieldLabel>
                  <div className="relative">
                    <Input
                      id="mortgage-term"
                      type="number"
                      inputMode="numeric"
                      min={LIMITS.term.min}
                      max={LIMITS.term.max}
                      step={1}
                      value={term}
                      onChange={(event) => setTerm(event.target.value)}
                      onBlur={() =>
                        setTerm(
                          normalize(
                            term,
                            LIMITS.term.min,
                            LIMITS.term.max,
                            Number(DEFAULTS.term),
                          ),
                        )
                      }
                      className={`${NUMBER_INPUT_CLASS} pr-12 tabular-nums`}
                      aria-invalid={termOutOfRange || undefined}
                      aria-describedby={
                        termOutOfRange
                          ? "mortgage-term-error"
                          : "mortgage-term-description"
                      }
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-y-0 right-2.5 flex items-center text-sm text-muted-foreground"
                    >
                      years
                    </span>
                  </div>
                  {termOutOfRange ? (
                    <FieldError id="mortgage-term-error">
                      Enter a term between 1 and 40 years.
                    </FieldError>
                  ) : (
                    <FieldDescription id="mortgage-term-description">
                      How long you will take to repay.
                    </FieldDescription>
                  )}
                </Field>
              </div>
            </FieldGroup>
          </CardContent>

          <CardFooter className="justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              A repayment mortgage pays off capital and interest together.
            </p>
            <Button variant="ghost" size="sm" type="button" onClick={reset}>
              <RotateCcwIcon data-icon="inline-start" />
              Reset
            </Button>
          </CardFooter>
        </Card>

        <Card className="lg:sticky lg:top-20">
          <CardHeader>
            <CardTitle>Estimated repayments</CardTitle>
            <CardDescription>
              Based on a constant interest rate over the full term.
            </CardDescription>
            <CardAction>
              <Badge variant="secondary">
                <BadgeCheckIcon data-icon="inline-start" />
                Instant
              </Badge>
            </CardAction>
          </CardHeader>

          <CardContent className="flex flex-col gap-6">
            <div className="flex flex-col gap-1" aria-live="polite">
              <span className="text-sm text-muted-foreground">
                Monthly repayment
              </span>
              <span className="text-4xl font-semibold tracking-tight tabular-nums">
                {formatCurrency(result.monthly)}
              </span>
              <span className="text-sm text-muted-foreground">
                {termLabel} at {formatPercent(rateValue)} interest
              </span>
            </div>

            <Separator />

            <dl className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <dt className="text-sm text-muted-foreground">
                  Total interest
                </dt>
                <dd className="text-base font-medium tabular-nums">
                  {formatCurrency(result.interest)}
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-sm text-muted-foreground">
                  Total amount repayable
                </dt>
                <dd className="text-base font-medium tabular-nums">
                  {formatCurrency(result.total)}
                </dd>
              </div>
            </dl>

            <Progress
              value={interestPercent}
              format={{ maximumFractionDigits: 0 }}
            >
              <ProgressLabel>Interest share of total repayable</ProgressLabel>
              <ProgressValue>{() => `${interestPercent}%`}</ProgressValue>
            </Progress>

            <Separator />

            <dl className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <dt className="text-sm text-muted-foreground">Loan amount</dt>
                <dd className="text-sm font-medium tabular-nums">
                  {formatCurrency(result.loanAmount)}
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-sm text-muted-foreground">Deposit</dt>
                <dd className="text-sm font-medium tabular-nums">
                  {formatCurrency(result.deposit)} ({depositPercent}%)
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-sm text-muted-foreground">Loan-to-value</dt>
                <dd className="text-sm font-medium tabular-nums">
                  {loanToValuePercent}%
                </dd>
              </div>
              <div className="flex flex-col gap-1">
                <dt className="text-sm text-muted-foreground">Payments</dt>
                <dd className="text-sm font-medium tabular-nums">
                  {numberOfPayments} monthly
                </dd>
              </div>
            </dl>
          </CardContent>

          <CardFooter>
            <p className="text-xs text-muted-foreground">
              Estimates only. Lender fees, insurance and taxes are not included.
            </p>
          </CardFooter>
        </Card>
      </div>

      <AmortizationSchedule
        loanAmount={result.loanAmount}
        annualRate={rateValue}
        years={termValue}
      />
    </>
  );
}
