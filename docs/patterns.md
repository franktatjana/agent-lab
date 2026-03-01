# Agent Definition Patterns

Recurring structural patterns extracted from the 12 agent definitions. Use these as defaults when building new agents. For the section-by-section checklist, see [definition-checklist.md](definition-checklist.md). For design rationale, see [handbook.md](handbook.md).

---

## Flows

**Default: 4 flows per agent, 3-4 steps per flow.**

11 of 12 agents have exactly 4 flows. Corporate Navigator and Superhero have 5. Step counts per flow range 1-8, with 3-4 being the sweet spot. Flows with 7-8 steps (Research deep-research, Design Thinking full-sprint) represent comprehensive end-to-end workflows.

Flows are skills, not procedures. Each flow answers one question: "what can this agent do for me?" If a flow needs more than 5 steps, consider whether it's actually two flows composed.

## Tools

**Default: 3 tools per agent. Range 2-8. Two standard patterns plus extended toolsets.**

| Pattern | Tools | Used by |
|---------|-------|---------|
| Information-gathering | web-search, fetch-url, read-file | Research, Six Hats, Leadership Coach, Design Thinking, Culture |
| Conversational | ask-user, read-file, note-taking | Why, Question Decoder, Superhero, Storytelling, Generation |
| Extended | domain-specific tools beyond the base set | Corporate Navigator (8), Research (5), Why (5) |

`read-file` appears in 11 of 12 agents. Most agents use 3 tools. Corporate Navigator has the largest toolset (8 tools) with domain-specific tools for company profiles, employee reviews, community discussions, and outreach. Research and Why agents each have 5 tools.

Three risk levels are in use. Most tools are `risk: low` (no approval needed). `risk: medium` (may ask for approval) appears on tools like send-outreach and challenge-assumptions. `risk: high` (always asks for approval) appears on tools like submit-application and propose-root-cause where the output has real-world consequences.

Each tool includes an `x-agentlab.how_to_use` field: a 1-2 sentence contextual guide explaining what to ask and what to do with the result. This appears in the Flow tab's tool detail panels.

## Specialized Agents (Variants)

**Default: 3 variants. At least one is a "Coach."**

10 of 12 agents have exactly 3 variants. Question Decoder and Storytelling have 4. Superhero has 7 (Marvel archetypes as personas, a domain-specific exception).

The Coach variant appears in 8 of 12 agents, making it the most common personality mode. Other recurring archetypes: Executive/Strategic (6 agents), Facilitator (3 agents).

Each variant modifies two things:
- `additional_instructions`: 2-5 sentences adjusting tone and focus
- `human_in_the_loop`: set independently (Coach variants often set to `false`, Executive variants to `true`)

## Prompt Registry

**Default: 4-8 prompts per agent. Prompts reuse across flows.**

Range is 3-9. Agents with more flows or longer step chains have larger registries. Every prompt is used in at least one flow; no orphan prompts exist.

Prompt reuse is a design goal: `identify-dimensions` appears in 3 of Culture Agent's 4 flows. When two flows share a reasoning step, they share the prompt.

Each prompt entry has: `description`, `source` (path to `.md` file), typed `inputs`, typed `outputs`.

## Validation

**Default: 3-4 required dimensions. Identical on_incomplete behavior.**

All 12 agents enforce 3-4 required input dimensions before producing a full response. No agent permits partial execution.

Every agent uses the same `on_incomplete` template:

> State what's missing, provide a short preliminary analysis based on available information, and ask for clarification. Do not generate a full response from incomplete input.

This is framework-standard, not per-agent customization.

## Output Constraints

**Default: 250-400 word total limit. Per-field limits. One hard rule.**

| Budget | Agents |
|--------|--------|
| 250 words | Question Decoder, Superhero, Generation |
| 300 words | Why, Networking, Corporate Navigator, Storytelling, Leadership Coach, Design Thinking, Culture |
| 350-400 words | Six Hats, Research |

Per-field constraints follow a consistent formula: "X sentences max" or "max N items, one line each." The `hard_rule` field is a one-line forcing function. Four agents share the same hard rule: "If you cannot say it in one sentence, restructure your thinking." Domain-specific hard rules work better when the agent has a distinctive reasoning mode (e.g., Why Agent: "Stop drilling when you reach something you can actually fix").

