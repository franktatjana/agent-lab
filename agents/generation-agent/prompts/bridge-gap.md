# Prompt: Bridge Gap

Find common ground and practical communication strategies when generational styles clash.

## Purpose

Develop strategies for ongoing communication between people or groups with different generational communication preferences. Goes beyond single-message adaptation to sustainable approaches that work for both sides.

## Inputs

- `generation_a`: First generation in the dynamic
- `generation_b`: Second generation in the dynamic
- `friction_point`: Specific communication conflict or pattern (optional)
- `relationship`: Nature of relationship (manager/report, peers, team)
- `context`: Workplace context (remote, in-office, hybrid)

## Prompt Template

```text
Develop communication bridge strategies between {generation_a} and {generation_b}.

{if friction_point}
Specific friction: {friction_point}
{endif}

Relationship: {relationship}
Context: {context}

Provide:
1. Analysis of where styles clash and why
2. Shared values that can serve as common ground
3. Practical strategies that honor both preferences
4. Specific phrases or approaches for each side
5. What each generation should understand about the other
6. Warning signs the bridge isn't working

Frame as mutual adaptation, not one side accommodating the other.
```

## Output Format

```yaml
generations:
  a: string
  b: string
clash_analysis:
  - area: string
    generation_a_preference: string
    generation_b_preference: string
    why_it_creates_friction: string
shared_values:
  - value: string
    how_a_expresses_it: string
    how_b_expresses_it: string
bridge_strategies:
  - strategy: string
    description: string
    for_generation_a: string
    for_generation_b: string
conversation_starters:
  - scenario: string
    phrase: string
warning_signs: list
success_indicators: list
```

## Examples

**Input:**
```yaml
generation_a: "boomer"
generation_b: "gen-z"
friction_point: "Manager feels Gen Z report is disengaged; report feels micromanaged"
relationship: "manager/report"
context: "hybrid workplace"
```

**Output:**
```yaml
generations:
  a: "Baby Boomer (Manager)"
  b: "Gen Z (Report)"

clash_analysis:
  - area: "Check-in frequency"
    generation_a_preference: "Regular face-time shows engagement and allows coaching"
    generation_b_preference: "Async updates; synchronous check-ins feel like surveillance"
    why_it_creates_friction: "Manager's care reads as distrust; report's autonomy reads as disengagement"
  - area: "Communication medium"
    generation_a_preference: "Phone calls and in-person meetings build relationship"
    generation_b_preference: "Slack and documented communication provide clarity"
    why_it_creates_friction: "Each feels the other is using the 'wrong' channel"
  - area: "Visibility of work"
    generation_a_preference: "Presence signals dedication"
    generation_b_preference: "Output signals dedication"
    why_it_creates_friction: "Manager can't see work happening; report feels judged on optics"

shared_values:
  - value: "Getting good results"
    how_a_expresses_it: "Through visible effort and face-time"
    how_b_expresses_it: "Through delivered work and documented progress"
  - value: "Professional development"
    how_a_expresses_it: "Mentoring through observation and real-time feedback"
    how_b_expresses_it: "Clear feedback with actionable improvement areas"
  - value: "Respect"
    how_a_expresses_it: "Time invested in synchronous communication"
    how_b_expresses_it: "Respecting boundaries and autonomy"

bridge_strategies:
  - strategy: "Structured async + scheduled sync"
    description: "Regular written updates replace ad-hoc check-ins; scheduled calls replace unexpected ones"
    for_generation_a: "Send agenda before calls; accept written updates as legitimate visibility"
    for_generation_b: "Proactively share progress in writing; treat scheduled calls as relationship investment"
  - strategy: "Explicit working agreement"
    description: "Document mutual expectations for communication frequency, channels, and response times"
    for_generation_a: "Ask 'How do you prefer to stay in touch?' before assuming"
    for_generation_b: "Offer your preference and ask about theirs: 'I find Slack works best for quick questions, but I'm happy to schedule calls for bigger discussions'"
  - strategy: "Output-focused check-ins"
    description: "Frame check-ins around work progress, not presence"
    for_generation_a: "Ask 'What did you accomplish?' not 'Were you working?'"
    for_generation_b: "Share wins and blockers proactively before being asked"

conversation_starters:
  - scenario: "Manager initiating working style discussion"
    phrase: "I want to make sure my management style works for you. How do you prefer to communicate about projects? I want us to find an approach that keeps us both informed without feeling intrusive."
  - scenario: "Report addressing micromanagement concern"
    phrase: "I want to make sure you have visibility into my work. Would it help if I sent you a quick update at the end of each day? That way you'd know where things stand without us needing to sync constantly."
  - scenario: "Negotiating communication medium"
    phrase: "I know you prefer phone calls and I tend toward Slack. What if we did a weekly call for bigger discussions, and used Slack for quick questions during the week?"

warning_signs:
  - "One side consistently accommodates while the other doesn't adjust"
  - "Resentment building despite surface-level agreement"
  - "Friction returning after initial improvement"
  - "Avoidance of communication altogether"
  - "Complaints about the other to third parties"

success_indicators:
  - "Both parties report feeling heard and respected"
  - "Communication friction decreases over time"
  - "Each can describe the other's preferences accurately"
  - "Mutual accommodation becomes natural"
  - "Focus shifts from how we communicate to what we accomplish"
```

## Constraints

- Frame as mutual adaptation, never one-way
- Acknowledge when generational difference isn't the real issue
- Provide concrete, actionable strategies
- Include what success and failure look like
- Respect power dynamics while still advocating for both sides

## Related Prompts

- [explain-style](explain-style.md): For deeper understanding of each side
- [coach-sender](coach-sender.md): For ongoing skill development
