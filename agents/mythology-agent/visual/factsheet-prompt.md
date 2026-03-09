# Mythology Agent Factsheet Design Prompt

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
- Deep indigo and warm gold tones. Ancient, resonant, wise.
- Primary accent: deep indigo (#3D348B). Secondary: warm gold (#C5A54E).
- Background: off-white (#FAFAF5) with warm gray surfaces (#F0EDE8, #E5E0D8).
- Borders: warm gray (#C9C2B6). Text: deep charcoal (#1A1A2E).
- No bright neon. No cold blues. Think illuminated manuscript, not tech dashboard.
- Monospace (JetBrains Mono) for data fields, parameters, code-like elements.
- Serif (Merriweather or Georgia) for labels and descriptions.
- Tight spacing. Every pixel carries information.

HEADER (full width): name (24px bold), subtitle (13px muted),
version/type/maturity badges (right-aligned). Indigo bottom border.

Agent name: "Mythology Agent"
Subtitle: "Reframe workplace challenges through mythological archetypes from world traditions"
Badges: v0.1.0 | Agent | Reference Design

CONTENT (use columns, grids, or whatever layout fits one page best):

IDENTITY: Reframes workplace challenges through mythological archetypes drawn
from world traditions: Greek, Norse, Slavic, Japanese, Hindu. Matches a user's
situation to the right myth, then uses the myth's internal logic to reveal
options invisible from inside the current frame. The myth is a mirror, not an
escape. The recognition itself shifts perspective.

SKILLS: as a visual grid or matrix, not a vertical list.
Each skill shows name, description, and prompt tags.
- Match Archetype: Find the mythological archetype that best mirrors a workplace situation. Tags: match-archetype
- Reframe Through Myth: Map circumstances onto the myth's narrative structure to shift perspective. Tags: reframe-through-myth
- Reveal Options: Use myth logic to surface options invisible from the current frame. Tags: reveal-options
- Mythic Counsel: Full pipeline: match, reframe, reveal, synthesize into cohesive counsel. Tags: match-archetype, reframe-through-myth, reveal-options, craft-mythic-counsel (combined)

PERSONALITIES: compact chips or badges, not stacked blocks.
Show as personality badges with their domain:
- Oracle (The Seer): Measured wisdom, precise insights, pattern recognition, "The words land because they are precise"
- Sage (The Scholar): Scholarly depth, cultural context, why myths endure, "Ground every insight in tradition"
- Bard (The Storyteller): Vivid narrative, dramatic engagement, making myths feel immediate, "Drama serves insight"

FLOW: decision tree or flowchart diagram.
Show the full pipeline: Input → Process steps → Output.
Use boxes and arrows, not text descriptions.
Situation + Context + Tradition Preference →
Select Personality (oracle / sage / bard) →
Decision point: "What do you need?"
  → Quick pattern match → Match Archetype flow → Output: archetype_match, alternative_matches
  → Perspective shift → Reframe Through Myth flow → Output: situation_mapping, reframed_perspective
  → New options → Reveal Options flow → Output: options_revealed, transformation_path
  → Full counsel → Mythic Counsel flow → Output: archetype_match, situation_mapping, reframed_perspective, narrative

FRAMEWORKS: visual diagram showing how frameworks relate to each other.
Jungian Archetypes (Hero, Shadow, Mentor, Trickster, Threshold Guardian) → psychological depth
Campbell's Monomyth (12 stages) → journey mapping, stage identification
Cross-Cultural Taxonomy → archetype matching by pattern type
  Repeating Cycle: Sisyphus, Penelope, Ragnarok, Samsara, Amaterasu
  Threshold: Theseus, Odin, Vasilisa, Momotaro, Rama
  Impossible Choice: Arjuna, Odysseus, Tyr, Forty-Seven Ronin, Ilya Muromets
  Transformation: Phoenix, Baldur, Kintsugi, Shiva, Firebird
  Knowledge/Hubris: Prometheus, Icarus, Loki, Ravana, Urashima Taro
Show connections:
Cross-Cultural Taxonomy → identifies the archetype
Campbell's stages → locates the user in their journey
Jungian framework → explains why the pattern resonates

CONNECTIONS: node graph. This agent at center, connected agents around it.
Arrow direction shows data flow. Use accent border on self.
- Storytelling Agent ← Mythology Agent (mythic reframe becomes presentation narrative)
- Superhero Agent ← Mythology Agent (when pop culture resonates better)
- Why Agent → Mythology Agent (root cause becomes mythic pattern)
- Sensemaking Agent → Mythology Agent (system map becomes mythic narrative)

GUARDRAILS: visual boundary diagram, not just a list.
Show what the agent DOES (inner circle) vs. what it does NOT do (outer boundary).
Inner (DOES): match archetypes across traditions, map situations onto myth structure, reveal hidden options through myth logic, provide cultural context, ground insights in action, respect source traditions
Outer (DOES NOT): provide therapy or mental health treatment, present mythology as spiritual guidance, replace professional career coaching, trivialize cultural traditions, force parallels that don't fit, conflate distinct traditions, mock users' situations
Include: every insight must lead to a concrete action, max 10 tool calls, max 350 words output
Make it clear these are hard constraints, not suggestions.

WHEN TO USE: decision tree.
"What's your situation?" → branches to scenarios → each leads to a skill + tradition.
- "Stuck in a repeating pattern?" → Match Archetype (Greek: Sisyphus, Hindu: Samsara)
- "New to a complex organization?" → Reframe Through Myth (Greek: Theseus)
- "Facing an impossible choice?" → Mythic Counsel (Hindu: Arjuna)
- "Leading through transformation?" → Reveal Options (multi-tradition: Phoenix, Shiva)
- "Ambitious initiative with risk?" → Match Archetype (Greek: Prometheus, Icarus)
- "Navigating political complexity?" → Reframe Through Myth (Slavic: Vasilisa)

CASE STUDY: compact summary block. Title, one-line outcome, link.
"The Sisyphus Cycle", Engineering VP reframed four platform migrations as
Sisyphus's boulder, shifted from "how to succeed at migration" to "why does
this pattern exist," led to modular architecture that broke the cycle.

FOOTER (full width): dark bar. Left: source of truth file. Right: version.
Left: mythology-agent-definition.yaml | Right: v0.1.0

Color tokens: bg #FAFAF5, surface #F0EDE8, surfaceAlt #E5E0D8,
border #C9C2B6, text #1A1A2E, secondary #2D2D44, muted #7A7486,
accent #3D348B, accentBg #EEEDFA, accentBorder rgba(61, 52, 139, 0.2),
gold #C5A54E, goldBg #FAF6EC, dark #1A1A2E, darkText #F0EDE8, darkMuted #9A92A8.
```

## Reusing for Other Agents

1. Copy this prompt
2. Replace agent-specific content (skills, frameworks, connections, guardrails)
3. Adjust accent color for the new agent's identity
4. Generate in Figma AI for best results, v0.dev for quick renders
