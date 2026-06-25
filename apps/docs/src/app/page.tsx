import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  IcArrow, IcCheck, IcBranch, IcChevR,
  IcZap, IcShield, IcSparkle, IcStar,
} from "@/components/icons";
import { ThemeToggle } from "@/components/home/theme-toggle";
import { InstallCommand } from "@/components/home/install-command";
import { MarqueeStrip } from "@/components/home/marquee-strip";
import { FaqItem } from "@/components/home/faq-item";

const GH = "https://github.com/Pushparaj-2022/Steal-Shadow";

const ComponentLibrarySection = dynamic(
  () => import("@/components/home/component-library").then((m) => m.ComponentLibrarySection)
);

const FAQS = [
  { q: "Does it work with Next.js App Router?",  a: "Yes. Add transpilePackages: ['@stealshadow/ui'] to your next.config.ts. All interactive components already include 'use client' — wrap providers in a client boundary." },
  { q: "Do I need Tailwind CSS?",                a: "No. Components use CSS custom properties. Tailwind, CSS Modules, vanilla CSS — all work. Override --ui-primary once and your brand color propagates everywhere." },
  { q: "What animation library does it use?",    a: "Motion v12 (formerly Framer Motion). Spring physics throughout — install it once as a peer dependency and every component benefits automatically." },
  { q: "How does accessibility work?",           a: "WCAG 2.1 AA on every component. ARIA roles, keyboard navigation, focus management, and screen reader support — zero configuration required." },
  { q: "Can I contribute?",                      a: "Absolutely. Open an issue, submit a PR, or start a discussion on GitHub. Every merged component ships to every developer using the library." },
];

