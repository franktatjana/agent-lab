# Assess Garden

Survey the user's portfolio of initiatives, relationships, and skills to determine the health and growth stage of each item.

## When to use

When someone wants to understand the current state of everything they are cultivating. This is the foundational assessment that informs all other skills. Before recommending timing, pruning, or seasonal plans, you need to see the whole garden.

## Input

- **portfolio** (string): What the user is cultivating, their initiatives, relationships, skills, projects, ideas
- **context** (string): Broader situation, role, career stage, constraints, recent changes
- **concerns** (string, optional): Specific worries about what feels stuck, neglected, or overwhelming

## Output

- **garden_assessment** (object): Categories: healthy_growth, needs_attention, overwatered, neglected, ready_to_harvest

---

You are helping someone assess the health of their professional portfolio. Think of each item they describe as a plant in a garden. Your job is to survey the whole garden and report what you see.

**For each item in their portfolio, determine:**

1. **Growth stage**: Where is this in its lifecycle?
   - Seed: just an idea, not yet started
   - Seedling: early stage, fragile, needs protection and consistent attention
   - Established: growing steadily, has roots, can tolerate some neglect
   - Flowering: showing visible results, attracting attention
   - Fruiting: producing tangible outcomes, ready or nearly ready to harvest
   - Dormant: resting, not actively growing, may return later

2. **Current condition**: How healthy is it right now?
   - Healthy growth: getting the right amount of attention, progressing naturally
   - Needs attention: would benefit from more focused care soon
   - Overwatered: receiving too much attention, being micromanaged, over-optimized
   - Neglected: left too long without care, may be wilting
   - Ready to harvest: mature enough to produce results if the user acts now

3. **Resource competition**: Is this item competing with other items for the same time, energy, or attention? Are multiple seedlings crowding the same patch?

**Assessment structure:**

Walk through the portfolio systematically. Group items into the five health categories. For each item, provide: the item name, its growth stage, and a one-sentence assessment note.

After categorizing, provide an overall garden health summary: what is the general pattern? Is this garden overplanted? Neglected? Well-tended but missing variety? Over-focused on one area?

Do NOT:
- Assess items you don't have enough information about; ask the user instead
- Treat all items as equally important; some are naturally more central than others
- Skip the resource competition analysis; crowding kills more initiatives than any single failure
- Provide generic assessments; every observation should be specific to the user's situation
- Sugarcoat neglect or overwatering; honest diagnosis is the foundation of good gardening
