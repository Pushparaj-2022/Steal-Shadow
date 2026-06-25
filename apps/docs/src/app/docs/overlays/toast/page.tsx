"use client";

import { useToast, ToastProvider } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const SETUP_CODE = `// app/layout.tsx — wrap once at root
import { ToastProvider } from "@animui/ui";

export default function RootLayout({ children }) {
  return (
    <html><body>
      <ToastProvider>{children}</ToastProvider>
    </body></html>
  );
}`;

const BASIC_CODE = `import { useToast } from "@animui/ui";

export default function Example() {
  const { toast } = useToast();
  return (
    <button onClick={() => toast({ message: "Saved!", variant: "success" })}>
      Save
    </button>
  );
}`;

const VARIANTS_CODE = `const { toast } = useToast();

toast({ message: "Changes saved!",       variant: "success", description: "Your profile has been updated." });
toast({ message: "Upload failed",         variant: "error",   description: "File exceeds 10 MB limit." });
toast({ message: "Storage 80% full",      variant: "warning", description: "Consider upgrading." });
toast({ message: "New version available", variant: "info",    description: "v0.2.0 is out." });`;

const ACTION_CODE = `const { toast } = useToast();

toast({
  message: "File deleted",
  variant: "error",
  action: { label: "Undo", onClick: () => restoreFile() },
});`;

const HOOK_PROPS = [
  { name: "toast(opts)", type: "function", default: "—", description: "Show a notification. Pass a ToastOptions object (see below)." },
  { name: "dismiss(id)", type: "function", default: "—", description: "Dismiss the toast with the given id." },
];

const OPT_PROPS = [
  { name: "message", type: "string", default: "—", description: "Primary text shown in the toast." },
  { name: "variant", type: '"default" | "success" | "error" | "warning" | "info"', default: '"default"', description: "Controls the icon and border colour." },
  { name: "description", type: "string", default: "—", description: "Secondary text shown below the message." },
  { name: "duration", type: "number", default: "4000", description: "Auto-dismiss time in milliseconds. Pass 0 to disable auto-dismiss." },
  { name: "action", type: "{ label: string; onClick: () => void }", default: "—", description: "An action button rendered inside the toast." },
];

// ── Live demo components ──────────────────────────────────────────────────────
function BasicDemo() {
  const { toast } = useToast();
  return (
    <button
      onClick={() => toast({ message: "Saved!", variant: "success" })}
      className="px-4 py-2 rounded-lg bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors"
    >
      Save
    </button>
  );
}

function VariantsDemo() {
  const { toast } = useToast();
  const variants: Array<{ label: string; variant: "success" | "error" | "warning" | "info"; message: string; description: string }> = [
    { label: "Success", variant: "success", message: "Changes saved!", description: "Your profile has been updated." },
    { label: "Error",   variant: "error",   message: "Upload failed",  description: "File exceeds 10 MB limit." },
    { label: "Warning", variant: "warning", message: "Storage 80% full", description: "Consider upgrading." },
    { label: "Info",    variant: "info",    message: "New version available", description: "v0.2.0 is out." },
  ];
  const colours: Record<string, string> = {
    success: "bg-emerald-500 hover:bg-emerald-600",
    error:   "bg-red-500 hover:bg-red-600",
    warning: "bg-amber-500 hover:bg-amber-600",
    info:    "bg-blue-500 hover:bg-blue-600",
  };
  return (
    <div className="flex flex-wrap gap-2">
      {variants.map((v) => (
        <button
          key={v.variant}
          onClick={() => toast({ message: v.message, variant: v.variant, description: v.description })}
          className={`px-4 py-2 rounded-lg text-white text-sm font-semibold transition-colors ${colours[v.variant]}`}
        >
          {v.label}
        </button>
      ))}
    </div>
  );
}

function ActionDemo() {
  const { toast } = useToast();
  return (
    <button
      onClick={() =>
        toast({
          message: "File deleted",
          variant: "error",
          action: { label: "Undo", onClick: () => toast({ message: "Restored!", variant: "success" }) },
        })
      }
      className="px-4 py-2 rounded-lg bg-red-500 text-white text-sm font-semibold hover:bg-red-600 transition-colors"
    >
      Delete file
    </button>
  );
}

export default function ToastDocsPage() {
  return (
    <ToastProvider>
      <div className="space-y-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Overlays</span>
            <span className="text-neutral-300">/</span>
            <span className="text-xs font-semibold text-blue-600">Toast</span>
          </div>
          <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Toast</h1>
          <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
            Imperative notification toasts triggered via a hook. Supports success, error, warning, info, and default variants with optional action buttons.
          </p>
        </div>

        <div className="rounded-xl bg-neutral-950 px-5 py-4">
          <code className="text-sm font-mono text-green-400">
            import {"{ useToast, ToastProvider }"} from <span className="text-blue-400">"@animui/ui"</span>
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
            <BasicDemo />
          </ComponentPreview>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">Variants</h2>
          <ComponentPreview code={VARIANTS_CODE}>
            <VariantsDemo />
          </ComponentPreview>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">Action button</h2>
          <p className="text-neutral-500 mb-4 text-sm">Pass an <code className="font-mono text-xs bg-neutral-100 px-1 rounded">action</code> option to add a clickable button inside the toast.</p>
          <ComponentPreview code={ACTION_CODE}>
            <ActionDemo />
          </ComponentPreview>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">useToast return values</h2>
          <PropsTable props={HOOK_PROPS} />
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Toast options</h2>
          <PropsTable props={OPT_PROPS} />
        </section>
      </div>
    </ToastProvider>
  );
}
