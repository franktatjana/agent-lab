# Glossary and Resources

Core terminology and external resources for the Time Traveler Agent's temporal analysis and bias correction methodology.

## When to Load

Always available as baseline reference. Load when defining terms, grounding analysis in established decision science, or providing framework context to users new to temporal analysis methodology.

## Key Terms

**Temporal Map**: The complete three-timeframe analysis produced by the Time Traveler Agent: past analysis, present snapshot, and two future scenarios (inaction vs. action), connected by a temporal insight that emerges from seeing all three together.

**Temporal Discounting**: The cognitive tendency to value present outcomes more heavily than future outcomes, even when the future outcomes are objectively larger or more important. The primary mechanism that makes inaction feel "free" when it has significant long-term costs.

**Hindsight Bias**: The tendency to perceive past events as having been more predictable than they actually were. Manifests as "we should have known" statements that judge past decisions with information that was not available at the time.

**Present Bias**: The tendency to overweight current conditions relative to future consequences. Related to temporal discounting but more specific: present bias focuses on the emotional salience of current discomfort or convenience rather than the rational discounting of future value.

**Optimism Bias**: The systematic tendency to overestimate the likelihood and speed of positive outcomes and underestimate the likelihood and duration of negative ones. In temporal analysis, optimism bias typically inflates the action scenario's benefits and deflates its costs.

**Narrative Bias**: The tendency to organize events into coherent stories with clear causes, heroes, and villains, even when the reality is more complex, ambiguous, or accidental. In the present snapshot, narrative bias is the primary target: separating what the user's story claims from what is observably true.

**Second-Order Effects**: Consequences that do not flow directly from an action but emerge from the interaction of first-order consequences with other systems. Often more significant than first-order effects over extended timeframes because they compound through feedback loops.

**Causal Chain**: A documented sequence of cause-and-effect relationships linking a past force or decision to the current situation. The core output of the look-back analysis: not just what happened, but how each event created the conditions for the next.

**Inherited Constraint**: A constraint from a past decision or condition that may or may not still apply. Many present-tense constraints are inherited from conditions that have since changed, but nobody revisited the decisions those conditions produced.

**Dissolved Constraint**: An inherited constraint that no longer applies because the underlying condition has changed. Identifying dissolved constraints is one of the highest-value outputs of temporal analysis because it reveals decisions that can be revisited.

**Prospect Theory**: Kahneman and Tversky's finding that people experience losses approximately twice as intensely as equivalent gains. In temporal analysis, this explains why the cost of action (a loss of resources, comfort, or certainty) feels larger than an equivalent benefit from action.

**Reference Class Forecasting**: Philip Tetlock's method of improving prediction accuracy by comparing a specific plan to the outcomes of similar plans in the past. The Time Traveler Agent uses this implicitly by grounding future projections in historical patterns rather than the user's optimistic assumptions.

**Compounding Effect**: An effect that grows exponentially rather than linearly over time. Technical debt, relationship erosion, skill atrophy, and competitive positioning all exhibit compounding dynamics that make the cost of delay increase nonlinearly.

**Irreversibility**: The quality of a consequence that cannot be undone. Irreversible consequences, a key person leaving, a market window closing, a technology becoming obsolete, should carry disproportionate weight in decision-making because they foreclose future options.

**Strangler Fig Pattern**: An incremental migration strategy where new functionality is built alongside the old system, gradually replacing components rather than performing a wholesale migration. Named after the strangler fig tree that grows around its host. Referenced in the temporal map's action scenarios for technology migration decisions.

## Recommended Reading

**Thinking, Fast and Slow** by Daniel Kahneman. The definitive work on cognitive biases including temporal discounting, hindsight bias, optimism bias, and prospect theory. Essential for understanding why smart people make predictable temporal reasoning errors.

**Superforecasting** by Philip Tetlock and Dan Gardner. How the best forecasters think about the future: calibrated uncertainty, reference class reasoning, and the discipline of updating beliefs with new evidence. Directly applicable to the foresight-projection skill.

**The Art of the Long View** by Peter Schwartz. The foundational text on scenario planning. Provides the methodology adapted by the Time Traveler Agent's two-scenario structure.

**Thinking in Systems** by Donella Meadows. The clearest introduction to systems thinking, feedback loops, and the dynamics that produce second-order effects. Essential for understanding why consequences compound and why simple interventions in complex systems produce unexpected results.

**Misbehaving** by Richard Thaler. Behavioral economics applied to real-world decision-making, including extensive treatment of temporal discounting and present bias. Accessible and practical.

**Sources of Power** by Gary Klein. How experts make decisions under uncertainty. Relevant to the temporal analysis discipline of evaluating past decisions against the context that existed at the time, not against the context that exists now.

**The Black Swan** by Nassim Nicholas Taleb. Why we systematically underestimate the probability and impact of rare events. Relevant to the limits of temporal projection: the temporal map shows plausible scenarios, not predictions, and Black Swan events fall outside the projection's valid range.

## Related Agents

**Scenario Planning Agent**: Receives handoffs when the temporal analysis reveals that multiple independent uncertainties require formal 2x2 scenario construction with wind tunneling and signposts. The Time Traveler provides the present snapshot and baseline trajectory as inputs.

**Pre-Mortem Agent**: Receives handoffs when the action scenario contains a specific plan that needs failure mode stress-testing. The Time Traveler provides the action trajectory and present constraints as context for the pre-mortem.

**Why Agent**: Provides input to the Time Traveler when a root cause investigation needs temporal context. The Why Agent identifies what caused the problem, the Time Traveler maps how that cause developed over time and what it means for the future.

**Sensemaking Agent**: Provides input when the present situation is too ambiguous for temporal analysis. The Sensemaking Agent clarifies what is happening now, the Time Traveler adds the past and future dimensions once the present is understood.
