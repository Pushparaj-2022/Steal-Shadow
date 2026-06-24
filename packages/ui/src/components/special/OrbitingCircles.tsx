"use client";

import { Children } from "react";
import { cn } from "../../lib/utils";

interface OrbitingCirclesProps {
  children: React.ReactNode;
  radius?: number;
  duration?: number;
  reverse?: boolean;
  iconSize?: number;
  className?: string;
}

export function OrbitingCircles({
  children,
  radius = 80,
  duration = 20,
  reverse = false,
  iconSize = 32,
  className,
}: OrbitingCirclesProps) {
  const items = Children.toArray(children);
  const count = items.length;
  const dir = reverse ? "reverse" : "normal";

  return (
    <div
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: radius * 2 + iconSize + 16, height: radius * 2 + iconSize + 16 }}
    >
      <style>{`
        @keyframes animui-orbit { from { transform: rotate(0deg) translateX(${radius}px) rotate(0deg); } to { transform: rotate(360deg) translateX(${radius}px) rotate(-360deg); } }
        @keyframes animui-orbit-rev { from { transform: rotate(0deg) translateX(${radius}px) rotate(0deg); } to { transform: rotate(-360deg) translateX(${radius}px) rotate(360deg); } }
      `}</style>
      {/* Orbit ring */}
      <div
        className="absolute rounded-full border border-dashed border-zinc-200 dark:border-zinc-700"
        style={{ width: radius * 2, height: radius * 2 }}
      />
      {items.map((child, i) => {
        const startAngle = (360 / count) * i;
        const animDelay = -(duration / count) * i;
        const anim = reverse ? "animui-orbit-rev" : "animui-orbit";
        return (
          <div
            key={i}
            className="absolute flex items-center justify-center rounded-full"
            style={{
              width: iconSize,
              height: iconSize,
              animation: `${anim} ${duration}s linear ${animDelay}s infinite ${dir}`,
              transform: `rotate(${startAngle}deg) translateX(${radius}px) rotate(-${startAngle}deg)`,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}
