"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface AuroraBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  colors?: [string, string, string];
  speed?: "slow" | "normal" | "fast";
  blur?: number;
}

export function AuroraBackground({
  children,
  className,
  colors = ["#8b5cf6", "#3b82f6", "#10b981"],
  speed = "normal",
  blur = 80,
}: AuroraBackgroundProps) {
  const durationMap = { slow: 20, normal: 12, fast: 6 };
  const d = durationMap[speed];

  const blobs = [
    { size: "60%", initialX: "10%", initialY: "20%", targetX: "60%", targetY: "70%", color: colors[0] },
    { size: "55%", initialX: "70%", initialY: "10%", targetX: "20%", targetY: "60%", color: colors[1] },
    { size: "50%", initialX: "40%", initialY: "60%", targetX: "75%", targetY: "20%", color: colors[2] },
  ];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="absolute inset-0 pointer-events-none">
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full opacity-60"
            style={{
              width: blob.size,
              paddingTop: blob.size,
              background: `radial-gradient(circle at center, ${blob.color}88, transparent 70%)`,
              filter: `blur(${blur}px)`,
              left: blob.initialX,
              top: blob.initialY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              left: [blob.initialX, blob.targetX, blob.initialX],
              top:  [blob.initialY, blob.targetY, blob.initialY],
            }}
            transition={{ duration: d + i * 3, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
}
