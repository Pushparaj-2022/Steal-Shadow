"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "motion/react";
import { cn } from "../../lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className,
  strength = 0.4,
  onClick,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [hovered, setHovered] = useState(false);

  const x = useSpring(0, { stiffness: 200, damping: 20 });
  const y = useSpring(0, { stiffness: 200, damping: 20 });
  const scale = useSpring(1, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(y, [-50, 50], [8, -8]);
  const rotateY = useTransform(x, [-50, 50], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    scale.set(1);
    setHovered(false);
  }

  function handleMouseEnter() {
    scale.set(1.05);
    setHovered(true);
  }

  return (
    <motion.button
      ref={ref}
      style={{ x, y, rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
      className={cn(
        "relative inline-flex items-center justify-center px-6 py-3 font-semibold rounded-xl",
        "bg-white text-black border border-neutral-200 shadow-sm",
        "transition-colors duration-200 cursor-pointer select-none",
        "hover:shadow-lg hover:border-neutral-300",
        className
      )}
    >
      <motion.span
        animate={{ scale: hovered ? 1.02 : 1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
