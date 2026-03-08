# Trace Backward

From the desired future state, work backward to identify the decisions, milestones, and capabilities that must be in place at each stage. Backcasting reverses the usual planning direction: instead of asking "what can we do next?" it asks "what must have already happened for this future to be possible?" This reversal surfaces dependencies and sequencing requirements that forward planning misses.

## When to Use

After the define-future prompt has articulated a specific, measurable desired future state. This prompt takes that destination and maps the path backward to the present, identifying what must be true at each stage for the next stage to be possible. The output is a reverse-engineered roadmap that shows not just what to do but what order to do it in and what must be in place before each step can succeed.

## Prompt

You have a desired future state with specific, measurable dimensions. Your job is to work backward from that future to the present, identifying the decisions, milestones, and capabilities required at each stage.

**1. Stage Definition**
Divide the time horizon into 3-4 stages working backward from the future:
- **Stage N (destination)**: the desired future state as defined
- **Stage N-1**: what must be true 12-18 months before the destination for Stage N to be achievable?
- **Stage N-2**: what must be true 12-18 months before Stage N-1?
- **Stage 0 (present)**: where the organization is today

The stages should reflect natural decision cycles and commitment points, not arbitrary calendar divisions. If the organization makes annual budget decisions, stage boundaries should align with budget cycles.

**2. Backward Logic**
For each stage (working backward from the destination):
- **Prerequisites**: what capabilities, resources, relationships, or conditions must exist at this stage for the next stage to be possible? These are the hard dependencies
- **Decisions**: what choices must be made at this stage? What options are being opened or closed?
- **Investments**: what money, time, or talent must be committed at this stage? What is the cost of reaching this point?
- **Evidence**: what would the team observe that confirms they have reached this stage? What metrics or milestones mark arrival?

**3. Critical Path Identification**
From the full backward map, identify:
- **Bottleneck stages**: where is the path narrowest? Which stage has the most prerequisites and the least margin for delay?
- **Irreversible decisions**: which decisions, once made, foreclose other options? These deserve the most pre-decision analysis
- **Long-lead items**: which capabilities or resources take the longest to build? These must start earliest, even if they are not needed until later stages
- **Parallel paths**: which streams of work can proceed independently? Which must sequence?

**4. Gap Analysis**
Compare Stage 0 (present) to Stage 1 (the first future stage):
- What is the gap between where the team is today and what must be true at the first milestone?
- Is the gap bridgeable in the available time? If not, either the timeline or the ambition needs adjustment
- What is the single highest-risk gap, the one that, if not closed, makes the entire backcast path impossible?

**5. Decision Calendar**
Deliver a reverse-engineered timeline:
- What must be decided and by when?
- What must be started now to be ready on time?
- What can be deferred until a later stage without jeopardizing the path?
- Where are the "no later than" deadlines, after which a decision or investment cannot catch up to the required timeline?

Deliver: the staged backward map, critical path analysis, gap analysis, and decision calendar. The output should tell the team what to do first, what to do next, and where the path is most fragile.

## Tips

- The backward logic is the mechanism. Forward planning asks "what should we do?" and generates activities. Backward planning asks "what must already be true?" and generates dependencies. Dependencies are more useful than activities because they reveal sequencing constraints that forward planning overlooks.
- Long-lead items are the most actionable output. The capabilities that take 18+ months to build must start now even if the team does not feel urgency. By the time urgency arrives, it is too late to begin. The backcast makes this timing visible.
- Irreversible decisions deserve the most attention. A decision that can be reversed if circumstances change is low-stakes. A decision that forecloses future options, signing a 5-year exclusive contract, committing to a technology platform, entering a market that requires localized infrastructure, deserves thorough analysis before commitment.
- The gap analysis is the reality check. If Stage 0 to Stage 1 requires capabilities the team does not have and cannot build in the available time, the backcast has revealed that the desired future is unreachable on the current timeline. This is a valuable finding, not a failure of the exercise.
