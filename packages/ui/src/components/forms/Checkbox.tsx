"use client";

import { useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

interface CheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  description?: string;
  disabled?: boolean;
  indeterminate?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  name?: string;
  value?: string;
}

const sizeMap = {
  sm: { box: "h-4 w-4", label: "text-sm", gap: "gap-2" },
  md: { box: "h-5 w-5", label: "text-sm", gap: "gap-2.5" },
  lg: { box: "h-6 w-6", label: "text-base", gap: "gap-3" },
};

export function Checkbox({
  checked,
  defaultChecked,
  onChange,
  label,
  description,
  disabled,
  indeterminate,
  className,
  size = "md",
  name,
  value,
}: CheckboxProps) {
  const id = useId();
  const s = sizeMap[size];
  const isChecked = checked ?? false;

  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex items-start cursor-pointer select-none",
        s.gap,
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <div className="relative shrink-0 mt-0.5">
        <input
          id={id}
          type="checkbox"
          name={name}
          value={value}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="sr-only peer"
          aria-checked={indeterminate ? "mixed" : checked}
        />
        <motion.div
          className={cn(
            "rounded flex items-center justify-center border-2 transition-colors",
            s.box,
            isChecked || indeterminate
              ? "bg-violet-600 border-violet-600"
              : "bg-white border-neutral-300",
            !disabled && "peer-focus-visible:ring-2 peer-focus-visible:ring-violet-500 peer-focus-visible:ring-offset-2"
          )}
          animate={{ scale: isChecked || indeterminate ? [1, 0.85, 1] : 1 }}
          transition={{ duration: 0.2 }}
        >
          <AnimatePresence>
            {isChecked && !indeterminate && (
              <motion.svg
                key="check"
                className="text-white"
                width={size === "sm" ? 9 : size === "md" ? 11 : 13}
                height={size === "sm" ? 9 : size === "md" ? 11 : 13}
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ pathLength: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <motion.path d="M2 6l3 3 5-5" />
              </motion.svg>
            )}
            {indeterminate && (
              <motion.span
                key="dash"
                className="block bg-white rounded-full"
                style={{ width: "55%", height: 2 }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      {(label || description) && (
        <div>
          {label && <div className={cn("font-medium text-neutral-900", s.label)}>{label}</div>}
          {description && <div className="text-xs text-neutral-500 mt-0.5">{description}</div>}
        </div>
      )}
    </label>
  );
}
