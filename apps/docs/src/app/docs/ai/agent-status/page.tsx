"use client";

import { AgentStatus } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { AgentStatus } from "@animui/ui";

export default function Example() {
  return (
    <AgentStatus
      state="thinking"
      label="Analyzing your request…"
    />
  );
}`;

const ALL_STATES_CODE = `import { AgentStatus } from "@animui/ui";

export default function Example() {
  return (
    <div className="space-y-3">
      <AgentStatus state="idle" />
      <AgentStatus state="thinking"  label="Analyzing your request…" />
      <AgentStatus state="working"   label="Running tool: search_web" />
      <AgentStatus state="waiting"   label="Waiting for confirmation" />
      <AgentStatus state="done"      label="Done! Found 12 results." />
      <AgentStatus state="error"     label="Connection timeout. Retrying…" />
    </div>
  );
}`;

const STEPS_CODE = `import { AgentStatus } from "@animui/ui";

const steps = [
  { id: "1", label: "Fetch context",   status: "done",    duration: 120 },
  { id: "2", label: "Analyse codebase", status: "running", detail: "Scanning 34 files…" },
  { id: "3", label: "Generate patch",   status: "pending" },
];

export default function AgentPanel() {
  return (
    <AgentStatus
      state="working"
      label="Working on your request…"
      steps={steps}
    />
  );
}`;

const PROPS = [
  { name: "state", type: '"idle" | "thinking" | "working" | "done" | "error" | "waiting"', default: '"idle"', description: "Current agent state — controls the icon, color, and pulse animation." },
  { name: "label", type: "string", default: "—", description: "Human-readable message shown inside the badge. Falls back to the state's built-in label when omitted." },
  { name: "steps", type: "AgentStep[]", default: "[]", description: "Optional ordered list of sub-steps shown beneath the badge." },
  { name: "compact", type: "boolean", default: "false", description: "Hides the steps list even when steps are provided." },
  { name: "showSteps", type: "boolean", default: "true", description: "Toggle step list visibility without clearing the steps array." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the wrapper." },
];

const STEP_PROPS = [
  { name: "id", type: "string", default: "—", description: "Unique step identifier." },
  { name: "label", type: "string", default: "—", description: "Step display text." },
  { name: "status", type: '"pending" | "running" | "done" | "error" | "skipped"', default: "—", description: "Step status controls the dot icon and color." },
  { name: "detail", type: "string", default: "—", description: "Secondary detail line shown only when status is 'running'." },
  { name: "duration", type: "number", default: "—", description: "Milliseconds shown as a badge when step is 'done'." },
];

const STEPS = [
  { id: "1", label: "Fetch context",    status: "done" as const,    duration: 120 },
  { id: "2", label: "Analyse codebase", status: "running" as const, detail: "Scanning 34 files…" },
  { id: "3", label: "Generate patch",   status: "pending" as const },
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
          Visual indicator for AI agent states — idle, thinking, working, done, error, and waiting. Supports an optional step-by-step progress list with per-step status dots.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ AgentStatus }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <AgentStatus state="thinking" label="Analyzing your request…" />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">All states</h2>
        <ComponentPreview code={ALL_STATES_CODE}>
          <div className="space-y-2 w-full max-w-sm">
            <AgentStatus state="idle" />
            <AgentStatus state="thinking"  label="Analyzing your request…" />
            <AgentStatus state="working"   label="Running tool: search_web" />
            <AgentStatus state="waiting"   label="Waiting for confirmation" />
            <AgentStatus state="done"      label="Done! Found 12 results." />
            <AgentStatus state="error"     label="Connection timeout. Retrying…" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">With steps</h2>
        <p className="text-neutral-500 mb-4 text-sm">Pass a <code className="text-sm bg-neutral-100 px-1.5 py-0.5 rounded font-mono">steps</code> array to show a live progress list beneath the badge.</p>
        <ComponentPreview code={STEPS_CODE}>
          <div className="w-full max-w-xs">
            <AgentStatus
              state="working"
              label="Working on your request…"
              steps={STEPS}
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">AgentStatus props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">AgentStep props</h2>
        <PropsTable props={STEP_PROPS} />
      </section>
    </div>
  );
}
