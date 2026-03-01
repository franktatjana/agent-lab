# Design Thinking Agent Factsheet Design Prompt

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

HEADER (full width): name "Design Thinking Agent" (24px bold),
subtitle "Guides human-centered problem-solving through design thinking,
helping teams move from empathy to testable solutions" (13px muted),
version v0.2.0 / type Agent / maturity Reference badges (right-aligned).
Blue bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Walks teams through the five stages of design thinking:
Empathize, Define, Ideate, Prototype, and Test. Prevents the most
common mistake in problem-solving: jumping to solutions before
understanding the people you're solving for. Uses structured divergent
and convergent thinking to move from empathy to testable ideas.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Empathy Sprint: Maps stakeholder needs → synthesizes insights → frames the problem.
  Tags: empathize-stakeholders, synthesize-observations, frame-problem.
- Ideation Session: Generates many ideas (diverge) then selects the best (converge).
  Tags: frame-problem, diverge-ideas, converge-evaluate.
- Prototype & Test: Plans prototypes, designs tests, synthesizes learnings.
  Tags: prototype-strategy, test-plan, synthesize-learnings.
- Full Design Sprint: End-to-end cycle through all five stages (8 steps).
  Tags: all prompts sequenced.

PERSONALITIES: compact chips or badges, not stacked blocks.
- Facilitator: Team workshops, collaborative sessions, group ideation.
- Coach: Teaching methodology, building capability, guided practice.
- Strategist: Quick strategic application, executive context, time-constrained.

FLOW: decision tree or flowchart diagram.
Show the full pipeline: Problem Context → Empathize (build empathy maps) →
Define (synthesize → insight statements → POV + HMW questions) →
Ideate (diverge ideas → converge and evaluate → top ideas) →
Prototype (plan fastest test for riskiest assumptions) →
Test (run user tests → synthesize learnings → iterate / pivot / proceed).
Use boxes and arrows, not text descriptions.
Include decision points at the converge step (select best) and at the
test synthesis step (iterate vs. pivot vs. proceed).

FRAMEWORKS: visual diagram showing how frameworks relate to each other.
Stanford d.school 5-Stage Model (core process) →
IDEO 3-I Model (Inspiration, Ideation, Implementation) as parallel framing.
Double Diamond (UK Design Council) maps to diverge/converge rhythm.
IBM Enterprise Design Thinking adds enterprise loops (Hills, Playbacks, Sponsor Users).
Show which skills map to which framework stages.

CONNECTIONS: node graph. This agent at center, connected agents around it.
Arrow direction shows data flow. Use accent border on self.
- Research Agent ← receives deep source analysis for empathy data
- Six Hats Agent → sends ideas for structured multi-perspective evaluation
- Culture Agent ← receives cultural context for stakeholder understanding
- Why Agent ← receives root cause analysis to inform problem framing
- Storytelling Agent → sends prototype narratives for user testing scenarios

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
DOES: guide empathy mapping, facilitate brainstorming, frame HMW questions,
plan rapid prototyping, synthesize test learnings.
DOES NOT: replace actual user research or observation, make final design
or business decisions, provide UX/UI deliverables (wireframes, mockups),
manage project timelines, skip empathy to jump to solutions, critique
ideas during divergent phases.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill.
- "Starting a new project and need to understand users?" → Empathy Sprint.
- "Team stuck on one approach, need creative alternatives?" → Ideation Session.
- "Have an idea but haven't validated assumptions?" → Prototype & Test.
- "Need end-to-end problem-solving cycle?" → Full Design Sprint.
- "Brainstorming sessions converge too quickly?" → Ideation Session (Facilitator).

CASE STUDY: compact summary block. Title: "Internal Tooling Redesign
(Fictional)." Outcome: Team discovered the real problem was onboarding
friction, not feature gaps, by running an Empathy Sprint before building.
Source: design-thinking-agent-definition.yaml.

FOOTER (full width): dark bar. Left: design-thinking-agent-definition.yaml.
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
