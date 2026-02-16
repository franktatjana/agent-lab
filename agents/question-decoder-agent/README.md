# Question Decoder Agent

Strategic question analysis. Decodes what people actually need to hear before you answer, ensuring your response matches the asker's real intent, not just their literal words.

## The Human Analogy

Think of the Question Decoder as that colleague who always knows exactly what to say, not because they know more, but because they understand what people actually need to hear. They've learned that the question "How's the project?" from a CEO means "Should I be worried?" while the same question from a peer means "What are you working on?"

This colleague pauses before answering. They read the room, consider who's asking, and shape their response to land. They don't know more facts than you do. They just decode the question first.

The agent is your question translator, not your speechwriter. It helps you understand what's really being asked and how to structure your answer. You provide the facts and make the call.

## Value Proposition

**For individual contributors:** Stop fumbling when leadership asks unexpected questions. Understand what your skip-level manager really wants to know when they ask about "team dynamics." Prepare for promotion conversations by anticipating what the committee actually evaluates.

**For managers:** Decode what your direct reports are really asking when they say "Can I get your thoughts on something?" Understand when a question from your VP is a test, a genuine inquiry, or a setup for a decision already made.

**For executives:** Anticipate board questions and prepare 90-second answers that address the real concern. Decode stakeholder questions in town halls to respond to the unspoken worry, not just the literal words.

**For consultants:** Read client questions as signals of what they're ready to hear. Reframe the same finding for technical teams, executives, and board members. Prepare for Q&A sessions by mapping each stakeholder's likely angle.

## How to Use

### Decode a question

```yaml
skill: "decode-question"
question: "My CTO asked 'What's the status of the platform rewrite?'"
who_is_asking: "CTO, technical, reports to CEO"
context: "Weekly engineering sync, asked in front of the team"
```

### Architect an answer

```yaml
skill: "architect-answer"
question: "How confident are we in the Q3 launch?"
who_is_asking: "Board member, non-technical, investor background"
facts: "On track but tight. Two critical dependencies. 80% confidence."
```

### Reframe for a different audience

```yaml
skill: "reframe-for-audience"
answer: "We're 80% confident on Q3. Two dependencies could slip: the vendor API integration and the security audit."
target_audience: "CEO presenting to board"
```

### Anticipate follow-ups

```yaml
skill: "anticipate-follow-ups"
question: "What's your confidence level in hitting the Q3 launch date?"
who_is_asking: "Board member, recently heard about competitor launch"
answer: "High confidence. We're ahead of competitor timelines with key differentiators."
```

## What's Possible

| Capability | Status | Notes |
|------------|--------|-------|
| Question decoding | ✅ Available | Three-lens analysis: who, why, what |
| Answer architecture | ✅ Available | Format, depth, framing optimization |
| Audience reframing | ✅ Available | Same facts, different audiences |
| Follow-up anticipation | ✅ Available | Predict and prepare |
| Multi-audience prep | 🔜 Planned | Same question decoded for 3+ audiences |
| Real-time coaching | 🔜 Planned | Live meeting question support |

## Multi-Agent Combinations

**Question Decoder → Writing:** Question Decoder provides audience profile and answer architecture; Writing Agent crafts polished prose.

**Research → Question Decoder → Communication:** Research provides facts; Question Decoder shapes for audience; Communication delivers.

**Question Decoder → Culture:** Question Decoder identifies intent; Culture Agent adapts for cross-cultural delivery.

## Case Study

**Board Question Decoded:** A VP of Engineering is presenting to the board. A board member asks about Q3 launch confidence. The VP's instinct is to give a detailed technical status update. The agent helps decode that the real question is about competitive positioning, not Gantt charts. The VP answers in 90 seconds, the board member is satisfied, and all three follow-up questions are anticipated correctly.

[Full case study](case-studies/board-question-decoded.md)

---

## Problem

Most answers fail not because they're wrong, but because they don't match what the person actually needs to hear. A detailed technical explanation to a CEO wastes their time. A high-level summary to an engineer insults their intelligence. The gap between what was asked and what was meant causes more communication failures than wrong information ever does.

## Goals

- Make the question behind the question visible before answering
- Help users match their answer's format, depth, and framing to the audience
- Build the skill of reading intent so users get better at it over time
- Provide actionable, specific answer structures, not generic advice

## Non-Goals

- Replace genuine relationship-building with formulaic responses
- Teach manipulation or deceptive framing
- Provide the "right" answer (facts are the user's responsibility)
- Serve as a therapy or conflict resolution tool

## Use Cases

- Preparing for board presentations and Q&A sessions
- Responding to unexpected questions from senior leadership
- Navigating skip-level conversations and performance reviews
- Adapting technical updates for non-technical stakeholders
- Preparing for job interviews and promotion committees

## Ideas

- Add organizational context mapping (who reports to whom, what each role cares about)
- Include industry-specific question patterns (VC due diligence, regulatory hearings, sales objections)
- Support for written vs. verbal delivery optimization
- Integration with calendar for pre-meeting question anticipation

## Roadmap

**Phase 1 (Current):** Core question decoding with three-lens framework and answer architecture

**Phase 2:** Add organizational context, industry-specific patterns, multi-audience preparation

**Phase 3:** Real-time meeting coaching, question pattern learning, delivery optimization

## Open Questions

- How to handle questions where the asker genuinely has no hidden intent?
- When does strategic framing cross into manipulation?
- How to decode questions from people the user has never met?

## Success Criteria

- Users report feeling more prepared for high-stakes conversations
- Decoded intents match what users later confirm the asker actually meant
- Answer architectures are specific to the audience, not generic templates
- No outputs that encourage deception or manipulation
