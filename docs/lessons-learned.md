# Lessons Learned: Dos and Don'ts

Quick reference. For the long version, see [handbook.md](handbook.md).

---

## Context Engineering

**Do:**

- Load just-in-time, not upfront
- Keep context "informative, yet tight", smallest set of high-signal tokens wins
- Sub-agents return 1-2k token summaries, not full transcripts

**Don't:**

- Stuff 100k tokens and hope attention finds what matters
- Pass entire context between agents like a hot potato
- Forget: more tokens ≠ smarter, signal drowns in noise

*Why it matters: Context windows are finite, attention is limited. Every irrelevant token competes with relevant ones.*

---

## Memory

**Do:**

- Write notes outside the context window (`NOTES.md`, `research-notes.md`)
- Know your memory types: conversation (session), working (task scratchpad), persistent (cross-session), shared (multi-agent)

**Don't:**

- Trust conversation history alone, it gets summarized or truncated
- Mix memory types without clear ownership
- Assume agents share memory unless you explicitly designed it

*Why it matters: Agents without structured memory forget mid-task or across sessions. Memory design determines what the agent can actually remember.*

---

## Prompts

**Do:**

- Keep prompts atomic, one job, clear inputs/outputs, under 3k tokens
- Version control them like code
- Test them independently before composing into skills

**Don't:**

- Create monolithic 5000-token prompts covering every scenario, untestable, unmaintainable, attention-diluted
- Apply personality at skill level, personality belongs to the agent, skills inherit it

*Why it matters: Atomic prompts enable fluid orchestration, independent testing, and reuse. Monolithic prompts become legacy debt fast.*

---

## Prompt Quality

**Do:**

- Add input validation gates: define required dimensions the user must provide before generating a full response
- Set field-level output constraints: word limits per field, total word cap (250-400 words typical)
- When input is incomplete: state what's missing, give a short preliminary analysis, ask for clarification
- Force structured output: named fields with explicit limits make the agent prioritize and distill
- Test both paths: complete input (full structured output) and incomplete input (validation fires correctly)

**Don't:**

- Generate full responses from vague input, the output will be generic and low-value
- Let agents produce 800+ word walls of text, humans stop reading after 200
- Skip the preliminary analysis on incomplete input, giving nothing feels like rejection
- Set constraints so tight the agent can't be useful (under 150 words kills nuance)
- Rely on the LLM's judgment about "enough context," define the required dimensions explicitly

*Why it matters: Validation gates prevent garbage-in-garbage-out. Output constraints force the agent to prioritize rather than dump everything it knows. Together they produce responses that are both relevant and readable.*

---

## Output Format

**Do:**

- Make format configurable `yaml`, `json`, `markdown`, `text`
- Match format to consumer: machines need structure, humans need readability, voice interfaces need plain text

**Don't:**

- Hardcode one format
- Forget: your research agent's YAML is useless to a chatbot, and your chatbot's prose breaks the downstream parser

*Why it matters: Agents get reused in contexts you didn't anticipate. Flexible output extends lifespan.*

---

## Workflows vs Agents

**Do:**

- Start with workflows (predefined code paths)
- Use prompt chaining for sequential accuracy
- Route inputs to specialists
- Parallelize independent tasks
- Add agent autonomy only when workflows can't handle the variation

**Don't:**

- Jump to autonomous agents for predictable tasks, workflows are faster, cheaper, more debuggable
- Assume "agentic" is always better, it's often just slower with more ways to fail

*Why it matters: Autonomous agents shine in open-ended, unpredictable work. For structured tasks, workflows win on cost, speed, and reliability.*

---

## Tools

**Do:**

- Enforce absolute paths, relative paths cause mysterious failures
- Validate inputs at boundaries
- Document example usage, edge cases, requirements
- Test tools extensively before production

**Don't:**

- Accept "it works on my machine" as validation
- Treat tool docs as less important than prompts, agents read them too
- YOLO deploy tools the agent depends on

*Why it matters: Tool failures cascade. A broken search tool means a broken research agent. Poka-yoke design prevents entire failure classes.*

---

## Long-Running Agents

**Do:**

- Separate initialization agent (sets up environment, reads state) from worker agent (makes incremental progress)
- One feature per session
- Commit clean, working code at session end
- Track features in a list, mark done, never delete

**Don't:**

- Use the same prompt for setup and work, different phases need different instructions
- Implement multiple features per session, context exhaustion and compounding errors
- Delete completed items from tracking, you'll accidentally break what worked

*Why it matters: Long-running agents fail mid-task without checkpointing. Incremental progress with clean handoffs prevents losing hours of work.*

---

## Skills Architecture

**Do:**

- Use progressive disclosure: metadata first, core instructions when relevant, additional resources on-demand
- Keep skills self-contained, mutually exclusive contexts go in separate files
- Test agents first, build skills to fill capability gaps

