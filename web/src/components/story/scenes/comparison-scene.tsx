"use client";

import type { StorySection } from "@/data/stories";
import { formatInlineText } from "@/components/flyout";
import { useScrollReveal } from "../use-scroll-reveal";

export function ComparisonScene({ section }: { section: StorySection }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="px-6 py-16 md:py-20">
      <div className={`max-w-5xl mx-auto ${isVisible ? "scene-fade-up" : "scene-hidden"}`}>
        <span className="text-xs font-medium uppercase tracking-wide text-violet-600 mb-3 block">
          What Changed
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-2 text-balance">
          {section.title}
        </h2>
        {section.content && (
          <p className="text-base text-stone-500 leading-relaxed mb-8">
            {formatInlineText(section.content)}
          </p>
        )}

        {section.comparisons && section.comparisons.length > 0 && (
          <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[140px_1fr_1fr] md:grid-cols-[180px_1fr_1fr] gap-4 px-5 py-3 border-b border-stone-200 bg-stone-50">
              <div />
              <div className="text-xs font-medium uppercase tracking-wide text-red-500">Before</div>
              <div className="text-xs font-medium uppercase tracking-wide text-emerald-600">After</div>
            </div>

            {/* Rows */}
            {section.comparisons.map((c, i) => (
              <div
                key={c.dimension}
                className={`grid grid-cols-[140px_1fr_1fr] md:grid-cols-[180px_1fr_1fr] gap-4 px-5 py-3 border-b border-stone-100 last:border-b-0 ${isVisible ? "scene-fade-up" : "scene-hidden"}`}
                style={{ animationDelay: `${(i + 1) * 80}ms` }}
              >
                <div className="text-sm font-medium text-stone-400">{c.dimension}</div>
                <div className="text-sm text-stone-600 bg-red-50 rounded-lg px-3 py-1.5 border border-red-100">
                  {c.before}
                </div>
                <div className="text-sm text-stone-900 font-medium bg-emerald-50 rounded-lg px-3 py-1.5 border border-emerald-100">
                  {c.after}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
