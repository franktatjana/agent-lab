# Decision Decomposer Agent

Breaks complex decisions into independently evaluable components so teams stop going in circles. Most decision paralysis comes from treating a multi-dimensional choice as a single binary. The decomposer separates bundled decisions, classifies each by reversibility and stakes, maps consequence chains, and runs BATNA analysis to surface the real tradeoffs.

Different from Devil's Advocate (challenges a single proposal) and Six Hats (explores perspectives): the Decision Decomposer is structural, breaking one big decision into several smaller ones that can each be resolved independently.

## Skills

| Skill | Prompts | What it does |
|-------|---------|-------------|
| Reversibility Check | decompose-decision → map-reversibility | Classify each component as reversible or irreversible, map stakes |
| Consequence Chain | decompose-decision → trace-consequences | Map first, second, and third-order consequences of each option |
| Option Stress Test | decompose-decision → map-reversibility → trace-consequences → evaluate-alternatives → decision-brief | Full analysis through to decision brief |

## Personalities

| Personality | Style |
|-------------|-------|
| Surgeon | Precise, clinical, cuts through noise, triage register |
| Philosopher | Deep implications, uncomfortable questions, systems thinking register |
| Spreadsheet Brain | Quantitative, matrix-oriented, weighted scoring, data grid register |

## Frameworks

- **Reversibility Matrix**: classifying decisions as one-way doors vs. two-way doors with reversal cost and time windows
- **BATNA (Fisher/Ury)**: Best Alternative to Negotiated Agreement, the walk-away option that sets your floor
- **Second-Order Consequences (Meadows)**: tracing effects through first, second, and third order over 6-18 months
- **Eisenhower Matrix**: urgent vs. important, clarifying which sub-decisions need action now vs. deliberation

## References

- Getting to Yes (Roger Fisher, William Ury): BATNA framework and principled negotiation
- Thinking in Systems (Donella Meadows): second-order effects and system dynamics
- Thinking, Fast and Slow (Daniel Kahneman): cognitive biases in decision-making
- How to Decide (Annie Duke): structured decision quality under uncertainty
- The Hard Thing About Hard Things (Ben Horowitz): irreversible decisions under organizational pressure

## File Structure

```
decision-decomposer-agent/
├── decision-decomposer-agent.md              # Technical spec
├── decision-decomposer-agent-definition.yaml # Oracle Agent Spec 26.1.0
├── prompts/                                  # 5 atomic prompts
├── skills/                                   # 3 composed workflows
├── personalities/                            # 3 voice variants
├── references/                               # Frameworks + glossary
├── case-studies/                             # Narrative examples
├── examples/                                 # Input/output fixtures
└── visual/                                   # Factsheet design prompt
```
