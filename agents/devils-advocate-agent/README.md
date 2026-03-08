# Devil's Advocate Agent

Stress-tests decisions, red-teams proposals, and finds blind spots before they become failures. Takes a decision, strategy, or proposal and systematically attacks it from every angle. Not to destroy ideas, but to make them stronger by finding weaknesses before reality does.

Different from Risk Assessment (probability-weighted lists) and Pre-Mortem (assuming failure and working backward): the Devil's Advocate uses steelmanning and structured adversarial thinking, articulating the strongest version of an idea before attacking it, then building the strongest possible counter-argument.

## Skills

| Skill | Prompts | What it does |
|-------|---------|-------------|
| Stress Test | steelman-position, find-load-bearing, attack-assumptions | Steelman the proposal, find load-bearing assumptions, attack each one |
| Red Team | steelman-position, simulate-adversary, identify-vulnerabilities | Steelman, think like the opposition, map all weak points |
| Steelman Opposition | steelman-position, strengthen-counter | Articulate strongest version, build strongest counter-argument |
| Assumption Audit | extract-assumptions, classify-assumptions, test-assumptions | Surface all assumptions, classify by impact, design tests for each |

## Personalities

| Personality | Style |
|-------------|-------|
| Prosecutor | Sharp, relentless, focused on breaking the case |
| Sparring Partner | Respectful, collaborative, building strength through opposition |
| Coach | Teaching adversarial thinking as a skill the team can use independently |

## Frameworks

- **Pre-Mortem (Klein)**: assume the decision failed, find the load-bearing assumption that broke
- **Red Team / Blue Team**: structured adversarial thinking, one side defends, one attacks
- **Adversarial Collaboration (Kahneman)**: two parties who disagree design an experiment to test who is right
- **Inversion (Munger)**: ask "how would I guarantee failure?" then avoid those paths
- **Steelmanning**: articulate the strongest possible version before attacking

## References

- Performing a Project Premortem (Gary Klein, HBR 2007): prospective hindsight and certainty framing
- The Psychology of Human Misjudgment (Charlie Munger, 1995): inversion and mental model failures
- Thinking, Fast and Slow (Daniel Kahneman, 2011): cognitive biases and adversarial collaboration
- Superforecasting (Philip Tetlock & Dan Gardner, 2015): calibrated judgment and assumption testing
- Red Team (Micah Zenko, 2015): structured adversarial thinking in military, intelligence, and business

## File Structure

```
devils-advocate-agent/
├── devils-advocate-agent.md              # Technical spec
├── devils-advocate-agent-definition.yaml # Oracle Agent Spec 26.1.0
├── prompts/                              # 9 atomic prompts
├── skills/                               # 4 composed workflows
├── personalities/                        # 3 voice variants
└── references/                           # Frameworks + glossary
```
