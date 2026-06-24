"use client";

import { useState } from "react";
import { RangeSlider } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { RangeSlider } from "@stealshadow/ui";
import { useState } from "react";

export default function Example() {
  const [value, setValue] = useState(40);
  return <RangeSlider value={value} onChange={setValue} label="Volume" />;
}`;

const COLORS_CODE = `<RangeSlider color="blue"   label="Blue"   defaultValue={40} />
<RangeSlider color="violet" label="Violet" defaultValue={65} />
<RangeSlider color="green"  label="Green"  defaultValue={80} />
<RangeSlider color="orange" label="Orange" defaultValue={25} />`;

const FORMAT_CODE = `<RangeSlider
  label="Price range"
  min={0}
  max={1000}
  step={10}
  defaultValue={350}
  formatValue={(v) => \`$\${v}\`}
/>

<RangeSlider
  label="Opacity"
  min={0}
  max={100}
  defaultValue={75}
  formatValue={(v) => \`\${v}%\`}
/>`;

const PROPS = [
  { name: "value", type: "number", default: "—", description: "Controlled value." },
  { name: "defaultValue", type: "number", default: "0", description: "Uncontrolled initial value." },
  { name: "min", type: "number", default: "0", description: "Minimum value." },
  { name: "max", type: "number", default: "100", description: "Maximum value." },
  { name: "step", type: "number", default: "1", description: "Value increment per tick." },
  { name: "onChange", type: "(value: number) => void", default: "—", description: "Called on value change." },
  { name: "label", type: "string", default: "—", description: "Label shown above the track." },
  { name: "showValue", type: "boolean", default: "true", description: "Show the current value next to the label." },
  { name: "formatValue", type: "(v: number) => string", default: "String(v)", description: "Format the displayed value (e.g. add $, %, units)." },
  { name: "color", type: '"blue" | "violet" | "green" | "orange"', default: '"blue"', description: "Track and thumb color." },
  { name: "disabled", type: "boolean", default: "false", description: "Disable the slider." },
];


function RangeSliderBasicDemo() {
  const [vol, setVol] = useState(40);
  return <RangeSlider value={vol} onChange={setVol} label="Volume" />;
}

export default function RangeSliderDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Forms</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">RangeSlider</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">RangeSlider</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Styled range input with a colored fill track, live value display, and custom value formatter. Fully accessible via keyboard.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ RangeSlider }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="w-full max-w-xs">
            <RangeSliderBasicDemo />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Color variants</h2>
        <ComponentPreview code={COLORS_CODE}>
          <div className="w-full max-w-xs space-y-5">
            <RangeSlider color="blue"   label="Blue"   defaultValue={40} />
            <RangeSlider color="violet" label="Violet" defaultValue={65} />
            <RangeSlider color="green"  label="Green"  defaultValue={80} />
            <RangeSlider color="orange" label="Orange" defaultValue={25} />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">With format</h2>
        <ComponentPreview code={FORMAT_CODE}>
          <div className="w-full max-w-xs space-y-5">
            <RangeSlider label="Price range" min={0} max={1000} step={10} defaultValue={350} formatValue={(v) => `$${v}`} />
            <RangeSlider label="Opacity" min={0} max={100} defaultValue={75} formatValue={(v) => `${v}%`} />
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
