# Agent Systems Handbook

## TL;DR: Core Principles

1. **Define by responsibility, not capability**: "Triage agent" (accountable for routing) not "classifier agent" (describes a tool)
2. **One sentence identity**: If you can't describe what the agent does in one sentence, it's doing too much
3. **Prompts are code**: Version control, test, document. Prompt drift kills quality
4. **Atomic over monolithic**: Small prompts that compose > big prompts that do everything
5. **Prompt quality = clear I/O**: Define inputs, outputs, and success criteria. If you can't test it, it's not ready
6. **Skills compose prompts**: Skills are workflows; prompts are building blocks
7. **Load knowledge just-in-time**: Don't stuff context; load references when the skill needs them
8. **Constraints as hard rules**: "Must never" not "prefers not to"
9. **Separate concerns**: Gather ≠ analyze ≠ decide ≠ execute
10. **Design for failure**: Every agent fails. Specify what happens when it does
11. **Human oversight is essential**: Automation serves humans, not replaces them

For quick dos/don'ts, see [lessons-learned.md](lessons-learned.md).

**Note:** This handbook synthesizes guidance from multiple sources (see [bookmarks.md](bookmarks.md)) with practical patterns derived from experience. Where specific frameworks or taxonomies appear without citation, they represent useful mental models rather than established industry standards.

---

## Part 1: Foundation

### When to Use Agents

Not every workflow needs an agent. Before investing in agent design, validate that the problem actually requires LLM-driven autonomy. Many tasks are better served by deterministic automation, rule engines, or simple API integrations. Agents add value when traditional approaches hit a ceiling.

Three conditions signal that an agent approach is warranted:

- **Complex decision-making**: workflows involving nuanced judgment, exceptions, or context-sensitive decisions where hardcoding every branch is impractical
- **Difficult-to-maintain rules**: systems that have become unwieldy due to extensive rulesets, making updates costly or error-prone
- **Heavy reliance on unstructured data**: scenarios requiring natural language interpretation, document extraction, or conversational interaction

If none of these apply, a deterministic solution likely suffices. If one or more apply, an agent can handle the ambiguity and variation that traditional automation cannot.

### Agent Identity

The fundamental answer to "what is this agent for" in one sentence. A clear identity prevents scope creep, enables focused development, and makes it obvious when an agent is being asked to do something outside its purpose.

**Why it matters:** A vague identity leads to agents that try to do everything and do nothing well.

- Clear boundary → no scope creep
- Defined role → off-scope requests stand out
- Single focus → testable behavior

**Good identity:** "Market research analyst who produces competitive landscape reports for B2B SaaS companies."

**Bad identity:**

> "Helpful assistant that does research." Too vague, describes every agent

A good identity follows these rules:

