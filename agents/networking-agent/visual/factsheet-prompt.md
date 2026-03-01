# Networking Agent Factsheet Design Prompt

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

HEADER (full width): name "Networking Agent" (24px bold),
subtitle "Helps build, maintain, and leverage professional relationships
strategically, turning networking from an awkward obligation into an
intentional practice" (13px muted),
version v0.2.0 / type Agent / maturity Reference badges (right-aligned).
Blue bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Guides users through assessing their current network, reaching
the right people, maintaining relationships over time, and asking for
help when needed. Treats networking as a learnable craft that works for
any personality type. Emphasizes giving first and genuine connection
over transactional exchange.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Network Audit: Map your network, find gaps, identify who to connect with.
  Tags: assess-network, identify-targets.
- Outreach Campaign: Research contact, craft messages, prepare for conversations.
  Tags: research-contact, craft-outreach, prepare-conversation.
- Relationship Maintenance: Follow-up cadence, touchpoints, visibility building.
  Tags: plan-followup, build-visibility.
- Introduction Strategy: How to ask for and give warm introductions.
  Tags: request-introduction, craft-outreach.

PERSONALITIES: compact chips or badges, not stacked blocks.
- Connector: Warm, relationship-first. Genuine connections over tactics.
- Strategist: Analytical, efficient. Career-focused networking with clear ROI.
- Coach: Patient, encouraging. Building confidence and long-term habits.

FLOW: decision tree or flowchart diagram.
Show the full pipeline: Goal + Current Network →
Audit (map network across Dunbar's tiers → identify gaps → define targets) →
Outreach (research contact → find common ground → craft personalized message →
prepare talking points) → Conversation → Follow-up (design cadence →
build touchpoint system → grow visibility).
Use boxes and arrows, not text descriptions.
Include decision points: at Audit (which gap to prioritize?), at Outreach
(warm intro available? → Introduction Strategy path vs. cold outreach path),
at Follow-up (reactivate dormant contact? → reactivation strategy).

FRAMEWORKS: visual diagram showing how frameworks relate to each other.
Dunbar's Numbers (5/15/50/150) as the core tiering model for network mapping.
Granovetter's Weak Ties Theory → identifies where unexpected value comes from.
Adam Grant's Give First Approach → informs outreach and relationship philosophy.
Network Mapping → structural analysis of the user's position.
Personal CRM → operationalizes the maintenance system.
Show which skills use which frameworks:
Network Audit uses Dunbar's Numbers + Network Mapping.
Outreach Campaign uses Granovetter + Give First.
Relationship Maintenance uses Personal CRM + Dunbar's Numbers.
Introduction Strategy uses Give First + Weak Ties.

CONNECTIONS: node graph. This agent at center, connected agents around it.
Arrow direction shows data flow. Use accent border on self.
- Leadership Coach Agent ← receives leadership context when networking supports development goals
- Culture Agent ← receives cultural context for cross-cultural networking norms
- Research Agent ← receives deep research for contact and company background
- Storytelling Agent → sends narrative context for crafting compelling outreach
- Superhero Agent ← receives strength-based framing for networking confidence

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
DOES: map and assess networks, identify strategic gaps, craft personalized
outreach, prepare conversation talking points, design follow-up systems,
facilitate warm introductions, respect comfort levels, cite frameworks.
DOES NOT: suggest manipulative or dishonest tactics, treat people as
stepping stones, recommend mass-messaging or spray-and-pray, guarantee
networking outcomes, replace human mentors or career coaches for
high-stakes situations, suggest networking replaces professional competence,
push past comfort zones without acknowledgment.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill.
- "Starting a new role or industry, need to build connections?" → Network Audit.
- "Need to reach a specific person but unsure how?" → Outreach Campaign.
- "Strong network but relationships going cold?" → Relationship Maintenance.
- "Want to ask for introductions but feel awkward?" → Introduction Strategy.
- "Looking for a systematic approach to relationship management?" → Network Audit + Relationship Maintenance.

CASE STUDY: compact summary block. Title: "Career Pivot into Product
Management (Fictional)." Outcome: User identified 3 structural holes
in their network via Network Audit, used Outreach Campaign to connect
with 2 product leaders through warm introductions, landed informational
interviews within 3 weeks.
Source: networking-agent-definition.yaml.

FOOTER (full width): dark bar. Left: networking-agent-definition.yaml.
Right: v0.2.0.

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
