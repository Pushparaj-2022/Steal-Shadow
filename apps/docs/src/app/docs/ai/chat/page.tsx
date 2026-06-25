"use client";

import { useState } from "react";
import { Chat } from "@animui/ui";
import type { ChatMessage } from "@animui/ui";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";

// ── Live demo ─────────────────────────────────────────────────────────────────
const SEED_MESSAGES: ChatMessage[] = [
  { id: "1", role: "assistant", content: "Hello! I'm your AI assistant. How can I help you today?" },
  { id: "2", role: "user", content: "Can you show me an example of the Chat component?" },
  { id: "3", role: "assistant", content: "Of course! This is the Chat component from Steal Shadow. It supports user and assistant messages, a textarea input, streaming responses, and is styled for both light and dark mode." },
];

function ChatDemo() {
  const [messages, setMessages] = useState<ChatMessage[]>(SEED_MESSAGES);
  const [loading, setLoading] = useState(false);

  function handleSend(text: string) {
    const userMsg: ChatMessage = { id: Date.now().toString(), role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Thanks for your message! In a real implementation, this response would stream in token by token from your LLM API.",
        },
      ]);
      setLoading(false);
    }, 1200);
  }

  return (
    <div className="w-full max-w-lg h-[480px] flex flex-col">
      <Chat
        messages={messages}
        onSend={handleSend}
        loading={loading}
        assistantName="AI Assistant"
        className="flex-1"
      />
    </div>
  );
}

// ── Code examples ─────────────────────────────────────────────────────────────
const BASIC_CODE = `"use client";

import { useState } from "react";
import { Chat } from "@animui/ui";
import type { ChatMessage } from "@animui/ui";

export default function Page() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSend(text: string) {
    setMessages((prev) => [...prev, { id: Date.now().toString(), role: "user", content: text }]);
    setLoading(true);
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: text }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setMessages((prev) => [...prev, { id: (Date.now() + 1).toString(), role: "assistant", content: data.reply }]);
    setLoading(false);
  }

  return (
    <div className="h-[600px] flex flex-col">
      <Chat
        messages={messages}
        onSend={handleSend}
        loading={loading}
        assistantName="AI Assistant"
        className="flex-1"
      />
    </div>
  );
}`;

const STREAMING_CODE = `"use client";

import { useState } from "react";
import { Chat } from "@animui/ui";
import type { ChatMessage } from "@animui/ui";

export default function Page() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleSend(text: string) {
    const userMsg: ChatMessage = { id: Date.now().toString(), role: "user", content: text };
    const assistantId = (Date.now() + 1).toString();
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: text }),
      headers: { "Content-Type": "application/json" },
    });

    const reader = res.body!.getReader();
    const decoder = new TextDecoder();
    let accumulated = "";

    setLoading(false);
    setMessages((prev) => [...prev, { id: assistantId, role: "assistant", content: "", streaming: true }]);

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      accumulated += decoder.decode(value, { stream: true });
      setMessages((prev) =>
        prev.map((m) => m.id === assistantId ? { ...m, content: accumulated } : m)
      );
    }

    setMessages((prev) =>
      prev.map((m) => m.id === assistantId ? { ...m, streaming: false } : m)
    );
  }

  return (
    <div className="h-[600px] flex flex-col">
      <Chat
        messages={messages}
        onSend={handleSend}
        loading={loading}
        assistantName="AI Assistant"
        className="flex-1"
      />
    </div>
  );
}`;

const PROPS = [
  { name: "messages", type: "ChatMessage[]", default: "—", description: "Controlled list of messages. Each message has id, role ('user' | 'assistant' | 'system' | 'tool'), and content." },
  { name: "onSend", type: "(message: string) => void", default: "—", description: "Called when the user submits a message. Update messages state in this callback." },
  { name: "loading", type: "boolean", default: "false", description: "When true, shows an animated typing-dots indicator as the last message." },
  { name: "disabled", type: "boolean", default: "false", description: "Disables the input and send button." },
  { name: "placeholder", type: "string", default: '"Send a message…"', description: "Placeholder text for the message textarea." },
  { name: "assistantName", type: "string", default: '"Assistant"', description: "Display name shown next to assistant messages." },
  { name: "assistantAvatar", type: "React.ReactNode", default: "—", description: "Custom avatar element rendered next to assistant messages." },
  { name: "userAvatar", type: "React.ReactNode", default: "—", description: "Custom avatar element rendered next to user messages." },
  { name: "renderMessage", type: "(msg: ChatMessage) => React.ReactNode", default: "—", description: "Override the default message renderer for custom markdown, code blocks, etc." },
  { name: "suggestions", type: "string[]", default: "[]", description: "Suggestion chips shown when there are no messages yet." },
  { name: "inputFooter", type: "React.ReactNode", default: "—", description: "Extra content rendered below the input (e.g. model selector, disclaimer)." },
  { name: "className", type: "string", default: "—", description: "Additional classes applied to the outer chat container." },
];

export default function ChatDocsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">AI</span>
          <span className="text-neutral-300">/</span>
          <span className="text-xs font-semibold text-blue-600">Chat</span>
        </div>
        <h1 className="text-4xl font-black text-neutral-900 tracking-tight mb-4">Chat</h1>
        <p className="text-lg text-neutral-500 leading-relaxed max-w-2xl">
          A production-ready conversational chat UI with streaming support, typing indicators,
          and a clean message layout for user and assistant roles. Wire it up to any LLM API.
        </p>
      </div>

      {/* Import */}
      <div className="rounded-xl bg-neutral-950 px-5 py-4">
        <code className="text-sm font-mono text-green-400">
          import {"{ Chat }"} from <span className="text-blue-400">"@animui/ui"</span>
        </code>
      </div>

      {/* Basic usage */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic usage</h2>
        <p className="text-neutral-500 mb-4">
          Live demo below — type a message and press Enter or click Send.
        </p>
        <ComponentPreview code={BASIC_CODE}>
          <ChatDemo />
        </ComponentPreview>
      </section>

      {/* Streaming */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Streaming mode</h2>
        <p className="text-neutral-500 mb-4">
          Set <code className="font-mono text-xs bg-neutral-100 px-1 rounded">streaming: true</code> on
          a message to render it with the <code className="font-mono text-xs bg-neutral-100 px-1 rounded">StreamingText</code> component.
          Append tokens to <code className="font-mono text-xs bg-neutral-100 px-1 rounded">content</code> as they arrive from
          your ReadableStream, then set <code className="font-mono text-xs bg-neutral-100 px-1 rounded">streaming: false</code> when done.
        </p>
        <ComponentPreview code={STREAMING_CODE}>
          <div className="px-4 py-3 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-700 font-medium">
            Streaming mode renders tokens as they arrive — no additional state management needed beyond appending to content.
          </div>
        </ComponentPreview>
      </section>

      {/* Props */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">Props</h2>
        <PropsTable props={PROPS} />
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Accessibility</h2>
        <ul className="space-y-2 text-sm text-neutral-600">
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Message list uses <code className="font-mono text-xs bg-neutral-100 px-1 rounded">role="log"</code> and{" "}
            <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-live="polite"</code> — screen readers announce new messages.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Send button has <code className="font-mono text-xs bg-neutral-100 px-1 rounded">aria-label="Send message"</code>.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 font-bold shrink-0">✓</span>
            Fully keyboard-navigable: Tab to textarea, Enter to send, Shift+Enter for newline.
          </li>
        </ul>
      </section>
    </div>
  );
}
