"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const TopMissedWords = () => {
  const chartData = [
    { date: "Apple", running: 450, swimming: 300 },
    { date: "Banana", running: 380, swimming: 420 },
    { date: "Orange", running: 520, swimming: 120 },
    { date: "Carrot", running: 140, swimming: 550 },
    { date: "Mango", running: 600, swimming: 350 },
    { date: "Kefir", running: 480, swimming: 400 },
    { date: "Kefir", running: 480, swimming: 400 },
    { date: "Kefir", running: 480, swimming: 400 },
  ];

  const chartConfig = {
    running: {
      label: "Running",
      color: "var(--chart-1)",
    },
    swimming: {
      label: "Swimming",
      color: "var(--chart-2)",
    },
  };

  return (
    <Card className={"gap-0"}>
      <CardHeader className="items-center pb-4">
        <CardTitle className="text-center">Top Missed Words</CardTitle>
      </CardHeader>
      <CardContent className="pb-0 h-full !px-0">
        <ChartContainer config={chartConfig} className={"h-full w-full"}>
          <BarChart data={chartData} layout="vertical">
            <YAxis
              type="category"
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={10}
            />
            <XAxis type="number" hide />

            <Bar
              dataKey="running"
              stackId="a"
              fill="var(--chart-1)"
              // radius={[0, 4, 4, 0]}
            />
            <Bar
              dataKey="swimming"
              stackId="a"
              fill="var(--chart-2)"
              radius={[0, 4, 4, 0]}
            />

            {/* Tooltip */}
            <ChartTooltip content={<ChartTooltipContent />} cursor={false} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default TopMissedWords;
