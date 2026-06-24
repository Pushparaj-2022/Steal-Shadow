"use client";

import { Progress, CircularProgress } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Progress } from "@stealshadow/ui";

export default function Example() {
  return <Progress value={72} />;
}`;

const COLORS_CODE = `<Progress value={80} color="blue" />
<Progress value={65} color="emerald" />
<Progress value={45} color="amber" />
<Progress value={90} color="violet" />`;

const CIRCULAR_CODE = `import { CircularProgress } from "@stealshadow/ui";

<CircularProgress value={72} size={80} strokeWidth={6} />`;

const PROPS = [
  { name: "value", type: "number", default: "0", description: "Current progress value (0–max)." },
  { name: "max", type: "number", default: "100", description: "Maximum value." },
  { name: "color", type: '"blue" | "emerald" | "amber" | "violet" | "red"', default: '"blue"', description: "Fill color of the progress bar." },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Bar height." },
  { name: "showLabel", type: "boolean", default: "false", description: "Show the percentage label above the bar." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the wrapper." },
];

const CIRCULAR_PROPS = [
  { name: "value", type: "number", default: "0", description: "Progress value (0–100)." },
  { name: "size", type: "number", default: "64", description: "Diameter in pixels." },
  { name: "strokeWidth", type: "number", default: "6", description: "Width of the circular track." },
  { name: "color", type: "string", default: '"blue"', description: "Stroke color." },
  { name: "showLabel", type: "boolean", default: "true", description: "Show percentage in the center." },
];

export default function ProgressDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Feedback</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Progress</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Progress</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Linear and circular progress indicators with animated fills. Use to show upload progress, onboarding completion, or task status.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Progress, CircularProgress }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="w-full max-w-sm space-y-1">
            <div className="flex items-center justify-between text-xs text-neutral-500 mb-1">
              <span>Upload progress</span>
            </div>
            <Progress value={72} showLabel />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Colors</h2>
        <ComponentPreview code={COLORS_CODE}>
          <div className="w-full max-w-sm space-y-3">
            <Progress value={80} color="blue" />
            <Progress value={65} color="emerald" />
            <Progress value={45} color="amber" />
            <Progress value={90} color="violet" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Sizes</h2>
        <ComponentPreview code={`<Progress value={60} size="sm" />\n<Progress value={60} size="md" />\n<Progress value={60} size="lg" />`}>
          <div className="w-full max-w-sm space-y-3">
            <Progress value={60} size="sm" />
            <Progress value={60} size="md" />
            <Progress value={60} size="lg" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Circular</h2>
        <ComponentPreview code={CIRCULAR_CODE}>
          <div className="flex items-center gap-6">
            <CircularProgress value={72} size={80} strokeWidth={6} />
            <CircularProgress value={45} size={80} strokeWidth={6} color="emerald" />
            <CircularProgress value={90} size={80} strokeWidth={6} color="violet" />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Progress Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">CircularProgress Props</h2>
        <PropsTable props={CIRCULAR_PROPS} />
      </section>
    </div>
  );
}
