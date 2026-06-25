"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

interface ShineBorderProps {
  children: React.ReactNode;
  color?: string | string[];
  duration?: number;
  borderWidth?: number;
  bgColor?: string;
  className?: string;
}

export function ShineBorder({
  children,
  color = ["#7c3aed", "#3b82f6", "#06b6d4"],
  duration = 4,
  borderWidth = 2,
  bgColor = "white",
  className,
}: ShineBorderProps) {
  const gradient = Array.isArray(color) ? color.join(", ") : color;
  const id = React.useId().replace(/:/g, "");

  return (
    <>
      <style>{`
        @property --shine-angle-${id} {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0deg;
        }
        @keyframes shine-${id} {
          to { --shine-angle-${id}: 360deg; }
        }
      `}</style>
      <div
        className={cn("relative overflow-hidden rounded-2xl", className)}
        style={
          {
            padding: borderWidth,
            background: `linear-gradient(${bgColor}, ${bgColor}) padding-box, conic-gradient(from var(--shine-angle-${id}, 0deg), ${gradient}) border-box`,
            border: `${borderWidth}px solid transparent`,
            animation: `shine-${id} ${duration}s linear infinite`,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </>
  );
}
