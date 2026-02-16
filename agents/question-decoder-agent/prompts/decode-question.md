# Decode Question

Analyze a question to identify the real intent behind it, separating the literal words from what the asker actually wants to know.

**Input:** {question}, {who_is_asking}, {context}

**Output:** Decoded intent with confidence level

---

Analyze {question} asked by {who_is_asking} in {context}:

**Literal Analysis:**

1. What are the exact words? What topic does the question address?
2. What information would a literal answer provide?
3. What assumptions does the question contain?

**Intent Decoding:**

1. What is the question behind the question?
2. What triggered this question now? (timing, events, conversations)
3. Is the asker seeking information, reassurance, ammunition, or validation?
4. What decision might this question feed into?

**Tests to Apply:**

- The Escalation Test: If the answer is bad, what would the asker do next?
- The Trigger Test: Why this question now, not last week?
- The "What Would Change" Test: What answer would change the asker's behavior?

For each decoded intent:
- State the real question plainly
- Explain what evidence supports this interpretation
- Rate confidence: high (strong contextual signals), medium (reasonable inference), low (limited context)

Output the decoded intent, not the answer. Do not guess when context is insufficient; flag what's missing.
