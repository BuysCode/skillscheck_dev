"use client"


const features = [
  {
    id: 1,
    icon: <Shuffle className="text-white" />,
    title: "Questões Aleatórias",
    description: "Cada teste é único. 20 questões selecionadas aleatoriamente de um banco extenso garantem uma experiência sempre nova.",
  },
  {
    id: 2,
    icon: <Target className="text-white" />,
    title: "Níveis de Senioridade",
    description: "Escolha entre Júnior, Pleno ou Sênior. As questões se adaptam ao seu nível de experiência.",
  },
  {
    id: 3,
    icon: <BarChart3 className="text-white" />,
    title: "Resultados Detalhados",
    description: "Veja seu desempenho completo após cada teste, com estatísticas e áreas para melhorar.",
  },
  {
    id: 4,
    icon: <History className="text-white" />,
    title: "Histórico de Testes",
    description: "Armazene todos os seus resultados e acompanhe sua evolução ao longo do tempo.",
  },
  {
    id: 5,
    icon: <Zap className="text-white" />,
    title: "Feedback Instantâneo",
    description: "Revise suas respostas com explicações detalhadas para cada questão.",
  },
  {
    id: 6,
    icon: <Shield className="text-white" />,
    title: "100% Gratuito",
    description: "Acesse todas as funcionalidades sem pagar nada. Aprenda e evolua sem limites.",
  }
]

import { BarChart3, History, RotateCcw, Shield, Shuffle, Target, Zap } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function Features() {
  return (
    <div id="recursos" className="w-full bg-gray-200 flex flex-col items-center justify-center gap-6 py-10">
      <Badge className="text-blue-500 border p-4 border-blue-500 bg-cyan-400/30 font-bold">
        Recursos
      </Badge>
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-2xl font-semibold">
          Tudo que você precisa para <span className="inline-block bg-clip-text text-transparent bg-linear-to-br from-cyan-500 to-blue-500">evoluir</span> na programação
        </h1>
        <p className="text-md text-gray-700">Uma plataforma completa para testar e aprimorar suas habilidades de programação.</p>
      </div>
      <div className="grid w-full max-w-6xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-6 md:gap-8 rounded-xl">
        {features.map((feature) => (
          <Card className="w-full hover:shadow-[0px_0px_60px_-3px_rgba(6,182,212,1)]" key={feature.id}>
            <CardHeader>
              <div className="bg-linear-to-br from-cyan-500 to-blue-500 w-12 h-12 rounded-lg flex justify-center items-center">
                {feature.icon}
              </div>
              <CardTitle className="font-semibold">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}