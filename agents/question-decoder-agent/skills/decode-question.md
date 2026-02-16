# Decode Question

Full decode of a question through the three-lens framework: who is asking, why they're asking, and what they need to hear.

## References

Load these knowledge base files into context before executing:

- `references/audience-frameworks.md`: Audience Analysis Matrix, Question Behind the Question, Answer Architecture, Curse of Knowledge Inversion, Pyramid Principle

## Workflow

1. **Profile audience**: Use `profile-audience` to map the asker's role, needs, and communication style
2. **Decode question**: Use `decode-question` to identify the question behind the question
3. **Architect answer**: Use `architect-answer` to structure the optimal response
4. **Anticipate follow-ups**: Use `anticipate-follow-ups` to predict next questions

## Inputs

```yaml
question: string              # The question someone asked
who_is_asking: string         # Role, title, or relationship of the asker
context: string               # Where/when asked, surrounding circumstances
relationship: string          # Your relationship to the asker (optional)
facts: string                 # The actual information to include (optional)
```

## Outputs

```yaml
audience_profile:
  role: string
  expertise_level: string
  preferred_format: string
  communication_style: string
  primary_concern: string
decoded_intent:
  literal_question: string
  real_question: string
  trigger: string
  seeking: string             # information | reassurance | ammunition | validation
  confidence: string
answer_architecture:
  format: string              # pyramid | narrative | direct | data-led
  depth: string               # headline | summary | detailed
  framing: string             # risk | opportunity | balanced | progress
  lead: string
  supporting_points: list
drafted_response: string
anticipated_follow_ups:
  - question: string
    prepared_response: string
  - question: string
    prepared_response: string
  - question: string
    prepared_response: string
```

## When to Use

- Someone asks you a question and you want to make sure your answer lands
- Preparing for a meeting where you expect tough questions
- After a conversation where your answer didn't seem to satisfy, decode what went wrong
- Coaching someone on how to respond to a specific question

## Error Handling

- If who_is_asking is vague: Ask for role, seniority, and relationship context
- If context is missing: Flag that decoded intent confidence will be low
- If multiple valid intents exist: Present top 2-3 with confidence ratings and suggest clarifying
