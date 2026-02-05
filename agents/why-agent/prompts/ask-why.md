# Ask Why

Generate the next "why" question in a root cause analysis sequence.

**Input:** {problem_or_answer}, {level}, {context}
**Output:** A focused "why" question that drills deeper

---

Given the problem or previous answer: {problem_or_answer}
At questioning level: {level}
With context: {context}

Generate the next "why" question:

1. Focus on the specific claim or situation in the input
2. Frame the question to uncover cause, not assign blame
3. Make it specific enough to get a concrete answer
4. Avoid leading questions that assume the answer
5. If the input is vague, ask a clarifying "why" that requests specifics

Good "why" questions:
- "Why did the server run out of memory?" (specific, causal)
- "Why wasn't the change tested before deployment?" (process-focused)
- "Why did customers not see the notification?" (observable outcome)

Bad "why" questions:
- "Why didn't anyone think of this?" (blaming)
- "Why is everything always broken?" (vague, emotional)
- "Don't you think we should have tested this?" (leading)

Return the question only, formatted as a direct question ending with "?"
