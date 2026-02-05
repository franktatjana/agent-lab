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

### Multi-Agent Coordination

Coordination failures are the most common source of bugs in multi-agent systems. Agents that work fine in isolation break when composed, usually because expectations don't match. Explicit contracts prevent integration surprises.

- **Handoffs**: what transfers (context, state, remaining work), format, acknowledgment
- **Contracts**: explicit input/output expectations
- **Conflict resolution**: handling contradictory outputs or resource competition
- **Shared context**: shared memory, coordinator agent, explicit passing

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

---

## Appendix A: Glossary

Reference definitions for terms used throughout this handbook. When frameworks use different words for the same concept, this glossary uses the handbook's terminology.

| Term | Definition |
|------|------------|
| Agent | Software built on an LLM that pursues a goal by reasoning, using tools, and adapting |
| Capability | Abstract category of what an agent can do (retrieval, analysis, generation) |
| Checkpoint | Saved state allowing resumption after interruption |
| Context window | Token limit of what an LLM can process in one call |
| Contract | Explicit input/output expectations between agents |
| Guardrail | Runtime-enforced constraint (vs. documented rule) |
| Handoff | Transfer of control and context between agents or agent and human |
| Knowledge base | Reference materials encoding expertise loaded into context |
| Micro-agent | Single-purpose autonomous function node |
| Prompt | Specific instructions sent to the LLM |
| Skill | Composed behavior using multiple steps, tools, or prompts |
| Subagent | Specialized agent orchestrated by a parent agent |
| Tool | External service or API an agent invokes |

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
| Subagent | - | - | Agent executor | Agent |
| Orchestrator | - | - | Agent supervisor | Manager |
| Handoff | - | Handoffs | - | Delegation |

**Key insight:** Most "new" concepts are renamed existing ideas. Understanding the pattern matters more than memorizing each framework's vocabulary.

---

## Resources

See [bookmarks.md](bookmarks.md) for curated links organized by topic.
