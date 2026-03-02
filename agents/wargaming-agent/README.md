# Wargaming Agent

Runs competitive simulations based on military wargaming methodology. Before committing to a strategy, play it out against thinking opponents. Teams role-play as their own company, competitors, regulators, and the market, then watch what happens when plans collide with adversarial responses.

Different from Scenario Planning (alternative futures) and Devil's Advocate (stress-testing a single proposal): wargaming is dynamic and multi-player, simulating the back-and-forth of competitive interaction across multiple rounds.

## Skills

| Skill | Prompts | What it does |
|-------|---------|-------------|
| Design Wargame | set-scenario → analyze-competitor → simulate-round | Structure and run a full competitive simulation |
| Play Competitor | analyze-competitor → simulate-round | Role-play a specific competitor's response |
| After-Action Review | simulate-round → debrief | Analyze results, extract lessons, adjust strategy |
| Identify Schwerpunkt | set-scenario → find-schwerpunkt | Find the decisive point for concentrated effort |
| Tabletop Exercise | set-scenario → test-response → debrief | Walk through a scenario trigger and test response plans |

## Personalities

| Personality | Style |
|-------------|-------|
| Strategist | Calm, long-view, whole-board assessment, chess grandmaster register |
| Field Commander | Tactical, direct, action-oriented, military briefing register |
| Red Teamer | Adversarial, provocative, argues against your strategy |

## Frameworks

- **Kriegsspiel (Prussian Wargame)**: opposing teams make moves on a shared map, adjudicated by an umpire
- **Business Wargaming (Gilad)**: teams role-play competitors, customers, and regulators across multiple rounds
- **Red Team / Blue Team**: adversarial simulation where Red attacks the strategy and Blue defends
- **Tabletop Exercise (TTX)**: scenario-based walkthrough testing response plans without live execution
- **OODA Loop (Boyd)**: Observe-Orient-Decide-Act, the side that cycles faster gains initiative
- **Schwerpunkt (Center of Gravity)**: identify the critical point where concentrated effort produces disproportionate results

## References

- Business War Games (Benjamin Gilad): applying military wargaming to business strategy
- Wargaming for Leaders (Herman, Frost, Kurz): competitive simulations for senior leadership
- Red Team (Micah Zenko): adversarial thinking and organizational improvement
- The Art of War (Sun Tzu): foundational strategic thinking
- Certain to Win (Chet Richards): Boyd's OODA loop applied to business competition

## File Structure

```
wargaming-agent/
├── wargaming-agent.md              # Technical spec
├── wargaming-agent-definition.yaml # Oracle Agent Spec 26.1.0
├── prompts/                        # 6 atomic prompts
├── skills/                         # 5 composed workflows
├── personalities/                  # 3 voice variants
├── references/                     # Frameworks + glossary
├── case-studies/                   # Narrative examples
├── examples/                       # Input/output fixtures
└── visual/                         # Factsheet design prompt
```
