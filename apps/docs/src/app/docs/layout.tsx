"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { DocsSidebar } from "@/components/docs/DocsSidebar";
import { DocsBreadcrumb } from "@/components/docs/DocsBreadcrumb";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-white text-neutral-900">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar — hidden on mobile, shown on md+ */}
      <div
        className={`fixed inset-y-0 left-0 z-40 md:relative md:flex md:z-auto transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <DocsSidebar />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-16 border-b border-neutral-100 flex items-center px-4 sm:px-8 gap-4 sticky top-0 bg-white z-20">
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-neutral-100 transition-colors"
            onClick={() => setSidebarOpen((o) => !o)}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

          <DocsBreadcrumb />

          <div className="ml-auto flex shrink-0 items-center gap-3">
            <a
              href="https://github.com/Pushparaj-2022/Steal-Shadow"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 border border-neutral-200 px-3 py-1.5 rounded-lg hover:border-neutral-300 transition-colors"
            >
              GitHub
            </a>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 px-4 sm:px-8 py-10 max-w-4xl w-full mx-auto">
          {children}
        </main>

        {/* Footer */}
        <div className="border-t border-neutral-100 px-4 sm:px-8 py-6 text-xs text-neutral-400 flex items-center justify-between">
          <span>© 2026 Steal Shadow. MIT License.</span>
          <a
            href="https://github.com/Pushparaj-2022/Steal-Shadow/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-700 transition-colors"
          >
            Report an issue
          </a>
        </div>
      </div>
    </div>
  );
}
