# Agent Lab

The R&D department of an agent factory. Agent concepts get designed, documented, and refined here before they become production systems.

**[Live Demo](https://agent-lab.onrender.com/)**

## What This Is

Agent Lab is an agent design studio. Each agent is a portable specification: identity, personality variants, skill workflows, guardrails, and output constraints. The web app lets you explore agent designs, generate prompts for any LLM, browse portable YAML definitions, and validate agent specifications.

The core insight: **define agents by responsibility, not capability**. A "triage agent" accountable for routing beats a "classifier agent" that just describes a tool. This distinction shapes every agent spec in this repo.

## What You Can Do

Each agent has seven tabs in the web app:

- **Canvas** shows the agent's purpose, mindset, value proposition, guardrails, human role, success criteria, and visual export prompts for Figma AI / v0.dev
- **Skills** lists the agent's skills with step-by-step workflow breakdowns
- **Builder** lets you pick a personality variant and skill, describe your situation, and generate a prompt ready to paste into any LLM
- **Resources** collects stories, case studies, examples, and reference materials
- **Flow** visualizes the agent's architecture: tools on the left, personality variants on the right, skill workflows below, with expandable detail panels
- **Composition** maps how this agent hands off to other agents: delegations, data sharing, and escalations to human experts, with clickable edges for handoff details
- **Specification** is the portable agent definition aligned with Oracle Agent Spec 26.1.0, where you can browse flows, tools, variants, prompts, guardrails, validate the spec, and download the YAML

The standalone [Composition page](/composition) shows the full multi-agent handoff graph across all 12 agents with draggable nodes and edge-click details.

## Agents

12 fully documented agents with prompts, skills, references, and personality variants:

| Agent | Responsibility |
|-------|---------------|
| [Culture Agent](agents/culture-agent/) | Cross-cultural communication bridging and meeting preparation |
| [Research Agent](agents/research-agent/) | Multi-source research, synthesis, and fact-checking |
| [Why Agent](agents/why-agent/) | Root cause analysis through structured questioning |
| [Generation Agent](agents/generation-agent/) | Cross-generational workplace communication |
| [Superhero Agent](agents/superhero-agent/) | Reframes work challenges through Marvel hero archetypes |
| [Storytelling Agent](agents/storytelling-agent/) | Crafts compelling narratives for professional contexts |
| [Question Decoder](agents/question-decoder-agent/) | Decodes who is asking, why, and architects the right answer |
| [Six Hats Agent](agents/six-hats-agent/) | Structured parallel thinking using de Bono's Six Thinking Hats |
| [Corporate Navigator](agents/corporate-navigator-agent/) | Navigates office politics, stakeholder dynamics, and career strategy |
| [Design Thinking Agent](agents/design-thinking-agent/) | Guides teams through the design thinking process |
| [Leadership Coach](agents/leadership-coach-agent/) | Leadership style assessment and development coaching |
| [Networking Agent](agents/networking-agent/) | Professional networking strategy and relationship building |

26 more agent concepts with frameworks researched. See [agent-ideas.md](agents/agent-ideas.md).

## Portable Agent Specifications

Agent Lab produces framework-agnostic definitions aligned with Oracle Agent Spec 26.1.0. Each spec defines the agent's identity, flows, tools, guardrails, and behavior in YAML that any agent runtime can consume: OpenAI Agents SDK, LangGraph, CrewAI, Claude Agent SDK, or Oracle Agent Runtime.

The `x-agentlab` namespace extends the standard with prompt registries, memory configuration, context strategy, knowledge references, quality criteria, and output constraints.

See [handbook.md](docs/handbook.md) Part 5 (Portable Agent Definitions) for the full field mapping and design rationale.

## Documentation

- **[Handbook](docs/handbook.md)** documents the design patterns: identity, skills, validation gates, output constraints, context engineering, portable definitions
- **[Lessons Learned](docs/lessons-learned.md)** captures dos and don'ts from building these agents
- **[Bookmarks](docs/bookmarks.md)** curates external resources on agent design, prompt engineering, and agent specifications
- **[Agent Catalogue](agent-catalogue.md)** lists all agents and ideas in one place

## Running Locally

The [live demo](https://agent-lab.onrender.com/) is the fastest way to explore. Run locally if you want to modify agents, add new definitions, or use the generated prompts with a local LLM like [Ollama](https://ollama.com/) instead of cloud services.

```bash
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The Builder tab generates self-contained prompts that work with any LLM, whether cloud (ChatGPT, Claude, Gemini) or local (Ollama, LM Studio).

## Agent Folder Structure

Each agent follows a consistent structure:

| Folder | Purpose |
|--------|---------|
| `prompts/` | Atomic instructions, composable building blocks |
| `skills/` | Workflows that combine prompts into capabilities |
| `references/` | Knowledge bases, checklists, frameworks |
| `personalities/` | Voice and tone variants for different situations |
| `examples/` | Sample inputs and outputs for testing |

## Evolving Landscape

Agentic development is moving fast. New frameworks, specification standards, and design patterns emerge regularly, from Kiro's structured requirements to A2A protocol updates. The [handbook](docs/handbook.md) is a living document that continuously adopts relevant advances as they mature.

## Disclaimer

Agent Lab is a reference design for educational and demonstration purposes. It is not a production system. All examples, case studies, and scenarios are fictional. Names, characters, companies, and situations are hypothetical. Any resemblance to actual persons or organizations is coincidental.

## Author

**Tatjana Frank**, Solutions Architect. Agent Lab is one piece of a larger body of work on AI agent design, portable agent specifications, and knowledge architecture. © 2026
