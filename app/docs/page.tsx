"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, Terminal, Cpu, HardDrive, Shield, Code, Settings, Copy, Check, ChevronRight, ExternalLink } from "lucide-react";

export default function DocsPage() {
  const [activeDocSection, setActiveDocSection] = useState<string>("quickstart");
  const [copied, setCopied] = useState(false);

  const docSections = [
    { id: "quickstart", title: "Quick-Start Guide", icon: Terminal },
    { id: "config", title: "Global Configuration Reference", icon: Settings },
    { id: "ai-engine", title: "Modular AI Engine (`internal/ai`)", icon: Cpu },
    { id: "filesystem", title: "Atomic Filesystem Patcher (`internal/tools/filesystem`)", icon: HardDrive },
    { id: "tui", title: "Lip Gloss TUI & Glamour Styling", icon: Code },
    { id: "contributing", title: "Contributing & Architecture Rules", icon: Shield },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0b0e14] text-slate-100">
      <Navbar />

      <div className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        {/* Breadcrumb Header */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8 border-b border-white/10 pb-4">
          <span>windmist-portal</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#00f2fe] font-bold">/docs</span>
          <span className="ml-auto flex items-center gap-1.5 text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Stable Manual v1.0.1
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar Navigation */}
          <aside className="lg:col-span-3 space-y-3">
            <div className="p-4 rounded-2xl bg-[#111622] border border-white/10 space-y-4 sticky top-28">
              <div className="flex items-center gap-2 font-bold text-white text-sm border-b border-white/10 pb-3">
                <BookOpen className="w-4 h-4 text-[#00f2fe]" />
                <span>Documentation Navigation</span>
              </div>

              <nav className="space-y-1">
                {docSections.map((sec) => {
                  const Icon = sec.icon;
                  const isActive = activeDocSection === sec.id;
                  return (
                    <button
                      key={sec.id}
                      onClick={() => setActiveDocSection(sec.id)}
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all text-left ${
                        isActive
                          ? "bg-gradient-to-r from-[#00f2fe]/20 to-[#6a11cb]/20 text-[#00f2fe] border border-[#00f2fe]/40 font-bold shadow-[0_0_15px_rgba(0,242,254,0.15)]"
                          : "text-slate-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#00f2fe]" : "text-slate-500"}`} />
                      <span className="truncate">{sec.title}</span>
                    </button>
                  );
                })}
              </nav>

              <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 space-y-2">
                <div className="font-mono text-slate-300 font-bold">Repository Linkouts:</div>
                <a
                  href="https://github.com/Nithwin/windmist/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-[#00f2fe] transition-colors"
                >
                  <span>CONTRIBUTING.md</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://github.com/Nithwin/windmist/blob/main/CHANGELOG.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between hover:text-[#00f2fe] transition-colors"
                >
                  <span>CHANGELOG.md (v1.0.1)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </aside>

          {/* Right Content Area */}
          <main className="lg:col-span-9 space-y-8">
            {activeDocSection === "quickstart" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <h1 className="text-3xl font-extrabold text-white">Quick-Start Guide</h1>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Install WindMist on your terminal right now, configure your Gemini model API token, and execute your first filesystem patch in under 60 seconds.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#111622] border border-white/10 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="h-6 w-6 rounded-full bg-[#00f2fe]/20 text-[#00f2fe] flex items-center justify-center text-xs font-bold">1</span>
                      Install Universal Static Binary
                    </h3>
                    <p className="text-xs text-slate-400">
                      Run our universal installation script which auto-detects your system architecture (`x86_64` vs `arm64`) and installs the latest verified release (`v1.0.1`) to `/usr/local/bin/windmist`:
                    </p>
                    <div className="p-4 rounded-xl bg-[#06080c] border border-white/10 font-mono text-xs flex items-center justify-between">
                      <code className="text-[#00f2fe] truncate">
                        curl -sSL https://raw.githubusercontent.com/Nithwin/windmist/main/scripts/install.sh | bash
                      </code>
                      <button
                        onClick={() =>
                          copyToClipboard("curl -sSL https://raw.githubusercontent.com/Nithwin/windmist/main/scripts/install.sh | bash")
                        }
                        className="text-slate-400 hover:text-white shrink-0 ml-4 font-sans text-xs font-bold flex items-center gap-1"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="h-6 w-6 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold">2</span>
                      Authenticate with Gemini AI Provider
                    </h3>
                    <p className="text-xs text-slate-400">
                      WindMist connects directly to your preferred AI model endpoints with zero middleware latency. Configure your API key using the interactive terminal command:
                    </p>
                    <div className="p-4 rounded-xl bg-[#06080c] border border-white/10 font-mono text-xs text-slate-200">
                      <div>$ export GEMINI_API_KEY=&quot;your-gemini-api-key&quot;</div>
                      <div>$ windmist set gemini_api_key &quot;your-gemini-api-key&quot;</div>
                      <div className="text-emerald-400 mt-1">✔ Successfully saved in ~/.windmist/config.yaml</div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <h3 className="text-base font-bold text-white flex items-center gap-2">
                      <span className="h-6 w-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">3</span>
                      Launch Interactive Agent in Your Repository
                    </h3>
                    <p className="text-xs text-slate-400">
                      Navigate to any Git workspace and start chatting or requesting targeted code edits:
                    </p>
                    <div className="p-4 rounded-xl bg-[#06080c] border border-white/10 font-mono text-xs text-slate-200 space-y-1">
                      <div>$ cd ~/projects/my-go-service</div>
                      <div>$ windmist chat &quot;Examine internal/agent and summarize the tool loop&quot;</div>
                      <div className="text-cyan-400 mt-2">
                        [Agent] Inspecting internal/agent... Found autonomous multi-turn reasoning loop with 15 local tools. Do you want me to generate the refactored diff? [y/N]
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeDocSection === "config" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <h1 className="text-3xl font-extrabold text-white">Configuration Reference</h1>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    WindMist stores its global settings inside `~/.config/windmist/config.yaml`. Here is the full annotated reference schema:
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#111622] border border-white/10 space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10 text-slate-300">
                    <span>File: ~/.config/windmist/config.yaml</span>
                    <span className="text-[#04B575]">YAML Schema Validated</span>
                  </div>
                  <pre className="text-slate-200 overflow-x-auto p-4 bg-[#06080c] rounded-2xl border border-white/5 space-y-1">
{`version: "1.0.2"
active_profile: "production"

ai:
  provider: "gemini"               # Primary engine provider
  model: "gemini-2.5-pro"          # Or gemini-2.5-flash for speed
  max_context_tokens: 1048576      # Dynamic context limit tracking
  temperature: 0.2                 # Precision tuning for AST generation
  retry_on_ratelimit: true

filesystem:
  executor_mode: "pure_data_atomic" # Single read/write per file
  backup_before_patch: true         # Creates .bak shadow files
  ignore_patterns:
    - ".git/**"
    - "node_modules/**"
    - "vendor/**"
    - "*.bin"

ui:
  theme: "cyclone"                 # Options: cyclone, obsidian, matrix
  render_markdown_tables: true     # Lip Gloss + Glamour engine
  word_wrap_width: 110             # Dynamic resize based on TTY window
  show_token_usage_bar: true`}
                  </pre>
                </div>
              </div>
            )}

            {activeDocSection === "ai-engine" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <h1 className="text-3xl font-extrabold text-white">Modular AI Engine (`internal/ai`)</h1>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    WindMist decouples model interactions into a clean Go `Provider` interface, allowing high-throughput prompt building and structured output enforcement.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#111622] border border-white/10 space-y-6 font-sans text-sm">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-white">Key Architecture Capabilities</h3>
                    <ul className="space-y-2.5 text-slate-300 text-xs list-disc pl-5">
                      <li>
                        <strong className="text-[#00f2fe]">Gemini 2.5 Pro & Flash Integration:</strong> Full native support for massive context windows up to 1M+ tokens without context degradation or token truncation.
                      </li>
                      <li>
                        <strong className="text-purple-400">Structured Prompt Building (`internal/ai/prompts.go`):</strong> System instructions are automatically injected with AST constraints and git diff context rules.
                      </li>
                      <li>
                        <strong className="text-emerald-400">Dynamic Context Truncation:</strong> When processing giant repositories, WindMist uses AST pruning to feed only relevant package definitions and exported identifiers to the model.
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#06080c] border border-white/10 font-mono text-xs space-y-2">
                    <div className="text-slate-400 font-bold">{"// Go Interface Definition (`internal/ai/provider.go`)"}</div>
                    <pre className="text-slate-200 overflow-x-auto">
{`type Provider interface {
    GeneratePatch(ctx context.Context, req *PatchRequest) (*PatchResponse, error)
    StreamChat(ctx context.Context, history []Message, out io.Writer) error
    GetModelMetadata() ModelMetadata
}`}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {activeDocSection === "filesystem" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <h1 className="text-3xl font-extrabold text-white">Atomic Filesystem Patcher (`internal/tools/filesystem`)</h1>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Why do most terminal AI agents corrupt source files? Because they write chunks incrementally. WindMist solves this with pure-data transactional execution.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#111622] border border-white/10 space-y-6 text-sm text-slate-300">
                  <p className="leading-relaxed text-xs sm:text-sm">
                    In WindMist, the AI engine never writes directly to disk. Instead, it produces a <code className="text-[#00f2fe] bg-white/5 px-1.5 py-0.5 rounded">tools.PatchData</code> struct. The <code className="text-emerald-400 font-bold">Executor</code> then groups all proposed operations by target filepath:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
                    <div className="p-4 rounded-xl bg-[#06080c] border border-white/10 space-y-1">
                      <div className="text-[#00f2fe] font-bold">Step 1: Read</div>
                      <div className="text-slate-400">Single atomic disk read of target file into memory buffer.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#06080c] border border-white/10 space-y-1">
                      <div className="text-purple-400 font-bold">Step 2: Verify & Apply</div>
                      <div className="text-slate-400">Validate line hashes and apply unified diff changes in RAM.</div>
                    </div>
                    <div className="p-4 rounded-xl bg-[#06080c] border border-emerald-500/30 space-y-1">
                      <div className="text-emerald-400 font-bold">Step 3: Single Write</div>
                      <div className="text-slate-400">Atomic file write via temporary swap file (<code className="text-xs">.tmp</code> rename).</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                    ✔ Guaranteed zero corruption: If a power failure or Ctrl+C occurs mid-patch, the original source file remains 100% untouched.
                  </div>
                </div>
              </div>
            )}

            {activeDocSection === "tui" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <h1 className="text-3xl font-extrabold text-white">Lip Gloss TUI & Glamour Styling (`internal/ui`)</h1>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {"WindMist uses Charm's `Lip Gloss` and `Glamour` libraries to render luxurious terminal interfaces with exact word-wrapping and syntax coloring."}
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#111622] border border-white/10 space-y-6 text-xs sm:text-sm text-slate-300">
                  <div className="space-y-3">
                    <h3 className="font-bold text-white text-base">Custom Cyclone Aesthetic Tokens</h3>
                    <p className="leading-relaxed text-xs">
                      Our brand palette is enforced through Lip Gloss style definitions. All borders, bubbles, and headers use crisp hexadecimal colors designed for dark terminal emulators:
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#06080c] border border-white/10 font-mono text-xs space-y-2">
                    <div className="text-slate-400">{"// internal/ui/bubbles/theme.go"}</div>
                    <pre className="text-slate-200 overflow-x-auto">
{`var (
    ColorCyberCyan   = lipgloss.Color("#00f2fe")
    ColorStormPurple = lipgloss.Color("#6a11cb")
    ColorSuccess     = lipgloss.Color("#04B575")
    ColorAccentCyan  = lipgloss.Color("#3CFAFA")
    ColorHeader      = lipgloss.Color("#FF5F87")

    BubbleStyle = lipgloss.NewStyle().
        Border(lipgloss.RoundedBorder()).
        BorderForeground(ColorCyberCyan).
        Padding(1, 2)
)`}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {activeDocSection === "contributing" && (
              <div className="space-y-6 animate-in fade-in duration-300">
                <div className="space-y-2">
                  <h1 className="text-3xl font-extrabold text-white">Contributing & Architecture Rules</h1>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We invite contributors worldwide! When writing Go code for WindMist (`v1.0.1+`), please follow these non-negotiable guidelines.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#111622] border border-white/10 space-y-4 font-sans text-xs sm:text-sm text-slate-300">
                  <div className="p-4 rounded-2xl bg-[#06080c] border border-white/5 space-y-2">
                    <div className="font-bold text-[#00f2fe] text-sm">1. Absolute Zero Race-Condition Policy</div>
                    <p className="text-slate-400 text-xs">
                      Every pull request must pass <code className="text-white">go test -race ./...</code> across all packages (`ai`, `filesystem`, `ui`, `cmd`). We use GitHub Actions to verify goroutine safety automatically.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#06080c] border border-white/5 space-y-2">
                    <div className="font-bold text-purple-400 text-sm">2. Decoupled Package Boundaries</div>
                    <p className="text-slate-400 text-xs">
                      Keep `internal/ai` strictly responsible for prompt formatting and response decoding. Keep `internal/tools/filesystem` strictly responsible for disk I/O. Never import `internal/ui` inside `internal/filesystem`.
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#06080c] border border-white/5 space-y-2">
                    <div className="font-bold text-emerald-400 text-sm">3. Multi-Platform Binary CI/CD</div>
                    <p className="text-slate-400 text-xs">
                      We use <code className="text-white">GoReleaser</code> (`.goreleaser.yaml`) to compile standalone binaries (`linux/amd64`, `linux/arm64`, `darwin/arm64`, `darwin/amd64`, `windows/amd64`) with `CGO_ENABLED=0`. Ensure new dependencies do not introduce C code requirements.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
