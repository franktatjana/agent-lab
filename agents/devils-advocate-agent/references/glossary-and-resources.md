# Glossary and Resources

Core terminology and external resources for the Devil's Advocate Agent's adversarial thinking and decision quality methodology.

## When to Load

Always available as baseline reference. Load when defining terms, grounding analysis in established adversarial thinking frameworks, or providing context to users new to structured devil's advocacy.

## Key Terms

**Steelmanning**: Articulating the strongest possible version of an argument before responding to it. The opposite of strawmanning. In adversarial analysis, steelmanning ensures that vulnerabilities found are genuine weaknesses, not presentation failures.

**Load-Bearing Assumption**: An assumption that, if wrong, causes the entire plan to fail or require fundamental restructuring. Distinguished from significant assumptions (plan adjusts) and decorative assumptions (plan continues). Every plan has 1-3 load-bearing assumptions. Not knowing what they are is the most dangerous position.

**Red Teaming**: Structured adversarial exercise where one team (red) attacks a plan while another (blue) defends it. Originated in military and intelligence contexts. Reveals vulnerabilities that internal review misses because the attacker thinks from a different motivational frame.

**Inversion**: Charlie Munger's thinking tool: instead of asking "how do I succeed?" ask "how would I guarantee failure?" The answers reveal the most likely failure paths because they identify actions and conditions that lead directly to the worst outcome.

**Adversarial Collaboration**: Daniel Kahneman's method for resolving disagreements through jointly designed experiments. Two parties who disagree define testable predictions, agree on evidence standards, and design a test. Transforms debates into research questions.

**Pre-Mortem**: Gary Klein's technique of assuming a project has already failed and working backward to identify why. The certainty framing ("it failed") bypasses the optimism bias that weakens traditional risk assessment ("it could fail").

**Survivable Failure**: A failure mode that damages the plan but does not end it. Distinguished from catastrophic failure, where the plan cannot recover. Devil's advocate analysis prioritizes catastrophic risks over survivable ones because survivable failures can be managed during execution.

**Attack Surface**: The set of points where a proposal is vulnerable to adversarial action, environmental change, or assumption failure. Borrowed from cybersecurity. A proposal with a large attack surface has many places where things can go wrong.

**Asymmetric Attack**: An adversary move that is cheap to execute and expensive to counter. The most dangerous competitive moves are asymmetric because they consume the opponent's resources disproportionately.

**Confirmation Bias**: The tendency to search for, interpret, and recall information that confirms pre-existing beliefs. In proposal evaluation, manifests as selective citation of favorable data and dismissal of contradictory signals. Devil's advocacy specifically counteracts confirmation bias.

**Optimism Bias**: The systematic tendency to overestimate the likelihood of positive outcomes and underestimate negative ones. Most plans are optimistically biased because the planning process anchors on the desired outcome rather than base rates.

**Single Point of Failure**: A component or assumption where failure has no workaround or backup. Single points of failure are the highest-priority vulnerabilities because everything else has redundancy options.

**Decisive Question**: The one question that, if the team cannot answer convincingly, suggests the proposal needs revision. The highest-value output of the strengthen-counter prompt. Transforms a broad adversarial analysis into a single, focused challenge.

**Resolution Test**: An experiment or investigation designed to settle a disagreement between the proposal and its strongest counter-argument. Based on Kahneman's adversarial collaboration. The test specifies what evidence would determine which position is correct.

## Recommended Reading

**Performing a Project Premortem** by Gary Klein (HBR, 2007). The foundational article on using prospective hindsight and certainty framing to surface failure modes. Essential reading for the pre-mortem framework that underpins assumption attack.

**The Psychology of Human Misjudgment** by Charlie Munger (1995). The lecture that popularized inversion as a thinking tool. Covers 25 cognitive biases and their interactions. Essential for understanding why smart teams make predictable mistakes.

**Thinking, Fast and Slow** by Daniel Kahneman (2011). The definitive work on cognitive biases that distort risk assessment, planning, and decision-making. Introduces adversarial collaboration as a method for resolving disagreements through evidence rather than debate.

**Superforecasting** by Philip Tetlock and Dan Gardner (2015). Research on what makes people good at prediction: actively seeking disconfirming evidence, updating beliefs, and calibrating confidence. Provides the intellectual foundation for honest assumption testing.

**Red Team** by Micah Zenko (2015). How organizations in military, intelligence, and business contexts use structured adversarial thinking to test strategies and plans. Practical methodology for red-teaming applied to strategic decisions.

**Poor Charlie's Almanack** by Charlie Munger (2005). The collected wisdom of Munger's mental models approach, including inversion, incentive analysis, and the importance of multiple frameworks. Background reading for the multi-framework approach.

## Related Agents

**Pre-Mortem Agent**: Receives handoffs when the devil's advocate analysis reveals that comprehensive failure mode analysis is needed beyond targeted stress-testing. The Pre-Mortem Agent uses Klein's certainty framing to generate full failure narratives with ranked failure modes and mitigation briefs.

**Wargaming Agent**: Receives handoffs when the red-team analysis reveals that competitive response needs move-by-move simulation rather than a single adversary assessment. The Wargaming Agent models multi-round competitive dynamics.

**Sensemaking Agent**: Receives handoffs when the devil's advocate cannot effectively stress-test a proposal because the situation itself is unclear. The Sensemaking Agent clarifies ambiguous situations before adversarial analysis begins.
