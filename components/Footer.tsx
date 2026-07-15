"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, ShieldCheck } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export default function Footer() {
  return (
    <footer className="bg-[#06080c] border-t border-white/10 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-white/20 via-[#00f2fe]/20 to-[#00a8ff]/30 border border-[#00f2fe]/40 overflow-hidden">
                <Image src="/logo.png" alt="WindMist Logo" width={28} height={28} className="object-contain drop-shadow-[0_0_6px_rgba(0,242,254,0.8)]" />
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#00f2fe] transition-colors">
                WindMist
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/30">
                v1.0.1
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              The professional AI software engineering agent for your terminal. Pure data filesystem patches, Lip Gloss TUI styling, and modular Gemini integration. Zero external dependencies.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://github.com/Nithwin/windmist"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111622] hover:bg-[#192030] text-white text-xs font-bold border border-white/10 hover:border-[#00f2fe]/40 transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/Nithwin/windmist</span>
              </a>
            </div>
          </div>

          {/* Column 1: Core Navigation */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-white text-[11px] font-mono">
              Architecture
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="hover:text-[#00f2fe] transition-colors">
                  Gemini Provider (`internal/providers`)
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-[#00f2fe] transition-colors">
                  15 Tools (`internal/tools/...`)
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-[#00f2fe] transition-colors">
                  Bubble Tea UI (`internal/ui/bubbles`)
                </Link>
              </li>
              <li>
                <Link href="/#features" className="hover:text-[#00f2fe] transition-colors">
                  Cobra CLI Framework (`cmd/`)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Downloads & Hub */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-white text-[11px] font-mono">
              Download Matrix
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#download" className="hover:text-[#00f2fe] transition-colors">
                  macOS (Apple Silicon & Intel)
                </Link>
              </li>
              <li>
                <Link href="/#download" className="hover:text-[#00f2fe] transition-colors">
                  Linux (`x86_64` & `arm64` Tarball)
                </Link>
              </li>
              <li>
                <Link href="/#download" className="hover:text-[#00f2fe] transition-colors">
                  Windows `.zip` Archives (x64 & ARM64)
                </Link>
              </li>
              <li>
                <Link href="/#download" className="hover:text-[#00f2fe] transition-colors">
                  Source Code Archive (`.tar.gz`)
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Community & Docs */}
          <div className="space-y-3 text-xs">
            <h4 className="font-bold uppercase tracking-wider text-white text-[11px] font-mono">
              Open Source Portal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="hover:text-[#00f2fe] transition-colors flex items-center gap-1">
                  <span>Quick-Start Manual</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/Nithwin/windmist/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f2fe] transition-colors flex items-center gap-1"
                >
                  <span>Contributing Rules</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Nithwin/windmist/releases/tag/v1.0.1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f2fe] transition-colors flex items-center gap-1"
                >
                  <span>Changelog (v1.0.1)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Nithwin/windmist/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#00f2fe] transition-colors flex items-center gap-1"
                >
                  <span>Report an Issue</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 font-mono text-slate-400">
            <span>© 2026 WindMist Open-Source Contributors. Released under MIT License.</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>All AI Engines & Patcher Operational</span>
            </div>

            <div className="hidden sm:flex items-center gap-1 text-slate-500 font-mono text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00f2fe]" />
              <span>SHA-256 Verified Releases</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
