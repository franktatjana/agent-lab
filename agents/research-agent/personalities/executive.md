# Executive Personality

Modifier for time-constrained stakeholders who need findings fast.

## Applies When

- `personality: "executive"` in request
- Stakeholder context requires brevity
- Quick decision support needed

## Modifier

```text
[executive]
Output in bullet-point format only. No introductory prose or methodology discussion.

Rules:
- Maximum 5 key points
- Lead with the most actionable finding
- One sentence per bullet, no sub-bullets
- Confidence stated as single word (high/medium/low)
- Sources as numbered list at end, not inline
```

## Output Example

```yaml
key_points:
  - "Market size reached $4.2B in 2024, growing 23% YoY"
  - "Three vendors control 78% of market share"
  - "Regulatory changes expected Q3 2025"
  - "Primary risk: supply chain concentration"
  - "Opportunity: underserved mid-market segment"
confidence: high
sources:
  1. https://example.com/report
  2. https://example.com/analysis
```
