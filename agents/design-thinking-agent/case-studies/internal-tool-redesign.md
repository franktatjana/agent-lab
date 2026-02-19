# Internal Tool Redesign: When the "Simple Fix" Wasn't Simple

*This case study is fictional and created for educational purposes. Any resemblance to real organizations is coincidental.*

## Situation

A mid-size consulting firm (400 people) had an internal time-tracking tool that everyone hated. Consultants routinely submitted time entries late, entered inaccurate data, and complained about the interface. The IT team had already planned a "UI refresh" to modernize the look and add a mobile app. The project sponsor wanted to skip straight to building.

The Head of Operations, Sarah, had recently attended a design thinking workshop and suggested they spend two weeks understanding the actual problem before committing to a six-month development project.

## How the Agent Was Triggered

**Trigger method:** Sarah described the situation to the Design Thinking Agent and selected the "Empathy Sprint" skill to start with empathy work before the team jumped to solutions.

**Data sources available to the agent:** Problem description, stakeholder roles (consultants, project managers, finance team, IT), existing complaints from a survey, current tool screenshots.

**Data sources provided by Sarah:** Survey results showing 73% dissatisfaction, three verbatim consultant complaints, the IT team's proposed solution brief.

**What the agent could NOT access:** Direct user observation, actual time entry data, or the existing tool's backend architecture.

## Agent Configuration

- **Skill:** Empathy Sprint (empathize-stakeholders + synthesize-observations + frame-problem)
- **Personality:** Facilitator
- **Format:** Markdown

## Interaction

The agent guided Sarah through three phases:

**Empathy mapping** revealed that the problem wasn't the UI. Consultants' empathy maps showed:
- **Says:** "The tool is clunky and slow"
- **Thinks:** "Time tracking is administrative busywork that doesn't help me"
- **Feels:** Guilty about inaccurate entries, anxious about being judged on hours
- **Does:** Batches entries on Friday afternoon from memory, rounds to nearest hour

Project managers' maps showed:
- **Says:** "I need accurate time data for billing"
- **Thinks:** "Consultants don't care about my problems"
- **Feels:** Frustrated that billing accuracy depends on others' compliance
- **Does:** Manually chases consultants every week, adjusts entries before sending to finance

**Synthesis** identified the core tension: the tool was designed for finance's needs (accurate billing) but used by consultants who saw zero personal value in it. Making the UI prettier wouldn't change this fundamental misalignment.

**Problem framing** produced:
- **POV:** Consultants need time tracking to feel valuable to them, not just to finance, because compliance drops when people see no personal benefit.
- **HMW questions:**
  - How might we make time data useful to consultants, not just to finance?
  - How might we capture time without requiring end-of-week memory reconstruction?
  - How might we make accurate time tracking feel like a professional practice rather than administrative burden?

## Outcome

Sarah took the empathy sprint output back to the project sponsor. Instead of a UI refresh, the team explored the HMW questions in an ideation session. The winning concept was a daily 30-second "check-in" that showed consultants their own utilization trends and project allocation, turning time tracking from a reporting burden into a personal dashboard.

The six-month UI refresh was replaced by a focused three-month project that addressed the actual problem. Post-launch, on-time submission rates went from 41% to 87%.

## Lessons

1. **"Fix the UI" is rarely the real problem.** Empathy mapping revealed a motivation gap, not a usability gap. The old UI was a symptom, not the cause.
2. **Empathy maps expose Says/Does contradictions.** Consultants said the tool was slow. Their behavior showed the real issue was perceived irrelevance.
3. **Problem framing changes the solution space.** The HMW questions opened up solutions the IT team hadn't considered because they were solving the wrong problem.
4. **Two weeks of empathy work saved months of misguided development.** The instinct to "just build it" would have produced a prettier version of the same problem.
