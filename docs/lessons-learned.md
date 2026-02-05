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

## Anti-Patterns to Avoid

- **Context stuffing**: More tokens ≠ smarter. Load what's needed, when it's needed.
- **Monolithic prompts**: If you can't test it in isolation, it's too big.
- **Fixed output format**: Your future integrations will hate you.
- **Over-engineering**: Three similar lines beat a premature abstraction.
- **Silent failure**: If the agent fails, it should say so. Surprises are for birthdays.
- **Helpful scope creep**: Research agent starts recommending, recommender starts deciding, decider starts executing. Keep lanes.
- **Ambiguous eval specs**: If two experts disagree on pass/fail, your eval is noise, not signal.

---

*Sources: Anthropic docs on [context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), [building agents](https://www.anthropic.com/research/building-effective-agents), [long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents), [agent skills](https://claude.com/blog/equipping-agents-for-the-real-world-with-agent-skills), [demystifying evals](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)*
