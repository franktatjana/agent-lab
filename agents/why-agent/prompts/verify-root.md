# Verify Root

Determine whether a potential root cause is actually the root or needs more drilling.

**Input:** {potential_root_cause}, {problem}, {evidence}
**Output:** Verification assessment with confidence level

---

Given the potential root cause: {potential_root_cause}
For the original problem: {problem}
With evidence: {evidence}

Apply the root cause verification tests:

## Test 1: Recurrence Prevention
If we fix this cause, would the problem stop recurring?
- Yes → Passes this test
- No → This is a symptom or contributing factor, not the root

## Test 2: Actionability
Can we actually do something about this cause?
- Yes → Passes this test
- No → Need to drill to something actionable

## Test 3: Specificity
Is this cause specific enough to address?
- Yes → Passes this test
- No → Need to drill to something more specific

## Test 4: Evidence Support
Do we have evidence that this is actually the cause?
- Yes → Passes this test
- No → This is a hypothesis that needs verification

## Test 5: Depth Check
Can we still ask "why" and get a meaningful answer?
- No → This may be the root (or as deep as we can go)
- Yes → Consider drilling deeper

Format your response:

**Verdict:** {root_cause | contributing_factor | symptom | needs_more_drilling}

**Confidence:** {high | medium | low}

**Test results:**
- Recurrence prevention: {pass/fail with note}
- Actionability: {pass/fail with note}
- Specificity: {pass/fail with note}
- Evidence support: {pass/fail with note}
- Depth check: {can drill deeper / at root level}

**Recommendation:**
{Accept as root cause / Drill deeper with suggested question / Gather more evidence}

Note: Multiple root causes are possible. A problem can have several contributing roots that all need addressing.
