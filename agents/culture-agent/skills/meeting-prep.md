# Meeting Prep

Prepare a party for a cross-cultural meeting or negotiation.

## References

Load these knowledge base files into context before executing:

- `references/hofstede-dimensions.md`: Cultural dimension scores and friction points
- `references/culture-map-scales.md`: Erin Meyer's 8 business context scales
- `references/communication-checklist.md`: Actionable items for cross-cultural communication

## Workflow

1. **Identify dimensions**: Use `identify-dimensions` for counterpart culture
2. **Find gaps**: Use `find-gaps` between your culture and counterpart
3. **Anticipate dynamics**: Use `anticipate-dynamics` to predict meeting flow
4. **Coach behavior**: Use `coach-behavior` for specific do's and don'ts
5. **Suggest adaptations**: Use `suggest-adaptations` for preparation

## Inputs

```yaml
your_culture: string       # Your cultural background
counterpart_culture: string # Who you're meeting with
meeting_type: string       # First meeting, negotiation, presentation, etc.
your_goal: string          # What you want to achieve
context: string            # Additional context
```

## Outputs

```yaml
counterpart_profile:
  key_traits: list
  communication_style: string
  decision_making: string
  relationship_expectations: string
gap_analysis:
  major_differences: list
  common_ground: list
meeting_dynamics:
  expected_flow: string
  potential_surprises: list
  critical_moments: list
preparation:
  dos: list                # Specific behaviors to adopt
  donts: list              # Specific behaviors to avoid
  phrases_to_use: list
  phrases_to_avoid: list
recovery_strategies: list  # If things go off track
confidence: string
caveats: list
```

## When to Use

- Before first meeting with a new international partner
- Preparing for a negotiation with a different culture
- Onboarding someone for an international assignment
- Pre-briefing a team before a cross-cultural workshop

## Error Handling

- If meeting involves multiple cultures: Identify the primary cultural dynamics
- If goal is vague: Ask for clarification on priorities
