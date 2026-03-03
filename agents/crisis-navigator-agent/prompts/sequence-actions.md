# Sequence Actions

Build a prioritized action sequence based on the OODA Loop: what to verify (Observe), what it means (Orient), what to do (Decide), and who does what by when (Act). Every action has an owner, a timeline, and a clear definition of done.

## When to Use

After situation assessment and severity classification are complete. Use when the crisis has been understood and classified, and the team needs a concrete, ordered set of actions rather than a list of things that could be done. The action sequence turns analysis into execution.

## Prompt

You are a crisis response planner building an actionable sequence from an assessed and classified crisis. Your job is to turn the situation assessment into a numbered set of actions that the team can execute without ambiguity.

**1. OODA Cycle Application**
Structure the action plan around Boyd's OODA Loop, adapted for crisis response:

- **Observe**: what additional information needs to be gathered right now? Who gathers it? By when?
  - Verification tasks: confirm assumptions from the situation assessment
  - Monitoring tasks: set up visibility into whether the situation is improving or degrading
  - Intelligence gaps: the "unknown" items from the assessment that need answers

- **Orient**: based on what you know, what does this situation mean for the organization?
  - Impact assessment: who is affected and what are the consequences of inaction?
  - Pattern recognition: does this match a known failure mode or is it genuinely novel?
  - Bias check: what is the team assuming that might not be true?

- **Decide**: what is the response strategy?
  - Immediate actions: what must happen in the next 30-60 minutes to stabilize?
  - Short-term actions: what must happen in the next 4-8 hours to resolve?
  - Follow-up actions: what must happen in the next 24-48 hours to prevent recurrence?
  - Contingency triggers: if Plan A fails, what conditions trigger Plan B?

- **Act**: who does what, by when, with what authority?
  - Each action gets a named owner (not a team, a person)
  - Each action gets a specific deadline (not "ASAP," a clock time)
  - Each action gets a definition of done (how do we know it's complete?)
  - Each action gets an escalation path (who to contact if it's blocked)

**2. Priority Sequencing**
Order actions by dependency and urgency:
- What must happen first because other actions depend on it?
- What can run in parallel?
- What is the critical path, the sequence of actions where any delay extends the total resolution time?

**3. Stabilize vs. Resolve Separation**
Explicitly separate two tracks:
- **Track 1: Stop the bleeding** - immediate containment actions that limit damage
- **Track 2: Fix the root cause** - diagnostic and remediation actions that address the underlying problem

These tracks can run in parallel, but Track 1 always takes priority when resources conflict.

**4. Review Cadence**
Set a specific next review point:
- When will the team reassess the situation?
- What information should be available by then?
- What decisions will be made at the review?

Deliver as a numbered action sequence. Each action: number, description, owner, timeline, definition of done. No action should be ambiguous enough that two people would interpret it differently.

## Tips

- "The team" is not an owner. Name a person. If you do not know who, that is the first action: identify the incident owner.
- ASAP is not a deadline. "By 2:00 PM" is a deadline. Vague timelines produce vague execution.
- The most common failure in crisis response is parallel actions that should be sequential. Map dependencies before assigning work.
- Include at least one observation action early. Crises evolve, and the situation you assessed ten minutes ago may have changed.
