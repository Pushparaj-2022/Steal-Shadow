"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import {
  IcChevR, IcCheck, IcSearch, IcEdit, IcTrash, IcClip, IcBookmark, IcX, IcArrow,
} from "@/components/icons";
import {
  LayoutGrid, MousePointerClick, FileText, ToggleLeft, AlignJustify,
  Layers, PenLine, Wrench, UploadCloud, List, ChevronRight, SlidersHorizontal,
  MessageSquare, Zap, Code2, Star, Tag,
} from "lucide-react";

const TABS = ["All", "Special", "Components", "Data", "AI"] as const;
type Tab = (typeof TABS)[number];

const CAT_DOT: Record<string, string> = {
  Data:       "bg-sky-500",
  Special:    "bg-violet-500",
  AI:         "bg-blue-500",
  Components: "bg-emerald-500",
  Forms:      "bg-rose-500",
  Overlays:   "bg-amber-500",
  Layout:     "bg-orange-500",
  Primitives: "bg-teal-500",
};

const CAT_TEXT: Record<string, string> = {
  Data:       "text-sky-600 dark:text-sky-400",
  Special:    "text-violet-600 dark:text-violet-400",
  AI:         "text-blue-600 dark:text-blue-400",
  Components: "text-emerald-600 dark:text-emerald-400",
  Forms:      "text-rose-600 dark:text-rose-400",
  Overlays:   "text-amber-600 dark:text-amber-400",
  Layout:     "text-orange-600 dark:text-orange-400",
  Primitives: "text-teal-600 dark:text-teal-400",
};

function PreviewCard({
  children, name, category, href, className = "",
}: {
  children: React.ReactNode;
  name: string;
  category: string;
  href: string;
  className?: string;
}) {
  const dot = CAT_DOT[category] ?? "bg-zinc-400";
  const label = CAT_TEXT[category] ?? "text-zinc-500";
  return (
    <Link
      href={href}
      className={`group flex flex-col rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_8px_40px_rgba(0,0,0,0.45)] hover:-translate-y-[3px] transition-all duration-300 ${className}`}
    >
      <div className="flex-1 overflow-hidden min-h-0">{children}</div>
      <div className="shrink-0 flex items-center justify-between px-4 py-3 border-t border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
        <div className="flex items-center gap-2.5">
          <span className={`h-1.5 w-1.5 rounded-full shrink-0 ${dot}`} />
          <div>
            <p className="text-[13px] font-semibold text-zinc-800 dark:text-zinc-100 leading-none">{name}</p>
            <p className={`text-[9px] font-bold uppercase tracking-[0.1em] mt-1 ${label}`}>{category}</p>
          </div>
        </div>
        <span className="flex h-7 w-7 items-center justify-center rounded-xl bg-zinc-50 dark:bg-zinc-800 group-hover:bg-zinc-100 dark:group-hover:bg-zinc-700 transition-colors">
          <IcChevR size={11} className="text-zinc-400 group-hover:translate-x-0.5 transition-transform duration-200" />
        </span>
      </div>
    </Link>
  );
}

function PlaceholderPreview({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <div className="flex-1 flex items-center justify-center py-8">
      <Icon size={36} className="text-zinc-200 dark:text-zinc-700" strokeWidth={1.25} />
    </div>
  );
}

// ─── Preview components ────────────────────────────────────────────────────

function DockPreview() {
  const items = [
    { bg: "bg-blue-500", letter: "H" }, { bg: "bg-orange-500", letter: "S" },
    { bg: "bg-red-500", letter: "N" }, { bg: "bg-emerald-500", letter: "L" },
    { bg: "bg-violet-500", letter: "P" },
  ];
  return (
    <div className="flex h-full flex-col p-5">
      <div className="flex-1 flex items-end justify-center pb-3">
        <div className="flex items-end gap-1.5 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl px-3 py-2 shadow-2xl dark:border-zinc-700/40 dark:bg-zinc-800/60">
          {items.map(({ bg, letter }, i) => {
            const dist = Math.abs(i - 2);
            const scale = dist === 0 ? 1.6 : dist === 1 ? 1.25 : 1;
            return (
              <div
                key={i}
                className={`flex items-center justify-center rounded-xl ${bg} font-black text-white shadow-sm transition-all duration-300`}
                style={{ width: 40 * scale, height: 40 * scale, fontSize: 12 * scale * 0.7 }}
              >
                {letter}
              </div>
            );
          })}
        </div>
      </div>
      <p className="text-center text-[10px] text-zinc-400">Mouse-driven spring magnification</p>
    </div>
  );
}

