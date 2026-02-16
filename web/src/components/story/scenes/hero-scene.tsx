"use client";

import type { StorySection } from "@/data/stories";
import { formatInlineText } from "@/components/flyout";
import { ChevronDown } from "lucide-react";

export function HeroScene({ section }: { section: StorySection }) {
  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-16 text-center relative">
      <div className="max-w-4xl scene-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-6 text-balance">
          {section.title}
        </h1>

        {section.subtitle && (
          <p className="text-lg md:text-xl text-stone-500 leading-relaxed mb-4 max-w-2xl mx-auto text-balance">
            {section.subtitle}
          </p>
        )}

        {section.content && (
          <p className="text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto text-balance">
            {formatInlineText(section.content)}
          </p>
        )}

        {section.heroStat && (
          <div className="mt-12 pt-8 border-t border-stone-200 inline-block px-12">
            <div className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tight">
              {section.heroStat.value}
            </div>
            {section.heroStat.label && (
              <div className="text-sm text-stone-400 mt-2">{section.heroStat.label}</div>
            )}
          </div>
        )}
      </div>

      <div className="absolute bottom-8 scroll-hint">
        <ChevronDown size={24} className="text-stone-300" />
      </div>
    </section>
  );
}
