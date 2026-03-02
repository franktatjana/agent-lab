# Cat-POV Agent — Visual Factsheet Prompt

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
- Lime and green tones. Clean, playful but professional. Cat energy.
- Primary accent: lime (#84CC16). Secondary: emerald (#10B981).
- Background: off-white (#FAFFF5) with light green surfaces (#F0FDF4, #ECFCCB).
- Borders: soft green (#D1FAE5). Text: charcoal (#1A2E05).
- Muted text: olive gray (#6B7F5A).
- No red or warm tones. Keep it fresh, observational, slightly detached.
- Monospace (JetBrains Mono) for data fields, parameters, code-like elements.
- Sans-serif (Inter) for labels and descriptions.
- Tight spacing. Every pixel carries information.
- Hero visual element: a minimal cat silhouette observing from a high vantage
  point (top of header or corner), looking down at the frameworks below.

HEADER (full width): name "Cat-POV Agent" (24px bold),
subtitle "Reframes workplace challenges through feline behavioral logic,
turning burnout patterns, boundary failures, and energy mismanagement
into problems a cat solved centuries ago" (13px muted),
version v0.1.0 / type Agent / maturity Reference badges (right-aligned).
Lime bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Observes human work behavior through the lens of cat instincts
and behavioral science. Maps workplace problems to five feline frameworks:
territorial intelligence, selective attention, energy conservation,
comfort-seeking as strategy, and social selectivity. Delivers reframes
that are funny enough to disarm and accurate enough to stick.

FRAMEWORKS: visual diagram, the 5 frameworks arranged as a cat's territory
map or connected nodes radiating from a central cat silhouette.
1. Territorial Intelligence — scope ownership, boundary setting, turf awareness.
2. Selective Attention (Cat Focus) — threat/opportunity/irrelevant signal filter.
3. Energy Conservation — rest as preparation, hunt-to-groom ratio.
4. Comfort-Seeking as Strategy — environment optimization, friction removal.
5. Social Selectivity — intentional relationships, clean exits, energy budgeting.
Show connections between frameworks: Territorial Intelligence feeds into
Selective Attention (know your territory to filter signals). Energy
Conservation connects to Comfort-Seeking (rest enables optimization).
Social Selectivity connects to all others (people are part of every framework).

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Cat Scan: Full diagnostic of work patterns through the cat lens.
  Tags: observe-patterns, map-territory, assess-energy.
- Attention Filter: Categorize demands as threat/opportunity/irrelevant.
  Tags: filter-signals, prioritize-engagement.
- Territory Audit: Map what the human owns, defends, and should release.
  Tags: map-territory, set-boundaries.
- Energy Budget: Analyze hunt-to-groom ratio and rest patterns.
  Tags: assess-energy, plan-rest.

PERSONALITIES: compact chips or badges, not stacked blocks.
- Observer: Detached, analytical. Clinical field notes on human behavior.
- Sassy: Judgmental, direct. Peak cat energy with rhetorical questions.
- Wise: Philosophical, gentle. The old cat who has seen many humans.

CONNECTIONS: node graph. This agent at center, connected agents around it.
Arrow direction shows data flow. Use accent border on self.
- Corporate Navigator Agent ← receives organizational context for
  territorial politics and stakeholder dynamics
- Leadership Coach Agent ← receives coaching context for energy
  management and sustained boundary development
- Why Agent ← receives root cause analysis when cat observations
  surface deeper behavioral patterns

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
DOES: observe and reframe work patterns, apply feline behavioral frameworks,
challenge overwork and boundary failures with humor, provide actionable
reframes for energy and attention management, cite behavioral science.
DOES NOT: provide therapy or clinical mental health advice, diagnose burnout
as a medical condition, replace professional coaching for serious situations,
mock or belittle the human's real struggles, suggest disengagement from
legitimate responsibilities.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill.
- "Drowning in meetings, no time for real work?" → Cat Scan + Attention Filter.
- "Can't say no, taking on everyone else's work?" → Territory Audit.
- "Burned out, no energy, everything feels urgent?" → Energy Budget.
- "Workplace politics, unclear who owns what?" → Territory Audit + Cat Scan.
- "Need a fresh perspective on a stuck situation?" → Cat Scan with any personality.

CASE STUDY: compact summary block. Title: "The Human Who Attended Every
Meeting (Fictional)." Outcome: User identified 14 irrelevant meetings via
Attention Filter, reclaimed 20 hours per week, recovered deep work capacity,
resolved burnout without changing jobs.
Source: cat-pov-agent case studies.

FOOTER (full width): dark bar. Left: cat-pov-agent-definition.yaml.
Right: v0.1.0.

Color tokens: bg #FAFFF5, surface #F0FDF4, surfaceAlt #ECFCCB,
border #D1FAE5, text #1A2E05, secondary #3D5A2E, muted #6B7F5A,
accent #84CC16, accentBg #F7FEE7, accentBorder rgba(132, 204, 22, 0.2),
dark #1A2E05, darkText #F0FDF4, darkMuted #6B7F5A.
```

## Reusing for Other Agents

1. Copy this prompt
2. Replace agent-specific content (skills, frameworks, connections, guardrails)
3. Adjust accent color for the new agent's identity
4. Generate in Figma AI for best results, v0.dev for quick renders
