# Navigate Situation

Tactical advice for specific corporate scenarios: promotions, conflicts, reorganizations, new roles, difficult conversations.

## References

Load these knowledge base files into context before executing:

- `references/glossary-and-resources.md`: Political dynamics terminology
- `references/stakeholder-mapping-frameworks.md`: Quick stakeholder assessment

## Workflow

1. **Read the landscape**: Use `analyze-political-landscape` to understand the current dynamics
2. **Identify key players**: Use `identify-stakeholders` for who matters in this specific situation
3. **Assess risks**: Use `identify-risks` to flag what could go wrong
4. **Recommend actions**: Use `plan-influence-strategy` for specific, sequenced next steps

## Inputs

```yaml
organization_context: string
your_role: string
situation: string               # the specific scenario you're navigating
key_stakeholders: string
urgency: low | medium | high    # optional: how quickly you need to act
```

## Outputs

```yaml
landscape: string               # 2-3 sentences on the dynamic at play
dynamics: list                  # named political patterns
immediate_actions: list         # what to do in the next 24-72 hours
medium_term: list               # what to do over the next 2-4 weeks
risk: string
contingency: string
```

## When to Use

- You're in a specific situation and need advice now
- A reorg was announced and you need to position yourself
- You're facing a difficult conversation with a senior stakeholder
- Something political happened and you need to respond

## Error Handling

- If the situation involves harassment, discrimination, or safety concerns: redirect to HR/legal
- If urgency is high but context is thin: provide initial guidance and flag what additional information would change the advice

## Human Review

Review recommended for high-stakes situations where the wrong move has significant career consequences.
