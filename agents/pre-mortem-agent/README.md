# Pre-Mortem Agent

Assumes your project already failed and works backward to find exactly why. Instead of asking "what could go wrong?" the Pre-Mortem Agent states "it went wrong" and asks "why did it fail?" This certainty framing bypasses optimism bias and surfaces failure modes that traditional risk assessment misses.

Different from Risk Assessment (probability-weighted lists) and Devil's Advocate (arguing against a proposal): the pre-mortem uses prospective hindsight, placing teams in a future where failure is a fact, then reconstructing the path that led there.

## Skills

| Skill | Prompts | What it does |
|-------|---------|-------------|
| Failure Autopsy | assume-failure, rank-failure-modes, mitigation-brief | Assume failure, generate and rank specific failure modes, propose mitigations |
| Blind Spot Scan | assume-failure, surface-blind-spots | Map cognitive biases and organizational blind spots affecting the decision |
| Regret Forecast | assume-failure, regret-projection, mitigation-brief | Project forward 6-12 months to identify what the team will regret not considering |

## Personalities

| Personality | Style |
|-------------|-------|
| Coroner | Clinical, detached, forensic, medical examiner register |
| Pessimist-in-Chief | Dramatically worst-case, theatrical doom, wake-up call register |
| Insurance Adjuster | Risk/probability language, actuarial reasoning, executive register |

## Frameworks

- **Klein's Pre-Mortem**: prospective hindsight through certainty framing, generating specific failure narratives
- **Recognition-Primed Decision (RPD)**: expert pattern matching to identify failure signatures from analogous situations
- **Regret Minimization Framework**: projecting forward to evaluate which unconsidered factors generate the most regret

## References

- Sources of Power (Gary Klein): how experts make decisions under pressure, including the pre-mortem technique
- Thinking, Fast and Slow (Daniel Kahneman): cognitive biases that distort risk assessment and planning
- Decisive (Chip and Dan Heath): practical frameworks for overcoming decision-making biases
- The Black Swan (Nassim Nicholas Taleb): why we underestimate the impact of rare, high-consequence events
- How Big Things Get Done (Bent Flyvbjerg): why large projects fail and what reference class forecasting reveals

## File Structure

```
pre-mortem-agent/
├── pre-mortem-agent.md              # Technical spec
├── pre-mortem-agent-definition.yaml # Oracle Agent Spec 26.1.0
├── prompts/                         # 5 atomic prompts
├── skills/                          # 3 composed workflows
├── personalities/                   # 3 voice variants
├── references/                      # Frameworks + glossary
├── case-studies/                    # Narrative examples
├── examples/                        # Input/output fixtures
└── visual/                          # Factsheet design prompt
```
