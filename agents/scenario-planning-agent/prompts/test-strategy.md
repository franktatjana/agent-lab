# Test Strategy

Run a strategy or decision through each scenario. For every scenario, assess where the strategy breaks, where it thrives, and where it merely survives. This is the wind tunneling step, the moment where abstract scenarios become concrete strategic intelligence. A strategy that has not been tested against multiple futures is a bet on a single assumed world.

## When to Use

After scenarios have been constructed and named. This prompt takes a strategy and subjects it to each of the four scenario worlds. Without this step, scenarios are interesting stories. With it, they become decision-support tools that reveal which strategic elements are robust and which are fragile. Wind tunneling is what separates scenario planning as an intellectual exercise from scenario planning as a strategic discipline.

## Prompt

You have four named scenario worlds and a strategy to test. Your job is to run the strategy through each scenario and assess its performance. Be specific about what breaks and what works.

**1. Strategy Decomposition**
Before testing, break the strategy into its component elements:
- **Core bets**: what must be true about the future for this strategy to work? (e.g., "market grows 15% annually," "regulatory environment remains stable")
- **Resource commitments**: where is money, time, and talent being allocated? What is being forgone?
- **Key capabilities**: what capabilities does the strategy depend on? Are they built, bought, or assumed?
- **Timeline dependencies**: what must happen in what order? Where are the critical path items?

**2. Scenario-by-Scenario Testing**
For each of the four scenarios, assess:
- **Thrives**: the strategy performs as intended or better. What conditions in this scenario enable success? What tailwinds does the strategy catch?
- **Survives**: the strategy delivers reduced results but remains viable. What adaptations would be needed? What elements must be sacrificed to maintain viability?
- **Breaks**: the strategy fails or becomes untenable. What specific element breaks? Is the failure recoverable or fatal? When does the break become visible?

For each assessment, name the specific strategy element that thrives, survives, or breaks. "The strategy breaks" is not useful. "The strategy's dependence on a single cloud provider becomes a critical vulnerability when data sovereignty regulations fragment across 30+ jurisdictions" is useful.

**3. Cross-Scenario Analysis**
After testing all four scenarios:
- **Robust elements**: which parts of the strategy work across all four scenarios? These are the strategic core, the elements to protect and invest in regardless of which future unfolds
- **Fragile elements**: which parts of the strategy depend on a specific scenario to work? These are the bets, the elements that need hedging or contingency plans
- **Adaptive elements**: which parts of the strategy could be modified quickly if early signals indicate a particular scenario is emerging? These are the options, the elements that provide flexibility

**4. Robustness Score**
Summarize with a simple matrix:

| Strategy Element | Scenario 1 | Scenario 2 | Scenario 3 | Scenario 4 |
|-----------------|-----------|-----------|-----------|-----------|
| Element A | Thrives | Survives | Breaks | Thrives |
| Element B | Survives | Breaks | Thrives | Survives |

A strategy that breaks in 3+ of 4 scenarios is not robust. A strategy that thrives in all 4 is either genuinely robust or the scenarios are not distinct enough.

Deliver: the strategy decomposition, scenario-by-scenario assessment, cross-scenario analysis, and robustness matrix. The output should tell the team exactly where to reinforce, where to hedge, and where to accept risk.

## Tips

- Be specific about the break mechanism. "The strategy might not work in this scenario" is a hedge, not an analysis. "The strategy assumes customer acquisition cost stays below $50, but in this scenario regulatory compliance costs add $35 per customer, pushing CAC to $85 and making the unit economics negative" is a break mechanism.
- Robust elements are the most valuable output. The team already knows their strategy. What they do not know is which parts of it survive regardless of how the future unfolds. Those elements are the strategic foundation.
- A strategy that breaks in only one scenario is not necessarily bad. It depends on whether the breaking scenario is plausible and whether the break is recoverable. A strategy that breaks catastrophically in one scenario may need a hedge. A strategy that degrades gracefully can accept the risk.
- Watch for strategies that "thrive" in all four scenarios. This usually means the testing was not rigorous enough or the scenarios are not distinct enough. Real strategies have tradeoffs. A strategy that appears universally robust deserves skeptical re-examination.
