# Generate Absurd Solutions

Propose deliberately absurd solutions, then mine each one for the real insight hiding inside the absurdity. The absurdity is not the destination, it is the vehicle for reaching insights that rational analysis cannot access. Each absurd proposal targets a specific invisible assumption, violating it as loudly as possible to reveal what it was hiding.

## Workflow

1. Use `surface-assumptions` with {stuck_situation}, {context} to identify constraints that limit the solution space
2. Use `generate-absurd` with {stuck_situation}, {invisible_assumptions}, {constraints} to generate 3-5 deliberately absurd solutions, each targeting a different invisible assumption
3. Use `extract-insight` with {absurd_solutions}, {context} to extract the real insight from each absurd proposal and translate into serious options

## Inputs

```yaml
stuck_situation: string      # Where every option looks bad
context: string              # Background, stakes, who is involved
constraints: string          # Non-negotiables (optional)
```

## Outputs

```yaml
invisible_assumptions:       # 3-5 invisible rules
  - assumption: string
    why_invisible: string
    what_if_violated: string
inversions:                  # Absurd proposals with insights
  - original_frame: string
    inverted_frame: string
    absurd_solution: string
    real_insight_hidden_inside: string
trickster_counsel: string    # Playful-but-wise synthesis
serious_options:             # 2-4 actionable options
  - option: string
    why_it_was_invisible: string
    risk: string
    potential: string
```
