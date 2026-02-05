# Agent Lab

The R&D department of an agent factory. This is where agent concepts get designed, documented, and refined before production.

## What You'll Find Here

Agent Lab is a specification library: blueprints and patterns for building AI agents. Not code that runs, but designs that inform how you build. Each agent spec captures the thinking behind what an agent should be, what it should know, and how it should behave.

The core insight driving this work: **define agents by responsibility, not capability**. A "triage agent" (accountable for routing) beats a "classifier agent" (just describes a tool). This distinction shapes every spec in this repo.

## The Agent Showcase

Browse documented agent concepts ready for implementation:

| Category | What's Here |
|----------|-------------|
| **Thinking Chain** | [why](agents/agent-ideas.md#why-agent) → [systems-thinker](agents/agent-ideas.md#systems-thinker-agent) → [strategist](agents/agent-ideas.md#strategist-agent) → [tactician](agents/agent-ideas.md#tactician-agent) — four agents that can work alone or chain together |
| **Support** | [supportive-colleague](agents/agent-ideas.md#supportive-colleague-agent), [superhero](agents/agent-ideas.md#superhero-agent) (8 Marvel hero personalities) |
| **Communication** | generation, feedback-coach, presentation-coach, storytelling, pitch, difficult-conversations |
| **Career** | interview-prep, resume, salary-negotiation, networking, mentorship, promotion, skill-gap, onboarding |
| **Organization** | corporate-navigator, change-management, knowledge-transfer, team-dynamics, meeting-facilitator |
| **Decision & Strategy** | decision-facilitator, design-thinking, negotiation |

Full specs with frameworks, skills, and references: **[agents/agent-ideas.md](agents/agent-ideas.md)**

## How to Navigate

**Start with the agents.** The [Agent Catalogue](agent-catalogue.md) lists everything, both complete implementations and concepts in development.

**Go deeper with the handbook.** The [Handbook](docs/handbook.md) documents the patterns behind good agent design: identity, capabilities, context, behavior, operations, quality. It's the reference manual for building agents that actually work.

**Learn from experience.** [Lessons Learned](docs/lessons-learned.md) captures practical insights: what works, what doesn't, and why.

**Find external resources.** [Bookmarks](docs/bookmarks.md) curates the best external reading on agent design, prompt engineering, and orchestration.

## Using These Specs

Each agent folder follows a consistent structure:

| Folder | Purpose |
|--------|---------|
| `prompts/` | Atomic instructions, composable building blocks |
| `skills/` | Workflows that combine prompts into capabilities |
| `references/` | Knowledge bases, checklists, frameworks to load as context |
| `personalities/` | Voice and tone variants for different situations |
| `examples/` | Sample inputs and outputs for testing |

Clone an agent folder into your project. Wire it to your runtime (any LLM framework works). The specs are portable, the implementation is yours.
