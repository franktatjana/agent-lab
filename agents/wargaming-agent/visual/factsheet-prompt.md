# Wargaming Agent Factsheet Design Prompt

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
- Red and crimson tones. Commanding, strategic, intense.
- Primary accent: crimson red (#DC143C). Secondary: dark slate (#2C3E50).
- Background: charcoal white (#FAFAFA) with warm gray surfaces (#F0EDED, #E5E0E0).
- Borders: muted red-gray (#C4B5B5). Text: near-black (#1A1A2E).
- No cool blues. No pastels. No illustrations or mascots.
- Monospace (JetBrains Mono) for data fields, parameters, code-like elements.
- Sans-serif (Inter) for labels and descriptions.
- Tight spacing. Every pixel carries information.

HEADER (full width): name "Wargaming Agent" (24px bold),
subtitle "Competitive simulation using military wargaming methodology" (13px muted),
version 0.1.0 / type Agent / maturity Phase 1 badges (right-aligned). Crimson bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Runs competitive simulations based on military wargaming methodology.
Before committing to a strategy, play it out against thinking opponents. Helps
teams role-play as their own company, competitors, regulators, and the market,
then analyzes what happens when plans collide with adversarial responses.
Simulations reveal assumptions that only survive in friendly rooms.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Design Wargame: structure and run a full competitive simulation. Tags: set-scenario, analyze-competitor, simulate-round
- Play Competitor: role-play a specific competitor's response. Tags: analyze-competitor, simulate-round
- After-Action Review: analyze results, extract lessons, adjust strategy. Tags: simulate-round, debrief
- Identify Schwerpunkt: find the decisive point for concentrated effort. Tags: set-scenario, find-schwerpunkt
- Tabletop Exercise: walk through a scenario and test response plans. Tags: set-scenario, test-response, debrief

PERSONALITIES: compact chips or badges, not stacked blocks.
- Strategist (default): calm, long-view, whole-board assessment, conditional reasoning
- Field Commander: tactical, direct, military briefing format, decisive action
- Red Teamer: adversarial, first-person competitor voice, assumption destruction

FLOW: OODA Loop cycle diagram as the central visual element.
Show the full cycle: Observe (gather intelligence, scan competitive landscape) →
Orient (interpret through mental models, identify biases and blind spots) →
Decide (select strategy, identify Schwerpunkt) →
Act (execute, force tempo on opponents) → feeds back to Observe.
Inside the loop: "The side that cycles faster gains initiative."
Make this the dominant visual, it is the agent's operational heartbeat.

FRAMEWORKS: visual arrangement showing all six frameworks.
Kriegsspiel (Prussian Wargame): opposing teams, shared map, umpire adjudication.
Business Wargaming (Gilad): multi-round role-play of competitors and market.
Red Team / Blue Team: adversarial attack and defense of strategy.
Tabletop Exercise (TTX): scenario walkthrough testing response plans.
OODA Loop (Boyd): observe-orient-decide-act speed as advantage.
Schwerpunkt (Center of Gravity): concentrated force at the decisive point.
Show connections between frameworks: OODA drives tempo across all others,
Schwerpunkt is the output that focuses action.

CONNECTIONS: node graph. Wargaming Agent at center, connected agents around it.
- Corporate Navigator Agent → Wargaming Agent (stakeholder dynamics feed simulation design)
- Why Agent → Wargaming Agent (root cause analysis deepens after-action review)
- Six Hats Agent → Wargaming Agent (multi-perspective analysis before simulation)
- Wargaming Agent → Corporate Navigator Agent (simulation reveals political dynamics)
- Wargaming Agent → Why Agent (after-action surfaces root causes)
Arrow direction shows data flow. Use crimson accent border on self.

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner: simulate competitor responses, identify decisive points, run after-action reviews,
test strategies against adversarial thinking, structure multi-round wargames.
Outer boundary: no predictions (simulations explore possibility, not forecast),
no competitor caricatures (use evidence-based profiles), no skipping after-action reviews,
no illegal intelligence gathering, no substitute for real market testing,
no assuming competitors are less capable than your side.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your strategic situation?" → branches to scenarios → each leads to a skill.
"Testing a major strategy before committing resources?" → Design Wargame.
"Need to understand how a specific competitor will respond?" → Play Competitor.
"Just ran a simulation and need to extract lessons?" → After-Action Review.
"Want to find where to concentrate effort for maximum impact?" → Identify Schwerpunkt.
"Need to test response plans for a specific scenario?" → Tabletop Exercise.

FOOTER (full width): dark bar. Left: wargaming-agent-definition.yaml. Right: v0.1.0.

Color tokens: bg #FAFAFA, surface #F0EDED, surfaceAlt #E5E0E0,
border #C4B5B5, text #1A1A2E, secondary #4A4A5A, muted #8A7F7F,
accent #DC143C, accentBg #FDF0F0, accentBorder rgba(220, 20, 60, 0.2),
dark #1A1A2E, darkText #F5F0F0, darkMuted #8A7F7F.
```

## Reusing for Other Agents

1. Copy this prompt
2. Replace agent-specific content (skills, frameworks, connections, guardrails)
3. Adjust accent color for the new agent's identity
4. Generate in Figma AI for best results, v0.dev for quick renders
