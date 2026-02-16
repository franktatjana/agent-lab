"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import type { AgentStory } from "@/data/stories";
import { SceneRenderer } from "./scene-renderer";
import { X, ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

interface StoryOverlayProps {
  story: AgentStory;
  agentName: string;
  onClose: () => void;
}

export function StoryOverlay({ story, agentName, onClose }: StoryOverlayProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const total = story.sections.length;
  const touchStartY = useRef(0);

  const goNext = useCallback(() => {
    setCurrentSlide((s) => (s < total - 1 ? s + 1 : s));
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentSlide((s) => (s > 0 ? s - 1 : s));
  }, []);

  const goTo = useCallback(
    (index: number) => {
      setCurrentSlide(Math.max(0, Math.min(index, total - 1)));
    },
    [total],
  );

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKey(e: KeyboardEvent) {
      switch (e.key) {
        case "Escape":
          onClose();
          break;
        case "ArrowRight":
        case "ArrowDown":
        case " ":
          e.preventDefault();
          goNext();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          goPrev();
          break;
      }
    }

    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, goNext, goPrev]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartY.current - e.changedTouches[0].clientY;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goNext();
      else goPrev();
    }
  };

  const section = story.sections[currentSlide];
  const isFirst = currentSlide === 0;
  const isLast = currentSlide === total - 1;

  return (
    <div
      className="fixed inset-0 z-50 bg-stone-50 overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Progress bar */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-stone-200 z-60">
        <div
          className="h-full bg-stone-900 transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / total) * 100}%` }}
        />
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-60 flex items-center justify-between px-5 pt-4">
        <button
          onClick={onClose}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/80 border border-stone-200 text-stone-400 hover:text-stone-600 transition-colors text-xs font-medium backdrop-blur-sm"
        >
          <ArrowLeft size={12} />
          {agentName}
        </button>

        <span className="text-xs text-stone-400 font-medium tabular-nums">
          {currentSlide + 1} / {total}
        </span>

        <button
          onClick={onClose}
          className="p-1.5 rounded-lg bg-white/80 border border-stone-200 text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors backdrop-blur-sm"
        >
          <X size={18} />
        </button>
      </div>

      {/* Slide */}
      <div
        key={currentSlide}
        className={`h-[100dvh] overflow-y-auto flex items-center slide-enter ${currentSlide % 2 === 1 ? "bg-white" : ""}`}
      >
        <div className="w-full">
          <SceneRenderer section={section} />
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-6 left-0 right-0 z-60 flex items-center justify-center gap-4">
        <button
          onClick={goPrev}
          disabled={isFirst}
          className={`p-2 rounded-lg border transition-colors backdrop-blur-sm ${
            isFirst
              ? "border-stone-100 text-stone-200 cursor-default"
              : "border-stone-200 bg-white/80 text-stone-500 hover:text-stone-700 hover:bg-stone-100"
          }`}
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex items-center gap-1.5">
          {story.sections.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? "w-6 h-2 bg-stone-900"
                  : "w-2 h-2 bg-stone-300 hover:bg-stone-500"
              }`}
            />
          ))}
        </div>

        <button
          onClick={isLast ? onClose : goNext}
          className="p-2 rounded-lg border border-stone-200 bg-white/80 text-stone-500 hover:text-stone-700 hover:bg-stone-100 transition-colors backdrop-blur-sm"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
