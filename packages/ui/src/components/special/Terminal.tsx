"use client";

import { useState, useEffect } from "react";
import { cn } from "../../lib/utils";

export interface TerminalLine {
  type?: "input" | "output" | "error" | "info";
  text: string;
  delay?: number;
}

interface TerminalProps {
  lines: TerminalLine[];
  autoPlay?: boolean;
  speed?: number;
  loop?: boolean;
  title?: string;
  className?: string;
}

const lineColors: Record<string, string> = {
  input:  "text-green-400",
  output: "text-zinc-300",
  error:  "text-red-400",
  info:   "text-blue-400",
};

export function Terminal({
  lines,
  autoPlay = true,
  speed = 50,
  loop = false,
  title = "terminal",
  className,
}: TerminalProps) {
  const [shown, setShown] = useState(autoPlay ? 0 : lines.length);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (!autoPlay || shown >= lines.length) {
      if (loop && shown >= lines.length) {
        const t = setTimeout(() => { setShown(0); setChars(0); }, 2000);
        return () => clearTimeout(t);
      }
      return;
    }
    const line = lines[shown];
    const isTypable = line.type === "input";
    const target = isTypable ? line.text.length : 0;

    if (isTypable && chars < target) {
      const t = setTimeout(() => setChars((c) => c + 1), speed);
      return () => clearTimeout(t);
    }

    const advance = setTimeout(() => {
      setShown((s) => s + 1);
      setChars(0);
    }, isTypable ? 400 : (line.delay ?? 200));
    return () => clearTimeout(advance);
  }, [autoPlay, shown, chars, lines, speed, loop]);

  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 font-mono text-sm",
        className
      )}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-zinc-800 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full bg-red-500/80" />
          <span className="inline-block h-3 w-3 rounded-full bg-yellow-500/80" />
          <span className="inline-block h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="flex-1 text-center text-xs text-zinc-500">{title}</span>
      </div>

      {/* Lines */}
      <div className="min-h-[120px] space-y-1 p-4 leading-relaxed">
        {lines.slice(0, shown).map((line, i) => (
          <div key={i} className="flex gap-2">
            {line.type === "input" && (
              <span className="select-none text-violet-400">$</span>
            )}
            <span className={lineColors[line.type ?? "output"]}>{line.text}</span>
          </div>
        ))}
        {/* Actively typing line */}
        {shown < lines.length && lines[shown].type === "input" && (
          <div className="flex gap-2">
            <span className="select-none text-violet-400">$</span>
            <span className="text-green-400">
              {lines[shown].text.slice(0, chars)}
              <span className="animate-pulse">█</span>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
