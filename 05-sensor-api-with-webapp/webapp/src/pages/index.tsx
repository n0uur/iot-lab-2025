import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
// import { useSensorWs } from "@/hooks/use-sensor-ws";

const chartConfig = {
  value: {
    label: "Sensor Value",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

type SensorData = {
  id: number;
  sensorName: string;
  sensorType: string;
  value: number;
  unit: string | null;
  timestamp: number;
};

const fetchSensors = async () => {
  const response = await axios.get("sensors", {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_API_SECRET}`,
    },
    baseURL: import.meta.env.VITE_API_URL,
  });
  return response.data;
};

function IndexPage() {
  // useSensorWs();

  const { data } = useQuery({
    queryKey: ["sensors"],
    queryFn: fetchSensors,
    // Polling interval (Uncomment to demonstrate polling)
    // refetchInterval: 1000,
    select: (data: unknown) => {
      if (Array.isArray(data)) {
        return (data as SensorData[]).sort((a, b) => a.timestamp - b.timestamp);
      }
      return [];
    },
  });

  return (
    <div className="bg-background text-foreground p-4">
      <main className="container mx-auto max-w-3xl w-full space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Sensor Data Chart</CardTitle>
            <CardDescription>Showing sensor data</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={data || []}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="timestamp"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => new Date(value * 1000).toLocaleString()}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="dot" hideLabel />}
                />
                <Area
                  dataKey="value"
                  type="linear"
                  fill="var(--color-value)"
                  fillOpacity={0.4}
                  stroke="var(--color-value)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default IndexPage;
