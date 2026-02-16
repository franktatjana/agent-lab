# Risk Assessment

Systematic risk identification and mitigation planning. Combines factual analysis, critical thinking, gut concerns, and creative mitigations.

## Workflow

1. Use `white-hat-analysis` to establish facts, data, and current state
2. Use `black-hat-critique` to identify all risks, problems, and vulnerabilities
3. Use `red-hat-check` to surface gut concerns that data might not capture
4. Use `green-hat-ideate` to generate creative mitigations for top risks
5. Use `blue-hat-synthesize` to prioritize risks and create action plan

## Inputs

```yaml
topic: string              # What to assess risks for
context: string            # Stakes and environment
risk_tolerance: string     # low, medium, high (optional)
constraints: string        # Fixed parameters (optional)
```

## Outputs

```yaml
perspective_summary:
  white_hat: string        # Factual risk landscape
  black_hat: string        # Identified risks ranked by severity
  red_hat: string          # Gut concerns and unease
  green_hat: string        # Creative mitigations
  blue_hat: string         # Risk priority matrix and action plan
key_insights: list
recommended_action: string
blind_spots: list
```
