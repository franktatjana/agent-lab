"use client";

import { use, useState, useCallback } from "react";
import { agents } from "@/data/agents";
import { getStory } from "@/data/stories";
import type { StorySection, StorySectionType } from "@/data/stories";
import { StoryOverlay } from "@/components/story";
import Link from "next/link";
import { ArrowLeft, AlertTriangle, Zap, TrendingDown, RotateCcw, Lightbulb, Trophy, ArrowLeftRight, Play, type LucideIcon } from "lucide-react";

const sectionConfig: Record<StorySectionType, { icon: LucideIcon; accent: string; bg: string; border: string; iconBg: string; dot: string }> = {
  hook:            { icon: Zap,              accent: "text-stone-900",   bg: "bg-stone-50",    border: "border-stone-200",   iconBg: "bg-stone-100",    dot: "bg-stone-400" },
  problem:         { icon: AlertTriangle,    accent: "text-red-700",     bg: "bg-red-50",      border: "border-red-200",     iconBg: "bg-red-100",      dot: "bg-red-400" },
  impact:          { icon: TrendingDown,     accent: "text-orange-700",  bg: "bg-orange-50",   border: "border-orange-200",  iconBg: "bg-orange-100",   dot: "bg-orange-400" },
  "turning-point": { icon: RotateCcw,        accent: "text-amber-700",   bg: "bg-amber-50",    border: "border-amber-200",   iconBg: "bg-amber-100",    dot: "bg-amber-400" },
  solution:        { icon: Lightbulb,        accent: "text-emerald-700", bg: "bg-emerald-50",  border: "border-emerald-200", iconBg: "bg-emerald-100",  dot: "bg-emerald-400" },
  outcome:         { icon: Trophy,           accent: "text-blue-700",    bg: "bg-blue-50",     border: "border-blue-200",    iconBg: "bg-blue-100",     dot: "bg-blue-400" },
  contrast:        { icon: ArrowLeftRight,   accent: "text-violet-700",  bg: "bg-violet-50",   border: "border-violet-200",  iconBg: "bg-violet-100",   dot: "bg-violet-400" },
  cards:           { icon: AlertTriangle,    accent: "text-red-700",     bg: "bg-red-50",      border: "border-red-200",     iconBg: "bg-red-100",      dot: "bg-red-400" },
  steps:           { icon: Lightbulb,        accent: "text-emerald-700", bg: "bg-emerald-50",  border: "border-emerald-200", iconBg: "bg-emerald-100",  dot: "bg-emerald-400" },
};

function renderContent(text: string) {
  return text.split("\n\n").map((block, i) => {
    if (block.startsWith("**") && block.includes("**\n")) {
      const lines = block.split("\n");
      const heading = lines[0].replace(/\*\*/g, "");
      const body = lines.slice(1).join("\n");
      return (
        <div key={i} className="mt-4">
          <p className="font-semibold text-stone-800 mb-1">{heading}</p>
          <p className="text-stone-600 leading-relaxed">{body}</p>
        </div>
      );
    }
    const parts: React.ReactNode[] = [];
    const regex = /\*\*(.+?)\*\*/g;
    let lastIdx = 0;
    let match;
    let key = 0;
    while ((match = regex.exec(block)) !== null) {
      if (match.index > lastIdx) parts.push(block.slice(lastIdx, match.index));
      parts.push(<strong key={key++} className="font-semibold text-stone-800">{match[1]}</strong>);
      lastIdx = regex.lastIndex;
    }
    if (lastIdx < block.length) parts.push(block.slice(lastIdx));
    return <p key={i} className="text-stone-600 leading-relaxed mt-3">{parts.length > 0 ? parts : block}</p>;
  });
}

