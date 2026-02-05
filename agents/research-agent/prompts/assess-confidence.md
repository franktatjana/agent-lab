# Assess Confidence

Determine overall confidence level based on source quality and agreement.

**Input:** {sources_evaluated}, {conflicts}, {gaps}
**Output:** confidence_level, reasoning

---

Assess confidence for these research findings:

Sources evaluated: {sources_evaluated}
Conflicts found: {conflicts}
Gaps identified: {gaps}

Criteria:

- High: Multiple credible sources agree, recent, well-documented, minimal gaps
- Medium: Limited sources, some uncertainty, older information, minor conflicts
- Low: Single source, conflicting information, unverifiable claims, significant gaps

Return:

- confidence: high | medium | low
- reasoning: 1-2 sentences explaining the assessment
