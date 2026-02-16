# Data Storytelling

Turn data, metrics, and analytics into narratives that make numbers meaningful and drive decisions. The goal is not to present data but to tell the story the data reveals.

## References

Load these knowledge base files into context before executing:

- `references/storytelling-frameworks.md`: Data Storytelling framework (context, conflict, resolution)
- `references/glossary-and-resources.md`: Key terms and external references

## Workflow

1. **Craft narrative**: Use `craft-narrative` to build the context-conflict-resolution arc from the data
2. **Build tension**: Use `build-tension` to create stakes around what the numbers reveal
3. **Connect audience**: Use `connect-audience` to make the data personally relevant to decision-makers

## Inputs

```yaml
topic: string               # What the data story is about
audience: string             # Who needs to hear this (board, team, investors)
data: string                 # The metrics, numbers, findings, or analysis
context: string              # Business context around the data
desired_action: string       # Optional: what decision should follow from this data
```

## Outputs

```yaml
narrative_framework: string   # Data Storytelling (context, conflict, resolution)
story_elements:
  context: string             # What was expected, the baseline, the plan
  conflict: string            # What the data reveals that challenges expectations
  resolution: string          # What the data suggests should happen next
  supporting_data: list       # Key data points woven into the narrative
data_integration:
  - data_point: string        # The specific metric
    narrative_role: string    # Where it appears in the story (hook, tension, proof, resolution)
    framing: string           # How to present it for maximum clarity
narrative: string             # The complete data story
delivery_notes: list          # How to present data effectively
confidence: string            # high | medium | low
caveats: list                 # Data limitations, sample sizes, correlation vs. causation
```

## When to Use

- Board presentations with quarterly or annual results
- Team retrospectives that need to drive behavior change
- Research findings that need executive attention
- Any situation where "just showing the chart" isn't working

## Error Handling

- If data is incomplete: Note gaps and their impact on the story's strength
- If data contradicts the desired narrative: Present the honest story and flag the tension
- If audience lacks data literacy: Simplify framing, use analogies, reduce to 2-3 key numbers
- If correlation is being presented as causation: Flag the distinction explicitly
