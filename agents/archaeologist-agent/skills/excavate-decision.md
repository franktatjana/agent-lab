# Excavate Decision

Identify the chronological layers of decisions and changes that built the current artifact. The first step in any archaeological investigation: before you can assess whether something should change, you need to understand what it is and how it got there.

## Prompts Used

1. **excavate-layers** - Identify and date each layer of decisions, modifications, and accumulations that produced the current state

## Workflow

[Excavate Layers] → excavation with artifact description, estimated origin, and chronological layers with evidence quality ratings

## When to Use

- Someone says "we've always done it this way" and you need to find out what "always" actually means: when did this start, and why?
- A legacy system or process is being questioned and the first step is understanding what it is before deciding whether to change it
- A new team member is trying to understand the reasoning behind an inherited system and nobody currently on the team was there when it was built
- An architectural decision record is missing and you need to reconstruct the decision history from available evidence
- Before proposing any change to an established artifact, as the mandatory first step in applying Chesterton's Fence

## What You Get

1. A concrete description of what the artifact does today, in observable terms
2. A chronological excavation from origin to present, with each layer dated, described, and traced to its trigger
3. A classification of each layer's evidence quality (documented, inferred, or speculative)
4. A distinction between intentional decisions and unintentional accumulation (sediment)
5. An identification of gaps in the historical record that may need human investigation to close

## Example Input

"Our deployment pipeline requires three separate approvals before anything reaches production. Nobody knows why all three are needed, but removing any of them makes people nervous. The process has been in place for at least 4 years."

## Tips

- Start with what you can observe today and work backward. The current state is the most reliable evidence; everything before it requires progressively more inference.
- Pay attention to the distinction between decisions and sediment. Many artifacts are not the result of a single deliberate choice but the accumulation of small additions over time. Sediment layers are important because they are often the ones people attribute to a nonexistent master plan.
- Evidence quality classification is the most important discipline. Every claim about the past should be tagged as documented, inferred, or speculative. This prevents the excavation from drifting into confident-sounding fiction.
- Run this skill standalone when all you need is understanding, not a recommendation. Sometimes the excavation itself is the deliverable: a clear account of "this is what happened and why" for a team that has been operating on folklore.
