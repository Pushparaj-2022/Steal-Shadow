"use client";

import { useState } from "react";
import { OTPInput } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { OTPInput } from "@animui/ui";
import { useState } from "react";

export default function Example() {
  const [value, setValue] = useState("");
  return (
    <OTPInput
      length={6}
      value={value}
      onChange={setValue}
      onComplete={(code) => console.log("Code:", code)}
    />
  );
}`;

const VERIFY_CODE = `import { OTPInput } from "@animui/ui";
import { useState } from "react";

export default function VerifyPage() {
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);

  const handleComplete = async (value: string) => {
    setLoading(true);
    await verifyCode(value);
    setLoading(false);
  };

  return (
    <div className="text-center space-y-4">
      <h2 className="text-xl font-bold">Enter verification code</h2>
      <p className="text-sm text-neutral-500">Sent to +1 (555) ***-4567</p>
      <OTPInput
        length={6}
        value={code}
        onChange={setCode}
        onComplete={handleComplete}
      />
      {loading && <p className="text-sm text-blue-600">Verifying…</p>}
    </div>
  );
}`;

const ERROR_CODE = `<OTPInput
  length={4}
  error
  value={code}
  onChange={setCode}
/>`;

const PROPS = [
  { name: "length", type: "number", default: "6", description: "Number of digit inputs." },
  { name: "value", type: "string", default: '""', description: "Controlled value (concatenated digits)." },
  { name: "onChange", type: "(value: string) => void", default: "—", description: "Called on every digit change with the full value." },
  { name: "onComplete", type: "(value: string) => void", default: "—", description: "Called when all digits are filled." },
  { name: "mask", type: "boolean", default: "false", description: "Mask input as password." },
  { name: "error", type: "boolean", default: "false", description: "Show error styling (red border)." },
  { name: "disabled", type: "boolean", default: "false", description: "Disable all inputs." },
  { name: "inputClassName", type: "string", default: "—", description: "Classes applied to each digit input." },
];

export default function OTPInputDocsPage() {
  const [val, setVal] = useState("");

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">OTPInput</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">OTPInput</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          One-time password / PIN input with automatic focus advance, paste support, backspace navigation, and error state. Keyboard accessible.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ OTPInput }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic (6 digits)</h2>
        <ComponentPreview code={BASIC_CODE}>
          <OTPInput
            length={6}
            value={val}
            onChange={setVal}
            onComplete={(code) => console.log("Code:", code)}
          />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Verification flow</h2>
        <ComponentPreview code={VERIFY_CODE}>
          <div className="text-center space-y-4">
            <h3 className="text-base font-bold text-neutral-800">Enter verification code</h3>
            <p className="text-xs text-neutral-500">Sent to +1 (555) ***-4567</p>
            <OTPInput length={6} value="" onChange={() => {}} />
            <p className="text-xs text-blue-600">Waiting for input…</p>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">4-digit with error</h2>
        <ComponentPreview code={ERROR_CODE}>
          <div className="space-y-2">
            <OTPInput length={4} value="4567" error onChange={() => {}} />
            <p className="text-xs text-red-500">Invalid code. Please try again.</p>
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
