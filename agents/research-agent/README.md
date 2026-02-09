# Research Agent: Brief

## The Human Analogy

Think of the Research Agent as a junior research analyst on your team. Like a human researcher, it:

- **Gathers sources**:Searches broadly, evaluates credibility, filters noise
- **Takes notes**:Extracts key claims, tracks where information came from
- **Synthesizes**:Combines findings into coherent summaries
- **Flags uncertainty**:Admits when sources conflict or information is missing
- **Cites everything**:Never makes claims without backing

Unlike a human researcher, it:

- Works in minutes, not hours
- Never gets tired or loses focus
- Doesn't have opinions or biases about findings
- Won't make recommendations:just reports what it found

The agent is your research assistant, not your advisor. It gathers and organizes; you analyze and decide.

## Value Proposition

**For individuals:** Get up to speed on any topic in minutes. Walk into meetings prepared. Make informed decisions faster.

**For teams:** Consistent research quality across the organization. Standardized citations. Shareable, structured outputs.

**For workflows:** Research becomes a composable step in larger processes. Feed findings into analysis agents, writing agents, or decision support systems.

## How to Use

### Quick orientation (2 minutes)

```yaml
topic: "quantum computing applications in finance"
scope: "broad"
personality: "executive"
max_sources: 5
```

Returns bullet-point overview suitable for quick briefing.

### Deep dive (5-10 minutes)

```yaml
topic: "quantum computing applications in finance"
scope: "exhaustive"
personality: "detailed"
output_format: "markdown"
max_sources: 15
export_assets:
  - report
  - bibliography
```

Returns comprehensive report with methodology notes and exportable citations.

### Verify a claim

```yaml
skill: "fact-check"
claim: "Quantum computers can break RSA encryption"
```

Returns verdict with supporting/contradicting evidence.

### Compare perspectives

```yaml
skill: "compare-sources"
sources:
  - "https://source1.com/article"
  - "https://source2.com/article"
topic: "quantum computing timeline predictions"
```

Returns side-by-side analysis of agreements and conflicts.

## What's Possible

| Capability | Status | Notes |
|------------|--------|-------|
| Web search and synthesis | ✅ Available | Core functionality |
| Source credibility evaluation | ✅ Available | CRAAP-based scoring |
| Multi-format output | ✅ Available | yaml, json, markdown, text |
| Asset generation | ✅ Available | Reports, bibliographies, raw data |
| Fact checking | ✅ Available | Verdict with evidence |
| Source comparison | ✅ Available | Agreement/conflict mapping |
| Academic paper search | 🔜 Planned | arXiv, Google Scholar integration |
| Session continuity | 🔜 Planned | Resume previous research |
| Real-time monitoring | 🔜 Planned | Track topic over time |

## Multi-Agent Combinations

The Research Agent is designed to work with other agents in a pipeline:

### Research → Analysis

```text
Research Agent → Analysis Agent
"Gather information"  "Interpret findings"
```

Research Agent gathers facts; Analysis Agent identifies patterns, implications, and insights.

### Research → Writing

```text
Research Agent → Writing Agent
"Find sources"       "Draft content"
```

Research Agent provides cited findings; Writing Agent transforms into articles, reports, or documentation.

### Research → Decision Support

```text
Research Agent → Decision Agent
"Background info"    "Recommend action"
```

Research Agent provides context; Decision Agent weighs options and suggests actions.

### Orchestrated Research Pipeline

```text
Coordinator Agent
    ├── Research Agent (topic A)
    ├── Research Agent (topic B)
    └── Research Agent (topic C)
         ↓
    Synthesis Agent (combine findings)
         ↓
    Report Agent (format output)
```

Multiple Research Agents work in parallel; results feed into synthesis and reporting.

## Problem

Manual research is time-consuming. Finding credible sources, cross-referencing claims, and synthesizing findings requires sustained attention. An agent can handle the retrieval and synthesis, freeing humans for analysis and decision-making.

## Goals

- Gather relevant information from multiple sources quickly
- Cite every claim:no hallucinated facts
- Surface gaps and conflicts rather than hiding them
- Produce structured output ready for downstream use

## Non-Goals

- Making recommendations or decisions
- Deep analysis or interpretation
- Accessing paid or authenticated sources without approval

## Use Cases

- Quick research on unfamiliar topics before meetings
- Competitive landscape scanning
- Technical documentation gathering
- Background research for writing projects

## Ideas

- Add source credibility scoring
- Support for academic paper search (arXiv, Google Scholar)
- Configurable output formats (markdown, JSON, slides outline)
- Research session continuity:pick up where left off

## Roadmap

**Phase 1 (Current):** Basic web search and synthesis with citations

**Phase 2:** Source filtering by recency, domain, credibility signals

**Phase 3:** Multi-session memory, research threads

## Open Questions

- How to handle conflicting information from equally credible sources?
- What's the right balance between breadth and depth?
- Should the agent suggest follow-up research directions?

## Success Criteria

- User trusts the output enough to use it without re-verifying every source
- Time to first useful answer under 2 minutes for focused research
- Zero hallucinated sources in production use
