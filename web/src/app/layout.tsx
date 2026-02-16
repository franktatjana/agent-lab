import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Agent Lab",
  description: "AI Agent Prompt Builder - Craft ready-to-use prompts from curated agent designs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-stone-50`}
      >
        <header className="border-b border-stone-200 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-lg font-semibold tracking-tight text-stone-900">
              Agent Lab
            </a>
            <div className="flex items-center gap-4">
              <a href="/#handbook" className="text-sm text-stone-400 hover:text-stone-600 transition-colors">
                Handbook
              </a>
              <a href="/#agent-ideas" className="text-sm text-stone-400 hover:text-stone-600 transition-colors">
                Agent Ideas
              </a>
              <a href="/about" className="text-sm text-stone-400 hover:text-stone-600 transition-colors">
                About
              </a>
            </div>
          </div>
        </header>
        <main className="max-w-6xl mx-auto px-6 py-8">
          {children}
        </main>
        <footer className="border-t border-stone-200 bg-white mt-8">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between text-sm text-stone-400">
            <span>© 2026 Tatjana Frank</span>
            <a
              href="https://github.com/franktatjana/agent-lab"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-600 transition-colors"
            >
              GitHub
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
