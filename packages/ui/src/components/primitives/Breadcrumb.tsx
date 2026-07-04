"use client";

import { cn } from "../../lib/utils";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
  className?: string;
}

export function Breadcrumb({ items, separator = "/", className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("flex flex-wrap items-center gap-1.5", className)}>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5 min-w-0">
            {isLast ? (
              <span aria-current="page" className="text-sm font-semibold text-zinc-900 truncate">
                {item.label}
              </span>
            ) : item.href ? (
              <a href={item.href} className="text-sm text-zinc-500 transition-colors hover:text-zinc-900 truncate">
                {item.label}
              </a>
            ) : (
              <span className="text-sm text-zinc-500 truncate">{item.label}</span>
            )}
            {!isLast && (
              <span className="select-none text-zinc-300" aria-hidden="true">
                {separator}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
