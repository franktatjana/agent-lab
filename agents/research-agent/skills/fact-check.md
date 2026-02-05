# Fact Check

Verify a specific claim against multiple sources. Returns verdict with evidence.

## Workflow

1. **Parse claim**: Extract the specific assertion to verify
2. **Generate queries**: Use `generate-queries` targeting the claim specifically
3. **Search**: Execute queries using web_search tool
4. **Evaluate sources**: Use `evaluate-source` for each result
5. **Extract evidence**: Use `extract-claims` focusing on supporting/contradicting evidence
6. **Compare**: Match extracted evidence against original claim
7. **Verdict**: Determine if claim is supported, contradicted, or unverifiable

## Inputs

```yaml
claim: string          # The specific claim to verify
context: string        # Optional context about where claim appeared
```

## Outputs

```yaml
verdict: string        # supported | contradicted | partially_true | unverifiable
confidence: string     # high | medium | low
evidence_for: list     # Sources/quotes supporting the claim
evidence_against: list # Sources/quotes contradicting the claim
nuance: string         # Important context or caveats
sources: list          # All sources consulted
```

## Prompts Used

- `generate-queries`: Targeted claim verification queries
- `evaluate-source`: Assess source credibility
- `extract-claims`: Find relevant evidence

## Error Handling

- If no sources found: verdict = "unverifiable", note in output
- If sources conflict equally: verdict = "disputed", list both sides
