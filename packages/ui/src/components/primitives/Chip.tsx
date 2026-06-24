"use client";

import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { cn } from "../../lib/utils";

type ChipVariant = "default" | "outlined" | "filled";
type ChipColor = "default" | "blue" | "green" | "amber" | "red" | "violet";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
  variant?: ChipVariant;
  color?: ChipColor;
  removable?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
  icon?: React.ReactNode;
  active?: boolean;
  disabled?: boolean;
}

const COLOR_MAP: Record<ChipColor, Record<ChipVariant, string>> = {
  default: {
    default:  "bg-neutral-100 text-neutral-700 hover:bg-neutral-200",
    outlined: "border border-neutral-200 text-neutral-600 hover:bg-neutral-50",
    filled:   "bg-neutral-800 text-white hover:bg-neutral-900",
  },
  blue: {
    default:  "bg-blue-100 text-blue-700 hover:bg-blue-200",
    outlined: "border border-blue-200 text-blue-600 hover:bg-blue-50",
    filled:   "bg-blue-600 text-white hover:bg-blue-700",
  },
  green: {
    default:  "bg-emerald-100 text-emerald-700 hover:bg-emerald-200",
    outlined: "border border-emerald-200 text-emerald-600 hover:bg-emerald-50",
    filled:   "bg-emerald-600 text-white hover:bg-emerald-700",
  },
  amber: {
    default:  "bg-amber-100 text-amber-700 hover:bg-amber-200",
    outlined: "border border-amber-200 text-amber-600 hover:bg-amber-50",
    filled:   "bg-amber-500 text-white hover:bg-amber-600",
  },
  red: {
    default:  "bg-red-100 text-red-700 hover:bg-red-200",
    outlined: "border border-red-200 text-red-600 hover:bg-red-50",
    filled:   "bg-red-600 text-white hover:bg-red-700",
  },
  violet: {
    default:  "bg-violet-100 text-violet-700 hover:bg-violet-200",
    outlined: "border border-violet-200 text-violet-600 hover:bg-violet-50",
    filled:   "bg-violet-600 text-white hover:bg-violet-700",
  },
};

export function Chip({
  children,
  className,
  variant = "default",
  color = "default",
  removable = false,
  onRemove,
  onClick,
  icon,
  active = false,
  disabled = false,
}: ChipProps) {
  return (
    <motion.span
      layout
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      onClick={!disabled ? onClick : undefined}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors select-none",
        COLOR_MAP[color][variant],
        active && "ring-2 ring-offset-1",
        onClick && !disabled && "cursor-pointer",
        disabled && "pointer-events-none opacity-50",
        className
      )}
    >
      {icon && <span className="shrink-0 [&>svg]:h-3 [&>svg]:w-3">{icon}</span>}
      {children}
      <AnimatePresence>
        {removable && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={(e) => { e.stopPropagation(); onRemove?.(); }}
            className="-mr-1 ml-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full opacity-60 hover:opacity-100 hover:bg-black/10 transition-opacity"
            aria-label="Remove"
          >
            <X className="h-2.5 w-2.5" />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.span>
  );
}
