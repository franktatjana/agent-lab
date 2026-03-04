"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { agents } from "@/data/agents";
import { ArrowLeft, Search } from "lucide-react";

const colorMap: Record<string, { bg: string; border: string; icon: string; light: string }> = {
  blue:    { bg: "bg-blue-50",    border: "border-blue-200",    icon: "text-blue-500",    light: "bg-blue-100" },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-200", icon: "text-emerald-500", light: "bg-emerald-100" },
  orange:  { bg: "bg-orange-50",  border: "border-orange-200",  icon: "text-orange-500",  light: "bg-orange-100" },
  violet:  { bg: "bg-violet-50",  border: "border-violet-200",  icon: "text-violet-500",  light: "bg-violet-100" },
  rose:    { bg: "bg-rose-50",    border: "border-rose-200",    icon: "text-rose-500",    light: "bg-rose-100" },
  amber:   { bg: "bg-amber-50",   border: "border-amber-200",   icon: "text-amber-500",   light: "bg-amber-100" },
  teal:    { bg: "bg-teal-50",    border: "border-teal-200",    icon: "text-teal-500",    light: "bg-teal-100" },
  indigo:  { bg: "bg-indigo-50",  border: "border-indigo-200",  icon: "text-indigo-500",  light: "bg-indigo-100" },
  slate:   { bg: "bg-slate-50",   border: "border-slate-300",   icon: "text-slate-500",   light: "bg-slate-200" },
  cyan:    { bg: "bg-cyan-50",    border: "border-cyan-200",    icon: "text-cyan-500",    light: "bg-cyan-100" },
  sky:     { bg: "bg-sky-50",     border: "border-sky-200",     icon: "text-sky-500",     light: "bg-sky-100" },
  purple:  { bg: "bg-purple-50",  border: "border-purple-200",  icon: "text-purple-500",  light: "bg-purple-100" },
  pink:    { bg: "bg-pink-50",    border: "border-pink-200",    icon: "text-pink-500",    light: "bg-pink-100" },
  lime:    { bg: "bg-lime-50",    border: "border-lime-200",    icon: "text-lime-500",    light: "bg-lime-100" },
  red:     { bg: "bg-red-50",     border: "border-red-200",     icon: "text-red-500",     light: "bg-red-100" },
  stone:   { bg: "bg-stone-50",   border: "border-stone-300",   icon: "text-stone-500",   light: "bg-stone-200" },
  yellow:  { bg: "bg-yellow-50",  border: "border-yellow-200",  icon: "text-yellow-500",  light: "bg-yellow-100" },
  fuchsia: { bg: "bg-fuchsia-50", border: "border-fuchsia-200", icon: "text-fuchsia-500", light: "bg-fuchsia-100" },
};

const categories: { label: string; description: string; ids: string[] }[] = [
  {
    label: "Perspective & Reframing",
    description: "See the same situation through a different lens",
    ids: ["cat-pov-agent", "superhero-agent"],
  },
  {
    label: "Communication & Translation",
    description: "Help messages land with intended meaning across audiences",
    ids: ["culture-agent", "generation-agent", "question-decoder-agent", "storytelling-agent"],
  },
  {
    label: "Interpersonal & Leadership",
    description: "Navigate people dynamics, conversations, and team development",
    ids: ["difficult-conversations-agent", "leadership-coach-agent", "networking-agent", "corporate-navigator-agent"],
  },
  {
    label: "Analysis & Decision-Making",
    description: "Structure thinking, investigate causes, and test strategies",
    ids: ["six-hats-agent", "why-agent", "design-thinking-agent", "research-agent", "wargaming-agent"],
  },
  {
    label: "Decisions & Risk",
    description: "Structure decisions, anticipate failures, and navigate active crises",
    ids: ["pre-mortem-agent", "decision-decomposer-agent", "crisis-navigator-agent"],
  },
];

