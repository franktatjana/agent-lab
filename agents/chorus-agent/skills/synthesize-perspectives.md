# Synthesize Perspectives

Find what the chorus collectively reveals that no single voice could. Runs the full pipeline: cast, dialogue, and synthesis.

## Workflow

1. Use `cast-voices` with {situation}, {decision}, and {context} to generate the cast
2. Use `stage-dialogue` with {situation}, {decision}, {context}, and {cast} to stage the dialogue
3. Use `synthesize-perspectives` with {situation}, {cast}, {dialogue}, and {fault_lines} to identify the emergent insight

## Inputs

```yaml
situation: string            # What is happening, what the user faces
context: string              # Why this matters, what is at stake
decision: string             # Specific decision being considered (optional)
cast: array                  # Previously generated cast (optional)
dialogue: array              # Previously staged dialogue (optional)
fault_lines: array           # Previously identified fault lines (optional)
```

## Outputs

```yaml
cast: array                  # 3-6 context-specific voices
dialogue: array              # In-character dialogue
consensus_points: list       # Where voices unexpectedly agree
fault_lines: array           # Fundamental disagreements
synthesis: string            # What the chorus reveals collectively
```
