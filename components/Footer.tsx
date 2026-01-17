import { gameData } from "@/lib/gameData";
import Image from "next/image";

export default function Footer() {
  const { footer } = gameData;

  return (
    <footer className="py-8 mt-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="glass-dark rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo & Copyright */}
            <div className="flex items-center gap-4">
              <Image
                src="/images/e-sipnayanico.png"
                alt="E-SIPNAYAN"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div className="text-center md:text-left">
                <p className="font-game font-bold text-white">E-SIPNAYAN Games</p>
                <p className="text-xs text-white/50">{footer.copyright}</p>
              </div>
            </div>
            
            {/* PH Flag & Contact */}
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 text-sm text-white/60">
                <span className="text-xl">🇵🇭</span>
                Proudly Filipino
              </span>
              <a
                href={`mailto:${footer.contact}`}
                className="text-sm text-sun-400 hover:text-sun-300 transition-colors font-medium"
              >
                {footer.contact}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
