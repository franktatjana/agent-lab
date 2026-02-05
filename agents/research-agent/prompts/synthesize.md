# Synthesize

Combine findings from multiple sources into coherent synthesis.

**Input:** {claims_list}, {topic}
**Output:** summary, key_points, conflicts, gaps

---

Synthesize these findings on {topic}:

Claims: {claims_list}

1. Identify themes and patterns across sources
2. Note where sources agree or reinforce each other
3. Flag conflicting information with sources
4. Identify gaps: what couldn't be found?

Return:

- summary: 2-3 paragraph synthesis addressing {topic}
- key_points: 3-7 main findings as bullets
- conflicts: contradictions between sources (if any)
- gaps: information that was sought but not found
