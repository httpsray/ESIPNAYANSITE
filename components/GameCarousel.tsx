"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { gameData } from "@/lib/gameData";

const games = [
  {
    image: "/images/mathpikofeatured.png",
    title: "Mathpiko",
    description: "Calculate areas while hopping through the classic Piko game",
    color: "#00d4ff",
  },
  {
    image: "/images/tumbangpresofeatured.png",
    title: "Tumbang Preso",
    description: "Solve surface area problems to knock down the can",
    color: "#ff2d78",
  },
  {
    image: "/images/luksongbakafeatured.png",
    title: "Luksong Baka",
    description: "Jump over geometry challenges with increasing difficulty",
    color: "#00ff88",
  },
];

export default function GameCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? games.length - 1 : prev - 1));
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === games.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 600);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Get ordered cards with center being active
  const getOrderedGames = () => {
    const prevIndex = activeIndex === 0 ? games.length - 1 : activeIndex - 1;
    const nextIndex = activeIndex === games.length - 1 ? 0 : activeIndex + 1;
    return [
      { ...games[prevIndex], position: "left", index: prevIndex },
      { ...games[activeIndex], position: "center", index: activeIndex },
      { ...games[nextIndex], position: "right", index: nextIndex },
    ];
  };

  const orderedGames = getOrderedGames();

  return (
    <div className="relative">
      {/* Cards Container */}
      <div className="flex items-center justify-center gap-2 md:gap-4">
        {/* Left Arrow */}
        <button
          onClick={goToPrev}
          disabled={isAnimating}
          className="carousel-nav-btn flex-shrink-0 w-10 h-10 md:w-12 md:h-12"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards */}
        <div className="carousel-track">
          {orderedGames.map((game) => (
            <div
              key={game.index}
              className={`carousel-slide ${game.position}`}
              onClick={() => {
                if (game.position !== 'center' && !isAnimating) {
                  setIsAnimating(true);
                  setActiveIndex(game.index);
                }
              }}
            >
              {/* Card content */}
              <div className="carousel-card-content">
                <Image
                  src={game.image}
                  alt={game.title}
                  width={320}
                  height={200}
                  className="carousel-image w-[200px] md:w-[320px] h-auto"
                />
              </div>
              
              {/* Title and description */}
              <div className={`carousel-info ${game.position !== 'center' ? 'opacity-0' : 'opacity-100'}`}>
                <h3 className="text-base md:text-xl font-bold mb-1">
                  {game.title}
                </h3>
                <p className="text-muted text-xs md:text-sm">
                  {game.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          disabled={isAnimating}
          className="carousel-nav-btn flex-shrink-0 w-10 h-10 md:w-12 md:h-12"
        >
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6 md:mt-8">
        {games.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              if (!isAnimating && idx !== activeIndex) {
                setIsAnimating(true);
                setActiveIndex(idx);
              }
            }}
            className={`carousel-dot ${idx === activeIndex ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}
