"use client";

import { SparklesText } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const basicCode = `import { SparklesText } from "@animui/ui";

export default function Example() {
  return (
    <SparklesText>
      <h2 className="text-4xl font-bold">Hello, Sparkles!</h2>
    </SparklesText>
  );
}`;

const moreSparklesCode = `<SparklesText sparkleCount={12}>
  <h2 className="text-4xl font-bold">More Sparkles!</h2>
</SparklesText>`;

const props = [
  { name: "children", type: "ReactNode", default: "—", description: "Text or content around which sparkles appear." },
  { name: "sparkleCount", type: "number", default: "6", description: "Number of simultaneous sparkle particles." },
  { name: "colors", type: "string[]", default: '["#fbbf24","#f59e0b","#fde68a","#fcd34d"]', description: "Pool of colors randomly assigned to sparkles." },
  { name: "className", type: "string", default: "—", description: "Additional classes." },
];

export default function SparklesTextPage() {
  return (
    <div className="space-y-10 pb-16">
      <nav className="text-sm text-neutral-500">
        <span>Animations</span>
        <span className="mx-2">/</span>
        <span className="text-neutral-900 font-medium">SparklesText</span>
      </nav>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">SparklesText</h1>
        <p className="text-lg text-neutral-500">
          Wraps any text or content with randomly repositioning sparkle star
          particles that animate continuously around it.
        </p>
      </div>

      <div className="rounded-xl bg-zinc-950 px-5 py-4">
        <code className="font-mono text-sm">
          <span className="text-blue-400">import</span>{" "}
          <span className="text-green-400">{"{ SparklesText }"}</span>{" "}
          <span className="text-blue-400">from</span>{" "}
          <span className="text-amber-300">"@animui/ui"</span>
        </code>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Basic</h2>
        <p className="text-sm text-neutral-500">
          Wrap any heading to add the default six sparkles.
        </p>
        <ComponentPreview code={basicCode}>
          <SparklesText>
            <h2 className="text-4xl font-bold">Hello, Sparkles!</h2>
          </SparklesText>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">More sparkles</h2>
        <p className="text-sm text-neutral-500">
          Increase <code className="text-sm font-mono bg-neutral-100 px-1 rounded">sparkleCount</code> for a denser, more energetic effect.
        </p>
        <ComponentPreview code={moreSparklesCode}>
          <SparklesText sparkleCount={12}>
            <h2 className="text-4xl font-bold">More Sparkles!</h2>
          </SparklesText>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable props={props} />
      </section>
    </div>
  );
}
