# Idea Exploration

Expand and evaluate creative possibilities. Starts with facts and creativity, then evaluates through benefits and risks.

## Workflow

1. Use `white-hat-analysis` to establish what exists and what's known
2. Use `green-hat-ideate` to generate creative alternatives and new possibilities
3. Use `yellow-hat-benefits` to evaluate the most promising ideas
4. Use `black-hat-critique` to reality-check the top ideas
5. Use `blue-hat-synthesize` to prioritize ideas and define next steps

## Inputs

```yaml
topic: string              # The idea or domain to explore
context: string            # Why new ideas are needed
seed_ideas: string         # Starting ideas to build on (optional)
constraints: string        # Boundaries for ideas (optional)
```

## Outputs

```yaml
perspective_summary:
  white_hat: string        # Current state and known information
  green_hat: string        # New ideas generated
  yellow_hat: string       # Most promising ideas and why
  black_hat: string        # Risks for top ideas
  blue_hat: string         # Prioritized ideas with next steps
key_insights: list
recommended_action: string
blind_spots: list
```
