"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SleepTips() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Sleep Tips for Tonight</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          <li>Keep your bedroom cool and dark.</li>
          <li>Limit screen time at least 30 minutes before bed.</li>
          <li>Practice deep breathing or meditation.</li>
          <li>Maintain a consistent sleep schedule.</li>
        </ul>
      </CardContent>
    </Card>
  );
}
