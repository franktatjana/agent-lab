# Six Hats Framework

Six Thinking Hats is a concept by Edward de Bono (1985). This agent is an educational reference design, not a commercial implementation. Framework concepts are drawn from publicly available resources, academic literature on parallel thinking, and the active AI prompting community that applies these ideas daily.

De Bono's core insight: most thinking fails because people try to do too many things at once. They argue about facts while simultaneously being emotional. They shoot down ideas before those ideas have been fully explored. They jump to conclusions before mapping the terrain. The solution is to put on one colored hat at a time, think in that mode only, take it off, and put on the next one.

## When to Load

Load when the user is new to the framework, when explaining hat interactions, or when the analysis needs deeper framework grounding.

## The Six Hats in Detail

### White Hat: The Data Detective

The White Hat is about discipline. It asks: what do we actually know, separated from what we believe? Most people mix facts with interpretations so thoroughly they can't tell the difference. The White Hat forces the distinction.

It strips everything back to what is actually known and, just as importantly, what is not known. Use it when entering unfamiliar territory or when decisions are being made on assumptions rather than evidence.

Common misuse: Presenting opinions as facts. "Everyone knows that..." is not White Hat. "Survey data from 2024 shows that 67% of respondents..." is White Hat.

Key question: "If we had to bet money on this being true, would we?"

Why it works in prompting: most AI responses blend facts with interpretation by default. This hat builds a hard wall between what is known and what is assumed.

### Red Hat: The Intuition Unpacker

The Red Hat gives emotions legitimate status in decision-making. In most business contexts, feelings are suppressed or disguised as logic. Red Hat creates a space where "I don't like this" is a complete statement.

Use it when you sense something is off but cannot articulate why, when stakeholder buy-in matters as much as the logic, or before a major decision where intuition is whispering something the rational mind is ignoring.

Common misuse: Rationalizing emotions. "I feel this won't work because the data suggests..." is not Red Hat. The "because" belongs to White or Black Hat. Pure Red Hat: "Something about this makes me uneasy."

Key question: "How does this feel, without needing to explain why?"

Why it works in prompting: AI is remarkably good at modeling human emotional responses when you explicitly ask it to. The key is the instruction not to rationalize. Without that guardrail, AI defaults to logical problem-solving mode and filters out the emotional signals that often matter most.

### Black Hat: The Risk Architect

The Black Hat is the most natural hat for most people and cultures. It identifies risks, flaws, and problems. It is not negativity; it is critical judgment, an essential survival skill. Think of it as a pre-mortem on steroids.

Use it when a plan feels solid and needs to be pressure-tested, when the stakes are high and failure is expensive, or when groupthink might be blinding the team to real risks.

Common misuse: Overusing Black Hat and calling it "being realistic." Also: using Black Hat to kill ideas during what should be Green Hat time.

Key question: "What could go wrong, and how specifically would it happen?"

Why it works in prompting: ranking failure points and exploring second-order consequences forces the AI past surface-level objections into genuine structural analysis. Asking for the single most fragile assumption often reveals a linchpin that, if addressed, makes the entire plan dramatically more robust.

### Yellow Hat: The Value Hunter

The Yellow Hat requires deliberate effort. Finding problems (Black Hat) is easier than finding value. Yellow Hat asks you to make the case FOR something, even if you're skeptical. It actively hunts for value, especially in ideas that seem weak, impractical, or incomplete at first glance.

Use it when an idea has been shot down and you suspect there is hidden potential, when morale is low, or when you want to build the strongest possible case for moving forward.

Common misuse: Shallow optimism. "It'll be great!" is not Yellow Hat. "This approach reduces onboarding time by approximately 30% based on similar implementations" is Yellow Hat.

Key question: "Why could this work, and what specific value would it create?"

Why it works in prompting: asking for benefits that are easy to overlook and value in adjacent areas pushes the AI beyond the obvious. The comparison to inaction reframes the risk calculation: people evaluate ideas against perfection when they should be evaluating them against the status quo.

### Green Hat: The Growth Catalyst

The Green Hat suspends judgment entirely. Its job is to generate, not evaluate. Ideas produced under Green Hat are not proposals; they are raw material for later evaluation by Yellow and Black Hats. It is about lateral thinking, unconventional connections, and breaking out of established patterns.

Use it when the usual approaches are not working, during brainstorming, or when a problem has been defined so narrowly that creative solutions cannot emerge.

Common misuse: Self-censoring during Green Hat time. "That's a stupid idea" has no place here. Neither does "That's impractical." Practicality is Black Hat's job.

Key question: "What else is possible? What haven't we considered?"

Why it works in prompting: the random concept technique is based on de Bono's own Random Word method. The reversal technique (describe how to make it worse, then flip those insights) is another proven creativity tool. Asking the AI to identify fixed constraints that might not actually be fixed is often where the biggest breakthroughs live.

### Blue Hat: The Master Conductor

The Blue Hat is the meta-hat. It does not contribute content; it manages the process. Which hat should we use next? Have we spent enough time on Green Hat? Are we ready to synthesize? It decides which hat to use when, summarizes what has been learned, and translates analysis into action.

Use it at the beginning of any major initiative to design your thinking process, or at the end to synthesize everything into decisions and actions.

Common misuse: Using Blue Hat to control outcomes rather than process. The Blue Hat facilitates thinking; it does not direct conclusions.

Key question: "What have we learned, and what should we do with it?"

Why it works in prompting: asking for the single biggest open question creates a natural bridge to the next round of thinking. The Blue Hat prompt works as both a starting point and an ending point.

## Hat Interaction Patterns

**Yellow before Black**: When you need people to find value before poking holes. Prevents premature rejection of good ideas.

**Black before Green**: When you need to understand problems before generating solutions. Ensures Green Hat ideas are targeted.

**Red early**: When emotions are running high. Acknowledging feelings first prevents them from contaminating the logical hats.

**Red late**: When you want an honest gut-check after logical analysis. "Now that we've looked at all the facts and risks, how do you actually feel?"

**Green after Black**: The "yes, and" pattern. After identifying problems, immediately generate creative solutions. Prevents Black Hat from being the final word.

**Chain hats in conversation**: Feed the output of one hat into the next. Run the Black Hat analysis, then paste those risks into a Green Hat prompt asking for creative solutions to the top three risks. Chain them together and the quality compounds.

## Maximizing the System

**Start with Blue, always.** Before diving into any analysis, use the Blue Hat to design your sequence. Not every problem needs all six hats, and the order matters more than you think.

**Give real context.** The more specific and detailed you are about your situation, the more useful the output. A paragraph of context beats a sentence every time.

**Push back on the first response.** If the analysis is surface-level under any hat, say: "That is too generic. Go deeper. Give me insights I would not arrive at on my own." The AI can almost always do better when told the first pass was not enough.

**Keep a decision journal.** Save your Six Hat analyses. Over time, patterns in your blind spots become visible. Maybe you consistently underweight emotional factors. Maybe you always skip the Yellow Hat. The framework makes your thinking habits visible.

## References

- Edward de Bono, "Six Thinking Hats" (1985)
- [r/ThinkingDeeplyAI: The Six Thinking Hats prompting method](https://www.reddit.com/r/ThinkingDeeplyAI/comments/1rfv0n5/the_six_thinking_hats_prompting_method_will_turn/) by Beginning-Willow-801
- [Wikipedia: Six Thinking Hats](https://en.wikipedia.org/wiki/Six_Thinking_Hats)
- [de Bono Group: Six Thinking Hats Summary](https://www.debono.com/six-thinking-hats-summary)
