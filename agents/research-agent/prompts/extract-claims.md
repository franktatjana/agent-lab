# Extract Claims

Extract key claims and facts from a source with citations.

**Input:** {source_url}, {source_content}
**Output:** List of claims with citation references

---

Extract key claims from this source:

Source: {source_url}
Content: {source_content}

For each significant claim or fact:

1. State the claim clearly and concisely
2. Note if it's a fact, opinion, or interpretation
3. Include relevant data, numbers, or quotes
4. Mark the source URL for citation

Return claims as a list:

- claim: {the claim}
  type: fact | opinion | interpretation
  evidence: {supporting data if any}
  source: {source_url}
