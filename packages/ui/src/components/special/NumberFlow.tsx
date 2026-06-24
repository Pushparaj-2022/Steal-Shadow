"use client";

import { useEffect } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { cn } from "../../lib/utils";

interface DigitColumnProps {
  digit: number;
  className?: string;
}

function DigitColumn({ digit, className }: DigitColumnProps) {
  const spring = useSpring(digit, { stiffness: 200, damping: 28, mass: 0.8 });

  useEffect(() => { spring.set(digit); }, [digit, spring]);

  const y = useTransform(spring, (v) => `${-v * 10}%`);

  return (
    <span
      className={cn("relative inline-block overflow-hidden tabular-nums", className)}
      aria-hidden
      style={{ lineHeight: 1 }}
    >
      {/* Visible window */}
      <span className="opacity-0 select-none" aria-hidden>0</span>
      <motion.span
        className="absolute inset-x-0 top-0 flex flex-col items-center"
        style={{ y }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} className="block w-full text-center" style={{ lineHeight: 1, paddingTop: "0.1em", paddingBottom: "0.1em" }}>
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

interface NumberFlowProps {
  value: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimals?: number;
  format?: (value: number) => string;
}

export function NumberFlow({
  value,
  className,
  prefix = "",
  suffix = "",
  separator = ",",
  decimals = 0,
  format,
}: NumberFlowProps) {
  const formatted = format
    ? format(value)
    : value.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });

  // Split into individual characters, keep track of which are digits
  const parts = formatted.split("").map((char) => ({
    char,
    isDigit: /\d/.test(char),
    digit: /\d/.test(char) ? parseInt(char, 10) : 0,
  }));

  return (
    <span
      className={cn("inline-flex items-center", className)}
      aria-label={`${prefix}${formatted}${suffix}`}
    >
      {prefix && <span>{prefix}</span>}
      {parts.map((p, i) =>
        p.isDigit ? (
          <DigitColumn key={i} digit={p.digit} />
        ) : (
          <span key={i} aria-hidden className="select-none">
            {p.char}
          </span>
        )
      )}
      {suffix && <span>{suffix}</span>}
    </span>
  );
}
