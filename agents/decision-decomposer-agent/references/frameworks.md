# Decision Decomposition Frameworks

Decision science draws from negotiation theory, military planning, systems thinking, and cognitive psychology. These four frameworks represent the core methodologies the Decision Decomposer Agent uses to structure decision analysis. Each framework addresses a different dimension of decision quality: reversibility assessment, alternative identification, consequence prediction, and priority classification.

## When to Load

Load when explaining methodology to users, when selecting the right framework for a specific decision, or when the analysis needs deeper grounding in established theory.

## Reversibility Matrix

The concept of classifying decisions by reversibility was popularized by Jeff Bezos in his 2015 letter to Amazon shareholders. Bezos distinguished between "Type 1" decisions (irreversible, high-consequence, one-way doors) and "Type 2" decisions (reversible, changeable, two-way doors). His core insight was that organizations tend to apply the same heavy-weight process to both types, which causes two problems: reversible decisions get delayed by unnecessary deliberation, and the organization learns to treat all decisions as high-stakes, creating a culture of paralysis.

The Reversibility Matrix extends this binary into a spectrum. Decisions are classified along two dimensions: reversibility (how easily can this be undone?) and stakes (how much does the outcome matter?). The resulting matrix has four quadrants:

- **Reversible + Low Stakes**: decide immediately, learn from the outcome, adjust if needed. These should take minutes, not meetings.
- **Reversible + High Stakes**: decide quickly but monitor closely. The reversibility gives you a safety net, but the stakes mean you should watch the results and be ready to pull back.
- **Irreversible + Low Stakes**: decide with moderate care. The irreversibility means you cannot undo it, but the low stakes mean a wrong choice is uncomfortable, not catastrophic.
- **Irreversible + High Stakes**: deliberate thoroughly. This is the one quadrant that deserves the full decision process: decomposition, consequence mapping, BATNA analysis, stakeholder alignment.

The practical power of the matrix is in the first quadrant. Most organizations have dozens of pending decisions that are both reversible and low-stakes, stuck in approval queues and committee agendas. Identifying and clearing these creates immediate organizational velocity and frees attention for the decisions that actually matter.

**Maps to:** The map-reversibility prompt and the reversibility-check skill. Every sub-decision is classified using this matrix. The classification determines how much deliberation each sub-decision deserves.

**Source:** Jeff Bezos, 2015 Letter to Amazon Shareholders. The Type 1/Type 2 framework is public business writing. The matrix extension is a common decision science elaboration.

## BATNA (Best Alternative to Negotiated Agreement)

BATNA was introduced by Roger Fisher and William Ury in "Getting to Yes" (1981), the foundational text on principled negotiation. The concept is simple but powerful: before entering any negotiation, know your best alternative if the negotiation fails. Your BATNA is your walk-away position, the option you would pursue if you could not reach agreement. The strength of your BATNA determines your negotiating power: a strong BATNA means you can afford to walk away from a bad deal, while a weak BATNA means you are negotiating from a position of dependence.

Applied to decision-making beyond negotiation, BATNA answers the question: "If this option fails, what do I do instead?" This reframes risk assessment from abstract probability (30% chance of failure) to concrete alternative evaluation (if this fails, my next-best option is X, which delivers 60% of the value at 40% of the cost). Concrete alternatives are easier for teams to evaluate than abstract probabilities.

BATNA analysis reveals three important patterns:

- **Strong BATNA, reversible decision**: the lowest-risk combination. Try the preferred option, fall back to the BATNA if it does not work. These decisions should be made quickly.
- **Weak BATNA, irreversible decision**: the highest-risk combination. Failure means a bad outcome with no good fallback. These decisions deserve maximum deliberation and often benefit from delaying until a better BATNA can be created.
- **Time-dependent BATNA**: the most commonly overlooked pattern. An alternative that exists today might expire while you are pursuing the primary option. A competing job offer has a deadline. A market window closes. A partnership opportunity goes to someone else. The BATNA's expiration date is as important as its quality.

**Maps to:** The evaluate-alternatives prompt and the option-stress-test skill. BATNA strength ratings (strong, moderate, weak) directly inform the recommendation and confidence level in the decision brief.

**Source:** Roger Fisher and William Ury, "Getting to Yes: Negotiating Agreement Without Giving In" (1981). Published methodology, widely taught in business schools and negotiation courses.

