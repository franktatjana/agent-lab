# Skill: Bridge Gap

Develop communication strategies when generational styles clash.

## Description

Goes beyond single-message adaptation to develop sustainable communication approaches between people or groups with different generational preferences. Creates mutual strategies that honor both sides' values and build lasting bridges.

## When to Use

- When ongoing communication friction exists between generations
- When building a new cross-generational working relationship
- When a team needs norms that work across age groups
- When conflict has emerged from communication style differences

## Workflow

```
┌─────────────────┐
│ Understand both │
│ generations     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Analyze clash   │
│ points          │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Identify shared │
│ values          │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Develop mutual  │
│ strategies      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Create action   │
│ items for both  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Define success  │
│ indicators      │
└─────────────────┘
```

## Prompts Used

- [bridge-gap](../prompts/bridge-gap.md): Core bridging logic

## Context Loading

Load patterns for both generations involved:

```yaml
references_to_load:
  - generational-patterns.md#{generation_a}
  - generational-patterns.md#{generation_b}
```

## Inputs

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| generation_a | string | yes | First generation in dynamic |
| generation_b | string | yes | Second generation in dynamic |
| friction_point | string | no | Specific conflict or pattern |
| relationship | string | yes | manager/report, peers, team |
| context | string | no | remote, in-office, hybrid |

## Outputs

| Field | Type | Description |
|-------|------|-------------|
| clash_analysis | list | Where and why styles conflict |
| shared_values | list | Common ground between generations |
| bridge_strategies | list | Mutual approaches for both sides |
| conversation_starters | list | Phrases to initiate bridge-building |
| warning_signs | list | Indicators bridge isn't working |
| success_indicators | list | How to know it's working |

## Quality Criteria

- Mutual adaptation, never one-sided
- Actionable for both parties
- Grounded in shared values
- Includes success and failure indicators
- Respects power dynamics

## Examples

### Peer Relationship

**Input:**
```yaml
generation_a: "millennial"
generation_b: "gen-z"
relationship: "peers"
friction_point: "Millennial colleague thinks Gen Z teammate doesn't take work seriously because of casual communication"
```

**Output:**
```yaml
clash_analysis:
  - area: "Professionalism signals"
    generation_a_preference: "Some formality signals taking work seriously"
    generation_b_preference: "Casualness signals authenticity and comfort"
    why_it_creates_friction: "Same behavior reads as 'committed' to one and 'unprofessional' to other"

shared_values:
  - value: "Getting good work done"
    how_a_expresses_it: "Demonstrating effort through professional presentation"
    how_b_expresses_it: "Demonstrating competence through output quality"
  - value: "Authenticity"
    how_a_expresses_it: "Being genuine while maintaining professionalism"
    how_b_expresses_it: "Being genuine by dropping unnecessary formality"

bridge_strategies:
  - strategy: "Output over optics"
    description: "Judge each other by work quality, not communication style"
    for_millennial: "Notice that casual tone doesn't predict work quality"
    for_gen_z: "Recognize that your peer's formality isn't judgment of you"
  - strategy: "Direct conversation about preferences"
    description: "Have explicit conversation about communication styles"
    for_millennial: "Share that some formality helps you feel collaborative"
    for_gen_z: "Share that casualness helps you feel comfortable and productive"

conversation_starters:
  - scenario: "Opening the conversation"
    phrase: "I've noticed we communicate pretty differently. I want to make sure we're working well together. Can we talk about what works best for each of us?"

success_indicators:
  - "You stop mentally translating each other's messages"
  - "You can describe each other's preferences accurately"
  - "Friction decreases without either person feeling they've compromised identity"
```

### Team Dynamics

**Input:**
```yaml
generation_a: "boomer"
generation_b: "gen-z"
relationship: "team"
context: "hybrid workplace"
friction_point: "Team meetings are frustrating for everyone: Boomers want more in-person, Gen Z wants more async"
```

**Output:**
```yaml
clash_analysis:
  - area: "Meeting value"
    generation_a_preference: "Synchronous meetings build relationships and enable real-time collaboration"
    generation_b_preference: "Async updates preserve focus time; meetings should be rare and purposeful"
    why_it_creates_friction: "Boomers feel disconnected without meetings; Gen Z feels drained by them"
  - area: "In-person vs. remote"
    generation_a_preference: "Office presence signals commitment and enables spontaneous collaboration"
    generation_b_preference: "Remote work is efficient; office days should be intentional"
    why_it_creates_friction: "Different assumptions about what physical presence means"

shared_values:
  - value: "Effective collaboration"
    how_boomers_express_it: "Being together enables better work"
    how_gen_z_expresses_it: "Right tool for right task enables better work"
  - value: "Respect for others' time"
    how_boomers_express_it: "Giving people face time and attention"
    how_gen_z_expresses_it: "Not wasting people's time in unnecessary meetings"

bridge_strategies:
  - strategy: "Purpose-driven meeting structure"
    description: "Every meeting has clear purpose that justifies synchronous time"
    for_boomers: "Accept that not everything needs a meeting; use async for updates"
    for_gen_z: "Accept that some things genuinely benefit from real-time discussion"
  - strategy: "Hybrid meeting cadence"
    description: "Regular in-person time for relationship building; async for routine updates"
    for_boomers: "Weekly in-person team time satisfies connection needs"
    for_gen_z: "Knowing which meetings are essential vs optional respects your time"
  - strategy: "Meeting-free collaboration zones"
    description: "Protected async time AND protected synchronous time"
    for_boomers: "Scheduled collaboration time ensures connection"
    for_gen_z: "Protected focus time enables deep work"

conversation_starters:
  - scenario: "Team norm discussion"
    phrase: "Let's figure out what meetings we actually need and which updates could be async. What's working and what's frustrating everyone?"

warning_signs:
  - "One group consistently feels their preferences are ignored"
  - "People disengage from meetings (cameras off, multitasking)"
  - "Side conversations replace official channels"
  - "Complaints about the other group increase"

success_indicators:
  - "Meeting time decreases while collaboration quality maintains"
  - "Both groups feel heard in how norms are set"
  - "People from both groups voluntarily participate in both sync and async"
  - "Cross-generational pairs form naturally"
```

## Guardrails

- Always frame as mutual adaptation
- Acknowledge when generation isn't the primary issue
- Respect power dynamics while advocating for all
- Include concrete success/failure metrics

## Escalation

Escalate when:

- Friction is actually about performance, not style
- Power dynamics prevent genuine mutual adaptation
- Conflict requires formal mediation
- HR or management intervention needed
