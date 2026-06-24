"use client";

import { useState } from "react";
import { Stepper } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Stepper } from "@stealshadow/ui";
import { useState } from "react";

const steps = [
  { id: 1, label: "Account" },
  { id: 2, label: "Profile" },
  { id: 3, label: "Billing" },
  { id: 4, label: "Confirm" },
];

export default function Example() {
  const [current, setCurrent] = useState(1);
  return (
    <>
      <Stepper steps={steps} currentStep={current} />
      <div className="flex gap-2 mt-8">
        <button onClick={() => setCurrent(c => Math.max(0, c - 1))}>Back</button>
        <button onClick={() => setCurrent(c => Math.min(steps.length, c + 1))}>Next</button>
      </div>
    </>
  );
}`;

const VERTICAL_CODE = `<Stepper
  steps={steps}
  currentStep={2}
  orientation="vertical"
/>`;

const PROPS = [
  { name: "steps", type: "Step[]", default: "—", description: "Array of { id, label, description? } step definitions." },
  { name: "currentStep", type: "number", default: "0", description: "Zero-based index of the current active step." },
  { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Layout direction of the stepper." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the wrapper." },
];

const STEPS_DATA = [
  { id: 1, label: "Account" },
  { id: 2, label: "Profile" },
  { id: 3, label: "Billing" },
  { id: 4, label: "Confirm" },
];

export default function StepperDocsPage() {
  const [current, setCurrent] = useState(2);

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Layout</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Stepper</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Stepper</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A multi-step progress indicator for wizard flows. Animated fill line, completed state with checkmarks, and both horizontal and vertical layouts.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Stepper }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Horizontal (interactive)</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="space-y-8">
            <Stepper steps={STEPS_DATA} currentStep={current} />
            <div className="flex gap-2">
              <button
                onClick={() => setCurrent((c) => Math.max(0, c - 1))}
                disabled={current === 0}
                className="rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-600 hover:bg-zinc-50 disabled:opacity-40"
              >
                Back
              </button>
              <button
                onClick={() => setCurrent((c) => Math.min(STEPS_DATA.length - 1, c + 1))}
                disabled={current === STEPS_DATA.length - 1}
                className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:opacity-90 disabled:opacity-40"
              >
                Next step
              </button>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Vertical</h2>
        <ComponentPreview code={VERTICAL_CODE}>
          <Stepper steps={STEPS_DATA} currentStep={2} orientation="vertical" />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">With descriptions</h2>
        <ComponentPreview code={`<Stepper steps={[\n  { id: 1, label: "Account", description: "Set up your credentials" },\n  { id: 2, label: "Profile", description: "Tell us about yourself" },\n]} currentStep={1} />`}>
          <Stepper
            steps={[
              { id: 1, label: "Account", description: "Set up your credentials" },
              { id: 2, label: "Profile", description: "Tell us about yourself" },
              { id: 3, label: "Billing", description: "Choose a plan" },
            ]}
            currentStep={1}
          />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
