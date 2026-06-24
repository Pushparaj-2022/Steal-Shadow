"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

export interface ColumnDef<T> {
  key: keyof T | string;
  header: string;
  /** Render cell content — if omitted, renders the raw value */
  cell?: (row: T, index: number) => React.ReactNode;
  sortable?: boolean;
  width?: string;
  align?: "left" | "center" | "right";
  /** Used for mobile card view label */
  mobileLabel?: string;
  /** Hide on mobile */
  hideOnMobile?: boolean;
}

interface DataTableProps<T extends Record<string, unknown>> {
  data: T[];
  columns: ColumnDef<T>[];
  className?: string;
  /** Number of rows per page — 0 disables pagination */
  pageSize?: number;
  searchable?: boolean;
  searchPlaceholder?: string;
  emptyMessage?: string;
  loading?: boolean;
  /** Called on row click */
  onRowClick?: (row: T) => void;
  /** Render a custom toolbar slot (right side) */
  toolbar?: React.ReactNode;
  /** Switch to card layout on mobile */
  mobileLayout?: "cards" | "scroll";
  rowClassName?: (row: T) => string;
  caption?: string;
}

type SortDir = "asc" | "desc" | null;

function getValue<T>(row: T, key: string): unknown {
  return (key as string).split(".").reduce((obj: unknown, k) => {
    if (obj && typeof obj === "object") return (obj as Record<string, unknown>)[k];
    return undefined;
  }, row);
}

