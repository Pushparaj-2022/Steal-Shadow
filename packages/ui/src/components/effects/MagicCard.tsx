"use client";

import { useRef, useState } from "react";
import { cn } from "../../lib/utils";

interface MagicCardProps {
  children: React.ReactNode;
  gradientColor?: string;
  gradientOpacity?: number;
  gradientSize?: number;
  className?: string;
}

export function MagicCard({
  children,
  gradientColor = "139,92,246",
  gradientOpacity = 0.08,
  gradientSize = 300,
  className,
}: MagicCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -9999, y: -9999 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        if (!ref.current) return;
        const r = ref.current.getBoundingClientRect();
        setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setPos({ x: -9999, y: -9999 }); }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-shadow hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(${gradientSize}px circle at ${pos.x}px ${pos.y}px, rgba(${gradientColor},${gradientOpacity}), transparent 70%)`,
        }}
      />
      {children}
    </div>
  );
}
