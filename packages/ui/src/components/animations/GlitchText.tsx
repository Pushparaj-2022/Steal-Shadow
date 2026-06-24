"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

const GLITCH_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

interface GlitchTextProps {
  children: string;
  className?: string;
  speed?: number;
  scrambleDuration?: number;
  triggerOn?: "hover" | "mount" | "both";
}

export function GlitchText({
  children,
  className,
  speed = 40,
  scrambleDuration = 800,
  triggerOn = "hover",
}: GlitchTextProps) {
  const [display, setDisplay] = useState(children);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function scramble() {
    let iteration = 0;
    const totalIterations = Math.ceil(scrambleDuration / speed);

    clearInterval(intervalRef.current ?? undefined);
    intervalRef.current = setInterval(() => {
      setDisplay(
        children
          .split("")
          .map((char, idx) => {
            if (char === " ") return " ";
            if (idx < iteration) return children[idx];
            return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
          })
          .join("")
      );
      iteration += children.length / totalIterations;
      if (iteration >= children.length) {
        clearInterval(intervalRef.current ?? undefined);
        setDisplay(children);
      }
    }, speed);
  }

  useEffect(() => {
    if (triggerOn === "mount" || triggerOn === "both") scramble();
    return () => clearInterval(intervalRef.current ?? undefined);
  }, []);

  return (
    <span
      className={cn("font-mono cursor-default select-none", className)}
      onMouseEnter={triggerOn === "hover" || triggerOn === "both" ? scramble : undefined}
      data-text={children}
    >
      {display}
    </span>
  );
}
