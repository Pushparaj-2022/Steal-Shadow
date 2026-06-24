"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface GridBeamProps {
  children: React.ReactNode;
  cellSize?: number;
  beamColor?: string;
  gridColor?: string;
  className?: string;
}

export function GridBeam({
  children,
  cellSize = 40,
  beamColor = "#7c3aed",
  gridColor = "rgba(99,102,241,0.12)",
  className,
}: GridBeamProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: `${cellSize}px ${cellSize}px`,
        }}
      />
      {/* Vertical beam */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute w-[2px]"
        style={{
          left: "30%",
          height: "50%",
          background: `linear-gradient(to bottom, transparent, ${beamColor}, transparent)`,
          opacity: 0.85,
        }}
        animate={{ top: ["-30%", "130%"] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "linear", repeatDelay: 0.8 }}
      />
      {/* Horizontal beam */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute h-[2px]"
        style={{
          top: "40%",
          width: "45%",
          background: `linear-gradient(to right, transparent, ${beamColor}, transparent)`,
          opacity: 0.85,
        }}
        animate={{ left: ["-35%", "135%"] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: "linear", repeatDelay: 0.4, delay: 1.2 }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
