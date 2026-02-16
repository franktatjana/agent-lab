# Architect Answer

Structure the optimal answer for a decoded question and target audience, selecting format, depth, framing, and opening line.

## References

Load these knowledge base files into context before executing:

- `references/audience-frameworks.md`: Answer Architecture framework, Pyramid Principle, Audience Analysis Matrix

## Workflow

1. **Profile audience**: Use `profile-audience` to map the audience's needs and preferences
2. **Architect answer**: Use `architect-answer` to choose format, depth, framing, and lead
3. **Reframe for audience**: Use `reframe-for-audience` to optimize language for the target

## Inputs

```yaml
question: string              # The question to answer
who_is_asking: string         # Role, title, or relationship of the asker
context: string               # Where/when asked, surrounding circumstances
facts: string                 # The actual information to include in the answer
```

## Outputs

```yaml
audience_profile:
  role: string
  expertise_level: string
  preferred_format: string
  communication_style: string
  primary_concern: string
answer_architecture:
  format: string              # pyramid | narrative | direct | data-led
  depth: string               # headline | summary | detailed
  framing: string             # risk | opportunity | balanced | progress
  lead: string
  supporting_points: list
drafted_response: string
adaptation_notes: string      # What was adjusted for this audience and why
```

## When to Use

- You know what they're asking but need help structuring the answer
- Preparing talking points for a presentation Q&A
- Crafting a written response to a stakeholder question
- Translating technical content for a non-technical audience

## Error Handling

- If facts are incomplete: Flag gaps and draft with available information, noting assumptions
- If audience is unknown: Default to pyramid format (safest for unknown audiences)
- If question has multiple valid interpretations: Architect answers for the most likely intent first
