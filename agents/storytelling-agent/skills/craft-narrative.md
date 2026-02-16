# Craft Narrative

Take raw material, whether facts, data, experiences, or ideas, and build a complete narrative arc with hook, tension, resolution, and transformation.

## References

Load these knowledge base files into context before executing:

- `references/storytelling-frameworks.md`: Framework details, stages, and selection guidance
- `references/glossary-and-resources.md`: Key terms and external references

## Workflow

1. **Find hook**: Use `find-hook` to identify the surprising angle that opens the story
2. **Craft narrative**: Use `craft-narrative` to build the full arc from raw material
3. **Build tension**: Use `build-tension` to create escalation and stakes
4. **Connect audience**: Use `connect-audience` to map the story to the audience's values
5. **Shape delivery**: Use `shape-delivery` to optimize for the intended medium

## Inputs

```yaml
topic: string               # What the story is about
audience: string             # Who will hear/read this story
context: string              # Professional setting
raw_material: string         # Facts, data, experiences to build from
framework: string            # Optional: Hero's Journey, Pixar, STAR, Data, Brand
format: string               # Optional: written, spoken, presentation
```

## Outputs

```yaml
narrative_framework: string   # Selected framework and rationale
story_elements:
  hook: string                # Opening that earns attention
  stakes: string              # What's at risk
  tension: string             # The conflict or challenge
  resolution: string          # What changed
  transformation: string      # Why it matters going forward
narrative: string             # The complete story
alternative_angles: list      # Other ways to tell the same story
delivery_notes: list          # How to tell it effectively
confidence: string            # high | medium | low
caveats: list                 # Limitations and adaptation notes
```

## When to Use

- Preparing a presentation, talk, or keynote
- Writing a memo, email, or article that needs to persuade
- Turning project results into a leadership narrative
- Crafting any professional communication where facts alone aren't enough

## Error Handling

- If raw material is too thin: Ask for more details before crafting
- If audience is unclear: Request audience specifics before connecting
- If multiple frameworks fit equally: Present options with tradeoffs
- If facts are ambiguous: Flag uncertainty rather than filling gaps
