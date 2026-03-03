# Pre-Mortem Frameworks

The Pre-Mortem Agent draws from three frameworks that address different aspects of anticipating failure. Klein's Pre-Mortem provides the core technique of prospective hindsight. Recognition-Primed Decision explains how experts identify failure signatures through pattern matching. The Regret Minimization Framework anchors decisions against future self-assessment. Together, they form a system for surfacing risks that traditional approaches miss because they challenge the mental models that make those risks invisible.

## When to Load

Load when explaining methodology to users, when selecting the right approach for a specific project type, or when the analysis needs deeper grounding in established decision science.

## Klein's Pre-Mortem

Gary Klein developed the pre-mortem technique based on research into prospective hindsight, the cognitive finding that imagining an event has already occurred increases the ability to identify reasons for it by 30%. Traditional risk assessment asks "what could go wrong?" which triggers defensive responses and optimism bias. The pre-mortem reframes: "it did go wrong, why?" This certainty framing bypasses the psychological defenses that make people dismiss risks as unlikely.

The technique is simple. Before a project begins (or before a major commitment), the team leader says: "Imagine we are a year into the future. We implemented the plan as it now exists. The outcome was a disaster. Take two minutes and write down all the reasons you can think of for the failure." Each participant generates their own list independently, then the lists are shared and discussed. The independence prevents groupthink from filtering out uncomfortable scenarios.

Klein's research, conducted across military, medical, and business decision-making contexts, found that pre-mortems are particularly effective at surfacing risks that team members were aware of but reluctant to voice. The certainty framing gives people permission to articulate concerns that feel disloyal or pessimistic under normal conditions. A team member who would never say "I think this project will fail" will readily contribute to the list when the failure is already stipulated.

The critical mechanism is the shift from probability to narrative. Risk registers list items with likelihood scores. Pre-mortems generate stories. Stories engage causal reasoning, temporal sequencing, and emotional processing in ways that probability tables do not. A failure mode embedded in a narrative, "the lead architect left in month 4, and the team spent 3 months searching for a replacement while the codebase diverged from the architecture plan," is more compelling and more actionable than "key person risk: medium."

**Maps to:** The assume-failure prompt and the failure-autopsy skill. Every pre-mortem session begins with Klein's certainty framing before moving to ranking or mitigation.

**Source:** Gary Klein, "Performing a Project Premortem" (Harvard Business Review, 2007). Gary Klein, "Sources of Power: How People Make Decisions" (1998). Gary Klein, "The Power of Intuition" (2004). Published methodology.

## Recognition-Primed Decision (RPD)

Klein's Recognition-Primed Decision model explains how experienced decision-makers identify situations rapidly by matching current conditions to patterns from past experience. Unlike analytical models that compare options systematically, RPD shows that experts recognize the type of situation they are facing, generate a course of action based on that recognition, and mentally simulate it to check for problems. The simulation step is where potential failures surface.

In the context of pre-mortems, RPD operates through pattern matching against analogous failures. When an experienced project manager hears "18-month timeline, legacy system migration, undocumented integrations," they do not calculate probabilities. They recognize the pattern: they have seen projects like this before, and they know how they fail. The pre-mortem technique structures this recognition process so it is not limited to the most experienced person in the room.

RPD identifies three levels of decision-making: simple match (this situation is familiar, I know what to do), developing the situation (I need more information before I can match a pattern), and creative (this is novel, I need to construct a new approach). Pre-mortems are most valuable at the second level, where the situation has enough familiar elements to trigger pattern recognition but enough novel elements that the standard playbook may not apply.

The failure signature concept is central to applying RPD in pre-mortems. A failure signature is a constellation of conditions that, when present together, predict a specific type of failure. "New market entry + price-sensitive segment + well-capitalized incumbent" is a failure signature for margin erosion through competitive price response. Recognizing the signature early allows the team to check whether their plan accounts for the predicted failure mode.

**Maps to:** The blind-spot-scan skill and the surface-blind-spots prompt. RPD provides the mechanism for identifying which analogous failures match the current project's conditions.

**Source:** Gary Klein, "Sources of Power: How People Make Decisions" (1998). Published research.

## Regret Minimization Framework

Jeff Bezos articulated the Regret Minimization Framework as his decision-making heuristic: project yourself to age 80 and ask "will I regret not having tried this?" The framework operationalizes a broader principle from decision science: people experience more regret from inaction than from action, and the regret from irreversible decisions is more intense than from reversible ones.

In the pre-mortem context, the framework shifts the analysis from "what are the risks?" to "what will we wish we had done differently?" This reframing is powerful because it engages loss aversion, the well-documented cognitive bias where losses are felt approximately twice as intensely as equivalent gains. Asking "what will you regret?" triggers a stronger emotional and analytical response than "what are the risks?" because regret is felt as a personal loss, not an abstract probability.

The framework applies at two levels. At the strategic level, it asks whether the team will regret the decision itself: "Will we regret entering this market? Will we regret not entering this market?" At the tactical level, it asks about preparation quality: "Will we regret not doing more due diligence? Will we regret not having that difficult conversation with the lead engineer about the timeline?"

The practical application in pre-mortems focuses on the tactical level. The strategic go/no-go decision belongs to leadership. The pre-mortem's job is to ensure that whatever decision is made, it is made with full awareness of what might be missed. The regret projection prompt operationalizes this by generating specific "we wish we had..." statements that the team can act on before committing.

Regret intensity scales with irreversibility. A reversible decision that goes wrong generates mild regret because it can be corrected. An irreversible decision, signing a 3-year exclusive contract, committing $8M to a platform migration, restructuring a department, generates intense regret if it fails because the options it foreclosed are permanently lost. Pre-mortems should weight irreversible decisions more heavily than reversible ones.

**Maps to:** The regret-forecast skill and the regret-projection prompt. The framework provides the conceptual anchor for projecting forward and identifying unconsidered factors.

**Source:** Jeff Bezos, various interviews (1997-present). Daniel Kahneman and Amos Tversky, "Prospect Theory: An Analysis of Decision under Risk" (1979) for loss aversion foundations. Published framework and research.

## Framework Interactions

The three frameworks operate at different stages of the pre-mortem process and reinforce each other.

Klein's Pre-Mortem provides the entry technique: certainty framing that opens the team's imagination to failure scenarios they would otherwise dismiss. RPD provides the pattern-matching engine: once failure is assumed, experienced practitioners recognize which failure signatures match the current conditions. Regret Minimization provides the forward-looking anchor: after failure modes are identified and ranked, the team projects forward to ensure that the most regret-inducing oversights are addressed before commitment.

The sequence matters. Starting with RPD pattern matching without Klein's certainty framing produces defensive analysis, people matching to patterns that confirm the plan will work. Starting with regret projection without the failure narrative produces abstract anxiety, people listing vague worries without grounding them in specific scenarios.

## IP Notes

Klein's Pre-Mortem is published methodology (HBR, 2007; "Sources of Power," 1998). Recognition-Primed Decision is published research (Klein, 1998). Regret Minimization Framework is publicly articulated (Bezos, various interviews). Kahneman and Tversky's Prospect Theory is published academic research (1979). This agent is an educational reference design applying these published concepts, not a commercial implementation of any proprietary methodology.
