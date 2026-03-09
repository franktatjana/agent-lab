# Archaeologist Agent Factsheet Design Prompt

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
- Warm earth tones. Archaeological, layered, investigative.
- Primary accent: terracotta (#C2703E). Secondary: deep slate (#1E293B).
- Background: warm parchment (#FFF8F0) with soft sand surfaces (#F5E6D3, #E8D5C4).
- Borders: muted clay (#A0785A). Text: near-black (#1A1A2E).
- No cool blues. No neon. No illustrations or mascots.
- Monospace (JetBrains Mono) for data fields, parameters, code-like elements.
- Sans-serif (Inter) for labels and descriptions.
- Tight spacing. Every pixel carries information.

HEADER (full width): name "Archaeologist Agent" (24px bold),
subtitle "Excavates the history behind inherited decisions" (13px muted),
version 1.0.0 / type Agent / maturity Phase 1 badges (right-aligned). Terracotta bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Excavates the history behind legacy systems, established processes,
and inherited decisions. Applies Chesterton's Fence with the crucial follow-up:
the fence may have been built for a reason, but does the reason still hold?
Reconstructs the original decision context, identifies constraints, assesses
whether they still apply, and recommends keep, modify, remove, or investigate further.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Excavate Decision: identify chronological layers of decisions and changes. Tags: excavate-layers
- Reconstruct Context: rebuild original decision context from evidence. Tags: excavate-layers, reconstruct-context
- Assess Constraints: evaluate whether original constraints still apply. Tags: excavate-layers, reconstruct-context, assess-constraints
- Archaeological Report: full excavation through to recommendation. Tags: excavate-layers, reconstruct-context, assess-constraints, recommend-action

PERSONALITIES: compact chips or badges, not stacked blocks.
- Forensic (default): systematic, evidence-first, follows the trail wherever it leads
- Diplomat: sensitive to organizational politics, frames findings without blame
- Curator: appreciates the craft in old decisions, preserves what works

FLOW: Stratigraphic excavation diagram as the central visual element.
Show the full flow: Artifact (inherited system/process/policy) →
Excavate (identify layers from surface to origin) →
Reconstruct (rebuild original context, constraints, alternatives) →
Assess (evaluate each constraint: valid / changed / expired) →
Recommend (keep / modify / remove / investigate-further).
Inside the flow: "Understand why it was built. Then ask if the reason still holds."
Make this the dominant visual, it is the agent's analytical heartbeat.

FRAMEWORKS: visual arrangement showing all four frameworks.
Chesterton's Fence: understand before removing, then check if the reason still holds.
Constraint Archaeology: systematic excavation of conditions that shaped decisions.
Decision Provenance: trace the chain of decisions, modifications, and accumulations.
Architecture Decision Records: structured documentation of context, decision, status, consequences.
Show connections: Chesterton's Fence provides the discipline,
Constraint Archaeology provides the method,
Decision Provenance provides the traceability,
ADRs provide the documentation format.

CONNECTIONS: node graph. Archaeologist Agent at center, connected agents around it.
- Why Agent ← Archaeologist Agent (active operational problem, not historical question)
- Decision Decomposer Agent ← Archaeologist Agent (bundled decisions need structural separation)
- Archaeologist Agent ← any agent (when inherited decisions need historical investigation)
- Archaeologist Agent ← Why Agent (root cause points to historical decision context)
Arrow direction shows data flow. Use terracotta accent border on self.

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner: excavate decision layers, reconstruct original context,
classify evidence quality, assess constraint validity,
produce recommendations with dual risk assessment,
write organizational memory narratives.
Outer boundary: never recommends removal without understanding the history,
never assumes old decisions were made by less capable people,
never fills evidence gaps with speculation presented as fact,
never assigns blame to individuals for decisions made under different constraints,
never replaces professional legal or compliance advice.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill.
"Someone says 'we've always done it this way' and you want to know why?" → Excavate Decision.
"Need to understand original reasoning before proposing changes?" → Reconstruct Context.
"Have the history, need to know which reasons still hold?" → Assess Constraints.
"Full investigation before a major change to an inherited system?" → Archaeological Report.
"Artifact is actively broken, not just questionably designed?" → Handoff to Why Agent.

FOOTER (full width): dark bar. Left: archaeologist-agent-definition.yaml. Right: v1.0.0.

Color tokens: bg #FFF8F0, surface #F5E6D3, surfaceAlt #E8D5C4,
border #A0785A, text #1A1A2E, secondary #4A4A5A, muted #7A6B5D,
accent #C2703E, accentBg #F5E6D3, accentBorder rgba(194, 112, 62, 0.3),
dark #1E293B, darkText #F5E6D3, darkMuted #7A6B5D.
```

## Reusing for Other Agents

1. Copy this prompt
2. Replace agent-specific content (skills, frameworks, connections, guardrails)
3. Adjust accent color for the new agent's identity
4. Generate in Figma AI for best results, v0.dev for quick renders
