"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { NAV_CONFIG } from "@/lib/nav";

export function DocsSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/docs") return pathname === "/docs";
    if (href.includes("#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-64 shrink-0 h-screen sticky top-0 flex flex-col border-r border-neutral-100 bg-white overflow-y-auto">
      {/* Sidebar header / logo */}
      <div className="h-16 flex items-center px-5 border-b border-neutral-100 shrink-0">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Steal Shadow"
            height={151}
            width={662}
            className="h-7 w-auto"
            priority
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-6">
        {NAV_CONFIG.map((section) => (
          <div key={section.title}>
            <p className="px-3 mb-2 text-xs font-semibold text-neutral-400 uppercase tracking-wider">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const active = isActive(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        active
                          ? "bg-blue-50 text-blue-700 font-semibold"
                          : "text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50"
                      }`}
                    >
                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                      )}
                      <span className="truncate">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* Sidebar footer */}
      <div className="px-5 py-4 border-t border-neutral-100 shrink-0">
        <a
          href="https://github.com/Pushparaj-2022/Steal-Shadow"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-xs text-neutral-400 hover:text-neutral-700 transition-colors"
        >
          <span>v0.1.0</span>
          <span className="ml-auto">MIT License</span>
        </a>
      </div>
    </aside>
  );
}
