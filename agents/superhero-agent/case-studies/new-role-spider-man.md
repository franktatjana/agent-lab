# New Role Anxiety: Spider-Man Mode

*This case study is fictional. Names, characters, companies, and scenarios are hypothetical. Any resemblance to actual persons or organizations is purely coincidental.*

## Situation

Amara had just been promoted to Engineering Manager. Three weeks in, she was drowning. Her former peers now reported to her, which was awkward. She had inherited two underperformers her predecessor had avoided addressing. Her skip-level expected her to "hit the ground running" but gave minimal guidance. And every day, she felt like a fraud: yesterday she was debugging code, today she was supposed to have opinions about headcount planning.

She wasn't sleeping well. Sunday evenings had become dread-filled. She kept thinking: "They made a mistake promoting me. Everyone's going to figure it out."

Her mentor suggested the superhero-agent. "You sound like Peter Parker in his first week as Spider-Man. Maybe that's not a bad thing."

## How the Agent Was Triggered

Amara accessed the superhero-agent through a coaching app her company provided for new managers.

**Trigger method:** Mobile app, "New Role Transition" workflow

**Data sources available to the agent:**

- Hero archetype reference materials
- New role transition frameworks
- Villain archetypes (imposter syndrome)
- Superpower discovery prompts

**Data sources provided by Amara:**

- Her situation: three weeks into first management role
- What felt hard: imposter syndrome, peer-to-manager transition, inherited problems
- Her background: strong individual contributor, well-liked by team

**What the agent could NOT access:**

- Specific team dynamics or personnel issues
- Company performance review frameworks
- Her skip-level's actual expectations
- Historical context about the underperformers

## Agent Configuration

The agent suggested **spider-man personality** before Amara even asked. "You're new to powers you didn't ask for, balancing worlds that feel incompatible, and wondering if you're worthy. That's Peter Parker's entire arc."

```yaml
challenge: "Three weeks into first management role, feeling like a fraud"
context: |
  Promoted from IC to manager
  Former peers now report to her
  Inherited underperformance issues
  Skip-level expects fast ramp
  Imposter syndrome is loud
your_strengths: "Technical credibility, relationships with team, problem-solving"
what_feels_hard: "Everything feels unfamiliar, everyone expects me to know what I'm doing"
personality: "spider-man"
output_format: markdown
```

## Interaction

**Normalizing the experience:**

The agent didn't start with solutions. It started with validation:

"Peter Parker spent his first weeks as Spider-Man crashing into buildings, miscalculating swings, and wondering why anyone thought he could do this. That's not failure. That's learning. The web-shooters work; you just haven't calibrated them yet."

**Identifying powers:**

The agent ran the **identify-power** skill:

```yaml
your_powers:
  primary: "Technical credibility. You've done the work your team does. They can't dismiss you as someone who doesn't understand."
  secondary:
    - "Relationship capital: your former peers already trust you"
    - "Fresh eyes: you see problems the last manager stopped seeing"
    - "Learning velocity: you learned IC skills fast; you'll learn these too"

kryptonite:
  name: "The comparison trap"
  description: "Comparing your Week 3 to someone else's Year 3"
  management: "Your only benchmark is Week 2 you. Are you slightly better than then?"
```

**Mapping the villain:**

Amara's primary obstacle wasn't the underperformers or the skip-level. The agent identified **Mysterio** as her villain:

"Mysterio creates illusions that feel completely real. Your imposter syndrome is Mysterio. It's showing you a version of reality where everyone knows you're failing, where your team is judging you, where your skip-level regrets the promotion. None of that is real. It's projection."

Strategy: "Mysterio is defeated by testing reality. What actual evidence do you have that you're failing? Not feelings. Evidence."

Amara couldn't name any. Her team hadn't complained. Her skip-level hadn't expressed concern. The "everyone knows I'm failing" narrative existed only in her head.

**Reframing the challenges:**

The agent reframed each of her concerns through the Spider-Man lens:

```yaml
reframes:
  - concern: "My former peers report to me now"
    spider_man_lens: "Peter's friends don't know he's Spider-Man. The identity shift is awkward. But he's still Peter to them. You're still Amara. The title changed; you didn't."
    action: "Have 1:1s focused on *them*, not on the new dynamic. Ask what they need."

  - concern: "I inherited underperformers"
    spider_man_lens: "Spider-Man didn't create the villains; he inherited them from a city that existed before him. Not your mess, but your responsibility now."
    action: "Don't solve this in week 3. Observe. Document. You have time to understand before acting."

  - concern: "Skip-level expects me to hit the ground running"
    spider_man_lens: "Nick Fury expected a lot from Peter immediately too. But Fury also gave him room to learn. Have you asked your skip-level what 'success at 90 days' looks like?"
    action: "Clarifying expectations isn't weakness. It's professionalism."
```

**Suit-up for the week:**

Rather than preparing for a single event, the agent provided a weekly reset ritual:

```yaml
weekly_mantra: |
  "With great power comes great responsibility."
  But responsibility doesn't mean perfection.
  It means showing up, learning, and trying again tomorrow.

daily_check: |
  Morning: "What's one thing I can learn today?"
  Evening: "What's one thing I did slightly better than yesterday?"

permission_slip: |
  You are allowed to:
  - Not know things
  - Ask for help
  - Make mistakes that don't involve people's livelihoods
  - Feel uncomfortable while doing hard things
  - Get better slowly instead of overnight
```

## Outcome

Amara didn't transform overnight. But something shifted.

She stopped comparing herself to her predecessor (who had two years in the role) and started comparing herself to the previous week. Week 4 was slightly less chaotic than Week 3. Week 5, she had her first successful difficult conversation with an underperformer.

She asked her skip-level for explicit 90-day expectations. He seemed surprised no one had given her that before. They created a simple rubric together: team retention, one performance conversation completed, basic operating rhythm established. All achievable.

The imposter syndrome didn't disappear. Mysterio is persistent. But Amara learned to recognize when she was watching illusions versus reality. When the "everyone knows I'm failing" narrative started, she'd pause and ask: "What's the evidence?" Usually, there wasn't any.

Three months later, she still had the Spider-Man mantra on a sticky note on her monitor: "With great power comes great responsibility. Responsibility, not perfection."

## Lessons

**On archetype matching:** Spider-Man was the right frame because Amara's core challenge was identity transition, not a specific tactical problem. She needed to feel normal about the awkwardness, not solutions for how to eliminate it.

**On Mysterio as villain:** Imposter syndrome is particularly well-suited to the Mysterio archetype because it makes the metaphor actionable. "Is this real or illusion?" is a concrete question you can ask when the anxiety spikes.

**On what the agent couldn't do:** The agent couldn't address the underperformers directly, fix the relationship with the skip-level, or make the awkwardness with former peers disappear. What it could do was reframe Amara's relationship with her own discomfort, turning it from evidence of failure into evidence of growth.

**On the suit-up ritual for ongoing challenges:** Unlike a single presentation, new role anxiety is persistent. The weekly reset ritual gave Amara something to return to rather than a one-time prep session.

**On triggering via mobile:** Amara used the agent on Sunday evenings when the dread was worst. Having it accessible on her phone meant she could use it in the moments when she needed it, not just during work hours at her desk.
