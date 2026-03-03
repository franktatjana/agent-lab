# Trace Consequences

For each option: first-order (immediate), second-order (6 months), third-order (18 months) effects. Map the consequence chain before evaluating alternatives.

## When to Use

After decomposing the decision and classifying reversibility. Before running BATNA analysis. Most decision-makers evaluate only the immediate effects of their choices. Second-order effects, the consequences of the consequences, are where the real surprises live. This prompt forces the team to trace the causal chain forward through time, surfacing the effects that will determine whether the decision was actually good or bad.

## Prompt

You are a systems analyst mapping the consequence chain for each decision option. Your job is to trace what happens after the initial choice, through multiple orders of effects, so the team can evaluate options based on their full impact, not just the immediate outcome.

**1. First-Order Consequences (Immediate, 0-3 months)**
For each option under each sub-decision, state the direct, immediate effects:
- **Who is affected immediately?** Name the specific stakeholders, teams, or systems
- **What changes right away?** Budget allocation, team structure, market position, customer experience
- **What signals does this send?** Every decision communicates intent to employees, customers, competitors, and investors. What message does this option send, and to whom?
- **What is gained and what is lost?** The immediate tradeoff, stated plainly

First-order consequences are what most teams already consider. State them for completeness, but spend more analytical effort on second and third order.

**2. Second-Order Consequences (6 months)**
For each first-order consequence, ask: "and then what happens?"
- **Behavioral shifts**: how do stakeholders change their behavior in response to the first-order effects? (e.g., "We hire externally" first-order consequence leads to "internal candidates disengage" second-order consequence)
- **System responses**: how do markets, competitors, regulators, or internal systems adapt? (e.g., "We enter the market" leads to "competitor accelerates their own product roadmap")
- **Compounding effects**: do any first-order consequences reinforce each other, creating a feedback loop? (e.g., "We cut the team" leads to "remaining team works harder" leads to "burnout increases" leads to "more people leave")
- **Opportunity creation**: do any first-order consequences open new options that were not available before?

**3. Third-Order Consequences (18 months)**
For each significant second-order consequence, trace one more step:
- **Structural changes**: has the organization, market, or relationship been permanently altered?
- **Path dependency**: have any options been foreclosed? Are you now on a trajectory that is hard to leave?
- **Cultural effects**: has the decision changed how the organization thinks about risk, speed, or collaboration?
- **Emergent outcomes**: are there effects that no one intended but that result from the interaction of multiple second-order consequences?

Third-order consequences are inherently uncertain. Assign confidence levels (high, medium, low) to each and flag where you are speculating.

**4. Consequence Map**
For each option, present the chain:

| Order | Effect | Confidence | Impact |
|---|---|---|---|
| First (immediate) | What happens directly | High | Positive / Negative / Neutral |
| Second (6 months) | Behavioral and system response | Medium | Positive / Negative / Neutral |
| Third (18 months) | Structural and cultural change | Low-Medium | Positive / Negative / Neutral |

**5. Consequence Comparison**
Compare the consequence maps across options:
- **Where do the options diverge?** At which order do the consequences become meaningfully different?
- **Which option has the best second-order profile?** First-order tradeoffs are often similar; the real differentiation is in the downstream effects
- **Which option creates the most optionality?** The option that opens future choices is often better than the one that optimizes the present

Deliver as a consequence map for each option. The purpose is to move the team's evaluation horizon from "what happens next" to "what happens after what happens next."

## Tips

- Second-order consequences are where most decisions actually succeed or fail. First-order effects are obvious and usually manageable. The surprise is always downstream.
- Feedback loops are the highest-leverage finding. A consequence that reinforces itself (positively or negatively) will dominate the outcome regardless of the initial magnitude.
- Flag the consequences that are high-impact but low-confidence. These are the risks worth monitoring even if you cannot predict them with certainty.
- If two options have similar consequence maps through the second order, the differentiator is usually which one preserves more future optionality. Optionality is undervalued in most decision processes.
