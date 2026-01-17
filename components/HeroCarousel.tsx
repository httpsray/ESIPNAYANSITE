"use client";

import { useState } from "react";
import Image from "next/image";
import { gameData } from "@/lib/gameData";
import DownloadButton from "@/components/DownloadButton";

const slides = [
  {
    image: "/images/esipnayangamebg.png",
    title: "E-SIPNAYAN Games",
    subtitle: "Learn Math Through Play",
  },
  {
    image: "/images/mathpikofeatured.png",
    title: "Mathpiko",
    subtitle: "Calculate areas while hopping",
  },
  {
    image: "/images/tumbangpresofeatured.png",
    title: "Tumbang Preso",
    subtitle: "Solve surface area problems",
  },
  {
    image: "/images/luksongbakafeatured.png",
    title: "Luksong Baka",
    subtitle: "Jump over geometry challenges",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
        {/* Main Image */}
        <div className="lg:col-span-3 relative">
          <div className="card overflow-hidden">
            <div className="relative aspect-video">
              <Image
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                fill
                priority
                className="object-cover transition-opacity duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                <h3 className="text-lg md:text-2xl font-bold mb-1">{slides[currentIndex].title}</h3>
                <p className="text-white/70 text-sm md:text-base">{slides[currentIndex].subtitle}</p>
              </div>
            </div>
          </div>

          {/* Arrow Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 hover:bg-[var(--accent)] border border-white/20 hover:border-[var(--accent)] flex items-center justify-center transition-all"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/50 hover:bg-[var(--accent)] border border-white/20 hover:border-[var(--accent)] flex items-center justify-center transition-all"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Side Panel */}
        <div className="lg:col-span-2 flex flex-col gap-3 md:gap-4">
          {/* Thumbnails */}
          <div className="grid grid-cols-3 lg:grid-cols-2 gap-2 md:gap-3">
            {slides.slice(1).map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index + 1)}
                className={`card overflow-hidden transition-all ${
                  currentIndex === index + 1 ? "ring-2 ring-[var(--accent)]" : "hover:ring-1 hover:ring-white/30"
                }`}
              >
                <div className="relative aspect-video">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-1.5 md:p-2">
                    <span className="text-[10px] md:text-xs font-semibold truncate">{slide.title}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <DownloadButton variant="small" className="mt-auto" />

          {/* Info */}
          <div className="flex gap-2 text-[10px] md:text-xs text-muted justify-center flex-wrap">
            <span className="bg-white/10 px-2 md:px-3 py-1 md:py-1.5 rounded">v{gameData.version}</span>
            <span className="bg-white/10 px-2 md:px-3 py-1 md:py-1.5 rounded">{gameData.downloads.windows.size}</span>
            <span className="bg-white/10 px-2 md:px-3 py-1 md:py-1.5 rounded">Windows</span>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4 md:mt-6">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              currentIndex === index ? "bg-[var(--accent)] w-6" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
