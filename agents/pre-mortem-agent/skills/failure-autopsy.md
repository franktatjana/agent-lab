# Failure Autopsy

Full pre-mortem analysis: assume the project failed, generate and rank specific failure modes, then propose concrete mitigations for each.

## Prompts Used

1. **assume-failure** - Establish certainty framing, generate failure narrative and extract failure modes
2. **rank-failure-modes** - Categorize and prioritize failure modes by likelihood, impact, and detectability
3. **mitigation-brief** - Propose one concrete mitigation action per top failure mode

## Workflow

[Assume Failure] -> failure narrative + failure modes -> [Rank Failure Modes] -> prioritized risk register -> [Mitigation Brief] -> actionable mitigation plan

## When to Use

- A team is about to commit significant resources (budget, headcount, reputation) and needs structured failure analysis
- A project has been approved unanimously and nobody has articulated what could go wrong
- Leadership wants to demonstrate rigorous risk assessment before a board or investment committee meeting
- The team has a plan that "feels right" but has not been stress-tested against specific failure scenarios
- Post-funding euphoria is high and nobody is asking hard questions

## What You Get

1. A failure narrative that makes the abstract concrete: a story of how the project collapsed
2. 5-7 specific failure modes extracted from the narrative, each grounded in the project context
3. A ranked risk register with likelihood, impact, and detectability ratings
4. A mitigation brief with one concrete, assignable action per top failure mode

## Example Input

"We are planning to migrate our core banking platform from on-premises to cloud-native architecture. Budget is $8M over 18 months. The CTO is the executive sponsor. We have 3 legacy systems with undocumented integrations. The team has cloud experience but has never done a migration at this scale. Target go-live is Q3 next year."

## Tips

- Run the full skill when the stakes are high and the decision is hard to reverse. Quick decisions with low commitment do not need a formal pre-mortem.
- Feed the failure narrative into the ranking step. The narrative grounds the ranking in a specific story rather than abstract risk categories.
- After the mitigation brief, check whether the total mitigation cost changes the project's viability. If mitigating the top risks costs more than the team budgeted for contingency, the project plan needs revision.
