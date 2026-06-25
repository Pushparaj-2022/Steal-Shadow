"use client";

import { cn } from "../../lib/utils";

interface InfiniteMarqueeProps {
  children: React.ReactNode;
  speed?: "slow" | "normal" | "fast" | number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
  gap?: number;
  fade?: boolean;
  fadeWidth?: number;
  fadeColor?: string;
  repeat?: number;
}

const SPEED_MAP: Record<string, string> = {
  slow: "60s",
  normal: "30s",
  fast: "12s",
};

export function InfiniteMarquee({
  children,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
  className,
  itemClassName,
  gap = 24,
  fade = true,
  fadeWidth = 80,
  fadeColor = "white",
  repeat = 4,
}: InfiniteMarqueeProps) {
  const duration = typeof speed === "number" ? `${speed}s` : SPEED_MAP[speed] ?? "30s";

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Gradient fade masks */}
      {fade && (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 left-0 z-10"
            style={{
              width: fadeWidth,
              background: `linear-gradient(to right, ${fadeColor} 0%, transparent 100%)`,
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 z-10"
            style={{
              width: fadeWidth,
              background: `linear-gradient(to left, ${fadeColor} 0%, transparent 100%)`,
            }}
          />
        </>
      )}

      {/* Track */}
      <div
        className={cn("flex w-max", pauseOnHover && "hover:[animation-play-state:paused]")}
        style={{
          animation: `ss-marquee ${duration} linear infinite`,
          animationDirection: direction === "right" ? "reverse" : "normal",
          gap,
        }}
      >
        {Array.from({ length: repeat }, (_, i) => (
          <div
            key={i}
            aria-hidden={i > 0}
            className={cn("flex shrink-0 items-center", itemClassName)}
            style={{ gap }}
          >
            {children}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ss-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / ${repeat})); }
        }
      `}</style>
    </div>
  );
}
