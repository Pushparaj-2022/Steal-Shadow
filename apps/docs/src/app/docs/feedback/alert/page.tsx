"use client";

import { useState } from "react";
import { Alert } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

function DismissibleAlert() {
  const [visible, setVisible] = useState(true);
  if (!visible) return (
    <button onClick={() => setVisible(true)} className="text-sm text-blue-500 hover:underline">Show again</button>
  );
  return (
    <Alert variant="info" title="Heads up" onClose={() => setVisible(false)}>
      Your trial expires in 3 days. Upgrade to keep access.
    </Alert>
  );
}

const ALERT_PROPS = [
  { name: "variant", type: '"info" | "success" | "warning" | "error"', default: '"info"', description: "Controls the color scheme and icon of the alert." },
  { name: "title", type: "string", default: "—", description: "Optional bold heading rendered above the message body." },
  { name: "children", type: "React.ReactNode", default: "—", description: "The message content of the alert." },
  { name: "icon", type: "React.ReactNode", default: "—", description: "Custom icon. Defaults to a built-in icon matching the variant." },
  { name: "onClose", type: "() => void", default: "—", description: "When provided, renders a dismiss button in the top-right corner." },
  { name: "className", type: "string", default: "—", description: "Additional Tailwind classes applied to the alert container." },
];

const VARIANTS_CODE = `import { Alert } from "@animui/ui";

export default function Example() {
  return (
    <div className="flex flex-col gap-3">
      <Alert variant="info">Your trial expires in 3 days.</Alert>
      <Alert variant="success">Payment successful — welcome aboard!</Alert>
      <Alert variant="warning">You have used 90% of your storage quota.</Alert>
      <Alert variant="error">Failed to save changes. Please try again.</Alert>
    </div>
  );
}`;

const WITH_TITLE_CODE = `import { Alert } from "@animui/ui";

export default function Example() {
  return (
    <Alert variant="success" title="Payment successful">
      Your subscription has been activated. Welcome aboard!
    </Alert>
  );
}`;

const DISMISSIBLE_CODE = `import { Alert } from "@animui/ui";
import { useState } from "react";

export default function Example() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <Alert
      variant="info"
      title="Heads up"
      onClose={() => setVisible(false)}
    >
      Your trial expires in 3 days. Upgrade to keep access.
    </Alert>
  );
}`;


export default function AlertDocsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Feedback</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Alert</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Alert</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A contextual feedback banner for informational messages, success confirmations,
          warnings, and error states. Supports an optional dismiss action.
        </p>
      </div>

      {/* Install callout */}
      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Alert }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      {/* Variants */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Variants</h2>
        <p className="text-neutral-500 mb-4">
          Four built-in variants — each with a matching icon and color palette.
        </p>
        <ComponentPreview code={VARIANTS_CODE}>
          <div className="flex flex-col gap-3 w-full max-w-xl">
            <Alert variant="info">Your trial expires in 3 days. Upgrade to keep access.</Alert>
            <Alert variant="success" title="Payment successful">Your subscription has been activated. Welcome aboard!</Alert>
            <Alert variant="warning">You have used 90% of your 5 GB quota.</Alert>
            <Alert variant="error">Failed to save changes. Please try again later.</Alert>
          </div>
        </ComponentPreview>
      </section>

      {/* With title */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">With title</h2>
        <p className="text-neutral-500 mb-4">
          Provide a <code className="font-mono text-xs bg-neutral-100 px-1 rounded">title</code> prop to add a bold heading above the message body.
        </p>
        <ComponentPreview code={WITH_TITLE_CODE}>
          <div className="w-full max-w-xl">
            <Alert variant="success" title="Payment successful">
              Your subscription has been activated. Welcome aboard!
            </Alert>
          </div>
        </ComponentPreview>
      </section>

      {/* Dismissible */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Dismissible</h2>
        <p className="text-neutral-500 mb-4">
          Pass an <code className="font-mono text-xs bg-neutral-100 px-1 rounded">onClose</code> handler to render a dismiss button.
          Control visibility with local state.
        </p>
        <ComponentPreview code={DISMISSIBLE_CODE}>
          <div className="w-full max-w-xl">
            <DismissibleAlert />
          </div>
        </ComponentPreview>
      </section>

      {/* Props table */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={ALERT_PROPS} />
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Renders with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">role="alert"</code> so screen readers announce it immediately on mount.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Icons are <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-hidden="true"</code> — the variant is conveyed via color and text, not icon alone.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Dismiss button includes <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-label="Dismiss"</code> for screen reader context.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Color contrast ratios meet WCAG AA (4.5:1) for all four variant text colors.
          </li>
        </ul>
      </section>
    </div>
  );
}
