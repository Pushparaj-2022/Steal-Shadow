"use client";

import { Terminal } from "@animui/ui";
import type { TerminalLine } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const installLines: TerminalLine[] = [
  { type: "input", text: "npm install @animui/ui" },
  { type: "output", text: "added 42 packages in 3s" },
  { type: "info",   text: "3 packages are looking for funding" },
  { type: "input", text: "npm run build" },
  { type: "output", text: "  ▸ tsup building entry: src/index.ts" },
  { type: "output", text: "  ✓ ESM build success in 1.2s" },
];

const basicCode = `import { Terminal } from "@animui/ui";
import type { TerminalLine } from "@animui/ui";

const lines: TerminalLine[] = [
  { type: "input",  text: "npm install @animui/ui" },
  { type: "output", text: "added 42 packages in 3s" },
  { type: "info",   text: "3 packages are looking for funding" },
  { type: "input",  text: "npm run build" },
  { type: "output", text: "✓ build success in 1.2s" },
];

export default function Example() {
  return <Terminal lines={lines} />;
}`;

const loopCode = `<Terminal lines={lines} loop speed={40} title="~/project" />`;

const terminalProps = [
  { name: "lines", type: "TerminalLine[]", default: "—", description: "Sequence of lines to render." },
  { name: "autoPlay", type: "boolean", default: "true", description: "Start typing automatically on mount." },
  { name: "speed", type: "number", default: "50", description: "Milliseconds between each typed character for input lines." },
  { name: "loop", type: "boolean", default: "false", description: "Restart the sequence after the last line completes." },
  { name: "title", type: "string", default: '"terminal"', description: "Text shown in the macOS-style title bar." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the terminal window." },
];

const lineTypeRows = [
  { name: "input", type: '"input"', default: "—", description: "Types out character-by-character with a green prompt." },
  { name: "output", type: '"output"', default: "—", description: "Appears instantly in muted gray." },
  { name: "error", type: '"error"', default: "—", description: "Appears in red." },
  { name: "info", type: '"info"', default: "—", description: "Appears in blue." },
];

export default function TerminalPage() {
  return (
    <div className="space-y-10 pb-16">
      <nav className="flex items-center gap-2 text-sm text-neutral-500">
        <span>Special</span>
        <span>/</span>
        <span className="text-neutral-900 font-medium">Terminal</span>
      </nav>

      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Terminal</h1>
        <p className="text-lg text-neutral-500">
          A macOS-style terminal window that plays back a sequence of lines.{" "}
          <code className="font-mono text-sm bg-neutral-100 px-1 py-0.5 rounded">input</code> lines
          type out character by character; other types appear instantly. Great for install guides, CLI demos,
          and onboarding flows.
        </p>
      </div>

      <div className="rounded-xl bg-zinc-950 px-5 py-4">
        <code className="font-mono text-sm">
          <span className="text-blue-400">import</span>{" "}
          <span className="text-green-400">{"{ Terminal }"}</span>{" "}
          <span className="text-blue-400">from</span>{" "}
          <span className="text-amber-300">"@animui/ui"</span>
        </code>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Basic</h2>
        <ComponentPreview code={basicCode}>
          <div className="w-full max-w-xl">
            <Terminal lines={installLines} />
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Loop &amp; custom title</h2>
        <p className="text-neutral-500 text-sm">
          Set <code className="font-mono text-xs bg-neutral-100 px-1 rounded">loop</code> to replay
          the sequence. Use <code className="font-mono text-xs bg-neutral-100 px-1 rounded">title</code> to
          change the title bar text.
        </p>
        <ComponentPreview code={loopCode}>
          <div className="w-full max-w-xl">
            <Terminal lines={installLines} loop speed={40} title="~/project" />
          </div>
        </ComponentPreview>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Props</h2>
        <PropsTable props={terminalProps} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">TerminalLine type</h2>
        <p className="text-neutral-500 text-sm">
          Each item in the <code className="font-mono text-xs bg-neutral-100 px-1 rounded">lines</code> array
          has the following shape:
        </p>
        <pre className="rounded-lg bg-zinc-950 text-zinc-200 px-5 py-4 text-sm font-mono overflow-x-auto">{`type TerminalLine = {
  text: string;
  type?: "input" | "output" | "error" | "info";
  delay?: number; // extra ms pause before this line
}`}</pre>
        <PropsTable props={lineTypeRows} />
      </section>
    </div>
  );
}
