# Prompt: Coach Sender

Help someone develop long-term cross-generational communication skills.

## Purpose

Guide ongoing development of communication flexibility, moving beyond single adaptations to building lasting capability. The goal is to help someone communicate effectively across generations without needing translation assistance.

## Inputs

- `sender_generation`: The user's generational context
- `target_generations`: Generations they frequently communicate with
- `challenges`: Specific communication challenges they face
- `strengths`: What they already do well (optional)
- `learning_style`: How they prefer to learn (examples, principles, practice)
- `session_focus`: What to work on this session (optional)

## Prompt Template

```text
Coach this {sender_generation} professional on communicating effectively with {target_generations}.

Challenges they've identified: {challenges}

{if strengths}
Current strengths: {strengths}
{endif}

Learning style: {learning_style}
{if session_focus}
This session's focus: {session_focus}
{endif}

Provide:
1. Assessment of current communication patterns
2. Specific skill development areas
3. Practical exercises or experiments to try
4. Mental models to guide adaptation
5. Progress indicators to track improvement
6. Encouragement and affirmation of growth mindset

Approach as coach, not lecturer: ask questions, provide frameworks, let them discover insights.
```

## Output Format

```yaml
assessment:
  current_patterns: list
  strengths_to_leverage: list
  growth_areas: list
skill_development:
  - skill: string
    why_it_matters: string
    current_level: string
    target_level: string
exercises:
  - exercise: string
    purpose: string
    how_to_do_it: string
    success_looks_like: string
mental_models:
  - model: string
    description: string
    when_to_apply: string
progress_indicators:
  - indicator: string
    novice: string
    developing: string
    proficient: string
reflection_questions: list
next_session_focus: string
```

## Examples

**Input:**
```yaml
sender_generation: "millennial"
target_generations: ["boomer", "gen-x"]
challenges: "Feedback from senior colleagues that I'm 'too casual' in emails; unsure what formal enough looks like"
learning_style: "examples"
```

**Output:**
```yaml
assessment:
  current_patterns:
    - "Uses casual tone consistently regardless of audience"
    - "May omit greetings/sign-offs that signal respect"
    - "Assumes familiarity before it's established"
  strengths_to_leverage:
    - "Authenticity and directness are valued, just need calibration"
    - "Comfort with digital communication is an asset"
    - "Awareness that something needs to change shows growth mindset"
  growth_areas:
    - "Audience calibration: matching formality to recipient"
    - "Opening/closing rituals: signaling respect through structure"
    - "Relationship-aware adaptation: formal → casual over time"

skill_development:
  - skill: "Formality calibration"
    why_it_matters: "Different audiences read the same words differently; calibration shows respect"
    current_level: "Single style applied universally"
    target_level: "Natural adjustment based on recipient and relationship"
  - skill: "Professional email structure"
    why_it_matters: "Structure signals respect and professionalism to those who value it"
    current_level: "Content-focused, minimal framing"
    target_level: "Appropriate greeting, clear body, respectful close"

exercises:
  - exercise: "The Formality Dial"
    purpose: "Practice writing the same message at different formality levels"
    how_to_do_it: |
      Take a message you need to send. Write it three ways:
      1. How you'd naturally write it (casual)
      2. One notch more formal (professional casual)
      3. Full professional formal
      Then select the version that matches your recipient.
    success_looks_like: "You can easily produce all three versions and choose appropriately"
  - exercise: "Email Archaeology"
    purpose: "Learn from how respected senior colleagues write"
    how_to_do_it: |
      Find 5 emails from senior colleagues you respect. Analyze:
      - How do they open?
      - How do they close?
      - What's their tone?
      - What structure do they use?
      Create a template inspired by patterns you notice.
    success_looks_like: "You have a mental model of 'professional email' based on real examples"
  - exercise: "The Relationship Ladder"
    purpose: "Track how communication evolves as relationships deepen"
    how_to_do_it: |
      With a new senior colleague, start more formal than feels natural.
      Note when they signal it's okay to be more casual:
      - They use casual language with you
      - They explicitly say "call me Bob" or similar
      - They match your casual tone positively
      Adjust one step at a time.
    success_looks_like: "You consciously track and respond to relationship signals"

mental_models:
  - model: "The Wedding Invitation Test"
    description: "Would this language be appropriate on a wedding invitation? If yes, it's probably formal enough for senior professional communication."
    when_to_apply: "When unsure if an email is formal enough"
  - model: "Match + One"
    description: "Match your recipient's formality level, or go one notch higher when in doubt. Never go lower until they do first."
    when_to_apply: "When calibrating tone for a response"
  - model: "First vs. Fiftieth Email"
    description: "Your first email to someone should be noticeably more formal than your fiftieth. The relationship earns casualness."
    when_to_apply: "When establishing new professional relationships"

progress_indicators:
  - indicator: "Formality range"
    novice: "One default style for everyone"
    developing: "Can write formally when reminded"
    proficient: "Naturally calibrates without thinking"
  - indicator: "Opening/closing"
    novice: "Often omits or uses casual forms"
    developing: "Includes them but feels mechanical"
    proficient: "Appropriate greetings feel natural"
  - indicator: "Feedback received"
    novice: "Getting 'too casual' feedback"
    developing: "No negative feedback"
    proficient: "Positive feedback on communication"

reflection_questions:
  - "When you read your own emails, what would a Boomer executive think on first impression?"
  - "What's the worst case if you're slightly too formal? What's the worst case if you're too casual?"
  - "Who in your organization models the communication style you want to develop?"
  - "What specific phrases or structures feel 'stuffy' to you? Why might they matter to others?"

next_session_focus: "Review emails you've written using new frameworks; analyze what's working and what still feels unnatural"
```

## Constraints

- Coach, don't lecture: ask questions to promote self-discovery
- Build on strengths rather than just fixing weaknesses
- Provide concrete exercises, not just advice
- Respect the coachee's authentic style while expanding range
- Set realistic expectations for behavior change

## Related Prompts

- [explain-style](explain-style.md): To help coachee understand target generations
- [adapt-message](adapt-message.md): For specific message practice
