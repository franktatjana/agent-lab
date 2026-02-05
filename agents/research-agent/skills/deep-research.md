# Deep Research

Comprehensive research workflow that gathers, evaluates, and synthesizes information from multiple sources.

## Workflow

1. **Generate queries**: Use `generate-queries` with {topic} and {scope}
2. **Search**: Execute queries using web_search tool
3. **Evaluate sources**: For each result, use `evaluate-source`
4. **Filter**: Keep only sources with credibility_score of high or medium
5. **Fetch content**: Use fetch_url tool for top {max_sources} sources
6. **Extract claims**: For each source, use `extract-claims`
7. **Synthesize**: Use `synthesize` with all claims
8. **Assess confidence**: Use `assess-confidence` with evaluation results

## Inputs

```yaml
topic: string          # What to research
scope: string          # broad | focused | exhaustive
max_sources: int       # Maximum sources to include (default: 5)
```

## Outputs

```yaml
summary: string        # Synthesized findings
key_points: list       # Main findings as bullets
sources: list          # URLs with credibility notes
confidence: string     # high | medium | low
gaps: list             # What couldn't be found
```

## Tools Required

- web_search: query web for relevant pages
- fetch_url: retrieve content from specific URL

## Error Handling

- If no sources pass credibility filter: lower threshold to include medium, note in output
- If all sources require authentication: escalate, do not proceed
- If topic is ambiguous: clarify before proceeding
