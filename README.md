# FinWise — Finance Calculators

A modern, responsive landing page for two everyday financial tools:

- **Mortgage Repayment Calculator** — estimate your monthly repayment, total interest and total repaid over the life of a home loan.
- **Compound Interest Calculator** — project how savings or investments grow over time with regular contributions and compound interest.

Both calculators are fully interactive: move the sliders and results (including a growth chart) update instantly, right in the browser. No sign-up, no server, no data leaves your device.

## Features

- Clean, conversion-focused landing page with hero, per-calculator benefit sections, FAQ and CTAs.
- Live, slider-driven calculators with formatted currency output.
- Stacked area chart visualising contributions vs. interest earned over time.
- Fully responsive layout with a mobile navigation sheet.
- Accessible: semantic landmarks, skip link, labelled controls, keyboard-friendly components and reduced-motion support.
- Dark-mode-ready design tokens.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, React Server Components)
- [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS v4](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) components built on [Base UI](https://base-ui.com)
- [Recharts](https://recharts.org) for charts
- [lucide-react](https://lucide.dev) icons

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app. The page hot-reloads as you edit files.

### Prerequisites

- Node.js 20 or newer
- npm (or your preferred package manager)

## Available Scripts

| Script          | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create an optimized production build |
| `npm run start` | Run the production build             |
| `npm run lint`  | Lint the project with ESLint         |

## Project Structure

```
src/
├── app/
│   ├── layout.tsx    # Root layout, fonts and metadata
│   ├── page.tsx      # Landing page (header, hero, sections, FAQ, footer)
│   └── globals.css   # Tailwind import + design tokens (brand, charts)
├── components/
│   ├── mortgage-calculator.tsx          # Mortgage calculator card
│   ├── compound-interest-calculator.tsx # Compound interest calculator card
│   ├── growth-chart.tsx                 # Recharts area chart wrapper
│   ├── hero-preview.tsx                 # Hero visual card
│   └── ui/                              # shadcn/ui components
└── lib/
    ├── finance.ts    # Calculation formulas and types
    ├── format.ts     # Currency and percentage formatters
    └── utils.ts      # Shared `cn` class-name helper
```

## How the Calculators Work

- **Mortgage** uses the standard amortisation formula
  `M = P · r(1 + r)ⁿ / ((1 + r)ⁿ − 1)`, where `P` is the loan amount, `r` the monthly interest rate and `n` the number of monthly payments.
- **Compound interest** compounds monthly and adds monthly contributions, returning a year-by-year series so growth can be charted.

All calculations live in [`src/lib/finance.ts`](src/lib/finance.ts) as pure functions, so they are easy to test or reuse.

> Results are estimates for planning only. Lender fees, insurance, taxes, inflation and investment fees are not included.

## Customization

Brand colors are defined as semantic tokens in [`src/app/globals.css`](src/app/globals.css):

- `--brand` / `--brand-foreground` — the green accent used across the UI.
- `--chart-1` … `--chart-5` — the chart color ramp.

Update these values (for both light and dark themes) to re-theme the site without touching component code.

## Deploy

This is a standard Next.js app and can be deployed to any platform that supports it. The easiest option is [Vercel](https://vercel.com/new):

```bash
npm run build
npm run start
```

See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
