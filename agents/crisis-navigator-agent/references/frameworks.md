# Crisis Management Frameworks

The Crisis Navigator Agent draws from four frameworks that address different dimensions of crisis response. OODA Loop provides decision speed under pressure. Incident Command System provides organizational structure. Cynefin Framework provides problem classification. PACE Planning provides communication redundancy. Together they form a complete crisis response methodology: classify the problem, structure the response, cycle through decisions quickly, and communicate reliably to all stakeholders.

## When to Load

Load when explaining methodology to users, when selecting the right framework for a specific crisis scenario, or when the response needs deeper grounding in established doctrine.

## OODA Loop (Boyd)

John Boyd developed the Observe-Orient-Decide-Act cycle from his experience as a fighter pilot and his study of military history. The core insight is that the side cycling through OODA faster gains the initiative, while the slower side is perpetually reacting to a reality that has already changed. In crisis management, the OODA Loop provides a structured way to make decisions under time pressure without falling into either paralysis or recklessness.

The critical phase is Orient, the mental model through which observations are interpreted. Most crisis response failures happen in Orient: when the team sees new data through outdated assumptions and misinterprets what is happening. A team that observes a database failure and orients through the lens of "our database is reliable" will waste time re-checking instead of acting on the failure.

**Observe**: gather information about the current state. What has changed? What is the situation right now? In crisis terms: what do we know, what do we suspect, what is unknown?

**Orient**: interpret the observations through relevant mental models. What does this mean? How does it connect to what we already know? In crisis terms: is this getting better or worse? Does this match a known failure pattern?

**Decide**: select a course of action. Based on what we observed and how we oriented, what should we do? In crisis terms: what is the single most important action right now?

**Act**: execute the decision. In crisis terms: who does what, by when, with what resources?

The loop then restarts. Each cycle should take minutes, not hours. The speed of cycling determines whether the team is driving the response or being driven by the crisis.

**Maps to:** All crisis response scenarios. The OODA Loop is the operational heartbeat of the Crisis Navigator, providing the decision-making cadence that prevents both paralysis and panic.

**Source:** John Boyd, "Patterns of Conflict" (1986). Public domain military doctrine. Chet Richards, "Certain to Win" (2004), for business applications.

## Incident Command System (ICS)

The Incident Command System was developed by the U.S. fire services in the 1970s after a series of catastrophic wildfires revealed that multiple agencies responding to the same incident without a unified command structure led to confusion, duplicated effort, and critical gaps. ICS was subsequently adopted by FEMA and became the standard organizational framework for emergency management in the United States.

ICS provides five key functions that map directly to crisis management in any context:

**Command**: a single incident commander with authority over the entire response. In organizational crises, this means one person owns the response, not a committee.

**Operations**: the people doing the actual work of responding. In organizational crises, this is the team executing the action sequence.

**Planning**: tracking the current situation and planning the next operational period. In organizational crises, this is the person maintaining the situation assessment and updating the action sequence.

**Logistics**: providing resources (people, tools, information) that operations needs. In organizational crises, this includes infrastructure access, vendor contacts, and communication tools.

**Finance/Administration**: tracking costs and documentation. In organizational crises, this is often overlooked but critical for post-crisis analysis and insurance/compliance reporting.

The most important ICS principle for non-emergency organizations is **unity of command**: every person reports to one and only one supervisor during the incident. Dual reporting during a crisis creates gaps and contradictions.

**Maps to:** Structuring the crisis response team and defining roles. ICS prevents the most common organizational crisis failure: everyone doing something, nobody coordinating, and critical tasks falling between people who each assumed someone else was handling them.

**Source:** U.S. Federal Emergency Management Agency (FEMA), Incident Command System documentation. Public domain. National Incident Management System (NIMS) for the expanded framework.

## Cynefin Framework (Snowden)

Dave Snowden's Cynefin Framework (pronounced "kuh-NEV-in," from the Welsh word for habitat) provides a way to classify problems based on the relationship between cause and effect. The framework identifies five domains, four of which are directly relevant to crisis management. The critical insight is that different problem types require fundamentally different response strategies, and applying the wrong strategy to the wrong problem type makes things worse.

