# Reversibility Check

Classify each decision component as reversible or irreversible, then map the stakes for each. The fastest way to break decision paralysis is to show the team that most of their sub-decisions are two-way doors.

## Prompts Used

1. **decompose-decision** - Break the decision into 3-6 independent sub-decisions
2. **map-reversibility** - Classify each sub-decision as reversible, partially reversible, or irreversible with reversal cost and time window

## Workflow

[Decompose Decision] → sub-decision list → [Map Reversibility] → reversibility matrix with classification, cost, time window, and decision allocation

## When to Use

- A team has been debating a decision for weeks and cannot reach consensus, likely because they are treating reversible choices with the same gravity as irreversible ones
- You need a fast triage of a complex decision to separate the sub-decisions you can move on immediately from the ones that genuinely require careful deliberation
- Leadership wants to understand the risk profile of a decision before committing resources, specifically which components lock them in and which can be adjusted later
- A decision deadline is approaching and you need to identify which sub-decisions can be deferred without losing optionality
- Someone says "this is a huge decision" and you suspect it is actually 4 small decisions and 1 medium one

## What You Get

1. A decomposition of the original decision into 3-6 independent sub-decisions, each with its own options and stakeholders
2. A reversibility matrix classifying each sub-decision as one-way door, two-way door, or partial, with reversal cost and time window
3. A paralysis diagnosis identifying which sub-decision is actually causing the gridlock
4. A decision allocation showing where to move fast (reversible), deliberate carefully (irreversible), and set deadlines (time-sensitive)

## Example Input

"We're debating whether to switch from our current monorepo to a multi-repo setup. Half the team says it will improve velocity, the other half says it will create coordination nightmares. We've been going back and forth for a month. The CTO wants a decision by Friday."

## Tips

- Run this skill as a standalone when the team needs to unblock quickly. The reversibility classification alone, without full consequence mapping or BATNA, is often enough to get people moving on the easy sub-decisions while the hard ones get deeper analysis.
- The most common outcome is that 60-70% of the sub-decisions are reversible. This realization alone breaks most gridlock because the team can act on the majority immediately and focus deliberation energy on the minority that actually matters.
- If every sub-decision comes back as irreversible, question the classification. True irreversibility is rarer than teams assume. Push for the actual reversal cost rather than accepting "we can't go back" at face value.