function NumberFlowPreview() {
  return (
    <div className="flex h-full flex-col p-5">
      <div className="flex-1 flex flex-col items-center justify-center gap-3">
        <div className="text-5xl font-black text-zinc-900 dark:text-white tabular-nums">$49,200</div>
        <div className="flex gap-2">
          {["MRR", "↑12%", "Live"].map((t, i) => (
            <span
              key={t}
              className={`rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                i === 0
                  ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
                  : i === 1
                  ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400"
                  : "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"
              }`}
            >
              {t}
            </span>
          ))}
        </div>
        <p className="text-[10px] text-zinc-400">Each digit rolls independently via spring</p>
      </div>
    </div>
  );
}

function MultiSelectPreview() {
  const tokens = ["React", "TypeScript", "Next.js"];
  return (
    <div className="flex h-full flex-col p-5">
      <div className="flex-1 space-y-2.5">
        <div className="flex min-h-[44px] flex-wrap items-center gap-1.5 rounded-xl border border-blue-400 ring-2 ring-blue-100 dark:ring-blue-900/40 bg-white dark:bg-zinc-900 px-3 py-2">
          {tokens.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/60 px-2 py-0.5 text-[11px] font-semibold text-blue-700 dark:text-blue-300"
            >
              {t}
              <IcX size={10} className="text-blue-400 cursor-pointer shrink-0" />
            </span>
          ))}
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 overflow-hidden shadow-lg">
          <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800 px-3 py-2">
            <IcSearch size={12} className="text-zinc-400 shrink-0" />
            <span className="text-xs text-zinc-400">Search frameworks…</span>
          </div>
          {[["Vue"], ["Svelte"], ["SolidJS"]].map(([name], i) => (
            <div
              key={name}
              className={`flex items-center gap-2.5 px-3 py-2 text-xs ${i === 0 ? "bg-neutral-50 dark:bg-zinc-800/60" : ""}`}
            >
              <span
                className={`flex h-3.5 w-3.5 items-center justify-center rounded border ${
                  i === 0 ? "border-blue-500 bg-blue-500" : "border-zinc-300 dark:border-zinc-600"
                }`}
              >
                {i === 0 && <IcCheck size={9} className="text-white" />}
              </span>
              <span className="font-medium text-zinc-700 dark:text-zinc-300">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PricingPreview() {
  return (
    <div className="flex h-full flex-col gap-3 p-5">
      <div className="flex items-center justify-center gap-3 mb-1">
        <span className="text-xs text-zinc-400">Monthly</span>
        <div className="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-500">
          <span className="absolute right-0.5 h-4 w-4 rounded-full bg-white shadow-sm" />
        </div>
        <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-200 flex items-center gap-1">
          Annual{" "}
          <span className="rounded-full bg-emerald-100 dark:bg-emerald-900/40 px-1.5 py-0.5 text-[9px] font-bold text-emerald-700 dark:text-emerald-400">
            -20%
          </span>
        </span>
      </div>
      <div className="flex gap-2 flex-1">
        {[
          { name: "Starter", price: "$0", highlight: false },
          { name: "Pro", price: "$23", highlight: true, badge: "Popular" },
          { name: "Team", price: "$79", highlight: false },
        ].map((p) => (
          <div
            key={p.name}
            className={`relative flex flex-1 flex-col items-center rounded-xl border p-3 ${
              p.highlight
                ? "border-blue-400 bg-gradient-to-b from-blue-500 to-blue-600"
                : "border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900"
            }`}
          >
            {p.badge && (
              <span className="absolute -top-2 rounded-full bg-amber-400 px-2 py-0.5 text-[9px] font-black text-white">
                {p.badge}
              </span>
            )}
            <p className={`text-[10px] font-bold mb-1 ${p.highlight ? "text-blue-100" : "text-zinc-500"}`}>{p.name}</p>
            <p className={`text-base font-black tabular-nums ${p.highlight ? "text-white" : "text-zinc-900 dark:text-white"}`}>
              {p.price}
            </p>
            <p className={`text-[9px] mb-1 ${p.highlight ? "text-blue-100" : "text-zinc-400"}`}>/mo</p>
            <button
              className={`mt-auto w-full rounded-lg py-1 text-[9px] font-bold ${
                p.highlight ? "bg-white text-blue-600" : "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
              }`}
            >
              Get it
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContextMenuPreview() {
  const items = [
    { icon: <IcEdit size={12} />, label: "Edit", shortcut: "⌘E" },
    { icon: <IcClip size={12} />, label: "Copy", shortcut: "⌘C" },
    { icon: <IcBookmark size={12} />, label: "Save", shortcut: "" },
    { divider: true },
    { icon: <IcTrash size={12} />, label: "Delete", shortcut: "Del", danger: true },
  ] as { icon?: React.ReactNode; label?: string; shortcut?: string; danger?: boolean; divider?: boolean }[];
  return (
    <div className="flex h-full flex-col p-5">
      <div className="flex-1 flex items-center justify-center">
        <div className="rounded-xl border border-zinc-200/80 dark:border-zinc-700/80 bg-white/95 dark:bg-zinc-900/95 p-1 shadow-xl backdrop-blur-xl w-44">
          {items.map((item, i) =>
            item.divider ? (
              <div key={i} className="my-1 h-px bg-zinc-100 dark:bg-zinc-800" />
            ) : (
              <div
                key={i}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-xs ${
                  item.danger
                    ? "text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30"
                    : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                } cursor-pointer transition-colors`}
              >
                <span className="shrink-0">{item.icon}</span>
                <span className="flex-1 font-medium">{item.label}</span>
                {item.shortcut && <span className="font-mono text-[10px] text-zinc-400">{item.shortcut}</span>}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function ChatPreview() {
  return (
    <div className="flex h-full flex-col gap-3.5 p-6">
      <div className="flex items-end gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-[10px] font-bold text-white">
          AI
        </div>
        <div className="max-w-[78%] rounded-2xl rounded-bl-sm bg-zinc-100 dark:bg-zinc-800 px-4 py-2.5 text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
          I&apos;ll build a KanbanBoard with three columns and drag-and-drop support.
        </div>
      </div>
      <div className="flex items-center gap-2.5 rounded-xl border border-amber-200 dark:border-amber-800/50 bg-amber-50 dark:bg-amber-950/30 px-3.5 py-2.5">
        <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-amber-400" />
        <code className="truncate text-[11px] text-amber-700 dark:text-amber-400">
          {`generate_component({ type: "KanbanBoard" })`}
        </code>
      </div>
      <div className="flex items-end gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-[10px] font-bold text-white">
          AI
        </div>
        <div className="rounded-2xl rounded-bl-sm bg-zinc-100 dark:bg-zinc-800 px-4 py-2.5 text-xs text-zinc-700 dark:text-zinc-300">
          Done — search, DnD, dark theme included
          <span className="ml-1 inline-block h-3.5 w-0.5 animate-pulse bg-zinc-400" />
        </div>
      </div>
    </div>
  );
}

function ButtonPreview() {
  return (
    <div className="flex h-full flex-col gap-3 p-6">
      <button className="w-full rounded-xl bg-zinc-900 dark:bg-white py-2.5 text-xs font-bold text-white dark:text-zinc-900 hover:opacity-90 transition-opacity">
        Primary
      </button>
      <button className="w-full rounded-xl border border-zinc-200 dark:border-zinc-600 py-2.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
        Secondary
      </button>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-500 py-2.5 text-xs font-bold text-white">
        <span className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
        Loading
      </button>
      <button className="w-full rounded-xl border border-red-200 dark:border-red-800/50 bg-red-50 dark:bg-red-950/40 py-2.5 text-xs font-semibold text-red-600 dark:text-red-400">
        Destructive
      </button>
    </div>
  );
}

function BadgePreview() {
  return (
    <div className="flex h-full flex-col gap-4 p-6">
      <div className="flex flex-wrap gap-1.5">
        {(
          [
            ["New", "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300"],
            ["Active", "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400"],
            ["Beta", "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400"],
            ["Pro", "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"],
            ["Deprecated", "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"],
          ] as [string, string][]
        ).map(([l, c]) => (
          <span key={l} className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${c}`}>
            {l}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <div className="flex">
          {(["bg-blue-500", "bg-emerald-500", "bg-violet-500", "bg-amber-500"] as string[]).map((bg, i) => (
            <div
              key={i}
              style={{ marginLeft: i ? "-8px" : 0, zIndex: 4 - i }}
              className={`flex h-9 w-9 items-center justify-center rounded-full border-2 border-white dark:border-zinc-900 text-[11px] font-bold text-white ${bg}`}
            >
              {["S", "A", "J", "R"][i]}
            </div>
          ))}
        </div>
        <div>
          <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">Team</p>
          <p className="text-[11px] text-zinc-400">+24 contributors</p>
        </div>
      </div>
    </div>
  );
}

function FormPreview() {
  return (
    <div className="flex h-full flex-col gap-3 p-6">
      <div>
        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-zinc-400">
          Full name
        </label>
        <input
          readOnly
          defaultValue="Jane Doe"
          className="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-transparent px-3 py-2.5 text-sm outline-none"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-[11px] font-semibold uppercase tracking-wide text-zinc-400">Email</label>
        <div className="relative">
          <input
            readOnly
            defaultValue="not-valid@"
            className="w-full rounded-xl border border-red-300 dark:border-red-700/70 bg-red-50 dark:bg-red-950/20 px-3 py-2.5 pr-16 text-sm outline-none"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-red-500">Invalid</span>
        </div>
        <p className="mt-1.5 text-[11px] text-red-500">Enter a valid email address</p>
      </div>
      <button className="mt-auto w-full rounded-xl bg-zinc-900 dark:bg-white py-2.5 text-xs font-bold text-white dark:text-zinc-900">
        Save changes
      </button>
    </div>
  );
}

function TablePreview() {
  const rows = [
    ["Alice Martin", "Admin", "Active", "$249/mo"],
    ["Bob Chen", "Editor", "Trial", "$0"],
    ["Priya Singh", "Viewer", "Active", "$99/mo"],
    ["Tom Eriksen", "Admin", "Paused", "—"],
  ];
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex items-center justify-between px-5 pt-5 pb-3">
        <div className="flex gap-2">
          <input
            placeholder="Search…"
            className="w-28 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-transparent px-2.5 py-1.5 text-[11px] outline-none focus:border-blue-400 transition-colors"
          />
          <button className="rounded-lg border border-zinc-200 dark:border-zinc-700 px-2.5 py-1.5 text-[11px] text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
            Filter
          </button>
        </div>
      </div>
      <table className="w-full text-xs">
        <thead>
          <tr className="border-y border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60">
            {["User", "Role", "Status", "MRR"].map((h) => (
              <th key={h} className="px-5 py-2.5 text-left text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([name, role, status, mrr], i) => (
            <tr
              key={i}
              className="border-b border-zinc-50 dark:border-zinc-800/40 hover:bg-zinc-50/80 dark:hover:bg-zinc-800/40 transition-colors"
            >
              <td className="px-5 py-3 font-medium text-zinc-800 dark:text-zinc-200">{name}</td>
              <td className="px-5 py-3 text-zinc-500">{role}</td>
              <td className="px-5 py-3">
                <span
                  className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold ${
                    status === "Active"
                      ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400"
                      : status === "Trial"
                      ? "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400"
                      : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500"
                  }`}
                >
                  {status}
                </span>
              </td>
              <td className="px-5 py-3 font-mono font-semibold text-zinc-600 dark:text-zinc-400">{mrr}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-auto flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 px-5 py-3 text-[11px] text-zinc-400">
        <span>4 of 1,284 users</span>
        <div className="flex gap-1">
          {[1, 2, 3, "…"].map((p, i) => (
            <button
              key={i}
              className={`h-6 min-w-[24px] rounded-md px-1.5 text-[11px] transition-colors ${
                p === 1
                  ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-semibold"
                  : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function KanbanPreview() {
  const cols = [
    { label: "Todo", dot: "bg-zinc-400", cards: ["Design review", "API docs", "Unit tests"] },
    { label: "In Progress", dot: "bg-blue-500", cards: ["Homepage hero", "Auth flow"] },
    { label: "Done", dot: "bg-emerald-500", cards: ["Monorepo setup", "CI pipeline", "Lib"] },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-5">
      <div className="flex flex-1 gap-3">
        {cols.map(({ label, dot, cards }) => (
          <div key={label} className="flex flex-1 flex-col gap-1.5">
            <div className="mb-1 flex items-center gap-1.5">
              <span className={`h-2 w-2 rounded-full ${dot}`} />
              <span className="truncate text-[11px] font-semibold text-zinc-500">{label}</span>
              <span className="ml-auto font-mono text-[10px] text-zinc-400">{cards.length}</span>
            </div>
            {cards.map((c, i) => (
              <div
                key={i}
                className="cursor-grab rounded-xl border border-zinc-100 dark:border-zinc-700/60 bg-white dark:bg-zinc-800/80 px-3 py-2 text-[11px] text-zinc-700 dark:text-zinc-300 hover:border-zinc-200 dark:hover:border-zinc-600 transition-colors"
              >
                {c}
              </div>
            ))}
            <div className="rounded-xl border border-dashed border-zinc-200 dark:border-zinc-700 px-3 py-2 text-center text-[11px] text-zinc-400 hover:border-zinc-300 transition-colors cursor-pointer">
              + Add
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CalendarPreview() {
  const weekdays = ["M", "T", "W", "T", "F", "S", "S"];
  const cells = [...Array(2).fill(null), ...Array.from({ length: 31 }, (_, i) => i + 1)];
  const today = 17;
  const events = [8, 12, 23, 28];
  return (
    <div className="flex h-full flex-col gap-3 p-5">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium text-zinc-500">June 2026</span>
      </div>
      <div className="grid grid-cols-7 gap-0.5 flex-1 content-start">
        {weekdays.map((d, i) => (
          <div key={i} className="py-1 text-center text-[10px] font-bold text-zinc-400">
            {d}
          </div>
        ))}
        {cells.map((d, i) => (
          <div
            key={i}
            className={`relative py-1.5 text-center text-[11px] rounded-lg transition-all ${
              !d
                ? ""
                : d === today
                ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold shadow-sm"
                : "cursor-pointer font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
            }`}
          >
            {d ?? ""}
            {d && events.includes(d) && d !== today && (
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-1 w-1 rounded-full bg-blue-400" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ToastPreview() {
  const items = [
    { icon: <IcCheck size={14} className="text-white" />, bg: "bg-emerald-500", label: "Profile saved successfully", sub: "just now" },
    { icon: <span className="text-[11px] font-black text-white leading-none">!</span>, bg: "bg-amber-500", label: "Storage 80% — consider upgrade", sub: "2m ago" },
    { icon: <IcX size={14} className="text-white" />, bg: "bg-red-500", label: "Export failed — try again", sub: "8m ago" },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-5">
      <div className="grid sm:grid-cols-3 gap-2.5">
        {items.map((t, i) => (
          <div
            key={i}
            className="flex items-start gap-3 rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 p-3.5 shadow-sm"
          >
            <div className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl ${t.bg}`}>
              {t.icon}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-zinc-800 dark:text-zinc-200">{t.label}</p>
              <p className="mt-0.5 text-[10px] text-zinc-400">{t.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Section ───────────────────────────────────────────────────────────────

export function ComponentLibrarySection() {
  const [activeTab, setActiveTab] = useState<Tab>("All");

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl">

        {/* ── Header ─────────────────────────────────────────────────── */}
        <div className="relative mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          {/* Architectural count — type at scale, no gradient needed */}
          <span
            aria-hidden="true"
            className="pointer-events-none select-none absolute right-0 top-1/2 -translate-y-1/2 font-black leading-none tabular-nums text-zinc-100 dark:text-zinc-800/70"
            style={{ fontSize: "clamp(100px, 18vw, 200px)", zIndex: 0 }}
          >
            60+
          </span>

          <div className="relative" style={{ zIndex: 1 }}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Component Library
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
              Every UI pattern.<br />
              <span className="text-zinc-400 dark:text-zinc-600">Ready to ship.</span>
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-sm">
              Animated, accessible, production-ready. From data tables to AI chat interfaces.
            </p>
          </div>

          <Link
            href="/docs/components"
            className="relative shrink-0 self-start sm:self-end inline-flex items-center gap-2.5 rounded-xl bg-zinc-900 dark:bg-white px-5 py-3 text-sm font-bold text-white dark:text-zinc-900 hover:opacity-90 transition-opacity group"
            style={{ zIndex: 1 }}
          >
            Browse all
            <IcArrow size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* ── Tabs ───────────────────────────────────────────────────── */}
        <div className="mb-7 flex items-center gap-1.5 overflow-x-auto pb-1">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl px-4 py-2 text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                activeTab === tab
                  ? "bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 shadow-sm"
                  : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-800 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Grid ───────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">

          {activeTab === "All" && (
            <motion.div
              key="all"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.18 }}
              className="grid grid-cols-12 gap-3"
            >
              <PreviewCard name="DataTable" category="Data" href="/docs/data/data-table" className="col-span-12 md:col-span-7 min-h-[320px]"><TablePreview /></PreviewCard>
              <PreviewCard name="PricingTable" category="Special" href="/docs/special/pricing-table" className="col-span-12 md:col-span-5 min-h-[320px]"><PricingPreview /></PreviewCard>
              <PreviewCard name="AI Chat" category="AI" href="/docs/ai/chat" className="col-span-12 md:col-span-5 min-h-[280px]"><ChatPreview /></PreviewCard>
              <PreviewCard name="Kanban Board" category="Data" href="/docs/data/kanban" className="col-span-12 md:col-span-4 min-h-[280px]"><KanbanPreview /></PreviewCard>
              <PreviewCard name="Number Flow" category="Special" href="/docs/special/number-flow" className="col-span-12 md:col-span-3 min-h-[280px]"><NumberFlowPreview /></PreviewCard>
              <PreviewCard name="Dock" category="Special" href="/docs/special/dock" className="col-span-12 md:col-span-5 min-h-[260px]"><DockPreview /></PreviewCard>
              <PreviewCard name="Calendar" category="Data" href="/docs/data/calendar" className="col-span-12 md:col-span-4 min-h-[260px]"><CalendarPreview /></PreviewCard>
              <PreviewCard name="Context Menu" category="Special" href="/docs/special/context-menu" className="col-span-12 md:col-span-3 min-h-[260px]"><ContextMenuPreview /></PreviewCard>
              <PreviewCard name="Multi Select" category="Special" href="/docs/special/multi-select" className="col-span-12 md:col-span-3 min-h-[240px]"><MultiSelectPreview /></PreviewCard>
              <PreviewCard name="Button" category="Components" href="/docs/components/button" className="col-span-12 md:col-span-3 min-h-[240px]"><ButtonPreview /></PreviewCard>
              <PreviewCard name="Badge & Avatar" category="Components" href="/docs/components/badge" className="col-span-12 md:col-span-3 min-h-[240px]"><BadgePreview /></PreviewCard>
              <PreviewCard name="Smart Form" category="Forms" href="/docs/forms/smart-form" className="col-span-12 md:col-span-3 min-h-[240px]"><FormPreview /></PreviewCard>
            </motion.div>
          )}

          {activeTab === "Special" && (
            <motion.div
              key="special"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.18 }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              <PreviewCard name="Dock" category="Special" href="/docs/special/dock" className="sm:col-span-2 min-h-[280px]"><DockPreview /></PreviewCard>
              <PreviewCard name="Number Flow" category="Special" href="/docs/special/number-flow" className="min-h-[280px]"><NumberFlowPreview /></PreviewCard>
              <PreviewCard name="Multi Select" category="Special" href="/docs/special/multi-select" className="min-h-[280px]"><MultiSelectPreview /></PreviewCard>
              <PreviewCard name="PricingTable" category="Special" href="/docs/special/pricing-table" className="min-h-[280px]"><PricingPreview /></PreviewCard>
              <PreviewCard name="Context Menu" category="Special" href="/docs/special/context-menu" className="min-h-[280px]"><ContextMenuPreview /></PreviewCard>
              {[
                { n: "TiltCard",        h: "/docs/special/tilt-card",       icon: Layers },
                { n: "Infinite Marquee",h: "/docs/special/infinite-marquee", icon: AlignJustify },
                { n: "Flip Card",       h: "/docs/special/flip-card",        icon: ToggleLeft },
                { n: "Text Scramble",   h: "/docs/special/text-scramble",    icon: FileText },
                { n: "Wave Text",       h: "/docs/special/wave-text",        icon: Zap },
                { n: "Glowing Orb",     h: "/docs/special/glowing-orb",      icon: Star },
              ].map((p) => (
                <PreviewCard key={p.n} name={p.n} category="Special" href={p.h} className="min-h-[120px]">
                  <PlaceholderPreview icon={p.icon} />
                </PreviewCard>
              ))}
            </motion.div>
          )}

          {activeTab === "Components" && (
            <motion.div
              key="components"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.18 }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              <PreviewCard name="AI Chat" category="AI" href="/docs/ai/chat" className="sm:col-span-2 min-h-[280px]"><ChatPreview /></PreviewCard>
              <PreviewCard name="Button" category="Components" href="/docs/components/button" className="min-h-[280px]"><ButtonPreview /></PreviewCard>
              <PreviewCard name="Badge & Avatar" category="Components" href="/docs/components/badge" className="min-h-[280px]"><BadgePreview /></PreviewCard>
              <PreviewCard name="Smart Form" category="Forms" href="/docs/forms/smart-form" className="min-h-[280px]"><FormPreview /></PreviewCard>
              <PreviewCard name="Toast" category="Overlays" href="/docs/overlays/toast" className="min-h-[280px]"><ToastPreview /></PreviewCard>
              {[
                { n: "Modal",     h: "/docs/overlays/modal",       c: "Overlays",   icon: LayoutGrid },
                { n: "Accordion", h: "/docs/components/accordion", c: "Layout",     icon: List },
                { n: "Tabs",      h: "/docs/components/tabs",      c: "Layout",     icon: ChevronRight },
                { n: "Combobox",  h: "/docs/components/combobox",  c: "Primitives", icon: SlidersHorizontal },
                { n: "Rating",    h: "/docs/components/rating",    c: "Primitives", icon: Star },
                { n: "OTP Input", h: "/docs/components/otp-input", c: "Primitives", icon: Tag },
              ].map((p) => (
                <PreviewCard key={p.n} name={p.n} category={p.c} href={p.h} className="min-h-[120px]">
                  <PlaceholderPreview icon={p.icon} />
                </PreviewCard>
              ))}
            </motion.div>
          )}

          {activeTab === "Data" && (
            <motion.div
              key="data"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.18 }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              <PreviewCard name="DataTable" category="Data" href="/docs/data/data-table" className="lg:col-span-2 min-h-[280px]"><TablePreview /></PreviewCard>
              <PreviewCard name="Calendar" category="Data" href="/docs/data/calendar" className="min-h-[280px]"><CalendarPreview /></PreviewCard>
              <PreviewCard name="Kanban Board" category="Data" href="/docs/data/kanban" className="sm:col-span-2 min-h-[280px]"><KanbanPreview /></PreviewCard>
              {[
                { n: "File Uploader", h: "/docs/data/file-uploader", icon: UploadCloud },
                { n: "Timeline",      h: "/docs/data/timeline",       icon: List },
                { n: "Pagination",    h: "/docs/data/pagination",     icon: ChevronRight },
                { n: "Rich Editor",   h: "/docs/data/rich-editor",    icon: PenLine },
              ].map((p) => (
                <PreviewCard key={p.n} name={p.n} category="Data" href={p.h} className="min-h-[120px]">
                  <PlaceholderPreview icon={p.icon} />
                </PreviewCard>
              ))}
            </motion.div>
          )}

          {activeTab === "AI" && (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.18 }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              <PreviewCard name="AI Chat" category="AI" href="/docs/ai/chat" className="lg:col-span-2 min-h-[320px]"><ChatPreview /></PreviewCard>
              <div className="flex flex-col gap-3">
                {[
                  { n: "Agent Status",   h: "/docs/ai/agent-status",   icon: Zap },
                  { n: "Streaming Text", h: "/docs/ai/streaming-text", icon: MessageSquare },
                  { n: "Code Block",     h: "/docs/ai/code-block",     icon: Code2 },
                ].map((p) => (
                  <PreviewCard key={p.n} name={p.n} category="AI" href={p.h} className="flex-1">
                    <PlaceholderPreview icon={p.icon} />
                  </PreviewCard>
                ))}
              </div>
              {[
                { n: "Prompt Editor",    h: "/docs/ai/prompt-editor",    icon: PenLine },
                { n: "Tool Call Viewer", h: "/docs/ai/tool-call-viewer", icon: Wrench },
              ].map((p) => (
                <PreviewCard key={p.n} name={p.n} category="AI" href={p.h} className="min-h-[160px]">
                  <PlaceholderPreview icon={p.icon} />
                </PreviewCard>
              ))}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </section>
  );
}
