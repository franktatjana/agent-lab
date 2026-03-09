# Bias Correction

Standalone temporal bias audit: produce an honest present-tense snapshot of the situation, then identify and correct the temporal biases in the user's framing. Used when the user does not need a full temporal map but wants to check whether their current narrative is distorted by how they perceive time.

## Prompts Used

1. **snapshot-now** - Produce an honest present-tense assessment
2. **correct-bias** - Identify and correct temporal biases in the user's framing

## Workflow

[Snapshot Now] -> present_snapshot -> [Correct Bias (all temporal biases)] -> bias_corrections

## Inputs

| Field | Required | Description |
|-------|----------|-------------|
| situation | Yes | The current situation or decision narrative to audit |
| context | No | Background, organizational dynamics, market conditions |

## Outputs

| Field | Description |
|-------|-------------|
| present_snapshot | Honest assessment with narrative biases stripped |

## When to Use

- A user has a strong narrative about their situation and wants to test whether it is accurate
- A decision-maker suspects their framing is biased but cannot identify how
- A team keeps reaching the same conclusion in discussions and wants an outside perspective on whether groupthink or narrative bias is at work
- Someone is about to make a presentation or recommendation and wants to check for blind spots in their reasoning
- The user does not need a full temporal map but needs the present moment assessed honestly

## Error Handling

- If the user's description is too brief for meaningful bias analysis, the snapshot-now prompt asks for more detail before proceeding
- If no biases are detected, the skill reports a clean audit with the honest assessment as the primary output
- If the user's narrative is so heavily biased that the honest assessment contradicts most of their framing, the skill presents findings carefully with evidence, not as an accusation
