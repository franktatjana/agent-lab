# Situation Triage

Classify crisis severity, map what's known vs unknown, and identify the 1-2 things that matter right now.

## Prompts Used

1. **assess-situation** - Map what's known, what's unknown, who's affected, and what's still changing
2. **classify-severity** - Classify the crisis on Cynefin domains to determine the appropriate response type

## Workflow

[Assess Situation] -> situation report -> [Classify Severity] -> severity classification + response type prescription

## When to Use

- A crisis has just been reported and the team needs a clear picture before acting
- Multiple conflicting reports are coming in and no one is sure what's actually happening
- The situation is evolving and the team needs to determine whether the current response type matches the actual problem
- Leadership is asking "how bad is this?" and you need a defensible, framework-backed answer
- The response team is arguing about what to do because they have not agreed on what is happening

## What You Get

1. A factual situation report separating known facts from assumptions and unknowns
2. A Cynefin domain classification (clear, complicated, complex, chaotic) with rationale
3. A response type prescription: what kind of response this crisis requires (best practice, expert analysis, experimentation, or immediate stabilization)
4. Identification of the 1-2 highest-priority items that must be addressed before anything else

## Example Input

"Our main database cluster went down at 2:14 AM. Automated failover triggered but only partially restored service. The API is returning intermittent 500 errors for approximately 30% of requests. Three enterprise clients have opened P1 support tickets. The on-call engineer thinks it's a connection pool issue but is not certain. No customer communication has been sent."

## Tips

- Run situation triage before committing to any action plan. The most common crisis response failure is solving the wrong problem quickly.
- The "unknown" items from the assessment directly inform the Cynefin classification. If the unknowns outnumber the knowns, you are likely in the complex or chaotic domain.
- Revisit the triage if significant new information arrives. A crisis that starts as chaotic may stabilize into complex, and the response type should shift accordingly.
