# The Three Gates Nobody Could Explain

**Disclaimer: This case study is entirely fictional. All names, companies, events, and technical details are invented for educational purposes. Any resemblance to real organizations or individuals is coincidental.**

## The Situation

Priya Vasquez had been Director of Engineering at Meridian Health Systems for fourteen months when the deployment pipeline became the team's most-discussed bottleneck. Meridian built clinical data integration software used by 80 regional hospitals across the US. The engineering team of 55 had grown from 18 in four years, shipping a platform that processed 2 million patient records daily.

Every deployment to production passed through three approval gates: the team lead signed off on the code changes, the QA director signed off on test results, and the VP of Infrastructure signed off on deployment readiness. In sequence, not in parallel. Average time from merged PR to production: 3.2 days. During peak release periods, it stretched to 5.

The newer engineers, most of whom had joined after the company adopted CI/CD with automated testing, canary deployments, and automated rollback, could not understand why three humans needed to bless what the automation already verified. The QA director's approval, in particular, had become a rubber stamp: she reviewed the same automated test reports that the CI pipeline already gated on, added her initials, and moved the ticket. The infrastructure sign-off similarly duplicated what the canary deployment process already validated.

Priya's instinct was to streamline. Two of the three gates appeared redundant. But the VP of Infrastructure, David Okonkwo, who had been at Meridian for seven years, pushed back firmly. "Those gates exist for a reason. I was there when we put them in. You need to understand what happened before you start removing things."

Priya decided to do exactly that.

## The Excavation

The investigation started with what was observable. The three-gate process lived in Meridian's deployment tool as three sequential approval steps, each with a checklist and a required approver. The tool's audit log showed the gates had been in the system since January 2021. Priya's team traced the history through four layers.

**Layer 1 (January 2021, documented):** The three-gate process was created in direct response to an incident. In December 2020, a junior engineer deployed a database migration to production without coordinating with the infrastructure team. The migration locked a critical table for 47 minutes during peak hospital hours, causing downstream systems at three hospitals to lose access to patient medication records. No patients were harmed, but the incident triggered a mandatory review by Meridian's healthcare compliance team and a formal corrective action plan. The three gates were the corrective action: team lead verifies the code, QA verifies the testing, infrastructure verifies deployment readiness. The incident report was still in the compliance archive.

**Layer 2 (June 2021, documented):** The infrastructure gate was expanded with a 15-item deployment checklist after a second incident, this time a configuration change that was deployed without updating the corresponding feature flags. The checklist included items for database migrations, configuration changes, feature flag updates, rollback procedures, and notification to on-call staff. At the time, all of these checks were manual because no automation existed for them.

**Layer 3 (March 2022, documented):** The engineering team adopted CI/CD with automated testing. Unit tests, integration tests, and a staging environment deployment were added to the pipeline. The QA director's approval step was not removed or modified; the automated pipeline was added alongside the manual approval. In the pull request that introduced CI/CD, there was a comment: "We should revisit the manual QA gate now that tests are automated." The comment received no response and no follow-up issue was created.

**Layer 4 (November 2022, documented):** Canary deployments and automated rollback were introduced. The infrastructure checklist's deployment-readiness items were now verified automatically: database migration dry-runs, configuration validation, rollback testing, and progressive traffic shifting. The infrastructure approval step was not removed or modified. No record existed of anyone proposing to revisit it.

The excavation revealed a clear pattern: the manual approval process was created when no automation existed, and as automation was added piece by piece, the manual process was never revisited. Each automation initiative focused on adding the new capability, not removing the manual step it replaced.

## The Reconstruction

The original decision was precise: after a production incident that caused downstream clinical system failures, implement a three-person sequential approval process that ensures no deployment reaches production without review by the code author's lead (code quality), the QA director (test verification), and the VP of Infrastructure (deployment readiness). This decision was made under three specific constraints.

**Constraint 1 (incident-driven):** The December 2020 incident demonstrated that uncoordinated deployments could cause clinical system failures. The three-gate process was the corrective action plan approved by the healthcare compliance team. The emotional weight of an incident affecting patient care systems was significant, and the organizational response was proportionally cautious.

**Constraint 2 (technical):** In January 2021, Meridian had no CI/CD pipeline, no automated testing in the deployment path, no canary deployments, and no automated rollback. Deployment was a manual SSH process. Human review was the only verification mechanism available.

**Constraint 3 (regulatory):** Meridian's software handled protected health information (PHI) under HIPAA. The compliance team required an auditable approval trail for production deployments. The three-gate process created that trail: three named individuals reviewed and approved each deployment, producing a compliance-ready audit record.

Two alternatives had been considered and rejected at the time. A two-person approval (team lead + infrastructure) was rejected because the compliance team wanted an independent QA function in the chain. A post-deployment review (deploy first, review after) was rejected because the incident that triggered the process involved clinical systems where post-deployment correction was not acceptable.

## The Constraint Assessment

Priya's team evaluated each constraint against current conditions.

