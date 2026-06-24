"use client";

import { useId } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface SwitchProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  description?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
  name?: string;
}

const sizeMap = {
  sm: { track: "h-4 w-7", thumb: "h-3 w-3", on: 14, label: "text-sm" },
  md: { track: "h-5 w-9", thumb: "h-4 w-4", on: 18, label: "text-sm" },
  lg: { track: "h-6 w-11", thumb: "h-5 w-5", on: 22, label: "text-base" },
};

export function Switch({
  checked = false,
  onChange,
  label,
  description,
  disabled,
  size = "md",
  className,
  name,
}: SwitchProps) {
  const id = useId();
  const s = sizeMap[size];

  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex items-start gap-3 cursor-pointer select-none",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <div className="relative shrink-0 mt-0.5">
        <input
          id={id}
          type="checkbox"
          role="switch"
          name={name}
          checked={checked}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.checked)}
          className="sr-only peer"
          aria-checked={checked}
        />
        <motion.div
          className={cn(
            "rounded-full flex items-center px-0.5 transition-colors",
            s.track,
            checked ? "bg-violet-600" : "bg-neutral-300",
            !disabled && "peer-focus-visible:ring-2 peer-focus-visible:ring-violet-500 peer-focus-visible:ring-offset-2"
          )}
        >
          <motion.div
            className={cn("rounded-full bg-white shadow-sm", s.thumb)}
            animate={{ x: checked ? s.on - parseInt(s.thumb.split(" ")[0].replace("h-", "")) * 4 - 4 : 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
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
