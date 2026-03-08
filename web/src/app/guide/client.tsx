"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function Screenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full rounded-xl border border-stone-200 shadow-sm"
    />
  );
}

const agents = [
  { id: "culture-agent", name: "Culture Agent", responsibility: "Cross-cultural communication bridging and meeting preparation" },
  { id: "research-agent", name: "Research Agent", responsibility: "Multi-source research, synthesis, and fact-checking" },
  { id: "why-agent", name: "Why Agent", responsibility: "Root cause analysis through structured questioning" },
  { id: "generation-agent", name: "Generation Agent", responsibility: "Cross-generational workplace communication" },
  { id: "superhero-agent", name: "Superhero Agent", responsibility: "Reframes work challenges through Marvel hero archetypes" },
  { id: "storytelling-agent", name: "Storytelling Agent", responsibility: "Crafts compelling narratives for professional contexts" },
  { id: "question-decoder-agent", name: "Question Decoder", responsibility: "Decodes who is asking, why, and architects the right answer" },
  { id: "six-hats-agent", name: "Six Hats Agent", responsibility: "Structured parallel thinking using de Bono's Six Thinking Hats" },
  { id: "corporate-navigator-agent", name: "Corporate Navigator", responsibility: "Navigates office politics, stakeholder dynamics, and career strategy" },
  { id: "design-thinking-agent", name: "Design Thinking Agent", responsibility: "Guides teams through the design thinking process" },
  { id: "leadership-coach-agent", name: "Leadership Coach", responsibility: "Leadership style assessment and development coaching" },
  { id: "networking-agent", name: "Networking Agent", responsibility: "Professional networking strategy and relationship building" },
  { id: "difficult-conversations-agent", name: "Difficult Conversations", responsibility: "Prepares for and navigates high-stakes interpersonal conversations" },
  { id: "cat-pov-agent", name: "Cat POV Agent", responsibility: "Observes workplace behavior through a cat's lens for boundary and energy insights" },
  { id: "wargaming-agent", name: "Wargaming Agent", responsibility: "Runs competitive simulations to stress-test strategy against adversarial responses" },
];

const folderStructure = [
  { folder: "prompts/", purpose: "Atomic instructions, composable building blocks" },
  { folder: "skills/", purpose: "Workflows that combine prompts into capabilities" },
  { folder: "references/", purpose: "Knowledge bases, checklists, frameworks" },
  { folder: "personalities/", purpose: "Voice and tone variants for different situations" },
  { folder: "examples/", purpose: "Sample inputs and outputs for testing" },
];

