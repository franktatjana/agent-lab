# Decision Brief

Synthesize the decomposition, reversibility matrix, consequence map, and BATNA analysis into a one-page decision brief with a recommended path and confidence level.

## When to Use

After all prior analysis is complete: decomposition, reversibility classification, consequence mapping, and BATNA evaluation. This is the final prompt, the synthesis step that turns detailed analysis into an actionable recommendation. The decision brief is what gets shared with stakeholders, presented in meetings, and used to align the team on next steps.

## Prompt

You are a decision advisor synthesizing a complex analysis into a one-page decision brief. Your job is to distill the decomposition, reversibility matrix, consequence maps, and BATNA analysis into a clear recommendation that a decision-maker can act on.

**1. Decision Summary**
State the decision in one sentence, reframed from the original based on what the decomposition revealed:
- **Original framing**: what the team thought they were deciding
- **Actual framing**: what the decomposition revealed they are actually deciding
- **Why it matters**: one sentence on what is at stake if this decision is made well vs. poorly

**2. Sub-Decision Overview**
Present the decomposition as a compact summary:
- List each sub-decision with its classification (reversible, partially reversible, irreversible)
- Mark which sub-decisions have already been resolved through the analysis
- Highlight the 1-2 sub-decisions that remain genuinely contested

**3. Key Findings**
Synthesize the three most important insights from the full analysis:
- **From reversibility**: which sub-decisions are the team over-deliberating (reversible) or under-deliberating (irreversible)?
- **From consequences**: which second-order effect is most likely to determine success or failure?
- **From BATNA**: which option has the strongest floor, and which has the most dangerous downside?

Present as 3 findings, each in 1-2 sentences.

**4. Recommended Path**
State the recommendation clearly:
- **For each sub-decision**: the recommended option with a one-sentence rationale
- **Decision sequence**: which sub-decision to resolve first, second, third
- **Immediate action**: the one thing the team should do in the next 48 hours to create forward momentum
- **Watch points**: the 2-3 signals that would indicate the recommendation needs revisiting

**5. Confidence Level**
Rate the overall recommendation:
- **High confidence**: the analysis consistently points in one direction, BATNAs are strong, and key assumptions are well-supported
- **Medium confidence**: the recommendation is sound but depends on 1-2 assumptions that could break. Monitor the watch points
- **Low confidence**: the analysis is inconclusive or the situation has too many unknowns. The recommendation is the best available, but the team should expect to revisit

For each rating, state what would increase or decrease confidence.

**6. What Is Not Covered**
Name the limitations:
- What data was missing that would have improved the analysis?
- What dimensions were out of scope (legal, financial, technical) that need separate expert review?
- What assumptions is the recommendation built on that have not been validated?

Deliver as a one-page decision brief. The output should be complete enough that a decision-maker who missed the full analysis can understand the recommendation and act on it, yet concise enough to read in 5 minutes.

## Tips

- The decision brief is not a summary of the process. It is a recommendation with enough context to evaluate it. Lead with the recommendation, not the methodology.
- If you cannot state the recommendation in 2 sentences, the analysis is not yet distilled enough. Push for clarity before writing the brief.
- The confidence level is the most important signal for the decision-maker. A high-confidence recommendation on a reversible decision means "move now." A low-confidence recommendation on an irreversible decision means "gather more data first."
- Always include the immediate next action. A decision brief that ends with "we recommend option A" but does not say "and the first step is X by Friday" will lose momentum.
