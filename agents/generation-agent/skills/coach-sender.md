# Skill: Coach Sender

Help someone develop long-term cross-generational communication skills.

## Description

Provides ongoing coaching to help individuals expand their communication range. Rather than translating specific messages, builds capability to naturally adapt across generational lines. Uses coaching methodology: questions, frameworks, exercises, and reflection.

## When to Use

- When someone wants to improve their cross-generational communication generally
- After repeated friction with a particular age group
- When preparing for a role requiring multigenerational communication
- When developing leadership communication skills

## Workflow

```
┌─────────────────┐
│ Assess current  │
│ communication   │
│ patterns        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Identify        │
│ strengths and   │
│ growth areas    │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Design skill    │
│ development     │
│ plan            │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Provide         │
│ exercises and   │
│ mental models   │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Define progress │
│ indicators      │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Suggest         │
│ reflection      │
│ questions       │
└─────────────────┘
```

## Prompts Used

- [coach-sender](../prompts/coach-sender.md): Core coaching logic

## Context Loading

Load patterns for sender's generation and target generations:

```yaml
references_to_load:
  - generational-patterns.md#{sender_generation}
  - generational-patterns.md#{target_generation_1}
  - generational-patterns.md#{target_generation_2}
```

## Inputs

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| sender_generation | string | yes | User's generational context |
| target_generations | list | yes | Generations they communicate with |
| challenges | string | yes | Specific communication challenges |
| strengths | string | no | What they already do well |
| learning_style | string | no | examples, principles, practice |
| session_focus | string | no | What to work on this session |

## Outputs

| Field | Type | Description |
|-------|------|-------------|
| assessment | object | Current patterns, strengths, growth areas |
| skill_development | list | Skills to develop with levels |
| exercises | list | Practical activities to try |
| mental_models | list | Frameworks for thinking about adaptation |
| progress_indicators | list | How to measure improvement |
| reflection_questions | list | Questions for self-discovery |
| next_session_focus | string | What to work on next |

## Quality Criteria

- Coach, don't lecture
- Build on existing strengths
- Provide concrete exercises
- Respect authentic style while expanding range
- Set realistic expectations

## Examples

### Gen Z Learning to Communicate with Boomers

**Input:**
```yaml
sender_generation: "gen-z"
target_generations: ["boomer"]
challenges: "Getting dismissed as 'too young' in meetings with senior stakeholders"
learning_style: "examples"
```

**Output:**
```yaml
assessment:
  current_patterns:
    - "May come across as casual in high-stakes settings"
    - "Comfort with digital may not translate to in-person presence"
    - "Expertise may not be visibly signaled in expected ways"
  strengths_to_leverage:
    - "Digital fluency is genuinely valuable"
    - "Fresh perspective brings real insight"
    - "Directness can be refreshing when framed well"
  growth_areas:
    - "Professional presence in formal settings"
    - "Credibility signaling for older audiences"
    - "Code-switching between casual and formal"

skill_development:
  - skill: "Formal meeting presence"
    why_it_matters: "First impressions in meetings shape how your ideas are received"
    current_level: "Comfortable in casual settings; formal settings feel awkward"
    target_level: "Natural confidence in formal settings without losing authenticity"
  - skill: "Credibility front-loading"
    why_it_matters: "Older audiences may need signals that you have relevant experience"
    current_level: "Lets work speak for itself"
    target_level: "Can briefly establish credibility when context requires"

exercises:
  - exercise: "The Pre-Meeting Prep"
    purpose: "Build confidence through preparation"
    how_to_do_it: |
      Before important meetings with senior stakeholders:
      1. Prepare 2-3 key points you want to make
      2. Have supporting data or examples ready
      3. Anticipate questions and prepare responses
      4. Practice stating your main point in one clear sentence
    success_looks_like: "You enter meetings feeling prepared rather than hoping it goes well"
  - exercise: "The Credibility Statement"
    purpose: "Learn to briefly establish relevance without bragging"
    how_to_do_it: |
      Practice introducing your perspective with brief context:
      - "Based on the user research I conducted..."
      - "In my work on the X project, we found..."
      - "I've been focused on this area and noticed..."
      Notice how this differs from just stating an opinion.
    success_looks_like: "You can naturally ground your contributions in experience"
  - exercise: "Observe and Adapt"
    purpose: "Learn from colleagues who command respect"
    how_to_do_it: |
      In your next few meetings, observe someone who gets listened to by senior people:
      - How do they speak? (pace, volume, certainty)
      - How do they structure their points?
      - How do they handle disagreement?
      Try incorporating one element you notice.
    success_looks_like: "You have specific behaviors to model, not vague aspirations"

mental_models:
  - model: "The Context Layer"
    description: "Add one sentence of context before stating your point. This isn't insecurity; it's helping others understand where you're coming from."
    when_to_apply: "When making recommendations or sharing opinions in formal settings"
  - model: "Formal is Respect"
    description: "In formal settings, slightly elevated language isn't fake; it's a way of honoring the importance of the conversation."
    when_to_apply: "When you feel tempted to stay casual in high-stakes settings"
  - model: "Earned Casualness"
    description: "Start more formal than feels natural. As you build credibility, you earn the right to be more casual."
    when_to_apply: "With new senior stakeholders"

progress_indicators:
  - indicator: "Meeting participation"
    novice: "Hesitant to speak; ideas get overlooked"
    developing: "Contributes but sometimes dismissed"
    proficient: "Ideas engaged with regardless of source"
  - indicator: "Credibility establishment"
    novice: "Opinions come across as uninformed"
    developing: "Can ground in experience when prompted"
    proficient: "Naturally establishes relevance"

reflection_questions:
  - "What do you think senior stakeholders notice first about you?"
  - "Who in your organization successfully bridges the age gap? What do they do?"
  - "What would 'being taken seriously' look like in your context?"
  - "What's the difference between being formal and being inauthentic?"

next_session_focus: "Review how recent meetings went; identify specific moments where presence made a difference"
```

