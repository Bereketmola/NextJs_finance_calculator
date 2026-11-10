import type { Metadata } from "next";
import type { SVGProps } from "react";

export const metadata: Metadata = {
  title: "FinWise — Take Control of Your Financial Future",
  description:
    "Simple, powerful tools to plan your mortgage repayments and grow your investments with confidence.",
};

/* -------------------------------------------------------------------------- */
/*                                   Icons                                    */
/* -------------------------------------------------------------------------- */

type IconProps = SVGProps<SVGSVGElement>;

function IconBase({ children, className, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className ?? "h-5 w-5"}
      {...props}
    >
      {children}
    </svg>
  );
}

function ArrowRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </IconBase>
  );
}

function ChevronDownIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m6 9 6 6 6-6" />
    </IconBase>
  );
}

function CheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 6 9 17l-5-5" />
    </IconBase>
  );
}

function HouseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </IconBase>
  );
}

function TrendingUpIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </IconBase>
  );
}

function MenuIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </IconBase>
  );
}

function CloseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </IconBase>
  );
}

function SparklesIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </IconBase>
  );
}

function ZapIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </IconBase>
  );
}

function TargetIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </IconBase>
  );
}

function GiftIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 4.8 0 0 1 12 8a4.8 4.8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </IconBase>
  );
}

function ShieldCheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V6l8-3 8 3z" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Shared UI                                 */
/* -------------------------------------------------------------------------- */

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Calculators", href: "#calculators" },
  { label: "About", href: "#about" },
];

