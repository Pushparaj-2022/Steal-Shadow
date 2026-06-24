"use client";

import { cn } from "../../lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "line" | "circle" | "rect" | "card";
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export function Skeleton({ className, variant = "rect", width, height, lines = 3 }: SkeletonProps) {
  const base = "animate-pulse bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-200 bg-[length:200%_100%]";

  if (variant === "line") {
    return (
      <div className="flex flex-col gap-2" style={{ width }}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(base, "h-4 rounded-full", i === lines - 1 && "w-3/4", className)}
          />
        ))}
      </div>
    );
  }

  if (variant === "circle") {
    const size = width ?? height ?? "2.5rem";
    return (
      <div
        className={cn(base, "rounded-full shrink-0", className)}
        style={{ width: size, height: size }}
      />
    );
  }

  if (variant === "card") {
    return (
      <div className="rounded-2xl border border-neutral-200 p-5 space-y-4 bg-white">
        <div className="flex items-center gap-3">
          <div className={cn(base, "h-10 w-10 rounded-full")} />
          <div className="flex-1 space-y-2">
            <div className={cn(base, "h-3.5 rounded-full w-1/3")} />
            <div className={cn(base, "h-3 rounded-full w-1/4")} />
          </div>
        </div>
        <div className={cn(base, "h-32 rounded-xl")} />
        <div className="space-y-2">
          <div className={cn(base, "h-3 rounded-full")} />
          <div className={cn(base, "h-3 rounded-full w-5/6")} />
          <div className={cn(base, "h-3 rounded-full w-3/4")} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(base, "rounded-xl", className)}
      style={{ width: width ?? "100%", height: height ?? "1rem" }}
    />
  );
}
