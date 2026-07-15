"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import SmartDownloadHub from "@/components/SmartDownloadHub";
import Footer from "@/components/Footer";
import BlurText from "@/components/reactbits/BlurText";
import ShinyText from "@/components/reactbits/ShinyText";
import { motion } from "framer-motion";
import { Download, ShieldCheck, Sparkles, Cpu } from "lucide-react";

export default function DownloadPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0e14] text-slate-100 font-sans selection:bg-[#00f2fe]/30 selection:text-white relative overflow-hidden">
      {/* Background glowing cyan radials */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#00f2fe]/20 via-white/10 to-[#00a8ff]/20 rounded-full blur-[160px] pointer-events-none -z-10 animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-[#00a8ff]/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Navbar />

      <main className="flex-1 py-12 lg:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f2fe]/15 border border-[#00f2fe]/40 text-[#00f2fe] text-xs font-mono font-bold uppercase tracking-wider shadow-[0_0_20px_rgba(0,242,254,0.2)]">
            <Download className="w-3.5 h-3.5 animate-bounce" /> Official Distribution Portal • v1.0.1 Stable
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            <BlurText text="Download WindMist" delay={80} animateBy="words" />{" "}
            <span className="block mt-2">
              <ShinyText text="For Your Terminal" speed={3.5} className="font-extrabold drop-shadow-[0_0_30px_rgba(0,242,254,0.5)]" />
            </span>
          </h1>

          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Zero dependencies, zero-CGO static Go binaries compiled and cryptographically signed via GoReleaser. Pick your architecture or run our universal one-line shell installer below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2 bg-[#111622] px-3.5 py-2 rounded-xl border border-white/10 shadow-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SHA-256 Checksums Verified</span>
            </div>
            <div className="flex items-center gap-2 bg-[#111622] px-3.5 py-2 rounded-xl border border-white/10 shadow-sm">
              <Cpu className="w-4 h-4 text-[#00f2fe]" />
              <span>x86_64 & ARM64 Supported</span>
            </div>
            <div className="flex items-center gap-2 bg-[#111622] px-3.5 py-2 rounded-xl border border-white/10 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#00a8ff]" />
              <span>Instant Self-Uninstaller Included</span>
            </div>
          </div>
        </motion.div>

        {/* Embedded Full Interactive Hub */}
        <SmartDownloadHub />
      </main>

      <Footer />
    </div>
  );
}
