import Image from "next/image";
import Link from "next/link";
import { GitBranch, Share2, Play } from "lucide-react";

const GITHUB = "https://github.com/Pushparaj-2022/Steal-Shadow";

const FOOTER_COLUMNS = [
  {
    title: "Library",
    links: [
      { label: "Components", href: "/docs/components" },
      { label: "Animations", href: "/docs/animations" },
      { label: "AI Components", href: "/docs/ai" },
      { label: "Data Components", href: "/docs/data" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "Why Steal Shadow", href: "/docs/solutions" },
      { label: "GitHub", href: GITHUB },
      { label: "Discussions", href: `${GITHUB}/discussions` },
    ],
  },
  {
    title: "Open Source",
    links: [
      { label: "MIT License", href: `${GITHUB}/blob/main/LICENSE` },
      { label: "Contributing", href: `${GITHUB}/blob/main/CONTRIBUTING.md` },
      { label: "Report a Bug", href: `${GITHUB}/issues` },
      { label: "Changelog", href: `${GITHUB}/releases` },
    ],
  },
];

const SOCIAL_LINKS = [
  { Icon: GitBranch, href: GITHUB, label: "GitHub" },
  { Icon: Share2, href: "https://twitter.com/stealshadow", label: "Twitter" },
  { Icon: Play, href: "https://youtube.com/@stealshadow", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-100 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="Steal Shadow" height={151} width={662} className="h-7 w-auto" quality={100} />
            </Link>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs mb-2">
              Open source React component library. Motion-first, accessible, zero lock-in.
            </p>
            <p className="text-xs text-green-600 font-semibold mb-5">100% free · MIT License · Always open source</p>
            <div className="flex gap-2">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg border border-neutral-200 text-neutral-400 hover:text-neutral-700 hover:border-neutral-300 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-neutral-900 text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("http") ? (
                      <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-sm text-neutral-500 hover:text-neutral-900 transition-colors">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-neutral-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-400">
            © 2026 Steal Shadow. Released under the MIT License.
          </p>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer" className="text-xs text-neutral-400 hover:text-neutral-700 transition-colors flex items-center gap-1.5">
            <GitBranch className="h-3 w-3" />
            github.com/Pushparaj-2022/Steal-Shadow
          </a>
        </div>
      </div>
    </footer>
  );
}
