# Reconstruct Context

Rebuild the original decision context from available evidence. After excavating the layers, this skill reconstructs the world in which the original decision was made: the specific constraints, the alternatives considered, and the reasoning that connected them. The goal is to make the current team understand why the decision made sense at the time.

## Prompts Used

1. **excavate-layers** - Identify the layers of decisions that produced the current artifact
2. **reconstruct-context** - Rebuild the original decision context, constraints, rejected alternatives, and rationale

## Workflow

[Excavate Layers] → excavation → [Reconstruct Context] → decision reconstruction with original decision, constraints by category, rejected alternatives, decision-makers, and rationale

## When to Use

- A team wants to change something but needs to understand the original reasoning before they can evaluate whether their proposed change addresses the same concerns differently or ignores them entirely
- An incident occurred involving a legacy system and the investigation needs to understand why the system was designed the way it was, not just what went wrong today
- A new architect or engineering leader has inherited a codebase and needs to understand which design choices were deliberate and which were accidental before proposing a new direction
- An ADR (Architecture Decision Record) is being written retroactively for a decision made before the team started documenting decisions
- The original decision-makers have left the organization and their reasoning needs to be reconstructed from what remains

## What You Get

1. A precise statement of the original decision (not vague, not the current state, but the specific choice that was made)
2. A categorized inventory of constraints (technical, organizational, regulatory, incident-driven, resource, knowledge) with evidence quality for each
3. A list of rejected alternatives with the reasons they were eliminated
4. The best available information about who made the decision and under what conditions
5. A rationale chain connecting the constraints to the chosen path through explicit reasoning

## Example Input

"Our application uses a custom ORM instead of any standard framework. It was written by someone who left 6 years ago. Some developers want to replace it with a standard ORM, others say it handles edge cases the standard ones don't. We need to understand why it was built before we decide."

## Tips

- The constraint inventory is the most valuable output. Constraints are concrete and assessable: you can check whether a specific technology limitation still exists, whether a regulation was updated, whether a team composition has changed. Vague rationales like "they thought it was better" are not useful; push for the specific conditions that made it the better choice.
- Rejected alternatives are often the key to understanding the decision. Knowing what was not chosen and why tells you more about the decision landscape than knowing what was chosen. If an alternative was rejected because the technology did not exist yet, and it now does, that is a strong signal for reassessment.
- When the historical record is incomplete, say so. A reconstruction with explicit gaps is more useful than a smooth narrative that papers over uncertainty. Label speculative elements clearly.
- This skill pairs naturally with the assess-constraints skill. Run reconstruct-context when you need the full decision history; chain into assess-constraints when you need to evaluate whether the constraints still hold.
