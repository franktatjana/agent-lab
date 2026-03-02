# Design Wargame

Full competitive simulation: set up the game board, analyze the players, then play out the rounds.

## Prompts Used

1. **set-scenario** - Define the strategic question, players, stakes, and round structure
2. **analyze-competitor** - Build a decision-making profile for each named competitor
3. **simulate-round** - Play out move-countermove sequences for each round

## Workflow

[Set Scenario] → wargame brief → [Analyze Competitor] (repeated per competitor) → competitor dossiers → [Simulate Round] (repeated per round) → round reports → strategic assessment

## When to Use

- You're launching a new product and need to anticipate competitive response before committing resources
- You're entering a new market and want to test whether incumbents will fight, ignore, or co-opt you
- A major competitor just made a move and you need to simulate second and third-order effects before reacting
- Leadership is debating between strategic options and needs to see how each one plays out against real competitors
- You're preparing for a board meeting and want to demonstrate that competitive scenarios have been rigorously tested

## What You Get

1. A structured wargame brief with named players, defined stakes, and round structure
2. Competitor dossiers grounding each player's moves in their actual resources, culture, and incentives
3. Round-by-round simulation showing moves, countermoves, market reactions, and position shifts
4. A cumulative strategic assessment showing who gains and who loses across the full simulation

## Example Input

"We're planning to launch a developer-focused analytics platform in Q3. Our main competitors are Datadog (dominant, high-price), Grafana Labs (open-source, growing fast), and New Relic (struggling, might pivot). We'd price 40% below Datadog and target mid-market teams who find Datadog too expensive but need more than free Grafana. Budget is $5M for the first year. Should we go ahead?"

## Tips

- Run the full skill with 2-3 rounds minimum. One round gives you reactions. Three rounds reveal whether those reactions cascade into something that changes the whole picture.
- Feed the competitor dossiers into each round. The simulation quality depends entirely on whether competitor moves are grounded in real profiles or hypothetical behavior.
- After the simulation completes, check whether the original strategic question is still the right question. Wargames often reveal that the real decision is different from the one you started with.
