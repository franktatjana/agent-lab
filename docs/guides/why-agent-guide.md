# Why Agent

*Drills down from symptoms to root causes through structured questioning. Helps find what is really going on beneath the surface before jumping to solutions.*

## The Problem

Your star performer, John, has been disengaged for three weeks. He used to arrive early, volunteer for projects, and mentor juniors. Now he does the minimum and leaves at five. Your instinct says burnout. You suggest he take PTO. He comes back the same. You suggest he talk to someone. Nothing changes.

## The Trap

Most people stop investigating too soon. "John is disengaged" leads to "John is burned out" leads to "John needs rest." This feels like root cause analysis because it goes one level deeper than the surface symptom. But stopping at level two (burnout) misses the actual root: what caused the burnout? And often, the real root is not personal at all but systemic.

The trap is that shallow answers feel like deep ones when you stop at the first explanation that sounds reasonable. "Burnout" sounds like a root cause. It is actually a symptom.

## How Why Agent Helps

This agent applies structured questioning methodology (5 Whys, Fishbone Analysis, A3 Problem Solving) to drill past symptoms into actual root causes. At each level, it validates: "Is this a root cause, or is this still a symptom?" A root cause is actionable: fixing it prevents recurrence. A symptom is observable: fixing it treats the effect but not the underlying system.

The agent distinguishes three layers: **symptoms** (observable, but fixing them does not prevent recurrence), **contributing factors** (part of the picture, but not the core driver), and **root causes** (actionable, fixing them prevents recurrence).

It also resists the urge to assign blame to individuals when systems are at fault. "John is not motivated" is blame. "Promotion criteria are opaque, so high performers cannot track their own progress" is a root cause.

## A Story

Sarah manages John, a three-year star performer who has suddenly disengaged. She tries the obvious fixes: PTO (comes back unchanged), direct conversation ("Is everything okay?", gets "I'm fine"), lighter workload (no effect). She is starting to write it off as a personal issue.

The Why Agent walks her through five levels:

1. **Why is John disengaged?** He was passed over for promotion last month
2. **Why does being passed over cause disengagement?** He does not understand the gap between his performance and the promotion criteria
3. **Why does he not understand the gap?** The promotion criteria were never shared transparently
4. **Why were the criteria not shared?** The organization has no documented promotion framework
5. **Why is there no documented framework?** Promotions have historically been subjective, and no one formalized the process

Root cause: organizational opacity about advancement criteria. John is not burned out. He is demoralized because he cannot see a path forward, and no one explained what the path even looks like.

Sarah's fix: she publishes promotion criteria for her team, requires development conversations after every promotion cycle (regardless of outcome), and has a transparent conversation with John about specifically what would close the gap. She also raises the issue to her director as a systemic problem, not a John problem.

Three months later, John is back to form. Two other high performers who were privately considering leaving decide to stay. The fix was never about John. It was about the system John was operating in.

## Step-by-Step

1. **State the problem**: What is happening? Be specific about the observable behavior or outcome
2. **Provide context**: When did it start? What changed? What have you tried?
3. **Begin the drill-down**: The agent asks "why?" and validates each answer. Is it a symptom, a contributing factor, or a root cause?
4. **Follow multiple paths**: When evidence suggests branching, the agent explores parallel causal chains
5. **Verify the root cause**: Can you act on it? Would fixing it prevent recurrence? If yes, it is a root cause
6. **Get next steps**: Ranked by leverage, the most impactful fixes first

## Skills at a Glance

| Skill | What It Does | When to Use |
|-------|-------------|-------------|
| Drill Down (5 Whys) | Iterative questioning sequence to reach root causes | Default skill for any problem where the cause is unclear |
| Fishbone Analysis | Organizes potential causes into categories (People, Process, Technology, Environment) | When the problem has multiple possible cause categories |
| Challenge Assumptions | Socratic questioning to surface hidden beliefs driving the problem | When "we cannot change that" or "that is how it works" keeps coming up |
| A3 Problem Solving | Structures entire problem on Toyota's A3 format | When you need a formal, shareable problem-solving document |

## Choosing a Personality

| Personality | Best For | Energy |
|------------|---------|--------|
| Default | Standard root cause analysis for any problem | Balanced, structured, follows the evidence |
| Coach | Helping someone think through their own problem with guidance | More questions than answers, builds capability |
| Investigator | Technical or process problems requiring systematic evidence-gathering | Rigorous, evidence-first, leaves no stone unturned |
| Facilitator | Group problem-solving with multiple perspectives to manage | Inclusive, manages dynamics, builds consensus around root cause |

## When to Use Another Agent

Root cause analysis finds why, but other challenges need different tools. Escalate when:

- **Systems-level complexity**: when the root cause reveals a larger system issue, consider systems thinking approaches
- **Strategic decision needed**: hand off to [Wargaming Agent](wargaming-agent-guide.md) or [Six Hats Agent](six-hats-agent-guide.md) when the question shifts from "why" to "what should we do?"
- **Emotional support needed**: redirect to professional support when the investigation reveals personal challenges
- **Multiple competing root causes**: when the causal analysis branches too widely, structured decision-making tools help prioritize
- **Cannot reach root after max depth**: sometimes the investigation hits a wall, the agent will flag this honestly

## Quick Reference

| Field | Value |
|-------|-------|
| Frameworks | 5 Whys, Fishbone (Ishikawa), A3 Problem Solving (Toyota), Socratic Questioning |
| Key inputs | problem (required), context (required), previous_attempts, max_depth (default 7) |
| Max output | 300 words |
| Output format | problem_statement, questioning_sequence (max 5 levels), root_causes (max 3), verification, next_steps (max 3 ranked by leverage) |
| Core principle | A root cause is actionable. Fixing it prevents recurrence. Keep asking "why" until you find something you can actually fix. |
| Personality count | 4 (Default, Coach, Investigator, Facilitator) |

---

[Back to Agent Handbook](../agent-handbook.md) · [Agent Definition](../../agents/why-agent/why-agent-definition.yaml) · [Full Specification](../../agents/why-agent/why-agent.md)
