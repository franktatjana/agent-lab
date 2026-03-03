# Question Decoder Agent

*Decodes questions before answering them. Analyzes who is asking, why they are asking, and what they need to hear, then architects the right response.*

## The Problem

A board member asks: "What is your confidence level in hitting the Q3 launch date?" You have a 22-slide deck with Gantt charts, dependency trackers, and sprint velocity data. Your instinct is to pull up the timeline and walk through the execution details. But the board member's eyes glaze over by slide three, and the CEO looks tense.

## The Trap

When asked a question, most professionals answer the literal question. "What is your confidence?" triggers operational details about timelines, dependencies, and risk mitigation. This is technically accurate and completely wrong, because the literal question is rarely the real question.

The board member, who sits on a competitor's board, is not asking about project management. She is asking: "Should I be worried about competitive positioning?" Same words, entirely different altitude. Answering at the wrong altitude is worse than not answering at all, because it signals you do not understand what matters to the asker.

## How Question Decoder Agent Helps

This agent applies a three-lens decoding framework to every question before crafting a response:

**Who is asking**: Role, expertise level, decision-making power, communication preferences. A board member and an engineer need fundamentally different answers to the same question.

**Why they are asking**: The trigger behind the question, the real concern underneath. What prompted this question right now? What worry does it represent?

**What they need to hear**: Information, reassurance, ammunition for their own stakeholders, or validation of a decision they have already made.

Once decoded, the agent architects a response matched to the asker's altitude, format preference, and decision context. The same facts, delivered at the right level, land entirely differently.

## A Story

Tom, VP of Engineering, prepares his Q3 launch update for the board. During Q&A, a new board member asks about confidence in the launch timeline. Tom's preparation was exhaustive: 22 slides of operational detail.

Before reaching for the Gantt chart, Tom pauses to decode. Who is asking? A board member from a competitor's space. Why? Not operational curiosity, she wants to know if the competitive window is at risk. What does she need? Strategic reassurance, not project management details.

His answer takes 30 seconds: "High confidence. The features that differentiate us from competitors are furthest along. Our biggest dependency is the payment processor, and we have a backup." Board member smiles, CEO relaxes. The Gantt chart stays in the appendix.

Same facts. Right altitude. Completely different impact.

## Step-by-Step

1. **Share the question**: What were you asked, exactly?
2. **Identify who is asking**: Role, expertise, what they care about, how they prefer to receive information
3. **Provide context**: What triggered this question? What is the surrounding situation?
4. **Receive the decode**: The agent profiles the audience, identifies real intent, and architects the response structure
5. **Get the drafted response**: A ready-to-deliver answer matched to the asker's altitude and needs

## Skills at a Glance

| Skill | What It Does | When to Use |
|-------|-------------|-------------|
| Decode Question | Full three-lens analysis: who, why, what | Any time the real question feels different from the literal question |
| Architect Answer | Structures the optimal response for decoded question and target audience | When you know what is being asked and need the right delivery format |
| Reframe for Audience | Takes an existing answer and reshapes it for a different audience | When you need to deliver the same information to different stakeholders |
| Anticipate Follow-ups | Predicts and prepares for follow-up questions | Before high-stakes presentations, board meetings, or negotiations |

## Choosing a Personality

| Personality | Best For | Energy |
|------------|---------|--------|
| Strategic | Default mode, optimizing for maximum impact and influence | Analytical, purposeful, focused on outcome |
| Empathetic | Emotional or sensitive situations where being heard matters more than being precise | Warm, validates feelings first, then architects response |
| Coach | Teaching the question-decoding skill as a transferable capability | Patient, educational, builds the muscle |
| Direct | Fast, no-frills audience analysis when time is short | Efficient, actionable, skips the theory |

## When to Use Another Agent

Question decoding is about response architecture, not every communication challenge. Escalate when:

- **Legal, HR, or compliance implications**: professional channels needed, not response optimization
- **Crafting deceptive answers**: the agent refuses to help architect misleading responses
- **Cross-cultural communication**: hand off to [Culture Agent](culture-agent-guide.md) when cultural norms affect how questions should be answered
- **Difficult interpersonal conversation**: hand off to [Difficult Conversations Agent](difficult-conversations-agent-guide.md) when the challenge is emotional, not informational
- **Professional mediation needed**: when the relationship, not the response, needs attention

## Quick Reference

| Field | Value |
|-------|-------|
| Frameworks | Three-Lens Decoding (Who/Why/What), Audience Profiling, Response Architecture |
| Key inputs | question (required), who_is_asking (required), context (required) |
| Max output | 250 words |
| Output format | audience_profile, decoded_intent, answer_architecture, drafted_response (max 5 sentences) |
| Personality count | 4 (Strategic, Empathetic, Coach, Direct) |

---

[Back to Agent Handbook](../agent-handbook.md) · [Agent Definition](../../agents/question-decoder-agent/question-decoder-agent-definition.yaml) · [Full Specification](../../agents/question-decoder-agent/question-decoder-agent.md)
