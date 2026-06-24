"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  status?: "online" | "offline" | "away" | "busy";
}

const sizeMap = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-lg",
};

const statusColor = {
  online: "bg-emerald-500",
  offline: "bg-neutral-400",
  away: "bg-amber-500",
  busy: "bg-red-500",
};

export function Avatar({ src, alt, fallback, size = "md", className, status }: AvatarProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className={cn("relative inline-flex shrink-0", className)}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
    >
      <div className={cn("rounded-full overflow-hidden bg-gradient-to-br from-violet-400 to-indigo-600 flex items-center justify-center font-semibold text-white", sizeMap[size])}>
        {src && !imgError ? (
          <img src={src} alt={alt} onError={() => setImgError(true)} className="h-full w-full object-cover" />
        ) : (
          <span>{fallback?.[0]?.toUpperCase() ?? "?"}</span>
        )}
      </div>
      {status && (
        <span className={cn("absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white", statusColor[status])} />
      )}
    </motion.div>
  );
}

interface AvatarGroupProps {
  avatars: Omit<AvatarProps, "size">[];
  size?: AvatarProps["size"];
  max?: number;
  className?: string;
}

export function AvatarGroup({ avatars, size = "md", max = 4, className }: AvatarGroupProps) {
  const visible = avatars.slice(0, max);
  const remaining = avatars.length - max;
  return (
    <div className={cn("flex -space-x-2", className)}>
      {visible.map((a, i) => (
        <motion.div key={i} initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
          <Avatar {...a} size={size} className="border-2 border-white" />
        </motion.div>
      ))}
      {remaining > 0 && (
        <div className={cn("rounded-full bg-neutral-200 flex items-center justify-center text-neutral-700 font-semibold border-2 border-white", sizeMap[size])}>
          +{remaining}
        </div>
      )}
    </div>
  );
}
