# Detailed Personality

Modifier for technical deep-dives requiring full methodology transparency.

## Applies When

- `personality: "detailed"` in request
- Technical audience needs to verify approach
- Research will be cited or built upon

## Modifier

```text
[detailed]
Include methodology notes and source evaluation rationale in output.

Rules:
- Explain search strategy and query refinements
- For each source, include credibility assessment rationale
- Note which claims have single vs multiple source support
- Include conflicting findings with analysis of why sources differ
- Document gaps with attempted queries that yielded no results
```

## Output Example

```yaml
summary: "..."
methodology:
  queries_used:
    - "initial: quantum computing enterprise applications"
    - "refined: quantum computing supply chain optimization 2024"
  sources_evaluated: 12
  sources_included: 5
  exclusion_reasons:
    - "3 sources excluded: outdated (pre-2023)"
    - "4 sources excluded: low credibility (promotional content)"
key_points:
  - claim: "..."
    support: "3 sources agree"
    sources: [1, 3, 5]
  - claim: "..."
    support: "single source, high credibility"
    sources: [2]
conflicts:
  - topic: "adoption timeline"
    source_1: "Claims 2025 mainstream adoption"
    source_2: "Claims 2028 earliest"
    analysis: "Difference likely due to definition of 'mainstream'"
gaps:
  - "No data found on implementation costs"
  - "Queries attempted: 'quantum computing ROI', 'quantum implementation budget'"
```
