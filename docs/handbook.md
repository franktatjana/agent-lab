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

### Boundaries and Constraints

Agents need hard limits on what they can and cannot do. Vague boundaries lead to scope creep; soft preferences get ignored under pressure. Distinguish between rules (process) and constraints (output).

**Rules vs Constraints:**

| Rules | Constraints |
|-------|-------------|
| Govern behavior (process) | Govern output (boundaries) |
| "Always cite sources" | "Max 500 words" |
| "Escalate when confidence is low" | "Never include PII" |
| Verified by observing behavior | Checked on every response |

**Key principle:** Frame as hard requirements, not preferences.

- Bad: "The agent prefers not to make recommendations"
- Good: "The agent must never make recommendations"

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
