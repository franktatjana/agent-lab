# Audience Frameworks

The theoretical foundation the agent uses to decode questions and architect answers. Five frameworks, each serving a different purpose: the Audience Analysis Matrix for profiling, the Question Behind the Question for intent decoding, Answer Architecture for response design, Curse of Knowledge Inversion for perspective-taking, and the Pyramid Principle for structure.

## When to Load

Load when decoding questions, profiling audiences, or architecting answers. Most skills reference at least one of these frameworks.

---

## Audience Analysis Matrix

A structured approach to mapping who is asking a question and what they need. Cross-references role with information needs, preferred format, and decision context.

| Dimension | Executive | Manager | IC / Expert | External Stakeholder |
|-----------|-----------|---------|-------------|---------------------|
| **Cares about** | Risk, timeline, cost, competitive position | Execution, resources, dependencies, team health | Technical accuracy, implementation detail, trade-offs | Value delivered, timeline, relationship |
| **Preferred format** | Headline + recommendation | Summary + options | Detail + evidence | Narrative + outcomes |
| **Depth needed** | Headline (10 seconds) | Summary (2 minutes) | Detailed (as long as needed) | Summary (1 minute) |
| **Decision context** | Approves, escalates, or redirects | Plans, prioritizes, allocates | Implements, validates, flags issues | Evaluates, renews, refers |
| **Worst answer** | Starts with background | No clear recommendation | Missing technical specifics | Jargon-heavy, no business outcome |

### How to Use

1. Identify where the asker falls in the matrix
2. Match your answer format to their preferred format
3. Calibrate depth to their decision context
4. Avoid the "worst answer" pattern for their profile

### Example

A CFO asks "What's the ROI on this platform investment?" They care about cost and competitive position. They want a headline with a recommendation. The worst answer starts with the technical architecture. The right answer starts with "3.2x return over 18 months, with break-even at month 6."

---

## Question Behind the Question

Techniques for reading intent when the literal question doesn't tell the whole story. Most questions carry subtext shaped by the asker's role, timing, and emotional state.

### The Escalation Test

Ask yourself: "If my answer is bad news, what would this person do next?" The answer to that question reveals what they're really asking.

- If they'd escalate to their boss, they're asking: "Is there a problem I need to report?"
- If they'd change resource allocation, they're asking: "Do I need to intervene?"
- If they'd do nothing, they're asking: "Can I stop thinking about this?"

**Example:** A project sponsor asks "How's the team doing?" If a bad answer would cause them to schedule a review meeting, the real question is "Should I be worried about delivery?"

### The Trigger Test

Ask yourself: "Why this question now, not last week?" Something changed. Find the trigger and you find the intent.

Common triggers:
- Just came from another meeting where this topic came up
- Read a report, article, or competitor announcement
- Heard something from someone else (secondhand concern)
- Calendar-driven (end of quarter, board meeting approaching)
- Personal experience (just had a bad interaction with the product/team)

**Example:** Your VP asks "What's our test coverage?" on a Monday morning. Trigger test: there was probably a production incident over the weekend. The real question is "Are we shipping too fast and breaking things?"

### The "What Would Change" Test

Ask yourself: "What answer would cause the asker to change their behavior?" If no answer would change their behavior, they're seeking validation, not information.

- If "good news" changes nothing and "bad news" triggers action, they're asking: "Do I need to act?"
- If any answer triggers the same next step, they've already decided and are looking for support
- If the answer genuinely determines their next move, this is a real information request

**Example:** A hiring manager asks "What do you think about this candidate?" If they're asking after already extending an offer, they want validation. If they're asking before the debrief, they want information.

---

## Answer Architecture

A decision framework for matching response format to audience and context. Four formats, each suited to different situations.

### Pyramid Format (Best for executives)

Lead with the answer. Support with key points. Offer detail on request. Named after Barbara Minto's Pyramid Principle, this format respects the audience's time and decision-making process.

Structure:
1. **Answer first:** One sentence that addresses the real question
2. **Three supporting points:** Evidence grouped by theme, not chronology
3. **Detail available:** "Happy to go deeper on any of these"

**When to use:** Time-constrained audiences, executive conversations, hallway questions, chat messages.

**Example:** "We're on track for Q3 launch. Three things give me confidence: testing is 90% complete, the vendor dependency resolved last week, and we have two weeks of buffer. Want me to send the detailed status?"

### Narrative Format (Best for peers and teams)

Set the context, walk through the story, land the point. This format builds shared understanding and is effective when the audience needs to follow your reasoning.

Structure:
1. **Context:** Where we were
2. **Development:** What happened
3. **Resolution:** Where we are now
4. **Implication:** What it means going forward

**When to use:** Team updates, peer conversations, situations where buy-in matters.

**Example:** "When we started the migration in January, the biggest unknown was the data mapping. We spent three weeks on it, found two schema conflicts, and resolved both by March. We're now in the final testing phase. This means we're confident in data integrity for the launch."

