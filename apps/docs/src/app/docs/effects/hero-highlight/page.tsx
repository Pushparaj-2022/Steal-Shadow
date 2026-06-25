"use client";

import { HeroHighlight, Highlight } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const basicCode = `import { HeroHighlight, Highlight } from "@animui/ui";

export default function Example() {
  return (
    <HeroHighlight>
      <h1 className="text-4xl font-bold text-center">
        Build <Highlight>beautiful</Highlight> interfaces
      </h1>
    </HeroHighlight>
  );
}`;

const heroHighlightProps = [
  { name: "children", type: "ReactNode", default: "—", description: "Content rendered inside the hero background." },
  { name: "className", type: "string", default: "—", description: "Additional classes." },
];

const highlightProps = [
  { name: "children", type: "ReactNode", default: "—", description: "Text to highlight." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the highlight span." },
];

export default function HeroHighlightPage() {
  return (
    <div className="space-y-10 pb-16">
      <nav className="flex items-center gap-2 text-sm text-neutral-500">
        <span>Effects</span>
        <span>/</span>
        <span className="text-neutral-900 font-medium">HeroHighlight</span>
      </nav>

      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">HeroHighlight</h1>
        <p className="text-lg text-neutral-500 max-w-2xl">
          A hero section wrapper with a subtle dot-grid background, paired with a{" "}
          <code className="text-sm font-mono bg-neutral-100 px-1.5 py-0.5 rounded">Highlight</code>{" "}
          span that animates a colored underline behind text when it scrolls into view.
        </p>
      </div>

      <div className="rounded-xl bg-zinc-950 px-5 py-4">
        <code className="font-mono text-sm">
          <span className="text-blue-400">import</span>{" "}
          <span className="text-green-400">{"{ HeroHighlight, Highlight }"}</span>{" "}
          <span className="text-blue-400">from</span>{" "}
          <span className="text-amber-300">"@animui/ui"</span>
        </code>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Basic</h2>
        <p className="text-neutral-500 text-sm">
          Wrap a heading with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">HeroHighlight</code> to get the dot-grid backdrop,
          then use <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Highlight</code> around the word to animate.
        </p>
        <ComponentPreview code={basicCode}>
          <HeroHighlight className="rounded-xl min-h-[200px] flex items-center justify-center w-full">
            <h1 className="text-4xl font-bold text-center">
              Build <Highlight>beautiful</Highlight> interfaces
            </h1>
          </HeroHighlight>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">HeroHighlight Props</h2>
        <PropsTable props={heroHighlightProps} />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Highlight Props</h2>
        <PropsTable props={highlightProps} />
      </section>
    </div>
  );
}
