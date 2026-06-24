interface PropDefinition {
  name: string;
  type: string;
  default: string;
  description: string;
}

interface PropsTableProps {
  props: PropDefinition[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="overflow-x-auto rounded-xl border border-neutral-200">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-neutral-200 bg-neutral-50">
            <th className="text-left px-4 py-3 font-semibold text-neutral-700 w-1/4">Prop</th>
            <th className="text-left px-4 py-3 font-semibold text-neutral-700 w-1/4">Type</th>
            <th className="text-left px-4 py-3 font-semibold text-neutral-700 w-1/6">Default</th>
            <th className="text-left px-4 py-3 font-semibold text-neutral-700">Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop, i) => (
            <tr
              key={prop.name}
              className={`border-b border-neutral-100 last:border-0 ${
                i % 2 === 0 ? "bg-white" : "bg-neutral-50/50"
              }`}
            >
              <td className="px-4 py-3 align-top">
                <code className="font-mono text-xs font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">
                  {prop.name}
                </code>
              </td>
              <td className="px-4 py-3 align-top">
                <code className="font-mono text-xs text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                  {prop.type}
                </code>
              </td>
              <td className="px-4 py-3 align-top">
                {prop.default !== "—" ? (
                  <code className="font-mono text-xs text-neutral-600 bg-neutral-100 px-1.5 py-0.5 rounded">
                    {prop.default}
                  </code>
                ) : (
                  <span className="text-neutral-400 text-xs">—</span>
                )}
              </td>
              <td className="px-4 py-3 align-top text-neutral-600 text-xs leading-relaxed">
                {prop.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
