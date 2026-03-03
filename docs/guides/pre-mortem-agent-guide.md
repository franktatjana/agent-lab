# Pre-Mortem Agent

*Assumes your project already failed and works backward to find exactly why.*

## The Problem

Every team launches with optimism. Roadmaps look clean, timelines feel achievable, stakeholders are aligned. Then reality hits: a dependency nobody tracked, a competitor move nobody modeled, a key person who quietly started interviewing. Traditional risk assessment asks "what could go wrong?" and the answer is always "not much" because optimism bias filters the response.

## The Trap

Running a risk register that checks boxes but never produces uncomfortable truths. The team lists "budget overrun" and "timeline slip" as risks because those are safe to say out loud. The real threats, the ones that actually kill projects, stay invisible because nobody wants to be the pessimist.

## How Pre-Mortem Agent Helps

Instead of asking "what could go wrong?" the Pre-Mortem Agent states "it went wrong" and asks "why did it fail?" This shift from possibility to certainty bypasses defensive thinking. Klein's Pre-Mortem technique forces the brain to construct a specific failure narrative rather than evaluate abstract probabilities. The result: teams surface 30% more risks than traditional assessment.

## A Story

A SaaS startup was 8 weeks from a major product launch. The board was excited, marketing had a date, engineering was on track. The Pre-Mortem Agent ran a failure autopsy and surfaced three modes nobody had discussed: a pending EU regulatory change requiring 3-month compliance rework, the lead architect as a single point of failure who was interviewing elsewhere, and a competitor about to announce a free tier. The team caught the regulatory issue 4 months early, retained the architect after a conversation, and prepared a differentiation strategy before the competitor moved.

## Skills at a Glance

| Skill | What It Does | When to Use |
|-------|-------------|-------------|
| Failure Autopsy | Assumes project failed, generates ranked failure modes | Before committing major resources |
| Blind Spot Scan | Maps cognitive biases active in the decision | When team confidence feels suspiciously high |
| Regret Forecast | Projects forward 6-12 months to surface future regrets | Before irreversible commitments |

## Choosing a Personality

| Personality | Best For | Energy |
|------------|---------|--------|
| Coroner | Data-driven teams wanting forensic analysis | Clinical, detached |
| Pessimist-in-Chief | Optimism-biased teams needing a wake-up call | Dramatically worst-case |
| Insurance Adjuster | Executive audiences and board presentations | Risk/probability, business language |

## When to Use Another Agent

- **Adversary or competitor response matters**: hand off to [Wargaming Agent](wargaming-agent-guide.md)
- **Team needs multi-perspective exploration, not just failure modes**: hand off to [Six Hats Agent](six-hats-agent-guide.md)
- **Root cause of a current problem is unclear**: hand off to [Why Agent](why-agent-guide.md)

## Quick Reference

| Field | Value |
|-------|-------|
| Frameworks | Klein's Pre-Mortem, RPD, Regret Minimization |
| Key inputs | Project description, timeline, assumptions |
| Max output | 500 words |
| Output format | failure_modes, blind_spots, mitigations, regret_forecast |
| Personality count | 3 |

---

[Back to Agent Handbook](../agent-handbook.md) · [Full Definition](../../agents/pre-mortem-agent/pre-mortem-agent-definition.yaml)
