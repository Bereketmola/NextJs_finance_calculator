"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import type { GrowthPoint } from "@/lib/finance";
import { formatCompactCurrency } from "@/lib/format";
import { cn } from "cn";

const chartConfig = {
  contributions: {
    label: "Contributions",
    color: "var(--chart-2)",
  },
  interest: {
    label: "Interest earned",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function GrowthChart({
  data,
  className,
}: {
  data: GrowthPoint[];
  className?: string;
}) {
  return (
    <ChartContainer
      config={chartConfig}
      className={cn("aspect-auto h-52 w-full", className)}
    >
      <AreaChart data={data} margin={{ left: 0, right: 4, top: 8, bottom: 0 }}>
        <CartesianGrid vertical={false} strokeDasharray="4 4" />
        <XAxis
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={24}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          width={52}
          tickFormatter={(value: number) => formatCompactCurrency(value)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <Area
          dataKey="contributions"
          type="monotone"
          stackId="balance"
          stroke="var(--color-contributions)"
          fill="var(--color-contributions)"
          fillOpacity={0.35}
        />
        <Area
          dataKey="interest"
          type="monotone"
          stackId="balance"
          stroke="var(--color-interest)"
          fill="var(--color-interest)"
          fillOpacity={0.6}
        />
      </AreaChart>
    </ChartContainer>
  );
}
