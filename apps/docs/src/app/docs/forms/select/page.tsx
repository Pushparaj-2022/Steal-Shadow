"use client";

import { useState } from "react";
import { Select } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Select } from "@animui/ui";

const options = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "SolidJS" },
];

export default function Example() {
  return (
    <Select
      label="Favourite framework"
      placeholder="Choose one..."
      options={options}
      onChange={(value) => console.log(value)}
    />
  );
}`;

const PROPS = [
  { name: "options", type: "Array<{ value: string; label: string; disabled?: boolean }>", default: "—", description: "Array of selectable options." },
  { name: "value", type: "string", default: "—", description: "Controlled selected value." },
  { name: "onChange", type: "(value: string) => void", default: "—", description: "Called when selection changes." },
  { name: "label", type: "string", default: "—", description: "Label rendered above the select trigger." },
  { name: "placeholder", type: "string", default: '"Select..."', description: "Placeholder text shown when no option is selected." },
  { name: "searchable", type: "boolean", default: "false", description: "Adds a search input to filter options." },
  { name: "clearable", type: "boolean", default: "false", description: "Adds a clear button to reset the selection." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables the select." },
  { name: "error", type: "string", default: "—", description: "Error message shown below the select." },
  { name: "className", type: "string", default: "—", description: "Additional classes on the wrapper." },
];

const FRAMEWORK_OPTIONS = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "svelte", label: "Svelte" },
  { value: "solid", label: "SolidJS" },
  { value: "angular", label: "Angular" },
];

function SelectDemo() {
  const [value, setValue] = useState("");
  return (
    <div className="w-56">
      <Select
        label="Favourite framework"
        placeholder="Choose one..."
        options={FRAMEWORK_OPTIONS}
        value={value}
        onChange={(v) => setValue(v)}
      />
    </div>
  );
}

export default function SelectPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Forms</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Select</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Select</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Accessible dropdown select with optional search, clearable selection, and keyboard navigation.
          A drop-in replacement for the native select element with full styling control.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Select }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic usage</h2>
        <ComponentPreview code={BASIC_CODE}>
          <SelectDemo />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
