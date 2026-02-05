# Fishbone Analysis

Structured exploration of potential causes organized by category.

## Workflow

1. **State problem**: Place problem at the "head" of the fishbone
2. **Load categories**: Use `fishbone-categories` reference or custom categories
3. **Brainstorm per category**: For each category, identify potential causes
4. **Categorize**: Use `categorize-cause` to confirm placement
5. **Prioritize**: Rank causes by likelihood and evidence
6. **Drill**: For top causes, apply 5 Whys using `ask-why`
7. **Verify**: Use `verify-root` on identified root causes

## Inputs

```yaml
problem: string                # The problem to analyze
context: string                # Background information
categories: list               # Custom categories (optional, defaults to 6M)
max_causes_per_category: int   # Limit per category (default: 5)
```

## Outputs

```yaml
problem_statement: string
fishbone:
  - category: string
    causes:
      - cause: string
        likelihood: high | medium | low
        evidence: string
        drill_result: string  # Result of 5 Whys if applied
root_causes:
  - cause: string
    category: string
    confidence: high | medium | low
    evidence: string
```

## Default Categories (6M)

Load from `references/fishbone-categories.md`:

- **People**: Skills, training, communication, workload, motivation
- **Process**: Procedures, workflows, standards, handoffs
- **Technology**: Equipment, tools, systems, software
- **Environment**: Physical space, culture, external factors
- **Materials**: Input quality, data, supplies
- **Measurement**: Metrics, monitoring, feedback loops

## Prompts Used

- [categorize-cause](../prompts/categorize-cause.md): Assign causes to categories
- [ask-why](../prompts/ask-why.md): Drill into promising causes
- [verify-root](../prompts/verify-root.md): Confirm root causes

## References Loaded

- [fishbone-categories](../references/fishbone-categories.md): Category definitions and examples

## Facilitation Notes

When used in `facilitator` personality:

- Ask participants to contribute causes for each category
- Capture all suggestions without judgment initially
- Group similar causes together
- Prioritize collaboratively before drilling
- Document dissenting views

## Error Handling

- If a category has no causes: Note as "no causes identified" (may indicate gap in understanding)
- If causes don't fit categories: Create "Other" category or question category fit
- If too many causes: Prioritize by evidence and impact; drill top 3

## Example

```yaml
problem: "Release caused production outage"

fishbone:
  - category: People
    causes:
      - cause: "Developer unfamiliar with deployment process"
        likelihood: medium
        evidence: "New team member"
      - cause: "No code review before merge"
        likelihood: low
        evidence: "PR shows review"

  - category: Process
    causes:
      - cause: "No staging environment test"
        likelihood: high
        evidence: "Staging was skipped due to deadline"
      - cause: "Rollback procedure unclear"
        likelihood: medium
        evidence: "Team hesitated during incident"

  - category: Technology
    causes:
      - cause: "Database migration script had bug"
        likelihood: high
        evidence: "Logs show migration failure"

  - category: Environment
    causes:
      - cause: "Production config differs from staging"
        likelihood: medium
        evidence: "Config drift detected"

root_causes:
  - cause: "Staging test was skipped due to deadline pressure"
    category: Process
    confidence: high
    evidence: "Team confirmed deadline drove decision"

  - cause: "Migration script not tested against production-like data"
    category: Technology
    confidence: high
    evidence: "Script worked in staging with smaller dataset"
```
