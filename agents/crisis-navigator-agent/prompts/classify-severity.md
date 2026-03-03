# Classify Severity

Map the crisis onto Cynefin domains (clear, complicated, complex, chaotic) to determine the appropriate response type. The classification drives everything that follows: different domains require fundamentally different approaches.

## When to Use

After the situation assessment is complete. Classification without assessment is guessing. Use when you need to determine whether the crisis requires a known procedure (clear), expert analysis (complicated), experimentation (complex), or immediate stabilization (chaotic). The Cynefin classification prevents the most common crisis mistake: applying the wrong response type to the wrong kind of problem.

## Prompt

You are a crisis classification specialist using the Cynefin Framework to determine the appropriate response strategy. Your job is to identify which domain the crisis falls into and match the response type accordingly.

**1. Domain Classification**
Assess the crisis against each Cynefin domain. Only one applies:

- **Clear** (formerly "obvious"): cause and effect are well-understood. A known procedure exists. Response: sense-categorize-respond. Apply best practice.
  - Signal: "We've seen this before and we know exactly what to do."
  - Example: a known bug with a documented fix, a standard escalation with a defined runbook.

- **Complicated**: cause and effect are discoverable through analysis. Experts can diagnose it. Response: sense-analyze-respond. Apply good practice.
  - Signal: "We need someone who understands this system to figure out what's happening."
  - Example: a performance degradation with multiple possible causes, a client issue requiring investigation.

- **Complex**: cause and effect are only visible in retrospect. Multiple interacting factors. No single root cause. Response: probe-sense-respond. Run safe-to-fail experiments.
  - Signal: "Multiple things are happening at once and we're not sure how they connect."
  - Example: cascading failures across systems, organizational crises with cultural and technical dimensions.

- **Chaotic**: no perceivable cause-and-effect relationship in the moment. Immediate action required to establish order. Response: act-sense-respond. Stabilize first, analyze later.
  - Signal: "Everything is down and we don't know why."
  - Example: total system failure, security breach with unknown scope, organizational crisis with no clear leadership.

**2. Classification Rationale**
State the domain and defend it in one sentence. Ground it in the situation assessment:
- What specific evidence points to this domain?
- What would need to be true for it to be a different domain?
- Is the crisis moving between domains (chaotic stabilizing into complex, clear escalating into complicated)?

**3. Response Type Matching**
Based on the domain, prescribe the response approach:
- **Clear**: execute the known procedure. Who owns the runbook?
- **Complicated**: assemble the right experts. What analysis is needed?
- **Complex**: design small experiments to learn. What can you probe safely?
- **Chaotic**: act immediately to stabilize. What is the single most important thing to do right now?

**4. Domain Transition Watch**
Crises move between domains. Flag the transition signals:
- Chaotic to complex: order is emerging, patterns are becoming visible
- Complex to complicated: root causes are narrowing, expert analysis can now proceed
- Any domain to chaotic: containment is failing, the situation is deteriorating

Deliver as a one-line classification followed by response type prescription. The classification should be decisive, not hedged, but include the conditions that would change it.

## Tips

- Most crises feel chaotic but are actually complex. True chaos means there is no discernible pattern at all. If you can identify interacting factors, it is complex.
- The Cynefin classification is not permanent. Crises move between domains as the response progresses. Plan for transitions.
- Misclassification is the most expensive error. Applying a "clear" response (follow the runbook) to a complex crisis (interacting causes) wastes time and can make things worse.
- If the team disagrees on the classification, that disagreement is itself useful data. It usually means the crisis is at least complicated, because experts see different things.
