"use client";

import { motion } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const cardVariants = cva("rounded-2xl p-6 relative overflow-hidden", {
  variants: {
    variant: {
      default: "bg-white border border-neutral-200 shadow-sm",
      glass: "bg-white/10 backdrop-blur-md border border-white/20 shadow-lg",
      gradient: "bg-gradient-to-br from-violet-50 to-indigo-50 border border-violet-100",
      dark: "bg-neutral-900 border border-neutral-800 text-white",
      outline: "bg-transparent border-2 border-neutral-200",
    },
    hover: {
      none: "",
      lift: "",
      glow: "",
      tilt: "",
    },
  },
  defaultVariants: {
    variant: "default",
    hover: "lift",
  },
});

type CardProps = VariantProps<typeof cardVariants> & {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className, variant, hover = "lift" }: CardProps) {
  const hoverAnim =
    hover === "lift"
      ? { y: -4, shadow: "0 20px 40px rgba(0,0,0,0.1)" }
      : hover === "glow"
      ? { boxShadow: "0 0 30px rgba(139,92,246,0.3)" }
      : hover === "tilt"
      ? { rotateX: 4, rotateY: 4 }
      : {};

  return (
    <motion.div
      className={cn(cardVariants({ variant, hover }), className)}
      whileHover={hoverAnim}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={hover === "tilt" ? { transformStyle: "preserve-3d" } : {}}
    >
      {children}
    </motion.div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn("text-lg font-semibold text-neutral-900", className)}>{children}</h3>;
}

export function CardDescription({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-sm text-neutral-500 mt-1", className)}>{children}</p>;
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn(className)}>{children}</div>;
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("mt-4 flex items-center", className)}>{children}</div>;
}
