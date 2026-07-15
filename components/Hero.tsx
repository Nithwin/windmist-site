"use client";

import React, { useState, useEffect } from "react";
import { Copy, Check, Play, RefreshCw, Cpu, HardDrive, ShieldCheck, Sparkles, Code2, Zap } from "lucide-react";

type OSTab = "maclinux" | "go" | "rpm" | "windows";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<OSTab>("maclinux");
  const [detectedOS, setDetectedOS] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Terminal state
  const [activeWorkflow, setActiveWorkflow] = useState<"chat" | "diff" | "status">("chat");
  const [patchExecuted, setPatchExecuted] = useState(false);
  const [isTyping, setIsTyping] = useState(true);
  const [showFullDiff, setShowFullDiff] = useState(false);

  const installCommands: Record<OSTab, { label: string; subLabel: string; command: string }> = {
    maclinux: {
      label: "Linux & macOS",
      subLabel: "curl | bash universal script",
      command: "curl -sSL https://raw.githubusercontent.com/Nithwin/windmist/main/scripts/install.sh | bash",
    },
    go: {
      label: "Go Developers",
      subLabel: "Requires Go 1.26+",
      command: "go install github.com/Nithwin/windmist@latest",
    },
    rpm: {
      label: "RedHat / Fedora",
      subLabel: "Standalone RPM binary",
      command: "sudo dnf install ./windmist-latest.rpm",
    },
    windows: {
      label: "Windows x64",
      subLabel: "Scoop package manager",
      command: "scoop bucket add nithwin https://github.com/Nithwin/windmist-bucket && scoop install windmist",
    },
  };

  useEffect(() => {
    // Smart OS Auto-Detection
    const userAgent = window.navigator.userAgent.toLowerCase();
    const platform = window.navigator.platform?.toLowerCase() || "";

    const timer = setTimeout(() => {
      if (platform.includes("win") || userAgent.includes("win")) {
        setDetectedOS("Windows x64");
        setActiveTab("windows");
      } else if (platform.includes("mac") || userAgent.includes("mac")) {
        setDetectedOS("macOS (Apple Silicon / Intel)");
        setActiveTab("maclinux");
      } else if (platform.includes("linux") || userAgent.includes("linux")) {
        setDetectedOS("Linux x86_64 / ARM64");
        setActiveTab("maclinux");
      } else {
        setDetectedOS("Universal Unix");
        setActiveTab("maclinux");
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommands[activeTab].command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const resetTerminal = (workflow: "chat" | "diff" | "status" = activeWorkflow) => {
    setActiveWorkflow(workflow);
    setPatchExecuted(false);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1200);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      resetTerminal("chat");
    }, 0);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      {/* Background Neon Glows & Cyclone Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-[#00f2fe]/20 via-[#6a11cb]/25 to-[#00f2fe]/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-[#00f2fe]/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111622]/90 border border-white/10 shadow-[0_0_30px_rgba(0,242,254,0.15)] backdrop-blur-xl">
            <span className="flex h-2 w-2 rounded-full bg-[#00f2fe] animate-ping" />
            <span className="text-xs font-semibold uppercase tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#3CFAFA]">
              Open-Source Engineering Agent v1.0.2
            </span>
            <span className="text-slate-500 font-mono text-xs">|</span>
            <span className="text-xs text-slate-300 font-medium hidden sm:inline">
              Zero External Dependencies • Lip Gloss TUI
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight sm:leading-[1.12]">
            The AI Software Engineering Agent That Lives in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] via-cyan-200 to-[#6a11cb] drop-shadow-[0_0_35px_rgba(0,242,254,0.4)]">
              Your Terminal.
            </span>
          </h1>
        </div>

        {/* Sub-headline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
            Professional-grade Go CLI with modular AI engines, zero-latency filesystem editing, and Lip Gloss TUI rendering. Pure data patches. Zero external dependencies.
          </p>
        </div>

        {/* 1-Line Installation Widget (Tabbed & OS-Detecting) */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="rounded-2xl bg-[#111622]/90 border border-white/10 p-2 sm:p-3 shadow-[0_0_50px_-10px_rgba(0,242,254,0.25)] backdrop-blur-2xl">
            {/* Tabs Header + OS Auto-detect indicator */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 mb-2 border-b border-white/10 px-2">
              <div className="flex flex-wrap items-center gap-1">
                {(Object.keys(installCommands) as OSTab[]).map((tabKey) => {
                  const tab = installCommands[tabKey];
                  const isActive = activeTab === tabKey;
                  return (
                    <button
                      key={tabKey}
                      onClick={() => setActiveTab(tabKey)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-gradient-to-r from-[#00f2fe] to-[#6a11cb] text-slate-950 font-bold shadow-[0_0_15px_rgba(0,242,254,0.3)]"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {detectedOS && (
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 shrink-0">
                  <Sparkles className="w-3 h-3 animate-pulse" />
                  <span>Auto-Detected: {detectedOS}</span>
                </div>
              )}
            </div>

            {/* Command Box & Copy */}
            <div className="relative flex items-center justify-between gap-3 bg-[#06080c] p-3.5 sm:p-4 rounded-xl border border-white/5 font-mono text-sm sm:text-base group">
              <div className="flex items-center gap-3 overflow-x-auto py-0.5 no-scrollbar">
                <span className="text-[#00f2fe] select-none font-bold shrink-0">$</span>
                <code className="text-slate-100 whitespace-nowrap tracking-tight selection:bg-[#00f2fe]/40">
                  {installCommands[activeTab].command}
                </code>
              </div>

              <button
                onClick={handleCopy}
                className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-lg font-sans text-xs font-bold transition-all duration-300 ${
                  copied
                    ? "bg-emerald-500 text-slate-950 shadow-[0_0_20px_rgba(4,181,117,0.5)]"
                    : "bg-[#192030] hover:bg-[#00f2fe] text-slate-200 hover:text-slate-950 border border-white/10 hover:border-transparent shadow-md"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 stroke-[3]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Command</span>
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-between px-2 pt-2 text-[11px] text-slate-400 font-mono">
              <span>{installCommands[activeTab].subLabel}</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Single static binary (&lt;18MB) • Zero CGO</span>
              </span>
            </div>
          </div>
        </div>

        {/* Live Interactive Terminal Mockup */}
        <div className="max-w-5xl mx-auto">
          {/* Workflow Selector Tabs above terminal */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-3 px-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Live Terminal Workflow:
              </span>
              <div className="flex bg-[#111622] p-1 rounded-xl border border-white/10 text-xs font-mono">
                <button
                  onClick={() => resetTerminal("chat")}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeWorkflow === "chat"
                      ? "bg-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/40 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  $ windmist chat
                </button>
                <button
                  onClick={() => resetTerminal("diff")}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeWorkflow === "diff"
                      ? "bg-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/40 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  $ windmist diff
                </button>
                <button
                  onClick={() => resetTerminal("status")}
                  className={`px-3 py-1 rounded-lg transition-all ${
                    activeWorkflow === "status"
                      ? "bg-[#00f2fe]/20 text-[#00f2fe] border border-[#00f2fe]/40 font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  $ windmist status
                </button>
              </div>
            </div>

            <button
              onClick={() => resetTerminal()}
              className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-[#00f2fe] transition-colors bg-[#111622]/80 px-3 py-1 rounded-lg border border-white/5"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Replay Simulation</span>
            </button>
          </div>

          {/* Terminal Window */}
          <div className="rounded-2xl bg-[#06080c]/95 border border-white/15 shadow-[0_0_80px_-15px_rgba(0,242,254,0.25)] overflow-hidden font-mono text-xs sm:text-sm backdrop-blur-2xl">
            {/* Terminal Titlebar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0b0e14] border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80 shadow-[0_0_8px_rgba(244,63,94,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                <span className="ml-2 text-slate-400 text-[11px]">windmist — tty1 — 120x36</span>
              </div>
              <div className="flex items-center gap-3 text-[11px] text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" /> Lip Gloss Engine v1.0.2
                </span>
                <span className="hidden sm:inline">Go 1.26</span>
              </div>
            </div>

            {/* Terminal Content Area */}
            <div className="p-4 sm:p-6 space-y-4 min-h-[440px] max-h-[560px] overflow-y-auto">
              {/* ASCII Brand Banner (Lip Gloss Styled) */}
              <div className="p-3 rounded-xl bg-[#111622]/60 border border-[#00f2fe]/20 text-[#00f2fe] space-y-1 select-none">
                <pre className="text-[10px] sm:text-xs leading-none font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] via-cyan-300 to-[#FF5F87]">
{`
 __        __ _             _  __  __ _  ___ _____ 
 \\ \\      / /(_)_ __   __| ||  \\/  (_)/ __|_   _|
  \\ \\ /\\ / / | | '_ \\ / _\` || |\\/| | |\\__ \\ | |  
   \\ V  V /  | | | | | (_| || |  | | |___) || |  
    \\_/\\_/   |_|_| |_|\\__,_||_|  |_|_|____/ |_|   
`}
                </pre>
                <div className="flex flex-wrap items-center justify-between pt-2 border-t border-white/10 text-[11px] text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#3CFAFA]" /> Engine: <b className="text-white">internal/ai</b> (Gemini 2.5 Pro)
                  </span>
                  <span className="flex items-center gap-1.5">
                    <HardDrive className="w-3.5 h-3.5 text-[#FF5F87]" /> Executor: <b className="text-white">internal/tools/filesystem</b>
                  </span>
                  <span className="text-[#04B575] font-bold">● Context: 1,024,000 Tokens Available</span>
                </div>
              </div>

              {/* Workflow 1: Chat & Patch Execution */}
              {activeWorkflow === "chat" && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  {/* Prompt Command */}
                  <div className="flex items-center gap-2">
                    <span className="text-[#04B575] font-bold">shadow@workstation:~$</span>
                    <span className="text-white font-semibold">windmist chat</span>
                    {isTyping && <span className="inline-block w-2 h-4 bg-[#00f2fe] animate-pulse ml-1" />}
                  </div>

                  {!isTyping && (
                    <>
                      {/* User Input Bubble */}
                      <div className="flex gap-3 items-start pl-2">
                        <span className="text-[#3CFAFA] font-bold shrink-0">❯ User:</span>
                        <p className="text-slate-200">
                          Refactor <code className="text-[#F1FA8C] bg-white/5 px-1 rounded">pkg/server/router.go</code> to add structured Zap logging and enforce JWT validation middleware on `/api/v1/*` routes.
                        </p>
                      </div>

                      {/* AI Thinking / Stream Bubble */}
                      <div className="p-4 rounded-xl bg-[#111622] border-l-4 border-[#6a11cb] space-y-3 shadow-md">
                        <div className="flex items-center justify-between text-xs border-b border-white/10 pb-2">
                          <span className="flex items-center gap-2 text-[#3CFAFA] font-bold">
                            <Sparkles className="w-4 h-4 text-[#00f2fe]" /> WindMist Agent (`internal/ai`):
                          </span>
                          <span className="text-slate-400">Tokens: 4,120 / 1M • Latency: 320ms</span>
                        </div>

                        <p className="text-slate-200 leading-relaxed">
                          I have analyzed <code className="text-[#F1FA8C]">pkg/server/router.go</code>. To ensure clean concurrency and zero race conditions (<code className="text-[#04B575]">go test -race</code>), I calculated a pure-data unified diff through the filesystem engine. Here is the proposed patch:
                        </p>

                        {/* Structured Diff Preview Box */}
                        <div className="rounded-lg bg-[#06080c] border border-white/10 overflow-hidden font-mono text-xs">
                          <div className="flex items-center justify-between px-3 py-1.5 bg-[#192030] text-slate-300 border-b border-white/10">
                            <span className="font-bold text-[#3CFAFA]">UNIFIED DIFF PREVIEW — pkg/server/router.go</span>
                            <button
                              onClick={() => setShowFullDiff(!showFullDiff)}
                              className="text-[10px] text-[#00f2fe] hover:underline"
                            >
                              {showFullDiff ? "Collapse" : "Expand All (14 lines)"}
                            </button>
                          </div>

                          <div className="p-3 space-y-1 overflow-x-auto text-[11px] leading-relaxed">
                            <div className="text-slate-500">{"@@ -42,8 +42,14 @@ func (r *Router) RegisterRoutes(e *echo.Echo) {"}</div>
                            <div className="text-slate-400">{"  // Register public health check"}</div>
                            <div className="text-slate-400">{'  e.GET("/health", r.handleHealth)'}</div>
                            <div className="text-slate-400">{" "}</div>
                            <div className="text-rose-400 bg-rose-500/10 -mx-3 px-3">{'- api := e.Group("/api/v1")'}</div>
                            <div className="text-emerald-400 bg-emerald-500/10 -mx-3 px-3">{'+ // Enforce structured logging & JWT validation'}</div>
                            <div className="text-emerald-400 bg-emerald-500/10 -mx-3 px-3">{'+ r.logger.Info("Initializing secure API v1 router group")'}</div>
                            <div className="text-emerald-400 bg-emerald-500/10 -mx-3 px-3">{'+ api := e.Group("/api/v1", middleware.JWTWithConfig(r.jwtConfig))'}</div>
                            
                            {showFullDiff && (
                              <>
                                <div className="text-emerald-400 bg-emerald-500/10 -mx-3 px-3">{'+ api.Use(middleware.RequestLoggerWithConfig(r.loggerConfig))'}</div>
                                <div className="text-slate-400">{'  api.POST("/agent/chat", r.handleAgentChat)'}</div>
                                <div className="text-slate-400">{'  api.GET("/filesystem/status", r.handleFSStatus)'}</div>
                                <div className="text-slate-400">{" }"}</div>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Interactive Approval / Execution Bar */}
                        {!patchExecuted ? (
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 bg-[#06080c]/60 p-3 rounded-lg border border-[#3CFAFA]/30">
                            <div className="flex items-center gap-2 text-slate-200 text-xs">
                              <span className="text-[#F1FA8C] font-bold">[Lip Gloss TUI Prompt]</span>
                              <span>Execute pure-data patch to disk? <b className="text-[#00f2fe]">[y/N/p]</b></span>
                            </div>

                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => setPatchExecuted(true)}
                                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                              >
                                <Play className="w-3.5 h-3.5 fill-current" />
                                <span>[y] Approve & Execute Patch</span>
                              </button>
                              <button
                                onClick={() => setShowFullDiff(!showFullDiff)}
                                className="px-3 py-1.5 rounded-lg bg-[#192030] hover:bg-white/10 text-slate-300 text-xs border border-white/10 transition-colors"
                              >
                                [p] Preview
                              </button>
                            </div>
                          </div>
                        ) : (
                          <div className="p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 flex items-center justify-between animate-in zoom-in-95 duration-200">
                            <div className="flex items-center gap-2.5">
                              <Check className="w-5 h-5 text-[#04B575] stroke-[3]" />
                              <div>
                                <div className="font-bold text-white text-xs">
                                  Patch Executed Successfully via <span className="text-[#04B575]">Executor</span> Engine
                                </div>
                                <div className="text-[11px] text-emerald-400/90 font-mono">
                                  File: pkg/server/router.go • 1 atomic write operation • Latency: 1.2ms
                                </div>
                              </div>
                            </div>
                            <span className="px-2.5 py-1 rounded bg-[#04B575] text-slate-950 text-[10px] font-bold uppercase tracking-wider">
                              Verified
                            </span>
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Workflow 2: Diff & Pure-Data Patch Engine */}
              {activeWorkflow === "diff" && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2">
                    <span className="text-[#04B575] font-bold">shadow@workstation:~$</span>
                    <span className="text-white font-semibold">windmist diff --staged --stat</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#111622] border border-white/10 space-y-2">
                    <div className="text-[#3CFAFA] font-bold">❯ Staged Pure-Data Patches (`internal/tools/filesystem`):</div>
                    <div className="font-mono text-xs space-y-1">
                      <div className="flex justify-between text-slate-300">
                        <span>internal/ai/gemini_provider.go</span>
                        <span className="text-emerald-400">+42 / -8 lines</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>internal/tools/filesystem/executor.go</span>
                        <span className="text-emerald-400">+114 / -12 lines</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>internal/ui/bubbles/cyclone.go</span>
                        <span className="text-emerald-400">+88 / -0 lines</span>
                      </div>
                    </div>
                    <div className="pt-2 border-t border-white/10 text-slate-400 text-xs flex justify-between">
                      <span>3 files changed, 244 insertions(+), 20 deletions(-)</span>
                      <span className="text-[#00f2fe] font-bold">Single-pass atomic execution guaranteed</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Workflow 3: Status & System Diagnostics */}
              {activeWorkflow === "status" && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2">
                    <span className="text-[#04B575] font-bold">shadow@workstation:~$</span>
                    <span className="text-white font-semibold">windmist status --verbose</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#111622] border border-[#00f2fe]/30 space-y-2 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-3 rounded-lg bg-[#06080c] border border-white/5 space-y-1">
                        <div className="text-slate-400">AI Engine Provider</div>
                        <div className="text-[#00f2fe] font-bold flex items-center gap-1.5">
                          <Cpu className="w-4 h-4" /> Gemini 2.5 Pro (Active)
                        </div>
                        <div className="text-[11px] text-slate-400">Max Context: 1,048,576 tokens</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#06080c] border border-white/5 space-y-1">
                        <div className="text-slate-400">Filesystem Executor</div>
                        <div className="text-[#04B575] font-bold flex items-center gap-1.5">
                          <HardDrive className="w-4 h-4" /> Pure-Data Atomic Mode
                        </div>
                        <div className="text-[11px] text-slate-400">Zero corruption lock mechanism</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#06080c] border border-white/5 space-y-1">
                        <div className="text-slate-400">TUI Renderer</div>
                        <div className="text-[#FF5F87] font-bold flex items-center gap-1.5">
                          <Code2 className="w-4 h-4" /> Lip Gloss + Glamour
                        </div>
                        <div className="text-[11px] text-slate-400">Cyclone Theme Active</div>
                      </div>
                      <div className="p-3 rounded-lg bg-[#06080c] border border-white/5 space-y-1">
                        <div className="text-slate-400">Go Runtime Environment</div>
                        <div className="text-[#F1FA8C] font-bold flex items-center gap-1.5">
                          <Zap className="w-4 h-4" /> go 1.26 linux/amd64
                        </div>
                        <div className="text-[11px] text-slate-400">Race Detector Checked: OK</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Terminal Footer / Status bar */}
            <div className="px-4 py-2.5 bg-[#0b0e14] border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" /> CLI Ready
                </span>
                <span className="hidden sm:inline">Config: ~/.config/windmist/config.yaml</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Try pressing</span>
                <span className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono text-[10px] font-bold">
                  [y] Approve & Execute Patch
                </span>
                <span>above!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
