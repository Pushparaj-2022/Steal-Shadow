import Link from "next/link";
import { ChevronRight, Square, CreditCard, TextCursorInput, Tag, UserCircle } from "lucide-react";

const COMPONENT_CATEGORIES = [
  {
    title: "Button",
    desc: "Variants include default, outline, ghost, destructive, and gradient. Supports icons, loading states, and size options.",
    href: "/docs/components/button",
    Icon: Square,
    color: "text-blue-500",
    bg: "bg-blue-50",
    count: 5,
    label: "variants",
  },
  {
    title: "Card",
    desc: "Composable card primitive with header, content, and footer slots. Works as a layout wrapper for any content.",
    href: "/docs/components/card",
    Icon: CreditCard,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    count: 4,
    label: "variants",
  },
  {
    title: "Input",
    desc: "Text input with label, helper text, error state, prefix/suffix icons, and full keyboard accessibility.",
    href: "/docs/components/input",
    Icon: TextCursorInput,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    count: 6,
    label: "states",
  },
  {
    title: "Badge",
    desc: "Compact status labels in success, warning, error, info, and neutral flavors. Dot indicator and removable variants.",
    href: "/docs/components/badge",
    Icon: Tag,
    color: "text-amber-500",
    bg: "bg-amber-50",
    count: 6,
    label: "variants",
  },
  {
    title: "Avatar",
    desc: "User avatar with image, initials fallback, presence indicator, and avatar group stacking.",
    href: "/docs/components/avatar",
    Icon: UserCircle,
    color: "text-rose-500",
    bg: "bg-rose-50",
    count: 4,
    label: "sizes",
  },
];

export default function ComponentsOverviewPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Components</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Accessible, animated, and composable UI primitives. Every component is keyboard-navigable,
          ARIA-labeled, and motion-enhanced out of the box.
        </p>
      </div>

      {/* All accessible callout */}
      <div className="rounded-xl bg-blue-50 border border-blue-100 px-5 py-4 flex items-start gap-3">
        <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center shrink-0 mt-0.5">
          <span className="text-white text-[10px] font-bold">✓</span>
        </div>
        <div>
          <p className="font-semibold text-blue-900 text-sm">All components are WCAG 2.1 AA compliant</p>
          <p className="text-blue-700 text-sm mt-0.5">
            Proper ARIA roles, keyboard navigation, focus management, and screen reader
            support are included automatically — no extra configuration needed.
          </p>
        </div>
      </div>

      {/* Component grid */}
      <div className="grid sm:grid-cols-2 gap-5">
        {COMPONENT_CATEGORIES.map((comp) => (
          <Link
            key={comp.title}
            href={comp.href}
            className="group rounded-xl border border-neutral-200 p-6 hover:border-blue-200 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-4">
              <div className={`h-12 w-12 rounded-xl ${comp.bg} flex items-center justify-center shrink-0`}>
                <comp.Icon className={`h-6 w-6 ${comp.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="font-bold text-neutral-900 group-hover:text-blue-700 transition-colors">
                    {comp.title}
                  </h2>
                  <span className="text-xs font-medium text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
                    {comp.count} {comp.label}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 leading-relaxed">{comp.desc}</p>
                <div className="mt-3 flex items-center gap-1 text-xs font-medium text-blue-500">
                  View docs <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Coming soon */}
      <div className="rounded-xl border border-dashed border-neutral-200 p-6">
        <h3 className="font-bold text-neutral-700 mb-2">More coming soon</h3>
        <p className="text-sm text-neutral-500 mb-3">
          Modal, Tooltip, Popover, Dropdown, Tabs, Accordion, and more are actively being developed.
        </p>
        <a
          href="https://github.com/stealshadow/ui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-blue-500 hover:text-blue-700 transition-colors"
        >
          Follow development on GitHub →
        </a>
      </div>
    </div>
  );
}
