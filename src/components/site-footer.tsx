import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import { sectionLinks } from "@/components/site-header";
import { SiteLogo } from "@/components/site-logo";

const calculatorLinks = [
  {
    label: "Mortgage repayments calculator",
    href: "/mortgage-repayments-calculator",
  },
  { label: "Compound interest calculator", href: "/#compound" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          <div className="flex max-w-xs flex-col gap-3">
            <SiteLogo />
            <p className="text-sm text-muted-foreground">
              Simple, powerful financial tools for clearer decisions — from
              mortgage repayments to long-term growth.
            </p>
          </div>

          <nav aria-label="Navigate" className="flex flex-col gap-3">
            <h2 className="text-sm font-medium">Navigate</h2>
            <ul className="flex flex-col gap-2">
              {sectionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Calculators" className="flex flex-col gap-3">
            <h2 className="text-sm font-medium">Calculators</h2>
            <ul className="flex flex-col gap-2">
              {calculatorLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="rounded text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {link.label}
                  </Link>
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
          <Link
            href="/#home"
            className="rounded text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
