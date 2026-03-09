# Decision Archaeology Frameworks

Decision archaeology draws from philosophy, software engineering, systems thinking, and organizational behavior. These four frameworks represent the core methodologies the Archaeologist Agent uses to investigate, reconstruct, and assess inherited decisions. Each framework addresses a different dimension of the archaeological process: the discipline of understanding before acting, the method of systematic excavation, the traceability of decision chains, and the structured documentation of findings.

## When to Load

Load when explaining methodology to users, when selecting the right approach for a specific investigation, or when the analysis needs deeper grounding in established theory.

## Chesterton's Fence

The concept originates from G.K. Chesterton's 1929 book "The Thing," in a chapter titled "The Drift from Domesticity." Chesterton's parable describes a reformer who encounters a fence across a road. The reformer says "I don't see the use of this, let us clear it away." The more intelligent reformer replies "If you don't see the use of it, I certainly won't let you clear it away. Go away and think. Then, when you can come back and tell me that you do see the use of it, I may allow you to destroy it."

The principle is simple: do not remove something until you understand why it was put there. The reasoning is that if you cannot explain the purpose, you are likely to reintroduce the problem the thing was designed to solve. This applies broadly to code, processes, policies, organizational structures, and institutional practices.

The Archaeologist Agent extends Chesterton's Fence with a crucial second step that most invocations of the principle omit. Understanding why the fence was built is necessary but not sufficient. The follow-up question is: does the reason still hold? A fence built to protect a garden from deer is sensible. But if the garden is gone, or if a proper wall has been built around it, the original fence may now serve no purpose. Chesterton's Fence prevents reckless removal. The second question prevents indefinite preservation of expired protections.

The most common failure mode is using Chesterton's Fence as a conversation-stopper: "we can't change this because it was put there for a reason" without investigating whether the reason is still active. The agent's job is to move past the conversation-stopper by actually doing the investigation, then delivering a grounded assessment.

**Maps to:** The entire agent methodology. Chesterton's Fence is the philosophical foundation. The excavation answers "why was this built?" and the constraint assessment answers "does the reason still hold?"

**Source:** G.K. Chesterton, "The Thing" (1929). The fence parable is public domain and widely referenced.

## Constraint Archaeology

Constraint archaeology is the systematic excavation of the conditions that shaped a decision. It treats every inherited system, process, or policy as a layered artifact: the result of multiple decisions made by different people under different conditions over time. Like physical archaeology, the method works from the surface downward, peeling back layers to reveal the original construction and subsequent modifications.

The method classifies constraints into six categories that cover the full landscape of conditions shaping organizational decisions:

- **Technical constraints**: what technology existed or did not exist at the time. Platform limitations, language capabilities, library availability, infrastructure options. These are the most common constraints to expire because technology evolves faster than organizations update their decisions.
- **Organizational constraints**: team size, skill mix, reporting structure, decision-making culture. A decision that was pragmatic for a 10-person startup may be actively harmful at 200 engineers, not because it was wrong, but because the organizational context has shifted.
- **Regulatory constraints**: compliance requirements, industry standards, legal obligations, audit needs. These constraints tend to persist longer than technical ones but do change, especially across industry transitions and regulatory updates.
- **Incident-driven constraints**: decisions made in response to specific failures, outages, security breaches, or near-misses. These carry the strongest emotional weight and are the hardest to revisit because they are associated with organizational pain. They are also the most likely to be disproportionate to the ongoing risk because they were made under crisis pressure.
- **Resource constraints**: budget, timeline, capacity, hiring market conditions. A decision to build custom may have been driven by the need to ship in 3 months with 2 engineers, not by any technical preference.
- **Knowledge constraints**: what was understood about the problem space. Best practices evolve, frameworks mature, and the industry's collective understanding shifts. A decision made with 2018's understanding of microservices may not reflect what the industry learned by 2024.

The key discipline is evidence quality classification. Every claim about a historical constraint must be tagged: documented (written records exist), inferred (logical deduction from available evidence), or speculative (plausible but unverified). This prevents the excavation from producing a smooth, confident narrative that is actually built on guesswork.

