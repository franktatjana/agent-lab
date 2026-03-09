# Hindsight Analysis

Deep retrospective analysis: trace the causal chains from past decisions and forces to the current moment, then audit the analysis for hindsight bias to ensure past decisions are evaluated fairly against the constraints and information that existed at the time.

## Prompts Used

1. **look-back** - Trace forces, decisions, constraints, and invisible factors from the past
2. **correct-bias** - Check the retrospective analysis specifically for hindsight bias

## Workflow

[Look Back] -> past_analysis -> [Correct Bias (hindsight focus)] -> corrected past_analysis

## Inputs

| Field | Required | Description |
|-------|----------|-------------|
| situation | Yes | The current situation or outcome you want to trace backward |
| context | No | Background, organizational dynamics, market conditions |
| timeframe | No | How far back to look (default: 5 years) |

## Outputs

| Field | Description |
|-------|-------------|
| past_analysis | Forces, key decisions, constraints, and invisible factors, corrected for hindsight bias |

## When to Use

- A team wants to understand how they arrived at the current situation without the distortion of judging past decisions with current knowledge
- A retrospective or post-mortem keeps turning into blame assignment rather than causal understanding
- Leadership wants to understand the decisions that created a problem before deciding how to fix it
- The user keeps saying "we should have known" and needs to understand what was actually knowable at the time
- An organization is about to repeat a pattern and needs to see the pattern clearly before it plays out again

## Error Handling

- If the user does not know the history, the look-back prompt generates plausible causal chains from the observable present and marks them as inferred rather than confirmed
- If the correct-bias step finds no hindsight bias, it reports a clean audit
- If the situation is too recent for meaningful retrospective analysis (less than 6 months), the skill notes the limitation and suggests revisiting when more temporal distance exists
