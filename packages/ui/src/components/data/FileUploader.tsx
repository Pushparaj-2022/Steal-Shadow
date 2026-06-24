"use client";

import { useCallback, useId, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../lib/utils";

export interface UploadedFile {
  file: File;
  preview?: string;
  id: string;
  progress?: number;
  error?: string;
  status: "pending" | "uploading" | "done" | "error";
}

interface FileUploaderProps {
  onFiles: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  maxSize?: number;
  maxFiles?: number;
  className?: string;
  disabled?: boolean;
  value?: UploadedFile[];
  onRemove?: (id: string) => void;
  label?: string;
  description?: string;
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

const IMAGE_TYPES = ["image/png", "image/jpeg", "image/gif", "image/webp", "image/svg+xml"];

export function FileUploader({
  onFiles,
  accept,
  multiple = true,
  maxSize,
  maxFiles,
  className,
  disabled,
  value = [],
  onRemove,
  label = "Drop files here or click to upload",
  description,
}: FileUploaderProps) {
  const id = useId();
  const [dragging, setDragging] = useState(false);
  const [dragError, setDragError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const validate = useCallback((files: File[]): { valid: File[]; error?: string } => {
    if (maxFiles && value.length + files.length > maxFiles) {
      return { valid: [], error: `Maximum ${maxFiles} files allowed.` };
    }
    const tooBig = files.filter((f) => maxSize && f.size > maxSize);
    if (tooBig.length) {
      return { valid: [], error: `File too large. Max size: ${formatBytes(maxSize!)}` };
    }
    return { valid: files };
  }, [maxSize, maxFiles, value.length]);

  function processFiles(files: File[]) {
    setDragError(null);
    const { valid, error } = validate(files);
    if (error) { setDragError(error); return; }
    if (valid.length) onFiles(valid);
  }

  function onDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragging(false);
    const files = Array.from(e.dataTransfer.files);
    processFiles(multiple ? files : files.slice(0, 1));
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? []);
    processFiles(files);
    e.target.value = "";
  }

  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <label
        htmlFor={id}
        onDragOver={(e) => { e.preventDefault(); if (!disabled) setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={disabled ? undefined : onDrop}
        className={cn(
          "relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center cursor-pointer transition-colors",
          dragging
            ? "border-violet-500 bg-violet-50"
            : "border-neutral-200 bg-neutral-50 hover:border-violet-300 hover:bg-violet-50/30",
          disabled && "opacity-50 cursor-not-allowed hover:border-neutral-200 hover:bg-neutral-50",
          dragError && "border-red-300 bg-red-50/30"
        )}
      >
        <input
          id={id}
          ref={inputRef}
          type="file"
          className="sr-only"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={onInputChange}
          aria-label={label}
        />
        <motion.div
          animate={{ scale: dragging ? 1.05 : 1, y: dragging ? -4 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="flex flex-col items-center gap-3"
        >
          <div className={cn(
            "h-12 w-12 rounded-2xl flex items-center justify-center transition-colors",
            dragging ? "bg-violet-100 text-violet-600" : "bg-neutral-100 text-neutral-400"
          )}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-neutral-700">{label}</p>
            <p className="text-xs text-neutral-400 mt-1">
              {(description ?? ([
                accept && `Accepted: ${accept}`,
                maxSize && `Max size: ${formatBytes(maxSize)}`,
                maxFiles && `Max files: ${maxFiles}`,
              ].filter(Boolean).join(" · "))) || "Any file type"}
            </p>
          </div>
        </motion.div>
        <AnimatePresence>
          {dragging && (
            <motion.div
              className="absolute inset-0 rounded-2xl bg-violet-500/5 border-2 border-violet-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </AnimatePresence>
      </label>

      <AnimatePresence>
        {dragError && (
          <motion.p
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-xs text-red-500 flex items-center gap-1"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v4m0 4h.01M12 3a9 9 0 100 18A9 9 0 0012 3z" />
            </svg>
            {dragError}
          </motion.p>
        )}
      </AnimatePresence>

      {value.length > 0 && (
        <ul className="flex flex-col gap-2" aria-label="Uploaded files">
          <AnimatePresence initial={false}>
            {value.map((f) => (
              <motion.li
                key={f.id}
                layout
                initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-3"
              >
                {IMAGE_TYPES.includes(f.file.type) && f.preview ? (
                  <img src={f.preview} alt={f.file.name} className="h-10 w-10 rounded-lg object-cover shrink-0" />
                ) : (
                  <div className="h-10 w-10 rounded-lg bg-neutral-100 flex items-center justify-center shrink-0">
                    <svg className="h-5 w-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-neutral-800 truncate">{f.file.name}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs text-neutral-400">{formatBytes(f.file.size)}</span>
                    {f.status === "done" && <span className="text-xs text-emerald-600 font-medium">Uploaded</span>}
                    {f.status === "error" && <span className="text-xs text-red-500">{f.error ?? "Upload failed"}</span>}
                  </div>
                  {f.status === "uploading" && typeof f.progress === "number" && (
                    <div className="mt-1.5 h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-violet-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${f.progress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  )}
                </div>
                {onRemove && (
                  <button
                    onClick={() => onRemove(f.id)}
                    aria-label={`Remove ${f.file.name}`}
                    className="shrink-0 rounded-lg p-1 text-neutral-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}
    </div>
  );
}
