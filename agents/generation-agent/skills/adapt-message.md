# Skill: Adapt Message

Rewrite a message for a different generational audience while preserving intent.

## Description

Takes a message written in one generational communication style and adapts it for a recipient with different preferences. The adaptation preserves the core meaning and intent while adjusting tone, formality, vocabulary, and structure to match what the target audience expects.

## When to Use

- Before sending important messages to colleagues from different generations
- When a message received poor reception and needs reworking
- When communicating the same information to multiple audiences
- When unsure how a message will land across generational lines

## Workflow

```
┌─────────────────┐
│ Receive message │
│ and context     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Analyze source  │
│ style patterns  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Identify target │
│ preferences     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Map friction    │
│ points          │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Adapt message   │
│ elements        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Generate        │
│ alternatives    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Provide output  │
│ with rationale  │
└─────────────────┘
```

## Prompts Used

- [adapt-message](../prompts/adapt-message.md): Core adaptation logic

## Context Loading

Load generational patterns reference for both source and target generations:

```yaml
references_to_load:
  - generational-patterns.md#{source_generation}
  - generational-patterns.md#{target_generation}
```

## Inputs

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| message | string | yes | The original message to adapt |
| source_generation | string | yes | boomer, gen-x, millennial, gen-z, gen-alpha |
| target_generation | string | yes | boomer, gen-x, millennial, gen-z, gen-alpha |
| context | string | yes | Professional context (request, feedback, announcement) |
| relationship | string | no | Power dynamic (peer, manager, report, client) |
| preserve_elements | list | no | Elements that must remain unchanged |

## Outputs

| Field | Type | Description |
|-------|------|-------------|
| adapted_message | string | The rewritten message |
| changes | list | Specific changes made with rationale |
| preserved | list | Elements kept from original with reasoning |
| alternatives | list | Other valid approaches with tradeoffs |
| caution | string | Any risks or considerations |

## Quality Criteria

- Core intent is preserved exactly
- Factual content and deadlines unchanged
- Adaptation appropriate for stated relationship
- Changes explained clearly
- Alternatives offer genuine choices
- Individual variation acknowledged

## Examples

### Casual to Formal

**Input:**
```yaml
message: "Yo can we push the meeting? Something came up"
source_generation: "gen-z"
target_generation: "boomer"
context: "meeting reschedule"
relationship: "report to manager"
```

**Output:**
```yaml
adapted_message: "Hi [Name], I apologize, but would it be possible to reschedule our meeting? An urgent matter has come up that requires my immediate attention. Please let me know what times work for you, and I'll make myself available."
changes:
  - element: "greeting"
    original: "Yo"
    adapted: "Hi [Name]"
    reason: "Professional greeting appropriate for manager"
  - element: "request form"
    original: "can we push"
    adapted: "would it be possible to reschedule"
    reason: "Polite request acknowledges you're asking for accommodation"
  - element: "explanation"
    original: "Something came up"
    adapted: "An urgent matter has come up that requires my immediate attention"
    reason: "More specific and professional explanation"
  - element: "close"
    original: "(none)"
    adapted: "Please let me know what times work for you, and I'll make myself available."
    reason: "Shows respect for their time and willingness to accommodate"
caution: "If you have a very informal relationship with this manager, this might feel overly formal. Match their usual communication style."
```

### Formal to Casual

**Input:**
```yaml
message: "Dear Team, I am writing to inform you that the quarterly report deadline has been extended to Friday. Please ensure all submissions are completed by 5:00 PM EST. Thank you for your continued diligence. Best regards, [Name]"
source_generation: "boomer"
target_generation: "millennial"
context: "team announcement"
relationship: "manager to team"
```

**Output:**
```yaml
adapted_message: "Hey team! Quick update: Q4 report deadline moved to Friday at 5pm EST. You've got a few extra days! Drop any questions in Slack. Thanks!"
changes:
  - element: "greeting"
    original: "Dear Team"
    adapted: "Hey team!"
    reason: "Matches casual team communication norms"
  - element: "framing"
    original: "I am writing to inform you"
    adapted: "Quick update:"
    reason: "Direct and concise, doesn't belabor the obvious"
  - element: "tone"
    original: "Please ensure all submissions are completed"
    adapted: "You've got a few extra days!"
    reason: "Frames positively as extra time rather than obligation"
  - element: "sign-off"
    original: "Thank you for your continued diligence. Best regards"
    adapted: "Thanks!"
    reason: "Brief and warm without being formal"
alternatives:
  - option: "Keep 'Thank you for your hard work' to acknowledge effort"
    when_to_use: "If the team has been under pressure"
caution: "Make sure this casual tone matches your established team culture. Some teams prefer more formal manager communication."
```

## Guardrails

- Never change deadlines, amounts, or factual content
- Preserve professional boundaries appropriate to relationship
- Flag if original message has issues beyond generational style
- Don't over-adapt: slight formality mismatch is usually fine

## Escalation

Escalate to human review when:

- Message involves sensitive topics (termination, legal, HR)
- Relationship dynamic is unclear
- Original message may have substantive problems
- Context suggests deeper communication issues
