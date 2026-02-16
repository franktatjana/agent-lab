# Map Stakeholders

Creates a comprehensive stakeholder map for a given corporate situation, identifying key players, their influence, relationships, and engagement priority.

## References

Load these knowledge base files into context before executing:

- `references/stakeholder-mapping-frameworks.md`: Influence/interest matrix, power mapping approaches

## Workflow

1. **Identify players**: Use `identify-stakeholders` to list key people, roles, and initial stances
2. **Assess influence**: Use `assess-influence` to map formal authority and informal power for each
3. **Map relationships**: Use `identify-stakeholders` output to chart alliances, tensions, and dependencies between players
4. **Prioritize engagement**: Use `plan-influence-strategy` to rank stakeholders by relevance and determine engagement order

## Inputs

```yaml
organization_context: string    # company type, culture, size
your_role: string               # position, tenure, reporting structure
situation: string               # what you're trying to achieve
key_stakeholders: string        # initial list of who you think matters
```

## Outputs

```yaml
stakeholder_map:
  - name_or_role: string
    formal_authority: high | medium | low
    informal_influence: high | medium | low
    interest: string
    stance: supportive | opposed | neutral | undecided
    relationship_to_you: string
    engagement_priority: 1-5
landscape_summary: string       # 2-3 sentences naming the overall dynamic
blind_spots: list               # stakeholders the user may be missing
```

## When to Use

- Before proposing a new initiative or project
- Entering a new team, role, or organization
- Preparing for a major decision that requires buy-in
- Understanding why a previous attempt failed

## Error Handling

- If fewer than 2 stakeholders provided: ask for more context about who is involved
- If organization context is vague: ask about company size, culture type, and decision-making style

## Human Review

Review recommended when the stakeholder map will inform a formal presentation or proposal.
