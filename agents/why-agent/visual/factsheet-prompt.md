# Why Agent Factsheet Design Prompt

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

Agent name: "Why Agent"
Subtitle: "Drill from symptoms to root causes through structured questioning"
Badges: v0.1.0 | Agent | Reference Design

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Drills down from symptoms to root causes through structured
questioning. Helps find what's really going on beneath the surface before
jumping to solutions. Guides structured questioning to uncover root causes,
distinguishes symptoms from actual causes, surfaces multiple causal paths,
and verifies root causes before concluding. Your questioning partner, not
your problem solver.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Drill Down (5 Whys): Iterative questioning to reach root causes. Tags: ask-why, verify-root
- Fishbone Analysis: Organize causes into categories (People, Process, Technology, Environment). Tags: categorize-cause, ask-why, verify-root
- Challenge Assumptions: Socratic questioning to surface hidden beliefs. Tags: challenge-assumption, ask-why, verify-root
- A3 Problem Solving: Toyota's A3 format: background, current state, goal, analysis, countermeasures. Tags: ask-why, categorize-cause, verify-root

PERSONALITIES: compact chips or badges, not stacked blocks.
- Coach: Helps the user discover root causes themselves, more questions than direction
- Investigator: Systematic, evidence-based, requests logs and metrics, builds causal chain from verified facts
- Facilitator: Manages multiple perspectives, builds consensus, synthesizes differing viewpoints

FLOW: decision tree or flowchart diagram.
Show the full pipeline: Input → Process steps → Output.
Use boxes and arrows, not text descriptions.
Problem + Context → Ask "Why?" → Answer → Ask "Why?" again →
(iterate up to max_depth, usually 5 levels) →
Candidate Root Cause → Verify: "If we fix X, does Y stop?" →
Decision point: Is it actionable? → Yes: Root Cause confirmed → Output
                                  → No: Keep drilling
Include branching: Problem → Fishbone path (categorize into People/Process/Technology/Environment, then drill each)
Include branching: Problem → Challenge Assumptions path (surface hidden beliefs, then drill)
Output: problem_statement, questioning_sequence, root_causes, verification, next_steps

FRAMEWORKS: visual diagram showing how frameworks relate to each other.
5 Whys (iterative depth) → Drill Down to actionable root cause
Fishbone / Ishikawa (categorical breadth) → People, Process, Technology, Environment, Management, Materials
A3 (structured document) → Background → Current State → Goal → Analysis → Countermeasures → Verification
Socratic Method (assumption challenge) → Surface hidden beliefs driving the problem
Show which skills use which frameworks:
Drill Down uses 5 Whys.
Fishbone Analysis uses Ishikawa + 5 Whys (drill within categories).
A3 Problem Solving uses 5 Whys + Ishikawa combined.
Challenge Assumptions uses Socratic Method + 5 Whys.

CONNECTIONS: node graph. This agent at center, connected agents around it.
Arrow direction shows data flow. Use accent border on self.
- Why Agent → Tactician Agent (root causes for solution design)
- Why Agent → Systems Thinker Agent (system-level patterns)
- Why Agent → Strategist Agent (root causes requiring strategic decisions)
- Why Agent → Supportive Colleague Agent (when analysis surfaces difficult truths)
- Design Thinking Agent ← Why Agent (root cause analysis for solution ideation)

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner (DOES): ask iterative why questions, distinguish symptoms from causes, explore multiple causal paths, verify root causes, document reasoning chains
Outer (DOES NOT): propose solutions, analyze system dynamics, make strategic decisions, provide emotional support, assign blame to individuals
Include: rejects problems that are solutions in disguise, no blame when systems are at fault, max 30 tool calls, max 300 words output
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill.
- "Something broke and I need to know why?" → Drill Down
- "Complex problem with many possible causes?" → Fishbone Analysis
- "We keep solving the same thing repeatedly?" → Challenge Assumptions
- "Need a formal root cause document?" → A3 Problem Solving
- "Team can't agree on what the real problem is?" → Fishbone Analysis (Facilitator)
- "I want to think this through myself?" → Drill Down (Coach)

CASE STUDY: compact summary block. Title, one-line outcome, link.
"Customer Complaints Up 40%" — Drilled from symptom (complaints) through
3 why-levels to root cause (deployment pipeline skipping integration tests),
verified: fixing pipeline reduced complaints 80%.

FOOTER (full width): dark bar. Left: source of truth file. Right: version.
Left: why-agent-definition.yaml | Right: v0.1.0

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
