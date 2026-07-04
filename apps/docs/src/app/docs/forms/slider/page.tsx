"use client";

import { useState } from "react";
import { Slider } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

function SliderDemo() {
  const [value, setValue] = useState(40);
  return <Slider value={value} onChange={setValue} label="Volume" />;
}

const BASIC_CODE = `import { Slider } from "@animui/ui";
import { useState } from "react";

export default function Example() {
  const [value, setValue] = useState(40);
  return <Slider value={value} onChange={setValue} label="Volume" />;
}`;

const STEPS_CODE = `<Slider label="Price" min={0} max={1000} step={50} defaultValue={350} />
<Slider label="Opacity" min={0} max={100} defaultValue={75} showValue={false} />`;

const PROPS = [
  { name: "value", type: "number", default: "—", description: "Controlled value." },
  { name: "defaultValue", type: "number", default: "0", description: "Uncontrolled initial value." },
  { name: "min", type: "number", default: "0", description: "Minimum value." },
  { name: "max", type: "number", default: "100", description: "Maximum value." },
  { name: "step", type: "number", default: "1", description: "Value increment per tick." },
  { name: "onChange", type: "(value: number) => void", default: "—", description: "Called on value change." },
  { name: "label", type: "string", default: "—", description: "Label shown above the track." },
  { name: "showValue", type: "boolean", default: "true", description: "Show the current value next to the label." },
  { name: "disabled", type: "boolean", default: "false", description: "Disable the slider." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the wrapper element." },
];

export default function SliderDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Forms</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Slider</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Slider</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A single-value range input with a colored fill track and live value display. Fully accessible via keyboard.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Slider }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="w-full max-w-md">
            <SliderDemo />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Steps and formatting</h2>
        <ComponentPreview code={STEPS_CODE}>
          <div className="w-full max-w-md space-y-5">
            <Slider label="Price" min={0} max={1000} step={50} defaultValue={350} />
            <Slider label="Opacity" min={0} max={100} defaultValue={75} showValue={false} />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Disabled</h2>
        <ComponentPreview code={`<Slider label="Locked" defaultValue={60} disabled />`}>
          <div className="w-full max-w-md">
            <Slider label="Locked" defaultValue={60} disabled />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Built on a native <code className="font-mono text-xs bg-neutral-100 px-1 rounded">{'<input type="range">'}</code>, so it inherits standard keyboard and screen reader support.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Adjustable with arrow keys, <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Home</code>, and <code className="font-mono text-xs bg-neutral-100 px-1 rounded">End</code> when focused.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>The <code className="font-mono text-xs bg-neutral-100 px-1 rounded">label</code> is rendered as a visible <code className="font-mono text-xs bg-neutral-100 px-1 rounded">{'<label>'}</code> above the track.</li>
        </ul>
      </section>
    </div>
  );
}
