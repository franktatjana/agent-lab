"use client";

import type { StorySection } from "@/data/stories";
import { formatInlineText } from "@/components/flyout";
import { useScrollReveal } from "../use-scroll-reveal";

export function StepsScene({ section }: { section: StorySection }) {
  const { ref, isVisible } = useScrollReveal();
  const hasMetrics = section.metrics && section.metrics.length > 0;

  return (
    <section ref={ref} className="px-6 py-16 md:py-20">
      <div className={`max-w-5xl mx-auto ${isVisible ? "scene-fade-up" : "scene-hidden"}`}>
        <span className="text-xs font-medium uppercase tracking-wide text-emerald-600 mb-3 block">
          The Solution
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-2 text-balance">
          {section.title}
        </h2>
        {section.content && (
          <p className="text-base text-stone-500 leading-relaxed mb-8">
            {formatInlineText(section.content)}
          </p>
        )}

        <div className={`grid ${hasMetrics ? "md:grid-cols-[1fr_240px]" : ""} gap-8`}>
          {/* Steps + callout */}
          <div>
            {section.steps && (
              <div className="space-y-0">
                {section.steps.map((step, i) => (
                  <div
                    key={i}
                    className={`relative flex gap-4 ${isVisible ? "scene-fade-up" : "scene-hidden"}`}
                    style={{ animationDelay: `${(i + 1) * 150}ms` }}
                  >
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-7 h-7 rounded-full bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 text-xs font-bold">
                        {i + 1}
                      </div>
                      {i < section.steps!.length - 1 && (
                        <div className="w-px flex-1 bg-stone-200 my-0.5" />
                      )}
                    </div>

                    <div className="pb-5 flex-1">
                      <p className="text-stone-900 font-semibold text-base mb-0.5">{formatInlineText(step.label)}</p>
                      <p className="text-stone-500 text-sm leading-relaxed">{formatInlineText(step.detail)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {section.callout && (
              <div
                className={`mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4 ${isVisible ? "scene-scale-in" : "scene-hidden"}`}
                style={{ animationDelay: `${((section.steps?.length ?? 5) + 1) * 150}ms` }}
              >
                <span className="text-xs font-medium uppercase tracking-wide text-emerald-600 block mb-0.5">{section.callout.label}</span>
                <p className="text-emerald-800 font-semibold text-base">
                  {formatInlineText(section.callout.text)}
                </p>
              </div>
            )}
          </div>

          {/* Metrics sidebar */}
          {hasMetrics && (
            <div className="flex flex-col justify-center gap-4">
              {section.metrics!.map((m, i) => (
                <div
                  key={m.label}
                  className={`bg-white border border-stone-200 rounded-xl px-5 py-4 text-center ${isVisible ? "scene-scale-in" : "scene-hidden"}`}
                  style={{ animationDelay: `${((section.steps?.length ?? 5) + 2 + i) * 150}ms` }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-stone-900">{m.value}</div>
                  <div className="text-xs text-stone-500 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
