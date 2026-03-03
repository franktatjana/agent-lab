# The Launch Everyone Loved

## The Situation

Marcus Chen had been VP of Product at Vantage, a mid-stage SaaS company with $28M ARR and 180 employees, for two years. His proposal to launch a new AI-powered analytics product targeting mid-market CFOs landed with unusual enthusiasm. The product, Vantage Forecast, would use machine learning to generate automated financial forecasts from connected accounting data. The board was excited. The investors were excited. The team was excited. Marcus had the green light, a $4M budget, and a launch date: nine months out, timed for the annual CFO Summit in Dallas.

The approval was unanimous. The leadership team voted 6-0 at the strategy offsite. The CTO called it "the most strategically obvious product bet we've made in three years." The VP of Sales had already started seeding the concept with enterprise prospects. Two board members mentioned Vantage Forecast in a partner newsletter. The momentum was real, and it was exactly the kind of momentum that makes failure invisible.

## The Problem

Marcus assembled a team of 16: four ML engineers, three backend engineers, three frontend engineers, two product managers, two designers, a data engineer, and a technical writer. He recruited a senior ML lead from a competitor, offering a 40% salary premium and a title bump. The team began building in February.

By April, the ML team had a working prototype. Accuracy on historical financial data was 91%. The target was 96%, a number Marcus had chosen because a competitor's marketing materials claimed "95%+ accuracy." The gap between 91% and 96% seemed manageable. The ML lead privately told Marcus that the last five percentage points were the hardest, that accuracy curves flatten as you approach the ceiling, and that 96% on real-world messy accounting data might require 6 additional months of training data refinement. Marcus noted the concern but did not change the timeline. The CFO Summit keynote was already confirmed.

In June, three things happened in the same week. First, the EU announced the AI Act's compliance requirements for automated financial decision-support tools, effective within 18 months but requiring compliance readiness documentation immediately for any product marketed in Europe. Vantage's 40% of revenue came from EU customers. Nobody on Marcus's team had been tracking the AI Act's progression through European Parliament. The compliance assessment alone would take 8-12 weeks and require external legal counsel.

Second, Finmark, a well-funded competitor that Vantage had dismissed as "too early-stage to matter," announced a free tier of their own AI forecasting product. Finmark's free tier was limited but functional, and it targeted the same mid-market CFO segment. Finmark had been building in stealth for 14 months. Their announcement was accompanied by a $15M Series B press release that repositioned them from "startup experiment" to "funded competitor."

Third, the senior ML lead, the one Marcus had recruited with a 40% premium, told Marcus she was leaving. She had accepted a role at a larger company with a dedicated research division. Her concerns about the accuracy timeline had gone unaddressed for three months, and she had concluded that the project was heading toward a launch-day accuracy gap that would damage her professional reputation. She gave two weeks' notice. The ML team's velocity dropped 40% within a month. Her replacement took three months to hire and another two months to become productive.

By August, the project was behind on three fronts simultaneously. Accuracy was at 93%, still short of the 96% target with no clear path to close the gap before the October launch. The EU compliance assessment was underway but would not be complete until November, meaning Vantage could not market the product to European customers at launch. The competitive landscape had shifted from "unchallenged blue ocean" to "funded competitor with a free tier and a 14-month head start."

Marcus faced a choice: launch at the Summit with a product that was below target accuracy, unavailable to 40% of the customer base, and entering a competitive market, or delay and explain to a board, an investor community, and a sales team that had already been primed for October.

He launched. The product debuted at the CFO Summit to polite applause and tepid adoption. Enterprise prospects ran accuracy tests against their own data and found error rates that were acceptable for rough planning but too high for the board-level forecasting the marketing had promised. The EU sales team had nothing to sell. Finmark's free tier captured 200 mid-market accounts in the segment Vantage had targeted, establishing them as the accessible default.

Six months after launch, Vantage Forecast had 34 paying customers against a target of 200. Monthly burn on the product was $380K against $62K in revenue. The board, the same board that had approved unanimously, asked Marcus for a remediation plan.

## The Pre-Mortem Intervention

Marcus's CEO brought in the pre-mortem analysis after the Q1 post-launch review. Rather than running another strategy session, they ran a retrospective pre-mortem: what would the team have seen if they had stress-tested the plan before committing?

The **failure-autopsy** flow began with `assume-failure`. The agent established the certainty frame: "It is April of the following year. Vantage Forecast has failed. Here is the story of why." The failure narrative traced three threads that had been individually visible but never examined together.

The first thread was the accuracy gap. The `assume-failure` narrative identified that the ML lead's concern in April, that the last 5% of accuracy would require 6 additional months, was not a pessimistic estimate but a pattern consistent with ML accuracy curves across comparable domains. The pre-mortem referenced analogous projects where accuracy plateaus had delayed launches by 4-8 months. The failure signature was visible: ambitious accuracy target, compressed timeline, single expert dependency, concerns voiced but not escalated.

The second thread was the regulatory blindside. The pre-mortem's `surface-blind-spots` prompt identified a structural blind spot: nobody on Marcus's product team was tracking EU regulatory developments because the company's regulatory monitoring was handled by the legal team, who had no visibility into which product roadmap items would be affected by which regulations. The information existed in the organization but was not flowing to the people who needed it.

