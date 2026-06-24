import Link from "next/link";
import { ChevronRight, Table2, Columns, Upload } from "lucide-react";

const DATA_COMPONENTS = [
  {
    title: "Data Table",
    desc: "Full-featured table with server-side or client-side sorting, filtering, pagination, column resizing, row selection, and export. The table real apps need.",
    href: "/docs/data/data-table",
    Icon: Table2,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Kanban Board",
    desc: "Drag-and-drop kanban board with columns, cards, and swimlanes. Powered by dnd-kit for accessible drag-and-drop.",
    href: "/docs/data/kanban",
    Icon: Columns,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    title: "File Uploader",
    desc: "Drag-and-drop file upload zone with progress tracking, preview thumbnails, file type validation, and multi-file support.",
    href: "/docs/data/file-uploader",
    Icon: Upload,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
];

export default function DataPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Data Components</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Heavy-duty components for data-intensive applications. DataTable handles thousands of rows
          with virtualization. KanbanBoard and FileUploader are production-ready from day one.
        </p>
      </div>

      <div className="space-y-4">
        {DATA_COMPONENTS.map((comp) => (
          <Link
            key={comp.title}
            href={comp.href}
            className="group flex items-start gap-5 rounded-xl border border-neutral-200 p-6 hover:border-blue-200 hover:shadow-md transition-all"
          >
            <div className={`h-12 w-12 rounded-xl ${comp.bg} flex items-center justify-center shrink-0`}>
              <comp.Icon className={`h-6 w-6 ${comp.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="font-bold text-neutral-900 group-hover:text-blue-700 transition-colors mb-1">
                {comp.title}
              </h2>
              <p className="text-sm text-neutral-500 leading-relaxed">{comp.desc}</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-medium text-blue-500">
                View docs <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
