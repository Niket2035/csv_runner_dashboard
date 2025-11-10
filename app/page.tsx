"use client";

import { useState } from "react";
import CsvUploader from "@/components/CsvUpload";
import MetricsCard from "@/components/MetricsCard";
import ChartsSection from "@/components/ChartSection";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  const calculateMetrics = (data: any[]) => {
    const miles = data.map((d) => parseFloat(d["miles run"]));
    const avg = (miles.reduce((a, b) => a + b, 0) / miles.length).toFixed(2);
    return {
      avg,
      max: Math.max(...miles),
      min: Math.min(...miles),
    };
  };

  const overall = data.length ? calculateMetrics(data) : null;

  return (
    <main className="min-h-screen flex flex-col items-center p-6 bg-background text-foreground mt-10">
      <div className="w-full max-w-5xl flex flex-col items-center justify-center text-center space-y-8">
 
        <h1 className="text-3xl font-bold tracking-tight">
          CSV Runner Dashboard
        </h1>

        <div className="w-full max-w-md ">
          <CsvUploader onData={setData} />
        </div>

        {data.length > 0 && (
          <div className="flex flex-wrap justify-center gap-4">
            <MetricsCard title="Overall Metrics" data={overall} />
          </div>
        )}

        {data.length > 0 && (
          <div className="w-full mt-4 justify-center">
            <ChartsSection data={data} />
          </div>
        )}
      </div>
    </main>
  );
}
