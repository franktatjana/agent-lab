# Agent Catalog

All agents in this repository, complete specs and ideas in development.

---

## Complete Agents

### [culture-agent](agents/culture-agent/)

Cross-cultural communication advisor. Prepares parties for international meetings, mediates misunderstandings, bridges communication gaps. *10 prompts · 4 skills · 3 personalities.*

- **Skills:** meeting-prep, conflict-mediation, culture-comparison, cultural-bridge
- **Personalities:** business, casual, diplomatic
- **Frameworks:** Hofstede dimensions, Erin Meyer Culture Map, communication checklists

**When to use:** Cross-cultural meetings, international negotiations, resolving cultural misunderstandings, adapting messages for different audiences.

---

### [research-agent](agents/research-agent/)

Research and synthesis specialist. Evaluates sources, synthesizes findings, tracks confidence and uncertainty. *6 prompts · 4 skills · 3 personalities.*

- **Skills:** deep-research, quick-scan, fact-check, compare-sources
- **Personalities:** executive, detailed, educational
- **Frameworks:** Source quality evaluation, credibility assessment, synthesis patterns

**When to use:** Deep multi-source research, quick orientation scans, claim verification, comparing conflicting sources.

---

### [why-agent](agents/why-agent/)

Root cause analysis specialist. Drills down from symptoms to what's really going on through structured questioning. *4 prompts · 4 skills · 3 personalities.*

- **Skills:** drill-down (5 Whys), fishbone-analysis, challenge-assumptions, a3-problem-solving
- **Personalities:** coach, investigator, facilitator
- **Frameworks:** 5 Whys, Fishbone/Ishikawa, A3 Thinking, Socratic Method

**When to use:** Production incidents, quality issues, team problems, process breakdowns, any situation where you need to find the real cause before jumping to solutions. Part of the Thinking Chain: why → systems-thinker → strategist → tactician.

---

### [generation-agent](agents/generation-agent/)

Cross-generational communication bridge. Translates messages, explains cultural context, and coaches individuals to connect across workplace age divides. *4 prompts · 4 skills · 3 personalities.*

- **Skills:** adapt-message, explain-style, bridge-gap, coach-sender
- **Personalities:** translator, educator, coach
- **Frameworks:** Generational communication patterns, workplace communication research

**When to use:** Adapting messages for different age groups, understanding why generations communicate differently, resolving generational friction in teams, developing cross-generational communication skills.

---

### [superhero-agent](agents/superhero-agent/)

Reframes work challenges through superhero storytelling. You're the hero, work is the universe, every challenge is a mission. Uses Marvel archetypes to build confidence and find your unique approach. *3 prompts · 2 skills · 8 personalities.*

- **Skills:** frame-mission, suit-up, assemble-team, identify-power, map-villain
- **Personalities:** iron-man, captain-america, black-widow, spider-man, thor, hulk, black-panther, doctor-strange
- **Frameworks:** Hero's Journey, Villain Archetypes, Team Assembly

**When to use:** Facing difficult presentations, building confidence before high-stakes moments, finding your superpower, naming obstacles to create strategy, assembling support for big initiatives.

---

### [storytelling-agent](agents/storytelling-agent/)

Crafts compelling narratives for professional contexts. Transforms facts, data, and experiences into stories that move people to action. *5 prompts · 4 skills · 3 personalities.*

- **Skills:** craft-narrative, pitch-story, data-storytelling, origin-story
- **Personalities:** narrator, business, inspirational
- **Frameworks:** Hero's Journey, Pixar Story Spine, STAR Stories, Data Storytelling, Brand Narrative

**When to use:** Board presentations, pitch decks, quarterly reviews, personal branding, turning data into narratives, any situation where facts alone aren't enough.

---

### [question-decoder-agent](agents/question-decoder-agent/)

Decodes questions before answering them. Analyzes who is asking, why they're asking, and what they need to hear, then architects the right response. *5 prompts · 4 skills · 3 personalities.*

- **Skills:** decode-question, architect-answer, reframe-for-audience, anticipate-follow-ups
- **Personalities:** strategic, empathetic, coach
- **Frameworks:** Audience Analysis Matrix, Question Behind the Question, Answer Architecture, Pyramid Principle

**When to use:** Preparing for board Q&A, answering executive questions, reframing technical answers for non-technical audiences, any situation where the right answer depends on who's asking.

---

### [six-hats-agent](agents/six-hats-agent/)

Structured thinking facilitator. Walks through six distinct perspectives (facts, emotions, risks, benefits, creativity, process) on any decision or problem. *8 prompts · 4 skills · 3 personalities.*

- **Skills:** full-hat-session, decision-analysis, idea-exploration, risk-assessment
- **Personalities:** facilitator, executive, coach
- **Frameworks:** Six Thinking Hats (de Bono), Parallel Thinking, Lateral Thinking

**When to use:** Making decisions, evaluating ideas, resolving disagreements, exploring problems from multiple angles, team workshops.

---

### [corporate-navigator-agent](agents/corporate-navigator-agent/)

Corporate politics and stakeholder navigator. Maps power dynamics, analyzes political landscapes, plans influence strategies, and coaches career advancement. *5 prompts · 5 skills · 3 personalities.*

- **Skills:** map-stakeholders, analyze-dynamics, plan-influence, coach-career, navigate-situation
- **Personalities:** executive, coach, tactical
- **Frameworks:** Stakeholder Mapping, GROW Model, Organizational Politics

**When to use:** Navigating office politics, mapping stakeholders before a proposal, preparing for organizational change, career advancement strategy, understanding why decisions really get made.

---

## Prompt Design Patterns

All agents in this repository follow two prompt quality patterns. See the [handbook](docs/handbook.md) for the full rationale.

**Input Validation Gates.** Each agent defines required input dimensions (e.g., source culture, target culture, context). When the user's input is incomplete, the agent states what's missing, gives a short preliminary analysis, and asks for clarification instead of generating a full response from insufficient context.

**Output Constraints.** Each agent defines field-level word limits and a total word cap (typically 250-400 words). This forces the agent to prioritize and distill rather than dump context. Fields are structured for consistency across runs: same input produces comparable output shape every time.

---

## Agent Ideas

Future agents under consideration. See [agents/agent-ideas.md](agents/agent-ideas.md) for details and references.

- **decision-facilitator-agent**: Guides structured decision-making processes and frameworks
