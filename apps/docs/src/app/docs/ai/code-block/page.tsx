"use client";

import { CodeBlock } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

const BASIC_CODE = `import { CodeBlock } from "@animui/ui";

export default function Example() {
  return (
    <CodeBlock
      language="tsx"
      code={\`import { Button } from "@animui/ui";

export default function Page() {
  return <Button variant="default">Click me</Button>;
}\`}
      showLineNumbers
      filename="page.tsx"
    />
  );
}`;

const PROPS = [
  { name: "code", type: "string", default: "—", description: "The code string to display." },
  { name: "language", type: "string", default: '"tsx"', description: "Language identifier for syntax highlighting (tsx, ts, js, python, bash, etc.)." },
  { name: "showLineNumbers", type: "boolean", default: "true", description: "Shows line numbers in a left gutter." },
  { name: "filename", type: "string", default: "—", description: "Filename displayed in the top bar of the code block." },
  { name: "copyable", type: "boolean", default: "true", description: "Shows a copy-to-clipboard button." },
  { name: "theme", type: '"dark" | "light"', default: '"dark"', description: "Color scheme of the code block." },
  { name: "highlightLines", type: "number[]", default: "[]", description: "Array of line numbers to highlight." },
  { name: "className", type: "string", default: "—", description: "Additional classes on the outer wrapper." },
];

const SAMPLE_CODE = `import { Button } from "@animui/ui";

export default function Page() {
  return <Button variant="default">Click me</Button>;
}`;

export default function CodeBlockPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">AI</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Code Block</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">CodeBlock</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Syntax-highlighted code display with language detection, line numbers, filename label,
          and copy-to-clipboard. Designed for rendering LLM-generated code in AI chat interfaces.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ CodeBlock }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Preview</h2>
        <ComponentPreview code={BASIC_CODE}>
          <div className="w-full max-w-lg">
            <CodeBlock
              language="tsx"
              code={SAMPLE_CODE}
              showLineNumbers
              filename="page.tsx"
            />
          </div>
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">In AI chat contexts</h2>
        <p className="text-sm text-neutral-600 leading-relaxed mb-3">
          When rendering markdown from an LLM response, pass CodeBlock to your markdown renderer's
          code component override. It automatically detects the language from the fenced code block syntax.
        </p>
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <pre className="bg-neutral-950 p-5 overflow-x-auto text-sm font-mono text-neutral-200 leading-relaxed">{`import { CodeBlock } from "@animui/ui";
import Markdown from "react-markdown";

<Markdown
  components={{
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\\w+)/.exec(className || "");
      return !inline && match ? (
        <CodeBlock
          language={match[1]}
          code={String(children).replace(/\\n$/, "")}
          showLineNumbers
        />
      ) : (
        <code className={className} {...props}>{children}</code>
      );
    },
  }}
>
  {markdownContent}
</Markdown>`}</pre>
        </div>
      </section>
    </div>
  );
}
