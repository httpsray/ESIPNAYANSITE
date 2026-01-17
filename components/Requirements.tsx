import { gameData } from "@/lib/gameData";

export default function Requirements() {
  const { requirements } = gameData;

  return (
    <section id="requirements" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="glass-dark rounded-2xl p-6 text-center mb-8">
          <h2 className="font-game text-3xl md:text-4xl font-bold text-white mb-2">
            💻 System Requirements
          </h2>
          <p className="text-white/60">
            E-SIPNAYAN runs smoothly on most Windows computers
          </p>
        </div>

        {/* Requirements Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {/* Minimum */}
          <div className="glass-dark rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-xl">⚙️</span>
              </div>
              <h3 className="font-game text-lg font-bold text-white">Minimum</h3>
            </div>
            
            <dl className="space-y-3 text-sm">
              {[
                { label: "OS", value: requirements.minimum.os },
                { label: "Processor", value: requirements.minimum.processor },
                { label: "Memory", value: requirements.minimum.memory },
                { label: "Graphics", value: requirements.minimum.graphics },
                { label: "Storage", value: requirements.minimum.storage },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-white/5">
                  <dt className="text-white/50">{item.label}</dt>
                  <dd className="text-white/80 font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Recommended */}
          <div className="glass-dark rounded-2xl p-6 border border-sun-400/30">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-sun-400 to-sun-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">⭐</span>
              </div>
              <h3 className="font-game text-lg font-bold text-white">Recommended</h3>
            </div>
            
            <dl className="space-y-3 text-sm">
              {[
                { label: "OS", value: requirements.recommended.os },
                { label: "Processor", value: requirements.recommended.processor },
                { label: "Memory", value: requirements.recommended.memory },
                { label: "Graphics", value: requirements.recommended.graphics },
                { label: "Storage", value: requirements.recommended.storage },
              ].map((item) => (
                <div key={item.label} className="flex justify-between items-center py-2 border-b border-sun-400/10">
                  <dt className="text-white/50">{item.label}</dt>
                  <dd className="text-sun-300 font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
