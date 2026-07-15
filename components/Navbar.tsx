"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Terminal, Sparkles, Copy, Check, Menu, X, ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/GithubIcon";

export default function Navbar() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const copyInstallCommand = () => {
    navigator.clipboard.writeText("curl -sSL https://raw.githubusercontent.com/Nithwin/windmist/main/scripts/install.sh | bash");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const navLinks = [
    { name: "Overview", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Download", href: "/download" },
    { name: "Documentation", href: "/docs" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0e14]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-12 h-12 group-hover:scale-110 transition-transform duration-300">
              <Image src="/logo.png" alt="WindMist Logo" width={48} height={48} className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-[#00f2fe]">
                  WindMist
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#00f2fe]/10 text-[#00f2fe] border border-[#00f2fe]/30 shadow-[0_0_10px_rgba(0,242,254,0.15)]">
                  v1.0.1
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono tracking-wider">
                AI TERMINAL AGENT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#111622]/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-gradient-to-r from-white/20 via-[#00f2fe]/20 to-[#00a8ff]/20 text-[#00f2fe] border border-[#00f2fe]/40 shadow-[0_0_15px_rgba(0,242,254,0.2)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Widgets */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Quick Copy Install Box */}
            <button
              onClick={copyInstallCommand}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#111622] hover:bg-[#192030] border border-white/10 hover:border-[#00f2fe]/40 text-xs font-mono text-slate-300 transition-all group shadow-sm"
              title="Copy universal install command"
            >
              <Terminal className="w-3.5 h-3.5 text-[#00f2fe] group-hover:scale-110 transition-transform" />
              <span className="max-w-[160px] truncate text-slate-400 group-hover:text-slate-200">
                curl -sSL install.sh | bash
              </span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#00f2fe] transition-colors" />
              )}
            </button>

            {/* GitHub Star Button */}
            <a
              href="https://github.com/Nithwin/windmist"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-white via-[#00f2fe] to-[#00a8ff] hover:opacity-95 text-xs font-bold text-slate-950 hover:text-slate-900 transition-all duration-300 shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_rgba(255,255,255,0.6)] transform hover:-translate-y-0.5"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Star on GitHub</span>
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#111622] border border-white/10 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b0e14]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-3 pb-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-300">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/5 hover:text-[#00f2fe] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <button
              onClick={copyInstallCommand}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#111622] border border-white/10 text-xs font-mono text-slate-300"
            >
              <div className="flex items-center gap-2 truncate">
                <Terminal className="w-4 h-4 text-[#00f2fe] shrink-0" />
                <span className="truncate">curl -sSL install.sh | bash</span>
              </div>
              {copied ? (
                <span className="text-emerald-400 font-sans flex items-center gap-1">
                  <Check className="w-4 h-4" /> Copied
                </span>
              ) : (
                <Copy className="w-4 h-4 text-slate-400" />
              )}
            </button>

            <a
              href="https://github.com/Nithwin/windmist"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-white via-[#00f2fe] to-[#00a8ff] text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(0,242,254,0.3)]"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Star on GitHub (v1.0.1)</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
