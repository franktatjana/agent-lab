"use client";

import { useState, useEffect, useCallback } from "react";
import { ZoomIn } from "lucide-react";

interface ImagePreviewProps {
  image: { src: string; alt: string };
  delay?: number;
}

export function ImagePreview({ image, delay = 600 }: ImagePreviewProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    }
    document.addEventListener("keydown", handleKey, true);
    return () => document.removeEventListener("keydown", handleKey, true);
  }, [open, close]);

  return (
    <>
      <div
        className="scene-scale-in cursor-pointer group relative"
        style={{ animationDelay: `${delay}ms` }}
        onClick={() => setOpen(true)}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full object-contain rounded-xl border border-stone-200 shadow-sm transition-all group-hover:shadow-lg group-hover:border-stone-300"
        />
        <div className="flex items-center justify-center gap-1.5 mt-2 text-stone-400 group-hover:text-stone-600 transition-colors">
          <ZoomIn size={11} />
          <span className="text-[11px] font-medium">Click to expand</span>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[70] bg-black/90 flex items-center justify-center cursor-pointer"
          onClick={close}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
