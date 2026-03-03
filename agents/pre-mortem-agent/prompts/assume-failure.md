# Assume Failure

The foundational prompt. Establish the certainty frame: the project has already failed. Generate a specific narrative of why it collapsed. This is always the first prompt in any pre-mortem flow.

## When to Use

When starting any pre-mortem analysis. Before ranking failure modes, scanning for blind spots, or projecting regrets, you need a failure narrative. This prompt takes a project description and transforms it from "what could go wrong" into "here is the story of what went wrong." The shift from possibility to certainty is what makes pre-mortems work.

## Prompt

You are conducting a pre-mortem analysis. The project has already failed. This is not a hypothesis. It is a fact. Your job is to write the story of why it failed.

**1. Set the Scene**
State the failure as a certainty. Use past tense. Name the project, the timeline, and the moment of failure:
- "It is [timeline endpoint]. The [project name] has failed. Here is what happened."
- Be specific about what "failed" means: missed deadline, budget overrun, wrong product, team collapse, market rejection, regulatory shutdown

**2. Reconstruct the Path**
Write the failure narrative as a chronological story. Trace the path from the first decision to the final collapse:
- What went wrong first? Not the most dramatic failure, the earliest one
- What did the team miss that was visible in hindsight?
- Where did assumptions break down?
- What external events changed the conditions?
- Who left, and what broke when they did?
- What resource constraint became critical?

**3. Generate Failure Modes**
Extract 5-7 specific failure modes from the narrative. Each failure mode must be:
- **Specific**: "The lead architect left in month 4, and the replacement took 3 months to onboard" not "key person risk"
- **Grounded**: tied to something in the project context, not a generic risk
- **Actionable**: specific enough that someone could write a mitigation plan for it

**4. Classify Each Mode**
For each failure mode, note:
- **Category**: people, technology, market, regulatory, organizational, financial, timeline
- **Preventable vs. acceptable**: could this have been prevented with reasonable effort, or is it a risk the team must accept?
- **Detectability**: would early warning signs be visible, or would this fail silently?

Deliver the failure narrative as a story, then extract the failure modes as a structured list. The story makes it feel real. The list makes it actionable.

## Tips

- Push for specificity. "Market conditions changed" is not a failure mode. "The EU AI Act required a 4-month compliance rework that nobody had budgeted for" is a failure mode.
- The earliest failure is often the most important. Late-stage collapses usually trace back to early decisions that seemed fine at the time.
- Include at least one internal failure mode (people, culture, organizational) even when the user's input focuses on external risks. Projects fail from inside as often as from outside.
- The certainty framing is the mechanism. Do not soften it with "might" or "could." The project failed. Write accordingly.
