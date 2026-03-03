# Storytelling Agent

*Crafts compelling narratives for professional contexts. Transforms facts, data, and experiences into stories that move people to action.*

## The Problem

You have to present Q3 results. The numbers are bad: six weeks late, $120K over budget, activation metrics down. Your instinct is to build a 30-slide deck that explains each number in context, hoping the room will see that the failure was not your fault. You already know this will not work. The room will hear "excuses" no matter how logical the explanation.

## The Trap

When presenting bad news, most people default to defense mode: explain each metric, provide context for each miss, frame the narrative as "here is why it is not as bad as it looks." This approach fails because it accepts the audience's frame (failure) and argues within it. The more you explain, the more defensive you sound, and the less the audience hears.

The opposite trap is equally dangerous: spinning bad news into false positivity. Audiences see through artificial optimism, and it destroys credibility.

## How Storytelling Agent Helps

This agent finds the story hidden inside your facts. Not spin, not defense, but genuine narrative architecture that changes how an audience processes the same information. Every professional situation, good or bad, contains a story structure: something was attempted, something happened, something was learned, something changed.

The critical skill: choosing which story element to lead with. Leading with bad numbers creates a judgment frame. Leading with a diagnostic question ("why did a team that shipped late produce the highest-rated feature in two years?") creates a curiosity frame. Same facts, different opening, entirely different room dynamic.

## A Story

A product director must present Q3 results: six weeks late, $120K over budget, activation metrics below target. His first draft is a 30-slide defense explaining each miss. He knows the room will tune out.

Using the Storytelling Agent's data-storytelling framework, he restructures entirely. He opens with the worst numbers, not buried at the end, right at the top. Then he asks the question the room is not expecting: "Why did a team that shipped late and over budget produce a feature that beta users rated higher than anything we have launched in two years?"

The room shifts from judgment to curiosity. He walks through the diagnostic: the team tested the wrong cohort first (hence the timeline miss), dependencies were mapped incompletely (hence the budget), and the primary activation metric measured first-login, not sustained usage (hence the misleading numbers). Each "failure" becomes a lesson with a specific fix.

He closes with Phase 2 proposal that applies each lesson. The room approves the budget. The pivot: treating the numbers as diagnosis rather than postmortem.

## Step-by-Step

1. **Share your raw material**: Facts, data, experiences, or the situation you need to communicate
2. **Identify the audience**: Who needs to hear this? What do they care about? What will they resist?
3. **Define the context**: Presentation, pitch, email, all-hands, 1:1? Medium shapes the narrative
4. **Receive the narrative framework**: The agent selects the right story structure for your situation
5. **Get the crafted story**: Complete narrative with hook, tension, resolution, and transformation, plus delivery notes

## Skills at a Glance

| Skill | What It Does | When to Use |
|-------|-------------|-------------|
| Craft Narrative | Takes raw material and builds a complete narrative arc | When you have facts or experiences that need story structure |
| Pitch Story | Crafts tight, persuasive stories for proposals and elevator moments | When you have 2-5 minutes to make someone care |
| Data Storytelling | Turns metrics and analytics into narratives people remember and act on | When numbers alone are not landing with your audience |
| Origin Story | Crafts personal or company origin stories for branding and identity | When you need to explain who you are and why you exist |

## Choosing a Personality

| Personality | Best For | Energy |
|------------|---------|--------|
| Narrator | General storytelling across contexts | Versatile, balanced, adapts to situation |
| Business | Corporate contexts: board presentations, proposals, data-driven narratives | Evidence-first, ROI-aware, builds credibility |
| Inspirational | Keynotes, rallying teams, motivational moments | High energy, visionary, moves people emotionally |
| Coach | Teaching storytelling skills and explaining why techniques work | Educational, patient, builds the muscle |

## When to Use Another Agent

Storytelling shapes communication, it does not solve every challenge. Escalate when:

- **Sensitive personal stories** without consent: redirect to ethical communication practices
- **High-stakes public communication**: consider professional speechwriters for CEO keynotes, crisis communications
- **Confidential or legally protected information**: do not story-shape what should not be shared
- **Designed to mislead**: the agent refuses to craft narratives that distort facts
- **Audience decoding needed first**: hand off to [Question Decoder Agent](question-decoder-agent-guide.md) when you need to understand what the audience actually needs before shaping the narrative

## Quick Reference

| Field | Value |
|-------|-------|
| Frameworks | Hero's Journey, Pixar Story Spine, STAR, Data Storytelling, Brand Narrative |
| Key inputs | topic (required), audience (required), context (required), raw_material or data |
| Max output | 300 words |
| Output format | narrative_framework, story_elements (hook/tension/resolution/transformation), narrative (max 150 words), delivery_notes (max 3) |
| Core question | What changed? Why does it matter? Who cares? |
| Personality count | 4 (Narrator, Business, Inspirational, Coach) |

---

[Back to Agent Handbook](../agent-handbook.md) · [Agent Definition](../../agents/storytelling-agent/storytelling-agent-definition.yaml) · [Full Specification](../../agents/storytelling-agent/storytelling-agent.md)
