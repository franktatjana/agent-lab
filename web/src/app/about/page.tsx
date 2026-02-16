import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-2xl">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-stone-400 hover:text-stone-600 transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Back to agents
      </Link>

      <h1 className="text-3xl font-bold tracking-tight text-stone-900 mb-6">
        About Agent Lab
      </h1>

      <div className="space-y-6 text-stone-700 leading-relaxed">
        <p>
          Agent Lab is the R&amp;D department of an agent factory. It&apos;s where
          agent concepts get designed, documented, and refined before they become
          production systems.
        </p>

        <p>
          The core insight driving this work:{" "}
          <strong className="text-stone-900">
            define agents by responsibility, not capability.
          </strong>{" "}
          A &quot;triage agent&quot; that&apos;s accountable for routing beats a
          &quot;classifier agent&quot; that just describes a tool. This distinction
          shapes every agent spec in this repo.
        </p>

        <h2 className="text-xl font-bold text-stone-900 pt-4">Why this exists</h2>

        <p>
          This is my sandbox for exploring how to describe real-world situations
          in a way that any AI can understand, regardless of which LLM or
          framework runs behind it. The focus is on the problem, not the tooling.
        </p>

        <p>
          Most agent work starts with a specific model or framework and bakes
          assumptions into the design. The result is tightly coupled: switch the
          LLM and the prompts break, change the orchestrator and the workflows
          fall apart. Agent Lab takes the opposite approach. Situations are
          described as they exist in real life, with the context a human would
          actually provide, not shaped around what a particular API expects. That
          makes the output portable: the same prompt works in ChatGPT, Claude,
          Gemini, or whatever comes next.
        </p>

        <h2 className="text-xl font-bold text-stone-900 pt-4">What you get</h2>

        <p>
          Each agent is a curated prompt design: identity, personality variants,
          skill workflows, validation rules, and output constraints. The web app
          lets you configure an agent, describe your situation, and generate a
          self-contained prompt you can paste into ChatGPT, Claude, or any LLM.
        </p>

        <p>
          The handbook captures the patterns behind good agent design. The lessons
          learned distill practical insights from building these agents. The agent
          ideas document future concepts with frameworks already researched.
        </p>

        <h2 className="text-xl font-bold text-stone-900 pt-4">Who built this</h2>

        <p>
          <strong className="text-stone-900">Tatjana Frank</strong>, Solutions
          Architect. Agent Lab is one piece of a larger body of work on
          AI agent design, prompt engineering, and knowledge architecture.
          © 2026
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-sm">
          <a
            href="https://github.com/franktatjana/agent-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-stone-800 transition-colors underline underline-offset-2"
          >
            GitHub Repository
          </a>
          <a
            href="https://github.com/franktatjana"
            target="_blank"
            rel="noopener noreferrer"
            className="text-stone-500 hover:text-stone-800 transition-colors underline underline-offset-2"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </div>
  );
}
