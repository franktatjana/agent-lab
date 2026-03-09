# Trickster Agent Factsheet Design Prompt

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
- Deep purple and amber tones. Mysterious, playful, alive.
- Primary accent: deep purple (#7B2D8E). Secondary: warm amber (#D4A017).
- Background: near-black (#1A1A2E) with dark purple surfaces (#2D1B4E, #1E1233).
- Borders: muted purple (#4A3066). Text: warm white (#F0E6D3).
- Subtle chaos energy: nothing perfectly aligned, slight rotation on cards (1-2deg).
- Monospace (JetBrains Mono) for data fields, parameters, code-like elements.
- Sans-serif (Inter) for labels and descriptions.
- Tight spacing with controlled disorder.

HEADER (full width): name "Trickster Agent" (24px bold),
subtitle "Break frames. Surface invisible assumptions. Open doors you cannot see." (13px muted),
version 0.1.0 / type Agent / maturity Phase 1 badges (right-aligned). Purple bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Breaks frames of thinking when straightforward approaches have
failed. Identifies invisible assumptions constraining the solution space,
inverts problems, proposes deliberately absurd solutions to surface
non-obvious real ones, and opens paths invisible within the original frame.
Not a contrarian who argues against a position, a trickster who changes
the rules of the game entirely.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Invert Problem: flip problems upside down, reveal hidden structure through systematic inversion. Tags: surface-assumptions, invert-problem, extract-insight
- Break Frame: reject the entire frame, identify the game being played and propose a different game. Tags: surface-assumptions, invert-problem, generate-absurd, extract-insight
- Generate Absurd Solutions: propose deliberately absurd solutions, mine each for real insights. Tags: surface-assumptions, generate-absurd, extract-insight
- Trickster Synthesis: the full treatment, maximum creative disruption for deeply stuck situations. Tags: surface-assumptions, invert-problem, generate-absurd, extract-insight

PERSONALITIES: compact chips or badges, not stacked blocks.
- Coyote (default): playful chaos, boundary-testing, teaches through surprise, warm and mischievous
- Jester: speaks truth to power through humor, points at what everyone pretends not to see
- Sage-Fool: gentle paradoxes, Zen koan energy, the fool who is the wisest

FLOW: decision tree or flowchart diagram.
Show the full pipeline: Stuck Situation + Context → Surface Assumptions (invisible rules) → Invert Problem (flip it) → Generate Absurd (productive absurdity) → Extract Insight (synthesis) → Output (invisible assumptions, inversions, frame break, trickster counsel, serious options).
Use boxes and arrows, not text descriptions.
Include the core rule as a validation gate: "Every absurd proposal MUST contain a real insight. Chaos without wisdom is not trickster work."

FRAMEWORKS: visual diagram showing the trickster's toolkit as interconnected nodes.
De Bono's Lateral Thinking: random entry, provocation, challenge.
Koestler's Bisociation: connecting unrelated frames.
Paradoxical Intervention: prescribe the symptom.
Reframing Theory: same facts, different meaning.
Creative Destruction: break to build.
Show how these feed into the four skills.

CONNECTIONS: node graph. Trickster Agent at center, connected agents around it.
- Six Hats Agent → Trickster Agent (when all perspectives produce the same stuck answer)
- Pre-Mortem Agent → Trickster Agent (when failure scenarios suggest the approach needs reframing)
- Decision Decomposer Agent → Trickster Agent (when all sub-options look bad)
- Trickster Agent → Design Thinking Agent (serious options need prototyping)
- Trickster Agent → Devil's Advocate Agent (serious options need stress-testing)
Arrow direction shows data flow. Use accent border on self.

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner: surface invisible assumptions, invert problems, generate productive absurdity, break frames, synthesize actionable options, be playful and wise.
Outer boundary: no decisions for users, no professional advice, no chaos without wisdom, no cruelty or mockery, no manipulation, no leaving users in rubble.
Include: every inversion must contain a real insight.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill.
"Stuck between two bad options?" → Break Frame.
"Rational analysis hit a wall?" → Generate Absurd Solutions.
"Same problem keeps recurring despite fixes?" → Invert Problem.
"Deeply stuck, need maximum disruption?" → Trickster Synthesis.

CASE STUDY: compact summary block.
Title: "The Pivot That Wasn't"
Outcome: A product team stuck between "pivot to enterprise" and "double down on mid-market" discovered both options were wrong. The trickster surfaced the invisible assumption that they had to choose one direction. The team ran parallel experiments and discovered the real churn driver was onboarding, not product strategy.
Link: case-studies/stuck-product-team.md

FOOTER (full width): dark bar. Left: trickster-agent-definition.yaml. Right: v0.1.0.

Color tokens: bg #1A1A2E, surface #2D1B4E, surfaceAlt #1E1233,
border #4A3066, text #F0E6D3, secondary #C4B8A0, muted #8B7E6A,
accent #7B2D8E, accentBg #3D1B4E, accentBorder rgba(123, 45, 142, 0.3),
highlight #D4A017, highlightBg rgba(212, 160, 23, 0.1),
dark #0F0F1A, darkText #F0E6D3, darkMuted #6B5E4A.
```

## Reusing for Other Agents

1. Copy this prompt
2. Replace agent-specific content (skills, frameworks, connections, guardrails)
3. Adjust accent color for the new agent's identity
4. Generate in Figma AI for best results, v0.dev for quick renders
