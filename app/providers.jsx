"use client";

import { ThemeProvider } from "next-themes";

export function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={true}
      defaultTheme="system"
      themes={["light", "dark"]}
      transitionDuration={300}
      disableTransitionOnChange>
      {children}
    </ThemeProvider>
  );
}
