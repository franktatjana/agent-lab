# Chorus Agent Factsheet Design Prompt

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
- Deep purple and warm gray tones. Dramatic, theatrical, layered.
- Primary accent: deep violet (#7C3AED). Secondary: warm gray (#78716C).
- Background: white (#FFFFFF) with light warm surfaces (#FAF9F7, #F5F3EF).
- Borders: warm gray (#D6D3D1). Text: charcoal (#1C1917).
- No cool blues. The aesthetic reflects the theatrical, dramaturgical nature.
- Monospace (JetBrains Mono) for data fields, parameters, code-like elements.
- Sans-serif (Inter) for labels and descriptions.
- Tight spacing. Every pixel carries information.

HEADER (full width): name "Chorus Agent" (24px bold),
subtitle "Context-specific multi-voice perspective analysis" (13px muted),
version 0.1.0 / type Agent / maturity Phase 1 badges (right-aligned). Violet bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Creates a chorus of context-specific characters who simultaneously
comment on the user's situation, modeled on the ancient Greek chorus. Instead
of fixed roles (optimist, pessimist), voices emerge from the specific situation:
"the user one year from now," "the junior developer who maintains this," "the
CFO who only sees cost." Their disagreement reveals what single-perspective
analysis would miss.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Cast Voices: generate 3-6 situation-specific characters. Tags: cast-voices
- Stage Dialogue: voices speak in character, reveal tensions. Tags: cast-voices, stage-dialogue
- Synthesize Perspectives: find emergent insights from voice interaction. Tags: cast-voices, stage-dialogue, synthesize-perspectives
- Reveal Blind Spots: identify missing voices and collective avoidance. Tags: cast-voices, stage-dialogue, synthesize-perspectives, reveal-blind-spots

PERSONALITIES: compact chips or badges, not stacked blocks.
- Director (default): orchestrates for dramatic truth, shapes dialogue toward revelation
- Moderator: ensures balance, draws out quieter perspectives, de-escalates
- Provocateur: amplifies disagreements, pushes voices to extremes, challenges consensus

FLOW: decision tree or flowchart diagram.
Show the full pipeline: Situation + Context → Cast Voices (3-6 characters) → Stage Dialogue (in-character, tensions, consensus) → Synthesize Perspectives (emergent insight) → Reveal Blind Spots (missing voices) → Output (cast, dialogue, consensus_points, fault_lines, synthesis).
Use boxes and arrows, not text descriptions.
Include the core rule as a validation gate: "Voices emerge from the situation. No generic roles. No fixed templates."

FRAMEWORKS: visual diagram showing the four source frameworks as interconnected nodes.
- de Bono's Six Hats (foundation, structured parallel thinking)
- Stakeholder Mapping (who has a stake)
- Dramaturgical Analysis (front-stage vs. backstage behavior)
- Perspective-Taking Theory (cognitive + affective modeling)
Show how they feed into the Chorus Agent's voice generation process.
Use the theatrical metaphor: frameworks as "stage directions" that guide how voices are created.

CONNECTIONS: node graph. Chorus Agent at center, connected agents around it.
- Six Hats Agent → Chorus Agent (structured thinking evolves into situational voices)
- Chorus Agent → Difficult Conversations Agent (interpersonal tensions need conversation prep)
- Corporate Navigator Agent → Chorus Agent (political dynamics need multi-voice exploration)
- Decision Decomposer Agent → Chorus Agent (decomposed decisions need perspective testing)
- Chorus Agent → Pre-Mortem Agent (consensus needs stress-testing)
Arrow direction shows data flow. Use accent border on self.

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner: generate situation-specific voices, stage in-character dialogue, reveal tensions and consensus, synthesize emergent insights, identify missing perspectives.
Outer boundary: no decisions for users, no generic roles, no professional advice (legal/medical/financial), no voices that mock real people, no single voice dominates (30% max), no presenting synthesis as "the answer."
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill.
"Facing a decision and want to hear from affected stakeholders?" → Cast Voices.
"Need to understand the tensions between perspectives?" → Stage Dialogue.
"Want to find what multiple perspectives reveal together?" → Synthesize Perspectives.
"Worried you're missing something important?" → Reveal Blind Spots.

CASE STUDY: compact summary block.
Title: "The API Redesign That Everyone Agreed On"
Outcome: An engineering team had unanimous internal support for an API redesign. The chorus generated voices from integration partners, a future new hire, and a competitor monitoring their changelog. The team discovered their technically sound plan was commercially catastrophic because the people most affected had no voice in the process. They restructured the migration to preserve partner trust while still improving the architecture.
Link: case-studies/architecture-decision-chorus.md

FOOTER (full width): dark bar. Left: chorus-agent-definition.yaml. Right: v0.1.0.

Color tokens: bg #FFFFFF, surface #FAF9F7, surfaceAlt #F5F3EF,
border #D6D3D1, text #1C1917, secondary #44403C, muted #78716C,
accent #7C3AED, accentBg #F5F3FF, accentBorder rgba(124, 58, 237, 0.2),
dark #1C1917, darkText #FAFAF9, darkMuted #A8A29E.
```

## Reusing for Other Agents

1. Copy this prompt
2. Replace agent-specific content (skills, frameworks, connections, guardrails)
3. Adjust accent color for the new agent's identity
4. Generate in Figma AI for best results, v0.dev for quick renders
