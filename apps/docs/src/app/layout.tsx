import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Steal Shadow — Open Source React Component Library",
  description:
    "45+ animated, accessible React components. Motion-first, Tailwind-powered, zero lock-in. From buttons to full AI chat UIs — all in one open-source package.",
  keywords: [
    "react",
    "ui",
    "components",
    "animation",
    "motion",
    "tailwind",
    "nextjs",
    "steal shadow",
    "open source",
    "accessible",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Steal Shadow — Open Source React Component Library",
    description:
      "45+ animated, accessible React components built with Motion v12 and Tailwind CSS.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Steal Shadow — Open Source React Component Library",
    description: "45+ animated, accessible React components. MIT licensed. Ship faster.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        {/* No-flash theme script — runs before paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('ss-theme');var d=t==='dark'||(t===null&&window.matchMedia('(prefers-color-scheme:dark)').matches);if(d)document.documentElement.classList.add('dark')}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
