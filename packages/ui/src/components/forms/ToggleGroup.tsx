"use client";

import { createContext, useContext, useState } from "react";
import { cn } from "../../lib/utils";

interface ToggleGroupContextValue {
  isActive: (value: string) => boolean;
  onToggle: (value: string) => void;
}

const ToggleGroupContext = createContext<ToggleGroupContextValue | null>(null);

interface ToggleGroupSingleProps {
  type: "single";
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}

interface ToggleGroupMultipleProps {
  type: "multiple";
  value?: string[];
  defaultValue?: string[];
  onValueChange?: (value: string[]) => void;
  children: React.ReactNode;
  className?: string;
}

type ToggleGroupProps = ToggleGroupSingleProps | ToggleGroupMultipleProps;

export function ToggleGroup(props: ToggleGroupProps) {
  const { children, className } = props;

  const [localSingle, setLocalSingle] = useState<string>(
    props.type === "single" ? props.defaultValue ?? "" : ""
  );
  const [localMultiple, setLocalMultiple] = useState<string[]>(
    props.type === "multiple" ? props.defaultValue ?? [] : []
  );

  function isActive(value: string) {
    if (props.type === "single") {
      const current = props.value ?? localSingle;
      return current === value;
    }
    const current = props.value ?? localMultiple;
    return current.includes(value);
  }

  function onToggle(value: string) {
    if (props.type === "single") {
      const current = props.value ?? localSingle;
      const next = current === value ? "" : value;
      setLocalSingle(next);
      props.onValueChange?.(next);
    } else {
      const current = props.value ?? localMultiple;
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      setLocalMultiple(next);
      props.onValueChange?.(next);
    }
  }

  return (
    <ToggleGroupContext.Provider value={{ isActive, onToggle }}>
      <div
        role="group"
        className={cn(
          "inline-flex rounded-xl border border-neutral-200 p-1 gap-1 flex-wrap",
          className
        )}
      >
        {children}
      </div>
    </ToggleGroupContext.Provider>
  );
}

interface ToggleGroupItemProps {
  value: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export function ToggleGroupItem({ value, children, disabled, className }: ToggleGroupItemProps) {
  const ctx = useContext(ToggleGroupContext)!;
  const active = ctx.isActive(value);

  return (
    <button
      type="button"
      disabled={disabled}
      aria-pressed={active}
      onClick={() => ctx.onToggle(value)}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-3 h-8 text-sm font-medium transition-colors select-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral-900",
        "disabled:pointer-events-none disabled:opacity-50",
        active ? "bg-neutral-900 text-white" : "text-neutral-600 hover:bg-neutral-100",
        className
      )}
    >
      {children}
    </button>
  );
}
