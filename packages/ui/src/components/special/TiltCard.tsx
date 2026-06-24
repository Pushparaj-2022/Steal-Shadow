"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "../../lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
  perspective?: number;
  shine?: boolean;
  shineIntensity?: number;
  springStiffness?: number;
  springDamping?: number;
}

export function TiltCard({
  children,
  className,
  maxTilt = 14,
  scale = 1.04,
  perspective = 900,
  shine = true,
  shineIntensity = 0.18,
  springStiffness = 340,
  springDamping = 30,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const shineX = useMotionValue(50);
  const shineY = useMotionValue(50);

  const springConfig = { stiffness: springStiffness, damping: springDamping, mass: 0.5 };

  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [maxTilt, -maxTilt]), springConfig);
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-maxTilt, maxTilt]), springConfig);

  // Shine: a specular highlight that moves with the cursor
  const shineOpacity = useMotionValue(0);
  const shineOpacitySpring = useSpring(shineOpacity, { stiffness: 200, damping: 25 });

  const shineBackground = useTransform(
    [shineX, shineY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,${shineIntensity}) 0%, transparent 55%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(nx);
    rawY.set(ny);
    shineX.set(((e.clientX - rect.left) / rect.width) * 100);
    shineY.set(((e.clientY - rect.top) / rect.height) * 100);
  };

  const handleMouseEnter = () => shineOpacity.set(1);

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    shineOpacity.set(0);
  };

  return (
    <div
      ref={ref}
      style={{ perspective }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        whileHover={{ scale }}
        transition={{ scale: { type: "spring", stiffness: 400, damping: 25 } }}
        className={cn("relative", className)}
      >
        {/* Specular shine overlay */}
        {shine && (
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
            style={{ background: shineBackground, opacity: shineOpacitySpring }}
          />
        )}

        {/* Subtle depth shadow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            boxShadow: useTransform(
              [rotateX, rotateY],
              ([rx, ry]) =>
                `${-(ry as number) * 0.5}px ${(rx as number) * 0.5}px 30px rgba(0,0,0,0.18), ${-(ry as number) * 0.2}px ${(rx as number) * 0.2}px 10px rgba(0,0,0,0.08)`
            ),
          }}
        />

        {children}
      </motion.div>
    </div>
  );
}
