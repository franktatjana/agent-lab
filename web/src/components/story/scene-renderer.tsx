"use client";

import type { StorySection } from "@/data/stories";
import { HeroScene } from "./scenes/hero-scene";
import { NarrativeScene } from "./scenes/narrative-scene";
import { MetricScene } from "./scenes/metric-scene";
import { ComparisonScene } from "./scenes/comparison-scene";
import { CardsScene } from "./scenes/cards-scene";
import { StepsScene } from "./scenes/steps-scene";
import { FrameworkScene } from "./scenes/framework-scene";

export function SceneRenderer({ section }: { section: StorySection }) {
  switch (section.type) {
    case "hook":
      return <HeroScene section={section} />;
    case "turning-point":
      return <FrameworkScene section={section} />;
    case "problem":
    case "solution":
      return <NarrativeScene section={section} />;
    case "impact":
    case "outcome":
      return <MetricScene section={section} />;
    case "contrast":
      return <ComparisonScene section={section} />;
    case "cards":
      return <CardsScene section={section} />;
    case "steps":
      return <StepsScene section={section} />;
    default:
      return <NarrativeScene section={section} />;
  }
}
