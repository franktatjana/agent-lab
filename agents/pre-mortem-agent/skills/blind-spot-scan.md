# Blind Spot Scan

Maps cognitive biases and organizational blind spots that are actively distorting the team's risk assessment and decision-making.

## Prompts Used

1. **assume-failure** - Generate failure narrative to surface implicit assumptions and hidden dependencies
2. **surface-blind-spots** - Map the specific cognitive biases active in this decision with evidence from the input

## Workflow

[Assume Failure] -> failure narrative revealing hidden assumptions -> [Surface Blind Spots] -> bias inventory with evidence and corrective tests

## When to Use

- The team approved a decision unanimously and quickly, which is a warning sign for groupthink
- Someone important has staked their career or reputation on this initiative and dissent feels risky
- The team keeps citing the same 2-3 data points to justify the decision while ignoring contradictory signals
- An external observer would see obvious risks that the team has rationalized away
- The organization has a history of repeating the same type of failure

## What You Get

1. A failure narrative that surfaces the assumptions the team is treating as facts
2. 2-4 specific cognitive biases identified with evidence from the team's own input
3. For each bias: what failure mode it makes invisible and what test could verify if the bias is active
4. Organizational blind spots distinct from individual cognitive biases

## Example Input

"Our VP of Product has been championing a pivot to enterprise sales for 6 months. The board approved a $3M budget for the enterprise motion. The team has cited 3 enterprise pilot wins as proof of market fit. No SMB retention data has been reviewed since the pivot was proposed. The pivot was approved 4-0 by the leadership team."

## Tips

- The most valuable output is the test, not the bias identification. Telling a team "you have confirmation bias" is a lecture. Giving them "pull the last 6 months of SMB churn data and compare to enterprise conversion rates" is an action.
- Unanimous approval is not a sign of quality. It is a signal that either the decision was obvious (rare for complex projects) or dissent was suppressed.
- Organizational blind spots often matter more than individual biases. A team of rational people can still be structurally blind if the information they need is not flowing to them.
