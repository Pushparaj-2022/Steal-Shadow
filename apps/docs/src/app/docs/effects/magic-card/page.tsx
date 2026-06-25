"use client";

import { MagicCard } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const basicCode = `import { MagicCard } from "@animui/ui";

export function Example() {
  return (
    <MagicCard className="p-6 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 w-72">
      <h3 className="text-lg font-semibold mb-2">Magic Card</h3>
      <p className="text-sm text-neutral-500">
        Move your mouse over this card to see a glowing spotlight follow the cursor.
      </p>
    </MagicCard>
  );
}`;

const customColorCode = `<MagicCard gradientColor="59,130,246" className="p-6 rounded-xl border w-72">
  <h3 className="text-lg font-semibold mb-2">Blue Spotlight</h3>
  <p className="text-sm text-neutral-500">Custom blue gradient follows the cursor.</p>
</MagicCard>`;

const props = [
  { name: "children", type: "ReactNode", default: "—", description: "Content rendered inside the card." },
  { name: "gradientSize", type: "number", default: "300", description: "Radius of the spotlight gradient in pixels." },
  { name: "gradientColor", type: "string", default: '"139,92,246"', description: 'Spotlight color as RGB string, e.g. "139,92,246" for violet.' },
  { name: "gradientOpacity", type: "number", default: "0.08", description: "Maximum opacity of the gradient overlay." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the card wrapper." },
];

export default function MagicCardPage() {
  return (
    <div className="space-y-10 pb-16">
      <nav className="flex items-center gap-2 text-sm text-neutral-500">
        <span>Effects</span>
        <span>/</span>
        <span className="text-neutral-900 font-medium">MagicCard</span>
      </nav>

      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">MagicCard</h1>
        <p className="text-lg text-neutral-500">
          A card with an interactive spotlight gradient that follows the cursor in real time.
          Great for feature cards, pricing blocks, or any surface where you want tactile
          depth feedback.
        </p>
      </div>

      <div className="rounded-xl bg-zinc-950 px-5 py-4">
        <code className="font-mono text-sm">
          <span className="text-blue-400">import</span>{" "}
          <span className="text-green-400">{"{ MagicCard }"}</span>{" "}
          <span className="text-blue-400">from</span>{" "}
          <span className="text-amber-300">"@animui/ui"</span>
        </code>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic</h2>
        <p className="text-neutral-500 text-sm">
          Wrap any content in <code className="font-mono text-xs bg-neutral-100 px-1 rounded">MagicCard</code> — the spotlight tracks automatically.
        </p>
        <ComponentPreview code={basicCode}>
          <MagicCard className="p-6 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 w-full max-w-sm">
            <h3 className="text-lg font-semibold mb-2">Magic Card</h3>
            <p className="text-sm text-neutral-500">
              Move your mouse over this card to see a glowing spotlight follow the cursor.
            </p>
          </MagicCard>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Custom color</h2>
        <p className="text-neutral-500 text-sm">
          Pass an RGB string to <code className="font-mono text-xs bg-neutral-100 px-1 rounded">gradientColor</code> to change the spotlight hue.
        </p>
        <ComponentPreview code={customColorCode}>
          <MagicCard
            gradientColor="59,130,246"
            className="p-6 rounded-xl border border-neutral-200 dark:border-white/10 bg-white dark:bg-white/5 w-full max-w-sm"
          >
            <h3 className="text-lg font-semibold mb-2">Blue Spotlight</h3>
            <p className="text-sm text-neutral-500">
              Custom blue gradient follows your cursor.
            </p>
          </MagicCard>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable props={props} />
      </section>
    </div>
  );
}
