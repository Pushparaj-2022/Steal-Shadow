"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

function SingleDemo() {
  const [value, setValue] = useState("center");
  return (
    <ToggleGroup type="single" value={value} onValueChange={setValue}>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  );
}

function MultipleDemo() {
  const [value, setValue] = useState<string[]>(["bold"]);
  return (
    <ToggleGroup type="multiple" value={value} onValueChange={setValue}>
      <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
      <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
      <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
    </ToggleGroup>
  );
}

const SINGLE_CODE = `import { ToggleGroup, ToggleGroupItem } from "@animui/ui";
import { useState } from "react";

export default function Example() {
  const [value, setValue] = useState("center");
  return (
    <ToggleGroup type="single" value={value} onValueChange={setValue}>
      <ToggleGroupItem value="left">Left</ToggleGroupItem>
      <ToggleGroupItem value="center">Center</ToggleGroupItem>
      <ToggleGroupItem value="right">Right</ToggleGroupItem>
    </ToggleGroup>
  );
}`;

const MULTIPLE_CODE = `const [value, setValue] = useState<string[]>(["bold"]);

<ToggleGroup type="multiple" value={value} onValueChange={setValue}>
  <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
  <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
  <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
</ToggleGroup>`;

const GROUP_PROPS = [
  { name: "type", type: '"single" | "multiple"', default: "—", description: "Whether one or multiple items can be active at a time." },
  { name: "value", type: "string | string[]", default: "—", description: "Controlled active value(s). String for single, string array for multiple." },
  { name: "defaultValue", type: "string | string[]", default: "—", description: "Uncontrolled initial active value(s)." },
  { name: "onValueChange", type: "(value: string | string[]) => void", default: "—", description: "Called when the active value(s) change." },
  { name: "children", type: "React.ReactNode", default: "—", description: "ToggleGroupItem elements." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the group wrapper." },
];

const ITEM_PROPS = [
  { name: "value", type: "string", default: "—", description: "Unique value identifying this item within the group." },
  { name: "children", type: "React.ReactNode", default: "—", description: "Content rendered inside the item." },
  { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction and applies reduced opacity." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the item button." },
];

export default function ToggleGroupDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Forms</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">ToggleGroup</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">ToggleGroup</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A segmented group of toggle buttons. Supports single selection, like a radio group, or multiple selection, like independent toolbar toggles.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ ToggleGroup, ToggleGroupItem }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Single selection</h2>
        <ComponentPreview code={SINGLE_CODE}>
          <SingleDemo />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Multiple selection</h2>
        <ComponentPreview code={MULTIPLE_CODE}>
          <MultipleDemo />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Disabled item</h2>
        <ComponentPreview code={`<ToggleGroup type="single" defaultValue="left">
  <ToggleGroupItem value="left">Left</ToggleGroupItem>
  <ToggleGroupItem value="center" disabled>Center</ToggleGroupItem>
  <ToggleGroupItem value="right">Right</ToggleGroupItem>
</ToggleGroup>`}>
          <ToggleGroup type="single" defaultValue="left">
            <ToggleGroupItem value="left">Left</ToggleGroupItem>
            <ToggleGroupItem value="center" disabled>Center</ToggleGroupItem>
            <ToggleGroupItem value="right">Right</ToggleGroupItem>
          </ToggleGroup>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">ToggleGroup Props</h2>
        <PropsTable props={GROUP_PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">ToggleGroupItem Props</h2>
        <PropsTable props={ITEM_PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>The group is exposed with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">role="group"</code>.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Each item is a native <code className="font-mono text-xs bg-neutral-100 px-1 rounded">{'<button>'}</code> with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-pressed</code>.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Disabled items are removed from the tab order.</li>
        </ul>
      </section>
    </div>
  );
}
