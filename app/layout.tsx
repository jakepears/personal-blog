import "@/styles/index.css";
import { Providers } from "./providers";
import { cx } from "@/utils/all";
import { Inter, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora"
});

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(inter.variable, lora.variable)}>
      <head>
        <link
          rel="shortcut icon"
          href="/Pearson.webp"
          type="image/webp"
        />
      </head>
      <body className="text-gray-800 antialiased duration-300 ease-[cubic-beizer(0.465,0.183,0.153,0.946)] dark:bg-[#1c1c1c] dark:text-gray-400 dark:ease-[cubic-beizer(0.465,0.183,0.153,0.946)]">
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
