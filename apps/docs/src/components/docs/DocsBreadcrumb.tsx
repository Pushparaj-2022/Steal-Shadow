"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

function capitalize(s: string) {
  return s
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function DocsBreadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-neutral-500">
      <Link href="/" className="hover:text-neutral-900 transition-colors">
        Home
      </Link>
      {segments.map((segment, i) => {
        const href = "/" + segments.slice(0, i + 1).join("/");
        const isLast = i === segments.length - 1;
        return (
          <span key={href} className="flex items-center gap-1.5">
            <ChevronRight className="h-3.5 w-3.5 text-neutral-300" />
            {isLast ? (
              <span className="font-medium text-neutral-900">{capitalize(segment)}</span>
            ) : (
              <Link href={href} className="hover:text-neutral-900 transition-colors">
                {capitalize(segment)}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
