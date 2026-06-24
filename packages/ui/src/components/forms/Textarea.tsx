"use client";

import { forwardRef, useId, useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  maxLength?: number;
  autoResize?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, hint, maxLength, autoResize = true, className, ...props }, ref) => {
    const id = useId();
    const [focused, setFocused] = useState(false);
    const innerRef = useRef<HTMLTextAreaElement>(null);
    const resolvedRef = (ref as React.RefObject<HTMLTextAreaElement>) ?? innerRef;
    const charCount = String(props.value ?? props.defaultValue ?? "").length;

    useEffect(() => {
      if (!autoResize) return;
      const el = resolvedRef.current;
      if (!el) return;
      el.style.height = "auto";
      el.style.height = `${el.scrollHeight}px`;
    }, [props.value, autoResize]);

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <motion.label
            htmlFor={id}
            animate={{ color: focused ? "#7c3aed" : error ? "#dc2626" : "#374151" }}
            className="text-sm font-medium"
          >
            {label}
          </motion.label>
        )}
        <motion.div
          animate={{
            boxShadow: focused
              ? "0 0 0 2px rgba(124,58,237,0.2)"
              : error
              ? "0 0 0 2px rgba(220,38,38,0.2)"
              : "0 0 0 0px transparent",
          }}
          className="rounded-xl"
        >
          <textarea
            id={id}
            ref={resolvedRef}
            maxLength={maxLength}
            className={cn(
              "w-full text-sm text-neutral-900 placeholder:text-neutral-400 bg-white border border-neutral-200 rounded-xl px-3 py-2.5 outline-none transition-colors resize-none min-h-[80px]",
              focused && "border-violet-500",
              error && "border-red-400",
              className
            )}
            onFocus={(e) => { setFocused(true); props.onFocus?.(e); }}
            onBlur={(e) => { setFocused(false); props.onBlur?.(e); }}
            {...props}
          />
        </motion.div>
        <div className="flex justify-between items-center">
          <AnimatePresence mode="wait">
            {error ? (
              <motion.p key="e" initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-xs text-red-500">
                {error}
              </motion.p>
            ) : hint ? (
              <motion.p key="h" className="text-xs text-neutral-400">{hint}</motion.p>
            ) : <span />}
          </AnimatePresence>
          {maxLength && (
            <span className={cn("text-xs tabular-nums", charCount >= maxLength ? "text-red-500" : "text-neutral-400")}>
              {charCount}/{maxLength}
            </span>
          )}
        </div>
      </div>
    );
  }
);
Textarea.displayName = "Textarea";
