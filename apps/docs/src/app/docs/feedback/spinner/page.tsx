"use client";

import { Spinner } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const SIZES_CODE = `import { Spinner } from "@animui/ui";

export default function Example() {
  return (
    <div className="flex items-center gap-6">
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  );
}`;

const COLORS_CODE = `import { Spinner } from "@animui/ui";

export default function Example() {
  return (
    <div className="flex items-center gap-6">
      <Spinner color="#3b82f6" />
      <Spinner color="#10b981" />
      <Spinner color="#f43f5e" />
      <Spinner color="#f59e0b" />
      <Spinner color="#a855f7" />
    </div>
  );
}`;

const WITH_TEXT_CODE = `import { Spinner } from "@animui/ui";

export default function Example() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Spinner size="sm" />
        <span className="text-sm text-neutral-600">Loading your data…</span>
      </div>
      <div className="flex items-center gap-3">
        <Spinner size="md" color="#10b981" />
        <span className="text-sm text-neutral-600">Saving changes…</span>
      </div>
      <div className="flex items-center gap-3">
        <Spinner size="lg" color="#f43f5e" />
        <span className="text-base font-medium text-neutral-700">Processing payment…</span>
      </div>
    </div>
  );
}`;

const PROPS = [
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg" | "xl"',
    default: '"md"',
    description: "Controls the diameter of the spinner. xs=12px, sm=16px, md=24px, lg=36px, xl=48px.",
  },
  {
    name: "variant",
    type: '"ring" | "dots" | "bars" | "pulse"',
    default: '"ring"',
    description: "Animation style of the spinner.",
  },
  {
    name: "color",
    type: "string",
    default: '"currentColor"',
    description: "CSS color value for the spinner. Defaults to currentColor (inherits from text color). Pass a hex, rgb, or named CSS color.",
  },
  {
    name: "className",
    type: "string",
    default: "—",
    description: "Additional CSS classes applied to the spinner element for custom overrides.",
  },
];

export default function SpinnerDocsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Feedback</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Spinner</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Spinner</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A lightweight animated loading indicator that signals asynchronous operations. Available in
          five sizes, four animation variants, and fully colorable via CSS color values.
        </p>
      </div>

      {/* Import */}
      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {'{'}<span className="text-white">Spinner</span>{'}'} from{" "}
          <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      {/* Sizes */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-neutral-900">Sizes</h2>
        <p className="text-neutral-500 leading-relaxed">
          Five size presets cover every use case from inline icons to full-page loaders.
        </p>
        <ComponentPreview code={SIZES_CODE}>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Spinner size="xs" />
              <span className="text-xs text-neutral-400">xs</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="sm" />
              <span className="text-xs text-neutral-400">sm</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="md" />
              <span className="text-xs text-neutral-400">md</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="lg" />
              <span className="text-xs text-neutral-400">lg</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="xl" />
              <span className="text-xs text-neutral-400">xl</span>
            </div>
          </div>
        </ComponentPreview>
      </div>

      {/* Colors */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-neutral-900">Colors</h2>
        <p className="text-neutral-500 leading-relaxed">
          Pass a CSS color value to the <code className="text-sm font-mono bg-neutral-100 px-1 rounded">color</code> prop
          to match your brand or surface context. Accepts hex, rgb, named colors, or <code className="text-sm font-mono bg-neutral-100 px-1 rounded">currentColor</code>.
        </p>
        <ComponentPreview code={COLORS_CODE}>
          <div className="flex items-center gap-8">
            <div className="flex flex-col items-center gap-2">
              <Spinner color="#3b82f6" />
              <span className="text-xs text-neutral-400">#3b82f6</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner color="#10b981" />
              <span className="text-xs text-neutral-400">#10b981</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner color="#f43f5e" />
              <span className="text-xs text-neutral-400">#f43f5e</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner color="#f59e0b" />
              <span className="text-xs text-neutral-400">#f59e0b</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner color="#a855f7" />
              <span className="text-xs text-neutral-400">#a855f7</span>
            </div>
          </div>
        </ComponentPreview>
      </div>

      {/* With Text */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-neutral-900">With text</h2>
        <p className="text-neutral-500 leading-relaxed">
          Combine a Spinner with a label to give users contextual feedback during long operations.
        </p>
        <ComponentPreview code={WITH_TEXT_CODE}>
          <div className="flex flex-col gap-5 w-full max-w-sm">
            <div className="flex items-center gap-3">
              <Spinner size="sm" />
              <span className="text-sm text-neutral-600">Loading your data…</span>
            </div>
            <div className="flex items-center gap-3">
              <Spinner size="md" color="#10b981" />
              <span className="text-sm text-neutral-600">Saving changes…</span>
            </div>
            <div className="flex items-center gap-3">
              <Spinner size="lg" color="#f43f5e" />
              <span className="text-base font-medium text-neutral-700">Processing payment…</span>
            </div>
          </div>
        </ComponentPreview>
      </div>

      {/* Props */}
      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-neutral-900">Props</h2>
        <PropsTable props={PROPS} />
      </div>
    </div>
  );
}
