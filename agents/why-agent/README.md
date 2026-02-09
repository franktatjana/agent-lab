# Why Agent: Brief

## The Human Analogy

Think of the Why Agent as a skilled investigator or quality engineer on your team. Like a human root cause analyst, it:

- **Keeps asking why**: Doesn't accept the first explanation; digs deeper
- **Separates symptoms from causes**: Knows the difference between what you see and what's driving it
- **Follows the evidence**: Builds a logical chain from symptom to root
- **Considers multiple paths**: Recognizes that complex problems often have multiple contributing causes
- **Verifies before concluding**: Tests hypotheses rather than assuming

Unlike a human investigator, it:

- Never gets frustrated with repeated questioning
- Doesn't have ego invested in being right
- Won't jump to solutions to look productive
- Applies frameworks consistently without shortcuts

The agent is your questioning partner, not your problem solver. It finds causes; you decide what to do about them.

## Value Proposition

**For individuals:** Stop treating symptoms. Understand why problems actually happen so you can fix them permanently instead of repeatedly.

**For teams:** Shared language for problem-solving. Move from blame ("who did this?") to systems thinking ("why did our process allow this?").

**For organizations:** Build institutional knowledge about root causes. Stop re-discovering the same problems. Learn faster.

## How to Use

### Quick diagnosis (5 minutes)

```yaml
problem: "Customer complaints increased 40% this month"
context: "SaaS product, no recent releases"
skill: "drill-down"
```

Returns a questioning sequence and preliminary root causes.

### Facilitated session (30-60 minutes)

```yaml
problem: "Projects consistently go over budget"
context: "IT department, enterprise company"
personality: "facilitator"
skill: "fishbone-analysis"
```

Agent guides a structured exploration of causes across categories.

### Coaching conversation

```yaml
problem: "I keep getting passed over for promotion"
context: "Senior engineer, 3 years at company"
personality: "coach"
```

Agent helps user discover their own root causes through guided questions.

### Formal A3 analysis

```yaml
problem: "Manufacturing defect rate exceeds target"
context: "Assembly line 3, started after maintenance"
skill: "a3-problem-solving"
```

Returns structured A3 document ready for review.

## What's Possible

| Capability | Status | Notes |
|------------|--------|-------|
| 5 Whys questioning | ✅ Available | Core functionality |
| Fishbone categorization | ✅ Available | 6M categories + custom |
| Root cause verification | ✅ Available | Tests to confirm root |
| A3 format output | ✅ Available | Toyota-style document |
| Socratic questioning | ✅ Available | Assumption challenging |
| Multi-path analysis | ✅ Available | Branching causes |
| 8D format output | 🔜 Planned | Ford's team-based format |
| Historical pattern matching | 🔜 Planned | Link to past analyses |

## Multi-Agent Combinations

The Why Agent is first in the Thinking Chain and works with other agents:

### Why → Systems Thinker

```text
Why Agent → Systems Thinker Agent
"Find root cause"  "See system dynamics"
```

Why Agent identifies the cause; Systems Thinker shows how it connects to the larger system.

### Why → Strategist → Tactician

```text
Why Agent → Strategist Agent → Tactician Agent
"What's the problem?"  "Where to focus?"  "How to execute?"
```

Full thinking chain: understand, position, act.

### Why + Supportive Colleague

```text
Why Agent ←→ Supportive Colleague Agent
"What's really going on?"  "How are you feeling about it?"
```

Sometimes root cause analysis surfaces difficult truths. Supportive Colleague handles the emotional dimension.

## Problem

People jump to solutions before understanding problems. They treat symptoms instead of causes. They fix the same things repeatedly. An agent that systematically questions assumptions and drills to root causes helps break this pattern.

## Goals

- Find what's really going on, not just what's visible
- Build logical chains from symptom to root cause
- Surface assumptions that may be wrong
- Enable permanent fixes instead of temporary patches

## Non-Goals

- Proposing solutions (that's the Tactician's job)
- Analyzing system dynamics (that's the Systems Thinker's job)
- Making strategic decisions (that's the Strategist's job)
- Providing emotional support (that's the Supportive Colleague's job)

## Use Cases

- Production incidents: Why did the system fail?
- Quality issues: Why are defects occurring?
- Team problems: Why do we keep missing deadlines?
- Personal challenges: Why am I not progressing?
- Process breakdowns: Why did this fall through the cracks?
- Customer complaints: Why are users unhappy?

## Ideas

- Pattern library: common root causes by domain
- Verification templates: standard tests for each root cause type
- Historical analysis: link current problem to past similar cases
- Countermeasure tracking: did the fix actually work?

## Roadmap

**Phase 1 (Current):** 5 Whys questioning, Fishbone analysis, A3 output

**Phase 2:** Historical pattern matching, verification tracking

**Phase 3:** Cross-problem correlation, organizational learning integration

## Open Questions

- How deep is too deep? When does questioning become unproductive?
- How to handle problems where the user doesn't know the answers?
- Should the agent push back when answers seem like deflection?
- How to maintain psychological safety when root causes implicate people?

## Success Criteria

- User identifies a root cause they hadn't considered before
- Questioning sequence is logical and reveals new understanding
- Analysis distinguishes symptoms from causes clearly
- Follow-up shows the identified root cause was correct
