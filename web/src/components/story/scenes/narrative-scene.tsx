"use client";

import type { StorySection } from "@/data/stories";
import { formatInlineText } from "@/components/flyout";
import { useScrollReveal } from "../use-scroll-reveal";

const typeLabels: Record<string, { label: string; color: string }> = {
  problem:          { label: "The Problem",      color: "text-red-600" },
  "turning-point":  { label: "Turning Point",    color: "text-amber-600" },
  solution:         { label: "The Solution",      color: "text-emerald-600" },
};

export function NarrativeScene({ section }: { section: StorySection }) {
  const { ref, isVisible } = useScrollReveal();
  const typeConfig = typeLabels[section.type] ?? { label: section.type, color: "text-stone-500" };

  return (
    <section ref={ref} className="px-6 py-16 md:py-20">
      <div className={`max-w-5xl mx-auto ${isVisible ? "scene-fade-up" : "scene-hidden"}`}>
        <span className={`text-xs font-medium uppercase tracking-wide ${typeConfig.color} mb-3 block`}>
          {typeConfig.label}
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-6 text-balance">
          {section.title}
        </h2>

        <div className="space-y-3 max-w-3xl">
          {section.content.split("\n\n").map((block, i) => {
            if (block.startsWith("**") && block.includes("**\n")) {
              const lines = block.split("\n");
              const heading = lines[0].replace(/\*\*/g, "");
              const body = lines.slice(1).join("\n");
              return (
                <div key={i} className="mt-4">
                  <p className="font-semibold text-stone-800 mb-1">{heading}</p>
                  <p className="text-stone-600 leading-relaxed">{formatInlineText(body)}</p>
                </div>
              );
            }
            return (
              <p
                key={i}
                className="text-base text-stone-600 leading-relaxed"
                style={{ animationDelay: isVisible ? `${i * 100}ms` : undefined }}
              >
                {formatInlineText(block)}
              </p>
            );
          })}
        </div>

        {section.metrics && section.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mt-8">
            {section.metrics.map((m, i) => (
              <div
                key={m.label}
                className={`bg-white rounded-xl px-4 py-3 border border-stone-200 ${isVisible ? "scene-scale-in" : "scene-hidden"}`}
                style={{ animationDelay: `${(i + 1) * 150}ms` }}
              >
                <div className="text-xl font-bold text-stone-900">{m.value}</div>
                <div className="text-xs text-stone-500 mt-0.5">{m.label}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
