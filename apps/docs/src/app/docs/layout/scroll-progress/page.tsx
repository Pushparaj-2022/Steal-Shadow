"use client";

import { ScrollProgress } from "@animui/ui";
import { PropsTable } from "@/components/docs/PropsTable";

export default function ScrollProgressPage() {
  return (
    <div className="space-y-10 pb-20">
      {/* ScrollProgress is already active on this page */}
      <ScrollProgress />

      {/* Breadcrumb */}
      <nav className="text-sm text-neutral-500">
        <span>Layout</span>
        <span className="mx-2">/</span>
        <span className="text-neutral-900 font-medium">ScrollProgress</span>
      </nav>

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">ScrollProgress</h1>
        <p className="text-lg text-neutral-500">
          A fixed progress bar that tracks scroll position on the page.
          Powered by Framer Motion spring physics for smooth animation.
        </p>
      </div>

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <pre className="rounded-lg bg-neutral-950 px-5 py-4 text-sm overflow-x-auto font-mono text-green-400">
          <code>{`import { ScrollProgress } from "@animui/ui";`}</code>
        </pre>
      </section>

      {/* Live demo note */}
      <div className="rounded-lg border border-violet-200 bg-violet-50 px-5 py-4 text-sm text-violet-800">
        <strong className="font-semibold">Live demo:</strong> Scroll this page up and down — the violet bar at the top of the browser window is a live <code className="font-mono text-xs bg-violet-100 px-1 py-0.5 rounded">ScrollProgress</code> instance.
      </div>

      {/* Basic usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic usage</h2>
        <p className="text-neutral-500 text-sm">
          Drop <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">ScrollProgress</code> into your root layout so it persists across every page.
        </p>
        <pre className="rounded-xl bg-neutral-950 px-5 py-4 text-sm overflow-x-auto font-mono text-neutral-200">
          <code>{`import { ScrollProgress } from "@animui/ui";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}`}</code>
        </pre>
      </section>

      {/* Custom style */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Custom style</h2>
        <p className="text-neutral-500 text-sm">
          Adjust the bar color, thickness, and position using the available props.
        </p>
        <pre className="rounded-xl bg-neutral-950 px-5 py-4 text-sm overflow-x-auto font-mono text-neutral-200">
          <code>{`// Bottom-positioned bar in brand orange, 4 px tall
<ScrollProgress position="bottom" color="#f97316" height={4} />

// Thicker violet bar at the top (default position)
<ScrollProgress color="#7c3aed" height={6} />

// Slim red bar at the bottom
<ScrollProgress position="bottom" color="#ef4444" height={2} />`}</code>
        </pre>
      </section>

      {/* Props table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "position",
              type: '"top" | "bottom"',
              default: '"top"',
              description: "Whether the bar appears at the top or bottom of the viewport.",
            },
            {
              name: "color",
              type: "string",
              default: '"#7c3aed"',
              description: "CSS color value for the progress bar.",
            },
            {
              name: "height",
              type: "number",
              default: "3",
              description: "Bar thickness in pixels.",
            },
            {
              name: "className",
              type: "string",
              default: "—",
              description: "Additional classes.",
            },
          ]}
        />
      </section>
    </div>
  );
}
