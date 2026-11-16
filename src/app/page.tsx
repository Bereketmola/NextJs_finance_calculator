import type { Metadata } from "next";
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  CheckIcon,
  ClockIcon,
  LandmarkIcon,
  MenuIcon,
  PiggyBankIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TargetIcon,
  WalletIcon,
  ZapIcon,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CompoundInterestCalculator } from "@/components/compound-interest-calculator";
import { HeroPreview } from "@/components/hero-preview";
import { MortgageCalculator } from "@/components/mortgage-calculator";

export const metadata: Metadata = {
  title: "FinWise — Mortgage & Compound Interest Calculators",
  description:
    "Free, simple tools to estimate your mortgage repayments and project how your savings grow with compound interest. No sign-up required.",
};

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Calculators", href: "#calculators" },
  { label: "Why FinWise", href: "#why" },
  { label: "FAQ", href: "#faq" },
];

const mortgageBenefits = [
  {
    title: "Know your monthly repayment",
    description:
      "See exactly what you would pay each month before you speak to a lender.",
  },
  {
    title: "Compare rates and terms",
    description:
      "Move the interest rate and term to understand the long-term cost of borrowing.",
  },
  {
    title: "Understand the true cost",
    description:
      "Total interest and the amount repaid are shown alongside your monthly figure.",
  },
];

const compoundBenefits = [
  {
    title: "Watch growth compound",
    description:
      "See how interest on interest builds up year after year, not just once.",
  },
  {
    title: "Test your plan",
    description:
      "Change the amount, contribution or timeframe to find a plan that fits.",
  },
  {
    title: "See contributions vs growth",
    description:
      "Split your final balance into what you paid in and what your money earned.",
  },
];

const reasons = [
  {
    title: "Simple by design",
    description:
      "Clear inputs, instant results and no finance jargon to slow you down.",
    icon: SparklesIcon,
  },
  {
    title: "Fast and reliable",
    description:
      "Results update as you type, using standard financial formulas.",
    icon: ZapIcon,
  },
  {
    title: "Built for decisions",
    description:
      "Turn guesses into insight so you can plan with real confidence.",
    icon: TargetIcon,
  },
  {
    title: "Free, always",
    description:
      "No sign-up, no limits and no cost to use any of the calculators.",
    icon: PiggyBankIcon,
  },
];

const faqs = [
  {
    question: "Are the calculators free to use?",
    answer:
      "Yes. Both calculators are completely free, with no sign-up and no limit on how many times you use them.",
  },
  {
    question: "How accurate are the results?",
    answer:
      "They use the standard formulas that lenders and financial planners rely on, so they are a solid guide for planning. Final offers still depend on fees, your circumstances and the provider you choose.",
  },
  {
    question: "What is compound interest?",
    answer:
      "Compound interest is interest earned on both your original money and on the interest it has already earned. Over long periods, that snowball effect can make a big difference to your balance.",
  },
  {
    question: "Do you store the numbers I enter?",
    answer:
      "No. Everything is calculated instantly in your browser, so your figures never leave your device.",
  },
  {
    question: "Can I rely on these figures for a real application?",
    answer:
      "Use them to understand affordability and compare scenarios. When you are ready to apply, your lender or adviser will confirm the exact numbers.",
  },
];

function Logo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-2 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
        <LandmarkIcon className="size-4.5" />
      </span>
      <span className="font-heading text-lg font-semibold tracking-tight">
        FinWise
      </span>
    </a>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              variant="ghost"
              render={<a href={link.href} />}
              nativeButton={false}
            >
              {link.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            className="hidden sm:inline-flex"
            render={<a href="#calculators" />}
            nativeButton={false}
          >
            Explore calculators
            <ArrowRightIcon data-icon="inline-end" />
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="outline" size="icon" className="md:hidden" />
              }
            >
              <MenuIcon />
              <span className="sr-only">Open navigation menu</span>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
                <SheetDescription className="sr-only">
                  Site navigation links
                </SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    render={
                      <a
                        href={link.href}
                        className="flex items-center rounded-lg px-3 py-2 text-sm font-medium text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                      />
                    }
                    nativeButton={false}
                  >
                    {link.label}
                  </SheetClose>
                ))}
              </nav>
              <SheetFooter>
                <Button render={<a href="#calculators" />} nativeButton={false}>
                  Explore calculators
                  <ArrowRightIcon data-icon="inline-end" />
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
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

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        <div className="flex flex-col items-start gap-6">
          <Badge variant="secondary">
            <SparklesIcon data-icon="inline-start" />
            Smarter financial planning
          </Badge>

          <h1
            id="hero-heading"
            className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Plan your money with <span className="text-brand">confidence</span>.
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            Two clear, powerful calculators for the decisions that matter most.
            Estimate your mortgage repayments and watch your savings grow with
            compound interest — in seconds.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              render={<a href="#calculators" />}
              nativeButton={false}
            >
              Explore the calculators
              <ArrowRightIcon data-icon="inline-end" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={<a href="#mortgage" />}
              nativeButton={false}
            >
              Try the mortgage calculator
            </Button>
          </div>

          <ul className="flex flex-wrap gap-2">
            {["No sign-up needed", "Free to use", "Instant results"].map(
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

        <HeroPreview />
      </div>
    </section>
  );
}

