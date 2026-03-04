"use client";

import { useState } from "react";

import { agents } from "@/data/agents";

import { stories } from "@/data/stories";
import Link from "next/link";
import {
  Globe,
  Search,
  HelpCircle,
  Sparkles,
  Zap,
  BookOpen,
  MessageCircleQuestion,
  Brain,
  Compass,
  ArrowRight,
  Lightbulb,
  HeartHandshake,
  Users,
  Play,
  MessageCircle,
  Cat,
  Swords,
  Crosshair,
  GitBranch,
  Flame,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Globe,
  Search,
  HelpCircle,
  Sparkles,
  Zap,
  BookOpen,
  MessageCircleQuestion,
  Brain,
  Compass,
  Lightbulb,
  HeartHandshake,
  Users,
  MessageCircle,
  Cat,
  Swords,
  Crosshair,
  GitBranch,
  Flame,
};

const colorMap: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
  blue:    { bg: "bg-blue-50",    border: "border-blue-200",    icon: "text-blue-500",    badge: "bg-blue-100 text-blue-700" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", icon: "text-emerald-500", badge: "bg-emerald-100 text-emerald-700" },
  orange:  { bg: "bg-orange-50",  border: "border-orange-200",  icon: "text-orange-500",  badge: "bg-orange-100 text-orange-700" },
  violet:  { bg: "bg-violet-50",  border: "border-violet-200",  icon: "text-violet-500",  badge: "bg-violet-100 text-violet-700" },
  rose:    { bg: "bg-rose-50",    border: "border-rose-200",    icon: "text-rose-500",    badge: "bg-rose-100 text-rose-700" },
  amber:   { bg: "bg-amber-50",   border: "border-amber-200",   icon: "text-amber-500",   badge: "bg-amber-100 text-amber-700" },
  teal:    { bg: "bg-teal-50",    border: "border-teal-200",    icon: "text-teal-500",    badge: "bg-teal-100 text-teal-700" },
  indigo:  { bg: "bg-indigo-50",  border: "border-indigo-200",  icon: "text-indigo-500",  badge: "bg-indigo-100 text-indigo-700" },
  slate:   { bg: "bg-slate-50",   border: "border-slate-300",   icon: "text-slate-500",   badge: "bg-slate-200 text-slate-700" },
  cyan:    { bg: "bg-cyan-50",    border: "border-cyan-200",    icon: "text-cyan-500",    badge: "bg-cyan-100 text-cyan-700" },
  sky:     { bg: "bg-sky-50",     border: "border-sky-200",     icon: "text-sky-500",     badge: "bg-sky-100 text-sky-700" },
  purple:  { bg: "bg-purple-50",  border: "border-purple-200",  icon: "text-purple-500",  badge: "bg-purple-100 text-purple-700" },
  pink:    { bg: "bg-pink-50",    border: "border-pink-200",    icon: "text-pink-500",    badge: "bg-pink-100 text-pink-700" },
  lime:    { bg: "bg-lime-50",    border: "border-lime-200",    icon: "text-lime-500",    badge: "bg-lime-100 text-lime-700" },
  red:     { bg: "bg-red-50",     border: "border-red-200",     icon: "text-red-500",     badge: "bg-red-100 text-red-700" },
  stone:   { bg: "bg-stone-50",   border: "border-stone-300",   icon: "text-stone-500",   badge: "bg-stone-200 text-stone-700" },
  yellow:  { bg: "bg-yellow-50",  border: "border-yellow-200",  icon: "text-yellow-500",  badge: "bg-yellow-100 text-yellow-700" },
  fuchsia: { bg: "bg-fuchsia-50", border: "border-fuchsia-200", icon: "text-fuchsia-500", badge: "bg-fuchsia-100 text-fuchsia-700" },
};

type Tab = "agents" | "stories";

