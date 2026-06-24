"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface BoxRevealProps {
  children: React.ReactNode;
  boxColor?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export function BoxReveal({
  children,
  boxColor = "#7c3aed",
  duration = 0.5,
  delay = 0,
  className,
}: BoxRevealProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Sweeping box */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-10"
        style={{ backgroundColor: boxColor }}
        initial={{ x: "-101%" }}
        whileInView={{ x: "101%" }}
        viewport={{ once: true }}
        transition={{ duration, delay, ease: [0.76, 0, 0.24, 1] }}
      />
      {/* Revealed content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.01, delay: delay + duration * 0.45 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
