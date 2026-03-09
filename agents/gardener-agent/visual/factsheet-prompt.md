# Gardener Agent Factsheet Design Prompt

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
- Warm green and earth tones. Organic, grounded, natural.
- Primary accent: sage green (#6B8E6B). Secondary: warm earth (#8B7355).
- Background: off-white (#FAFAF5) with light sage surfaces (#F0F4EE, #E8EDE5).
- Borders: soft green-gray (#C2CFC0). Text: deep earth (#2A3228).
- No harsh blues or neon tones. No corporate feel.
- Monospace (JetBrains Mono) for data fields, parameters, code-like elements.
- Sans-serif (Inter) for labels and descriptions.
- Tight spacing. Every pixel carries information.

HEADER (full width): name "Gardener Agent" (24px bold),
subtitle "Cultivates ideas, relationships, skills, and initiatives
over time using patience, timing, and compounding returns. Optimizes
for the slow game that most productivity tools ignore" (13px muted),
version v0.1.0 / type Agent / maturity Reference badges (right-aligned).
Green bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Helps people think about their professional portfolio as a
garden where things grow at different rates, need different types of
attention, and compete for finite resources. Applies permaculture
principles to knowledge work. Distinguishes between things that need
urgent action and things that need sustained attention over time.
Optimizes for timing and compounding returns, not speed or throughput.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Assess Garden: Survey portfolio health, categorize by growth stage.
  Tags: assess-garden.
- Plan Season: Map current season, recommend plant/tend/harvest/rest actions.
  Tags: assess-garden, plan-season.
- Diagnose Timing: Determine if now is the time to act or wait.
  Tags: diagnose-timing.
- Tend Portfolio: Full review with assessment, seasonal plan, pruning, and timing.
  Tags: assess-garden, plan-season, recommend-pruning, diagnose-timing.

PERSONALITIES: compact chips or badges, not stacked blocks.
- Permaculturist: Systems thinker. Every element serves multiple functions.
- Bonsai Master: Precision and patience. Small deliberate actions, deep focus.
- Wild Gardener: Minimal intervention. Trusts natural processes.

FLOW: decision tree or flowchart diagram.
Show the full pipeline: Portfolio + Context →
Assess Garden (survey items → classify growth stage → categorize health →
analyze resource competition) →
Plan Season (determine current season → allocate to plant/tend/harvest/rest) →
Diagnose Timing (for specific items → readiness signals → risk of too early
vs too late → recommendation) →
Recommend Pruning (identify crowding → classify thin/prune/transplant/let-go →
assess emotional difficulty → quantify freed resources).
Use boxes and arrows, not text descriptions.
Include decision points: at Assessment (enough info? → ask user),
at Timing (patience or avoidance? → different advice),
at Pruning (emotional difficulty high? → extra care in framing).

FRAMEWORKS: visual diagram showing how frameworks relate to each other.
Permaculture Principles as the core design philosophy.
Compounding Returns Theory → explains why patience creates value.
Patience Economics → distinguishes productive patience from avoidance.
Ecological Succession → maps portfolio maturity stages.
Growth Stage Model → classifies individual items (seed to dormant).
Show which skills use which frameworks:
Assess Garden uses Growth Stage Model + Permaculture (observe and interact).
Plan Season uses Ecological Succession + Permaculture (design from patterns).
Diagnose Timing uses Patience Economics + Compounding Returns.
Tend Portfolio uses all frameworks integrated.

CONNECTIONS: node graph. This agent at center, connected agents around it.
Arrow direction shows data flow. Use accent border on self.
- Networking Agent → receives relationship health and timing context for strategic networking
- Leadership Coach Agent → receives leadership initiative stages for development coaching
- Human (escalation) ← receives portfolio assessment when burnout, high-stakes, or authority issues arise

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
DOES: assess portfolio health and growth stages, identify resource competition,
recommend timing for action or patience, suggest pruning with emotional awareness,
plan seasonal allocation, generate narrative cultivation plans, distinguish
patience from avoidance, apply permaculture thinking.
DOES NOT: replace project management for deadline-driven work, make decisions
for users, guarantee growth outcomes, manage calendars or tasks, optimize for
speed or throughput, provide financial or legal advice, replace mentors or
therapists, promise specific timelines, treat relationships as extractable
resources.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill.
- "Feeling overwhelmed by too many competing initiatives?" → Assess Garden + Tend Portfolio.
- "Wondering if now is the right time to make a move?" → Diagnose Timing.
- "Entering a new phase and need to plan priorities?" → Plan Season.
- "Know you need to cut but can't decide what?" → Tend Portfolio (pruning focus).
- "Want a comprehensive portfolio review?" → Tend Portfolio.

CASE STUDY: compact summary block. Title: "The Overwhelmed Leader's Garden
(Fictional)." Outcome: Director managing 8 initiatives mapped the garden:
3 neglected, 2 overwatered, 1 ready to harvest. Pruned to 4 focused items,
freed 12 hours/week. Platform modernization harvested successfully with
executive recognition.
Source: gardener-agent-definition.yaml.

FOOTER (full width): dark bar. Left: gardener-agent-definition.yaml.
Right: v0.1.0.

Color tokens: bg #FAFAF5, surface #F0F4EE, surfaceAlt #E8EDE5,
border #C2CFC0, text #2A3228, secondary #3D4A3B, muted #7A8B78,
accent #6B8E6B, accentBg #EDF4ED, accentBorder rgba(107, 142, 107, 0.2),
dark #2A3228, darkText #F0F4EE, darkMuted #7A8B78.
```

## Reusing for Other Agents

1. Copy this prompt
2. Replace agent-specific content (skills, frameworks, connections, guardrails)
3. Adjust accent color for the new agent's identity
4. Generate in Figma AI for best results, v0.dev for quick renders
