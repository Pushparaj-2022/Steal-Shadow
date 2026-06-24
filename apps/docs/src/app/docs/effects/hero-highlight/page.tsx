"use client";

import { HeroHighlight, Highlight } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const basicCode = `import { HeroHighlight, Highlight } from "@animui/ui";

export default function Example() {
  return (
    <HeroHighlight>
      <h1 className="text-4xl font-bold text-center text-neutral-800 dark:text-white">
        Build <Highlight>beautiful</Highlight> interfaces
      </h1>
    </HeroHighlight>
  );
}`;

const heroHighlightProps = [
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Content rendered inside the hero background.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes.",
  },
];

const highlightProps = [
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Text to highlight.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes for the highlight span.",
  },
];

export default function HeroHighlightPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
        <span>Effects</span>
        <span>/</span>
        <span className="text-neutral-900 dark:text-white font-medium">HeroHighlight</span>
      </nav>

      {/* Heading + Description */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
          HeroHighlight
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl">
          A hero section wrapper that renders a subtle dot-grid background, paired with a{" "}
          <code className="text-sm font-mono bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">
            Highlight
          </code>{" "}
          component that animates a colored underline or marker behind text when it scrolls into
          view.
        </p>
      </div>

      {/* Import */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Import</h2>
        <pre className="bg-neutral-950 text-neutral-100 rounded-xl px-5 py-4 text-sm overflow-x-auto">
          <code>{`import { HeroHighlight, Highlight } from "@animui/ui";`}</code>
        </pre>
      </div>

      {/* Basic Example */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">Basic</h2>
        <p className="text-neutral-600 dark:text-neutral-400">
          Wrap any heading with <code className="text-sm font-mono bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">HeroHighlight</code> to get the dot-grid backdrop, then use{" "}
          <code className="text-sm font-mono bg-neutral-100 dark:bg-neutral-800 px-1.5 py-0.5 rounded">Highlight</code> around the word you want to animate.
        </p>
        <ComponentPreview
          code={basicCode}
          preview={
            <HeroHighlight className="rounded-xl min-h-[220px] flex items-center justify-center w-full">
              <h1 className="text-4xl font-bold text-center text-neutral-800 dark:text-white">
                Build <Highlight>beautiful</Highlight> interfaces
              </h1>
            </HeroHighlight>
          }
        />
      </div>

      {/* Props — HeroHighlight */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          HeroHighlight Props
        </h2>
        <PropsTable props={heroHighlightProps} />
      </div>

      {/* Props — Highlight */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-neutral-900 dark:text-white">
          Highlight Props
        </h2>
        <PropsTable props={highlightProps} />
      </div>
    </div>
  );
}
