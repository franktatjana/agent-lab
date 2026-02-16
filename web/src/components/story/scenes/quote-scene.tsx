"use client";

import type { StorySection } from "@/data/stories";
import { Quote } from "lucide-react";

export function QuoteScene({ section }: { section: StorySection }) {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center px-6 py-16 bg-stone-900">
      <div className="max-w-3xl text-center scene-fade-in">
        <Quote size={40} className="text-stone-600 mx-auto mb-8 rotate-180" />

        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-stone-100 leading-snug tracking-tight text-balance">
          &ldquo;{section.quote || section.content}&rdquo;
        </blockquote>

        {section.attribution && (
          <p className="mt-8 text-sm text-stone-500 font-medium tracking-wide uppercase">
            {section.attribution}
          </p>
        )}
      </div>
    </section>
  );
}
