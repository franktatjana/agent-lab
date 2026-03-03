# The Architecture Nobody Could Choose

## The Situation

Marcus Chen had been VP of Engineering at Lattice Systems, a mid-size fintech processing real-time payment reconciliation for 200 corporate clients, for four years. The engineering team of 45 had built the platform as a monolith in 2019. By 2025, the monolith was hitting its scaling ceiling at 2,000 requests per second. Three enterprise prospects in the pipeline required guarantees of 5,000 rps or more. Two had already walked. The third was giving Lattice 90 days.

Marcus put three architecture options on the table in January: microservices, modular monolith, or serverless. He expected the team to align within two weeks. Six weeks later, the team had held fourteen meetings, produced four comparison documents, and split into three camps, each convinced their preferred architecture was the only responsible choice. The microservices advocates argued that anything less was kicking the can. The modular monolith supporters insisted that microservices would cripple feature velocity for a year. The serverless faction wanted to leapfrog both and rebuild around event-driven functions.

Every meeting ended the same way. Someone would raise a concern about the other two options, the discussion would expand to cover deployment strategy, database architecture, team structure, and API contracts simultaneously, and Marcus would table the decision for "more analysis." The CTO, who reported to the board, started asking pointed questions. The VP of Product filed a formal complaint that architecture debates were blocking the product roadmap. The CFO wanted infrastructure cost projections for all three options before approving any budget.

## The Problem

The root cause was not technical complexity. Each of the three options was viable for Lattice's scale and requirements. The problem was that the team was treating "which architecture do we choose?" as a single decision. Every meeting tried to resolve five different questions simultaneously: What data layer pattern do we use? How do we deploy? How do we restructure the teams? What API contracts do we adopt? How do we migrate without breaking SLAs?

These five questions had different stakeholders, different reversibility profiles, and different urgency levels. But because they were bundled into one label, "the architecture decision," every meeting tried to resolve all five at once. An engineer arguing for microservices was actually arguing for isolated data stores and container-based deployment. A product manager arguing for modular monolith was actually arguing for minimal disruption to feature velocity during migration. They were not disagreeing about architecture. They were disagreeing about different sub-decisions while using the same words.

The fourteen meetings produced no decision because the team was not having one conversation. They were having five conversations in the same room, labeled as one.

## The Decomposition

Marcus's CTO suggested running the decision through the Decision Decomposer Agent during the seventh week. The first prompt, `decompose-decision`, immediately reframed the problem. The agent identified five independent sub-decisions:

**Sub-Decision 1: Data Layer Architecture.** Shared database with schema boundaries vs. isolated data stores per service vs. hybrid with shared read replicas. This was the decision that mattered most because every other architectural choice would build on top of it. The stakeholders were the database team, the engineering leads, and the enterprise clients whose SLAs depended on data consistency guarantees.

**Sub-Decision 2: Deployment Model.** Containers via Kubernetes vs. serverless functions vs. hybrid. This decision depended on the data layer choice but could be evaluated independently once the data layer was settled. The stakeholders were DevOps, engineering, and the CFO, who cared about the cost structure.

**Sub-Decision 3: Team Structure.** Feature teams vs. platform team plus feature teams vs. current structure with new internal boundaries. This decision was genuinely independent. It did not depend on any architectural choice and could be resolved in parallel. The stakeholders were engineering leads, the CTO, and the VP of Product.

**Sub-Decision 4: API Contract.** REST (current) vs. GraphQL vs. gRPC for internal services with REST for external clients. Also independent. The stakeholders were engineering and the enterprise clients who had existing integrations.

**Sub-Decision 5: Migration Path.** Big bang rewrite vs. strangler fig pattern vs. parallel run with traffic splitting. This depended on the data layer and deployment decisions but had the most impact on the VP of Product's concern about feature velocity during the transition.

The decomposition alone changed the conversation. In the next meeting, Marcus presented the five sub-decisions on a whiteboard. Three engineers who had been in opposing camps looked at the list and said, almost simultaneously, "Oh. We actually agree on most of this."

## The Reversibility Check

The `map-reversibility` prompt produced the finding that broke the gridlock. Of the five sub-decisions, only one was practically irreversible: the data layer architecture. Once services were built on a data layer pattern, migrating to a different pattern would cost $2-4M and 6-12 months. Every other downstream decision accumulated dependencies on the data layer choice.

The deployment model was partially reversible. Re-platforming from containers to serverless, or vice versa, would cost $500K-1M and take 3-4 months, but it could be done without touching the data layer or the business logic.

Team structure was fully reversible. Reorganizing teams takes 2-4 weeks of disruption. It could be adjusted quarterly as the team learned what worked.

API contracts were partially reversible. Changing the internal API pattern would cost 2-3 months of engineering time, but the external REST API would remain stable regardless.

The migration path was the second-highest reversibility risk, but only if the team chose big bang. The strangler fig pattern was inherently reversible at any point: you could stop migrating and the old system would still work. The parallel run option offered reversibility through traffic splitting.

The reversibility matrix delivered a clear message: the team had been spending equal energy on five sub-decisions, but only one of them was a genuine one-way door. Four of the five could be decided quickly, tried, and adjusted. The architecture debate was not about architecture. It was about the data layer.

## The Consequence Chain

Marcus ran the `trace-consequences` prompt on the data layer options specifically, since the reversibility check had identified it as the critical sub-decision.

