Design a single-page project overview card for "Agent Lab", an AI agent
specification library and design studio. ONE PAGER, no scrolling. Compact,
information-dense, every element earns its space. Structured like a mission
control dashboard for an agent factory.

LAYOUT CONSTRAINTS:
- Fixed dimensions: fits a single screen or printed A4 landscape
- No scrolling. If it doesn't fit, make it smaller, don't add a second page.
- Prefer visual representations over text: node graphs, flow diagrams,
  grids, matrices. Replace bullet lists with diagrams wherever possible.

AESTHETIC:
- Deep navy and cool gray tones. Professional, technical, calm.
- Primary accent: steel blue (#4A90D9). Secondary: slate gray (#6B7B8D).
- Background: white (#FFFFFF) with light gray surfaces (#F4F6F8, #E8ECF0).
- Borders: light gray (#D1D8E0). Text: charcoal (#1E2A3A).
- No warm tones. No amber. No illustrations or mascots.
- Monospace (JetBrains Mono) for data fields, agent names, file paths.
- Sans-serif (Inter) for labels and descriptions.
- Tight spacing. Every pixel carries information.

HEADER (full width): "Agent Lab" (24px bold), subtitle "AI Agent Specification
Library: portable agents that work across any LLM or framework" (13px muted),
version badge, agent count "18 agents", idea count "60 ideas" (right-aligned).
Blue bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

CORE PRINCIPLE: visual callout box.
"Define agents by responsibility, not capability."
Small example: "triage-agent (accountable for routing) not classifier-agent
(describes a tool)". Make this prominent but compact.

AGENT MAP: node graph or card grid showing all 18 agents grouped by category.
Each agent node shows: name, one-line identity, skill count, personality count.

Communication:
- culture-agent: Cross-cultural communication bridge. 4 skills, 3 personalities.
- generation-agent: Cross-generational communication. 4 skills, 3 personalities.
- difficult-conversations-agent: High-stakes interpersonal preparation. 4 skills, 3 personalities.
- networking-agent: Relationship strategy and networking. 4 skills, 3 personalities.
- storytelling-agent: Narrative crafting for business. 4 skills, 3 personalities.

Thinking & Analysis:
- why-agent: Root cause analysis (5 Whys, Fishbone, A3). 4 skills, 3 personalities.
- six-hats-agent: Parallel thinking (de Bono). 4 skills, 3 personalities.
- question-decoder-agent: Reads who is asking and why. 4 skills, 3 personalities.
- research-agent: Source evaluation and synthesis. 4 skills, 3 personalities.

Decisions & Risk:
- pre-mortem-agent: Failure anticipation and prevention. 4 skills, 3 personalities.
- decision-decomposer-agent: Complex decision breakdown. 4 skills, 3 personalities.
- crisis-navigator-agent: Structured crisis thinking. 4 skills, 3 personalities.
- wargaming-agent: Competitive simulation. 4 skills, 3 personalities.

Leadership & Growth:
- leadership-coach-agent: Leadership assessment and coaching. 4 skills, 3 personalities.
- design-thinking-agent: Design process facilitation. 4 skills, 3 personalities.
- corporate-navigator-agent: Office politics and stakeholder mapping. 5 skills, 3 personalities.

Creative:
- superhero-agent: Challenge reframing via Marvel archetypes. 5 skills, 8 personalities.
- cat-pov-agent: Boundary and energy insights. 4 skills, 3 personalities.

AGENT CONNECTIONS: show data flow between agents.
- research-agent feeds into all others (provides source material)
- why-agent feeds into decision-decomposer-agent and crisis-navigator-agent
- pre-mortem-agent and wargaming-agent are peers (both stress-test decisions)
- generation-agent and culture-agent are peers (both bridge communication gaps)
- leadership-coach-agent connects to corporate-navigator-agent (leadership in context)
Use directional arrows on connecting lines.

AGENT FOLDER ANATOMY: compact visual showing the standard folder structure.
Show as a mini file tree or exploded diagram:
  {name}-definition.yaml (Oracle Agent Spec 26.1.0 portable definition),
  {name}.md (long-form spec), README.md (landing page),
  prompts/ (atomic building blocks), skills/ (composed workflows),
  personalities/ (voice variants), references/ (domain knowledge),
  case-studies/ (narratives), examples/ (golden fixtures),
  visual/ (factsheet design prompt).
Color-code: required (definition.yaml, prompts/, skills/, personalities/)
vs optional (case-studies/, examples/, visual/).

IDEA PIPELINE: horizontal funnel or kanban-style visualization.
Left (60 Ideas): grouped by 4 categories (communication, decision-making,
innovation, performance). Show as category badges with counts.
Right (18 Complete): the active agents grouped by category (accent-colored).
Show progression from idea → researched → built.

PER-AGENT DESIGN CANVAS: compact 6-field card showing the canvas structure.
Purpose | Mindset | Value | Guardrails | Human Role | Success Criteria.
Show as a 2x3 mini-grid with field labels. Note: "Every agent has a canvas."

PORTABLE SPEC: compact info block showing the two-zone architecture.
Left zone: "Agent Spec Standard" (envelope, identity, system prompt, LLM config,
inputs/outputs, tools, flows, A2A discovery).
Right zone: "x-agentlab Extensions" (prompt registry, validation, output constraints,
guardrails, boundaries, memory, context, knowledge, quality).
Note: "Oracle Agent Spec 26.1.0 compatible. Define once, run on any framework."

HANDBOOK: compact info block. "7-part structure" shown as a horizontal
pipeline or numbered flow:
Foundation → Capabilities → Context → Behavior → Operations → Quality → Practice.

KEY DOCS: minimal reference strip. 7 items in a row:
handbook.md, bookmarks.md, definition-checklist.md, lessons-learned.md,
agent-handbook.md, patterns.md, tutorial.md.
Each with a tiny icon or badge.

WEB APP: compact feature strip showing 7 tabs per agent:
Canvas | Skills | Builder | Resources | Flow | Composition | Specification.
Note: "Generate prompts for any LLM. Download YAML or ZIP. Validate specs."

FOOTER (full width): dark bar (#1E2A3A).
Left: "github.com/franktatjana/agent-lab". Right: version, "18 agents, 60 ideas".

Color tokens: bg #FFFFFF, surface #F4F6F8, surfaceAlt #E8ECF0,
border #D1D8E0, text #1E2A3A, secondary #3D4F5F, muted #8899A6,
accent #4A90D9, accentBg #EBF3FB, accentBorder rgba(74, 144, 217, 0.2),
dark #1E2A3A, darkText #F0F4F8, darkMuted #8899A6.
