import Link from "next/link";
import { ChevronRight, WandSparkles, CheckSquare, ChevronDown } from "lucide-react";

const FORM_COMPONENTS = [
  {
    title: "Smart Form",
    desc: "Pass a Zod schema and get a fully validated form — fields, error messages, loading state, and submission handling in under 10 lines.",
    href: "/docs/forms/smart-form",
    Icon: WandSparkles,
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    title: "Checkbox",
    desc: "Animated checkbox with indeterminate state, group management, and full keyboard accessibility.",
    href: "/docs/forms/checkbox",
    Icon: CheckSquare,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    title: "Select",
    desc: "Accessible dropdown select with search, multi-select, and custom option rendering.",
    href: "/docs/forms/select",
    Icon: ChevronDown,
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
];

export default function FormsPage() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Forms</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Form components designed to eliminate boilerplate. SmartForm handles Zod schema
          validation automatically. All components integrate with react-hook-form and work
          as standalone controlled inputs.
        </p>
      </div>

      <div className="rounded-xl bg-blue-50 border border-blue-100 px-5 py-4">
        <p className="font-semibold text-blue-900 text-sm mb-1">Zod integration built in</p>
        <p className="text-blue-700 text-sm">
          SmartForm accepts a Zod schema directly — no manual field registration, no manual error
          display. Validation runs on blur and on submit automatically.
        </p>
      </div>

      <div className="space-y-4">
        {FORM_COMPONENTS.map((comp) => (
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
