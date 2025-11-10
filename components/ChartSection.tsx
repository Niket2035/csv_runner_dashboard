"use client";

import {
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

export default function ChartsSection({ data }: { data: any[] }) {
  const chartData = data.map((d) => ({
    ...d,
    "miles run": Number(d["miles run"]),
  }));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full ml-64">

      <section className="border rounded-xl p-4 shadow-sm">
        <h2 className="text-lg font-semibold mb-2 text-center">
           Miles per Person
        </h2>

        <ChartContainer
          config={{
            "miles run": {
              label: "Miles Run",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[250px] w-full"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="person" />
              <YAxis />
              <Tooltip content={<ChartTooltipContent />} />
              <Bar
                dataKey="miles run"
                fill="hsl(var(--chart-1))"
                radius={[6, 6, 0, 0]}
                barSize={35}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </section>
    </div>
  );
}
