# Conflict Mediation

Help resolve a cultural misunderstanding that has already occurred.

## References

Load these knowledge base files into context before executing:

- `references/frameworks.md`: For diagnosing which cultural dimensions and communication styles are at play
- `references/communication-playbook.md`: Conflict diagnosis process and response checklists

## Workflow

1. **Diagnose misunderstanding**: Use `diagnose-misunderstanding` to identify root cause
2. **Explain perspectives**: Use `explain-perspectives` for Party A
3. **Explain perspectives**: Use `explain-perspectives` for Party B
4. **Suggest resolution**: Use `suggest-resolution` for path forward

## Inputs

```yaml
party_a:
  culture: string
  role: string             # Manager, colleague, partner, etc.
  perspective: string      # Their view of what happened
party_b:
  culture: string
  role: string
  perspective: string
situation: string          # What happened
desired_outcome: string    # What good resolution looks like
```

## Outputs

```yaml
diagnosis:
  what_happened: string    # Observable event
  cultural_dimension: string # Which framework dimension is at play
  party_a_interpretation: string
  party_b_interpretation: string
  core_misread: string     # The fundamental misunderstanding
for_party_a:
  other_perspective: string # Help them understand Party B
  acknowledgment_script: string
  adaptation_suggestions: list
for_party_b:
  other_perspective: string # Help them understand Party A
  acknowledgment_script: string
  adaptation_suggestions: list
resolution_path:
  conversation_starter: string
  working_agreements: list
  relationship_reframe: string
confidence: string
caveats: list
escalation_notes: string   # If human mediator recommended
```

## When to Use

- After a cross-cultural conflict has occurred
- When parties are confused about what went wrong
- To prevent similar misunderstandings in the future
- As part of cross-cultural team coaching

## Error Handling

- If situation involves HR/legal issues: Flag for human escalation
- If either party seems unwilling to understand: Note limitations
- If power imbalance is significant: Adjust advice accordingly

## Human Review

Conflict mediation outputs should be reviewed before use in formal settings. The agent provides cultural analysis; humans make relationship decisions.
