# Full Hat Session

Walk through all six thinking hats systematically on a topic, ensuring every perspective gets genuine attention before synthesis.

## Workflow

1. Use `sequence-hats` with {topic} and {context} to determine optimal hat order
2. Use `white-hat-analysis` to establish facts and data
3. Use `red-hat-check` to surface emotions and intuition
4. Use `yellow-hat-benefits` to find positives and value
5. Use `black-hat-critique` to identify risks and problems
6. Use `green-hat-ideate` to generate creative alternatives
7. Use `blue-hat-synthesize` to organize all perspectives into actionable insights

## Inputs

```yaml
topic: string              # The decision, problem, or idea
context: string            # Why this matters, what's at stake
current_thinking: string   # User's position or leaning (optional)
constraints: string        # Non-negotiables (optional)
```

## Outputs

```yaml
hat_sequence: list         # Order the hats were analyzed in
perspective_summary:       # One section per hat
  white_hat: string
  red_hat: string
  yellow_hat: string
  black_hat: string
  green_hat: string
  blue_hat: string
key_insights: list         # Top 3 cross-hat insights
recommended_action: string
blind_spots: list
```
