"use client";

import { WordPullUp } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const basicCode = `import { WordPullUp } from "@animui/ui";

export default function Example() {
  return <WordPullUp words="Build beautiful interfaces that move" />;
}`;

const slowCode = `<WordPullUp words="Each word arrives with presence" delayMultiplier={0.15} />`;

const propsData = [
  { name: "words", type: "string", default: "—", description: "Text content, split on spaces into individually animated words." },
  { name: "delayMultiplier", type: "number", default: "0.08", description: "Stagger delay multiplier per word in seconds." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the container." },
  { name: "wordClassName", type: "string", default: "—", description: "Additional classes applied to each word span." },
];

export default function WordPullUpPage() {
  return (
    <div className="space-y-10 pb-16">
      <nav className="flex items-center gap-2 text-sm text-neutral-500">
        <span>Animations</span>
        <span>/</span>
        <span className="text-neutral-900 font-medium">WordPullUp</span>
      </nav>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">WordPullUp</h1>
        <p className="text-lg text-neutral-500">
          Animates a string of text word-by-word, each word sliding up from below
          with a configurable stagger. Great for hero headings and section titles.
        </p>
      </div>

      <div className="rounded-xl bg-zinc-950 px-5 py-4">
        <code className="font-mono text-sm">
          <span className="text-blue-400">import</span>{" "}
          <span className="text-green-400">{"{ WordPullUp }"}</span>{" "}
          <span className="text-blue-400">from</span>{" "}
          <span className="text-amber-300">"@animui/ui"</span>
        </code>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic</h2>
        <ComponentPreview code={basicCode}>
          <div className="text-2xl font-bold text-center py-4">
            <WordPullUp words="Build beautiful interfaces that move" />
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Slow stagger</h2>
        <p className="text-neutral-500 text-sm">
          Increase <code className="font-mono text-xs bg-neutral-100 px-1 rounded">delayMultiplier</code> to
          spread the word entrances further apart.
        </p>
        <ComponentPreview code={slowCode}>
          <div className="text-2xl font-bold text-center py-4">
            <WordPullUp words="Each word arrives with presence" delayMultiplier={0.15} />
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable props={propsData} />
      </section>
    </div>
  );
}
