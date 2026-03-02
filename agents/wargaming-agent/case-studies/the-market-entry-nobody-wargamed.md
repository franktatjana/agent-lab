# The Market Entry Nobody War-Gamed

## The Situation

Rachel Kessler had been Head of Strategy at Meridian Financial, a mid-size fintech with 200 enterprise clients and solid data infrastructure, for three years. Her proposal to expand into SMB lending landed on the board's agenda in January. The market was growing 18% year-over-year. Meridian had $50M earmarked for growth initiatives. The board approved unanimously.

Rachel assembled a team of twelve, hired three SMB lending specialists, and committed to a Q2 launch targeting 500 SMB clients in the first year. She had modeled the revenue projections, stress-tested the credit risk assumptions, and built a go-to-market plan with phased rollout across four metro areas. What she had not done was simulate how anyone else would respond to her entering the market.

## The Problem

FinanceFirst, the market leader with 40% share in SMB lending, watched Meridian's hiring announcements and regulatory filings. By week six of Meridian's launch, FinanceFirst slashed its SMB lending rates by 30%, a move it could absorb because its volume was eight times Meridian's. The price war erased Meridian's projected margins before the first quarter closed.

Then, in August, the OCC announced new capital adequacy requirements for SMB lenders, effective Q1 of the following year. Compliance costs added $3.2M to Meridian's operating budget, a figure that had not appeared in any projection because Rachel's team had treated regulatory risk as a footnote.

The third blow came from inside. Meridian's three largest enterprise clients, representing 22% of recurring revenue, began asking pointed questions. Their account managers had been reassigned to support the SMB launch. Response times on enterprise tickets had doubled. One client issued a formal review notice.

Six months after launch, the SMB initiative was burning $1.8M per month against $340K in revenue. Rachel's board, the same one that had approved unanimously, began asking how this happened.

## The Wargaming Intervention

Rachel's COO introduced the wargaming agent during the crisis. Rather than running another financial model, they ran a retrospective wargame: what would they have seen if they had simulated the market's response before committing?

The **design-wargame** flow began with `set-scenario`. The agent structured a three-round simulation: Meridian's market entry, competitor and regulator response, and Meridian's adaptation. The scenario defined four players: Meridian (Blue Team), FinanceFirst (Red Team, market leader), QuickLend (Red Team, fast-growing challenger), and the OCC (environmental force).

The `analyze-competitor` prompt built profiles from public data. FinanceFirst had excess lending capacity, thin margins it could temporarily compress, and a history of aggressive price responses to new entrants in adjacent markets. The profile revealed that a price cut was not just possible, it was the rational move for FinanceFirst. QuickLend, meanwhile, had been quietly building an automated underwriting platform that could process SMB applications at one-third of Meridian's cost per loan.

The `simulate-round` prompt played out the first two rounds. In the simulation, FinanceFirst's price cut appeared within 60 days of entry, matching what had actually happened. QuickLend's automation advantage meant it could sustain lower rates indefinitely, making a price war unwinnable for Meridian on two fronts, not one. The regulatory injection, based on publicly discussed OCC rulemaking, showed new capital requirements hitting all smaller entrants disproportionately.

The simulation surfaced what Rachel's financial models had missed: the plan assumed competitors would hold still while Meridian moved.

## The Turning Point

Rachel then ran the **identify-schwerpunkt** flow. The `find-schwerpunkt` prompt analyzed Meridian's actual competitive advantages against the landscape the wargame had revealed. Meridian's lending capabilities were average. Its rates could not compete with FinanceFirst's volume economics or QuickLend's automation. But one asset kept surfacing in the analysis: Meridian's data infrastructure.

Meridian had spent seven years building a credit decisioning and risk analytics platform for its enterprise clients. That platform processed 40M data points monthly across diverse lending verticals. The Schwerpunkt was not the SMB lending market itself. It was the data layer underneath it.

The wargame revealed that Meridian's real advantage was not making loans. It was enabling others to make better lending decisions. Competing directly in SMB lending meant fighting FinanceFirst on price and QuickLend on speed, two battles Meridian would lose. But providing the data infrastructure that smaller lenders needed to compete? That was a market where Meridian had no serious rival.

## The Outcome

Rachel pivoted the initiative over the following quarter. Instead of originating SMB loans directly, Meridian launched a platform play: a data-as-a-service product that let smaller, specialized lenders access Meridian's credit decisioning engine through an API.

The results over the next twelve months told the story. Meridian signed 14 lending partners who collectively originated $280M in SMB loans using Meridian's platform. Meridian earned platform fees on every transaction without carrying credit risk. The enterprise clients stayed: their account managers returned full-time, and the client who had issued a review notice renewed for three years. FinanceFirst's price war became irrelevant because Meridian had left the battlefield.

The $50M allocation was restructured. $12M went to platform development, $8M to partner onboarding, and the remaining $30M was returned to the growth reserve. Monthly burn dropped from $1.8M to $620K, reaching break-even by month ten.

## Key Takeaway

Rachel's original plan was analytically sound in isolation. The revenue projections were reasonable, the market was real, and the team was capable. What the plan lacked was adversarial testing. No one had asked "what will FinanceFirst do when we show up?" or "what happens if the regulatory environment shifts mid-launch?"

The value of wargaming is not prediction. Rachel's wargame did not predict the exact timing of FinanceFirst's price cut or the OCC announcement. What it did was force the team to confront the reality that every strategic move provokes a response, and that response changes the conditions under which the original plan must operate. The strategies that survive are the ones that have already met their opposition in simulation, before real resources are committed and real options are foreclosed.
