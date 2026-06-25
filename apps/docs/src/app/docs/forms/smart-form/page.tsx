"use client";

import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { useState } from "react";

const BASIC_CODE = `import { SmartForm, FormField, FormSubmit } from "@animui/ui";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Example() {
  return (
    <SmartForm
      schema={contactSchema}
      onSubmit={async (data) => {
        await fetch("/api/contact", {
          method: "POST",
          body: JSON.stringify(data),
        });
      }}
    >
      <FormField name="name" label="Full name" placeholder="Jane Smith" />
      <FormField name="email" label="Email" type="email" placeholder="jane@example.com" />
      <FormField name="message" label="Message" as="textarea" rows={4} />
      <FormSubmit>Send message</FormSubmit>
    </SmartForm>
  );
}`;

const PROPS = [
  { name: "schema", type: "ZodSchema", default: "—", description: "A Zod schema object. SmartForm infers field types and validation rules automatically." },
  { name: "onSubmit", type: "(data: z.infer<typeof schema>) => Promise<void>", default: "—", description: "Called with validated form data on submit. SmartForm shows a loading state during the async operation." },
  { name: "defaultValues", type: "Partial<z.infer<typeof schema>>", default: "—", description: "Pre-fill form fields with initial values." },
  { name: "resetOnSuccess", type: "boolean", default: "false", description: "Resets all fields to defaultValues after a successful submit." },
  { name: "className", type: "string", default: "—", description: "Additional classes on the form element." },
];

function SmartFormPreview() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (values.name.length < 2) e.name = "Name must be at least 2 characters";
    if (!values.email.includes("@")) e.email = "Invalid email address";
    if (values.message.length < 10) e.message = "Message must be at least 10 characters";
    return e;
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  };

  if (submitted) {
    return (
      <div className="text-center py-6">
        <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
          <span className="text-green-600 text-xl">✓</span>
        </div>
        <p className="font-semibold text-neutral-900">Message sent!</p>
        <button onClick={() => { setSubmitted(false); setValues({ name: "", email: "", message: "" }); }} className="mt-2 text-sm text-blue-500 hover:underline">
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
      {(["name", "email", "message"] as const).map((field) => (
        <div key={field}>
          <label className={`block text-xs font-semibold mb-1.5 ${errors[field] ? "text-red-600" : "text-neutral-700"}`}>
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          {field === "message" ? (
            <textarea
              rows={3}
              value={values[field]}
              onChange={(e) => setValues((v) => ({ ...v, [field]: e.target.value }))}
              className={`w-full px-3 py-2 rounded-xl border text-sm focus:outline-none resize-none ${errors[field] ? "border-red-300 focus:border-red-400" : "border-neutral-200 focus:border-blue-400"}`}
              placeholder="Your message..."
            />
          ) : (
            <input
              type={field === "email" ? "email" : "text"}
              value={values[field]}
              onChange={(e) => setValues((v) => ({ ...v, [field]: e.target.value }))}
              className={`w-full px-3 py-2 rounded-xl border text-sm focus:outline-none ${errors[field] ? "border-red-300 focus:border-red-400" : "border-neutral-200 focus:border-blue-400"}`}
              placeholder={field === "email" ? "you@example.com" : "Jane Smith"}
            />
          )}
          {errors[field] && <p className="mt-1 text-xs text-red-500">{errors[field]}</p>}
        </div>
      ))}
      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 disabled:opacity-60 transition-colors"
      >
        {loading && <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>}
        {loading ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

export default function SmartFormPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Forms</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Smart Form</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">SmartForm</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Pass a Zod schema and get a fully wired form — field components, validation, error display,
          and loading state. No react-hook-form setup, no manual error wiring.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ SmartForm, FormField, FormSubmit }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Contact form example</h2>
        <p className="text-neutral-500 mb-4">Try submitting with empty or invalid fields to see validation.</p>
        <ComponentPreview code={BASIC_CODE}>
          <SmartFormPreview />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
