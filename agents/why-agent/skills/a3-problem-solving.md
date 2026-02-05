# A3 Problem Solving

Structure problem analysis on Toyota's A3 format: a single-page document capturing background, analysis, and countermeasures.

## Workflow

1. **Background**: Establish context and why this problem matters
2. **Current condition**: Describe what's happening now (facts, not opinions)
3. **Goal**: Define the target state
4. **Root cause analysis**: Apply 5 Whys and/or Fishbone
5. **Countermeasures**: Propose actions to address root causes
6. **Implementation plan**: Who, what, when
7. **Follow-up**: How will we know if it worked?

## Inputs

```yaml
problem: string           # The problem to solve
context: string           # Background information
owner: string             # Who owns this problem (optional)
deadline: string          # Target resolution date (optional)
```

## Outputs

```yaml
a3_document:
  title: string
  owner: string
  date: string

  background:
    why_it_matters: string
    scope: string
    stakeholders: list

  current_condition:
    facts: list
    data: list
    gap: string  # Difference between current and desired state

  goal:
    target_state: string
    success_metrics: list
    timeline: string

  analysis:
    method: string  # 5 Whys, Fishbone, or both
    questioning_sequence: list  # From drill-down skill
    root_causes: list

  countermeasures:
    - action: string
      addresses: string  # Which root cause
      owner: string
      due_date: string
      status: not_started | in_progress | complete

  implementation_plan:
    phases: list
    resources_needed: list
    risks: list

  follow_up:
    review_date: string
    success_criteria: list
    metrics_to_track: list
```

## Skills Used

- [drill-down](drill-down.md): 5 Whys analysis
- [fishbone-analysis](fishbone-analysis.md): Categorized cause exploration

## Prompts Used

- [ask-why](../prompts/ask-why.md): Root cause questioning
- [categorize-cause](../prompts/categorize-cause.md): Fishbone categories
- [verify-root](../prompts/verify-root.md): Confirm root causes

## References Loaded

- [five-whys-guide](../references/five-whys-guide.md): 5 Whys methodology
- [fishbone-categories](../references/fishbone-categories.md): Category framework

## A3 Principles

**One page**: Forces conciseness and clarity. If it doesn't fit, you don't understand it well enough.

**Visual**: Use diagrams where possible (fishbone, timeline, data charts)

**Collaborative**: A3 is a thinking tool, not just documentation. Share drafts, get input.

**PDCA embedded**: Plan (analysis + countermeasures), Do (implement), Check (follow-up), Act (adjust)

**Living document**: Update as understanding evolves and actions complete

## Section Guidelines

### Background
- Why does this problem matter to the organization?
- What's the business impact?
- Keep it brief: 2-3 sentences

### Current Condition
- Facts only, no opinions or assumptions
- Include data where available
- Describe the gap between current and desired state

### Goal
- Specific, measurable target
- Timebound
- Connected to business need in background

### Analysis
- Show your work: the questioning chain
- Identify root causes (may be multiple)
- Distinguish symptoms from causes

### Countermeasures
- Each countermeasure addresses a specific root cause
- Actions are specific and assignable
- Not "improve communication" but "establish weekly sync between teams A and B"

### Follow-up
- How will you know if countermeasures worked?
- What metrics will you track?
- When will you review?

## Example

```markdown
# A3: Customer Onboarding Delays

**Owner:** Product Team | **Date:** 2024-01-15

## Background
New customers wait 5+ days to complete onboarding. This causes 15% to abandon before first value. Q1 target requires reducing this to <2 days.

## Current Condition
- Average onboarding: 5.2 days
- 47% of time spent waiting for approvals
- Manual data entry required at 3 steps
- 15% abandonment before completion

**Gap:** 5.2 days vs. target of 2 days (3.2 day gap)

## Goal
Reduce onboarding time to <2 days by end of Q1
- Success metric: 90% of customers complete in <48 hours
- Secondary: Reduce abandonment to <5%

## Analysis
**Method:** 5 Whys + Fishbone

Why are customers waiting 5+ days?
→ Approval steps take 2+ days each
→ Approvals are manual and asynchronous
→ No automated approval for standard cases
→ System designed before scale; never updated
→ **Root cause: No process to update onboarding as company scaled**

Fishbone identified additional causes:
- Process: Manual steps that could be automated
- Technology: Legacy system without API integration
- People: Approval team understaffed for volume

## Countermeasures

| Action | Addresses | Owner | Due |
|--------|-----------|-------|-----|
| Auto-approve standard cases | Manual approvals | Eng | Jan 30 |
| Parallel approval workflow | Sequential wait | Ops | Feb 15 |
| Add 2 FTEs to approval team | Understaffing | HR | Feb 1 |
| API integration for data entry | Manual entry | Eng | Mar 1 |

## Follow-up
- Weekly metrics review starting Feb 1
- Track: time-to-completion, abandonment rate, approval queue depth
- Full review: Mar 15
```
