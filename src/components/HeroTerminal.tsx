"use client"

import { motion } from "framer-motion";

const TerminalBlock = ({ children, title = "terminal" }: { children: React.ReactNode; title?: string }) => (
  <div className="rounded-lg border border-border overflow-hidden bg-card shadow-lg">
    <div className="flex items-center gap-2 px-4 py-2 border-b border-border bg-muted/30">
      <div className="w-3 h-3 rounded-full bg-destructive/70" />
      <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
      <div className="w-3 h-3 rounded-full bg-terminal-green/70" />
      <span className="ml-2 text-xs font-mono text-muted-foreground">{title}</span>
    </div>
    <div className="p-4 font-mono text-sm">{children}</div>
  </div>
);

const CodeLine = ({ delay = 0, children }: { delay?: number; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    className="py-0.5"
  >
    {children}
  </motion.div>
);

export const HeroTerminal = () => (
  <TerminalBlock title="skillscheck-dev">
    <CodeLine delay={0.3}>
      <span className="text-muted-foreground">$</span>{" "}
      <span className="text-terminal-green">skillscheck</span>{" "}
      <span className="text-primary">--lang</span>{" "}
      <span className="text-foreground">typescript</span>
    </CodeLine>
    <CodeLine delay={0.6}>
      <span className="text-muted-foreground">$</span>{" "}
      <span className="text-terminal-green">skillscheck</span>{" "}
      <span className="text-primary">--level</span>{" "}
      <span className="text-foreground">senior</span>
    </CodeLine>
    <CodeLine delay={0.9}>
      <span className="text-muted-foreground">$</span>{" "}
      <span className="text-terminal-green">skillscheck</span>{" "}
      <span className="text-accent">start</span>
    </CodeLine>
    <CodeLine delay={1.2}>
      <span className="text-muted-foreground">→</span>{" "}
      <span className="text-foreground">Loading 20 random questions...</span>
    </CodeLine>
    <CodeLine delay={1.5}>
      <span className="text-terminal-green">✓</span>{" "}
      <span className="text-foreground">Quiz ready!</span>
      <span className="cursor-blink text-accent ml-1">▋</span>
    </CodeLine>
  </TerminalBlock>
);

export default HeroTerminal;
