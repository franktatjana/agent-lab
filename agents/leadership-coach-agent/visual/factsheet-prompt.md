# Leadership Coach Agent Factsheet Design Prompt

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

HEADER (full width): name "Leadership Coach Agent" (24px bold),
subtitle "Coaches leaders through people challenges, helping them see
blind spots, adapt their style, and develop their teams through
intentional action" (13px muted),
version v0.2.0 / type Agent / maturity Reference badges (right-aligned).
Blue bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Guides leaders through structured coaching conversations, team
health assessments, and style adaptations. Treats leadership as a
learnable craft and helps leaders move from instinct to intentional
practice. Connects behaviors to impact: "When you do X, your team
experiences Y."

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Coaching Conversation: GROW-based 1:1 session, from goal to commitment.
  Tags: set-coaching-goal, explore-reality, generate-options, commit-to-action.
- Leadership Style Check: Diagnose style, map to team needs, recommend adaptations.
  Tags: assess-leadership-style, diagnose-team-dynamics, adapt-style.
- Team Health Check: Assess trust, psychological safety, and team dynamics.
  Tags: diagnose-team-dynamics, build-psychological-safety, adapt-style.
- Growth Plan: Focused development plan with 30/60/90 day actions.
  Tags: assess-leadership-style, set-coaching-goal, adapt-style, commit-to-action.

PERSONALITIES: compact chips or badges, not stacked blocks.
- Believer: Warm, optimistic coaching. Believes in you while being honest.
- Executive Coach: Direct, strategic, results-focused. Treats leadership as craft.
- Mentor: Experienced, collaborative. Guides through shared patterns.

FLOW: decision tree or flowchart diagram.
Show the GROW coaching pipeline: Challenge + Context →
Goal (define clear growth objective) →
Reality (understand situation honestly, identify leader's contribution) →
Options (brainstorm approaches: smallest step, boldest move, uncomfortable option) →
Will (commit to specific, time-bound action + accountability mechanism).
Use boxes and arrows, not text descriptions.
Include decision points: at Options (select approach), at Will (commitment
rating check, if < 7 revisit options).

FRAMEWORKS: visual diagram showing how frameworks relate to each other.
GROW Model (Whitmore) as the core coaching process.
Situational Leadership (Hersey & Blanchard) → feeds into adapt-style decisions.
Psychological Safety (Edmondson) → feeds into team health assessment.
Servant Leadership (Greenleaf) → informs people-first coaching philosophy.
Radical Candor (Scott) → informs honest communication guidance.
Show which skills use which frameworks:
Coaching Conversation uses GROW.
Leadership Style Check uses Situational Leadership.
Team Health Check uses Psychological Safety + Servant Leadership.
Growth Plan uses all five.

CONNECTIONS: node graph. This agent at center, connected agents around it.
Arrow direction shows data flow. Use accent border on self.
- Culture Agent ← receives cultural context for cross-cultural leadership challenges
- Six Hats Agent → sends situations for structured decision analysis
- Why Agent ← receives root cause investigation for team dysfunction
- Superhero Agent → sends coaching insights when confidence issues or strength-based reframing needed
- Networking Agent → sends leadership context when development requires strategic relationship building

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
DOES: coach through GROW conversations, assess leadership style, diagnose
team dynamics, build psychological safety, create development plans with
accountability, challenge with care, connect behaviors to impact.
DOES NOT: replace professional coaching or therapy, provide mental health
or medical advice, manage organizational politics or strategy, provide
HR/legal/compliance guidance, make leadership decisions for the user,
tell leaders what they want to hear, overgeneralize across situations.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill.
- "Stuck on a people challenge, need structured thinking?" → Coaching Conversation.
- "Leadership approach isn't landing, can't pinpoint why?" → Leadership Style Check.
- "Team dynamics feel off, need a diagnostic?" → Team Health Check.
- "Preparing for a difficult conversation?" → Coaching Conversation (Executive Coach).
- "Want to build a deliberate development practice?" → Growth Plan.

CASE STUDY: compact summary block. Title: "New Engineering Lead
Transition (Fictional)." Outcome: Leader discovered their default
directive style was undermining a senior team's autonomy, adapted to
delegating style using Situational Leadership, and team velocity
recovered within 60 days.
Source: leadership-coach-agent-definition.yaml.

FOOTER (full width): dark bar. Left: leadership-coach-agent-definition.yaml.
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
