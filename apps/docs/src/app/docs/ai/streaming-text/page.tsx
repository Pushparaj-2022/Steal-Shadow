"use client";

import { useState } from "react";
import { StreamingText } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { RotateCcw } from "lucide-react";

const DEMO_TEXT = "Steal Shadow is a motion-first React component library with over 45 accessible, animated components. It's powered by Motion v12 and Tailwind CSS v4, with zero lock-in to any styling approach.";

function StreamingTextDemo() {
  const [key, setKey] = useState(0);
  return (
    <div className="w-full max-w-lg space-y-4">
      <div className="rounded-xl border border-neutral-200 bg-white p-5 min-h-[100px]">
        <StreamingText key={key} text={DEMO_TEXT} speed={22} className="text-sm text-neutral-800 leading-relaxed" />
      </div>
      <button
        onClick={() => setKey(k => k + 1)}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500 text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
      >
        <RotateCcw className="h-4 w-4" />
        Replay
      </button>
    </div>
  );
}

const BASIC_CODE = `import { StreamingText } from "@animui/ui";

export default function Example() {
  return (
    <StreamingText
      text="Steal Shadow is a motion-first React component library..."
      speed={22}
      cursor
      onComplete={() => console.log("Done!")}
    />
  );
}`;

const STREAM_CODE = `"use client";

import { StreamingText } from "@animui/ui";
import { useState } from "react";

export default function Page() {
  const [text, setText] = useState("");

  const handleFetch = async () => {
    const res = await fetch("/api/generate");
    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    setText("");

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      setText((t) => t + decoder.decode(value));
    }
  };

  return (
    <div>
      <StreamingText text={text} speed={0} cursor />
      <button onClick={handleFetch}>Generate</button>
    </div>
  );
}`;

const PROPS = [
  { name: "text", type: "string", default: "—", description: "The full text string to animate. Characters are revealed progressively." },
  { name: "speed", type: "number", default: "18", description: "Milliseconds between each character. Set to 0 to render instantly (for real streaming where text grows externally)." },
  { name: "cursor", type: "boolean", default: "true", description: "Shows a blinking cursor at the end of the displayed text while streaming." },
  { name: "animate", type: "boolean", default: "true", description: "If true, re-animates whenever text changes." },
  { name: "onComplete", type: "() => void", default: "—", description: "Called when all characters have been displayed." },
  { name: "className", type: "string", default: "—", description: "Additional classes on the text container." },
];

export default function StreamingTextPage() {
  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">AI</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Streaming Text</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">StreamingText</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Renders text token by token with configurable speed, smooth cursor animation, and an
          onComplete callback. Perfect for LLM streaming responses.
        </p>
      </div>

      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ StreamingText }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Live preview</h2>
        <ComponentPreview code={BASIC_CODE}>
          <StreamingTextDemo />
        </ComponentPreview>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">With real streaming API</h2>
        <p className="text-neutral-500 mb-4">
          Set <code className="font-mono text-xs bg-neutral-100 px-1 rounded">speed=0</code> when appending
          tokens externally from a ReadableStream — StreamingText will render each update immediately
          without adding additional delay.
        </p>
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <pre className="bg-neutral-950 p-5 overflow-x-auto text-sm font-mono text-neutral-200 leading-relaxed">{STREAM_CODE}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>
    </div>
  );
}