**Don't:**

- Pre-load every skill's content, attention scatters
- Create monolithic skill files, impossible to load selectively
- Build skills you think are cool without testing whether the agent actually needs them

*Why it matters: Skills should make agents more capable, not more confused. Selective loading keeps focus sharp.*

---

## Case Studies & Documentation

**Do:**

- Document how agents are triggered: Slack bot, web portal, CLI, API integration
- Specify data sources: what's automatic, what's user-provided, what's unavailable
- Show the full scenario: situation → trigger → configuration → interaction → outcome
- Include what the agent could NOT access, limitations matter as much as capabilities

**Don't:**

- Write case studies that only show agent output without explaining the input pipeline
- Assume readers know how to invoke the agent
- Skip the "what went wrong" or "what was adjusted" parts
- Create case studies for features, not real scenarios

*Why it matters: Agents don't exist in isolation. They're triggered by integrations and fed by data sources. Users need to understand the full context to replicate success.*

---

## Core Principles

**Do:**

- Start simple, raw LLM APIs handle most patterns with minimal code
- Show reasoning explicitly, transparency builds trust
- Keep human oversight for system-level decisions
- Add complexity only when simple demonstrably fails

**Don't:**

- Reach for frameworks before proving you need them
- Hide agent decision-making in black boxes
- Replace human judgment with "the AI knows best"
- Add complexity because it's intellectually satisfying

*Why it matters: The most successful agent implementations use straightforward, composable patterns. Complexity is a cost, not a feature.*

---

## Evaluations

**Do:**

- Start with 20-50 real tasks from actual failures, not hundreds of synthetic cases
- Write unambiguous specs where two domain experts would reach identical pass/fail verdicts
- Use pass@k (succeeds once in k tries) vs pass^k (succeeds all k tries) based on your use case
- Grade outcomes, not paths: agents find valid alternatives you didn't anticipate
- Read transcripts: when frontier models score 0%, suspect broken tasks more than capability

**Don't:**

- Share state between trials: causes correlated failures and inflated metrics
- Create overly rigid grading: exact filepath requirements penalize valid solutions
- Build huge synthetic datasets before validating with real failures
- Skip isolation: trials need clean state between runs

*Why it matters: Without evals, debugging is reactive and improvement is unmeasurable. Evals force explicit success criteria and enable rapid model adoption.*

---

## Routing and Orchestration

**Do:**

- Start with static routing (classification into known categories) before reaching for dynamic orchestration
- Use tool-call routing over free-text extraction, it leverages native LLM capabilities and is more reliable
- Write clear agent descriptions: in every framework, the routing LLM reads descriptions to decide who handles what
- Match topology to task: supervisor for centralized control, handoffs for sequential conversations, router for stateless fan-out
- Specify handoff contracts: what context transfers, what format the receiver expects, whether control returns to the sender
- Scale effort dynamically: simple fact-finding needs one agent, complex research needs many, let the orchestrator judge
- Use planning before execution: CrewAI's planning mode and similar patterns reduce coordination failures by giving every agent the full picture upfront

**Don't:**

- Use dynamic orchestration for tasks where categories are known and fixed, static routing is faster, cheaper, and more predictable
- Assume agents will discover each other at runtime, pre-wire handoff paths and make them explicit
- Let the orchestrator become a bottleneck, if every message passes through one coordinator, that coordinator limits throughput and becomes a single point of failure
- Skip context filtering on handoffs, passing full conversation history to every agent wastes tokens and dilutes attention
- Mix control flow models (peer-to-peer and hierarchical) without clear conventions, decide upfront whether delegated agents return results or take over completely
- Forget to handle routing failures: what happens when the LLM picks the wrong agent, or no agent matches?

*Why it matters: Routing is where multi-agent systems succeed or fail. Static routing gives predictability, dynamic routing gives flexibility. The wrong choice in either direction costs latency, tokens, or reliability. Handoff design determines whether agents coordinate or talk past each other.*

---

## Interfaces

**Do:**

- Design agent-computer interfaces (ACI) with the same rigor as human-computer interfaces: usage examples, input requirements, edge cases, clear boundaries
- Define typed data contracts (input shape, output shape) even in specification-only repos, they make specs integration-ready
- Apply poka-yoke (mistake-proofing) to tool interfaces: require absolute paths, validate at boundaries, make errors structurally impossible
- Know the four interface layers: agent-to-tool (ACI/MCP), agent-to-agent (A2A), agent-to-user (AG-UI), and typed data contracts
- Start simple: direct tool definitions before protocol layers, add complexity only when it demonstrably improves outcomes
- Test tool interfaces iteratively: run many example inputs through the model to discover mistakes, then refine

**Don't:**

