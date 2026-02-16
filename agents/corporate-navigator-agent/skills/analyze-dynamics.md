# Analyze Dynamics

Reads the political landscape of a corporate situation: alliances, informal networks, decision-making patterns, and named dynamics.

## References

Load these knowledge base files into context before executing:

- `references/stakeholder-mapping-frameworks.md`: Power mapping approaches
- `references/glossary-and-resources.md`: Political dynamics terminology

## Workflow

1. **Map the landscape**: Use `identify-stakeholders` to establish the player field
2. **Assess power**: Use `assess-influence` to distinguish formal authority from informal influence
3. **Identify patterns**: Use `analyze-political-landscape` to name dynamics (gatekeeping, coalition, sponsorship, territory)
4. **Surface risks**: Use `identify-risks` to flag potential blockers and hidden agendas

## Inputs

```yaml
organization_context: string
your_role: string
situation: string
key_stakeholders: string
observed_behavior: string       # optional: what you've noticed that seems political
```

## Outputs

```yaml
dynamics:
  - name: string                # named dynamic (gatekeeping, coalition, etc.)
    involved: list              # which stakeholders
    manifestation: string       # observable behavior
    implication: string         # how it affects the user
landscape_summary: string
risks:
  - risk: string
    likelihood: high | medium | low
    mitigation: string
```

## When to Use

- Something feels "political" but you can't name what's happening
- A decision was made that doesn't make sense on merit alone
- You sense resistance but can't pinpoint the source
- Preparing to navigate a complex multi-stakeholder situation

## Error Handling

- If the user describes a single interpersonal conflict: clarify whether this is political dynamics or a relationship issue
- If no observable behavior is provided: ask what specific events or decisions prompted the analysis

## Human Review

Review recommended when the analysis will be shared with others or used to inform a formal strategy.
