# Assess Constraints

Evaluate whether the original constraints that justified a decision still apply, have changed, or have expired entirely. This is the Chesterton's Fence follow-up: the fence has been understood, now determine whether the wolves are still there.

## Prompts Used

1. **excavate-layers** - Identify the layers of decisions that produced the current artifact
2. **reconstruct-context** - Rebuild the original decision context and constraints
3. **assess-constraints** - Evaluate each original constraint against current conditions

## Workflow

[Excavate Layers] → excavation → [Reconstruct Context] → decision reconstruction → [Assess Constraints] → constraint assessment with status verdicts (valid, changed, expired), evidence, and confidence levels

## When to Use

- A team has completed the historical investigation and now needs to determine which of the original reasons still justify the current artifact
- A modernization effort needs a structured assessment of which legacy constraints have expired and which still apply, before committing to a migration plan
- A policy or process is being challenged and the defenders say "it exists for a reason," but nobody has checked whether the reason still holds
- A compliance review requires evidence that existing controls still address the risks they were designed for
- An organization is merging teams or systems and needs to assess which inherited constraints from each side are still relevant in the combined environment

## What You Get

1. A constraint-by-constraint assessment with clear status verdicts: valid (still applies), changed (partially applies), or expired (no longer relevant)
2. Evidence and confidence levels for each assessment
3. An inventory of environmental changes since the original decision (technology, organizational, regulatory, knowledge)
4. An interaction analysis showing whether the remaining valid constraints still justify the artifact even if other constraints have expired
5. A gap identification listing what cannot be assessed with available information

## Example Input

"We've reconstructed why the three-approval deployment process was created: a 2020 production outage (incident-driven), a compliance requirement for SOX audit trail (regulatory), and the fact that the team had no CI/CD pipeline at the time (technical). We now have CI/CD with automated testing. We need to know which of these three reasons still justify the three-approval process."

## Tips

- The most common finding is mixed: some constraints are still valid, others have expired, and one or two have changed in ways that suggest modification rather than wholesale removal. Pure "everything expired" or "everything still holds" outcomes are rare and should prompt a second look at the assessment.
- Confidence levels matter as much as the status verdicts. A "high confidence expired" assessment is actionable. A "low confidence expired" assessment is a research question, not a conclusion. Make sure the team knows which assessments are solid and which need further investigation.
- New constraints that were not part of the original decision deserve attention. The world did not just change by removing constraints; it added new ones. A security landscape that has evolved, a compliance framework that was updated, or a customer base that has shifted may introduce new reasons to keep or modify the artifact that did not exist at the time of the original decision.
- Run this skill when you need the constraint assessment as the primary deliverable. For a full recommendation including verdict and narrative, chain into the archaeological-report skill instead.