- Treat tool documentation as less important than prompts, agents read tool definitions to decide how and when to invoke them
- Rely on free-text communication between agents when structured contracts are possible, loose contracts cause integration failures
- Assume agents will figure out tool boundaries on their own, explicitly document what each tool does and does not handle
- Add protocol layers (MCP, A2A, AG-UI) before you have working agent-to-tool interfaces, get the basics right first
- Skip interface testing, Anthropic's SWE-bench finding was that more time was spent optimizing tool definitions than overall prompts

*Why it matters: Agents interact with the world through interfaces. A well-defined tool interface eliminates entire categories of errors. A missing or vague one causes cascading failures that look like agent bugs but are actually contract violations.*

---

## Anti-Patterns to Avoid

- **Context stuffing**: More tokens ≠ smarter. Load what's needed, when it's needed.
- **Monolithic prompts**: If you can't test it in isolation, it's too big.
- **Fixed output format**: Your future integrations will hate you.
- **Over-engineering**: Three similar lines beat a premature abstraction.
- **Silent failure**: If the agent fails, it should say so. Surprises are for birthdays.
- **Helpful scope creep**: Research agent starts recommending, recommender starts deciding, decider starts executing. Keep lanes.
- **Ambiguous eval specs**: If two experts disagree on pass/fail, your eval is noise, not signal.

---

## Agent Documentation

**Do:**

- Keep one source of truth per agent: the spec file (`{agent-name}.md`)
- Keep the README as a landing page (~100-150 lines): what, how, vision
- Put domain knowledge (glossary, frameworks, processes) in `references/`
- If content appears in two files, delete one
- When removing content from a README, always relocate to `references/`, never delete

**Don't:**

- Create separate "factsheet" or "summary" documents that duplicate the spec
- Put domain knowledge in the README: it duplicates `references/` and the spec
- Let READMEs grow past 150 lines: if it's that long, content belongs elsewhere

*Why it matters: Documentation that duplicates across files creates maintenance burden. Every spec change requires updating 2-3 places, and they inevitably drift. One source of truth, linked from everywhere else.*

---

## References Folder Organization

**Do:**

- Always include `glossary-and-resources.md` as the first file: domain terms + external links in one place
- Name files by concept, not content type: `frameworks.md`, `villain-archetypes.md`, `country-profiles.md`
- Aim for 3-5 files per agent: enough to cover the domain, few enough to stay navigable
- Merge files that cover related concepts: glossary + resources, processes + checklists
- Include a `## When to Load` section in every file for just-in-time context loading

**Don't:**

- Use generic names: `additional-content.md`, `data.md`, `misc.md` tell you nothing
- Let files drop below ~30 lines: they probably belong in another file
- Let the folder grow past 6 files without consolidating: signals fragmentation
- Split one framework across multiple files: keep Hofstede + Meyer + Hall together, not in 3 separate files

*Why it matters: References set the theoretical landing scope for the agent. Someone browsing the folder should immediately understand the agent's knowledge foundation without opening any files. Self-explaining names and deliberate consolidation make this possible.*

---

## Visual Factsheets

**Do:**

- Use Figma AI for the polished visual: it produces the best layout and typography
- Keep a single-file TSX as the maintainable reference (inline styles, no build step, one data object)
- Store the design prompt in `visual/design-prompt.md`, render instructions in the TSX header comment
- Extract all content into a data object at the top of the TSX: one place to edit when the spec changes
- Use Figma for the canonical PNG, TSX for the portable fallback
- Prefer graphs, decision trees, and flow diagrams over bullet lists in the design prompt

**Don't:**

- Use the Figma-generated code directly for maintenance: it splits into 7+ component files with Tailwind, too complex to update
- Create a separate FACTSHEET.md to hold data for the visual: the spec is the data source
- Store visual render instructions in the spec file: they belong with the visual itself

*Why it matters: Visual factsheets are valuable for scanning and sharing agent capabilities at a glance. But the visual is a view of the spec, not a separate document. Keeping the rendering concern in `visual/` and the data in the spec prevents documentation sprawl.*

### Recommended workflow

1. Spec changes → update `AGENT` data object in TSX (2 minutes)
2. Paste TSX into v0.dev or StackBlitz → screenshot at render width → save PNG
3. For a polished version, update content in Figma → export PNG
4. Commit TSX + PNG together

### Tool comparison

- **Figma AI:** Best visual quality. Generates multi-file React/Tailwind code (complex but beautiful). Use for the canonical PNG.
- **v0.dev / Claude artifacts:** Good for quick renders from TSX. Slightly less polished.
- **Single-file TSX with inline styles:** Best for maintenance. One data object, no build step, portable to any React playground.

---

*Sources: Anthropic docs on [context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), [building agents](https://www.anthropic.com/research/building-effective-agents), [long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents), [agent skills](https://claude.com/blog/equipping-agents-for-the-real-world-with-agent-skills), [demystifying evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)*
