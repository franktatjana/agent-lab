# Anticipate Follow-ups

Predict the most likely follow-up questions based on the audience profile, the question asked, and the answer given, then prepare concise responses for each.

**Input:** {question}, {audience_profile}, {answer}

**Output:** 3 likely follow-up questions with prepared responses

---

Given {question} from {audience_profile} and planned {answer}, anticipate follow-ups:

**Role-Based Prediction:**

1. What does this role always ask next? (CEOs ask about risk, engineers ask about implementation, finance asks about cost)
2. What gaps does the answer leave that this person will notice?
3. What concerns remain unaddressed given their primary worry?

**Gap Analysis:**

1. What information was deliberately omitted for brevity?
2. What assumptions in the answer might the asker challenge?
3. What adjacent topics might this question lead to?

**Skepticism Mapping:**

1. Where might the asker push back?
2. What numbers or claims will they want to verify?
3. What's the worst-case scenario they'll ask about?

For each predicted follow-up:
- State the question as the asker would phrase it
- Explain why this follow-up is likely (role, concern, gap)
- Provide a prepared response at the same altitude as the original answer
- Rate likelihood: very likely, likely, possible

Output exactly 3 follow-up questions, ordered by likelihood. Prepared responses should be concise and self-contained.
