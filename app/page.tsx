import { gameData } from "@/lib/gameData";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import GameCarousel from "@/components/GameCarousel";
import DownloadButton from "@/components/DownloadButton";
import Header from "@/components/Header";
import DownloadCounter from "@/components/DownloadCounter";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header />

      {/* Hero Section with Carousel */}
      <section className="pt-20 md:pt-28 pb-10 md:pb-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Featured Label */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 mb-4 md:mb-6">
            <span className="section-title text-xl md:text-2xl">Featured</span>
            <span className="text-muted text-xs md:text-sm">Educational Math Game</span>
          </div>

          {/* Carousel */}
          <HeroCarousel />

          {/* Tagline */}
          <div className="text-center mt-10 md:mt-16">
            <h2 className="section-title text-xl md:text-2xl mb-2">Learn Math The Filipino Way</h2>
            <p className="text-muted text-sm md:text-base">Traditional games meet modern education</p>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section id="games" className="py-12 md:py-20 px-4 md:px-6 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-8 md:mb-12">
            <span className="badge-featured text-xs md:text-sm">Featured</span>
            <span className="text-muted text-xs md:text-sm uppercase tracking-wide">Game Modes</span>
          </div>

          <GameCarousel />
        </div>
      </section>

      {/* Requirements Section */}
      <section id="requirements" className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-xl md:text-2xl text-center mb-8 md:mb-12">System Requirements</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Minimum */}
            <div className="card p-6">
              <h3 className="text-sm font-bold text-muted uppercase tracking-wide mb-4">
                Minimum
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted">OS</span>
                  <span>{gameData.requirements.minimum.os}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted">Processor</span>
                  <span>{gameData.requirements.minimum.processor}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted">Memory</span>
                  <span>{gameData.requirements.minimum.memory}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted">Storage</span>
                  <span>{gameData.requirements.minimum.storage}</span>
                </li>
              </ul>
            </div>

            {/* Recommended */}
            <div className="card p-6 border border-[var(--accent)]">
              <h3 className="text-sm font-bold text-[var(--accent)] uppercase tracking-wide mb-4">
                Recommended
              </h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span className="text-muted">OS</span>
                  <span>{gameData.requirements.recommended.os}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted">Processor</span>
                  <span>{gameData.requirements.recommended.processor}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted">Memory</span>
                  <span>{gameData.requirements.recommended.memory}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted">Storage</span>
                  <span>{gameData.requirements.recommended.storage}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-20 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-xl md:text-2xl text-center mb-8 md:mb-12">FAQ</h2>

          <div className="space-y-3">
            {gameData.faq.map((item, index) => (
              <details key={index} className="faq-item group">
                <summary className="flex items-center justify-between p-4 font-medium text-sm">
                  {item.question}
                  <span className="text-muted group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <div className="px-4 pb-4 text-muted text-sm">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-title text-xl md:text-2xl mb-3">Ready to Play?</h2>
          <p className="text-muted text-sm md:text-base mb-6 md:mb-8">
            Download E-SIPNAYAN Games and start learning math the fun way.
          </p>

          <DownloadButton />

          <div className="mt-6 flex justify-center gap-3 text-xs text-muted">
            <span>{gameData.downloads.windows.size}</span>
            <span>•</span>
            <span>v{gameData.version}</span>
            <span>•</span>
            <span>Free</span>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-xl md:text-2xl text-center mb-4">Meet The Creators</h2>
          <p className="text-muted text-center text-sm md:text-base mb-12">The team behind E-SIPNAYAN Games</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            <div className="creator-card">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-[var(--accent)]">
                <Image
                  src="/images/keith_id.png"
                  alt="Marielle Keith A. Ragasa"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-sm md:text-base text-center">Marielle Keith A. Ragasa</h3>
            </div>
            <div className="creator-card">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-[var(--accent)]">
                <Image
                  src="/images/ANDREA A. REVILLA.jpg"
                  alt="Andrea A. Revilla"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-sm md:text-base text-center">Andrea A. Revilla</h3>
            </div>
            <div className="creator-card">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-[var(--accent)]">
                <Image
                  src="/images/jam_id.png"
                  alt="Jamalia P. Saripada"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-sm md:text-base text-center">Jamalia P. Saripada</h3>
            </div>
            <div className="creator-card">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden mx-auto mb-3 border-2 border-[var(--accent)]">
                <Image
                  src="/images/ASIA MARIEL C. VICTORIA.jpg"
                  alt="Asia Mariel C. Victoria"
                  width={96}
                  height={96}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-bold text-sm md:text-base text-center">Asia Mariel C. Victoria</h3>
            </div>
          </div>

          {/* Download Counter */}
          <div className="text-center">
            <DownloadCounter />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer py-8 md:py-10 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <Image
              src="/images/esipnayantitle.png"
              alt="E-SIPNAYAN"
              width={400}
              height={120}
              className="h-16 md:h-24 w-auto"
            />
            
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted">
              <span>🇵🇭 Made in the Philippines</span>
              <a href={`mailto:${gameData.footer.contact}`} className="hover:text-white transition">
                {gameData.footer.contact}
              </a>
            </div>
          </div>
          
          <p className="text-center text-muted text-xs mt-6 md:mt-8">
            {gameData.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
}
