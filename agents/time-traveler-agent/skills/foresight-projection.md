# Foresight Projection

Forward-looking analysis: establish an honest baseline of the present, then build two divergent futures (inaction vs. action) with second-order effects, then audit the projections for present bias and optimism bias.

## Prompts Used

1. **snapshot-now** - Establish an honest present-tense baseline before projecting forward
2. **project-forward** - Build two future scenarios with consequences and second-order effects
3. **correct-bias** - Check the future scenarios for present bias and optimism bias

## Workflow

[Snapshot Now] -> present_snapshot -> [Project Forward] -> future_inaction + future_action -> [Correct Bias (present + optimism focus)] -> calibrated futures

## Inputs

| Field | Required | Description |
|-------|----------|-------------|
| situation | Yes | The current situation, decision, or challenge |
| decision | No | Specific decision being considered (builds action scenario) |
| context | No | Background, organizational dynamics, market conditions |
| timeframe | No | How far forward to project (default: 5 years) |

## Outputs

| Field | Description |
|-------|-------------|
| future_inaction | Trajectory, consequences, second-order effects if nothing changes |
| future_action | Trajectory, consequences, second-order effects if the user acts |

## When to Use

- A team is deciding between acting now and waiting, and needs to see both paths concretely
- The user wants to understand the compounding cost of delay without getting lost in retrospective analysis
- A decision has been postponed multiple times and the team needs to see what continued postponement looks like over time
- Someone is evaluating whether a short-term cost (acting now) is worth the long-term benefit
- The user's current narrative makes inaction feel safe and action feel risky, and the asymmetry needs testing

## Error Handling

- If no decision is provided, the project-forward prompt constructs the most likely action from the situation context
- If the present snapshot reveals that the situation is too ambiguous for meaningful projection, the skill notes the limitation and suggests clarifying the present before projecting forward
- If the correct-bias step detects heavy optimism bias in the action scenario, it provides a recalibrated version alongside the original
