"use client";

import { ToastProvider, ThemeProvider } from "@animui/ui";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system">
      <ToastProvider>{children}</ToastProvider>
    </ThemeProvider>
  );
}