const decisionTree: { situation: string; agentId: string; also: string }[] = [
  { situation: "Drowning in meetings, cannot protect your time", agentId: "cat-pov-agent", also: "Leadership Coach if management issue" },
  { situation: "Proposal getting blocked, unclear why", agentId: "corporate-navigator-agent", also: "Why Agent for root cause" },
  { situation: "Cross-cultural message landing wrong", agentId: "culture-agent", also: "Generation Agent if age is the factor" },
  { situation: "Not sure what the real problem is", agentId: "design-thinking-agent", also: "Why Agent for root cause first" },
  { situation: "Dreading a conversation you need to have", agentId: "difficult-conversations-agent", also: "Question Decoder for their questions" },
  { situation: "Generational friction in communication", agentId: "generation-agent", also: "Culture Agent if nationality factor" },
  { situation: "New to leadership, team dynamics feel off", agentId: "leadership-coach-agent", also: "Six Hats for decision-making" },
  { situation: "Career stalled despite strong work", agentId: "networking-agent", also: "Corporate Navigator if politics blocking" },
  { situation: "Question with a hidden meaning", agentId: "question-decoder-agent", also: "Storytelling Agent to shape response" },
  { situation: "Need research with cited sources", agentId: "research-agent", also: "Six Hats to evaluate findings" },
  { situation: "Team stuck in mixed-perspective debate", agentId: "six-hats-agent", also: "Why Agent for root cause" },
  { situation: "Need to present data or bad news", agentId: "storytelling-agent", also: "Question Decoder for audience" },
  { situation: "Imposter syndrome or new role anxiety", agentId: "superhero-agent", also: "Leadership Coach for skill dev" },
  { situation: "About to commit resources to a strategy", agentId: "wargaming-agent", also: "Six Hats for multi-perspective" },
  { situation: "Something is broken, do not know why", agentId: "why-agent", also: "Design Thinking to solve it" },
  { situation: "About to launch and need to stress-test assumptions", agentId: "pre-mortem-agent", also: "Wargaming for competitive response" },
  { situation: "Stuck choosing between options for weeks", agentId: "decision-decomposer-agent", also: "Six Hats for perspective shift" },
  { situation: "Active crisis, stakeholders panicking", agentId: "crisis-navigator-agent", also: "Difficult Conversations if people conflict" },
];

