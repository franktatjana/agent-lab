# Glossary and Resources

Core terminology and external resources for the Decision Decomposer Agent's structured decision methodology.

## When to Load

Always available as baseline reference. Load when defining terms, grounding analysis in established theory, or providing framework context to users new to structured decision-making.

## Key Terms

**Sub-Decision**: An independently evaluable component extracted from a complex decision. A good sub-decision has its own options, its own stakeholders, and can be resolved without first resolving the others. The decomposition step is where most of the analytical value lives.

**Reversibility**: The degree to which a decision can be undone after execution. Ranges from fully reversible (two-way door, low reversal cost) through partially reversible (can be undone at significant cost) to practically irreversible (one-way door, cannot be undone without catastrophic cost).

**One-Way Door**: A decision that cannot be reversed once made, or can only be reversed at prohibitive cost. Selling a business unit, making a public commitment, choosing a foundational technology that downstream systems will build on. These deserve maximum deliberation.

**Two-Way Door**: A decision that can be easily reversed or adjusted after execution. Choosing a project management tool, setting a pricing experiment, selecting a pilot market. These should be made quickly. The cost of delay usually exceeds the cost of being wrong.

**BATNA (Best Alternative to Negotiated Agreement)**: The best option available if the preferred path fails. Originated in Fisher and Ury's negotiation theory. Applied to decision-making, it answers: "if this option does not work, what do I do instead?" The strength of the BATNA determines the real risk of the decision.

**Reversal Cost**: The financial, temporal, relational, and reputational cost of undoing a decision after implementation. A critical factor in reversibility classification. "Hard to reverse" (high reversal cost) and "impossible to reverse" (no reversal path) are fundamentally different categories.

**Second-Order Consequence**: The consequences of the consequences. What happens after the initial effects play out and stakeholders, markets, and systems adapt. Most decision failures originate in second-order effects that were not considered.

**Feedback Loop**: A consequence that reinforces itself, either amplifying (positive feedback) or dampening (negative feedback). Feedback loops dominate outcomes over time regardless of initial magnitude. Identifying them early is more valuable than predicting specific downstream effects.

**Eisenhower Matrix**: A prioritization framework classifying decisions by urgency (requires immediate attention) and importance (contributes to long-term goals). Used to sequence sub-decisions after decomposition.

**Decision Paralysis**: The inability to decide, typically caused by treating a multi-dimensional choice as a single binary, conflating reversible and irreversible components, or lacking a clear BATNA. The primary condition the Decision Decomposer Agent is designed to resolve.

**Confidence Level**: The agent's self-assessment of recommendation quality. High: analysis consistently points one direction, BATNAs are strong, assumptions are supported. Medium: sound recommendation but depends on 1-2 unvalidated assumptions. Low: inconclusive analysis or too many unknowns.

**Asymmetry**: The relationship between upside potential and downside risk for a given option. Favorable asymmetry (large upside, limited downside) is the hallmark of good risk-taking. Unfavorable asymmetry (limited upside, large downside) signals a trap.

## Recommended Reading

**Getting to Yes** by Roger Fisher and William Ury. The foundational text on principled negotiation and the BATNA framework. Essential reading for understanding walk-away positions and how alternatives shape decision quality.

**Thinking in Systems** by Donella Meadows. The most accessible introduction to systems thinking, feedback loops, and second-order consequences. Read for the mental model of tracing effects through interconnected systems.

**Thinking, Fast and Slow** by Daniel Kahneman. Comprehensive treatment of cognitive biases that distort decision-making: anchoring, loss aversion, overconfidence, availability bias. Explains why structured decomposition outperforms intuitive judgment on complex decisions.

**How to Decide** by Annie Duke. Practical frameworks for improving decision quality under uncertainty. Particularly strong on separating decision quality from outcome quality, a distinction that matters when evaluating reversible experiments.

**The Hard Thing About Hard Things** by Ben Horowitz. Real-world accounts of irreversible decisions under organizational pressure. Read for the emotional and political dimensions of high-stakes choices.

**The Most Important Thing** by Howard Marks. Second-level thinking as an investment discipline. Marks's distinction between first-level thinking ("this is a good company") and second-level thinking ("everyone already knows this is a good company, so the price reflects that") maps directly to first-order vs. second-order consequence analysis.

## Related Agents

**Pre-Mortem Agent**: Receives handoffs when the decision analysis is complete and the team needs failure mode analysis before committing major resources. The pre-mortem asks "assume this failed, why?" which complements the decomposer's structural analysis.

**Six Hats Agent**: Receives handoffs when the decision paralysis stems from conflicting perspectives rather than structural complexity. If decomposition reveals that stakeholders agree on the sub-decisions but disagree on values or priorities, perspective analysis is more useful than further decomposition.

**Research Agent**: Receives handoffs when the decomposition or BATNA analysis identifies data gaps that cannot be resolved through structured thinking alone. Missing market data, competitor intelligence, or technical feasibility assessments need research, not more analysis.
