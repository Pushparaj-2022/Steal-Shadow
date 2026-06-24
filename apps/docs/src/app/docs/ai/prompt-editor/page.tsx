"use client";

import { useState } from "react";
import { PromptEditor } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { PromptEditor } from "@stealshadow/ui";
import { useState } from "react";

export default function Example() {
  const [value, setValue] = useState("");
  return (
    <PromptEditor
      value={value}
      onChange={setValue}
      placeholder="Enter your system prompt…"
      onSubmit={(v) => console.log(v)}
    />
  );
}`;

const MAXLENGTH_CODE = `<PromptEditor
  value={value}
  onChange={setValue}
  maxLength={1000}
  onSubmit={(v) => sendToAI(v)}
/>
// Shows character counter: 0 / 1000`;

const LOADING_CODE = `<PromptEditor
  value={value}
  onChange={setValue}
  loading={isSubmitting}
  disabled={isSubmitting}
  onSubmit={async (v) => {
    setIsSubmitting(true);
    await sendToAI(v);
    setIsSubmitting(false);
  }}
/>`;

const PROPS = [
  { name: "value", type: "string", default: '""', description: "Controlled value of the textarea." },
  { name: "onChange", type: "(value: string) => void", default: "—", description: "Called on every keystroke with the current value." },
  { name: "onSubmit", type: "(value: string) => void", default: "—", description: "Called with the final prompt value when Cmd+Enter / Ctrl+Enter is pressed or Send is clicked." },
  { name: "placeholder", type: "string", default: '"Enter your prompt…"', description: "Placeholder text shown when editor is empty." },
  { name: "maxLength", type: "number", default: "4000", description: "Character limit. Shows a live counter that turns amber near the limit and red when exceeded." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables the textarea and Send button." },
  { name: "loading", type: "boolean", default: "false", description: "Replaces Send button label with a spinner while a request is in-flight." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the outer wrapper." },
];

export default function PromptEditorDocsPage() {
  const [value, setValue] = useState("");
  const [limited, setLimited] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingVal, setLoadingVal] = useState("");

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">AI Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">PromptEditor</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">PromptEditor</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A textarea for writing AI prompts. Auto-resizes as you type, shows a character counter, and submits on Cmd+Enter — perfect for system prompt builders and playground UIs.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ PromptEditor }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="max-w-lg w-full">
            <PromptEditor
              value={value}
              onChange={setValue}
              placeholder="Enter your system prompt…"
              onSubmit={(v) => console.log(v)}
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Character limit</h2>
        <p className="text-neutral-500 mb-4 text-sm">
          The counter turns amber at 80% capacity and red when you exceed the limit.
        </p>
        <ComponentPreview code={MAXLENGTH_CODE}>
          <div className="max-w-lg w-full">
            <PromptEditor
              value={limited}
              onChange={setLimited}
              maxLength={200}
              placeholder="Limited to 200 characters…"
              onSubmit={(v) => console.log(v)}
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Loading state</h2>
        <ComponentPreview code={LOADING_CODE}>
          <div className="max-w-lg w-full space-y-3">
            <PromptEditor
              value={loadingVal}
              onChange={setLoadingVal}
              loading={loading}
              placeholder="Type a prompt and click Send…"
              onSubmit={() => {
                setLoading(true);
                setTimeout(() => setLoading(false), 2000);
              }}
            />
            <p className="text-xs text-neutral-400">Click Send to simulate a 2-second request</p>
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
