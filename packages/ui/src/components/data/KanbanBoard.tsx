"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, Reorder } from "motion/react";
import { cn } from "../../lib/utils";

export interface KanbanCard {
  id: string;
  title: string;
  description?: string;
  tags?: string[];
  assignee?: string;
  priority?: "low" | "medium" | "high" | "critical";
  meta?: React.ReactNode;
}

export interface KanbanColumn {
  id: string;
  title: string;
  color?: string;
  cards: KanbanCard[];
  limit?: number;
}

interface KanbanBoardProps {
  columns: KanbanColumn[];
  onChange?: (columns: KanbanColumn[]) => void;
  onCardClick?: (card: KanbanCard, columnId: string) => void;
  className?: string;
  renderCard?: (card: KanbanCard, columnId: string) => React.ReactNode;
}

const priorityColors = {
  low: "bg-slate-100 text-slate-600",
  medium: "bg-amber-100 text-amber-700",
  high: "bg-orange-100 text-orange-700",
  critical: "bg-red-100 text-red-700",
};

const priorityDots = {
  low: "bg-slate-400",
  medium: "bg-amber-500",
  high: "bg-orange-500",
  critical: "bg-red-500",
};

export function KanbanBoard({
  columns,
  onChange,
  onCardClick,
  className,
  renderCard,
}: KanbanBoardProps) {
  const [draggingCard, setDraggingCard] = useState<{ card: KanbanCard; fromCol: string } | null>(null);
  const [overCol, setOverCol] = useState<string | null>(null);

  function moveCard(card: KanbanCard, fromColId: string, toColId: string) {
    if (fromColId === toColId || !onChange) return;
    const next = columns.map((col) => {
      if (col.id === fromColId) return { ...col, cards: col.cards.filter((c) => c.id !== card.id) };
      if (col.id === toColId) {
        if (col.limit && col.cards.length >= col.limit) return col;
        return { ...col, cards: [...col.cards, card] };
      }
      return col;
    });
    onChange(next);
  }

  function reorderCards(colId: string, newCards: KanbanCard[]) {
    if (!onChange) return;
    onChange(columns.map((col) => col.id === colId ? { ...col, cards: newCards } : col));
  }

  return (
    <div className={cn("flex gap-4 overflow-x-auto pb-4", className)}>
      {columns.map((col) => {
        const isOver = overCol === col.id;
        const atLimit = col.limit !== undefined && col.cards.length >= col.limit;

        return (
          <div
            key={col.id}
            className={cn(
              "flex flex-col rounded-2xl w-72 shrink-0 transition-colors",
              "bg-neutral-100 border border-transparent",
              isOver && draggingCard?.fromCol !== col.id && !atLimit && "border-violet-300 bg-violet-50/50"
            )}
            onDragOver={(e) => { e.preventDefault(); setOverCol(col.id); }}
            onDragLeave={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget as Node)) setOverCol(null);
            }}
            onDrop={(e) => {
              e.preventDefault();
              if (draggingCard) moveCard(draggingCard.card, draggingCard.fromCol, col.id);
              setOverCol(null);
              setDraggingCard(null);
            }}
          >
            {/* Column header */}
            <div className="flex items-center justify-between px-4 py-3">
              <div className="flex items-center gap-2 min-w-0">
                {col.color && (
                  <span className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: col.color }} />
                )}
                <h3 className="text-sm font-semibold text-neutral-800 truncate">{col.title}</h3>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <span className={cn(
                  "text-xs font-medium px-1.5 py-0.5 rounded-full",
                  atLimit ? "bg-red-100 text-red-600" : "bg-neutral-200 text-neutral-500"
                )}>
                  {col.cards.length}{col.limit ? `/${col.limit}` : ""}
                </span>
              </div>
            </div>

            {/* Cards */}
            <div className="flex-1 px-3 pb-3 flex flex-col gap-2 min-h-[60px]">
              <AnimatePresence initial={false}>
                {col.cards.map((card) => (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    draggable
                    onDragStart={() => setDraggingCard({ card, fromCol: col.id })}
                    onDragEnd={() => { setDraggingCard(null); setOverCol(null); }}
                    onClick={() => onCardClick?.(card, col.id)}
                    className={cn(
                      "bg-white rounded-xl border border-neutral-200 p-3 shadow-sm",
                      "cursor-grab active:cursor-grabbing hover:shadow-md hover:border-violet-200 transition-all",
                      onCardClick && "cursor-pointer"
                    )}
                  >
                    {renderCard ? renderCard(card, col.id) : (
                      <>
                        {card.priority && (
                          <div className="mb-2">
                            <span className={cn("inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full", priorityColors[card.priority])}>
                              <span className={cn("h-1.5 w-1.5 rounded-full", priorityDots[card.priority])} />
                              {card.priority}
                            </span>
                          </div>
                        )}
                        <p className="text-sm font-medium text-neutral-800 leading-snug">{card.title}</p>
                        {card.description && (
                          <p className="text-xs text-neutral-500 mt-1 line-clamp-2">{card.description}</p>
                        )}
                        {(card.tags?.length || card.assignee || card.meta) && (
                          <div className="mt-2.5 flex items-center justify-between flex-wrap gap-1.5">
                            <div className="flex flex-wrap gap-1">
                              {card.tags?.map((tag) => (
                                <span key={tag} className="text-xs bg-neutral-100 text-neutral-500 px-2 py-0.5 rounded-full">{tag}</span>
                              ))}
                            </div>
                            <div className="flex items-center gap-2">
                              {card.meta}
                              {card.assignee && (
                                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500 flex items-center justify-center text-white text-xs font-bold">
                                  {card.assignee[0].toUpperCase()}
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>
              {col.cards.length === 0 && (
                <div className={cn(
                  "flex items-center justify-center h-16 rounded-xl border-2 border-dashed text-xs text-neutral-400 transition-colors",
                  isOver && !atLimit ? "border-violet-300 text-violet-400 bg-violet-50/50" : "border-neutral-200"
                )}>
                  Drop here
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