### Direct Format (Best for time-constrained or chat)

One sentence answer. One proof point. Done. No preamble, no context-setting, no hedging.

Structure:
1. **Answer:** Yes/no/number/status
2. **Proof:** One supporting fact

**When to use:** Hallway conversations, chat messages, when someone is clearly in a hurry.

**Example:** "Yes, on track. Final testing completes next Friday."

### Data-Led Format (Best for analytical audiences)

Lead with the number. Explain what it means. Recommend an action. This format works when the audience trusts data more than narrative.

Structure:
1. **The number:** The key metric or data point
2. **The meaning:** What it tells us
3. **The action:** What we should do about it

**When to use:** Finance conversations, engineering reviews, data-driven cultures.

**Example:** "Test coverage is at 87%, up from 72% last quarter. The remaining gaps are in the payment module, which carries the most business risk. I recommend we prioritize that module before launch."

---

## Curse of Knowledge Inversion

A technique for bridging the gap between what you know and what your audience knows. Once you understand something deeply, it's nearly impossible to remember what it was like not to understand it. This is the curse of knowledge, and it's the most common reason answers miss the mark.

### The Problem

Experts unconsciously assume their audience shares their context. An engineer explaining a system outage to a CEO uses terms like "cache invalidation" and "race condition" because those words are the most precise. But precision for the speaker is noise for the listener.

### The Inversion Technique

Instead of simplifying your understanding downward, rebuild the explanation from the listener's starting point upward:

1. **Start from zero:** What does this person already know about this topic? Assume less than you think.
2. **Find their anchor:** What concept from their world maps to what you're explaining? (A "load balancer" is like "a host at a restaurant directing guests to open tables.")
3. **Build one layer:** Add exactly one new concept. Not three. Not "while we're at it." One.
4. **Check comprehension:** Does their response show understanding, or polite nodding?
5. **Repeat or stop:** If they're tracking, add one more layer. If not, find a better anchor.

### Common Mistakes

- **Dumbing down instead of translating.** Simplification that loses accuracy is condescension. Translation that preserves accuracy in different language is respect.
- **Using analogies that don't hold.** A bad analogy is worse than no analogy. If the analogy breaks down at the point that matters, it misleads more than it clarifies.
- **Skipping the "why they should care" step.** Before explaining what something is, explain why it matters to them. "Our caching layer failed" means nothing to a CEO. "Customers saw slow load times for 20 minutes" means everything.

### Example

Technical explanation: "The OOM error caused the pod to restart, but the liveness probe detected it within 30 seconds and traffic was rerouted."

CEO translation: "We had a brief technical hiccup that lasted about 30 seconds. Our automated systems caught it and rerouted users. No customer impact."

Manager translation: "One of our services ran out of memory and restarted. Our monitoring caught it fast and no customers were affected. We're adding a memory limit to prevent recurrence."

Engineer translation: "The auth service hit an OOM, pod restarted, liveness probe caught it in 30s. No dropped requests. I'm adding resource limits to the deployment spec."

---

## Pyramid Principle (Minto)

Barbara Minto's Pyramid Principle is the gold standard for structured communication in business contexts. The core idea: start with the answer, then group supporting arguments, then provide detail.

### The Rule

Every communication should have one governing thought (the answer) supported by a small number of key points (usually three), each of which can be supported by detail if needed.

### Why It Works

- **Executives don't have time for build-up.** They need the conclusion first so they can decide whether to invest attention in the reasoning.
- **Grouping aids memory.** Three supporting points are memorable. Seven are not.
- **It forces clarity.** If you can't state your answer in one sentence, you don't yet understand it well enough to communicate it.

### Structure

Answer (one sentence)
├── Key Point 1 (supporting argument)
│   ├── Detail 1a
│   └── Detail 1b
├── Key Point 2 (supporting argument)
│   ├── Detail 2a
│   └── Detail 2b
└── Key Point 3 (supporting argument)
    ├── Detail 3a
    └── Detail 3b

### Logical Ordering Within Groups

Supporting points and details should follow one of these orders:
- **Time order:** First, then, finally (for process or chronological topics)
- **Structural order:** By component, region, or category (for descriptive topics)
- **Importance order:** Most critical first (for recommendations)

### Application to Question Decoding

When architecting an answer:
1. Identify the single answer that addresses the real question
2. Group supporting evidence into 2-4 key points
3. Order by what this audience cares about most
4. Hold detail in reserve for follow-up questions

### Example

Question from board member: "Should we acquire this company?"

Pyramid answer: "Yes, we should acquire. Three reasons: it fills our product gap in the enterprise segment, the price is below market due to their funding situation, and their engineering team has capabilities we'd spend 18 months building. The risk is integration complexity, but we've scoped that at 6 months with a dedicated team."
