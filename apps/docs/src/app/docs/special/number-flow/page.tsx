"use client";

import { useState } from "react";
import { NumberFlow } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { NumberFlow } from "@stealshadow/ui";
import { useState } from "react";

export default function Example() {
  const [count, setCount] = useState(1234);
  return (
    <div className="flex flex-col items-center gap-4">
      <NumberFlow value={count} className="text-6xl font-black tabular-nums" separator="," />
      <div className="flex gap-2">
        <button onClick={() => setCount(c => c - 100)} className="rounded-xl bg-neutral-900 px-4 py-2 text-white text-sm font-bold">−100</button>
        <button onClick={() => setCount(c => c + 100)} className="rounded-xl bg-neutral-900 px-4 py-2 text-white text-sm font-bold">+100</button>
      </div>
    </div>
  );
}`;

const PRICE_CODE = `<NumberFlow
  value={price}
  prefix="$"
  decimals={2}
  className="text-4xl font-black"
/>`;

const PROPS = [
  { name: "value", type: "number", default: "—", description: "The number to display. Changing this triggers the rolling animation." },
  { name: "prefix", type: "string", default: '""', description: "Static text prepended (e.g. \"$\", \"€\")." },
  { name: "suffix", type: "string", default: '""', description: "Static text appended (e.g. \"%\", \"px\")." },
  { name: "separator", type: "string", default: '","', description: "Thousands separator character." },
  { name: "decimals", type: "number", default: "0", description: "Number of decimal places to display." },
  { name: "format", type: "(value: number) => string", default: "—", description: "Custom formatter. Overrides separator and decimals." },
  { name: "className", type: "string", default: "—", description: "Additional classes." },
];

export default function NumberFlowDocsPage() {
  const [count, setCount] = useState(1234);

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Special</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">NumberFlow</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">NumberFlow</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Odometer-style rolling digit animation. Each digit is a vertical column of 0–9 that slides to the correct position using spring physics. The comma separators and prefix/suffix are static — only the actual digits animate.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ NumberFlow }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Counter</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex flex-col items-center gap-6 p-12 bg-neutral-50 rounded-2xl">
            <NumberFlow value={count} className="text-6xl font-black tabular-nums text-neutral-900" separator="," />
            <div className="flex gap-2">
              <button
                onClick={() => setCount(c => c - 100)}
                className="rounded-xl bg-neutral-900 px-5 py-2.5 text-white text-sm font-bold hover:opacity-80 transition-opacity"
              >
                −100
              </button>
              <button
                onClick={() => setCount(c => c + 100)}
                className="rounded-xl bg-neutral-900 px-5 py-2.5 text-white text-sm font-bold hover:opacity-80 transition-opacity"
              >
                +100
              </button>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Pricing display</h2>
        <ComponentPreview code={PRICE_CODE}>
          <div className="flex items-center justify-center gap-8 p-8 bg-neutral-50 rounded-2xl">
            {[9, 29, 99].map(price => (
              <div key={price} className="text-center">
                <NumberFlow value={price} prefix="$" decimals={2} className="text-4xl font-black text-neutral-900" />
                <p className="text-xs text-neutral-400 mt-1">/month</p>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">How it works</h2>
        <p className="text-neutral-500">
          Each digit position renders a vertical strip containing all digits 0–9. A <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">useSpring</code> motion value drives the strip's <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">translateY</code> — when the digit changes, the spring smoothly scrolls the column to the new value. Only numeric characters animate; separators (commas, dots) and prefix/suffix are static spans.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
