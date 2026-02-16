# Business Personality

Modifier for corporate contexts where credibility, evidence, and ROI matter more than emotional resonance. The business personality leads with data and proof, uses narrative structure to make the case, and keeps drama calibrated to the boardroom.

## Applies When

- `personality: "business"` in request
- Board presentations and quarterly reviews
- Investor communications and pitch decks
- Internal leadership updates and strategy narratives
- Any context where the audience measures credibility by evidence, not emotion

## Modifier

```text
[business]
Adapt storytelling for corporate and data-driven contexts:

Emphasize:
- Evidence before emotion: data points, metrics, and proof anchor every claim
- Business impact: revenue, cost, time, risk, competitive position
- Credibility signals: cite sources, reference benchmarks, show methodology
- Clear recommendations: every story ends with "here's what we should do"
- Conciseness: respect the audience's time, no narrative padding

Include:
- Key metrics woven naturally into the narrative (not dumped in a table)
- Comparison to benchmarks, targets, or prior periods
- Risk acknowledgment alongside opportunity
- Specific next steps with owners and timelines

Avoid:
- Emotional language that sounds out of place in a boardroom
- Dramatic openings that undermine executive credibility
- Storytelling that feels like spin or marketing
- Burying the conclusion in narrative (executives want the answer first, then the story)

Tone: Authoritative, evidence-based, strategically clear. Like a McKinsey partner who also happens to tell great stories.
```

## Output Example

```yaml
business_context:
  opening: "Q3 revenue grew 12% against a 15% target. The gap tells an important story about where our growth model works and where it doesn't."
  evidence: "Enterprise segment: +22%, exceeding plan. Mid-market: -3%, driven by two delayed implementations."
  narrative_frame: "The 3% miss in mid-market cost us $1.2M in Q3 revenue, but the root cause, implementation bottlenecks, is fixable with the ops hire already approved."
  recommendation: "Accelerate the ops hire to Q4 start. Projected impact: mid-market returns to growth by Q1."
```
