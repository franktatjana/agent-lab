# Quarterly Review Turnaround

*This case study is fictional. Names, characters, companies, and scenarios are hypothetical. Any resemblance to actual persons or organizations is purely coincidental.*

## Situation

David, a Director of Product at a mid-size SaaS company, was preparing for the most uncomfortable presentation of his career. Q3 had been rough: his team's flagship feature launch had missed its deadline by six weeks, the project burned through 140% of its budget, and the key metric they'd promised to move, user activation rate, had actually declined by 2 points instead of improving.

The executive team expected a quarterly review in four days. David's instinct was to build a dense slide deck: explain every delay, justify every budget line, and bury the bad numbers in context. His manager, the VP of Product, pulled him aside and said, "If you walk in there with a 30-slide defense, they'll eat you alive. Tell them what happened, what you learned, and why it won't happen again. Tell them a story."

David had the facts but no narrative. He knew that "we missed our targets" was not a story, and "here are 30 reasons why" was not an explanation. He needed to turn a defensive data dump into something the executive team could hear, process, and act on.

## How the Agent Was Triggered

David accessed the storytelling-agent through his company's internal AI tools platform after his VP recommended using it for presentation preparation.

**Trigger method:** Web portal, "Craft Narrative" workflow

**Data sources available to the agent:**

