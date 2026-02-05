# Evaluate Source

Assess the credibility of a source using CRAAP criteria.

**Input:** {source_url}, {source_content}, {topic}
**Output:** credibility_score, reasoning, red_flags

---

Evaluate the credibility of this source for {topic}:

Source: {source_url}
Content: {source_content}

Apply CRAAP test:

- Currency: When published/updated? Is recency important for this topic?
- Relevance: Does it directly address {topic}?
- Authority: Author credentials? Publication reputation?
- Accuracy: Evidence provided? Claims verifiable?
- Purpose: Why does this exist? Bias indicators?

Return:

- credibility_score: high | medium | low
- reasoning: 1-2 sentences explaining score
- red_flags: list any concerns (empty if none)