function SectionCard({ section, isLast }: { section: StorySection; isLast: boolean }) {
  const config = sectionConfig[section.type];
  const Icon = config.icon;

  return (
    <div className="relative flex gap-6">
      <div className="flex flex-col items-center shrink-0 w-8">
        <div className={`w-3 h-3 rounded-full ${config.dot} mt-6 z-10 ring-4 ring-white`} />
        {!isLast && <div className="w-px flex-1 bg-stone-200 -mb-2" />}
      </div>

      <div className={`flex-1 rounded-xl border ${config.border} ${config.bg} p-6 mb-6`}>
        <div className="flex items-center gap-2.5 mb-3">
          <div className={`p-1.5 rounded-lg ${config.iconBg}`}>
            <Icon size={16} className={config.accent} />
          </div>
          <span className="text-xs font-medium text-stone-400 uppercase tracking-wide">
            {section.type.replace("-", " ")}
          </span>
        </div>

        <h2 className={`text-lg font-bold ${config.accent} mb-1`}>{section.title}</h2>
        {section.subtitle && (
          <p className="text-sm text-stone-500 leading-relaxed mb-3">{section.subtitle}</p>
        )}

        <div className="text-sm">{renderContent(section.content)}</div>

        {section.metrics && section.metrics.length > 0 && (
          <div className="grid grid-cols-3 gap-3 mt-5">
            {section.metrics.map((m) => (
              <div key={m.label} className="bg-white/70 rounded-lg px-3 py-2.5 border border-white">
                <div className={`text-lg font-bold ${config.accent}`}>{m.value}</div>
                <div className="text-xs text-stone-500">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {section.cards && section.cards.length > 0 && (
          <div className="grid grid-cols-2 gap-2 mt-5">
            {section.cards.map((card) => (
              <div key={card.label} className="bg-white/70 rounded-lg px-3 py-2.5 border border-stone-100">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-stone-400 uppercase">{card.label}</span>
                  {card.status && <span className="text-xs text-red-500 font-medium">{card.status}</span>}
                </div>
                <p className="text-xs text-stone-600">{card.detail}</p>
              </div>
            ))}
          </div>
        )}

        {section.steps && section.steps.length > 0 && (
          <div className="mt-5 space-y-2">
            {section.steps.map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white ${config.accent.replace("text-", "bg-")}`}>
                  {i + 1}
                </span>
                <div className="text-sm">
                  <span className="font-medium text-stone-700">{step.label}</span>
                  <span className="text-stone-500"> {step.detail}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {section.callout && (
          <div className={`mt-5 rounded-lg ${config.bg} border ${config.border} px-4 py-3`}>
            <span className="text-xs font-medium text-stone-400 uppercase">{section.callout.label}</span>
            <p className={`text-sm font-semibold ${config.accent} mt-1`}>{section.callout.text}</p>
          </div>
        )}

        {section.framework && (
          <div className="mt-5 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3">
            <span className="text-xs font-medium text-amber-600 uppercase">{section.framework.name}</span>
            <span className="text-xs text-stone-400 ml-2">{section.framework.origin}</span>
            <p className="text-sm text-stone-600 mt-1">{section.framework.description}</p>
            {section.framework.principles.length > 0 && (
              <div className="mt-3 space-y-1">
                {section.framework.principles.map((p) => (
                  <div key={p.label} className="text-xs">
                    <span className="font-medium text-stone-700">{p.label}:</span>
                    <span className="text-stone-500"> {p.detail}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {section.comparisons && section.comparisons.length > 0 && (
          <div className="mt-5 overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  <th className="text-left py-2 px-3 text-xs font-semibold text-stone-500 uppercase tracking-wide w-1/4" />
                  <th className="text-left py-2 px-3 text-xs font-semibold text-red-500 uppercase tracking-wide">Before</th>
                  <th className="text-left py-2 px-3 text-xs font-semibold text-emerald-600 uppercase tracking-wide">After</th>
                </tr>
              </thead>
              <tbody>
                {section.comparisons.map((c) => (
                  <tr key={c.dimension} className="border-b border-stone-100 last:border-b-0">
                    <td className="py-2 px-3 text-stone-500 font-medium">{c.dimension}</td>
                    <td className="py-2 px-3 text-stone-600">{c.before}</td>
                    <td className="py-2 px-3 text-stone-700 font-medium">{c.after}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default function StoryPageClient({
  params,
}: {
  params: Promise<{ id: string; storyId: string }>;
}) {
  const { id, storyId } = use(params);
  const agent = agents.find((a) => a.id === id);
  const story = getStory(id, storyId);
  const hasVisual = story?.format === "visual";
  const [showVisual, setShowVisual] = useState(false);

  const handleCloseVisual = useCallback(() => {
    setShowVisual(false);
  }, []);

  if (!agent || !story) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold mb-4 text-stone-900">Story not found</h1>
        <Link href={agent ? `/agent/${agent.id}` : "/"} className="text-blue-600 underline">
          {agent ? `Back to ${agent.name}` : "Back to agents"}
        </Link>
      </div>
    );
  }

  if (showVisual) {
    return (
      <StoryOverlay
        story={story}
        agentName={agent.name}
        onClose={handleCloseVisual}
      />
    );
  }

  return (
    <div>
      <Link
        href={`/agent/${agent.id}`}
        className="inline-flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-600 transition-colors"
      >
        <ArrowLeft size={14} />
        {agent.name}
      </Link>

      <div className="mt-6 mb-10">
        <p className="text-xs font-medium text-stone-400 uppercase tracking-wide mb-2">Story</p>
        <h1 className="text-2xl font-bold tracking-tight text-stone-900 mb-2">{story.name}</h1>
        <p className="text-stone-500 text-lg">{story.tagline}</p>

        {hasVisual && (
          <button
            onClick={() => setShowVisual(true)}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-stone-900 text-stone-100 text-sm font-medium hover:bg-stone-800 transition-colors"
          >
            <Play size={14} fill="currentColor" />
            Visual story
          </button>
        )}
      </div>

      <div className="max-w-3xl">
        {story.sections.map((section, i) => (
          <SectionCard
            key={section.id}
            section={section}
            isLast={i === story.sections.length - 1}
          />
        ))}
      </div>

      <div className="mt-12 mb-8 flex items-center gap-4">
        <Link
          href={`/agent/${agent.id}`}
          className="text-sm text-stone-400 hover:text-stone-600 transition-colors"
        >
          Back to {agent.name}
        </Link>
      </div>
    </div>
  );
}
