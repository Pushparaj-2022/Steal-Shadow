"use client";

import { SparklesText } from "@animui/ui";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const basicCode = `import { SparklesText } from "@animui/ui";

export default function Example() {
  return (
    <SparklesText>
      <h2 className="text-4xl font-bold">Hello, Sparkles!</h2>
    </SparklesText>
  );
}`;

const moreSparklesCode = `import { SparklesText } from "@animui/ui";

export default function Example() {
  return (
    <SparklesText sparkleCount={12}>
      <h2 className="text-4xl font-bold">More Sparkles!</h2>
    </SparklesText>
  );
}`;

const props = [
  {
    name: "children",
    type: "ReactNode",
    default: "—",
    description: "Text or content around which sparkles appear.",
  },
  {
    name: "sparkleCount",
    type: "number",
    default: "6",
    description: "Number of simultaneous sparkle particles.",
  },
  {
    name: "colors",
    type: "string[]",
    default: '["#fbbf24","#f59e0b","#fde68a"]',
    description: "Pool of colors randomly assigned to sparkles.",
  },
  {
    name: "minSize",
    type: "number",
    default: "8",
    description: "Minimum sparkle size in pixels.",
  },
  {
    name: "maxSize",
    type: "number",
    default: "16",
    description: "Maximum sparkle size in pixels.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes.",
  },
];

export default function SparklesTextPage() {
  return (
    <div className="space-y-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-muted-foreground">
        <span>Animations</span>
        <span className="mx-2">/</span>
        <span className="text-foreground font-medium">SparklesText</span>
      </nav>

      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">SparklesText</h1>
        <p className="text-lg text-muted-foreground">
          Wraps any text or content with randomly repositioning sparkle star
          particles that animate around it continuously.
        </p>
      </div>

      {/* Import */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Import</h2>
        <pre className="rounded-lg border bg-muted px-4 py-3 text-sm overflow-x-auto">
          <code>{`import { SparklesText } from "@animui/ui";`}</code>
        </pre>
      </div>

      {/* Basic */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">Basic</h2>
          <p className="text-sm text-muted-foreground">
            Wrap any heading or text element to add the default six sparkles.
          </p>
        </div>
        <ComponentPreview
          code={basicCode}
          preview={
            <SparklesText>
              <h2 className="text-4xl font-bold">Hello, Sparkles!</h2>
            </SparklesText>
          }
        />
      </div>

      {/* More sparkles */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-xl font-semibold">More sparkles</h2>
          <p className="text-sm text-muted-foreground">
            Increase <code className="text-sm font-mono">sparkleCount</code> for
            a denser, more energetic effect.
          </p>
        </div>
        <ComponentPreview
          code={moreSparklesCode}
          preview={
            <SparklesText sparkleCount={12}>
              <h2 className="text-4xl font-bold">More Sparkles!</h2>
            </SparklesText>
          }
        />
      </div>

      {/* Props */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
