# Wargaming Agent

*Runs competitive simulations using military wargaming methodology. Before committing to strategy, play it out against thinking opponents.*

## The Problem

You are about to launch into a new market. The financial model looks good, the board approved the budget, and the team is aligned. What could go wrong? The answer: everything your plan assumed competitors would not do. Your model assumed they would hold still while you moved. They will not.

## The Trap

Strategic planning typically treats the competitive environment as static. You model your moves, your costs, your timeline, but you assume competitors will continue doing what they are doing today. This is the most dangerous assumption in strategy, because every move you make changes the board. Your market entry triggers a competitive response. Your pricing change triggers counter-pricing. Your partnership announcement triggers a blocking alliance.

The second trap: optimism bias in strategy. When you build a plan, you naturally imagine the version where things work. The version where a competitor undercuts your pricing by 30% on launch day rarely makes it into the deck.

## How Wargaming Agent Helps

This agent applies military wargaming methodology to business strategy. The core principle: before committing resources, simulate the engagement against thinking opponents. Not forecasting (what will happen), but adversarial exploration (what could happen if the other side responds intelligently).

The agent structures wargames with multiple players (your company, competitors, regulators, market forces), runs multi-round simulations where each player responds to the others' moves, and identifies the Schwerpunkt, the decisive point where concentrated effort produces the greatest result.

The after-action review is mandatory, not optional. Every simulation produces specific lessons: which assumptions were wrong, which competitor responses were underestimated, which moves created vulnerability. These lessons feed directly into strategy adjustment.

## A Story

Rachel is the VP of Digital Lending at a mid-size bank. She has board approval and $50M to launch an SMB lending product. Financial modeling is thorough: break-even at 18 months, $2.1B portfolio by year three. The team is excited.

Six months post-launch: $1.8M monthly burn against $340K revenue. What happened?

Retrospective wargaming reveals three moves Rachel's plan did not account for:

- **FinanceFirst** (competitor) cut their SMB rates by 30% the week Rachel launched. Not irrational, they had excess capacity and a lower cost of capital. Perfectly predictable if simulated
- **OCC** (regulator) announced enhanced capital requirements for digital-first lenders mid-launch. Not surprising given regulatory trends, but not modeled
- **Enterprise clients** churned when their account managers were reassigned to the new product. The resource reallocation created collateral damage in the core business

Had Rachel wargamed before committing, the simulation would have forced reckoning with these responses. The Schwerpunkt analysis reveals her real advantage is not making loans, it is data infrastructure. She pivots to a platform model: 14 lending partners originate $280M through her technology. Same $50M allocation, completely different strategic model.

The wargame's value was not prediction. It was forcing the question: "What will they do when we do this?"

## Step-by-Step

1. **Define the strategic question**: What are you trying to decide or test?
2. **Identify competitors**: Who are the other players? Include competitors, regulators, and market forces
3. **Share your resources and context**: What do you have? What constraints exist?
4. **Run the simulation**: The agent structures the wargame, plays competitors from their actual incentives, and runs multiple rounds
5. **Find the Schwerpunkt**: Where should you concentrate effort for maximum impact?
6. **After-action review**: What assumptions were wrong? What needs to change?

## Skills at a Glance

| Skill | What It Does | When to Use |
|-------|-------------|-------------|
| Design Wargame | Structures and runs a full competitive simulation | Before committing significant resources to a strategy |
| Play Competitor | Role-plays a specific competitor's response based on their actual incentives and capabilities | When you need to understand one competitor deeply |
| After-Action Review | Analyzes simulation results, extracts lessons, adjusts strategy | After every wargame (mandatory, never skip) |
| Identify Schwerpunkt | Finds the decisive point for concentrated effort | When resources are limited and you need to pick your battle |
| Tabletop Exercise | Walks through a scenario to test response plans | When you need to stress-test a plan without full simulation |

## Choosing a Personality

| Personality | Best For | Energy |
|------------|---------|--------|
| Strategist | Calm, long-view, whole-board assessment and force positioning | Measured, sees patterns, thinks in systems |
| Field Commander | Tactical, direct, action-oriented briefings with clear next moves | Decisive, operational, 72-hour action window |
| Red Teamer | Adversarial, provocative, argues against your strategy deliberately | Challenging, finds weaknesses, plays devil's advocate |

## When to Use Another Agent

Wargaming tests strategy against adversarial response, it does not handle every strategic need. Escalate when:

- **Stakeholder and political dynamics**: hand off to [Corporate Navigator Agent](corporate-navigator-agent-guide.md) when internal politics matter more than competitive dynamics
- **Root cause investigation**: hand off to [Why Agent](why-agent-guide.md) when you need to understand why something failed, not just simulate alternatives
- **Multi-perspective analysis** without adversarial framing: hand off to [Six Hats Agent](six-hats-agent-guide.md) for structured thinking without competitive simulation
- **Legal or regulatory violations** uncovered during simulation: escalate to legal counsel
- **Competitive intelligence crossing ethical lines**: the agent will not support intelligence gathering that violates ethics or law

## Quick Reference

| Field | Value |
|-------|-------|
| Frameworks | Kriegsspiel, Business Wargaming (Gilad), Red Team/Blue Team, OODA Loop (Boyd), Schwerpunkt, Tabletop Exercise |
| Key inputs | strategic_question (required), competitors (required), your_resources, market_context, time_horizon |
| Max output | 400 words |
| Output format | wargame_setup, your_move, competitor_response (per competitor), counter_move, schwerpunkt, after_action |
| Core principle | Every strategic move provokes a response. Simulate before committing. |
| Personality count | 3 (Strategist, Field Commander, Red Teamer) |

---

[Back to Agent Handbook](../agent-handbook.md) · [Agent Definition](../../agents/wargaming-agent/wargaming-agent-definition.yaml) · [Full Specification](../../agents/wargaming-agent/wargaming-agent.md)