**Maps to:** The excavate-layers and reconstruct-context prompts. The constraint categories structure the reconstruction, and the evidence quality classification enforces intellectual honesty.

**Source:** Constraint archaeology as a named methodology draws from archaeological stratigraphy (the study of layered deposits) applied to organizational decision analysis. The six-category framework is an original synthesis for this agent based on common patterns in organizational decision-making.

## Decision Provenance

Decision provenance traces the chain of decisions, modifications, and accumulations that produced a current state. Where constraint archaeology focuses on the conditions at each layer, decision provenance focuses on the connections between layers: how one decision constrained the next, how modifications accumulated, and how the original intent may have drifted through successive changes.

The concept borrows from data provenance in information management, where tracking the origin and transformation history of data is essential for trust and reproducibility. Applied to organizational decisions, provenance answers: who decided, when, under what conditions, and how has the decision been modified since?

Decision provenance reveals three common patterns:

- **Intentional evolution**: the decision was updated deliberately as conditions changed. This is the healthiest pattern and usually leaves documentation behind.
- **Sediment accumulation**: small modifications, workarounds, and patches accumulated on top of the original decision without anyone making a conscious choice to change the overall approach. The result looks designed but was actually grown. This is the most common pattern in long-lived systems.
- **Drift from intent**: the current state has diverged from the original intent through a series of individually small changes. Each change was reasonable in isolation, but the cumulative effect is a system that no longer reflects any coherent design philosophy. This pattern is the hardest to detect because no single change is obviously wrong.

**Maps to:** The excavate-layers prompt (identifying the chain of changes) and the recommend-action prompt (assessing whether the current state still reflects a coherent intent).

**Source:** The concept of decision provenance is adapted from data provenance in information management (W3C PROV specification) and from software supply chain provenance (SLSA framework). The application to organizational decision analysis is an original synthesis.

## Architecture Decision Records (ADRs)

Architecture Decision Records were proposed by Michael Nygard in a 2011 blog post titled "Documenting Architecture Decisions." The format captures architectural decisions in a structured, lightweight document: title, status (proposed, accepted, deprecated, superseded), context (the conditions driving the decision), decision (what was decided), and consequences (what follows from the decision, both positive and negative).

ADRs solve the organizational memory problem that the Archaeologist Agent frequently encounters: decisions made without documentation become invisible over time. The people who made them leave. The context that shaped them fades. What remains is the artifact itself, with no record of why it exists. The Archaeologist's job is often to retrospectively construct the ADR that should have been written at the time.

The ADR format's value lies in its emphasis on context. Most decision documentation captures what was decided but not why. The context section, which describes the forces at play, the constraints, and the alternatives considered, is the most archaeologically valuable element because it makes the decision assessable against changed conditions. If the context has changed, the decision may need to change. If the context is the same, the decision probably holds.

ADRs also introduce the concept of decision lifecycle through their status field. A decision can be superseded by a later decision, deprecated as conditions change, or remain accepted. This lifecycle model maps directly to the Archaeologist's constraint assessment: a decision whose context has expired should be updated to "superseded" or "deprecated," creating a living record of organizational decision evolution.

**Maps to:** The recommend-action prompt (producing a narrative that serves as a retroactive ADR) and the asset output (archaeological reports that function as decision records for organizational memory).

**Source:** Michael Nygard, "Documenting Architecture Decisions" (2011). The ADR format has been adopted broadly in software engineering and is documented in the adr-tools GitHub repository. The format is open and widely implemented.

## IP Notes

Chesterton's Fence is from a 1929 work that is in the public domain. Architecture Decision Records are an open format proposed by Michael Nygard in a public blog post. Constraint archaeology and decision provenance as applied here are original syntheses drawing on archaeological methodology, data provenance standards, and organizational behavior research. This agent is an educational reference design applying these published and original concepts, not a commercial implementation of any proprietary methodology.
