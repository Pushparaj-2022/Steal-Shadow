"use client";

import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

// ── Token types ────────────────────────────────────────────────────────────

type TokenType = "comment" | "keyword" | "string" | "tag" | "attr" | "punct" | "npm" | "plain";

interface Token {
  type: TokenType;
  text: string;
}

const KEYWORD_RE = /\b(import|export|from|function|return|const|let|var|default|async|await)\b/g;
const STRING_RE = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g;
const JSX_OPEN_RE = /(<\/?[A-Z][a-zA-Z.]*)/g;
const JSX_CLOSE_RE = /(\/?>)/g;

function tokenizeLine(line: string): Token[] {
  // Full-line comment
  if (/^\s*\/\//.test(line)) {
    return [{ type: "comment", text: line }];
  }

  // npm command
  if (/^\s*npm /.test(line)) {
    return [{ type: "npm", text: line }];
  }

  // Build a combined regex that matches in priority order
  const COMBINED = new RegExp(
    [
      STRING_RE.source,       // 1 string
      JSX_OPEN_RE.source,     // 2 jsx open tag
      JSX_CLOSE_RE.source,    // 3 jsx close />
      KEYWORD_RE.source,      // 4 keyword
    ].join("|"),
    "g"
  );

  const tokens: Token[] = [];
  let lastIdx = 0;
  let m: RegExpExecArray | null;

  while ((m = COMBINED.exec(line)) !== null) {
    if (m.index > lastIdx) {
      tokens.push({ type: "plain", text: line.slice(lastIdx, m.index) });
    }
    const [full, str, jsxOpen, jsxClose, kw] = m;
    if (str)      tokens.push({ type: "string",  text: full });
    else if (jsxOpen)  tokens.push({ type: "tag",     text: full });
    else if (jsxClose) tokens.push({ type: "punct",   text: full });
    else if (kw)  tokens.push({ type: "keyword", text: full });
    lastIdx = m.index + full.length;
  }

  if (lastIdx < line.length) {
    tokens.push({ type: "plain", text: line.slice(lastIdx) });
  }

  return tokens;
}

const TOKEN_CLASS: Record<TokenType, string> = {
  comment: "text-zinc-500 italic",
  keyword: "text-violet-400",
  string:  "text-emerald-400",
  tag:     "text-sky-400",
  attr:    "text-amber-400",
  punct:   "text-zinc-500",
  npm:     "text-green-400",
  plain:   "text-zinc-200",
};

// ── Component ──────────────────────────────────────────────────────────────

interface CodeBlockProps {
  code: string;
  label?: string;
  language?: string;
  showLineNumbers?: boolean;
}

export function CodeBlock({
  code,
  label = "code",
  showLineNumbers = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const lines = code.split("\n");

  return (
    <div className="group rounded-2xl border border-zinc-800 bg-zinc-950 overflow-hidden shadow-2xl shadow-black/20">

      {/* ── Header bar ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/60">
        <div className="flex items-center gap-3">
          {/* Traffic-light dots */}
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
            <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
            <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-[11px] font-medium text-zinc-500 font-mono tracking-wide">
            {label}
          </span>
        </div>

        {/* Copy button */}
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-semibold text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800 transition-all duration-150"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check size={12} className="text-green-400 shrink-0" />
              <span className="text-green-400">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={12} className="shrink-0" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* ── Code area ──────────────────────────────────────────────────── */}
      <div className="overflow-x-auto">
        <pre className="p-5 text-[13px] font-mono leading-[1.8] min-w-0">
          {lines.map((line, i) => {
            const tokens = tokenizeLine(line);
            return (
              <div key={i} className="flex hover:bg-white/[0.02] transition-colors rounded-sm px-1 -mx-1">
                {showLineNumbers && (
                  <span
                    className="select-none shrink-0 text-right pr-5 text-zinc-700 tabular-nums"
                    style={{ minWidth: "2.5rem" }}
                  >
                    {i + 1}
                  </span>
                )}
                <span className="flex-1 whitespace-pre">
                  {tokens.map((tok, j) => (
                    <span key={j} className={TOKEN_CLASS[tok.type]}>
                      {tok.text}
                    </span>
                  ))}
                </span>
              </div>
            );
          })}
        </pre>
      </div>
    </div>
  );
}
