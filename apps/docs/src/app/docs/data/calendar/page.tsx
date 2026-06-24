"use client";

import { useState } from "react";
import { Calendar } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { Calendar } from "@stealshadow/ui";
import { useState } from "react";

export default function Example() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  return <Calendar value={date} onChange={setDate} />;
}`;

const RANGE_CODE = `import { Calendar } from "@stealshadow/ui";
import { useState } from "react";

export default function Example() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  return (
    <Calendar
      value={date}
      onChange={setDate}
      disabled={(d) => d < minDate || d > maxDate}
    />
  );
}`;

const DISABLED_CODE = `import { Calendar } from "@stealshadow/ui";
import { useState } from "react";

export default function Example() {
  const [date, setDate] = useState<Date | undefined>(undefined);

  // Disable weekends
  return (
    <Calendar
      value={date}
      onChange={setDate}
      disabled={(d) => d.getDay() === 0 || d.getDay() === 6}
    />
  );
}`;

const PROPS = [
  { name: "value", type: "Date | undefined", default: "undefined", description: "The currently selected date. Pass undefined for no selection." },
  { name: "onChange", type: "(date: Date) => void", default: "—", description: "Callback fired when the user clicks a date cell." },
  { name: "disabled", type: "(date: Date) => boolean", default: "—", description: "Return true to disable a specific date (dims it, prevents selection)." },
  { name: "className", type: "string", default: "—", description: "Additional CSS classes applied to the calendar root." },
];

export default function CalendarDocsPage() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [dateRange, setDateRange] = useState<Date | undefined>(undefined);
  const [dateDisabled, setDateDisabled] = useState<Date | undefined>(undefined);

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Data</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Calendar</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Calendar</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          An accessible date picker calendar with month navigation and flexible date disabling via a predicate function.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Calendar }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-neutral-900">Basic</h2>
        <p className="text-neutral-500 leading-relaxed">
          A controlled calendar. Pair <code className="text-sm font-mono bg-neutral-100 px-1 rounded">value</code> with{" "}
          <code className="text-sm font-mono bg-neutral-100 px-1 rounded">onChange</code> to manage selection state.
        </p>
        <ComponentPreview code={BASIC_CODE}>
          <Calendar value={date} onChange={setDate} />
        </ComponentPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-neutral-900">Date range constraint</h2>
        <p className="text-neutral-500 leading-relaxed">
          Use the <code className="text-sm font-mono bg-neutral-100 px-1 rounded">disabled</code> predicate to block dates outside an allowed window.
        </p>
        <ComponentPreview code={RANGE_CODE}>
          <div className="flex flex-col items-center gap-3">
            <Calendar
              value={dateRange}
              onChange={setDateRange}
              disabled={(d) => d < minDate || d > maxDate}
            />
            <p className="text-xs text-neutral-400">Only the next 3 months are selectable</p>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-neutral-900">Disabled dates</h2>
        <p className="text-neutral-500 leading-relaxed">
          Pass a function to <code className="text-sm font-mono bg-neutral-100 px-1 rounded">disabled</code> to mark specific dates as non-selectable — weekends, holidays, or any custom logic.
        </p>
        <ComponentPreview code={DISABLED_CODE}>
          <div className="flex flex-col items-center gap-3">
            <Calendar
              value={dateDisabled}
              onChange={setDateDisabled}
              disabled={(d) => d.getDay() === 0 || d.getDay() === 6}
            />
            <p className="text-xs text-neutral-400">Weekends are disabled</p>
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-2xl font-bold text-neutral-900">Props</h2>
        <PropsTable props={PROPS} />
      </div>
    </div>
  );
}
