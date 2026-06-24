"use client";

import { forwardRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  icon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  variant?: "default" | "filled" | "underline";
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, icon, rightIcon, variant = "default", className, ...props }, ref) => {
    const [focused, setFocused] = useState(false);

    const base =
      variant === "underline"
        ? "border-b rounded-none bg-transparent px-0"
        : variant === "filled"
        ? "bg-neutral-100 border-transparent rounded-xl"
        : "bg-white border border-neutral-200 rounded-xl";

    return (
      <div className="flex flex-col gap-1 w-full">
        {label && (
          <motion.label
            animate={{ color: focused ? "#6d28d9" : error ? "#dc2626" : "#374151" }}
            className="text-sm font-medium"
          >
            {label}
          </motion.label>
        )}
        <div className="relative flex items-center">
          {icon && (
            <span className="absolute left-3 text-neutral-400">{icon}</span>
          )}
          <motion.div
            className="w-full"
            animate={{
              boxShadow: focused
                ? "0 0 0 2px rgba(109,40,217,0.2)"
                : error
                ? "0 0 0 2px rgba(220,38,38,0.2)"
                : "0 0 0 0px transparent",
            }}
            style={{ borderRadius: variant === "underline" ? 0 : "0.75rem" }}
          >
            <input
              ref={ref}
              className={cn(
                "w-full text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition-colors duration-200 h-10 px-3",
                icon && "pl-9",
                rightIcon && "pr-9",
                base,
                error && "border-red-400",
                className
              )}
              onFocus={(e) => {
                setFocused(true);
                props.onFocus?.(e);
              }}
              onBlur={(e) => {
                setFocused(false);
                props.onBlur?.(e);
              }}
              {...props}
            />
          </motion.div>
          {rightIcon && (
            <span className="absolute right-3 text-neutral-400">{rightIcon}</span>
          )}
        </div>
        <AnimatePresence mode="wait">
          {error ? (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="text-xs text-red-500"
            >
              {error}
            </motion.p>
          ) : hint ? (
            <motion.p key="hint" className="text-xs text-neutral-400">
              {hint}
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    );
  }
);

Input.displayName = "Input";