export function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  className,
  pageSize = 10,
  searchable = true,
  searchPlaceholder = "Search…",
  emptyMessage = "No results found.",
  loading = false,
  onRowClick,
  toolbar,
  mobileLayout = "cards",
  rowClassName,
  caption,
}: DataTableProps<T>) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>(null);
  const [page, setPage] = useState(1);

  const searchable_columns = columns.filter((c) => !c.cell);

  const filtered = useMemo(() => {
    if (!search.trim()) return data;
    const q = search.toLowerCase();
    return data.filter((row) =>
      columns.some((col) => {
        const v = getValue(row, col.key as string);
        return String(v ?? "").toLowerCase().includes(q);
      })
    );
  }, [data, search, columns]);

  const sorted = useMemo(() => {
    if (!sortKey || !sortDir) return filtered;
    return [...filtered].sort((a, b) => {
      const av = getValue(a, sortKey);
      const bv = getValue(b, sortKey);
      const cmp = String(av ?? "") < String(bv ?? "") ? -1 : String(av ?? "") > String(bv ?? "") ? 1 : 0;
      return sortDir === "asc" ? cmp : -cmp;
    });
  }, [filtered, sortKey, sortDir]);

  const totalPages = pageSize > 0 ? Math.ceil(sorted.length / pageSize) : 1;

  useEffect(() => { setPage(1); }, [search, sortKey, sortDir]);

  const paged = pageSize > 0 ? sorted.slice((page - 1) * pageSize, page * pageSize) : sorted;

  function toggleSort(key: string) {
    if (sortKey !== key) { setSortKey(key); setSortDir("asc"); return; }
    if (sortDir === "asc") { setSortDir("desc"); return; }
    setSortKey(null); setSortDir(null);
  }

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      {/* ── Toolbar ── */}
      {(searchable || toolbar) && (
        <div className="flex items-center justify-between gap-3 flex-wrap">
          {searchable && (
            <div className="relative min-w-[200px]">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={searchPlaceholder}
                className="h-9 w-full rounded-xl border border-neutral-200 bg-white pl-9 pr-3 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-colors"
              />
            </div>
          )}
          {toolbar && <div className="flex items-center gap-2">{toolbar}</div>}
        </div>
      )}

      {/* ── Desktop Table ── */}
      <div className={cn(
        "rounded-2xl border border-neutral-200 overflow-hidden bg-white",
        mobileLayout === "cards" && "hidden md:block"
      )}>
        <div className="overflow-x-auto">
          <table className="w-full text-sm" role="grid" aria-label={caption}>
            {caption && <caption className="sr-only">{caption}</caption>}
            <thead>
              <tr className="border-b border-neutral-100 bg-neutral-50">
                {columns.map((col) => (
                  <th
                    key={col.key as string}
                    scope="col"
                    className={cn(
                      "px-4 py-3 font-semibold text-neutral-600 whitespace-nowrap",
                      col.align === "center" && "text-center",
                      col.align === "right" && "text-right",
                      col.sortable && "cursor-pointer select-none hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                    )}
                    style={{ width: col.width }}
                    onClick={col.sortable ? () => toggleSort(col.key as string) : undefined}
                    aria-sort={sortKey === col.key ? (sortDir === "asc" ? "ascending" : "descending") : "none"}
                  >
                    <span className="inline-flex items-center gap-1">
                      {col.header}
                      {col.sortable && (
                        <span className="inline-flex flex-col gap-px" aria-hidden>
                          <svg className={cn("h-2.5 w-2.5 transition-colors", sortKey === col.key && sortDir === "asc" ? "text-violet-600" : "text-neutral-300")} viewBox="0 0 10 6" fill="currentColor">
                            <path d="M0 6l5-6 5 6H0z" />
                          </svg>
                          <svg className={cn("h-2.5 w-2.5 transition-colors", sortKey === col.key && sortDir === "desc" ? "text-violet-600" : "text-neutral-300")} viewBox="0 0 10 6" fill="currentColor">
                            <path d="M0 0l5 6 5-6H0z" />
                          </svg>
                        </span>
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {loading && (
                <tr>
                  <td colSpan={columns.length} className="px-4 py-12 text-center">
                    <div className="flex flex-col items-center gap-3 text-neutral-400">
                      <motion.div
                        className="h-6 w-6 rounded-full border-2 border-violet-300 border-t-violet-600"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                      />
                      <span className="text-sm">Loading data…</span>
                    </div>
                  </td>
                </tr>
              )}
              {!loading && paged.length === 0 && (
                <tr>
                  <td colSpan={columns.length} className="px-4 py-12 text-center text-sm text-neutral-400">
                    {emptyMessage}
                  </td>
                </tr>
              )}
              <AnimatePresence initial={false}>
                {!loading && paged.map((row, ri) => (
                  <motion.tr
                    key={ri}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    onClick={() => onRowClick?.(row)}
                    className={cn(
                      "border-b border-neutral-50 last:border-0 transition-colors",
                      onRowClick && "cursor-pointer hover:bg-violet-50/50",
                      rowClassName?.(row)
                    )}
                  >
                    {columns.map((col) => (
                      <td
                        key={col.key as string}
                        className={cn(
                          "px-4 py-3 text-neutral-700",
                          col.align === "center" && "text-center",
                          col.align === "right" && "text-right"
                        )}
                      >
                        {col.cell
                          ? col.cell(row, ri)
                          : String(getValue(row, col.key as string) ?? "")}
                      </td>
                    ))}
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Mobile Cards ── */}
      {mobileLayout === "cards" && (
        <div className="md:hidden flex flex-col gap-3">
          {loading ? (
            <div className="flex justify-center py-10 text-neutral-400">
              <motion.div className="h-6 w-6 rounded-full border-2 border-violet-300 border-t-violet-600" animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }} />
            </div>
          ) : paged.length === 0 ? (
            <p className="text-center text-sm text-neutral-400 py-8">{emptyMessage}</p>
          ) : (
            paged.map((row, ri) => (
              <motion.div
                key={ri}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: ri * 0.04 }}
                onClick={() => onRowClick?.(row)}
                className={cn(
                  "rounded-2xl border border-neutral-200 bg-white p-4 flex flex-col gap-2",
                  onRowClick && "cursor-pointer hover:border-violet-300 hover:shadow-sm transition-all",
                  rowClassName?.(row)
                )}
              >
                {columns.filter((c) => !c.hideOnMobile).map((col) => (
                  <div key={col.key as string} className="flex justify-between items-start gap-3">
                    <span className="text-xs font-medium text-neutral-400 shrink-0">
                      {col.mobileLabel ?? col.header}
                    </span>
                    <span className="text-sm text-neutral-800 text-right">
                      {col.cell ? col.cell(row, ri) : String(getValue(row, col.key as string) ?? "")}
                    </span>
                  </div>
                ))}
              </motion.div>
            ))
          )}
        </div>
      )}

      {/* ── Pagination ── */}
      {pageSize > 0 && totalPages > 1 && (
        <div className="flex items-center justify-between flex-wrap gap-3">
          <span className="text-xs text-neutral-500">
            Showing {(page - 1) * pageSize + 1}–{Math.min(page * pageSize, sorted.length)} of {sorted.length}
          </span>
          <div className="flex items-center gap-1">
            <PageBtn disabled={page === 1} onClick={() => setPage(1)} aria-label="First page">«</PageBtn>
            <PageBtn disabled={page === 1} onClick={() => setPage((p) => p - 1)} aria-label="Previous page">‹</PageBtn>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const n = Math.max(1, Math.min(totalPages - 4, page - 2)) + i;
              return (
                <PageBtn key={n} active={n === page} onClick={() => setPage(n)}>{n}</PageBtn>
              );
            })}
            <PageBtn disabled={page === totalPages} onClick={() => setPage((p) => p + 1)} aria-label="Next page">›</PageBtn>
            <PageBtn disabled={page === totalPages} onClick={() => setPage(totalPages)} aria-label="Last page">»</PageBtn>
          </div>
        </div>
      )}
    </div>
  );
}

function PageBtn({
  children,
  onClick,
  disabled,
  active,
  "aria-label": ariaLabel,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  active?: boolean;
  "aria-label"?: string;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-current={active ? "page" : undefined}
      className={cn(
        "h-7 min-w-[1.75rem] px-2 rounded-lg text-xs font-medium transition-colors",
        active
          ? "bg-violet-600 text-white"
          : "bg-white border border-neutral-200 text-neutral-600 hover:border-violet-300 hover:text-violet-600",
        disabled && "opacity-40 cursor-not-allowed hover:border-neutral-200 hover:text-neutral-600"
      )}
    >
      {children}
    </button>
  );
}
