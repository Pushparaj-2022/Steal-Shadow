"use client";

import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const INSTALL_CODE = `npm install @animui/ui motion`;

const PROVIDER_CODE = `// app/layout.tsx
import { ToastProvider } from "@animui/ui";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}`;

const NEXT_CONFIG_CODE = `// next.config.ts
const nextConfig = {
  transpilePackages: ["@animui/ui"],
};

export default nextConfig;`;

const BUTTON_USAGE = `import { Button } from "@animui/ui";

export default function Example() {
  return (
    <div className="flex gap-3">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="gradient" loading>Saving…</Button>
    </div>
  );
}`;

const FORM_USAGE = `import { SmartForm, FormField, FormSubmit } from "@animui/ui";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Name too short"),
  email: z.string().email("Invalid email"),
});

export default function SignupForm() {
  return (
    <SmartForm schema={schema} onSubmit={(data) => console.log(data)}>
      <FormField name="name" label="Full name" />
      <FormField name="email" label="Email" type="email" />
      <FormSubmit>Create account</FormSubmit>
    </SmartForm>
  );
}`;

const MODAL_USAGE = `import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "@animui/ui";
import { useState } from "react";

export default function Example() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalHeader title="Confirm action" onClose={() => setOpen(false)} />
        <ModalBody>
          <p>Are you sure you want to proceed?</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}`;

const TOAST_USAGE = `import { useToast, Button } from "@animui/ui";

export default function Example() {
  const toast = useToast();
  return (
    <Button
      onClick={() =>
        toast.success("Profile saved!", {
          description: "Your changes have been applied.",
        })
      }
    >
      Save profile
    </Button>
  );
}`;

const DATATABLE_USAGE = `import { DataTable } from "@animui/ui";

const columns = [
  { key: "name",   header: "Name" },
  { key: "status", header: "Status" },
  { key: "mrr",    header: "MRR" },
];

const data = [
  { id: 1, name: "Alice Martin", status: "Active", mrr: "$249" },
  { id: 2, name: "Bob Chen",     status: "Trial",  mrr: "—"    },
];

export default function UsersTable() {
  return <DataTable columns={columns} data={data} />;
}`;

const THEMING_CODE = `/* globals.css — override tokens once, apply everywhere */
:root {
  --ui-primary:      #6366f1;   /* brand accent */
  --ui-radius:       10px;      /* border radius */
  --ui-surface:      #ffffff;   /* card/panel bg */
  --ui-border:       #e4e4e7;   /* borders */
  --ui-text:         #09090b;   /* body text */
  --ui-text-muted:   #71717a;   /* secondary text */
}

.dark {
  --ui-surface: #18181b;
  --ui-border:  rgba(255,255,255,0.08);
  --ui-text:    #fafafa;
}`;

const CHAT_USAGE = `import { Chat } from "@animui/ui";

export default function AIAssistant() {
  return (
    <Chat
      messages={[
        { role: "assistant", content: "How can I help you today?" },
        { role: "user",      content: "Build me a dashboard." },
      ]}
      onSend={async (msg) => {
        const res = await fetch("/api/chat", {
          method: "POST",
          body: JSON.stringify({ message: msg }),
        });
        return res.json();
      }}
    />
  );
}`;

