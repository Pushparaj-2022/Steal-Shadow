"use client";

import { useState } from "react";
import { KanbanBoard } from "@animui/ui";
import type { KanbanColumn } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { KanbanBoard } from "@stealshadow/ui";
import { useState } from "react";

const initialColumns = [
  {
    id: "todo",
    title: "To Do",
    cards: [
      { id: "1", title: "Design new homepage", description: "Figma wireframes first" },
      { id: "2", title: "Set up CI/CD pipeline", description: "GitHub Actions" },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    cards: [
      { id: "3", title: "Implement auth flow", description: "NextAuth + Supabase" },
    ],
  },
  {
    id: "done",
    title: "Done",
    cards: [
      { id: "4", title: "Project kickoff", description: "Team meeting completed" },
    ],
  },
];

export default function Example() {
  const [columns, setColumns] = useState(initialColumns);
  return (
    <KanbanBoard
      columns={columns}
      onChange={setColumns}
    />
  );
}`;

const PROPS = [
  { name: "columns", type: "KanbanColumn[]", default: "—", description: "Array of columns. Each column has id, title, color?, limit?, and cards array." },
  { name: "onChange", type: "(columns: KanbanColumn[]) => void", default: "—", description: "Called with the updated columns array when a card is dragged to a new column or reordered." },
  { name: "onCardClick", type: "(card: KanbanCard, columnId: string) => void", default: "—", description: "Called when a card is clicked. Enables pointer cursor on cards when provided." },
  { name: "renderCard", type: "(card: KanbanCard, columnId: string) => ReactNode", default: "—", description: "Custom card renderer. Receives the card data and its column ID." },
  { name: "className", type: "string", default: "—", description: "Additional classes on the board wrapper." },
];

const INITIAL_COLUMNS: KanbanColumn[] = [
  {
    id: "todo",
    title: "To Do",
    color: "#6366f1",
    cards: [
      { id: "1", title: "Design new homepage", description: "Figma wireframes first" },
      { id: "2", title: "Set up CI/CD pipeline", description: "GitHub Actions" },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    color: "#f59e0b",
    cards: [
      { id: "3", title: "Implement auth flow", description: "NextAuth + Supabase" },
    ],
  },
  {
    id: "done",
    title: "Done",
    color: "#10b981",
    cards: [
      { id: "4", title: "Project kickoff", description: "Team meeting completed" },
    ],
  },
];

export default function KanbanPage() {
  const [columns, setColumns] = useState<KanbanColumn[]>(INITIAL_COLUMNS);

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Data</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Kanban Board</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">KanbanBoard</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Drag-and-drop kanban board with columns and cards. Drag cards between columns — the updated columns array is passed to <code className="font-mono text-sm bg-neutral-100 px-1 rounded">onChange</code>.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ KanbanBoard }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Preview</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="overflow-x-auto">
            <KanbanBoard columns={columns} onChange={setColumns} />
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
