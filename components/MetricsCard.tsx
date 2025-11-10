import { Card, CardContent } from "@/components/ui/card";

export default function MetricsCard({ title, data }: { title: string; data: any }) {
  return (
    <Card className="w-full max-w-sm p-4 shadow">
      <CardContent>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p>🏃 Avg Miles: {data.avg}</p>
        <p>⬆️ Max Miles: {data.max}</p>
        <p>⬇️ Min Miles: {data.min}</p>
      </CardContent>
    </Card>
  );
}
