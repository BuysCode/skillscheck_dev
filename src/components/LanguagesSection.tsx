"use client"

import { motion } from "framer-motion";

const languages: {name: string, color: string}[] = [
  { name: "JavaScript", color: "text-yellow-400" },
  { name: "TypeScript", color: "text-primary" },
  { name: "Python", color: "text-green-400" },
  { name: "Java", color: "text-orange-400" },
  { name: "Go", color: "text-accent" },
  { name: "Rust", color: "text-orange-300" },
  { name: "C#", color: "text-purple-400" },
  { name: "PHP", color: "text-indigo-400" },
];

const levels = [
  { name: "Junior", tag: "jr", desc: "Fundamentos e conceitos básicos" },
  { name: "Pleno", tag: "pl", desc: "Padrões, boas práticas e aplicação" },
  { name: "Senior", tag: "sr", desc: "Arquitetura, performance e edge cases" },
];

export const LanguagesSection = () => (
  <section className="py-24 px-6 bg-surface-dark">
    <div className="max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="font-mono text-xs text-primary tracking-widest uppercase">
          {"// languages & levels"}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold font-display mt-3 text-foreground">
          Escolha seu desafio
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-mono text-sm text-muted-foreground mb-6">
            <span className="text-accent">const</span> linguagens <span className="text-muted-foreground">=</span> [
          </h3>
          <div className="flex flex-wrap gap-3 ml-4">
            {languages.map((lang, i) => (
              <motion.span
                key={lang.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 rounded-md border border-border bg-card font-mono text-sm hover:border-primary/50 transition-colors cursor-default"
              >
                <span className={lang.color}>"</span>
                <span className="text-foreground">{lang.name}</span>
                <span className={lang.color}>"</span>
              </motion.span>
            ))}
          </div>
          <p className="font-mono text-sm text-muted-foreground mt-4">];</p>
        </motion.div>

        {/* Levels */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-mono text-sm text-muted-foreground mb-6">
            <span className="text-accent">enum</span> Level {"{"}
          </h3>
          <div className="space-y-3 ml-4">
            {levels.map((level, i) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-md border border-border bg-card hover:border-accent/50 transition-colors"
              >
                <span className="font-mono text-xs px-2 py-1 rounded bg-muted text-accent font-bold">
                  {level.tag}
                </span>
                <div>
                  <p className="font-display font-semibold text-foreground">{level.name}</p>
                  <p className="text-xs text-muted-foreground">{level.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="font-mono text-sm text-muted-foreground mt-4">{"}"}</p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default LanguagesSection;