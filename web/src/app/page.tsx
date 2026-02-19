"use client";

import { useState, useCallback } from "react";
import { Flyout } from "@/components/flyout";
import { agents } from "@/data/agents";
import { agentIdeas, ideaCategories, buildIdeaFlyoutContent } from "@/data/agent-ideas";
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
};

const handbookPrinciples = [
  "Define by responsibility, not capability",
  "One sentence identity: if it takes more, it's doing too much",
  "Prompts are code: version control, test, document",
  "Atomic over monolithic: small prompts that compose",
  "Prompt quality = clear I/O: define inputs, outputs, success criteria",
  "Skills compose prompts: skills are workflows, prompts are building blocks",
  "Load knowledge just-in-time: don't stuff context",
  "Constraints as hard rules: 'must never' not 'prefers not to'",
  "Separate concerns: gather ≠ analyze ≠ decide ≠ execute",
  "Design for failure: every agent fails, specify what happens",
  "Human oversight is essential: automation serves humans",
];

export default function Home() {
  const [flyout, setFlyout] = useState<{ title: string; content: string } | null>(null);

  const closeFlyout = useCallback(() => setFlyout(null), []);

  return (
    <div>
      <div className="mb-12 pt-4">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-3">
          Pick an agent, describe your situation, get a prompt.
        </h1>
        <p className="text-stone-500 max-w-2xl text-lg">
          Each agent is a curated prompt design with personality variants and skill workflows.
          Paste the generated prompt into ChatGPT, Claude, or any LLM.
        </p>
      </div>



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
              </div>
            </Link>
          );
        })}
      </div>

      {/* Featured Stories */}
      <div id="stories" className="mt-16 scroll-mt-20">
        <div className="flex items-center gap-2 mb-2">
          <Play size={20} className="text-stone-400" />
          <h2 className="text-xl font-bold text-stone-900">Stories</h2>
        </div>
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

      {/* Handbook */}
      <div id="handbook" className="mt-16 scroll-mt-20">
        <div className="flex items-center gap-2 mb-5">
          <BookOpen size={20} className="text-stone-400" />
          <h2 className="text-xl font-bold text-stone-900">Design Handbook</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-stone-200 p-5">
            <h3 className="text-sm font-semibold text-stone-900 mb-3">Core Principles</h3>
            <ol className="space-y-1.5 text-sm text-stone-600">
              {handbookPrinciples.map((p, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-stone-400 font-mono text-xs mt-0.5 shrink-0 w-4 text-right">{i + 1}.</span>
                  <span className="leading-relaxed">{p}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="bg-white rounded-xl border border-stone-200 p-5">
            <h3 className="text-sm font-semibold text-stone-900 mb-3">Prompt Design Patterns</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-stone-800 mb-1">Input Validation Gates</h4>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Each agent defines required input dimensions. On incomplete input, the agent states what&apos;s missing, gives a short preliminary analysis, and asks for clarification instead of generating from insufficient context.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-stone-800 mb-1">Output Constraints</h4>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Field-level word limits and a total word cap (250-400 words) force the agent to prioritize and distill. Structured fields ensure consistent, comparable output across runs.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-stone-800 mb-1">Personality Modifiers</h4>
                <p className="text-sm text-stone-500 leading-relaxed">
                  Same agent, different tone. A personality modifier adjusts voice and framing without changing the underlying logic. The facts stay identical, the delivery shifts to match the audience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Ideas */}
      <div id="agent-ideas" className="mt-16 scroll-mt-20">
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb size={20} className="text-stone-400" />
          <h2 className="text-xl font-bold text-stone-900">Agent Ideas</h2>
        </div>
        <p className="text-stone-500 mb-6 text-sm">
          Future agents under consideration. Concepts and frameworks researched, not yet built.
        </p>
        <div className="space-y-8">
          {ideaCategories.map((category) => {
            const ideas = agentIdeas.filter((i) => i.category === category);
            return (
              <div key={category}>
                <h3 className="text-sm font-semibold text-stone-600 uppercase tracking-wide mb-3">
                  {category}
                  <span className="ml-2 text-stone-400 font-normal normal-case tracking-normal">{ideas.length}</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {ideas.map((idea) => (
                    <button
                      type="button"
                      key={idea.id}
                      className="text-left bg-white rounded-lg border border-dashed border-stone-300 px-4 py-3 transition-all hover:border-stone-400 hover:shadow-sm cursor-pointer"
                      onClick={() => setFlyout({ title: idea.name, content: buildIdeaFlyoutContent(idea) })}
                    >
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-medium text-stone-800">{idea.name}</h3>
                        {idea.group && (
                          <span className="text-[10px] font-medium text-stone-400 bg-stone-100 rounded-full px-1.5 py-0.5">
                            {idea.group}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-stone-500 mt-0.5 leading-relaxed">{idea.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-14 text-center text-sm text-stone-400">
        <p>
          The generated prompt is self-contained: paste it into any LLM and it works.
        </p>
      </div>

      <Flyout
        open={flyout !== null}
        title={flyout?.title ?? ""}
        content={flyout?.content ?? ""}
        onClose={closeFlyout}
      />
    </div>
  );
}
