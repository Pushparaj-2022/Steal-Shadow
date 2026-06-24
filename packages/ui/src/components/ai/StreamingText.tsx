"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface StreamingTextProps {
  /** The full target text — component reveals it character by character */
  text: string;
  /** ms per character */
  speed?: number;
  className?: string;
  cursor?: boolean;
  onComplete?: () => void;
  /** If true, re-animates whenever `text` changes */
  animate?: boolean;
}

export function StreamingText({
  text,
  speed = 18,
  className,
  cursor = true,
  onComplete,
  animate = true,
}: StreamingTextProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const prevText = useRef("");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!animate) { setDisplayed(text); setDone(true); return; }
    if (text === prevText.current) return;

    setDone(false);
    const start = prevText.current;
    prevText.current = text;

    if (text.startsWith(start)) {
      let i = start.length;
      function tick() {
        if (i > text.length) { setDone(true); onComplete?.(); return; }
        setDisplayed(text.slice(0, i));
        i++;
        timerRef.current = setTimeout(tick, speed);
      }
      timerRef.current = setTimeout(tick, speed);
    } else {
      let i = 0;
      setDisplayed("");
      function tick() {
        if (i > text.length) { setDone(true); onComplete?.(); return; }
        setDisplayed(text.slice(0, i));
        i++;
        timerRef.current = setTimeout(tick, speed);
      }
      timerRef.current = setTimeout(tick, speed);
    }

    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [text, speed, animate, onComplete]);

  return (
    <span className={cn("inline", className)}>
      {displayed}
      {cursor && !done && (
        <motion.span
          className="inline-block w-0.5 h-[1em] bg-current align-middle ml-0.5"
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        />
      )}
    </span>
  );
}
