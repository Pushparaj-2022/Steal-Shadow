"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface OTPInputProps {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  onComplete?: (value: string) => void;
  disabled?: boolean;
  error?: boolean;
  mask?: boolean;
  className?: string;
  inputClassName?: string;
}

export function OTPInput({
  length = 6,
  value = "",
  onChange,
  onComplete,
  disabled = false,
  error = false,
  mask = false,
  className,
  inputClassName,
}: OTPInputProps) {
  const inputs = useRef<(HTMLInputElement | null)[]>([]);
  const [local, setLocal] = useState<string[]>(
    Array.from({ length }, (_, i) => value[i] ?? "")
  );

  useEffect(() => {
    setLocal(Array.from({ length }, (_, i) => value[i] ?? ""));
  }, [value, length]);

  const focus = (i: number) => inputs.current[i]?.focus();

  const update = (idx: number, char: string) => {
    const next = [...local];
    next[idx] = char;
    setLocal(next);
    const joined = next.join("");
    onChange?.(joined);
    if (joined.replace(/\s/g, "").length === length) onComplete?.(joined);
    if (char && idx < length - 1) focus(idx + 1);
  };

  const handleKeyDown = (idx: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (local[idx]) {
        update(idx, "");
      } else if (idx > 0) {
        focus(idx - 1);
        update(idx - 1, "");
      }
    } else if (e.key === "ArrowLeft" && idx > 0) {
      focus(idx - 1);
    } else if (e.key === "ArrowRight" && idx < length - 1) {
      focus(idx + 1);
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    const next = Array.from({ length }, (_, i) => text[i] ?? "");
    setLocal(next);
    const joined = next.join("");
    onChange?.(joined);
    if (joined.length === length) onComplete?.(joined);
    focus(Math.min(text.length, length - 1));
  };

  return (
    <div className={cn("flex gap-2", className)} onPaste={handlePaste}>
      {Array.from({ length }).map((_, i) => (
        <motion.div
          key={i}
          whileFocus={{ scale: 1.05 }}
          className="relative"
        >
          <input
            ref={(el) => { inputs.current[i] = el; }}
            type={mask ? "password" : "text"}
            inputMode="numeric"
            pattern="[0-9]*"
            maxLength={1}
            value={local[i] ?? ""}
            disabled={disabled}
            onChange={(e) => update(i, e.target.value.replace(/\D/g, "").slice(-1))}
            onKeyDown={(e) => handleKeyDown(i, e)}
            onFocus={(e) => e.target.select()}
            className={cn(
              "h-12 w-10 rounded-xl border-2 bg-white text-center text-lg font-bold transition-all outline-none",
              "focus:border-blue-500 focus:ring-2 focus:ring-blue-100",
              local[i] ? "border-neutral-300" : "border-neutral-200",
              error && "border-red-400 focus:border-red-500 focus:ring-red-100",
              disabled && "cursor-not-allowed opacity-50 bg-neutral-50",
              inputClassName
            )}
          />
        </motion.div>
      ))}
    </div>
  );
}
