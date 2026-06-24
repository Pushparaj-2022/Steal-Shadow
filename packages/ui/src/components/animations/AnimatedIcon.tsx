"use client";

import { motion, type HTMLMotionProps, type TargetAndTransition, type Transition } from "motion/react";
import { cn } from "../../lib/utils";

type IconPreset = "spin" | "pulse" | "bounce" | "shake" | "pop" | "wiggle" | "ping" | "float";

interface AnimatedIconProps extends Omit<HTMLMotionProps<"span">, "animate" | "transition"> {
  preset?: IconPreset;
  color?: string;
  size?: number | string;
  continuous?: boolean;
  trigger?: "hover" | "always" | "click";
}

const PRESETS: Record<IconPreset, { animate: TargetAndTransition; transition: Transition; whileHover?: TargetAndTransition; initial?: TargetAndTransition }> = {
  spin: {
    animate: { rotate: 360 },
    transition: { duration: 1.5, repeat: Infinity, ease: "linear" },
  },
  pulse: {
    animate: { scale: [1, 1.2, 1] },
    transition: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
  },
  bounce: {
    animate: { y: [0, -8, 0] },
    transition: { duration: 0.7, repeat: Infinity, ease: "easeInOut" },
  },
  shake: {
    animate: { x: [0, -4, 4, -4, 4, 0] },
    transition: { duration: 0.5, repeat: Infinity, repeatDelay: 2 },
  },
  pop: {
    animate: { scale: 1 },
    transition: { type: "spring", stiffness: 400, damping: 10 },
    initial: { scale: 0 },
    whileHover: { scale: 1.2 },
  },
  wiggle: {
    animate: { rotate: [0, -12, 12, -12, 0] },
    transition: { duration: 0.6, repeat: Infinity, repeatDelay: 2 },
  },
  ping: {
    animate: { scale: [1, 1.4, 1], opacity: [1, 0.4, 1] },
    transition: { duration: 1.2, repeat: Infinity, ease: "easeOut" },
  },
  float: {
    animate: { y: [0, -6, 0], rotate: [0, 3, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

export function AnimatedIcon({
  children,
  preset = "pulse",
  color,
  size,
  continuous = true,
  trigger = "always",
  className,
  ...props
}: AnimatedIconProps) {
  const config = PRESETS[preset];

  const isHoverOnly = trigger === "hover";
  const isAlways = trigger === "always" && continuous;

  return (
    <motion.span
      className={cn("inline-flex items-center justify-center", className)}
      style={{ color, fontSize: size, width: size, height: size }}
      initial={config.initial}
      animate={isAlways ? config.animate : undefined}
      whileHover={isHoverOnly ? config.animate : config.whileHover}
      transition={config.transition}
      {...props}
    >
      {children}
    </motion.span>
  );
}