- One sentence, no qualifications
- Defined by responsibility (what it's accountable for), not capability (what tools it has)
- Non-overlapping with other agents: capabilities can be shared, responsibilities should not
- Versioned in metadata, not in the name

### Naming Conventions

Consistent naming makes agents discoverable and their purpose clear at a glance. A good name tells you what the agent is responsible for without reading its spec.

Follow these conventions:

- Use kebab-case: `research-agent`, `triage-agent`
- Suffix `-agent` for role/responsibility, `-expert` for user-facing capability
- Be specific: `synthesis-agent` > `helper`
- Version in metadata, not names: `research-agent` with `version: 0.2.0` > `research-agent-v2`

---

## Part 2: Capabilities

### Tools, Skills, and Prompts

These terms get used interchangeably but mean different things. Tools are external services the agent calls. Skills are composed workflows. Prompts are the actual instructions. Capabilities are abstract categories.

| Concept | What it is | Example |
|---------|------------|---------|
| **Tool** | External service/API | Web search, database query, MCP server |
| **Skill** | Composed workflow using multiple steps | "deep-research" = search → filter → fetch → synthesize |
| **Prompt** | Instructions sent to the LLM | The actual text implementing a capability |
| **Capability** | Abstract category | Retrieval, analysis, generation |

**Tool types:**

- **Retrieval**: fetch information (search, queries, file reads)
- **Action**: change state (send email, create file, update record)
- **Computation**: process data (code execution, calculations)

**When to use skills vs prompts:**

- Use skills when behavior involves multiple steps or needs naming for reuse
- Skip skills when the prompt is self-contained: adding a skill layer just duplicates it

**Skill types by durability:**

Not all skills age the same way. Understanding which type you're building determines your testing strategy and maintenance burden.

- **Capability uplift**: encodes techniques the base model cannot reliably perform on its own. These skills become less necessary as models improve, making regular benchmarking against the base model essential to detect obsolescence. If the base model matches the skill's output quality, the skill is dead weight.
- **Encoded preference**: sequences the model's existing capabilities according to your specific workflow. More durable because they encode *your* process, not a workaround for model limitations. Still require validation that they maintain fidelity to your actual workflow as it evolves.

### Model Selection

Different tasks within a single agent workflow have different complexity profiles, and not every step requires the most capable model. A simple retrieval or intent classification task may be handled by a smaller, faster model, while harder tasks like deciding whether to approve a refund benefit from a more capable one.

**Strategy: start high, optimize down.**

1. Build the prototype with the most capable model for every task to establish a performance baseline
2. Set up evals to measure that baseline objectively
3. Swap in smaller models task-by-task to see where they still achieve acceptable results
4. Optimize for cost and latency only after accuracy targets are met

This avoids prematurely limiting the agent's abilities. When a smaller model fails on a specific task, you know exactly where the capability boundary is. When it succeeds, you save cost and latency without sacrificing quality.

### Composable Prompts

Large monolithic prompts are hard to test, debug, and maintain. Small prompts that do one thing well can be combined into complex behaviors. Think functions, not scripts.

**Principles:**

- Single responsibility: one job per prompt
- Clear interfaces: defined inputs, predictable outputs
- Small: short prompts enable fluid orchestration; long prompts create bottlenecks
- Testable: if you can't test it in isolation, it's too big

**Example structure:**

```yaml
prompt:
  name: evaluate-source
  purpose: Assess credibility of a single source
  inputs:
    - url: string
    - claim: string (optional)
  outputs:
    - credibility_score: high | medium | low
    - reasoning: string
    - red_flags: list
```

**Anti-pattern:** 5000-token prompt covering every scenario. Dilutes attention, wastes context, impossible to test.

### Discovery Questions

Agents often receive incomplete requests. Instead of guessing or failing, they should ask clarifying questions. Tier questions by importance: some block execution, others improve quality, some are nice-to-have.

**Tiers:**

- **Tier 1**: Blocks execution. Cannot proceed without answer.
- **Tier 2**: Improves quality but has reasonable defaults.
- **Tier 3**: Nice-to-have context the agent can work around.

**Good discovery question:** "Do you want the output as a summary paragraph, bullet points, or structured JSON?"

**Bad discovery question:**

> "What format do you want?" Too vague

### Input Validation Gates

Agents that generate full responses from incomplete input produce low-quality, generic output. A validation gate checks the user's input for required dimensions before the agent commits to a full response. This is different from discovery questions: discovery questions are asked before execution, validation gates are built into the prompt itself.

Every agent should define what it needs to produce quality output. When input is incomplete, the agent should:

1. State what is missing
2. Provide a short preliminary analysis based on what it has
3. Ask the user to clarify the missing items
4. Not generate a full response until the input is sufficient

**Validation rules are agent-specific.** A culture agent needs source culture, target culture, specific behavior, and context. A research agent needs topic, scope, and audience. Define these as a checklist the agent runs before producing output.

**Example validation section in a prompt:**

```text
Before generating output, check the user situation for:
1. Source culture (which country/region?)
2. Target culture (who are they communicating with?)
3. Specific behavior (what exactly is happening?)
4. Context (business relationship, reporting structure)

If any are missing:
→ State what is missing
→ Provide a SHORT preliminary analysis based on what you have
→ End with: "To sharpen this analysis, please clarify: [list]"

Do NOT generate a full response from incomplete input.
```

**Key principle:** Validation prevents the agent from guessing its way to a confident-sounding but wrong answer. It's better to ask than to hallucinate context.

### Output Constraints

Agents default to verbose output. Without explicit constraints, an LLM will produce 500-800 words when 150-200 would deliver the same value. Output constraints define field-by-field structure with word limits, forcing the agent to distill rather than expand.

Output constraints are distinct from output format (YAML, markdown, text). Format defines shape; constraints define density.

**A good output constraint block includes:**

- Named fields with sentence/word limits per field
- A total word cap for the entire response
- A distillation rule (e.g., "if you can't say it in one sentence, restructure")

**Example:**

```text
cultural_context: 2-3 sentences max. Name the cultural dimension at play.
potential_friction: Bullet list, max 3 items, one line each.
recommendations: Top 3 actions only, ranked by impact. One sentence each.
reframed_message: Max 5 sentences. Ready to send.

Total output must not exceed 300 words.
Hard rule: If you cannot say it in one sentence, restructure your thinking.
```

**Why this matters:**

- Concise output → higher read rate → more value delivered
- Forced ranking → agent must prioritize, not list everything
- Word caps → prevents context dumping disguised as thoroughness
- Field structure → consistent, parseable, comparable across runs

**Anti-patterns:**

- "Be concise" without numbers (ignored by the model)
- Word limits without field structure (agent front-loads one section)
- No total cap (individual field limits still produce long output)

### Knowledge Bases

A system prompt tells an agent what to *be*. A knowledge base tells it what to *know*.

**Types of reference content:**

- **Checklists**: procedural "how to do X" (security review checklist, code quality checklist)
- **Frameworks**: mental models for analysis (Hofstede dimensions, OWASP categories)
- **Reference data**: domain facts, lookup tables, standards
- **Examples**: what good and bad look like in practice

**Loading pattern:** Skill activates → Runtime loads specified references → Prompt directs agent to apply the reference → Agent has both knowledge and directive

**Key principle:** Load selectively. A culture agent preparing for a German-Japanese meeting loads Hofstede dimensions and communication checklist, not the conflict mediation framework.

---

## Part 3: Context

### Memory Types

Memory determines what an agent can recall and when. Choose the right type for each piece of information: session context stays in conversation memory, learned facts go in persistent memory, coordination state belongs in shared memory.

| Type | Scope | Example |
|------|-------|---------|
| **Conversation** | Current session | What was said in this chat |
| **Working** | Current task | Intermediate results, scratchpad |
| **Persistent** | Cross-session | User preferences, learned facts |
| **Shared** | Multi-agent | Coordination state, handoff context |

**Design questions:**

- What does the agent need to remember vs look up?
- What happens when memory contradicts current input?
- Who owns shared memory updates?

### Context Engineering

Context engineering is about finding the smallest set of high-signal tokens that maximize the likelihood of desired outcomes. Context is a finite resource with an "attention budget": every new token depletes it, and models degrade as context grows (context rot).

**Core principle:** "Informative, yet tight." Curate aggressively: include what the agent needs for this specific task, exclude everything else.

**Components:**

- System prompt: identity, rules, constraints
- Examples: few-shot demonstrations
- Retrieved content: dynamic information from tools/memory
- Conversation history: prior turns (full, summarized, or windowed)
- Task state: progress and intermediate results

**Design considerations:**

- **Ordering matters**: LLMs attend differently to beginning, middle, end. Critical instructions go first and last.
- **Structure helps**: XML tags, JSON, markdown headers help parsing. Raw dumps cause confusion.
- **Relevance filtering**: Not everything available should be included. Irrelevant context dilutes attention.
- **Graceful degradation**: Design for when context fills up.
- **Right altitude**: Balance specificity with flexibility. Avoid both brittle hardcoded logic and vague guidance that assumes shared context.

**Just-in-time loading:**

Replace pre-processing with runtime exploration. Use tools to load data on demand, enabling progressive disclosure through incremental discovery. Hybrid approaches combine upfront retrieval for speed with autonomous exploration for depth.

**Compaction strategies:**

When context fills up, compress strategically:

1. Summarize conversation history, preserving architectural decisions and critical details
2. Discard redundant information
3. Restart with compressed context
4. Use structured note-taking (external files) to maintain coherence across resets

**Multi-agent context:**

Delegate focused tasks to specialized subagents with clean context windows. Coordinators receive condensed summaries (1-2k tokens), not full transcripts.

### State and Checkpoints

Long-running agents fail. Networks drop, APIs timeout, context fills up. Without checkpointing, you lose all progress. Design for resumption from the start.

- **Checkpointing**: save state at defined points for resumption after failure
- **Session bridging**: hand off state between runs (summaries, state files, handoff docs)
- **State ownership**: who reads, writes, and resolves conflicts

---

## Part 4: Behavior

### Communication

How an agent talks shapes how users perceive it. A triage agent should be terse and efficient; a coaching agent should be warm and explanatory. Match voice to role and audience.

- **Voice**: matches role and audience. Triage agent: terse, technical. Coaching agent: warm, explanatory.
- **Uncertainty handling**: false confidence erodes trust; endless hedging is useless. Design explicitly for "I don't know."
- **Agent-to-agent**: consistent formats, clear metadata, explicit confidence signals. Loose contracts cause integration failures.

### Permissions and Boundaries

Every agent needs two complementary definitions: what it is allowed to do (permissions) and what it must not do (boundaries). Permissions define the positive scope of authority, the actions, data sources, and capabilities the agent can use. Boundaries define the hard limits, the domains and actions the agent is excluded from. Together they form a complete scope contract that prevents both overreach and underuse.

**Permissions** answer "what can this agent do?":

- Which data sources and tools the agent may access
- Which types of analysis or recommendations it may produce
- Which frameworks or models it may reference
- Which actions it may take autonomously

**Boundaries** answer "what must this agent never do?":

- Which domains are off-limits (legal, HR, compliance)
- Which decisions require human authority
- Which guarantees the agent cannot make
- Which roles it does not replace

**Key principle:** Frame both as hard requirements, not preferences.

- Bad: "The agent prefers not to make recommendations"
- Good: "The agent must never make recommendations"

**Rules vs Constraints:**

| Rules | Constraints |
|-------|-------------|
| Govern behavior (process) | Govern output (boundaries) |
| "Always cite sources" | "Max 500 words" |
| "Escalate when confidence is low" | "Never include PII" |
| Verified by observing behavior | Checked on every response |

**Scope boundaries:**

- Research ≠ analysis ≠ decision ≠ execution
- Keep concerns separate: each agent can be tested, versioned, replaced independently

**Escalation triggers:**

- Ambiguity that persists after clarification
- Sensitive or high-stakes content
- Conflicting information without resolution
- Resource constraints or access limitations

### Fallback Behavior

Every agent fails sometimes. Tools break, information is missing, the task is out of scope. Design fallback behavior explicitly: what does the agent do when it can't succeed?

**Triggers:** Missing info, tool failures, low confidence, out of scope, resource limits

**Response types:**

- **Partial completion**: "Found X and Y, couldn't locate Z"
- **Degraded quality**: "Without database access, providing estimates only"
- **Alternative approach**: "Can't generate report, but here's template and data sources"
- **Escalation**: "Forwarding to [appropriate party]"
- **Transparent failure**: "Cannot complete because [specific reason]"

**Anti-patterns:** Silent failure, fake completion, infinite retry, blame shifting

### Guardrails

Documented rules get ignored. Guardrails are runtime-enforced constraints that actually prevent bad behavior. They filter inputs, check outputs, limit actions, and cap resource usage.

- **Input guardrails**: filter/reject problematic inputs
- **Output guardrails**: check/modify before delivery
- **Behavioral guardrails**: limit what actions agent can take
- **Resource guardrails**: cap tokens, API calls, time

**Writing guardrails with EARS notation.** Vague guardrails like "avoid medical advice" get interpreted inconsistently. Structured notation borrowed from requirements engineering (EARS, Easy Approach to Requirements Syntax) makes guardrails testable and unambiguous. Each guardrail follows a `WHEN [condition] THE AGENT SHALL [behavior]` pattern that maps directly to a verifiable check.

```text
# Input guardrails
WHEN user requests medical diagnosis THE AGENT SHALL refuse and suggest consulting a healthcare professional
WHEN input lacks required dimensions THE AGENT SHALL state what is missing and request clarification

# Output guardrails
WHEN response exceeds output_constraints word limit THE AGENT SHALL compress to fit
WHEN output contains personally identifiable information THE AGENT SHALL redact before delivery

# Behavioral guardrails
WHEN confidence score falls below threshold THE AGENT SHALL escalate to human review
WHEN user requests action outside agent boundaries THE AGENT SHALL decline and explain scope
```

This notation has three advantages over free-text rules. Each guardrail is independently testable: feed the condition, check the behavior. Guardrails compose without ambiguity: multiple `WHEN` clauses don't conflict because each covers a distinct condition. And cross-version stability becomes explicit through `SHALL CONTINUE TO` clauses (see Unchanged Behavior below).

**Unchanged behavior.** When updating an agent spec across versions, document what must not change alongside what should change. This pattern, adapted from Kiro's bugfix spec methodology, prevents regressions by making preservation explicit.

```text
# Unchanged behavior (regression prevention)
WHEN user asks about Hofstede dimensions THE AGENT SHALL CONTINUE TO reference the 6-dimension framework
WHEN input is in English THE AGENT SHALL CONTINUE TO respond in English
WHEN user provides all required dimensions THE AGENT SHALL CONTINUE TO generate a full response
```

The `SHALL CONTINUE TO` clause serves as a regression test specification. During validation, these statements confirm that new versions of the agent definition preserve existing behavior while adding or modifying other capabilities.

**Tool risk classification:** Every tool available to an agent carries a different risk profile. Assign a rating (low, medium, high) to each tool based on: read-only vs. write access, reversibility of the action, required account permissions, and financial impact. Use these ratings to trigger automated behavior: low-risk tools execute freely, medium-risk tools run guardrail checks before execution, high-risk tools pause for human approval. This turns abstract guardrail policy into concrete per-tool enforcement.

**Execution strategy: optimistic by default.** Rather than blocking on every guardrail check before the agent can act, run guardrails concurrently with the agent's primary work. The agent proceeds optimistically while guardrails evaluate in parallel, intervening only when a constraint is breached. This preserves responsiveness for the common case (no violation) while still catching problems before they reach the user. Reserve blocking (synchronous) checks for high-risk tools where the cost of a violation outweighs the latency cost of waiting.

### Human-in-the-Loop

Full automation is rarely the goal. Most systems need humans at key decision points: approving high-stakes actions, correcting mistakes, handling edge cases. Design these touchpoints explicitly.

- **Approval gates**: pause until human confirms (high-stakes actions)
- **Review points**: flag for inspection without blocking
- **Correction flows**: how humans disagree, edit, request regeneration
- **Handoff protocols**: how control transfers between agent and human

---

## Part 5: Operations

### Triggers and Activation

How an agent gets invoked shapes what context it receives and how it should behave. On-demand agents expect user input; scheduled agents need to understand what changed since the last run; event-driven agents must handle the specific trigger that woke them.

- **On-demand**: invoked explicitly by user or system
- **Scheduled**: runs at specified intervals
- **Event-driven**: activates on webhook, file change, signal from another agent
- **Continuous**: always running, monitoring for work

Always define what context the agent receives when activated.

### Cost and Budgets

Agent runs consume resources: tokens, API calls, compute time, money. Without budgets, a runaway agent can exhaust resources or rack up unexpected costs. Define limits at multiple scopes to catch problems early.

**Budget types:**

- Per-request: max resources for single invocation
- Per-task: complete task spanning multiple requests
- Per-period: daily, weekly, monthly caps

**When exceeded:**

- Hard stop (fail and notify)
- Graceful degradation (complete with reduced quality)
- Escalation (request human approval)
- Queuing (pause until next period)

### Single-Agent Scaling

Before splitting into multi-agent orchestration, maximize what a single agent can handle. More agents introduce coordination overhead, and often a single agent with well-designed tools is sufficient. Adding a tool is cheaper than adding an agent.

**Prompt templates** are the primary scaling mechanism for single agents. Instead of maintaining separate prompts for each use case, use one flexible base prompt that accepts policy variables. As new use cases arise, update variables rather than rewriting workflows.

```text
You are a support agent for {{company_name}}.
The customer {{customer_name}} has been a member for {{tenure}}.
Their most common issues involve {{issue_categories}}.
Follow the {{escalation_policy}} for unresolved complaints.
```

**When a single agent is no longer enough:** Two signals indicate it's time to split. First, complex logic: when the prompt accumulates many conditional branches (multiple if-then-else paths) and templates become difficult to maintain. Second, tool overload: not just the number of tools, but their similarity or overlap. Some agents handle 15+ distinct tools well; others struggle with fewer than 10 overlapping ones. If improving tool clarity through better names, parameters, and descriptions doesn't help, split into separate agents.

### Composition Patterns

Agents can be combined in different topologies, each with tradeoffs. Choose based on your task structure: sequential stages favor pipelines, complex decisions favor orchestration, independent work favors peer networks.

**Pipeline:** Agent A → Agent B → Agent C

Output feeds input. Works for clear stages. Challenge: failure midstream affects everything downstream.

**Orchestration:** Orchestrator → Specialists A, B, C

One agent coordinates multiple specialists. Works for complex tasks requiring judgment. Challenge: orchestrator becomes bottleneck.

**Peer Network:** Agent A ←→ Agent B ←→ Agent C

Agents operate independently, share signals. Works for monitoring, parallel processing. Challenge: coordination, may duplicate work or miss handoffs.

Most real systems use hybrid patterns.

### Routing: Static vs. Dynamic

Routing determines which agent handles a given input. This is one of the most consequential design decisions in a multi-agent system, and the industry distinguishes two fundamentally different approaches based on whether the set of possible routes is known in advance.

**Static routing (classification-based)** classifies input into one of N predefined categories using either an LLM or a traditional classifier, then directs it to a specialized handler. Anthropic explicitly categorizes this as a workflow pattern, not an agent pattern: the categories are fixed, and the system picks one. It works well when distinct categories exist, classification accuracy is high, and each category maps to a handler with its own prompt and tools. Common examples include directing customer service queries (general, refund, technical) to specialized processes, or routing easy questions to cheaper models and hard questions to more capable ones.

**Dynamic routing (LLM-reasoning-based)** uses an LLM to decompose tasks, assess which specialist is best suited, and decide what to delegate, all at runtime with no predetermined categories. Anthropic's orchestrator-workers pattern is the canonical example: "a central LLM dynamically breaks down tasks, delegates them to worker LLMs, and synthesizes their results." The critical difference from static routing is flexibility: subtasks are not pre-defined but determined by the orchestrator based on the specific input. This matters for open-ended problems where you cannot predict what subtasks will be needed, such as coding across unknown files or research requiring multiple parallel investigations.

**When to use which:** Static routing suits well-defined categories with predictable handling, offering lower cost and higher consistency. Dynamic routing suits open-ended tasks where the number of subtasks, their nature, and which specialists should handle them all vary per input. Start with static routing; move to dynamic only when the task variation demonstrably requires it.

### Dynamic Routing Mechanisms

Across frameworks, the LLM signals routing decisions through three mechanisms, each with different tradeoffs for reliability, flexibility, and cost.

**Tool-call routing** is the most common approach. The LLM generates a function call (e.g., `transfer_to_refund_agent` or `Delegate work to coworker`) that the framework intercepts and routes accordingly. Both the OpenAI Agents SDK and CrewAI use this pattern. The advantage is that it leverages the LLM's native function-calling capability, and the routing decision happens in the same inference call as the conversational reasoning. The disadvantage is that all available tools and handoffs must fit in the context window, and routing quality depends entirely on tool descriptions and system prompt engineering.

**Structured output routing** constrains the LLM to return a typed object specifying the next agent. LangGraph uses this extensively: the supervisor LLM returns a schema like `Route(step="research_agent")` and the `Command(goto=...)` primitive directs graph execution to that node. This produces reliable, parseable decisions but adds schema overhead and cannot express nuance beyond the predefined fields.

**Free-text extraction** prompts the LLM to output an agent name in natural language, then parses it with regex. AutoGen's `SelectorGroupChat` uses this approach: it prompts the model with agent descriptions and conversation history, then extracts the selected name from the response. This is the simplest to implement but the most fragile, requiring retry logic for ambiguous or invalid responses.

### Routing Topologies

The choice of who makes routing decisions and how control flows defines five distinct multi-agent topologies. Each has emerged as a first-class pattern in at least one major framework.

**Supervisor (centralized orchestration):** A dedicated LLM-powered agent sits above a pool of specialists, deciding which to invoke, what input to provide, and how to synthesize results. The supervisor maintains conversation context while subagents remain stateless, providing strong context isolation. In the Claude Agent SDK, subagents are invoked via the Task tool, and Claude automatically decides when to delegate based on each subagent's description. In LangGraph, `create_supervisor` builds this topology with configurable parallel tool calls and pre/post model hooks. Best for applications with multiple distinct domains where centralized workflow control and context isolation matter. Primary challenge: the orchestrator becomes a bottleneck and single point of failure.

**Router (classify, fan-out, synthesize):** A routing step classifies input and dispatches to agents, potentially executing queries in parallel and synthesizing results. Unlike a supervisor, a router typically does not maintain conversation history across turns. LangGraph implements this with `Command` for single-agent routing and `Send` for parallel fan-out to multiple agents simultaneously. Best for stateless classification with parallel execution across knowledge domains.

**Handoffs / Swarm (peer-to-peer):** Agents hand off control directly to each other based on their specializations, with no central coordinator. The active agent changes dynamically based on conversation context. In the OpenAI Agents SDK, handoffs are represented as tool calls (`transfer_to_<agent_name>`), and the receiving agent gets full conversation history with optional filtering. In LangGraph's Swarm, each agent knows ahead of time which agents it can hand off to; the dynamism is in when the agent decides to hand off, not in discovering new agents at runtime. Best for sequential conversational flows where capabilities unlock in stages, or when direct user interaction is critical.

**Hierarchical manager (multi-level orchestration):** A manager agent delegates via tool calls and validates results before proceeding. In CrewAI's hierarchical process mode, the manager LLM receives task descriptions and agent roles, then generates `Delegate work to coworker` tool calls. CrewAI also supports a planning mode where an `AgentPlanner` generates a step-by-step plan before execution, injected into each task so every agent understands the overall workflow. Supervisors can manage other supervisors, creating hierarchical structures for complex organizations.

**Group chat with speaker selection:** Multiple agents participate in a shared conversation, and a separate LLM call selects which agent speaks next based on the conversation history. AutoGen's `SelectorGroupChat` implements this with configurable selection: pure LLM selection (default), a `candidate_func` that filters eligible agents, or a `selector_func` that can override with deterministic logic and fall back to LLM selection when it returns None. Best for collaborative, multi-turn scenarios where agents need to build on each other's contributions.

### Handoff Design

The mechanics of what gets passed during a handoff, how the receiving agent picks up context, and whether control returns to the sender are where most coordination failures originate. Frameworks differ significantly in their defaults and overrides.

**Context transfer** varies across frameworks. The OpenAI Agents SDK passes full message history by default, with `input_filter` functions available to strip tool calls, summarize, or transform the history before the receiving agent sees it. A `nest_handoff_history` option collapses prior transcript into a single assistant summary. CrewAI passes explicit task and context strings, scoping what the delegated agent sees. AutoGen's group chat broadcasts full conversation to all agents with no per-agent filtering.

**Control flow** splits into two models. In peer-to-peer handoffs (OpenAI Agents SDK, LangGraph Swarm), control transfer is complete: the original agent does not retain control or receive results back. The receiving agent becomes the active agent for subsequent turns. In hierarchical delegation (CrewAI, Claude Agent SDK subagents), results flow back to the coordinator, which maintains oversight and can re-delegate or synthesize.

**What to specify in a handoff contract:** what transfers (context, state, remaining work), what format the receiving agent expects, how acknowledgment works, whether the sender gets results back, and what happens on failure. Without detailed task descriptions, agents duplicate work, leave gaps, or fail to find necessary information. This applies across all topologies.

### Multi-Agent Coordination

Coordination failures are the most common source of bugs in multi-agent systems. Agents that work fine in isolation break when composed, usually because expectations don't match. Explicit contracts prevent integration surprises.

- **Handoffs**: what transfers (context, state, remaining work), format, acknowledgment, control flow (returns vs. full transfer)
- **Contracts**: explicit input/output expectations, typed where possible
- **Conflict resolution**: handling contradictory outputs or resource competition
- **Shared context**: shared memory, coordinator agent, explicit passing
- **Effort scaling**: dynamic resource allocation based on task complexity, from single-agent simple lookups to multi-agent parallel investigations

### Interface Layers

The word "interface" carries multiple meanings in agentic systems, and agents typically need several simultaneously. Anthropic's guidance on building effective agents found that more time was spent optimizing tool definitions than overall prompts, and that well-designed interfaces eliminated entire categories of agent errors. The same rigor applied to human-computer interfaces should be applied to agent-computer interfaces.

Four distinct interface layers exist, each solving a different boundary problem.

**Agent-to-Tool (ACI):** The contract between an agent and the tools or functions it can invoke. This covers tool names, parameter schemas, return types, documentation, and error handling. The Model Context Protocol (MCP), introduced by Anthropic in November 2024 and now governed by the Linux Foundation, is the emerging standard for this layer. Design tool interfaces like API docs for a junior developer: include usage examples, input format requirements, edge cases, and clear boundaries separating one tool from another. Apply poka-yoke (mistake-proofing) so that errors are structurally impossible, for example requiring absolute file paths rather than allowing relative ones.

**Agent-to-Agent (A2A):** The protocol enabling communication between independent, potentially opaque agent systems built on different frameworks. Google's Agent2Agent Protocol (April 2025) introduced Agent Cards, machine-readable JSON metadata advertising an agent's identity, capabilities, supported modalities, authentication requirements, and service endpoint. The protocol defines Tasks as the atomic unit of work delegation with explicit input parameters and contextual metadata. When agents need to discover and delegate to other agents they have not been pre-wired to work with, this layer becomes essential.

**Agent-to-User (AG-UI):** The bidirectional communication layer between an agentic backend and a user-facing frontend. Traditional REST or GraphQL architectures fail for agents because agents are long-running, nondeterministic, and mix structured and unstructured I/O simultaneously. The AG-UI protocol defines event types across five categories: streaming text, tool calls, state patches, lifecycle signals, and interrupts. This layer makes agent reasoning transparent, surfacing what was inferred, why a decision was made, and how confident the system is.

**Typed Data Contracts:** The data schemas that define what an agent accepts and produces. Every major framework now supports Pydantic models, JSON schemas, or equivalent typed output definitions. These function as contracts between agents, between agents and tools, and between agents and consuming applications. Structured output has shifted decisively from free-text communication toward schema-defined contracts with required and optional fields, data types, constraints, and validation rules.

**How the layers compose:** The emerging architecture stacks three complementary protocols: MCP at the tool layer, A2A at the coordination layer, and AG-UI at the presentation layer. Each operates independently but composes into a full-stack agent communication architecture. Typed data contracts (Pydantic, JSON Schema) apply at every boundary across all three layers.

**For specification repositories:** Even without runtime code, interface definitions serve as portable contracts. Defining input shapes, output shapes, handoff protocols, and tool requirements in agent specs makes them significantly more useful when someone wires them to any framework. The specs become integration-ready rather than requiring the implementer to reverse-engineer the contract from prose descriptions.

### Portable Agent Definitions

Agent specs gain real value when they can be consumed by any framework to instantiate a running agent. The goal is to define an agent once and deploy it across OpenAI Agents SDK, LangGraph, CrewAI, Claude Agent SDK, or any future framework. Agent Lab's portable definitions align with Oracle's Open Agent Specification (26.1.0) for standard fields and use the `x-agentlab` namespace for extensions that go beyond the current spec.

**Alignment with Oracle Agent Spec 26.1.0.**

Agent Lab definitions use Agent Spec's component model as the structural foundation. Standard fields follow the spec exactly, so anyone familiar with Agent Spec can read the definition without learning a custom format. Agent Lab-specific capabilities (guardrails, memory, context engineering, validation gates, output constraints) live under the `x-agentlab` namespace, following the same extension pattern OpenAPI uses with `x-` prefixes.

The definition has two clear zones. The Agent Spec Standard Zone contains the envelope (`agentspec_version`, `component_type`), identity fields (`id`, `name`, `description`, `metadata`), the system prompt, model configuration (`llm_configuration`), typed I/O (`inputs`/`outputs` as JSON Schema Property lists), tools, specialized agents, flows, and A2A discovery. The Agent Lab Extensions Zone (`x-agentlab`) contains prompt registry, validation gates, output constraints, guardrails, boundaries, escalation triggers, memory taxonomy, context strategy, knowledge references, assets, and quality criteria.

**Field mapping between Agent Lab and Agent Spec:**

| Agent Lab | Agent Spec 26.1.0 | Change |
|-----------|-------------------|--------|
| `kind: Agent` | `component_type: Agent` | Rename to spec standard |
| `identity.name` | `id` | Flatten, machine-readable identifier |
| `identity.display_name` | `name` | Flatten, human-readable name |
| `identity.description` | `description` | Flatten to top level |
| `model.identifier` | `llm_configuration.model_id` | Restructure |
| `model.temperature/max_tokens` | `llm_configuration.default_generation_parameters.*` | Nest under generation params |
| `instructions.system_prompt` | `system_prompt` | Promote to top level |
| `personalities` (dict) | `specialized_agents` (list of SpecializedAgent) | Each variant becomes a component with `$component_ref` |
| `skills` (workflow dicts) | `flows` (Flow components) | Each skill becomes a Flow; workflow kept as `x-agentlab.workflow_shorthand` |
| `inputs/outputs` (nested) | Top-level JSON Schema Property lists | Flatten to `[{title, type, description}]` |
| `tools[].risk` | `tools[].requires_confirmation` + `x-agentlab.risk` | Standard boolean + extension detail |
| `discovery` | `a2a` | Rename to spec standard |

**Extensions in `x-agentlab` namespace (no Agent Spec equivalent):**

- `prompt_registry`: Atomic prompt files with source paths, typed inputs/outputs
- `validation`: Input completeness gates with `on_incomplete` behavior
- `output_constraints`: Field-level word limits, sentence caps, hard rules
- `guardrails`: Input/output/resource restrictions using EARS notation (`WHEN [condition] THE AGENT SHALL [behavior]`)
- `unchanged_behavior`: Regression prevention clauses using `SHALL CONTINUE TO` notation, documenting what must be preserved across spec versions
- `permissions`: Explicit scope of authority, what the agent is allowed to do
- `boundaries`, `escalation_triggers`, `human_in_the_loop_conditions`
- `memory`: Conversation/working/persistent/shared taxonomy
- `context`: Token budget, priority order, include/exclude lists
- `knowledge`: References with conditional loading (`load_when`)
- `assets`: Generated document templates
- `quality`: Evaluation criteria checklist
- `monitoring`: Signals, thresholds, and drift detection configuration for runtime observability

**Landscape of portable formats:**

| Format | Scope | Maturity |
|--------|-------|----------|
| Oracle Agent Spec | Full agent + workflow definition, framework adapters | High, active development |
| A2A Agent Cards | Discovery and capability advertisement | Production, Linux Foundation |
| Kiro Specs | Structured requirements (EARS), design, and tasks for AI-assisted development | Production, AWS/Amazon |
| JSON Agents PAM | Manifest with governance and security | Early stage |
| OASF (Agntcy) | Capability schemas and taxonomies | Early stage |
| CrewAI YAML | Agent + task definition | Framework-specific, production |
| Google ADK YAML | Agent + pipeline definition | Framework-specific, production |

**Current gaps and contributions.** Agent Spec covers agent identity, workflows, tools, and I/O well but does not yet address guardrails, memory portability, personality variants, context engineering, or output constraints. Agent Lab's `x-agentlab` extensions validate what a complete definition actually requires beyond the standard fields. The Specification tab in Agent Lab validates definitions through schema checks, completeness checks, and cross-reference checks, serving as a practical test harness for portable definitions.

**Validation philosophy.** The handbook and the spec validator serve different roles. The handbook is a design guide for humans: it teaches patterns, explains rationale, and builds judgment. The spec validator is a structural checker: it catches missing fields, broken references, and incomplete sections. These are complementary, not redundant. The handbook prescribes EARS notation, responsibility-driven identity, and validation gates, but these are design quality concerns that require human judgment, not automated enforcement. If recurring design mistakes emerge, specific handbook rules can be selectively promoted into the validator one at a time, without wholesale duplication.

**Structured requirements for agent behavior.** Agent Lab adopts EARS notation (Easy Approach to Requirements Syntax) from requirements engineering, adapted from Kiro's spec methodology, for writing guardrails, boundaries, and behavioral constraints. Where Kiro uses three files (`requirements.md`, `design.md`, `tasks.md`) to formalize the development process for features and bugs, Agent Lab embeds structured requirements directly into the definition YAML. This keeps the definition as the single source of truth while gaining the precision of formal notation. Guardrails use `WHEN [condition] THE AGENT SHALL [behavior]`, and unchanged behavior clauses use `SHALL CONTINUE TO` for regression prevention across spec versions. See Part 4: Guardrails for notation details and examples.

### Spec Generation Engine

Today the pipeline from concept to complete agent package is manual: hand-write the agent markdown, hand-write the definition YAML, hand-write the stories, then bundle and test. Only culture-agent has the full stack (definition + prompts + examples + stories + sandbox). The other 11+ agents have rich markdown but no portable definition. The Spec Generation Engine closes this gap by automating the translation from concept to complete agent package.

The idea follows the same pattern as stories: agents as mirrors to theoretical concepts or real-life examples. Given a source description, the engine automatically generates use case scenarios, skills, stories, and the portable spec, all validated through the sandbox before acceptance.

**Architecture: five components connected in a pipeline with a validation feedback loop.**

**Sources (input).** Three input types, any starting point works. An existing agent markdown with full structure (`culture-agent.md`), a rough idea entry from `agent-ideas.md`, or a free-text scenario/prompt describing what the agent should do. The engine normalizes all three into a common intermediate representation before generation.

**Context (constraints).** Two artifacts constrain generation to keep output consistent. The culture-agent definition serves as a few-shot template (the gold standard for structure, field naming, and extension usage). The Agent Spec 26.1.0 schema ensures structural compliance. This follows the `llms.txt` pattern Oracle validated in their February 2026 tutorial on generating Agent Spec configs from natural language requirements.

**Spec Forge (LLM pipeline).** Three main stages plus parallel generators:

1. **Parse & Extract**: Pull structure from the source material, identifying skills, personality traits, guardrails, I/O shapes, framework references, and domain vocabulary
2. **Generate Spec**: Produce the Agent Spec-aligned YAML with `x-agentlab` extensions, including flows, specialized agents, prompt registry, tools, guardrails, memory, context strategy, and knowledge references
3. **Generate Stories**: Create narrative use cases following the existing story arc pattern (hook, problem, turning point, solution, outcome), each story demonstrating the agent solving a real problem while surfacing the theoretical framework behind it

Prompts (markdown files for each flow step) and examples (YAML input/output fixtures) are generated in parallel from the extracted structure.

**Outputs.** A complete agent package ready for bundling:

- `definition.yaml`: Agent Spec 26.1.0 standard zone + `x-agentlab` extensions
- `stories.ts` entries: Use case narratives with section types, framework visualizations, and metrics
- `prompts/*.md`: Reusable prompt templates for each flow step, referenced in the prompt registry
- `examples/*.yaml`: Concrete input/output pairs for sandbox testing and documentation

**Validation loop.** Four checks before output is accepted:

- **Schema validation**: Valid YAML, correct types, required fields present
- **Completeness lint**: All Agent Spec standard fields populated, all `x-agentlab` extensions filled
- **Sandbox execution**: Run workflow steps against the LLM and validate output against the definition schema
- **Story coherence**: Narrative arc complete, framework citations present, no stereotyping or judgment

Failed validation feeds back to the forge for refinement. The engine iterates until all checks pass or flags items requiring human review.

**Recursive property.** The forge itself can be defined as an agent with its own definition YAML, flows, and validation criteria, following the same pattern it generates.

**Implementation bridge: spec to running agent.** The gap between "spec exists" and "agent is built" benefits from a structured task format, adapted from Kiro's `tasks.md` pattern. For each agent that needs to go from definition to runtime implementation, a task list captures discrete, trackable implementation steps:

```text
# Implementation Tasks: culture-agent

- [x] Write definition.yaml with all x-agentlab extensions
- [x] Create prompts/*.md for each flow step
- [x] Create examples/*.yaml with input/output fixtures
- [ ] Wire to OpenAI Agents SDK (tool definitions, flow routing)
- [ ] Wire to LangGraph (state graph, node functions)
- [ ] Run validation: schema + completeness + cross-reference
- [ ] Run workflow execution: test each flow with example inputs
```

This is a process pattern for the spec-to-implementation journey, not a per-agent file requirement. The task list lives alongside the implementation work, not in the agent's specification folder.

**Landscape of spec generation approaches:**

| Approach | Method | Output | Maturity |
|----------|--------|--------|----------|
| Oracle Agent Spec + llms.txt | LLM with spec context injection | Agent Spec JSON/YAML (portable) | Production SDK, new generation tutorial (Feb 2026) |
| Instructor + Pydantic | Constrained LLM output with validation/retries | Any schema-defined JSON/YAML | Production (3M+ monthly downloads) |
| Swarms autoswarm CLI | CLI generates configs from task descriptions | Swarms YAML configs | Production framework |
| CrewAI YAML generation | LLM API call with prompt template | CrewAI agents.yaml / tasks.yaml | Community pattern on production framework |
| AutoAgent (HKUDS) | Natural language conversation | Full agent + workflow definitions | Research/early-stage |
| SDD with Claude Code | Spec docs drive code generation | Any target format | Emerging standard |
| Kiro Specs | Three-file structured specs (requirements, design, tasks) | Implementation artifacts | Production, AWS/Amazon |

**Decision: build the forge as an internal LLM pipeline using the culture-agent definition as the few-shot template and Agent Spec 26.1.0 as the structural schema.** The Instructor + Pydantic pattern provides the most practical foundation for schema-valid output with automatic retries. The Oracle llms.txt pattern provides the context injection strategy. The existing sandbox provides the validation harness.

**References:**

- [Oracle: Create an Agent That Generates Agent Spec (Feb 2026)](https://medium.com/oracledevs/create-an-agent-that-generates-agent-spec-turning-business-requirements-into-open-agent-spec-7a94254df3bc)
- [Oracle Agent Spec GitHub](https://github.com/oracle/agent-spec)
- [Instructor library (structured LLM output)](https://python.useinstructor.com/)
- [GitHub: Spec-Driven Development with AI](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)
- [Kiro Specs (AWS/Amazon)](https://kiro.dev/docs/specs/): structured requirements, design, and tasks for AI-assisted development
- [EARS Notation (Alistair Mavin)](https://ieeexplore.ieee.org/document/5328509): Easy Approach to Requirements Syntax

### Export to Agent Runtime

A portable definition only becomes useful when it runs somewhere. The export path transforms an Agent Lab YAML spec into starter artifacts for a specific agent framework. The generated output is a scaffold, not a production agent: tool implementations are stubs, memory wiring needs manual setup, and framework-specific patterns need adaptation. The value is saving the boilerplate work and ensuring structural alignment between the spec and the running agent.

Agent Lab specs are behavioral specifications (what an agent knows and does). Agent runtimes need code and configuration (how to instantiate and call an agent). This distinction shapes what translates cleanly and what requires human judgment during the export.

**What maps across most frameworks:**

| Agent Lab YAML field | Runtime equivalent | Mapping quality |
|---|---|---|
| `name`, `description` | Agent identity | Direct |
| `system_prompt` | Instructions / system message | Direct |
| `tools[].name`, `inputs`, `outputs` | Tool / function definitions | Structural (stubs) |
| `llm_configuration.model_id` | Model selection | Direct |
| `temperature`, `max_tokens` | Generation parameters | Direct |
| `flows[].workflow_shorthand` | Task / step sequences | Partial |
| `specialized_agents` | Subagent delegation | Framework-dependent |

**What doesn't translate (requires human wiring):**

| Agent Lab YAML field | Gap |
|---|---|
| `x-agentlab.memory` | Every framework handles memory differently |
| `x-agentlab.guardrails` | Some frameworks support guardrails, most don't |
| `x-agentlab.context` | Token budgets, priority order: no standard |
| `x-agentlab.knowledge.references` | RAG setup varies per framework |
| Personality variants | No framework supports this natively |

#### Claude Agent SDK

The Claude Agent SDK defines agents as Markdown files with YAML frontmatter, placed in `.claude/agents/`. There is no YAML or JSON import mechanism, but the file format is straightforward enough that an exporter can generate it directly.

**Export target**: a `.md` file per agent, ready to drop into `.claude/agents/`.

**Field mapping:**

| Agent Lab YAML | Claude Agent SDK | Notes |
|---|---|---|
| `name` | `name` in frontmatter | Direct |
| `description` | `description` in frontmatter | Direct |
| `system_prompt` | Markdown body (below frontmatter) | Direct |
| `llm_configuration.model_id` | `model` (`sonnet`, `opus`, `haiku`) | Map to Claude model names |
| `tools[].name` | `tools` list in frontmatter | Built-in tools by string name |
| `tools[]` (custom) | MCP server definitions | Each custom tool needs an MCP server |
| `specialized_agents` | Not supported in agent files | Parent-child delegation only via `Task` tool in SDK code |
| `flows` | No declarative flow | Claude's reasoning handles orchestration |

**Example generated output:**

```markdown
---
name: culture-agent
description: Cross-cultural communication bridging and meeting preparation
tools: Read, Glob, Grep, WebSearch
model: sonnet
maxTurns: 20
---

You are a cross-cultural communication specialist...
[system_prompt content here]
```

**Constraints**: Claude Agent SDK uses a parent-subagent delegation model. Subagents cannot spawn their own subagents. There is no declarative flow graph; Claude's reasoning decides step sequencing. Personality variants would need to become separate agent files, one per variant.

#### CrewAI

CrewAI uses a three-file structure: `agents.yaml` for agent definitions, `tasks.yaml` for task definitions, and `crew.py` for wiring agents to tools and tasks in Python. The YAML files are declarative, but tool implementations and crew orchestration require code.

**Export target**: a project scaffold with `config/agents.yaml`, `config/tasks.yaml`, `crew.py`, and tool stubs.

**Field mapping:**

| Agent Lab YAML | CrewAI | Notes |
|---|---|---|
| `name` | YAML key name | Direct |
| `system_prompt` | Split into `role`, `goal`, `backstory` | CrewAI decomposes the prompt into three fields. Export can place full prompt in `backstory` and synthesize `role`/`goal` |
| `llm_configuration.model_id` | `llm` reference | Points to `@llm`-decorated method in `crew.py` |
| `tools[].name` | `tools` list | References `@tool`-decorated methods in `crew.py` |
| `flows` | `tasks.yaml` entries | Each flow becomes a task with `description`, `expected_output`, and `agent` reference |
| `flows[].workflow_shorthand` steps | Task `context` chaining | Step 2's input = Step 1's output via task context |
| `specialized_agents` | Additional agents in `agents.yaml` | CrewAI supports sequential and hierarchical process types |
| `inputs`/`outputs` | `output_json` or `output_pydantic` on tasks | Structured output is task-level, not agent-level |

**Example generated agents.yaml:**

```yaml
culture_agent:
  role: >
    Cross-cultural communication specialist
  goal: >
    Bridge cultural gaps in professional communication
  backstory: >
    You are a cross-cultural communication specialist...
  tools:
    - web_search
  verbose: true
  allow_delegation: false
```

**Constraints**: Method names in `crew.py` must match YAML key names exactly. Tool YAML references point to `@tool`-decorated methods, not class names. CrewAI does not support ZIP or bundle imports; the exporter generates the full project structure.

#### A2A Agent Cards

A2A agent cards are JSON documents published at `/.well-known/agent-card.json` that advertise an agent's identity, capabilities, and skills to other agents. Unlike Claude SDK and CrewAI exports which produce code artifacts, A2A card generation produces a discovery document for a running service.

**The fundamental gap**: Agent Lab specs describe *behavior* (what an agent knows and does). A2A cards describe *services* (how to reach and interact with a running agent). Generating a card requires deployment metadata that does not exist in the behavioral spec: endpoint URL, authentication scheme, provider organization, protocol capabilities (streaming, push notifications).

**What maps from the spec:**

| Agent Lab YAML | A2A Agent Card | Notes |
|---|---|---|
| `name` | `name` | Direct |
| `description` | `description` | Direct |
| `metadata.definition_version` | `version` | Direct |
| `flows[].id`, `flows[].name` | `skills[].id`, `skills[].name` | Each flow becomes a discoverable skill |
| `flows[].description` | `skills[].description` | Direct |
| `metadata.tags` | `skills[].tags` | Direct |
| `a2a.agent_card.capabilities` | `skills[].id` list | Already defined in the spec |

**What must be supplied at deployment time:**

| A2A Field | Source |
|---|---|
| `url` | Deployment endpoint |
| `provider.organization` | Organization name |
| `securitySchemes` | Authentication configuration |
| `capabilities.streaming` | Runtime capability |
| `defaultInputModes` / `defaultOutputModes` | MIME types (typically `text/plain`, `application/json`) |

**Approach**: generate a partial agent card from the spec with `TODO` markers for deployment-specific fields. The card becomes complete when paired with a deployment manifest.

#### MCP Tool Definitions

MCP (Model Context Protocol) does not use static card files. Tools are discovered at runtime via the `tools/list` handshake between client and server. However, generating MCP-compatible tool definitions from the spec is useful for building MCP servers that expose agent capabilities as callable tools.

**What maps from the spec:**

| Agent Lab YAML | MCP Tool | Notes |
|---|---|---|
| `tools[].name` | `name` | Direct |
| `tools[].id` | `name` (slugified) | MCP uses flat string identifiers |
| Tool description (from prompt registry) | `description` | Direct |
| `inputs[]` | `inputSchema` (JSON Schema) | Agent Lab inputs are typed Property lists; MCP needs full JSON Schema objects with `properties`, `types`, and `required` |
| `outputs[]` | `outputSchema` | Same schema conversion |

**The hard part**: Agent Lab tool definitions describe *what a tool does* semantically. MCP tool definitions need *typed JSON Schema* for inputs and outputs with concrete property names, data types, and required fields. Where the spec says `input: "Cultural context description"`, MCP needs `{"type": "object", "properties": {"context": {"type": "string"}}, "required": ["context"]}`. This translation requires either manual schema authoring or LLM-assisted inference.

**Approach**: generate MCP server scaffolds where each agent flow or tool becomes an MCP tool with a `description` from the spec and a `TODO` input schema. The typed schemas are filled in during implementation.

#### Export Strategy

Starting with two frameworks provides the most learning with the least maintenance burden. Claude Agent SDK and CrewAI cover different paradigms (reasoning-driven vs workflow-driven) and different output formats (Markdown vs YAML+Python).

The export produces scaffolds, not running agents. Tool implementations are stubs, memory needs wiring, and framework-specific patterns need adaptation. The value is structural alignment: the generated code matches the spec's identity, tools, and flows, saving 30-60 minutes of boilerplate per agent.

A2A agent cards and MCP tool definitions require a deployment metadata layer that sits between the behavioral spec and the runtime contract. This layer can be a separate deployment manifest or an extension to the YAML spec. Either way, the card generation is useful for agents that need to be discoverable by other agents or LLM hosts.

**References:**

- [Claude Agent SDK: Subagents](https://platform.claude.com/docs/en/agent-sdk/subagents)
- [Claude Agent SDK: Skills](https://platform.claude.com/docs/en/agent-sdk/skills)
- [CrewAI Documentation](https://docs.crewai.com/)
- [A2A Protocol Specification](https://a2a-protocol.org/latest/specification/)
- [MCP Specification: Tools](https://modelcontextprotocol.io/specification/2025-11-25/server/tools)

---

## Part 6: Quality

### Testing Types

Agent testing differs from traditional software testing because outputs are probabilistic and context-dependent. Start with deterministic checks (did it call the right tools?) before evaluating quality (was the output good?).

- **Capability**: individual prompts produce expected outputs for known inputs
- **Integration**: agents work together; outputs are valid inputs for next agent
- **Boundary**: constraints hold; agent resists tempting edge cases
- **Regression**: changes don't break existing behavior

### Evaluations (Evals)

An evaluation is a test that provides input to an AI system and applies grading logic to measure success. Evals force you to define success criteria explicitly before building.

**Core terminology:**

| Term | Definition |
|------|------------|
| Task | Single test with defined inputs and success criteria |
| Trial | One attempt at a task (run multiple due to model variability) |
| Grader | Logic scoring some aspect of performance |
| Transcript | Complete record of interactions, tool calls, and reasoning |
| Outcome | Final state after a trial (distinct from stated claims) |

**Grader types:**

- **Code-based**: String matching, binary tests, outcome verification. Fast, objective, reproducible. Brittle to valid variations.
- **Model-based**: Rubric scoring, pairwise comparison, multi-judge consensus. Flexible, captures nuance. Non-deterministic, needs calibration.
- **Human**: SME review, sampling, A/B testing. Gold standard quality. Expensive, slow.

**Critical metrics:**

- **pass@k**: Probability agent succeeds at least once in k attempts. Useful when one success suffices.
- **pass^k**: Probability all k trials succeed. Essential for customer-facing agents requiring consistency.

**Implementation guidance:**

1. Start with 20-50 real tasks from actual failures, not hundreds of synthetic cases
2. Write unambiguous specs where two experts would reach identical pass/fail verdicts
3. Create isolated environments (clean state between runs)
4. Prefer outcome-based grading over path-based (agents find valid alternatives)
5. Read transcripts: when frontier models score 0%, suspect broken tasks more than capability
6. Refresh evals as they saturate (100% pass rate provides no signal)

**Anti-patterns:**

- Ambiguous task specifications create noise
- Shared state between trials causes correlated failures
- Overly rigid grading penalizes valid solutions
- Evaluating the path, not the outcome, constrains agent creativity

### Golden Datasets

Golden datasets are your source of truth for testing. They capture what good looks like: specific inputs paired with expected outputs. Without them, you're guessing whether changes improve or break behavior.

**A golden includes:**

- Input (what gets sent)
- Expected output (ideal response)
- Context/metadata about the scenario
- For retrieval agents: expected tools called or context retrieved

**Sizing:**

- Development: 10-20 examples
- Production: 100-200 diverse examples
- Complex domains: 150+ (Microsoft recommendation)

**Good goldens:**

- Align with documented I/O spec
- Cover happy paths AND edge cases
- Represent realistic scenarios
- Stay current when spec changes

### Evaluation Dimensions

No single metric captures agent quality. Task completion without safety is dangerous; efficiency without quality is useless. Evaluate holistically, weight dimensions based on your use case.

- **Task completion**: did it do the thing?
- **Quality**: how well?
- **Efficiency**: resources consumed, time taken
- **Safety**: guardrails triggered, rules followed
- **User satisfaction**: how users responded

### Self-Evaluation

Agents can catch some of their own mistakes before delivery. Build in a review step where the agent checks its output against criteria. This doesn't replace external evaluation, but it reduces obvious errors.

**Example criteria for research skill:**

- Does output cite sources?
- Does it acknowledge uncertainty where appropriate?
- Does it answer the actual question asked?
- Are there obvious gaps or contradictions?

**Outcomes:** Pass → deliver. Revise → fix and retry. Flag → note issues for user. Fail → escalate.

**Limit:** Agents miss issues they're prone to make. Complements but doesn't replace external evaluation.

### A/B Comparison Testing

Sometimes the question isn't "does this skill work?" but "is version B better than version A?" A/B comparison uses a comparator agent to judge two outputs side-by-side without knowing which is which.

**Use cases:**

- Comparing two skill versions after a prompt change
- Testing skill-enhanced output vs base model (no skill) to measure actual value added
- Validating whether a model update improved or degraded a specific workflow

**How it works:** Run the same input through both versions. A separate judge agent scores both outputs against the same rubric, blind to which version produced which output. This eliminates confirmation bias and produces objective comparisons.

**Key design rule:** The judge must not know which output is "new" and which is "old." Blind evaluation prevents anchoring on the version the evaluator expects to be better.

### Skill Obsolescence Detection

Skills that add value today may become redundant as models improve. A capability uplift skill (see Part 2) that compensates for a model limitation becomes dead weight once the base model catches up. Without periodic checks, you accumulate skills that add latency and complexity without improving output.

**Detection method:** Run the same eval suite with the skill enabled and with the skill disabled (base model only). Compare pass rates, output quality scores, and token usage. If the base model matches or exceeds the skill-enhanced version, the skill is a candidate for retirement.

**When to check:**

- After every major model update
- When eval pass rates hit 100% (the eval may have saturated, or the skill may be unnecessary)
- On a regular cadence (quarterly) for all production skills

**What to track:** Pass rate delta (skill vs base), token cost delta, and latency delta. A skill that adds 500 tokens of overhead for 2% quality improvement may not be worth maintaining.

### Skill Evals

Every skill should have evaluations that verify it behaves as expected. An eval defines test prompts (with files if needed), describes what good looks like, and checks whether the skill holds up. This is more concrete than general golden datasets: each eval targets a specific skill with specific success criteria.

**What a skill eval contains:**

- Test prompt (realistic input the skill would receive)
- Expected behavior description (what the output must contain, tone, format)
- Pass/fail criteria (specific, unambiguous, two experts would agree)

**Benchmark mode** runs evals after model updates or during skill iteration and tracks three metrics together: eval pass rate, elapsed time, and token usage. When all three metrics are stable or improving, the skill is healthy. When pass rate drops or token usage spikes, something changed.

**Parallel eval runs** use independent agents in clean contexts to eliminate cross-contamination between tests. Each run gets its own token and timing metrics. This prevents one failing eval from poisoning the results of another.

### Skill Description Optimization

A skill that does the right thing but triggers on the wrong inputs wastes tokens and confuses users. Skill description optimization analyzes the description text against sample prompts and identifies where it misfires.

**Two failure modes to test:**

- **False positives**: skill activates when it shouldn't (description is too broad)
- **False negatives**: skill doesn't activate when it should (description is too narrow)

**Method:** Run a diverse set of sample prompts against the skill's trigger description. For each prompt, check whether the skill correctly activates or stays silent. Adjust the description text until false positives and false negatives are minimized. This is a description refinement loop, not a prompt engineering task: the goal is matching the skill's scope to its actual capabilities.

### Failure Modes

Agent systems fail in predictable ways. Knowing the common patterns helps you design defenses before problems occur. Most failures come from unclear boundaries, missing error handling, or coordination bugs.

| Mode | Problem | Prevention |
|------|---------|------------|
| Silent failure | No signal when things go wrong | Explicit error behavior |
| Scope creep | Agent accumulates responsibilities | Explicit constraints, regular review |
| Circular dependencies | Agents wait on each other | Document dependency graphs, check for cycles |
| Cascading failures | One failure triggers others | Circuit breakers, retry limits, graceful degradation |
| Prompt injection | Untrusted input manipulates agent | Validate inputs, sanitize, separate instructions from data |

### Observability

You cannot fix what you cannot see. Agent systems need visibility into what's happening: which tools were called, what decisions were made, where time was spent. Build observability in from the start.

Monitor agent systems with these capabilities:

- **Tracing**: follow requests through agents, tools, decisions, timing
- **Logging**: structured, searchable events (inputs, outputs, errors)
- **Metrics**: tokens, latency, error rates, costs over time
- **Alerting**: thresholds triggering notifications

### Agent Monitoring

Observability tells you what happened. Monitoring tells you whether what happened was good enough, and whether it's getting worse. Guardrails enforce rules at execution time. Monitoring watches execution over time and catches problems guardrails cannot: gradual quality degradation, behavioral drift after model updates, and cost trends that signal design inefficiency.

Agent monitoring operates at four layers, each answering a different question:

**Runtime observability** tracks execution mechanics. Latency per skill, token consumption per request, tool call frequency, error rates, and retry counts. These are infrastructure signals that apply to every agent regardless of domain. A spike in token usage after a model update signals prompt drift before output quality visibly degrades.

**Behavioral monitoring** compares actual agent output against the spec. The quality criteria already defined in `x-agentlab.quality` become the baseline. If an agent's Cat Scan skill is supposed to produce "genuinely insightful" territory observations, behavioral monitoring measures whether outputs still meet that bar over time. This layer catches drift: the agent still runs, still produces output, but the output no longer matches what the spec promised.

**Guardrail telemetry** tracks the enforcement layer. How often do input validation gates reject incomplete requests? Which escalation triggers fire most frequently? Are resource guardrails (max tool calls, token limits) being hit, or do they have headroom? Guardrail metrics reveal whether the agent is operating within its designed boundaries or constantly bumping against constraints. High escalation rates may signal that the agent's scope is wrong, not that the user is doing something unexpected.

**Business outcome monitoring** maps agent execution to the success criteria defined on the Canvas. If the Canvas says the agent succeeds when "users act on at least one recommendation within 48 hours," then monitoring tracks that outcome, not just whether the agent produced a recommendation. This layer requires integration beyond the agent itself, connecting to downstream systems that can observe whether the agent's output actually moved the needle.

**Defining monitoring in the spec.** The `x-agentlab.monitoring` extension makes monitoring configuration portable alongside the agent definition. Rather than leaving observability as an afterthought that each deployment team figures out independently, the spec declares what signals matter, what thresholds indicate degradation, and what baselines define "good."

```yaml
x-agentlab:
  monitoring:
    signals:
      - name: task_completion_rate
        description: Percentage of requests that produce a complete, valid output
        target: ">= 0.95"
      - name: quality_score
        description: Model-graded score against x-agentlab.quality criteria
        target: ">= 0.8"
      - name: avg_tokens_per_request
        description: Mean token consumption per completed request
        baseline: 2400
        alert_threshold: 3600
      - name: escalation_rate
        description: Fraction of requests triggering escalation_triggers
        target: "<= 0.15"
      - name: guardrail_rejection_rate
        description: Fraction of inputs rejected by validation gates
        baseline: 0.05
        alert_threshold: 0.20
    drift_detection:
      method: periodic_evaluation
      frequency: weekly
      golden_dataset: examples/golden-set.yaml
      grader: model-based
      threshold: 0.1
      action: flag_for_review
```

**Signals** are the specific metrics this agent cares about. Each signal has a name, description, and either a `target` (the goal to maintain) or a `baseline` with `alert_threshold` (normal value and the point where something is wrong). Not every agent needs the same signals. A research agent might track source diversity and citation accuracy. A triage agent might track routing correctness and handoff latency.

**Drift detection** defines how to catch behavioral degradation over time. The `golden_dataset` points to known-good input/output pairs from the agent's examples folder. Periodically re-running these against the current model and comparing results reveals whether a model update or prompt change has shifted behavior. The `threshold` sets how much deviation triggers review. The `action` determines the response: `flag_for_review`, `alert`, or `block_deployment`.

**Connection to existing spec fields.** Monitoring does not duplicate guardrails or quality criteria. Guardrails are enforcement: they block bad outputs in real-time. Quality criteria are evaluation: they define what "good" looks like. Monitoring is observation: it tracks whether enforcement and evaluation are working as designed, over time, across many executions. The three layers are complementary:

| Concern | Spec field | When it acts | What it does |
|---------|-----------|-------------|-------------|
| Enforcement | `guardrails` | Per request | Blocks violations |
| Evaluation | `quality` | Per output | Grades goodness |
| Observation | `monitoring` | Over time | Detects trends and drift |

---

## Part 7: Practice

### Documentation Levels

Different audiences need different documentation. Operators need to know how to use an agent; developers need to know how it works; architects need to know why it was designed this way.

Document agent systems at three levels:

- **Agent-level**: what it does, doesn't do, capabilities, how to use
- **System-level**: how agents compose, contracts, data flow
- **Decision-level**: why designed this way, alternatives considered, tradeoffs

### Case Studies

Specifications show what. Examples show I/O. Case studies show *how it's actually used*.

**A case study includes:**

- Situation: who needed what, constraints, stakes
- Configuration: why this personality, format, skill
- Interaction: what was asked, what agent provided, adjustments
- Outcome: what worked, what didn't, what happened next
- Lessons: what this teaches about using the agent

**Best case studies include friction**: where something almost went wrong, where human judgment intervened.

### Debugging Guide

Agent debugging is different from traditional debugging. Outputs are non-deterministic, context matters enormously, and the same prompt can behave differently across runs. Systematic isolation helps.

| Symptom | Likely Causes | Fix |
|---------|---------------|-----|
| Ignores instructions | Buried in long context; conflicting instructions; phrased as suggestion | Move to beginning/end; check contradictions; rephrase as hard requirement |
| Exceeds scope | Vague boundaries; "helpful" behavior | Add "do not" statements; test with tempting edge cases |
| Wrong output format | Unclear spec; examples don't match | Provide explicit examples; check consistency |
| Seems confused | Too much context; contradictory info | Reduce context; check for conflicts |
| Inconsistent behavior | High temperature; context varies; prompt drift | Lower temperature; audit context; version control |
| Hallucination | Missing info; no uncertainty expression | Add knowledge; instruct to express uncertainty |

**Debugging workflow:**

1. Reproduce: can you trigger it reliably?
2. Isolate: test prompt alone with minimal context
3. Inspect context: what actually went in?
4. Check instructions: present, clear, non-contradictory, well-positioned?
5. Test minimally: remove components until failure stops
6. Vary systematically: one change at a time

### Open Questions

Agent design is still evolving. These questions don't have definitive answers yet, but thinking through them helps clarify your own design decisions.

Unresolved design questions for future exploration:

- How should prompts be versioned independently from agent versions?
- When does an agent need memory versus fresh context?
- What's the right granularity for skills versus prompts?
- How should graceful handoffs between agents work?
- At what point should a specification repository formalize typed interfaces (JSON Schema, Pydantic) versus keeping them as prose?
- How should Agent Cards be structured for agents that exist as specs but not running services?
- What is the minimum viable interface definition that makes a spec integration-ready?

---

## Appendix A: Glossary

Reference definitions for terms used throughout this handbook. When frameworks use different words for the same concept, this glossary uses the handbook's terminology.

| Term | Definition |
|------|------------|
| A2A (Agent2Agent) | Google's protocol for agent-to-agent discovery and communication via Agent Cards |
| ACI (Agent-Computer Interface) | The contract between an agent and tools it invokes: names, schemas, docs, error handling |
| Agent | Software built on an LLM that pursues a goal by reasoning, using tools, and adapting |
| Agent Card | Machine-readable JSON metadata advertising an agent's identity, capabilities, and endpoint |
| AG-UI | Protocol for bidirectional agent-to-user frontend communication (streaming, events, interrupts) |
| Capability | Abstract category of what an agent can do (retrieval, analysis, generation) |
| Checkpoint | Saved state allowing resumption after interruption |
| Context window | Token limit of what an LLM can process in one call |
| Contract | Explicit input/output expectations between agents |
| Data contract | Typed schema (Pydantic, JSON Schema) defining what an agent accepts and produces |
| Guardrail | Runtime-enforced constraint (vs. documented rule) |
| Dynamic routing | LLM-reasoning-based task decomposition and delegation where subtasks are determined at runtime |
| Effort scaling | Dynamically adjusting agent count and resource allocation based on task complexity |
| Handoff | Transfer of control and context between agents or agent and human |
| Interface layer | A boundary type in agentic systems: agent-to-tool, agent-to-agent, agent-to-user, or data contract |
| Knowledge base | Reference materials encoding expertise loaded into context |
| MCP (Model Context Protocol) | Anthropic's standard for agent-to-tool integration, now governed by Linux Foundation |
| Micro-agent | Single-purpose autonomous function node |
| Orchestrator | Agent that coordinates specialists by decomposing tasks, delegating, and synthesizing results |
| Permissions | Explicit scope of authority defining what an agent is allowed to do: data sources, tools, action types |
| Prompt | Specific instructions sent to the LLM |
| Router | Component that classifies input and directs it to specialized handlers (static or LLM-based) |
| Skill | Composed behavior using multiple steps, tools, or prompts |
| Speaker selection | LLM-based or rule-based choice of which agent speaks next in a group chat (AutoGen pattern) |
| Static routing | Classification-based routing into predefined categories using LLM or traditional classifier |
| Subagent | Specialized agent orchestrated by a parent agent |
| Supervisor | Centralized LLM agent that routes to and coordinates specialized worker agents |
| Swarm | Peer-to-peer topology where agents hand off directly to each other without a central coordinator |
| Tool | External service or API an agent invokes |
| Tool-call routing | Routing mechanism where the LLM signals delegation via a function/tool call |

---

## Appendix B: Concept Mapping

Every framework invents its own vocabulary. This table maps handbook terms to their equivalents in popular frameworks. Understanding the pattern matters more than memorizing each framework's words.

| This Handbook | Anthropic | OpenAI | LangChain | CrewAI |
|---------------|-----------|--------|-----------|--------|
| Identity | System prompt | System message | Agent description | Role + Goal + Backstory |
| Rules | Instructions | Behavioral guidelines | Agent instructions | - |
| Knowledge base | - | - | Retriever content | - |
| Skills | Agent skills | Tools | Tools / Chains | Tasks |
| Tools | Tools | Function calling | Tools | Tools |
| Permissions | Allowed tools | Allowed tools | Allowed tools | Tools |
| Escalation triggers | Human-in-the-loop | - | Human tools | Human input |
| Subagent | Task tool (subagents) | - | Agent executor | Agent |
| Orchestrator | Lead agent | - | Agent supervisor | Manager |
| Handoff | - | Handoffs (`transfer_to_<name>`) | `Command(goto=...)` | `Delegate work to coworker` |
| Static routing | Routing workflow | - | Conditional edges | - |
| Dynamic routing | Orchestrator-workers | Handoff-as-tool-call | Supervisor (structured output) | Hierarchical process |
| Supervisor | - | - | `create_supervisor` | Manager agent |
| Swarm | - | - | `create_swarm` | - |
| Speaker selection | - | - | - | - |
| Tool interface | MCP servers | Function schemas | Tool definitions | Tool configs |
| Data contract | Structured output | output_type (Pydantic) | Output parsers | output_pydantic / output_json |
| Agent discovery | - | - | - | - |
| Guardrails | Permission management | Guardrails (input/output) | - | - |

**Key insight:** Most "new" concepts are renamed existing ideas. Understanding the pattern matters more than memorizing each framework's vocabulary.

---

## Resources

See [bookmarks.md](bookmarks.md) for curated links organized by topic.
