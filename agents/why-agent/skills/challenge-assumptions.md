# Challenge Assumptions

Socratic questioning workflow to surface and examine hidden beliefs.

## Workflow

1. **Collect statements**: Gather key assertions about the problem
2. **Identify assumptions**: For each statement, find what's being taken for granted
3. **Challenge**: Use `challenge-assumption` to question each assumption
4. **Explore alternatives**: Consider what might be true instead
5. **Test**: Determine how assumptions could be verified or disproven
6. **Update understanding**: Revise problem framing based on insights

## Inputs

```yaml
problem: string           # The problem being analyzed
statements: list          # Key statements or beliefs to examine
context: string           # Background information
```

## Outputs

```yaml
assumptions_examined:
  - statement: string
    assumption: string
    challenge_question: string
    alternative: string
    verdict: confirmed | questioned | disproven
    evidence: string
insights:
  - insight: string
    impact: string
revised_problem: string   # Reframed problem if assumptions changed understanding
```

## Prompts Used

- [challenge-assumption](../prompts/challenge-assumption.md): Surface and question assumptions

## Types of Assumptions to Find

**Causal assumptions:**
- "X always leads to Y"
- "If we do X, Y will happen"
- Challenge: Has X ever not led to Y? What else might cause Y?

**Necessity assumptions:**
- "We have to do X"
- "There's no other way"
- Challenge: What would happen if we didn't? Who says we have to?

**Impossibility assumptions:**
- "We can't do X"
- "That would never work here"
- Challenge: Has anyone tried? What specifically prevents it?

**Identity assumptions:**
- "That's just how it works"
- "That's who we are"
- Challenge: Has it always been this way? Could it be different?

**Temporal assumptions:**
- "It's always been this way"
- "It will always be this way"
- Challenge: When did this start? What could change it?

## Socratic Question Types

1. **Clarification**: "What do you mean by...?"
2. **Probing assumptions**: "What are you assuming when you say...?"
3. **Probing evidence**: "How do you know this is true?"
4. **Exploring alternatives**: "What's another way to look at this?"
5. **Examining consequences**: "What would happen if...?"
6. **Meta-questions**: "Why do you think I asked that question?"

## Example

```yaml
problem: "We can't hire fast enough"

statements:
  - "We need senior engineers only"
  - "Our interview process takes 6 weeks"
  - "We can't lower our hiring bar"

assumptions_examined:
  - statement: "We need senior engineers only"
    assumption: "Junior engineers can't contribute meaningfully"
    challenge_question: "What would a junior engineer need to be productive here?"
    alternative: "With good mentorship, juniors could handle defined scope"
    verdict: questioned
    evidence: "Other teams successfully onboard juniors with mentorship programs"

  - statement: "Our interview process takes 6 weeks"
    assumption: "All steps in the process are necessary"
    challenge_question: "Which steps actually predict job success?"
    alternative: "Some steps may be redundant or parallelizable"
    verdict: questioned
    evidence: "No data on which interview stages correlate with performance"

  - statement: "We can't lower our hiring bar"
    assumption: "Current bar is correctly calibrated"
    challenge_question: "How do we know our bar is at the right level?"
    alternative: "Bar might be higher than necessary for the work"
    verdict: questioned
    evidence: "No recent analysis of bar vs. actual job requirements"

insights:
  - insight: "Hiring bar hasn't been validated against actual job needs"
    impact: "May be rejecting capable candidates unnecessarily"
  - insight: "Interview process was designed for different scale"
    impact: "Optimized for thoroughness, not speed"

revised_problem: "Our hiring process is designed for a different context and hasn't been updated for current needs"
```
