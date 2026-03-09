# Archaeological Report

Full excavation through to recommendation. The complete archaeological survey of a decision artifact: dig through the layers, reconstruct the original context, assess whether constraints still hold, and deliver a verdict with narrative for organizational memory.

## Prompts Used

1. **excavate-layers** - Identify the layers of decisions that produced the current artifact
2. **reconstruct-context** - Rebuild the original decision context, constraints, and rationale
3. **assess-constraints** - Evaluate each original constraint against current conditions
4. **recommend-action** - Synthesize findings into a verdict with reasoning, risks, and narrative

## Workflow

[Excavate Layers] → excavation → [Reconstruct Context] → decision reconstruction → [Assess Constraints] → constraint assessment → [Recommend Action] → recommendation (keep/modify/remove/investigate-further) with dual risk assessment and narrative

## When to Use

- A team is about to make a significant change to an inherited system, process, or policy and needs a complete assessment before committing
- Leadership has asked for a recommendation on whether to keep, modify, or remove a legacy artifact, and the recommendation needs to be backed by structured historical analysis
- A modernization initiative needs to justify its scope by demonstrating which legacy constraints have expired and which require continued accommodation
- An organization wants to create a decision record for an undocumented historical decision before the last people with institutional knowledge leave
- A new engineering leader inherits a codebase and needs a comprehensive survey of the major design decisions, their rationale, and their current validity before setting technical direction

## What You Get

1. A chronological excavation of the artifact from origin to present state
2. A reconstructed decision context with specific constraints, rejected alternatives, and rationale
3. A constraint assessment with valid/changed/expired verdicts and confidence levels
4. A recommendation (keep, modify, remove, or investigate further) grounded in the assessment
5. A dual risk assessment covering both risks of change and risks of keeping
6. A narrative suitable for organizational memory, telling the complete story for future reference

## Example Input

"Our engineering team uses a custom deployment pipeline that requires three separate sign-offs before anything reaches production. The process was created about 4 years ago. Our CTO wants to streamline releases and has asked whether we still need all three approvals. Some senior engineers are nervous about removing any of them. We need a complete assessment."

## Tips

- This is the full skill. Run it when the decision deserves the investment of all four prompts. For faster work, use excavate-decision (1 prompt) for understanding, reconstruct-context (2 prompts) for historical context, or assess-constraints (3 prompts) for constraint evaluation without the full recommendation.
- The narrative is as important as the verdict. The verdict tells the team what to do. The narrative tells future teams why, creating the organizational memory that prevents the next generation from asking the same questions in five years.
- Expect the excavation to surface surprises. Teams that say "we know why this exists" often discover that the actual history is different from the oral tradition. The most common surprise is that the artifact was created in response to a specific incident that the team has forgotten, and the constraint it addressed has since been resolved by a different mechanism.
- The dual risk assessment is non-negotiable. Recommending change without acknowledging what could go wrong is reckless. Recommending preservation without acknowledging the costs is complacent. Both sides of the ledger must be visible.
- Schedule enough time. A thorough archaeological report on a significant artifact is not a 30-minute exercise. Give it the space it needs, especially when the historical record is fragmented and requires investigation.
