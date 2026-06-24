"use client";

import { motion } from "motion/react";
import { cn } from "../../lib/utils";

type PaginationProps = {
  total: number;
  page: number;
  pageSize?: number;
  onChange: (page: number) => void;
  className?: string;
};

function getPageNumbers(
  currentPage: number,
  totalPages: number
): (number | "...")[] {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const pages: (number | "...")[] = [];

  if (currentPage <= 4) {
    pages.push(1, 2, 3, 4, 5, "...", totalPages);
  } else if (currentPage >= totalPages - 3) {
    pages.push(
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages
    );
  } else {
    pages.push(
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages
    );
  }

  return pages;
}

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path
      fillRule="evenodd"
      d="M11.78 5.22a.75.75 0 010 1.06L8.06 10l3.72 3.72a.75.75 0 11-1.06 1.06l-4.25-4.25a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0z"
      clipRule="evenodd"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="h-4 w-4"
  >
    <path
      fillRule="evenodd"
      d="M8.22 5.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 010-1.06z"
      clipRule="evenodd"
    />
  </svg>
);

export function Pagination({
  total,
  page,
  pageSize = 10,
  onChange,
  className,
}: PaginationProps) {
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const pageNumbers = getPageNumbers(page, totalPages);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={cn("flex items-center gap-1", className)}
    >
      {/* Prev */}
      <motion.button
        type="button"
        aria-label="Previous page"
        disabled={!canPrev}
        onClick={() => canPrev && onChange(page - 1)}
        whileTap={canPrev ? { scale: 0.92 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition-colors",
          canPrev
            ? "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 cursor-pointer"
            : "border-neutral-100 bg-neutral-50 text-neutral-300 cursor-not-allowed pointer-events-none"
        )}
      >
        <ChevronLeftIcon />
      </motion.button>

      {/* Page numbers */}
      {pageNumbers.map((p, i) =>
        p === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className="flex h-9 w-9 items-center justify-center text-sm text-neutral-400 select-none"
            aria-hidden="true"
          >
            …
          </span>
        ) : (
          <motion.button
            key={p}
            type="button"
            aria-label={`Page ${p}`}
            aria-current={p === page ? "page" : undefined}
            onClick={() => onChange(p as number)}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg border text-sm font-medium transition-colors cursor-pointer",
              p === page
                ? "border-neutral-900 bg-neutral-900 text-white"
                : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100"
            )}
          >
            {p}
          </motion.button>
        )
      )}

      {/* Next */}
      <motion.button
        type="button"
        aria-label="Next page"
        disabled={!canNext}
        onClick={() => canNext && onChange(page + 1)}
        whileTap={canNext ? { scale: 0.92 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition-colors",
          canNext
            ? "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-100 cursor-pointer"
            : "border-neutral-100 bg-neutral-50 text-neutral-300 cursor-not-allowed pointer-events-none"
        )}
      >
        <ChevronRightIcon />
      </motion.button>
    </nav>
  );
}
