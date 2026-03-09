# Trickster Synthesis

The full trickster treatment. Surface assumptions, invert the problem, generate productive absurdity, break the frame, and synthesize everything into genuinely useful options the user could not see before. Use when the user is deeply stuck and needs maximum creative disruption. This is the most comprehensive skill, combining all four prompts in sequence for the deepest reframe.

## Workflow

1. Use `surface-assumptions` with {stuck_situation}, {context}, {what_youve_tried} to map every invisible assumption constraining the thinking (this is the foundation for everything that follows)
2. Use `invert-problem` with {stuck_situation}, {invisible_assumptions} to flip the problem systematically (what if the opposite were true? what if the "problem" were the solution?)
3. Use `generate-absurd` with {stuck_situation}, {invisible_assumptions}, {inversions} to propose deliberately absurd solutions that violate the most deeply held assumptions and mine each for real insights
4. Use `extract-insight` with {invisible_assumptions}, {inversions}, {absurd_solutions}, {context} to synthesize the inversions, absurdities, and broken frames into trickster_counsel and serious_options

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
frame_break:                 # The game-change
  current_game: string
  new_game: string
  rule_that_changed: string
  what_opens_up: string
trickster_counsel: string    # Playful-but-wise synthesis
serious_options:             # 2-4 actionable options
  - option: string
    why_it_was_invisible: string
    risk: string
    potential: string
```
