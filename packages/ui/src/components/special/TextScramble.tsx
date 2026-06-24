"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "../../lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&?";

interface TextScrambleProps {
  text: string;
  className?: string;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div";
  trigger?: "mount" | "hover" | "inView";
  speed?: number;
  delay?: number;
  revealSpeed?: number;
  charset?: string;
  onComplete?: () => void;
}

export function TextScramble({
  text,
  className,
  as: Tag = "span",
  trigger = "mount",
  speed = 40,
  delay = 0,
  revealSpeed = 0.3,
  charset = CHARS,
  onComplete,
}: TextScrambleProps) {
  const [display, setDisplay] = useState<string[]>(
    trigger === "mount" ? Array(text.length).fill(" ") : text.split("")
  );
  const frameRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resolvedRef = useRef(0);

  const scramble = useCallback(() => {
    resolvedRef.current = 0;

    const run = () => {
      const resolved = resolvedRef.current;
      if (resolved > text.length) {
        setDisplay(text.split(""));
        onComplete?.();
        return;
      }

      setDisplay(
        text.split("").map((char, i) => {
          if (char === " ") return " ";
          if (i < resolved) return char;
          return charset[Math.floor(Math.random() * charset.length)];
        })
      );

      resolvedRef.current += revealSpeed;
      frameRef.current = setTimeout(run, speed);
    };

    if (frameRef.current) clearTimeout(frameRef.current);
    if (delay > 0) {
      frameRef.current = setTimeout(run, delay);
    } else {
      run();
    }
  }, [text, speed, delay, revealSpeed, charset, onComplete]);

  useEffect(() => {
    if (trigger === "mount") scramble();
    return () => { if (frameRef.current) clearTimeout(frameRef.current); };
  }, [trigger, scramble]);

  return (
    <Tag
      className={cn("font-mono", className)}
      onMouseEnter={trigger === "hover" ? scramble : undefined}
      aria-label={text}
    >
      {display.join("")}
    </Tag>
  );
}
