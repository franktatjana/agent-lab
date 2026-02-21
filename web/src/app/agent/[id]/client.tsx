"use client";

import { use, useState, useMemo, useCallback } from "react";
import { agents } from "@/data/agents";
import type { AgentCanvas } from "@/data/agents";
import { getStoriesForAgent } from "@/data/stories";
import { getIdeasForAgent } from "@/data/case-study-ideas";
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
  Lightbulb,
  HeartHandshake,
  ArrowLeft,
  Copy,
  Check,
  FileText,
  Image as ImageIcon,
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
  "design-thinking-agent": {
    references: ["design-thinking-frameworks.md", "glossary-and-resources.md"],
  },
  "leadership-coach-agent": {
    references: ["leadership-frameworks.md", "leadership-archetypes.md", "glossary-and-resources.md"],
  },
  "networking-agent": {
    references: ["networking-frameworks.md", "glossary-and-resources.md"],
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
  Lightbulb,
  HeartHandshake,
  Users,
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
  cyan:    { bg: "bg-cyan-50",    border: "border-cyan-200",    icon: "text-cyan-500",    light: "bg-cyan-100" },
  sky:     { bg: "bg-sky-50",     border: "border-sky-200",     icon: "text-sky-500",     light: "bg-sky-100" },
  purple:  { bg: "bg-purple-50",  border: "border-purple-200",  icon: "text-purple-500",  light: "bg-purple-100" },
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

export default function AgentPageClient({
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
  const agentCsIdeas = getIdeasForAgent(agent.id);
  const hasResources = agentResources[agent.id] || (agent.examples && agent.examples.length > 0) || (agent.caseStudies && agent.caseStudies.length > 0) || agentStories.length > 0 || agentCsIdeas.length > 0;

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
        <>
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

        {/* Skills */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-stone-900 mb-1">Skills</h2>
          <p className="text-sm text-stone-500 mb-4">
            Structured workflows this agent follows. Each skill composes multiple prompts into a repeatable process.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {agent.skills.map((skill) => (
              <div
                key={skill.id}
                className="bg-white rounded-xl border border-stone-200 p-5 flex flex-col"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className={`p-1.5 rounded-md ${colors.light}`}>
                    <Zap size={16} className={colors.icon} />
                  </div>
                  <h3 className="text-sm font-semibold text-stone-900">
                    {skill.name}
                  </h3>
                </div>
                <p className="text-sm text-stone-600 leading-relaxed mb-3">
                  {skill.description}
                </p>
                <ol className="space-y-1.5 mt-auto">
                  {skill.workflow.map((step, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-stone-500 leading-relaxed">
                      <span className="text-stone-400 font-mono text-xs mt-0.5 shrink-0 w-4 text-right">
                        {idx + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>
        </>
      )}

      {/* ── Builder Tab ── */}
      {activeTab === "builder" && (
        <>
          {/* Config cards strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-xl border border-stone-200 p-4">
              <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide block mb-1">Personality</label>
              <p className="text-xs text-stone-400 leading-relaxed mb-3">
                Changes the agent&apos;s tone and style. Pick one that fits your audience.
              </p>
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
            <div className="bg-white rounded-xl border border-stone-200 p-4">
              <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide block mb-1">Skill</label>
              <p className="text-xs text-stone-400 leading-relaxed mb-3">
                Activates a specific workflow the agent follows. &quot;General&quot; uses the agent without a fixed process.
              </p>
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
            <div className="bg-white rounded-xl border border-stone-200 p-4">
              <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide block mb-1">Format</label>
              <p className="text-xs text-stone-400 leading-relaxed mb-3">
                How the LLM should structure its response. Plain text for conversations, structured for data.
              </p>
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
            <p className="text-xs text-stone-400 -mt-4 mb-4 px-1">
              <span className="font-medium text-stone-500">{selectedSkill.name}:</span>{" "}
              {selectedSkill.description}
            </p>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left: Situation input */}
            <div>
              <div className="bg-white rounded-xl border border-stone-200 p-6">
                <label className="text-sm font-medium text-stone-700 mb-3 block">
                  Your situation
                </label>
                {agent.guidingQuestions.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {agent.guidingQuestions.map((q) => (
                      <div
                        key={q}
                        className={`rounded-lg border ${colors.border} ${colors.bg} px-3 py-2.5 text-xs text-stone-600 leading-relaxed`}
                      >
                        {q}
                      </div>
                    ))}
                  </div>
                )}
                {agent.validationRules && agent.validationRules.length > 0 && (
                  <div className="text-xs text-stone-500 mb-4 bg-stone-50 border border-stone-200 rounded-lg px-4 py-3">
                    <span className="font-semibold text-stone-600 block mb-1.5">The agent checks for:</span>
                    <ul className="space-y-1">
                      {agent.validationRules.map((rule) => (
                        <li key={rule} className="flex gap-2 items-start">
                          <span className="text-stone-400 shrink-0 mt-px">&#10003;</span>
                          <span>{rule}</span>
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
                <div className="flex flex-col items-center justify-center h-full min-h-64 text-center border border-dashed border-stone-300 rounded-xl bg-white px-8">
                  <p className="text-stone-500 text-sm font-medium mb-1">Your prompt will appear here</p>
                  <p className="text-stone-400 text-xs leading-relaxed max-w-xs">
                    Fill in your situation on the left, then click Generate.
                    You&apos;ll get a complete, self-contained prompt ready to paste into ChatGPT, Claude, or any LLM.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Canvas context strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6">
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
                {agent.examples.map((example) => {
                  const lines = example.content.split("\n");
                  const commentLine = lines.find((l, idx) => idx > 0 && l.trim().startsWith("# ") && !l.trim().startsWith("# Basic") && !l.trim().startsWith("# Example:"));
                  const descLine = lines.find((l) => /^description:\s*\|?\s*$/.test(l.trim()));
                  const descIdx = descLine ? lines.indexOf(descLine) : -1;
                  const descText = descIdx >= 0 && descIdx + 1 < lines.length ? lines[descIdx + 1].trim() : "";
                  const preview = example.summary || (commentLine ? commentLine.trim().slice(2) : descText || "");
                  return (
                    <button
                      key={example.id}
                      type="button"
                      className={`text-left rounded-lg border ${colors.border} hover:shadow-sm px-4 py-3 transition-all group`}
                      onClick={() => setFlyout({ title: example.name, content: example.content })}
                    >
                      <div className="flex items-center gap-2.5">
                        <FileText size={14} className={`${colors.icon} shrink-0`} />
                        <h3 className="text-sm font-medium text-stone-800 group-hover:text-stone-600 truncate flex-1">{example.name}</h3>
                        <span className="text-stone-400 group-hover:text-stone-600 transition-colors shrink-0">&rarr;</span>
                      </div>
                      {preview && <p className="text-xs text-stone-500 leading-relaxed line-clamp-1 mt-1 ml-[22px]">{preview}</p>}
                    </button>
                  );
                })}
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
                    <div className="flex items-start gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-stone-900 mb-1 group-hover:text-stone-700">{story.name}</h3>
                        <p className="text-xs text-stone-500 leading-relaxed">{story.tagline}</p>
                      </div>
                      <span className="text-stone-400 group-hover:text-stone-600 transition-colors shrink-0 mt-0.5">&rarr;</span>
                    </div>
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
                      className={`text-left rounded-xl border ${colors.border} hover:shadow-md p-5 transition-all group`}
                      onClick={() => setFlyout({ title: cs.name, content: cs.content })}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`p-1.5 rounded-lg ${colors.light} mt-0.5 shrink-0`}>
                          <BookOpen size={14} className={colors.icon} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-semibold text-stone-900 mb-1 group-hover:text-stone-700">{cs.name}</h3>
                          <p className="text-xs text-stone-500 leading-relaxed">{cs.summary}</p>
                        </div>
                        <span className="text-stone-400 group-hover:text-stone-600 transition-colors shrink-0 mt-0.5">&rarr;</span>
                      </div>
                    </button>
                  ))}
              </div>
            </div>
          )}

          {/* Case Study Ideas */}
          {agentCsIdeas.length > 0 && (
            <div>
              <h2 className="text-lg font-semibold text-stone-900 mb-2">Case Study Ideas</h2>
              <p className="text-sm text-stone-500 mb-4">
                Brainstorming notes for future case studies. Not yet developed into full scenarios.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {agentCsIdeas.map((idea) => (
                  <div
                    key={idea.id}
                    className="rounded-lg border border-dashed border-stone-300 bg-white p-4"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="text-sm font-semibold text-stone-900 flex-1">{idea.title}</h3>
                      {idea.category && (
                        <span className="text-[10px] font-medium text-stone-400 bg-stone-100 rounded-full px-1.5 py-0.5 shrink-0">
                          {idea.category}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-500 leading-relaxed">{idea.surface}</p>
                    {idea.rootCause && (
                      <div className="mt-2.5 pt-2.5 border-t border-stone-100">
                        <span className="text-[10px] font-semibold text-stone-400 uppercase tracking-wide block mb-1">Root cause chain</span>
                        <p className="text-xs text-stone-600 leading-relaxed">{idea.rootCause}</p>
                      </div>
                    )}
                  </div>
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
                    className="text-left rounded-lg border bg-white border-stone-200 hover:border-stone-300 hover:shadow-sm p-3 transition-all flex items-center gap-2.5 group"
                    onClick={async () => {
                      try {
                        const res = await fetch("/references.json");
                        const refs = await res.json();
                        const key = `${agent.id}/${file}`;
                        if (refs[key]) {
                          const label = file.replace(".md", "").replace(/-/g, " ");
                          setFlyout({ title: label.charAt(0).toUpperCase() + label.slice(1), content: refs[key] });
                        }
                      } catch { /* ignore */ }
                    }}
                  >
                    <FileText size={14} className="text-stone-400 shrink-0" />
                    <span className="text-sm font-medium text-stone-700 flex-1">
                      {file.replace(".md", "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
                    </span>
                    <span className="text-stone-400 group-hover:text-stone-600 transition-colors shrink-0">&rarr;</span>
                  </button>
                ))}
                {agentResources[agent.id].visualImage && (
                  <button
                    type="button"
                    className="text-left rounded-lg border bg-white border-stone-200 hover:border-stone-300 hover:shadow-sm p-3 transition-all flex items-center gap-2.5 group"
                    onClick={() => {
                      setFlyout({
                        title: "Visual Factsheet",
                        content: `![${agent.name} Factsheet](${agentResources[agent.id].visualImage})`,
                      });
                    }}
                  >
                    <ImageIcon size={14} className="text-stone-400 shrink-0" />
                    <span className="text-sm font-medium text-stone-700 flex-1">Visual Factsheet</span>
                    <span className="text-stone-400 group-hover:text-stone-600 transition-colors shrink-0">&rarr;</span>
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
