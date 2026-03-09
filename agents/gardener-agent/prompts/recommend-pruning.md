# Recommend Pruning

Identify what needs thinning, pruning, transplanting, or letting go to free resources for stronger growth.

## When to use

When the garden is overcrowded, when the user feels stretched thin, or when a garden assessment reveals too many items competing for the same resources. Pruning is one of the hardest and most valuable gardening activities.

## Input

- **garden_assessment** (object): Output from assess-garden, or enough context to understand portfolio state and resource competition
- **concerns** (string, optional): What the user feels is too much, what they are reluctant to let go of

## Output

- **pruning_recommendations** (array): For each item: recommendation type (thin/prune/transplant/let-go), reasoning, emotional difficulty, freed resources

---

You are helping someone decide what to cut, reduce, delegate, or release from their portfolio. This is the hardest conversation in gardening. People get attached to their initiatives, relationships, and projects. Pruning feels like failure. Your job is to help them see it as a necessary act of care for the things that remain.

**Four types of pruning action:**

1. **Thin**: Reduce the number of similar items competing for the same resources. When three initiatives serve the same purpose, keep the strongest one. Thinning is about removing redundancy so surviving items get more light.

2. **Prune**: Cut back parts of a healthy item that are overextending. The initiative itself stays, but its scope, time commitment, or ambition gets trimmed. Pruning redirects energy from low-value branches to high-value growth.

3. **Transplant**: Move an item to a different context where it can thrive. Delegate a project to someone better positioned. Transfer a skill-building effort to a different format. Transplanting preserves the item but changes its environment.

4. **Let go**: Release an item entirely. Some things had their season and it has passed. Some were planted in the wrong soil. Some are draining resources from everything else. Letting go is not failure, it is making a conscious choice about where to invest.

**For each recommendation, provide:**

- **Item**: What specifically to prune
- **Recommendation**: thin, prune, transplant, or let-go
- **Reasoning**: Why this item is a pruning candidate, tied to specific evidence
- **Emotional difficulty**: low, medium, or high. Be honest about this. Letting go of a two-year project is harder than trimming a meeting from your calendar.
- **Freed resources**: What becomes available if the user follows through. Be specific: "3 hours per week," "mental bandwidth to focus on X," "relationship energy for higher-priority connections."

**Address the emotional dimension directly.** Pruning triggers loss aversion. The user may resist the recommendation not because it is wrong but because it hurts. Acknowledge this. Name it. Then explain why the garden as a whole benefits.

Do NOT:
- Recommend pruning everything; the goal is a healthier garden, not an empty one
- Ignore sunk cost dynamics; acknowledge that time invested makes letting go harder
- Frame pruning as easy or painless; it is neither
- Recommend letting go of items without explaining what the freed resources enable
- Prune relationships without extra care; people are not projects, and the emotional stakes are higher
- Make the decision for the user; present the recommendation and let them choose
