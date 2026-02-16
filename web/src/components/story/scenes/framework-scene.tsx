"use client";

import type { StorySection } from "@/data/stories";
import { formatInlineText } from "@/components/flyout";
import { useScrollReveal } from "../use-scroll-reveal";

function FiveWhysVisual({ isVisible }: { isVisible: boolean }) {
  const levels = [
    { label: "Surface", q: "What happened?" },
    { label: "Why 1", q: "Why did it happen?" },
    { label: "Why 2", q: "Why was that?" },
    { label: "Why 3", q: "What caused that?" },
    { label: "Why 4", q: "Why wasn't it caught?" },
    { label: "Root", q: "Actionable cause" },
  ];
  return (
    <div className="space-y-0">
      {levels.map((level, i) => {
        const isRoot = i === levels.length - 1;
        const isLast = i === levels.length - 1;
        return (
          <div key={i}>
            <div
              className={`flex items-center gap-3 px-3 py-2 rounded-lg ${isRoot ? "bg-amber-50 border border-amber-200" : ""} ${isVisible ? "scene-fade-up" : "scene-hidden"}`}
              style={{ animationDelay: `${(i + 1) * 100}ms` }}
            >
              <span className={`text-xs font-bold shrink-0 w-14 ${isRoot ? "text-amber-700" : "text-stone-400"}`}>
                {level.label}
              </span>
              <span className={`text-sm ${isRoot ? "text-amber-800 font-medium" : "text-stone-600"}`}>
                {level.q}
              </span>
            </div>
            {!isLast && (
              <div className="pl-9 py-0.5">
                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" className="text-stone-300">
                  <path d="M6 2v8M3 7l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function CCRArcVisual({ isVisible }: { isVisible: boolean }) {
  const phases = [
    { label: "Context", sub: "What was expected", color: "bg-stone-100 border-stone-200 text-stone-600" },
    { label: "Conflict", sub: "What the data reveals", color: "bg-red-50 border-red-200 text-red-700" },
    { label: "Resolution", sub: "What should happen", color: "bg-emerald-50 border-emerald-200 text-emerald-700" },
  ];
  return (
    <div className="grid grid-cols-3 gap-2 md:gap-3">
      {phases.map((phase, i) => (
        <div
          key={phase.label}
          className={`rounded-xl border px-4 py-3 text-center ${phase.color} ${isVisible ? "scene-scale-in" : "scene-hidden"}`}
          style={{ animationDelay: `${(i + 1) * 150}ms` }}
        >
          <div className="text-sm font-bold">{phase.label}</div>
          <div className="text-[10px] mt-0.5 opacity-70">{phase.sub}</div>
        </div>
      ))}
    </div>
  );
}

function SixHatsVisual({ isVisible }: { isVisible: boolean }) {
  const hats = [
    { label: "White", sub: "Facts", color: "bg-stone-50 border-stone-300 text-stone-600" },
    { label: "Red", sub: "Feelings", color: "bg-red-50 border-red-300 text-red-600" },
    { label: "Black", sub: "Risks", color: "bg-stone-800 border-stone-700 text-stone-100" },
    { label: "Yellow", sub: "Benefits", color: "bg-yellow-50 border-yellow-300 text-yellow-700" },
    { label: "Green", sub: "Ideas", color: "bg-emerald-50 border-emerald-300 text-emerald-700" },
    { label: "Blue", sub: "Process", color: "bg-blue-50 border-blue-300 text-blue-600" },
  ];
  return (
    <div className="grid grid-cols-6 gap-1.5 md:gap-2">
      {hats.map((hat, i) => (
        <div
          key={hat.label}
          className={`rounded-xl border px-2 py-2.5 text-center ${hat.color} ${isVisible ? "scene-scale-in" : "scene-hidden"}`}
          style={{ animationDelay: `${(i + 1) * 80}ms` }}
        >
          <div className="text-[11px] font-bold">{hat.label}</div>
          <div className="text-[9px] mt-0.5 opacity-70">{hat.sub}</div>
        </div>
      ))}
    </div>
  );
}

const visuals: Record<string, React.ComponentType<{ isVisible: boolean }>> = {
  "five-whys": FiveWhysVisual,
  "ccr-arc": CCRArcVisual,
  "six-hats": SixHatsVisual,
};

export function FrameworkScene({ section }: { section: StorySection }) {
  const { ref, isVisible } = useScrollReveal();
  const fw = section.framework;
  if (!fw) return null;

  const VisualComponent = visuals[fw.visual];

  return (
    <section ref={ref} className="px-6 py-16 md:py-20">
      <div className={`max-w-5xl mx-auto ${isVisible ? "scene-fade-up" : "scene-hidden"}`}>
        <span className="text-xs font-medium uppercase tracking-wide text-amber-600 mb-3 block">
          Turning Point
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-2 text-balance">
          {section.title}
        </h2>
        {section.content && (
          <p className="text-base text-stone-500 leading-relaxed mb-8">
            {formatInlineText(section.content)}
          </p>
        )}

        <div className="grid md:grid-cols-[1fr_280px] gap-6">
          {/* Framework card with visual */}
          <div className="bg-white rounded-xl border border-stone-200 p-5 md:p-6">
            <div className="flex items-baseline gap-2 mb-1">
              <span className="text-base font-bold text-stone-900">{fw.name}</span>
              <span className="text-[11px] text-stone-400">{fw.origin}</span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed mb-4">{fw.description}</p>

            {VisualComponent && <VisualComponent isVisible={isVisible} />}

            {fw.how && (
              <div className="mt-4 pt-4 border-t border-stone-100">
                <span className="text-xs font-medium uppercase tracking-wide text-stone-400 block mb-1">How it works</span>
                <p className="text-sm text-stone-600 leading-relaxed">{fw.how}</p>
              </div>
            )}

            {fw.references && fw.references.length > 0 && (
              <div className="mt-3 pt-3 border-t border-stone-100 flex flex-wrap gap-2">
                {fw.references.map((r) => (
                  <a
                    key={r.url}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-stone-400 hover:text-amber-600 transition-colors underline decoration-stone-200 hover:decoration-amber-400 underline-offset-2"
                  >
                    {r.label} &rarr;
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Right column: why + principles */}
          <div className="flex flex-col gap-3">
            <div
              className={`bg-amber-50 border border-amber-200 rounded-xl p-4 ${isVisible ? "scene-fade-up" : "scene-hidden"}`}
              style={{ animationDelay: "300ms" }}
            >
              <span className="text-xs font-medium uppercase tracking-wide text-amber-600 block mb-1">Why this framework</span>
              <p className="text-sm text-amber-800 font-medium leading-relaxed">{fw.why}</p>
            </div>

            {fw.principles.map((p, i) => (
              <div
                key={p.label}
                className={`bg-white rounded-xl border border-stone-200 p-3.5 ${isVisible ? "scene-fade-up" : "scene-hidden"}`}
                style={{ animationDelay: `${450 + i * 100}ms` }}
              >
                <div className="text-sm font-semibold text-stone-900 mb-0.5">{p.label}</div>
                <p className="text-xs text-stone-500 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
