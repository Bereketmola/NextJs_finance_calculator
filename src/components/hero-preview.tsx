"use client";

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
import { GrowthChart } from "@/components/growth-chart";
import { calculateCompoundGrowth } from "@/lib/finance";
import { formatCurrency } from "@/lib/format";

const preview = calculateCompoundGrowth({
  principal: 25_000,
  monthlyContribution: 400,
  annualRate: 7,
  years: 10,
});

export function HeroPreview() {
  return (
    <Card className="mx-auto w-full max-w-md lg:max-w-none">
      <CardHeader>
        <CardTitle>Projected balance</CardTitle>
        <CardDescription>Compound interest · 10 years</CardDescription>
        <CardAction>
          <Badge variant="secondary">
            <TrendingUpIcon data-icon="inline-start" />
            On track
          </Badge>
        </CardAction>
      </CardHeader>

      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-3xl font-semibold tracking-tight tabular-nums">
            {formatCurrency(preview.balance)}
          </span>
          <span className="text-sm text-muted-foreground">
            +{formatCurrency(preview.interest)} in interest
          </span>
        </div>
        <GrowthChart data={preview.points} className="h-40 sm:h-44" />
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-muted-foreground">Contributions</span>
          <span className="text-sm font-medium tabular-nums">
            {formatCurrency(preview.contributions)}
          </span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-muted-foreground">Interest earned</span>
          <span className="text-sm font-medium tabular-nums">
            {formatCurrency(preview.interest)}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
}
