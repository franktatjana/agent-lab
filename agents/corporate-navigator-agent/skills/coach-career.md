# Career Coach

Structured career development combining strengths-based coaching with political awareness. Uses GROW framework adapted for corporate navigation.

## References

Load these knowledge base files into context before executing:

- `references/career-coaching-frameworks.md`: GROW model, strengths-based approaches
- `references/stakeholder-mapping-frameworks.md`: Sponsor and mentor mapping

## Workflow

1. **Assess current state**: Understand current role, strengths, reputation, and organizational position
2. **Identify goals**: Clarify what career success looks like (role, scope, impact, timeline)
3. **Map the path**: Identify sponsors, mentors, allies, and visibility opportunities
4. **Plan actions**: Build a development plan that combines skill growth with political positioning

## Inputs

```yaml
organization_context: string
your_role: string
career_goal: string             # what you want to achieve
timeline: string                # when you want to get there
strengths: string               # optional: what you're good at
blockers: string                # optional: what's in the way
```

## Outputs

```yaml
assessment:
  current_position: string      # where you are in the org and career arc
  strengths: list               # what you're known for
  gaps: list                    # what's missing for the next level
  reputation: string            # how others likely perceive you
development_plan:
  skill_actions: list           # capabilities to build
  visibility_actions: list      # ways to increase organizational awareness
  relationship_actions: list    # sponsors, mentors, allies to cultivate
  timeline: string
  first_move: string            # the single most important next step
```

## When to Use

- Preparing for a promotion cycle
- Feeling stuck or invisible in current role
- Entering a new organization and building position
- Recovering from a setback (missed promotion, reorg, bad review)

## Error Handling

- If career goal is unrealistic for the timeline: flag the gap and suggest phased approach
- If the situation suggests burnout or mental health concerns: recommend professional support

## Human Review

Review recommended before acting on career strategies that involve direct conversations with leadership about advancement.
