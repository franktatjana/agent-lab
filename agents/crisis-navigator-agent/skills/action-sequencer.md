# Action Sequencer

Build a prioritized action sequence: what to do first, second, third, with clear ownership, timelines, and decision points.

## Prompts Used

1. **assess-situation** - Confirm the current state and identify the 1-2 things that matter right now
2. **classify-severity** - Determine response type based on Cynefin classification
3. **sequence-actions** - Build OODA-based action plan with owners, timelines, and contingencies

## Workflow

[Assess Situation] -> situation report -> [Classify Severity] -> response type -> [Sequence Actions] -> numbered action sequence with owners and deadlines

## When to Use

- The crisis has been assessed and classified, and the team needs to know exactly what to do next
- Multiple response actions are possible and the team needs to prioritize them by impact and dependency
- The response has stalled because no one has a clear sequence and everyone is doing something different
- Resources are constrained and you need to allocate them to the actions that matter most
- You need to separate "stop the bleeding" from "fix the root cause" so both tracks can run in parallel

## What You Get

1. A confirmed situation assessment and severity classification
2. An OODA-structured action plan: what to observe, how to orient, what to decide, and who acts
3. A numbered action sequence with named owners, specific timelines, and definitions of done
4. Explicit separation of immediate stabilization (Track 1) and root cause remediation (Track 2)
5. A specific next review point with defined decision criteria

## Example Input

"Database cluster partially restored after failover. 30% of API requests still failing. Cynefin classification: complicated (the failure has identifiable causes but requires expert diagnosis). Available resources: CTO (executive authority), senior DBA (on-call, remote), platform engineering team (3 people, in-office), VP Customer Success (available by phone). Three enterprise clients have P1 tickets open."

## Tips

- The first action in the sequence should almost always be an observation or verification task. Confirm that the situation assessment is still accurate before executing.
- Assign actions to people, not teams. "The engineering team will investigate" produces diffusion of responsibility. "Sarah Chen will run database diagnostics and report findings by 3:00 PM" produces accountability.
- Build in at least one contingency trigger: "If the connection pool fix does not resolve the 500 errors within 45 minutes, escalate to the CTO for a full failover decision."
- The review cadence matters as much as the actions. A crisis without regular reassessment drifts as conditions change.
