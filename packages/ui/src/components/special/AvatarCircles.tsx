"use client";

import { cn } from "../../lib/utils";

export interface AvatarData {
  src?: string;
  name?: string;
  fallback?: string;
}

interface AvatarCirclesProps {
  avatars: AvatarData[];
  limit?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeMap = {
  sm: { ring: "h-8 w-8 text-xs border-[1.5px]",  overlap: "-ml-2" },
  md: { ring: "h-10 w-10 text-sm border-2",        overlap: "-ml-3" },
  lg: { ring: "h-12 w-12 text-base border-2",      overlap: "-ml-4" },
};

export function AvatarCircles({
  avatars,
  limit = 5,
  size = "md",
  className,
}: AvatarCirclesProps) {
  const visible = avatars.slice(0, limit);
  const extra = avatars.length - limit;
  const { ring, overlap } = sizeMap[size];

  return (
    <div className={cn("flex items-center", className)}>
      {visible.map((av, i) => (
        <div
          key={i}
          title={av.name}
          className={cn(
            "relative shrink-0 overflow-hidden rounded-full border-white bg-gradient-to-br from-violet-400 to-indigo-600 dark:border-zinc-900",
            ring,
            i > 0 && overlap
          )}
        >
          {av.src ? (
            <img
              src={av.src}
              alt={av.name ?? ""}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center font-semibold text-white select-none">
              {(av.fallback ?? av.name?.[0] ?? "?").toUpperCase()}
            </span>
          )}
        </div>
      ))}
      {extra > 0 && (
        <div
          className={cn(
            "relative shrink-0 rounded-full border-white bg-zinc-200 dark:border-zinc-900 dark:bg-zinc-700",
            ring,
            overlap
          )}
        >
          <span className="flex h-full w-full items-center justify-center font-semibold text-zinc-600 dark:text-zinc-300 select-none">
            +{extra}
          </span>
        </div>
      )}
    </div>
  );
}