**Constraint 1 (incident-driven): Changed.** The specific failure mode, an uncoordinated database migration deployed without infrastructure awareness, had been structurally prevented by the CI/CD pipeline. Database migrations now ran through an automated dry-run in staging, were validated against the production schema, and deployed through a canary process with automatic rollback if error rates exceeded thresholds. The incident that triggered the three-gate process could not recur through the same mechanism. However, the underlying concern (uncoordinated changes to clinical systems) remained valid. The concern was real; the mitigation mechanism had changed. Confidence: high.

**Constraint 2 (technical): Expired.** Every function the three human approvals performed in January 2021 was now automated. Code quality was verified by automated tests gated in CI. Test coverage was verified by the pipeline's test suite. Deployment readiness was verified by canary deployment with automated rollback. The manual approvals duplicated what the automation already enforced, adding 2-3 days of latency without adding verification that the pipeline did not already provide. Confidence: high.

**Constraint 3 (regulatory): Valid.** HIPAA still required an auditable deployment trail. This constraint had not changed. However, the constraint required an auditable trail, not specifically three human approvals. The CI/CD pipeline produced detailed, immutable audit logs for every deployment: who merged the code, what tests passed, what the canary metrics showed, whether rollback was triggered. The audit trail produced by the automated pipeline was more detailed and more reliable than the manual approval records. The regulatory constraint was valid, but it could be satisfied differently. Confidence: medium (pending compliance team review).

## The Recommendation

The archaeological report delivered a verdict of **modify**, not remove. The reasoning traced directly from the constraint assessment.

Two of the three constraints had been resolved by automation. The team lead's code quality review was covered by automated testing. The infrastructure deployment readiness check was covered by canary deployment and automated rollback. These two gates added 2-3 days of latency without adding verification value.

The third constraint, the compliance audit trail, was still valid. HIPAA required documentation of who approved what and when. But the constraint required an auditable trail, not three specific human approvals. The automated pipeline already produced a richer audit trail than the manual process.

The recommendation: replace the three-gate process with a single approval gate. One named individual (the team lead or a designated reviewer) approves the deployment, providing the human judgment and accountability that the compliance framework requires. The CI/CD pipeline handles the verification that used to require the QA director and the VP of Infrastructure. The deployment tool's audit log, combined with the CI/CD pipeline's immutable records, provides the compliance trail.

**Risks of change:**
- The compliance team might interpret HIPAA audit trail requirements as requiring the original three-approval structure. This needed verification before implementation.
- Reducing to one approval removed a psychological safety net. Engineers who were nervous about deploying to clinical systems drew comfort from knowing three people had signed off. The comfort was not backed by additional verification, but it was real.
- If the automation failed silently (tests passing when they should not, canary metrics not triggering rollback), the single remaining human approval would be the only backstop.

**Risks of keeping:**
- Every deployment to clinical systems was delayed 2-3 days by approval wait times, slowing the team's ability to ship security patches and bug fixes to systems handling patient data.
- The QA director spent approximately 4 hours per week on rubber-stamp approvals, time that could be redirected to improving the test suite.
- The three-gate process created a false sense of thoroughness: the approvals felt rigorous but duplicated what automation already verified.

## The Outcome

Priya presented the archaeological report at the next engineering leadership meeting. David Okonkwo, the VP of Infrastructure who had initially pushed back, read the full report before the meeting. His response surprised the team: "I wish we had done this analysis two years ago. The gates were the right call in 2021. I just never went back to check whether the reasons still held."

The compliance team reviewed the recommendation and confirmed that a single human approval combined with automated audit logs satisfied their HIPAA audit trail requirements. They noted that the automated logs were more complete than the manual records had been.

Meridian moved to a single-approval process in the following sprint. The team lead (or a designated senior engineer for after-hours deployments) provided the human judgment layer. The CI/CD pipeline provided the verification. Average time from merged PR to production dropped from 3.2 days to 4 hours.

The QA director redirected her approval time to expanding the integration test suite, adding coverage for the clinical system interaction patterns that had caused the original 2020 incident. The expanded test suite caught two potential issues in its first month, issues that would not have been caught by a human reviewing test reports.

Three months later, Priya wrote a proper Architecture Decision Record documenting the change: the original context (2020 incident, no automation), the original decision (three gates), the changed context (CI/CD, canary deployments, automated rollback), and the new decision (single approval with automated verification). She filed it alongside the original incident report, creating the organizational memory that would prevent the next engineering director from asking the same questions in five years.

## Key Takeaway

Meridian's three-gate deployment process was the right decision in January 2021. It was a proportionate response to a real incident, under real constraints, at a time when human review was the only verification available. The people who created it were solving a genuine problem with the tools they had.

The process became a problem not because the original decision was wrong, but because the constraints changed and nobody went back to check. The CI/CD pipeline, the canary deployments, and the automated rollback each addressed one of the manual approval's original purposes. But each automation initiative focused on adding the new capability, not removing the manual step it replaced. The result was a system that verified everything twice: once automatically and once manually, with the manual step adding latency but not confidence.

The value of decision archaeology is not in proving that past decisions were wrong. Most of them were reasonable given their constraints. The value is in identifying which constraints have expired so the organization can evolve its practices to match its current capabilities. Meridian's fence was real. The wolves were real. But the wall had been built, and the fence was now slowing down the people it was meant to protect.
