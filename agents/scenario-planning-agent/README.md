# Scenario Planning Agent

Builds alternative futures and stress-tests strategy against them. Instead of optimizing for one assumed future, the Scenario Planning Agent constructs multiple plausible scenarios and tests whether a strategy survives across all of them. The biggest strategic risk is not picking the wrong option, it is assuming the future will look like the present.

Different from Forecasting (predicting the most likely outcome) and Trend Analysis (extrapolating current data): scenario planning uses structured uncertainty to build genuinely distinct futures, then tests strategy robustness across all of them.

## Skills

| Skill | Prompts | What it does |
|-------|---------|-------------|
| Identify Uncertainties | scan-environment, rank-uncertainties | Scan driving forces, select the two most critical and uncertain axes |
| Build Scenarios | rank-uncertainties, construct-worlds, name-scenarios | Cross two uncertainties into 4 distinct futures, name each with narrative |
| Wind Tunnel | construct-worlds, test-strategy, identify-signposts | Run strategy through each scenario, assess performance, define early warnings |
| Backcast | define-future, trace-backward | Articulate desired future, work backward to identify required decisions |

## Personalities

| Personality | Style |
|-------------|-------|
| Futurist | Expansive, imaginative, vivid future-painting register |
| Strategist | Analytical, pressure-testing, robustness-focused register |
| Coach | Guiding, questioning, capability-building register |

## Frameworks

- **Shell Scenario Planning (2x2 matrix)**: identify two critical uncertainties, cross them to create four distinct futures
- **Schwartz Method (The Art of the Long View)**: building scenarios as stories, not forecasts
- **Cone of Plausibility**: classify futures by probability from projected through possible
- **Backcasting**: start from a desired future state, work backward to identify necessary steps
- **Wind Tunneling**: test strategy against each scenario to find breaks, strengths, and robustness

## References

- The Art of the Long View (Peter Schwartz): the foundational work on scenario planning as strategic conversation
- Scenarios: The Art of Strategic Conversation (Kees van der Heijden): the Shell methodology for building and using scenarios
- Scenarios: An Explorer's Guide (Shell International): the practitioner's handbook for Shell-style scenario planning
- The Essence of Scenarios (Angela Wilkinson, Roland Kupers): why scenarios work and how to use them effectively
- Strategic Reframing (Rafael Ramirez, Angela Wilkinson): the Oxford approach to scenario planning and strategic foresight

## File Structure

```
scenario-planning-agent/
├── scenario-planning-agent.md              # Technical spec
├── scenario-planning-agent-definition.yaml # Oracle Agent Spec 26.1.0
├── prompts/                                # 8 atomic prompts
├── skills/                                 # 4 composed workflows
├── personalities/                          # 3 voice variants
└── references/                             # Frameworks + glossary
```
