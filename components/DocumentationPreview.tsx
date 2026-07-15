"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BookOpen, FileCode, Terminal, Settings, Copy, Check, ExternalLink, ArrowRight, GitBranch } from "lucide-react";

export default function DocumentationPreview() {
  const [activeTab, setActiveTab] = useState<"quickstart" | "config" | "contributing">("quickstart");
  const [copiedCode, setCopiedCode] = useState(false);

  const sampleConfigYaml = `# WindMist Global Configuration (~/.config/windmist/config.yaml)
version: 1.0.2
active_profile: production

ai:
  provider: "gemini" # Supports gemini-2.5-pro, gemini-2.5-flash
  model: "gemini-2.5-pro"
  max_context_tokens: 1048576
  temperature: 0.2
  system_prompt_preset: "software_architect_v2"

filesystem:
  executor_mode: "pure_data_atomic" # Single read/write per file
  backup_before_patch: true
  ignore_patterns:
    - ".git/**"
    - "node_modules/**"
    - "vendor/**"

ui:
  theme: "cyclone" # Lip Gloss theme (cyclone, obsidian, classic)
  render_markdown_tables: true
  word_wrap_width: 100
`;

  const quickstartSnippet = `# 1. Install WindMist CLI universally
curl -sSL https://raw.githubusercontent.com/Nithwin/windmist/main/scripts/install.sh | bash

# 2. Authenticate with your Gemini API Key
windmist auth login --provider gemini --key AIzaSy...

# 3. Initialize interactive agent session in your repository
cd ~/projects/my-go-service
windmist chat --context ./pkg/server/router.go

# 4. Preview and execute a pure-data filesystem patch
windmist diff --staged
windmist apply --yes`;

  const copySnippet = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#0b0e14] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Column: Doc Navigation & Highlights */}
          <div className="lg:w-5/12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe] text-xs font-mono font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" /> Documentation Portal Preview
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Everything You Need to <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] to-[#6a11cb]">Master WindMist</span>
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore our comprehensive references on configuring the AI engine, customizing the Lip Gloss TUI themes, and interacting with the atomic filesystem patcher.
            </p>

            {/* Doc Tabs Selector */}
            <div className="space-y-2 pt-2">
              <button
                onClick={() => setActiveTab("quickstart")}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left ${
                  activeTab === "quickstart"
                    ? "bg-[#111622] border-[#00f2fe] shadow-[0_0_25px_rgba(0,242,254,0.15)] text-white"
                    : "bg-[#111622]/40 border-white/5 text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#00f2fe]/10 text-[#00f2fe]">
                    <Terminal className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Quick-Start Guide</div>
                    <div className="text-xs text-slate-500 font-mono">Setup API keys & first patch session</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>

              <button
                onClick={() => setActiveTab("config")}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left ${
                  activeTab === "config"
                    ? "bg-[#111622] border-[#00f2fe] shadow-[0_0_25px_rgba(0,242,254,0.15)] text-white"
                    : "bg-[#111622]/40 border-white/5 text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                    <Settings className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Configuration Reference</div>
                    <div className="text-xs text-slate-500 font-mono">~/.config/windmist/config.yaml</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>

              <button
                onClick={() => setActiveTab("contributing")}
                className={`w-full flex items-center justify-between p-4 rounded-2xl border transition-all text-left ${
                  activeTab === "contributing"
                    ? "bg-[#111622] border-[#00f2fe] shadow-[0_0_25px_rgba(0,242,254,0.15)] text-white"
                    : "bg-[#111622]/40 border-white/5 text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                    <GitBranch className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">Contributing & Changelog</div>
                    <div className="text-xs text-slate-500 font-mono">CONTRIBUTING.md & CHANGELOG.md</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            <div className="pt-4">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#111622] hover:bg-[#192030] text-white text-sm font-bold border border-white/10 hover:border-[#00f2fe]/40 transition-all shadow-lg group"
              >
                <span>Enter Full Documentation Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#00f2fe]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Code & Documentation Visualizer */}
          <div className="lg:w-7/12 w-full rounded-3xl bg-[#111622] border border-white/10 shadow-[0_0_60px_-15px_rgba(0,242,254,0.2)] overflow-hidden font-mono text-xs">
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#06080c] border-b border-white/10">
              <div className="flex items-center gap-2">
                <FileCode className="w-4 h-4 text-[#00f2fe]" />
                <span className="font-bold text-slate-300">
                  {activeTab === "quickstart"
                    ? "quickstart.sh — Interactive Terminal Session"
                    : activeTab === "config"
                    ? "~/.config/windmist/config.yaml — Global Settings"
                    : "github.com/Nithwin/windmist — Community Docs"}
                </span>
              </div>
              {activeTab !== "contributing" && (
                <button
                  onClick={() =>
                    copySnippet(activeTab === "quickstart" ? quickstartSnippet : sampleConfigYaml)
                  }
                  className="flex items-center gap-1.5 px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-slate-300 text-[11px] border border-white/10 font-sans transition-colors"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-bold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              )}
            </div>

            <div className="p-6 overflow-x-auto min-h-[380px] max-h-[480px]">
              {activeTab === "quickstart" && (
                <pre className="text-slate-200 leading-relaxed font-mono space-y-1">
                  <code>{quickstartSnippet}</code>
                </pre>
              )}

              {activeTab === "config" && (
                <pre className="text-slate-200 leading-relaxed font-mono space-y-1">
                  <code>{sampleConfigYaml}</code>
                </pre>
              )}

              {activeTab === "contributing" && (
                <div className="space-y-6 font-sans text-slate-300">
                  <div className="p-4 rounded-2xl bg-[#06080c] border border-white/10 space-y-3">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-[#00f2fe]" /> CONTRIBUTING.md — Architecture Rules
                    </h4>
                    <p className="text-xs leading-relaxed text-slate-400">
                      We welcome pull requests! When contributing to WindMist, please follow these core architectural constraints:
                    </p>
                    <ul className="text-xs space-y-2 font-mono text-slate-300 pl-4 list-disc">
                      <li>
                        <strong className="text-white">Pure-Data Separation:</strong> All modifications to files must go through <code className="text-emerald-400">internal/tools/filesystem</code>. Never perform direct <code className="text-rose-400">os.WriteFile</code> inside UI or AI logic.
                      </li>
                      <li>
                        <strong className="text-white">Lip Gloss TUI Consistency:</strong> Use the tokens defined in <code className="text-[#3CFAFA]">internal/ui/bubbles/theme.go</code> for word wrapping and borders.
                      </li>
                      <li>
                        <strong className="text-white">Race Verification:</strong> Run <code className="text-amber-400">go test -race ./...</code> before submitting any patch.
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#06080c] border border-white/10 space-y-3">
                    <h4 className="text-base font-bold text-white flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-purple-400" /> CHANGELOG.md — v1.0.1 Highlights
                    </h4>
                    <div className="space-y-2 text-xs font-mono">
                      <div className="flex items-center justify-between text-emerald-400">
                        <span>[v1.0.1] — 2026-07-15</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-[10px]">STABLE RELEASE</span>
                      </div>
                      <p className="text-slate-400 font-sans leading-relaxed">
                        • <strong className="text-slate-200">eff2cea</strong>: Add GitHub issue templates and configuration to streamline reporting and feedback<br />
                        • <strong className="text-slate-200">ec53af8</strong>: Add pull request template to .github directory<br />
                        • <strong className="text-slate-200">066d96f</strong>: Implement GoReleaser configuration and dynamic versioning for automated releases<br />
                        • <strong className="text-slate-200">4d9f2f6</strong>: Normalize formatting and whitespace across codebase and refine <code className="text-[#3CFAFA]">internal/providers/gemini</code> & <code className="text-[#3CFAFA]">internal/tools</code>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