export function GuideClient() {
  return (
    <div className="max-w-4xl">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-stone-400 hover:text-stone-600 transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Back to agents
      </Link>

      <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-3">
        Agent Lab
      </h1>

      <p className="text-stone-600 leading-relaxed mb-4">
        The R&amp;D department of an agent factory. Agent concepts get designed,
        documented, and refined here before they become production systems.
      </p>

      <h2 className="text-xl font-bold text-stone-900 mt-12 mb-3">Why This Matters</h2>

      <p className="text-stone-700 leading-relaxed mb-4">
        Most agent projects start with a framework, wire up some tools, and hope
        the prompts hold together. The result is fragile: swap the LLM and
        prompts break, change the orchestrator and workflows fall apart. Agent
        Lab takes the opposite approach.{" "}
        <strong className="text-stone-900">
          Every agent is designed as a portable specification first,
        </strong>{" "}
        with identity, personality variants, skill workflows, guardrails, and
        output constraints defined before any runtime decision is made.
      </p>

      <p className="text-stone-700 leading-relaxed mb-4">
        The core insight:{" "}
        <strong className="text-stone-900">
          define agents by responsibility, not capability.
        </strong>{" "}
        A &quot;triage agent&quot; accountable for routing beats a
        &quot;classifier agent&quot; that just describes a tool. This distinction
        shapes every spec in this repo and makes agents transferable across teams
        and platforms.
      </p>

      <p className="text-stone-700 leading-relaxed mb-8">
        The goal is practical:{" "}
        <strong className="text-stone-900">
          explore an agent, understand its design, and download the full
          specification as YAML
        </strong>{" "}
        ready to plug into any agent runtime, whether that&apos;s OpenAI Agents
        SDK, LangGraph, CrewAI, Claude Agent SDK, or Oracle Agent Runtime. The
        Builder tab also generates self-contained prompts you can paste directly
        into any LLM, no framework required.
      </p>

      <Screenshot src="/screenshots/1.png" alt="Agent catalogue with 15 fully designed agents" />

      {/* What You Can Do */}
      <h2 className="text-xl font-bold text-stone-900 mt-16 mb-6">What You Can Do</h2>

      <p className="text-stone-600 leading-relaxed mb-8">
        Each agent has{" "}
        <strong className="text-stone-900">seven tabs that take you from understanding through to
        production-ready output.</strong>
      </p>

      {/* Canvas */}
      <h3 className="text-lg font-semibold text-stone-800 mb-3">Canvas</h3>
      <p className="text-stone-600 leading-relaxed mb-4">
        The agent&apos;s design blueprint: purpose, mindset, value proposition,
        guardrails, human role, and success criteria.{" "}
        <strong className="text-stone-900">Framework badges show the
        behavioral science behind each agent.</strong>{" "}
        Click any badge to open a popover
        with the full explanation: what the framework means, how it maps to
        workplace behavior, and a link to the original research.
      </p>
      <div className="space-y-4 mb-12">
        <Screenshot src="/screenshots/5.png" alt="Canvas tab showing purpose, mindset, value, guardrails, human role, and success criteria" />
        <Screenshot src="/screenshots/6.png" alt="Framework badge popover with details from bundled references" />
        <Screenshot src="/screenshots/28.png" alt="Framework detail popover showing Territorial Intelligence with workplace mapping and behavioral science roots" />
      </div>

      {/* Skills */}
      <h3 className="text-lg font-semibold text-stone-800 mb-3">Skills</h3>
      <p className="text-stone-600 leading-relaxed mb-4">
        Structured workflows the agent follows.{" "}
        <strong className="text-stone-900">Each skill composes multiple
        prompts into a repeatable process</strong> with numbered steps.
      </p>
      <div className="mb-12">
        <Screenshot src="/screenshots/8.png" alt="Skills tab with workflow steps" />
      </div>

      {/* Builder */}
      <h3 className="text-lg font-semibold text-stone-800 mb-3">Builder</h3>
      <p className="text-stone-600 leading-relaxed mb-4">
        Pick a personality variant and skill, describe your situation, and{" "}
        <strong className="text-stone-900">generate a self-contained prompt
        ready to paste into any LLM.</strong>{" "}
        The builder includes validation rules, suggested questions, and a live
        preview. Output works in ChatGPT, Claude, Gemini, Ollama, or any other
        model.
      </p>
      <div className="space-y-4 mb-12">
        <Screenshot src="/screenshots/10.png" alt="Builder with personality, skill, format, and language selectors" />
        <Screenshot src="/screenshots/13.png" alt="Situation input with validation rules and suggested questions" />
        <Screenshot src="/screenshots/15.png" alt="Generated prompt ready to copy and paste" />
      </div>

      {/* Resources */}
      <h3 className="text-lg font-semibold text-stone-800 mb-3">Resources</h3>
      <p className="text-stone-600 leading-relaxed mb-4">
        <strong className="text-stone-900">References from published research</strong>{" "}
        are what inform each agent&apos;s prompts, validation rules, and output structure.
        Stories, examples, and case studies show the agent applied to real scenarios.
        Case studies walk through full problems from pain to resolution.
        Examples provide raw input/output pairs for testing.
      </p>
      <div className="mb-12">
        <Screenshot src="/screenshots/17.png" alt="Resources tab with references, stories, examples, and case studies" />
      </div>

      {/* Flow */}
      <h3 className="text-lg font-semibold text-stone-800 mb-3">Flow</h3>
      <p className="text-stone-600 leading-relaxed mb-4">
        <strong className="text-stone-900">Interactive architecture diagram</strong>{" "}
        showing the agent&apos;s tools,
        personality variants, and skill workflows as a connected graph. Click any
        node to expand details.
      </p>
      <div className="mb-12">
        <Screenshot src="/screenshots/23.png" alt="Flow diagram showing agent architecture" />
      </div>

      {/* Composition */}
      <h3 className="text-lg font-semibold text-stone-800 mb-3">Composition</h3>
      <p className="text-stone-600 leading-relaxed mb-4">
        Maps how this agent{" "}
        <strong className="text-stone-900">hands off to other agents:</strong>{" "}
        delegations, data sharing,
        and escalations to human experts. Click any edge to see handoff details.
      </p>
      <div className="mb-12">
        <Screenshot src="/screenshots/24.png" alt="Composition graph showing multi-agent handoffs" />
      </div>

      {/* Specification */}
      <h3 className="text-lg font-semibold text-stone-800 mb-3">Specification</h3>
      <p className="text-stone-600 leading-relaxed mb-4">
        This is what the whole project builds toward. The Specification tab shows
        the portable agent definition aligned with Oracle Agent Spec 26.1.0:
        flows, tools, variants, prompts, and guardrails in one structured view.{" "}
        <strong className="text-stone-900">Validate the spec against the
        standard, then download as YAML or ZIP</strong> to
        use in your own agent runtime.
      </p>
      <div className="space-y-4 mb-12">
        <Screenshot src="/screenshots/25.png" alt="Specification overview with flows, variants, tools, prompts, and guardrails" />
        <Screenshot src="/screenshots/26.png" alt="Specification prompts tab with detailed prompt content" />
        <Screenshot src="/screenshots/27.png" alt="Specification guardrails with boundaries, permissions, and escalation triggers" />
      </div>

      {/* Stories */}
      <h2 className="text-xl font-bold text-stone-900 mt-16 mb-3">Stories</h2>
      <p className="text-stone-600 leading-relaxed mb-4">
        Pain point narratives that show why structured thinking matters.{" "}
        <strong className="text-stone-900">Each story follows a real workplace
        problem from pain to resolution</strong> through
        the agent&apos;s lens. Stories come in two formats: a scrollable article
        and a full-screen visual presentation with animated slides.
      </p>
      <div className="space-y-4 mb-12">
        <Screenshot src="/screenshots/2.png" alt="Stories catalogue" />
        <Screenshot src="/screenshots/22.png" alt="Visual story with full-screen animated slides" />
      </div>

      {/* Agent Ideas */}
      <h2 className="text-xl font-bold text-stone-900 mt-16 mb-3">Agent Ideas</h2>
      <p className="text-stone-600 leading-relaxed mb-4">
        <strong className="text-stone-900">60 more agent concepts</strong> with
        frameworks, skills, validation rules, output
        constraints, and IP notes researched. Each idea card shows the concept,
        category, and key frameworks. Click to expand the full design brief.
      </p>
      <div className="space-y-4 mb-12">
        <Screenshot src="/screenshots/3.png" alt="Agent ideas catalogue with 60 researched concepts" />
        <Screenshot src="/screenshots/4.png" alt="Agent idea detail with frameworks, skills, and key principles" />
      </div>

      {/* Agents table */}
      <h2 className="text-xl font-bold text-stone-900 mt-16 mb-3">Agents</h2>
      <p className="text-stone-600 leading-relaxed mb-4">
        <strong className="text-stone-900">15 fully documented agents</strong> with
        prompts, skills, references, and personality variants.
      </p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-200">
              <th className="text-left py-2 font-semibold text-stone-900">Agent</th>
              <th className="text-left py-2 font-semibold text-stone-900">Responsibility</th>
            </tr>
          </thead>
          <tbody>
            {agents.map((a) => (
              <tr key={a.id} className="border-b border-stone-100">
                <td className="py-2">
                  <Link
                    href={`/agent/${a.id}`}
                    className="text-stone-700 hover:text-stone-900 underline underline-offset-2"
                  >
                    {a.name}
                  </Link>
                </td>
                <td className="py-2 text-stone-600">{a.responsibility}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Portable Agent Specifications */}
      <h2 className="text-xl font-bold text-stone-900 mt-16 mb-3">Portable Agent Specifications</h2>
      <p className="text-stone-600 leading-relaxed mb-4">
        Every tab in the app feeds into{" "}
        <strong className="text-stone-900">one deliverable: a framework-agnostic
        YAML definition you can take with you.</strong>{" "}
        The Canvas captures identity, the
        Skills define workflows, the Resources provide knowledge, and the
        Specification tab assembles everything into a validated file aligned with
        Oracle Agent Spec 26.1.0. Download a single agent as YAML or grab the
        full set as a ZIP.
      </p>
      <p className="text-stone-600 leading-relaxed mb-4">
        The specs are designed to be consumed by any agent runtime: OpenAI Agents
        SDK, LangGraph, CrewAI, Claude Agent SDK, or Oracle Agent Runtime.{" "}
        <strong className="text-stone-900">The same definition works across all
        of them</strong> because the spec describes what
        the agent is and does, not how a particular framework should wire it up.
      </p>
      <p className="text-stone-600 leading-relaxed mb-12">
        The <code className="text-sm bg-stone-100 px-1.5 py-0.5 rounded font-mono">x-agentlab</code> namespace
        extends the standard with prompt registries, memory configuration,
        context strategy, knowledge references, quality criteria, and output
        constraints.
      </p>

      {/* Running Locally */}
      <h2 className="text-xl font-bold text-stone-900 mt-16 mb-3">Running Locally</h2>
      <p className="text-stone-600 leading-relaxed mb-4">
        The Builder tab generates{" "}
        <strong className="text-stone-900">self-contained prompts that work
        with any LLM,</strong>{" "}
        whether cloud (ChatGPT, Claude, Gemini) or local (Ollama, LM Studio).
      </p>
      <pre className="bg-stone-900 text-stone-100 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-12">
        <code>{"cd web\nnpm install\nnpm run dev"}</code>
      </pre>

      {/* Agent Folder Structure */}
      <h2 className="text-xl font-bold text-stone-900 mt-16 mb-3">Agent Folder Structure</h2>
      <p className="text-stone-600 leading-relaxed mb-4">
        Each agent follows a consistent structure.
      </p>
      <div className="overflow-x-auto mb-12">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-stone-200">
              <th className="text-left py-2 font-semibold text-stone-900">Folder</th>
              <th className="text-left py-2 font-semibold text-stone-900">Purpose</th>
            </tr>
          </thead>
          <tbody>
            {folderStructure.map((f) => (
              <tr key={f.folder} className="border-b border-stone-100">
                <td className="py-2">
                  <code className="text-sm bg-stone-100 px-1.5 py-0.5 rounded font-mono">{f.folder}</code>
                </td>
                <td className="py-2 text-stone-600">{f.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-stone-200 pt-8 mt-16 mb-4">
        <p className="text-sm text-stone-400 leading-relaxed">
          Agent Lab is a reference design for educational and demonstration
          purposes. It is not a production system. All examples, case studies,
          and scenarios are fictional. Names, characters, companies, and
          situations are hypothetical. Any resemblance to actual persons or
          organizations is coincidental.
        </p>
        <p className="text-sm text-stone-400 mt-4">
          <strong className="text-stone-500">Tatjana Frank</strong>, Solutions
          Architect. © 2026
        </p>
      </div>
    </div>
  );
}
