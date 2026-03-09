# Stage Dialogue

Have the voices speak in character about the situation, revealing tensions, agreements, and stakes that a list of perspectives would miss.

## Workflow

1. Use `cast-voices` with {situation}, {decision}, and {context} to generate the cast (if not already provided)
2. Use `stage-dialogue` with {situation}, {decision}, {context}, and {cast} to stage in-character dialogue

## Inputs

```yaml
situation: string            # What is happening, what the user faces
context: string              # Why this matters, what is at stake
decision: string             # Specific decision being considered (optional)
cast: array                  # Previously generated cast (optional, generated if absent)
```

## Outputs

```yaml
dialogue:                    # In-character statements
  - voice_name: string
    statement: string        # What they say, in their voice
    emotion: string          # Underlying feeling
    challenges: string       # Which voice or assumption this challenges
consensus_points: list       # Where voices unexpectedly agree
fault_lines:                 # Fundamental disagreements
  - disagreement: string
    voices_involved: list
    underlying_tension: string
```
