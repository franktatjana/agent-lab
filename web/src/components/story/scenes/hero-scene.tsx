"use client";

import type { StorySection } from "@/data/stories";
import { formatInlineText } from "@/components/flyout";
import { ChevronDown } from "lucide-react";

export function HeroScene({ section }: { section: StorySection }) {
  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center px-6 py-16 text-center relative bg-gradient-to-b from-stone-100 via-stone-50 to-white">
      <div className="max-w-4xl scene-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-stone-900 leading-[1.05] tracking-tight mb-8 text-balance">
          {section.title}
        </h1>

        {section.subtitle && (
          <p className="text-lg md:text-xl text-stone-400 leading-relaxed mb-4 max-w-2xl mx-auto text-balance">
            {section.subtitle}
          </p>
        )}

        {section.content && (
          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed max-w-2xl mx-auto text-balance font-medium">
            {formatInlineText(section.content)}
          </p>
        )}

        {section.heroStat && (
          <div className="mt-16 pt-10 border-t border-stone-200 inline-block px-16">
            <div className="text-6xl md:text-8xl font-bold text-stone-900 tracking-tighter">
              {section.heroStat.value}
            </div>
            {section.heroStat.label && (
              <div className="text-sm text-stone-400 mt-3 uppercase tracking-wide font-medium">{section.heroStat.label}</div>
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
