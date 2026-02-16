Design a single-page project overview card for "Agent Lab", an AI agent
specification library. ONE PAGER, no scrolling. Compact, information-dense,
every element earns its space. Structured like a mission control dashboard
for an agent factory.

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
Library: R&D department of an agent factory" (13px muted), version badge and
agent count (right-aligned). Blue bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

CORE PRINCIPLE: visual callout box.
"Define agents by responsibility, not capability."
Small example: "triage-agent (accountable for routing) not classifier-agent
(describes a tool)". Make this prominent but compact.

AGENT MAP: node graph or card grid showing all 5 agents.
Each agent node shows: name, one-line description, skill count, personality count.
- culture-agent: Cross-cultural communication bridge. 4 skills, 3 personalities.
- research-agent: Source evaluation and synthesis. 4 skills, 3 personalities.
- why-agent: Root cause analysis (5 Whys, Fishbone, A3). 4 skills, 3 personalities.
- generation-agent: Cross-generational communication. 4 skills, 3 personalities.
- superhero-agent: Challenge reframing via Marvel archetypes. 5 skills, 8 personalities.
Group visually by category:
- Thinking Chain: why-agent (with arrow showing chain: why → systems-thinker → strategist → tactician, last 3 grayed out as "planned")
- Communication: culture-agent, generation-agent
- Support: superhero-agent
- Research: research-agent

AGENT CONNECTIONS: show data flow between agents.
- research-agent feeds into all others (provides source material)
- why-agent feeds into culture-agent (root cause of cultural friction)
- generation-agent and culture-agent are peers (both bridge communication gaps)
Use directional arrows on connecting lines.

AGENT FOLDER ANATOMY: compact visual showing the standard folder structure.
Show as a mini file tree or exploded diagram:
  {agent-name}.md (spec), README.md (landing page),
  prompts/ (atomic), skills/ (workflows), references/ (domain knowledge),
  personalities/ (variants), case-studies/ (narratives), examples/ (goldens),
  visual/ (factsheet). Color-code: required vs optional folders.

IDEA PIPELINE: horizontal funnel or kanban-style visualization.
Left (Ideas): decision-facilitator, corporate-navigator (muted, smaller).
Right (Complete): the 5 active agents (accent-colored, larger).
Show progression from idea to spec.

HANDBOOK: compact info block. "7-part structure" shown as a horizontal
pipeline or numbered flow:
Foundation → Capabilities → Context → Behavior → Operations → Quality → Practice.

KEY DOCS: minimal reference strip. 4 items in a row:
handbook.md, lessons-learned.md, bookmarks.md, agent-catalogue.md.
Each with a tiny icon or badge.

FOOTER (full width): dark bar (#1E2A3A).
Left: "github.com/franktatjana/agent-lab". Right: version.

Color tokens: bg #FFFFFF, surface #F4F6F8, surfaceAlt #E8ECF0,
border #D1D8E0, text #1E2A3A, secondary #3D4F5F, muted #8899A6,
accent #4A90D9, accentBg #EBF3FB, accentBorder rgba(74, 144, 217, 0.2),
dark #1E2A3A, darkText #F0F4F8, darkMuted #8899A6.
