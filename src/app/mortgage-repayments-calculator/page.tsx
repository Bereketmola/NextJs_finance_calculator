import type { Metadata } from "next";
import {
  CheckIcon,
  HouseIcon,
  PercentIcon,
  ReceiptTextIcon,
  SparklesIcon,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MortgageRepaymentsCalculator } from "@/components/mortgage-repayments-calculator";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Mortgage Repayments Calculator",
  description:
    "Estimate your monthly mortgage repayments from the property price, deposit, interest rate and term. Explore a month-by-month amortisation schedule of interest, capital and the remaining balance.",
};

const steps = [
  {
    title: "Start with the property",
    description:
      "Enter the purchase price and the deposit you plan to put down. The amount you borrow is simply the difference between the two.",
    icon: HouseIcon,
  },
  {
    title: "Set the rate and term",
    description:
      "Add the annual interest rate your lender has quoted and choose how many years you want to spread the repayments over.",
    icon: PercentIcon,
  },
  {
    title: "Read the full breakdown",
    description:
      "See your estimated monthly repayment, then follow the amortisation schedule to see how each payment splits between interest and capital.",
    icon: ReceiptTextIcon,
  },
];

const faqs = [
  {
    question: "What is a mortgage repayment?",
    answer:
      "A repayment mortgage is paid back in monthly instalments that cover both the interest charged on the loan and part of the original capital. By the end of the term, the loan is fully repaid.",
  },
  {
    question: "How is the monthly repayment calculated?",
    answer:
      "The calculator uses the standard amortisation formula, which spreads the loan and its interest evenly across every month of the term. Because the rate is fixed in the calculation, the monthly figure stays the same while the balance slowly falls.",
  },
  {
    question: "What is an amortisation schedule?",
    answer:
      "An amortisation schedule lists every monthly payment over the life of the loan and splits each one into interest and capital. It also shows the balance remaining after each payment, so you can see how the loan is paid down year by year.",
  },
  {
    question: "Does a bigger deposit reduce my repayments?",
    answer:
      "Yes. A larger deposit reduces the amount you need to borrow, which lowers both your monthly repayment and the total interest charged over the term. Change the deposit field to see the difference instantly.",
  },
  {
    question: "Should I choose a shorter mortgage term?",
    answer:
      "A shorter term usually means higher monthly repayments but less interest overall. A longer term spreads the cost and lowers the monthly figure, but you will pay more interest across the life of the loan.",
  },
  {
    question: "Are these figures guaranteed?",
    answer:
      "No. They are estimates based on a constant interest rate and the figures you enter. Lender fees, insurance, taxes and changes in interest rates are not included. Your lender or adviser will confirm the final numbers.",
  },
];

function Hero() {
  return (
    <section
      aria-labelledby="mortgage-hero-heading"
      className="relative overflow-hidden border-b border-border/60"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 60% 55% at 50% 0%, black 10%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 55% at 50% 0%, black 10%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-[34rem] -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="flex max-w-3xl flex-col items-start gap-5">
          <Badge variant="secondary">
            <SparklesIcon data-icon="inline-start" />
            Mortgage repayments
          </Badge>

          <h1
            id="mortgage-hero-heading"
            className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Mortgage repayments calculator
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Enter your property price, deposit, interest rate and mortgage term
            to estimate your monthly repayments — and see exactly what the loan
            will cost you over time.
          </p>

          <ul className="flex flex-wrap gap-2">
            {["No sign-up needed", "Free to use", "Updates instantly"].map(
              (item) => (
                <li key={item}>
                  <Badge variant="outline">
                    <CheckIcon data-icon="inline-start" />
                    {item}
                  </Badge>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

function CalculatorSection() {
  return (
    <section
      id="calculator"
      aria-labelledby="mortgage-calculator-heading"
      className="bg-muted/30 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2">
          <h2
            id="mortgage-calculator-heading"
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Calculate your repayments
          </h2>
          <p className="text-lg text-muted-foreground">
            Change any value to compare scenarios — no need to press calculate.
          </p>
        </div>

        <MortgageRepaymentsCalculator />
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section aria-labelledby="how-it-works-heading" className="py-20 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <Badge variant="outline">How it works</Badge>
          <h2
            id="how-it-works-heading"
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Three numbers that shape your mortgage.
          </h2>
          <p className="text-lg text-muted-foreground">
            A repayment mortgage is built from the amount you borrow, the rate
            you pay and the time you take to pay it back.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.title}>
                <CardHeader>
                  <span className="grid size-10 place-items-center rounded-lg bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="mt-2">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="rounded-2xl bg-muted/50 p-8 sm:p-10">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-medium text-foreground">The maths: </span>
            monthly repayments use the standard amortisation formula,
            <span className="font-mono text-foreground">
              {" "}
              M = P × r(1 + r)ⁿ / ((1 + r)ⁿ − 1)
            </span>
            , where P is the loan amount, r is the monthly interest rate and n
            is the number of monthly payments.
          </p>
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section
      aria-labelledby="mortgage-faq-heading"
      className="bg-muted/30 py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div className="flex max-w-2xl flex-col gap-4">
          <Badge variant="outline">FAQ</Badge>
          <h2
            id="mortgage-faq-heading"
            className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Mortgage questions, answered.
          </h2>
          <p className="text-lg text-muted-foreground">
            The essentials to keep in mind before you compare offers.
          </p>
        </div>

        <Accordion defaultValue={["mortgage-faq-0"]}>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`mortgage-faq-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-muted-foreground">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default function MortgageRepaymentsCalculatorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main-content" className="flex-1">
        <Hero />
        <CalculatorSection />
        <HowItWorks />
        <Faq />
      </main>

      <SiteFooter />
    </div>
  );
}
