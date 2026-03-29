"use client";

import { useState, useEffect } from "react";
import { gameData } from "@/lib/gameData";

interface DownloadButtonProps {
  variant?: "large" | "small";
  className?: string;
}

export default function DownloadButton({ variant = "large", className = "" }: DownloadButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const [deviceInfo, setDeviceInfo] = useState("");
  const [isWindows, setIsWindows] = useState(true);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Detect device/OS
    if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
      setDeviceInfo("iOS Device (iPhone/iPad)");
      setIsWindows(false);
    } else if (userAgent.includes("android")) {
      setDeviceInfo("Android Device");
      setIsWindows(false);
    } else if (userAgent.includes("mac")) {
      setDeviceInfo("macOS");
      setIsWindows(false);
    } else if (userAgent.includes("linux") && !userAgent.includes("android")) {
      setDeviceInfo("Linux");
      setIsWindows(false);
    } else if (userAgent.includes("win")) {
      setIsWindows(true);
    } else {
      setDeviceInfo("your device");
      setIsWindows(false);
    }
  }, []);

  const handleDownloadClick = (e: React.MouseEvent) => {
    if (!isWindows) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  const handleContinueDownload = () => {
    setShowModal(false);
    // Trigger download
    const link = document.createElement("a");
    link.href = gameData.downloads.windows.url;
    link.click();
  };

  const buttonStyles = variant === "large" 
    ? "btn-accent px-6 md:px-10 py-3 md:py-4 text-base md:text-lg inline-flex items-center gap-2 md:gap-3"
    : "btn-accent py-3 md:py-4 text-sm md:text-base text-center flex items-center justify-center gap-2 w-full";

  const iconSize = variant === "large" ? "w-6 h-6" : "w-4 h-4 md:w-5 md:h-5";
  const buttonText = variant === "large" ? "Download for Windows" : "Download Now";

  return (
    <>
      <a
        href={gameData.downloads.windows.url}
        download
        onClick={handleDownloadClick}
        className={`${buttonStyles} ${className}`}
      >
        <svg className={iconSize} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        {buttonText}
      </a>

      {/* Compatibility Warning Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          />
          
          {/* Modal */}
          <div className="glass-modal relative z-10 w-full max-w-md p-6 rounded-2xl animate-modal-in">
            {/* Warning Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-center mb-2">
              Compatibility Warning
            </h3>
            <p className="text-muted text-center text-sm mb-6">
              This game is designed for <span className="text-white font-semibold">Windows PC</span> only. 
              It may not be compatible with <span className="text-yellow-400 font-semibold">{deviceInfo}</span>.
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <button
                onClick={handleContinueDownload}
                className="w-full py-3 px-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold rounded-xl transition-all"
              >
                Download Anyway
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl transition-all"
              >
                Cancel
              </button>
            </div>

            {/* Note */}
            <p className="text-xs text-muted text-center mt-4">
              💡 For the best experience, please use a Windows PC
            </p>
          </div>
        </div>
      )}
    </>
  );
}
