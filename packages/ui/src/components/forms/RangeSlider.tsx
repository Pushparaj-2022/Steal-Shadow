"use client";

import { useState } from "react";
import { cn } from "../../lib/utils";

interface RangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  label?: string;
  showValue?: boolean;
  formatValue?: (v: number) => string;
  color?: "blue" | "violet" | "green" | "orange";
  disabled?: boolean;
  className?: string;
}

const COLORS = {
  blue:   { track: "#3b82f6", thumb: "#2563eb" },
  violet: { track: "#8b5cf6", thumb: "#7c3aed" },
  green:  { track: "#10b981", thumb: "#059669" },
  orange: { track: "#f59e0b", thumb: "#d97706" },
};

export function RangeSlider({
  min = 0,
  max = 100,
  step = 1,
  value: controlledValue,
  defaultValue = 0,
  onChange,
  label,
  showValue = true,
  formatValue = (v) => String(v),
  color = "blue",
  disabled = false,
  className,
}: RangeSliderProps) {
  const [local, setLocal] = useState(defaultValue);
  const value = controlledValue ?? local;
  const pct = ((value - min) / (max - min)) * 100;
  const { track } = COLORS[color];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const n = Number(e.target.value);
    setLocal(n);
    onChange?.(n);
  };

  return (
    <div className={cn("space-y-2", className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && <label className="text-sm font-medium text-neutral-700">{label}</label>}
          {showValue && (
            <span className="text-sm font-bold tabular-nums" style={{ color: track }}>
              {formatValue(value)}
            </span>
          )}
        </div>
      )}
      <div className="relative h-6 flex items-center">
        {/* Track */}
        <div className="absolute h-2 w-full rounded-full bg-neutral-100 overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${pct}%`, background: track }}
          />
        </div>
        {/* Native input (invisible, on top) */}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          className={cn(
            "relative w-full h-2 appearance-none bg-transparent cursor-pointer",
            "focus:outline-none",
            "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5",
            "[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white",
            "[&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:transition-transform",
            "[&::-webkit-slider-thumb]:hover:scale-110",
            disabled && "cursor-not-allowed opacity-50"
          )}
          style={{ ["--thumb-color" as string]: track }}
        />
        <style>{`input[type=range]::-webkit-slider-thumb { background: ${track}; }`}</style>
      </div>
    </div>
  );
}
