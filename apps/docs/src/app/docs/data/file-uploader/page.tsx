"use client";

import { FileUploader } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { FileUploader } from "@animui/ui";

export default function Example() {
  return (
    <FileUploader
      accept="image/png,image/jpeg,image/webp,application/pdf"
      maxSize={5 * 1024 * 1024}
      multiple
      onFiles={(files) => {
        console.log("received:", files);
      }}
    />
  );
}`;

const SINGLE_CODE = `<FileUploader
  accept="image/*"
  maxSize={2 * 1024 * 1024}
  onFiles={(files) => uploadAvatar(files[0])}
  label="Upload avatar"
  description="PNG, JPG up to 2MB"
/>`;

const PROPS = [
  { name: "onFiles", type: "(files: File[]) => void", default: "—", description: "Called with accepted File objects when the user drops or selects files." },
  { name: "accept", type: "string", default: "—", description: "Comma-separated MIME types or extensions. e.g. 'image/*' or 'image/png,application/pdf'" },
  { name: "maxSize", type: "number", default: "—", description: "Maximum file size in bytes. Oversized files are rejected with an error message." },
  { name: "multiple", type: "boolean", default: "true", description: "Allow multiple file selection." },
  { name: "maxFiles", type: "number", default: "—", description: "Maximum number of files that can be in the list at once." },
  { name: "value", type: "UploadedFile[]", default: "[]", description: "Controlled list of uploaded file objects (id, file, status, progress, preview)." },
  { name: "onRemove", type: "(id: string) => void", default: "—", description: "Called when the user clicks the remove button on a file." },
  { name: "label", type: "string", default: '"Drop files here or click to upload"', description: "Primary label shown inside the drop zone." },
  { name: "description", type: "string", default: "—", description: "Secondary line of helper text. Auto-generated from accept/maxSize if omitted." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables the drop zone and file input." },
  { name: "className", type: "string", default: "—", description: "Additional classes on the wrapper." },
];

export default function FileUploaderPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Data</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">File Uploader</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">FileUploader</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Drag-and-drop file upload zone with file type validation, size limits, and preview thumbnails. Works with any upload backend.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ FileUploader }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic</h2>
        <p className="text-neutral-500 mb-4">Click or drag files into the drop zone.</p>
        <ComponentPreview code={BASIC_CODE}>
          <FileUploader
            accept="image/png,image/jpeg,image/webp,application/pdf"
            maxSize={5 * 1024 * 1024}
            multiple
            onFiles={() => {}}
          />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Single file with custom label</h2>
        <ComponentPreview code={SINGLE_CODE}>
          <FileUploader
            accept="image/*"
            maxSize={2 * 1024 * 1024}
            onFiles={() => {}}
            label="Upload avatar"
            description="PNG, JPG up to 2MB"
          />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
