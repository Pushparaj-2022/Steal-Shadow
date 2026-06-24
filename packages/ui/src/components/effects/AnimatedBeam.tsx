"use client";

import { useRef, useEffect, useState } from "react";
import * as React from "react";
import { cn } from "../../lib/utils";

export interface AnimatedBeamProps {
  containerRef: React.RefObject<HTMLElement | null>;
  fromRef: React.RefObject<HTMLElement | null>;
  toRef: React.RefObject<HTMLElement | null>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  className?: string;
}

export function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 3,
  delay = 0,
  pathColor = "#cbd5e1",
  pathWidth = 2,
  pathOpacity = 0.3,
  gradientStartColor = "#7c3aed",
  gradientStopColor = "#3b82f6",
  className,
}: AnimatedBeamProps) {
  const idRef = useRef(`beam-${Math.random().toString(36).slice(2)}`);
  const [d, setD] = useState("");
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () => {
      const c = containerRef.current;
      const f = fromRef.current;
      const t = toRef.current;
      if (!c || !f || !t) return;
      const cr = c.getBoundingClientRect();
      const fr = f.getBoundingClientRect();
      const tr = t.getBoundingClientRect();
      const x1 = fr.left + fr.width / 2 - cr.left;
      const y1 = fr.top + fr.height / 2 - cr.top;
      const x2 = tr.left + tr.width / 2 - cr.left;
      const y2 = tr.top + tr.height / 2 - cr.top;
      const mx = (x1 + x2) / 2;
      const my = (y1 + y2) / 2 - curvature;
      setD(`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`);
      setSize({ w: cr.width, h: cr.height });
    };
    update();
    const ro = new ResizeObserver(update);
    if (containerRef.current) ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [containerRef, fromRef, toRef, curvature]);

  if (!d) return null;
  const gid = `${idRef.current}-g`;
  const dash = reverse ? "-1000;1000" : "1000;-1000";

  return (
    <svg
      className={cn("pointer-events-none absolute left-0 top-0", className)}
      width={size.w} height={size.h}
      viewBox={`0 0 ${size.w} ${size.h}`}
      fill="none"
    >
      <defs>
        <linearGradient id={gid} gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor={gradientStartColor} stopOpacity="0" />
          <stop offset="50%"  stopColor={gradientStartColor} />
          <stop offset="100%" stopColor={gradientStopColor}  stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={d} stroke={pathColor} strokeWidth={pathWidth} strokeOpacity={pathOpacity} />
      <path d={d} stroke={`url(#${gid})`} strokeWidth={pathWidth}>
        <animate attributeName="stroke-dashoffset" values={dash}
          dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" />
        <animate attributeName="stroke-dasharray" values="0 1000;180 820;0 1000"
          dur={`${duration}s`} begin={`${delay}s`} repeatCount="indefinite" />
      </path>
    </svg>
  );
}
