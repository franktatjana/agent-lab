# Research Agent

*Finds and synthesizes information on a specified topic from multiple sources, returning structured findings with source citations.*

## The Problem

You have one week to recommend three European markets for a digital health startup. You could spend days reading regulatory frameworks, market reports, and competitor analyses, producing a 200-page report that covers everything and tells decision-makers nothing actionable. Or you could focus the research, acknowledge what you cannot find, and deliver findings that actually drive a decision.

## The Trap

Research without scope is browsing. The natural instinct when facing an unfamiliar topic is to cast a wide net: read everything, collect everything, synthesize everything. This produces comprehensive documents that nobody reads and delayed decisions while "more research" happens. The trap is confusing thoroughness with usefulness.

The second trap: hiding uncertainty. When research has gaps (and it always does), the temptation is to paper over them with hedging language or to present incomplete findings as definitive. This creates false confidence in decision-makers who do not know what they do not know.

## How Research Agent Helps

This agent treats research as scoped hypothesis-testing, not exhaustive cataloging. It starts by negotiating scope (what questions matter most, what depth is needed, what time and source constraints exist), then executes a structured workflow: search, filter for relevance and credibility, fetch and extract, synthesize.

Every finding is cited. Every claim is attributed to a source. Gaps are named explicitly: "This claim could not be verified with available sources." Confidence levels are stated clearly, not hidden behind carefully-worded ambiguity.

The output is structured for decision-making: summary, key points with source references, source credibility assessment, confidence level, and identified gaps. The goal is not to know everything, it is to know enough to decide, and to know exactly where knowledge stops.

## A Story

A strategy consultant needs to recommend three European markets for a digital health startup entering the regulatory space. She has one week and a client expecting a board-ready recommendation.

She starts with scope negotiation: the most important questions are regulatory pathway (how fast can the product launch legally?) and buyer behavior (who pays and how do they decide?). She explicitly defers reimbursement modeling and competitive landscape to follow-up research and expert interviews.

The Research Agent finds that Germany's DiGA fast-track program could cut time-to-market by 60% compared to traditional CE marking routes. This is sourced from three independent regulatory databases and confirmed against published DiGA listing timelines. For Sweden, procurement data is thin: the agent flags this gap explicitly rather than guessing.

She delivers a 15-page summary, not a 200-page report. The board approves Germany as market one, with expert interviews commissioned to fill the Swedish data gap. Six months later, the startup receives DiGA listing.

The value was not exhaustive research. It was honest, scoped research that named its own limits.

## Step-by-Step

1. **Define the topic**: What do you need to know? Be as specific as possible
2. **Set the scope**: Broad (overview), focused (specific questions), or exhaustive (comprehensive review)
3. **Specify preferences**: Preferred sources, maximum source count, preferred output format
4. **Receive structured findings**: Summary, key points with citations, source credibility assessment, confidence level, and gaps
5. **Use the deliverables**: Report (markdown), bibliography (BibTeX), or raw data (JSON) depending on your needs

## Skills at a Glance

| Skill | What It Does | When to Use |
|-------|-------------|-------------|
| Deep Research | Multi-step: search, filter, fetch, extract, synthesize | When you need thorough, cited findings on a topic |
| Quick Scan | Fast, shallow research for rapid orientation | When you need a fast overview before going deep |
| Fact Check | Verifies a specific claim against multiple sources | When you have a claim and need to confirm or refute it |
| Compare Sources | Side-by-side analysis of multiple sources on the same topic | When sources disagree and you need to understand why |

## Choosing a Personality

| Personality | Best For | Energy |
|------------|---------|--------|
| Default | Standard research with balanced depth and clarity | Neutral, structured, lets findings speak |
| Executive | Board-ready output: bullet-points only, max 5 key points, no prose | Concise, actionable, decision-focused |
| Detailed | Includes methodology notes and source evaluation rationale | Thorough, transparent, shows the work |
| Educational | Explains terminology and adds context for non-experts | Accessible, contextual, teaches as it reports |

## When to Use Another Agent

Research gathers and synthesizes, it does not analyze, recommend, or decide. Escalate when:

- **Strategic analysis** needed: research provides facts, but evaluating competitive options requires [Wargaming Agent](wargaming-agent-guide.md) or [Six Hats Agent](six-hats-agent-guide.md)
- **Root cause investigation**: hand off to [Why Agent](why-agent-guide.md) when the question is "why is this happening?" not "what is happening?"
- **Narrative construction**: hand off to [Storytelling Agent](storytelling-agent-guide.md) when findings need to be shaped into a compelling presentation
- **All sources require authentication**: the agent will flag when it cannot access gated sources
- **Conflicting information from credible sources**: the agent flags this for human judgment

## Quick Reference

| Field | Value |
|-------|-------|
| Frameworks | Source Evaluation, Multi-source Synthesis, Credibility Assessment |
| Key inputs | topic (required), scope (broad/focused/exhaustive, required), sources, max_sources, output_format |
| Max output | 400 words |
| Output format | summary (3-5 sentences), key_points (max 5 with citations), sources (numbered with credibility), confidence, gaps |
| Deliverables | Report (markdown), bibliography (BibTeX), raw data (JSON) |
| Personality count | 4 (Default, Executive, Detailed, Educational) |

---

[Back to Agent Handbook](../agent-handbook.md) · [Agent Definition](../../agents/research-agent/research-agent-definition.yaml) · [Full Specification](../../agents/research-agent/research-agent.md)