const TESTIMONIALS = [
  { n:"Sarah Chen",   r:"Frontend Lead",          a:"S", g:"from-blue-500 to-blue-700",    q:"Replaced our entire design system in a week. The animations feel genuinely premium — clients always ask how we built it." },
  { n:"Marcus Webb",  r:"CTO, Pivot",             a:"M", g:"from-emerald-500 to-green-700", q:"DataTable saved us two full sprints. Mobile-responsive, sortable, paginated — with zero configuration." },
  { n:"Priya Nair",   r:"Engineer, Notion",       a:"P", g:"from-violet-500 to-purple-700", q:"Finally a library that ships correct ARIA out of the box. No more accessibility audit failures." },
  { n:"Tom Eriksen",  r:"Indie Hacker",           a:"T", g:"from-amber-500 to-orange-600",  q:"SmartForm + Zod is magic. Validation, error states, loading — five lines of code. Nothing else to wire up." },
  { n:"Emma Laurent", r:"AI Product, Mistral",    a:"E", g:"from-teal-500 to-cyan-700",     q:"The AI components dropped straight into our product. ChatUI and StreamingText saved us an entire sprint." },
  { n:"Diego Reyes",  r:"Full-stack, Freelance",  a:"D", g:"from-rose-500 to-pink-700",     q:"Full SaaS dashboard in three days. KanbanBoard, DataTable, FileUploader — all from one package." },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 antialiased">

      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 h-16 border-b border-zinc-100 dark:border-zinc-800/70 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0">
            <Image src="/logo.png" alt="Steal Shadow" width={662} height={151} className="h-8 w-auto dark:hidden" style={{ width: "auto" }} quality={100} priority />
            <Image src="/logo-icon.png" alt="Steal Shadow" width={662} height={151} className="hidden dark:block h-8 w-auto" style={{ width: "auto" }} quality={100} priority />
          </Link>
          <nav className="hidden md:flex items-center gap-0.5">
            {([["Docs","/docs"],["Components","/docs/components"],["Animations","/docs/animations"],["AI","/docs/ai"]] as [string,string][]).map(([l,h]) => (
              <Link key={l} href={h} className="rounded-lg px-3 py-1.5 text-[13px] text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100">{l}</Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <a href={GH} target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 px-3 py-1.5 text-[13px] text-zinc-500 dark:text-zinc-400 transition-colors hover:border-zinc-300 dark:hover:border-zinc-600">
              <IcBranch className="h-3.5 w-3.5" /> GitHub
            </a>
            <ThemeToggle />
            <Link href="/docs"
              className="flex items-center gap-1.5 rounded-xl bg-zinc-900 dark:bg-white px-4 py-2 text-[13px] font-bold text-white dark:text-zinc-900 transition-opacity hover:opacity-90">
              Get started <IcChevR className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO section*/}
      <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
        <div className="pointer-events-none absolute inset-0 bg-white dark:bg-zinc-950">
          <div className="absolute inset-x-0 -top-40 h-[640px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.08),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(99,102,241,0.18),transparent)]" />
          <div className="absolute right-[-10%] top-1/4 h-[500px] w-[500px] rounded-full bg-blue-400/5 dark:bg-blue-500/15 blur-[100px]" />
          <div className="absolute left-[5%] bottom-0 h-[300px] w-[400px] rounded-full bg-violet-400/5 dark:bg-violet-600/10 blur-[80px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-28 lg:py-0 grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] min-h-[calc(100vh-4rem)] w-full">

          {/* Left: Copy */}
          <div className="lg:py-28">
            <div style={{ animation: "fade-up 0.4s ease both" }}>
              <a href={GH} target="_blank" rel="noopener noreferrer"
                className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-zinc-200 dark:border-zinc-700/80 bg-white/80 dark:bg-zinc-900/80 backdrop-blur px-4 py-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-300 transition-colors hover:border-zinc-300 dark:hover:border-zinc-600">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" />
                </span>
                v0.1.0 now on GitHub
                <IcChevR className="h-3 w-3 text-zinc-400" />
              </a>
            </div>

            <h1 style={{ animation: "fade-up 0.65s ease 0.08s both" }}
              className="mb-5 text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-black leading-[1.05] tracking-[-0.02em]">
              Build faster with<br />
              <span className="bg-gradient-to-r from-indigo-500 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                React components
              </span><br />
              that actually ship.
            </h1>

            <p style={{ animation: "fade-up 0.5s ease 0.16s both" }}
              className="mb-9 max-w-[420px] text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
              45+ animated, accessible components — buttons to full AI chat UIs. One package, zero lock-in.
            </p>

            <div style={{ animation: "fade-up 0.5s ease 0.22s both" }} className="mb-7 flex flex-wrap items-center gap-3">
              <Link href="/docs/components"
                className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 dark:bg-white px-6 py-3 text-sm font-bold text-white dark:text-zinc-900 transition-opacity hover:opacity-90">
                Browse components <IcArrow className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link href="/docs"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-600 dark:text-zinc-300 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/60">
                Read docs
              </Link>
            </div>

            <div style={{ animation: "fade-in 0.5s ease 0.3s both" }}>
              <InstallCommand />
            </div>

            <div style={{ animation: "fade-in 0.5s ease 0.46s both" }}
              className="mt-10 flex items-center gap-7 border-t border-zinc-100 dark:border-zinc-800 pt-8">
              {[["45+","Components"],["MIT","Licensed"],["0","Lock-in"],["v12","Motion"]].map(([val, lab]) => (
                <div key={lab} className="flex flex-col gap-0.5">
                  <span className="text-xl font-black leading-none text-zinc-900 dark:text-white">{val}</span>
                  <span className="text-[11px] text-zinc-400">{lab}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dashboard mock */}
          <div style={{ animation: "fade-up 0.9s ease 0.4s both" }} className="hidden lg:block lg:py-16">
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-700/60 bg-white dark:bg-zinc-900 shadow-2xl shadow-zinc-200/60 dark:shadow-zinc-950/80 overflow-hidden">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <div className="mx-auto flex items-center gap-2 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-1 text-[11px] font-mono text-zinc-400 w-48">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                  app.stealshadow.dev
                </div>
              </div>
              {/* App layout */}
              <div className="flex h-[420px]">
                {/* Sidebar */}
                <div className="w-[140px] shrink-0 border-r border-zinc-100 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900 flex flex-col">
                  <div className="px-3 py-3 border-b border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-1.5">
                      <div className="h-5 w-5 rounded-md bg-indigo-500 flex items-center justify-center text-[8px] font-black text-white">S</div>
                      <span className="text-[11px] font-bold text-zinc-700 dark:text-zinc-200">SaaSify</span>
                    </div>
                  </div>
                  <nav className="flex-1 px-2 py-2.5 space-y-0.5">
                    {[["Dashboard",false],["Users",true],["Analytics",false],["Billing",false],["Settings",false]].map(([label, active]) => (
                      <div key={label as string} className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[11px] font-medium transition-colors ${active?"bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400":"text-zinc-500 dark:text-zinc-400"}`}>
                        {active && <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />}
                        {label as string}
                      </div>
                    ))}
                  </nav>
                  <div className="px-2 py-2.5 border-t border-zinc-100 dark:border-zinc-800">
                    <div className="flex items-center gap-2 rounded-lg px-2 py-1.5">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-[8px] font-bold text-white">A</div>
                      <div>
                        <p className="text-[10px] font-semibold text-zinc-700 dark:text-zinc-300">Admin</p>
                        <p className="text-[9px] text-zinc-400">Pro plan</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Main */}
                <div className="flex-1 flex flex-col overflow-hidden">
                  <div className="grid grid-cols-3 divide-x divide-zinc-100 dark:divide-zinc-800 border-b border-zinc-100 dark:border-zinc-800">
                    {[{label:"Total users",value:"12,841",change:"+8.2%",up:true},{label:"MRR",value:"$49,200",change:"+12.4%",up:true},{label:"Churn",value:"1.8%",change:"-0.4%",up:false}].map(({ label, value, change, up }) => (
                      <div key={label} className="px-4 py-3">
                        <p className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold mb-0.5">{label}</p>
                        <p className="text-sm font-black text-zinc-900 dark:text-zinc-50">{value}</p>
                        <p className={`text-[9px] font-semibold mt-0.5 ${up?"text-emerald-500":"text-rose-500"}`}>{change} this month</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-100 dark:border-zinc-800">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">User management</p>
                    <div className="flex items-center gap-1.5">
                      <div className="rounded-md border border-zinc-200 dark:border-zinc-700 px-2 py-1 text-[10px] text-zinc-400 bg-white dark:bg-zinc-900">Search…</div>
                      <div className="rounded-md bg-blue-500 px-2.5 py-1 text-[10px] font-bold text-white">+ Invite</div>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <div className="grid grid-cols-[1fr_80px_70px_64px] gap-0 border-b border-zinc-50 dark:border-zinc-800/60 bg-zinc-50/60 dark:bg-zinc-800/20 px-4 py-1.5">
                      {["User","Role","Status","MRR"].map(h => <span key={h} className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">{h}</span>)}
                    </div>
                    {[{name:"Alice Martin",role:"Admin",status:"Active",mrr:"$249/mo",color:"bg-blue-500"},{name:"Bob Chen",role:"Editor",status:"Trial",mrr:"$0",color:"bg-emerald-500"},{name:"Priya Singh",role:"Viewer",status:"Active",mrr:"$99/mo",color:"bg-violet-500"},{name:"Tom Eriksen",role:"Admin",status:"Paused",mrr:"—",color:"bg-amber-500"}].map(({ name, role, status, mrr, color }, i) => (
                      <div key={i} className={`grid grid-cols-[1fr_80px_70px_64px] gap-0 px-4 py-2.5 border-b border-zinc-50 dark:border-zinc-800/40 last:border-0 ${i===1?"bg-blue-50/60 dark:bg-blue-950/20":""} transition-colors`}>
                        <div className="flex items-center gap-2 min-w-0">
                          <div className={`h-5 w-5 shrink-0 rounded-full ${color} flex items-center justify-center text-[8px] font-bold text-white`}>{name[0]}</div>
                          <span className="truncate text-[11px] font-medium text-zinc-800 dark:text-zinc-200">{name}</span>
                        </div>
                        <span className="self-center text-[10px] text-zinc-400">{role}</span>
                        <span className={`self-center text-[10px] font-semibold ${status==="Active"?"text-emerald-500":status==="Trial"?"text-amber-500":"text-zinc-400"}`}>{status}</span>
                        <span className="self-center text-right font-mono text-[10px] text-zinc-500">{mrr}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-zinc-100 dark:border-zinc-800 px-4 py-2.5 flex items-center gap-3 bg-gradient-to-r from-indigo-50/60 dark:from-indigo-950/30 to-transparent">
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-indigo-500 text-[8px] font-black text-white">AI</div>
                    <span className="text-[10px] text-indigo-600 dark:text-indigo-400 flex-1">&ldquo;Export users with Active status to CSV&rdquo;</span>
                    <span className="flex items-center gap-1 text-[9px] text-indigo-400">
                      <span className="h-1 w-1 rounded-full bg-indigo-400 animate-pulse" />Processing
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2 px-1 flex-wrap">
              {["DataTable","Sidebar","Badge","Button","ChatUI"].map(name => (
                <span key={name} className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-700/70 bg-white dark:bg-zinc-900 px-2.5 py-1 text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
                  <span className="h-1 w-1 rounded-full bg-blue-400" />{name}
                </span>
              ))}
              <span className="text-[10px] text-zinc-400">+ 40 more</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <MarqueeStrip />

      {/* COMPONENT LIBRARY — lazy loaded, below fold */}
      <ComponentLibrarySection />

      {/* DIFFERENTIATORS */}
      <section className="bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-0 h-72 w-72 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[80px]" />
          <div className="absolute right-1/4 bottom-0 h-64 w-64 translate-y-1/2 rounded-full bg-violet-600/10 blur-[70px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:48px_48px]" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-400">Why it&apos;s different</p>
            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">Built right.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { Icon: IcShield, accent:"text-emerald-400", ring:"border-emerald-500/25", glow:"bg-emerald-500/10", title:"Accessible by default", desc:"WCAG 2.1 AA on every component. ARIA roles, keyboard navigation, and focus management — zero configuration.", items:["Correct ARIA on all components","Full keyboard navigation","Focus trap in dialogs","Screen reader tested"] },
              { Icon: IcSparkle, accent:"text-blue-400", ring:"border-blue-500/25", glow:"bg-blue-500/10", title:"Motion-first design", desc:"Spring physics, not CSS transitions. Every interaction feels natural using Motion v12 as a single peer dependency.", items:["Spring-based animations","Gesture and drag support","Respects prefers-reduced-motion","Hardware accelerated at 60fps"] },
              { Icon: IcZap, accent:"text-amber-400", ring:"border-amber-500/25", glow:"bg-amber-500/10", title:"Zero styling lock-in", desc:"Components use CSS custom properties. Override one variable and your brand propagates everywhere.", items:["Works with Tailwind CSS","Works with CSS Modules","Works with vanilla CSS","Works with any CSS-in-JS"] },
            ].map(({ Icon, accent, ring, glow, title, desc, items }) => (
              <div key={title} className={`rounded-2xl border ${ring} bg-zinc-900 p-8 transition-colors hover:bg-zinc-800/60`}>
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-2xl ${glow}`}>
                  <Icon className={`h-6 w-6 ${accent}`} size={24} />
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>
                <p className="mb-6 text-sm leading-relaxed text-zinc-400">{desc}</p>
                <ul className="space-y-2.5">
                  {items.map(it => (
                    <li key={it} className="flex items-center gap-2.5 text-sm">
                      <IcCheck className={`h-4 w-4 shrink-0 ${accent}`} />
                      <span className="text-zinc-300">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-b border-zinc-100 dark:border-zinc-800 bg-zinc-50/60 dark:bg-zinc-900/30 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400">Social proof</p>
            <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Teams ship faster.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <div key={t.n} className="rounded-2xl border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 p-6 transition-all hover:shadow-md dark:hover:border-zinc-700">
                <div className="mb-4 flex gap-0.5">
                  {[0,1,2,3,4].map(j => <IcStar key={j} className="h-3.5 w-3.5 text-amber-400" filled size={14} />)}
                </div>
                <p className="mb-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">&ldquo;{t.q}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.g} text-xs font-bold text-white`}>{t.a}</div>
                  <div>
                    <p className="text-xs font-semibold">{t.n}</p>
                    <p className="text-[11px] text-zinc-400">{t.r}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-[2fr_3fr] items-start">
          <div className="lg:sticky lg:top-24">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-blue-500 dark:text-blue-400">FAQ</p>
            <h2 className="mb-4 text-3xl font-black tracking-tight sm:text-4xl">Common questions.</h2>
            <p className="mb-8 text-base leading-relaxed text-zinc-500 dark:text-zinc-400 max-w-xs">
              Can&apos;t find an answer? Start a discussion on GitHub.
            </p>
            <a href={`${GH}/discussions`} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 dark:border-zinc-700 px-5 py-2.5 text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-all hover:bg-zinc-50 dark:hover:bg-zinc-800">
              <IcBranch className="h-4 w-4" /> Ask on GitHub
            </a>
          </div>
          <div>
            {FAQS.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="px-4 sm:px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-zinc-950 px-8 py-20 text-center md:px-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-56 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/25 blur-[70px]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>
            <div className="relative">
              <Image src="/logo-icon.png" alt="Steal Shadow" width={662} height={151} className="mx-auto mb-8 h-10 w-auto" style={{ width: "auto" }} quality={100} />
              <h2 className="mb-3 text-3xl font-black tracking-tight text-white sm:text-4xl">Start building today.</h2>
              <p className="mx-auto mb-10 max-w-sm text-sm text-zinc-400">One install. 45+ components. No paywalls, no tiers, no lock-in.</p>
              <div className="mb-8 flex justify-center">
                <InstallCommand />
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link href="/docs"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-7 py-3.5 text-sm font-bold text-zinc-900 transition-opacity hover:opacity-90">
                  Get started <IcArrow className="h-4 w-4" />
                </Link>
                <a href={GH} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5">
                  <IcBranch className="h-4 w-4" /> View on GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-100 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <Link href="/" className="mb-4 inline-block">
              <Image src="/logo.png" alt="Steal Shadow" width={662} height={151} className="h-7 w-auto dark:hidden" style={{ width: "auto" }} quality={100} />
              <Image src="/logo-icon.png" alt="Steal Shadow" width={662} height={151} className="hidden dark:block h-7 w-auto" style={{ width: "auto" }} quality={100} />
            </Link>
            <p className="text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
              Open source React component library. Animated, accessible, styling-agnostic.
            </p>
          </div>
          {([
            { h:"Library",   l:[["Components","/docs/components"],["Animations","/docs/animations"],["AI Components","/docs/ai"],["Forms","/docs/forms"]] },
            { h:"Resources", l:[["Documentation","/docs"],["Why Steal Shadow","/docs/solutions"],["GitHub",GH],["Discussions",`${GH}/discussions`]] },
            { h:"Community", l:[["MIT License",`${GH}/blob/main/LICENSE`],["Contributing",`${GH}/blob/main/CONTRIBUTING.md`],["Report a Bug",`${GH}/issues`],["Changelog",`${GH}/releases`]] },
          ] as { h: string; l: [string, string][] }[]).map(c => (
            <div key={c.h}>
              <h4 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">{c.h}</h4>
              <ul className="space-y-2.5">
                {c.l.map(([label, href]) => (
                  <li key={label}>
                    {href.startsWith("http")
                      ? <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-zinc-500 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">{label}</a>
                      : <Link href={href} className="text-sm text-zinc-500 dark:text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100">{label}</Link>
                    }
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-7xl border-t border-zinc-100 dark:border-zinc-800/60 px-4 sm:px-6 lg:px-8 py-5 flex flex-col items-center justify-between gap-3 text-xs text-zinc-400 sm:flex-row">
          <span>© 2026 Steal Shadow · MIT License</span>
          <a href={GH} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 transition-colors hover:text-zinc-600 dark:hover:text-zinc-200">
            <IcBranch className="h-3 w-3" /> github.com/Pushparaj-2022/Steal-Shadow
          </a>
        </div>
      </footer>

    </div>
  );
}
