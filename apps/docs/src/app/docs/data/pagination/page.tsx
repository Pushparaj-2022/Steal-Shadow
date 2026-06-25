"use client";

import { useState } from "react";
import { Pagination } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Pagination } from "@animui/ui";
import { useState } from "react";

export default function Example() {
  const [page, setPage] = useState(1);
  return (
    <Pagination
      total={100}
      page={page}
      pageSize={10}
      onChange={setPage}
    />
  );
}`;

const LARGE_CODE = `<Pagination
  total={500}
  page={7}
  pageSize={20}
  onChange={setPage}
/>
// Renders: ← 1 … 6 7 8 … 25 →`;

const PROPS = [
  { name: "total", type: "number", default: "—", description: "Total number of items." },
  { name: "page", type: "number", default: "1", description: "Current active page (1-indexed)." },
  { name: "pageSize", type: "number", default: "10", description: "Number of items per page." },
  { name: "onChange", type: "(page: number) => void", default: "—", description: "Called when the user navigates to a new page." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the wrapper." },
];

export default function PaginationDocsPage() {
  const [page, setPage] = useState(1);

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Data</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Pagination</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Pagination</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Page navigation control with smart ellipsis for large ranges. Works great alongside DataTable for paginating records.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Pagination }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <Pagination total={100} page={page} pageSize={10} onChange={setPage} />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Large dataset with ellipsis</h2>
        <ComponentPreview code={LARGE_CODE}>
          <Pagination total={500} page={7} pageSize={20} onChange={() => {}} />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">With record count</h2>
        <ComponentPreview code={`<div className="flex items-center justify-between">\n  <span className="text-sm text-neutral-500">Showing 61–70 of 284 results</span>\n  <Pagination total={284} page={7} pageSize={10} onChange={setPage} />\n</div>`}>
          <div className="flex items-center justify-between">
            <span className="text-sm text-neutral-500">Showing 61–70 of 284 results</span>
            <Pagination total={284} page={7} pageSize={10} onChange={() => {}} />
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
