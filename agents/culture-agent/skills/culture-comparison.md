# Culture Comparison

Compare two or more cultures across key dimensions with practical implications.

## Workflow

1. **Identify dimensions**: Use `identify-dimensions` for each culture
2. **Find gaps**: Use `find-gaps` to identify major differences
3. **Suggest adaptations**: Use `suggest-adaptations` for each direction

## Inputs

```yaml
cultures: list             # 2-5 cultures to compare
context: string            # Business, social, negotiation, etc.
focus: string              # Optional: specific dimension to focus on
```

## Outputs

```yaml
culture_profiles:
  - culture: string
    key_traits: list
    hofstede_scores: object
    meyer_positions: object
comparison:
  major_gaps: list         # Significant differences
  surprising_similarities: list
  context_specific_notes: list
practical_implications:
  - direction: "A → B"
    adaptations: list
  - direction: "B → A"
    adaptations: list
confidence: string
caveats: list
```

## When to Use

- Preparing for a new cross-cultural partnership
- Understanding a new market before entry
- Building cultural intelligence on a team
- Designing training for cross-cultural collaboration

## Error Handling

- If more than 5 cultures requested: Suggest breaking into smaller comparisons
- If comparing cultures with significant internal variation: Note key subcultures
