"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface HeroHighlightProps {
  children: React.ReactNode;
  className?: string;
}

interface HighlightProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroHighlight({ children, className }: HeroHighlightProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
    </div>
  );
}

export function Highlight({ children, className }: HighlightProps) {
  return (
    <span className={cn("relative inline-block", className)}>
      <motion.span
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 rounded-sm"
        style={{
          height: "35%",
          background: "linear-gradient(90deg,rgba(251,191,36,0.65),rgba(245,158,11,0.5))",
        }}
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      />
      <span className="relative">{children}</span>
    </span>
  );
}
