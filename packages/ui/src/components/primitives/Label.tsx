"use client";

import { cn } from "../../lib/utils";

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
}

export function Label({
  children,
  htmlFor,
  required = false,
  disabled = false,
  className,
}: LabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(
        "text-sm font-medium text-neutral-900 select-none",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {children}
      {required && <span className="text-red-500 ml-0.5">*</span>}
    </label>
  );
}
