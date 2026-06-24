"use client";

import { useState } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Input } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

function ModalBasicPreview() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-center py-6">
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <p className="text-neutral-500 text-sm leading-relaxed">
            This is the modal body. Place any content here — forms, images, confirmations, or anything else.
          </p>
        </ModalBody>
        <ModalFooter>
          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={() => setOpen(false)}>Confirm</Button>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
}

function ModalSizesPreview() {
  const [size, setSize] = useState<"sm" | "md" | "lg" | null>(null);
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 py-6">
      <Button variant="outline" onClick={() => setSize("sm")}>size=&quot;sm&quot;</Button>
      <Button variant="outline" onClick={() => setSize("md")}>size=&quot;md&quot;</Button>
      <Button variant="outline" onClick={() => setSize("lg")}>size=&quot;lg&quot;</Button>
      {size && (
        <Modal open size={size} onClose={() => setSize(null)}>
          <ModalHeader>Size: {size}</ModalHeader>
          <ModalBody>
            <p className="text-neutral-500 text-sm">Modal content at size <strong>{size}</strong>.</p>
          </ModalBody>
        </Modal>
      )}
    </div>
  );
}

function ModalFormPreview() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-center py-6">
      <Button variant="ghost" className="bg-neutral-900 text-white hover:bg-neutral-700" onClick={() => setOpen(true)}>Open form modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalHeader>Create account</ModalHeader>
        <ModalBody>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setOpen(false); }}>
            <Input label="Name" placeholder="Jane Doe" />
            <Input label="Email" type="email" placeholder="jane@example.com" />
            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" type="button" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit">Create</Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </div>
  );
}

const MODAL_PROPS = [
  { name: "open", type: "boolean", default: "false", description: "Controls whether the modal is visible." },
  { name: "onClose", type: "() => void", default: "—", description: "Callback fired when the backdrop or close button is clicked, or Escape is pressed." },
  { name: "size", type: '"sm" | "md" | "lg" | "full"', default: '"md"', description: "Controls the maximum width of the modal dialog." },
  { name: "children", type: "ReactNode", default: "—", description: "Content — typically ModalHeader, ModalBody, and ModalFooter." },
  { name: "closeOnBackdrop", type: "boolean", default: "true", description: "Whether clicking the backdrop dismisses the modal." },
  { name: "className", type: "string", default: "—", description: "Extra Tailwind classes applied to the modal panel." },
];

const BASIC_CODE = `import { Modal, ModalHeader, ModalBody, ModalFooter } from "@stealshadow/ui";
import { useState } from "react";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open modal</button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalHeader>Modal title</ModalHeader>
        <ModalBody>
          <p>This is the modal body. Place any content here.</p>
        </ModalBody>
        <ModalFooter>
          <button onClick={() => setOpen(false)}>Cancel</button>
          <button onClick={() => setOpen(false)}>Confirm</button>
        </ModalFooter>
      </Modal>
    </>
  );
}`;

const SIZES_CODE = `import { Modal, ModalHeader, ModalBody } from "@stealshadow/ui";
import { useState } from "react";

export default function Example() {
  const [size, setSize] = useState<"sm" | "md" | "lg" | null>(null);

  return (
    <>
      <button onClick={() => setSize("sm")}>Small</button>
      <button onClick={() => setSize("md")}>Medium</button>
      <button onClick={() => setSize("lg")}>Large</button>

      {size && (
        <Modal open size={size} onClose={() => setSize(null)}>
          <ModalHeader>Size: {size}</ModalHeader>
          <ModalBody>Modal content at size {size}.</ModalBody>
        </Modal>
      )}
    </>
  );
}`;

const FORM_CODE = `import { Modal, ModalHeader, ModalBody } from "@stealshadow/ui";
import { Button, Input } from "@stealshadow/ui";
import { useState } from "react";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open form modal</Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalHeader>Create account</ModalHeader>
        <ModalBody>
          <form className="space-y-4" onSubmit={() => setOpen(false)}>
            <Input label="Name" placeholder="Jane Doe" />
            <Input label="Email" type="email" placeholder="jane@example.com" />
            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit">Create</Button>
            </div>
          </form>
        </ModalBody>
      </Modal>
    </>
  );
}`;

export default function ModalDocsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Overlays</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Modal</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Modal</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          An accessible dialog overlay that traps focus and renders above all other content.
          Use it for confirmations, forms, or any content that demands the user's attention
          before continuing.
        </p>
      </div>

      {/* Import callout */}
      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Modal, ModalHeader, ModalBody, ModalFooter }"} from{" "}
          <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      {/* Basic usage */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic usage</h2>
        <p className="text-neutral-500 mb-4">
          Control visibility with the <code className="font-mono text-xs bg-neutral-100 px-1 rounded">open</code> prop
          and dismiss with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">onClose</code>.
        </p>
        <ComponentPreview code={BASIC_CODE}>
          <ModalBasicPreview />
        </ComponentPreview>

      </section>

      {/* Sizes */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Sizes</h2>
        <p className="text-neutral-500 mb-4">
          Four built-in sizes adapt to the amount of content inside the dialog.
        </p>
        <ComponentPreview code={SIZES_CODE}>
          <ModalSizesPreview />
        </ComponentPreview>
      </section>

      {/* Form in modal */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Form in modal</h2>
        <p className="text-neutral-500 mb-4">
          Embed a form directly inside <code className="font-mono text-xs bg-neutral-100 px-1 rounded">ModalBody</code>.
          The modal handles focus trapping so the user stays in the form.
        </p>
        <ComponentPreview code={FORM_CODE}>
          <ModalFormPreview />
        </ComponentPreview>
      </section>

      {/* Props */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={MODAL_PROPS} />
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Renders a native <code className="font-mono text-xs bg-neutral-100 px-1 rounded">&lt;dialog&gt;</code>{" "}
            element with <code className="font-mono text-xs bg-neutral-100 px-1 rounded">role="dialog"</code> and{" "}
            <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-modal="true"</code>.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Focus is trapped inside the dialog while it is open and returned to the trigger on close.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            <kbd className="font-mono text-xs bg-neutral-100 px-1 rounded">Escape</kbd> dismisses the modal.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Background scroll is locked while the modal is open.
          </li>
        </ul>
      </section>
    </div>
  );
}