export default function QuickStartPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Getting Started</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Quick Start</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Quick Start</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Install Steal Shadow, wire up the provider, and start using components in under 5 minutes.
        </p>
      </div>

      {/* Step 1 — Install */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-1">1. Install</h2>
        <p className="text-neutral-500 mb-4 text-sm">Steal Shadow requires <strong>Motion v12</strong> as a peer dependency for animations.</p>
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-neutral-50 border-b border-neutral-200">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="ml-2 text-xs font-mono text-neutral-400">terminal</span>
          </div>
          <pre className="bg-neutral-950 px-5 py-4 text-sm font-mono text-neutral-200">
            <span className="text-neutral-500 select-none">$ </span>
            <span className="text-green-400">npm install</span>
            {" @animui/ui motion"}
          </pre>
        </div>
      </section>

      {/* Step 2 — Next.js config */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-1">2. Configure Next.js</h2>
        <p className="text-neutral-500 mb-4 text-sm">Add <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">transpilePackages</code> so Next.js can compile the library source.</p>
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <div className="px-4 py-2 bg-neutral-50 border-b border-neutral-100">
            <span className="text-xs font-mono text-neutral-500">next.config.ts</span>
          </div>
          <pre className="bg-neutral-950 px-5 py-4 overflow-x-auto text-sm font-mono text-neutral-200 leading-relaxed">{NEXT_CONFIG_CODE}</pre>
        </div>
        <p className="mt-3 text-sm text-neutral-400">Skip this step for Vite or other bundlers — it&apos;s Next.js-specific.</p>
      </section>

      {/* Step 3 — Provider */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-1">3. Add the provider</h2>
        <p className="text-neutral-500 mb-4 text-sm">Wrap your app with <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">ToastProvider</code> once at the root. Other components work without a provider.</p>
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <div className="px-4 py-2 bg-neutral-50 border-b border-neutral-100">
            <span className="text-xs font-mono text-neutral-500">app/layout.tsx</span>
          </div>
          <pre className="bg-neutral-950 px-5 py-4 overflow-x-auto text-sm font-mono text-neutral-200 leading-relaxed">{PROVIDER_CODE}</pre>
        </div>
      </section>

      {/* Step 4 — Usage examples */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-6">4. Use components</h2>

        <div className="space-y-8">
          {/* Buttons */}
          <div>
            <h3 className="text-base font-bold text-neutral-800 mb-1">Button</h3>
            <p className="text-sm text-neutral-500 mb-3">Variants, sizes, loading states, and icon support out of the box.</p>
            <ComponentPreview code={BUTTON_USAGE}>
              <div className="flex flex-wrap items-center gap-3">
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 text-white text-sm font-semibold hover:opacity-90 transition-opacity">Default</button>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-300 text-neutral-700 text-sm font-semibold hover:bg-neutral-50 transition-colors">Outline</button>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 text-white text-sm font-semibold opacity-80 cursor-not-allowed">
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  Saving…
                </button>
              </div>
            </ComponentPreview>
          </div>

          {/* SmartForm */}
          <div>
            <h3 className="text-base font-bold text-neutral-800 mb-1">SmartForm</h3>
            <p className="text-sm text-neutral-500 mb-3">Zod-powered validation, error messages, and loading state — no wiring required.</p>
            <ComponentPreview code={FORM_USAGE}>
              <div className="max-w-sm space-y-3">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-neutral-500 uppercase tracking-wide">Full name</label>
                  <input readOnly defaultValue="Jane Doe" className="w-full rounded-xl border border-neutral-200 px-3 py-2.5 text-sm outline-none" />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-neutral-500 uppercase tracking-wide">Email</label>
                  <input readOnly defaultValue="not-valid" className="w-full rounded-xl border border-red-300 bg-red-50 px-3 py-2.5 text-sm outline-none" />
                  <p className="mt-1 text-xs text-red-500">Invalid email</p>
                </div>
                <button className="w-full rounded-xl bg-zinc-900 py-2.5 text-sm font-bold text-white">Create account</button>
              </div>
            </ComponentPreview>
          </div>

          {/* Modal */}
          <div>
            <h3 className="text-base font-bold text-neutral-800 mb-1">Modal</h3>
            <p className="text-sm text-neutral-500 mb-3">Accessible dialog with header, body, and footer slots. Focus trapped, Escape to close.</p>
            <ComponentPreview code={MODAL_USAGE}>
              <div className="flex justify-center">
                <div className="w-80 rounded-2xl border border-neutral-200 bg-white shadow-xl overflow-hidden">
                  <div className="flex items-center justify-between border-b border-neutral-100 px-5 py-4">
                    <span className="font-bold text-sm text-neutral-900">Confirm action</span>
                    <button className="h-6 w-6 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-400 text-xs hover:bg-neutral-200">✕</button>
                  </div>
                  <div className="px-5 py-4 text-sm text-neutral-600">Are you sure you want to proceed?</div>
                  <div className="flex justify-end gap-2 border-t border-neutral-100 px-5 py-4">
                    <button className="px-4 py-2 rounded-xl border border-neutral-200 text-sm font-semibold text-neutral-700 hover:bg-neutral-50">Cancel</button>
                    <button className="px-4 py-2 rounded-xl bg-zinc-900 text-sm font-bold text-white">Confirm</button>
                  </div>
                </div>
              </div>
            </ComponentPreview>
          </div>

          {/* Toast */}
          <div>
            <h3 className="text-base font-bold text-neutral-800 mb-1">Toast</h3>
            <p className="text-sm text-neutral-500 mb-3">Call <code className="font-mono text-xs bg-neutral-100 px-1 py-0.5 rounded">useToast()</code> anywhere in your app to trigger a notification.</p>
            <ComponentPreview code={TOAST_USAGE}>
              <div className="space-y-2">
                {[
                  { icon: "✓", bg: "bg-emerald-500", title: "Profile saved!", desc: "Your changes have been applied." },
                  { icon: "⚠", bg: "bg-amber-500", title: "Storage 80% full", desc: "Consider upgrading your plan." },
                  { icon: "✕", bg: "bg-red-500", title: "Export failed", desc: "Please try again." },
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-neutral-100 bg-white shadow-sm p-3">
                    <div className={`h-7 w-7 shrink-0 rounded-lg ${t.bg} flex items-center justify-center text-white text-xs font-bold`}>{t.icon}</div>
                    <div>
                      <p className="text-xs font-semibold text-neutral-900">{t.title}</p>
                      <p className="text-xs text-neutral-500 mt-0.5">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ComponentPreview>
          </div>

          {/* DataTable */}
          <div>
            <h3 className="text-base font-bold text-neutral-800 mb-1">DataTable</h3>
            <p className="text-sm text-neutral-500 mb-3">Sortable, filterable, paginated table. Pass columns + data — no config needed.</p>
            <ComponentPreview code={DATATABLE_USAGE}>
              <div className="rounded-xl border border-neutral-200 overflow-hidden">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-neutral-100 bg-neutral-50">
                      {["Name","Status","MRR"].map(h => <th key={h} className="px-4 py-2.5 text-left text-[10px] font-bold uppercase tracking-widest text-neutral-400">{h}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    {[["Alice Martin","Active","$249"],["Bob Chen","Trial","—"]].map(([n,s,m],i) => (
                      <tr key={i} className="border-b border-neutral-50 last:border-0 hover:bg-neutral-50 transition-colors">
                        <td className="px-4 py-3 font-medium text-neutral-800">{n}</td>
                        <td className="px-4 py-3"><span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${s==="Active"?"bg-emerald-100 text-emerald-700":"bg-amber-100 text-amber-700"}`}>{s}</span></td>
                        <td className="px-4 py-3 font-mono text-neutral-500">{m}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </ComponentPreview>
          </div>

          {/* AI Chat */}
          <div>
            <h3 className="text-base font-bold text-neutral-800 mb-1">Chat (AI)</h3>
            <p className="text-sm text-neutral-500 mb-3">Full chat UI with streaming support, tool call visualization, and message history.</p>
            <ComponentPreview code={CHAT_USAGE}>
              <div className="rounded-xl border border-neutral-200 overflow-hidden">
                <div className="px-4 py-3 border-b border-neutral-100 text-xs font-semibold text-neutral-600 bg-neutral-50">AI Assistant</div>
                <div className="p-4 space-y-3">
                  <div className="flex gap-2">
                    <div className="h-6 w-6 shrink-0 rounded-lg bg-blue-500 flex items-center justify-center text-[9px] font-bold text-white">AI</div>
                    <div className="rounded-2xl rounded-tl-sm bg-neutral-100 px-3 py-2 text-xs text-neutral-700 max-w-[80%]">How can I help you today?</div>
                  </div>
                  <div className="flex gap-2 justify-end">
                    <div className="rounded-2xl rounded-tr-sm bg-blue-50 border border-blue-100 px-3 py-2 text-xs text-blue-700 max-w-[80%]">Build me a dashboard.</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 w-6 shrink-0 rounded-lg bg-blue-500 flex items-center justify-center text-[9px] font-bold text-white">AI</div>
                    <div className="rounded-2xl rounded-tl-sm bg-neutral-100 px-3 py-2 text-xs text-neutral-700">
                      I&apos;ll build a dashboard with KanbanBoard and DataTable.
                      <span className="inline-block h-3 w-0.5 animate-pulse bg-neutral-400 ml-0.5" />
                    </div>
                  </div>
                </div>
                <div className="border-t border-neutral-100 px-3 py-2.5 flex gap-2">
                  <input readOnly placeholder="Ask anything..." className="flex-1 text-xs outline-none text-neutral-500" />
                  <button className="rounded-lg bg-blue-500 px-3 py-1.5 text-xs font-bold text-white">Send</button>
                </div>
              </div>
            </ComponentPreview>
          </div>
        </div>
      </section>

      {/* Step 5 — Theming */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-1">5. Theming</h2>
        <p className="text-neutral-500 mb-4 text-sm">
          All design tokens are CSS custom properties. Override once in your global CSS and every component inherits the change.
        </p>
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <div className="px-4 py-2 bg-neutral-50 border-b border-neutral-100">
            <span className="text-xs font-mono text-neutral-500">globals.css</span>
          </div>
          <pre className="bg-neutral-950 px-5 py-4 overflow-x-auto text-sm font-mono text-neutral-200 leading-relaxed">{THEMING_CODE}</pre>
        </div>
      </section>

      {/* Next steps */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Next steps</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { title: "Components", desc: "Browse all UI primitives — buttons, cards, inputs, and more.", href: "/docs/components" },
            { title: "Forms", desc: "Zod-validated forms with error handling and loading states.", href: "/docs/forms" },
            { title: "Animations", desc: "Motion-first animations: magnetic, typewriter, particle field.", href: "/docs/animations" },
            { title: "AI Components", desc: "Chat UI, streaming text, code block, and agent status.", href: "/docs/ai" },
            { title: "Data", desc: "DataTable, KanbanBoard, Calendar, Timeline, and more.", href: "/docs/data" },
            { title: "Overlays", desc: "Modal, Drawer, Popover, Tooltip, and Toast.", href: "/docs/overlays/modal" },
          ].map(({ title, desc, href }) => (
            <a key={title} href={href} className="group flex flex-col gap-1 rounded-xl border border-neutral-200 p-4 hover:border-blue-200 hover:bg-blue-50/40 transition-all">
              <span className="text-sm font-bold text-neutral-900 group-hover:text-blue-700 transition-colors">{title} →</span>
              <span className="text-xs text-neutral-500">{desc}</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
