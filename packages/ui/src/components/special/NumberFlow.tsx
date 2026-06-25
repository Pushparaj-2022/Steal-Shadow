"use client";

import * as React from "react";
import { useEffect } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { cn } from "../../lib/utils";

// Keyed by decimal place (0=ones, 1=tens, …) so React never remounts on digit-count changes
function DigitColumn({ digit }: { digit: number }) {
  const spring = useSpring(digit, { stiffness: 160, damping: 22, mass: 0.6 });

  useEffect(() => { spring.set(digit); }, [digit, spring]);

  // translateY % is relative to the column's OWN height (10 * 1em = 10em).
  // To show digit v we need to shift -v em, which is -(v/10)*100% = -v*10%.
  const y = useTransform(spring, (v) => `${-v * 10}%`);

  return (
    <span
      className="relative inline-block overflow-hidden"
      style={{ lineHeight: "1em" }}
      aria-hidden
    >
      {/* Sizer — keeps the column the width/height of one digit */}
      <span className="invisible select-none">0</span>
      <motion.span
        className="absolute inset-x-0 top-0 flex flex-col items-center"
        style={{ y }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <span key={n} className="block w-full text-center" style={{ height: "1em", lineHeight: "1em" }}>
            {n}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export interface NumberFlowProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
}

export function NumberFlow({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  className,
}: NumberFlowProps) {
  const isNeg    = value < 0;
  const abs      = Math.abs(value);
  const intPart  = Math.floor(abs);
  const decDigits = decimals > 0
    ? Math.round((abs - intPart) * Math.pow(10, decimals))
        .toString()
        .padStart(decimals, "0")
        .split("")
        .map(Number)
    : [];

  // Left-to-right array of integer digits
  const intStr    = intPart.toString();
  const intDigits = intStr.split("").map(Number);
  const total     = intDigits.length;

  return (
    <span
      className={cn("inline-flex items-center tabular-nums", className)}
      aria-label={`${prefix}${isNeg ? "-" : ""}${value.toFixed(decimals)}${suffix}`}
    >
      {isNeg  && <span className="select-none">-</span>}
      {prefix && <span className="select-none">{prefix}</span>}

      {intDigits.map((digit, idx) => {
        // Comma before this digit when it starts a new thousands group (but not first)
        const needComma = idx > 0 && (total - idx) % 3 === 0;
        // Stable key = place from right (0 = ones, 1 = tens, …)
        const place = total - 1 - idx;
        return (
          <React.Fragment key={`int-${place}`}>
            {needComma && <span className="select-none">,</span>}
            <DigitColumn digit={digit} />
          </React.Fragment>
        );
      })}

      {decimals > 0 && (
        <>
          <span className="select-none">.</span>
          {decDigits.map((digit, i) => (
            <DigitColumn key={`dec-${i}`} digit={digit} />
          ))}
        </>
      )}

      {suffix && <span className="select-none">{suffix}</span>}
    </span>
  );
}
