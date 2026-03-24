"use client"

import { motion } from "framer-motion";
import { Code2, Shuffle, BarChart3, RotateCcw } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Escolha sua linguagem",
    desc: "JavaScript, Python, TypeScript, Java, Go e muito mais.",
    accent: "primary" as const,
  },
  {
    icon: Shuffle,
    title: "Questões aleatórias",
    desc: "20 questões selecionadas de um banco extenso. Cada teste é único.",
    accent: "accent" as const,
  },
  {
    icon: BarChart3,
    title: "Resultados detalhados",
    desc: "Veja sua pontuação, revise respostas e acompanhe sua evolução.",
    accent: "primary" as const,
  },
  {
    icon: RotateCcw,
    title: "Refaça quantas vezes quiser",
    desc: "Pratique até dominar. Sem limites, sem repetição.",
    accent: "accent" as const,
  },
];

const FeatureCard = ({
  icon: Icon,
  title,
  desc,
  accent,
  index,
}: (typeof features)[0] & { index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="group relative p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all duration-300"
  >
    <div
      className={`inline-flex p-3 rounded-md mb-4 ${
        accent === "primary" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
      }`}
    >
      <Icon className="w-5 h-5" />
    </div>
    <h3 className="text-lg font-semibold font-display mb-2 text-foreground">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    <div
      className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
        accent === "primary" ? "glow-blue" : "glow-cyan"
      }`}
      style={{ opacity: 0 }}
    />
  </motion.div>
);

export const FeaturesSection = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-accent tracking-widest uppercase">
          {"// features"}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 text-foreground">
          Como funciona
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((f, i) => (
          <FeatureCard key={f.title} {...f} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
