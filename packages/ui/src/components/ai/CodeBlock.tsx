"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
  copyable?: boolean;
  highlightLines?: number[];
  theme?: "dark" | "light";
}

const KEYWORDS = /\b(import|export|from|const|let|var|function|return|if|else|for|while|class|extends|new|typeof|async|await|try|catch|throw|type|interface|enum|default|null|undefined|true|false|void|in|of|switch|case|break|continue|yield|static|public|private|protected|readonly|abstract)\b/g;
const STRINGS = /(["'`])(?:(?!\1)[^\\]|\\[\s\S])*\1/g;
const COMMENTS = /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm;
const NUMBERS = /\b(\d+\.?\d*)\b/g;
const FUNCTIONS = /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g;
const TYPES = /\b([A-Z][a-zA-Z0-9]*)\b/g;
const JSX_TAG = /<\/?[A-Z][a-zA-Z]*|<\/?[a-z][a-zA-Z]*/g;

function highlight(code: string, lang: string): string {
  if (!["js", "jsx", "ts", "tsx", "javascript", "typescript"].includes(lang)) {
    return escapeHtml(code);
  }

  const tokens: Array<[number, number, string]> = [];

  function addTokens(regex: RegExp, cls: string) {
    let m: RegExpExecArray | null;
    regex.lastIndex = 0;
    while ((m = regex.exec(code)) !== null) {
      tokens.push([m.index, m.index + m[0].length, cls]);
    }
  }

  addTokens(STRINGS, "str");
  addTokens(COMMENTS, "cmt");
  addTokens(KEYWORDS, "kw");
  addTokens(NUMBERS, "num");
  addTokens(FUNCTIONS, "fn");
  addTokens(TYPES, "typ");

  tokens.sort((a, b) => a[0] - b[0]);

  const merged: Array<[number, number, string]> = [];
  let last = 0;
  for (const [s, e, cls] of tokens) {
    if (s < last) continue;
    merged.push([s, e, cls]);
    last = e;
  }

  let result = "";
  let pos = 0;
  const colorMap: Record<string, string> = {
    kw: "color:#c678dd",
    str: "color:#98c379",
    cmt: "color:#5c6370;font-style:italic",
    num: "color:#d19a66",
    fn: "color:#61afef",
    typ: "color:#e5c07b",
  };

  for (const [s, e, cls] of merged) {
    result += escapeHtml(code.slice(pos, s));
    result += `<span style="${colorMap[cls]}">${escapeHtml(code.slice(s, e))}</span>`;
    pos = e;
  }
  result += escapeHtml(code.slice(pos));
  return result;
}

function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const langLabels: Record<string, string> = {
  js: "JavaScript", jsx: "JSX", ts: "TypeScript", tsx: "TSX",
  python: "Python", bash: "Bash", sh: "Shell", json: "JSON",
  css: "CSS", html: "HTML", sql: "SQL", rust: "Rust", go: "Go",
};

export function CodeBlock({
  code,
  language = "tsx",
  filename,
  showLineNumbers = true,
  className,
  copyable = true,
  highlightLines = [],
  theme = "dark",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const lines = code.split("\n");
  const highlighted = language
    ? lines.map((l) => highlight(l, language))
    : lines.map(escapeHtml);

  const isDark = theme === "dark";

  return (
    <div className={cn(
      "rounded-2xl overflow-hidden border text-sm font-mono",
      isDark ? "bg-[#1e1e2e] border-[#313244]" : "bg-neutral-50 border-neutral-200",
      className
    )}>
      {/* Header */}
      <div className={cn(
        "flex items-center justify-between px-4 py-2.5 border-b",
        isDark ? "border-[#313244] bg-[#181825]" : "border-neutral-200 bg-white"
      )}>
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex gap-1.5 shrink-0">
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <span key={c} className="h-3 w-3 rounded-full" style={{ background: c }} />
            ))}
          </div>
          {filename && (
            <span className={cn("text-xs truncate min-w-0", isDark ? "text-[#6c7086]" : "text-neutral-500")}>{filename}</span>
          )}
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className={cn("text-xs px-2 py-0.5 rounded-md", isDark ? "bg-[#313244] text-[#cdd6f4]" : "bg-neutral-100 text-neutral-500")}>
            {langLabels[language] ?? language}
          </span>
          {copyable && (
            <button
              onClick={copy}
              aria-label="Copy code"
              className={cn(
                "rounded-lg px-2.5 py-1 text-xs font-medium flex items-center gap-1.5 transition-colors",
                isDark
                  ? "bg-[#313244] text-[#cdd6f4] hover:bg-[#45475a]"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              )}
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span key="done" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-emerald-400 flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    Copied
                  </motion.span>
                ) : (
                  <motion.span key="copy" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-1">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          )}
        </div>
      </div>

      {/* Code */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {highlighted.map((line, i) => {
              const lineNum = i + 1;
              const isHighlighted = highlightLines.includes(lineNum);
              return (
                <tr
                  key={i}
                  className={cn(isHighlighted && (isDark ? "bg-violet-900/20" : "bg-violet-50"))}
                >
                  {showLineNumbers && (
                    <td
                      className={cn(
                        "select-none text-right px-4 py-0 text-xs leading-6 w-[1%] whitespace-nowrap",
                        isDark ? "text-[#6c7086]" : "text-neutral-400",
                        isHighlighted && "text-violet-400"
                      )}
                    >
                      {lineNum}
                    </td>
                  )}
                  <td className={cn("px-4 py-0 leading-6 whitespace-pre", isDark ? "text-[#cdd6f4]" : "text-neutral-800")}>
                    <span dangerouslySetInnerHTML={{ __html: line || " " }} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
