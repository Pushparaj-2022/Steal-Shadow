"use client";

import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

interface CalendarProps {
  value?: Date;
  onChange?: (date: Date) => void;
  disabled?: (date: Date) => boolean;
  className?: string;
}

const DAY_LABELS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function addDays(date: Date, days: number): Date {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function getCalendarDays(year: number, month: number): Date[] {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const days: Date[] = [];

  // Leading days from previous month
  for (let i = firstDay.getDay(); i > 0; i--) {
    days.push(new Date(year, month, 1 - i));
  }

  // Current month days
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push(new Date(year, month, d));
  }

  // Trailing days from next month
  const remaining = 42 - days.length;
  for (let i = 1; i <= remaining; i++) {
    days.push(new Date(year, month + 1, i));
  }

  return days;
}

export function Calendar({ value, onChange, disabled, className }: CalendarProps) {
  const today = startOfDay(new Date());
  const initial = value ? startOfDay(value) : today;

  const [viewMonth, setViewMonth] = useState<{ year: number; month: number }>({
    year: initial.getFullYear(),
    month: initial.getMonth(),
  });
  const [focusedDate, setFocusedDate] = useState<Date>(initial);

  const gridRef = useRef<HTMLDivElement>(null);
  const cellRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const days = getCalendarDays(viewMonth.year, viewMonth.month);

  const isDisabled = useCallback(
    (date: Date): boolean => {
      return disabled ? disabled(date) : false;
    },
    [disabled]
  );

  const navigateMonth = (delta: number) => {
    setViewMonth((prev) => {
      const d = new Date(prev.year, prev.month + delta, 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  };

  const handleSelect = (date: Date) => {
    if (isDisabled(date)) return;
    setFocusedDate(date);
    onChange?.(date);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    let next: Date | null = null;

    if (e.key === "ArrowRight") next = addDays(focusedDate, 1);
    else if (e.key === "ArrowLeft") next = addDays(focusedDate, -1);
    else if (e.key === "ArrowDown") next = addDays(focusedDate, 7);
    else if (e.key === "ArrowUp") next = addDays(focusedDate, -7);
    else if (e.key === "Enter" || e.key === " ") {
      if (!isDisabled(focusedDate)) {
        onChange?.(focusedDate);
      }
      e.preventDefault();
      return;
    }

    if (next) {
      e.preventDefault();
      setFocusedDate(next);
      setViewMonth({ year: next.getFullYear(), month: next.getMonth() });
    }
  };

  // Focus the focused cell when it changes
  useEffect(() => {
    const key = focusedDate.toDateString();
    const el = cellRefs.current.get(key);
    if (el) el.focus();
  }, [focusedDate]);

  const isCurrentMonth = (date: Date) =>
    date.getMonth() === viewMonth.month && date.getFullYear() === viewMonth.year;

  return (
    <div className={cn("w-full max-w-sm select-none rounded-2xl bg-white p-4 shadow-lg dark:bg-zinc-900", className)}>
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => navigateMonth(-1)}
          aria-label="Previous month"
          className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>

        <span className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
          {MONTH_NAMES[viewMonth.month]} {viewMonth.year}
        </span>

        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => navigateMonth(1)}
          aria-label="Next month"
          className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.button>
      </div>

      {/* Day-of-week headers */}
      <div className="mb-1 grid grid-cols-7" role="row">
        {DAY_LABELS.map((label) => (
          <div
            key={label}
            role="columnheader"
            aria-label={label}
            className="flex h-8 items-center justify-center text-xs font-medium text-zinc-400 dark:text-zinc-500"
          >
            {label}
          </div>
        ))}
      </div>

      {/* Calendar grid */}
      <div
        ref={gridRef}
        role="grid"
        aria-label={`${MONTH_NAMES[viewMonth.month]} ${viewMonth.year}`}
        onKeyDown={handleKeyDown}
        className="grid grid-cols-7"
      >
        {days.map((date) => {
          const key = date.toDateString();
          const isToday = isSameDay(date, today);
          const isSelected = value ? isSameDay(date, value) : false;
          const isFocused = isSameDay(date, focusedDate);
          const isOtherMonth = !isCurrentMonth(date);
          const isOff = isDisabled(date);

          return (
            <div key={key} role="gridcell" aria-selected={isSelected}>
              <button
                ref={(el) => {
                  if (el) cellRefs.current.set(key, el);
                  else cellRefs.current.delete(key);
                }}
                tabIndex={isFocused ? 0 : -1}
                onClick={() => handleSelect(date)}
                disabled={isOff}
                aria-label={date.toLocaleDateString(undefined, {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                aria-current={isToday ? "date" : undefined}
                className={cn(
                  "mx-auto flex h-8 w-8 items-center justify-center rounded-full text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
                  // Other-month days
                  isOtherMonth && "text-zinc-300 dark:text-zinc-600",
                  // Current-month days (base)
                  !isOtherMonth && !isOff && !isSelected && "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800",
                  // Today ring
                  isToday && !isSelected && "ring-2 ring-violet-400 ring-offset-1 dark:ring-violet-500",
                  // Selected
                  isSelected && "bg-violet-600 font-semibold text-white hover:bg-violet-700",
                  // Disabled
                  isOff && "cursor-not-allowed text-zinc-300 opacity-40 dark:text-zinc-600",
                )}
              >
                {date.getDate()}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
