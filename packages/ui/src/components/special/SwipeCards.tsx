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
  const y = useMotionValue(0);

  const rotate = useTransform(x, [-200, 0, 200], [-18, 0, 18]);
  const opacity = useTransform(x, [-threshold * 1.5, -threshold, 0, threshold, threshold * 1.5], [0, 1, 1, 1, 0]);

  // Left/right indicator opacity
  const leftOpacity = useTransform(x, [-threshold, -threshold * 0.3], [1, 0], { clamp: true });
  const rightOpacity = useTransform(x, [threshold * 0.3, threshold], [0, 1], { clamp: true });

  const isTop = index === total - 1;
  const offset = total - 1 - index;

  const handleDragEnd = () => {
    const xVal = x.get();
    if (Math.abs(xVal) > threshold) {
      const dir = xVal > 0 ? "right" : "left";
      animate(x, dir === "right" ? 600 : -600, { duration: 0.3, ease: "easeOut" });
      animate(y, 80, { duration: 0.3, ease: "easeOut" });
      onSwipe(dir);
    } else {
      animate(x, 0, { type: "spring", stiffness: 300, damping: 25 });
      animate(y, 0, { type: "spring", stiffness: 300, damping: 25 });
    }
  };

  if (offset >= visibleCount) return null;

  const scale = 1 - offset * 0.05;
  const yOffset = offset * 12;

  return (
    <motion.div
      className={cn(
        "absolute inset-0 rounded-2xl overflow-hidden select-none",
        isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none",
        cardClassName
      )}
      style={{
        x: isTop ? x : 0,
        y: isTop ? y : yOffset,
        rotate: isTop ? rotate : 0,
        opacity: isTop ? opacity : 1,
        scale,
        zIndex: index,
        transformOrigin: "50% 110%",
      }}
      drag={isTop ? true : false}
      onDragEnd={handleDragEnd}
      dragElastic={0.15}
    >
      {/* Swipe color wash */}
      {isTop && (
        <>
          <motion.div
            className="absolute inset-0 z-10 rounded-2xl bg-red-500/20 pointer-events-none"
            style={{ opacity: leftOpacity }}
          />
          <motion.div
            className="absolute inset-0 z-10 rounded-2xl bg-emerald-500/20 pointer-events-none"
            style={{ opacity: rightOpacity }}
          />
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
  className,
  cardClassName,
  threshold = 100,
  visibleCount = 3,
}: SwipeCardsProps) {
  const [cards, setCards] = useState(initialCards);

  const handleSwipe = (card: SwipeCard, direction: "left" | "right") => {
    setTimeout(() => {
      setCards((prev) => {
        const next = prev.filter((c) => c.id !== card.id);
        if (next.length === 0) onEmpty?.();
        return next;
      });
    }, 350);
    onSwipe?.(card, direction);
  };

  if (cards.length === 0) return null;

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
