# Generation Agent Factsheet Design Prompt

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

Agent name: "Generation Agent"
Subtitle: "Bridge communication styles between workplace generations"
Badges: v0.1.0 | Agent | Reference Design

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Bridges communication styles between workplace generations.
Translates messages, explains cultural context, and coaches individuals
to connect across generational divides without reinforcing stereotypes.
Treats generational differences as cultural context, not character judgments.
Explains the underlying values driving communication preferences.
A bridge-builder for the multigenerational workplace.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Adapt Message: Rewrite a message for a different generational audience while preserving intent. Tags: adapt-message (analyze source, identify target preferences, adapt elements, generate alternatives)
- Explain Style: Explain why a generation communicates the way it does with historical and cultural context. Tags: explain-style (load patterns, connect to formative context, address misinterpretations)
- Bridge Gap: Develop communication strategies when generational styles clash. Tags: bridge-gap (analyze clash, find shared values, develop mutual strategies)
- Coach Sender: Help someone develop long-term cross-generational communication skills. Tags: coach-sender (assess patterns, design development plan, define progress indicators)

PERSONALITIES: compact chips or badges, not stacked blocks.
- Translator: Quick message rewrites with minimal explanation, direct and output-focused
- Educator: Detailed historical and cultural context, research-grounded patterns, builds empathy
- Coach: Coaching methodology with questions and frameworks, builds lasting capability, developmental

FLOW: decision tree or flowchart diagram.
Show the full pipeline: Input → Process steps → Output.
Use boxes and arrows, not text descriptions.
Message + Source Generation + Target Generation + Context →
Analyze Source Style → Identify Target Preferences + Friction Points →
Adapt Message Elements → Generate Alternatives + Rationale →
Output (analysis, adapted_message, explanation, alternatives, confidence)
Include decision point: no specific message → Explain Style (provide generational context)
Include decision point: clash between two generations → Bridge Gap (mutual strategies)
Include decision point: long-term development need → Coach Sender (skill building plan)

FRAMEWORKS: visual diagram showing how frameworks relate to each other.
Generational Communication Patterns → Boomer | Gen X | Millennial | Gen Z | Gen Alpha
Each generation node shows: formative context → communication preferences → workplace manifestations
Cross-generational Mapping: show common friction pairs as connecting lines
  Boomer ↔ Gen Z (formality vs. casualness, phone vs. text, hierarchy vs. flat)
  Gen X ↔ Millennial (independence vs. collaboration, email vs. Slack)
Show which skills use which patterns:
Adapt Message uses source + target generation patterns.
Explain Style uses single generation deep context.
Bridge Gap uses cross-generational friction mapping.
Coach Sender uses all patterns for developmental planning.

CONNECTIONS: node graph. This agent at center, connected agents around it.
Arrow direction shows data flow. Use accent border on self.
- Generation Agent ↔ Culture Agent (generational + cultural differences overlap)
- Generation Agent → Supportive Colleague Agent (when friction creates emotional distress)
- Why Agent → Generation Agent (when generational conflict is a symptom of deeper issues)
- Generation Agent → Feedback Coach Agent (cross-generational feedback structuring)
- Coordination Agents ← Generation Agent (generational context for team dynamics)

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner (DOES): translate messages between styles, explain generational context, identify friction points, coach communication adaptation, flag when generation is not the primary factor
Outer (DOES NOT): make hiring/management decisions based on age, provide legal advice on age discrimination, replace direct communication, claim to speak for entire generations, reinforce negative stereotypes
Include: always include individual variation disclaimer, max 30 tool calls, max 250 words output, treat patterns as context not character
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill.
- "Need to rewrite a message for a different generation?" → Adapt Message
- "Why does my colleague communicate that way?" → Explain Style
- "Two generations clashing on the team?" → Bridge Gap
- "Want to improve my cross-generational skills long-term?" → Coach Sender
- "Quick rewrite, no explanation needed?" → Adapt Message (Translator)
- "I want to understand the deeper context?" → Explain Style (Educator)

CASE STUDY: compact summary block. Title, one-line outcome, link.
"Boomer Manager ↔ Gen Z Report" — Adapted feedback message from formal
email style to Slack-appropriate format, preserved directness while matching
target's communication norms, reported positive reception.

FOOTER (full width): dark bar. Left: source of truth file. Right: version.
Left: generation-agent-definition.yaml | Right: v0.1.0

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
