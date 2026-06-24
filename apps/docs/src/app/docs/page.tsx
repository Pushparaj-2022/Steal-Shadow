import Link from "next/link";
import {
  ChevronRight,
  Zap,
  Shield,
  Palette,
  Table2,
  Bot,
  WandSparkles,
  Layers,
  LayoutDashboard,
  MessageSquare,
} from "lucide-react";
import { CodeBlock } from "@/components/docs/CodeBlock";

const GITHUB = "https://github.com/Pushparaj-2022/Steal-Shadow";

// install snippet reuses CodeBlock directly — no wrapper needed

// ── Component showcase cards ──────────────────────────────────────────────────
const CATEGORIES = [
  {
    title: "Primitives",
    desc: "Button, Card, Input, Badge, Avatar",
    href: "/docs/components",
    Icon: Layers,
    count: 5,
    color: "text-blue-500",
    bg: "bg-blue-50",
    border: "hover:border-blue-200",
    preview: (
      <div className="flex flex-wrap gap-2 items-center">
        <div className="h-7 px-3 rounded-lg bg-blue-500 text-white text-xs font-semibold flex items-center">Button</div>
        <div className="h-7 px-3 rounded-lg border border-neutral-200 text-xs font-semibold flex items-center text-neutral-700">Outline</div>
        <div className="h-5 px-2 rounded-full bg-green-100 text-green-700 text-xs font-semibold flex items-center">Badge</div>
        <div className="h-7 w-7 rounded-full bg-gradient-to-br from-blue-400 to-green-500 flex items-center justify-center text-white text-xs font-bold">A</div>
      </div>
    ),
  },
  {
    title: "Animations",
    desc: "Magnetic, Typewriter, Particle Field, Scroll Reveal",
    href: "/docs/animations",
    Icon: WandSparkles,
    count: 4,
    color: "text-purple-500",
    bg: "bg-purple-50",
    border: "hover:border-purple-200",
    preview: (
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
          <Zap className="h-4 w-4 text-white" />
        </div>
        <div className="space-y-1.5">
          <div className="h-2 w-24 bg-purple-200 rounded-full" />
          <div className="h-2 w-16 bg-purple-100 rounded-full" />
        </div>
      </div>
    ),
  },
  {
    title: "Forms",
    desc: "SmartForm + Zod, Checkbox, Select, Textarea",
    href: "/docs/forms",
    Icon: Shield,
    count: 4,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    border: "hover:border-emerald-200",
    preview: (
      <div className="space-y-2 w-full">
        <div className="h-7 w-full rounded-lg border border-neutral-200 bg-white px-2 flex items-center text-xs text-neutral-400">email@example.com</div>
        <div className="h-7 w-full rounded-lg border border-neutral-200 bg-white px-2 flex items-center text-xs text-neutral-400">Password</div>
        <div className="h-7 w-full rounded-lg bg-emerald-500 flex items-center justify-center text-white text-xs font-semibold">Submit</div>
      </div>
    ),
  },
  {
    title: "Data",
    desc: "DataTable, Kanban, FileUploader, Calendar, RichEditor",
    href: "/docs/data",
    Icon: Table2,
    count: 5,
    color: "text-amber-500",
    bg: "bg-amber-50",
    border: "hover:border-amber-200",
    preview: (
      <div className="w-full space-y-1.5">
        <div className="grid grid-cols-3 gap-1">
          {["Name", "Status", "Date"].map(h => <div key={h} className="h-5 rounded bg-amber-100 text-amber-700 text-xs font-semibold flex items-center px-1.5">{h}</div>)}
        </div>
        {[["Alice", "Active", "Jan 1"], ["Bob", "Pending", "Jan 2"]].map((row, i) => (
          <div key={i} className="grid grid-cols-3 gap-1">
            {row.map(cell => <div key={cell} className="h-5 rounded bg-neutral-50 border border-neutral-100 text-xs flex items-center px-1.5 text-neutral-600">{cell}</div>)}
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "AI Components",
    desc: "Chat, StreamingText, CodeBlock, PromptEditor, ToolCallViewer",
    href: "/docs/ai",
    Icon: Bot,
    count: 5,
    color: "text-indigo-500",
    bg: "bg-indigo-50",
    border: "hover:border-indigo-200",
    preview: (
      <div className="w-full space-y-1.5">
        <div className="flex gap-2 items-start">
          <div className="h-5 w-5 rounded-full bg-indigo-500 shrink-0 mt-0.5" />
          <div className="rounded-lg rounded-tl-none bg-neutral-100 px-2.5 py-1.5 text-xs text-neutral-700">How can I help you today?</div>
        </div>
        <div className="flex gap-2 items-start justify-end">
          <div className="rounded-lg rounded-tr-none bg-indigo-500 px-2.5 py-1.5 text-xs text-white">Build a dashboard</div>
        </div>
        <div className="flex gap-1 items-center pl-7">
          {[0,1,2].map(i => <div key={i} className="h-1.5 w-1.5 rounded-full bg-neutral-300 animate-bounce" style={{ animationDelay: `${i*0.15}s` }} />)}
        </div>
      </div>
    ),
  },
  {
    title: "Overlays & Feedback",
    desc: "Modal, Drawer, Toast, Tooltip, Skeleton, Progress",
    href: "/docs/components",
    Icon: LayoutDashboard,
    count: 6,
    color: "text-rose-500",
    bg: "bg-rose-50",
    border: "hover:border-rose-200",
    preview: (
      <div className="space-y-2 w-full">
        <div className="rounded-xl border border-neutral-200 bg-white p-3 shadow-md">
          <div className="h-2 w-16 bg-neutral-200 rounded mb-1.5" />
          <div className="h-1.5 w-24 bg-neutral-100 rounded mb-3" />
          <div className="flex gap-1.5">
            <div className="h-6 px-2 rounded-lg border border-neutral-200 text-xs text-neutral-500 flex items-center">Cancel</div>
            <div className="h-6 px-2 rounded-lg bg-rose-500 text-white text-xs flex items-center">Confirm</div>
          </div>
        </div>
      </div>
    ),
  },
];

// ── Problems solved ───────────────────────────────────────────────────────────

// ── Quick start code ──────────────────────────────────────────────────────────
const INSTALL_CMD = `npm install @stealshadow/ui motion`;

const QUICK_START = `// 1. Wrap your app  (app/providers.tsx)
import { ThemeProvider, ToastProvider } from "@stealshadow/ui";

export function Providers({ children }) {
  return (
    <ThemeProvider auto>
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
}

// 2. Import and use components
import { Button, Modal, SmartForm, Chat } from "@stealshadow/ui";

// Simple modal - one line
<Modal title="Delete user" onConfirm={handleDelete} />

// Smart form with Zod - auto validation
<SmartForm schema={contactSchema} onSubmit={handleSubmit}>
  <FormField name="email" />
  <FormSubmit />
</SmartForm>`;

export default function DocsHomePage() {
  return (
    <div className="space-y-16 pb-8">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <div className="border-b border-neutral-100 pb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
          v0.1.0 · Open Source · MIT
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
          The React library that<br />
          <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">solves the real problems.</span>
        </h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl mb-8">
          45+ animated, accessible components. Motion-first, Tailwind-powered, zero lock-in.
          From a simple button to a full AI chat interface.
        </p>
        <div className="flex flex-wrap gap-3 mb-8">
          <Link href="/docs/components" className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-500 text-white font-semibold text-sm hover:bg-blue-600 transition-colors">
            Browse Components <ChevronRight className="h-4 w-4" />
          </Link>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-neutral-200 text-neutral-700 font-semibold text-sm hover:bg-neutral-50 transition-colors">
            View on GitHub
          </a>
        </div>
        <CodeBlock code={INSTALL_CMD} label="terminal" showLineNumbers={false} />
      </div>

      {/* ── Component categories ──────────────────────────────────────────── */}
      <div>
        <h2 className="text-2xl font-black text-neutral-900 mb-2">Components</h2>
        <p className="text-neutral-500 text-sm mb-6">Every component you need, nothing you don't. Tree-shakable, typed, and animated by default.</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className={`group rounded-2xl border border-neutral-200 bg-white p-5 hover:shadow-md transition-all duration-200 ${cat.border}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`h-9 w-9 rounded-xl ${cat.bg} flex items-center justify-center`}>
                  <cat.Icon className={`h-4.5 w-4.5 ${cat.color}`} />
                </div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cat.bg} ${cat.color}`}>{cat.count} components</span>
              </div>
              <h3 className="font-bold text-neutral-900 mb-1 group-hover:text-blue-600 transition-colors">{cat.title}</h3>
              <p className="text-xs text-neutral-500 mb-4 leading-relaxed">{cat.desc}</p>
              {/* Mini preview */}
              <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-3 flex items-center justify-center min-h-[64px]">
                {cat.preview}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ── Quick start ───────────────────────────────────────────────────── */}
      <div>
        <h2 className="text-2xl font-black text-neutral-900 mb-2">Quick start</h2>
        <p className="text-neutral-500 text-sm mb-5">From zero to your first animated component in under 2 minutes.</p>
        <CodeBlock code={QUICK_START} label="getting-started.tsx" />
      </div>


      {/* ── Open source banner ────────────────────────────────────────────── */}
      <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-green-500 p-px">
        <div className="rounded-2xl bg-white p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-black text-neutral-900 text-lg mb-1">100% free. Always.</p>
            <p className="text-sm text-neutral-500">MIT licensed, community-driven. No tiers, no paywalls, no catches.</p>
          </div>
          <div className="flex gap-2 shrink-0">
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-700 transition-colors">
              GitHub →
            </a>
            <a href={`${GITHUB}/issues`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 text-neutral-700 text-sm font-semibold hover:bg-neutral-50 transition-colors">
              Contribute
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}
