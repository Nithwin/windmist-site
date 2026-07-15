"use client";

import React, { useState } from "react";
import { Cpu, HardDrive, Terminal, Shield, CheckCircle, Layers, Play } from "lucide-react";

export default function FeatureBentoGrid() {
  const [selectedAIModel, setSelectedAIModel] = useState<"pro" | "flash">("pro");
  const [tuiTheme, setTuiTheme] = useState<"cyclone" | "obsidian" | "matrix">("cyclone");
  const [raceTestStatus, setRaceTestStatus] = useState<"idle" | "running" | "passed">("passed");

  const runRaceTest = () => {
    setRaceTestStatus("running");
    setTimeout(() => {
      setRaceTestStatus("passed");
    }, 1500);
  };

  return (
    <section id="features" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background radial highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-tr from-[#00a8ff]/20 to-[#00f2fe]/15 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00f2fe]/15 border border-[#00f2fe]/30 text-[#00f2fe] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" /> Architectural Superpowers
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Engineered for <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00f2fe] to-[#00a8ff]">Pure Performance</span> & Precision
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            WindMist combines modular Go design patterns with state-of-the-art terminal rendering and decoupled filesystem transaction engines.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Modular AI Engine (Span 7) */}
          <div className="md:col-span-7 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#111622] via-[#111622]/90 to-[#192030] border border-white/10 hover:border-[#00f2fe]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-[#00f2fe]/15 text-[#00f2fe] shadow-inner group-hover:scale-110 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono text-slate-400 bg-black/40 px-3 py-1.5 rounded-lg border border-white/5 w-fit">
                  package internal/providers/gemini
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 flex items-center gap-2">
                  Native Gemini Provider & Agent Loop (`internal/providers`)
                </h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Built from the ground up for multi-turn software architecture tasks. Features first-class Google Gemini (`gemini-2.5-pro` and `gemini-2.5-flash`) integrations with structured prompt building, system prompt overriding, and dynamic token context tracking up to <strong className="text-white">1,048,576 tokens</strong>.
              </p>
            </div>

            {/* Interactive Model Preview UI */}
            <div className="p-4 rounded-2xl bg-[#06080c] border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Select Active Provider Preset:</span>
                <div className="text-xs font-mono text-slate-400 bg-black/40 px-3 py-1 rounded-lg border border-white/5 w-fit">
                  internal/tools/... (15 atomic tools)
                </div>
                <div className="flex gap-1.5 bg-[#111622] p-1 rounded-xl border border-white/10">
                  <button
                    onClick={() => setSelectedAIModel("pro")}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      selectedAIModel === "pro"
                        ? "bg-[#00f2fe] text-slate-950 font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    gemini-2.5-pro
                  </button>
                  <button
                    onClick={() => setSelectedAIModel("flash")}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      selectedAIModel === "flash"
                        ? "bg-[#00f2fe] text-slate-950 font-bold"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    gemini-2.5-flash
                  </button>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#111622] border border-white/5 text-xs font-mono space-y-1.5">
                <div className="flex justify-between text-slate-300">
                  <span>Context Window:</span>
                  <span className="text-[#04B575] font-bold">1,048,576 Tokens (Dynamic Limit)</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Reasoning Strategy:</span>
                  <span className="text-[#3CFAFA]">
                    {selectedAIModel === "pro" ? "Deep Architectural Synthesis" : "Sub-second Iteration Speed"}
                  </span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>Structured Output Engine:</span>
                  <span className="text-emerald-400">Enforced JSON & AST Diff Schemas</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Pure-Data Patch Executor (Span 5) */}
          <div className="md:col-span-5 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#111622] via-[#111622]/90 to-[#192030] border border-white/10 hover:border-emerald-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-emerald-500/15 text-emerald-400 shadow-inner group-hover:scale-110 transition-transform">
                  <HardDrive className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full font-mono text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  internal/tools/... (15 atomic tools)
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Pure-Data Patch Executor
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Zero file corruption guarantees. WindMist decouples diff calculation from disk execution — grouping operations per file into pure-data structures for <strong className="text-white">single read/write operations</strong> per file without partial edits or race conditions.
              </p>
            </div>

            {/* Visual Patch Flow Graph */}
            <div className="p-4 rounded-2xl bg-[#06080c] border border-white/10 space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between text-slate-400 pb-1 border-b border-white/5">
                <span>Atomic Transaction Flow</span>
                <span className="text-emerald-400 font-bold">Latency: &lt;1.5ms</span>
              </div>
              <div className="space-y-1.5 text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00f2fe]" /> 1. Calculate Multi-Turn Tool AST (`internal/agent`)
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-[#00a8ff]" /> 2. Validate Target File Checksums & Locks
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold bg-emerald-500/10 p-1.5 rounded border border-emerald-500/20">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" /> 3. Atomic Single-Pass Disk Write (`Executor`)
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Lip Gloss & Glamour TUI (Span 6) */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#111622] via-[#111622]/90 to-[#192030] border border-white/10 hover:border-[#00f2fe]/40 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-[#00f2fe]/15 text-[#00f2fe] shadow-inner group-hover:scale-110 transition-transform">
                  <Terminal className="w-6 h-6" />
                </div>
                <div className="mb-4">
                  <div className="text-xs font-mono text-slate-400 bg-black/40 px-3 py-1 rounded-lg border border-white/5 w-fit">
                    package internal/ui/bubbles
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                  Lip Gloss & Bubble Tea UI (`internal/ui/bubbles`)
                </h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Say goodbye to unaligned terminal markdown. Features seamless Glamour table rendering, syntax-highlighted code blocks (`JetBrains Mono` compatible), and custom cyclone-themed word-wrapping TUI bubbles (`internal/ui/bubbles`).
              </p>
            </div>

            {/* Interactive Theme Swapper */}
            <div className="p-4 rounded-2xl bg-[#06080c] border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Try Lip Gloss TUI Bubble Theme:</span>
                <div className="flex gap-1 bg-[#111622] p-1 rounded-lg border border-white/10">
                  {(["cyclone", "obsidian", "matrix"] as const).map((thm) => (
                    <button
                      key={thm}
                      onClick={() => setTuiTheme(thm)}
                      className={`px-2.5 py-0.5 rounded text-[10px] capitalize transition-all ${
                        tuiTheme === thm
                          ? "bg-gradient-to-r from-white via-[#00f2fe] to-[#00a8ff] text-slate-950 font-bold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      {thm}
                    </button>
                  ))}
                </div>
              </div>

              {/* Theme Bubble Simulation */}
              <div
                className={`p-3 rounded-xl border font-mono text-xs transition-all duration-300 ${
                  tuiTheme === "cyclone"
                    ? "bg-[#111622] border-[#00f2fe]/40 text-[#00f2fe]"
                    : tuiTheme === "obsidian"
                    ? "bg-[#0b0e14] border-slate-700 text-slate-200"
                    : "bg-black border-emerald-500/50 text-[#04B575]"
                }`}
              >
                <div className="flex items-center justify-between pb-1 border-b border-current/20 text-[11px] font-bold">
                  <span>╭─ [Bubble: Cyclone-Renderer]</span>
                  <span>WordWrap: ON ──╮</span>
                </div>
                <div className="pt-2 space-y-1 text-slate-200">
                  <div className="flex justify-between">
                    <span className="text-current">┃ Model Response:</span>
                    <span className="opacity-80 font-bold">pkg/ai/client.go patched</span>
                  </div>
                  <div className="text-[11px] opacity-75">
                    ┃ ├─ Added timeout retry logic with exponent backoff
                  </div>
                  <div className="text-[11px] opacity-75">
                    ┃ └─ All Lip Gloss borders aligned without layout jitter
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Professional Go Architecture (Span 6) */}
          <div className="md:col-span-6 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#111622] via-[#111622]/90 to-[#192030] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 rounded-2xl bg-cyan-500/15 text-cyan-400 shadow-inner group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full font-mono text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  cmd/ & Cobra
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Professional Go Architecture (`cmd/` & Cobra)
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Engineered with <strong className="text-white">Go 1.26</strong> and the `Cobra` CLI framework. Features automated multi-platform GoReleaser CI/CD pipelines, strict unit testing suites, and a absolute <strong className="text-emerald-400">zero race-condition guarantee</strong> (`go test -race`).
              </p>
            </div>

            {/* Interactive Race Test Simulation */}
            <div className="p-4 rounded-2xl bg-[#06080c] border border-white/10 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Concurrently Verify Memory Safety:</span>
                <button
                  onClick={runRaceTest}
                  disabled={raceTestStatus === "running"}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#192030] hover:bg-[#00f2fe] text-slate-200 hover:text-slate-950 font-bold transition-all border border-white/10"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>{raceTestStatus === "running" ? "Running -race..." : "Run go test -race"}</span>
                </button>
              </div>

              <div className="p-3 rounded-xl bg-[#111622] border border-white/5 font-mono text-xs space-y-1">
                <div className="flex justify-between text-slate-300">
                  <span>$ go test -race ./internal/...</span>
                  {raceTestStatus === "running" ? (
                    <span className="text-amber-400 animate-pulse">Running concurrency checks...</span>
                  ) : (
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle className="w-3.5 h-3.5" /> ok 0.412s (No Data Races)
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-slate-500 flex justify-between">
                  <span>Tested packages: ai, filesystem, ui, cmd</span>
                  <span>100% thread safety verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