**Clear** (formerly "Simple" or "Obvious"): cause and effect are well-understood. The right response is known and documented. Response strategy: sense-categorize-respond. Apply best practice.
- Crisis example: a known system failure with a documented runbook. The fix exists, execute it.
- Danger: complacency. If the team assumes a crisis is "clear" when it is actually "complicated," they apply a standard fix to a non-standard problem.

**Complicated**: cause and effect are discoverable through analysis. Expertise is required, but the problem is diagnosable. Response strategy: sense-analyze-respond. Apply good practice.
- Crisis example: a performance degradation with multiple possible causes. An expert can investigate, narrow the possibilities, and identify the issue.
- Danger: analysis paralysis. The team keeps investigating instead of acting, or defers to experts who are not available in the required timeframe.

**Complex**: cause and effect are only visible in retrospect. Multiple interacting factors create emergent behavior that cannot be predicted from the parts. Response strategy: probe-sense-respond. Run safe-to-fail experiments.
- Crisis example: a cascading failure where fixing one component breaks another, or an organizational crisis where technical, cultural, and business factors are entangled.
- Danger: trying to find "the root cause" when there are multiple interacting causes. The team searches for a single fix that does not exist.

**Chaotic**: no perceivable cause-and-effect relationship in the moment. The system has collapsed beyond the point where analysis is possible. Response strategy: act-sense-respond. Stabilize first, analyze later.
- Crisis example: total system failure with unknown scope, a security breach with active exfiltration, or an organizational crisis where leadership has lost control.
- Danger: trying to understand before acting. In chaos, the first priority is to establish order, any order, so that the situation can transition to complex or complicated where analysis becomes possible.

**Disorder** (the fifth domain): the state of not knowing which domain you are in. This is where most crises start. The first job of situation triage is to move out of disorder into one of the four classified domains.

**Maps to:** The classify-severity prompt. Cynefin classification determines the entire response strategy. A crisis misclassified as "clear" when it is actually "complex" will receive a runbook response to a systemic problem, wasting time and potentially making things worse.

**Source:** Dave Snowden and Mary Boone, "A Leader's Framework for Decision Making," Harvard Business Review (2007). David Snowden, "Cynefin: Weaving Sense-Making into the Fabric of Our World" (2020) for the expanded framework.

## PACE Planning

PACE is a military communication planning methodology that ensures redundancy across communication channels. The acronym stands for Primary, Alternate, Contingency, Emergency. The principle is that communication failure during a crisis is a crisis multiplier: if stakeholders do not receive information, they fill the vacuum with assumptions, and those assumptions are always worse than reality.

**Primary**: the default communication channel for this stakeholder group. The one everyone knows and checks first.
- Example: Slack for internal engineering, email for customers, status page for public.

**Alternate**: used when the primary channel is unavailable, overloaded, or inappropriate for the message.
- Example: phone bridge for internal when Slack is down, SMS for customers when email is delayed.

**Contingency**: used when both primary and alternate have failed or are compromised.
- Example: personal phone calls to critical stakeholders, direct manager-to-team communication.

**Emergency**: last resort, used when all other channels have failed.
- Example: in-person communication, physical notice, broadcasting through a third-party service.

The key discipline is planning PACE before the crisis, not during it. During a crisis, communication channels fail in ways that are predictable but rarely planned for: email servers go down with the same infrastructure that caused the crisis, Slack goes silent when the team is overwhelmed, and status pages are the last thing anyone updates when they are busy firefighting.

**Maps to:** The draft-comms prompt. PACE ensures that every stakeholder group has four ways to receive crisis communication, and the response team knows which channel to use in which order. The framework also forces the team to identify communication dependencies on the same infrastructure that might be failing.

**Source:** U.S. military communication planning doctrine. Widely adopted in emergency management and cybersecurity incident response. Public domain methodology.

## IP Notes

OODA Loop is public domain military doctrine (Boyd, 1986). Incident Command System is public domain emergency management doctrine (FEMA). Cynefin Framework is published academic and consulting work (Snowden and Boone, Harvard Business Review, 2007). PACE Planning is public domain military communication doctrine. This agent is an educational reference design applying these published concepts, not a commercial implementation of any proprietary methodology.
