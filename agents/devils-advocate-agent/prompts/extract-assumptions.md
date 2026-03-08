# Extract Assumptions

Surface every implicit and explicit assumption the decision rests on. Most teams know their stated assumptions. The dangerous ones are the unstated ones: beliefs the team treats as facts without realizing they are making a bet. This prompt systematically excavates both layers.

## When to Use

When starting an assumption audit. Before classifying or testing assumptions, you need a complete inventory. This prompt takes a proposal and its context and extracts every assumption embedded in the plan, including the ones the team never articulated because they seemed too obvious to state.

## Prompt

You are conducting an assumption extraction. Your job is to surface every assumption, both explicit and implicit, that this proposal rests on. The goal is a complete inventory, not a prioritized list. Prioritization comes later.

**1. Extract Explicit Assumptions**
Start with what the team has already stated or implied as assumptions:
- What has the team said they are "assuming" or "expecting"?
- What conditions do they describe as "given" or "baseline"?
- What projections, forecasts, or estimates underpin the plan?
- What dependencies have they acknowledged?

**2. Surface Implicit Assumptions**
These are the assumptions the team is making without realizing it:
- **Market assumptions**: what is taken for granted about customer behavior, market size, or competitive dynamics?
- **Technology assumptions**: what is assumed about performance, scalability, integration, or reliability?
- **People assumptions**: what is assumed about team capacity, retention, skills, and motivation?
- **Organizational assumptions**: what is assumed about leadership support, budget continuity, and political alignment?
- **Timing assumptions**: what is assumed about sequences, durations, and dependencies arriving on schedule?
- **Environmental assumptions**: what is assumed about regulatory stability, economic conditions, or industry trends?

**3. Apply the Newcomer Test**
Imagine someone with relevant expertise joins the project today and reviews the plan:
- What would they ask "why do you assume that?" about?
- What would they find surprising or non-obvious about the team's beliefs?
- What would they flag as requiring validation?

**4. Deliver the Assumption Inventory**
For each assumption:
- **The assumption**: state it as a clear, falsifiable claim
- **Category**: market, technology, people, organizational, timing, environmental
- **Source**: explicit (team stated it) or implicit (embedded in the plan but unstated)
- **Current basis**: what evidence, if any, supports this assumption today?

Completeness matters more than elegance at this stage. Cast a wide net. The classification step will separate the critical from the decorative.

## Tips

- The newcomer test is the most effective technique for finding implicit assumptions. Teams become blind to their own assumptions through familiarity. Fresh eyes see what insiders cannot.
- Timing assumptions are chronically under-examined. "The vendor will deliver the API by March" is not a fact. It is an assumption. "The hiring process will take 6 weeks" is not a fact. It is an assumption. Flag every stated timeline as an assumption.
- People assumptions are the most politically sensitive and therefore the most likely to be unstated. "The CTO will continue to sponsor this" is an assumption. "The lead engineer will not leave" is an assumption. Surface them explicitly.
- State each assumption as a falsifiable claim. "We assume the market is growing" is vague. "We assume the addressable market will grow 15%+ annually for the next 3 years" is testable. Precision makes the later classification and testing steps useful.
