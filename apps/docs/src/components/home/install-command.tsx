"use client";

import { useState } from "react";
import { IcCopy, IcCheckDbl } from "@/components/icons";

export function InstallCommand({ variant = "default" }: { variant?: "default" | "bare" }) {
  const [copied, setCopied] = useState(false);
  const cmd = "npm install @stealshadow/ui motion";
  const copy = () => {
    navigator.clipboard.writeText(cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const shell = variant === "bare"
    ? "px-4 py-2.5"
    : "rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 px-5 py-3 hover:border-zinc-300 dark:hover:border-zinc-600 transition-colors";
  return (
    <button
      onClick={copy}
      className={`group inline-flex items-center gap-3 font-mono text-sm text-left ${shell}`}
    >
      <span className="text-zinc-400">$</span>
      <span className="text-emerald-600 dark:text-emerald-400">npm install</span>
      <span className="text-zinc-700 dark:text-zinc-300">@stealshadow/ui motion</span>
      <span className="ml-2 text-zinc-300 dark:text-zinc-600 group-hover:text-zinc-500 dark:group-hover:text-zinc-400 transition-colors">
        {copied ? <IcCheckDbl className="h-4 w-4 text-emerald-500" /> : <IcCopy className="h-4 w-4" />}
      </span>
    </button>
  );
}
