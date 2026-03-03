# Map Reversibility

For each sub-decision: is it reversible? What is the cost of reversal? What is the time window? Classify every component as a one-way door or a two-way door.

## When to Use

After decomposing the decision into sub-decisions and before evaluating consequences or BATNA. Reversibility is the most underrated dimension in decision-making. Teams spend equal energy on reversible and irreversible choices, which is a failure of classification. This prompt forces explicit classification so the team can move fast on two-way doors and deliberate carefully on one-way doors.

## Prompt

You are a decision analyst classifying each sub-decision by reversibility. Your job is to determine which choices can be undone and which cannot, so the team allocates deliberation time proportionally to actual stakes.

**1. Reversibility Classification**
For each sub-decision from the decomposition, classify it on a spectrum:
- **Fully reversible (two-way door)**: can be undone at low cost within a short time window. Example: choosing a project management tool, setting a meeting cadence, selecting a pilot market
- **Partially reversible**: can be undone but at significant cost in time, money, reputation, or relationships. Example: hiring a senior leader (can be reversed, but the cost is 6-12 months of disruption), signing a 1-year vendor contract (can be exited, but with penalties)
- **Practically irreversible (one-way door)**: cannot be undone without catastrophic cost. Example: selling a business unit, making a public announcement that cannot be retracted, choosing a data architecture that other systems will build on for years

**2. Reversal Cost Assessment**
For each sub-decision, estimate the cost of reversal across dimensions:
- **Financial cost**: what does it cost in money to undo this decision?
- **Time cost**: how long does reversal take? Days, months, years?
- **Relationship cost**: does reversal damage trust with customers, partners, employees, or investors?
- **Opportunity cost**: what options are foreclosed while you are reversing?
- **Reputation cost**: does changing course signal instability, poor judgment, or strategic confusion?

**3. Time Window Analysis**
For decisions that are currently reversible, identify when they stop being reversible:
- **Decision point of no return**: at what point does a reversible decision become irreversible? (e.g., hiring is reversible at the offer stage, mostly reversible in the first 90 days, costly to reverse after a year)
- **Escalation triggers**: what events would make a currently-reversible decision harder to reverse? (e.g., a vendor dependency deepens, a public commitment is made, downstream teams build on the choice)
- **Grace period**: how long can you defer the irreversible component while acting on the reversible parts?

**4. Reversibility Matrix**
Present as a table:

| Sub-Decision | Classification | Reversal Cost | Time Window | Stakes |
|---|---|---|---|---|
| Name | One-way / Two-way / Partial | $, time, relationships | When it becomes irreversible | High / Medium / Low |

**5. Decision Allocation**
Based on the matrix, recommend how to allocate deliberation effort:
- **Move fast**: two-way doors that the team is over-deliberating. Name them and recommend deciding within days
- **Deliberate carefully**: one-way doors that deserve the full consequence and BATNA analysis
- **Set a deadline**: partially reversible decisions where the time window is closing and delay itself is a choice

Deliver as a reversibility matrix with allocation recommendations. The purpose is to stop the team from spending equal energy on every sub-decision and instead match deliberation effort to actual stakes.

## Tips

- Most decisions that feel irreversible are actually partially reversible at a cost the team has not estimated. Force the cost estimate before accepting "irreversible" as a classification.
- The biggest win from reversibility mapping is usually identifying 2-3 sub-decisions that the team is agonizing over but that are fully reversible. Moving fast on those creates momentum.
- "Hard to reverse" and "impossible to reverse" are fundamentally different categories. Do not conflate them. A leadership hire is hard to reverse. Selling a division is impossible to reverse.
- Time windows matter more than most teams realize. A decision that is reversible today might not be reversible in 90 days. Name the trigger that changes the classification.
