"use client";

import type { StorySection } from "@/data/stories";
import { formatInlineText } from "@/components/flyout";
import { useScrollReveal } from "../use-scroll-reveal";

const typeLabels: Record<string, { label: string; color: string; metricBg: string; metricBorder: string; metricColor: string }> = {
  impact:  { label: "The Impact",  color: "text-orange-600", metricBg: "bg-orange-50",  metricBorder: "border-orange-200", metricColor: "text-orange-700" },
  outcome: { label: "The Outcome", color: "text-blue-600",   metricBg: "bg-blue-50",    metricBorder: "border-blue-200",   metricColor: "text-blue-700" },
};

export function MetricScene({ section }: { section: StorySection }) {
  const { ref, isVisible } = useScrollReveal();
  const typeConfig = typeLabels[section.type] ?? { label: section.type, color: "text-stone-500", metricBg: "bg-stone-50", metricBorder: "border-stone-200", metricColor: "text-stone-700" };

  return (
    <section ref={ref} className="px-6 py-16 md:py-20">
      <div className={`max-w-5xl mx-auto ${isVisible ? "scene-fade-up" : "scene-hidden"}`}>
        <span className={`text-xs font-medium uppercase tracking-wide ${typeConfig.color} mb-3 block`}>
          {typeConfig.label}
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-2 text-balance">
          {section.title}
        </h2>

        {section.content && (
          <p className="text-base text-stone-500 leading-relaxed mb-8">
            {formatInlineText(section.content)}
          </p>
        )}

        {section.metrics && section.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-5">
            {section.metrics.map((m, i) => (
              <div
                key={m.label}
                className={`text-center py-8 ${typeConfig.metricBg} rounded-xl border ${typeConfig.metricBorder} ${isVisible ? "scene-scale-in" : "scene-hidden"}`}
                style={{ animationDelay: `${(i + 1) * 150}ms` }}
              >
                <div className={`text-4xl md:text-5xl font-bold ${typeConfig.metricColor} tracking-tight`}>
                  {m.value}
                </div>
                <div className="text-sm text-stone-500 mt-2">{m.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
