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
  ringColor?: string;
  className?: string;
}

const sizeMap = {
  sm: { wrap: "h-8 w-8 text-xs",   border: "border-2",    overlap: "-ml-2" },
  md: { wrap: "h-10 w-10 text-sm", border: "border-2",    overlap: "-ml-3" },
  lg: { wrap: "h-12 w-12 text-base", border: "border-[3px]", overlap: "-ml-4" },
};

// Unique gradient per avatar so the stack looks colorful
const GRADIENTS = [
  "from-violet-400 to-indigo-600",
  "from-pink-400 to-rose-600",
  "from-amber-400 to-orange-500",
  "from-emerald-400 to-teal-600",
  "from-sky-400 to-blue-600",
  "from-fuchsia-400 to-purple-600",
];

export function AvatarCircles({
  avatars,
  limit = 5,
  size = "md",
  ringColor = "white",
  className,
}: AvatarCirclesProps) {
  const visible = avatars.slice(0, limit);
  const extra = avatars.length - limit;
  const { wrap, border, overlap } = sizeMap[size];

  const avatarBase = cn(
    "relative shrink-0 overflow-hidden rounded-full bg-gradient-to-br transition-transform duration-150 hover:-translate-y-1 hover:z-10",
    wrap,
    border,
  );

  return (
    <div className={cn("flex items-center", className)}>
      {visible.map((av, i) => (
        <div
          key={av.name ?? av.src ?? i}
          title={av.name}
          className={cn(avatarBase, GRADIENTS[i % GRADIENTS.length], i > 0 && overlap)}
          style={{ borderColor: ringColor }}
        >
          {av.src ? (
            <img
              src={av.src}
              alt={av.name ?? ""}
              className="h-full w-full object-cover"
            />
          ) : (
            <span className="flex h-full w-full items-center justify-center font-semibold text-white select-none leading-none">
              {(av.fallback ?? av.name?.[0] ?? "?").toUpperCase()}
            </span>
          )}
        </div>
      ))}

      {extra > 0 && (
        <div
          className={cn(
            "relative shrink-0 rounded-full bg-neutral-200 dark:bg-zinc-700 transition-transform duration-150 hover:-translate-y-1 hover:z-10",
            wrap,
            border,
            overlap,
          )}
          style={{ borderColor: ringColor }}
        >
          <span className="flex h-full w-full items-center justify-center font-semibold text-neutral-600 dark:text-zinc-300 select-none leading-none">
            +{extra}
          </span>
        </div>
      )}
    </div>
  );
}
