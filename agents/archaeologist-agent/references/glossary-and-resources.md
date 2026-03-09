# Glossary and Resources

Core terminology and external resources for the Archaeologist Agent's decision archaeology methodology.

## When to Load

Always available as baseline reference. Load when defining terms, grounding analysis in established theory, or providing framework context to users new to decision archaeology.

## Key Terms

**Artifact**: The system, process, policy, or decision being excavated. Anything inherited that someone is questioning, considering changing, or trying to understand. The artifact is what exists today; the excavation reveals how it got there.

**Chesterton's Fence**: The principle that you should not remove something until you understand why it was put there. Named after G.K. Chesterton's 1929 parable. The Archaeologist Agent extends this with the follow-up question: now that you understand why it was built, does the reason still hold?

**Constraint**: A specific condition that shaped a decision. Constraints are classified by category: technical (technology limitations), organizational (team size, skills, structure), regulatory (compliance requirements), incident-driven (responses to failures), resource (budget, timeline, capacity), and knowledge (understanding of the problem space at the time).

**Constraint Archaeology**: The systematic excavation of the conditions that shaped a decision. Treats every inherited artifact as a layered deposit, peeling back successive changes to reveal the original construction and the conditions that produced it.

**Decision Provenance**: The chain of decisions, modifications, and accumulations that produced a current state. Traces who decided, when, under what conditions, and how the decision has been modified since. Borrowed from data provenance in information management.

**Evidence Quality**: A classification applied to every claim about a historical decision. Three levels: documented (written records exist), inferred (logical deduction from available evidence), speculative (plausible but unverified). The classification prevents archaeological findings from drifting into confident-sounding fiction.

**Excavation**: The layered investigation of an artifact's history. Each layer represents a period of change, modification, or accumulation. Layers are ordered chronologically from origin to present, with evidence quality classified for each.

**Layer**: A distinct stratum in the artifact's history. Each layer represents a decision, modification, or accumulation, dated to a period, traced to a trigger, and classified by evidence quality. Borrowed from archaeological stratigraphy.

**Sediment**: Unintentional accumulation on top of an original decision. Configuration drift, workaround calcification, tribal knowledge solidification. Sediment looks designed but was never deliberately chosen. Distinguishing sediment from decisions is a core archaeological skill.

**Architecture Decision Record (ADR)**: A structured, lightweight document capturing an architectural decision: title, status, context, decision, and consequences. Proposed by Michael Nygard in 2011. The Archaeologist Agent often produces retroactive ADRs for decisions that were never documented.

**Constraint Assessment**: The evaluation of whether original constraints still apply. Each constraint is classified as valid (still applies), changed (partially applies), or expired (no longer relevant), with evidence and confidence levels.

**Decision Drift**: The gradual divergence of a system or process from its original intent through a series of individually small changes. Each change is reasonable in isolation, but the cumulative effect produces something that no longer reflects any coherent design philosophy.

**Dual Risk Assessment**: The practice of evaluating both sides of a recommendation: risks of change (what could go wrong if the artifact is modified or removed) and risks of keeping (what costs accumulate if the artifact is left as-is). Required for every Archaeologist Agent recommendation to prevent one-sided analysis.

**Empty Field**: A metaphor for a situation where the original reason for a protective measure has expired. From the Chesterton's Fence extension: a fence built to keep out wolves is protecting an empty field if the wolves have been gone for a decade.

**Incident-Driven Constraint**: A constraint created in response to a specific failure, outage, security breach, or near-miss. These carry the strongest emotional weight and are the hardest to revisit because they are associated with organizational pain. They are also the most likely to be disproportionate to the ongoing risk.

## Recommended Reading

**The Thing** by G.K. Chesterton (1929). Contains the original Chesterton's Fence parable in the chapter "The Drift from Domesticity." Read for the philosophical foundation of understanding before removing.

**Documenting Architecture Decisions** by Michael Nygard (2011, blog post). The original proposal for the ADR format that became the industry standard for decision documentation. Read for the structured approach to capturing decision context, alternatives, and consequences.

**Release It!** by Michael Nygard (2007, 2nd ed. 2018). Patterns and antipatterns in production systems, many of which originated as reasonable responses to specific constraints that have since changed. Read for the engineering perspective on why production systems accumulate protective measures.

**Thinking in Systems** by Donella Meadows (2008). How systems accumulate structure over time through feedback loops. Read for the systems perspective on why inherited artifacts resist change and how unintended consequences compound.

**The Mythical Man-Month** by Fred Brooks (1975, anniversary ed. 1995). The classic text on software engineering under constraint. Read for the resource and organizational constraints that shape decisions in ways that persist long after the original team has moved on.

**An Elegant Puzzle** by Will Larson (2019). Systems of engineering management, including how organizational decisions accumulate into structures that outlive their original context. Read for the organizational dynamics that create the artifacts the Archaeologist excavates.

**Team Topologies** by Matthew Skelton and Manuel Pais (2019). How team structure shapes technical decisions and vice versa. Read for the organizational-technical coupling that makes many inherited decisions products of team structure rather than technical evaluation.

## Related Agents

**Why Agent**: Receives handoffs when the archaeological investigation reveals that the artifact is actively malfunctioning, not just questionably designed. The Why Agent drills into root causes of current problems. The Archaeologist provides historical context that the Why Agent can use to understand why the current problem exists.

**Decision Decomposer Agent**: Receives handoffs when the artifact contains multiple bundled decisions that need structural decomposition before they can be individually assessed. The Archaeologist identifies the bundling; the Decision Decomposer separates and evaluates the components independently.
