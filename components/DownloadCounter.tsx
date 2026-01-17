"use client";

import { useState, useEffect, useCallback } from "react";




export default function DownloadCounter() {
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState(0);

  // Fetch the real counter from the API
  useEffect(() => {
    fetch("/api/counter")
      .then(res => res.json())
      .then(data => {
        setCount(typeof data.count === "number" ? data.count : 0);
      });
  }, []);

  useEffect(() => {
    // Animate the counter
    if (displayCount < count) {
      const increment = Math.ceil((count - displayCount) / 20);
      const timer = setTimeout(() => {
        setDisplayCount(prev => Math.min(prev + increment, count));
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [displayCount, count]);


  // Function to increment download count via API
  const incrementCount = useCallback(async () => {
    const res = await fetch("/api/counter", { method: "POST" });
    const data = await res.json();
    setCount(typeof data.count === "number" ? data.count : 0);
  }, []);

  // Expose increment function globally
  useEffect(() => {
    (window as any).incrementDownloadCount = incrementCount;
    return () => {
      delete (window as any).incrementDownloadCount;
    };
  }, [incrementCount]);

  return (
    <div className="download-counter">
      <div className="flex flex-col items-center gap-2">
        <div className="text-4xl md:text-6xl font-bold text-[var(--accent)]">
          {displayCount.toLocaleString()}
        </div>
        <div className="text-muted text-sm md:text-base uppercase tracking-wider">
          Total Downloads
        </div>
      </div>
    </div>
  );
}
