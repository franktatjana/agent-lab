# Correct Bias

The calibration prompt. Review the temporal analysis for cognitive biases that distort how humans perceive time, then synthesize the temporal insight that emerges from seeing all three timeframes together. This is the final prompt in the temporal-map flow and the validation step that ensures the analysis is not contaminated by the same biases it is trying to correct.

## When to Use

As the final step in the temporal-map flow, after look-back, snapshot-now, and project-forward have produced their outputs. Also used standalone in the bias-correction skill when a user wants an audit of their current decision narrative. The prompt checks for three specific temporal biases: hindsight bias (judging the past with present knowledge), present bias (overweighting current conditions relative to future consequences), and optimism bias (systematically underestimating costs and overestimating benefits).

## Input

- **past_analysis** (optional): Output from look-back
- **present_snapshot** (optional): Output from snapshot-now
- **future_inaction** (optional): Output from project-forward (inaction scenario)
- **future_action** (optional): Output from project-forward (action scenario)

At least one of these must be present. The prompt checks whichever timeframes are provided.

## Output

- **bias_corrections**: Object containing hindsight_bias, present_bias, optimism_bias (each with found, instances, corrections)
- **temporal_insight**: String, the key insight from seeing all timeframes together

---

You are conducting a temporal bias audit. Your job is to examine the temporal analysis for cognitive biases that distort how humans perceive and reason about time, then synthesize the temporal insight that only becomes visible when all three timeframes are seen together.

**1. Check for Hindsight Bias**

Review the past analysis for signs that past decisions are being evaluated with information that was not available at the time.

Indicators:
- Language like "they should have seen" or "it was obvious that"
- Past decisions described as mistakes when they were reasonable given the constraints
- Missing context about what information was available and what was not
- Absence of the constraints_then dimension

For each instance found:
- **Instance**: the specific hindsight bias detected
- **Correction**: how the past analysis should be reframed to evaluate the decision fairly

**2. Check for Present Bias**

Review the present snapshot and future scenarios for signs that current conditions are being overweighted relative to future consequences.

Indicators:
- Inaction consequences that are vague or abstract while action costs are specific and concrete
- Future scenarios that discount consequences beyond 1-2 years
- Current constraints treated as permanent when they may dissolve
- Emotional weight concentrated on near-term disruption rather than long-term trajectory
- The word "too" attached to action costs ("too expensive," "too disruptive") without comparing to inaction costs

For each instance found:
- **Instance**: the specific present bias detected
- **Correction**: how the temporal weighting should be adjusted

**3. Check for Optimism Bias**

Review the future action scenario for signs that benefits are systematically overestimated and costs underestimated.

Indicators:
- Action consequences that are mostly positive with few negative entries
- Timelines that assume above-average execution speed
- Second-order effects that are positive for action but negative for inaction (asymmetric optimism)
- Missing transition costs, implementation risks, or organizational friction
- Benefits described as certain while risks described as possible

For each instance found:
- **Instance**: the specific optimism bias detected
- **Correction**: how the action scenario should be recalibrated

**4. Synthesize the Temporal Insight**

This is the highest-value output. Write 2-4 sentences that capture the key insight that emerges only from seeing all three timeframes together. This insight should not be a summary of any single timeframe. It should be something that is invisible from the past alone, invisible from the present alone, and invisible from the future alone, but becomes visible when all three are connected.

Good temporal insights often take one of these forms:
- A pattern that repeats: "The same constraint that made X reasonable five years ago is creating Y now, and will create Z in five years unless the pattern is interrupted"
- A constraint that dissolved: "The reason for the current approach disappeared two years ago, but the approach persists because nobody re-examined it"
- A compounding asymmetry: "The cost of inaction compounds while the cost of action is fixed, so every month of delay increases the price of the eventual decision"
- A reframing: "What looks like a choice between A and B is actually a choice between acting now at cost X or acting later at cost 3X, because the option to choose is itself decaying"

The temporal insight should change how the user thinks about the decision, not just add information.

## Do NOT

- Do not flag biases that are not actually present. False positives undermine trust in the analysis.
- Do not turn the bias audit into a lecture on cognitive science. Identify the specific instance and provide the specific correction. Theory belongs in the references, not the output.
- Do not write a temporal insight that is just a summary of the three timeframes. "The past led to the present which shapes the future" is not an insight. An insight reveals something that was invisible from any single vantage point.
- Do not correct biases without evidence. Every correction must point to a specific instance in the analysis where the bias appears.
- Do not assume all three biases are present. Sometimes the analysis is clean. Report what you find, including finding nothing.

## Tips

- The most common hindsight bias is "they should have known." Replace it with "here is what was knowable, here is what was not." The gap between knowable and known is where the interesting analysis lives.
- Present bias is most visible in the asymmetric treatment of costs. If action costs are described with dollar amounts and timelines but inaction costs are described with adjectives ("gradual decline," "increasing pressure"), present bias is at work.
- Optimism bias in the action scenario often hides in the timeline. If the action scenario assumes full benefits within 12 months of a major change, check whether analogous changes in the user's domain typically produce results that quickly.
- The temporal insight is the sentence the user will remember. Spend time on it. A good temporal insight reframes the entire decision.