- Storytelling frameworks reference (Hero's Journey, Pixar, STAR, Data Storytelling, Brand Narrative)
- Glossary of narrative terms and techniques
- Delivery optimization guidelines for presentations

**Data sources provided by David:**

- Q3 project timeline with key milestones and misses
- Budget breakdown (planned vs. actual)
- User activation rate data (before, during, and after launch)
- Post-mortem document from the engineering team
- Customer feedback from the beta cohort (NPS of 67, up from 41 pre-feature)
- Three specific lessons documented by the team

**What the agent could NOT access:**

- Internal company politics around the project
- Executive team's individual priorities or concerns
- Competitive intelligence or market context
- Previous quarterly review presentations

## Agent Configuration

David chose the **business personality** because this was a boardroom context where credibility mattered more than inspiration. He requested **markdown output** because he needed to read the narrative like a script and adapt it for slides. He selected the **data-storytelling skill** because the story needed to be anchored in the numbers, not wrapped around them.

His input:

```yaml
topic: "Q3 feature launch results for executive quarterly review"
audience: "C-suite executive team, 5 people, quarterly business review"
data: |
  Feature launch: 6 weeks late (shipped Oct 15, planned Sep 1)
  Budget: $420K actual vs $300K planned (140%)
  User activation rate: declined 2 points (from 34% to 32%) in first 30 days
  Beta cohort NPS: 67 (up from 41 pre-feature)
  Engineering velocity post-launch: up 15% due to tech debt reduction during build
  Three key lessons: 1) dependency mapping was incomplete, 2) we tested with
  power users instead of new users, 3) activation metric was wrong, engagement
  and retention are better indicators of feature value
context: "Quarterly business review, 15-minute slot, executive team is aware of the delays but hasn't seen the full picture"
personality: "business"
output_format: "markdown"
desired_action: "Secure continued investment in the feature's Phase 2"
```

## Interaction

The agent began by analyzing David's raw material and identifying what it called the "buried lead": the data told two contradictory stories, and the tension between them was the real narrative. On the surface, every metric screamed failure: late, over budget, activation down. Below the surface, a different picture emerged: beta users loved the feature (NPS 67), the team emerged stronger (velocity up 15%), and the "failure" revealed that the team had been measuring the wrong thing all along.

The agent selected the Data Storytelling framework (context, conflict, resolution) because the executive audience would expect data-first presentation, but it layered in elements of the Pixar Story Spine to create causal connections between the beats. It told David: "Your executives are expecting a postmortem. Give them a diagnosis instead. A postmortem says 'here's what went wrong.' A diagnosis says 'here's what we learned about our own assumptions.'"

The first draft opened with the headline number: "The Q3 feature launch was six weeks late and $120K over budget." The agent deliberately led with the worst news because, as it explained, "If you bury the bad numbers, the audience spends the entire presentation waiting for them. Put them first. Let the room absorb them. Then show what's inside the numbers."

The agent then built the tension around a question rather than a defense: "Why did a team that shipped late and over budget produce a feature that beta users rated higher than anything we've launched in two years?" This reframe was the narrative turn. It didn't excuse the delays or the budget. It acknowledged them and then asked the executive team to look deeper.

The conflict section walked through the three lessons, framing each as a discovery rather than an excuse:

1. **Dependency mapping was incomplete.** The team assumed two internal APIs would be ready on schedule. Neither was. This wasn't bad planning; it was the absence of a process that now exists.

2. **Testing targeted the wrong users.** The beta went to power users who already understood the product. New users, the activation metric's target audience, weren't included until week four. By then, the feature was optimized for the wrong cohort.

3. **The activation metric was wrong.** User activation rate measured first-session actions. The feature's value showed up in sessions three through ten: engagement depth and retention. The team proposed a new metric, activated engagement rate, that captures what the feature actually does.

The resolution connected the lessons to a specific ask. The agent helped David frame Phase 2 not as "we need more money to fix what broke" but as "the $120K overspend bought us three things we didn't have before: a dependency management process, a validated testing framework, and a metric that actually measures what matters."

David pushed back on one point. He felt the narrative was too generous to the team, that it would look like he was spinning failure. The agent adjusted, adding a section David could deliver verbally: "I want to be clear about something. We missed our timeline and our budget. That's on us. What I'm presenting today isn't a rationalization. It's what we found when we looked honestly at what happened, and it's why I'm more confident in Phase 2 than I was in Phase 1."

The agent also shaped the delivery. It noted three key moments where David should pause: after the opening numbers, after the NPS contrast, and before the Phase 2 ask. It suggested keeping the total presentation under 8 minutes: "Executives who are worried want answers, not detail. Eight minutes says 'I know what happened and I know what to do.' Fifteen minutes says 'I need time to explain myself.'"

## Outcome

David delivered the presentation the following Tuesday. He opened with the numbers, and the room was quiet. When he reached the NPS contrast, the CFO leaned forward. "Wait, beta users rated this higher than our last three launches?" David confirmed and walked through the metric discovery. The CEO asked, "So the feature works, but we were measuring it wrong?" David answered yes and presented the proposed new metric.

The conversation that followed was substantive, not adversarial. The CTO asked about the dependency management process. The VP of Sales asked whether the NPS signal was strong enough to include the feature in enterprise pitches. The CFO approved Phase 2 budget at the original $300K, not the $420K David had spent, and asked for monthly checkpoint reviews.

After the meeting, David's VP said: "That's the first time I've seen a missed-targets presentation end with a budget approval. You didn't defend the quarter. You taught them something about the quarter."

The team, which had been dreading the review, heard about the outcome within an hour. The engineering lead said later: "When leadership responds to a miss with investment instead of blame, it changes how the team thinks about risk. We stopped being afraid of the next project."

## Lessons

This scenario revealed several things about using the storytelling-agent effectively in high-stakes professional contexts.

**Framework selection matters.** David initially asked for a Pixar Story Spine, thinking the compressed format would work for a 15-minute slot. The agent recommended Data Storytelling instead, explaining that executive audiences in quarterly reviews expect numbers first and narrative second. The Pixar structure would have felt too "story-like" for a boardroom. The Data Storytelling framework let David lead with evidence and build the narrative around it.

**The business personality calibrated tone correctly.** An inspirational personality would have undermined David's credibility in this context. The business personality kept the language evidence-based and strategically clear, matching what executives expect from a director presenting results. The narrative was compelling not because it was dramatic, but because it was honest and structured.

**Leading with bad news built trust.** The agent's insistence on opening with the worst numbers was counterintuitive to David but effective. By the time he reached the NPS data and the metric discovery, the executive team was listening instead of waiting for the bad news. The narrative earned their attention by respecting their intelligence.

**The "diagnosis, not postmortem" reframe was the key insight.** Most people presenting failures default to explanation mode: "Here's why it happened." The agent helped David shift to learning mode: "Here's what we discovered about our own assumptions." This reframe changed the audience's posture from judgment to curiosity.

**Delivery shaping was critical.** The 8-minute constraint forced David to cut everything that wasn't essential. The pause after the opening numbers gave the room time to absorb the bad news before David introduced the complexity. The pause before the Phase 2 ask created space for the transition from analysis to action. Without delivery shaping, the same narrative at 15 minutes would have been less effective.

For future high-stakes presentations, David now runs the data-storytelling skill 48 hours in advance, shares the draft narrative with his manager for calibration, and rehearses the delivery with the agent's pacing notes. He's become the informal "narrative coach" for his product team, helping colleagues structure their own quarterly updates.
