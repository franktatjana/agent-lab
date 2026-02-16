# Anticipate Follow-ups

Predict and prepare for follow-up questions based on the audience, original question, and planned answer.

## References

Load these knowledge base files into context before executing:

- `references/audience-frameworks.md`: Question Behind the Question techniques, Audience Analysis Matrix

## Workflow

1. **Decode question**: Use `decode-question` to understand the original intent and what concerns remain
2. **Anticipate follow-ups**: Use `anticipate-follow-ups` to generate likely next questions with prepared responses

## Inputs

```yaml
question: string              # The original question
who_is_asking: string         # Role, title, or relationship of the asker
answer: string                # The answer you plan to give (optional)
context: string               # Meeting type, relationship, stakes
```

## Outputs

```yaml
follow_ups:
  - question: string
    why_likely: string        # Why this person would ask this
    prepared_response: string
    likelihood: string        # very likely | likely | possible
  - question: string
    why_likely: string
    prepared_response: string
    likelihood: string
  - question: string
    why_likely: string
    prepared_response: string
    likelihood: string
worst_case_question:
  question: string            # The hardest question they could ask
  prepared_response: string
```

## When to Use

- Preparing for a board presentation or executive review
- Before a difficult 1:1 conversation
- After giving an initial answer, preparing for the next round
- Coaching someone on a high-stakes conversation

## Error Handling

- If answer is not provided: Predict follow-ups based on likely answer patterns for this audience
- If audience is unfamiliar: Default to role-based predictions (executives ask about risk, engineers ask about implementation)
- If context is too vague: Flag that predictions are generic and suggest providing more detail
