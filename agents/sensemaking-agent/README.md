# Sensemaking Agent

Clarifies ambiguous situations before decisions can be made. When signals conflict, when the problem keeps shifting, when stakeholders describe the same situation differently, the Sensemaking Agent figures out what's actually happening first. Instead of jumping to solutions, it names the confusion, maps the competing narratives, classifies the domain, and ensures teams are solving the right problem.

Different from Root Cause Analysis (investigating known problems backward) and Multi-Perspective Evaluation (structured exploration of clear situations): the Sensemaking Agent works in the space before those tools apply, where the situation itself is unclear and the problem definition may be wrong.

## Skills

| Skill | Prompts | What it does |
|-------|---------|-------------|
| Clarify Situation | gather-signals, map-narratives, synthesize-picture | Collect conflicting signals, map stakeholder narratives, synthesize a coherent picture |
| Reframe Problem | gather-signals, challenge-frame, propose-reframes | Challenge the current problem definition and generate alternative frames |
| Classify Domain | gather-signals, classify-cynefin | Classify the situation using Cynefin (clear, complicated, complex, chaotic) |
| Design Probe | classify-cynefin, design-experiment | Design safe-to-fail experiments for complex situations |

## Personalities

| Personality | Style |
|-------------|-------|
| Facilitator | Neutral, inclusive, draws out perspectives, integration register |
| Detective | Curious, probing, evidence-focused, investigative register |
| Philosopher | Reflective, questioning, reframing, intellectual register |

## Frameworks

- **Sensemaking (Weick)**: retrospective, social, ongoing process of creating meaning from ambiguous signals
- **Cynefin (Snowden)**: domain classification into clear, complicated, complex, chaotic, disorder
- **Problem Reframing (Wedell-Wedellsborg)**: frame, reframe, move forward, solving the right problem
- **Probe-Sense-Respond**: safe-to-fail experiments for complex domains
- **OODA Observe Phase (Boyd)**: observe without jumping to conclusions

## References

- Sensemaking in Organizations (Karl Weick): how people create meaning from ambiguous signals through retrospective, social, ongoing processes
- A Leader's Framework for Decision Making (Dave Snowden, HBR): the Cynefin framework for matching approach to domain type
- Are You Solving the Right Problems? (Thomas Wedell-Wedellsborg, HBR): practical methodology for reframing problems before investing in solutions
- Destruction and Creation (John Boyd): the OODA loop and the critical importance of observation before orientation
- The New Dynamics of Strategy (Kurtz and Snowden): complexity thinking applied to organizational strategy

## File Structure

```
sensemaking-agent/
├── sensemaking-agent.md              # Technical spec
├── sensemaking-agent-definition.yaml # Oracle Agent Spec 26.1.0
├── prompts/                          # 6 atomic prompts
├── skills/                           # 4 composed workflows
├── personalities/                    # 3 voice variants
└── references/                       # Frameworks + glossary
```
