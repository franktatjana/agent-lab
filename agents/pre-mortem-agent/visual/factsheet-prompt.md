# Pre-Mortem Agent Factsheet Design Prompt

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
- Stone and slate tones. Grounded, precise, unflinching.
- Primary accent: warm stone (#78716C). Secondary: dark charcoal (#292524).
- Background: warm white (#FAFAF9) with stone surfaces (#F5F5F4, #E7E5E4).
- Borders: muted stone (#D6D3D1). Text: near-black (#1C1917).
- No bright colors. No pastels. No illustrations or mascots.
- Monospace (JetBrains Mono) for data fields, parameters, code-like elements.
- Sans-serif (Inter) for labels and descriptions.
- Tight spacing. Every pixel carries information.

HEADER (full width): name "Pre-Mortem Agent" (24px bold),
subtitle "Assumes your project already failed and works backward to find exactly why" (13px muted),
version 0.1.0 / type Agent / maturity Phase 1 badges (right-aligned).
Icon: Crosshair (Lucide). Stone bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Assumes your project already failed and works backward to find
exactly why. Uses Klein's Pre-Mortem technique: instead of asking "what could
go wrong?" it states "it went wrong" and asks "why did it fail?" This shift
from possibility to certainty bypasses optimism bias and surfaces failure
modes that traditional risk assessment misses.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Failure Autopsy: assumes project failed, generates and ranks failure modes. Tags: assume-failure, rank-failure-modes, mitigation-brief
- Blind Spot Scan: maps cognitive biases and organizational blind spots. Tags: assume-failure, surface-blind-spots
- Regret Forecast: projects forward 6-12 months to identify future regrets. Tags: assume-failure, regret-projection, mitigation-brief

PERSONALITIES: compact chips or badges, not stacked blocks.
- Coroner (default): clinical, detached, forensic, medical examiner register
- Pessimist-in-Chief: dramatically worst-case, theatrical doom, wake-up call
- Insurance Adjuster: risk/probability language, actuarial reasoning, executive register

FLOW: Pre-Mortem cycle diagram as the central visual element.
Show the full cycle: Assume Failure (state "it failed," generate narrative) →
Identify Modes (extract specific failure modes from narrative) →
Rank (likelihood, impact, detectability) →
Surface Blind Spots (map cognitive biases with evidence) →
Mitigate (one concrete action per top failure mode) →
Project Regret (what will you wish you had done?) → feeds back to Assume Failure.
Inside the cycle: "Certainty framing bypasses optimism bias."
Make this the dominant visual, it is the agent's operational heartbeat.

FRAMEWORKS: visual arrangement showing all three frameworks.
Klein's Pre-Mortem: prospective hindsight through certainty framing.
Recognition-Primed Decision (RPD): expert pattern matching for failure signatures.
Regret Minimization Framework: projecting forward to minimize future regret.
Show connections between frameworks: Klein opens the imagination,
RPD matches patterns, Regret Minimization anchors the forward view.

CONNECTIONS: node graph. Pre-Mortem Agent at center, connected agents around it.
- Wargaming Agent → Pre-Mortem Agent (competitive simulation feeds failure mode identification)
- Why Agent → Pre-Mortem Agent (root cause analysis deepens failure understanding)
- Six Hats Agent → Pre-Mortem Agent (multi-perspective analysis before failure focus)
- Pre-Mortem Agent → Wargaming Agent (failure modes requiring adversarial simulation)
- Pre-Mortem Agent → Why Agent (current problems needing root cause investigation)
- Pre-Mortem Agent → Six Hats Agent (team needs broader perspective, not just failure modes)
Arrow direction shows data flow. Use stone accent border on self.

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner: assume failure and generate specific failure modes, rank by likelihood/impact/detectability,
surface cognitive biases with evidence, provide concrete mitigations, project forward for regret.
Outer boundary: no telling people their project will succeed, no generic risk lists,
no skipping the certainty framing, no recommending cancellation without specific failure paths,
no replacing professional risk management or legal counsel.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your decision situation?" → branches to scenarios → each leads to a skill.
"About to commit significant resources to a project?" → Failure Autopsy.
"Team approved unanimously and nobody raised concerns?" → Blind Spot Scan.
"Making an irreversible decision and want to check what you're missing?" → Regret Forecast.
"Need to identify specific failure modes before a board presentation?" → Failure Autopsy.
"Suspect the team is overlooking obvious risks?" → Blind Spot Scan.

FOOTER (full width): dark bar. Left: pre-mortem-agent-definition.yaml. Right: v0.1.0.

Color tokens: bg #FAFAF9, surface #F5F5F4, surfaceAlt #E7E5E4,
border #D6D3D1, text #1C1917, secondary #44403C, muted #78716C,
accent #78716C, accentBg #F5F5F4, accentBorder rgba(120, 113, 108, 0.2),
dark #1C1917, darkText #FAFAF9, darkMuted #A8A29E.
```

## Reusing for Other Agents

1. Copy this prompt
2. Replace agent-specific content (skills, frameworks, connections, guardrails)
3. Adjust accent color for the new agent's identity
4. Generate in Figma AI for best results, v0.dev for quick renders
