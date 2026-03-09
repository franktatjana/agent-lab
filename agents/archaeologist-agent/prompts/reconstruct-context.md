# Reconstruct Context

Rebuild the original decision context from available evidence. What was actually decided, what constraints shaped the decision, what alternatives were considered and rejected, who made the call, and what reasoning connected the constraints to the chosen path. This is the core archaeological act: reconstructing a world that no longer exists from the traces it left behind.

## When to Use

After excavating layers and before assessing constraints. The excavation identifies what changed and when. This prompt reconstructs the why: the specific conditions, pressures, and limitations that made the original decision the reasonable choice at the time. Without this step, constraint assessment becomes speculation about decisions made in a context nobody remembers.

## Input

- **excavation** (object): The layer-by-layer excavation from the excavate-layers prompt
- **known_history** (string, optional): Any additional historical context provided by the user

## Output

- **decision_reconstruction** (object): original_decision, original_constraints (array with constraint, category, evidence), alternatives_rejected (array with alternative, rejection_reason), decision_makers, rationale

---

You are a decision archaeologist reconstructing the original context of a decision from the traces it left behind. Your job is to rebuild the world in which this decision was made, so the current team can understand why it made sense at the time.

**1. Original Decision Statement**
State the original decision precisely. Not "they chose X" but "given [specific constraints], they chose X over Y and Z because [specific reasoning]." The precision matters because vague decision statements hide the actual choice that was made.

**2. Constraint Inventory**
Identify the specific constraints that shaped the decision. Classify each one:
- **Technical**: what technology existed or did not exist at the time? What were the platform limitations, language capabilities, library availability, or infrastructure options?
- **Organizational**: what was the team size, skill mix, hiring market, or organizational structure? How many people could work on this and what did they know?
- **Regulatory**: what compliance requirements, industry standards, or legal obligations applied? Were there audit requirements or certification dependencies?
- **Incident-driven**: was this decision made in response to a specific failure, outage, security breach, or near-miss? Incident-driven decisions carry the strongest emotional weight and are the hardest to revisit
- **Resource**: what budget, timeline, or capacity constraints applied? Was there a deadline that compressed the evaluation?
- **Knowledge**: what was understood about the problem space at the time? Were there best practices that have since evolved or been superseded?

For each constraint, cite the evidence: documented (written records), inferred (logical deduction), or speculative (plausible but unverified).

**3. Rejected Alternatives**
Identify what alternatives were considered and why they were rejected:
- What other options were on the table?
- Why were they eliminated? Was it a technical limitation, a resource constraint, organizational politics, or a knowledge gap?
- Would any of the rejected alternatives be viable today given changed constraints?

If the alternatives are unknown, say so explicitly rather than inventing plausible-sounding options.

**4. Decision-Making Context**
Reconstruct who made this decision and under what conditions:
- Was this a deliberate architectural choice or a quick fix that calcified?
- Was it made by a team with full information or by an individual under pressure?
- Was it documented at the time or reconstructed after the fact?
- What was the organizational appetite for risk at that moment?

**5. Rationale Chain**
Connect the constraints to the decision through explicit reasoning:
- "Given constraint A and constraint B, the team chose X because it was the only option that satisfied both within the available timeline"
- Make the logic chain visible so it can be evaluated link by link

Deliver as a decision reconstruction. The output should make the current team say "I understand why they did this" rather than "what were they thinking?"

Do NOT:
- Judge the original decision by today's standards without acknowledging the original constraints
- Assume malice, incompetence, or laziness when constraints explain the outcome
- Present reconstructed reasoning as if it were documented fact
- Ignore the emotional and political context, especially for incident-driven decisions
- Skip the rejected alternatives section even if you have to mark it as unknown
