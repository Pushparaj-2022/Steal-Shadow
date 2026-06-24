"use client";

import { motion, AnimatePresence, type TargetAndTransition } from "motion/react";
import { cn } from "../../lib/utils";

type TransitionVariant = "fade" | "slide-up" | "slide-left" | "scale" | "blur";

interface PageTransitionProps {
  children: React.ReactNode;
  transitionKey: string;
  variant?: TransitionVariant;
  className?: string;
  duration?: number;
}

const variants: Record<TransitionVariant, { initial: TargetAndTransition; animate: TargetAndTransition; exit: TargetAndTransition }> = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "slide-up": {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
  },
  "slide-left": {
    initial: { opacity: 0, x: 40 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.96 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.98 },
  },
  blur: {
    initial: { opacity: 0, filter: "blur(8px)" },
    animate: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(8px)" },
  },
};

export function PageTransition({ children, transitionKey, variant = "fade", className, duration = 0.35 }: PageTransitionProps) {
  const v = variants[variant];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={transitionKey}
        initial={v.initial}
        animate={v.animate}
        exit={v.exit}
        transition={{ duration, ease: [0.16, 1, 0.3, 1] }}
        className={cn("w-full", className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
