"use client";

import { cn } from "../../lib/utils";

type Orientation = "vertical" | "horizontal" | "both";

interface ScrollAreaProps {
  children: React.ReactNode;
  maxHeight?: string | number;
  orientation?: Orientation;
  className?: string;
}

const orientationClasses: Record<Orientation, string> = {
  vertical: "overflow-y-auto overflow-x-hidden",
  horizontal: "overflow-x-auto overflow-y-hidden",
  both: "overflow-auto",
};

export function ScrollArea({ children, maxHeight, orientation = "vertical", className }: ScrollAreaProps) {
  return (
    <div
      style={{ maxHeight, scrollbarWidth: "thin" }}
      className={cn(
        "min-w-0",
        orientationClasses[orientation],
        "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar]:h-1.5",
        "[&::-webkit-scrollbar-track]:bg-transparent",
        "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-300 hover:[&::-webkit-scrollbar-thumb]:bg-neutral-400",
        className
      )}
    >
      {children}
    </div>
  );
}
