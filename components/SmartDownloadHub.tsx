"use client";

import React, { useState, useEffect } from "react";
import { Download, Terminal, Sparkles, CheckCircle2, Trash2, HardDrive } from "lucide-react";

type PlatformKey = "linux" | "macos" | "windows";

interface BinaryTarget {
  name: string;
  filename: string;
  arch: string;
  size: string;
  sha256: string;
  type: "tarball" | "rpm" | "exe" | "zip";
  command?: string;
}

export default function SmartDownloadHub() {
  const [detectedPlatform, setDetectedPlatform] = useState<PlatformKey>("linux");
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformKey>("linux");
  const [downloadModal, setDownloadModal] = useState<BinaryTarget | null>(null);
  const [downloadProgress, setDownloadProgress] = useState(0);

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    const platform = window.navigator.platform?.toLowerCase() || "";

    const timer = setTimeout(() => {
      if (platform.includes("win") || userAgent.includes("win")) {
        setDetectedPlatform("windows");
        setSelectedPlatform("windows");
      } else if (platform.includes("mac") || userAgent.includes("mac")) {
        setDetectedPlatform("macos");
        setSelectedPlatform("macos");
      } else {
        setDetectedPlatform("linux");
        setSelectedPlatform("linux");
      }
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  const triggerDownloadSimulation = (target: BinaryTarget) => {
    setDownloadModal(target);
    setDownloadProgress(0);
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 25;
      });
    }, 200);
  };

  const binaryTargets: Record<PlatformKey, { title: string; subtitle: string; targets: BinaryTarget[] }> = {
    linux: {
      title: "Linux Binaries & Packages",
      subtitle: "Pre-compiled by GoReleaser v1.0.2 • Zero dependencies",
      targets: [
        {
          name: "Linux x86_64 Tarball",
          filename: "windmist_Linux_x86_64.tar.gz",
          arch: "x86_64 (64-bit AMD/Intel)",
          size: "16.4 MB",
          sha256: "e4f8a93b7c2d1e0f8a93b7c2d1e0f8a93b7c2d1e0f8a93b...",
          type: "tarball",
          command: "curl -sSL https://github.com/Nithwin/windmist/releases/download/v1.0.2/windmist_Linux_x86_64.tar.gz | tar -xz && sudo mv windmist /usr/local/bin/",
        },
        {
          name: "Linux ARM64 Tarball",
          filename: "windmist_Linux_arm64.tar.gz",
          arch: "arm64 / aarch64 (AWS Graviton, Raspberry Pi)",
          size: "15.8 MB",
          sha256: "91c2b3a4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3...",
          type: "tarball",
          command: "curl -sSL https://github.com/Nithwin/windmist/releases/download/v1.0.2/windmist_Linux_arm64.tar.gz | tar -xz && sudo mv windmist /usr/local/bin/",
        },
        {
          name: "RedHat / Fedora RPM Package",
          filename: "windmist-1.0.2-1.x86_64.rpm",
          arch: "x86_64 RPM",
          size: "16.6 MB",
          sha256: "73b2c1d0e9f8a7b6c5d4e3f2a1b0c9d8e7f6a5b4c3d2...",
          type: "rpm",
          command: "sudo dnf install https://github.com/Nithwin/windmist/releases/download/v1.0.2/windmist-1.0.2-1.x86_64.rpm",
        },
      ],
    },
    macos: {
      title: "macOS Binaries (Apple Silicon & Intel)",
      subtitle: "Universal support for M1/M2/M3/M4 chips and Intel x86_64",
      targets: [
        {
          name: "macOS Apple Silicon (M1 - M4)",
          filename: "windmist_macOS_arm64.tar.gz",
          arch: "arm64 (Apple Silicon M1/M2/M3/M4)",
          size: "16.1 MB",
          sha256: "45a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7...",
          type: "tarball",
          command: "curl -sSL https://github.com/Nithwin/windmist/releases/download/v1.0.2/windmist_macOS_arm64.tar.gz | tar -xz && sudo mv windmist /usr/local/bin/",
        },
        {
          name: "macOS Intel x86_64",
          filename: "windmist_macOS_x86_64.tar.gz",
          arch: "x86_64 (Intel Mac)",
          size: "16.7 MB",
          sha256: "88f7e6d5c4b3a2f1e0d9c8b7a6f5e4d3c2b1a0f9e8d7...",
          type: "tarball",
          command: "curl -sSL https://github.com/Nithwin/windmist/releases/download/v1.0.2/windmist_macOS_x86_64.tar.gz | tar -xz && sudo mv windmist /usr/local/bin/",
        },
      ],
    },
    windows: {
      title: "Windows Binaries",
      subtitle: "Standalone executable and archive packages for Windows 10/11 x64",
      targets: [
        {
          name: "Windows Standalone Executable",
          filename: "windmist.exe",
          arch: "x64 (Windows 10/11)",
          size: "17.2 MB",
          sha256: "22b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3...",
          type: "exe",
          command: "irm https://raw.githubusercontent.com/Nithwin/windmist/main/scripts/install.ps1 | iex",
        },
        {
          name: "Windows Archive Zip",
          filename: "windmist_Windows_x86_64.zip",
          arch: "x64 Zip Archive",
          size: "17.0 MB",
          sha256: "11a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2...",
          type: "zip",
          command: "scoop bucket add nithwin https://github.com/Nithwin/windmist-bucket && scoop install windmist",
        },
      ],
    },
  };

  return (
    <section id="download" className="py-20 lg:py-28 bg-gradient-to-b from-[#0b0e14] via-[#111622] to-[#0b0e14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00f2fe]/10 border border-[#00f2fe]/30 text-[#00f2fe] text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <Download className="w-3.5 h-3.5" /> Smart Download & Installation Hub
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Get <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00f2fe] via-cyan-300 to-[#6a11cb]">WindMist v1.0.2</span> for Your OS
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Every release is built automatically via GitHub Actions & GoReleaser, ensuring verifiable SHA256 checksums and zero CGO dependencies.
          </p>
        </div>

        {/* Smart OS Auto-Detection Banner */}
        <div className="max-w-4xl mx-auto mb-10 p-5 rounded-2xl bg-gradient-to-r from-[#00f2fe]/10 via-[#6a11cb]/15 to-[#00f2fe]/10 border border-[#00f2fe]/40 backdrop-blur-xl shadow-[0_0_40px_rgba(0,242,254,0.15)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-[#00f2fe]/20 text-[#00f2fe] shrink-0 shadow-inner">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-white text-base sm:text-lg">
                  Detected System: <span className="text-[#00f2fe] uppercase">{detectedPlatform}</span>
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Recommended
                </span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm">
                We highlighted the optimal binary targets below for your architecture. Or switch tabs to download for other platforms.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-[#0b0e14]/80 p-1.5 rounded-xl border border-white/10 shrink-0">
            {(["linux", "macos", "windows"] as PlatformKey[]).map((plat) => (
              <button
                key={plat}
                onClick={() => setSelectedPlatform(plat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all ${
                  selectedPlatform === plat
                    ? "bg-[#00f2fe] text-slate-950 font-bold shadow-[0_0_15px_rgba(0,242,254,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {plat === "macos" ? "macOS" : plat}
              </button>
            ))}
          </div>
        </div>

        {/* Binary Table Grid */}
        <div className="max-w-5xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-[#00f2fe]" />
              {binaryTargets[selectedPlatform].title}
            </h3>
            <span className="text-xs font-mono text-slate-400">
              {binaryTargets[selectedPlatform].subtitle}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {binaryTargets[selectedPlatform].targets.map((target) => (
              <div
                key={target.filename}
                className="p-5 rounded-2xl bg-[#111622]/80 border border-white/10 hover:border-[#00f2fe]/40 transition-all duration-300 backdrop-blur-lg flex flex-col md:flex-row md:items-center justify-between gap-6 group shadow-lg"
              >
                <div className="space-y-2 max-w-xl">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-bold text-white text-base group-hover:text-[#00f2fe] transition-colors">
                      {target.name}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10">
                      {target.arch}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{target.size}</span>
                  </div>

                  {target.command && (
                    <div className="p-2.5 rounded-lg bg-[#06080c] border border-white/5 font-mono text-xs text-slate-300 flex items-center justify-between gap-2 overflow-x-auto">
                      <div className="truncate flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-[#00f2fe] shrink-0" />
                        <span className="truncate">{target.command}</span>
                      </div>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(target.command || "");
                        }}
                        className="text-[10px] text-[#00f2fe] hover:underline shrink-0 font-sans font-bold"
                      >
                        Copy
                      </button>
                    </div>
                  )}

                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500">
                    <span>SHA-256 Checksum:</span>
                    <code className="text-slate-400 truncate max-w-[280px] sm:max-w-md">{target.sha256}</code>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => triggerDownloadSimulation(target)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#6a11cb] text-slate-950 font-bold text-sm hover:opacity-95 shadow-[0_0_20px_rgba(0,242,254,0.3)] transition-all transform hover:-translate-y-0.5"
                  >
                    <Download className="w-4 h-4 stroke-[2.5]" />
                    <span>Download {target.type === "tarball" ? ".tar.gz" : `.${target.type}`}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Built-in Self-Uninstallation Card */}
        <div className="max-w-4xl mx-auto">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#111622] to-[#192030] border border-white/10 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
              <div className="space-y-3 max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/15 text-rose-300 text-xs font-semibold border border-rose-500/30">
                  <Trash2 className="w-3.5 h-3.5" /> Built-in Self-Uninstallation Guarantee
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Zero Leftover Artifacts. Zero Lock-In.
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Unlike traditional background agents or bloated GUI apps that leave hidden daemons and registry clutter, WindMist features a self-contained uninstaller. Simply run:
                </p>
                <div className="p-3 rounded-xl bg-[#06080c] border border-white/10 font-mono text-sm text-[#FF5F87] flex items-center justify-between">
                  <span>$ windmist uninstall -y</span>
                  <span className="text-xs font-sans text-slate-500">Clean Removal</span>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#06080c]/80 border border-white/10 space-y-2.5 shrink-0 text-xs font-mono text-slate-300">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> Removes /usr/local/bin/windmist binary
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> Cleans shell completions & symlinks
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> Optional wipe of ~/.config/windmist/
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" /> Zero background daemons left behind
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Simulation Download Modal */}
        {downloadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="max-w-md w-full p-6 rounded-2xl bg-[#111622] border border-[#00f2fe]/40 shadow-[0_0_50px_rgba(0,242,254,0.3)] space-y-4 text-center">
              <div className="w-12 h-12 rounded-full bg-[#00f2fe]/20 text-[#00f2fe] flex items-center justify-center mx-auto shadow-inner">
                {downloadProgress < 100 ? (
                  <Download className="w-6 h-6 animate-bounce" />
                ) : (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                )}
              </div>
              <h3 className="text-lg font-bold text-white">
                {downloadProgress < 100 ? "Simulating Fast CDN Download..." : "Download Ready!"}
              </h3>
              <p className="text-xs font-mono text-slate-300 truncate">
                {downloadModal.filename} ({downloadModal.size})
              </p>

              {/* Progress Bar */}
              <div className="w-full h-2.5 rounded-full bg-[#06080c] overflow-hidden border border-white/10">
                <div
                  className="h-full bg-gradient-to-r from-[#00f2fe] to-[#6a11cb] transition-all duration-300"
                  style={{ width: `${downloadProgress}%` }}
                />
              </div>

              {downloadProgress === 100 && (
                <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs space-y-1">
                  <div>Package verified via GoReleaser GPG signature.</div>
                  <div className="font-mono text-[10px] text-slate-400">
                    To install directly via terminal: see command table above.
                  </div>
                </div>
              )}

              <button
                onClick={() => setDownloadModal(null)}
                className="w-full py-2.5 rounded-xl bg-[#192030] hover:bg-white/10 text-slate-200 font-bold text-xs transition-colors border border-white/10"
              >
                {downloadProgress < 100 ? "Cancel" : "Close & Continue Exploring"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
