# Devil's Advocate Frameworks

The Devil's Advocate Agent draws from five frameworks that address different aspects of structured adversarial thinking. Klein's Pre-Mortem provides certainty framing for assumption failure. Red Team / Blue Team structures adversarial exercises. Adversarial Collaboration (Kahneman) transforms disagreements into testable hypotheses. Inversion (Munger) reveals failure paths by working backward from guaranteed failure. Steelmanning ensures intellectual honesty by requiring engagement with the strongest version of any idea before attacking it. Together, they form a system for finding weaknesses that defensive analysis misses because they challenge the cognitive habits that make those weaknesses invisible.

## When to Load

Load when explaining methodology to users, when selecting the right adversarial approach for a specific proposal, or when the analysis needs deeper grounding in established decision science and adversarial thinking traditions.

## Pre-Mortem (Klein)

Gary Klein developed the pre-mortem technique based on research into prospective hindsight, the cognitive finding that imagining an event has already occurred increases the ability to identify reasons for it by 30%. The standard question "what could go wrong?" triggers defensive responses. The pre-mortem reframes: "it did go wrong, why did it fail?" This certainty framing bypasses the psychological defenses that cause teams to dismiss risks as unlikely.

In the devil's advocate context, the pre-mortem applies specifically to load-bearing assumptions. Instead of asking "could this assumption be wrong?" the agent states "this assumption was wrong, and here is what happened." The certainty frame gives teams permission to explore uncomfortable scenarios that optimism bias would otherwise filter out. Klein's research across military, medical, and business decision-making showed that this technique is particularly effective at surfacing risks that team members were aware of but reluctant to voice.

The critical mechanism is the shift from probability to narrative. A failure mode embedded in a story, "the key hire did not close because the compensation package was not competitive, and by the time the team adjusted, the competitor had launched," is more compelling and actionable than "hiring risk: medium."

**Maps to:** The find-load-bearing and attack-assumptions prompts. The pre-mortem framing is applied to each load-bearing assumption to generate specific failure scenarios.

**Source:** Gary Klein, "Performing a Project Premortem" (Harvard Business Review, 2007). Gary Klein, "Sources of Power: How People Make Decisions" (1998). Published methodology.

## Red Team / Blue Team

Red teaming originated in military and intelligence contexts as a structured method for testing plans against adversarial thinking. The red team's job is to attack the plan as a motivated adversary would. The blue team defends. The exercise reveals vulnerabilities that internal review misses because internal reviewers share the same assumptions, incentives, and information as the plan's authors.

The core principle is perspective shift. Defenders think about what they want to happen. Adversaries think about what they can make happen. A defender asks "will our product succeed in this market?" An adversary asks "how would I destroy this product's market position with the resources available to me?" The questions produce fundamentally different insights because they operate from different motivational frames.

In the devil's advocate context, red teaming applies to the simulate-adversary and identify-vulnerabilities prompts. The agent shifts from evaluating the proposal's merits to evaluating its attack surface: where is it most exposed, who has motivation and capability to exploit that exposure, and what is the cheapest, most effective attack? Micah Zenko's research documented how organizations that institutionalized red teaming made better strategic decisions than those that relied solely on internal review.

The critical insight from red-team practice is asymmetry. The most dangerous adversary moves are the ones that are cheap to execute and expensive to counter. A competitor launching a free tier costs them marginal revenue but forces the team to restructure pricing, messaging, and market positioning.

**Maps to:** The red-team skill, the simulate-adversary and identify-vulnerabilities prompts.

**Source:** Micah Zenko, "Red Team: How to Succeed By Thinking Like the Enemy" (2015). Published research and methodology.

## Adversarial Collaboration (Kahneman)

Daniel Kahneman proposed adversarial collaboration as a method for resolving disagreements through jointly designed experiments rather than debate. Two parties who disagree on a question define the specific prediction each side makes, identify the evidence that would settle the disagreement, and design an experiment to test it. The collaboration is "adversarial" in that each side is trying to prove the other wrong, but "collaborative" in that both sides agree on the rules of evidence before the contest begins.

The framework transforms debates into research questions. Instead of arguing about whether an assumption is valid, the team designs a test. The shift from persuasion to evidence changes the emotional dynamics of disagreement: the question becomes "what would we need to see to know who is right?" rather than "who can argue more convincingly?"

In the devil's advocate context, adversarial collaboration provides the resolution mechanism for the strengthen-counter prompt. After the steelman and counter-argument are both articulated at maximum strength, the agent designs the adversarial collaboration test: what specific, testable prediction does each position make, and what evidence would settle it? This prevents the analysis from ending with "both sides have a point," which is true but unhelpful.

Kahneman's broader research on cognitive biases (anchoring, availability, confirmation bias) informs the entire agent's approach. People systematically overweight evidence that confirms their existing beliefs and underweight evidence that contradicts them. The devil's advocate exists to counteract this pattern by actively seeking disconfirmation.

**Maps to:** The strengthen-counter prompt and the steelman-opposition skill. Provides the resolution test that makes adversarial analysis actionable.

