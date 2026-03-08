# Synthesize Picture

Combine the signal inventory and narrative map into a coherent situation assessment. This is where sensemaking moves from collection to synthesis: constructing a picture that is more complete than any individual stakeholder's view while being honest about what remains uncertain.

## When to Use

After signals have been gathered and narratives have been mapped. This is the capstone prompt in the clarify-situation skill. It takes the raw material (organized signals and mapped narratives) and produces a situation assessment that a team can act on. The assessment does not claim certainty. It names what is clear, what is contested, and what remains unknown.

## Prompt

You have a signal inventory and a narrative map. Your job is to synthesize them into a coherent situation assessment that tells the team what's actually happening, not what any single stakeholder believes is happening.

**1. The Coherent Picture**
Construct a 3-5 sentence situation assessment that:
- Integrates the strongest signals from across the narrative map
- Names the core dynamic driving the situation (not just the symptoms)
- Acknowledges where uncertainty remains and what it depends on
- Distinguishes between what is known, what is contested, and what is unknown

The coherent picture is not the average of all narratives. It is a new synthesis that may draw more from some narratives than others based on signal strength, evidence quality, and explanatory power. Be explicit about why some signals are weighted more heavily.

**2. Pattern Recognition**
Look for patterns that only become visible when you hold all the narratives together:
- **Convergence patterns**: where multiple independent signals point the same direction across different narratives
- **Escalation patterns**: where a dynamic is getting stronger over time and the narratives have not caught up
- **Misattribution patterns**: where stakeholders are correctly identifying symptoms but incorrectly identifying causes
- **Structural patterns**: where the situation reflects organizational structure (silos, incentives, information flows) rather than the content the narratives focus on

Patterns that span narratives are the highest-value findings because no single stakeholder can see them.

**3. Uncertainty Inventory**
For each element of the assessment, state the confidence level:
- **High confidence**: multiple independent signals converge, evidence is primary, pattern is well-established
- **Medium confidence**: signals are suggestive but not conclusive, some narratives contradict, evidence is mixed
- **Low confidence**: limited signals, high dependence on interpretation, could look different with new data

The uncertainty inventory is as valuable as the assessment itself. Knowing what you do not know prevents false confidence.

**4. Domain Indicator**
Based on the synthesis, provide an initial signal for domain classification:
- Does this situation have clear cause-and-effect relationships? (Possibly clear or complicated)
- Are there multiple interacting factors where outcomes are unpredictable? (Possibly complex)
- Is the situation moving faster than analysis can keep up? (Possibly chaotic)

Do not classify definitively here. That is the classify-cynefin prompt's job. Provide the indicator so the next step has a starting point.

Deliver the assessment in 3-5 sentences of coherent prose, followed by the pattern recognition, uncertainty inventory, and domain indicator as structured output.

## Tips

- The assessment should surprise at least one stakeholder. If every stakeholder reads it and says "yes, that's what I thought," you have produced an average, not a synthesis.
- Weight primary observations over interpretations, recent signals over stale ones, and independent signals over correlated ones. Two independent sources saying the same thing is stronger than five reports that all trace back to the same original source.
- Name the confidence level honestly. An assessment stated with false precision is worse than one that admits uncertainty, because false precision stops the team from seeking additional information.
- The domain indicator is a hypothesis, not a conclusion. It sets up the next step. If you find yourself confident about the domain at this stage, check whether you are bringing a pre-existing framework bias to the synthesis.
