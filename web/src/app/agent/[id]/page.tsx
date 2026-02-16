"use client";

import { use, useState, useMemo, useCallback } from "react";
import { agents } from "@/data/agents";
import type { AgentCanvas } from "@/data/agents";
import { getStoriesForAgent } from "@/data/stories";
import { buildPrompt } from "@/lib/prompt-builder";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  ArrowLeft,
  Copy,
  Check,
  FileText,
  Image as ImageIcon,
  HelpCircle as HelpIcon,
  Target,
  Compass,
  Gem,
  Shield,
  Users,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { Flyout } from "@/components/flyout";

const agentResources: Record<string, { references: string[]; visualImage?: string }> = {
  "culture-agent": {
    references: ["communication-playbook.md", "culture-profiles.md", "frameworks.md", "glossary-and-resources.md"],
    visualImage: "/agents/culture-agent.png",
  },
  "research-agent": {
    references: ["glossary-and-resources.md", "research-quality-framework.md", "source-evaluation-checklist.md", "synthesis-framework.md"],
  },
  "why-agent": {
    references: ["fishbone-categories.md", "five-whys-guide.md", "glossary-and-resources.md", "root-cause-verification.md"],
  },
  "generation-agent": {
    references: ["generational-patterns.md"],
  },
  "superhero-agent": {
    references: ["glossary-and-resources.md", "hero-archetypes.md", "villain-archetypes.md"],
  },
  "storytelling-agent": {
    references: ["glossary-and-resources.md", "storytelling-frameworks.md"],
  },
  "question-decoder-agent": {
    references: ["audience-frameworks.md", "glossary-and-resources.md"],
  },
  "six-hats-agent": {
    references: ["glossary-and-resources.md", "six-hats-framework.md", "hat-sequencing-guide.md"],
  },
  "corporate-navigator-agent": {
    references: ["glossary-and-resources.md", "stakeholder-mapping-frameworks.md", "career-coaching-frameworks.md"],
  },
};

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
};

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
};

type Tab = "canvas" | "builder" | "resources";

const canvasCards: { key: keyof AgentCanvas; label: string; icon: LucideIcon; question: string }[] = [
  { key: "purpose", label: "Purpose", icon: Target, question: "Why does this agent exist?" },
  { key: "mindset", label: "Mindset", icon: Compass, question: "How does it think and decide?" },
  { key: "valueProposition", label: "Value", icon: Gem, question: "What unique value does it deliver?" },
  { key: "guardrails", label: "Guardrails", icon: Shield, question: "What are its boundaries?" },
  { key: "humanRole", label: "Human Role", icon: Users, question: "Where does the human stay in the loop?" },
  { key: "successCriteria", label: "Success", icon: CheckCircle, question: "How do you know it's working?" },
];

