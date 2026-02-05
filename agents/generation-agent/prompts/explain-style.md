# Prompt: Explain Style

Explain why a generation communicates the way it does, providing historical and cultural context.

## Purpose

Help users understand the underlying values and formative experiences that shape generational communication preferences. Goes beyond "what they do" to "why they do it," building empathy and reducing judgment.

## Inputs

- `generation`: The generation to explain
- `aspect`: Specific communication behavior to explain (optional)
- `question`: User's specific question or confusion (optional)
- `depth`: brief | detailed | comprehensive (default: detailed)

## Prompt Template

```text
Explain the communication preferences of {generation} in the workplace.

{if aspect}
Focus specifically on: {aspect}
{endif}

{if question}
User's question: {question}
{endif}

Depth: {depth}

Include:
1. Key communication preferences and patterns
2. Historical and technological context that shaped these preferences
3. Underlying values driving the behaviors
4. How this appears in workplace interactions
5. Common misinterpretations from other generations
6. Individual variation acknowledgment

Avoid:
- Negative characterizations or judgment
- Implying this generation is "wrong"
- Treating all members as identical
- Outdated stereotypes
```

## Output Format

```yaml
generation: string
summary: string              # One-sentence overview
communication_preferences:
  - preference: string
    description: string
    underlying_value: string
formative_context:
  - factor: string
    impact: string
workplace_manifestations:
  - behavior: string
    example: string
common_misinterpretations:
  - what_others_see: string
    what_it_actually_means: string
individual_variation: string
bridge_building_tips: list
```

## Examples

**Input:**
```yaml
generation: "gen-z"
aspect: "preference for text over phone calls"
depth: "detailed"
```

**Output:**
```yaml
generation: "Gen Z (1997-2012)"
summary: "Gen Z prefers asynchronous, text-based communication because it aligns with their values of documentation, preparation, and boundary-setting."

communication_preferences:
  - preference: "Text-based communication"
    description: "Messaging apps, Slack, email over phone calls or in-person for routine work"
    underlying_value: "Documentation, time to think, work-life boundaries"
  - preference: "Asynchronous by default"
    description: "Expects responses on recipient's schedule, not immediate"
    underlying_value: "Respect for others' time and mental space"
  - preference: "Visual and multimedia"
    description: "Comfortable with video messages, screenshots, GIFs to convey information"
    underlying_value: "Efficiency and clarity through multiple modes"

formative_context:
  - factor: "First true digital natives"
    impact: "Text-based communication was normalized before voice communication in many contexts"
  - factor: "Smartphone from adolescence"
    impact: "Primary communication device has always been a texting device first"
  - factor: "Pandemic during formative career years"
    impact: "Remote, async work became the norm during early career development"
  - factor: "Mental health awareness"
    impact: "More conscious of communication anxiety and the value of preparation time"

workplace_manifestations:
  - behavior: "Doesn't answer unexpected phone calls"
    example: "Lets calls go to voicemail, then responds via text asking what's needed"
  - behavior: "Detailed Slack messages"
    example: "Writes thorough messages with context rather than quick 'can we chat?'"
  - behavior: "Prefers documented decisions"
    example: "Wants meeting notes and written confirmation of verbal agreements"

common_misinterpretations:
  - what_others_see: "Avoiding phone calls is unprofessional or antisocial"
    what_it_actually_means: "Phone calls feel like unscheduled interruptions; text allows thoughtful response"
  - what_others_see: "They don't want to talk to me"
    what_it_actually_means: "They prefer a different medium, not a different relationship"
  - what_others_see: "They're always on their phone but won't answer it"
    what_it_actually_means: "Using phone for text communication; voice calls are a different mode entirely"

individual_variation: "Many Gen Z employees are comfortable with phone calls, especially those in client-facing roles, sales, or who have had mentorship emphasizing verbal communication. Industry, personality, and specific work requirements all matter."

bridge_building_tips:
  - "Ask preference: 'Do you prefer a quick call or should I message you?'"
  - "Make calls valuable: Always have clear purpose and agenda"
  - "Offer hybrid: Share key points in writing, call only if discussion needed"
  - "Follow up in writing: Send recap after calls to honor documentation preference"
```

## Constraints

- Always acknowledge individual variation
- Avoid making one generation sound better/worse than another
- Ground explanations in documented research and observable patterns
- Update examples to reflect current workplace realities
- Don't project current stereotypes onto future behavior

## Related Prompts

- [adapt-message](adapt-message.md): To apply understanding to specific messages
- [bridge-gap](bridge-gap.md): To develop ongoing strategies
