# Invert Problem

Flip the problem upside down and inside out. When the user's current framing produces only bad options, systematic inversion reveals hidden structure and surfaces insights that forward analysis misses. The inversion is not the answer, but it shows where the answer was hiding.

## Workflow

1. Use `surface-assumptions` with {stuck_situation}, {context}, {what_youve_tried} to identify the invisible rules constraining the thinking
2. Use `invert-problem` with {stuck_situation}, {invisible_assumptions} to flip each assumption and the problem itself
3. Use `extract-insight` with {inversions}, {context} to mine the inversions for real, actionable insights

## Inputs

```yaml
stuck_situation: string      # Where every option looks bad
context: string              # Background, stakes, who is involved
what_youve_tried: string     # Approaches already considered (optional)
constraints: string          # Non-negotiables (optional)
```

## Outputs

```yaml
invisible_assumptions:       # 3-5 invisible rules
  - assumption: string
    why_invisible: string
    what_if_violated: string
inversions:                  # 2-3 problem flips
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
