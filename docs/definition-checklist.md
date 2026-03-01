# Agent Definition Checklist

Quick reference for authoring `*-definition.yaml` files. Each agent definition has two zones: standard fields from [Oracle Agent Spec 26.1.0](https://github.com/oracle/agent-spec) and extensions under `x-agentlab`. For design rationale, see [handbook.md](handbook.md).

---

## Agent Spec Standard Zone

### Envelope

- `agentspec_version` — spec version this definition targets (e.g., `"26.1.0"`)
- `component_type: Agent`

### Identity

- `id` — kebab-case machine identifier (e.g., `culture-agent`)
- `name` — human-readable display name
- `description` — one sentence stating what the agent does and for whom
- `metadata`
  - `definition_version` — semver for the definition itself
  - `disclaimer` — educational/reference/production status
  - `tags` — discovery keywords
  - `responsibility` — single sentence: what the agent is accountable for

See [handbook: Agent Identity](handbook.md#agent-identity).

### System Prompt

- MUST / MUST NOT rules — hard behavioral constraints, not suggestions
- Named frameworks the agent draws from
- Output format declared inline (field names the agent must produce)
- Behavioral anchor — closing principle that guides ambiguous cases

### LLM Configuration

- `model_id` — specific model or `null` (framework chooses default)
- `default_generation_parameters` — `temperature`, `max_tokens`

### Inputs / Outputs

- Each input: `title`, `type`, `description`, optional `default`
- Each output: `title`, `type`, `description`
- Include `confidence` (high/medium/low) and `caveats` in outputs

### Tools

- Each tool: `component_type: ClientTool`, `id`, `name`, `description`
- Typed `inputs` and `outputs`
- `requires_confirmation` — boolean per tool
- `x-agentlab.risk` — low / medium / high
- `x-agentlab.how_to_use` — 1-2 sentence contextual guide: what to ask and what to do with the result

See [handbook: Tools, Skills, and Prompts](handbook.md#tools-skills-and-prompts).

### Specialized Agents

Personality variants that share the base agent's core logic.

- `component_type: SpecializedAgent`
- `agent.$component_ref` — references the base agent `id`
- `agent_specialization_parameters.additional_instructions` — tone and focus modifications
- `human_in_the_loop` — set independently per variant

### Flows

Each flow represents a skill the agent can execute.

- `component_type: Flow`, `id`, `name`, `description`
- Typed `inputs` and `outputs` per flow
- `x-agentlab.workflow_shorthand` — ordered step chain, each step references a prompt from the registry
- Reuse prompts across flows where the same reasoning step applies

See [handbook: Portable Agent Definitions](handbook.md#portable-agent-definitions).

### A2A Discovery

- `agent_card`
  - `protocol_version`
  - `capabilities` — list of flow IDs this agent advertises
  - `input_modes` / `output_modes` — MIME types

---

## x-agentlab Extensions Zone

### Prompt Registry

Each prompt is an atomic reasoning step used by one or more flows.

- `description` — what this prompt does
- `source` — path to the `.md` prompt file
- Typed `inputs` and `outputs`

### Validation

- `required_dimensions` — what the agent needs before producing a full response
- `on_incomplete` — behavior when input is missing (ask, don't guess)

See [handbook: Input Validation Gates](handbook.md#input-validation-gates).

### Output Constraints

- Per-field limits (sentence count, word count, item count)
- `total_word_limit` — ceiling for the entire response
- `hard_rule` — one-line forcing function for brevity

See [handbook: Output Constraints](handbook.md#output-constraints).

### Guardrails

- `input` — what the agent rejects (e.g., manipulation, stereotyping)
- `output` — what the agent always includes (e.g., caveats, citations)
- `resource` — runtime limits (e.g., `max_tool_calls`)

See [handbook: Guardrails](handbook.md#guardrails).

### Boundaries & Permissions

- `boundaries` — explicit "does not" statements (scope limits)
- `permissions` — explicit "is allowed to" statements (scope grants)

See [handbook: Permissions and Boundaries](handbook.md#permissions-and-boundaries).

### Escalation & Human-in-the-Loop

- `escalation_triggers` — conditions that require human handoff
- `human_in_the_loop_conditions` — when review, approval, or flagging applies

See [handbook: Human-in-the-Loop](handbook.md#human-in-the-loop).

### Memory

Four tiers, each with a defined scope.

- `conversation` — current session state
- `working` — task scratchpad (intermediate results)
- `persistent` — cross-session knowledge
- `shared` — data passed to or received from other agents

See [handbook: Memory Types](handbook.md#memory-types).

### Context

- `strategy` — one sentence: depth vs. breadth tradeoff
- `token_budget` / `reserve_for_references`
- `priority_order` — what gets loaded first when budget is tight
- `include` / `exclude` — what belongs in context and what does not

See [handbook: Context Engineering](handbook.md#context-engineering).

### Knowledge

- Reference files with `path`, `description`, `load_when` conditions
- `load_when` values: Always, conditional (e.g., "Relevant cultures requested"), On demand

### Assets

- Output templates the agent can generate
- `filename` pattern with variables (e.g., `{cultures}-briefing.md`)

### Quality

- Acceptance criteria as a checklist
- Each criterion is testable: "recommendations are actionable", not "output is good"

### Visual

- `visual/factsheet-prompt.md` — self-contained design prompt for Figma AI, v0.dev, or Claude artifacts
- Generates a one-pager factsheet with agent identity, skills, flow, frameworks, connections, guardrails
- Bundled into the web app and surfaced on the Canvas tab with copy-to-clipboard
