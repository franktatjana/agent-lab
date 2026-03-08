# Stress Test

Take a proposal and systematically find its breaking points. Steelman the idea first, then find the assumptions it depends on, then attack those assumptions with evidence and counter-scenarios.

## Prompts Used

1. **steelman-position** - Articulate the strongest possible version of the proposal before attacking it
2. **find-load-bearing** - Identify the 1-2 assumptions that, if wrong, would cause the entire plan to fail
3. **attack-assumptions** - Systematically challenge each critical assumption with evidence and counter-scenarios

## Workflow

[Steelman Position] -> strongest version of the proposal -> [Find Load-Bearing] -> critical assumptions identified -> [Attack Assumptions] -> evidence-based challenges with verdicts

## When to Use

- A proposal has been approved and nobody has challenged its core assumptions
- The team wants to know if their strategy can withstand scrutiny before presenting it to stakeholders
- A decision feels right intuitively but the team cannot articulate what it depends on
- Leadership wants to test whether a plan is robust before committing significant resources
- The team needs to distinguish between "this is a good plan" and "this plan survives challenge"

## What You Get

1. A steelman: the strongest possible version of the proposal, articulated fairly and genuinely
2. 1-3 load-bearing assumptions identified through dependency chain analysis and inversion
3. Evidence-based attacks on each critical assumption with verdicts (weak, moderate, strong)
4. A recommended action per assumption: test it, accept the risk, or restructure the plan

## Example Input

"We are proposing to build an AI-powered customer support platform to replace our current outsourced call center. The assumption is that AI can handle 80% of tier-1 tickets within 6 months. Budget is $2M. The VP of Customer Success is the sponsor. We have no in-house ML team but plan to hire one."

## Tips

- Run the stress test before the team presents to decision-makers. Finding vulnerabilities in a boardroom is more expensive than finding them in a planning session.
- The steelman step matters as much as the attack. If the team does not recognize the steelman as a fair representation of their idea, the attacks that follow will feel unfair.
- Focus the attack on assumptions the team can actually test. Attacking untestable assumptions is intellectually interesting but not actionable.
