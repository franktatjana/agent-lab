# Temporal Map

Full three-timeframe analysis: look back to trace what created this moment, snapshot the present stripped of narrative bias, project forward under two scenarios (inaction vs. action), then audit the full analysis for temporal biases and synthesize the insight.

## Prompts Used

1. **look-back** - Trace the forces, decisions, and constraints that created the current moment
2. **snapshot-now** - Produce an honest present-tense assessment stripped of narrative bias
3. **project-forward** - Build two future scenarios (inaction vs. action) with second-order effects
4. **correct-bias** - Audit for hindsight, present, and optimism bias, then synthesize the temporal insight

## Workflow

[Look Back] -> past_analysis -> [Snapshot Now] -> present_snapshot -> [Project Forward] -> future_inaction + future_action -> [Correct Bias] -> bias_corrections + temporal_insight

## Inputs

| Field | Required | Description |
|-------|----------|-------------|
| situation | Yes | The current situation, decision, or challenge |
| decision | No | Specific decision being considered (builds action scenario) |
| context | No | Background, organizational dynamics, market conditions |
| timeframe | No | How far to look back and forward (default: 5 years) |

## Outputs

| Field | Description |
|-------|-------------|
| past_analysis | Forces, key decisions, constraints, and invisible factors |
| present_snapshot | Honest assessment with narrative biases stripped |
| future_inaction | Trajectory, consequences, second-order effects if nothing changes |
| future_action | Trajectory, consequences, second-order effects if the user acts |
| temporal_insight | The key insight from seeing all three timeframes together |

## When to Use

- A team is making a major decision and needs to understand the full temporal context before committing
- The user feels stuck and cannot see past the current moment's constraints
- A decision keeps getting revisited without resolution because the temporal dimensions are not visible
- Someone needs to understand how they got here before deciding where to go
- The stakes are high enough that all three timeframes (past, present, future) should inform the decision

## Error Handling

- If the situation description lacks temporal context, the look-back prompt will ask for clarification before proceeding
- If no decision is provided, the project-forward prompt constructs the most likely action from context
- If the past analysis is thin (user does not know the history), the skill proceeds with available information and notes the gap in the temporal insight
- If the correct-bias step finds no biases, it reports a clean audit rather than inventing corrections
