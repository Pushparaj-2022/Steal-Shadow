"use client";

import { cn } from "../../lib/utils";

interface RetroGridProps {
  className?: string;
  angle?: number;
  cellSize?: number;
  color?: string;
  fadeColor?: string;
}

export function RetroGrid({
  className,
  angle = 65,
  cellSize = 60,
  color = "rgba(99,102,241,0.2)",
  fadeColor = "white",
}: RetroGridProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={{ perspective: "300px" }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-50% -100% 0",
          transform: `rotateX(${angle}deg)`,
          transformOrigin: "50% 0",
          backgroundImage: `linear-gradient(to right,${color} 1px,transparent 1px),linear-gradient(to bottom,${color} 1px,transparent 1px)`,
          backgroundSize: `${cellSize}px ${cellSize}px`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to top, ${fadeColor} 15%, transparent 80%)`,
        }}
      />
    </div>
  );
}
