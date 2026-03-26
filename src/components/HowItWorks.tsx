"use client"

import { ChartLineIcon, Code2, GraduationCap, PenSquare } from "lucide-react";
import { Badge } from "./ui/badge";

const steps = [
    {
      number: "01",
      title: "Escolha a linguagem",
      description: "Selecione entre JavaScript, Python, Java, C#, PHP, Ruby e muitas outras.",
      visual: (
        <div className="grid grid-cols-3 gap-2">
          <Code2 className="w-24 h-24 text-cyan-500/70" />
        </div>
      )
    },
    {
      number: "02",
      title: "Defina seu nível",
      description: "Júnior, Pleno ou Sênior. As questões são adaptadas ao seu conhecimento.",
      visual: (
        <div className="grid grid-cols-3 gap-2">
          <GraduationCap className="w-24 h-24 text-cyan-500/70" />
        </div>
      )
    },
    {
      number: "03",
      title: "Responda as questões",
      description: "20 questões aleatórias para testar seus conhecimentos de forma única.",
      visual: (
        <div className="grid grid-cols-3 gap-2">
          <PenSquare className="w-24 h-24 text-cyan-500/70" />
        </div>
      )
    },
    {
      number: "04",
      title: "Veja seus resultados",
      description: "Analise seu desempenho, revise respostas e acompanhe sua evolução.",
      visual: (
        <div className="grid grid-cols-3 gap-2">
          <ChartLineIcon className="w-24 h-24 text-cyan-500/70" />
        </div>
      )
    }
  ]

export default function HowItWorks() {
  return (
    <div id="como-funciona" className="p-8 w-full bg-gray-300/90 flex flex-col items-center justify-center gap-6 py-10">
      <Badge className="text-blue-500 p-4 border border-blue-500 bg-cyan-400/30 font-bold">
        Como funciona?
      </Badge>
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance">
          Simples como
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-500"> 1, 2, 3, 4</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Em poucos passos você já está testando suas habilidades.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative hover:shadow-[0px_10px_60px_-3px_rgba(59,130,246,1)] rounded-lg">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-linear-to-r from-border to-transparent z-0" />
              )}

              <div className="relative bg-card rounded-2xl border border-border p-6 space-y-4">
                <div className="text-5xl font-bold text-transparent bg-clip-text bg-linear-to-br from-cyan-500/30 to-blue-500/30">
                  {step.number}
                </div>

                {/* Visual */}
                <div className="h-32 flex items-center justify-center">
                  {step.visual}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}