# Production Incident: Checkout Failures

*This case study is fictional. Names, characters, companies, and scenarios are hypothetical. Any resemblance to actual persons or organizations is purely coincidental.*

## Situation

Elena, an engineering manager at an e-commerce company, was called into a war room at 2 PM on a Friday. The checkout system had been failing intermittently for the past three hours. The on-call engineer had restarted services twice, applied a database connection pool fix, and increased server capacity. Each fix seemed to work for 20-30 minutes before failures resumed.

The team was stuck in firefighting mode: applying fixes without understanding why they temporarily worked. The VP of Engineering asked Elena to step back from the immediate crisis and figure out what was actually going on. They needed to stop treating symptoms and find the real problem.

## How the Agent Was Triggered

Elena invoked the why-agent through her team's incident management Slack bot. The bot is integrated with their observability stack and can pull relevant context automatically.

**Trigger method:** Slack command `/incident-analyze`

**Data sources loaded automatically:**

- Last 4 hours of error logs from Datadog (filtered to checkout service)
- Recent deployment history from GitHub (last 5 deployments)
- PagerDuty incident timeline (actions taken so far)
- Current system metrics dashboard snapshot

**Data sources provided by Elena:**
- Verbal descriptions from the on-call engineer about what they'd tried
- Customer complaint patterns from support tickets
- Team hypothesis: "Probably a database issue"

## Agent Configuration

Elena chose the **investigator personality** because this was a technical problem requiring systematic evidence-based analysis. She wanted the agent to challenge assumptions rather than accept the team's initial hypothesis.

```yaml
problem: "Checkout failures resuming 20-30 minutes after each fix"
context: |
  E-commerce platform, peak Friday traffic
  Started 3 hours ago, no obvious trigger
  Fixes tried: service restart, DB connection pool increase, added servers
  Each fix works temporarily then failures resume
  Team hypothesis: database issue
previous_attempts:
  - "Restarted checkout service (worked 25 min)"
  - "Increased DB connection pool from 50 to 100 (worked 30 min)"
  - "Added 2 more application servers (worked 20 min)"
personality: investigator
output_format: markdown
max_depth: 7
```

## Interaction

The agent began by challenging the team's hypothesis. "If this were a database issue, why would adding application servers help temporarily? Adding servers doesn't change database capacity." This reframed the investigation.

**Level 1: Why are checkout failures resuming after fixes?**

Agent asked Elena to check if the failure pattern correlated with traffic or time. She pulled the metrics: failures didn't align with traffic spikes. They occurred at roughly regular intervals regardless of load.

**Level 2: Why would failures occur at regular intervals?**

The agent noted that 20-30 minute intervals suggested something accumulating and hitting a threshold. It asked about caching, queue depths, and scheduled jobs.

Elena checked: there was a cache warming job that ran every 20 minutes.

**Level 3: Why would a cache warming job cause checkout failures?**

The agent pushed deeper. Cache warming shouldn't block checkout. Unless... it asked about the cache implementation. Was it a shared resource?

Elena discovered the cache warming job and checkout both used the same Redis cluster. The warming job was loading a new product catalog, a task that had become much larger after last week's catalog expansion.

**Level 4: Why did the catalog expansion cause failures now?**

The expanded catalog meant cache warming now took 18 minutes instead of 5. During warming, it saturated the Redis connection pool. Checkout requests queued, then timed out.

**Level 5: Why wasn't Redis capacity increased with the catalog?**

The catalog expansion was a marketing initiative. The engineering team wasn't informed it would 4x the catalog size. No capacity planning was done.

**Root Cause Identified:**

The agent verified: "If we fix Redis capacity AND the catalog-engineering communication gap, will this prevent recurrence?" Elena confirmed both were actionable.

```yaml
root_causes:
  - cause: "Redis connection pool saturated by oversized cache warming job"
    confidence: high
    evidence: "Cache warming duration correlates with failure intervals"
  - cause: "Missing cross-team communication on catalog changes"
    confidence: high
    evidence: "Engineering unaware of 4x catalog expansion"

verification:
  - test: "Separate Redis instances for cache warming vs checkout"
    result: "Would eliminate resource contention"
  - test: "Capacity review process for catalog changes"
    result: "Would prevent future surprises"
```

## Outcome

The immediate fix was to pause the cache warming job and run it during off-peak hours with a dedicated Redis instance. Checkout stabilized within minutes.

The longer-term fixes took two weeks:
1. Separate Redis clusters for cache operations vs. transaction operations
2. New process: catalog changes over 10% size increase require engineering review
3. Alerting on cache warming duration to catch future growth

The incident that had consumed 4 hours of war room time was resolved in 45 minutes once the why-agent helped the team stop treating symptoms.

## Lessons

**On triggering the agent:** The automatic context loading from observability tools was crucial. Elena didn't have to manually copy logs or describe the technical environment; the agent had the evidence. The Slack integration meant she could invoke analysis without leaving the incident channel.

**On personality choice:** The investigator personality was right for this scenario. It challenged the "database issue" hypothesis immediately, preventing more time wasted on the wrong path. A coach personality would have been too gentle; Elena needed direct pushback on assumptions.

**On data sources:** The agent's value came from connecting dots the team couldn't see. Humans were focused on error logs; the agent asked about scheduled jobs. The deployment history showed no recent changes, which ruled out code bugs. The key insight came from correlating failure intervals with job schedules, something obvious in retrospect but invisible when firefighting.

**On root cause depth:** The agent went to level 5 before finding something actionable. Stopping at "Redis saturated" (level 3) would have led to throwing more Redis capacity at the problem without fixing the communication gap that caused it.

**On verification:** Before concluding, the agent tested whether the proposed fixes would actually prevent recurrence. This caught the second root cause: even with more Redis capacity, the next catalog expansion would cause the same problem if engineering wasn't informed.
