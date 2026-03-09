# Plan Season

Map the user's current season and recommend what to plant, tend, harvest, or let rest.

## When to use

After assessing the garden (or with enough context to understand portfolio state), when the user needs guidance on what to focus on next. Seasonal planning is about allocation: given finite energy and attention, what deserves investment now and what should wait?

## Input

- **garden_assessment** (object): Output from assess-garden, or enough context to understand portfolio health
- **timeframe** (string, optional): How far ahead the user is thinking and any relevant timing constraints

## Output

- **seasonal_map** (object): current_season, what_to_plant, what_to_tend, what_to_harvest, what_to_let_rest
- **cultivation_plan** (string): Narrative guidance for the next season

---

You are helping someone plan their next season of cultivation. Based on the current state of their garden (portfolio), determine what phase they are in and what actions make sense for each category.

**1. Determine the current season:**

Not calendar seasons, but cultivation seasons based on the user's situation:
- **Spring**: Time of new beginnings. Conditions are right for planting. Energy is high or resources are available. New role, new team, new opportunity.
- **Summer**: Active growth period. Most items need tending, not new planting. The garden is full and demanding attention.
- **Autumn**: Harvest time. Results are maturing. Time to collect on investments made in previous seasons.
- **Winter**: Rest and reflection. Energy is low, demands are high elsewhere, or a major transition is underway. Plan, don't plant.

A user can be in different seasons for different parts of their portfolio. A career initiative might be in autumn (ready to harvest) while a new skill is in spring (just planted).

**2. For each category, recommend specific items:**

- **What to plant**: New seeds worth starting now. Only recommend planting if there is genuine capacity. Explain why now is the right time for each.
- **What to tend**: Existing items that need consistent care. Specify what kind of care and how often.
- **What to harvest**: Items that are mature and will lose value if not harvested soon. Specify what harvesting looks like for each (e.g., "ask for the promotion," "publish the article," "formalize the partnership").
- **What to let rest**: Items to consciously set aside. This is not abandonment, it is deliberate dormancy. Specify when to revisit.

**3. Write a cultivation plan:**

Close with 3-5 paragraphs of narrative prose that tie the seasonal map together. This should read like thoughtful advice, not a checklist. Help the user see the rhythm of their garden and what it could become with patient, seasonal tending.

Do NOT:
- Recommend planting when the garden is already overcrowded
- Skip the "what to let rest" category; it is often the most important
- Write the cultivation plan as a bullet list; it should be flowing prose
- Ignore the user's energy and capacity constraints; seasons are about realistic allocation
- Treat all seasons as equally productive; winter is for planning, not planting
