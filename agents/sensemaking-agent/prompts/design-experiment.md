# Design Experiment

Design safe-to-fail probes for complex situations where analysis alone cannot resolve the ambiguity. In complex domains, the system is adaptive and unpredictable. The only way to learn is to act at small scale, observe what emerges, and adapt based on what you learn. This prompt designs experiments that generate learning without requiring large commitments.

## When to Use

After the domain has been classified as complex (or partially complex) using the classify-cynefin prompt. This prompt takes the classification and designs concrete experiments the team can run to learn about the situation through action. The probes are "safe-to-fail" rather than "fail-safe": they are designed so that failure is informative and affordable, not catastrophic.

## Prompt

You are designing safe-to-fail probes for a complex situation. Analysis has reached its limits. The team needs to learn through action, but the stakes are too high for large-scale experimentation. Your job is to design small experiments that generate maximum learning with minimum risk.

**1. Probe Design Principles**
Each probe must meet these criteria:
- **Safe to fail**: the worst-case outcome of this probe is tolerable. Define what tolerable means in concrete terms (cost, reputation, time, relationships)
- **Observable**: the probe will produce signals the team can detect and interpret. Define what you will observe and how
- **Time-bounded**: the probe has a clear start, end, and observation period. No open-ended experiments
- **Reversible**: the probe can be stopped or reversed without lasting damage. If it cannot be reversed, the scope must be small enough that the irreversible effect is acceptable
- **Diverse**: design multiple probes that test different hypotheses. Do not bet on a single experiment

**2. Probe Structure**
For each probe, specify:
- **Hypothesis**: what are you trying to learn? State it as: "If [action], we expect to see [signal]. If we see [alternative signal] instead, it means [implication]"
- **Action**: the specific, concrete action to take. Small enough to execute within days, not weeks
- **Observation plan**: what to watch for, how to measure it, and how long to observe before drawing conclusions
- **Success signal**: what would you see if the hypothesis is correct?
- **Failure signal**: what would you see if the hypothesis is wrong? (This is equally valuable)
- **Abort criteria**: what signal tells you to stop the probe immediately?
- **Cost**: time, money, political capital, and relationship capital required

**3. Portfolio Design**
Design 2-4 probes as a portfolio, not a single bet:
- **Complementary probes**: at least two probes should test competing hypotheses. If both succeed, the situation is more nuanced than either hypothesis captured
- **Oblique probes**: include at least one probe that approaches the situation from an unexpected angle. The most informative probes are often the ones that test assumptions the team did not know they held
- **Coherence check**: the portfolio should cover the key uncertainties from the situation assessment. If three major uncertainties were identified, the probes should address all three, not just the most convenient one

**4. Learning Integration**
For the portfolio as a whole:
- **Decision point**: after the probes complete, what decision will the team be better positioned to make?
- **Convergence scenario**: if the probes produce consistent results, what does the team do next?
- **Divergence scenario**: if the probes produce contradictory results, what does that tell the team about the situation?
- **Next probe cycle**: how do the results of these probes inform the design of the next round?

Deliver the probe portfolio as a structured brief. Each probe should take no more than 3-5 lines to describe. The brief should be actionable within 1-2 weeks.

## Tips

- The word "safe-to-fail" does the heavy lifting. Teams in complex domains often default to large-scale pilots that take months and cost millions. A safe-to-fail probe costs days and hundreds. The learning-per-dollar is orders of magnitude higher.
- Failure is the point. A probe that fails teaches you something. A probe that cannot fail is not a probe, it is a demonstration, and it teaches you nothing new.
- Oblique probes produce the best insights. Testing the obvious hypothesis confirms what you already suspect. Testing the non-obvious hypothesis reveals what you did not know you did not know.
- The abort criteria matter. A probe without abort criteria is not safe to fail because the team will not know when to stop. Define the tripwire before you start.
- Political probes are real. In organizational complexity, a "probe" might be a conversation with a key stakeholder to test their reaction to a preliminary idea. The observation is their response. The learning is whether they are an ally, an obstacle, or an amplifier.
