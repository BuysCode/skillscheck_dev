"use client"

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function Features() {
  return (
    <div id="recursos" className="w-full bg-gray-200 flex flex-col items-center justify-center gap-6 py-10">
      <Badge className="text-blue-500 border border-blue-500 bg-cyan-400/30 font-bold">
        Recursos
      </Badge>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <Card>
          <CardHeader></CardHeader>
          <CardContent></CardContent>
        </Card>
      </div>
    </div>
  )
}