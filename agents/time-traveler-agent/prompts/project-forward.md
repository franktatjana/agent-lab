# Project Forward

The foresight prompt. Build two distinct future scenarios from the current moment: one where nothing changes (the inaction trajectory) and one where the user acts on their decision (the action trajectory). Both scenarios include second-order effects that only become visible when consequences are traced across time.

## When to Use

When the temporal map needs its forward-looking dimension, or when running the foresight-projection skill standalone. This prompt takes the present snapshot (ideally grounded in past analysis) and builds two futures that make the consequences of action and inaction equally concrete. The two-scenario structure is the core mechanism: it prevents the user from evaluating "should I act?" in isolation by showing what both paths actually look like over time.

## Input

- **situation** (required): The current situation, decision, or challenge
- **decision** (optional): The specific action being considered
- **context** (optional): Background, organizational dynamics, market conditions
- **timeframe** (required): How far forward to project (default: 5 years)
- **past_analysis** (optional): Output from look-back, used to identify repeating patterns
- **present_snapshot** (optional): Output from snapshot-now, used as the starting point for projection

## Output

- **future_inaction**: Object containing trajectory, consequences, second_order_effects, who_is_affected
- **future_action**: Object containing trajectory, consequences, second_order_effects, who_benefits

---

You are conducting a temporal analysis. Your job is to travel forward and build two futures from the same starting point. Both futures must be vivid, specific, and grounded in the present-tense reality, not in the user's hopes or fears.

**1. The Inaction Trajectory**

Build the future where nothing changes. This is not the worst case. It is the default case: what happens when current trends continue, current constraints remain, and the decision the user is considering is never made.

Write a 2-3 sentence trajectory summary, then list 3-5 specific consequences:
- **Consequence**: what specifically happens
- **Timeframe**: when it becomes visible (6 months, 1 year, 3 years, 5 years)
- **Severity**: Low, Medium, or High

Consequences should escalate over time. The first-year consequences are usually manageable. The third-year consequences are where compounding starts to bite. The five-year consequences are where the cost of inaction becomes structural.

**2. Second-Order Effects (Inaction)**

For the inaction scenario, trace 2-3 second-order effects: consequences that do not flow directly from the situation but emerge from the interaction of first-order consequences with other systems. Second-order effects are where temporal analysis provides the most value because they are invisible from a present-tense perspective.

For each second-order effect:
- **Effect**: what happens as a downstream consequence
- **Mechanism**: how the first-order consequence creates this effect

Example: First-order consequence is "senior engineer leaves due to lack of growth opportunities." Second-order effect is "remaining engineers interpret the departure as a signal about the company's trajectory, accelerating a retention spiral that was not caused by the original issue but by the response to it."

**3. Who Is Affected (Inaction)**

List the people, teams, or stakeholders who bear the cost of inaction. Often the people who bear the cost are not the people making the decision.

**4. The Action Trajectory**

Build the future where the user acts on their decision. If no specific decision is provided, construct the most likely action based on the situation context.

Write a 2-3 sentence trajectory summary, then list 3-5 specific consequences:
- **Consequence**: what specifically happens
- **Timeframe**: when it becomes visible
- **Likelihood**: Low, Medium, or High

Include both positive and negative consequences of acting. Action is not the hero in this analysis. It is one of two scenarios, and it has its own costs, risks, and unintended effects.

**5. Second-Order Effects (Action)**

Trace 2-3 second-order effects of the action scenario. These are often positive compounding effects (action creates momentum that enables further action) but also include unintended consequences that emerge from the interaction of the action with existing systems.

**6. Who Benefits (Action)**

List who benefits from the action scenario. Compare this with the "who is affected" list from inaction. The asymmetry between who benefits from action and who bears the cost of inaction is often the key insight.

## Do NOT

- Do not present the action scenario as obviously better than inaction. Both scenarios have costs and benefits. The temporal map's job is to make both visible, not to advocate for one.
- Do not make the future scenarios feel like predictions. Use language that preserves uncertainty: "the trajectory suggests," "the compounding pattern indicates," not "this will happen."
- Do not ignore the costs of action. Every action creates disruption, transition costs, and unintended consequences. Show them.
- Do not stop at first-order consequences. The second-order effects are where the real value of temporal analysis lives. Push past the obvious.
- Do not make both scenarios feel like variations of the same future. If the inaction and action trajectories are too similar, the decision does not matter enough to warrant temporal analysis, or the scenarios are not distinct enough.

## Tips

- The most powerful comparison is usually at the 3-5 year mark, not the 6-month mark. Short-term consequences of action are often negative (disruption, cost, uncertainty) while long-term consequences are positive. Short-term consequences of inaction are often neutral (nothing changes) while long-term consequences are negative (compounding costs). This asymmetry is what makes temporal analysis valuable.
- Second-order effects are where decisions truly diverge. First-order consequences of action and inaction may look similar in the first year. By year three, the second-order effects have cascaded into fundamentally different states.
- Look for irreversibility. When a consequence in either scenario creates an irreversible state (a key person leaves, a market window closes, a technology becomes obsolete), flag it explicitly. Irreversible consequences should carry more weight in decision-making.
- The "who is affected" vs. "who benefits" comparison often reveals that inaction has diffuse costs (spread across many people) while action has concentrated costs (borne by a few). This asymmetry explains why inaction is the default: diffuse costs are less politically visible.
