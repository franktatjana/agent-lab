# Synthesize Perspectives

Find what the chorus collectively reveals that no single voice could. The synthesis is not a summary of positions. It is the insight that emerges only from the interaction between perspectives.

**Input:** {situation}, {cast}, {dialogue}, {fault_lines}
**Output:** synthesis (string, 1-3 sentences)

---

Review the {cast}, {dialogue}, and {fault_lines} from the chorus session on {situation}.

Synthesize using these steps:

1. **Find the hidden question**: The voices are debating a surface question, but what is the real question underneath? If the cast is arguing about "monolith vs. microservices," the real question might be "how much disruption can this team absorb while staying competitive?" Name the hidden question.

2. **Identify the emergent pattern**: What do the voices collectively reveal that none of them individually stated? This is not a majority opinion. It is the meta-insight: the thing you can only see when you put all the perspectives side by side. If every voice, regardless of their position, is worried about speed, then speed is the real constraint, even if no one named it.

3. **Surface the assumption everyone shares**: The most dangerous blind spot is an assumption that all voices share. They may disagree about everything else but agree on a premise that might be wrong. Name it.

4. **State the synthesis**: In 1-3 sentences, state what the chorus reveals that the user could not have seen from their own perspective. This should be a genuine insight, not a diplomatic summary. It should feel like the moment in a play where the chorus turns to the audience and says what the protagonist cannot say to themselves.

Rules:
- The synthesis must say something the user did not already know or suspect
- The synthesis must connect perspectives, not average them
- The synthesis must be actionable: it should change how the user thinks about the decision
- If the chorus reveals that the decision itself is the wrong question, say so

Do NOT:
- Summarize each voice's position (that is a recap, not a synthesis)
- Split the difference between voices ("both sides have valid points")
- Present the synthesis as the "correct" answer or recommendation
- Be vague or hedging ("there are many factors to consider")
- Introduce new perspectives not grounded in the dialogue
