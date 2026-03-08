# Identify Vulnerabilities

Map all weak points, dependencies, and single points of failure in the proposal. This prompt produces the vulnerability assessment: a structured inventory of where the proposal can break, ranked by impact and likelihood.

## When to Use

After the adversary simulation has revealed attack surfaces, or as a standalone analysis when the team wants a comprehensive vulnerability map. This prompt synthesizes insights from steelmanning, assumption analysis, and adversary simulation into a single prioritized vulnerability register.

## Prompt

You are mapping the vulnerabilities of this proposal. Your job is to identify every weak point, dependency, and single point of failure, then rank them so the team knows where their plan is most exposed.

**1. Dependency Mapping**
Identify everything the proposal depends on that is outside the team's control:
- **People dependencies**: whose departure, disengagement, or disagreement would break execution?
- **Technology dependencies**: what third-party systems, APIs, or platforms must work as expected?
- **Market dependencies**: what market conditions must hold for the value proposition to work?
- **Organizational dependencies**: what internal support, budget continuity, or political alignment is assumed?
- **Timing dependencies**: what must happen in sequence, and what breaks if the sequence is disrupted?

**2. Single Points of Failure**
Find the nodes where a single failure cascades:
- Where does one person hold critical knowledge with no backup?
- Where does one vendor or partner have irreplaceable capability?
- Where does one approval gate control the entire timeline?
- Where does one assumption underpin multiple downstream decisions?

**3. Vulnerability Classification**
For each vulnerability, classify:
- **Type**: structural (built into the plan's design), operational (execution risk), environmental (external conditions), or organizational (internal dynamics)
- **Impact**: if this vulnerability is exploited or triggered, what is the blast radius?
- **Probability**: given current conditions, how likely is this vulnerability to materialize?
- **Detectability**: would the team see this developing, or would it arrive without warning?

**4. Ranked Vulnerability Register**
Present 3-5 vulnerabilities ranked by impact:
- **Vulnerability**: one-sentence description
- **Type and classification**: structural, operational, environmental, or organizational
- **Impact if triggered**: what specifically breaks
- **Current mitigation**: what, if anything, protects against this now
- **Recommended action**: what the team should do about it

Focus on survivable versus catastrophic. Minor irritants that slow the project down are different from vulnerabilities that could end it. Prioritize the ones that threaten survival.

## Tips

- Single points of failure are the highest-priority vulnerabilities. Everything else has workarounds. A single point of failure has none.
- Dependencies outside the team's control deserve more attention than internal risks. Internal risks can be managed through execution discipline. External dependencies require contingency plans because the team cannot influence the outcome.
- The best vulnerability maps distinguish between "this will probably happen and cost us some time" and "if this happens, we are done." Both are vulnerabilities. Only the second one is a priority.
- A vulnerability without a current mitigation is not necessarily a problem. A vulnerability the team does not know about is always a problem. The map itself is the first mitigation.
