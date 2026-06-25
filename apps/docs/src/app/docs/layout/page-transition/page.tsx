"use client";

import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `// app/layout.tsx
import { PageTransition } from "@animui/ui";

export default function RootLayout({ children, params }) {
  return (
    <html><body>
      <PageTransition transitionKey={params?.slug ?? "/"}>
        {children}
      </PageTransition>
    </body></html>
  );
}`;

const VARIANTS_CODE = `// Fade (default)
<PageTransition transitionKey={key} variant="fade">{children}</PageTransition>

// Slide up
<PageTransition transitionKey={key} variant="slide-up">{children}</PageTransition>

// Slide left
<PageTransition transitionKey={key} variant="slide-left">{children}</PageTransition>

// Scale
<PageTransition transitionKey={key} variant="scale">{children}</PageTransition>

// Blur
<PageTransition transitionKey={key} variant="blur">{children}</PageTransition>`;

const CUSTOM_CODE = `<PageTransition
  transitionKey={key}
  variant="slide-up"
  duration={0.4}
>
  {children}
</PageTransition>`;

const PROPS = [
  { name: "transitionKey", type: "string", default: "—", description: "Required. A unique key per page/route — changing it triggers the enter/exit animation." },
  { name: "children", type: "ReactNode", default: "—", description: "The page content to animate." },
  { name: "variant", type: '"fade" | "slide-up" | "slide-left" | "scale" | "blur"', default: '"fade"', description: "The animation type applied on enter and exit." },
  { name: "duration", type: "number", default: "0.35", description: "Animation duration in seconds." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the animated wrapper." },
];

export default function PageTransitionDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Layout</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">PageTransition</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">PageTransition</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Wraps page content with smooth enter/exit animations on route change. Drop it into your root layout once and every page transition is animated.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ PageTransition }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Setup</h2>
        <p className="text-neutral-500 mb-4 text-sm">Place <code className="font-mono text-xs bg-neutral-100 px-1 rounded">PageTransition</code> in your root layout, wrapping <code className="font-mono text-xs bg-neutral-100 px-1 rounded">{"{children}"}</code>.</p>
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <div className="px-4 py-2 bg-neutral-50 border-b border-neutral-100"><span className="text-xs font-mono text-neutral-500">app/layout.tsx</span></div>
          <pre className="bg-neutral-950 px-5 py-4 overflow-x-auto text-sm font-mono text-neutral-200 leading-relaxed">{BASIC_CODE}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Variants</h2>
        <ComponentPreview code={VARIANTS_CODE}>
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: "fade", desc: "Opacity 0 → 1" },
              { label: "slide-up", desc: "Y 24px → 0" },
              { label: "slide-left", desc: "X 40px → 0" },
              { label: "scale", desc: "Scale 0.96 → 1" },
              { label: "blur", desc: "Blur 8px → 0" },
            ].map(({ label, desc }) => (
              <div key={label} className="rounded-xl border border-neutral-100 bg-neutral-50 p-4">
                <p className="text-sm font-bold text-neutral-800 font-mono">{label}</p>
                <p className="text-xs text-neutral-500 mt-1">{desc}</p>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Custom duration</h2>
        <ComponentPreview code={CUSTOM_CODE}>
          <div className="rounded-xl border border-neutral-100 bg-neutral-50 p-4 w-full max-w-sm">
            <div className="text-xs font-mono text-neutral-500 space-y-1">
              <p><span className="text-blue-600">transitionKey</span>=<span className="text-emerald-600">"my-page"</span></p>
              <p><span className="text-blue-600">variant</span>=<span className="text-emerald-600">"slide-up"</span></p>
              <p><span className="text-blue-600">duration</span>=<span className="text-amber-600">{"{"}</span><span className="text-amber-600">0.4</span><span className="text-amber-600">{"}"}</span></p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section className="rounded-xl border border-amber-100 bg-amber-50 p-5">
        <h3 className="text-sm font-bold text-amber-800 mb-1">App Router note</h3>
        <p className="text-sm text-amber-700">
          In Next.js App Router, add <code className="font-mono text-xs bg-amber-100 px-1 rounded">&quot;use client&quot;</code> to the layout file
          that contains <code className="font-mono text-xs bg-amber-100 px-1 rounded">PageTransition</code>, since it uses
          Motion hooks internally.
        </p>
      </section>
    </div>
  );
}