**Source:** Daniel Kahneman, "Thinking, Fast and Slow" (2011). Daniel Kahneman, "Adversarial Collaboration" (various publications). Published research.

## Inversion (Munger)

Charlie Munger, Warren Buffett's long-time partner at Berkshire Hathaway, popularized inversion as a thinking tool: instead of asking "how do I achieve X?" ask "how would I guarantee the opposite of X?" The answers reveal the failure paths most likely to occur because they identify the actions and conditions that lead directly to the worst outcome.

The technique draws from the mathematical tradition of proof by contradiction and the Stoic practice of premeditatio malorum (premeditation of evils). In practical decision-making, inversion works because it bypasses the anchoring bias that locks teams into forward-looking planning. When asked "how do we succeed?" teams generate plans that look like their current plan with optimistic assumptions. When asked "how do we guarantee failure?" teams generate genuinely different scenarios because they are no longer anchored to the existing approach.

In the devil's advocate context, inversion is the primary tool in the find-load-bearing prompt. For each candidate assumption, the agent asks: "If I wanted to guarantee this plan fails, would I target this assumption?" If yes, the assumption is load-bearing. If no, it is decorative. Munger's inversion cuts through the assumption inventory faster than systematic analysis because it identifies the structural vulnerabilities directly.

Munger also contributed the concept of mental model diversity: the idea that better decisions come from using multiple frameworks rather than relying on one. The Devil's Advocate Agent embodies this principle by combining five frameworks rather than relying on any single adversarial approach.

**Maps to:** The find-load-bearing prompt and the stress-test skill. Inversion is the fastest path to identifying load-bearing assumptions.

**Source:** Charlie Munger, "The Psychology of Human Misjudgment" (1995). Charlie Munger, "Poor Charlie's Almanack" (2005). Published lectures and writings.

## Steelmanning

Steelmanning is the practice of articulating the strongest possible version of an argument before responding to it. It is the opposite of strawmanning, where an opponent's argument is weakened or distorted to make it easier to attack. The term emerged from philosophical debate and rhetorical practice, building on the principle of charity: the norm that one should interpret an opponent's argument in its most favorable light.

Steelmanning serves two functions in adversarial analysis. First, it produces intellectual honesty. A team that has seen the strongest version of the opposing view makes a more informed decision than a team that has only seen weak objections. Second, it produces stronger analysis. Vulnerabilities found in the steelmanned version of a proposal are genuine weaknesses. Vulnerabilities found in a poorly articulated version may just be presentation failures.

In the devil's advocate context, steelmanning is always the first step. Before attacking assumptions, simulating adversaries, or building counter-arguments, the agent articulates the strongest possible version of the proposal. This discipline prevents the common failure mode of devil's advocacy: attacking weak versions of ideas to appear rigorous while missing the real strengths and genuine vulnerabilities.

The steelmann test is straightforward: would the proposal's author recognize this as a fair, strong representation of their idea? If yes, the steelman is honest. If the author would say "that is actually better than how I put it," the steelman has served its purpose perfectly.

Philip Tetlock's research on superforecasting reinforces steelmanning's value. The most calibrated forecasters actively seek out the strongest evidence against their current position. They update their beliefs in response to disconfirming evidence rather than doubling down on confirmation. Steelmanning operationalizes this practice in the context of adversarial analysis.

**Maps to:** The steelman-position prompt, used as the first step in every devil's advocate skill.

**Source:** Philosophical tradition of the principle of charity. Philip Tetlock and Dan Gardner, "Superforecasting: The Art and Science of Prediction" (2015). Published research and methodology.

## Framework Interactions

The five frameworks operate at different stages of the adversarial analysis and reinforce each other.

Steelmanning provides the entry discipline: ensuring the agent engages with the strongest version of the proposal before any attack begins. Klein's Pre-Mortem provides the certainty framing for attacking assumptions: instead of "this could be wrong," state "this was wrong, and here is what happened." Red Team / Blue Team provides the adversary perspective: thinking like a motivated opponent reveals attack surfaces that defensive analysis misses. Inversion (Munger) provides the fastest path to load-bearing assumptions: "how would I guarantee failure?" identifies what matters most. Adversarial Collaboration (Kahneman) provides the resolution mechanism: when the analysis is complete, design an experiment to test who is right.

The sequence matters. Starting with red-teaming without steelmanning produces attacks on weak versions of ideas. Starting with inversion without steelmanning produces cynicism rather than rigorous analysis. Starting with adversarial collaboration without first identifying load-bearing assumptions produces experiments that test the wrong things. The five frameworks form a coherent pipeline from understanding the idea at its best through attacking it at its weakest to resolving the key uncertainties with evidence.

## IP Notes

Klein's Pre-Mortem is published methodology (HBR, 2007; "Sources of Power," 1998). Red Team methodology is published and widely practiced (Zenko, "Red Team," 2015). Adversarial Collaboration is published research (Kahneman, various). Inversion is publicly articulated (Munger, "The Psychology of Human Misjudgment," 1995). Steelmanning draws from the philosophical principle of charity. Tetlock's Superforecasting is published research (2015). This agent is an educational reference design applying these published concepts, not a commercial implementation of any proprietary methodology.
