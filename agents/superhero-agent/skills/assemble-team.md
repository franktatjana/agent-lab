# Skill: Assemble Team

Identify who you need on your side and what powers they bring.

## Description

Even solo heroes need backup. This skill helps identify the people who should be on your team for a specific challenge, what roles they'd play, and how to recruit them.

## When to Use

- Facing a challenge that's too big for one person
- Needing different skills than you have
- Building support before a difficult initiative
- Feeling isolated and wanting to identify allies

## Workflow

```
┌─────────────────┐
│ Define the      │
│ mission         │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Identify power  │
│ gaps            │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Map potential   │
│ allies          │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Assign Avengers │
│ roles           │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Plan the        │
│ recruitment     │
└─────────────────┘
```

## Team Roles (Avengers Framework)

| Role | Function | Who Fits |
|------|----------|----------|
| **Nick Fury** | Air cover, executive sponsorship | Senior leader who can clear obstacles |
| **War Machine** | Backup firepower | Peer who'll support you visibly |
| **Pepper Potts** | Translator, stakeholder whisperer | Someone who speaks the language of resisters |
| **Happy Hogan** | Logistics, execution support | Person who handles details you can't |
| **JARVIS** | Information, intelligence | Someone with data or context you lack |
| **Hawkeye** | Precision support | Specialist for a specific critical task |

## Inputs

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| mission | string | yes | What you're trying to accomplish |
| your_powers | string | yes | What you bring to the mission |
| power_gaps | string | no | What you know you're missing |
| potential_allies | list | no | People you're considering |

## Outputs

| Field | Type | Description |
|-------|------|-------------|
| team_composition | list | Roles needed with descriptions |
| recruitment_strategy | list | How to bring each person in |
| what_you_offer | list | Value exchange for each ally |
| warnings | list | Potential team dynamics to watch |

## Example

**Input:**
```yaml
mission: "Get executive buy-in for a controversial product change"
your_powers: "Data analysis, user research, direct communication"
power_gaps: "Political savvy, executive relationships"
potential_allies:
  - "Head of Design (supportive of the change)"
  - "VP of Sales (against the change)"
  - "My skip-level (neutral)"
```

**Output:**
```yaml
team_composition:
  - role: "Nick Fury (air cover)"
    need: "Executive sponsorship before you walk into the room"
    candidate: "Your skip-level, if you can get them bought in first"
    why: "A neutral senior voice supporting you changes the dynamic"

  - role: "War Machine (backup)"
    need: "Another voice in the room supporting the recommendation"
    candidate: "Head of Design"
    why: "Design + Product aligned is harder to dismiss"

  - role: "Pepper Potts (translator)"
    need: "Someone who can frame this in terms Sales cares about"
    candidate: "Need to identify; maybe someone in Sales who's user-focused?"
    why: "You can't out-argue Sales on their terrain; need an inside voice"

recruitment_strategy:
  - ally: "Skip-level"
    approach: "Brief them 1:1 before the meeting. Frame as 'I want your input.'"
    timing: "48 hours before"
    ask: "Can I count on your support if this comes up in the exec meeting?"

  - ally: "Head of Design"
    approach: "Align on the message. Make sure you're saying the same thing."
    timing: "This week"
    ask: "Can you back this up in the room?"

what_you_offer:
  - "Skip-level gets early visibility into a cross-functional issue"
  - "Design gets a partner who leads with user data"
  - "Sales (eventually) gets a product that users actually want"

warnings:
  - "Don't ambush anyone. Allies recruited in the moment aren't reliable."
  - "The VP of Sales isn't your villain; they have different metrics. Finding common ground is better than winning the argument."
```

## Quality Criteria

- Roles are specific to the mission, not generic
- Recruitment strategies are actionable
- Value exchange is clear (what do allies get?)
- Warnings acknowledge real team dynamics
- Doesn't assume everyone will say yes

## Guardrails

- Don't encourage manipulation; recruitment should be honest
- Acknowledge when someone truly has no allies (that's a bigger issue)
- Some missions really are solo; don't force team-building
