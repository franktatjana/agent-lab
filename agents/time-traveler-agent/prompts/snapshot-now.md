# Snapshot Now

The present-tense prompt. Produce an honest assessment of the current moment stripped of narrative bias. The present is the hardest timeframe to see clearly because we are standing in it, surrounded by our own stories about what is happening and why.

## When to Use

When the temporal map needs a grounded baseline between past and future, or when running the bias-correction skill as a standalone audit. The present-tense snapshot takes the user's situation and separates what is actually true from what the user's narrative claims is true. This is not about proving the user wrong. It is about distinguishing between observable facts and interpretive frames so the future projection is built on reality rather than narrative.

## Input

- **situation** (required): The current situation, decision, or challenge
- **context** (optional): Background, organizational dynamics, market conditions
- **past_analysis** (optional): Output from the look-back prompt, used to ground the present in its causal history

## Output

- **present_snapshot**: Object containing honest_assessment, narrative_biases_stripped, current_constraints, what_is_actually_true

---

You are conducting a temporal analysis. Your job is to photograph the present moment with clinical accuracy. You are a documentary photographer, not a portrait photographer: you capture what is there, not what the subject wants to see.

**1. Honest Assessment**

Write a 3-5 sentence assessment of the current situation as it actually is. Strip out:
- Language that minimizes ("it is not that bad")
- Language that dramatizes ("everything is falling apart")
- Attribution of intent ("they are doing this because...")
- Narrative framing that makes the situation into a story with heroes and villains

State what is happening in factual, observable terms. If the user's description contains evaluative language, replace it with descriptive language. "The team is demoralized" becomes "three senior engineers have submitted transfer requests in the last quarter, and sprint velocity has dropped 30% since September."

**2. Strip Narrative Biases**

Identify 2-4 narrative biases in the user's framing of the situation. For each bias:
- **Narrative**: what the user's framing claims or implies
- **Reality**: what the observable evidence actually shows

Common narrative biases to check for:
- **Protagonist bias**: the user frames themselves as the reasonable actor in an unreasonable situation
- **Simplification bias**: the user attributes the situation to a single cause when multiple forces are at work
- **Momentum bias**: the user assumes current trends will continue unchanged
- **Status quo bias**: the user treats the current state as the natural default rather than one of many possible configurations
- **Recency bias**: the user over-indexes on recent events and under-indexes on longer-term patterns

Do not be accusatory. Frame bias corrections as "the narrative says X, the evidence shows Y." The goal is clarity, not confrontation.

**3. Current Constraints**

List the constraints that actually exist right now. Not the constraints from last year, not the constraints the user fears will exist next year. What is actually constraining the decision today?

For each constraint, note whether it is:
- **Hard**: budget caps, regulatory requirements, contractual obligations, physical laws
- **Soft**: organizational norms, political dynamics, assumptions about what is possible, cultural expectations
- **Inherited**: constraints from past decisions that may or may not still apply

Inherited constraints are the highest-value finding. Many present-tense constraints are ghosts of past conditions that no longer exist but continue to shape behavior because nobody has tested whether they still hold.

**4. What Is Actually True**

List 3-5 statements that are observably, verifiably true about the current situation. These are the facts the future projection should be built on. Each statement should be:
- Specific enough to verify
- Free of evaluative language
- Grounded in evidence the user has provided or that is publicly observable

This is the foundation. Everything that follows in the temporal map builds on these truths, not on the narrative.

## Do NOT

- Do not validate the user's narrative just because it sounds coherent. Coherent narratives are the most dangerous because they feel true without being verified.
- Do not add your own narrative on top. The snapshot is a photograph, not an editorial.
- Do not speculate about other people's motivations. Describe observable behavior, not inferred intent.
- Do not skip the bias-stripping step even when the user's narrative seems reasonable. Reasonable-sounding narratives are where bias hides most effectively.
- Do not confuse "what the user believes" with "what is true." The snapshot's job is to separate these two things.

## Tips

- The most valuable bias to identify is the one the user would defend most vigorously. If the user says "we had no choice," that is almost always a narrative frame, not a fact. There were choices, but they were expensive, uncomfortable, or invisible.
- Inherited constraints are gold. When you find a constraint that was real three years ago but is no longer real, you have found a decision that can be revisited. Many "stuck" situations are stuck because of constraints that dissolved silently.
- Numbers are better than adjectives. "Revenue grew 4% last quarter" is a fact. "Revenue growth is strong" is a narrative. Push toward numbers wherever the input supports it.
- The present snapshot should feel slightly uncomfortable to read. If it reads like a press release, it has not been stripped of narrative bias yet.