export default function HandbookClient() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const agentMap = Object.fromEntries(agents.map((a) => [a.id, a]));
  const query = searchQuery.toLowerCase().trim();

  const filteredDecisionTree = useMemo(() => {
    if (!query) return decisionTree;
    return decisionTree.filter((row) => {
      const agent = agentMap[row.agentId];
      const searchable = [row.situation, row.also, agent?.name ?? "", agent?.identity ?? ""].join(" ").toLowerCase();
      return searchable.includes(query);
    });
  }, [query, agentMap]);

  const filteredCategories = useMemo(() => {
    const cats = selectedCategory === "all" ? categories : categories.filter((c) => c.label === selectedCategory);
    if (!query) return cats;
    return cats.map((cat) => ({
      ...cat,
      ids: cat.ids.filter((id) => {
        const agent = agentMap[id];
        if (!agent) return false;
        const searchable = [agent.name, agent.identity, ...agent.frameworks].join(" ").toLowerCase();
        return searchable.includes(query);
      }),
    })).filter((cat) => cat.ids.length > 0);
  }, [query, selectedCategory, agentMap]);

  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-600 transition-colors"
      >
        <ArrowLeft size={14} />
        All agents
      </Link>

      <div className="mt-4 mb-6">
        <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-2">
          Which Agent to Use?
        </h1>
        <p className="text-stone-500 max-w-2xl">
          Start with your situation. Search by keyword, filter by category, or browse the decision tree.
        </p>
      </div>

      {/* Search + Category Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            placeholder="Search agents, situations, frameworks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-sm bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-stone-300 placeholder:text-stone-400"
          />
        </div>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-4 py-2.5 text-sm bg-white border border-stone-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-300 focus:border-stone-300 text-stone-700 min-w-[200px]"
        >
          <option value="all">All Categories</option>
          {categories.map((c) => (
            <option key={c.label} value={c.label}>{c.label}</option>
          ))}
        </select>
      </div>

      {/* Decision Tree */}
      {filteredDecisionTree.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-stone-900 mb-1">Find by Situation</h2>
          <p className="text-sm text-stone-500 mb-4">
            Start with your situation, not the agent&apos;s features.
          </p>
          <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50">
                  <th className="text-left py-3 px-4 font-semibold text-stone-700 text-xs uppercase tracking-wide">Your Situation</th>
                  <th className="text-left py-3 px-4 font-semibold text-stone-700 text-xs uppercase tracking-wide">Start Here</th>
                  <th className="text-left py-3 px-4 font-semibold text-stone-700 text-xs uppercase tracking-wide hidden md:table-cell">Then Consider</th>
                </tr>
              </thead>
              <tbody>
                {filteredDecisionTree.map((row) => {
                  const agent = agentMap[row.agentId];
                  return (
                    <tr key={row.agentId} className="border-b border-stone-100 hover:bg-stone-50 transition-colors">
                      <td className="py-3 px-4 text-stone-600">{row.situation}</td>
                      <td className="py-3 px-4">
                        {agent ? (
                          <Link
                            href={`/agent/${agent.id}`}
                            className="text-stone-900 font-medium hover:underline"
                          >
                            {agent.name}
                          </Link>
                        ) : row.agentId}
                      </td>
                      <td className="py-3 px-4 text-stone-400 text-xs hidden md:table-cell">{row.also}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Agents by Category */}
      {filteredCategories.map((cat) => (
        <div key={cat.label} className="mb-10">
          <h2 className="text-lg font-semibold text-stone-900 mb-1">{cat.label}</h2>
          <p className="text-sm text-stone-500 mb-4">{cat.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {cat.ids.map((agentId) => {
              const agent = agentMap[agentId];
              if (!agent) return null;
              const colors = colorMap[agent.color] ?? colorMap.blue;
              return (
                <Link key={agentId} href={`/agent/${agent.id}`}>
                  <div className={`rounded-xl border ${colors.bg} ${colors.border} px-5 py-4 transition-all hover:shadow-md hover:-translate-y-0.5`}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold text-stone-900">
                        {agent.name}
                      </span>
                      <span className="text-xs text-stone-400">
                        Open &rarr;
                      </span>
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed mb-2">
                      {agent.identity}
                    </p>
                    <div className="flex gap-1.5 flex-wrap">
                      {agent.frameworks.slice(0, 3).map((f) => (
                        <span key={f} className="text-[10px] text-stone-400 bg-white/60 border border-stone-200 rounded-full px-2 py-0.5">{f}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}

      {/* No results */}
      {filteredDecisionTree.length === 0 && filteredCategories.length === 0 && (
        <div className="text-center py-12 text-stone-400 text-sm">
          No agents match your search. Try different keywords.
        </div>
      )}

      {/* Cross-Agent Patterns */}
      <div className="mb-10 bg-stone-50 rounded-xl border border-stone-200 p-6">
        <h2 className="text-lg font-semibold text-stone-900 mb-3">Cross-Agent Patterns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { title: "Perspective shift", desc: "The information does not change. The frame does." },
            { title: "Real problem hidden", desc: "The surface issue is rarely the actual root cause." },
            { title: "Framework first", desc: "Structure messy situations through proven analytical models." },
            { title: "Timing matters", desc: "Most valuable before decisions, conversations, and commitments." },
            { title: "Personality shapes output", desc: "Coach for partnerships, Business for boardrooms, Strategic for high-stakes." },
            { title: "Knowledge prevents hallucination", desc: "An agent without domain knowledge is an LLM guessing." },
          ].map((p) => (
            <div key={p.title} className="bg-white rounded-lg border border-stone-200 px-4 py-3">
              <span className="text-xs font-semibold text-stone-800 block mb-0.5">{p.title}</span>
              <span className="text-xs text-stone-500">{p.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
