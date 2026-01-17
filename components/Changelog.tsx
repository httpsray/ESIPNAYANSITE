import { gameData } from "@/lib/gameData";

export default function Changelog() {
  const { changelog } = gameData;

  return (
    <section id="changelog" className="py-section border-t border-border-subtle">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-semibold text-text-primary">Changelog</h2>

        <div className="mt-8 space-y-8">
          {changelog.map((entry, index) => (
            <article key={entry.version} className="relative">
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-lg font-medium text-text-primary">
                  {entry.version}
                  {index === 0 && (
                    <span className="ml-2 text-xs text-accent font-normal">
                      Latest
                    </span>
                  )}
                </h3>
                <time className="text-sm text-text-muted">{entry.date}</time>
              </div>

              <ul className="mt-3 space-y-1.5">
                {entry.changes.map((change, i) => (
                  <li key={i} className="text-sm text-text-secondary flex gap-2">
                    <span className="text-text-muted select-none">–</span>
                    <span>{change}</span>
                  </li>
                ))}
              </ul>

              {index < changelog.length - 1 && (
                <div className="mt-8 border-b border-border-subtle" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
