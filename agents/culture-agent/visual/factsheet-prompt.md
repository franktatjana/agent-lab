# Culture Agent Factsheet Design Prompt

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

HEADER (full width): name (24px bold), subtitle (13px muted),
version/type/maturity badges (right-aligned). Blue bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: 2-3 line description, compact.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.

PERSONALITIES: compact chips or badges, not stacked blocks.

FLOW: decision tree or flowchart diagram.
Show the full pipeline: Input → Process steps → Output.
Use boxes and arrows, not text descriptions.
Include decision points where the agent branches (e.g., bridge vs. compare vs. mediate).

FRAMEWORKS: visual diagram showing how frameworks relate to each other.
Hofstede (national dimensions) → Meyer (business scales) → Hall (context model).
Coyle (group dynamics) as a separate branch.
Show which skills use which frameworks.

CONNECTIONS: node graph. This agent at center, connected agents around it.
Arrow direction shows data flow. Use accent border on self.

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Include: no stereotyping, no cultural judgment, no legal/HR advice, flags power asymmetry.
Make it clear these are hard constraints, not suggestions.

MUTUAL LEARNING: paired comparison diagram.
Show dimension pairs (Direct ↔ Indirect, Hierarchical ↔ Egalitarian, Task ↔ Relationship)
as a spectrum or scale visualization, not text.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill.
E.g., "Sending a message across cultures?" → Cultural Bridge.
"Meeting with foreign counterpart?" → Meeting Prep.

CASE STUDY: compact summary block. Title, one-line outcome, link.

FOOTER (full width): dark bar. Left: source of truth file. Right: version.

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
