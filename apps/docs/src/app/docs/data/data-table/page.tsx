"use client";

import { DataTable } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { DataTable } from "@animui/ui";

const columns = [
  { key: "name", header: "Name", sortable: true },
  { key: "email", header: "Email", sortable: true },
  { key: "role", header: "Role" },
  { key: "status", header: "Status", cell: (row) => <Badge variant={row.status === "Active" ? "success" : "default"}>{row.status}</Badge> },
];

const data = [
  { id: "1", name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: "2", name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Inactive" },
];

export default function Example() {
  return (
    <DataTable
      columns={columns}
      data={data}
      searchable
      pageSize={10}
    />
  );
}`;

const PROPS = [
  { name: "columns", type: "ColumnDef[]", default: "—", description: "Column definitions: key, header, sortable, cell (for custom cell rendering)." },
  { name: "data", type: "Record<string, unknown>[]", default: "—", description: "Array of row objects. Each object's keys map to column keys." },
  { name: "searchable", type: "boolean", default: "true", description: "Adds a search input that filters rows across all columns." },
  { name: "pageSize", type: "number", default: "10", description: "Number of rows per page. Set to 0 to disable pagination." },
  { name: "searchPlaceholder", type: "string", default: '"Search…"', description: "Placeholder text in the search input." },
  { name: "onRowClick", type: "(row: Record<string, unknown>) => void", default: "—", description: "Called when a row is clicked." },
  { name: "loading", type: "boolean", default: "false", description: "Shows a loading spinner while data is being fetched." },
  { name: "emptyMessage", type: "string", default: '"No results found."', description: "Message shown when data is empty or no rows match the search." },
  { name: "toolbar", type: "React.ReactNode", default: "—", description: "Custom toolbar slot rendered to the right of the search input." },
  { name: "mobileLayout", type: '"cards" | "scroll"', default: '"cards"', description: "How the table renders on mobile — card list or horizontal scroll." },
  { name: "rowClassName", type: "(row) => string", default: "—", description: "Function that returns additional classes for each row." },
  { name: "caption", type: "string", default: "—", description: "Accessible caption for the table (screen reader only)." },
  { name: "className", type: "string", default: "—", description: "Additional classes on the table wrapper." },
];

const COLUMNS = [
  { key: "name", header: "Name", sortable: true },
  { key: "email", header: "Email", sortable: true },
  { key: "role", header: "Role" },
  { key: "status", header: "Status" },
];

const SAMPLE_DATA = [
  { name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Inactive" },
  { name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Active" },
  { name: "David Brown", email: "david@example.com", role: "Editor", status: "Active" },
];

export default function DataTablePage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Data</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Data Table</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">DataTable</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A full-featured data table with sortable columns, search, pagination, row selection,
          and custom cell rendering. Client-side and server-side data modes supported.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ DataTable }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Live preview</h2>
        <p className="text-neutral-500 mb-4">Click column headers to sort.</p>
        <ComponentPreview code={BASIC_CODE}>
          <DataTable columns={COLUMNS} data={SAMPLE_DATA} searchable />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
