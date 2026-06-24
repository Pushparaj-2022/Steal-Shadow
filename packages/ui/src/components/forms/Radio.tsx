"use client";

import { createContext, useContext, useId } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

interface RadioGroupContextValue {
  name: string;
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

interface RadioGroupProps {
  name?: string;
  value: string;
  onChange: (value: string) => void;
  children: React.ReactNode;
  disabled?: boolean;
  orientation?: "vertical" | "horizontal";
  className?: string;
}

export function RadioGroup({
  name,
  value,
  onChange,
  children,
  disabled,
  orientation = "vertical",
  className,
}: RadioGroupProps) {
  const autoName = useId();
  return (
    <RadioGroupContext.Provider value={{ name: name ?? autoName, value, onChange, disabled }}>
      <div
        role="radiogroup"
        className={cn(
          "flex",
          orientation === "vertical" ? "flex-col gap-2" : "flex-row flex-wrap gap-4",
          className
        )}
      >
        {children}
      </div>
    </RadioGroupContext.Provider>
  );
}

interface RadioItemProps {
  value: string;
  label: React.ReactNode;
  description?: string;
  disabled?: boolean;
  className?: string;
}

export function RadioItem({ value, label, description, disabled, className }: RadioItemProps) {
  const ctx = useContext(RadioGroupContext)!;
  const id = useId();
  const isChecked = ctx.value === value;
  const isDisabled = disabled || ctx.disabled;

  return (
    <label
      htmlFor={id}
      className={cn(
        "inline-flex items-start gap-2.5 cursor-pointer select-none",
        isDisabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <div className="relative shrink-0 mt-0.5">
        <input
          id={id}
          type="radio"
          name={ctx.name}
          value={value}
          checked={isChecked}
          disabled={isDisabled}
          onChange={() => ctx.onChange(value)}
          className="sr-only peer"
        />
        <div className={cn(
          "h-5 w-5 rounded-full border-2 flex items-center justify-center transition-colors",
          isChecked ? "border-violet-600" : "border-neutral-300 bg-white",
          !isDisabled && "peer-focus-visible:ring-2 peer-focus-visible:ring-violet-500 peer-focus-visible:ring-offset-2"
        )}>
          <AnimatePresence>
            {isChecked && (
              <motion.div
                className="h-2.5 w-2.5 rounded-full bg-violet-600"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
      <div>
        <div className="text-sm font-medium text-neutral-900">{label}</div>
        {description && <div className="text-xs text-neutral-500 mt-0.5">{description}</div>}
      </div>
    </label>
  );
}
