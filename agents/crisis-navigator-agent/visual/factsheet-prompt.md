# Crisis Navigator Agent Factsheet Design Prompt

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
- Fuchsia and magenta tones. Urgent, vivid, commanding attention.
- Primary accent: fuchsia (#D946EF). Secondary: dark slate (#1E293B).
- Background: charcoal white (#FAFAFA) with warm gray surfaces (#F5F0F5, #EDE5ED).
- Borders: muted fuchsia-gray (#C4A5C4). Text: near-black (#1A1A2E).
- No cool blues. No pastels. No illustrations or mascots.
- Monospace (JetBrains Mono) for data fields, parameters, code-like elements.
- Sans-serif (Inter) for labels and descriptions.
- Tight spacing. Every pixel carries information.

HEADER (full width): name "Crisis Navigator Agent" (24px bold),
subtitle "Structured thinking when everything is already on fire" (13px muted),
version 0.1.0 / type Agent / maturity Phase 1 badges (right-aligned). Fuchsia bottom border.
Icon: Flame.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Provides structured thinking when everything is already on fire.
Turns chaotic, active crises into structured response sequences with clear
ownership and communication. Uses OODA Loop for speed, Incident Command
System for structure, Cynefin for classification, and PACE for
communication redundancy.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Situation Triage: classify crisis severity, map knowns vs unknowns, identify what matters now. Tags: assess-situation, classify-severity
- Action Sequencer: build prioritized actions with owners and timelines. Tags: assess-situation, classify-severity, sequence-actions
- Communication Brief: generate stakeholder-specific crisis comms. Tags: assess-situation, draft-comms

PERSONALITIES: compact chips or badges, not stacked blocks.
- Incident Commander (default): calm, directive, ICS protocols, speed-critical incidents
- Strategic Advisor: big-picture, organizational impact, slow-burn crises
- War Correspondent: audience-aware narrative, external communication, PACE channels

FLOW: OODA Loop cycle diagram as the central visual element.
Show the full cycle: Observe (assess situation, map knowns/unknowns) ->
Orient (classify on Cynefin, determine response type) ->
Decide (sequence actions, assign owners) ->
Act (execute, communicate, review) -> feeds back to Observe.
Inside the loop: "In crisis, clarity is the first deliverable."
Make this the dominant visual, it is the agent's operational heartbeat.

FRAMEWORKS: visual arrangement showing all four frameworks.
OODA Loop (Boyd): rapid decision cycling under pressure.
Incident Command System (ICS): organizational structure and role clarity.
Cynefin Framework (Snowden): classify crisis domain to match response type.
PACE Planning: communication redundancy across stakeholder channels.
Show connections between frameworks: OODA drives decision tempo,
Cynefin determines which response strategy to apply,
ICS provides the organizational structure,
PACE ensures communication reaches all audiences.

CONNECTIONS: node graph. Crisis Navigator Agent at center, connected agents around it.
- Crisis Navigator Agent -> Pre-Mortem Agent (after resolution, prevent recurrence)
- Crisis Navigator Agent -> Difficult Conversations Agent (interpersonal conflict in crisis)
- Crisis Navigator Agent -> Leadership Coach Agent (team morale under crisis pressure)
Arrow direction shows handoff flow. Use fuchsia accent border on self.

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner: assess situations, classify severity, sequence actions with owners,
draft stakeholder-specific communications, conduct post-crisis debriefs.
Outer boundary: no replacing emergency services (fire, medical, law enforcement),
no legal advice on liability or compliance, no adding to panic with dramatic language,
no assuming first report is the real cause, no generic advice that applies to everything,
no skipping assessment to jump to solutions.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your crisis situation?" -> branches to scenarios -> each leads to a skill.
"Active incident, team needs structure now?" -> Situation Triage + Action Sequencer.
"Multiple stakeholders need different messages?" -> Communication Brief.
"Crisis resolved, need to learn from it?" -> Post-Crisis Debrief (prompt).
"Slow-burn crisis threatening long-term positioning?" -> Strategic Advisor personality.
"External communication could make or break trust?" -> War Correspondent personality.

FOOTER (full width): dark bar. Left: crisis-navigator-agent-definition.yaml. Right: v0.1.0.

Color tokens: bg #FAFAFA, surface #F5F0F5, surfaceAlt #EDE5ED,
border #C4A5C4, text #1A1A2E, secondary #4A4A5A, muted #8A7F8A,
accent #D946EF, accentBg #FDF0FD, accentBorder rgba(217, 70, 239, 0.2),
dark #1A1A2E, darkText #F5F0F5, darkMuted #8A7F8A.
```

## Reusing for Other Agents

1. Copy this prompt
2. Replace agent-specific content (skills, frameworks, connections, guardrails)
3. Adjust accent color for the new agent's identity
4. Generate in Figma AI for best results, v0.dev for quick renders
