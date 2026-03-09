# Cast Voices

Generate the right cast of characters for this specific situation, each with a distinct stake and perspective. The cast emerges from the situation itself, not from a template.

## Workflow

1. Use `cast-voices` with {situation}, {decision}, {stakeholders}, and {context} to generate 3-6 context-specific voices

## Inputs

```yaml
situation: string            # What is happening, what the user faces
context: string              # Why this matters, what is at stake
decision: string             # Specific decision being considered (optional)
stakeholders: string         # Known affected parties (optional)
```

## Outputs

```yaml
cast:                        # 3-6 context-specific voices
  - voice_name: string       # Specific identity grounded in the situation
    perspective: string      # What this voice sees that others do not
    stake_in_outcome: string # What this voice gains or loses
    likely_position: string  # Where this voice lands on the decision
```
