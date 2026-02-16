"use client";

import type { StorySection } from "@/data/stories";
import { formatInlineText } from "@/components/flyout";
import { useScrollReveal } from "../use-scroll-reveal";
import { X, Check, AlertTriangle } from "lucide-react";

const typeLabels: Record<string, { label: string; color: string }> = {
  cards:    { label: "The Evidence", color: "text-red-600" },
  problem:  { label: "The Problem",  color: "text-red-600" },
};

const statusStyles: Record<string, { color: string; icon: typeof X }> = {
  Wrong:        { color: "text-red-500",    icon: X },
  Valid:        { color: "text-emerald-600", icon: Check },
  Stuck:        { color: "text-amber-600",  icon: AlertTriangle },
  Skimmed:      { color: "text-stone-400",  icon: AlertTriangle },
  Ignored:      { color: "text-red-500",    icon: X },
  Buried:       { color: "text-amber-600",  icon: AlertTriangle },
  "Never seen": { color: "text-red-500",    icon: X },
};

export function CardsScene({ section }: { section: StorySection }) {
  const { ref, isVisible } = useScrollReveal();
  const typeConfig = typeLabels[section.type] ?? { label: section.type, color: "text-stone-500" };
  const hasMetrics = section.metrics && section.metrics.length > 0;

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

        <div className={`grid ${hasMetrics ? "md:grid-cols-[1fr_240px]" : ""} gap-8`}>
          {/* Cards grid */}
          {section.cards && (
            <div className="grid grid-cols-2 gap-3">
              {section.cards.map((card, i) => (
                <div
                  key={card.label}
                  className={`bg-white border border-stone-200 rounded-xl p-4 ${isVisible ? "scene-scale-in" : "scene-hidden"}`}
                  style={{ animationDelay: `${(i + 1) * 100}ms` }}
                >
                  <div className="flex items-start justify-between mb-1.5">
                    <span className="text-[11px] font-medium uppercase tracking-wide text-stone-400">
                      {card.label}
                    </span>
                    {card.status && (() => {
                      const style = statusStyles[card.status] ?? { color: "text-stone-500", icon: AlertTriangle };
                      const StatusIcon = style.icon;
                      return (
                        <span className={`flex items-center gap-1 text-[11px] font-medium ${style.color}`}>
                          <StatusIcon size={11} />
                          {card.status}
                        </span>
                      );
                    })()}
                  </div>
                  <p className="text-stone-600 text-base leading-relaxed">{formatInlineText(card.detail)}</p>
                </div>
              ))}
            </div>
          )}

          {/* Metrics sidebar */}
          {hasMetrics && (
            <div className="flex flex-col justify-center gap-4">
              {section.metrics!.map((m, i) => (
                <div
                  key={m.label}
                  className={`bg-white border border-stone-200 rounded-xl px-5 py-4 text-center ${isVisible ? "scene-scale-in" : "scene-hidden"}`}
                  style={{ animationDelay: `${600 + i * 120}ms` }}
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
