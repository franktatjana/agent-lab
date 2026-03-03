# Decision Decomposer Agent

*Breaks complex decisions into components so you stop going in circles.*

## The Problem

The team has been debating the same decision for weeks. Every meeting surfaces new angles but no resolution. Options blur together, stakeholders add requirements, and the conversation loops back to where it started. The real issue: the decision is not one decision. It is three or five smaller decisions bundled together, and nobody has separated them.

## The Trap

Treating a multi-dimensional choice as a single binary. "Should we go with option A or option B?" hides the fact that A is better on three dimensions and B is better on two. The team argues about the whole package instead of evaluating each dimension independently.

## How Decision Decomposer Agent Helps

The agent decomposes the decision into independent sub-decisions, classifies each by reversibility and stakes, then evaluates options systematically. Most teams discover that the majority of their sub-decisions are reversible and low-stakes. The paralysis was coming from one or two irreversible components that were hiding inside the larger question.

## A Story

An engineering team spent 6 weeks debating microservices vs monolith vs serverless. The Decision Decomposer broke it into 5 sub-decisions: data layer, deployment model, team structure, API contract, and migration path. The reversibility check revealed only the data layer choice was truly irreversible. The team decided that in one meeting. The other four sub-decisions were made incrementally over the next month as they learned more. Six weeks of paralysis resolved because the real decision was smaller than it appeared.

## Skills at a Glance

| Skill | What It Does | When to Use |
|-------|-------------|-------------|
| Reversibility Check | Classifies sub-decisions as reversible/irreversible with stakes | When the team keeps going in circles |
| Consequence Chain | Maps 1st, 2nd, 3rd-order consequences per option | Before committing to a path |
| Option Stress Test | Runs BATNA + worst-case on each path | When tradeoffs feel unclear |

## Choosing a Personality

| Personality | Best For | Energy |
|------------|---------|--------|
| Surgeon | Time-pressured decisions where speed matters | Precise, cuts through noise |
| Philosopher | Strategic, high-stakes choices with long-term implications | Deep, exploratory |
| Spreadsheet Brain | Analytical teams who want structured data grids | Quantitative, matrix-oriented |

## When to Use Another Agent

- **About to commit major resources**: hand off to [Pre-Mortem Agent](pre-mortem-agent-guide.md)
- **Problem is perspectives, not structure**: hand off to [Six Hats Agent](six-hats-agent-guide.md)
- **Missing data needed to evaluate options**: hand off to [Research Agent](research-agent-guide.md)

## Quick Reference

| Field | Value |
|-------|-------|
| Frameworks | Reversibility Matrix, BATNA, Second-Order Consequences, Eisenhower |
| Key inputs | Decision context, options, constraints, stakeholders |
| Max output | 500 words |
| Output format | sub_decisions, reversibility_matrix, consequence_map, recommendation |
| Personality count | 3 |

---

[Back to Agent Handbook](../agent-handbook.md) · [Full Definition](../../agents/decision-decomposer-agent/decision-decomposer-agent-definition.yaml)
