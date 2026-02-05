# Prompt: Adapt Message

Rewrite a message for a different generational audience while preserving intent.

## Purpose

Transform communication from one generational style to another, maintaining the core message while adjusting tone, formality, medium expectations, and phrasing to match the target audience's preferences.

## Inputs

- `message`: The original message to adapt
- `source_generation`: The communication style of the original message
- `target_generation`: The intended recipient's generational context
- `context`: Professional context (feedback, request, announcement, etc.)
- `relationship`: Power dynamic (peer, manager, report, client)
- `preserve_elements`: Any elements that must remain unchanged

## Prompt Template

```text
Adapt the following message for a {target_generation} audience.

Original message (written in {source_generation} style):
{message}

Context: {context}
Relationship: {relationship}

Guidelines:
1. Preserve the core intent and all factual content
2. Adjust formality level to match {target_generation} preferences
3. Modify medium-specific conventions (greetings, sign-offs, abbreviations)
4. Consider what {target_generation} values in professional communication
5. Note any elements that may require additional context

Required output:
- adapted_message: The rewritten message
- changes: List of specific changes made and why
- preserved: Elements kept from original
- alternatives: 1-2 other approaches if applicable
- caution: Any risks in this adaptation
```

## Output Format

```yaml
adapted_message: string
changes:
  - element: string
    original: string
    adapted: string
    reason: string
preserved:
  - element: string
    reason: string
alternatives:
  - option: string
    when_to_use: string
caution: string | null
```

## Examples

**Input:**
```yaml
message: "Hey! Can you shoot me the deck by EOD? Thx!"
source_generation: "gen-z"
target_generation: "boomer"
context: "document request"
relationship: "junior to senior"
```

**Output:**
```yaml
adapted_message: "Hi [Name], would you be able to send me the presentation by end of day today? Thank you for your help."
changes:
  - element: greeting
    original: "Hey!"
    adapted: "Hi [Name],"
    reason: "More professional greeting for senior colleague; adding name shows respect"
  - element: request phrasing
    original: "Can you shoot me"
    adapted: "would you be able to send me"
    reason: "Polite request form appropriate for senior colleague"
  - element: document reference
    original: "the deck"
    adapted: "the presentation"
    reason: "Standard business terminology; 'deck' may not be universal"
  - element: abbreviation
    original: "EOD"
    adapted: "end of day today"
    reason: "Spelled out for clarity; not all recipients use this abbreviation"
  - element: sign-off
    original: "Thx!"
    adapted: "Thank you for your help."
    reason: "Complete expression of gratitude"
preserved:
  - element: core request
    reason: "The ask (document by end of day) remains identical"
  - element: timeframe
    reason: "Deadline preserved exactly"
alternatives:
  - option: "Add specific use case: 'I need to review it before tomorrow's meeting'"
    when_to_use: "If you want to signal why the deadline matters"
caution: "If this is a routine request in an established relationship, this level of formality may feel oddly stiff. Gauge based on prior communication patterns."
```

## Constraints

- Never change factual content or deadlines
- Preserve professional boundaries appropriate to relationship
- Don't over-correct (avoid making casual relationships artificially formal)
- Flag when adaptation might change meaning
- Note if original message has problems beyond generational style

## Related Prompts

- [explain-style](explain-style.md): For context on why adaptations are needed
- [bridge-gap](bridge-gap.md): When ongoing communication strategy is needed
