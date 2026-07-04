"use client";

import { cn } from "../../lib/utils";

interface AspectRatioProps {
  ratio?: number;
  children: React.ReactNode;
  className?: string;
}

export function AspectRatio({ ratio = 16 / 9, children, className }: AspectRatioProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden", className)}
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 h-full w-full">{children}</div>
    </div>
  );
}
