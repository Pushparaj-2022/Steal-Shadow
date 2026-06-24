"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

interface TypewriterTextProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  cursor?: boolean;
  prefix?: string;
}

export function TypewriterText({
  words,
  className,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1800,
  cursor = true,
  prefix,
}: TypewriterTextProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(timeout);
    }

    const target = words[currentWordIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(target.slice(0, currentText.length + 1));
        if (currentText.length + 1 === target.length) setIsPaused(true);
      } else {
        setCurrentText(target.slice(0, currentText.length - 1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPaused, currentWordIndex, words, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className={cn("inline-flex items-baseline gap-1", className)}>
      {prefix && <span>{prefix}</span>}
      <span>{currentText}</span>
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-0.5 h-[1em] bg-current ml-0.5 translate-y-0.5"
        />
      )}
    </span>
  );
}
