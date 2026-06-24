"use client";

import { Terminal, TerminalLine } from "@animui/ui";
import { ComponentPreview } from "@/components/component-preview";
import { PropsTable } from "@/components/props-table";

const basicLines: TerminalLine[] = [
  { type: "input", content: "npm install @animui/ui" },
  { type: "output", content: "added 42 packages, and audited 43 packages in 3s" },
  { type: "output", content: "3 packages are looking for funding" },
  { type: "success", content: "found 0 vulnerabilities" },
  { type: "input", content: "npm run build" },
  { type: "success", content: "✓ build complete in 1.2s" },
];

const basicCode = `import { Terminal, TerminalLine } from "@animui/ui";

const lines: TerminalLine[] = [
  { type: "input", content: "npm install @animui/ui" },
  { type: "output", content: "added 42 packages, and audited 43 packages in 3s" },
  { type: "output", content: "3 packages are looking for funding" },
  { type: "success", content: "found 0 vulnerabilities" },
  { type: "input", content: "npm run build" },
  { type: "success", content: "✓ build complete in 1.2s" },
];

export default function Example() {
  return <Terminal lines={lines} />;
}`;

const terminalProps = [
  {
    name: "lines",
    type: "TerminalLine[]",
    default: "—",
    description: "Sequence of lines to render.",
  },
  {
    name: "startDelay",
    type: "number",
    default: "300",
    description: "Milliseconds before the first line begins.",
  },
  {
    name: "typingSpeed",
    type: "number",
    default: "50",
    description: "Milliseconds between each typed character for input lines.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional classes for the terminal window.",
  },
];

export default function TerminalPage() {
  return (
    <div className="space-y-10 pb-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-muted-foreground">
        <span>Special</span>
        <span>/</span>
        <span className="text-foreground font-medium">Terminal</span>
      </nav>

      {/* Heading */}
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Terminal</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          An animated terminal window that types out a sequence of input,
          output, error, and success lines — perfect for onboarding flows,
          landing pages, and CLI-flavoured demos.
        </p>
      </div>

      {/* Import */}
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Import</h2>
        <pre className="rounded-lg bg-muted px-5 py-4 text-sm overflow-x-auto">
          <code>{`import { Terminal } from "@animui/ui";
import type { TerminalLine } from "@animui/ui";`}</code>
        </pre>
      </section>

      {/* Basic example */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Basic</h2>
        <p className="text-sm text-muted-foreground">
          A realistic npm install sequence mixing{" "}
          <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
            input
          </code>
          ,{" "}
          <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
            output
          </code>
          , and{" "}
          <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
            success
          </code>{" "}
          line types.
        </p>
        <ComponentPreview
          preview={<Terminal lines={basicLines} />}
          code={basicCode}
        />
      </section>

      {/* Props table */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Props</h2>
        <PropsTable props={terminalProps} />
      </section>

      {/* TerminalLine type */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">TerminalLine type</h2>
        <p className="text-sm text-muted-foreground">
          Each entry in the{" "}
          <code className="font-mono text-xs bg-muted px-1 py-0.5 rounded">
            lines
          </code>{" "}
          prop is a plain object with two fields:
        </p>
        <pre className="rounded-lg bg-muted px-5 py-4 text-sm overflow-x-auto">
          <code>{`type TerminalLine = {
  type: "input" | "output" | "error" | "success";
  content: string;
};`}</code>
        </pre>
        <div className="rounded-lg border divide-y text-sm overflow-x-auto">
          <div className="grid grid-cols-3 px-4 py-2 font-medium bg-muted/50">
            <span>Value</span>
            <span>Appearance</span>
            <span>Behaviour</span>
          </div>
          <div className="grid grid-cols-3 px-4 py-3">
            <code className="font-mono text-xs">input</code>
            <span>Prompt prefix + default text colour</span>
            <span>Types character by character at <code className="font-mono text-xs">typingSpeed</code></span>
          </div>
          <div className="grid grid-cols-3 px-4 py-3">
            <code className="font-mono text-xs">output</code>
            <span>Muted / secondary text colour</span>
            <span>Appears instantly after the previous line finishes</span>
          </div>
          <div className="grid grid-cols-3 px-4 py-3">
            <code className="font-mono text-xs">error</code>
            <span>Destructive / red text colour</span>
            <span>Appears instantly after the previous line finishes</span>
          </div>
          <div className="grid grid-cols-3 px-4 py-3">
            <code className="font-mono text-xs">success</code>
            <span>Success / green text colour</span>
            <span>Appears instantly after the previous line finishes</span>
          </div>
        </div>
      </section>
    </div>
  );
}
