# Compare Sources

Side-by-side analysis of multiple sources on the same topic. Identifies agreements, conflicts, and unique contributions.

## Workflow

1. **Fetch sources**: Use fetch_url tool for each provided URL
2. **Evaluate each**: Use `evaluate-source` for credibility assessment
3. **Extract claims**: Use `extract-claims` for each source
4. **Map claims**: Identify which claims appear in multiple sources
5. **Find conflicts**: Flag claims where sources disagree
6. **Find gaps**: Note what each source covers that others don't
7. **Synthesize comparison**: Structured analysis of agreements/conflicts

## Inputs

```yaml
sources: list          # URLs to compare (2-5 sources)
topic: string          # Focus area for comparison
focus: string          # Optional: specific aspect to compare
```

## Outputs

```yaml
source_profiles: list  # Each source with credibility and summary
agreements: list       # Claims all sources support
conflicts: list        # Claims where sources disagree
unique_contributions:  # What each source adds that others don't
  - source: url
    unique: list
recommendation: string # Which source(s) to trust and why
```

## Prompts Used

- `evaluate-source`: Credibility for each source
- `extract-claims`: Claims from each source

## When to Use

- Conflicting information found during deep research
- Need to choose between competing sources
- Understanding different perspectives on same topic
