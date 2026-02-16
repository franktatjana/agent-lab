# Decision Analysis

Evaluate a specific decision from the most decision-relevant perspectives. Focuses on facts, benefits, risks, and gut-check before synthesizing.

## Workflow

1. Use `white-hat-analysis` to establish the factual basis for the decision
2. Use `yellow-hat-benefits` to identify what makes this option attractive
3. Use `black-hat-critique` to surface what could go wrong
4. Use `red-hat-check` to capture gut reactions and emotional signals
5. Use `blue-hat-synthesize` to weigh perspectives and recommend next step

## Inputs

```yaml
topic: string              # The specific decision
context: string            # Why this matters
options: string            # The options being considered (optional)
constraints: string        # Non-negotiables (optional)
```

## Outputs

```yaml
perspective_summary:
  white_hat: string        # Facts relevant to the decision
  yellow_hat: string       # Why this could work
  black_hat: string        # Why this could fail
  red_hat: string          # How this feels
  blue_hat: string         # Synthesis and recommendation
key_insights: list
recommended_action: string
blind_spots: list
```
