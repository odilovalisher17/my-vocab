"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const description = "An interactive area chart";

const chartConfig = {
  count: {
    label: "Played Words",
    color: "var(--chart-1)",
  },
  correct_count: {
    label: "Guessed Right",
    color: "var(--chart-2)",
  },
};

export function ActivityChart({ data }) {
  const memoizedData = React.useMemo(() => data, [data]);

  return (
    <Card className="!pt-0 gap-2 mb-[10px]">
      <CardHeader className="flex items-center space-y-0 border-b sm:flex-row !py-4">
        <CardTitle className={"text-center w-full"}>
          Number of words played/guessed right for last 7 days
        </CardTitle>
      </CardHeader>
      <CardContent className="px-2">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[120px] lg:h-[200px] w-full"
        >
          <AreaChart data={memoizedData}>
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-desktop)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-mobile)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              interval={0}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="count"
              type="natural"
              fill="var(--color-chart-1)"
              fillOpacity={0.3}
              stroke="var(--color-chart-1)"
              stackId="a"
              isAnimationActive={true}
              animationDuration={1000}
            />
            <Area
              dataKey="correct_count"
              type="natural"
              fill="var(--color-chart-2)"
              fillOpacity={0.3}
              stroke="var(--color-chart-2)"
              stackId="a"
              isAnimationActive={true}
              animationDuration={1000}
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
