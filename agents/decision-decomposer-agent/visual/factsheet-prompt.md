# Decision Decomposer Agent Factsheet Design Prompt

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
- Yellow and amber tones. Analytical, structured, clarifying.
- Primary accent: amber gold (#F59E0B). Secondary: deep slate (#1E293B).
- Background: warm white (#FFFBEB) with soft amber surfaces (#FEF3C7, #FDE68A).
- Borders: muted amber-gray (#D4A574). Text: near-black (#1A1A2E).
- No cool blues. No pastels. No illustrations or mascots.
- Monospace (JetBrains Mono) for data fields, parameters, code-like elements.
- Sans-serif (Inter) for labels and descriptions.
- Tight spacing. Every pixel carries information.

HEADER (full width): name "Decision Decomposer Agent" (24px bold),
subtitle "Breaks complex decisions into independently evaluable components" (13px muted),
version 0.1.0 / type Agent / maturity Phase 1 badges (right-aligned). Amber bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Breaks complex decisions into components so teams stop going in
circles. Most decision paralysis comes from treating a multi-dimensional
choice as a single binary. Decomposes decisions into independent sub-decisions,
classifies each by reversibility and stakes, then evaluates options
systematically using BATNA analysis and consequence mapping.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Reversibility Check: classify each component as reversible or irreversible, map stakes. Tags: decompose-decision, map-reversibility
- Consequence Chain: map first, second, and third-order consequences. Tags: decompose-decision, trace-consequences
- Option Stress Test: full analysis through BATNA to decision brief. Tags: decompose-decision, map-reversibility, trace-consequences, evaluate-alternatives, decision-brief

PERSONALITIES: compact chips or badges, not stacked blocks.
- Surgeon (default): precise, clinical, cuts through noise, triage speed
- Philosopher: deep implications, uncomfortable questions, systems thinking
- Spreadsheet Brain: quantitative, matrix-oriented, weighted scoring, data grids

FLOW: Decomposition funnel diagram as the central visual element.
Show the full flow: Complex Decision (monolithic, bundled) →
Decompose (split into 3-6 sub-decisions) →
Classify (reversibility matrix: one-way / two-way doors) →
Map (consequence chains: first → second → third order) →
Evaluate (BATNA + worst case for each path) →
Brief (recommendation + confidence level).
Inside the funnel: "Most decisions are actually 3-5 smaller decisions bundled together."
Make this the dominant visual, it is the agent's analytical heartbeat.

FRAMEWORKS: visual arrangement showing all four frameworks.
Reversibility Matrix: one-way doors vs. two-way doors, reversal cost classification.
BATNA (Fisher/Ury): best alternative if this path fails, walk-away position.
Second-Order Consequences (Meadows): trace effects through 3 time horizons.
Eisenhower Matrix: urgent vs. important, decision sequencing.
Show connections: Reversibility drives deliberation allocation,
BATNA determines the floor, Consequences reveal the trajectory,
Eisenhower sequences the action.

CONNECTIONS: node graph. Decision Decomposer Agent at center, connected agents around it.
- Pre-Mortem Agent ← Decision Decomposer Agent (decomposition complete, need failure modes before committing)
- Six Hats Agent ← Decision Decomposer Agent (paralysis is about perspectives, not structure)
- Research Agent ← Decision Decomposer Agent (data gaps identified, need research)
- Decision Decomposer Agent ← any agent (when a complex decision needs structural breakdown)
Arrow direction shows data flow. Use amber accent border on self.

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner: decompose decisions into sub-decisions, classify reversibility,
map consequence chains, run BATNA analysis, produce decision briefs
with recommendations and confidence levels.
Outer boundary: never makes the final decision (always recommends, user decides),
never skips decomposition (even for "simple" decisions),
never ignores political/emotional factors,
never replaces professional financial/legal/medical advice,
never presents analysis without a recommended path.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your decision situation?" → branches to scenarios → each leads to a skill.
"Team going in circles on a complex choice?" → Option Stress Test.
"Need a quick triage of what's reversible vs. not?" → Reversibility Check.
"Want to understand downstream effects before committing?" → Consequence Chain.
"Preparing a recommendation for leadership?" → Option Stress Test (decision brief).
"Decision feels impossible but might just be bundled?" → Reversibility Check.

FOOTER (full width): dark bar. Left: decision-decomposer-agent-definition.yaml. Right: v0.1.0.

Color tokens: bg #FFFBEB, surface #FEF3C7, surfaceAlt #FDE68A,
border #D4A574, text #1A1A2E, secondary #4A4A5A, muted #92734D,
accent #F59E0B, accentBg #FEF3C7, accentBorder rgba(245, 158, 11, 0.3),
dark #1E293B, darkText #FEF3C7, darkMuted #92734D.
```

## Reusing for Other Agents

1. Copy this prompt
2. Replace agent-specific content (skills, frameworks, connections, guardrails)
3. Adjust accent color for the new agent's identity
4. Generate in Figma AI for best results, v0.dev for quick renders
