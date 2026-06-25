"use client";

import { useState } from "react";
import { Chip } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Tag } from "lucide-react";

const BASIC_CODE = `import { Chip } from "@animui/ui";

export default function Example() {
  return (
    <div className="flex gap-2">
      <Chip>Default</Chip>
      <Chip color="blue">Blue</Chip>
      <Chip color="green">Green</Chip>
      <Chip color="violet">Violet</Chip>
    </div>
  );
}`;

const REMOVABLE_CODE = `import { Chip } from "@animui/ui";
import { useState } from "react";

export default function TagsInput() {
  const [tags, setTags] = useState(["React", "TypeScript", "Motion"]);
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Chip
          key={tag}
          removable
          onRemove={() => setTags(tags.filter(t => t !== tag))}
        >
          {tag}
        </Chip>
      ))}
    </div>
  );
}`;

const VARIANTS_CODE = `<Chip variant="default"  color="blue">Default</Chip>
<Chip variant="outlined" color="blue">Outlined</Chip>
<Chip variant="filled"   color="blue">Filled</Chip>`;

const ICON_CODE = `import { Tag } from "lucide-react";

<Chip icon={<Tag />} color="violet">Label</Chip>
<Chip icon={<Tag />} color="green" variant="filled">Category</Chip>`;

const PROPS = [
  { name: "variant", type: '"default" | "outlined" | "filled"', default: '"default"', description: "Visual style of the chip." },
  { name: "color", type: '"default" | "blue" | "green" | "amber" | "red" | "violet"', default: '"default"', description: "Color scheme." },
  { name: "removable", type: "boolean", default: "false", description: "Show an X button to remove the chip." },
  { name: "onRemove", type: "() => void", default: "—", description: "Called when the X is clicked." },
  { name: "onClick", type: "() => void", default: "—", description: "Makes chip clickable (shows pointer cursor)." },
  { name: "icon", type: "ReactNode", default: "—", description: "Icon rendered before the label." },
  { name: "active", type: "boolean", default: "false", description: "Show a ring to indicate selected/active state." },
  { name: "disabled", type: "boolean", default: "false", description: "Disable interactions." },
];

export default function ChipDocsPage() {
  const [tags, setTags] = useState(["React", "TypeScript", "Motion", "Tailwind"]);

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Components</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Chip</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Chip</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Compact interactive tags for categories, labels, and filter selections. Supports removable mode, icons, and 6 color variants in 3 visual styles.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Chip }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Colors</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="flex flex-wrap gap-2">
            <Chip>Default</Chip>
            <Chip color="blue">Blue</Chip>
            <Chip color="green">Green</Chip>
            <Chip color="amber">Amber</Chip>
            <Chip color="red">Red</Chip>
            <Chip color="violet">Violet</Chip>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Variants</h2>
        <ComponentPreview code={VARIANTS_CODE}>
          <div className="flex flex-wrap gap-2">
            <Chip variant="default" color="blue">Default</Chip>
            <Chip variant="outlined" color="blue">Outlined</Chip>
            <Chip variant="filled" color="blue">Filled</Chip>
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Removable (interactive)</h2>
        <ComponentPreview code={REMOVABLE_CODE}>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Chip key={tag} removable onRemove={() => setTags(tags.filter((t) => t !== tag))}>
                {tag}
              </Chip>
            ))}
            {tags.length === 0 && <span className="text-sm text-neutral-400">All tags removed</span>}
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">With icon</h2>
        <ComponentPreview code={ICON_CODE}>
          <div className="flex gap-2 items-center flex-wrap">
            <Chip icon={<Tag />} color="violet">Label</Chip>
            <Chip icon={<Tag />} color="green" variant="filled">Category</Chip>
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
