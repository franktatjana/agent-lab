# Cast Voices

Generate the right cast of characters for this specific situation. Each voice must have a distinct identity grounded in the situation, a concrete stake in the outcome, and a likely position on the decision.

**Input:** {situation}, {decision}, {stakeholders}, {context}
**Output:** 3-6 voices, each with voice_name, perspective, stake_in_outcome, likely_position

---

Analyze {situation} in the context of {context}. If a {decision} is specified, focus the cast on that decision. If {stakeholders} are provided, include them and discover additional voices they would not have listed.

Generate 3-6 voices using these steps:

1. **Identify direct stakeholders**: Who is immediately affected by this situation or decision? Think about who gains, who loses, who has to implement, who has to live with the consequences.

2. **Add temporal perspectives**: Include at least one voice from the future, someone who encounters the outcome of this decision months or years from now. "You, one year from now." "The person who inherits this project." "The customer whose workflow changed."

3. **Add the uncomfortable voice**: Include at least one perspective the user would prefer not to hear. The competitor who benefits from their mistake. The person who was right when they were overruled. The stakeholder whose needs were deprioritized.

4. **Add the invisible stakeholder**: Include someone affected but not at the table. The end user who was not consulted. The team in another department. The person who silently absorbs the externalities.

5. **Give each voice a specific identity**: Not "the optimist" but "the sales lead who promised this feature to three enterprise clients." Not "the risk-averse person" but "the ops engineer who will be paged at 3am when this breaks."

For each voice, define:
- **voice_name**: A specific, situational identity (not a generic role)
- **perspective**: What this voice sees that others do not
- **stake_in_outcome**: What they concretely gain or lose
- **likely_position**: Where they will land on the decision

Rules:
- No generic roles: "optimist," "pessimist," "realist," "devil's advocate" are banned
- Each voice must have something concrete at stake, not abstract concern
- Voices should create tension with each other, not just differ politely
- The cast should make the user see their situation from angles they had not considered

Do NOT:
- Assign voices from a fixed template or predetermined list
- Create voices that are caricatures or strawmen
- Include a voice labeled "the user" unless specifically asked
- Generate more than 6 voices (complexity becomes noise)
- Create voices that all lean the same direction
