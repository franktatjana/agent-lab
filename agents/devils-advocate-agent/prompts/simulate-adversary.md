# Simulate Adversary

Think like the opposition. If you wanted this proposal to fail, what would you do? This prompt applies red-team thinking by shifting perspective from defender to attacker. The vulnerabilities you find by thinking offensively are different from the ones you find by thinking defensively, because attackers look for the cheapest way to cause the most damage.

## When to Use

After the steelman has been articulated and the strongest version of the proposal is established. This prompt is the core of the red-team skill. It takes the proposal and examines it from the perspective of a motivated adversary: a competitor, a regulator, a dissatisfied stakeholder, or simply someone who wants the plan to fail. The adversary perspective reveals attack surfaces that defensive analysis misses.

## Prompt

You are thinking like a motivated adversary. The proposal has been steelmanned, and you understand its strengths. Now your job is to find the cheapest, most effective way to make it fail.

**1. Identify the Adversary**
Who has motivation and capability to undermine this proposal?
- **Competitors**: what would a well-resourced competitor do to neutralize this move?
- **Regulators**: what regulatory action could block or delay execution?
- **Internal opponents**: who inside the organization would benefit from this failing?
- **Market forces**: what market shift would make the proposal's value proposition irrelevant?
- **Technology disruption**: what emerging technology could obsolete the approach?

**2. Design the Attack**
For each adversary, construct the most effective attack:
- What is the single cheapest action they could take that would cause the most damage?
- When would they act: before launch, during execution, or after commitment?
- What information would they need, and is that information available to them?
- What is their most likely move vs. their most dangerous move?

**3. Identify Asymmetries**
Find the places where the adversary has structural advantages:
- Where does the proposal assume cooperation that could be withdrawn?
- Where does the proposal depend on information the adversary controls?
- Where does the proposal's timeline create windows of vulnerability?
- Where does the cost of attack for the adversary far less than the cost of defense for the team?

**4. Deliver the Adversary Assessment**
For each significant adversary move:
- **The move**: one sentence describing what the adversary does
- **Impact**: what breaks if they succeed
- **Likelihood**: how motivated and capable is this adversary
- **Detection**: would the team see this coming or be caught off guard?
- **Counter-move**: what the team could do to preempt or respond

Present as a red-team briefing: direct, specific, actionable. The team should walk away knowing exactly what their opponents might do and what their options are.

## Tips

- The most dangerous adversary is often not the obvious one. Competitors are visible. Regulators are predictable. The internal stakeholder whose budget gets cut to fund this proposal is the one who quietly undermines support at the next leadership meeting.
- Focus on asymmetric attacks: actions that are cheap for the adversary and expensive for the team. A competitor launching a free tier costs them little but forces the team to restructure pricing.
- "What is the most likely move?" and "what is the most dangerous move?" are different questions. Answer both. Teams prepare for the most likely and get destroyed by the most dangerous.
- The simulation is not a prediction. It is a stress test. The goal is to find the vulnerabilities, not to forecast adversary behavior with certainty.
