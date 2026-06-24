"use client";

import { ToolCallViewer } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { ToolCallViewer } from "@stealshadow/ui";

export default function Example() {
  return (
    <ToolCallViewer
      name="search_web"
      args={{ query: "best React component libraries 2025" }}
      result={{ results: [{ title: "Steal Shadow", url: "..." }] }}
      status="done"
    />
  );
}`;

const STREAM_CODE = `import { ToolCallViewer } from "@stealshadow/ui";

export default function StreamingExample() {
  const [calls] = useToolCalls(); // from your AI SDK

  return (
    <div className="space-y-2">
      {calls.map((call) => (
        <ToolCallViewer
          key={call.id}
          name={call.name}
          args={call.args}
          result={call.result}
          status={call.status}  // "pending" | "running" | "done" | "error"
        />
      ))}
    </div>
  );
}`;

const MULTIPLE_CODE = `const toolCalls = [
  {
    id: "1",
    name: "read_file",
    args: { path: "/src/App.tsx" },
    result: { content: "import React from 'react'…" },
    status: "done",
  },
  {
    id: "2",
    name: "search_web",
    args: { query: "React hooks tutorial" },
    status: "running",
  },
  {
    id: "3",
    name: "write_file",
    args: { path: "/out/result.json" },
    result: null,
    status: "error",
  },
];`;

const PROPS = [
  { name: "name", type: "string", default: "—", description: "Name of the tool being called (displayed in the header)." },
  { name: "args", type: "Record<string, unknown>", default: "—", description: "Arguments passed to the tool, rendered as formatted JSON." },
  { name: "result", type: "unknown", default: "—", description: "The tool's return value, rendered as formatted JSON." },
  { name: "status", type: '"pending" | "running" | "done" | "error"', default: '"pending"', description: "Current execution state of the tool call." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the wrapper." },
];

export default function ToolCallViewerDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">AI Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">ToolCallViewer</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">ToolCallViewer</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Collapsible UI for displaying AI tool calls — shows the tool name, arguments, result, and status. Great for AI playground or agent transparency UIs.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ ToolCallViewer }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="max-w-lg">
            <ToolCallViewer
              name="search_web"
              args={{ query: "best React component libraries 2025" }}
              result={{ results: [{ title: "Steal Shadow", url: "github.com/..." }] }}
              status="done"
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Multiple tool calls</h2>
        <p className="text-neutral-500 mb-4 text-sm">Map over tool calls from your AI SDK and render each as a ToolCallViewer.</p>
        <ComponentPreview code={MULTIPLE_CODE}>
          <div className="space-y-2 max-w-lg">
            <ToolCallViewer
              name="read_file"
              args={{ path: "/src/App.tsx" }}
              result={{ content: "import React from 'react'…" }}
              status="done"
            />
            <ToolCallViewer
              name="search_web"
              args={{ query: "React hooks tutorial" }}
              status="running"
            />
            <ToolCallViewer
              name="write_file"
              args={{ path: "/out/result.json" }}
              result={null}
              status="error"
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Streaming integration</h2>
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <div className="px-4 py-2 bg-neutral-50 border-b border-neutral-100"><span className="text-xs font-mono text-neutral-500">streaming-example.tsx</span></div>
          <pre className="bg-neutral-950 px-5 py-4 overflow-x-auto text-sm font-mono text-neutral-200 leading-relaxed">{STREAM_CODE}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
