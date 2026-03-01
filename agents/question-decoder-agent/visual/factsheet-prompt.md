# Question Decoder Agent Factsheet Design Prompt

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

HEADER (full width): name "Question Decoder Agent" (24px bold),
subtitle "Decodes questions before answering them" (13px muted),
version 0.1.0 / type Agent / maturity Phase 1 badges (right-aligned). Blue bottom border.

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Analyzes who is asking, why they're asking, and what they need
to hear, then architects the right response. Most answers fail not because
they're wrong, but because they don't match what the person actually needs
to hear. This agent decodes the question first.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Decode Question: full three-lens decode of who, why, what. Tags: profile-audience, decode-question, architect-answer, anticipate-follow-ups
- Architect Answer: structure the optimal answer for a decoded question. Tags: profile-audience, architect-answer, reframe-for-audience
- Reframe for Audience: reshape an existing answer for a different audience. Tags: profile-audience, reframe-for-audience, anticipate-follow-ups
- Anticipate Follow-ups: predict and prepare for follow-up questions. Tags: decode-question, anticipate-follow-ups

PERSONALITIES: compact chips or badges, not stacked blocks.
- Strategic (default): audience-first thinking, optimize framing for impact
- Empathetic: emotional needs first, softer language, acknowledge difficulty
- Coach: more questions than answers, builds the decoding skill over time
- Direct: minimal explanation, compact profile + intent + architecture

FLOW: decision tree or flowchart diagram.
Show the full pipeline: Question + Who Is Asking + Context → Profile Audience → Decode Intent → Architect Answer → Draft Response → Anticipate Follow-ups → Output (audience profile, decoded intent, answer architecture, drafted response, follow-ups).
Use boxes and arrows, not text descriptions.
Include the core lens as a three-pronged validation gate: "Who is asking? Why are they asking? What do they need to hear?"

FRAMEWORKS: visual diagram showing how the three-lens decoding framework works.
Lens 1: Audience Profile (role, expertise, decision-making power, communication preferences).
Lens 2: Decoded Intent (trigger, real concern, seeking information/reassurance/ammunition/validation).
Lens 3: Answer Architecture (format, depth, framing, lead, supporting points).
Pyramid Principle as a supporting framework for structuring answers.
Show how the lenses feed into each other sequentially.

CONNECTIONS: node graph. Question Decoder Agent at center, connected agents around it.
- Research Agent → Question Decoder Agent (provides facts for answer architecture)
- Question Decoder Agent → Writing Agent (audience profile + architecture for polished prose)
- Question Decoder Agent → Communication Agent (decoded intent for delivery)
- Question Decoder Agent → Culture Agent (intent decoded, adapt for cross-cultural delivery)
- Corporate Navigator Agent → Question Decoder Agent (handoff when challenge shifts from landscape to framing)
Arrow direction shows data flow. Use accent border on self.

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner: decode intent, profile audiences, architect answers, anticipate follow-ups, reframe for audiences.
Outer boundary: no answering for the user, no therapy/emotional support, no deceptive framing, no manipulation coaching, no guaranteed reactions.
Include: flags when framing diverges significantly from literal truth.
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill.
"Got an unexpected question from leadership?" → Decode Question.
"Know the facts but not how to frame them?" → Architect Answer.
"Same update, different audience?" → Reframe for Audience.
"Presenting and want to be ready for Q&A?" → Anticipate Follow-ups.

CASE STUDY: compact summary block.
Title: "Board Question Decoded"
Outcome: VP of Engineering decoded a board member's question about Q3 launch confidence as a competitive positioning concern, not a request for technical status. Answered in 90 seconds, anticipated all three follow-ups correctly.
Link: case-studies/board-question-decoded.md

FOOTER (full width): dark bar. Left: question-decoder-agent-definition.yaml. Right: v0.1.0.

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
