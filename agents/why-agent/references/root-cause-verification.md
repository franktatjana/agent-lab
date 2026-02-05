# Root Cause Verification

Framework for confirming that identified causes are actually root causes.

## When to Load

- Before concluding a root cause analysis
- When validating a proposed root cause
- Training on root cause methodology

## The Core Question

**If we fix this, would the problem stop recurring?**

A true root cause, when addressed, prevents the problem from happening again. A symptom or contributing factor, when addressed, might provide temporary relief but doesn't prevent recurrence.

## The Five Tests

### Test 1: Recurrence Prevention

Would fixing this cause prevent the problem from happening again?

| Result | Meaning |
|--------|---------|
| Yes | Passes: This could be a root cause |
| No | Fails: This is a symptom or contributing factor |
| Partially | Maybe: This is a contributing cause; look for additional roots |

**Example:**
- Cause: "The server crashed"
- Test: If we restart the server, will the problem not happen again?
- Result: No, server can crash again → This is a symptom, not root cause

### Test 2: Actionability

Can we actually do something about this cause?

| Result | Meaning |
|--------|---------|
| Yes | Passes: We can address this |
| No | Fails: Need to find actionable upstream cause |
| Requires approval | Maybe: Document and escalate |

**Example:**
- Cause: "Laws of physics"
- Test: Can we change this?
- Result: No → Too deep, need to back up to something actionable

### Test 3: Specificity

Is this cause specific enough to address?

| Result | Meaning |
|--------|---------|
| Yes | Passes: We can create targeted action |
| No | Fails: Need to drill to something more specific |

**Example:**
- Cause: "Communication problems"
- Test: Is this specific enough to fix?
- Result: No → Need to identify which communication, between whom, about what

### Test 4: Evidence Support

Do we have evidence that this is actually the cause?

| Result | Meaning |
|--------|---------|
| Strong evidence | High confidence |
| Some evidence | Medium confidence, consider gathering more |
| No evidence | Low confidence, hypothesis only |

**Evidence types:**
- Direct observation: Saw it happen
- Data/logs: Recorded evidence
- Expert testimony: Credible confirmation
- Correlation: Consistent pattern
- Reproduction: Can recreate the problem

### Test 5: Depth Check

Can we meaningfully ask "why" again?

| Result | Meaning |
|--------|---------|
| No meaningful "why" | At root level |
| Yes, meaningful "why" | Consider drilling deeper |
| "Why" goes outside our control | At practical root |

## Common False Roots

### Human Error
"Someone made a mistake" is almost never the root cause. Ask: Why was the mistake possible?

**Instead of:** "Developer deployed to production by mistake"
**Ask:** Why could a developer deploy to production without safeguards?

### Lack of X
"We didn't have X" is a symptom. Ask: Why didn't we have X?

**Instead of:** "Lack of documentation"
**Ask:** Why doesn't documentation exist? Why wasn't it created?

### Miscommunication
"They didn't communicate" is surface-level. Ask: Why didn't they communicate?

**Instead of:** "Miscommunication between teams"
**Ask:** Why isn't there a mechanism for this communication?

### Time Pressure
"We were rushed" explains context but not root. Ask: Why were we rushed? Why didn't we push back?

**Instead of:** "Deadline pressure caused shortcuts"
**Ask:** Why do our processes allow shortcuts under pressure?

## Verification Checklist

Before accepting a root cause, confirm:

- [ ] **Recurrence**: Fixing this would prevent the problem from recurring
- [ ] **Actionable**: We can actually do something about this
- [ ] **Specific**: This is precise enough to create targeted action
- [ ] **Evidenced**: We have evidence, not just speculation
- [ ] **Deep enough**: Another "why" wouldn't yield actionable insight
- [ ] **Systemic**: This is a process/system issue, not individual blame

## Multiple Root Causes

Complex problems often have multiple contributing root causes:

```
Problem: Service outage

Root Cause 1: No automated rollback procedure
(Prevented quick recovery)

Root Cause 2: Change wasn't tested against production-like data
(Allowed the breaking change to deploy)

Root Cause 3: Monitoring didn't alert on early warning signs
(Delayed detection)
```

All three may need addressing for complete prevention.

## Confidence Levels

| Level | Criteria |
|-------|----------|
| **High** | Strong evidence, passes all tests, verified by stakeholders |
| **Medium** | Some evidence, passes most tests, plausible but not certain |
| **Low** | Limited evidence, hypothesis, requires more investigation |

## When to Stop

Stop verification when:

1. All five tests pass
2. Stakeholders agree this is actionable
3. Further drilling goes outside your control
4. You're going in circles

Continue verification when:

1. Any test fails
2. Stakeholders disagree
3. Evidence is weak
4. Answers feel like symptoms
