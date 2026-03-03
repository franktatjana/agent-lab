# Option Stress Test

Full decision analysis: decompose, classify reversibility, map consequences, run BATNA analysis, and synthesize into a decision brief. The complete skill for high-stakes decisions that deserve rigorous treatment.

## Prompts Used

1. **decompose-decision** - Break the decision into independent sub-decisions
2. **map-reversibility** - Classify each sub-decision by reversibility and reversal cost
3. **trace-consequences** - Map first, second, and third-order effects for each option
4. **evaluate-alternatives** - Run BATNA analysis and worst-case scenarios for each path
5. **decision-brief** - Synthesize into a one-page decision brief with recommendation and confidence level

## Workflow

[Decompose Decision] → sub-decisions → [Map Reversibility] → reversibility matrix → [Trace Consequences] → consequence map → [Evaluate Alternatives] → BATNA analysis → [Decision Brief] → one-page recommendation with confidence level

## When to Use

- A high-stakes decision with irreversible components where the team needs the full analytical treatment before committing
- An executive or board presentation where the recommendation needs to be backed by structured analysis, not just a narrative argument
- The team has tried simpler approaches (pros/cons lists, gut feel, debate) and is still stuck because the decision has too many interacting dimensions
- Multiple stakeholders with different priorities need a shared analytical framework to align on a path forward
- A decision that has been deferred repeatedly because no one is confident enough to recommend a direction

## What You Get

1. A decomposition of the original decision into 3-6 independent sub-decisions with dependency mapping
2. A reversibility matrix classifying each sub-decision with reversal cost and time window
3. A consequence map showing first, second, and third-order effects for each option
4. A BATNA analysis with worst-case scenarios, asymmetry assessment, and BATNA strength ratings
5. A one-page decision brief with recommended path, confidence level, immediate next action, and watch points

## Example Input

"Our startup has raised Series B ($30M) and we need to decide between three growth strategies: (A) expand to European markets with our current product, (B) build an enterprise tier for the US market, or (C) acquire a smaller competitor to consolidate market share. The board wants a recommendation at next month's meeting. Each option has different resource requirements, timelines, and risk profiles, and the leadership team is split three ways."

## Tips

- This is the full skill. Run it when the decision deserves the investment of all five prompts. For faster triage, use reversibility-check (2 prompts) or consequence-chain (2 prompts) as standalone skills.
- The decision brief at the end should be standalone. A reader who sees only the brief should understand the recommendation, the reasoning, and the confidence level without reading the intermediate analysis.
- Expect the decomposition to reframe the decision. Most teams that run the full stress test discover that the original framing was too broad or too narrow, and the real decision is different from what they started with.
- Schedule enough time. The full option stress test is not a 30-minute exercise. Give it the space it needs, especially on decisions with irreversible components and weak BATNAs.
