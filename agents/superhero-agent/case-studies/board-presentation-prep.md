# Board Presentation Prep: Captain America Mode

*This case study is fictional. Names, characters, companies, and scenarios are hypothetical. Any resemblance to actual persons or organizations is purely coincidental.*

## Situation

Raj was a senior product manager at a fintech company. In three days, he had to present a recommendation to kill a flagship feature that generated $2M in revenue but had become a support nightmare and user satisfaction black hole. The feature had powerful internal advocates: the VP of Sales had built relationships around it, and the original product lead (now a director) considered it their legacy.

Raj had the data. User satisfaction scores were abysmal. Support tickets consumed 40% of the team's capacity. The feature's revenue was real but declining, while it blocked development of higher-potential capabilities. He knew what needed to happen. He just couldn't figure out how to walk into that room and say it.

His manager suggested he try the superhero-agent. "You need to find your inner Captain America for this one."

## How the Agent Was Triggered

Raj accessed the superhero-agent through his company's AI assistant platform, which provides coaching tools for high-stakes moments.

**Trigger method:** Web portal, "Presentation Coaching" workflow

**Data sources available to the agent:**

- General executive presentation frameworks
- Hero archetype reference materials
- Villain archetype patterns
- Team assembly frameworks

**Data sources provided by Raj:**

- The challenge: controversial recommendation to executives
- His strengths: data analysis, user research, direct communication
- What felt hard: powerful stakeholders would push back
- His preferred hero: Captain America (suggested by manager)

**What the agent could NOT access:**

- The actual presentation content
- Internal company politics details
- Specific stakeholder personalities
- Historical context of the feature

## Agent Configuration

Raj chose the **captain-america personality** because the situation required standing up for what was right (users) against powerful internal forces. He requested the **frame-mission** skill first, then **suit-up** for the morning of the presentation.

```yaml
challenge: "Present recommendation to kill flagship feature that powerful stakeholders love"
context: |
  Fintech company, board presentation
  Feature generates $2M but declining
  40% of support capacity consumed
  VP Sales and original product director are advocates
  User satisfaction scores are terrible
your_strengths: "Data analysis, user research, direct communication"
what_feels_hard: "Powerful stakeholders will push back hard"
personality: "captain-america"
output_format: markdown
```

## Interaction

**Initial framing:**

The agent didn't minimize the challenge. "You're not just presenting data. You're asking people to let go of something they built and believe in. That's not a slide deck problem. That's a values problem."

It reframed the presentation as "Operation Truth to Power" and identified the real stakes: "You're standing up for users who can't be in that room. They're experiencing the pain this feature causes every day. Someone has to speak for them."

**Identifying powers:**

The agent helped Raj see his strengths differently:

```yaml
your_powers:
  primary: "Data-backed conviction. You don't just think you're right; you can prove it."
  secondary:
    - "Direct communication: you won't dance around the point"
    - "User empathy: you can make executives feel what users feel"
  watch_out_for: "Your directness might dismiss Sales concerns. The shield deflects; it doesn't win hearts."
```

**Mapping the villain:**

Raj initially framed the VP of Sales as the obstacle. The agent reframed:

"The VP isn't your villain. They're playing a different game with different metrics. Your real villain is **Loki**: the political dynamic that makes truth-telling feel dangerous. Loki wins by making you play his game: charm, misdirection, reframing. You can't out-Loki Loki."

The strategy: "Shift the battlefield. Don't argue about revenue projections. Make them argue against users. That's terrain where Captain America wins."

**Assembling the team:**

The agent asked who would be in the room. Raj realized he'd been planning to walk in alone.

```yaml
your_team:
  - role: "Nick Fury (air cover)"
    need: "Someone senior bought in before you enter the room"
    action: "Brief your skip-level 48 hours ahead. Ask: 'Can I count on your support?'"

  - role: "War Machine (backup firepower)"
    need: "Another voice supporting the recommendation"
    action: "Align with Head of Support. They live with this pain daily."

  - role: "Pepper Potts (translator)"
    need: "Someone who speaks Sales language"
    action: "Find someone in Sales who's frustrated with support burden. They exist."
```

**Suit-up ritual:**

The morning of the presentation, Raj returned for the **suit-up** skill:

```yaml
power_check: |
  You built this case from data they've never seen assembled this way.
  You've talked to users they've never met.
  Your power right now is truth. Use it.

fear_reframe: |
  They might push back hard. That's not failure.
  Captain America faced the entire SHIELD leadership in Winter Soldier.
  He was right. They were compromised. He stood anyway.
  Pushback means they're taking you seriously.

breathing_cue: |
  Three breaths.
  First: Release the tension in your shoulders.
  Second: Feel your feet on the ground.
  Third: Remember why you're doing this. Users.

mantra: |
  "I can do this all day."
```

## Outcome

Raj briefed his skip-level two days before. She had concerns but appreciated being looped in early. She didn't commit to supporting him publicly but said she wouldn't oppose if the data was solid.

He aligned with the Head of Support, who was eager to have someone finally say what her team had been feeling. She prepared backup data on ticket volume and resolution time.

He found an ally in Sales: a senior account manager whose biggest client had threatened to churn over the feature's problems. She agreed to share the client's feedback if needed.

The presentation was still difficult. The VP of Sales pushed back on revenue impact. The original product director got emotional about their legacy. But Raj didn't engage on their terrain. Every objection, he brought back to users: "I understand the revenue concern. Here's what users are experiencing. How do we weigh that?"

The board didn't kill the feature that day. But they commissioned a formal sunset analysis with Raj leading it. Three months later, the feature was deprecated with a migration path. The VP of Sales was frustrated but couldn't argue with the process. The product director moved to a new initiative that excited them more.

Raj's skip-level told him later: "That was the most prepared I've ever seen someone walk into a hard conversation."

## Lessons

**On the hero archetype:** Captain America was the right frame. This wasn't an Iron Man situation (build something clever) or a Black Widow situation (navigate politics silently). It required standing up publicly for what was right. The archetype gave Raj permission to see conviction as a strength rather than a liability.

**On villain mapping:** Reframing the VP as "not the villain" was crucial. It shifted Raj from adversarial thinking ("how do I defeat them") to strategic thinking ("how do I change the game"). Loki as the real villain (political dynamics) was more accurate and more actionable.

**On team assembly:** Raj almost walked in alone. The Avengers framework made him realize that even Captain America had the team behind him. Briefing allies beforehand changed the room dynamics entirely.

**On the suit-up ritual:** Raj said the breathing exercise and mantra genuinely helped. "I kept saying 'I can do this all day' in my head when the pushback got intense. It sounds silly, but it worked."

**On what the agent couldn't do:** The agent couldn't make the presentation succeed. It couldn't guarantee the outcome. What it could do was help Raj walk in feeling like a hero on a mission rather than a victim walking into an ambush. The reframe didn't change the facts; it changed how Raj experienced them.
