# The Blocked Proposal

*This case study is fictional. Names, characters, companies, and scenarios are hypothetical. Any resemblance to actual persons or organizations is purely coincidental.*

## Situation

Mei Lin, a Product Director at a mid-size fintech company (~800 people), had a strategic proposal killed in the leadership committee twice. The proposal: launch a B2B payments product alongside their consumer product. Both times, the VP of Risk blocked it, citing regulatory complexity. The CEO seemed interested but deferred to the committee.

Mei Lin was frustrated. The business case was strong, the market timing was right, and her CPO supported the idea. She couldn't understand why it kept getting blocked.

## How the Agent Was Triggered

Mei Lin opened the Corporate Navigator and selected the Plan Influence skill with the Tactical personality.

**Trigger method:** Prompt builder

**Data sources provided by Mei Lin:**
- Organization context, her role, key stakeholders, and the two failed attempts
- Her observation that the VP of Risk always raised regulatory concerns but never offered alternatives

**What the agent could NOT access:**
- The VP of Risk's actual workload or team capacity
- Internal committee dynamics beyond what Mei Lin described
- Whether there were financial constraints Mei Lin didn't know about

## Agent Configuration

Personality: **Tactical** (Mei Lin needed specific moves, not reflection)
Skill: **Plan Influence** (she needed to change the outcome, not just understand the landscape)
Format: YAML

User input:

```yaml
organization_context: "Fintech, 800 people, committee-driven decisions, risk-averse culture"
your_role: "Product Director, 3 years tenure, reporting to CPO"
goal: "Get B2B payments proposal approved"
situation: "Blocked twice by VP Risk citing regulatory complexity. CEO interested but defers to committee."
key_stakeholders: "VP Risk (blocker), CEO (interested but passive), CPO (my boss, supportive)"
constraints: "Cannot go around the committee. VP Risk has veto on regulatory matters."
```

## Interaction

The agent named the dynamic immediately: **gatekeeping with perceived burden**. It distinguished between two possible interpretations:

1. The VP of Risk genuinely believes the regulatory risk is too high (confidence: medium)
2. The VP of Risk is protecting his team from workload increase without additional resources (confidence: high)

The agent recommended focusing on interpretation #2 based on the pattern: objections cited regulatory complexity but never proposed conditions under which it could work. Someone genuinely opposed on merit would say "this shouldn't be done." Someone protecting resources says "this is too complex," which is code for "don't add to my plate."

Three recommended moves:

1. **Reframe the ask**: Instead of presenting the full B2B product, propose a "regulatory discovery phase" that Risk would lead. This makes the VP of Risk the owner, not the obstacle.
2. **Pre-wire the VP directly**: Schedule a coffee. Suggested phrasing: "I think I've been presenting this wrong. Your team's expertise is exactly what we need to figure out if this is even feasible. Would you be open to leading the regulatory assessment?"
3. **Arm the CEO with the reframe**: Brief the CPO to casually mention to the CEO that "Mei Lin and the VP of Risk are collaborating on the regulatory feasibility."

Risk flagged: If Mei Lin approaches the VP of Risk and they genuinely believe the idea is bad (interpretation #1), the reframe won't work and could feel manipulative. The agent recommended a diagnostic question for the coffee meeting: "If you had the resources, what conditions would make a B2B product viable from a risk perspective?" If the answer is "none," the blocker is genuine. If the answer includes conditions, the blocker is about resources.

## Outcome

Mei Lin had coffee with the VP of Risk and used the diagnostic question. His response: "If I had two additional compliance analysts and six months for the regulatory mapping, we could probably make it work." This confirmed the agent's read: the objection was about resources, not viability.

Mei Lin proposed the regulatory discovery phase at the next committee meeting, with the VP of Risk positioned as the lead. He supported it. The CEO, seeing alignment, approved a 6-week assessment.

The B2B product launched 9 months later. The VP of Risk became one of its strongest internal advocates.

## Lessons

**On diagnosing objections:** The same objection ("regulatory complexity") can mean "this is impossible" or "this is too much work for my team." The agent helped Mei Lin distinguish between the two by looking at the pattern of objections, not just the content.

**On reframing:** The proposal didn't change. The framing did. "Let me launch this product" became "Would you lead the feasibility assessment?" Same destination, different entry point. The blocker became the owner.

**On pre-wiring:** The formal committee was where decisions were announced, not where they were made. The real decision happened over coffee. The agent surfaced this pattern explicitly.

**On tactical personality:** Mei Lin chose the tactical personality because she needed specific actions and phrasing, not a coaching conversation. The 24-72 hour action window forced concrete steps rather than abstract strategy.
