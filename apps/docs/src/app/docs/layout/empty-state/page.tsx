"use client";

import { EmptyState } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Inbox, Search, FolderOpen } from "lucide-react";

const BASIC_CODE = `import { EmptyState } from "@stealshadow/ui";
import { Inbox } from "lucide-react";

export default function Example() {
  return (
    <EmptyState
      icon={<Inbox />}
      title="No messages yet"
      description="When someone sends you a message, it will appear here."
      action={{ label: "Compose message", onClick: () => {} }}
    />
  );
}`;

const TABLE_CODE = `import { EmptyState } from "@stealshadow/ui";
import { Search } from "lucide-react";

// Inside a DataTable with no results:
<EmptyState
  icon={<Search />}
  title="No results found"
  description={\`No records match "\${query}". Try a different search.\`}
  action={{ label: "Clear search", onClick: clearSearch }}
  compact
/>`;

const NO_DATA_CODE = `<EmptyState
  icon={<FolderOpen />}
  title="No projects yet"
  description="Start building something. Create your first project."
  action={{ label: "New project", onClick: () => {} }}
  secondaryAction={{ label: "Import", onClick: () => {} }}
/>`;

const PROPS = [
  { name: "icon", type: "ReactNode", default: "—", description: "Icon displayed above the title." },
  { name: "title", type: "string", default: "—", description: "Main heading text." },
  { name: "description", type: "string", default: "—", description: "Supporting description below the title." },
  { name: "action", type: "{ label: string; onClick: () => void }", default: "—", description: "Primary action button." },
  { name: "secondaryAction", type: "{ label: string; onClick: () => void }", default: "—", description: "Secondary (outline) action button." },
  { name: "compact", type: "boolean", default: "false", description: "Reduced padding — for use inside tables or panels." },
  { name: "className", type: "string", default: "—", description: "Additional classes." },
];

export default function EmptyStateDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Layout</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">EmptyState</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">EmptyState</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Animated placeholder shown when a list, table, or feed has no content. Includes icon, title, description, and optional action buttons.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ EmptyState }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="rounded-xl border border-neutral-100 w-full">
            <EmptyState
              icon={<Inbox />}
              title="No messages yet"
              description="When someone sends you a message, it will appear here."
              action={{ label: "Compose message", onClick: () => {} }}
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Compact (for tables)</h2>
        <ComponentPreview code={TABLE_CODE}>
          <div className="rounded-xl border border-neutral-100 w-full">
            <div className="border-b border-neutral-100 px-4 py-3 flex gap-4">
              {["Name", "Status", "Date"].map((h) => (
                <span key={h} className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">{h}</span>
              ))}
            </div>
            <EmptyState
              icon={<Search />}
              title="No results found"
              description="No records match your search. Try a different term."
              action={{ label: "Clear search", onClick: () => {} }}
              compact
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">With secondary action</h2>
        <ComponentPreview code={NO_DATA_CODE}>
          <div className="rounded-xl border border-neutral-100 w-full">
            <EmptyState
              icon={<FolderOpen />}
              title="No projects yet"
              description="Start building something. Create your first project."
              action={{ label: "New project", onClick: () => {} }}
              secondaryAction={{ label: "Import", onClick: () => {} }}
            />
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
