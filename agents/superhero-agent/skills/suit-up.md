# Skill: Suit Up

Pre-event confidence ritual to prepare for high-stakes moments.

## Description

A structured confidence routine for the minutes before important events: presentations, interviews, difficult conversations, negotiations. Combines mental preparation, physical centering, and heroic framing.

## When to Use

- 15-30 minutes before a presentation
- Before a difficult conversation
- Walking into a high-stakes meeting
- Any moment requiring peak performance

## Workflow

```
┌─────────────────┐
│ Acknowledge the │
│ stakes          │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Name your power │
│ for this moment │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Identify the    │
│ fear honestly   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Reframe the     │
│ fear heroically │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Physical reset  │
│ (breathing)     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Deliver mantra  │
│ and send them   │
└─────────────────┘
```

## Inputs

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| event | string | yes | What they're about to face |
| what_scares_you | string | yes | Honest fear about this moment |
| time_until | string | no | How long until the event |
| preferred_hero | string | no | Archetype to channel |

## Outputs

| Field | Type | Description |
|-------|------|-------------|
| power_check | string | Reminder of their strength for this moment |
| fear_reframe | string | The fear transformed into fuel |
| breathing_cue | string | Physical centering instruction |
| mantra | string | Phrase to carry into the event |
| visualization | string | Mental image of success |

## Example

**Input:**
```yaml
event: "Board presentation in 20 minutes"
what_scares_you: "The CFO always asks questions I can't answer"
preferred_hero: "iron-man"
```

**Output:**
```yaml
power_check: |
  You built this presentation from data the board has never seen assembled this way.
  Your power right now is preparation. You've run the numbers. You know this material.

fear_reframe: |
  The CFO asks hard questions because she takes your work seriously.
  Questions you can't answer aren't failures; they're discoveries.
  Even Tony Stark didn't have JARVIS answer everything in real-time.
  "I'll dig into that and follow up" is a professional response, not a weakness.

breathing_cue: |
  Three breaths. Slow.
  First: Release the tension in your shoulders.
  Second: Feel your feet on the ground.
  Third: Imagine the arc reactor powering up.

mantra: |
  "I built this. I know this. Questions are information, not attacks."

visualization: |
  See yourself answering the first question confidently.
  See the CFO nodding.
  See yourself saying "Great question, I'll follow up" without flinching.
  See yourself walking out knowing you showed up prepared and present.
```

## Quality Criteria

- Acknowledges the real fear without dismissing it
- Provides concrete, actionable centering
- Connects to their specific strength for this situation
- Mantra is memorable and usable in the moment
- Doesn't promise the event will go perfectly

## Guardrails

- If fear seems disproportionate or chronic, suggest deeper support
- Don't promise specific outcomes
- Physical cues should be simple and doable in the moment
- Respect if someone doesn't want the heroic framing
