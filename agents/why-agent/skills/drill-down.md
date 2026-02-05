# Drill Down (5 Whys)

Iterative questioning workflow to reach root causes by repeatedly asking "why."

## Workflow

1. **Clarify problem**: Restate the problem in clear, specific terms
2. **First why**: Use `ask-why` with problem statement
3. **Get answer**: User or context provides the answer
4. **Check depth**: Use `verify-root` to see if we've reached root cause
5. **Repeat**: If not at root, use `ask-why` with previous answer
6. **Continue**: Repeat steps 3-5 until root cause verified (typically 5 iterations)
7. **Document**: Record the full questioning chain

## Inputs

```yaml
problem: string           # The problem or symptom to investigate
context: string           # Background information
max_depth: int            # Maximum levels (default: 7)
```

## Outputs

```yaml
problem_statement: string     # Clarified problem
questioning_sequence:
  - level: int
    question: string
    answer: string
root_cause:
  cause: string
  confidence: high | medium | low
  evidence: string
verification:
  tests_passed: list
  notes: string
```

## Prompts Used

- [ask-why](../prompts/ask-why.md): Generate each "why" question
- [verify-root](../prompts/verify-root.md): Confirm root cause reached

## Stopping Conditions

Stop drilling when any of these are true:

1. **Root verified**: `verify-root` confirms we've reached an actionable root
2. **Max depth reached**: Hit max_depth without finding root (escalate)
3. **Circular**: Answers start repeating (we're going in circles)
4. **External**: Cause is outside the system we can influence
5. **User stops**: User indicates they have enough insight

## Branching

Sometimes one "why" has multiple valid answers. When this happens:

1. Note all possible branches
2. Prioritize by evidence strength
3. Drill the most likely branch first
4. Return to other branches if needed

Document branches even if not fully explored.

## Error Handling

- If user can't answer "why": Try rephrasing, or ask what information would help
- If answers are vague: Ask for specific examples or data
- If blame emerges: Reframe to process/system causes
- If stuck at same level: Try `challenge-assumption` to surface hidden beliefs

## Example Sequence

```yaml
problem: "Customers are canceling subscriptions"

sequence:
  - level: 1
    question: "Why are customers canceling subscriptions?"
    answer: "They say the product doesn't meet their needs"

  - level: 2
    question: "Why doesn't the product meet their needs?"
    answer: "The features they wanted aren't being built"

  - level: 3
    question: "Why aren't the features they want being built?"
    answer: "Product team isn't hearing customer feedback"

  - level: 4
    question: "Why isn't the product team hearing customer feedback?"
    answer: "Support tickets don't get routed to product"

  - level: 5
    question: "Why don't support tickets get routed to product?"
    answer: "No process exists to share support insights with product team"

root_cause:
  cause: "No feedback loop from support to product team"
  confidence: high
  evidence: "Confirmed: support and product have no regular touchpoint"
```
