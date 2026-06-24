"use client";

import { AgentStatus } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { AgentStatus } from "@stealshadow/ui";

export default function Example() {
  return (
    <AgentStatus
      status="thinking"
      message="Analyzing your request…"
    />
  );
}`;

const ALL_STATES_CODE = `import { AgentStatus } from "@stealshadow/ui";

export default function Example() {
  return (
    <div className="space-y-3">
      <AgentStatus status="idle"      message="Waiting for input" />
      <AgentStatus status="thinking"  message="Analyzing your request…" />
      <AgentStatus status="executing" message="Running tool: search_web" />
      <AgentStatus status="complete"  message="Done! Found 12 results." />
      <AgentStatus status="error"     message="Connection timeout. Retrying…" />
    </div>
  );
}`;

const TOOL_CODE = `import { AgentStatus } from "@stealshadow/ui";

export default function AgentPanel() {
  return (
    <AgentStatus
      status="executing"
      message="Reading file: /src/components/Button.tsx"
      tool="read_file"
      toolArgs={{ path: "/src/components/Button.tsx" }}
      elapsed={1.4}
    />
  );
}`;

const PROPS = [
  { name: "status", type: '"idle" | "thinking" | "executing" | "complete" | "error"', default: '"idle"', description: "Current agent state — controls the icon and color." },
  { name: "message", type: "string", default: "—", description: "Human-readable status message shown next to the indicator." },
  { name: "tool", type: "string", default: "—", description: "Name of the tool currently being executed." },
  { name: "toolArgs", type: "Record<string, unknown>", default: "—", description: "Arguments passed to the tool, shown in a compact summary." },
  { name: "elapsed", type: "number", default: "—", description: "Elapsed time in seconds shown as a badge." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the wrapper." },
];

export default function AgentStatusDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">AI Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">AgentStatus</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">AgentStatus</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Visual indicator for AI agent states — idle, thinking, executing tools, complete, and error. Use it to keep users informed as your agent works.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ AgentStatus }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <AgentStatus status="thinking" message="Analyzing your request…" />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">All states</h2>
        <ComponentPreview code={ALL_STATES_CODE}>
          <div className="space-y-2 w-full max-w-sm">
            <AgentStatus status="idle"      message="Waiting for input" />
            <AgentStatus status="thinking"  message="Analyzing your request…" />
            <AgentStatus status="executing" message="Running tool: search_web" />
            <AgentStatus status="complete"  message="Done! Found 12 results." />
            <AgentStatus status="error"     message="Connection timeout. Retrying…" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">With tool info</h2>
        <p className="text-neutral-500 mb-4 text-sm">Show the active tool name and arguments while the agent executes.</p>
        <ComponentPreview code={TOOL_CODE}>
          <AgentStatus
            status="executing"
            message="Reading file: /src/components/Button.tsx"
            tool="read_file"
            toolArgs={{ path: "/src/components/Button.tsx" }}
            elapsed={1.4}
          />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
