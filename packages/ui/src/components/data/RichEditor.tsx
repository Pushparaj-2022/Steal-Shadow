"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../../lib/utils";

interface RichEditorProps {
  onChange?: (html: string) => void;
  value?: string;
  placeholder?: string;
  className?: string;
}

type FormatCommand =
  | "bold"
  | "italic"
  | "underline"
  | "strikeThrough"
  | "insertOrderedList"
  | "insertUnorderedList";

interface ToolbarButton {
  command: FormatCommand;
  label: string;
  title: string;
  icon: React.ReactNode;
}

const BoldIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <text x="2" y="11" fontFamily="serif" fontSize="13" fontWeight="900" fill="currentColor">B</text>
  </svg>
);

const ItalicIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <text x="4" y="11" fontFamily="serif" fontSize="13" fontStyle="italic" fill="currentColor">I</text>
  </svg>
);

const UnderlineIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <text x="3" y="10" fontFamily="serif" fontSize="11" textDecoration="underline" fill="currentColor">U</text>
    <line x1="2" y1="13" x2="12" y2="13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const StrikethroughIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <text x="3" y="10" fontFamily="serif" fontSize="11" fill="currentColor">S</text>
    <line x1="1" y1="7" x2="13" y2="7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const OLIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <text x="0" y="5" fontSize="4" fill="currentColor">1.</text>
    <line x1="5" y1="3.5" x2="13" y2="3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <text x="0" y="9" fontSize="4" fill="currentColor">2.</text>
    <line x1="5" y1="7.5" x2="13" y2="7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <text x="0" y="13" fontSize="4" fill="currentColor">3.</text>
    <line x1="5" y1="11.5" x2="13" y2="11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const ULIcon = (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <circle cx="2" cy="3.5" r="1" fill="currentColor" />
    <line x1="5" y1="3.5" x2="13" y2="3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="2" cy="7.5" r="1" fill="currentColor" />
    <line x1="5" y1="7.5" x2="13" y2="7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="2" cy="11.5" r="1" fill="currentColor" />
    <line x1="5" y1="11.5" x2="13" y2="11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const TOOLBAR_BUTTONS: ToolbarButton[] = [
  { command: "bold", label: "Bold", title: "Bold (Ctrl+B)", icon: BoldIcon },
  { command: "italic", label: "Italic", title: "Italic (Ctrl+I)", icon: ItalicIcon },
  { command: "underline", label: "Underline", title: "Underline (Ctrl+U)", icon: UnderlineIcon },
  { command: "strikeThrough", label: "Strikethrough", title: "Strikethrough", icon: StrikethroughIcon },
  { command: "insertOrderedList", label: "Ordered List", title: "Ordered List", icon: OLIcon },
  { command: "insertUnorderedList", label: "Unordered List", title: "Unordered List", icon: ULIcon },
];

function isCommandActive(command: FormatCommand): boolean {
  try {
    return document.queryCommandState(command);
  } catch {
    return false;
  }
}

export function RichEditor({ onChange, value, placeholder = "Start typing…", className }: RichEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null);
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [activeCommands, setActiveCommands] = useState<Set<FormatCommand>>(new Set());

  // Sync initial value
  useEffect(() => {
    const el = editorRef.current;
    if (!el) return;
    if (value !== undefined && el.innerHTML !== value) {
      el.innerHTML = value;
      setIsEmpty(value === "" || value === "<br>");
    }
  }, [value]);

  const updateActiveCommands = useCallback(() => {
    const next = new Set<FormatCommand>();
    for (const btn of TOOLBAR_BUTTONS) {
      if (isCommandActive(btn.command)) next.add(btn.command);
    }
    setActiveCommands(next);
  }, []);

  const execFormat = useCallback((command: FormatCommand) => {
    const el = editorRef.current;
    if (!el) return;

    // Restore focus so execCommand works
    el.focus();

    // eslint-disable-next-line @typescript-eslint/no-deprecated
    document.execCommand(command, false);

    updateActiveCommands();
    onChange?.(el.innerHTML);

    const text = el.innerText.trim();
    setIsEmpty(text === "" && el.innerHTML === "");
  }, [onChange, updateActiveCommands]);

  const handleInput = useCallback(() => {
    const el = editorRef.current;
    if (!el) return;
    const text = el.innerText.trim();
    const html = el.innerHTML;
    const empty = text === "" && (html === "" || html === "<br>");
    setIsEmpty(empty);
    updateActiveCommands();
    onChange?.(html);
  }, [onChange, updateActiveCommands]);

  const handleKeyUp = useCallback(() => {
    updateActiveCommands();
  }, [updateActiveCommands]);

  const handleMouseUp = useCallback(() => {
    updateActiveCommands();
  }, [updateActiveCommands]);

  const handlePaste = useCallback((e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    // eslint-disable-next-line @typescript-eslint/no-deprecated
    document.execCommand("insertText", false, text);
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm focus-within:ring-2 focus-within:ring-violet-500 dark:border-zinc-700 dark:bg-zinc-900",
        className
      )}
    >
      {/* Toolbar */}
      <div className="flex items-center gap-0.5 border-b border-zinc-200 bg-zinc-50 px-2 py-1.5 dark:border-zinc-700 dark:bg-zinc-800">
        {TOOLBAR_BUTTONS.map((btn, idx) => {
          const isActive = activeCommands.has(btn.command);
          const isSeparatorBefore = idx === 4; // visual gap before list buttons

          return (
            <div key={btn.command} className={cn("flex items-center", isSeparatorBefore && "ml-2 border-l border-zinc-300 pl-2 dark:border-zinc-600")}>
              <button
                type="button"
                title={btn.title}
                aria-label={btn.label}
                aria-pressed={isActive}
                onMouseDown={(e) => {
                  e.preventDefault(); // prevent editor losing focus
                  execFormat(btn.command);
                }}
                className={cn(
                  "flex h-7 w-7 items-center justify-center rounded-md transition-colors",
                  isActive
                    ? "bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300"
                    : "text-zinc-500 hover:bg-zinc-200 hover:text-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-100"
                )}
              >
                {btn.icon}
              </button>
            </div>
          );
        })}
      </div>

      {/* Editor area */}
      <div className="relative flex-1">
        {/* Placeholder */}
        {isEmpty && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-3 text-sm text-zinc-400 dark:text-zinc-500"
          >
            {placeholder}
          </span>
        )}

        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          role="textbox"
          aria-multiline="true"
          aria-label="Rich text editor"
          onInput={handleInput}
          onKeyUp={handleKeyUp}
          onMouseUp={handleMouseUp}
          onPaste={handlePaste}
          className={cn(
            "min-h-32 w-full px-3 py-3 text-sm text-zinc-800 outline-none dark:text-zinc-100",
            "[&_ol]:ml-5 [&_ol]:list-decimal",
            "[&_ul]:ml-5 [&_ul]:list-disc",
            "[&_b]:font-bold [&_strong]:font-bold",
            "[&_i]:italic [&_em]:italic",
            "[&_u]:underline",
            "[&_s]:line-through [&_strike]:line-through"
          )}
        />
      </div>
    </div>
  );
}
