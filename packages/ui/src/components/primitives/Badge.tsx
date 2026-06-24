"use client";

import { motion } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 font-medium rounded-full px-2.5 py-0.5 text-xs",
  {
    variants: {
      variant: {
        default: "bg-neutral-100 text-neutral-700",
        primary: "bg-violet-100 text-violet-700",
        success: "bg-emerald-100 text-emerald-700",
        warning: "bg-amber-100 text-amber-700",
        danger: "bg-red-100 text-red-700",
        outline: "border border-neutral-300 text-neutral-600 bg-transparent",
        gradient: "bg-gradient-to-r from-violet-600 to-indigo-600 text-white",
      },
      pulse: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      pulse: false,
    },
  }
);

type BadgeProps = VariantProps<typeof badgeVariants> & {
  children: React.ReactNode;
  className?: string;
  dot?: boolean;
};

export function Badge({ children, className, variant, pulse, dot }: BadgeProps) {
  return (
    <motion.span
      className={cn(badgeVariants({ variant, pulse }), className)}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-current opacity-75 animate-ping" />
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-current" />
        </span>
      )}
      {children}
    </motion.span>
  );
}

export { badgeVariants };
