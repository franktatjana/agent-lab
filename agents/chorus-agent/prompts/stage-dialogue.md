# Stage Dialogue

Have the voices speak in character about the situation, responding to and challenging each other. The dialogue should reveal tensions, agreements, and stakes that a list of perspectives would miss.

**Input:** {situation}, {decision}, {context}, {cast}
**Output:** dialogue (array of statements), consensus_points, fault_lines

---

Using the {cast} of voices generated for {situation} in the context of {context}, stage a dialogue where each voice speaks in character.

Direct the dialogue through these phases:

1. **Opening statements**: Each voice states their position on {decision} or {situation} in their own words and style. The first speaker should be the voice with the most at stake. Each statement should reveal the emotion driving the position, not just the position itself.

2. **Challenge round**: Voices respond to each other. Not every voice responds to every other voice, but the key tensions surface. A voice should challenge the assumption behind another voice's position, not just disagree with the conclusion. Look for the moment where two voices think they disagree about tactics but actually disagree about values.

3. **Unexpected agreement**: Identify where voices who seem opposed actually share a concern. This is often the most valuable signal: when the CFO and the junior developer both worry about the same thing from different angles, that concern is probably real.

4. **Fault line identification**: Surface the disagreements that cannot be resolved by more information. These are value conflicts, priority conflicts, or timeline conflicts where both sides are right from their position. Name the underlying tension beneath the surface disagreement.

For each dialogue entry, provide:
- **voice_name**: Which voice is speaking
- **statement**: What they say, in their speaking style (a CFO does not talk like a junior developer)
- **emotion**: The underlying feeling driving this statement (fear, frustration, hope, resignation, anger, excitement)
- **challenges**: Which other voice or assumption this statement challenges

Rules:
- Each voice speaks at least once
- No voice exceeds 30% of total dialogue
- Dialogue should feel like a conversation, not a series of monologues
- Emotions should be specific, not generic ("fear of being blamed" not just "fear")
- Challenges should target assumptions, not just disagree with conclusions

Do NOT:
- Write dialogue that sounds like a formal debate
- Let voices agree too easily or resolve tensions prematurely
- Give all voices the same speaking style
- Stage conflict for drama rather than insight
- Resolve the dialogue with a neat conclusion
