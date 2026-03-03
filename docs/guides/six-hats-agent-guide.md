# Six Hats Agent

*Guides structured parallel thinking using de Bono's Six Thinking Hats, helping individuals and teams explore decisions from multiple perspectives systematically.*

## The Problem

Your team is debating a strategic pivot. The optimists dominate the conversation with enthusiasm. The skeptics get labeled as negative. The person with a creative alternative stays quiet because the room has already polarized. After an hour of argument, you "decide" to keep discussing next week. The real problem: everyone is thinking in different modes simultaneously, and no one realizes it.

## The Trap

Unstructured discussion mixes thinking modes. One person presents data while another reacts emotionally while a third shoots down ideas while a fourth brainstorms alternatives. This is not debate, it is chaos wearing a meeting's clothes. The loudest voice or the highest-ranking person wins, not the best thinking.

The deeper trap: dismissing emotion as irrational. Red Hat thinking (feelings, intuition, gut reactions) often carries critical information that data-only analysis misses. But in most meetings, saying "I have a bad feeling about this" gets dismissed as unscientific.

## How Six Hats Agent Helps

This agent forces parallel thinking: everyone wears the same hat at the same time. When the room is doing White Hat (facts and data), everyone focuses on what is known and unknown. When the room moves to Red Hat (feelings), everyone shares their gut reaction without justification. When it is Black Hat (risks), even the optimists look for problems. When it is Green Hat (creativity), even the skeptics generate alternatives.

The structure prevents the common failure modes: arguments between optimists and pessimists, creative ideas killed too early, emotions dismissed as invalid, and decisions made without examining what is actually known versus assumed.

## A Story

A SaaS founder with declining growth faces the hardest strategic question: pivot to a new market or double down on the current one. His leadership team is split, and every meeting turns into optimists versus pessimists.

Running a full hat session reveals what unstructured debate could not:

- **White Hat** (facts): churn is accelerating, but retained customers have 3x higher satisfaction than industry average. The data tells a nuanced story, not a simple decline narrative
- **Red Hat** (feelings): the founder admits emotional attachment to the original market. Three team members share they have been worried for months but did not want to "be negative"
- **Black Hat** (risks): pivoting means abandoning the only customers who love the product. The execution risk is real
- **Yellow Hat** (benefits): the retained customer segment could be the seed of a new positioning
- **Green Hat** (creativity): a third option emerges that no one had considered: partner with a complementary platform instead of going solo into a new market
- **Blue Hat** (synthesis): the emotional attachment (Red Hat) was overriding the market signals (White Hat), and the binary framing (pivot vs. double down) was preventing creative alternatives (Green Hat)

The founder chose the partnership path. The decision was not better because of more data. It was better because different thinking modes were separated, allowing each to contribute without drowning the others.

## Step-by-Step

1. **Define the topic or decision**: What are you trying to think through?
2. **Provide context**: Background, constraints, what you have already considered
3. **Choose the skill**: Full session (all hats), decision analysis, idea exploration, or risk assessment
4. **Walk through each hat**: The agent guides structured exploration through each perspective
5. **Receive synthesis**: Cross-hat insights, blind spots identified, and recommended next action

## Skills at a Glance

| Skill | What It Does | When to Use |
|-------|-------------|-------------|
| Full Hat Session | Systematic walk through all six hats | Comprehensive analysis of any topic or decision |
| Decision Analysis | Evaluates a decision from the most relevant perspectives | When you have options and need structured evaluation |
| Idea Exploration | Expands and evaluates creative possibilities | When you need to generate and assess new ideas |
| Risk Assessment | Systematic risk identification and mitigation planning | When you need to stress-test a plan or strategy |

## The Six Hats

| Hat | Focus | Question |
|-----|-------|----------|
| White | Facts and data | What do we know? What do we need to find out? |
| Red | Emotions and intuition | How does this feel? What is your gut reaction? |
| Black | Caution and risks | What could go wrong? What are the weaknesses? |
| Yellow | Benefits and value | What are the advantages? Why could this work? |
| Green | Creativity and alternatives | What else is possible? What if we tried...? |
| Blue | Process and synthesis | What have we learned? What should we do next? |

## Choosing a Personality

| Personality | Best For | Energy |
|------------|---------|--------|
| Default | General thinking sessions for individuals or small groups | Balanced, structured, methodical |
| Facilitator | Team workshops and group decisions with multiple stakeholders | Inclusive, manages dynamics, ensures all voices heard |
| Executive | Quick decisions when time is limited and output must be actionable | Compressed, decisive, focused on key insights |
| Coach | Teaching the method and building structured thinking habits | Educational, patient, explains why each hat matters |

## When to Use Another Agent

Structured parallel thinking covers many analytical needs, but not all. Escalate when:

- **Deep research** needed on specific facts: hand off to [Research Agent](research-agent-guide.md) when White Hat reveals significant knowledge gaps
- **Root cause investigation**: hand off to [Why Agent](why-agent-guide.md) when the real issue is deeper than a decision
- **Competitive simulation**: hand off to [Wargaming Agent](wargaming-agent-guide.md) when you need adversarial testing, not just multi-perspective analysis
- **Stakeholder politics**: hand off to [Corporate Navigator Agent](corporate-navigator-agent-guide.md) when the decision context is political, not analytical
- **Clinical or therapeutic decisions**: redirect to domain professionals

## Quick Reference

| Field | Value |
|-------|-------|
| Frameworks | de Bono's Six Thinking Hats, Parallel Thinking |
| Key inputs | topic (required), context (required), current_thinking, constraints |
| Max output | 350 words |
| Output format | perspective_summary (one per hat), key_insights (top 3 cross-hat), recommended_action, blind_spots (max 2) |
| Personality count | 4 (Default, Facilitator, Executive, Coach) |

---

[Back to Agent Handbook](../agent-handbook.md) · [Agent Definition](../../agents/six-hats-agent/six-hats-agent-definition.yaml) · [Full Specification](../../agents/six-hats-agent/six-hats-agent.md)
