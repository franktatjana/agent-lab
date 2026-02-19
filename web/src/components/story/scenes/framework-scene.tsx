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

function DoubleDiamondVisual({ isVisible }: { isVisible: boolean }) {
  const phases = [
    { label: "Discover", sub: "Diverge", diamond: 1, color: "bg-cyan-50 border-cyan-200 text-cyan-700" },
    { label: "Define", sub: "Converge", diamond: 1, color: "bg-cyan-100 border-cyan-300 text-cyan-800" },
    { label: "Develop", sub: "Diverge", diamond: 2, color: "bg-cyan-50 border-cyan-200 text-cyan-700" },
    { label: "Deliver", sub: "Converge", diamond: 2, color: "bg-cyan-100 border-cyan-300 text-cyan-800" },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 gap-4">
        <div className={`text-center text-[10px] font-medium text-stone-400 uppercase tracking-wide ${isVisible ? "scene-fade-up" : "scene-hidden"}`}>
          Problem space
        </div>
        <div className={`text-center text-[10px] font-medium text-stone-400 uppercase tracking-wide ${isVisible ? "scene-fade-up" : "scene-hidden"}`}>
          Solution space
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1.5 md:gap-2">
        {phases.map((phase, i) => (
          <div
            key={phase.label}
            className={`rounded-xl border px-3 py-2.5 text-center ${phase.color} ${isVisible ? "scene-scale-in" : "scene-hidden"}`}
            style={{ animationDelay: `${(i + 1) * 120}ms` }}
          >
            <div className="text-[11px] font-bold">{phase.label}</div>
            <div className="text-[9px] mt-0.5 opacity-70">{phase.sub}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GrowVisual({ isVisible }: { isVisible: boolean }) {
  const phases = [
    { label: "Goal", sub: "What do you want?", color: "bg-sky-50 border-sky-200 text-sky-700" },
    { label: "Reality", sub: "What's happening?", color: "bg-sky-100 border-sky-300 text-sky-800" },
    { label: "Options", sub: "What could you do?", color: "bg-sky-50 border-sky-200 text-sky-700" },
    { label: "Will", sub: "What will you do?", color: "bg-sky-100 border-sky-300 text-sky-800" },
  ];
  return (
    <div className="grid grid-cols-4 gap-1.5 md:gap-2">
      {phases.map((phase, i) => (
        <div
          key={phase.label}
          className={`rounded-xl border px-3 py-2.5 text-center ${phase.color} ${isVisible ? "scene-scale-in" : "scene-hidden"}`}
          style={{ animationDelay: `${(i + 1) * 120}ms` }}
        >
          <div className="text-[11px] font-bold">{phase.label}</div>
          <div className="text-[9px] mt-0.5 opacity-70">{phase.sub}</div>
        </div>
      ))}
    </div>
  );
}

function ArchetypesVisual({ isVisible }: { isVisible: boolean }) {
  const types = [
    { label: "Believer", sub: "Care + belief", color: "bg-amber-50 border-amber-200 text-amber-700" },
    { label: "Commander", sub: "Intent + trust", color: "bg-stone-100 border-stone-300 text-stone-700" },
    { label: "Servant", sub: "Serve + enable", color: "bg-sky-50 border-sky-200 text-sky-700" },
    { label: "Accountable", sub: "Standards + self", color: "bg-red-50 border-red-200 text-red-700" },
    { label: "Transform", sub: "Purpose + change", color: "bg-violet-50 border-violet-200 text-violet-700" },
  ];
  return (
    <div className="grid grid-cols-5 gap-1 md:gap-1.5">
      {types.map((t, i) => (
        <div
          key={t.label}
          className={`rounded-xl border px-2 py-2.5 text-center ${t.color} ${isVisible ? "scene-scale-in" : "scene-hidden"}`}
          style={{ animationDelay: `${(i + 1) * 100}ms` }}
        >
          <div className="text-[10px] md:text-[11px] font-bold">{t.label}</div>
          <div className="text-[8px] md:text-[9px] mt-0.5 opacity-70">{t.sub}</div>
        </div>
      ))}
    </div>
  );
}

function NetworkTiersVisual({ isVisible }: { isVisible: boolean }) {
  const tiers = [
    { label: "5", sub: "Inner circle", color: "bg-purple-200 border-purple-300 text-purple-800" },
    { label: "15", sub: "Close allies", color: "bg-purple-100 border-purple-200 text-purple-700" },
    { label: "50", sub: "Active network", color: "bg-purple-50 border-purple-200 text-purple-600" },
    { label: "150", sub: "Meaningful ties", color: "bg-stone-50 border-stone-200 text-stone-600" },
  ];
  return (
    <div className="flex items-end justify-center gap-2 md:gap-3">
      {tiers.map((tier, i) => (
        <div
          key={tier.label}
          className={`rounded-xl border text-center ${tier.color} ${isVisible ? "scene-scale-in" : "scene-hidden"}`}
          style={{
            animationDelay: `${(i + 1) * 120}ms`,
            width: `${60 + i * 30}px`,
            paddingTop: `${12 + i * 6}px`,
            paddingBottom: `${12 + i * 6}px`,
          }}
        >
          <div className="text-lg font-bold">{tier.label}</div>
          <div className="text-[9px] mt-0.5 opacity-70">{tier.sub}</div>
        </div>
      ))}
    </div>
  );
}

function CultureDimensionsVisual({ isVisible }: { isVisible: boolean }) {
  const dimensions = [
    { label: "Communicating", low: "Direct", high: "Indirect", lowColor: "bg-orange-100 border-orange-200 text-orange-700", highColor: "bg-blue-100 border-blue-200 text-blue-700" },
    { label: "Trusting", low: "Task-based", high: "Relationship", lowColor: "bg-orange-100 border-orange-200 text-orange-700", highColor: "bg-blue-100 border-blue-200 text-blue-700" },
    { label: "Disagreeing", low: "Confrontational", high: "Avoids", lowColor: "bg-orange-100 border-orange-200 text-orange-700", highColor: "bg-blue-100 border-blue-200 text-blue-700" },
  ];
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-[10px] font-medium text-stone-400 uppercase tracking-wide px-1">
        <span>Dutch</span>
        <span>Japanese</span>
      </div>
      {dimensions.map((d, i) => (
        <div
          key={d.label}
          className={`flex items-center gap-2 ${isVisible ? "scene-fade-up" : "scene-hidden"}`}
          style={{ animationDelay: `${(i + 1) * 120}ms` }}
        >
          <div className={`rounded-lg border px-2.5 py-1.5 text-center flex-1 ${d.lowColor}`}>
            <div className="text-[10px] font-bold">{d.low}</div>
          </div>
          <div className="text-[10px] font-medium text-stone-400 shrink-0 w-20 text-center">{d.label}</div>
          <div className={`rounded-lg border px-2.5 py-1.5 text-center flex-1 ${d.highColor}`}>
            <div className="text-[10px] font-bold">{d.high}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function QuestionLayersVisual({ isVisible }: { isVisible: boolean }) {
  const layers = [
    { label: "Surface", q: "\"How's the project going?\"", color: "bg-teal-50 border-teal-200 text-teal-700" },
    { label: "Intent", q: "\"Should I be worried?\"", color: "bg-teal-100 border-teal-300 text-teal-800" },
    { label: "Need", q: "\"Can I stake my credibility on this?\"", color: "bg-teal-200 border-teal-400 text-teal-900" },
  ];
  return (
    <div className="space-y-0">
      {layers.map((layer, i) => {
        const isLast = i === layers.length - 1;
        return (
          <div key={layer.label}>
            <div
              className={`rounded-lg border px-4 py-2.5 ${layer.color} ${isVisible ? "scene-fade-up" : "scene-hidden"}`}
              style={{ animationDelay: `${(i + 1) * 150}ms` }}
            >
              <span className="text-xs font-bold shrink-0">{layer.label}: </span>
              <span className="text-xs">{layer.q}</span>
            </div>
            {!isLast && (
              <div className="pl-6 py-0.5">
                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" className="text-teal-300">
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

const visuals: Record<string, React.ComponentType<{ isVisible: boolean }>> = {
  "five-whys": FiveWhysVisual,
  "ccr-arc": CCRArcVisual,
  "six-hats": SixHatsVisual,
  "double-diamond": DoubleDiamondVisual,
  "grow": GrowVisual,
  "archetypes": ArchetypesVisual,
  "network-tiers": NetworkTiersVisual,
  "culture-dimensions": CultureDimensionsVisual,
  "question-layers": QuestionLayersVisual,
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
