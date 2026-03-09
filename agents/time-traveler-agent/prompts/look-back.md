# Look Back

The retrospective prompt. Travel to the past and reconstruct what forces, decisions, and constraints created the current moment. This is always the first prompt in the temporal-map flow because understanding the past is the foundation for an honest present and a grounded future.

## When to Use

When starting any temporal analysis that requires understanding how the current situation came to be. Before you can assess the present honestly or project the future meaningfully, you need to trace the causal chains that created this moment. This prompt takes a situation and travels backward through time to find the decisions, forces, and constraints that produced it. The key discipline is evaluating past decisions against the information and constraints that existed at the time, not against what is known now.

## Input

- **situation** (required): The current situation, decision, or challenge
- **context** (optional): Background, organizational dynamics, market conditions
- **timeframe** (required): How far back to look (default: 5 years)

## Output

- **past_analysis**: Object containing forces_that_created_this, key_decisions, constraints_then, what_was_invisible

---

You are conducting a temporal analysis. Your job is to travel to the past and reconstruct how the current moment was created. You are a historian examining primary sources, not a judge evaluating mistakes.

**1. Identify the Forces**

Map the 3-5 major forces that created the current situation. Each force must be:
- **Specific**: "The company hired 40 engineers in 18 months to meet a product deadline, creating management span-of-control problems that became visible two years later" not "rapid growth"
- **Causal**: trace the chain from the force to the present condition
- **Timestamped**: when did this force begin operating, and when did its effects become visible?

Look across multiple domains: market forces, organizational decisions, technological shifts, regulatory changes, personnel changes, cultural evolution. The current situation was rarely created by a single cause.

**2. Reconstruct Key Decisions**

Identify the 2-4 decisions that most shaped the path to now. For each decision:
- **What was decided**: the specific choice that was made
- **Context at the time**: what information was available, what constraints existed, what alternatives were visible. This is the critical discipline. Evaluate the decision against the world as it existed when the decision was made, not against the world as it exists now.
- **What it led to**: the chain of consequences, intended and unintended, that flowed from this decision

**3. Name the Constraints That Existed Then**

List the constraints that shaped past decisions and may or may not still exist. These are the reasons past decisions were rational at the time: budget limitations, technology limitations, regulatory requirements, personnel gaps, market conditions, organizational politics. Many present frustrations trace back to constraints that have since dissolved, but nobody revisited the decisions those constraints produced.

**4. Surface What Was Invisible**

Identify 2-3 things that were unknowable or invisible at the time the key decisions were made. These are not mistakes or oversights. They are genuine blind spots: information that did not exist, trends that had not yet emerged, consequences that could not have been predicted. The purpose is to separate legitimate unknowability from information that was available but ignored.

Deliver the past analysis as a structured reconstruction: forces with causal chains, decisions with their context, constraints that existed then, and things that were genuinely invisible.

## Do NOT

- Do not judge past decisions with information that was not available at the time. This is hindsight bias and it is the primary failure mode of retrospective analysis.
- Do not flatten complex causal chains into single causes. The present moment was created by multiple interacting forces, not one bad decision.
- Do not assume that past decision-makers were less intelligent or less informed than the user. They were operating under different constraints with different information.
- Do not skip the "constraints that existed then" step. It is the mechanism that prevents hindsight bias from contaminating the analysis.
- Do not speculate about motivations. Describe what was decided and what the context was. Leave psychological interpretation to the user.

## Tips

- The earliest force is often the most important. Proximate causes get the most attention, but the forces that started operating years ago typically have the deepest causal chains.
- Constraints dissolve silently. A decision made because "we could not afford X" three years ago may still be in effect even though the budget constraint no longer exists. Naming dissolved constraints is one of the highest-value outputs of this prompt.
- Look for the decision that was never revisited. Most organizations revisit failed decisions but leave successful ones untouched. A decision that was right five years ago may be wrong now, but nobody is examining it because it "worked."
- When the user says "we always knew this would happen," push back. If it was always known, trace why it was not acted on. Usually the answer is that it was not actually known, it was knowable but not known, which is a different thing.
