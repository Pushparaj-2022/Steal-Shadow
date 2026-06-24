"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { cn } from "../../lib/utils";

interface RatingProps {
  value?: number;
  defaultValue?: number;
  max?: number;
  onChange?: (value: number) => void;
  readOnly?: boolean;
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
  label?: string;
  showValue?: boolean;
}

const SIZE_MAP = { sm: "h-4 w-4", md: "h-6 w-6", lg: "h-8 w-8" };

export function Rating({
  value: controlledValue,
  defaultValue = 0,
  max = 5,
  onChange,
  readOnly = false,
  size = "md",
  color = "#f59e0b",
  className,
  label,
  showValue = false,
}: RatingProps) {
  const [local, setLocal] = useState(defaultValue);
  const [hovered, setHovered] = useState(0);
  const value = controlledValue ?? local;

  const handle = (star: number) => {
    if (readOnly) return;
    const next = star === value ? 0 : star;
    setLocal(next);
    onChange?.(next);
  };

  const displayed = hovered || value;

  return (
    <div className={cn("inline-flex items-center gap-1.5", className)}>
      {label && <span className="text-sm font-medium text-neutral-700 mr-1">{label}</span>}
      <div
        className="flex items-center gap-0.5"
        onMouseLeave={() => setHovered(0)}
      >
        {Array.from({ length: max }, (_, i) => {
          const star = i + 1;
          const filled = star <= displayed;
          return (
            <motion.button
              key={i}
              type="button"
              disabled={readOnly}
              onClick={() => handle(star)}
              onMouseEnter={() => !readOnly && setHovered(star)}
              whileHover={!readOnly ? { scale: 1.2 } : undefined}
              whileTap={!readOnly ? { scale: 0.9 } : undefined}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={cn(
                "inline-flex items-center justify-center transition-colors",
                readOnly ? "cursor-default" : "cursor-pointer"
              )}
              aria-label={`Rate ${star} of ${max}`}
            >
              <Star
                className={cn(SIZE_MAP[size], "transition-all")}
                fill={filled ? color : "none"}
                stroke={filled ? color : "#d1d5db"}
                strokeWidth={1.5}
              />
            </motion.button>
          );
        })}
      </div>
      {showValue && (
        <span className="text-sm font-bold text-neutral-500">
          {value.toFixed(1)} / {max}
        </span>
      )}
    </div>
  );
}
