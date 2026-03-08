# Wind Tunnel

Test a strategy or decision against each scenario to find where it breaks, where it thrives, and what is robust across all futures. Wind tunneling is the step that converts scenarios from interesting stories into decision-support tools. A strategy that has been wind-tunneled against four plausible futures is fundamentally different from one that has only been evaluated against the team's assumed trajectory.

## Prompts Used

1. **construct-worlds** - Ensure scenario narratives are fully developed for rigorous testing
2. **test-strategy** - Run the strategy through each scenario, assessing thrives/survives/breaks per element
3. **identify-signposts** - Define early warning signals that indicate which scenario is emerging

## Workflow

[Construct Worlds] -> fully developed scenario narratives -> [Test Strategy] -> thrives/survives/breaks assessment per scenario, cross-scenario robustness analysis -> [Identify Signposts] -> 2-3 early warning indicators per scenario with observation criteria and triggered responses

## When to Use

- A strategy has been developed and needs stress-testing before major resource commitment
- The board or investment committee wants evidence that the strategy works under multiple conditions, not just the base case
- The team has built scenarios and wants to move from "interesting futures" to "strategy implications"
- An annual strategy review needs to re-test the existing plan against updated or new scenarios
- A specific decision (acquisition, market entry, platform migration) needs to be evaluated against multiple possible futures before commitment

## What You Get

1. Strategy decomposition into core bets, resource commitments, key capabilities, and timeline dependencies
2. Scenario-by-scenario assessment with specific thrives/survives/breaks ratings for each strategy element
3. Break mechanisms: the specific causal chain that leads to strategy failure in each breaking scenario
4. Cross-scenario analysis: robust elements (work everywhere), fragile elements (need hedging), adaptive elements (can pivot)
5. Robustness matrix: strategy elements vs. scenarios with clear performance ratings
6. Signposts: 2-3 observable, leading, actionable indicators per scenario with thresholds and triggered responses
7. Monitoring plan: what gets checked, how often, by whom, and what triggers a strategy review

## Example Input

"Strategy: pivot from horizontal CRM to vertical healthcare SaaS. Core bet: healthcare digitization accelerates, creating demand for specialized solutions. Resource commitment: $8M development budget, 60% of engineering team redeployed. Timeline: MVP in 12 months, first enterprise customers in 18 months. Scenarios: [four named scenarios from build-scenarios output]."

## Tips

- Be specific about break mechanisms. "The strategy might not work" is not a wind tunnel finding. "The strategy's 12-month MVP timeline assumes access to healthcare data APIs that do not exist under the prescriptive compliance regime in Scenario 2, adding 6-9 months of compliance engineering that the $8M budget cannot absorb" is a finding the team can act on.
- Robust elements are the most valuable output. The team already knows their strategy. What they do not know is which parts survive regardless of which future unfolds. Those robust elements are the strategic foundation that should be protected and invested in first.
- Signposts are what make the exercise operational. Without signposts, the scenario analysis is a one-time event. With signposts, it becomes a quarterly monitoring discipline that keeps the strategy aligned with emerging reality.
- A strategy that breaks in 3+ of 4 scenarios is not a robust strategy. That does not mean the strategy is wrong, but it means the team is making a concentrated bet rather than a diversified one, and they should be aware of that tradeoff.
