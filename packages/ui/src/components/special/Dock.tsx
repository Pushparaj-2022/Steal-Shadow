"use client";

import { useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { cn } from "../../lib/utils";

export interface DockItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => void;
  className?: string;
}

interface DockIconProps {
  item: DockItem;
  mouseX: MotionValue<number>;
  iconSize: number;
  magnification: number;
  distance: number;
}

function DockIcon({ item, mouseX, iconSize, magnification, distance }: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { left: 0, width: 0 };
    return val - (bounds.left + bounds.width / 2);
  });

  const sizeTransform = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [iconSize, iconSize * magnification, iconSize]
  );
  const size = useSpring(sizeTransform, { stiffness: 280, damping: 22, mass: 0.4 });

  const yTransform = useTransform(sizeTransform, [iconSize, iconSize * magnification], [0, -(iconSize * (magnification - 1) * 0.35)]);
  const y = useSpring(yTransform, { stiffness: 280, damping: 22, mass: 0.4 });

  return (
    <div ref={ref} className="relative flex flex-col items-center">
      {/* Tooltip */}
      <AnimatePresence>
        {hovered && (
          <motion.span
            initial={{ opacity: 0, y: 4, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.92 }}
            transition={{ duration: 0.12 }}
            className="pointer-events-none absolute -top-10 z-50 rounded-lg bg-neutral-950/90 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm whitespace-nowrap"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>

      {/* Icon container */}
      <motion.div
        style={{ width: size, height: size, y }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={item.onClick}
        className={cn(
          "flex cursor-pointer items-center justify-center rounded-2xl",
          "[&>svg]:pointer-events-none [&>img]:pointer-events-none",
          item.className
        )}
        whileTap={{ scale: 0.88 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        {item.icon}
      </motion.div>
    </div>
  );
}

interface DockProps {
  items: DockItem[];
  iconSize?: number;
  magnification?: number;
  distance?: number;
  className?: string;
  variant?: "glass" | "solid" | "minimal";
}

const VARIANT_STYLES = {
  glass:   "border border-white/20 bg-white/10 shadow-2xl backdrop-blur-xl",
  solid:   "border border-neutral-200 bg-white shadow-xl",
  minimal: "bg-transparent",
};

export function Dock({
  items,
  iconSize = 52,
  magnification = 1.9,
  distance = 110,
  className,
  variant = "glass",
}: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.clientX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "relative mx-auto flex items-end rounded-2xl px-3 pb-2 pt-3 gap-1.5",
        VARIANT_STYLES[variant],
        className
      )}
    >
      {items.map((item) => (
        <DockIcon
          key={item.id}
          item={item}
          mouseX={mouseX}
          iconSize={iconSize}
          magnification={magnification}
          distance={distance}
        />
      ))}
    </motion.div>
  );
}
