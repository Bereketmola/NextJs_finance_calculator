import Link from "next/link";
import { LandmarkIcon } from "lucide-react";

export function SiteLogo() {
  return (
    <Link
      href="/"
      aria-label="FinWise home"
      className="flex items-center gap-2 rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <span className="grid size-9 place-items-center rounded-lg bg-primary text-primary-foreground">
        <LandmarkIcon className="size-4.5" />
      </span>
      <span className="font-heading text-lg font-semibold tracking-tight">
        FinWise
      </span>
    </Link>
  );
}