The third thread was the competitive intelligence gap. The `rank-failure-modes` prompt rated the Finmark risk as Medium likelihood / High impact / Silent detectability, the most dangerous combination. Finmark had been in stealth for 14 months, but their hiring patterns, job postings, and conference presentations had been publicly visible. The pre-mortem identified that Vantage had no competitive intelligence function monitoring funded startups in adjacent spaces. The dismissal of Finmark as "too early-stage" was a judgment made once and never revisited.

## The Turning Point

The **blind-spot-scan** surfaced four biases active in the original decision:

**Confirmation bias**: The team had cited three favorable analyst reports on the mid-market AI analytics opportunity. None of the cited reports mentioned regulatory risk, competitive density, or accuracy challenges. Two analyst reports published in the same period that highlighted these risks were not part of the decision materials.

**Sunk cost anchoring**: By June, $1.8M had been spent. The CFO Summit keynote was confirmed. The board had been briefed. The language in internal communications had shifted from "should we launch in October?" to "how do we hit the October launch date," a subtle but decisive reframing from decision to commitment.

**Groupthink**: The 6-0 approval vote. The leadership team included no external perspectives. The ML lead's concerns were noted in a 1:1 but never surfaced in a leadership meeting. The Director of EU Sales, who would have immediately flagged the regulatory risk, was not included in the product strategy review.

**Optimism bias**: The 96% accuracy target was chosen based on a competitor's marketing claim, not based on engineering assessment of achievability within the timeline. The team assumed above-average execution, below-average complications, and no competitive response.

The pre-mortem's `regret-projection` prompt produced four specific regret statements:

"We wish we had asked the ML lead to present her accuracy concerns to the full leadership team in April, instead of noting them in a 1:1 and moving on. The 5-minute conversation that did not happen cost us 4 months and a $400K ML lead replacement."

"We wish we had included the Director of EU Sales in the product strategy review. One question, 'Can we sell this in Europe at launch?' would have surfaced the AI Act compliance requirement 4 months earlier."

"We wish we had tracked Finmark's hiring and fundraising activity instead of dismissing them based on a 14-month-old assessment. The information was public. We simply were not looking."

"We wish we had separated the launch date from the keynote commitment. The keynote made October a deadline instead of a milestone, and the difference between a deadline and a milestone is the ability to say 'not yet' without losing face."

## The Remediation

Marcus restructured the product strategy based on the pre-mortem findings. The changes took six months to execute.

First, he adjusted the accuracy target from 96% to 93% with transparent communication. Vantage Forecast was repositioned from "board-level financial forecasting" to "CFO planning support," a narrower but honest claim. The 93% accuracy was genuinely useful for planning scenarios even if it was not reliable enough for formal financial reporting. Customer feedback confirmed that the planning use case was what most mid-market CFOs actually needed. The marketing materials that had over-promised were rewritten.

Second, the EU compliance gap was closed. Marcus allocated $180K to accelerate the AI Act readiness assessment. Vantage hired a part-time regulatory affairs advisor who monitored EU, US, and UK regulatory developments with quarterly briefings to the product team. The compliance documentation was completed by month 4 of the remediation. EU sales resumed.

Third, Marcus established a lightweight competitive intelligence practice. A product analyst spent 4 hours per week monitoring job postings, funding announcements, and conference presentations from 12 companies in Vantage's competitive perimeter. Within three months, this practice identified two additional stealth competitors and a potential partnership opportunity.

Fourth, and most structurally, Marcus changed how Vantage made product investment decisions. Every product bet above $500K now required a pre-mortem session before approval. The session was structured: the team assumed the project had failed and generated failure modes independently before discussing them as a group. Dissent was not just permitted, it was required. No project could proceed to approval without at least three documented failure modes and a mitigation plan.

The results over the following year were measurable. Vantage Forecast grew from 34 to 148 paying customers, short of the original 200 target but on a sustainable trajectory. EU customers represented 35% of the product's revenue, compared to zero at the original launch. Two subsequent product investments were delayed based on pre-mortem findings, one by 6 weeks to close a regulatory gap and one by 3 months to validate a market assumption. Both launched successfully.

## Key Takeaway

Marcus's original plan was not reckless. The market was real, the product concept was sound, and the team was capable. What the plan lacked was structured pessimism. Every risk that materialized, the accuracy gap, the regulatory blindside, the competitive entry, the key-person departure, was individually knowable before the commitment was made. The ML lead knew about the accuracy risk. The EU sales director would have known about the regulatory risk. The competitive intelligence was publicly available. The information existed. It was not flowing to the decision.

The value of a pre-mortem is not prediction. The Pre-Mortem Agent would not have predicted that Finmark would announce in June or that the ML lead would resign in the same week. What it would have done is force the team to articulate the specific scenarios that would make the plan fail, to identify the biases preventing them from seeing those scenarios, and to take the low-cost actions (a leadership presentation, an included stakeholder, a competitive monitoring practice) that would have given them months of advance warning instead of weeks of crisis response.

Teams that run pre-mortems catch approximately 30% more risks than teams using traditional risk assessment. The mechanism is simple: certainty framing bypasses the defensive optimism that makes people dismiss risks as unlikely. When the failure is a fact, not a possibility, people stop defending the plan and start examining it. That shift, from advocacy to inquiry, is the difference between a plan that survives contact with reality and one that does not.
