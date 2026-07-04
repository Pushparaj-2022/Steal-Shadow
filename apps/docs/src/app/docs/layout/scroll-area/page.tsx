"use client";

import { ScrollArea } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { ScrollArea } from "@animui/ui";

export default function Example() {
  return (
    <ScrollArea maxHeight={220}>
      <ul className="space-y-2 pr-3">
        {items.map((item) => (
          <li key={item} className="rounded-lg bg-neutral-50 px-3 py-2 text-sm text-neutral-700">
            {item}
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}`;

const HORIZONTAL_CODE = `<ScrollArea orientation="horizontal">
  <div className="flex gap-3 w-max pb-3">
    {cards.map((card) => (
      <div key={card} className="w-40 shrink-0 rounded-xl border border-neutral-200 p-4">
        {card}
      </div>
    ))}
  </div>
</ScrollArea>`;

const PROPS = [
  { name: "children", type: "React.ReactNode", default: "—", description: "Scrollable content." },
  { name: "maxHeight", type: "string | number", default: "—", description: "Applied as an inline max-height style to constrain vertical scrolling." },
  { name: "orientation", type: '"vertical" | "horizontal" | "both"', default: '"vertical"', description: "Controls which axis is scrollable." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the scroll container." },
];

const ITEMS = Array.from({ length: 12 }, (_, i) => `List item ${i + 1}`);
const CARDS = Array.from({ length: 8 }, (_, i) => `Card ${i + 1}`);

export default function ScrollAreaDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Layout</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Scroll Area</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Scroll Area</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A scrollable container with thin, subtly-styled scrollbars in place of the native browser scrollbar. Supports vertical, horizontal, or both-axis overflow.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ ScrollArea }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Vertical</h2>
        <ComponentPreview code={BASIC_CODE}>
          <ScrollArea maxHeight={220} className="w-full max-w-sm">
            <ul className="space-y-2 pr-3">
              {ITEMS.map((item) => (
                <li key={item} className="rounded-lg bg-neutral-50 px-3 py-2 text-sm text-neutral-700">
                  {item}
                </li>
              ))}
            </ul>
          </ScrollArea>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Horizontal</h2>
        <ComponentPreview code={HORIZONTAL_CODE}>
          <ScrollArea orientation="horizontal" className="w-full">
            <div className="flex gap-3 w-max pb-3">
              {CARDS.map((card) => (
                <div key={card} className="w-40 shrink-0 rounded-xl border border-neutral-200 p-4 text-sm text-neutral-700">
                  {card}
                </div>
              ))}
            </div>
          </ScrollArea>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Uses native scroll behavior, so keyboard scrolling and screen reader navigation work as expected.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Scrollbar styling is purely cosmetic and falls back to the browser default in unsupported browsers.</li>
        </ul>
      </section>
    </div>
  );
}
