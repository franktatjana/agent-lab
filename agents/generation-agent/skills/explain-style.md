# Skill: Explain Style

Explain why a generation communicates the way it does, providing historical and cultural context.

## Description

Provides educational context about generational communication preferences. Goes beyond describing behaviors to explaining the historical, technological, and cultural factors that shaped them. Helps users develop empathy and understanding rather than just following rules.

## When to Use

- When someone is frustrated by a colleague's communication style
- When onboarding to a multigenerational team
- When preparing to work with a different age group
- When seeking to understand rather than just adapt

## Workflow

```
┌─────────────────┐
│ Receive query   │
│ and context     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Identify        │
│ generation(s)   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Load relevant   │
│ patterns        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Connect to      │
│ formative       │
│ context         │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Identify        │
│ underlying      │
│ values          │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Address common  │
│ misinterpret-   │
│ ations          │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Provide bridge  │
│ suggestions     │
└─────────────────┘
```

## Prompts Used

- [explain-style](../prompts/explain-style.md): Core explanation logic

## Context Loading

Load reference for the generation being explained:

```yaml
references_to_load:
  - generational-patterns.md#{generation}
```

## Inputs

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| generation | string | yes | boomer, gen-x, millennial, gen-z, gen-alpha |
| aspect | string | no | Specific behavior to explain |
| question | string | no | User's specific question |
| depth | string | no | brief, detailed, comprehensive (default: detailed) |

## Outputs

| Field | Type | Description |
|-------|------|-------------|
| generation | string | Full generation name and years |
| summary | string | One-sentence overview |
| communication_preferences | list | Key preferences with values |
| formative_context | list | Historical factors that shaped patterns |
| workplace_manifestations | list | How preferences show up at work |
| common_misinterpretations | list | What others get wrong |
| individual_variation | string | Caveat about generalizations |
| bridge_building_tips | list | Practical suggestions |

## Quality Criteria

- Explanations grounded in observable patterns
- Values-based reasoning, not stereotyping
- Individual variation acknowledged
- Bridge-building orientation
- Empathy-promoting framing

## Examples

### Brief Explanation

**Input:**
```yaml
generation: "gen-x"
depth: "brief"
```

**Output:**
```yaml
generation: "Generation X (1965-1980)"
summary: "Gen X values efficiency and autonomy, preferring direct communication that respects their time and independence."

communication_preferences:
  - preference: "Email as primary channel"
    underlying_value: "Documentation, async flexibility"
  - preference: "Direct and efficient"
    underlying_value: "Respect for time, get to the point"
  - preference: "Minimal supervision"
    underlying_value: "Trust and autonomy"

bridge_building_tips:
  - "Get to the point quickly"
  - "Don't over-communicate or micromanage"
  - "Respect work-life boundaries"
```

### Specific Aspect Deep Dive

**Input:**
```yaml
generation: "boomer"
aspect: "preference for phone calls over email"
depth: "comprehensive"
```

**Output:**
```yaml
generation: "Baby Boomers (1946-1964)"
summary: "Boomers often prefer phone calls because voice communication signals relationship investment and allows for nuance that written messages lack."

communication_preferences:
  - preference: "Phone calls for important matters"
    description: "Voice communication for anything significant or relationship-dependent"
    underlying_value: "Personal connection builds trust; voice conveys tone and intent"
  - preference: "Face-to-face when possible"
    description: "In-person meetings for decisions, difficult conversations, relationship building"
    underlying_value: "Physical presence demonstrates commitment and respect"
  - preference: "Email for documentation"
    description: "Written follow-up after verbal agreements"
    underlying_value: "Paper trail matters, but relationship comes first"

formative_context:
  - factor: "Pre-internet professional development"
    impact: "Learned professional communication before email existed; phone was the technology"
  - factor: "Relationship-based business culture"
    impact: "Success came through personal networks built via face-to-face and phone interaction"
  - factor: "Voice technology was the innovation"
    impact: "Long-distance calling becoming affordable was the communication revolution of their careers"
  - factor: "Written communication was formal and slow"
    impact: "Letters and memos were for formal matters; casual communication was verbal"

workplace_manifestations:
  - behavior: "Calls to 'touch base' rather than emailing"
    example: "Picking up the phone to ask a quick question rather than sending a message"
  - behavior: "Preference for verbal agreements"
    example: "Feeling that a handshake or verbal commitment is binding; written confirmation is secondary"
  - behavior: "Scheduling calls rather than accepting email threads"
    example: "'Let's jump on a call' in response to complex email chains"

common_misinterpretations:
  - what_others_see: "They won't just send an email like a normal person"
    what_it_actually_means: "They're investing relationship effort; calls feel more respectful to them"
  - what_others_see: "Phone calls are inefficient and interruptive"
    what_it_actually_means: "For Boomers, real-time conversation is often more efficient than asynchronous back-and-forth"
  - what_others_see: "They don't trust written communication"
    what_it_actually_means: "They see written as supplement to, not replacement for, personal communication"

individual_variation: "Many Boomers have fully adapted to digital-first communication, especially in tech-forward industries. Some actively prefer email. Individual preferences vary widely based on industry, role, and personal style. Ask rather than assume."

bridge_building_tips:
  - "Offer phone time: 'Would you prefer to discuss this on a quick call?'"
  - "Call to build relationship, email to document: use both channels strategically"
  - "Don't interpret call preference as inefficiency; they may resolve things faster verbally"
  - "When you do need to email, consider a follow-up call for important matters"
  - "Ask their preference: 'What's the best way to reach you?'"
```

## Guardrails

- Never present generalizations as universal truths
- Always include individual variation caveat
- Avoid negative framing of any generation
- Ground explanations in documented research
- Update as patterns evolve

## Escalation

Escalate when:

- User seems to be seeking ammunition against a generation
- Explanation is being used to justify discrimination
- Underlying issue is interpersonal, not generational
