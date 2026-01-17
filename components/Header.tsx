"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="header fixed top-0 left-0 right-0 z-50 h-14 md:h-16">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-10">
          <a href="#" className="flex items-center ml-4 mt-12">
            <Image
              src="/images/esipnayantitle.png"
              alt="E-SIPNAYAN"
              width={400}
              height={120}
              className="h-16 md:h-24 w-auto"
            />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#games" className="nav-link">Games</a>
            <a href="#requirements" className="nav-link">Requirements</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#about" className="nav-link">About Us</a>
          </nav>
        </div>

        {/* Download Button */}
        <a href="#download" className="btn-accent px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm">
          Download
        </a>
      </div>
    </header>
  );
}
