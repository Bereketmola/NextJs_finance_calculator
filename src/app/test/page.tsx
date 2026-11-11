import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Example Card — FinWise",
  description: "A simple example card for the FinWise test page.",
};

function SparkleIcon({ className }: { className?: string }) {
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
    >
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      <path d="M20 3v4" />
      <path d="M22 5h-4" />
    </svg>
  );
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className ?? "h-4 w-4"}
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export default function TestPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFB] font-sans text-[#0B1F33]">
      <style>{`
        html {
          color-scheme: light;
        }

        body {
          background-color: #ffffff;
        }
      `}</style>

      <header className="border-b border-[#0B1F33]/5 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-5xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
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
          </Link>

          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-[#0B1F33]/5 hover:text-[#0B1F33] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
          >
            Back to home
          </Link>
        </div>
      </header>

      <main className="relative flex min-h-[calc(100vh-4.5rem)] items-center justify-center overflow-hidden px-5 py-16 sm:px-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-200/50 blur-[110px]" />
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(11,31,51,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,31,51,0.04) 1px, transparent 1px)",
              backgroundSize: "56px 56px",
              maskImage:
                "radial-gradient(ellipse 70% 60% at 50% 45%, black 10%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 70% 60% at 50% 45%, black 10%, transparent 75%)",
            }}
          />
        </div>

        <div className="relative w-full max-w-md">
          <p className="mb-5 text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Test route
          </p>

          <article className="rounded-[2rem] border border-pink-300/60 bg-pink-100 p-7 shadow-[0_32px_70px_-36px_rgba(190,24,93,0.4)] sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-pink-200 text-pink-900 ring-1 ring-pink-300/60">
                <SparkleIcon className="h-5 w-5" />
              </span>
              <span className="rounded-full border border-pink-300/60 bg-pink-200/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-pink-800">
                Example
              </span>
            </div>

            <h1 className="mt-6 text-2xl font-semibold tracking-[-0.025em] text-pink-950">
              A simple pink card.
            </h1>
            <p className="mt-3 text-sm leading-6 text-pink-950/75">
              This card demonstrates the pink background style used for cards
              across the FinWise interface. It is intentionally simple,
              responsive, and built with the project&apos;s existing Tailwind
              setup.
            </p>

            <div className="mt-6 rounded-2xl border border-pink-300/50 bg-pink-200/50 p-4">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pink-800">
                Rule applied
              </p>
              <p className="mt-1.5 text-sm font-medium text-pink-950">
                Card backgrounds are pink.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-pink-300/60 pt-5">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0B1F33] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_26px_-14px_rgba(11,31,51,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#132C45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-pink-100"
              >
                Back to FinWise
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
              <span className="text-xs font-medium text-pink-900/60">/test</span>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
}
