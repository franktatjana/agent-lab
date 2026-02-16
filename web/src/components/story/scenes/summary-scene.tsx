"use client";

import type { StorySection } from "@/data/stories";
import { formatInlineText } from "@/components/flyout";
import { ArrowRight } from "lucide-react";

export function SummaryScene({ section }: { section: StorySection }) {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center px-6 py-16">
      <div className="max-w-3xl w-full scene-fade-in">
        <span className="text-xs font-medium uppercase tracking-wide text-stone-400 mb-4 block">
          Takeaway
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-stone-900 leading-tight mb-3 text-balance">
          {section.title}
        </h2>

        {section.content && (
          <p className="text-lg text-stone-500 leading-relaxed mb-10 text-balance">
            {formatInlineText(section.content)}
          </p>
        )}

        {section.metrics && section.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-4 mb-10">
            {section.metrics.map((m, i) => (
              <div
                key={m.label}
                className="text-center py-6 bg-stone-900 rounded-xl scene-scale-in"
                style={{ animationDelay: `${(i + 1) * 150}ms` }}
              >
                <div className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {m.value}
                </div>
                <div className="text-xs text-stone-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {section.agentCta && (
          <a
            href={`/agent/${section.agentCta.agentId}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 text-white text-sm font-medium hover:bg-stone-800 transition-colors scene-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            {section.agentCta.label}
            <ArrowRight size={14} />
          </a>
        )}
      </div>
    </section>
  );
}
