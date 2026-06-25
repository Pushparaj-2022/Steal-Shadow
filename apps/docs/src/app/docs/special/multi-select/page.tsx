"use client";

import { useState } from "react";
import { MultiSelect } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { MultiSelect } from "@animui/ui";
import { useState } from "react";

const frameworks = [
  { value: "react",   label: "React",   description: "A JavaScript library for building user interfaces" },
  { value: "vue",     label: "Vue",     description: "The Progressive JavaScript Framework" },
  { value: "svelte",  label: "Svelte",  description: "Cybernetically enhanced web apps" },
  { value: "angular", label: "Angular", description: "Platform for building mobile and desktop web apps" },
  { value: "solid",   label: "Solid",   description: "Simple and performant reactivity for building UIs" },
];

export default function Example() {
  const [selected, setSelected] = useState<string[]>([]);
  return (
    <div className="w-80">
      <MultiSelect
        label="Frameworks"
        options={frameworks}
        value={selected}
        onChange={setSelected}
        placeholder="Select frameworks…"
      />
      <p className="mt-3 text-sm text-neutral-500">Selected: {selected.join(", ") || "none"}</p>
    </div>
  );
}`;

const PROPS = [
  { name: "options", type: "MultiSelectOption[]", default: "—", description: "List of selectable options." },
  { name: "value", type: "string[]", default: "—", description: "Controlled selected values." },
  { name: "onChange", type: "(values: string[]) => void", default: "—", description: "Called when selection changes." },
  { name: "placeholder", type: "string", default: '"Select options…"', description: "Shown when nothing is selected." },
  { name: "searchPlaceholder", type: "string", default: '"Search…"', description: "Placeholder for the search input inside the dropdown." },
  { name: "maxVisible", type: "number", default: "—", description: "Max tokens to show before a +N overflow badge." },
  { name: "label", type: "string", default: "—", description: "Label text above the field." },
  { name: "disabled", type: "boolean", default: "false", description: "Disable the entire field." },
  { name: "noOptionsText", type: "string", default: '"No options found"', description: "Empty state text when search has no results." },
  { name: "className", type: "string", default: "—", description: "Applied to the outer container." },
];

const OPTION_PROPS = [
  { name: "value", type: "string", default: "—", description: "Unique identifier for this option." },
  { name: "label", type: "string", default: "—", description: "Display text." },
  { name: "icon", type: "ReactNode", default: "—", description: "Optional icon shown in the token and option row." },
  { name: "description", type: "string", default: "—", description: "Secondary line shown in the dropdown." },
  { name: "disabled", type: "boolean", default: "false", description: "Makes this option unselectable." },
];

const FRAMEWORKS = [
  { value: "react",   label: "React",   description: "A JavaScript library for building user interfaces" },
  { value: "vue",     label: "Vue",     description: "The Progressive JavaScript Framework" },
  { value: "svelte",  label: "Svelte",  description: "Cybernetically enhanced web apps" },
  { value: "angular", label: "Angular", description: "Platform for building mobile and desktop web apps" },
  { value: "solid",   label: "Solid",   description: "Simple and performant reactivity for building UIs" },
];

export default function MultiSelectDocsPage() {
  const [selected, setSelected] = useState<string[]>(["react"]);

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Special</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">MultiSelect</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">MultiSelect</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Token-based multi-select with animated chip entrance/exit, search filter, keyboard navigation (↑↓ Enter Backspace), and a +N overflow badge when too many items are selected.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ MultiSelect }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex flex-col items-center p-6 bg-neutral-50 rounded-2xl gap-4 w-full">
            <div className="w-80">
              <MultiSelect
                label="Frameworks"
                options={FRAMEWORKS}
                value={selected}
                onChange={setSelected}
                placeholder="Select frameworks…"
              />
              <p className="mt-3 text-sm text-neutral-500">Selected: {selected.join(", ") || "none"}</p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Keyboard shortcuts</h2>
        <div className="grid grid-cols-2 gap-3 text-sm">
          {[
            ["↑ / ↓", "Navigate options"],
            ["Enter", "Toggle highlighted option"],
            ["Backspace", "Remove last token (when search is empty)"],
            ["Escape", "Close dropdown"],
            ["Space / ArrowDown", "Open dropdown"],
          ].map(([key, desc]) => (
            <div key={key} className="flex items-center gap-3 rounded-xl border border-neutral-100 bg-white p-3">
              <code className="shrink-0 rounded-lg bg-neutral-100 px-2 py-1 text-xs font-mono text-neutral-700">{key}</code>
              <span className="text-neutral-500">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">MultiSelectOption props</h2>
        <PropsTable props={OPTION_PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
