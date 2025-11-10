"use client";

import { useState } from "react";
import Papa from "papaparse";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { TriangleAlert } from "lucide-react"; 

export default function CsvUploader({
  onData,
}: {
  onData: (data: any[]) => void;
}) {
  const [error, setError] = useState("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        const data = results.data;
        const headers = results.meta.fields;

        const validHeaders = ["date", "person", "miles run"];

        if (!headers || validHeaders.some((h) => !headers.includes(h))) {
          setError("Invalid CSV headers. Expected: date, person, miles run");
          onData([]); 
          return;
        }

        if (data.length === 0) {
          setError("CSV file is empty. Please upload valid data.");
          onData([]);
          return;
        }

        setError("");
        onData(data);
      },
      error: () => {
        setError("Error reading CSV file. Please try again.");
      },
    });
  };

  return (
    <div className="space-y-4">
      <Input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="cursor-pointer"
      />

      {error && (
        <Alert variant="destructive" className="border-l-4 border-red-500">
          <TriangleAlert className="h-5 w-5 text-red-500" />
          <AlertTitle className="font-semibold">Upload Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Button
        onClick={() =>
          (
            document.querySelector(
              'input[type="file"]'
            ) as HTMLInputElement | null
          )?.click()
        }
        className="mt-2"
      >
        Upload CSV
      </Button>
    </div>
  );
}
