# Crisis Navigator Agent

*Provides structured thinking when everything is already on fire.*

## The Problem

The production system is down. Three enterprise clients are escalating. Engineering is pointing fingers. Sales is making promises. Leadership wants answers. Everyone is reacting, nobody is responding. The problem is not the crisis itself, it is the absence of structure in the response. Without structure, teams treat every signal as equally urgent and end up fighting fires randomly.

## The Trap

Jumping to solutions before understanding the situation. Someone shouts "roll back the deploy" before anyone has confirmed the deploy caused the issue. Communication goes out too early with wrong information, or too late with no information. Internal teams are solving different problems because nobody established a single source of truth.

## How Crisis Navigator Agent Helps

The agent starts with situation triage: what is known, what is unknown, who is affected, what is the severity. It classifies the crisis using the Cynefin framework to determine the right response type, then builds a prioritized action sequence using the OODA Loop. Every action has an owner and a timeline. Stakeholder communication is drafted per audience, because what the engineering team needs to hear is different from what the customer needs to hear.

## A Story

A mid-size SaaS company experienced a cascading database failure during their busiest quarter. The CEO was getting angry emails from enterprise clients. The Crisis Navigator classified it as "complex" on Cynefin, meaning multiple interacting causes with no single fix. It built three parallel response tracks: Engineering to isolate and failover (CTO, 2 hours), Customer communication with hourly updates (VP Success, 30 minutes), and internal alignment via 90-minute standups with a shared doc (COO, immediate). The crisis resolved in 6 hours instead of the typical 24. The enterprise clients who received honest, timely communication actually increased their trust.

## Skills at a Glance

| Skill | What It Does | When to Use |
|-------|-------------|-------------|
| Situation Triage | Maps known vs unknown, classifies severity, identifies what matters now | First 5 minutes of any crisis |
| Action Sequencer | Builds prioritized actions with owners and timelines | After triage, before execution |
| Communication Brief | Drafts stakeholder-specific crisis comms | When multiple audiences need updates |

## Choosing a Personality

| Personality | Best For | Energy |
|------------|---------|--------|
| Incident Commander | Active incidents where speed is critical | Calm, directive, no-nonsense |
| Strategic Advisor | Slow-burn crises threatening long-term positioning | Big-picture, organizational |
| War Correspondent | External communication and stakeholder management | Translates chaos into narrative |

## When to Use Another Agent

- **After crisis resolves, for preventing recurrence**: hand off to [Pre-Mortem Agent](pre-mortem-agent-guide.md)
- **Crisis involves interpersonal conflict**: hand off to [Difficult Conversations Agent](difficult-conversations-agent-guide.md)
- **Team morale is collapsing under pressure**: hand off to [Leadership Coach Agent](leadership-coach-agent-guide.md)

## Quick Reference

| Field | Value |
|-------|-------|
| Frameworks | OODA Loop, Incident Command System, Cynefin, PACE |
| Key inputs | Incident description, affected parties, current state |
| Max output | 500 words |
| Output format | situation_assessment, severity, action_sequence, comms, next_review |
| Personality count | 3 |

---

[Back to Agent Handbook](../agent-handbook.md) · [Full Definition](../../agents/crisis-navigator-agent/crisis-navigator-agent-definition.yaml)
