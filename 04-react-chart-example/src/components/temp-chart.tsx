"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const chartData = [
  { date: "2024-04-01", livingRoom: 222, garage: 150 },
  { date: "2024-04-02", livingRoom: 97, garage: 180 },
  { date: "2024-04-03", livingRoom: 167, garage: 120 },
  { date: "2024-04-04", livingRoom: 242, garage: 260 },
  { date: "2024-04-05", livingRoom: 373, garage: 290 },
  { date: "2024-04-06", livingRoom: 301, garage: 340 },
  { date: "2024-04-07", livingRoom: 245, garage: 180 },
  { date: "2024-04-08", livingRoom: 409, garage: 320 },
  { date: "2024-04-09", livingRoom: 59, garage: 110 },
  { date: "2024-04-10", livingRoom: 261, garage: 190 },
  { date: "2024-04-11", livingRoom: 327, garage: 350 },
  { date: "2024-04-12", livingRoom: 292, garage: 210 },
  { date: "2024-04-13", livingRoom: 342, garage: 380 },
  { date: "2024-04-14", livingRoom: 137, garage: 220 },
  { date: "2024-04-15", livingRoom: 120, garage: 170 },
  { date: "2024-04-16", livingRoom: 138, garage: 190 },
  { date: "2024-04-17", livingRoom: 446, garage: 360 },
  { date: "2024-04-18", livingRoom: 364, garage: 410 },
  { date: "2024-04-19", livingRoom: 243, garage: 180 },
  { date: "2024-04-20", livingRoom: 89, garage: 150 },
  { date: "2024-04-21", livingRoom: 137, garage: 200 },
  { date: "2024-04-22", livingRoom: 224, garage: 170 },
  { date: "2024-04-23", livingRoom: 138, garage: 230 },
  { date: "2024-04-24", livingRoom: 387, garage: 290 },
  { date: "2024-04-25", livingRoom: 215, garage: 250 },
  { date: "2024-04-26", livingRoom: 75, garage: 130 },
  { date: "2024-04-27", livingRoom: 383, garage: 420 },
  { date: "2024-04-28", livingRoom: 122, garage: 180 },
  { date: "2024-04-29", livingRoom: 315, garage: 240 },
  { date: "2024-04-30", livingRoom: 454, garage: 380 },
  { date: "2024-05-01", livingRoom: 165, garage: 220 },
  { date: "2024-05-02", livingRoom: 293, garage: 310 },
  { date: "2024-05-03", livingRoom: 247, garage: 190 },
  { date: "2024-05-04", livingRoom: 385, garage: 420 },
  { date: "2024-05-05", livingRoom: 481, garage: 390 },
  { date: "2024-05-06", livingRoom: 498, garage: 520 },
  { date: "2024-05-07", livingRoom: 388, garage: 300 },
  { date: "2024-05-08", livingRoom: 149, garage: 210 },
  { date: "2024-05-09", livingRoom: 227, garage: 180 },
  { date: "2024-05-10", livingRoom: 293, garage: 330 },
  { date: "2024-05-11", livingRoom: 335, garage: 270 },
  { date: "2024-05-12", livingRoom: 197, garage: 240 },
  { date: "2024-05-13", livingRoom: 197, garage: 160 },
  { date: "2024-05-14", livingRoom: 448, garage: 490 },
  { date: "2024-05-15", livingRoom: 473, garage: 380 },
  { date: "2024-05-16", livingRoom: 338, garage: 400 },
  { date: "2024-05-17", livingRoom: 499, garage: 420 },
  { date: "2024-05-18", livingRoom: 315, garage: 350 },
  { date: "2024-05-19", livingRoom: 235, garage: 180 },
  { date: "2024-05-20", livingRoom: 177, garage: 230 },
  { date: "2024-05-21", livingRoom: 82, garage: 140 },
  { date: "2024-05-22", livingRoom: 81, garage: 120 },
  { date: "2024-05-23", livingRoom: 252, garage: 290 },
  { date: "2024-05-24", livingRoom: 294, garage: 220 },
  { date: "2024-05-25", livingRoom: 201, garage: 250 },
  { date: "2024-05-26", livingRoom: 213, garage: 170 },
  { date: "2024-05-27", livingRoom: 420, garage: 460 },
  { date: "2024-05-28", livingRoom: 233, garage: 190 },
  { date: "2024-05-29", livingRoom: 78, garage: 130 },
  { date: "2024-05-30", livingRoom: 340, garage: 280 },
  { date: "2024-05-31", livingRoom: 178, garage: 230 },
  { date: "2024-06-01", livingRoom: 178, garage: 200 },
  { date: "2024-06-02", livingRoom: 470, garage: 410 },
  { date: "2024-06-03", livingRoom: 103, garage: 160 },
  { date: "2024-06-04", livingRoom: 439, garage: 380 },
  { date: "2024-06-05", livingRoom: 88, garage: 140 },
  { date: "2024-06-06", livingRoom: 294, garage: 250 },
  { date: "2024-06-07", livingRoom: 323, garage: 370 },
  { date: "2024-06-08", livingRoom: 385, garage: 320 },
  { date: "2024-06-09", livingRoom: 438, garage: 480 },
  { date: "2024-06-10", livingRoom: 155, garage: 200 },
  { date: "2024-06-11", livingRoom: 92, garage: 150 },
  { date: "2024-06-12", livingRoom: 492, garage: 420 },
  { date: "2024-06-13", livingRoom: 81, garage: 130 },
  { date: "2024-06-14", livingRoom: 426, garage: 380 },
  { date: "2024-06-15", livingRoom: 307, garage: 350 },
  { date: "2024-06-16", livingRoom: 371, garage: 310 },
  { date: "2024-06-17", livingRoom: 475, garage: 520 },
  { date: "2024-06-18", livingRoom: 107, garage: 170 },
  { date: "2024-06-19", livingRoom: 341, garage: 290 },
  { date: "2024-06-20", livingRoom: 408, garage: 450 },
  { date: "2024-06-21", livingRoom: 169, garage: 210 },
  { date: "2024-06-22", livingRoom: 317, garage: 270 },
  { date: "2024-06-23", livingRoom: 480, garage: 530 },
  { date: "2024-06-24", livingRoom: 132, garage: 180 },
  { date: "2024-06-25", livingRoom: 141, garage: 190 },
  { date: "2024-06-26", livingRoom: 434, garage: 380 },
  { date: "2024-06-27", livingRoom: 448, garage: 490 },
  { date: "2024-06-28", livingRoom: 149, garage: 200 },
  { date: "2024-06-29", livingRoom: 103, garage: 160 },
  { date: "2024-06-30", livingRoom: 446, garage: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  livingRoom: {
    label: "Living Room",
    color: "var(--chart-1)",
  },
  garage: {
    label: "Garage",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function TemperatureChart() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let minutesToSubtract = 15;
    if (timeRange === "1h") {
      minutesToSubtract = 60;
    } else if (timeRange === "1d") {
      minutesToSubtract = 1440;
    } else if (timeRange === "3d") {
      minutesToSubtract = 4320;
    } else if (timeRange === "7d") {
      minutesToSubtract = 10080;
    } else if (timeRange === "30d") {
      minutesToSubtract = 43200;
    } else if (timeRange === "90d") {
      minutesToSubtract = 129600;
    }
    const startDate = new Date(referenceDate);
    startDate.setMinutes(startDate.getMinutes() - minutesToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>อุณหภูมิจากภายในบ้าน</CardTitle>
          <CardDescription>
            Showing temperature from the living room and garage for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 15 minutes" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="15m" className="rounded-lg">
              Last 15 minutes
            </SelectItem>
            <SelectItem value="1h" className="rounded-lg">
              Last 1 hour
            </SelectItem>
            <SelectItem value="1d" className="rounded-lg">
              Last 1 day
            </SelectItem>
            <SelectItem value="3d" className="rounded-lg">
              Last 3 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="90d" className="rounded-lg">
              Last 90 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="aspect-auto h-[250px] w-full">
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillLivingRoom" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-livingRoom)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-livingRoom)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillGarage" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-garage)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-garage)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
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
              dataKey="livingRoom"
              type="natural"
              fill="url(#fillLivingRoom)"
              stroke="var(--color-livingRoom)"
              stackId="a"
            />
            <Area
              dataKey="garage"
              type="natural"
              fill="url(#fillGarage)"
              stroke="var(--color-garage)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
