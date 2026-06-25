"use client";

import { useState } from "react";
import { RichEditor } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { RichEditor } from "@animui/ui";
import { useState } from "react";

export default function Example() {
  const [value, setValue] = useState("");
  return (
    <RichEditor
      value={value}
      onChange={setValue}
      placeholder="Start writing..."
    />
  );
}`;

const CONTROLLED_CODE = `// Read back the HTML value
const [html, setHtml] = useState("");

<RichEditor
  value={html}
  onChange={setHtml}
  placeholder="Type here..."
/>

<pre>{html}</pre>  // displays raw HTML`;

const PROPS = [
  { name: "value", type: "string", default: "—", description: "HTML string content (controlled)." },
  { name: "onChange", type: "(value: string) => void", default: "—", description: "Called on every content change with the current HTML string." },
  { name: "placeholder", type: "string", default: '"Start typing…"', description: "Placeholder text shown when the editor is empty." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the outer wrapper." },
];

export default function RichEditorDocsPage() {
  const [value, setValue] = useState("");
  const [value2, setValue2] = useState("");

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Data</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Rich Editor</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Rich Editor</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A lightweight rich text editor with a formatting toolbar. Supports bold, italic, underline, strikethrough, ordered lists, and unordered lists.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ RichEditor }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <RichEditor value={value} onChange={setValue} placeholder="Start writing..." />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Controlled with HTML output</h2>
        <ComponentPreview code={CONTROLLED_CODE}>
          <div className="space-y-3">
            <RichEditor value={value2} onChange={setValue2} placeholder="Type here to see the HTML..." />
            {value2 && (
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3">
                <p className="text-xs font-mono text-neutral-400 mb-1">HTML output:</p>
                <pre className="text-xs font-mono text-neutral-600 whitespace-pre-wrap break-all">{value2}</pre>
              </div>
            )}
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Formatting shortcuts</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-center gap-2"><kbd className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded border border-neutral-200">Ctrl+B</kbd> Bold</li>
          <li className="flex items-center gap-2"><kbd className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded border border-neutral-200">Ctrl+I</kbd> Italic</li>
          <li className="flex items-center gap-2"><kbd className="font-mono text-xs bg-neutral-100 px-1.5 py-0.5 rounded border border-neutral-200">Ctrl+U</kbd> Underline</li>
        </ul>
      </section>
    </div>
  );
}
