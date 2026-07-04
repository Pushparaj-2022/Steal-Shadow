"use client";

import { useState } from "react";
import { DatePicker } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

function DatePickerDemo() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return <DatePicker value={date} onChange={setDate} />;
}

const BASIC_CODE = `import { DatePicker } from "@animui/ui";
import { useState } from "react";

export default function Example() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return <DatePicker value={date} onChange={setDate} placeholder="Select date" />;
}`;

const FORMAT_CODE = `<DatePicker
  value={date}
  onChange={setDate}
  formatDate={(d) => d.toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" })}
/>`;

const PROPS = [
  { name: "value", type: "Date", default: "—", description: "Currently selected date (controlled)." },
  { name: "onChange", type: "(date: Date) => void", default: "—", description: "Called when a date is selected in the calendar." },
  { name: "placeholder", type: "string", default: '"Select date"', description: "Text shown in the trigger when no date is selected." },
  { name: "formatDate", type: "(date: Date) => string", default: "toLocaleDateString()", description: "Custom formatter for the selected date label." },
  { name: "disabled", type: "boolean", default: "false", description: "Prevents opening the popover." },
  { name: "className", type: "string", default: "—", description: "Additional classes for the wrapper element." },
];

export default function DatePickerDocsPage() {
  const [formatted, setFormatted] = useState<Date | undefined>(undefined);

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Forms</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">DatePicker</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">DatePicker</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A text input that opens a popover calendar on click. Closes on select, outside click, or Escape.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ DatePicker }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <ComponentPreview code={BASIC_CODE}>
          <DatePickerDemo />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Custom format</h2>
        <p className="text-neutral-500 mb-4">
          Use <code className="font-mono text-xs bg-neutral-100 px-1 rounded">formatDate</code> to control how the selected date is displayed.
        </p>
        <ComponentPreview code={FORMAT_CODE}>
          <DatePicker
            value={formatted}
            onChange={setFormatted}
            formatDate={(d) => d.toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" })}
          />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Disabled</h2>
        <ComponentPreview code={`<DatePicker disabled placeholder="Unavailable" />`}>
          <DatePicker disabled placeholder="Unavailable" />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Trigger exposes <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-haspopup</code> and <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-expanded</code>.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>Pressing <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Escape</code> or clicking outside closes the calendar.</li>
          <li className="flex items-start gap-2"><span className="text-green-500 font-bold shrink-0">✓</span>The embedded <code className="font-mono text-xs bg-neutral-100 px-1 rounded">Calendar</code> supports full keyboard navigation with arrow keys.</li>
        </ul>
      </section>
    </div>
  );
}
