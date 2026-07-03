"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { cn } from "../../lib/utils";

interface MeteorsProps {
  count?: number;
  className?: string;
  color?: string;
}

interface MeteorConfig {
  id: number;
  left: string;
  delay: number;
  duration: number;
  size: number;
  repeatDelay: number;
}

export function Meteors({ count = 15, className, color = "rgba(255,255,255,0.7)" }: MeteorsProps) {
  // Randomized per-meteor values must not be generated during SSR: the server and the
  // client would each call Math.random() independently and produce different markup,
  // causing a hydration mismatch. Instead we render nothing until after mount, then
  // generate the random layout once on the client.
  const [meteors, setMeteors] = useState<MeteorConfig[]>([]);

  useEffect(() => {
    setMeteors(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: `${Math.floor(Math.random() * 100)}%`,
        delay: Math.random() * 4,
        duration: Math.random() * 2 + 1.5,
        size: Math.random() * 60 + 40,
        repeatDelay: Math.random() * 4 + 2,
      }))
    );
  }, [count]);

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      {meteors.map((m) => (
        <motion.span
          key={m.id}
          className="absolute top-0"
          style={{
            left: m.left,
            width: `${m.size}px`,
            height: "2px",
            borderRadius: "9999px",
            background: `linear-gradient(90deg, ${color}, transparent)`,
            boxShadow: `0 0 6px 1px ${color}`,
            rotate: "215deg",
            transformOrigin: "left center",
          }}
          animate={{
            x: ["0vw", "100vw"],
            y: ["0vh", "80vh"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: m.duration,
            repeat: Infinity,
            delay: m.delay,
            ease: "linear",
            repeatDelay: m.repeatDelay,
          }}
        />
      ))}
    </div>
  );
}
