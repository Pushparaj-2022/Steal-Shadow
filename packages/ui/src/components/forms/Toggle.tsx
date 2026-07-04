"use client";

import { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer",
  {
    variants: {
      variant: {
        default: "",
        outline: "border border-neutral-300",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 text-sm",
        lg: "h-11 px-5 text-base",
      },
      pressed: {
        true: "bg-neutral-900 text-white",
        false: "bg-transparent text-neutral-700 hover:bg-neutral-100",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      pressed: false,
    },
  }
);

type ToggleProps = Omit<VariantProps<typeof toggleVariants>, "pressed"> & {
  pressed?: boolean;
  defaultPressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
  children?: React.ReactNode;
  className?: string;
};

export function Toggle({
  variant,
  size,
  pressed: controlledPressed,
  defaultPressed = false,
  onPressedChange,
  disabled,
  children,
  className,
}: ToggleProps) {
  const [local, setLocal] = useState(defaultPressed);
  const pressed = controlledPressed ?? local;

  const handleClick = () => {
    if (disabled) return;
    const next = !pressed;
    setLocal(next);
    onPressedChange?.(next);
  };

  return (
    <button
      type="button"
      aria-pressed={pressed}
      disabled={disabled}
      onClick={handleClick}
      className={cn(toggleVariants({ variant, size, pressed }), className)}
    >
      {children}
    </button>
  );
}

export { toggleVariants };