## Guardrails

**Default: 3 sections (input, output, resource). Light but deliberate.**

- **Input**: 1-2 rejection criteria, focused on ethical boundaries (reject manipulation, deception, stereotyping)
- **Output**: 1-2 quality checks (include caveats, distinguish perspectives, cite sources)
- **Resource**: `max_tool_calls` ranging 10-50 (modal: 20-30)

Research Agent has the highest tool limit (50). Superhero Agent has the lowest (10). No agent permits unlimited tool usage.

## Memory

**Default: 4 tiers. Identical taxonomy across all agents.**

| Tier | Scope | Typical entries |
|------|-------|-----------------|
| `conversation` | Current session | 1 item: session state description |
| `working` | Task scratchpad | 2-3 items: intermediate results |
| `persistent` | Cross-session | 2-3 items: learned patterns, preferences |
| `shared` | Cross-agent | 1-2 items: handoff data |

All 12 agents implement all 4 tiers. The taxonomy is framework-standard. Content varies by domain but structure does not.

## Context Strategy

**Default: 8000 token budget. 2000-4000 reserved for references.**

| Budget | Agents | Why |
|--------|--------|-----|
| 3000-4000 | Superhero, Generation | Small problem space, metaphor-driven |
| 8000 | Why, Question Decoder, Six Hats, Research, Storytelling | Standard analytical agents |
| 10000 | Networking, Corporate Navigator, Leadership Coach, Design Thinking, Culture | Information-heavy, multi-stakeholder |

Priority order is invariant across all agents:
1. System prompt with identity and constraints
2. Current task input and context
3. Working memory (intermediate results)
4. Reference frameworks
5. Examples (if needed)

## Knowledge References

**Default: 2-4 reference files. One always-loaded, one on-demand.**

- **Always loaded**: core framework file (e.g., `frameworks.md`, `leadership-frameworks.md`)
- **Conditional**: domain-specific files loaded when relevant skill is invoked
- **On demand**: `glossary-and-resources.md` (present in 11 of 12 agents)

Knowledge loading is conservative. Always-loaded files are framework definitions (small, high signal). Heavy content loads on demand. This follows the handbook principle: "load just-in-time, not upfront."

## System Prompt

**Default: MUST (4-7 items) + MUST NOT (3-6 items) + output format + behavioral anchor.**

MUST clauses emphasize process: "understand before acting", "cite sources", "acknowledge limitations." MUST NOT clauses set ethical boundaries: "don't skip steps", "don't manipulate", "don't assume malice."

The output format is declared inline in the system prompt (field names the agent must produce). The behavioral anchor is a closing principle for ambiguous cases.

## LLM Configuration

**Default: temperature 0.7, max_tokens 1024.**

| Temperature | Agents | Reasoning |
|-------------|--------|-----------|
| 0.4 | Research | Factual precision, low variance |
| 0.7 | 10 of 12 | Standard analytical/advisory balance |
| 0.8 | Superhero | Creative reframing, higher variance |

Temperature correlates with agent function: factual agents run cooler, creative agents run warmer. `max_tokens: 1024` is universal.

## Visual Factsheets

**Default: 1 design prompt per agent at `visual/factsheet-prompt.md`.**

All 12 agents include a self-contained design prompt that generates a one-pager factsheet when pasted into Figma AI, v0.dev, or Claude artifacts. Each prompt follows the same template (layout constraints, steel blue palette, color tokens, header/footer format) with agent-specific content: identity, skills, personalities, flow diagram, frameworks, connections, guardrails, decision tree, and case study.

The prompts are bundled into `definitions.json` as `designPrompts` and surfaced on the Canvas tab with a copy-to-clipboard button.

## Anti-Patterns

Patterns that don't appear in any definition, suggesting they should be avoided:

- **God-agent**: no agent has more than 5 flows; most have 2-3 tools, with domain-heavy agents topping out at 8
- **Orphan prompts**: every prompt is referenced by at least one flow
- **Unlimited resources**: every agent caps `max_tool_calls`
- **Optional validation**: no agent skips input validation
- **Unstructured output**: every agent defines per-field constraints
- **Missing caveats**: every agent includes caveats or limitations in outputs
