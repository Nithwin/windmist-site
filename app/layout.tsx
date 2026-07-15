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
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  metadataBase: new URL("https://windmist.vercel.app"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import SmoothScroll from "@/components/reactbits/SmoothScroll";
import AnimatedBackground from "@/components/reactbits/AnimatedBackground";

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
      <body className="min-h-full flex flex-col bg-[#0b0e14] text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-white relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "WindMist",
              "operatingSystem": "Linux, macOS, Windows",
              "applicationCategory": "DeveloperApplication",
              "offers": {
                "@type": "Offer",
                "price": "0.00",
                "priceCurrency": "USD"
              },
              "downloadUrl": "https://windmist.vercel.app/download",
              "softwareVersion": "1.0.1",
              "author": {
                "@type": "Organization",
                "name": "WindMist Contributors",
                "url": "https://github.com/Nithwin/windmist"
              },
              "sameAs": [
                "https://github.com/Nithwin/windmist"
              ],
              "description": "The AI Software Engineering Agent That Lives in Your Terminal. Professional-grade Go CLI with modular AI engines, zero-latency filesystem editing, and Lip Gloss TUI rendering."
            })
          }}
        />
        <SmoothScroll>
          <AnimatedBackground />
          <div className="relative z-10 flex flex-col min-h-screen">
            {children}
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
