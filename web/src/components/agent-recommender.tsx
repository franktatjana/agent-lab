"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, RotateCcw, Compass } from "lucide-react";

interface Recommendation {
  agentId: string;
  reason: string;
}

interface TreeOption {
  label: string;
  description: string;
  next?: TreeStep;
  recommendations?: Recommendation[];
}

interface TreeStep {
  question: string;
  options: TreeOption[];
}

const tree: TreeStep = {
  question: "What are you facing?",
  options: [
    {
      label: "A decision to make",
      description: "Evaluating options, assessing risks, choosing a path",
      next: {
        question: "What kind of decision?",
        options: [
          {
            label: "High-stakes, need to spot risks",
            description: "Before committing resources or launching something",
            recommendations: [
              { agentId: "pre-mortem-agent", reason: "Assumes failure happened and works backward to find why" },
              { agentId: "devils-advocate-agent", reason: "Stress-tests proposals and finds blind spots before they become failures" },
              { agentId: "decision-decomposer-agent", reason: "Breaks complex decisions into manageable components" },
            ],
          },
          {
            label: "Need multiple perspectives",
            description: "Want to think through all angles before deciding",
            recommendations: [
              { agentId: "six-hats-agent", reason: "Structured parallel thinking from six distinct perspectives" },
              { agentId: "chorus-agent", reason: "Creates context-specific character voices for multi-perspective debate" },
            ],
          },
          {
            label: "Competitive or strategic",
            description: "Competitors will respond to your move",
            recommendations: [
              { agentId: "wargaming-agent", reason: "Simulates adversarial responses before you commit" },
              { agentId: "scenario-planning-agent", reason: "Tests strategy against multiple plausible futures" },
              { agentId: "time-traveler-agent", reason: "Examines your decision from past lessons and two divergent futures" },
            ],
          },
          {
            label: "Everything is on fire",
            description: "Active crisis, need structure now",
            recommendations: [
              { agentId: "crisis-navigator-agent", reason: "Structured thinking when everything is already burning" },
            ],
          },
        ],
      },
    },
    {
      label: "A communication challenge",
      description: "Conveying something important to the right audience",
      next: {
        question: "What kind of communication?",
        options: [
          {
            label: "Cross-cultural",
            description: "Working across countries, cultures, or norms",
            recommendations: [
              { agentId: "culture-agent", reason: "Bridges cultural gaps in communication and meetings" },
            ],
          },
          {
            label: "Cross-generational",
            description: "Different age groups, different work styles",
            recommendations: [
              { agentId: "generation-agent", reason: "Translates across generational communication styles" },
            ],
          },
          {
            label: "A difficult conversation",
            description: "High-stakes, emotional, or confrontational",
            recommendations: [
              { agentId: "difficult-conversations-agent", reason: "Prepares you for high-stakes interpersonal conversations" },
            ],
          },
          {
            label: "Tell a story or pitch",
            description: "Need to move an audience to action",
            recommendations: [
              { agentId: "storytelling-agent", reason: "Transforms facts and data into compelling narratives" },
            ],
          },
        ],
      },
    },
    {
      label: "A people or career situation",
      description: "Navigating relationships, politics, or growth",
      next: {
        question: "What specifically?",
        options: [
          {
            label: "Office politics or stakeholders",
            description: "Navigating power dynamics and organizational complexity",
            recommendations: [
              { agentId: "corporate-navigator-agent", reason: "Maps stakeholder dynamics and political landscapes" },
            ],
          },
          {
            label: "Leadership growth",
            description: "Developing your leadership style or coaching someone",
            recommendations: [
              { agentId: "leadership-coach-agent", reason: "Leadership style assessment and development" },
            ],
          },
          {
            label: "Building relationships",
            description: "Networking, connecting, growing your circle",
            recommendations: [
              { agentId: "networking-agent", reason: "Professional networking strategy and relationship building" },
            ],
          },
          {
            label: "Understanding what someone really wants",
            description: "Decoding a question, request, or hidden agenda",
            recommendations: [
              { agentId: "question-decoder-agent", reason: "Decodes who is asking, why, and what answer they need" },
            ],
          },
        ],
      },
    },
    {
      label: "A problem to solve",
      description: "Something broken, unclear, or needing creative solutions",
      next: {
        question: "What kind of problem?",
        options: [
          {
            label: "Situation is unclear or signals conflict",
            description: "Different people describe the same situation differently",
            recommendations: [
              { agentId: "sensemaking-agent", reason: "Clarifies ambiguous situations before decisions can be made" },
              { agentId: "archaeologist-agent", reason: "Excavates past decisions to check if original constraints still hold" },
            ],
          },
          {
            label: "Need to find root cause",
            description: "Something keeps going wrong and you don't know why",
            recommendations: [
              { agentId: "why-agent", reason: "Drills from symptoms to root causes through structured questioning" },
            ],
          },
          {
            label: "Need creative solutions",
            description: "Design thinking, innovation, user-centered approach",
            recommendations: [
              { agentId: "design-thinking-agent", reason: "Guides teams through the design thinking process" },
              { agentId: "trickster-agent", reason: "Inverts the problem and breaks frames when obvious approaches fail" },
            ],
          },
          {
            label: "Need to research and synthesize",
            description: "Gathering information from multiple sources",
            recommendations: [
              { agentId: "research-agent", reason: "Multi-source research, synthesis, and fact-checking" },
            ],
          },
        ],
      },
    },
    {
      label: "Need perspective or energy",
      description: "Stuck, drained, or need a fresh lens",
      next: {
        question: "What would help most?",
        options: [
          {
            label: "Empowerment and confidence",
            description: "Need to feel like a hero before a big moment",
            recommendations: [
              { agentId: "superhero-agent", reason: "Reframes challenges through hero archetypes to build confidence" },
              { agentId: "mythology-agent", reason: "Reframes challenges through mythological archetypes from world traditions" },
            ],
          },
          {
            label: "An honest reality check",
            description: "Need someone to call out what I'm not seeing",
            recommendations: [
              { agentId: "cat-pov-agent", reason: "Observes workplace behavior through an outsider's lens" },
            ],
          },
          {
            label: "Patience and long-term thinking",
            description: "Playing the long game, compounding over time",
            recommendations: [
              { agentId: "gardener-agent", reason: "Long-term cultivation with patience, timing, and compounding returns" },
            ],
          },
        ],
      },
    },
  ],
};

