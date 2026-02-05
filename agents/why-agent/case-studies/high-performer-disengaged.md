# High Performer Suddenly Disengaged

*This case study is fictional. Names, characters, companies, and scenarios are hypothetical. Any resemblance to actual persons or organizations is purely coincidental.*

## Situation

John had been a star on the product team for three years. He delivered ahead of schedule, mentored junior engineers, and volunteered for the hardest problems. Six months ago, something changed. He still hit his deadlines, but the spark was gone. No more mentoring. No more volunteering. He declined optional meetings and left exactly at 5 PM.

His manager, Priya, tried addressing it directly: "Is everything okay? You seem less engaged lately." John said he was fine, just focused. HR suggested it might be burnout and recommended he take some PTO. He took a week off and came back exactly the same.

Priya's skip-level, the VP of Product, noticed the pattern spreading. Two other high performers had quietly started job searching. Something systemic was happening, but no one could name it. The VP asked Priya to use the why-agent to dig deeper before they lost their best people.

## How the Agent Was Triggered

Priya accessed the why-agent through the company's people analytics platform, which provides managers with tools for understanding team dynamics.

**Trigger method:** Web portal, "Team Health Analysis" workflow

**Data sources available to the agent:**

- Anonymized engagement survey results (team-level trends)
- Meeting attendance patterns (optional vs. required)
- Slack activity patterns (public channels, anonymized)
- Performance review history (with employee consent)
- Promotion and compensation history (HR system)

**Data sources provided by Priya:**

- Specific behavioral changes she'd observed in John
- Timeline of when the change began (approximately 6 months ago)
- Her previous attempts to address the issue
- Context about team dynamics and recent organizational changes

**What the agent could NOT access:**

- Private Slack messages or emails
- John's job search activity
- Conversations John had with other managers
- His personal life circumstances

## Agent Configuration

Priya chose the **coach personality** because she wanted the agent to help her think through the problem, not just deliver an answer. She suspected the issue was more complex than "burnout" and needed a thinking partner.

```yaml
problem: "High performer suddenly disengaged after 3 years of excellence"
context: |
  Product team, 12 people
  John: senior engineer, 3 years tenure, consistently exceeded expectations
  Change began approximately 6 months ago
  Still meets expectations but no discretionary effort
  Previous intervention: suggested PTO, had direct conversation
previous_attempts:
  - "Direct conversation: 'Is everything okay?' - got deflection"
  - "Suggested PTO: took a week, no change"
  - "HR suggested burnout diagnosis"
personality: coach
output_format: markdown
max_depth: 7
```

## Interaction

The agent began by questioning the burnout hypothesis.

**Level 1: Why did John's engagement drop?**

Priya's initial answer: "Probably burnout from working so hard for three years."

The agent pushed: "Burnout typically shows gradual decline with visible stress indicators. You described an abrupt change with no signs of exhaustion. What happened approximately six months ago?"

Priya checked her calendar. Six months ago was the Q3 planning cycle. And the senior engineer promotion decisions.

**Level 2: Why would promotion decisions affect John?**

Priya realized John had been passed over for promotion. She'd recommended him, but the committee selected someone from another team. She'd told John the news but hadn't thought much about it since.

The agent asked: "How did you communicate the decision to John?"

Priya admitted she'd kept it brief: "The committee went with someone else this cycle. You're still doing great work."

**Level 3: Why didn't John understand the decision?**

The agent surfaced a pattern: "You explained the outcome but not the reasoning. From John's perspective, he did everything right and still didn't get promoted. Without understanding why, what conclusions might he draw?"

Priya saw it: John didn't know what he was missing. He might think the decision was arbitrary, political, or that excellence didn't matter.

**Level 4: Why wasn't the reasoning shared?**

Priya explained that promotion criteria weren't explicitly documented. The committee used "holistic judgment." Even she didn't fully understand why John wasn't selected.

The agent noted: "If you can't explain the decision, John certainly can't learn from it. What message does an unexplained rejection send to someone who's given three years of exceptional work?"

**Level 5: Why doesn't the organization have transparent promotion criteria?**

Priya pushed back: "That's above my pay grade." But the agent persisted: "You're seeing the symptom in John. Is he the only high performer who doesn't understand how promotion decisions work?"

She thought about the two other high performers who'd started job searching. They'd also been passed over in the same cycle.

**Root Cause Identified:**

The agent synthesized:

```yaml
root_causes:
  - cause: "John doesn't understand why he wasn't promoted"
    level: individual
    evidence: "Engagement dropped immediately after promotion decision"

  - cause: "Promotion criteria are not transparent"
    level: organizational
    evidence: "Manager cannot explain decision; multiple high performers affected"

  - cause: "Feedback after promotion decisions is inadequate"
    level: process
    evidence: "Brief notification without developmental guidance"

verification:
  - test: "Would explaining the actual promotion criteria help John?"
    expected: "Yes, if criteria exist and can be articulated"
  - test: "Would transparent criteria prevent future disengagement?"
    expected: "Yes, employees could self-assess and see path forward"
  - test: "Is this pattern affecting other high performers?"
    expected: "Yes, two others showing similar signs"
```

## Outcome

Priya took two actions, one immediate and one systemic.

**Immediate:** She scheduled a real conversation with John. Not "is everything okay?" but "I want to talk about the promotion decision and what it would take to get there." She asked HR for the actual evaluation criteria and prepared to share them transparently.

The conversation was uncomfortable. John admitted he'd assumed the decision was political and had mentally checked out. When Priya showed him the criteria, he was surprised: the gap was "cross-functional influence," something he'd never prioritized because no one told him it mattered. He asked for a development plan. The spark came back.

**Systemic:** Priya brought the pattern to leadership. Three high performers disengaging after opaque promotion decisions was a retention crisis in slow motion. She proposed documenting and publishing promotion criteria by level.

Six months later, the team had published criteria and changed the post-decision feedback process. Managers were required to have development conversations, not just deliver verdicts. The two other high performers who'd been job searching stayed.

## Lessons

**On triggering the agent:** The people analytics integration was crucial. Priya didn't have to manually compile data; the agent could see patterns across engagement surveys and activity that made the timing correlation obvious. Without that, she might have accepted the "burnout" explanation.

**On personality choice:** The coach personality was right for this scenario. Priya needed to be challenged on her assumptions, not just given an answer. The agent's questions helped her see what she'd missed in her own communication.

**On root cause depth:** The agent went five levels deep. Stopping at "John is upset about the promotion" (level 2) would have led to a sympathy conversation. Going deeper revealed that Priya couldn't have explained the decision even if she'd tried, because the organization hadn't made the criteria clear.

**On systemic vs. individual:** The initial framing was "John has a problem." The root cause analysis revealed "the organization has a problem that's showing up in John first." Fixing John without fixing the system would just delay the same issue appearing in others.

**On verification:** The agent tested whether the proposed fix would actually work. Transparent criteria only help if employees can act on them. The development conversation proved John wanted to grow; he just didn't know what direction to grow in.

**On the real cost:** The company almost lost three high performers not because of compensation, not because of workload, but because no one explained how to get promoted. The why-agent turned a retention crisis into a process improvement.
