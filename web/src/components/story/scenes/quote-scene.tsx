"use client";

import type { StorySection } from "@/data/stories";
import { ImagePreview } from "../image-preview";
import { Quote } from "lucide-react";

export function QuoteScene({ section }: { section: StorySection }) {
  return (
    <section className="min-h-[100dvh] flex items-center justify-center px-6 py-16 bg-stone-900">
      <div className={`scene-fade-in ${section.image ? "grid md:grid-cols-[1fr_380px] gap-8 items-center max-w-5xl" : "max-w-3xl text-center"}`}>
        <div className={section.image ? "" : "text-center"}>
          <Quote size={40} className={`text-stone-600 mb-8 rotate-180 ${section.image ? "" : "mx-auto"}`} />

          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-medium text-stone-100 leading-snug tracking-tight text-balance">
            &ldquo;{section.quote || section.content}&rdquo;
          </blockquote>

          {section.attribution && (
            <p className="mt-8 text-sm text-stone-500 font-medium tracking-wide uppercase">
              {section.attribution}
            </p>
          )}
        </div>

        {section.image && <ImagePreview image={section.image} />}
      </div>
    </section>
  );
}
