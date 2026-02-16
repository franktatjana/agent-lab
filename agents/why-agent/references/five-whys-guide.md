# Five Whys Guide

A reference framework for conducting effective 5 Whys root cause analysis.

## When to Load

- Starting a drill-down analysis
- Training someone on root cause methodology
- Reviewing quality of a 5 Whys sequence

## Origin

Developed by Sakichi Toyoda and used within Toyota during the evolution of the Toyota Production System. The technique became integral to the company's problem-solving culture and later spread globally through Lean manufacturing.

## The Core Principle

**Ask "why" iteratively until you reach an actionable root cause.**

"Five" is a rule of thumb, not a requirement. Some problems need three whys; others need seven. Stop when you reach something you can actually fix.

## What Makes a Good "Why" Question

### Good Questions

- **Specific**: "Why did the server run out of memory?" (targets the specific failure)
- **Causal**: "Why wasn't the deployment tested?" (seeks cause, not blame)
- **Open**: "Why did customers not receive the notification?" (invites explanation)

### Bad Questions

- **Blaming**: "Why didn't anyone think of this?" (points at people, not systems)
- **Vague**: "Why is everything always broken?" (too broad to answer)
- **Leading**: "Don't you think we should have tested this?" (assumes the answer)
- **Closed**: "Did you test it?" (yes/no doesn't reveal cause)

## Recognizing Root Cause

You've likely reached root cause when:

1. **Actionable**: You can do something about it
2. **Preventive**: Fixing it would prevent recurrence
3. **Systemic**: It's a process/system issue, not a one-time mistake
4. **Deep enough**: Another "why" would be circular or outside your control

## Common Stopping Points

### Too Shallow
- "Human error" → Why was human error possible?
- "Lack of training" → Why wasn't training provided?
- "Miscommunication" → Why did miscommunication happen?

### Appropriate Depth
- "No process exists to verify X before deployment"
- "System allows invalid state that causes Y"
- "Feedback loop from A to B is missing"

### Too Deep (outside your control)
- "That's how physics works"
- "The vendor's architecture doesn't support it"
- "Market conditions changed"

## Handling Multiple Branches

Sometimes one "why" has several valid answers:

Why did the deployment fail?
├── Database migration had a bug
├── Config wasn't updated for production
└── Monitoring didn't catch the error

Options:
1. Pursue all branches if resources allow
2. Prioritize by likelihood and impact
3. Document unexplored branches for later

## Common Anti-Patterns

### The Blame Loop

Why did it fail? → Developer made a mistake
Why did they make a mistake? → They weren't careful
Why weren't they careful? → They didn't care enough

**Fix**: Ask "Why was it possible to make this mistake?" instead.

### The Circular Loop

Why did A happen? → Because of B
Why did B happen? → Because of C
Why did C happen? → Because of A

**Fix**: Identify the reinforcing loop and ask what could break it.

### The Premature Stop

Why did it fail? → We didn't test it
[Stops here]

**Fix**: Ask "Why didn't we test it?" to find the systemic issue.

### The External Blame

Why did it fail? → The vendor's system is bad
[Stops here]

**Fix**: Ask "Why are we dependent on this vendor?" or "Why don't we have a workaround?"

## Facilitation Tips

### For Individuals
- Write down each level
- Resist jumping to solutions
- Be honest even when uncomfortable
- Verify with evidence, not assumptions

### For Groups
- One person facilitates, doesn't answer
- No interrupting during someone's answer
- All perspectives valid during brainstorming
- Prioritize after all ideas captured

### For Sensitive Topics
- Focus on process, not people
- Use "we" language
- Acknowledge systemic pressures
- Separate fact-finding from action planning

## Verification Checklist

Before concluding root cause analysis, check:

- [ ] If we fix this, would the problem stop recurring?
- [ ] Is this something we can actually change?
- [ ] Is this specific enough to address?
- [ ] Do we have evidence this is the cause?
- [ ] Have we considered multiple causal paths?

## Integration with Other Tools

**5 Whys + Fishbone**: Use Fishbone to brainstorm causes across categories, then 5 Whys to drill into each

**5 Whys + A3**: 5 Whys forms the "Analysis" section of A3

**5 Whys + Systems Thinking**: If root cause involves feedback loops or emergent behavior, hand off to systems analysis

## Resources

- [Toyota Production System (Taiichi Ohno)](https://www.amazon.com/Toyota-Production-System-Beyond-Large-Scale/dp/0915299143)
- [The Lean Startup (Eric Ries)](https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898) - Chapter on Five Whys
- [Lean Enterprise Institute](https://www.lean.org/)
