# Agent Lab

The R&D department of an agent factory. Agent concepts get designed, documented, and refined here, then tested through a web-based Prompt Builder.

## What This Is

Agent Lab is a specification library with a built-in testing tool. Each agent is a curated prompt design: identity, personality variants, skill workflows, validation rules, and output constraints. The Prompt Builder lets you configure an agent, describe your situation, and generate a self-contained prompt you can paste into ChatGPT, Claude, or any LLM.

The core insight: **define agents by responsibility, not capability**. A "triage agent" (accountable for routing) beats a "classifier agent" (just describes a tool). This distinction shapes every spec in this repo.

## Complete Agents

Fully documented agents with prompts, skills, references, and personality variants:

| Agent | What It Does |
|-------|-------------|
| [Culture Agent](agents/culture-agent/) | Cross-cultural communication bridging and meeting preparation |
| [Research Agent](agents/research-agent/) | Multi-source research, synthesis, and fact-checking |
| [Why Agent](agents/why-agent/) | Root cause analysis through structured questioning |
| [Generation Agent](agents/generation-agent/) | Cross-generational workplace communication |
| [Superhero Agent](agents/superhero-agent/) | Reframes work challenges through Marvel hero archetypes |
| [Storytelling Agent](agents/storytelling-agent/) | Crafts compelling narratives for professional contexts |
| [Question Decoder Agent](agents/question-decoder-agent/) | Decodes who is asking, why, and architects the right answer |
| [Six Hats Agent](agents/six-hats-agent/) | Structured parallel thinking using de Bono's Six Thinking Hats |
| [Corporate Navigator](agents/corporate-navigator-agent/) | Navigates office politics, stakeholder dynamics, and career strategy |

## Agent Ideas

26 more agent concepts with frameworks researched. See [agents/agent-ideas.md](agents/agent-ideas.md) for the full list.

| Category | Agents |
|----------|--------|
| **Thinking Chain** | why → systems-thinker → strategist → tactician |
| **Communication** | feedback-coach, presentation-coach, difficult-conversations, pitch |
| **Career** | interview-prep, resume, salary-negotiation, networking, mentorship, promotion, skill-gap, onboarding |
| **Organization** | change-management, knowledge-transfer, team-dynamics, meeting-facilitator |
| **Decision & Strategy** | decision-facilitator, design-thinking, negotiation |

## How to Navigate

**Try the Prompt Builder.** Run the web app to configure agents, generate prompts, and browse examples, case studies, and reference materials.

**Browse the catalogue.** The [Agent Catalogue](agent-catalogue.md) lists complete agents and ideas in one place.

**Read the handbook.** The [Handbook](docs/handbook.md) documents the patterns: identity, skills, validation gates, output constraints, context engineering.

**Learn from mistakes.** [Lessons Learned](docs/lessons-learned.md) captures dos and don'ts from building these agents.

**Find reading.** [Bookmarks](docs/bookmarks.md) curates external resources on agent design and prompt engineering.

## Running the Prompt Builder

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Agent Folder Structure

Each complete agent follows a consistent structure:

| Folder | Purpose |
|--------|---------|
| `prompts/` | Atomic instructions, composable building blocks |
| `skills/` | Workflows that combine prompts into capabilities |
| `references/` | Knowledge bases, checklists, frameworks |
| `personalities/` | Voice and tone variants for different situations |
| `examples/` | Sample inputs and outputs for testing |

## Prompt Quality Patterns

All agents follow two design patterns. See the [handbook](docs/handbook.md) for the full rationale.

**Input Validation Gates.** Each agent defines required input dimensions. On incomplete input, the agent states what's missing, gives a short preliminary analysis, and asks for clarification.

**Output Constraints.** Field-level word limits and a total word cap (250-400 words) force the agent to prioritize and distill rather than dump context.
