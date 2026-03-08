# Classify Assumptions

Sort assumptions by testability and impact. The assumption inventory from the extraction step contains everything from critical structural assumptions to decorative ones that do not affect the outcome. This prompt separates load-bearing assumptions from noise, so the team knows where to invest testing effort.

## When to Use

After the assumption inventory has been extracted. This prompt takes the full list and applies a two-dimensional classification: how much does this assumption matter (impact), and can we verify it before committing (testability)? The intersection of these dimensions determines what action the team should take.

## Prompt

You have a complete assumption inventory. Your job is to classify each assumption along two dimensions so the team knows which ones deserve attention and which ones can be accepted without further investigation.

**1. Impact Classification**
Rate each assumption's impact if it proves wrong:
- **Load-bearing**: if this assumption is wrong, the entire plan fails or must be fundamentally restructured. These are the assumptions the plan cannot survive without.
- **Significant**: if this assumption is wrong, the plan requires major adjustments (timeline, budget, scope) but could still succeed in a modified form.
- **Decorative**: if this assumption is wrong, the plan can proceed with minor adjustments. These are convenient beliefs, not structural requirements.

The test: "If I told you this assumption was wrong right now, would you scrap the plan, revise the plan, or shrug?" Scrap = load-bearing. Revise = significant. Shrug = decorative.

**2. Testability Classification**
Rate how easily each assumption can be verified before commitment:
- **Testable now**: can be verified with data, experiments, or investigation available today. No commitment required to learn.
- **Testable with effort**: can be verified but requires investment (pilot program, customer research, prototype). Learning costs something.
- **Untestable before commitment**: cannot be verified without executing the plan. The team must commit before knowing whether this assumption holds.

**3. Action Matrix**
Combine the two dimensions to determine the action:

| | Testable Now | Testable with Effort | Untestable |
|---|---|---|---|
| **Load-bearing** | Test immediately | Invest in testing before commitment | Build contingency plan |
| **Significant** | Test before commitment | Test during early execution | Monitor for early signals |
| **Decorative** | Note and move on | Accept | Ignore |

**4. Deliver the Classification**
For each assumption, provide:
- **The assumption**: restated from the inventory
- **Impact**: load-bearing, significant, or decorative
- **Testability**: testable now, testable with effort, or untestable
- **Recommended action**: from the action matrix
- **Rationale**: one sentence explaining the classification

Focus the team's attention on the upper-left of the matrix: load-bearing assumptions that are testable now. These represent the highest-value, lowest-cost risk reduction the team can achieve before committing.

## Tips

- Most assumption inventories contain 70-80% decorative assumptions. The classification step's primary value is eliminating noise so the team can focus on the 2-3 assumptions that actually matter.
- Load-bearing + untestable is the most dangerous quadrant. The team is betting the plan on something they cannot verify. This is not necessarily a reason to stop, but it is a reason to build a contingency plan and identify the earliest possible signals that the assumption is failing.
- Teams often over-classify assumptions as load-bearing because it feels safer. Push back. If the plan can survive the assumption being wrong (with adjustments), it is significant, not load-bearing. Precision in classification prevents diffusion of testing effort.
- The action matrix is prescriptive. If a load-bearing assumption is testable now and the team chooses not to test it, that is a decision to accept avoidable risk. Name it explicitly.
