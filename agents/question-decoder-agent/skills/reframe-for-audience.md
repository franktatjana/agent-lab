# Reframe for Audience

Take an existing answer and reshape it for a different audience, adjusting language, altitude, format, and tone while preserving factual accuracy.

## References

Load these knowledge base files into context before executing:

- `references/audience-frameworks.md`: Curse of Knowledge Inversion, Audience Analysis Matrix, Answer Architecture

## Workflow

1. **Profile audience**: Use `profile-audience` to map the new audience's needs and preferences
2. **Reframe for audience**: Use `reframe-for-audience` to adapt language, altitude, and tone
3. **Anticipate follow-ups**: Use `anticipate-follow-ups` to predict audience-specific reactions

## Inputs

```yaml
answer: string                # The existing answer to reframe
target_audience: string       # Who to reframe it for (role, context)
original_audience: string     # Who it was originally written for (optional)
context: string               # Delivery context (meeting, email, chat)
```

## Outputs

```yaml
audience_profile:
  role: string
  expertise_level: string
  preferred_format: string
  communication_style: string
  primary_concern: string
reframed_answer: string       # The adapted answer
adaptation_notes:
  what_changed: list          # Specific changes made
  what_was_omitted: list      # Nuance lost in translation
  what_was_added: list        # Context added for this audience
anticipated_follow_ups:
  - question: string
    prepared_response: string
  - question: string
    prepared_response: string
  - question: string
    prepared_response: string
```

## When to Use

- Presenting the same update to different stakeholder groups
- Translating a technical answer for a non-technical audience (or vice versa)
- Preparing the same message for multiple levels of the organization
- Adapting a written answer for verbal delivery

## Error Handling

- If original and target audience are the same: Note that minimal reframing is needed
- If reframing would require omitting critical facts: Flag the tension and suggest alternative
- If target audience expertise is unknown: Default to summary depth with minimal jargon
