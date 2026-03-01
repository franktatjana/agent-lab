# Six Hats Agent Factsheet Design Prompt

Paste this prompt into Figma AI, v0.dev, or Claude artifacts to generate the visual factsheet from scratch. For routine content updates, edit the `AGENT` data object in the TSX file directly.

```text
Design a single-page agent factsheet card. ONE PAGER, no scrolling.
Compact, information-dense, every element earns its space.
Structured like a character sheet or trading card for an AI agent system.

LAYOUT CONSTRAINTS:
- Fixed dimensions: fits a single screen or printed A4 landscape
- No scrolling. If it doesn't fit, make it smaller, don't add a second page.
- Prefer visual representations over text: graphs, decision trees,
  flow diagrams, node maps. Replace bullet lists with diagrams wherever possible.

AESTHETIC:
- Light blue and gray tones. Cool, professional, calm.
- Primary accent: steel blue (#4A90D9). Secondary: slate gray (#6B7B8D).
- Background: white (#FFFFFF) with light gray surfaces (#F4F6F8, #E8ECF0).
- Borders: light gray (#D1D8E0). Text: charcoal (#1E2A3A).
- No warm tones. No amber. No illustrations or mascots.
- Monospace (JetBrains Mono) for data fields, parameters, code-like elements.
- Sans-serif (Inter) for labels and descriptions.
- Tight spacing. Every pixel carries information.

HEADER (full width): name "Six Hats Agent" (24px bold),
subtitle "Structured parallel thinking using de Bono's Six Thinking Hats" (13px muted),
version 0.1.0 / type Agent / maturity Phase 1 badges (right-aligned). Blue bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Guides individuals and teams through structured multi-perspective
analysis. Separates thinking into six distinct modes, each explored one at
a time, then synthesized. Surfaces insights that tangled thinking misses
and helps users identify their blind spots and default thinking patterns.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Full Hat Session: walk through all six hats systematically. Tags: sequence-hats, white-hat-analysis, red-hat-check, yellow-hat-benefits, black-hat-critique, green-hat-ideate, blue-hat-synthesize
- Decision Analysis: evaluate a decision from the most relevant perspectives. Tags: white-hat-analysis, yellow-hat-benefits, black-hat-critique, red-hat-check, blue-hat-synthesize
- Idea Exploration: expand and evaluate creative possibilities. Tags: white-hat-analysis, green-hat-ideate, yellow-hat-benefits, black-hat-critique, blue-hat-synthesize
- Risk Assessment: systematic risk identification and mitigation planning. Tags: white-hat-analysis, black-hat-critique, red-hat-check, green-hat-ideate, blue-hat-synthesize

PERSONALITIES: compact chips or badges, not stacked blocks.
- Facilitator (default): team workshops, manages turn-taking, surfaces group dynamics
- Executive: compressed output, actionable insights, time-efficient
- Coach: explains the process, teaches the method, encourages reflection

FLOW: decision tree or flowchart diagram.
Show the full pipeline: Topic + Context → Sequence Hats → White Hat (facts) → Red Hat (emotions) → Yellow Hat (benefits) → Black Hat (risks) → Green Hat (creativity) → Blue Hat (synthesis) → Output (perspective summary, key insights, recommended action, blind spots).
Use boxes and arrows, not text descriptions.
Include the core rule as a validation gate: "Each hat gets equal weight. No perspective dominates."

FRAMEWORKS: visual diagram showing the Six Thinking Hats as a hexagonal or circular arrangement.
White Hat: Facts, data, information (neutral/white).
Red Hat: Emotions, feelings, intuition (warm red).
Black Hat: Caution, risks, problems (dark).
Yellow Hat: Benefits, value, optimism (bright yellow).
Green Hat: Creativity, alternatives, new ideas (green).
Blue Hat: Process, organization, next steps (blue).
Show how Blue Hat orchestrates and synthesizes the other five.
Include the compare-perspectives prompt as a cross-cutting connection between all hats.

CONNECTIONS: node graph. Six Hats Agent at center, connected agents around it.
- Research Agent → Six Hats Agent (feeds White Hat with verified facts)
- Why Agent → Six Hats Agent (deepens Black Hat with root cause analysis)
- Generation Agent → Six Hats Agent (demographic context for Red Hat)
- Culture Agent → Six Hats Agent (cross-cultural perspectives for all hats)
- Six Hats Agent → Storytelling Agent (Blue Hat synthesis into narratives)
- Corporate Navigator Agent → Six Hats Agent (stakeholder decisions need multi-perspective analysis)
Arrow direction shows data flow. Use accent border on self.

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner: guide structured thinking, ensure all perspectives explored, surface blind spots, synthesize across hats, identify default thinking patterns.
Outer boundary: no decisions for users, no professional advice (legal/medical/financial), no guaranteed outcomes, no skipping or rushing hats, no declaring perspectives irrelevant.
Include: no single hat perspective exceeds 25% of total output.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill.
"Facing a complex decision with multiple factors?" → Decision Analysis.
"Need to explore a rough idea from all angles?" → Idea Exploration.
"Planning a project and want to identify risks?" → Risk Assessment.
"Want a complete multi-perspective workshop?" → Full Hat Session.

CASE STUDY: compact summary block.
Title: "Product Pivot Decision"
Outcome: A founding team used Full Hat Session to evaluate a pivot. Red Hat revealed the CEO's gut opposition was fear of admitting a mistake, not strategic disagreement. Green Hat surfaced a hybrid approach nobody had considered. The team proceeded with confidence instead of compromise.
Link: case-studies/product-pivot-decision.md

FOOTER (full width): dark bar. Left: six-hats-agent-definition.yaml. Right: v0.1.0.

Color tokens: bg #FFFFFF, surface #F4F6F8, surfaceAlt #E8ECF0,
border #D1D8E0, text #1E2A3A, secondary #3D4F5F, muted #8899A6,
accent #4A90D9, accentBg #EBF3FB, accentBorder rgba(74, 144, 217, 0.2),
dark #1E2A3A, darkText #F0F4F8, darkMuted #8899A6.
```

## Reusing for Other Agents

1. Copy this prompt
2. Replace agent-specific content (skills, frameworks, connections, guardrails)
3. Adjust accent color for the new agent's identity
4. Generate in Figma AI for best results, v0.dev for quick renders
