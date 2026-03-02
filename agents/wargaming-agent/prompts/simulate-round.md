# Simulate Round

Play out a move-countermove sequence between all players. Your side makes a move, each competitor responds, regulators react, customers shift.

## When to Use

When the game board is set (scenario defined, competitors analyzed) and you're ready to play. Each round is a full cycle: you move, they respond, the market adjusts. Run this prompt once per round, feeding the output of each round into the next. This is where the wargame becomes a simulation instead of a strategy deck.

## Prompt

You are running a wargame round. You have a scenario, competitor profiles, and (if this isn't Round 1) the results of previous rounds. Play out one complete turn of the simulation.

**1. Your Move**
State the proposed action clearly:
- What specifically are you doing? (launching, pricing, hiring, partnering, acquiring, repositioning)
- What resources does this commit? (budget, team focus, timeline, opportunity cost)
- What signal does this send to the market? (aggressive, defensive, innovative, desperate)
- What are you giving up by choosing this move over alternatives?

**2. Competitor Responses**
For each named competitor, simulate their response. Base predictions on their competitor profile, not on what would be "rational":
- **Detection**: how quickly do they notice your move? Days, weeks, quarters?
- **Interpretation**: how do they read your move? (threat, opportunity, irrelevant?)
- **Decision process**: given their cultural DNA, how do they decide what to do?
- **Response**: what specific action do they take? Include timeline and resource commitment
- **Second-order**: does their response trigger anything from other competitors?

Do not make every competitor respond aggressively. Some will ignore you. Some will wait. Some will misread your intent entirely. Realistic simulations include inaction and misperception.

**3. Market Reaction**
How do customers and the broader market respond to the combined moves:
- **Customer segments**: which segments notice? Which care? Who switches, who stays, who waits?
- **Pricing dynamics**: does anyone's move create pricing pressure? Does the market expand or compress?
- **Perception shift**: how does the market narrative change? Who's seen as winning?
- **Talent market**: do any moves trigger hiring wars, talent flight, or recruiting advantages?

**4. Regulatory Response**
If applicable:
- Does any move trigger regulatory attention?
- Are there pending regulatory changes that interact with the moves made?
- Does the combined competitive activity create antitrust or compliance considerations?

**5. Updated Position Assessment**
After all moves resolve:
- **Position change**: how has each player's position shifted relative to the start of the round?
- **New information**: what does this round reveal that wasn't visible before?
- **Momentum**: who has initiative going into the next round?
- **Surprise check**: did anything happen that the original scenario didn't anticipate? If so, flag it as an assumption that needs revisiting

Deliver as a round report. Be specific about timelines, magnitudes, and confidence levels. "Competitor A might respond" is not a simulation. "Competitor A detects the move within 2 weeks via their enterprise sales team overlap, interprets it as a direct threat to their mid-market segment, and accelerates their planned Q3 feature release to Q2" is a simulation.

## Tips

- The most realistic simulations include at least one competitor who does nothing. Not every move provokes a response.
- Time delays matter enormously. A competitor who takes 6 months to respond to a move you make in Q1 is responding to a different market than the one that existed when you moved.
- If every round ends with you winning, your simulation has a bias problem. Stress-test by playing one round where your move goes worse than expected.
- Track cumulative resource commitments. By round 3, some players should be running out of capacity to respond. Resource exhaustion is a real strategic outcome.
