# Break Frame

Reject the entire frame the user is operating within. When the problem is not which option to choose but that the set of options itself is wrong, this skill identifies the game being played and proposes a different game entirely. The most powerful version of the trickster's toolkit: instead of solving the problem, dissolve it.

## Workflow

1. Use `surface-assumptions` with {stuck_situation}, {context}, {what_youve_tried} to map the invisible rules that define the current frame
2. Use `invert-problem` with {stuck_situation}, {invisible_assumptions} to test what happens when core assumptions are violated
3. Use `generate-absurd` with {stuck_situation}, {invisible_assumptions} to shake loose from the current frame through productive absurdity
4. Use `extract-insight` with {inversions}, {absurd_solutions}, {frame_break}, {context} to synthesize a genuine reframe with actionable options

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