const primaryCta =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_-14px_rgba(4,120,87,0.75)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-[0_20px_36px_-16px_rgba(4,120,87,0.8)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const secondaryCta =
  "group inline-flex items-center justify-center gap-2 rounded-full border border-[#0B1F33]/10 bg-white px-6 py-3.5 text-sm font-semibold text-[#0B1F33] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0B1F33]/20 hover:bg-[#F7F9FB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const navCta =
  "group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-12px_rgba(4,120,87,0.7)] transition-all duration-300 hover:bg-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

const eyebrow =
  "inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-800";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white";

function Logo() {
  return (
    <a
      href="#home"
      className={`group inline-flex items-center gap-2.5 rounded-lg ${focusRing}`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#0B1F33] shadow-[0_8px_20px_-8px_rgba(11,31,51,0.7)] transition-transform duration-300 group-hover:-rotate-3">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="h-5 w-5"
        >
          <path
            d="M6 17v-4"
            stroke="#6EE7B7"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M12 17V9"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
          <path
            d="M18 17V5.5"
            stroke="#6EE7B7"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className="text-[1.15rem] font-semibold tracking-[-0.03em] text-[#0B1F33]">
        FinWise<span className="text-emerald-600">.</span>
      </span>
    </a>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0B1F33]/5 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Logo />

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={link.href === "#home" ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:bg-[#0B1F33]/5 hover:text-[#0B1F33] ${focusRing}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a href="#calculators" className={navCta}>
            Explore Calculators
            <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        <details className="group relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-xl border border-[#0B1F33]/10 bg-white text-[#0B1F33] shadow-sm transition-colors hover:bg-[#F7F9FB] [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Toggle navigation menu</span>
            <MenuIcon className="h-5 w-5 group-open:hidden" />
            <CloseIcon className="hidden h-5 w-5 group-open:block" />
          </summary>

          <div className="absolute right-0 top-[calc(100%+0.65rem)] w-64 rounded-2xl border border-[#0B1F33]/10 bg-white p-2 shadow-[0_24px_60px_-24px_rgba(11,31,51,0.35)]">
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-[#F7F9FB] hover:text-[#0B1F33] ${focusRing}`}
                >
                  {link.label}
                </a>
              ))}
              <a href="#calculators" className={`${navCta} mt-2 w-full`}>
                Explore Calculators
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Hero dashboard                                */
/* -------------------------------------------------------------------------- */

function HeroDashboard() {
  return (
    <div
      role="img"
      aria-label="FinWise dashboard preview showing savings of $48,250 growing 12.4 percent, a projected compound growth chart, a monthly mortgage repayment of $1,846, and a home deposit goal that is 68 percent complete."
      className="relative mx-auto w-full max-w-[33rem] lg:max-w-none"
    >
      <div
        aria-hidden="true"
        className="absolute -inset-8 -z-10 rounded-[3rem] bg-emerald-300/20 blur-3xl"
      />

      <div className="relative z-10 rounded-[2rem] border border-white/80 bg-white/80 p-2.5 shadow-[0_40px_90px_-40px_rgba(11,31,51,0.45)] ring-1 ring-[#0B1F33]/5 backdrop-blur-xl sm:p-3">
        <div className="overflow-hidden rounded-[1.55rem] border border-[#0B1F33]/5 bg-white">
          <div className="border-b border-slate-100 px-5 py-4 sm:px-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Financial overview
                </p>
                <p className="mt-1 text-sm font-semibold text-[#0B1F33]">
                  Your money, in focus
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-700/10 bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-800">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                On track
              </span>
            </div>
          </div>

          <div className="px-5 pb-5 pt-5 sm:px-6 sm:pb-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
              Total savings
            </p>
            <div className="mt-1.5 flex flex-wrap items-baseline gap-3">
              <p className="text-[2rem] font-semibold tracking-[-0.04em] text-[#0B1F33] sm:text-[2.4rem]">
                $48,250
                <span className="text-lg font-medium text-slate-400">.00</span>
              </p>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-800">
                <TrendingUpIcon className="h-3 w-3" />
                12.4%
              </span>
            </div>
            <p className="mt-1 text-[11px] text-slate-500">
              +$5,340 compared with last year
            </p>

            <div className="relative mt-5">
              <svg
                viewBox="0 0 520 170"
                className="h-auto w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="finwise-hero-area"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.26" />
                    <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {[30, 70, 110, 150].map((y) => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="520"
                    y2={y}
                    stroke="#EEF2F6"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                  />
                ))}

                <path
                  d="M0 140 C 35 136, 55 120, 85 123 C 115 126, 140 100, 170 104 C 200 108, 220 82, 250 86 C 280 90, 305 66, 335 70 C 365 74, 390 48, 420 52 C 450 56, 485 32, 520 26 L 520 170 L 0 170 Z"
                  fill="url(#finwise-hero-area)"
                />
                <path
                  d="M0 140 C 35 136, 55 120, 85 123 C 115 126, 140 100, 170 104 C 200 108, 220 82, 250 86 C 280 90, 305 66, 335 70 C 365 74, 390 48, 420 52 C 450 56, 485 32, 520 26"
                  fill="none"
                  stroke="#059669"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="360"
                  y1="28"
                  x2="360"
                  y2="154"
                  stroke="#CBD5E1"
                  strokeWidth="1"
                  strokeDasharray="3 5"
                />
                <circle
                  cx="360"
                  cy="64"
                  r="5.5"
                  fill="#059669"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                />
              </svg>

              <div className="absolute left-[69%] top-[6%] -translate-x-1/2 rounded-lg bg-[#0B1F33] px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg">
                $42,800
              </div>
            </div>

            <div className="mt-2 flex justify-between text-[10px] font-medium text-slate-400">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
            </div>

            <div className="mt-5 rounded-2xl border border-[#0B1F33]/5 bg-[#F8FAFB] p-4">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-medium text-slate-600">
                  Home deposit goal
                </span>
                <span className="font-semibold text-[#0B1F33]">68%</span>
              </div>
              <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-200/80">
                <div className="h-full w-[68%] rounded-full bg-linear-to-r from-emerald-600 to-emerald-400" />
              </div>
              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-500">
                <span>$32,000 saved</span>
                <span>$47,000 target</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-5 top-16 z-20 hidden w-44 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_24px_50px_-20px_rgba(11,31,51,0.35)] ring-1 ring-[#0B1F33]/5 backdrop-blur lg:block">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-[#0B1F33] text-emerald-300">
            <HouseIcon className="h-4 w-4" />
          </span>
          <span className="text-[9px] font-semibold uppercase leading-tight tracking-[0.1em] text-slate-400">
            Monthly
            <br />
            repayment
          </span>
        </div>
        <p className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#0B1F33]">
          $1,846
        </p>
        <p className="mt-0.5 text-[10px] text-slate-500">
          30-year fixed · 4.2%
        </p>
      </div>

      <div className="absolute -bottom-24 -left-8 z-20 hidden w-48 rounded-2xl border border-white/80 bg-white/95 p-4 shadow-[0_24px_50px_-20px_rgba(11,31,51,0.35)] ring-1 ring-[#0B1F33]/5 backdrop-blur lg:block">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              Compound growth
            </p>
            <p className="mt-1.5 text-lg font-semibold tracking-[-0.03em] text-[#0B1F33]">
              +$18,420
            </p>
          </div>
          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-emerald-50 text-emerald-700">
            <TrendingUpIcon className="h-3.5 w-3.5" />
          </span>
        </div>
        <p className="mt-0.5 text-[10px] text-slate-500">
          Projected in 10 years
        </p>
        <div className="mt-3 flex h-9 items-end gap-1.5" aria-hidden="true">
          {[35, 45, 38, 60, 55, 72, 82, 100].map((height, index) => (
            <span
              key={index}
              style={{ height: `${height}%` }}
              className={`flex-1 rounded-sm ${
                index === 7 ? "bg-emerald-600" : "bg-emerald-200"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Hero                                     */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-[#F8FAFB]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-emerald-200/30 blur-[110px]" />
        <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-emerald-100/50 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(11,31,51,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,31,51,0.04) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 85% 70% at 50% 30%, black 15%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 85% 70% at 50% 30%, black 15%, transparent 75%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.02fr_0.98fr] lg:gap-12 xl:gap-20">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-700/15 bg-emerald-50 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-800">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Smarter financial planning
            </span>

            <h1
              id="hero-heading"
              className="mt-6 text-[2.55rem] font-semibold leading-[1.04] tracking-[-0.045em] text-[#0B1F33] text-balance sm:text-5xl lg:text-[4.25rem]"
            >
              Take Control of Your{" "}
              <span className="text-emerald-700">Financial Future.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Make smarter financial decisions with simple, powerful tools
              designed to help you plan your mortgage repayments and grow your
              investments.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#calculators" className={primaryCta}>
                Explore Calculators
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </a>
              <a href="#about" className={secondaryCta}>
                Learn More
                <ChevronDownIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              {["No sign-up needed", "Free to use", "Clear, simple insights"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-100/80 text-emerald-800">
                      <CheckIcon className="h-3 w-3" />
                    </span>
                    {item}
                  </li>
                ),
              )}
            </ul>
          </div>

          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                Calculators                                 */
/* -------------------------------------------------------------------------- */

const mortgageFeatures = [
  "Monthly repayment estimates",
  "Interest rate insights",
  "Flexible repayment periods",
];

const compoundFeatures = [
  "Investment growth projections",
  "Compound interest insights",
  "Long-term savings planning",
];

function FeatureList({
  items,
  dark = false,
}: {
  items: string[];
  dark?: boolean;
}) {
  return (
    <ul className="space-y-3.5">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-center gap-3 text-sm font-medium ${
            dark ? "text-slate-200" : "text-slate-700"
          }`}
        >
          <span
            className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${
              dark
                ? "bg-emerald-400/10 text-emerald-300"
                : "bg-emerald-50 text-emerald-700"
            }`}
          >
            <CheckIcon className="h-3 w-3" />
          </span>
          {item}
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
      className="relative bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className={`${eyebrow} justify-center`}>
            <span className="h-px w-6 bg-emerald-600" />
            Calculators
          </span>
          <h2
            id="calculators-heading"
            className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#0B1F33] text-balance sm:text-4xl lg:text-[2.75rem]"
          >
            Powerful Tools for Smarter Financial Planning
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Everything you need to understand your finances and plan for
            tomorrow.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:gap-8">
          <article
            id="mortgage-calculator"
            className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#0B1F33]/10 bg-white p-7 shadow-[0_1px_2px_rgba(11,31,51,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-700/20 hover:shadow-[0_30px_60px_-32px_rgba(11,31,51,0.3)] sm:p-9"
          >
            <div
              aria-hidden="true"
              className="absolute -right-16 -top-20 h-52 w-52 rounded-full bg-emerald-100/60 blur-3xl"
            />

            <div className="relative flex items-start justify-between gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#0B1F33] text-white shadow-[0_14px_28px_-14px_rgba(11,31,51,0.65)] transition-transform duration-300 group-hover:scale-105">
                <HouseIcon className="h-6 w-6" />
              </span>
              <span className="rounded-full border border-[#0B1F33]/10 bg-[#F7F9FB] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Home ownership
              </span>
            </div>

            <div className="relative mt-7">
              <h3 className="text-2xl font-semibold tracking-[-0.025em] text-[#0B1F33]">
                Mortgage Repayment Calculator
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                See what your home loan could really cost, and how different
                rates and terms shape your monthly repayments.
              </p>
            </div>

            <div className="relative mt-7">
              <FeatureList items={mortgageFeatures} />
            </div>

            <div className="relative mt-auto pt-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#0B1F33]/10 pt-6">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">
                  Explore Calculator
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="rounded-full bg-[#F7F9FB] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Coming soon
                </span>
              </div>
            </div>
          </article>

          <article
            id="compound-interest-calculator"
            className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#0B1F33] p-7 text-white shadow-[0_24px_60px_-32px_rgba(11,31,51,0.7)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_36px_70px_-30px_rgba(11,31,51,0.6)] sm:p-9"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.24),transparent_55%)]"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-28 -left-20 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
            />

            <div className="relative flex items-start justify-between gap-4">
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-emerald-300/20 bg-emerald-400/10 text-emerald-300 transition-transform duration-300 group-hover:scale-105">
                <TrendingUpIcon className="h-6 w-6" />
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-300">
                Investing
              </span>
            </div>

            <div className="relative mt-7">
              <h3 className="text-2xl font-semibold tracking-[-0.025em] text-white">
                Compound Interest Calculator
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Visualise how your savings can grow over time and see the quiet
                power of compounding at work.
              </p>
            </div>

            <div className="relative mt-7">
              <FeatureList items={compoundFeatures} dark />
            </div>

            <div className="relative mt-auto pt-8">
              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-300">
                  Explore Calculator
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-400">
                  Coming soon
                </span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Why FinWise                                  */
/* -------------------------------------------------------------------------- */

const reasons = [
  {
    title: "Easy to Use",
    description:
      "Simple tools designed for everyone — no finance degree or complicated spreadsheets required.",
    icon: SparklesIcon,
  },
  {
    title: "Fast & Reliable",
    description:
      "Get clear financial estimates in seconds, with straightforward results you can trust.",
    icon: ZapIcon,
  },
  {
    title: "Smarter Decisions",
    description:
      "Turn assumptions into insight and make informed financial plans with confidence.",
    icon: TargetIcon,
  },
  {
    title: "Free to Use",
    description:
      "Access essential financial tools without unnecessary complexity or hidden costs.",
    icon: GiftIcon,
  },
];

function WhyFinWise() {
  return (
    <section
      id="about"
      aria-labelledby="why-heading"
      className="relative overflow-hidden bg-[#F7F9FB] py-24 sm:py-28 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-emerald-200/25 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div className="max-w-lg">
            <span className={eyebrow}>
              <span className="h-px w-6 bg-emerald-600" />
              Why FinWise
            </span>
            <h2
              id="why-heading"
              className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#0B1F33] text-balance sm:text-4xl lg:text-[2.75rem]"
            >
              Why Choose FinWise?
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Financial tools should feel calm, clear, and genuinely useful.
              Here is what guides every decision we make.
            </p>

            <div className="mt-8 rounded-2xl border border-emerald-700/10 bg-white p-5 shadow-[0_16px_40px_-30px_rgba(11,31,51,0.4)]">
              <div className="flex gap-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                  <ShieldCheckIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold leading-6 text-[#0B1F33]">
                    Built around one idea: better decisions start with better
                    clarity.
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-slate-500">
                    No jargon, no noise — just the numbers that matter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="group rounded-2xl border border-[#0B1F33]/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-700/20 hover:shadow-[0_24px_50px_-32px_rgba(11,31,51,0.4)]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-700/10 transition-colors duration-300 group-hover:bg-emerald-700 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold tracking-[-0.01em] text-[#0B1F33]">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {reason.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Final CTA                                 */
/* -------------------------------------------------------------------------- */

function FinalCta() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0B1F33] px-6 py-16 shadow-[0_40px_100px_-50px_rgba(11,31,51,0.8)] sm:rounded-[2.5rem] sm:px-12 sm:py-20 lg:px-20 lg:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-emerald-500/20 blur-[110px]" />
          <div className="absolute -bottom-36 left-1/4 h-80 w-80 rounded-full bg-emerald-400/10 blur-[110px]" />
          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse 70% 80% at 50% 50%, black 10%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 80% at 50% 50%, black 10%, transparent 75%)",
            }}
          />
          <svg
            viewBox="0 0 400 400"
            fill="none"
            className="absolute -right-28 -top-32 h-[30rem] w-[30rem] text-emerald-300/10"
          >
            <circle cx="200" cy="200" r="80" stroke="currentColor" />
            <circle cx="200" cy="200" r="130" stroke="currentColor" />
            <circle cx="200" cy="200" r="180" stroke="currentColor" />
          </svg>
        </div>

        <div className="relative mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Start planning today
          </span>
          <h2
            id="cta-heading"
            className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white text-balance sm:text-4xl lg:text-[3rem]"
          >
            Your Financial Future Starts with a Better Plan.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-300">
            Start exploring your financial possibilities today with tools
            designed to make planning easier.
          </p>
          <div className="mt-9 flex justify-center">
            <a
              href="#calculators"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-6 py-3.5 text-sm font-semibold text-[#071A2B] shadow-[0_16px_36px_-14px_rgba(52,211,153,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1F33]"
            >
              Explore Calculators
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>
          <p className="mt-4 text-xs text-slate-400">
            Free to use. No account required.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Footer                                   */
/* -------------------------------------------------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-[#0B1F33]/10 bg-[#F7F9FB]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.6fr_1fr_1.2fr] lg:gap-16">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Simple, powerful financial tools for clearer decisions — from
              mortgage repayments to long-term growth.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Navigate
            </h2>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`rounded text-sm text-slate-600 transition-colors hover:text-emerald-800 ${focusRing}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Calculator links">
            <h2 className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
              Calculators
            </h2>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="#mortgage-calculator"
                  className={`rounded text-sm text-slate-600 transition-colors hover:text-emerald-800 ${focusRing}`}
                >
                  Mortgage Repayment Calculator
                </a>
              </li>
              <li>
                <a
                  href="#compound-interest-calculator"
                  className={`rounded text-sm text-slate-600 transition-colors hover:text-emerald-800 ${focusRing}`}
                >
                  Compound Interest Calculator
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#0B1F33]/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © 2026 FinWise. All rights reserved.
          </p>
          <a
            href="#home"
            className={`group inline-flex items-center gap-1.5 self-start rounded text-xs font-medium text-slate-500 transition-colors hover:text-emerald-800 sm:self-auto ${focusRing}`}
          >
            Back to top
            <ArrowRightIcon className="h-3.5 w-3.5 -rotate-90 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*                                   Page                                     */
/* -------------------------------------------------------------------------- */

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#0B1F33] selection:bg-emerald-200 selection:text-emerald-950">
      <style>{`
        html {
          color-scheme: light;
          scroll-behavior: smooth;
          scroll-padding-top: 5.5rem;
        }

        body {
          background-color: #ffffff;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>

      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#0B1F33] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <Calculators />
        <WhyFinWise />
        <FinalCta />
      </main>

      <Footer />
    </div>
  );
}
