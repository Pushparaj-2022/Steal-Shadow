"use client";

import dynamic from "next/dynamic";

const ComponentLibrarySection = dynamic(
  () => import("./component-library").then((m) => m.ComponentLibrarySection),
  {
    ssr: false,
    loading: () => (
      <div className="border-b border-zinc-100 py-24 px-4 sm:px-6 lg:px-8 dark:border-zinc-800">
        <div className="mx-auto max-w-6xl animate-pulse">
          <div className="mx-auto mb-14 h-24 max-w-lg space-y-3 text-center">
            <div className="mx-auto h-3 w-40 rounded bg-zinc-100 dark:bg-zinc-800" />
            <div className="mx-auto h-8 w-72 rounded bg-zinc-100 dark:bg-zinc-800" />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-[280px] rounded-2xl border border-zinc-100 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900" />
            ))}
          </div>
        </div>
      </div>
    ),
  }
);

export function ComponentLibraryLazy() {
  return <ComponentLibrarySection />;
}
