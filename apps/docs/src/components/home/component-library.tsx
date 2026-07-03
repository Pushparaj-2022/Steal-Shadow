"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { IcArrow, IcLayers, IcCode, IcStar, IcCheck, IcSearch, IcSparkle } from "@/components/icons";
import {
  Dock, type DockItem,
  TiltCard,
  SpotlightCard,
  ShimmerButton,
  BorderBeam,
  SparklesText,
} from "@animui/ui";

/* ---- Dock ---- */
function DockIcon({ gradient, children }: { gradient: string; children: ReactNode }) {
  return (
    <div className={`flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-sm`}>
      <div className="h-[55%] w-[55%]">{children}</div>
    </div>
  );
}
const DOCK_ITEMS: DockItem[] = [
  { id: "components", icon: <DockIcon gradient="from-indigo-400 to-indigo-600"><IcLayers className="h-full w-full" /></DockIcon>, label: "Components" },
  { id: "docs", icon: <DockIcon gradient="from-emerald-400 to-teal-600"><IcCode className="h-full w-full" /></DockIcon>, label: "Docs" },
  { id: "search", icon: <DockIcon gradient="from-sky-400 to-blue-600"><IcSearch className="h-full w-full" /></DockIcon>, label: "Search" },
  { id: "github", icon: <DockIcon gradient="from-zinc-700 to-zinc-900"><IcStar className="h-full w-full" /></DockIcon>, label: "GitHub" },
  { id: "sparkle", icon: <DockIcon gradient="from-fuchsia-400 to-purple-600"><IcSparkle className="h-full w-full" /></DockIcon>, label: "What's new" },
  { id: "changelog", icon: <DockIcon gradient="from-amber-400 to-orange-600"><IcCheck className="h-full w-full" /></DockIcon>, label: "Changelog" },
];
function DockDemo() {
  return <Dock items={DOCK_ITEMS} iconSize={40} variant="glass" />;
}

/* ---- TiltCard ---- */
function TiltCardDemo() {
  return (
    <TiltCard className="w-full rounded-2xl bg-gradient-to-br from-violet-500 to-indigo-600 p-6 text-white">
      <p className="text-sm font-bold">Tilt me</p>
      <p className="mt-1 text-xs text-white/80">Move your cursor over this card for a 3D tilt with a shine sweep.</p>
    </TiltCard>
  );
}

/* ---- SpotlightCard ---- */
function SpotlightCardDemo() {
  return (
    <SpotlightCard className="w-full">
      <div className="p-6">
        <p className="text-sm font-bold text-zinc-900 dark:text-white">Hover for spotlight</p>
        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">A soft light follows your cursor across the card.</p>
      </div>
    </SpotlightCard>
  );
}

/* ---- ShimmerButton ---- */
function ShimmerButtonDemo() {
  return (
    <div className="flex flex-col items-center gap-3">
      <ShimmerButton>Get Started</ShimmerButton>
      <p className="text-center text-xs text-zinc-500 dark:text-zinc-400">A shimmer sweeps across the button on a loop.</p>
    </div>
  );
}

/* ---- BorderBeam ---- */
function BorderBeamDemo() {
  return (
    <BorderBeam className="w-full bg-white p-6 dark:bg-zinc-900" colorFrom="#8b5cf6" colorTo="#3b82f6" borderWidth={2}>
      <p className="text-sm font-bold text-zinc-900 dark:text-white">Animated border</p>
      <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">A gradient beam travels continuously around the edge.</p>
    </BorderBeam>
  );
}

/* ---- SparklesText ---- */
function SparklesTextDemo() {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <SparklesText className="text-2xl font-black text-zinc-900 dark:text-white">Ship faster</SparklesText>
      <p className="text-xs text-zinc-500 dark:text-zinc-400">Sparkles animate continuously around the text.</p>
    </div>
  );
}

const CAT_COLOR: Record<string, string> = {
  Special: "bg-violet-500",
  Effects: "bg-pink-500",
  Animation: "bg-amber-500",
};

const SHOWCASE = [
  { name: "Dock", category: "Special", desc: "A macOS-style dock with magnetic icon magnification.", href: "/docs/special/dock", demo: <DockDemo /> },
  { name: "TiltCard", category: "Special", desc: "3D tilt on mouse move, with a spring-based shine sweep.", href: "/docs/special/tilt-card", demo: <TiltCardDemo /> },
  { name: "SpotlightCard", category: "Effects", desc: "A soft glow that tracks the cursor across the card.", href: "/docs/effects/spotlight-card", demo: <SpotlightCardDemo /> },
  { name: "ShimmerButton", category: "Effects", desc: "A looping shimmer sweep across a gradient button.", href: "/docs/effects/shimmer-button", demo: <ShimmerButtonDemo /> },
  { name: "BorderBeam", category: "Effects", desc: "A gradient beam that travels continuously around an edge.", href: "/docs/effects/border-beam", demo: <BorderBeamDemo /> },
  { name: "SparklesText", category: "Animation", desc: "Text with looping, randomly-placed sparkle particles.", href: "/docs/animations/sparkles-text", demo: <SparklesTextDemo /> },
];

export function ComponentLibrarySection() {
  return (
    <section className="border-b border-zinc-100 py-24 px-4 sm:px-6 lg:px-8 dark:border-zinc-800">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400">Component library</p>
          <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">Not just another form kit.</h2>
          <p className="mx-auto max-w-lg text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
            These are the real, live effects and interactions, rendered straight from @stealshadow/ui. Not mockups.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SHOWCASE.map((item) => (
            <div key={item.name} className="flex flex-col rounded-2xl border border-zinc-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900">
              <div className="mb-3 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-[11px] font-semibold text-zinc-400">
                  <span className={`h-1.5 w-1.5 rounded-full ${CAT_COLOR[item.category] ?? "bg-zinc-400"}`} />
                  {item.category}
                </span>
                <Link href={item.href} className="flex items-center gap-1 text-[11px] font-semibold text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white">
                  Docs <IcArrow className="h-3 w-3" />
                </Link>
              </div>

              <div className="mb-4 flex min-h-[180px] items-center justify-center overflow-x-auto rounded-xl border border-zinc-100 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-950/40">
                <div className="w-full">{item.demo}</div>
              </div>

              <h3 className="mb-1 text-base font-bold text-zinc-900 dark:text-white">{item.name}</h3>
              <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/docs/components" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-6 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800">
            Browse all 45+ components <IcArrow className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
