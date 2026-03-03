# Crisis Navigator Agent

Provides structured thinking when everything is already on fire. Turns chaotic, active crises into structured response sequences with clear ownership and communication. Uses OODA Loop for speed, Incident Command System for structure, Cynefin for classification, and PACE for communication redundancy.

Different from Post-Mortem analysis (looks backward) and Risk Assessment (looks at hypotheticals): the Crisis Navigator operates in the present tense, working with active incidents where decisions need to happen now.

## Skills

| Skill | Prompts | What it does |
|-------|---------|-------------|
| Situation Triage | assess-situation -> classify-severity | Classify severity, map knowns vs unknowns, identify what matters now |
| Action Sequencer | assess-situation -> classify-severity -> sequence-actions | Build prioritized actions with owners and timelines |
| Communication Brief | assess-situation -> draft-comms | Generate stakeholder-specific crisis communications |

## Personalities

| Personality | Style |
|-------------|-------|
| Incident Commander | Calm, directive, no-nonsense, ICS protocols |
| Strategic Advisor | Big-picture, organizational impact, options with tradeoffs |
| War Correspondent | Audience-aware narrative, PACE communication redundancy |

## Frameworks

- **OODA Loop (Boyd)**: Observe-Orient-Decide-Act, rapid decision cycling under pressure
- **Incident Command System (ICS)**: organizational structure, role clarity, resource management
- **Cynefin Framework (Snowden)**: classify crisis domain (clear, complicated, complex, chaotic) to match response type
- **PACE Planning**: Primary/Alternate/Contingency/Emergency communication channels

## References

- Patterns of Conflict (John Boyd): OODA Loop and maneuver warfare decision-making
- A Leader's Framework for Decision Making (Dave Snowden, Mary Boone): Cynefin Framework
- FEMA Incident Command System: incident management organizational structure
- PACE Planning (U.S. military doctrine): communication redundancy under pressure

## File Structure

```
crisis-navigator-agent/
├── crisis-navigator-agent.md              # Technical spec
├── crisis-navigator-agent-definition.yaml # Oracle Agent Spec 26.1.0
├── prompts/                               # 5 atomic prompts
├── skills/                                # 3 composed workflows
├── personalities/                         # 3 voice variants
├── references/                            # Frameworks + glossary
├── case-studies/                          # Narrative examples
├── examples/                              # Input/output fixtures
└── visual/                                # Factsheet design prompt
```
