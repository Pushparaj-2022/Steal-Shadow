"use client";

import { motion, HTMLMotionProps } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-neutral-900 text-white hover:bg-neutral-700 focus-visible:ring-neutral-900",
        outline: "border border-neutral-300 bg-transparent text-neutral-900 hover:bg-neutral-50 focus-visible:ring-neutral-300",
        ghost: "bg-transparent text-neutral-900 hover:bg-neutral-100 focus-visible:ring-neutral-200",
        gradient: "bg-gradient-to-r from-violet-600 to-indigo-600 text-white hover:from-violet-500 hover:to-indigo-500 focus-visible:ring-violet-500",
        danger: "bg-red-600 text-white hover:bg-red-500 focus-visible:ring-red-600",
        glow: "bg-violet-600 text-white shadow-[0_0_20px_rgba(139,92,246,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.7)] focus-visible:ring-violet-500",
      },
      size: {
        xs: "h-7 px-3 text-xs rounded-lg",
        sm: "h-8 px-4 text-sm",
        md: "h-10 px-5 text-sm",
        lg: "h-11 px-6 text-base",
        xl: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  children?: React.ReactNode;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export function Button({
  children,
  className,
  variant,
  size,
  loading,
  disabled,
  onClick,
  type = "button",
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className={cn(buttonVariants({ variant, size }), className)}
    >
      {loading ? (
        <motion.span
          className="h-4 w-4 rounded-full border-2 border-current border-t-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
        />
      ) : (
        children
      )}
    </motion.button>
  );
}

export { buttonVariants };
