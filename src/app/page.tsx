"use client"

import { motion } from "framer-motion";
import HeroTerminal from "@/components/HeroTerminal";
import FeaturesSection from "@/components/FeaturesSection";
import LanguagesSection from "@/components/LanguagesSection";
import { Terminal, ArrowRight } from "lucide-react";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
    <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Terminal className="w-5 h-5 text-accent" />
        <span className="font-display font-bold text-lg text-foreground">
          Skills<span className="text-gradient">Check</span>
          <span className="text-muted-foreground font-normal text-sm ml-1">Dev</span>
        </span>
      </div>
      <div className="flex items-center gap-4">
        <button className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">
          sobre
        </button>
        <button className="font-mono text-sm px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
          começar
        </button>
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center pt-16 bg-grid">
    {/* Gradient orbs */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block font-mono text-xs tracking-widest text-accent mb-6 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
            v1.0 — open beta
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display leading-tight mb-6 text-foreground">
            Teste suas
            <br />
            <span className="text-gradient">skills</span> de dev
            <br />
            <span className="text-muted-foreground text-3xl md:text-4xl">de verdade.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
            Escolha uma linguagem, seu nível de senioridade e enfrente 20 questões aleatórias.
            Sem decoreba — cada teste é único.
          </p>
          <div className="flex gap-4 items-center">
            <button className="group flex items-center gap-2 font-mono text-sm px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all glow-blue">
              iniciar quiz
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="font-mono text-sm px-6 py-3 rounded-md border border-border text-muted-foreground hover:text-foreground hover:border-muted-foreground/50 transition-all">
              ver demo
            </button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <HeroTerminal />
      </motion.div>
    </div>
  </section>
);

const StatsBar = () => (
  <section className="border-y border-border bg-card/50">
    <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
      {[
        { value: "500+", label: "questões" },
        { value: "8+", label: "linguagens" },
        { value: "3", label: "níveis" },
        { value: "∞", label: "tentativas" },
      ].map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="text-center"
        >
          <p className="text-2xl md:text-3xl font-bold font-mono text-gradient">{stat.value}</p>
          <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-24 px-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto text-center"
    >
      <div className="font-mono text-accent text-sm mb-4">{">"} ready_to_start()</div>
      <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 text-foreground">
        Prove que você sabe <span className="text-gradient">codar</span>
      </h2>
      <p className="text-muted-foreground mb-8">
        Sem cadastro. Sem enrolação. Escolha, responda e veja seu resultado.
      </p>
      <button className="group font-mono text-sm px-8 py-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-all glow-blue inline-flex items-center gap-2">
        começar agora
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="border-t border-border py-8 px-6">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <Terminal className="w-4 h-4 text-accent" />
        <span className="font-display font-semibold text-sm text-foreground">
          SkillsCheck Dev
        </span>
      </div>
      <p className="font-mono text-xs text-muted-foreground">
        © 2026 SkillsCheck Dev. Feito para devs, por devs.
      </p>
    </div>
  </footer>
);

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <StatsBar />
    <FeaturesSection />
    <LanguagesSection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
