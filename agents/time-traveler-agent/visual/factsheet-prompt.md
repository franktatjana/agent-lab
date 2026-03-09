# Time Traveler Agent Factsheet Design Prompt

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
- Deep indigo and twilight tones. Temporal, precise, contemplative.
- Primary accent: deep indigo (#4338CA). Secondary: slate (#334155).
- Background: cool white (#F8FAFC) with blue-tinted surfaces (#F1F5F9, #E2E8F0).
- Borders: cool slate (#CBD5E1). Text: near-black (#0F172A).
- No bright colors. No pastels. No illustrations or mascots.
- Monospace (JetBrains Mono) for data fields, parameters, code-like elements.
- Sans-serif (Inter) for labels and descriptions.
- Tight spacing. Every pixel carries information.

HEADER (full width): name "Time Traveler Agent" (24px bold),
subtitle "Examines decisions from three temporal vantage points: past, present, and two futures" (13px muted),
version 0.1.0 / type Agent / maturity Phase 1 badges (right-aligned).
Icon: Clock (Lucide). Indigo bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Takes a current situation and examines it from three temporal vantage
points: how it would have looked five years ago (what forces created this moment),
how it looks right now (an honest snapshot stripped of narrative bias), and how it
will look in five years under two scenarios, if nothing changes and if you act now.
Forces the user out of present-tense tunnel vision.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Temporal Map: full three-timeframe analysis with temporal insight synthesis. Tags: look-back, snapshot-now, project-forward, correct-bias
- Hindsight Analysis: deep retrospective corrected for hindsight bias. Tags: look-back, correct-bias
- Foresight Projection: two divergent futures with second-order effects. Tags: snapshot-now, project-forward, correct-bias
- Bias Correction: standalone temporal bias audit. Tags: snapshot-now, correct-bias

PERSONALITIES: compact chips or badges, not stacked blocks.
- Historian (default): methodical, evidence-based, archival precision
- Futurist: imaginative, vivid, scenario-rich storytelling
- Analyst: data-driven, structured, quantification-focused

FLOW: Temporal analysis cycle as the central visual element.
Show the full cycle: Look Back (trace forces, decisions, constraints) →
Snapshot Now (strip narrative bias, assess honestly) →
Project Forward (build two futures: inaction vs. action) →
Correct Bias (audit for hindsight, present, optimism bias) →
Temporal Insight (synthesize the key finding across all three timeframes).
Inside the cycle: "Past causes + Present reality + Future consequences = Temporal clarity."
Make this the dominant visual, it is the agent's operational heartbeat.

FRAMEWORKS: visual arrangement showing all four frameworks.
Temporal Discounting: humans undervalue future consequences.
Hindsight Bias Correction: evaluate past decisions against past constraints.
Scenario Planning: two futures from one decision variable.
Second-Order Effects: consequences beyond the immediate, through feedback loops.
Show connections between frameworks: Temporal Discounting motivates the projection,
Hindsight Bias protects the retrospective, Scenario Planning structures the futures,
Second-Order Effects reveals hidden consequences across all timeframes.

CONNECTIONS: node graph. Time Traveler Agent at center, connected agents around it.
- Scenario Planning Agent → Time Traveler Agent (scenario context feeds temporal mapping)
- Pre-Mortem Agent → Time Traveler Agent (failure modes provide situation context)
- Why Agent → Time Traveler Agent (root causes gain temporal dimension)
- Time Traveler Agent → Scenario Planning Agent (when 2x2 matrix is needed)
- Time Traveler Agent → Pre-Mortem Agent (when specific plan needs failure analysis)
Arrow direction shows data flow. Use indigo accent border on self.

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner: analyze all three timeframes, trace causal chains, strip narrative bias,
build two futures with second-order effects, synthesize temporal insight.
Outer boundary: no predictions or probability assignments, no judging past
decisions with current knowledge, no therapy or emotional processing,
no skipping timeframes, no replacing professional strategic planning.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What temporal perspective do you need?" → branches to scenarios → each leads to a skill.
"Need the full picture: past, present, and future?" → Temporal Map.
"Trying to understand how you got here?" → Hindsight Analysis.
"Deciding between acting now and waiting?" → Foresight Projection.
"Want to check if your narrative is biased?" → Bias Correction.
"Need formal 2x2 scenarios?" → Hand off to Scenario Planning Agent.

FOOTER (full width): dark bar. Left: time-traveler-agent-definition.yaml. Right: v0.1.0.

Color tokens: bg #F8FAFC, surface #F1F5F9, surfaceAlt #E2E8F0,
border #CBD5E1, text #0F172A, secondary #334155, muted #64748B,
accent #4338CA, accentBg #EEF2FF, accentBorder rgba(67, 56, 202, 0.2),
dark #0F172A, darkText #F8FAFC, darkMuted #94A3B8.
```

## Reusing for Other Agents

1. Copy this prompt
2. Replace agent-specific content (skills, frameworks, connections, guardrails)
3. Adjust accent color for the new agent's identity
4. Generate in Figma AI for best results, v0.dev for quick renders
