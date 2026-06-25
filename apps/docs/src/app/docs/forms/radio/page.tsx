"use client";

import { useState } from "react";
import { RadioGroup, RadioItem } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { RadioGroup, RadioItem } from "@animui/ui";
import { useState } from "react";

export default function Example() {
  const [value, setValue] = useState("monthly");
  return (
    <RadioGroup value={value} onChange={setValue} name="billing">
      <RadioItem value="monthly" label="Monthly" />
      <RadioItem value="yearly" label="Yearly" />
      <RadioItem value="one-time" label="One-time" />
    </RadioGroup>
  );
}`;

const DESC_CODE = `<RadioGroup value={value} onChange={setValue} name="plan">
  <RadioItem value="free" label="Free" description="Up to 3 projects" />
  <RadioItem value="pro" label="Pro" description="Unlimited projects, priority support" />
  <RadioItem value="enterprise" label="Enterprise" description="Custom SLA and dedicated account manager" />
</RadioGroup>`;

const PROPS = [
  { name: "value", type: "string", default: "—", description: "The currently selected value." },
  { name: "onChange", type: "(value: string) => void", default: "—", description: "Called when selection changes." },
  { name: "name", type: "string", default: "—", description: "HTML name attribute — groups radio inputs for form submission." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables the entire group." },
];

const ITEM_PROPS = [
  { name: "value", type: "string", default: "—", description: "The value this item represents." },
  { name: "label", type: "string", default: "—", description: "Visible label text." },
  { name: "description", type: "string", default: "—", description: "Secondary descriptive text below the label." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables this individual item." },
];

function RadioGroupBasicDemo() {
  const [value, setValue] = useState("monthly");
  return (
    <RadioGroup value={value} onChange={setValue} name="billing">
      <RadioItem value="monthly" label="Monthly" />
      <RadioItem value="yearly" label="Yearly" />
      <RadioItem value="one-time" label="One-time" />
    </RadioGroup>
  );
}

function RadioGroupDescDemo() {
  const [value, setValue] = useState("pro");
  return (
    <RadioGroup value={value} onChange={setValue} name="plan">
      <RadioItem value="free" label="Free" description="Up to 3 projects" />
      <RadioItem value="pro" label="Pro" description="Unlimited projects, priority support" />
      <RadioItem value="enterprise" label="Enterprise" description="Custom SLA and dedicated account manager" />
    </RadioGroup>
  );
}

export default function RadioDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Forms</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Radio</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Radio</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Accessible radio group for selecting a single option from a list. Supports descriptions, disabled states, and keyboard navigation.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ RadioGroup, RadioItem }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <RadioGroupBasicDemo />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">With descriptions</h2>
        <ComponentPreview code={DESC_CODE}>
          <RadioGroupDescDemo />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">RadioGroup Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">RadioItem Props</h2>
        <PropsTable props={ITEM_PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Native <code className="font-mono text-xs bg-neutral-100 px-1 rounded">&lt;input type="radio"&gt;</code> elements under the hood — works with form submission.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Arrow keys navigate between options within the group.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Descriptions are associated via <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-describedby</code>.</li>
        </ul>
      </section>
    </div>
  );
}