## Second-Order Consequences

The concept of tracing consequences through multiple orders of effect comes from systems thinking, most accessibly taught by Donella Meadows in "Thinking in Systems" (2008). Meadows demonstrated that most policy and business failures come from optimizing for first-order effects while ignoring the system's response to those effects. A tax cut increases spending (first order), which increases demand (second order), which increases prices (third order), partially negating the original benefit. A hiring freeze reduces costs (first order), increases workload on remaining staff (second order), increases turnover (third order), increasing hiring costs beyond the original savings.

The framework classifies consequences by temporal distance:

- **First-order (immediate, 0-3 months)**: the direct, intended effects of the decision. These are what decision-makers usually evaluate. They are necessary but insufficient.
- **Second-order (6 months)**: the consequences of the consequences. How do stakeholders, markets, and systems adapt to the first-order effects? This is where behavioral responses, competitive reactions, and organizational adaptation occur.
- **Third-order (18 months)**: the structural and cultural changes that emerge from the accumulation of second-order effects. Path dependencies form. Organizational culture shifts. Market structures change. These are the hardest to predict but often the most consequential.

The most important analytical tool within second-order analysis is the feedback loop. A consequence that reinforces itself, either amplifying or dampening, will dominate the outcome regardless of how small it starts. Identifying feedback loops early is more valuable than predicting specific second-order effects because loops determine the trajectory rather than the point-in-time state.

**Maps to:** The trace-consequences prompt and the consequence-chain skill. Consequence maps are structured around three temporal horizons with explicit confidence ratings, acknowledging that prediction accuracy degrades with distance.

**Source:** Donella Meadows, "Thinking in Systems: A Primer" (2008). Also influenced by Howard Marks, "Second-Level Thinking" in "The Most Important Thing" (2011), and Ray Dalio, "Principles" (2017) on second and third-order consequences.

## Eisenhower Matrix

Attributed to Dwight D. Eisenhower's approach to prioritization, and formalized by Stephen Covey in "The 7 Habits of Highly Effective People" (1989). The matrix classifies tasks and decisions along two dimensions: urgency (does this require immediate attention?) and importance (does this contribute to long-term goals?). The resulting four quadrants prescribe different actions:

- **Urgent + Important (Do)**: crises, deadlines with real consequences, opportunities that expire. Handle these immediately.
- **Important + Not Urgent (Schedule)**: strategic planning, relationship building, skill development, prevention. These are the most valuable activities and the most commonly neglected because nothing forces immediate action.
- **Urgent + Not Important (Delegate)**: interruptions, some meetings, some emails, requests from others that serve their priorities more than yours. Handle these efficiently or hand them off.
- **Not Urgent + Not Important (Eliminate)**: busy work, time-wasters, activities done out of habit rather than purpose. Stop doing these.

Applied to decision decomposition, the Eisenhower Matrix serves a specific function: after sub-decisions are identified and classified by reversibility, the matrix helps determine sequencing. A sub-decision that is both urgent and important should be resolved first, regardless of its reversibility classification. A sub-decision that is important but not urgent should be scheduled for careful deliberation, especially if it is irreversible. A sub-decision that feels urgent but is not truly important can often be delegated or decided quickly with a default choice.

The matrix is most useful when it reveals that the sub-decision causing the most organizational anxiety (urgent) is not the same sub-decision that will determine long-term success (important). This misalignment between urgency and importance is the root cause of many decision-making failures: teams spend their best thinking on the urgent-but-unimportant while the important-but-not-urgent drifts toward its deadline and gets decided under pressure.

**Maps to:** The decompose-decision prompt (sub-decision sequencing) and the decision-brief prompt (recommended decision order). The matrix provides the prioritization framework that determines which sub-decisions to resolve first.

**Source:** Attributed to Dwight D. Eisenhower. Formalized by Stephen Covey, "The 7 Habits of Highly Effective People" (1989). Public domain concept.

## IP Notes

BATNA is published methodology from Fisher and Ury ("Getting to Yes," 1981). Second-Order Consequences draws on Meadows ("Thinking in Systems," 2008) and is a standard systems thinking concept. The Eisenhower Matrix is attributed to public domain presidential methodology, formalized by Covey (1989). The Bezos Type 1/Type 2 framework is from a public shareholder letter (2015). This agent is an educational reference design applying these published concepts, not a commercial implementation of any proprietary methodology.
