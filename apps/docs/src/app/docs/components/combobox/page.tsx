"use client";

import { useState } from "react";
import { Combobox } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Combobox } from "@animui/ui";

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "vite", label: "Vite" },
];

export default function Example() {
  const [value, setValue] = useState("");
  return (
    <Combobox
      options={frameworks}
      value={value}
      onChange={setValue}
      placeholder="Select a framework..."
    />
  );
}`;

const PROPS = [
  { name: "options", type: "ComboboxOption[]", default: "—", description: "Array of { value, label, disabled? } options." },
  { name: "value", type: "string", default: "—", description: "Currently selected value (controlled)." },
  { name: "onChange", type: "(value: string) => void", default: "—", description: "Called when a selection is made." },
  { name: "placeholder", type: "string", default: '"Select..."', description: "Input placeholder text." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables the combobox." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the wrapper." },
];

const FRAMEWORKS = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "vite", label: "Vite" },
];

export default function ComboboxDocsPage() {
  const [value, setValue] = useState("");
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Combobox</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Combobox</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A searchable dropdown that filters options as you type. Supports keyboard navigation, custom options, and disabled states.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Combobox }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="w-full max-w-xs">
            <Combobox
              options={FRAMEWORKS}
              value={value}
              onChange={setValue}
              placeholder="Select a framework..."
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">With search</h2>
        <ComponentPreview code={`// Type to filter options — Combobox filters automatically\n<Combobox options={options} value={value} onChange={setValue} placeholder="Search frameworks..." />`}>
          <div className="w-full max-w-xs">
            <Combobox
              options={FRAMEWORKS}
              value={searchValue}
              onChange={setSearchValue}
              placeholder="Search frameworks..."
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Disabled</h2>
        <ComponentPreview code={`<Combobox options={options} value="" onChange={() => {}} disabled />`}>
          <div className="w-full max-w-xs">
            <Combobox options={FRAMEWORKS} value="" onChange={() => {}} disabled />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Keyboard navigation</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="font-mono text-xs bg-neutral-100 px-1 rounded shrink-0">↑ ↓</span>Navigate options</li>
          <li className="flex items-start gap-2"><span className="font-mono text-xs bg-neutral-100 px-1 rounded shrink-0">Enter</span>Select highlighted option</li>
          <li className="flex items-start gap-2"><span className="font-mono text-xs bg-neutral-100 px-1 rounded shrink-0">Esc</span>Close dropdown</li>
        </ul>
      </section>
    </div>
  );
}
