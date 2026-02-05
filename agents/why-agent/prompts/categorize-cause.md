# Categorize Cause

Assign a potential cause to the appropriate Fishbone category.

**Input:** {cause}, {problem}, {available_categories}
**Output:** Category assignment with reasoning

---

Given the potential cause: {cause}
For the problem: {problem}
Using categories: {available_categories}

Default categories (6M framework):
- **People**: Skills, training, communication, workload, motivation
- **Process**: Procedures, workflows, standards, documentation, handoffs
- **Technology**: Equipment, tools, systems, software, infrastructure
- **Environment**: Physical space, organizational culture, external factors
- **Materials**: Input quality, data, supplies, dependencies
- **Measurement**: Metrics, monitoring, feedback loops, visibility

Categorize the cause:

1. Identify which category best fits the cause
2. If the cause spans multiple categories, note the primary one
3. Explain why this category applies
4. Note if the cause might be a symptom requiring further drilling

Format your response:

**Category:** {category name}

**Reasoning:** {why this category fits}

**Related categories:** {other categories this touches, if any}

**Drill deeper?** {yes/no and why}

Example:
- Cause: "Developers don't know about the new deployment process"
- Category: People (knowledge/training gap)
- Related: Process (documentation may be missing)
- Drill deeper: Yes, why don't they know?

Note: The category helps organize thinking, but the root cause may cut across categories. Use categorization as a tool, not a constraint.
