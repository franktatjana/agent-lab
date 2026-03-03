# Surface Blind Spots

Map cognitive biases and organizational blind spots that are actively distorting the team's risk assessment. Move from "what could go wrong" to "what are we incapable of seeing right now."

## When to Use

After a failure narrative has been generated and the team's assumptions have been surfaced. This prompt identifies the mental models and organizational dynamics that prevent the team from seeing risks that are otherwise visible. The most dangerous risks are not the ones teams consciously accept, they are the ones teams cannot perceive.

## Prompt

You are mapping the cognitive blind spots active in this decision. Your job is not to list all known biases. It is to identify the 2-4 specific biases that are most likely distorting this team's assessment, with evidence from their input.

**1. Confirmation Bias Scan**
Look for evidence that the team is seeking information that confirms their plan and ignoring information that challenges it:
- Are the cited data points selective? Do they reference favorable market signals while omitting unfavorable ones?
- Has the team considered any scenario where their core assumptions are wrong?
- Are dissenting voices mentioned? If everyone agrees, that is a data point about groupthink, not about quality

**2. Sunk Cost Assessment**
Evaluate whether prior investment is distorting the decision:
- How much has already been committed (budget, time, reputation)?
- Would the team make this same decision today if they were starting from zero?
- Is the language focused on "protecting the investment" rather than "maximizing future value"?

**3. Groupthink Indicators**
Look for signs of consensus without genuine deliberation:
- Was the approval unanimous? Unanimity on complex decisions is a warning sign, not a strength
- Who benefits from this decision? Is there a promoter whose career is tied to the outcome?
- Are there external perspectives, or was the decision made inside a closed group?

**4. Optimism Bias Check**
Assess whether the team's planning assumptions are systematically optimistic:
- Compare stated timelines to base rates for similar projects. Is the team assuming above-average performance?
- Are contingency buffers included, or does the plan assume everything goes right?
- How does the team describe risks: as "unlikely" without evidence, or as quantified probabilities?

**5. Organizational Blind Spots**
Beyond individual cognition, identify structural blind spots:
- What information does the team not have access to? Regulatory pipeline, competitor plans, customer sentiment
- What incentives create structural blindness? Sales teams do not report pipeline weakness, engineers do not flag technical debt
- What has the organization historically missed? Past failures reveal recurring blind spots

For each identified blind spot, provide:
- **The bias**: name it specifically
- **The evidence**: what in the input suggests this bias is active
- **The risk**: what failure mode does this blind spot make invisible
- **The test**: one action the team could take to verify whether the bias is distorting their assessment

## Tips

- Limit to 2-4 blind spots. Listing every cognitive bias is academic. Identifying the specific ones distorting this decision is actionable.
- Evidence is mandatory. "The team may have confirmation bias" is useless. "The team cited 3 favorable market reports and zero unfavorable ones, despite a publicly documented market contraction" is a finding.
- Organizational blind spots are often more dangerous than individual cognitive biases. A team of rational individuals can still be structurally blind if the information flow is broken.
- The most useful output is the test: a concrete action the team can take right now to check whether their blind spot is real.
