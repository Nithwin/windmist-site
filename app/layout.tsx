import type { Metadata } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WindMist — Professional Go AI Engineering CLI",
  description:
    "The AI Software Engineering Agent That Lives in Your Terminal. Professional-grade Go CLI with modular AI engines, zero-latency filesystem editing, and Lip Gloss TUI rendering. Pure data patches. Zero external dependencies.",
  keywords: [
    "WindMist",
    "Go CLI",
    "AI Agent",
    "Software Engineering CLI",
    "Terminal AI",
    "Gemini CLI",
    "Lip Gloss TUI",
    "Cobra CLI",
    "Developer Tools",
    "Open Source AI",
  ],
  authors: [{ name: "WindMist Contributors", url: "https://github.com/Nithwin/windmist" }],
  openGraph: {
    title: "WindMist — Professional Go AI Engineering CLI",
    description:
      "The AI Software Engineering Agent That Lives in Your Terminal. Zero-latency filesystem patching, Lip Gloss TUI rendering, and pure Go architecture.",
    url: "https://github.com/Nithwin/windmist",
    siteName: "WindMist Official Portal",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WindMist — Professional Go AI Engineering CLI",
    description:
      "The AI Software Engineering Agent That Lives in Your Terminal. Zero external dependencies. High-performance Go architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${jetbrainsMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0b0e14] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
