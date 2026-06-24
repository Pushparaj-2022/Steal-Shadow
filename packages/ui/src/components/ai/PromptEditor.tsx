"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface PromptEditorProps {
  value?: string;
  onChange?: (v: string) => void;
  onSubmit?: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

function SpinnerIcon() {
  return (
    <svg
      className="h-4 w-4 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export function PromptEditor({
  value = "",
  onChange,
  onSubmit,
  placeholder = "Enter your prompt…",
  maxLength = 4000,
  disabled = false,
  loading = false,
  className,
}: PromptEditorProps) {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const isMac =
    typeof navigator !== "undefined" && /Mac/i.test(navigator.platform);
  const kbdHint = isMac ? "⌘↵" : "Ctrl+↵";

  const charCount = value.length;
  const pct = charCount / maxLength;

  const charCountColor =
    pct > 0.95
      ? "text-red-500"
      : pct > 0.8
      ? "text-amber-500"
      : "text-neutral-400";

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
    onChange?.(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      if (!disabled && !loading && value.trim()) {
        onSubmit?.(value);
      }
    }
  };

  const handleSubmit = () => {
    if (!disabled && !loading && value.trim()) {
      onSubmit?.(value);
    }
  };

  const submitDisabled = disabled || loading || !value.trim();

  return (
    <div
      className={cn(
        "rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-900",
        className
      )}
    >
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled || loading}
        rows={3}
        className={cn(
          "block w-full resize-none rounded-t-xl bg-transparent px-4 pt-4 pb-2 text-sm text-neutral-900 placeholder-neutral-400 outline-none dark:text-neutral-100 dark:placeholder-neutral-500",
          "min-h-[80px]",
          (disabled || loading) && "cursor-not-allowed opacity-60"
        )}
      />

      <div className="flex items-center justify-between rounded-b-xl px-4 py-2">
        <span className={cn("text-xs tabular-nums", charCountColor)}>
          {charCount} / {maxLength}
        </span>

        <motion.button
          type="button"
          onClick={handleSubmit}
          disabled={submitDisabled}
          whileHover={!submitDisabled ? { scale: 1.04 } : {}}
          whileTap={!submitDisabled ? { scale: 0.96 } : {}}
          className={cn(
            "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
            submitDisabled
              ? "cursor-not-allowed bg-neutral-100 text-neutral-400 dark:bg-neutral-800 dark:text-neutral-600"
              : "bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-300"
          )}
        >
          {loading ? (
            <SpinnerIcon />
          ) : (
            <>
              <span>Send</span>
              <kbd className="hidden rounded bg-white/20 px-1 py-0.5 font-mono text-[10px] sm:inline-block">
                {kbdHint}
              </kbd>
            </>
          )}
        </motion.button>
      </div>
    </div>
  );
}