export default function AgentPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const agent = agents.find((a) => a.id === id);

  const [activeTab, setActiveTab] = useState<Tab>("canvas");
  const [personalityId, setPersonalityId] = useState<string>("default");
  const [skillId, setSkillId] = useState<string>("none");
  const [outputFormat, setOutputFormat] = useState<string>("text");
  const [situation, setSituation] = useState<string>("");
  const [generatedPrompt, setGeneratedPrompt] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [flyout, setFlyout] = useState<{ title: string; content: string } | null>(null);

  const selectedPersonality = useMemo(
    () => agent?.personalities.find((p) => p.id === personalityId) ?? null,
    [agent, personalityId],
  );

  const selectedSkill = useMemo(
    () => agent?.skills.find((s) => s.id === skillId) ?? null,
    [agent, skillId],
  );

  const closeFlyout = useCallback(() => setFlyout(null), []);

  if (!agent) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold mb-4 text-stone-900">Agent not found</h1>
        <Link href="/" className="text-blue-600 underline">
          Back to agents
        </Link>
      </div>
    );
  }

  const colors = colorMap[agent.color] ?? colorMap.blue;
  const Icon = iconMap[agent.icon] ?? Globe;
  const agentStories = getStoriesForAgent(agent.id);
  const hasResources = agentResources[agent.id] || (agent.examples && agent.examples.length > 0) || (agent.caseStudies && agent.caseStudies.length > 0) || agentStories.length > 0;

  function handleGenerate() {
    if (!agent || !situation.trim()) return;
    const prompt = buildPrompt(
      agent,
      selectedPersonality,
      selectedSkill,
      situation,
      outputFormat,
    );
    setGeneratedPrompt(prompt);
    setCopied(false);
  }

  async function handleCopy() {
    await navigator.clipboard.writeText(generatedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-stone-400 hover:text-stone-600 transition-colors"
      >
        <ArrowLeft size={14} />
        All agents
      </Link>

      {/* Agent header */}
      <div className={`mt-4 mb-6 rounded-xl border ${colors.bg} ${colors.border} p-6`}>
        <div className="flex items-start gap-4">
          <div className={`p-2.5 rounded-lg bg-white/80 ${colors.icon}`}>
            <Icon size={24} />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-bold tracking-tight text-stone-900 mb-1">
              {agent.name}
            </h1>
            <p className="text-stone-600">{agent.identity}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {agent.frameworks.map((f) => (
                <Badge key={f} variant="secondary" className="text-xs bg-white/60 text-stone-600 border border-stone-200">
                  {f}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tab navigation */}
      <div className="flex gap-1 mb-6 border-b border-stone-200">
        {([
          { id: "canvas" as Tab, label: "Canvas" },
          { id: "builder" as Tab, label: "Builder" },
          ...(hasResources ? [{ id: "resources" as Tab, label: "Resources" }] : []),
        ]).map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors relative ${
              activeTab === tab.id
                ? "text-stone-900"
                : "text-stone-400 hover:text-stone-600"
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-stone-900 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* ── Canvas Tab ── */}
      {activeTab === "canvas" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {canvasCards.map((card) => {
            const CardIcon = card.icon;
            const value = agent.canvas[card.key];
            return (
              <div
                key={card.key}
                className="bg-white rounded-xl border border-stone-200 p-5 flex flex-col"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className={`p-1.5 rounded-md ${colors.light}`}>
                    <CardIcon size={16} className={colors.icon} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-stone-900 leading-tight">
                      {card.label}
                    </h3>
                    <p className="text-[11px] text-stone-400">{card.question}</p>
                  </div>
                </div>
                {typeof value === "string" ? (
                  <p className="text-sm text-stone-600 leading-relaxed">{value}</p>
                ) : (
                  <ul className="space-y-1.5">
                    {(value as string[]).map((item) => (
                      <li key={item} className="flex gap-2 text-sm text-stone-600 leading-relaxed">
                        <span className="text-stone-300 shrink-0 mt-1">&#8226;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* ── Builder Tab ── */}
      {activeTab === "builder" && (
        <>
          {/* Mini canvas strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
            {[canvasCards[0], canvasCards[2], canvasCards[4]].map((card) => {
              const CardIcon = card.icon;
              const value = agent.canvas[card.key];
              return (
                <button
                  key={card.key}
                  type="button"
                  onClick={() => setActiveTab("canvas")}
                  className={`text-left rounded-lg border ${colors.border} ${colors.bg} px-4 py-3 transition-all hover:shadow-sm`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CardIcon size={13} className={colors.icon} />
                    <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">{card.label}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                    {typeof value === "string" ? value : (value as string[])[0]}
                  </p>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Configuration */}
            <div>
              <div className="bg-white rounded-xl border border-stone-200 p-6">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-1 mb-1 group/tip relative">
                      <label className="text-xs font-medium text-stone-500">Personality</label>
                      <HelpIcon size={12} className="text-stone-300 cursor-help" />
                      <div className="absolute left-0 top-full mt-1 z-10 w-52 rounded-lg bg-stone-800 text-white text-xs leading-relaxed p-2.5 shadow-lg opacity-0 pointer-events-none group-hover/tip:opacity-100 transition-opacity">
                        Changes the agent&apos;s tone and style. Pick one that fits your audience.
                      </div>
                    </div>
                    <Select value={personalityId} onValueChange={setPersonalityId}>
                      <SelectTrigger className="w-full h-9 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="default">Default</SelectItem>
                        {agent.personalities.map((p) => (
                          <SelectItem key={p.id} value={p.id}>
                            {p.name}
                            <span className="text-stone-400 ml-2 text-xs">
                              {p.whenToUse}
                            </span>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1 group/tip relative">
                      <label className="text-xs font-medium text-stone-500">Skill</label>
                      <HelpIcon size={12} className="text-stone-300 cursor-help" />
                      <div className="absolute left-0 top-full mt-1 z-10 w-52 rounded-lg bg-stone-800 text-white text-xs leading-relaxed p-2.5 shadow-lg opacity-0 pointer-events-none group-hover/tip:opacity-100 transition-opacity">
                        Activates a specific workflow the agent follows. &quot;General&quot; uses the agent without a fixed process.
                      </div>
                    </div>
                    <Select value={skillId} onValueChange={setSkillId}>
                      <SelectTrigger className="w-full h-9 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">General</SelectItem>
                        {agent.skills.map((s) => (
                          <SelectItem key={s.id} value={s.id}>
                            {s.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1 group/tip relative">
                      <label className="text-xs font-medium text-stone-500">Format</label>
                      <HelpIcon size={12} className="text-stone-300 cursor-help" />
                      <div className="absolute right-0 top-full mt-1 z-10 w-52 rounded-lg bg-stone-800 text-white text-xs leading-relaxed p-2.5 shadow-lg opacity-0 pointer-events-none group-hover/tip:opacity-100 transition-opacity">
                        How the LLM should structure its response. Plain text for conversations, structured formats for data.
                      </div>
                    </div>
                    <Select value={outputFormat} onValueChange={setOutputFormat}>
                      <SelectTrigger className="w-full h-9 text-sm">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="text">Plain text</SelectItem>
                        <SelectItem value="markdown">Markdown</SelectItem>
                        <SelectItem value="yaml">YAML</SelectItem>
                        <SelectItem value="json">JSON</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                {selectedSkill && (
                  <p className="text-xs text-stone-400 mb-3 -mt-1">
                    {selectedSkill.description}
                  </p>
                )}

                <div className="border-t border-stone-100 pt-4">
                  <label className="text-sm font-medium text-stone-700 mb-1.5 block">
                    Your situation
                  </label>
                  {agent.guidingQuestions.length > 0 && (
                    <ul className="text-xs text-stone-400 mb-3 space-y-1">
                      {agent.guidingQuestions.map((q) => (
                        <li key={q} className="flex gap-1.5">
                          <span className="text-stone-300 shrink-0">?</span>
                          {q}
                        </li>
                      ))}
                    </ul>
                  )}
                  {agent.validationRules && agent.validationRules.length > 0 && (
                    <div className="text-xs text-stone-400 mb-3 border border-stone-100 rounded-lg px-3 py-2">
                      <span className="font-medium text-stone-500 block mb-1">The agent checks for:</span>
                      <ul className="space-y-0.5">
                        {agent.validationRules.map((rule) => (
                          <li key={rule} className="flex gap-1.5">
                            <span className="text-stone-300 shrink-0">&#10003;</span>
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <Textarea
                    placeholder="Describe your situation here..."
                    value={situation}
                    onChange={(e) => setSituation(e.target.value)}
                    rows={10}
                    className="resize-y"
                  />
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={!situation.trim()}
                  className="w-full mt-4"
                >
                  Generate Prompt
                </Button>
              </div>
            </div>

            {/* Right: Generated prompt or live preview */}
            <div>
              {generatedPrompt ? (
                <div className="bg-white rounded-xl border border-stone-200 p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-base font-semibold text-stone-900">Ready to paste</h2>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopy}
                      className="gap-1.5"
                    >
                      {copied ? (
                        <>
                          <Check size={14} />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          Copy
                        </>
                      )}
                    </Button>
                  </div>
                  <pre className="text-xs leading-relaxed whitespace-pre-wrap bg-stone-50 border border-stone-100 p-4 rounded-lg max-h-[600px] overflow-y-auto font-mono text-stone-700">
                    {generatedPrompt}
                  </pre>
                </div>
              ) : situation.trim() ? (
                <div className="bg-white rounded-xl border border-stone-200 p-6">
                  <h2 className="text-sm font-medium text-stone-400 mb-3">Preview</h2>
                  <div className="space-y-3 text-sm text-stone-600">
                    <div>
                      <span className="text-xs font-medium text-stone-400 uppercase tracking-wide">Agent</span>
                      <p className="mt-0.5">{agent.name}</p>
                    </div>
                    {selectedPersonality && (
                      <div>
                        <span className="text-xs font-medium text-stone-400 uppercase tracking-wide">Personality</span>
                        <p className="mt-0.5">{selectedPersonality.name}</p>
                      </div>
                    )}
                    {selectedSkill && (
                      <div>
                        <span className="text-xs font-medium text-stone-400 uppercase tracking-wide">Skill</span>
                        <p className="mt-0.5">{selectedSkill.name}</p>
                      </div>
                    )}
                    <div>
                      <span className="text-xs font-medium text-stone-400 uppercase tracking-wide">Your situation</span>
                      <p className="mt-0.5 whitespace-pre-wrap">{situation}</p>
                    </div>
                  </div>
                  <p className="text-xs text-stone-400 mt-4">Click Generate to build the full prompt</p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center border border-dashed border-stone-300 rounded-xl bg-white px-8">
                  <p className="text-stone-500 text-sm font-medium mb-1">Your prompt will appear here</p>
                  <p className="text-stone-400 text-xs leading-relaxed max-w-xs">
                    Fill in your situation on the left, then click Generate.
                    You&apos;ll get a complete, self-contained prompt ready to paste into ChatGPT, Claude, or any LLM.
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* ── Resources Tab ── */}
      {activeTab === "resources" && (
        <div className="space-y-10">
          {/* Examples */}
          {agent.examples && agent.examples.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-stone-900 mb-2">Examples</h2>
              <p className="text-sm text-stone-500 mb-4">
                Sample inputs and outputs showing what this agent produces.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {agent.examples.map((example) => (
                  <button
                    key={example.id}
                    type="button"
                    className="text-left rounded-lg border bg-white border-stone-200 hover:border-stone-300 hover:shadow-sm p-3 transition-all"
                    onClick={() => setFlyout({ title: example.name, content: example.content })}
                  >
                    <span className="text-sm font-medium text-stone-700">
                      {example.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stories */}
          {agentStories.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-stone-900 mb-2">Stories</h2>
              <p className="text-sm text-stone-500 mb-4">
                Pain point narratives that show why this agent matters, from problem to resolution.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {agentStories.map((story) => (
                  <Link
                    key={story.id}
                    href={`/agent/${agent.id}/stories/${story.id}`}
                    className="group text-left rounded-xl border bg-white border-stone-200 hover:border-stone-300 hover:shadow-sm p-5 transition-all"
                  >
                    <h3 className="text-sm font-semibold text-stone-900 mb-1 group-hover:text-stone-700">{story.name}</h3>
                    <p className="text-xs text-stone-500 leading-relaxed">{story.tagline}</p>
                    <span className="inline-flex items-center gap-1 text-xs text-stone-400 mt-3 group-hover:text-stone-600 transition-colors">
                      Read story
                      <span className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Case Studies */}
          {agent.caseStudies && agent.caseStudies.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-stone-900 mb-2">Case Studies</h2>
              <p className="text-sm text-stone-500 mb-4">
                Fictional scenarios showing the agent in action from start to finish.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {agent.caseStudies.map((cs) => (
                  <button
                    key={cs.id}
                    type="button"
                    className="text-left rounded-xl border bg-white border-stone-200 hover:border-stone-300 hover:shadow-sm p-5 transition-all"
                    onClick={() => setFlyout({ title: cs.name, content: cs.content })}
                  >
                    <h3 className="text-sm font-semibold text-stone-900 mb-1">{cs.name}</h3>
                    <p className="text-xs text-stone-500 leading-relaxed">{cs.summary}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Reference files */}
          {agentResources[agent.id] && (
            <div>
              <h2 className="text-lg font-semibold text-stone-900 mb-2">References</h2>
              <p className="text-sm text-stone-500 mb-4">
                Knowledge bases and frameworks that inform this agent.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {agentResources[agent.id].references.map((file) => (
                  <button
                    key={file}
                    type="button"
                    className="text-left rounded-lg border bg-white border-stone-200 hover:border-stone-300 hover:shadow-sm p-3 transition-all flex items-center gap-2.5"
                    onClick={async () => {
                      try {
                        const res = await fetch(`/api/agents/${agent.id}/references/${file}`);
                        const data = await res.json();
                        if (data.content) {
                          const label = file.replace(".md", "").replace(/-/g, " ");
                          setFlyout({ title: label.charAt(0).toUpperCase() + label.slice(1), content: data.content });
                        }
                      } catch { /* ignore */ }
                    }}
                  >
                    <FileText size={14} className="text-stone-400 shrink-0" />
                    <span className="text-sm font-medium text-stone-700">
                      {file.replace(".md", "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </span>
                  </button>
                ))}
                {agentResources[agent.id].visualImage && (
                  <button
                    type="button"
                    className="text-left rounded-lg border bg-white border-stone-200 hover:border-stone-300 hover:shadow-sm p-3 transition-all flex items-center gap-2.5"
                    onClick={() => {
                      setFlyout({
                        title: "Visual Factsheet",
                        content: `![${agent.name} Factsheet](${agentResources[agent.id].visualImage})`,
                      });
                    }}
                  >
                    <ImageIcon size={14} className="text-stone-400 shrink-0" />
                    <span className="text-sm font-medium text-stone-700">Visual Factsheet</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Flyout panel */}
      <Flyout
        open={flyout !== null}
        title={flyout?.title ?? ""}
        content={flyout?.content ?? ""}
        onClose={closeFlyout}
      />
    </div>
  );
}
