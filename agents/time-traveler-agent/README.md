# Time Traveler Agent

Every decision exists in a river of time, shaped by currents that started flowing long before the decision was visible and carrying consequences that arrive long after the decision is made. Most people stand in the middle of that river and can only see what is directly in front of them. The Time Traveler Agent lifts you above the water and shows you the full course: where the river came from, where you are standing, and where it flows next depending on what you do.

The human equivalent is the mentor who has seen enough history repeat itself to know that today's urgent problem was created by a decision that seemed reasonable five years ago, and that today's "obvious" choice will look very different from five years in the future. The Time Traveler does not predict the future. It builds a temporal map that makes past causes and future consequences equally vivid, so decisions are made with full awareness of the timeline, not just the present moment.

## Value Proposition

Present-tense tunnel vision is one of the most common decision-making failures. People evaluate choices based on what feels urgent now, disconnected from the forces that created the urgency and blind to the consequences that will compound over time. The Time Traveler Agent breaks this pattern by constructing a complete temporal map: what created this moment, what is actually true right now (stripped of the stories we tell ourselves), and what two different futures look like depending on whether you act or stand still.

## How to Use

Describe your situation, the decision you are facing, and any relevant context. The agent will build a temporal map across three timeframes. You can adjust the timeframe (default is five years back and forward) and select a personality: the Historian for evidence-grounded precision, the Futurist for vivid scenario painting, or the Analyst for structured quantification. The full temporal map skill runs all four prompts in sequence. You can also use individual skills: Hindsight Analysis for just the backward look, Foresight Projection for just the two futures, or Bias Correction for a standalone audit of your current narrative.

## What's Possible

The temporal map reveals connections that are invisible from any single timeframe. A company struggling with technical debt discovers that the constraints that made the original architecture reasonable no longer exist, and that the "too expensive to fix" narrative is a story from three years ago that nobody has re-evaluated. A leader considering a reorganization sees that the last two reorgs created the exact dysfunction they are trying to solve, and that acting now compounds the pattern rather than breaking it. A team delaying a hire discovers that the compounding cost of delay over three years dwarfs the short-term savings they are optimizing for.

## Multi-Agent Combinations

The Time Traveler pairs naturally with agents that operate in a single timeframe. Feed its temporal map into the **Scenario Planning Agent** when the future needs formal 2x2 scenario construction with wind tunneling. Hand off to the **Pre-Mortem Agent** when the action scenario contains a specific plan that needs failure mode stress-testing. Receive input from the **Why Agent** when a root cause investigation needs temporal context to explain how the root cause developed over time.

## Problem

People make decisions in the present tense. They evaluate options based on current conditions, current emotions, and current narratives. This creates three predictable failures: judging past decisions with information that was not available at the time (hindsight bias), overweighting present discomfort relative to future consequences (present bias), and accepting narrative framings that feel true but are not grounded in evidence (narrative bias). The result is decisions that are locally rational but temporally blind.

## Goals

- Build complete temporal maps that connect past causes to present conditions to future consequences
- Correct hindsight bias by evaluating past decisions against the constraints and information available at the time
- Strip narrative bias from present-tense assessments to reveal what is actually true versus what is comfortable to believe
- Make future consequences vivid and concrete through two distinct scenarios (inaction vs. action)
- Surface second-order effects that only become visible when you trace consequences across time

## Non-Goals

- Predicting the future or assigning probabilities to outcomes
- Providing therapy, counseling, or emotional processing
- Replacing professional strategic planning, financial forecasting, or legal counsel
- Building formal scenario matrices (hand off to Scenario Planning Agent)
- Hunting for failure modes in a specific plan (hand off to Pre-Mortem Agent)

## Use Cases

| Use Case | Skill | What you get |
|----------|-------|-------------|
| Major strategic decision | Temporal Map | Full three-timeframe analysis with temporal insight |
| Understanding how we got here | Hindsight Analysis | Causal chains from past decisions, corrected for hindsight bias |
| Evaluating whether to act or wait | Foresight Projection | Two futures showing the compounding cost of each path |
| Checking your own narrative | Bias Correction | Honest present-tense snapshot with bias audit |

## Roadmap

- [ ] Integration with Scenario Planning Agent for automatic handoff when 2x2 matrix is needed
- [ ] Multi-situation temporal comparison (how two different decisions share the same causal history)
- [ ] Organizational temporal memory (tracking how decisions compound across multiple analyses)
- [ ] Quantified temporal discounting calculator for financial decisions

## Open Questions

- How far back is useful? Five years is the default, but some situations have causal roots that go back decades. Should the agent auto-detect the relevant timeframe from the input?
- How should the agent handle situations where the user does not have a specific decision, only a sense that something needs to change? The bias-correction skill partially addresses this, but the full temporal map assumes a decision framing.
- When does temporal analysis cross into rumination? The agent needs guardrails against users who want to endlessly revisit past decisions rather than inform future ones.

## Success Criteria

- Users report that the temporal map changed their framing of the decision, not just added information
- Past analysis surfaces causal chains the user had not connected to the current situation
- Present snapshot identifies at least one narrative bias the user was not aware of
- Future scenarios produce genuinely different trajectories, not just optimistic vs. pessimistic versions of the same path
- Temporal insight synthesizes across timeframes rather than summarizing any single one

## File Structure

```
time-traveler-agent/
├── time-traveler-agent.md              # Technical spec
├── time-traveler-agent-definition.yaml # Oracle Agent Spec 26.1.0
├── prompts/                            # 4 atomic prompts
├── skills/                             # 4 composed workflows
├── personalities/                      # 3 voice variants
├── references/                         # Frameworks + glossary
├── case-studies/                       # Narrative examples
├── examples/                           # Input/output fixtures
└── visual/                             # Factsheet design prompt
```
