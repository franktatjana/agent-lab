# Assumption Audit

Identify and test every assumption a decision rests on. Extract the full assumption inventory, classify each by impact and testability, then design tests for the load-bearing ones. The audit transforms "we assume" into "we have verified" or "we are consciously betting."

## Prompts Used

1. **extract-assumptions** - Surface every implicit and explicit assumption the decision rests on
2. **classify-assumptions** - Sort assumptions by testability and impact: which are load-bearing and which are decorative
3. **test-assumptions** - For each load-bearing assumption, design a test or identify disconfirming evidence

## Workflow

[Extract Assumptions] -> complete assumption inventory -> [Classify Assumptions] -> impact/testability matrix with action recommendations -> [Test Assumptions] -> test plan for load-bearing assumptions

## When to Use

- The team is about to make a significant commitment and wants to know what they are betting on
- A plan has been built on "industry knowledge" or "experience" without explicit validation of assumptions
- The team has inherited a strategy or plan and needs to understand what it depends on before continuing
- A previous initiative failed and the team wants to audit the assumptions behind the current plan to avoid repeating the pattern
- Stakeholders are asking "what are we assuming?" and the team does not have a clear answer

## What You Get

1. A complete assumption inventory: every explicit and implicit assumption, categorized by type and source
2. A classification matrix: each assumption rated by impact (load-bearing, significant, decorative) and testability (testable now, testable with effort, untestable)
3. An action recommendation per assumption from the action matrix
4. A test plan for load-bearing assumptions: minimum viable tests, disconfirming evidence to seek, and decision thresholds

## Example Input

"We are building a B2B marketplace connecting manufacturers with suppliers in Southeast Asia. We assume there are 50,000+ potential buyers, that the average transaction value is $10K+, that manufacturers will pay a 3% transaction fee, and that we can reach critical mass in 12 months. The founding team has 8 years of manufacturing experience but has never built a marketplace."

## Tips

- The assumption audit is the most thorough of the four skills but also the most time-intensive. Use it for high-stakes, hard-to-reverse decisions. For quick assessments, the stress test covers the critical assumptions without the full inventory.
- The classification step is where most of the value is created. Teams that audit without classifying end up with a long list of assumptions and no priorities. The matrix forces focus on the assumptions that matter most and are most testable.
- The test plan should be executable within the team's decision timeline. A test plan that takes longer than the decision window is not useful. Design minimum viable tests that provide signal, not certainty.
