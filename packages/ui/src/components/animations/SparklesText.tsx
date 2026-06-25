"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  size: number;
  opacity: number;
  delay: number;
  color: string;
}

function makeSparkle(colors: string[]): Sparkle {
  return {
    id: Math.random().toString(36).slice(2),
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    size: Math.random() * 10 + 5,
    opacity: Math.random() * 0.5 + 0.5,
    delay: Math.random() * 0.2,
    color: colors[Math.floor(Math.random() * colors.length)],
  };
}

interface SparklesTextProps {
  children: React.ReactNode;
  sparkleCount?: number;
  colors?: string[];
  className?: string;
}

export function SparklesText({
  children,
  sparkleCount = 6,
  colors = ["#fbbf24", "#f59e0b", "#fde68a", "#fcd34d"],
  className,
}: SparklesTextProps) {
  // Empty on first render to avoid SSR/hydration mismatch from Math.random()
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    setSparkles(Array.from({ length: sparkleCount }, () => makeSparkle(colors)));
    const t = setInterval(() => {
      setSparkles((prev) =>
        prev.map((s) => (Math.random() > 0.6 ? makeSparkle(colors) : s))
      );
    }, 600);
    return () => clearInterval(t);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sparkleCount]);

  return (
    <span className={cn("relative inline-block", className)}>
      <AnimatePresence>
        {sparkles.map((s) => (
          <motion.span
            key={s.id}
            className="pointer-events-none absolute select-none"
            style={{ left: s.x, top: s.y, color: s.color, fontSize: s.size, lineHeight: 1 }}
            initial={{ scale: 0, opacity: 0, rotate: 0 }}
            animate={{ scale: 1, opacity: s.opacity, rotate: 45 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.35, delay: s.delay }}
          >
            ✦
          </motion.span>
        ))}
      </AnimatePresence>
      <span className="relative z-10">{children}</span>
    </span>
  );
}
