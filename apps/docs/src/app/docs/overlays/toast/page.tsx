"use client";

import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const SETUP_CODE = `// app/layout.tsx — wrap once at root
import { ToastProvider } from "@stealshadow/ui";

export default function RootLayout({ children }) {
  return (
    <html><body>
      <ToastProvider>{children}</ToastProvider>
    </body></html>
  );
}`;

const BASIC_CODE = `import { useToast } from "@stealshadow/ui";

export default function Example() {
  const toast = useToast();
  return (
    <button onClick={() => toast.success("Saved!")}>
      Save
    </button>
  );
}`;

const VARIANTS_CODE = `const toast = useToast();

toast.success("Changes saved!", { description: "Your profile has been updated." });
toast.error("Upload failed", { description: "File exceeds 10 MB limit." });
toast.warning("Storage 80% full", { description: "Consider upgrading." });
toast.info("New version available", { description: "v0.2.0 is out." });`;

const PROMISE_CODE = `toast.promise(uploadFile(file), {
  loading: "Uploading…",
  success: "Upload complete!",
  error:   "Upload failed.",
});`;

const HOOK_PROPS = [
  { name: "toast.success(title, opts?)", type: "function", default: "—", description: "Show a green success notification." },
  { name: "toast.error(title, opts?)", type: "function", default: "—", description: "Show a red error notification." },
  { name: "toast.warning(title, opts?)", type: "function", default: "—", description: "Show an amber warning notification." },
  { name: "toast.info(title, opts?)", type: "function", default: "—", description: "Show a blue info notification." },
  { name: "toast.promise(promise, msgs)", type: "function", default: "—", description: "Show loading → success/error based on promise resolution." },
  { name: "toast.dismiss(id?)", type: "function", default: "—", description: "Dismiss a specific toast, or all if no id given." },
];

const OPT_PROPS = [
  { name: "description", type: "string", default: "—", description: "Secondary text shown below the title." },
  { name: "duration", type: "number", default: "4000", description: "Auto-dismiss time in milliseconds." },
  { name: "action", type: "{ label: string; onClick: () => void }", default: "—", description: "An action button inside the toast." },
  { name: "position", type: '"top-right" | "top-center" | "bottom-right" | "bottom-center"', default: '"bottom-right"', description: "Where the toast stack appears." },
];

export default function ToastDocsPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Overlays</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Toast</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Toast</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Imperative notification toasts triggered via a hook. Supports success, error, warning, info, and promise variants with optional action buttons.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ useToast, ToastProvider }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Setup</h2>
        <p className="text-neutral-500 mb-4 text-sm">Add <code className="font-mono text-xs bg-neutral-100 px-1 rounded">ToastProvider</code> once at the root of your app.</p>
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <div className="px-4 py-2 bg-neutral-50 border-b border-neutral-100"><span className="text-xs font-mono text-neutral-500">app/layout.tsx</span></div>
          <pre className="bg-neutral-950 px-5 py-4 overflow-x-auto text-sm font-mono text-neutral-200 leading-relaxed">{SETUP_CODE}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic usage</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="space-y-2">
            <div className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-white shadow-sm p-3.5 max-w-xs">
              <div className="h-7 w-7 shrink-0 rounded-xl bg-emerald-500 flex items-center justify-center text-white text-xs font-bold">✓</div>
              <div>
                <p className="text-sm font-semibold text-neutral-900">Saved!</p>
              </div>
              <button className="ml-auto text-neutral-300 hover:text-neutral-500 text-xs">✕</button>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Variants</h2>
        <ComponentPreview code={VARIANTS_CODE}>
          <div className="space-y-2 max-w-sm">
            {[
              { bg: "bg-emerald-500", icon: "✓", title: "Changes saved!", desc: "Your profile has been updated." },
              { bg: "bg-red-500",     icon: "✕", title: "Upload failed",   desc: "File exceeds 10 MB limit." },
              { bg: "bg-amber-500",   icon: "⚠", title: "Storage 80% full", desc: "Consider upgrading." },
              { bg: "bg-blue-500",    icon: "i", title: "New version available", desc: "v0.2.0 is out." },
            ].map((t, i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-white shadow-sm p-3">
                <div className={`h-7 w-7 shrink-0 rounded-lg ${t.bg} flex items-center justify-center text-white text-xs font-bold`}>{t.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold text-neutral-900 truncate">{t.title}</p>
                  <p className="text-xs text-neutral-500 mt-0.5 truncate">{t.desc}</p>
                </div>
                <button className="text-neutral-300 text-xs shrink-0">✕</button>
              </div>
            ))}
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Promise</h2>
        <p className="text-neutral-500 mb-4 text-sm">Pass a promise and the toast automatically transitions through loading → success/error.</p>
        <ComponentPreview code={PROMISE_CODE}>
          <div className="space-y-2 max-w-xs">
            <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-3">
              <div className="h-7 w-7 shrink-0 rounded-lg bg-blue-500 flex items-center justify-center">
                <svg className="h-3.5 w-3.5 text-white animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
              </div>
              <p className="text-xs font-semibold text-blue-700">Uploading…</p>
            </div>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">useToast methods</h2>
        <PropsTable props={HOOK_PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Options</h2>
        <PropsTable props={OPT_PROPS} />
      </section>
    </div>
  );
}