export default function Home() {

  const [tab, setTab] = useState<Tab>("agents");



  return (
    <div>
      <div className="mb-12 pt-4">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-3">
          Portable agents that work across any LLM or framework.
        </h1>
        <p className="text-stone-500 max-w-2xl text-lg">
          Generate prompts for any LLM, download portable YAML specs, or validate agent specifications.
          Each agent is a portable specification with identity, personality variants, guardrails, and structured workflows.
        </p>
      </div>

      <div className="flex gap-1 mb-8 border-b border-stone-200">
        {([
          { id: "agents" as Tab, label: "Agents", count: agents.length },
          { id: "stories" as Tab, label: "Stories", count: stories.length },
        ]).map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => setTab(t.id)}
            className={`px-4 py-2 text-sm font-medium transition-colors relative ${
              tab === t.id
                ? "text-stone-900"
                : "text-stone-400 hover:text-stone-600"
            }`}
          >
            {t.label}
            <span className={`ml-1.5 text-xs ${tab === t.id ? "text-stone-500" : "text-stone-300"}`}>{t.count}</span>
            {tab === t.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {tab === "agents" && (<>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          "superhero-agent",
          "generation-agent",
          "question-decoder-agent",
          "why-agent",
          "six-hats-agent",
          "storytelling-agent",
          "design-thinking-agent",
          "leadership-coach-agent",
          "culture-agent",
          "corporate-navigator-agent",
          "networking-agent",
          "research-agent",
          "difficult-conversations-agent",
          "cat-pov-agent",
          "wargaming-agent",
          "pre-mortem-agent",
          "decision-decomposer-agent",
          "crisis-navigator-agent",
        ].map((id) => agents.find((a) => a.id === id)!).filter(Boolean).map((agent) => {
          const colors = colorMap[agent.color] ?? colorMap.blue;
          const Icon = iconMap[agent.icon] ?? Globe;

          return (
            <Link key={agent.id} href={`/agent/${agent.id}`}>
              <div
                className={`group relative rounded-xl border ${colors.bg} ${colors.border} p-5 h-full transition-all hover:shadow-md hover:-translate-y-0.5`}
              >
                <div className="flex items-center gap-2.5 mb-1.5">
                  <div className={`p-1.5 rounded-lg bg-white/80 ${colors.icon}`}>
                    <Icon size={18} />
                  </div>
                  <h2 className="text-base font-semibold text-stone-900">
                    {agent.name}
                  </h2>
                </div>

                <p className="text-sm text-stone-600 leading-relaxed mb-3">
                  {agent.identity}
                </p>

                <div className="flex flex-nowrap gap-1.5 overflow-hidden">
                  {agent.personalities.slice(0, 3).map((p) => (
                    <span
                      key={p.id}
                      className="text-xs text-stone-500 bg-white/60 border border-stone-200 rounded-full px-2 py-0.5 shrink-0"
                    >
                      {p.name}
                    </span>
                  ))}
                  {agent.personalities.length > 3 && (
                    <span className="text-xs text-stone-400 bg-white/60 border border-stone-200 rounded-full px-2 py-0.5 shrink-0">
                      +{agent.personalities.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex flex-nowrap gap-1.5 overflow-hidden mt-1.5">
                  {agent.skills.slice(0, 3).map((s) => (
                    <span
                      key={s.id}
                      className={`text-xs ${colors.badge} rounded-full px-2 py-0.5 shrink-0`}
                    >
                      {s.name}
                    </span>
                  ))}
                  {agent.skills.length > 3 && (
                    <span className={`text-xs ${colors.badge} rounded-full px-2 py-0.5 shrink-0 opacity-60`}>
                      +{agent.skills.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      </>)}

      {tab === "stories" && (
      <div>
        <p className="text-stone-500 mb-6 text-sm">
          Pain point narratives that show why structured thinking matters, from problem to resolution.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stories.map((story) => {
            const agent = agents.find((a) => a.id === story.agentId);
            const colors = colorMap[agent?.color ?? "blue"] ?? colorMap.blue;
            return (
              <Link key={story.id} href={`/agent/${story.agentId}/stories/${story.id}`}>
                <div className="group bg-white rounded-xl border border-stone-200 p-5 h-full transition-all hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`p-1 rounded-md ${colors.bg}`}>
                      <Play size={12} className={colors.icon} fill="currentColor" />
                    </div>
                    {agent && (
                      <span className="text-[10px] font-medium text-stone-400 bg-stone-100 rounded-full px-2 py-0.5">
                        {agent.name}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-semibold text-stone-900 mb-1 group-hover:text-stone-700">
                    {story.name}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {story.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs text-stone-400 mt-3 group-hover:text-stone-600 transition-colors">
                    Read story
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      )}


      <div className="mt-14 text-center text-sm text-stone-400">
        <p>
          Specs are framework-agnostic: download the YAML, generate a prompt, or validate the specification.
        </p>
      </div>

    </div>
  );
}
