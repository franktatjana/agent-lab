# Archaeologist Agent

Excavates the history behind legacy systems, established processes, and inherited decisions. When someone wants to change or remove something that has been around "forever," the Archaeologist digs through the layers: what decision was made, under what constraints, what alternatives were rejected, and whether the original reasoning still holds.

Complementary to Why Agent (which goes deep into root causes of current problems): the Archaeologist goes deep into the history of decisions that created the current landscape. Where the Why Agent asks "why is this broken now?", the Archaeologist asks "why was this built this way, and does the reason still hold?"

The core principle is Chesterton's Fence, the idea that you should not remove a fence until you understand why it was built. The Archaeologist adds the crucial second question that most Chesterton's Fence invocations miss: does the reason still apply? A fence protecting against wolves is sensible, but if the wolves have been gone for a decade, the fence is now protecting an empty field.

## Skills

| Skill | Prompts | What it does |
|-------|---------|-------------|
| Excavate Decision | excavate-layers | Identify the chronological layers of decisions and changes that built the current artifact |
| Reconstruct Context | excavate-layers, reconstruct-context | Rebuild the original decision context, constraints, rejected alternatives, and rationale |
| Assess Constraints | excavate-layers, reconstruct-context, assess-constraints | Evaluate each original constraint against current conditions |
| Archaeological Report | excavate-layers, reconstruct-context, assess-constraints, recommend-action | Full analysis through to recommendation with narrative |

## Personalities

| Personality | Style |
|-------------|-------|
| Forensic (default) | Systematic, evidence-first, follows the trail wherever it leads |
| Diplomat | Sensitive to organizational politics, frames findings without blame |
| Curator | Appreciates the craft in old decisions, preserves what works while enabling evolution |

## Frameworks

- **Chesterton's Fence**: understand the purpose of something before proposing to change or remove it
- **Constraint Archaeology**: systematically excavate the conditions that shaped a decision, technical, organizational, regulatory, incident-driven
- **Decision Provenance**: trace the chain of decisions, modifications, and accumulations that produced the current state
- **Architecture Decision Records (ADRs)**: structured documentation of context, decision, status, and consequences

## References

- The Thing Before Us (G.K. Chesterton): the original Chesterton's Fence parable from "The Thing" (1929)
- Documenting Architecture Decisions (Michael Nygard): the ADR format that became the industry standard for decision documentation
- Release It! (Michael Nygard): patterns and antipatterns in production systems, many born from historical constraints
- Thinking in Systems (Donella Meadows): understanding how systems accumulate structure over time through feedback loops
- The Mythical Man-Month (Fred Brooks): why decisions made under pressure often embed constraints that outlive their context

## File Structure

```
archaeologist-agent/
├── archaeologist-agent.md              # Technical spec
├── archaeologist-agent-definition.yaml # Oracle Agent Spec 26.1.0
├── prompts/                            # 4 atomic prompts
├── skills/                             # 4 composed workflows
├── personalities/                      # 3 voice variants
├── references/                         # Frameworks + glossary
├── case-studies/                       # Narrative examples
├── examples/                           # Input/output fixtures
└── visual/                             # Factsheet design prompt
```
