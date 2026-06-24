"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";
import { StreamingText } from "./StreamingText";

export type MessageRole = "user" | "assistant" | "system" | "tool";

export interface ChatMessage {
  id: string;
  role: MessageRole;
  content: string;
  timestamp?: Date;
  streaming?: boolean;
  error?: boolean;
  toolCalls?: ToolCall[];
}

export interface ToolCall {
  id: string;
  name: string;
  args?: Record<string, unknown>;
  result?: unknown;
  status?: "pending" | "running" | "done" | "error";
}

interface ChatProps {
  messages: ChatMessage[];
  onSend: (message: string) => void;
  loading?: boolean;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  assistantName?: string;
  assistantAvatar?: React.ReactNode;
  userAvatar?: React.ReactNode;
  renderMessage?: (msg: ChatMessage) => React.ReactNode;
  suggestions?: string[];
  inputFooter?: React.ReactNode;
}

export function Chat({
  messages,
  onSend,
  loading,
  placeholder = "Send a message…",
  className,
  disabled,
  assistantName = "Assistant",
  assistantAvatar,
  userAvatar,
  renderMessage,
  suggestions = [],
  inputFooter,
}: ChatProps) {
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || loading || disabled) return;
    setInput("");
    onSend(trimmed);
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  }

  function handleKey(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); handleSend(); }
  }

  function resizeTextarea() {
    const ta = textareaRef.current;
    if (!ta) return;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 160) + "px";
  }

  return (
    <div className={cn("flex flex-col rounded-2xl border border-neutral-200 bg-white overflow-hidden", className)}>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 min-h-0">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center flex-1 py-12 text-neutral-400 gap-3">
            <div className="h-12 w-12 rounded-2xl bg-violet-100 flex items-center justify-center text-violet-500">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <p className="text-sm font-medium">Start a conversation</p>
          </div>
        )}

        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <ChatBubble
              key={msg.id}
              message={msg}
              assistantName={assistantName}
              assistantAvatar={assistantAvatar}
              userAvatar={userAvatar}
              renderMessage={renderMessage}
            />
          ))}
        </AnimatePresence>

        {loading && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex gap-3 items-start"
          >
            <div className="h-8 w-8 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 shrink-0">
              {assistantAvatar ?? <BotIcon />}
            </div>
            <div className="bg-neutral-100 rounded-2xl rounded-tl-sm px-4 py-3">
              <TypingDots />
            </div>
          </motion.div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && messages.length === 0 && (
        <div className="px-4 pb-2 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => onSend(s)}
              disabled={disabled || loading}
              className="text-xs px-3 py-1.5 rounded-full border border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100 transition-colors disabled:opacity-50"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="border-t border-neutral-100 p-3">
        <div className="flex items-end gap-2 rounded-xl border border-neutral-200 bg-neutral-50 px-3 py-2 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-400/20 transition-all">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => { setInput(e.target.value); resizeTextarea(); }}
            onKeyDown={handleKey}
            placeholder={placeholder}
            disabled={disabled || loading}
            rows={1}
            className="flex-1 bg-transparent text-sm text-neutral-900 placeholder:text-neutral-400 resize-none outline-none max-h-40 leading-relaxed disabled:cursor-not-allowed"
            style={{ height: "auto" }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading || disabled}
            aria-label="Send message"
            className={cn(
              "shrink-0 h-8 w-8 rounded-lg flex items-center justify-center transition-all",
              input.trim() && !loading && !disabled
                ? "bg-violet-600 text-white hover:bg-violet-500"
                : "bg-neutral-200 text-neutral-400 cursor-not-allowed"
            )}
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        {inputFooter}
      </div>
    </div>
  );
}

function ChatBubble({
  message,
  assistantName,
  assistantAvatar,
  userAvatar,
  renderMessage,
}: {
  message: ChatMessage;
  assistantName: string;
  assistantAvatar?: React.ReactNode;
  userAvatar?: React.ReactNode;
  renderMessage?: (msg: ChatMessage) => React.ReactNode;
}) {
  const isUser = message.role === "user";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 35 }}
      className={cn("flex gap-3 items-start", isUser && "flex-row-reverse")}
    >
      <div className={cn(
        "h-8 w-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold",
        isUser ? "bg-violet-600 text-white" : "bg-violet-100 text-violet-600"
      )}>
        {isUser ? (userAvatar ?? "U") : (assistantAvatar ?? <BotIcon />)}
      </div>

      <div className={cn("flex flex-col gap-1 max-w-[75%]", isUser && "items-end")}>
        <span className="text-xs text-neutral-400 px-1">
          {isUser ? "You" : assistantName}
          {message.timestamp && ` · ${message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`}
        </span>

        <div className={cn(
          "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
          isUser
            ? "bg-violet-600 text-white rounded-tr-sm"
            : "bg-neutral-100 text-neutral-800 rounded-tl-sm",
          message.error && "bg-red-50 border border-red-200 text-red-700"
        )}>
          {renderMessage ? renderMessage(message) : (
            message.streaming
              ? <StreamingText text={message.content} speed={16} />
              : <span className="whitespace-pre-wrap">{message.content}</span>
          )}
        </div>

        {message.toolCalls?.map((tc) => (
          <ToolCallChip key={tc.id} toolCall={tc} />
        ))}
      </div>
    </motion.div>
  );
}

function ToolCallChip({ toolCall }: { toolCall: ToolCall }) {
  const [expanded, setExpanded] = useState(false);
  const statusColors = {
    pending: "border-neutral-200 bg-neutral-50 text-neutral-500",
    running: "border-violet-200 bg-violet-50 text-violet-600",
    done: "border-emerald-200 bg-emerald-50 text-emerald-700",
    error: "border-red-200 bg-red-50 text-red-600",
  };
  const s = toolCall.status ?? "done";

  return (
    <div className={cn("rounded-xl border text-xs px-3 py-2 max-w-xs", statusColors[s])}>
      <button onClick={() => setExpanded((e) => !e)} className="flex items-center gap-2 w-full text-left">
        {s === "running" ? (
          <motion.span className="h-3 w-3 rounded-full border border-current border-t-transparent" animate={{ rotate: 360 }} transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }} />
        ) : (
          <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
        )}
        <span className="font-medium">{toolCall.name}</span>
        {toolCall.args && <svg className={cn("h-3 w-3 ml-auto transition-transform", expanded && "rotate-180")} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>}
      </button>
      <AnimatePresence>
        {expanded && toolCall.args && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <pre className="mt-2 text-xs font-mono opacity-80 whitespace-pre-wrap break-all">
              {JSON.stringify(toolCall.args, null, 2)}
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-neutral-400"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, delay: i * 0.15, repeat: Infinity }}
        />
      ))}
    </span>
  );
}

function BotIcon() {
  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}
