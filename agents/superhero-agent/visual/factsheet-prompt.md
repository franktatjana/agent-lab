# Superhero Agent Factsheet Design Prompt

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

HEADER (full width): name (24px bold), subtitle (13px muted),
version/type/maturity badges (right-aligned). Blue bottom border.

Agent name: "Superhero Agent"
Subtitle: "Reframe work challenges through superhero storytelling and archetypes"
Badges: v0.1.0 | Agent | Reference Design

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Reframes work challenges through superhero storytelling. Uses Marvel
archetypes to build confidence, identify unique strengths, name obstacles, and
turn every challenge into a mission worth taking on. The metaphor is a lens,
not an escape. Use it to create clarity, energy, and actionable next steps.
You're the hero, work is your universe, every challenge is a mission.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Identify Power: Discover your unique professional superpower through guided reflection. Tags: identify-power
- Frame Mission: Transform a work challenge into a hero's mission with stakes and victory conditions. Tags: frame-mission
- Map Villain: Name the real obstacle as an archetype and develop strategy to defeat it. Tags: map-villain
- Suit Up: Pre-event confidence ritual to prepare for high-stakes moments. Tags: identify-power, frame-mission, map-villain (combined)
- Assemble Team: Identify who you need on your side and what powers they bring. Tags: identify-power, frame-mission, map-villain (combined)

PERSONALITIES: compact chips or badges, not stacked blocks.
Show as hero archetype badges with their domain:
- Iron Man (The Innovator): Technical challenges, building new things, "What can I build to solve this?"
- Captain America (The Leader): Ethical dilemmas, standing up for what's right, "What's the right thing to do?"
- Black Widow (The Operator): Office politics, influence, stakeholder situations, "Who are the real players?"
- Spider-Man (The Fast Learner): New roles, steep learning curves, imposter syndrome, "What can I learn?"
- Thor (The Authority): Executive presence, setback recovery, "Am I leading with presence or position?"
- Black Panther (The Strategist): Protecting your team, legacy decisions, quiet strength, "What legacy am I building?"
- Doctor Strange (The Expert): Deep expertise, seeing patterns, "What pattern am I seeing that others miss?"

FLOW: decision tree or flowchart diagram.
Show the full pipeline: Input → Process steps → Output.
Use boxes and arrows, not text descriptions.
Challenge + Context + Strengths + What Feels Hard →
Select Hero Archetype (or auto-match) →
Decision point: "What do you need?"
  → Identify your superpower → Identify Power flow → Output: superpower, kryptonite, how_to_use_it
  → Face a challenge → Frame Mission flow → Output: mission_briefing, your_powers, the_obstacle, next_move
  → Name what's blocking you → Map Villain flow → Output: villain_profile, defeat_strategy, reframe
  → Prepare for high-stakes moment → Suit Up flow → Output: power_check, fear_reframe, mantra, visualization
  → Build your team → Assemble Team flow → Output: team_composition, recruitment_strategy, what_you_offer

FRAMEWORKS: visual diagram showing how frameworks relate to each other.
Hero Archetypes (7 types) → each maps to a work domain and a core question
Villain Archetypes → workplace obstacles mapped to named villains
  (e.g., Burnout = "Thanos", Office Politics = "Loki", Bureaucracy = "Hydra")
Mission Framing → Challenge reframed as: codename, stakes, victory condition
Power Discovery → Strengths + What energizes you + What others come to you for = Superpower
Show connections:
Hero Archetype selected → shapes the tone and strategy of all other frameworks.
Villain Archetype → paired with Hero Archetype → creates defeat strategy.
Power Discovery → feeds into Mission Framing and Team Assembly.

CONNECTIONS: node graph. This agent at center, connected agents around it.
Arrow direction shows data flow. Use accent border on self.
- Why Agent → Superhero Agent (find the villain's true identity, then strategize defeat)
- Generation Agent → Superhero Agent (cross-generational friction as the villain)
- Culture Agent → Superhero Agent (cultural differences as the battlefield)
- Superhero Agent → Leadership Coach Agent (when team dynamics need professional coaching)
- Superhero Agent → Coordination Agents (mission briefings for team alignment)

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner (DOES): reframe challenges as missions, identify professional superpowers, name obstacles as villain archetypes, suggest team composition, provide confidence rituals, keep metaphor grounded in real actions
Outer (DOES NOT): provide therapy or mental health treatment, replace professional career coaching, make promises about outcomes, mock or minimize real challenges, ignore signs someone needs professional support, force the metaphor if user disengages
Include: every insight must lead to a real action, max 10 tool calls, max 250 words output
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill + personality.
- "Facing a technical challenge?" → Frame Mission (Iron Man)
- "Need to deliver hard truths?" → Frame Mission (Captain America)
- "Navigating office politics?" → Frame Mission (Black Widow)
- "Starting a new role, feeling lost?" → Identify Power (Spider-Man)
- "Recovering from a major setback?" → Identify Power (Thor)
- "Big presentation in 30 minutes?" → Suit Up
- "Building a team for a project?" → Assemble Team
- "Something keeps blocking me but I can't name it?" → Map Villain

CASE STUDY: compact summary block. Title, one-line outcome, link.
"Operation Truth to Power" — Product manager reframed executive
presentation as Captain America mission, identified Sales VP pushback as
"Loki" (trickster requiring strategy), prepared with data-backed conviction,
presentation received approval.

FOOTER (full width): dark bar. Left: source of truth file. Right: version.
Left: superhero-agent-definition.yaml | Right: v0.1.0

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