The consequence chain for isolated data stores (the microservices camp's preferred option) revealed a second-order effect that the microservices advocates had not addressed: at Lattice's current team size of 45 engineers, isolated data stores would require either a dedicated data infrastructure team (which they did not have and could not hire in the current market) or distributing data operations across feature teams (which would slow feature development by an estimated 30-40% during the transition). The third-order consequence was that the enterprise pipeline, the reason for the migration in the first place, would stall for 9-12 months while the team built data infrastructure competency it did not yet have.

The consequence chain for shared database with schema boundaries (the modular monolith position) showed a different profile. The first-order effect was less dramatic: internal boundaries within the existing database, enforced through schema design and access controls. The second-order effect was that feature teams could continue working at close to current velocity because the data access patterns they already understood would not change fundamentally. The third-order consequence was that the team would eventually need to evaluate selective decomposition of high-traffic services, but from a position of stability rather than mid-migration chaos.

The serverless option's consequence chain revealed a coupling the serverless advocates had underestimated. Lattice's payment reconciliation required strong consistency guarantees that event-driven architectures handle through eventual consistency patterns. Converting to eventual consistency for financial transactions required rethinking the entire reconciliation pipeline, a scope expansion that would push the migration from the estimated 6-9 months to 12-18 months once the consistency challenges surfaced.

## The BATNA Analysis

The `evaluate-alternatives` prompt added the final analytical layer. For the data layer decision specifically:

The BATNA for shared database with schema boundaries was strong: if the approach proved insufficient at scale, the team could selectively extract high-traffic domains into isolated stores using the strangler fig pattern. The fallback path was available indefinitely.

The BATNA for isolated data stores was weak: if the team could not build data infrastructure competency fast enough, the migration would stall, feature velocity would crater, and the enterprise pipeline would dry up. Rolling back to a shared database after partially migrating would create a fragmented hybrid worse than either pure approach.

The BATNA for serverless with eventual consistency was moderate but time-dependent: if the consistency challenges proved larger than expected, the team could fall back to containers, but only if they had not yet rewritten the reconciliation pipeline. After that point, the fallback involved re-rewriting core business logic.

The asymmetry was clear. Shared database with schema boundaries had the strongest floor: if it worked, the team gained stability and velocity. If it did not work, they had a defined fallback. Isolated data stores had the highest ceiling but the weakest floor. Serverless had a moderate ceiling with a time-sensitive BATNA that would expire mid-migration.

## The Decision Brief

The `decision-brief` prompt synthesized the full analysis into a one-page recommendation that Marcus presented at the next leadership meeting:

**Reframed decision**: the team was not choosing an architecture. They were making five separate decisions with different stakeholders, different reversibility profiles, and different urgency levels. Only one, the data layer, was irreversible.

**Recommended path**: Shared database with clear schema boundaries (decided at this meeting). Platform team plus feature teams (decided this week, reversible). gRPC internal with REST external (decided within two weeks, partially reversible). Strangler fig migration starting with the highest-traffic reconciliation service (starting immediately, reversible at any point). Container deployment initially, with serverless evaluation for edge functions at the 6-month checkpoint (partially reversible).

**Confidence level**: High. The analysis consistently pointed toward the shared database approach across all three frameworks: best reversibility profile, strongest BATNA, and most favorable second-order consequence chain given the team's current size and capabilities.

**Immediate action**: Resolve the data layer sub-decision in this meeting. Announce team structure change by Friday. Begin strangler fig extraction of the reconciliation service next sprint.

## The Outcome

Marcus presented the one-page brief on a Thursday. The data layer decision was made in that meeting, 47 minutes, after six weeks of deadlock. Two of the three camp leaders acknowledged that their disagreement had been about different sub-decisions, not about the same one. The third, a senior architect who had been the strongest microservices advocate, accepted the shared database approach once he saw that his real concern, service isolation, would be addressed through the strangler fig migration path without requiring an irreversible data layer commitment upfront.

By the following Monday, the team structure had been announced (platform team of 8, four feature teams). API contract discussions concluded the next week. The strangler fig migration of the reconciliation service started in the third sprint after the decision.

Three months later, the reconciliation service was running independently, handling 4,800 rps with headroom. The enterprise prospect that had given Lattice 90 days signed a 2-year contract. Feature velocity during the migration dropped by 12%, not the 30-40% projected for a full microservices migration.

At the 6-month checkpoint, Marcus's team evaluated serverless for edge functions and deployed two low-latency notification services as Lambda functions. The container-based core stayed on Kubernetes. The hybrid approach emerged naturally from the decision sequence, rather than being debated abstractly for six weeks at the start.

## Key Takeaway

Lattice's architecture deadlock was not caused by technical complexity. The three options were all viable. The deadlock was caused by treating five sub-decisions as a single monolithic choice. When five different questions with five different answers are debated simultaneously under one label, consensus becomes impossible because people are not actually disagreeing about the same thing.

The value of decision decomposition is not in making hard decisions easy. The data layer choice was still a genuinely difficult sub-decision that required careful analysis. The value is in separating the hard decisions from the easy ones, so the team stops spending equal energy on everything and focuses deliberation where it actually matters. Four of Lattice's five sub-decisions were resolved in days once they were separated from the bundle. The fifth took one meeting with structured analysis. The total elapsed time from decomposition to full decision: 11 days. The previous approach had consumed 42 days with no result.

The decisions that paralyze teams are rarely as monolithic as they appear. They are usually 3-5 smaller decisions bundled together by a shared label. Unbundle them, classify the reversibility, and most of the paralysis dissolves. The genuinely hard part, which is usually one sub-decision out of five, becomes manageable once it is isolated from the noise.
