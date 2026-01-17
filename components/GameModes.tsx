import { gameData } from "@/lib/gameData";
import Image from "next/image";

const gameImages = [
  "/images/mathpikogame1.png",
  "/images/tumbangpresogame2.png",
  "/images/luksongbakagame3.png",
];

const gameColors = [
  { bg: "from-blue-500/20 to-blue-600/10", border: "border-blue-400/30", tag: "bg-blue-500" },
  { bg: "from-orange-500/20 to-orange-600/10", border: "border-orange-400/30", tag: "bg-orange-500" },
  { bg: "from-green-500/20 to-green-600/10", border: "border-green-400/30", tag: "bg-green-500" },
];

export default function GameModes() {
  return (
    <section id="games" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="glass-dark rounded-2xl p-6 text-center mb-8">
          <h2 className="font-game text-3xl md:text-4xl font-bold text-white mb-2">
            🎮 Game Modes
          </h2>
          <p className="text-white/60">
            Three classic Filipino street games reimagined for learning geometry
          </p>
        </div>

        {/* Game Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {gameData.features.map((feature, index) => (
            <div
              key={feature.title}
              className={`game-card glass rounded-2xl overflow-hidden border ${gameColors[index].border}`}
            >
              {/* Screenshot */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={gameImages[index]}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
                {/* Game Name Tag */}
                <div className={`absolute top-3 left-3 ${gameColors[index].tag} px-3 py-1 rounded-lg`}>
                  <span className="text-xs font-bold text-white uppercase tracking-wide">
                    {feature.title.split(" ")[0]}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className={`p-5 bg-gradient-to-b ${gameColors[index].bg}`}>
                <h3 className="font-game text-lg font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Focus Banner */}
        <div className="glass-warm rounded-2xl p-6 mt-8 flex items-center justify-center gap-4">
          <span className="text-4xl">📐</span>
          <div className="text-center">
            <h4 className="font-game font-bold text-white text-lg">Mathematics Focus</h4>
            <p className="text-sm text-sun-300/80">
              Area and Surface Area (Geometry) • For Grade School Students
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
