"use client";

import { useState } from "react";
import { Rating } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Rating } from "@stealshadow/ui";
import { useState } from "react";

export default function Example() {
  const [value, setValue] = useState(0);
  return (
    <Rating value={value} onChange={setValue} showValue />
  );
}`;

const READONLY_CODE = `<Rating value={4.5} readOnly />`;

const SIZES_CODE = `<Rating size="sm" defaultValue={3} />
<Rating size="md" defaultValue={4} />
<Rating size="lg" defaultValue={5} />`;

const FORM_CODE = `<div className="space-y-3">
  <div>
    <p className="text-sm font-semibold text-neutral-700 mb-1">Overall experience</p>
    <Rating onChange={setRating} showValue />
  </div>
  <div>
    <p className="text-sm font-semibold text-neutral-700 mb-1">Documentation quality</p>
    <Rating onChange={setDocs} color="#8b5cf6" showValue />
  </div>
</div>`;

const PROPS = [
  { name: "value", type: "number", default: "—", description: "Controlled rating (float ok for readonly display)." },
  { name: "defaultValue", type: "number", default: "0", description: "Uncontrolled initial rating." },
  { name: "max", type: "number", default: "5", description: "Number of stars." },
  { name: "onChange", type: "(value: number) => void", default: "—", description: "Called when user selects a star." },
  { name: "readOnly", type: "boolean", default: "false", description: "Disable interaction." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Star size." },
  { name: "color", type: "string", default: '"#f59e0b"', description: "CSS color for filled stars." },
  { name: "showValue", type: "boolean", default: "false", description: "Show numeric value next to stars." },
  { name: "label", type: "string", default: "—", description: "Label shown before the stars." },
];

export default function RatingDocsPage() {
  const [rating, setRating] = useState(0);
  const [docsRating, setDocsRating] = useState(0);

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Rating</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Rating</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Interactive star rating component with hover preview, click-to-deselect, three sizes, and custom color. Readonly mode for displaying scores.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Rating }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Interactive</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex items-center gap-4">
            <Rating value={rating} onChange={setRating} showValue />
            <span className="text-sm text-neutral-500">Click to rate</span>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Read-only (display)</h2>
        <ComponentPreview code={READONLY_CODE}>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((v) => (
              <div key={v} className="flex items-center gap-3">
                <Rating value={v} readOnly />
                <span className="text-sm font-bold text-neutral-600">{v}.0</span>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Sizes</h2>
        <ComponentPreview code={SIZES_CODE}>
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex flex-col items-center gap-1">
              <Rating value={3} size="sm" readOnly />
              <span className="text-[10px] text-neutral-400">sm</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Rating value={4} size="md" readOnly />
              <span className="text-[10px] text-neutral-400">md</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Rating value={5} size="lg" readOnly />
              <span className="text-[10px] text-neutral-400">lg</span>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">In a form</h2>
        <ComponentPreview code={FORM_CODE}>
          <div className="space-y-4 max-w-xs">
            <div>
              <p className="text-sm font-semibold text-neutral-700 mb-1.5">Overall experience</p>
              <Rating onChange={setRating} showValue />
            </div>
            <div>
              <p className="text-sm font-semibold text-neutral-700 mb-1.5">Documentation quality</p>
              <Rating color="#8b5cf6" showValue onChange={setDocsRating} />
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
