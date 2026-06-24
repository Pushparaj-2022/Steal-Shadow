"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { cn } from "../../lib/utils";

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  separator?: string;
  easing?: "linear" | "ease-out" | "ease-in-out";
  triggerOnce?: boolean;
}

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function easeInOutCubic(t: number): number {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function applyEasing(t: number, easing: CountUpProps["easing"]) {
  if (easing === "ease-out") return easeOutExpo(t);
  if (easing === "ease-in-out") return easeInOutCubic(t);
  return t;
}

export function CountUp({
  from = 0,
  to,
  duration = 2000,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  separator = ",",
  easing = "ease-out",
  triggerOnce = true,
}: CountUpProps) {
  const [value, setValue] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: triggerOnce });
  const startTime = useRef<number | null>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;

    startTime.current = null;
    const start = from;
    const end = to;

    function tick(timestamp: number) {
      if (!startTime.current) startTime.current = timestamp;
      const elapsed = timestamp - startTime.current;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = applyEasing(progress, easing);
      setValue(start + (end - start) * easedProgress);
      if (progress < 1) rafId.current = requestAnimationFrame(tick);
    }

    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [inView, from, to, duration, easing]);

  const formatted = value.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, separator);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
