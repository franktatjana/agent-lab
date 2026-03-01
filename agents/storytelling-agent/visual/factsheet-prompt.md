# Storytelling Agent Factsheet Design Prompt

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

HEADER (full width): name "Storytelling Agent" (24px bold),
subtitle "Narrative crafter for professional contexts" (13px muted),
version 0.1.0 / type Agent / maturity Phase 1 badges (right-aligned). Blue bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Crafts compelling narratives for professional contexts. Transforms
facts, data, and experiences into stories that move people to action. Finds
the story in any situation, selects the right framework, and builds arcs
with tension, stakes, and resolution.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Craft Narrative: raw material → full narrative arc. Tags: find-hook, craft-narrative, build-tension, connect-audience, shape-delivery
- Pitch Story: tight persuasive story for pitches and proposals. Tags: connect-audience, find-hook, craft-narrative, shape-delivery
- Data Storytelling: data and metrics → narratives people remember. Tags: craft-narrative, build-tension, connect-audience
- Origin Story: personal or company origin story for branding. Tags: find-hook, craft-narrative, connect-audience

PERSONALITIES: compact chips or badges, not stacked blocks.
- Narrator (default): vivid, concrete, engaging, collaborative guide
- Business: evidence-based, ROI framing, executive-friendly structure
- Inspirational: high energy, emotional resonance, call-to-action
- Coach: instructional, explains why techniques work, builds skill

FLOW: decision tree or flowchart diagram.
Show the full pipeline: Raw Material + Audience + Context → Find Hook → Craft Narrative → Build Tension → Connect Audience → Shape Delivery → Output (narrative, story elements, delivery notes).
Use boxes and arrows, not text descriptions.
Include the decision point: "What changed? Why does it matter? Who cares?" as a validation gate.

FRAMEWORKS: visual diagram showing how storytelling frameworks relate to each other.
Hero's Journey (transformation arc) → Pixar Story Spine (emotional structure) → STAR (behavioral interviews).
Data Storytelling (context-conflict-resolution) as a parallel branch.
Brand Narrative (identity and values) as a separate branch.
Show which skills use which frameworks.

CONNECTIONS: node graph. Storytelling Agent at center, connected agents around it.
- Research Agent → Storytelling Agent (provides facts and data)
- Culture Agent → Storytelling Agent (provides audience context)
- Storytelling Agent → Presentation Agent (narrative arc for slides)
- Storytelling Agent → Communication Agent (narrative for delivery)
- Storytelling Agent → Superhero Agent (handoff for personal confidence)
Arrow direction shows data flow. Use accent border on self.

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner: narrative crafting, framework selection, audience connection, delivery optimization.
Outer boundary: no fabricating facts, no fictional entertainment, no marketing copy, no manipulation/deception, no guaranteed audience reactions.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill.
"Presenting results to leadership?" → Craft Narrative.
"Pitching to investors?" → Pitch Story.
"Making data memorable for the board?" → Data Storytelling.
"Building a company or personal brand?" → Origin Story.

CASE STUDY: compact summary block.
Title: "Quarterly Review Turnaround"
Outcome: Director reframed missed targets into a narrative of lessons learned, turning a skeptical board supportive and a demoralized team re-energized.
Link: case-studies/quarterly-review-turnaround.md

FOOTER (full width): dark bar. Left: storytelling-agent-definition.yaml. Right: v0.1.0.

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
