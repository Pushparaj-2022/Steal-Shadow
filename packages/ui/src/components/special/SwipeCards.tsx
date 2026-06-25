"use client";

import { useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { cn } from "../../lib/utils";

export interface SwipeCard {
  id: string | number;
  content: React.ReactNode;
}

interface SwipeCardsProps {
  cards: SwipeCard[];
  onSwipe?: (card: SwipeCard, direction: "left" | "right") => void;
  onEmpty?: () => void;
  emptyContent?: React.ReactNode;
  className?: string;
  cardClassName?: string;
  threshold?: number;
  visibleCount?: number;
}

interface CardItemProps {
  card: SwipeCard;
  index: number;
  total: number;
  onSwipe: (direction: "left" | "right") => void;
  cardClassName?: string;
  threshold: number;
  visibleCount: number;
}

function CardItem({
  card,
  index,
  total,
  onSwipe,
  cardClassName,
  threshold,
  visibleCount,
}: CardItemProps) {
  const x = useMotionValue(0);

  const rotate = useTransform(x, [-250, 0, 250], [-20, 0, 20]);
  const opacity = useTransform(
    x,
    [-threshold * 1.8, -threshold * 0.8, 0, threshold * 0.8, threshold * 1.8],
    [0, 1, 1, 1, 0],
  );

  const leftOpacity  = useTransform(x, [-threshold, -threshold * 0.25], [1, 0], { clamp: true });
  const rightOpacity = useTransform(x, [threshold * 0.25, threshold],   [0, 1], { clamp: true });

  const isTop  = index === total - 1;
  const offset = total - 1 - index;

  if (offset >= visibleCount) return null;

  const scale   = 1 - offset * 0.05;
  const yOffset = offset * 14;

  const handleDragEnd = () => {
    const xVal = x.get();
    if (Math.abs(xVal) > threshold) {
      const dir = xVal > 0 ? "right" : "left";
      // Fly off screen
      animate(x, dir === "right" ? 700 : -700, { duration: 0.35, ease: "easeOut" });
      onSwipe(dir);
    } else {
      // Spring back
      animate(x, 0, { type: "spring", stiffness: 350, damping: 28 });
    }
  };

  return (
    <motion.div
      className={cn(
        "absolute inset-0 select-none overflow-hidden rounded-2xl",
        isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none",
        cardClassName,
      )}
      style={{
        x:     isTop ? x : 0,
        y:     yOffset,
        rotate: isTop ? rotate : 0,
        opacity: isTop ? opacity : 1,
        scale,
        zIndex: index,
        transformOrigin: "50% 120%",
      }}
      // Horizontal-only drag; disable post-release momentum so our animate() controls snap/fly
      drag={isTop ? "x" : false}
      dragMomentum={false}
      dragElastic={0.25}
      onDragEnd={handleDragEnd}
    >
      {/* Swipe indicators */}
      {isTop && (
        <>
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-red-500/25"
            style={{ opacity: leftOpacity }}
          />
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-emerald-500/25"
            style={{ opacity: rightOpacity }}
          />
          {/* NOPE / LIKE labels */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute left-4 top-4 z-20 rounded-lg border-2 border-red-500 px-3 py-1 text-sm font-black uppercase text-red-500"
            style={{ opacity: leftOpacity, rotate: -12 }}
          >
            Nope
          </motion.span>
          <motion.span
            aria-hidden
            className="pointer-events-none absolute right-4 top-4 z-20 rounded-lg border-2 border-emerald-500 px-3 py-1 text-sm font-black uppercase text-emerald-500"
            style={{ opacity: rightOpacity, rotate: 12 }}
          >
            Like
          </motion.span>
        </>
      )}
      {card.content}
    </motion.div>
  );
}

export function SwipeCards({
  cards: initialCards,
  onSwipe,
  onEmpty,
  emptyContent,
  className,
  cardClassName,
  threshold = 100,
  visibleCount = 3,
}: SwipeCardsProps) {
  const [cards, setCards] = useState(initialCards);

  const handleSwipe = (card: SwipeCard, direction: "left" | "right") => {
    onSwipe?.(card, direction);
    // Remove card after fly-off animation completes
    setTimeout(() => {
      setCards((prev) => {
        const next = prev.filter((c) => c.id !== card.id);
        if (next.length === 0) onEmpty?.();
        return next;
      });
    }, 380);
  };

  if (cards.length === 0) {
    return emptyContent ? (
      <div className={cn("relative", className)}>{emptyContent}</div>
    ) : null;
  }

  return (
    <div className={cn("relative", className)}>
      {cards.map((card, i) => (
        <CardItem
          key={card.id}
          card={card}
          index={i}
          total={cards.length}
          onSwipe={(dir) => handleSwipe(card, dir)}
          cardClassName={cardClassName}
          threshold={threshold}
          visibleCount={visibleCount}
        />
      ))}
    </div>
  );
}
