# Agent Lab

The R&D department of an agent factory. Agent concepts get designed, documented, and refined here before they become production systems.

**[Live Demo](https://agent-lab.onrender.com/)**

## What This Is

Agent Lab is an agent design studio. Each agent is a portable specification: identity, personality variants, skill workflows, guardrails, and output constraints. The web app lets you explore agent designs, generate prompts for any LLM, browse portable YAML definitions, and validate agent specifications.

The core insight: **define agents by responsibility, not capability**. A "triage agent" accountable for routing beats a "classifier agent" that just describes a tool. This distinction shapes every agent spec in this repo.

![Agent catalogue with 15 fully designed agents](web/public/screenshots/1.png)

## What You Can Do

Each agent has seven tabs that take you from understanding through to production-ready output.

### Canvas

The agent's design blueprint: purpose, mindset, value proposition, guardrails, human role, and success criteria. Framework badges show the behavioral science behind each agent, with popovers that explain what each framework means and how it maps to workplace behavior.

![Canvas tab showing purpose, mindset, value, guardrails, human role, and success criteria](web/public/screenshots/5.png)

![Framework badge popover with details from bundled references](web/public/screenshots/6.png)

### Skills

Structured workflows the agent follows. Each skill composes multiple prompts into a repeatable process with numbered steps.

![Skills tab with workflow steps](web/public/screenshots/8.png)

### Builder

Pick a personality variant and skill, describe your situation, and generate a self-contained prompt ready to paste into any LLM. The builder includes validation rules, suggested questions, and a live preview. Output works in ChatGPT, Claude, Gemini, Ollama, or any other model.

![Builder with personality, skill, format, and language selectors](web/public/screenshots/10.png)

![Situation input with validation rules and suggested questions](web/public/screenshots/13.png)

![Generated prompt ready to copy and paste](web/public/screenshots/15.png)

### Resources

References, stories, examples, and case studies that inform the agent. Case studies walk through full scenarios from problem to resolution. Examples show raw input/output pairs for testing.

![Resources tab with references, stories, examples, and case studies](web/public/screenshots/17.png)

### Flow

Interactive architecture diagram showing the agent's tools, personality variants, and skill workflows as a connected graph. Click any node to expand details.

![Flow diagram showing agent architecture](web/public/screenshots/23.png)

### Composition

Maps how this agent hands off to other agents: delegations, data sharing, and escalations to human experts. Click any edge to see handoff details.

![Composition graph showing multi-agent handoffs](web/public/screenshots/24.png)

### Specification

The portable agent definition aligned with Oracle Agent Spec 26.1.0. Browse flows, tools, variants, prompts, and guardrails. Validate the spec, download as YAML or ZIP.

![Specification overview with flows, variants, tools, prompts, and guardrails](web/public/screenshots/25.png)

![Specification prompts tab with detailed prompt content](web/public/screenshots/26.png)

![Specification guardrails with boundaries, permissions, and escalation triggers](web/public/screenshots/27.png)

## Stories

Pain point narratives that show why structured thinking matters. Each story follows a real workplace problem from pain to resolution through the agent's lens. Stories come in two formats: a scrollable article and a full-screen visual presentation with animated slides.

![Stories catalogue](web/public/screenshots/2.png)

![Visual story with full-screen animated slides](web/public/screenshots/22.png)

## Agent Ideas

46 more agent concepts with frameworks, skills, validation rules, output constraints, and IP notes researched. Each idea card shows the concept, category, and key frameworks. Click to expand the full design brief.

![Agent ideas catalogue with 46 researched concepts](web/public/screenshots/3.png)

![Agent idea detail with frameworks, skills, and key principles](web/public/screenshots/4.png)

## Agents

15 fully documented agents with prompts, skills, references, and personality variants:

| Agent | Responsibility | Guide |
|-------|---------------|-------|
| [Culture Agent](agents/culture-agent/) | Cross-cultural communication bridging and meeting preparation | [Guide](docs/guides/culture-agent-guide.md) |
| [Research Agent](agents/research-agent/) | Multi-source research, synthesis, and fact-checking | [Guide](docs/guides/research-agent-guide.md) |
| [Why Agent](agents/why-agent/) | Root cause analysis through structured questioning | [Guide](docs/guides/why-agent-guide.md) |
| [Generation Agent](agents/generation-agent/) | Cross-generational workplace communication | [Guide](docs/guides/generation-agent-guide.md) |
| [Superhero Agent](agents/superhero-agent/) | Reframes work challenges through Marvel hero archetypes | [Guide](docs/guides/superhero-agent-guide.md) |
| [Storytelling Agent](agents/storytelling-agent/) | Crafts compelling narratives for professional contexts | [Guide](docs/guides/storytelling-agent-guide.md) |
| [Question Decoder](agents/question-decoder-agent/) | Decodes who is asking, why, and architects the right answer | [Guide](docs/guides/question-decoder-agent-guide.md) |
| [Six Hats Agent](agents/six-hats-agent/) | Structured parallel thinking using de Bono's Six Thinking Hats | [Guide](docs/guides/six-hats-agent-guide.md) |
| [Corporate Navigator](agents/corporate-navigator-agent/) | Navigates office politics, stakeholder dynamics, and career strategy | [Guide](docs/guides/corporate-navigator-agent-guide.md) |
| [Design Thinking Agent](agents/design-thinking-agent/) | Guides teams through the design thinking process | [Guide](docs/guides/design-thinking-agent-guide.md) |
| [Leadership Coach](agents/leadership-coach-agent/) | Leadership style assessment and development coaching | [Guide](docs/guides/leadership-coach-agent-guide.md) |
| [Networking Agent](agents/networking-agent/) | Professional networking strategy and relationship building | [Guide](docs/guides/networking-agent-guide.md) |
| [Difficult Conversations](agents/difficult-conversations-agent/) | Prepares for and navigates high-stakes interpersonal conversations | [Guide](docs/guides/difficult-conversations-agent-guide.md) |
| [Cat POV Agent](agents/cat-pov-agent/) | Observes workplace behavior through a cat's lens for boundary and energy insights | [Guide](docs/guides/cat-pov-agent-guide.md) |
| [Wargaming Agent](agents/wargaming-agent/) | Runs competitive simulations to stress-test strategy against adversarial responses | [Guide](docs/guides/wargaming-agent-guide.md) |

## Portable Agent Specifications

Agent Lab produces framework-agnostic definitions aligned with Oracle Agent Spec 26.1.0. Each spec defines the agent's identity, flows, tools, guardrails, and behavior in YAML that any agent runtime can consume: OpenAI Agents SDK, LangGraph, CrewAI, Claude Agent SDK, or Oracle Agent Runtime.

The `x-agentlab` namespace extends the standard with prompt registries, memory configuration, context strategy, knowledge references, quality criteria, and output constraints.

See [handbook.md](docs/handbook.md) Part 5 (Portable Agent Definitions) for the full field mapping and design rationale.

## Documentation

- **[Agent Handbook](docs/agent-handbook.md)** narrative guide to every agent: when to use it, what trap to avoid, and how it changes the outcome
- **[Design Handbook](docs/handbook.md)** documents the design patterns: identity, skills, validation gates, output constraints, context engineering, portable definitions
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
