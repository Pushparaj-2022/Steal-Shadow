"use client";

import { WordPullUp } from "@animui/ui";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

export default function WordPullUpPage() {
  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground">
        <span>Animations</span>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">WordPullUp</span>
      </nav>

      {/* Heading */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">WordPullUp</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Animates a string of text by splitting it into individual words, each
          sliding up from below with a configurable stagger delay and duration.
        </p>
      </div>

      {/* Import */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <pre className="rounded-lg bg-muted px-5 py-4 text-sm overflow-x-auto">
          <code>{`import { WordPullUp } from "@animui/ui";`}</code>
        </pre>
      </div>

      {/* Basic example */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Basic</h2>
        <ComponentPreview
          code={`<WordPullUp text="Build beautiful interfaces that move" />`}
        >
          <WordPullUp text="Build beautiful interfaces that move" />
        </ComponentPreview>
      </div>

      {/* Slow stagger example */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Slow stagger</h2>
        <p className="text-sm text-muted-foreground">
          Increase the <code className="font-mono text-xs">delay</code> prop to
          spread the word entrances further apart.
        </p>
        <ComponentPreview
          code={`<WordPullUp text="Build beautiful interfaces that move" delay={0.12} />`}
        >
          <WordPullUp
            text="Build beautiful interfaces that move"
            delay={0.12}
          />
        </ComponentPreview>
      </div>

      {/* Props table */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable
          props={[
            {
              name: "text",
              type: "string",
              default: "—",
              description:
                "Text content, split on spaces into individually animated words.",
            },
            {
              name: "delay",
              type: "number",
              default: "0.05",
              description: "Stagger delay between each word in seconds.",
            },
            {
              name: "duration",
              type: "number",
              default: "0.4",
              description: "Duration of each word's entrance animation.",
            },
            {
              name: "className",
              type: "string",
              default: "—",
              description: "Additional classes for the container.",
            },
          ]}
        />
      </div>
    </div>
  );
}
