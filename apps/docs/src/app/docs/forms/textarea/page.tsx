"use client";

import { Textarea } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Textarea } from "@stealshadow/ui";

export default function Example() {
  return (
    <Textarea
      placeholder="Write something..."
      rows={4}
    />
  );
}`;

const ERROR_CODE = `<Textarea
  value={bio}
  onChange={(e) => setBio(e.target.value)}
  error="Bio must be at least 20 characters."
  rows={3}
/>`;

const PROPS = [
  { name: "placeholder", type: "string", default: "—", description: "Placeholder text shown when empty." },
  { name: "value", type: "string", default: "—", description: "Controlled value." },
  { name: "onChange", type: "React.ChangeEventHandler", default: "—", description: "Change handler." },
  { name: "rows", type: "number", default: "3", description: "Number of visible text rows." },
  { name: "disabled", type: "boolean", default: "false", description: "Prevents interaction." },
  { name: "error", type: "string", default: "—", description: "Error message shown below the textarea." },
  { name: "resize", type: '"none" | "both" | "vertical"', default: '"vertical"', description: "Controls CSS resize behaviour." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the textarea element." },
];

export default function TextareaDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Forms</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Textarea</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Textarea</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A multi-line text input with error state, resize control, and consistent styling that integrates with SmartForm.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Textarea }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="w-full max-w-sm">
            <Textarea placeholder="Write something..." rows={4} />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Error state</h2>
        <ComponentPreview code={ERROR_CODE}>
          <div className="w-full max-w-sm">
            <Textarea defaultValue="Too short" rows={3} error="Bio must be at least 20 characters." />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Disabled</h2>
        <ComponentPreview code={`<Textarea disabled placeholder="Read-only content" rows={3} />`}>
          <div className="w-full max-w-sm">
            <Textarea disabled placeholder="Read-only content" rows={3} />
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
