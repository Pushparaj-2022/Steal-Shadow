"use client";

import { Timeline } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Timeline } from "@stealshadow/ui";

export default function Example() {
  return (
    <Timeline
      items={[
        { id: 1, title: "Project created", description: "Repository initialized and dependencies installed.", time: "2h ago", status: "completed" },
        { id: 2, title: "Design review", description: "UI mockups approved by the team.", time: "1h ago", status: "completed" },
        { id: 3, title: "Development", description: "Building core features.", time: "now", status: "active" },
        { id: 4, title: "QA testing", status: "pending" },
      ]}
    />
  );
}`;

const PROPS = [
  { name: "items", type: "TimelineItem[]", default: "—", description: "Array of timeline events." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the wrapper." },
];

const ITEM_PROPS = [
  { name: "id", type: "string | number", default: "—", description: "Unique identifier for the item." },
  { name: "title", type: "string", default: "—", description: "Main label for this event." },
  { name: "description", type: "string", default: "—", description: "Secondary text shown below the title." },
  { name: "time", type: "string", default: "—", description: "Timestamp or relative time label." },
  { name: "status", type: '"completed" | "active" | "pending"', default: '"pending"', description: "Controls the dot color and visual treatment." },
  { name: "icon", type: "React.ReactNode", default: "—", description: "Optional icon inside the dot." },
];

const EVENTS = [
  { label: "Project created", desc: "Repository initialized.", time: "2h ago", status: "completed" as const },
  { label: "Design review", desc: "Mockups approved.", time: "1h ago", status: "completed" as const },
  { label: "Development", desc: "Building core features.", time: "now", status: "active" as const },
  { label: "QA testing", desc: "", time: "", status: "pending" as const },
];

export default function TimelineDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Data</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Timeline</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Timeline</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A vertical list of events with status indicators. Use for activity feeds, changelogs, onboarding steps, or order tracking.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Timeline }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <Timeline
            items={EVENTS.map((ev) => ({
              id: ev.label,
              title: ev.label,
              description: ev.desc || undefined,
              time: ev.time || undefined,
              status: ev.status,
            }))}
          />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Timeline Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">TimelineItem Props</h2>
        <PropsTable props={ITEM_PROPS} />
      </section>
    </div>
  );
}
