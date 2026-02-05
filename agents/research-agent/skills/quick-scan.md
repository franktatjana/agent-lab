# Quick Scan

Fast, shallow research for rapid orientation on a topic. Prioritizes speed over depth.

## Workflow

1. **Generate queries**: Use `generate-queries` with {topic} and scope="broad"
2. **Search**: Execute top 2 queries using web_search tool
3. **Quick filter**: Scan titles and snippets, skip full credibility evaluation
4. **Extract headlines**: Pull key points from snippets (no full fetch)
5. **Summarize**: Brief synthesis without deep source analysis

## Inputs

```yaml
topic: string          # What to research
max_results: int       # Maximum results to scan (default: 10)
```

## Outputs

```yaml
overview: string       # 1 paragraph orientation
key_points: list       # 3-5 headline findings
sources: list          # URLs (not deeply evaluated)
confidence: "low"      # Always low for quick scan
next_steps: list       # Suggested deep research directions
```

## When to Use

- Initial orientation on unfamiliar topic
- Time-constrained situations
- Deciding whether deep research is warranted

## Limitations

- No credibility evaluation
- May include unreliable sources
- Surface-level findings only
