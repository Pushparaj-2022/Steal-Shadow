"use client";

import { useState } from "react";
import { IcCopy, IcCheck } from "@/components/icons";

interface ComponentPreviewProps {
  children: React.ReactNode;
  code: string;
}

export function ComponentPreview({ children, code }: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl border border-neutral-200 overflow-hidden">
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b border-neutral-200 bg-neutral-50 px-4">
        <div className="flex">
          {(["preview", "code"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-3 text-sm font-medium capitalize border-b-2 transition-colors ${
                tab === t
                  ? "border-blue-500 text-blue-700"
                  : "border-transparent text-neutral-500 hover:text-neutral-800"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
        {tab === "code" && (
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-neutral-500 hover:text-neutral-800 transition-colors py-1.5 px-2 rounded-md hover:bg-neutral-100"
          >
            {copied ? (
              <>
                <IcCheck className="h-3.5 w-3.5 text-green-500" />
                <span className="text-green-600">Copied</span>
              </>
            ) : (
              <>
                <IcCopy className="h-3.5 w-3.5" />
                Copy
              </>
            )}
          </button>
        )}
      </div>

      {/* Preview pane */}
      {tab === "preview" && (
        <div className="p-8 flex items-center justify-center min-h-[180px] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
          {children}
        </div>
      )}

      {/* Code pane */}
      {tab === "code" && (
        <div className="relative bg-neutral-950 p-5 overflow-x-auto">
          <pre className="text-sm font-mono text-neutral-200 leading-relaxed whitespace-pre">
            {code}
          </pre>
        </div>
      )}
    </div>
  );
}
