"use client";

import { useState } from "react";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { PropsTable } from "@/components/docs/PropsTable";
import { Send, Bot } from "lucide-react";

// ── Inline Chat preview ───────────────────────────────────────────────────────
interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

const INITIAL_MESSAGES: Message[] = [
  { id: 1, role: "assistant", content: "Hello! I'm your AI assistant. How can I help you today?" },
  { id: 2, role: "user", content: "Can you show me an example of the Chat component?" },
  { id: 3, role: "assistant", content: "Of course! This is the Chat component from Steal Shadow. It supports user and assistant messages, a text input, streaming responses, and is styled for both light and dark mode." },
];

function ChatPreview() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { id: Date.now(), role: "user", content: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: Date.now() + 1, role: "assistant", content: "Thanks for your message! In a real implementation, this response would stream in token by token from your LLM API." },
      ]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="w-full max-w-md rounded-2xl border border-neutral-200 bg-white overflow-hidden shadow-sm">
      {/* Chat header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-neutral-100 bg-neutral-50">
        <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
          <Bot className="h-4 w-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold text-neutral-900">AI Assistant</p>
          <p className="text-xs text-green-500 font-medium">● Online</p>
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-3 h-64 overflow-y-auto">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-2.5 ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "assistant" && (
              <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                <Bot className="h-3.5 w-3.5 text-blue-500" />
              </div>
            )}
            <div
              className={`rounded-2xl px-3.5 py-2.5 text-sm max-w-[78%] leading-relaxed ${
                msg.role === "user"
                  ? "bg-blue-500 text-white rounded-tr-sm"
                  : "bg-neutral-100 text-neutral-800 rounded-tl-sm"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-2.5">
            <div className="h-7 w-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <Bot className="h-3.5 w-3.5 text-blue-500" />
            </div>
            <div className="bg-neutral-100 rounded-2xl rounded-tl-sm px-4 py-3 flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-bounce [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 rounded-full bg-neutral-400 animate-bounce" />
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-3 border-t border-neutral-100">
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type a message..."
            className="flex-1 px-3.5 py-2 rounded-xl border border-neutral-200 text-sm focus:outline-none focus:border-blue-400 bg-white"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="h-9 w-9 rounded-xl bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Code examples ─────────────────────────────────────────────────────────────
const BASIC_CODE = `"use client";

import { Chat } from "@stealshadow/ui";

export default function Page() {
  return (
    <Chat
      initialMessages={[
        {
          id: "1",
          role: "assistant",
          content: "Hello! How can I help you today?",
        },
      ]}
      onSend={async (message) => {
        const res = await fetch("/api/chat", {
          method: "POST",
          body: JSON.stringify({ message }),
        });
        return res.body; // ReadableStream
      }}
    />
  );
}`;

const STREAMING_CODE = `"use client";

import { Chat } from "@stealshadow/ui";

export default function Page() {
  return (
    <Chat
      streaming              // enable streaming token mode
      streamDelay={25}       // ms between tokens (UI rendering speed)
      showTypingIndicator    // animated dots while waiting for first token
      onSend={async (message) => {
        const res = await fetch("/api/chat", {
          method: "POST",
          body: JSON.stringify({ message }),
          headers: { "Content-Type": "application/json" },
        });
        return res.body;
      }}
    />
  );
}`;

const PROPS = [
  { name: "initialMessages", type: "Message[]", default: "[]", description: "Seed messages shown when the chat first renders. Each message has id, role ('user' | 'assistant'), and content." },
  { name: "onSend", type: "(message: string) => Promise<ReadableStream | string>", default: "—", description: "Called when the user submits a message. Return a ReadableStream for streaming or a plain string for instant replies." },
  { name: "streaming", type: "boolean", default: "false", description: "When true, renders assistant responses token by token from the ReadableStream." },
  { name: "streamDelay", type: "number", default: "25", description: "Milliseconds between token renders in streaming mode." },
  { name: "showTypingIndicator", type: "boolean", default: "true", description: "Shows animated dots while waiting for the first token from the stream." },
  { name: "placeholder", type: "string", default: '"Type a message..."', description: "Placeholder text for the message input." },
  { name: "assistantName", type: "string", default: '"Assistant"', description: "Display name shown in the chat header for the AI agent." },
  { name: "assistantAvatar", type: "React.ReactNode", default: "—", description: "Custom avatar element rendered next to assistant messages." },
  { name: "className", type: "string", default: "—", description: "Additional classes applied to the outer chat container." },
  { name: "maxMessages", type: "number", default: "—", description: "Truncates the message list to the most recent N messages to manage context length." },
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
          import {"{ Chat }"} from <span className="text-blue-400">"@stealshadow/ui"</span>
        </code>
      </div>

      {/* Basic usage */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Basic usage</h2>
        <p className="text-neutral-500 mb-4">
          Live demo below — type a message and press Enter or click Send.
        </p>
        <ComponentPreview code={BASIC_CODE}>
          <ChatPreview />
        </ComponentPreview>
      </section>

      {/* Streaming */}
      <section>
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Streaming mode</h2>
        <p className="text-neutral-500 mb-4">
          Enable the <code className="font-mono text-xs bg-neutral-100 px-1 rounded">streaming</code> prop and
          return a <code className="font-mono text-xs bg-neutral-100 px-1 rounded">ReadableStream</code> from{" "}
          <code className="font-mono text-xs bg-neutral-100 px-1 rounded">onSend</code>. The Chat component
          handles the reader loop internally.
        </p>
        <ComponentPreview code={STREAMING_CODE}>
          <div className="px-4 py-3 rounded-xl bg-blue-50 border border-blue-100 text-sm text-blue-700 font-medium">
            Streaming mode renders tokens as they arrive from your API — no additional state management needed.
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
            Fully keyboard-navigable: Tab to input, Enter to send, Escape to cancel.
          </li>
        </ul>
      </section>
    </div>
  );
}
