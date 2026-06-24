import Link from "next/link";
import { ChevronRight, MessageSquare, Code2, Zap } from "lucide-react";

const AI_COMPONENTS = [
  {
    title: "Chat",
    desc: "A full-featured chat interface with user and assistant message bubbles, typing indicators, streaming support, and dark-mode-friendly design. Drop it into any AI product.",
    href: "/docs/ai/chat",
    Icon: MessageSquare,
    color: "text-blue-500",
    bg: "bg-blue-50",
    tag: "Conversational",
  },
  {
    title: "Code Block",
    desc: "Syntax-highlighted code display with language detection, line numbers, and a copy-to-clipboard button. Designed for rendering LLM-generated code in AI interfaces.",
    href: "/docs/ai/code-block",
    Icon: Code2,
    color: "text-emerald-500",
    bg: "bg-emerald-50",
    tag: "Display",
  },
  {
    title: "Streaming Text",
    desc: "Renders text token by token with configurable speed, smooth cursor animation, and an onComplete callback. Ideal for streaming LLM responses in real time.",
    href: "/docs/ai/streaming-text",
    Icon: Zap,
    color: "text-amber-500",
    bg: "bg-amber-50",
    tag: "Animation",
  },
];

export default function AIOverviewPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">AI Components</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          Production-ready React components built specifically for AI products. Chat interfaces,
          streaming text renderers, and code blocks designed to work seamlessly with LLM APIs
          like OpenAI, Anthropic, and open-source models.
        </p>
      </div>

      {/* Philosophy block */}
      <div className="grid sm:grid-cols-3 gap-4">
        {[
          { title: "Streaming-first", desc: "Every component handles token-by-token streaming without layout shifts." },
          { title: "Model-agnostic", desc: "No assumptions about your LLM provider. Wire up any streaming API." },
          { title: "Dark mode ready", desc: "Chat and code block look great in dark mode — no extra config." },
        ].map((p) => (
          <div key={p.title} className="rounded-xl border border-neutral-200 p-4">
            <h3 className="font-bold text-neutral-900 text-sm mb-1">{p.title}</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Component grid */}
      <div className="space-y-4">
        {AI_COMPONENTS.map((comp) => (
          <Link
            key={comp.title}
            href={comp.href}
            className="group flex items-start gap-5 rounded-xl border border-neutral-200 p-6 hover:border-blue-200 hover:shadow-md transition-all"
          >
            <div className={`h-12 w-12 rounded-xl ${comp.bg} flex items-center justify-center shrink-0`}>
              <comp.Icon className={`h-6 w-6 ${comp.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="font-bold text-neutral-900 group-hover:text-blue-700 transition-colors">
                  {comp.title}
                </h2>
                <span className="text-xs font-medium text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
                  {comp.tag}
                </span>
              </div>
              <p className="text-sm text-neutral-500 leading-relaxed">{comp.desc}</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-medium text-blue-500">
                View docs <ChevronRight className="h-3.5 w-3.5" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick setup */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Wiring up a streaming response</h2>
        <p className="text-neutral-500 mb-4 text-sm leading-relaxed">
          The AI components are designed to work with the Web Streams API. Here's how to connect
          them to a standard Next.js Route Handler that streams an LLM response:
        </p>
        <div className="rounded-xl border border-neutral-200 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2 border-b border-neutral-200 bg-neutral-50">
            <span className="text-xs font-mono text-neutral-500">app/api/chat/route.ts</span>
          </div>
          <pre className="bg-neutral-950 p-5 overflow-x-auto text-sm font-mono text-neutral-200 leading-relaxed">{`import { StreamingText } from "@stealshadow/ui";

// In your component
const [text, setText] = useState("");

const handleStream = async () => {
  const res = await fetch("/api/chat", { method: "POST" });
  const reader = res.body!.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    setText((prev) => prev + decoder.decode(value));
  }
};

// Render the streaming response
<StreamingText text={text} speed={30} showCursor />`}</pre>
        </div>
      </section>
    </div>
  );
}
