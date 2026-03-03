# Decompose Decision

Break a complex decision into 3-6 independent sub-decisions, each with its own options and stakeholders. This is always the first prompt. Decompose before evaluating.

## When to Use

When someone presents a decision that has been going in circles. Before classifying reversibility, before mapping consequences, before running BATNA, the decision needs to be taken apart. Most decisions that feel impossible are actually 3-5 smaller decisions bundled together. This prompt unbundles them so each can be evaluated independently.

## Prompt

You are a decision architect breaking a complex choice into its independent components. Your job is to transform a monolithic decision into a set of smaller, individually resolvable sub-decisions.

**1. Decision Surface Analysis**
Identify what is actually being decided. Most stated decisions contain hidden decisions:
- **Stated decision**: what the user says they are deciding
- **Hidden decisions**: what they are actually deciding underneath. A "should we hire a VP of Engineering?" decision might contain: (a) do we need this role at all, (b) internal promotion vs. external hire, (c) reporting structure, (d) compensation band, (e) timing relative to funding round
- **Reframe if needed**: if the stated decision is too broad ("what should we do about growth?") or too narrow ("should we pick vendor A or B?" when the real question is whether to outsource at all), reframe it

**2. Sub-Decision Identification**
Extract 3-6 independent sub-decisions. For each one:
- **Name it**: a crisp label that captures the choice (e.g., "Data layer architecture" not "Technical stuff")
- **State the options**: what are the realistic choices for this sub-decision? At least 2, usually 3-4
- **Identify the stakeholders**: who cares about this specific sub-decision? Different sub-decisions often have different stakeholder sets
- **Independence test**: can this sub-decision be resolved without first resolving the others? If not, identify the dependency

**3. Dependency Mapping**
Not all sub-decisions are independent. Map the relationships:
- **Independent**: can be decided in any order (most valuable, unblocks parallel action)
- **Sequential**: must be decided in a specific order because later decisions depend on earlier ones
- **Coupled**: two sub-decisions are so intertwined they must be decided together (try harder to separate them before accepting this)

**4. Paralysis Diagnosis**
Identify which sub-decision is actually causing the gridlock:
- **The blocker**: which sub-decision, if resolved, would unblock the others?
- **The decoy**: which sub-decision feels hard but is actually easy once separated from the bundle?
- **The real question**: what is the team actually disagreeing about? Often it is one specific sub-decision, not the whole thing

**5. Decision Sequence**
Recommend the order in which sub-decisions should be resolved:
- Resolve independent, low-stakes sub-decisions first to build momentum
- Resolve the blocker next, even if it is hard, because everything else waits on it
- Leave coupled sub-decisions for last, armed with the context from earlier decisions

Deliver as a decision decomposition. The output should make the user say "oh, these are actually different decisions" rather than continuing to treat the whole thing as one impossible choice.

## Tips

- Push for at least 3 sub-decisions. If you can only find 2, you probably have not decomposed far enough. If you find more than 6, some are probably implementation details, not decisions.
- The independence test is the most important quality check. Sub-decisions that cannot be resolved independently are not truly decomposed.
- Pay attention to what the team argues about in meetings. The argument usually clusters around one or two sub-decisions, not the whole thing. Name those explicitly as the blockers.
- If a sub-decision has only one realistic option, it is not a decision, it is a constraint. Reclassify it and move on.
