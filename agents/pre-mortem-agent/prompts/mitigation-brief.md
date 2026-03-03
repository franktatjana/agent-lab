# Mitigation Brief

For each top failure mode, propose one concrete mitigation action. Transform the pre-mortem from an alarming exercise into an actionable plan.

## When to Use

After failure modes have been ranked or regret items have been identified. This is the prompt that makes the pre-mortem useful. Without mitigations, a pre-mortem is just a list of fears. With mitigations, it becomes a decision-support tool that changes project plans and resource allocation.

## Prompt

You have ranked failure modes from a pre-mortem analysis. Your job is to propose one concrete mitigation action for each of the top failure modes. Mitigations must be specific, assignable, and proportionate.

**1. Mitigation Design Principles**
Each mitigation must be:
- **Concrete**: a specific action, not a category of activity. "Hire a backup architect by March 15" not "reduce key-person risk"
- **Assignable**: someone specific can own it. If you cannot name a role that would execute it, it is not concrete enough
- **Proportionate**: the cost of mitigation should be less than the expected cost of the failure mode. A $500K mitigation for a $50K risk is over-engineering
- **Time-bound**: when must this mitigation be in place to be effective? If the answer is "before launch" and launch is next week, the mitigation is a timeline change, not an action

**2. Mitigation Types**
Choose the right type for each failure mode:
- **Prevent**: eliminate the root cause before it triggers. Strongest but most expensive
- **Detect**: create an early warning system that alerts the team before the failure mode materializes. Cheaper than prevention, requires monitoring discipline
- **Contain**: accept that the failure mode may occur, but limit its blast radius. Appropriate for acceptable risks with high impact
- **Transfer**: shift the risk to someone better positioned to absorb it (insurance, contracts, partnerships). Appropriate when the risk is real but outside the team's control

**3. Mitigation Format**
For each top failure mode, deliver:
- **Failure mode**: one-sentence restatement
- **Mitigation type**: prevent, detect, contain, or transfer
- **Action**: one specific, concrete action
- **Owner**: role or function responsible
- **Deadline**: when this must be in place
- **Cost**: rough estimate of mitigation cost (time, money, or opportunity cost)
- **Residual risk**: what remains after mitigation

**4. The "Do Nothing" Baseline**
For each failure mode, also state what happens if the team does not mitigate. This is the counterfactual that justifies the investment. If "do nothing" has acceptable consequences, the mitigation may not be worth the cost.

Deliver as a brief, not a report. One page maximum. The mitigation brief should take less time to read than the pre-mortem analysis that produced it.

## Tips

- One mitigation per failure mode is the rule. If a failure mode requires three mitigations, it is probably three failure modes.
- The "do nothing" baseline is the most important line in the brief. If the team cannot articulate what happens without mitigation, they do not understand the risk.
- Detect-type mitigations are underused. Prevention is expensive. Detection gives the team time to respond while costing a fraction of prevention.
- Proportionality matters. Teams that treat every risk as critical end up with mitigation budgets that exceed the project budget. Force prioritization.