### Boomer Learning Digital Communication

**Input:**
```yaml
sender_generation: "boomer"
target_generations: ["millennial", "gen-z"]
challenges: "Written messages come across as cold or demanding; younger team members seem uncomfortable in conversations"
learning_style: "principles"
```

**Output:**
```yaml
assessment:
  current_patterns:
    - "Direct, efficient written communication"
    - "Preference for voice/in-person over text"
    - "Formal structure that may read as cold in digital"
  strengths_to_leverage:
    - "Clarity and directness are valuable"
    - "Experience navigating professional relationships"
    - "Genuine care for team members"
  growth_areas:
    - "Warmth signals in digital communication"
    - "Understanding how tone reads in text"
    - "Meeting younger colleagues where they are"

skill_development:
  - skill: "Digital tone calibration"
    why_it_matters: "Without voice and body language, text needs extra warmth signals"
    current_level: "Efficient text that can read as cold"
    target_level: "Text that conveys both clarity and warmth"

exercises:
  - exercise: "The Warmth Layer"
    purpose: "Add connection to efficient communication"
    how_to_do_it: |
      Before sending, add one warmth element:
      - Brief personal touch: "Hope your week is going well"
      - Recognition: "Great work on the X project"
      - Softener: "When you get a chance..." instead of "Please send..."
      Notice how this changes how the message reads.
    success_looks_like: "Efficiency plus one warmth element becomes automatic"
  - exercise: "Read It As If"
    purpose: "Catch tone issues before sending"
    how_to_do_it: |
      Before sending important messages, read them imagining:
      - You're receiving this from someone you don't know well
      - You're in a bad mood when you read it
      - You can't see the sender's face or hear their tone
      Adjust anything that might read harshly.
    success_looks_like: "You naturally anticipate how text will be received"

mental_models:
  - model: "Text Minus 30%"
    description: "Text communication conveys about 70% of the warmth you intend. Add extra warmth to compensate."
    when_to_apply: "All written communication, especially with newer relationships"
  - model: "Channel Match"
    description: "Use the channel your audience prefers. If they're on Slack, meet them on Slack."
    when_to_apply: "When choosing how to communicate"

progress_indicators:
  - indicator: "Written communication"
    novice: "Efficient but cold"
    developing: "Sometimes warm, sometimes formal"
    proficient: "Naturally warm and clear"

reflection_questions:
  - "How do you want your team to feel when they see a message from you?"
  - "What warmth signals do you rely on in voice/in-person that you lose in text?"
  - "What would it mean to 'meet them where they are' with communication?"

next_session_focus: "Review recent written communications; analyze which landed well and which felt cold"
```

## Guardrails

- Respect coachee's authentic style
- Build capability, not dependency
- Use questions more than statements
- Celebrate progress, don't just identify gaps

## Escalation

Escalate when:

- Communication issue is actually performance issue
- Coachee needs emotional support, not skill building
- Underlying conflict requires mediation
- Professional development beyond communication scope