export function AgentRecommender() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<TreeStep>(tree);
  const [path, setPath] = useState<string[]>([]);
  const [results, setResults] = useState<Recommendation[] | null>(null);

  const handleSelect = (option: TreeOption) => {
    if (option.recommendations) {
      setResults(option.recommendations);
      setPath([...path, option.label]);
    } else if (option.next) {
      setStep(option.next);
      setPath([...path, option.label]);
    }
  };

  const handleReset = () => {
    setStep(tree);
    setPath([]);
    setResults(null);
  };

  const handleClose = () => {
    setIsOpen(false);
    handleReset();
  };

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="w-full mb-6 group"
      >
        <div className="flex items-center gap-3 rounded-xl border border-stone-200 bg-white px-5 py-4 transition-all hover:shadow-sm hover:border-stone-300">
          <div className="p-2 rounded-lg bg-stone-100 text-stone-500 group-hover:bg-stone-200 transition-colors">
            <Compass size={18} />
          </div>
          <div className="text-left">
            <span className="text-sm font-medium text-stone-700">Not sure which agent to use?</span>
            <span className="text-xs text-stone-400 ml-2">Find your match in 2 steps</span>
          </div>
          <ArrowRight size={14} className="ml-auto text-stone-300 group-hover:text-stone-500 transition-colors" />
        </div>
      </button>
    );
  }

  return (
    <div className="mb-6 rounded-xl border border-stone-200 bg-white p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Compass size={16} className="text-stone-400" />
          <span className="text-sm font-medium text-stone-700">Find your agent</span>
        </div>
        <button
          type="button"
          onClick={handleClose}
          className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
        >
          Close
        </button>
      </div>

      {path.length > 0 && (
        <div className="flex items-center gap-1.5 mb-4 text-xs text-stone-400">
          {path.map((p, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <span>›</span>}
              <span>{p}</span>
            </span>
          ))}
        </div>
      )}

      {results ? (
        <div>
          <p className="text-sm text-stone-600 mb-4">Based on your answers, try:</p>
          <div className="space-y-3">
            {results.map((rec) => (
              <Link key={rec.agentId} href={`/agent/${rec.agentId}`} onClick={handleClose}>
                <div className="flex items-center gap-3 rounded-lg border border-stone-200 px-4 py-3 transition-all hover:shadow-sm hover:border-stone-300 group">
                  <div className="flex-1">
                    <span className="text-sm font-medium text-stone-800">
                      {rec.agentId.replace(/-agent$/, "").split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ")}
                    </span>
                    <p className="text-xs text-stone-500 mt-0.5">{rec.reason}</p>
                  </div>
                  <ArrowRight size={14} className="text-stone-300 group-hover:text-stone-500 shrink-0 transition-colors" />
                </div>
              </Link>
            ))}
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1.5 mt-4 text-xs text-stone-400 hover:text-stone-600 transition-colors"
          >
            <RotateCcw size={12} />
            Start over
          </button>
        </div>
      ) : (
        <div>
          <p className="text-sm font-medium text-stone-700 mb-3">{step.question}</p>
          <div className="space-y-2">
            {step.options.map((option) => (
              <button
                key={option.label}
                type="button"
                onClick={() => handleSelect(option)}
                className="w-full text-left rounded-lg border border-stone-200 px-4 py-3 transition-all hover:shadow-sm hover:border-stone-300 group"
              >
                <span className="text-sm font-medium text-stone-700 group-hover:text-stone-900">{option.label}</span>
                <p className="text-xs text-stone-400 mt-0.5">{option.description}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
