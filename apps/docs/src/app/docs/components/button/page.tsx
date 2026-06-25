"use client";

import { useState } from "react";
import { Button } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BUTTON_PROPS = [
  { name: "variant", type: '"default" | "outline" | "ghost" | "danger" | "gradient" | "glow"', default: '"default"', description: "Controls the visual style of the button." },
  { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl" | "icon"', default: '"md"', description: "Controls padding and font size." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables interaction and applies reduced opacity." },
  { name: "loading", type: "boolean", default: "false", description: "Shows a spinner and disables the button while an async operation is in progress." },
  { name: "className", type: "string", default: "—", description: "Additional Tailwind classes to apply to the button element." },
  { name: "onClick", type: "() => void", default: "—", description: "Click handler for the button." },
  { name: "type", type: '"button" | "submit" | "reset"', default: '"button"', description: "HTML button type attribute." },
];

const VARIANT_CODE = `import { Button } from "@animui/ui";

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="default">Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Destructive</Button>
      <Button variant="gradient">Gradient</Button>
    </div>
  );
}`;

const SIZES_CODE = `import { Button } from "@animui/ui";

export default function Example() {
  return (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  );
}`;

const LOADING_CODE = `import { Button } from "@animui/ui";
import { useState } from "react";

export default function Example() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
  };

  return (
    <Button loading={loading} onClick={handleClick}>
      {loading ? "Saving..." : "Save changes"}
    </Button>
  );
}`;

function LoadingButtonDemo() {
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 2000));
    setLoading(false);
  };
  return (
    <Button loading={loading} onClick={handleClick}>
      {loading ? "Saving..." : "Save changes"}
    </Button>
  );
}

export default function ButtonDocsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Button</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Button</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A flexible, accessible button component with multiple variants, sizes, loading states,
          and icon support. Powered by spring animations via Motion v12.
        </p>
      </div>

      {/* Install callout */}
      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Button }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      {/* Variants preview */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Variants</h2>
        <p className="text-neutral-500 mb-4">
          Six built-in variants cover the most common use cases.
        </p>
        <ComponentPreview code={VARIANT_CODE}>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="default">Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Destructive</Button>
            <Button variant="gradient">Gradient</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Sizes preview */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Sizes</h2>
        <p className="text-neutral-500 mb-4">
          Use <code className="font-mono text-xs bg-neutral-100 px-1 rounded">size</code> to adjust padding and font size.
        </p>
        <ComponentPreview code={SIZES_CODE}>
          <div className="flex items-center gap-3 flex-wrap">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </ComponentPreview>
      </section>

      {/* Loading state */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Loading state</h2>
        <p className="text-neutral-500 mb-4">
          Pass <code className="font-mono text-xs bg-neutral-100 px-1 rounded">loading</code> to show a spinner and prevent double-submission.
        </p>
        <ComponentPreview code={LOADING_CODE}>
          <LoadingButtonDemo />
        </ComponentPreview>
      </section>

      {/* Props table */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={BUTTON_PROPS} />
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Renders a native <code className="font-mono text-xs bg-neutral-100 px-1 rounded">&lt;button&gt;</code> element — keyboard focusable by default.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Focus ring meets WCAG 2.4.11 minimum contrast requirements.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Loading state sets <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-busy="true"</code> and <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-disabled="true"</code>.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Icon-only buttons: pass <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-label</code> for screen reader context.
          </li>
        </ul>
      </section>
    </div>
  );
}
