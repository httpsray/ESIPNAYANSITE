import { gameData } from "@/lib/gameData";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Content Card */}
        <div className="glass-dark rounded-3xl p-8 md:p-12 text-center">
          {/* Title Image */}
          <div className="float-up mb-6">
            <Image
              src="/images/esipnayantitle.png"
              alt="E-SIPNAYAN GAMES"
              width={450}
              height={130}
              className="mx-auto h-24 md:h-32 w-auto drop-shadow-2xl"
              priority
            />
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto leading-relaxed mb-6">
            {gameData.tagline}
          </p>

          {/* PH Badge */}
          <div className="inline-flex items-center gap-3 glass-warm rounded-full px-5 py-2.5 mb-10">
            <span className="text-2xl">🇵🇭</span>
            <span className="text-sm font-medium text-sun-300">
              Filipino Traditional Games meets Math Education
            </span>
          </div>

          {/* Main CTA */}
          <div className="space-y-4">
            <a
              href={gameData.downloads.windows.url}
              className="btn-sun inline-flex items-center gap-3 px-10 py-4 text-lg rounded-2xl"
              download
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
              </svg>
              Download for Windows
            </a>
            
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="glass px-4 py-2 rounded-xl text-sm text-white/70 font-medium">
                v{gameData.version}
              </span>
              <span className="glass px-4 py-2 rounded-xl text-sm text-white/70 font-medium">
                {gameData.downloads.windows.size}
              </span>
              <span className="glass px-4 py-2 rounded-xl text-sm text-white/70 font-medium flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-13.051-1.851" />
                </svg>
                Windows
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
