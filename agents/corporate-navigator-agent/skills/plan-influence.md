# Plan Influence

Develops ethical strategies for gaining support, building coalitions, and advancing proposals through stakeholder engagement.

## References

Load these knowledge base files into context before executing:

- `references/stakeholder-mapping-frameworks.md`: Influence/interest matrix for prioritization
- `references/glossary-and-resources.md`: Political dynamics and engagement terminology

## Workflow

1. **Map stakeholders**: Use `identify-stakeholders` for the relevant players
2. **Assess positions**: Use `assess-influence` to understand each player's power and stance
3. **Design approach**: Use `plan-influence-strategy` to create stakeholder-specific engagement plans
4. **Sequence actions**: Rank outreach by impact, timing, and relationship risk

## Inputs

```yaml
organization_context: string
your_role: string
goal: string                    # what you're trying to get approved/supported
key_stakeholders: string        # who you need on your side
constraints: string             # optional: things you can't change
timeline: string                # optional: when the decision happens
```

## Outputs

```yaml
strategy:
  sequence:
    - step: integer
      stakeholder: string
      approach: string          # how to frame the conversation
      channel: string           # 1-on-1, email, group, informal
      timing: string            # when relative to the decision
      talking_points: list
      avoid: list               # what NOT to say
  coalition_map: string         # who to align first, second, third
  risk: string
  contingency: string           # what to do if the primary approach fails
```

## When to Use

- You need buy-in for a proposal or initiative
- A previous attempt was blocked and you need a new approach
- You're building support for a change before announcing it
- You need to neutralize opposition ethically

## Error Handling

- If the goal is vague: ask what specific outcome the user wants
- If the request involves deception or manipulation: refuse and explain why, suggest ethical alternatives

## Human Review

Review recommended before executing influence strategies in formal or high-stakes settings.
