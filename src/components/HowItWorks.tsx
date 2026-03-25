"use client"

import { Badge } from "./ui/badge";

export default function HowItWorks() {
  return (
    <div id="como-funciona" className="h-120 w-full bg-gray-300/90 flex flex-col items-center justify-center gap-6 py-10">
      <Badge className="text-blue-500 border border-blue-500 bg-cyan-400/30 font-bold">
        Como funciona?
      </Badge>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <h1>Teste</h1>
      </div>
    </div>
  )
}