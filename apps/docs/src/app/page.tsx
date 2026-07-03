import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  IcArrow, IcCheck, IcGithub, IcChevR,
  IcLayers, IcCode,
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
  { q: "Does it work with Next.js App Router?",  a: "Yes. Add transpilePackages: ['@stealshadow/ui'] to your next.config.ts. All interactive components already include 'use client'; wrap providers in a client boundary." },
  { q: "Do I need Tailwind CSS?",                a: "No. Components use CSS custom properties. Tailwind, CSS Modules, vanilla CSS all work. Override --ui-primary once and your brand color propagates everywhere." },
  { q: "What animation library does it use?",    a: "Motion v12 (formerly Framer Motion). Spring physics throughout. Install it once as a peer dependency and every component benefits automatically." },
  { q: "How does accessibility work?",           a: "WCAG 2.1 AA on every component. ARIA roles, keyboard navigation, focus management, and screen reader support, with zero configuration required." },
  { q: "Can I contribute?",                      a: "Absolutely. Open an issue, submit a PR, or start a discussion on GitHub. Every merged component ships to every developer using the library." },
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
              className="hidden sm:flex items-center gap-1.5 rounded-full border border-zinc-200 dark:border-zinc-700 px-3.5 py-1.5 text-[13px] text-zinc-500 dark:text-zinc-400 transition-colors hover:border-zinc-300 dark:hover:border-zinc-600">
              <IcGithub className="h-3.5 w-3.5" /> GitHub
            </a>
            <ThemeToggle />
            <Link href="/docs"
              className="flex items-center gap-1.5 rounded-full bg-zinc-900 dark:bg-white px-5 py-2 text-[13px] font-bold text-white dark:text-zinc-900 transition-opacity hover:opacity-90">
              Get started <IcChevR className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO section*/}
      <section className="relative mx-3 mt-16 overflow-hidden rounded-[2rem] pb-20 pt-24 sm:mx-4 sm:pt-28 md:mt-20">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-zinc-50 via-blue-200 to-blue-600 dark:from-zinc-900 dark:via-blue-950 dark:to-blue-900">
          <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-white/50 blur-3xl dark:bg-white/10" />
          <div className="absolute -right-16 top-1/3 h-72 w-72 rounded-full bg-indigo-300/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-700/40 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_45%)]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">

          <h1 style={{ animation: "fade-up 0.65s ease 0.08s both" }}
            className="mb-6 text-[2.75rem] sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-[-0.03em] text-zinc-900 [text-wrap:balance] dark:text-white">
            Build faster with<br />
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent dark:from-indigo-300 dark:to-violet-300">
              React components
            </span><br />
            that actually ship.
          </h1>

          <p style={{ animation: "fade-up 0.5s ease 0.16s both" }}
            className="mx-auto mb-8 max-w-[400px] text-base leading-relaxed text-zinc-600 [text-wrap:balance] dark:text-zinc-300">
            45+ animated, accessible components, from buttons to full AI chat UIs. One package, zero lock-in.
          </p>

          <div style={{ animation: "fade-up 0.5s ease 0.22s both" }} className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-full bg-white/50 p-1 shadow-sm ring-1 ring-white/60 backdrop-blur-md">
              <Link href="/docs/components"
                className="flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-zinc-900 shadow-md">
                <IcLayers className="h-3.5 w-3.5" /> Components
              </Link>
              <Link href="/docs"
                className="flex items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-semibold text-zinc-900/70 transition-colors hover:bg-white/40 dark:text-white/80">
                <IcCode className="h-3.5 w-3.5" /> Docs
              </Link>
            </div>
          </div>

          <div style={{ animation: "fade-in 0.5s ease 0.3s both" }} className="mb-4 flex justify-center">
            <div className="flex w-full max-w-md items-center justify-between gap-2 rounded-full bg-white p-1.5 pl-4 shadow-[0_8px_30px_rgba(0,0,0,0.12)] ring-1 ring-black/[0.03]">
              <InstallCommand variant="bare" />
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white transition-transform hover:scale-105">
                <IcArrow className="h-4 w-4" />
              </span>
            </div>
          </div>

          <a href={GH} target="_blank" rel="noopener noreferrer" style={{ animation: "fade-in 0.5s ease 0.4s both" }}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-800 hover:underline dark:text-white/90">
            <span className="inline-block" style={{ transform: "rotate(-135deg)" }}>
              <IcArrow className="h-3.5 w-3.5" />
            </span>
            v2.0.0 now on GitHub
          </a>
        </div>
      </section>

      {/* DEMO SHOWCASE: dashboard mock, standalone below hero */}
      <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/4 top-4 h-72 w-72 rounded-full bg-blue-400/25 blur-[100px] dark:bg-blue-600/15" />
          <div className="absolute right-1/4 top-12 h-72 w-72 rounded-full bg-violet-400/20 blur-[100px] dark:bg-violet-600/15" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div style={{ animation: "fade-up 0.9s ease 0.2s both" }}
            className="relative rounded-[2rem] border border-white/80 dark:border-zinc-800 bg-white/40 backdrop-blur-2xl dark:bg-zinc-900/70 shadow-2xl shadow-blue-300/30 dark:shadow-black/50 p-5 sm:p-8">

            {/* Decorative glass pills, far left edge */}
            <div className="hidden lg:flex absolute -left-5 top-1/4 flex-col gap-3">
              <span className="h-8 w-4 rounded-full bg-emerald-400/70 shadow-md ring-1 ring-white/60 backdrop-blur-sm" />
              <span className="h-8 w-4 rounded-full bg-rose-400/70 shadow-md ring-1 ring-white/60 backdrop-blur-sm" />
              <span className="h-8 w-4 rounded-full bg-blue-400/70 shadow-md ring-1 ring-white/60 backdrop-blur-sm" />
            </div>

            {/* Dashboard header */}
            <div className="mb-5 flex items-center justify-between sm:mb-6">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-zinc-900 dark:text-white">Overview</h3>
                <p className="text-xs text-zinc-400">Track spending, cards, and payouts in one place</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="hidden items-center gap-1.5 rounded-full border border-white/60 bg-white/50 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-zinc-600 shadow-sm sm:flex dark:border-zinc-700 dark:bg-zinc-800/60 dark:text-zinc-400">
                  This month
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                </span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-400 to-indigo-600 text-white shadow-sm ring-2 ring-white/70">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" /></svg>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">

              {/* Cashback from partners */}
              <div className="rounded-2xl bg-white dark:bg-zinc-800 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <p className="mb-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400">Cashback from Partners</p>
                <div className="flex gap-2">
                  {[
                    { bg: "bg-zinc-900", fg: "text-white", d: <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z" /> },
                    { bg: "bg-blue-50 dark:bg-blue-950/40", fg: "text-blue-600 dark:text-blue-400", d: <><path d="M4 10V6a2 2 0 012-2h12a2 2 0 012 2v4" /><rect x="2" y="10" width="20" height="10" rx="2" /><path d="M2 14h20" /></> },
                    { bg: "bg-amber-50 dark:bg-amber-950/40", fg: "text-amber-600 dark:text-amber-400", d: <><path d="M20 12V8a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2v-4M20 12h-4a2 2 0 100 4h4v-4z" /></> },
                    { bg: "bg-emerald-50 dark:bg-emerald-950/40", fg: "text-emerald-600 dark:text-emerald-400", d: <><path d="M5 12.5a7 7 0 0114 0" /><path d="M8.5 15.5a3.5 3.5 0 017 0" /><circle cx="12" cy="19" r="1" /></> },
                  ].map(({ bg, fg, d }, i) => (
                    <span key={i} className={`flex h-9 w-9 items-center justify-center rounded-full shadow-sm ${bg} ${fg}`}>
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill={i === 0 ? "currentColor" : "none"} stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">{d}</svg>
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-lg font-extrabold text-zinc-900 dark:text-white">+$38.20</p>
                <p className="text-[11px] text-zinc-400">This month</p>
              </div>

              {/* Analytics */}
              <div className="rounded-2xl bg-white dark:bg-zinc-800 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <p className="mb-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">Analytics</p>
                <p className="mb-4 text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-white">$242.63</p>
                <div className="flex h-16 items-end gap-1.5">
                  {[30, 55, 40, 70, 50, 90, 65].map((h, i) => (
                    <div key={i} className={`flex-1 rounded-t-md ${i === 5 ? "bg-emerald-500" : "bg-emerald-100 dark:bg-emerald-900/50"}`} style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>

              {/* Orange revenue card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 p-5 text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl">
                <div className="flex items-center justify-between">
                  <p className="text-xs font-semibold text-orange-50">Revenue</p>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/25 text-white">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" /></svg>
                  </span>
                </div>
                <p className="mt-4 text-2xl font-extrabold tracking-tight">$184.44</p>
                <p className="text-[11px] text-orange-50">+12.8% this week</p>
                <div className="relative mt-4 h-16">
                  <svg viewBox="0 0 120 40" preserveAspectRatio="none" className="h-full w-full">
                    <path d="M0 28 C15 10, 30 34, 45 20 S 75 8, 90 22 S 110 30, 120 12" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.85" strokeLinecap="round" />
                  </svg>
                  <span className="absolute left-[62%] top-[36%] flex h-4 w-4 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  </span>
                </div>
              </div>

              {/* White chart card with dial */}
              <div className="relative rounded-2xl bg-white dark:bg-zinc-800 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <p className="mb-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">This week</p>
                <p className="mb-3 text-lg font-extrabold tracking-tight text-zinc-900 dark:text-white">1,204 <span className="text-xs font-semibold text-emerald-500">+6.4%</span></p>
                <div className="relative h-16">
                  <svg viewBox="0 0 120 40" preserveAspectRatio="none" className="h-full w-full">
                    <path d="M0 30 C15 20, 30 8, 45 18 S 75 32, 90 16 S 110 6, 120 20" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span className="absolute left-[46%] top-[38%] flex h-5 w-5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-blue-500 bg-white shadow" />
                </div>
              </div>

              {/* Payment templates */}
              <div className="rounded-2xl bg-white dark:bg-zinc-800 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <p className="mb-1 text-xs font-semibold text-zinc-500 dark:text-zinc-400">Payment Templates</p>
                <p className="mb-1 text-xl font-extrabold tracking-tight text-zinc-900 dark:text-white">$486.32</p>
                <p className="mb-4 text-[11px] text-zinc-400">Advertising payments</p>
                <div className="flex items-center justify-between">
                  <div className="flex -space-x-2">
                    {["from-rose-400 to-pink-600","from-amber-400 to-orange-500","from-emerald-400 to-teal-600"].map((g, i) => (
                      <span key={i} className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${g} text-white ring-2 ring-white dark:ring-zinc-800`}>
                        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8" /></svg>
                      </span>
                    ))}
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white">
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  </span>
                </div>
              </div>

              {/* Card mockup */}
              <div className="relative flex aspect-[1.55/1] w-full flex-col justify-between gap-5 overflow-hidden rounded-2xl bg-zinc-950 p-7 text-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-xl">
                {/* Wave texture */}
                <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.07]" preserveAspectRatio="none" viewBox="0 0 300 200" fill="none">
                  <path d="M-10,60 C40,30 80,90 120,60 S200,30 240,60 S320,90 320,60" stroke="white" strokeWidth="2" />
                  <path d="M-10,90 C40,60 80,120 120,90 S200,60 240,90 S320,120 320,90" stroke="white" strokeWidth="2" />
                  <path d="M-10,120 C40,90 80,150 120,120 S200,90 240,120 S320,150 320,120" stroke="white" strokeWidth="2" />
                  <path d="M-10,150 C40,120 80,180 120,150 S200,120 240,150 S320,180 320,150" stroke="white" strokeWidth="2" />
                </svg>

                <div className="relative flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <svg viewBox="0 0 32 20" className="h-6 w-9 shrink-0">
                      <circle cx="12" cy="10" r="9" fill="#EB001B" />
                      <circle cx="20" cy="10" r="9" fill="#F79E1B" fillOpacity="0.85" />
                    </svg>
                    <span className="text-sm font-semibold text-zinc-100">Master Card</span>
                  </div>
                  <svg viewBox="0 0 24 16" className="h-6 w-8 shrink-0 rounded-[3px]">
                    <rect width="24" height="16" rx="2.5" fill="#E8C874" />
                    <rect x="4" y="4" width="16" height="8" rx="1.5" fill="none" stroke="#B8975A" strokeWidth="0.6" />
                    <line x1="12" y1="4" x2="12" y2="12" stroke="#B8975A" strokeWidth="0.6" />
                    <line x1="4" y1="8" x2="20" y2="8" stroke="#B8975A" strokeWidth="0.6" />
                  </svg>
                </div>

                <div className="relative">
                  <p className="text-[10px] tracking-wide text-zinc-400">Card Number</p>
                  <p className="mt-2 text-lg font-semibold tracking-[0.22em] text-zinc-50">8050 5040 2030 3020</p>
                </div>

                <div className="relative flex items-end justify-between">
                  <div>
                    <p className="text-[10px] tracking-wide text-zinc-400">Card Holder</p>
                    <p className="mt-1.5 text-sm font-semibold uppercase tracking-wide text-zinc-100">John Doe</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] tracking-wide text-zinc-400">Valid Thru</p>
                    <p className="mt-1.5 text-sm font-semibold text-zinc-100">05/28</p>
                  </div>
                </div>
              </div>

              {/* Quick links */}
              <div className="rounded-2xl bg-gradient-to-br from-indigo-50 via-white to-blue-50 dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <p className="mb-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400">Quick Links</p>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    <path key="1" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
                    <path key="2" d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8M16 6l-4-4-4 4M12 2v13" />,
                    <><circle key="3a" cx="12" cy="12" r="3" /><path key="3b" d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>,
                  ].map((d, i) => (
                    <div key={i} className="flex h-12 items-center justify-center rounded-xl border border-white/60 bg-white/50 backdrop-blur-sm text-zinc-500 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-700/50 dark:text-zinc-300">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">{d}</svg>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next payment */}
              <div className="rounded-2xl bg-white dark:bg-zinc-800 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <p className="mb-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400">Next Payment</p>
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M16 3v4M8 3v4M3 9h18" /></svg>
                  </span>
                  <div>
                    <p className="text-lg font-extrabold tracking-tight text-zinc-900 dark:text-white">$129.00</p>
                    <p className="text-[11px] text-zinc-400">Due in 3 days &middot; Cloud hosting</p>
                  </div>
                </div>
              </div>

              {/* Spending breakdown */}
              <div className="rounded-2xl bg-white dark:bg-zinc-800 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:col-span-2">
                <p className="mb-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400">Spending Breakdown</p>
                <div className="flex items-center justify-center gap-8">
                  <svg viewBox="0 0 36 36" className="h-16 w-16 shrink-0 -rotate-90">
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="currentColor" strokeWidth="5" className="text-zinc-100 dark:text-zinc-700" />
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#6366f1" strokeWidth="5" strokeDasharray={`${2 * Math.PI * 15.5 * 0.45} ${2 * Math.PI * 15.5}`} />
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#f59e0b" strokeWidth="5" strokeDasharray={`${2 * Math.PI * 15.5 * 0.3} ${2 * Math.PI * 15.5}`} strokeDashoffset={-(2 * Math.PI * 15.5 * 0.45)} />
                    <circle cx="18" cy="18" r="15.5" fill="none" stroke="#10b981" strokeWidth="5" strokeDasharray={`${2 * Math.PI * 15.5 * 0.25} ${2 * Math.PI * 15.5}`} strokeDashoffset={-(2 * Math.PI * 15.5 * 0.75)} />
                  </svg>
                  <div className="w-full max-w-xs space-y-2">
                    {[
                      { label: "Shopping", pct: 45, c: "bg-indigo-500" },
                      { label: "Bills & utilities", pct: 30, c: "bg-amber-500" },
                      { label: "Food & dining", pct: 25, c: "bg-emerald-500" },
                    ].map((s) => (
                      <div key={s.label} className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-2 text-zinc-600 dark:text-zinc-300">
                          <span className={`h-2 w-2 rounded-full ${s.c}`} /> {s.label}
                        </span>
                        <span className="font-semibold text-zinc-400">{s.pct}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Savings goal */}
              <div className="rounded-2xl bg-white dark:bg-zinc-800 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:col-span-2">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Savings Goal &middot; Vacation fund</p>
                  <span className="text-xs font-bold text-zinc-900 dark:text-white">68%</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-zinc-100 dark:bg-zinc-700">
                  <div className="h-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500" style={{ width: "68%" }} />
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-400">
                  <span>$3,400 saved</span>
                  <span>Goal: $5,000</span>
                </div>
              </div>

              {/* Recent transactions */}
              <div className="rounded-2xl bg-white dark:bg-zinc-800 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:col-span-2">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">Recent Transactions</p>
                  <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400">View all</span>
                </div>
                <div className="space-y-1">
                  {[
                    { label: "Figma Subscription", time: "Today, 10:42 AM", amount: "-$15.00", up: false, bg: "bg-violet-50 dark:bg-violet-950/40", fg: "text-violet-600 dark:text-violet-400", d: <path d="M8 12a4 4 0 118 0 4 4 0 01-8 0zM12 2a4 4 0 000 8 4 4 0 000-8zM8 12a4 4 0 000 8h4v-8H8z" /> },
                    { label: "Client Payout", time: "Yesterday, 4:15 PM", amount: "+$1,240.00", up: true, bg: "bg-emerald-50 dark:bg-emerald-950/40", fg: "text-emerald-600 dark:text-emerald-400", d: <path d="M12 19V5M5 12l7-7 7 7" /> },
                    { label: "AWS Cloud Services", time: "Feb 12, 2:00 PM", amount: "-$86.40", up: false, bg: "bg-amber-50 dark:bg-amber-950/40", fg: "text-amber-600 dark:text-amber-400", d: <><path d="M3 15a4 4 0 004 4h11a3 3 0 000-6 5 5 0 00-9.6-2A4 4 0 003 15z" /></> },
                  ].map((t) => (
                    <div key={t.label} className="flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-700/40">
                      <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${t.bg} ${t.fg}`}>
                        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">{t.d}</svg>
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-semibold text-zinc-800 dark:text-zinc-100">{t.label}</p>
                        <p className="text-[11px] text-zinc-400">{t.time}</p>
                      </div>
                      <span className={`shrink-0 text-xs font-bold ${t.up ? "text-emerald-500" : "text-zinc-700 dark:text-zinc-300"}`}>{t.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card controls */}
              <div className="rounded-2xl bg-white dark:bg-zinc-800 p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg sm:col-span-2">
                <p className="mb-3 text-xs font-semibold text-zinc-500 dark:text-zinc-400">Card Controls</p>
                <div className="space-y-3">
                  {[
                    { label: "Freeze card", on: false },
                    { label: "Online payments", on: true },
                    { label: "ATM withdrawals", on: true },
                  ].map((c) => (
                    <div key={c.label} className="flex items-center justify-between">
                      <span className="text-xs font-medium text-zinc-600 dark:text-zinc-300">{c.label}</span>
                      <span className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors ${c.on ? "bg-blue-600" : "bg-zinc-200 dark:bg-zinc-600"}`}>
                        <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white shadow transition-transform ${c.on ? "translate-x-[18px]" : "translate-x-1"}`} />
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative partial stat chips, far right edge */}
            <div className="hidden lg:flex absolute -right-4 top-10 items-center gap-1.5 rounded-xl border border-white/60 bg-white/60 backdrop-blur-md px-3 py-2 text-xs font-bold shadow-lg text-rose-500 dark:border-zinc-700 dark:bg-zinc-800/70">
              -4,22%
            </div>
            <div className="hidden lg:flex absolute -right-4 bottom-10 items-center gap-1.5 rounded-xl border border-white/60 bg-white/60 backdrop-blur-md px-3 py-2 text-xs font-bold shadow-lg text-emerald-500 dark:border-zinc-700 dark:bg-zinc-800/70">
              $12,04
            </div>
          </div>
        </div>
      </section>
      {/* MARQUEE */}
      <MarqueeStrip />

      {/* COMPONENT LIBRARY: lazy loaded, below fold */}
      <ComponentLibrarySection />

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
              <IcGithub className="h-4 w-4" /> Ask on GitHub
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
                  <IcGithub className="h-4 w-4" /> View on GitHub
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
            <IcGithub className="h-3 w-3" /> github.com/Pushparaj-2022/Steal-Shadow
          </a>
        </div>
      </footer>

    </div>
  );
}
