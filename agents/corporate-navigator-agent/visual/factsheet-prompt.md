# Corporate Navigator Agent Factsheet Design Prompt

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

HEADER (full width): name "Corporate Navigator Agent" (24px bold),
subtitle "Navigates office politics and stakeholder dynamics" (13px muted),
version 0.1.0 / type Agent / maturity Phase 1 badges (right-aligned). Blue bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Makes invisible workplace power structures visible and turns
political awareness into actionable, ethical strategy. Maps stakeholder
interests, influence, and relationships. Names political dynamics explicitly
and helps users understand why decisions really get made.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Map Stakeholders: identify key players, interests, power, and relationships. Tags: identify-stakeholders, assess-influence, plan-influence-strategy
- Analyze Dynamics: read political landscape, alliances, informal networks, named dynamics. Tags: identify-stakeholders, assess-influence, analyze-political-landscape, identify-risks
- Plan Influence: develop ethical strategies for gaining support and building coalitions. Tags: identify-stakeholders, assess-influence, plan-influence-strategy, identify-risks
- Career Coach: structured career development combining coaching with political awareness. Tags: identify-stakeholders, assess-influence, plan-influence-strategy
- Navigate Situation: tactical advice for specific corporate scenarios (promotions, conflicts, reorgs). Tags: analyze-political-landscape, identify-stakeholders, identify-risks, plan-influence-strategy

PERSONALITIES: compact chips or badges, not stacked blocks.
- Executive: strategic, power structures, C-suite dynamics, sponsor and coalition building
- Coach: supportive, self-awareness, authentic relationships, long-term trajectory
- Tactical: direct, practical, 24-72 hour actions, specific talking points, contingency plans

FLOW: decision tree or flowchart diagram.
Show the full pipeline: Organization Context + Your Role + Situation + Stakeholders → Identify Stakeholders → Assess Influence (formal vs. informal) → Analyze Political Landscape → Identify Risks → Plan Influence Strategy → Output (landscape, key players, recommendations, risk).
Use boxes and arrows, not text descriptions.
Include the core principle as a validation gate: "Navigation is not manipulation. Understanding how decisions get made allows ethical participation."

FRAMEWORKS: visual diagram showing how navigation frameworks relate to each other.
Stakeholder Mapping (influence/interest matrix) → Power Assessment (formal authority vs. informal influence).
Political Dynamics Taxonomy (gatekeeping, coalition, sponsorship, territory protection) as a classification layer.
GROW Model (Goal, Reality, Options, Will) as a separate branch for Career Coach skill.
Show which skills draw from which frameworks.

CONNECTIONS: node graph. Corporate Navigator Agent at center, connected agents around it.
- Corporate Navigator Agent → Culture Agent (handoff when national/regional culture is the primary factor)
- Corporate Navigator Agent → Why Agent (handoff when root cause analysis is needed beyond politics)
- Corporate Navigator Agent → Question Decoder Agent (handoff when challenge shifts from landscape to framing)
- Corporate Navigator Agent → Six Hats Agent (stakeholder decisions needing multi-perspective analysis)
- Corporate Navigator Agent → Superhero Agent (obstacle framing from political landscape)
- Corporate Navigator Agent → Networking Agent (strategic connections from stakeholder mapping)
Arrow direction shows data flow. Use accent border on self.

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner: map stakeholders, name political dynamics, ethical influence strategies, career coaching with political awareness, tactical situation navigation.
Outer boundary: no legal/HR/compliance advice, no manipulation/deception tactics, no decisions for users, no guaranteed career outcomes, no therapy/mental health support.
Include: flags when user's framing suggests problems beyond politics (legal, ethical, safety). Flags harassment or discrimination for professional counsel.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill.
"Proposing a new initiative and need buy-in?" → Map Stakeholders.
"Something political happened and you can't explain it?" → Analyze Dynamics.
"Need support from multiple stakeholders?" → Plan Influence.
"Preparing for a promotion or feeling stuck?" → Career Coach.
"Facing a reorg, conflict, or difficult conversation?" → Navigate Situation.

CASE STUDY: compact summary block.
Title: "The Blocked Proposal"
Outcome: A Product Director navigated stakeholder resistance to get a B2B product initiative approved after two committee rejections. Stakeholder mapping revealed a hidden gatekeeper, and a sequenced engagement plan turned a blocker into a sponsor.
Link: case-studies/the-blocked-proposal.md

FOOTER (full width): dark bar. Left: corporate-navigator-agent-definition.yaml. Right: v0.1.0.

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
