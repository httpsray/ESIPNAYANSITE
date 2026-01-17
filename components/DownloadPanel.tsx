"use client";

import { useState } from "react";
import { gameData } from "@/lib/gameData";

export default function DownloadPanel() {
  const { downloads } = gameData;
  const [copied, setCopied] = useState(false);

  const copyChecksum = async () => {
    await navigator.clipboard.writeText(downloads.windows.sha256);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="download" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="glass-dark rounded-2xl p-6 text-center mb-8">
          <h2 className="font-game text-3xl md:text-4xl font-bold text-white mb-2">
            ⬇️ Download
          </h2>
          <p className="text-white/60">
            Get E-SIPNAYAN Games for your computer
          </p>
        </div>

        {/* Download Card */}
        <div className="glass-dark rounded-3xl p-6 md:p-8 border border-sun-400/20 border-glow">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
            {/* Windows Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.851" />
              </svg>
            </div>
            
            {/* File Info */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-game text-xl font-bold text-white mb-1">
                {downloads.windows.name}
              </h3>
              <p className="text-sm text-white/50">
                {downloads.windows.type} • {downloads.windows.size} • v{downloads.windows.version}
              </p>
            </div>
            
            {/* Download Button */}
            <a
              href={downloads.windows.url}
              className="btn-sun px-8 py-3.5 rounded-xl text-base flex items-center gap-2"
              download
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              Download
            </a>
          </div>

          {/* SHA256 Checksum */}
          <div className="glass rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-white/50 uppercase tracking-wider">
                🔐 SHA256 Checksum
              </span>
              <button
                onClick={copyChecksum}
                className="text-xs font-semibold text-sun-400 hover:text-sun-300 transition-colors"
              >
                {copied ? "✓ Copied!" : "Copy"}
              </button>
            </div>
            <code className="text-xs text-white/60 font-mono break-all block leading-relaxed">
              {downloads.windows.sha256}
            </code>
          </div>
        </div>

        {/* Verification Instructions */}
        <div className="glass-dark rounded-2xl p-6 mt-6 border border-green-500/20">
          <h4 className="font-game font-bold text-white flex items-center gap-3 mb-4">
            <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-lg">
              ✅
            </span>
            Verify Your Download
          </h4>
          <ol className="text-sm text-white/60 space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-sun-400 font-bold">1.</span>
              <span>Open PowerShell and run: <code className="glass px-2 py-0.5 rounded text-xs text-sun-300">Get-FileHash .\E-SipnayanGames-Setup.exe</code></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sun-400 font-bold">2.</span>
              <span>Compare the output hash with the checksum above</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-sun-400 font-bold">3.</span>
              <span>If they match, the file is authentic and safe to install!</span>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