function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  align = "start",
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  align?: "start" | "center";
}) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto flex max-w-2xl flex-col items-center gap-4 text-center"
          : "flex max-w-2xl flex-col gap-4"
      }
    >
      <Badge variant="outline">{eyebrow}</Badge>
      <h2
        id={id}
        className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </h2>
      <p className="text-lg text-muted-foreground">{description}</p>
    </div>
  );
}

function BenefitList({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.title} className="flex items-start gap-3">
          <CheckIcon className="mt-0.5 size-4 shrink-0 text-brand" />
          <div className="flex flex-col gap-0.5">
            <span className="font-medium">{item.title}</span>
            <span className="text-sm text-muted-foreground">
              {item.description}
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Calculators() {
  return (
    <section
      id="calculators"
      aria-labelledby="calculators-heading"
      className="bg-muted/30 py-20 sm:py-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:gap-24 lg:px-8">
        <SectionHeading
          id="calculators-heading"
          eyebrow="Calculators"
          title="Two tools for the decisions that shape your finances."
          description="Estimate repayments and project growth in seconds — no spreadsheets, no sign-up."
          align="center"
        />

        <div
          id="mortgage"
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div className="flex flex-col gap-6">
            <Badge variant="secondary">
              <WalletIcon data-icon="inline-start" />
              Mortgage repayments
            </Badge>
            <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              Know your monthly repayment before you commit.
            </h3>
            <p className="text-muted-foreground">
              A mortgage is likely the biggest commitment you will ever make.
              See how the loan amount, interest rate and term combine to shape
              what you pay every month — and over the life of the loan.
            </p>
            <BenefitList items={mortgageBenefits} />
            <div>
              <Button
                render={<a href="#mortgage-calculator" />}
                nativeButton={false}
              >
                Estimate my repayment
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </div>
          </div>

          <div id="mortgage-calculator">
            <MortgageCalculator />
          </div>
        </div>

        <div
          id="compound"
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <div className="flex flex-col gap-6">
            <Badge variant="secondary">
              <TargetIcon data-icon="inline-start" />
              Compound interest
            </Badge>
            <h3 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
              Watch small, regular contributions grow over time.
            </h3>
            <p className="text-muted-foreground">
              Compound interest rewards patience. Adjust your starting amount,
              monthly contribution, rate and timeframe to see how your savings
              could build up — and how much of it is growth rather than money
              you paid in.
            </p>
            <BenefitList items={compoundBenefits} />
            <div>
              <Button
                render={<a href="#compound-calculator" />}
                nativeButton={false}
              >
                Project my savings
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </div>
          </div>

          <div id="compound-calculator" className="lg:order-first">
            <CompoundInterestCalculator />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyFinWise() {
  return (
    <section id="why" aria-labelledby="why-heading" className="py-20 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="why-heading"
          eyebrow="Why FinWise"
          title="Built to make financial planning feel simple."
          description="No jargon, no noise and no cost — just the numbers that help you make a confident decision."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card key={reason.title}>
                <CardHeader>
                  <span className="grid size-10 place-items-center rounded-lg bg-brand/10 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <CardTitle className="mt-2">{reason.title}</CardTitle>
                  <CardDescription>{reason.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 rounded-2xl bg-muted/50 p-8 sm:grid-cols-3 sm:p-10">
          {[
            {
              icon: ShieldCheckIcon,
              value: "100%",
              label: "Private — calculated in your browser",
            },
            {
              icon: ClockIcon,
              value: "Instant",
              label: "Results update as you adjust",
            },
            {
              icon: BadgeCheckIcon,
              value: "Free",
              label: "No account, no limits, no cost",
            },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-start gap-4">
                <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-background text-brand ring-1 ring-foreground/10">
                  <Icon className="size-5" />
                </span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xl font-semibold tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-muted/30 py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQ"
          title="Questions, answered."
          description="Everything you need to know before you start planning."
        />

        <Accordion defaultValue={["faq-0"]}>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`faq-${index}`}>
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

function FinalCta() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-primary px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-brand/40 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-16 size-72 rounded-full bg-brand/20 blur-3xl"
        />

        <div className="relative flex flex-col items-center gap-5">
          <Badge variant="secondary">Start planning today</Badge>
          <h2
            id="cta-heading"
            className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Your financial future starts with a better plan.
          </h2>
          <p className="max-w-xl text-primary-foreground/70">
            Run the numbers, compare your options and move forward with a clear
            picture of what comes next.
          </p>
          <Button
            size="lg"
            variant="secondary"
            render={<a href="#calculators" />}
            nativeButton={false}
          >
            Explore the calculators
            <ArrowRightIcon data-icon="inline-end" />
          </Button>
          <p className="text-sm text-primary-foreground/60">
            Free to use. No account required.
          </p>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  const footerLinks = [
    { label: "Mortgage repayment calculator", href: "#mortgage" },
    { label: "Compound interest calculator", href: "#compound" },
  ];

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="flex max-w-xs flex-col gap-3">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Simple, powerful financial tools for clearer decisions — from
              mortgage repayments to long-term growth.
            </p>
          </div>

          <nav aria-label="Navigate" className="flex flex-col gap-3">
            <h2 className="text-sm font-medium">Navigate</h2>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Calculators" className="flex flex-col gap-3">
            <h2 className="text-sm font-medium">Calculators</h2>
            <ul className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="rounded text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="text-sm text-muted-foreground">
            © 2026 FinWise. All rights reserved.
          </p>
          <a
            href="#home"
            className="rounded text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
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
        <Calculators />
        <WhyFinWise />
        <Faq />
        <FinalCta />
      </main>

      <SiteFooter />
    </div>
  );
}
