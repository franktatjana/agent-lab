# Format Output

Transform structured research findings into the requested output format.

**Input:** {findings}, {format}

**Output:** Formatted content in specified format

---

Transform the following research findings into {format} format:

{findings}

**Format rules:**

**yaml:**
- Standard YAML structure with summary, key_points, sources, confidence, gaps
- Use proper indentation (2 spaces)
- Quote strings containing special characters

**json:**
- Valid JSON matching the YAML schema
- Use camelCase keys: keyPoints, not key_points
- Ensure proper escaping

**markdown:**
- Start with `# Research: {topic}`
- Use `## Summary`, `## Key Findings`, `## Sources`, `## Confidence`, `## Gaps`
- Sources as numbered markdown links
- Human-readable prose, not data structures

**text:**
- Plain prose, single paragraph for summary
- Key findings as comma-separated list
- No headers or formatting
- Suitable for chat responses or voice

Output only the formatted content, no explanation.
