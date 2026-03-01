# Research Agent Factsheet Design Prompt

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

Agent name: "Research Agent"
Subtitle: "Find, evaluate, and synthesize information from multiple sources"
Badges: v0.1.0 | Agent | Reference Design

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Finds and synthesizes information on a specified topic from multiple
sources, returning structured findings with source citations. Gathers relevant
information, filters for credibility, synthesizes findings into structured
output, and cites all sources. Your research assistant, not your advisor.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Deep Research: Comprehensive multi-source research workflow. Tags: generate-queries, evaluate-source, extract-claims, synthesize, assess-confidence
- Quick Scan: Fast, shallow research for rapid orientation. Tags: generate-queries, extract snippets
- Fact Check: Verify a specific claim against multiple sources. Tags: parse claim, evaluate-source, extract-claims, verdict
- Compare Sources: Side-by-side analysis of multiple sources. Tags: fetch-url, evaluate-source, extract-claims, diff conflicts

PERSONALITIES: compact chips or badges, not stacked blocks.
- Executive: Bullet-point format, max 5 key points, lead with most actionable finding
- Detailed: Full methodology transparency, source evaluation rationale, conflicting findings analysis
- Educational: Explains terminology, provides analogies, structures from foundational to advanced

FLOW: decision tree or flowchart diagram.
Show the full pipeline: Input → Process steps → Output.
Use boxes and arrows, not text descriptions.
Topic + Scope → Generate Queries → Web Search → Evaluate Source (CRAAP) →
Filter (credibility >= medium) → Fetch Full Content → Extract Claims →
Synthesize → Assess Confidence → Output (summary, key_points, sources, confidence, gaps)
Include decision point: scope = broad → Quick Scan (skip credibility eval, use snippets only)
Include decision point: input = claim → Fact Check (targeted verification, verdict output)

FRAMEWORKS: visual diagram showing how frameworks relate to each other.
CRAAP Test (Currency, Relevance, Authority, Accuracy, Purpose) → Source Credibility Score
Source Type Hierarchy (primary → secondary → tertiary) → Evidence Weight
Cross-Reference Matrix (claim × source) → Agreement/Conflict Map
Show which skills use which frameworks:
Deep Research uses all three.
Fact Check uses CRAAP + Cross-Reference.
Compare Sources uses Source Type Hierarchy + Cross-Reference.

CONNECTIONS: node graph. This agent at center, connected agents around it.
Arrow direction shows data flow. Use accent border on self.
- Research Agent → Analysis Agent (findings for interpretation)
- Research Agent → Writing Agent (cited findings for content)
- Research Agent → Decision Agent (background context for recommendations)
- Coordinator Agent → Research Agent (parallel research tasks)
- Research Agent → Synthesis Agent → Report Agent (orchestrated pipeline)

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner (DOES): search web, evaluate credibility, synthesize findings, cite sources, note gaps
Outer (DOES NOT): analyze/interpret, make recommendations, hallucinate sources, access authenticated sources without approval
Include: every claim must have a source, max 50 tool calls, max 400 words output
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What do you need?" → branches to scenarios → each leads to a skill.
- "Quick orientation on a topic?" → Quick Scan
- "Deep dive with methodology?" → Deep Research (Detailed personality)
- "Is this claim true?" → Fact Check
- "How do these sources compare?" → Compare Sources
- "Executive briefing?" → Deep Research (Executive personality)

CASE STUDY: compact summary block. Title, one-line outcome, link.
"Quantum Computing in Finance" — Synthesized 12 sources in under 5 minutes,
identified 3 conflicting timeline predictions, confidence: medium.

FOOTER (full width): dark bar. Left: source of truth file. Right: version.
Left: research-agent-definition.yaml | Right: v0.1.0

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
