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
          Most agent implementations start with code. Pick a framework, wire up some
          tools, write a prompt, ship it. The result usually works for the demo and
          breaks in production. The prompt is too vague, the output is too verbose,
          and the agent hallucinates when it doesn&apos;t have enough context.
        </p>

        <p>
          Agent Lab starts with design. What should the agent be responsible for?
          What inputs does it need before it can produce quality output? How should
          it behave when context is missing? What word limits keep the response
          useful? These questions matter more than which framework you pick, and
          answering them before writing code saves weeks of debugging later.
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
