"use client";

import { useRef, useState, useEffect } from "react";

interface UseScrollRevealOptions {
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
}

export function useScrollReveal({
  threshold = 0.15,
  once = true,
  rootMargin = "0px 0px -50px 0px",
}: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once, rootMargin]);

  return { ref, isVisible };
}
