# Tutorial: Building an Agent from Idea to Definition

This tutorial walks through creating a complete agent, from a one-line idea to a portable YAML definition with prompts, examples, and references. The Culture Agent serves as the reference implementation throughout.

**Prerequisites**: Read the [definition checklist](definition-checklist.md) for the section-by-section structure and [patterns.md](patterns.md) for defaults and recurring conventions.

---

## Step 1: Start with the Agent Markdown

Every agent starts as a markdown file: `agents/{agent-id}/{agent-id}.md`. This is the source of truth, a human-readable spec that captures identity, skills, guardrails, and domain knowledge before any YAML exists.

The markdown answers five questions:

1. **What does this agent do?** One sentence. If you need two, the agent is doing too much.
2. **What skills does it have?** Each skill becomes a flow in the definition.
3. **What personality variants make sense?** Each variant becomes a specialized agent.
4. **What knowledge does it need?** Each knowledge area becomes a reference file.
5. **What are its boundaries?** What it explicitly does not do.

Culture Agent example: "Translates communication between parties from different cultural backgrounds, ensuring messages land with intended meaning while respecting cultural codes and norms."

See [handbook: Agent Identity](handbook.md#agent-identity) for naming rules and identity patterns.

## Step 2: Create the Directory Structure

```
agents/{agent-id}/
├── {agent-id}.md                    # Source of truth
├── {agent-id}-definition.yaml       # Portable spec (this tutorial)
├── prompts/                         # One .md file per prompt
├── references/                      # Domain knowledge files
├── examples/                        # Input/output YAML fixtures
├── skills/                          # Skill descriptions (optional)
├── personalities/                   # Variant descriptions (optional)
├── case-studies/                    # Narrative scenarios (optional)
└── visual/                          # Factsheets, images (optional)
```

Required: the `.md`, the `-definition.yaml`, `prompts/`, `references/`. Everything else adds depth but isn't structurally necessary.

## Step 3: Write the Definition YAML

The definition has two zones. The Agent Spec Standard Zone uses Oracle Agent Spec 26.1.0 fields. The `x-agentlab` Extensions Zone adds what the standard doesn't cover yet.

### 3a: Envelope and Identity

```yaml
agentspec_version: "26.1.0"
component_type: Agent

id: culture-agent
name: Culture Agent
description: >
  Translates communication between parties from different cultural
  backgrounds, ensuring messages land with intended meaning.

metadata:
  definition_version: "0.2.0"
  disclaimer: >
    Reference design for educational and demonstration purposes.
  tags:
    - communication
    - cross-cultural
  responsibility: >
    Identify cultural dimensions, explain interpretation differences,
    suggest adapted alternatives, prevent misunderstandings.
```

The `id` is the machine identifier (kebab-case). The `name` is what users see. The `responsibility` field is the one-sentence answer to "what is this agent accountable for?"

### 3b: System Prompt

Structure it as MUST / MUST NOT rules, not suggestions. Name the frameworks. Declare the output format. Close with a behavioral anchor.

```yaml
system_prompt: |
  You are a Culture Agent. Your job is to help parties from different
  cultural backgrounds communicate effectively.

  You MUST:
  - Explain cultural context behind communication styles
  - Identify potential misunderstandings before they happen
  - Cite cultural frameworks (Hofstede, Meyer, Hall) where relevant

  You MUST NOT:
  - Stereotype individuals based on cultural background
  - Present cultural patterns as absolute rules
  - Judge cultural practices as superior or inferior

  Output format: cultural_context, potential_friction, recommendations,
  reframed_message.
```

**Pattern**: 4-7 MUST items, 3-6 MUST NOT items. See [patterns: System Prompt](patterns.md#system-prompt).

### 3c: LLM Configuration

```yaml
human_in_the_loop: true

llm_configuration:
  model_id: null
  default_generation_parameters:
    temperature: 0.7
    max_tokens: 1024
```

**Pattern**: temperature 0.7 for advisory agents, 0.4 for factual, 0.8 for creative. `max_tokens: 1024` is standard. See [patterns: LLM Configuration](patterns.md#llm-configuration).

### 3d: Inputs and Outputs

```yaml
inputs:
  - title: source_culture
    type: string
    description: Culture of the sender
  - title: target_culture
    type: string
    description: Culture of the receiver
  - title: context
    type: string
    description: Business, social, negotiation, etc.

outputs:
  - title: cultural_context
    type: object
    description: Key cultural traits with relevant dimensions
  - title: potential_friction
    type: array
    description: Likely misunderstanding points (max 3)
  - title: confidence
    type: string
    description: "high | medium | low"
  - title: caveats
    type: array
    description: Important limitations and individual variation notes
```

Always include `confidence` and `caveats` in outputs.

### 3e: Tools

```yaml
tools:
  - component_type: ClientTool
    id: web-search
    name: Web Search
    description: Research cultural norms and current events
    requires_confirmation: false
    inputs:
      - title: query
        type: string
    outputs:
      - title: results
        type: array
    x-agentlab:
      risk: low
      how_to_use: >
        Ask about cultural norms, business etiquette, or current events
        for a specific country. Use results to ground recommendations
        in up-to-date context.
```

**Pattern**: 3 tools is the default. Information agents get web-search + fetch-url + read-file. Conversational agents get ask-user + read-file + note-taking. Domain-heavy agents may have more. Each tool includes `how_to_use` with contextual guidance for the user. See [patterns: Tools](patterns.md#tools).

### 3f: Specialized Agents (Variants)

```yaml
specialized_agents:
  - component_type: SpecializedAgent
    id: culture-agent-business
    name: Culture Agent (Business)
    description: Corporate negotiations, formal business contexts
    agent:
      $component_ref: culture-agent
    agent_specialization_parameters:
      additional_instructions: |
        Focus on hierarchy, decision-making, meeting etiquette,
        negotiation styles, contract interpretations.
        Tone: Professional, practical, focused on outcomes.
      human_in_the_loop: true
```

**Pattern**: 3 variants. Include at least one Coach variant. Each variant is 2-5 sentences of `additional_instructions` modifying tone and focus. Set `human_in_the_loop` independently. See [patterns: Specialized Agents](patterns.md#specialized-agents-variants).

### 3g: Flows

Each flow is a skill. Define typed I/O and a `workflow_shorthand` step chain.

```yaml
flows:
  - component_type: Flow
    id: cultural-bridge
    name: Cultural Bridge
    description: Adapt a message for a target culture
    inputs:
      - title: source_culture
        type: string
      - title: message
        type: string
    outputs:
      - title: reframed_message
        type: string
    x-agentlab:
      workflow_shorthand:
        - step: 1
          prompt: identify-dimensions
          input: source_culture, context
          description: Map source culture to framework dimensions
        - step: 2
          prompt: identify-dimensions
          input: target_culture, context
          description: Map target culture to framework dimensions
        - step: 3
          prompt: detect-friction
          input: source_dimensions, target_dimensions, message
          description: Find potential misunderstanding points
        - step: 4
          prompt: reframe-message
          input: friction_points, target_culture, message
          description: Adapt message for target culture
```

Note how `identify-dimensions` is reused in steps 1 and 2 with different inputs. Prompt reuse keeps the registry small and the logic consistent.

**Pattern**: 4 flows, 3-4 steps each. See [patterns: Flows](patterns.md#flows).

### 3h: A2A Discovery

```yaml
a2a:
  agent_card:
    protocol_version: "0.1"
    capabilities:
      - cultural-bridge
      - culture-comparison
      - meeting-prep
      - conflict-mediation
    input_modes:
      - text/plain
      - application/json
    output_modes:
      - application/yaml
      - application/json
```

Capabilities list the flow IDs this agent advertises to other agents.

## Step 4: Write the x-agentlab Extensions

### 4a: Prompt Registry

One entry per prompt. Each points to a `.md` file in `prompts/`.

```yaml
x-agentlab:
  prompt_registry:
    identify-dimensions:
      description: Map a culture to Hofstede and Meyer dimensions
      source: prompts/identify-dimensions.md
      inputs:
        - title: culture
          type: string
      outputs:
        - title: dimension_scores
          type: object
```

Then write the actual prompt file at `prompts/identify-dimensions.md`. Keep prompts atomic: one job, clear inputs/outputs, under 3k tokens.

### 4b: Validation

```yaml
  validation:
    required_dimensions:
      - name: source_culture
        description: Which country or region?
      - name: target_culture
        description: Who are they communicating with?
      - name: specific_behavior
        description: What exactly is happening?
    on_incomplete: >
      State what's missing, provide a short preliminary analysis
      based on available information, and ask for clarification.
      Do not generate a full response from incomplete input.
```

**Pattern**: 3-4 required dimensions. The `on_incomplete` text is framework-standard. See [patterns: Validation](patterns.md#validation).

### 4c: Output Constraints

```yaml
  output_constraints:
    cultural_context: "2-3 sentences max."
    potential_friction: "Max 3 items, one line each."
    recommendations: "Top 3 actions, ranked by impact."
    total_word_limit: 300
    hard_rule: "If you cannot say it in one sentence, restructure."
```

**Pattern**: 250-400 word total limit. Per-field caps. One hard rule. See [patterns: Output Constraints](patterns.md#output-constraints).

### 4d: Guardrails, Boundaries, Permissions

```yaml
  guardrails:
    input:
      - Reject requests for stereotyping or manipulation
    output:
      - Always include caveats about individual variation
    resource:
      - max_tool_calls: 30

  boundaries:
    - Does not make decisions for parties
    - Does not provide legal or HR guidance

  permissions:
    - Reference Hofstede, Meyer, and Hall models
    - Suggest communication strategies
```

### 4e: Escalation and HITL

```yaml
  escalation_triggers:
    - Request involves legal or HR implications
    - High-stakes negotiation requiring human expert

  human_in_the_loop_conditions:
    - Review recommended for conflict mediation outputs
    - Approval required before use in formal negotiations
```

### 4f: Memory, Context, Knowledge

```yaml
  memory:
    conversation: "Current bridging session state"
    working:
      - Identified dimensions for each culture
      - Detected friction points
    persistent:
      - Previously analyzed culture pairs
    shared:
      - Cultural context passed to other agents

  context:
    strategy: "Cultural nuance requires depth over breadth"
    token_budget: 10000
    reserve_for_references: 4000
    priority_order:
      - System prompt
      - Source and target culture profiles
      - Specific message or situation
      - Framework references
      - Examples (if needed)

  knowledge:
    references:
      - path: references/frameworks.md
        description: Hofstede, Meyer, Hall frameworks
        load_when: Always
      - path: references/glossary-and-resources.md
        description: Domain terms and links
        load_when: On demand
```

### 4g: Quality

```yaml
  quality:
    - Recommendations are actionable and specific
    - Cultural patterns cite recognized frameworks
    - Caveats about individual variation always included
    - No stereotyping or cultural judgment
```

Each criterion should be testable. "Output is good" is not a criterion. "Recommendations are actionable" is.

## Step 5: Write the Supporting Files

### Prompts (`prompts/*.md`)

One file per prompt registry entry. Each prompt should be self-contained: it receives specific inputs and produces specific outputs. Keep under 3k tokens.

### References (`references/*.md`)

Domain knowledge files. One always-loaded framework reference, one on-demand glossary, and optional domain-specific files with `load_when` conditions.

### Examples (`examples/*.yaml`)

Input/output fixtures demonstrating each flow. One example per flow at minimum. Use multi-document YAML (separated by `---`) for complex scenarios with multiple reframes.

## Step 6: Validate

Run the build to verify bundling:

```bash
cd web && npm run build
```

The bundle script (`scripts/bundle-definitions.mjs`) collects the definition, prompts, and examples into `public/definitions.json`. The Specification tab validates:

- **Schema checks**: required fields present, types correct
- **Completeness checks**: all prompts referenced by flows exist in registry
- **Cross-reference checks**: flow step prompts match registry entries

## Summary

| Step | Output | Time |
|------|--------|------|
| 1. Agent markdown | `{agent-id}.md` | Define identity and skills |
| 2. Directory structure | Folders created | Scaffold |
| 3. Definition YAML | `{agent-id}-definition.yaml` | Core spec |
| 4. x-agentlab extensions | Extensions in same YAML | Guardrails, memory, context |
| 5. Supporting files | `prompts/`, `references/`, `examples/` | Content |
| 6. Validate | Build passes, Spec tab green | Verify |
