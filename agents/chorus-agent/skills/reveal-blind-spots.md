# Reveal Blind Spots

Identify what nobody in the cast is saying, the perspective not represented. Runs the full pipeline and then examines what the chorus itself is missing.

## Workflow

1. Use `cast-voices` with {situation}, {decision}, and {context} to generate the cast
2. Use `stage-dialogue` with {situation}, {decision}, {context}, and {cast} to stage the dialogue
3. Use `synthesize-perspectives` with {situation}, {cast}, {dialogue}, and {fault_lines} to synthesize the chorus
4. Use `reveal-blind-spots` with {situation}, {cast}, {dialogue}, and {synthesis} to identify missing voices and collective avoidance

## Inputs

```yaml
situation: string            # What is happening, what the user faces
context: string              # Why this matters, what is at stake
decision: string             # Specific decision being considered (optional)
```

## Outputs

```yaml
cast: array                  # 3-6 context-specific voices
dialogue: array              # In-character dialogue
consensus_points: list       # Where voices unexpectedly agree
fault_lines: array           # Fundamental disagreements
synthesis: string            # What the chorus reveals collectively
missing_voices:              # Perspectives not represented
  - voice_name: string       # Who is absent
    why_missing: string      # Why they were not included
    what_they_would_say: string
```
