"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  colors?: string[];
  animationSpeed?: number;
  className?: string;
}

export function GradientText({
  children,
  colors = ["#7c3aed", "#3b82f6", "#06b6d4", "#10b981", "#7c3aed"],
  animationSpeed = 6,
  className,
}: GradientTextProps) {
  const id = React.useId().replace(/:/g, "");
  return (
    <>
      <style>{`
        @keyframes grad-shift-${id} {
          0%   { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
      `}</style>
      <span
        className={cn("inline-block bg-clip-text text-transparent", className)}
        style={{
          backgroundImage: `linear-gradient(90deg, ${colors.join(", ")})`,
          backgroundSize: "300% auto",
          animation: `grad-shift-${id} ${animationSpeed}s linear infinite`,
        }}
      >
        {children}
      </span>
    </>
  );
}
