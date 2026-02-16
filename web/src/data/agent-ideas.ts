export interface AgentIdeaFramework {
  name: string;
  detail: string;
}

export interface AgentIdeaSkill {
  id: string;
  description: string;
}

export interface AgentIdeaReference {
  label: string;
  url: string;
  note: string;
}

export type IdeaCategory = "Decision & Strategy" | "Communication" | "Career Development" | "Team & Organization";

export const ideaCategories: IdeaCategory[] = [
  "Decision & Strategy",
  "Communication",
  "Career Development",
  "Team & Organization",
];

export interface AgentIdea {
  id: string;
  name: string;
  description: string;
  category: IdeaCategory;
  group?: string;
  rationale: string;
  frameworks?: AgentIdeaFramework[];
  skills: AgentIdeaSkill[];
  keyPrinciples?: string[];
  inputs?: string[];
  validationRules?: string[];
  outputConstraints?: string;
  references: AgentIdeaReference[];
  ipNotes?: string;
}

export function buildIdeaFlyoutContent(idea: AgentIdea): string {
  const sections: string[] = [];

  sections.push(idea.rationale);

  if (idea.frameworks && idea.frameworks.length > 0) {
    sections.push("## Frameworks");
    sections.push(idea.frameworks.map(f => `- **${f.name}**: ${f.detail}`).join("\n"));
  }

  if (idea.skills.length > 0) {
    sections.push("## Possible Skills");
    sections.push(idea.skills.map(s => `- **${s.id}**: ${s.description}`).join("\n"));
  }

  if (idea.keyPrinciples && idea.keyPrinciples.length > 0) {
    sections.push("## Key Principles");
    sections.push(idea.keyPrinciples.map(p => `- ${p}`).join("\n"));
  }

  if (idea.inputs && idea.inputs.length > 0) {
    sections.push("## Inputs");
    sections.push(idea.inputs.map(i => `\`${i}\``).join(", "));
  }

  if (idea.validationRules && idea.validationRules.length > 0) {
    sections.push("## Validation Rules");
    sections.push(idea.validationRules.map(r => `- ${r}`).join("\n"));
  }

  if (idea.outputConstraints) {
    sections.push("## Output Constraints");
    sections.push("```text\n" + idea.outputConstraints + "\n```");
  }

  if (idea.ipNotes) {
    sections.push("## IP & Approach Notes");
    sections.push(idea.ipNotes);
  }

  if (idea.references.length > 0) {
    sections.push("## References");
    sections.push(idea.references.map(r => `- [${r.label}](${r.url}): ${r.note}`).join("\n"));
  }

  return sections.join("\n\n");
}

export const agentIdeas: AgentIdea[] = [
  {
    id: "decision-facilitator",
    name: "Decision Facilitator",
    description: "Guides structured decision-making using proven frameworks",
    category: "Decision & Strategy",
    rationale: "Guides structured decision-making processes. Not about making decisions, but facilitating the methodology: mapping options, criteria, stakeholders, outcomes, and trade-offs.",
    frameworks: [
      { name: "RAPID", detail: "Recommend, Agree, Perform, Input, Decide (Bain & Company)" },
      { name: "DACI", detail: "Driver, Approver, Contributors, Informed (Atlassian)" },
      { name: "Decision Matrix", detail: "Weighted criteria scoring for option comparison" },
      { name: "Pre-Mortem", detail: "Prospective hindsight to identify failure modes" },
      { name: "Six Thinking Hats", detail: "Parallel thinking for comprehensive analysis (de Bono)" },
      { name: "Cynefin Framework", detail: "Simple, Complicated, Complex, Chaotic domain classification" },
    ],
    skills: [
      { id: "structure-decision", description: "Frame the decision, identify type, select appropriate framework" },
      { id: "map-options", description: "Enumerate alternatives with pros, cons, and trade-offs" },
      { id: "define-criteria", description: "Establish weighted evaluation criteria" },
      { id: "identify-stakeholders", description: "Who decides, who inputs, who is affected" },
      { id: "run-pre-mortem", description: "Imagine failure and work backward to risks" },
      { id: "document-decision", description: "Capture rationale, context, and expected outcomes" },
    ],
    keyPrinciples: [
      "**Clarity over consensus**: Define who decides, not just who discusses",
      "**Explicit criteria**: Hidden criteria lead to hidden conflicts",
      "**Reversibility matters**: One-way doors need more rigor than two-way doors",
      "**Document rationale**: Future you will forget why this made sense",
      "**Separate divergence from convergence**: Generate options before evaluating",
    ],
    inputs: ["decision_context", "options", "stakeholders", "constraints", "timeline", "reversibility"],
    validationRules: [
      "Decision context (what is being decided and why now?)",
      "Options available (what alternatives exist?)",
      "Stakeholders (who decides, who is affected?)",
      "Constraints (timeline, budget, reversibility)",
    ],
    outputConstraints: "decision_frame: 2-3 sentences. Name the decision type and recommended framework.\noptions_analysis: Max 3 options, 2 sentences each (pros/cons).\nrecommendation: 1-2 sentences. Rank by impact.\nnext_step: One concrete action to move forward.\n\nTotal output must not exceed 300 words.",
    references: [
      { label: "RAPID Decision-Making (Bain)", url: "https://www.bain.com/insights/rapid-tool-to-clarify-decision-accountability/", note: "role clarity framework" },
      { label: "DACI Framework (Atlassian)", url: "https://www.atlassian.com/team-playbook/plays/daci", note: "decision documentation" },
      { label: "Six Thinking Hats (de Bono)", url: "https://www.debonogroup.com/services/core-programs/six-thinking-hats/", note: "parallel thinking" },
      { label: "Cynefin Framework (Snowden)", url: "https://thecynefin.co/about-us/about-cynefin-framework/", note: "complexity-aware decisions" },
      { label: "Pre-Mortem (Klein)", url: "https://hbr.org/2007/09/performing-a-project-premortem", note: "prospective hindsight" },
    ],
  },
  {
    id: "corporate-navigator",
    name: "Corporate Navigator",
    description: "Navigates office politics and stakeholder dynamics",
    category: "Decision & Strategy",
    rationale: "Helps navigate corporate culture, office politics, and career advancement. Distinct from culture-agent (national/regional cultures): this focuses on workplace dynamics within organizations.",
    skills: [
      { id: "map-stakeholders", description: "Identify key players, interests, power, relationships" },
      { id: "analyze-dynamics", description: "Political landscape, alliances, informal networks" },
      { id: "plan-influence", description: "Strategies for gaining support, building coalitions" },
      { id: "coach-career", description: "Structured development using GROW/STEER/CAREER frameworks" },
      { id: "navigate-situation", description: "Tactical advice for specific scenarios (promotion, conflict, change)" },
    ],
    inputs: ["organization_context", "your_role", "stakeholders", "situation", "constraints"],
    validationRules: [
      "Organization context (company type, culture, size)",
      "Your role (position, tenure, reporting structure)",
      "Specific situation (what is happening, what's at stake?)",
      "Key stakeholders (who matters in this scenario?)",
    ],
    outputConstraints: "landscape: 2-3 sentences. Name the political dynamic at play.\nkey_players: Max 3 stakeholders, one sentence each (interest, influence, stance).\nrecommendations: Top 3 actions, ranked by impact. One sentence each.\nrisk: One sentence on what to watch out for.\n\nTotal output must not exceed 300 words.",
    references: [
      { label: "Stakeholder Mapping Frameworks", url: "https://www.bitesizelearning.co.uk/resources/stakeholder-mapping-explanation", note: "influence/interest matrices" },
      { label: "ODI Stakeholder Analysis", url: "https://odi.org/en/publications/mapping-political-context-stakeholder-analysis/", note: "power, positions, perspectives" },
      { label: "GROW Model", url: "https://simply.coach/blog/grow-model-template-worksheet/", note: "goals, reality, options, will" },
      { label: "Career Coaching Tools", url: "https://positivepsychology.com/career-coaching/", note: "strengths-based approaches" },
    ],
  },
  {
    id: "design-thinking",
    name: "Design Thinking",
    description: "Facilitates human-centered design and ideation processes",
    category: "Team & Organization",
    rationale: "Guides users through human-centered design processes. Facilitates ideation, prototyping mindset, and iterative problem-solving using established design thinking frameworks.",
    frameworks: [
      { name: "Stanford d.school 5-Stage Model", detail: "Empathize, Define, Ideate, Prototype, Test" },
      { name: "IDEO 3-I Model", detail: "Inspiration, Ideation, Implementation" },
      { name: "Double Diamond", detail: "Discover, Define, Develop, Deliver (diverge/converge pattern)" },
      { name: "IBM Enterprise Design Thinking", detail: "Loops (observe, reflect, make), Keys (hills, playbacks, sponsor users)" },
    ],
    skills: [
      { id: "run-empathy-session", description: "Guide stakeholder interviews and observation synthesis" },
      { id: "define-problem", description: "Help frame problem statements and 'How Might We' questions" },
      { id: "facilitate-ideation", description: "Structured brainstorming with quantity over quality focus" },
      { id: "prototype-plan", description: "Rapid prototyping strategy for testing assumptions" },
      { id: "test-synthesis", description: "Consolidate user feedback into actionable insights" },
    ],
    keyPrinciples: [
      "**Human-centered**: Start with real user needs, not assumptions",
      "**Bias toward action**: Build to think, don't just think to build",
      "**Radical collaboration**: Cross-functional perspectives unlock innovation",
      "**Embrace ambiguity**: Comfort with uncertainty enables creative solutions",
      "**Iterate rapidly**: Fail fast, learn fast, improve fast",
    ],
    inputs: ["problem_context", "stakeholders", "constraints", "stage", "time_available"],
    references: [
      { label: "Stanford d.school Resources", url: "https://dschool.stanford.edu/resources", note: "original design thinking methodology" },
      { label: "IDEO Design Thinking", url: "https://designthinking.ideo.com/", note: "practitioner resources" },
      { label: "Double Diamond Framework", url: "https://www.designcouncil.org.uk/our-resources/the-double-diamond/", note: "UK Design Council model" },
      { label: "IBM Enterprise Design Thinking", url: "https://www.ibm.com/design/thinking/", note: "enterprise adaptation" },
    ],
  },
  {
    id: "change-management",
    name: "Change Management",
    description: "Plans and guides organizational change initiatives",
    category: "Team & Organization",
    rationale: "Guides organizational change initiatives using proven frameworks. Helps plan stakeholder engagement, communication strategies, and resistance management.",
    frameworks: [
      { name: "ADKAR Model", detail: "Awareness, Desire, Knowledge, Ability, Reinforcement (individual change)" },
      { name: "Kotter's 8-Step Process", detail: "Urgency, Coalition, Vision, Communication, Empowerment, Quick Wins, Consolidation, Anchoring" },
      { name: "Bridges Transition Model", detail: "Ending, Neutral Zone, New Beginning (psychological transition)" },
      { name: "Lewin's Change Model", detail: "Unfreeze, Change, Refreeze (foundational three-stage)" },
      { name: "McKinsey 7-S Framework", detail: "Strategy, Structure, Systems, Shared Values, Style, Staff, Skills" },
    ],
    skills: [
      { id: "assess-readiness", description: "Evaluate organizational readiness for change" },
      { id: "plan-stakeholders", description: "Map stakeholders by influence/impact, plan engagement" },
      { id: "design-communication", description: "Create change communication strategy and messaging" },
      { id: "manage-resistance", description: "Identify resistance patterns and mitigation strategies" },
      { id: "track-adoption", description: "Metrics and checkpoints for change adoption" },
    ],
    keyPrinciples: [
      "**People-first**: Technical changes fail without people adoption",
      "**Sponsor engagement**: Visible executive sponsorship is critical",
      "**Two-way communication**: Listening matters as much as telling",
      "**Quick wins**: Early victories build momentum and credibility",
      "**Sustained reinforcement**: Change sticks only with ongoing support",
    ],
    inputs: ["change_description", "organization_context", "stakeholders", "timeline", "constraints"],
    references: [
      { label: "Prosci ADKAR Model", url: "https://www.prosci.com/methodology/adkar", note: "individual change methodology" },
      { label: "Kotter's 8 Steps", url: "https://www.kotterinc.com/methodology/8-steps/", note: "organizational transformation" },
      { label: "Bridges Transition Model", url: "https://wmbridges.com/about/what-is-transition/", note: "managing psychological transitions" },
      { label: "McKinsey 7-S Framework", url: "https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/enduring-ideas-the-7-s-framework", note: "organizational alignment" },
    ],
  },
  {
    id: "feedback-coach",
    name: "Feedback Coach",
    description: "Helps craft and deliver effective feedback",
    category: "Communication",
    rationale: "Helps craft and deliver effective feedback using structured frameworks. Supports both giving and receiving feedback in professional contexts.",
    frameworks: [
      { name: "SBI Model", detail: "Situation, Behavior, Impact (Center for Creative Leadership)" },
      { name: "COIN Model", detail: "Context, Observation, Impact, Next steps" },
      { name: "Feedforward", detail: "Focus on future behavior rather than past mistakes" },
      { name: "Radical Candor", detail: "Care Personally + Challenge Directly quadrant" },
      { name: "DESC Script", detail: "Describe, Express, Specify, Consequences" },
    ],
    skills: [
      { id: "draft-feedback", description: "Structure feedback using chosen framework" },
      { id: "reframe-critique", description: "Transform critical feedback into constructive language" },
      { id: "prepare-difficult", description: "Prepare for challenging feedback conversations" },
      { id: "receive-feedback", description: "Strategies for receiving feedback non-defensively" },
      { id: "follow-up-plan", description: "Action items and check-in cadence after feedback" },
    ],
    keyPrinciples: [
      "**Specific over general**: Observable behaviors, not character judgments",
      "**Timely delivery**: Close to the event while context is fresh",
      "**Private criticism, public praise**: Protect dignity in difficult conversations",
      "**Two-way dialogue**: Feedback is conversation, not monologue",
      "**Growth-oriented**: Focus on development, not punishment",
    ],
    inputs: ["situation", "behavior_observed", "desired_outcome", "relationship_context", "framework_preference"],
    references: [
      { label: "SBI Feedback Model (CCL)", url: "https://www.ccl.org/articles/leading-effectively-articles/closing-the-gap-between-intent-and-impact/", note: "situation-behavior-impact" },
      { label: "Radical Candor", url: "https://www.radicalcandor.com/", note: "Kim Scott's framework" },
      { label: "Marshall Goldsmith Feedforward", url: "https://marshallgoldsmith.com/articles/try-feedforward-instead-feedback/", note: "future-focused approach" },
    ],
  },
  {
    id: "presentation-coach",
    name: "Presentation Coach",
    description: "Structures and improves presentations and delivery",
    category: "Communication",
    rationale: "Helps structure, design, and deliver effective presentations. Supports content organization, slide design principles, and delivery techniques.",
    frameworks: [
      { name: "Pyramid Principle", detail: "Barbara Minto's top-down communication structure" },
      { name: "PechaKucha", detail: "20 slides x 20 seconds constraint format" },
      { name: "Story Arc", detail: "Setup, Conflict, Resolution narrative structure" },
      { name: "Monroe's Motivated Sequence", detail: "Attention, Need, Satisfaction, Visualization, Action" },
      { name: "Rule of Three", detail: "Organize content into three memorable points" },
    ],
    skills: [
      { id: "structure-content", description: "Organize presentation using chosen framework" },
      { id: "design-slides", description: "Apply visual design principles (contrast, alignment, proximity)" },
      { id: "craft-opening", description: "Create compelling hooks and openings" },
      { id: "prepare-delivery", description: "Practice techniques, timing, Q&A preparation" },
      { id: "adapt-audience", description: "Tailor content for specific audience needs" },
    ],
    keyPrinciples: [
      "**Audience-first**: Know who you're speaking to and what they need",
      "**One idea per slide**: Cognitive load management",
      "**Show, don't tell**: Visuals over bullet points where possible",
      "**Practice out loud**: Delivery improves with rehearsal",
      "**Strong close**: End with clear call-to-action or memorable takeaway",
    ],
    inputs: ["topic", "audience", "time_limit", "objective", "format"],
    references: [
      { label: "Pyramid Principle", url: "https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/the-pyramid-principle", note: "McKinsey communication standard" },
      { label: "Presentation Zen", url: "https://www.presentationzen.com/", note: "Garr Reynolds on design" },
      { label: "Nancy Duarte Resonate", url: "https://www.duarte.com/resources/books/resonate/", note: "storytelling in presentations" },
    ],
  },
  {
    id: "negotiation",
    name: "Negotiation",
    description: "Prepares negotiation strategy and tactics",
    category: "Communication",
    rationale: "Guides negotiation preparation and strategy using established frameworks. Helps analyze positions, interests, and develop effective approaches.",
    frameworks: [
      { name: "BATNA/WATNA/ZOPA", detail: "Best/Worst Alternative To Negotiated Agreement, Zone of Possible Agreement" },
      { name: "Harvard Principled Negotiation", detail: "Separate people from problem, focus on interests not positions" },
      { name: "RADPAC", detail: "Rapport, Analyze, Debate, Propose, Agree, Close" },
      { name: "Thomas-Kilmann Conflict Modes", detail: "Competing, Collaborating, Compromising, Avoiding, Accommodating" },
      { name: "Anchoring and Framing", detail: "First-offer strategy and reference point setting" },
    ],
    skills: [
      { id: "analyze-position", description: "Map your position, interests, and alternatives" },
      { id: "assess-counterpart", description: "Understand other party's likely interests and constraints" },
      { id: "plan-strategy", description: "Develop negotiation approach and tactics" },
      { id: "prepare-concessions", description: "Plan what to trade and when" },
      { id: "handle-tactics", description: "Recognize and respond to negotiation tactics" },
    ],
    keyPrinciples: [
      "**Preparation wins**: Most negotiations are won before they start",
      "**Interests over positions**: Understand why, not just what",
      "**BATNA strength**: Your alternatives determine your power",
      "**Create value first**: Expand the pie before dividing it",
      "**Relationship matters**: Consider ongoing relationship in approach",
    ],
    inputs: ["negotiation_context", "your_interests", "their_interests", "constraints", "relationship_importance"],
    references: [
      { label: "Getting to Yes", url: "https://www.pon.harvard.edu/shop/getting-to-yes/", note: "Fisher and Ury's principled negotiation" },
      { label: "Harvard PON Resources", url: "https://www.pon.harvard.edu/", note: "Program on Negotiation research" },
      { label: "Never Split the Difference", url: "https://www.blackswanltd.com/never-split-the-difference", note: "Chris Voss tactical empathy" },
    ],
  },
  {
    id: "difficult-conversations",
    name: "Difficult Conversations",
    description: "Prepares for challenging interpersonal conversations",
    category: "Communication",
    rationale: "Helps prepare for and navigate challenging interpersonal conversations. Supports conflict resolution, delivering bad news, and addressing sensitive topics.",
    frameworks: [
      { name: "Difficult Conversations Model", detail: "Three conversations (What Happened, Feelings, Identity)" },
      { name: "Nonviolent Communication (NVC)", detail: "Observation, Feeling, Need, Request" },
      { name: "Crucial Conversations", detail: "Start with Heart, STATE (Share facts, Tell story, Ask, Talk tentatively, Encourage testing)" },
      { name: "DEAR MAN", detail: "Describe, Express, Assert, Reinforce, Mindful, Appear confident, Negotiate" },
    ],
    skills: [
      { id: "prepare-conversation", description: "Structure approach and key points" },
      { id: "manage-emotions", description: "Techniques for staying calm under pressure" },
      { id: "de-escalate", description: "Strategies when conversations become heated" },
      { id: "find-resolution", description: "Identify mutually acceptable outcomes" },
      { id: "follow-up", description: "Repair and maintain relationship after difficult conversation" },
    ],
    keyPrinciples: [
      "**Separate intent from impact**: Good intentions don't prevent hurt",
      "**Listen to understand**: Seek first to understand, then to be understood",
      "**Own your contribution**: Acknowledge your part in the situation",
      "**Focus on interests**: Look beneath positions to underlying needs",
      "**Plan but flex**: Prepare structure but adapt to the conversation",
    ],
    inputs: ["situation", "relationship", "your_goal", "their_likely_concerns", "emotional_stakes"],
    references: [
      { label: "Difficult Conversations (Stone, Patton, Heen)", url: "https://www.stoneandheen.com/difficult-conversations", note: "Harvard Negotiation Project" },
      { label: "Crucial Conversations", url: "https://cruciallearning.com/crucial-conversations-book/", note: "Patterson et al." },
      { label: "Nonviolent Communication", url: "https://www.cnvc.org/", note: "Marshall Rosenberg's framework" },
    ],
  },
  {
    id: "pitch",
    name: "Pitch",
    description: "Refines pitches for investors, executives, or customers",
    category: "Communication",
    rationale: "Helps prepare and refine pitches for various contexts. Supports startup pitches, project proposals, and idea presentations.",
    frameworks: [
      { name: "Pitch Deck Structure", detail: "Problem, Solution, Market, Business Model, Traction, Team, Ask" },
      { name: "Elevator Pitch Formula", detail: "Hook, Problem, Solution, Unique Value, Call to Action (60 seconds)" },
      { name: "Guy Kawasaki 10/20/30", detail: "10 slides, 20 minutes, 30pt font minimum" },
      { name: "NABC Method", detail: "Need, Approach, Benefits, Competition (SRI International)" },
      { name: "Problem-Agitate-Solve", detail: "Present problem, amplify pain, offer solution" },
    ],
    skills: [
      { id: "structure-pitch", description: "Organize content using appropriate framework" },
      { id: "craft-hook", description: "Create compelling opening that captures attention" },
      { id: "handle-objections", description: "Prepare for common questions and pushback" },
      { id: "tailor-audience", description: "Adapt pitch for investors/executives/customers" },
      { id: "practice-delivery", description: "Timing, pacing, and confidence techniques" },
    ],
    keyPrinciples: [
      "**Lead with the problem**: Make them feel the pain first",
      "**Simple and clear**: If you can't explain it simply, you don't understand it",
      "**Show traction**: Evidence beats promises",
      "**Know your numbers**: Be prepared for detailed questions",
      "**Clear ask**: Specify exactly what you want from the audience",
    ],
    inputs: ["pitch_type", "audience", "time_available", "key_differentiator", "ask"],
    references: [
      { label: "Sequoia Pitch Deck Template", url: "https://www.sequoiacap.com/article/writing-a-business-plan/", note: "venture capital standard" },
      { label: "Y Combinator Pitch Guide", url: "https://www.ycombinator.com/library/4T-how-to-pitch-your-startup", note: "startup pitch advice" },
      { label: "TED Talk Guidelines", url: "https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/speakers-program/prepare-your-speaker", note: "idea presentation" },
    ],
  },
  {
    id: "interview-prep",
    name: "Interview Prep",
    description: "Prepares for behavioral, technical, and case interviews",
    category: "Career Development",
    rationale: "Helps prepare for job interviews across different formats and industries. Supports behavioral, technical, and case interview preparation.",
    frameworks: [
      { name: "STAR Method", detail: "Situation, Task, Action, Result (behavioral answers)" },
      { name: "CAR Method", detail: "Challenge, Action, Result (concise alternative)" },
      { name: "SOAR Method", detail: "Situation, Obstacle, Action, Result (emphasizes challenges overcome)" },
      { name: "Case Interview Frameworks", detail: "MECE, Issue Trees, Hypothesis-driven (consulting)" },
      { name: "Technical Interview Prep", detail: "Problem decomposition, communication, optimization" },
    ],
    skills: [
      { id: "analyze-job", description: "Break down job description for key competencies" },
      { id: "prepare-stories", description: "Develop STAR stories for common behavioral questions" },
      { id: "mock-interview", description: "Practice questions with feedback" },
      { id: "research-company", description: "Key talking points about company and role" },
      { id: "prepare-questions", description: "Thoughtful questions to ask interviewer" },
    ],
    keyPrinciples: [
      "**Preparation is visible**: Interviewers notice who did their homework",
      "**Stories over claims**: \"I'm a leader\" vs. story demonstrating leadership",
      "**Specific and quantified**: Numbers and concrete outcomes are memorable",
      "**Authentic confidence**: Preparation enables natural presence",
      "**Two-way evaluation**: You're also interviewing them",
    ],
    inputs: ["job_description", "company", "interview_type", "your_background", "concerns"],
    references: [
      { label: "STAR Method Guide", url: "https://www.themuse.com/advice/star-interview-method", note: "behavioral interview technique" },
      { label: "Case in Point", url: "https://www.casequestions.com/", note: "consulting interview preparation" },
      { label: "Cracking the Coding Interview", url: "https://www.crackingthecodinginterview.com/", note: "technical interview prep" },
    ],
  },
  {
    id: "resume",
    name: "Resume",
    description: "Optimizes resumes for specific opportunities and ATS",
    category: "Career Development",
    rationale: "Helps create and optimize resumes for specific opportunities. Supports formatting, content strategy, and ATS optimization.",
    frameworks: [
      { name: "Achievement-Based Format", detail: "Accomplishment statements over job duties" },
      { name: "PAR Method", detail: "Problem, Action, Result for bullet points" },
      { name: "ATS Optimization", detail: "Keyword matching, formatting for applicant tracking systems" },
      { name: "Functional vs. Chronological", detail: "Format selection based on career situation" },
      { name: "One-Page Rule", detail: "Conciseness principles for early-career professionals" },
    ],
    skills: [
      { id: "analyze-target", description: "Extract keywords and requirements from job posting" },
      { id: "rewrite-bullets", description: "Transform duty statements into achievements" },
      { id: "optimize-ats", description: "Ensure resume passes applicant tracking systems" },
      { id: "tailor-resume", description: "Customize resume for specific opportunity" },
      { id: "format-review", description: "Layout and design best practices" },
    ],
    keyPrinciples: [
      "**Achievements over duties**: What you accomplished, not what you were responsible for",
      "**Quantify impact**: Numbers make achievements concrete and credible",
      "**Relevance is key**: Tailor content to the specific opportunity",
      "**Clean and scannable**: Recruiters spend seconds on initial review",
      "**Keywords matter**: ATS filtering requires strategic keyword placement",
    ],
    inputs: ["current_resume", "target_job", "career_stage", "industry", "concerns"],
    references: [
      { label: "Harvard Resume Guide", url: "https://careerservices.fas.harvard.edu/resources/resume-cover-letter-resources/", note: "professional standards" },
      { label: "ATS Resume Tips", url: "https://www.jobscan.co/blog/ats-resume/", note: "optimization strategies" },
      { label: "Resume Action Words", url: "https://www.indeed.com/career-advice/resumes-cover-letters/action-verbs-to-make-your-resume-stand-out", note: "strong verb lists" },
    ],
  },
  {
    id: "salary-negotiation",
    name: "Salary Negotiation",
    description: "Prepares compensation negotiation strategy",
    category: "Career Development",
    rationale: "Helps prepare for and execute salary and compensation negotiations. Supports research, strategy, and conversation preparation.",
    frameworks: [
      { name: "Market Research Approach", detail: "Levels.fyi, Glassdoor, Payscale data gathering" },
      { name: "Total Compensation View", detail: "Base, bonus, equity, benefits, perks valuation" },
      { name: "Anchoring Strategy", detail: "First-offer positioning and range tactics" },
      { name: "BATNA Application", detail: "Alternative offers and walk-away points" },
      { name: "Timing Optimization", detail: "When and how to raise compensation discussions" },
    ],
    skills: [
      { id: "research-market", description: "Gather compensation data for role and location" },
      { id: "calculate-total-comp", description: "Evaluate full compensation package value" },
      { id: "plan-strategy", description: "Develop negotiation approach and talking points" },
      { id: "handle-objections", description: "Responses to common pushback" },
      { id: "evaluate-offer", description: "Compare and assess competing offers" },
    ],
    keyPrinciples: [
      "**Know your market value**: Research before negotiating",
      "**Negotiate total compensation**: Look beyond base salary",
      "**Timing matters**: Negotiate after offer, not during interview",
      "**Get it in writing**: Verbal promises aren't binding",
      "**Practice the conversation**: Rehearse to build confidence",
    ],
    inputs: ["current_compensation", "target_role", "location", "experience_level", "alternative_offers", "priorities"],
    references: [
      { label: "Levels.fyi", url: "https://www.levels.fyi/", note: "tech compensation data" },
      { label: "Glassdoor Salary Data", url: "https://www.glassdoor.com/Salaries/", note: "industry compensation benchmarks" },
      { label: "Negotiation strategies (HBR)", url: "https://hbr.org/2014/06/why-women-dont-negotiate-their-job-offers", note: "research on negotiation gaps" },
    ],
  },
  {
    id: "networking",
    name: "Networking",
    description: "Builds and maintains professional networks strategically",
    category: "Career Development",
    rationale: "Helps build and maintain professional networks strategically. Supports outreach, relationship maintenance, and network leverage.",
    frameworks: [
      { name: "Weak Ties Theory", detail: "Granovetter's strength of weak ties for opportunities" },
      { name: "Give First Approach", detail: "Adam Grant's reciprocity style classification" },
      { name: "Dunbar's Numbers", detail: "5/15/50/150 relationship capacity tiers" },
      { name: "Network Mapping", detail: "Strong ties, weak ties, structural holes analysis" },
      { name: "Personal CRM", detail: "Systematic relationship tracking and touchpoints" },
    ],
    skills: [
      { id: "map-network", description: "Analyze current network strengths and gaps" },
      { id: "plan-outreach", description: "Strategy for reaching specific contacts" },
      { id: "craft-message", description: "Write effective networking messages" },
      { id: "maintain-relationships", description: "Systematic follow-up and touchpoint planning" },
      { id: "leverage-network", description: "How to ask for introductions and referrals" },
    ],
    keyPrinciples: [
      "**Give before you ask**: Build relationship equity first",
      "**Be specific in asks**: Vague requests get vague responses",
      "**Follow up consistently**: Networking is relationship maintenance",
      "**Quality over quantity**: Deep connections beat many shallow ones",
      "**Make it easy**: Reduce friction for people to help you",
    ],
    inputs: ["networking_goal", "current_network", "target_contacts", "available_time", "comfort_level"],
    references: [
      { label: "Never Eat Alone (Keith Ferrazzi)", url: "https://keithferrazzi.com/books/", note: "networking methodology" },
      { label: "Give and Take (Adam Grant)", url: "https://adamgrant.net/book/give-and-take/", note: "reciprocity research" },
      { label: "LinkedIn Networking Best Practices", url: "https://www.linkedin.com/business/sales/blog/profile-best-practices/", note: "digital networking" },
    ],
  },
  {
    id: "mentorship",
    name: "Mentorship",
    description: "Structures productive mentor-mentee relationships",
    category: "Career Development",
    rationale: "Facilitates productive mentoring relationships. Supports both mentors and mentees in structuring and maximizing mentorship value.",
    frameworks: [
      { name: "GROW Model", detail: "Goal, Reality, Options, Will (coaching structure)" },
      { name: "Situational Leadership", detail: "Directing, Coaching, Supporting, Delegating based on development level" },
      { name: "70-20-10 Development", detail: "Experience, Exposure, Education learning mix" },
      { name: "Mentorship Lifecycle", detail: "Initiation, Cultivation, Separation, Redefinition" },
      { name: "Reverse Mentoring", detail: "Junior-to-senior knowledge transfer model" },
    ],
    skills: [
      { id: "structure-relationship", description: "Establish goals, cadence, and expectations" },
      { id: "prepare-session", description: "Agenda and topics for mentorship meetings" },
      { id: "give-guidance", description: "Framework for offering advice without directing" },
      { id: "ask-for-help", description: "How to maximize value from mentor relationship" },
      { id: "evaluate-progress", description: "Assess development and adjust approach" },
    ],
    keyPrinciples: [
      "**Clear expectations**: Both parties understand goals and commitment",
      "**Active mentee ownership**: Mentee drives the relationship agenda",
      "**Balance support and challenge**: Growth requires stretch assignments",
      "**Confidentiality**: Trust enables honest conversation",
      "**Regular reflection**: Assess what's working and adjust",
    ],
    inputs: ["role", "relationship_stage", "development_goals", "meeting_frequency", "challenges"],
    references: [
      { label: "Mentoring at Work (Kram)", url: "https://www.amazon.com/Mentoring-Work-Developmental-Relationships-Organizational/dp/0819167878", note: "foundational research" },
      { label: "GROW Model (Whitmore)", url: "https://www.performanceconsultants.com/grow-model", note: "coaching framework" },
      { label: "Harvard Business Review on Mentoring", url: "https://hbr.org/topic/subject/mentoring", note: "current research" },
    ],
  },
  {
    id: "promotion",
    name: "Promotion",
    description: "Builds visibility and prepares promotion cases",
    category: "Career Development",
    rationale: "Helps prepare for and pursue career advancement. Supports self-assessment, visibility building, and promotion conversation preparation.",
    frameworks: [
      { name: "Visibility-Ability-Advocacy", detail: "Three elements needed for promotion" },
      { name: "Brag Document", detail: "Systematic achievement tracking (Julia Evans)" },
      { name: "Sponsorship vs. Mentorship", detail: "Understanding and cultivating sponsors" },
      { name: "Level Expectations", detail: "Understanding what's expected at next level" },
      { name: "Influence Without Authority", detail: "Building cross-functional impact" },
    ],
    skills: [
      { id: "assess-readiness", description: "Evaluate current position against next-level expectations" },
      { id: "build-case", description: "Document achievements and impact for promotion discussion" },
      { id: "increase-visibility", description: "Strategies for appropriate self-promotion" },
      { id: "find-sponsors", description: "Identify and cultivate executive sponsors" },
      { id: "prepare-conversation", description: "Script for promotion discussion with manager" },
    ],
    keyPrinciples: [
      "**Performance is table stakes**: Doing your job well doesn't guarantee promotion",
      "**Visibility matters**: Achievements unknown don't count",
      "**Sponsors open doors**: Mentors advise, sponsors advocate",
      "**Act at the next level**: Demonstrate capability before promotion",
      "**Timing and context**: Organizational readiness matters",
    ],
    inputs: ["current_level", "target_level", "achievements", "timeline", "organizational_context", "blockers"],
    references: [
      { label: "Brag Document (Julia Evans)", url: "https://jvns.ca/blog/brag-documents/", note: "achievement tracking" },
      { label: "Staff Engineer (Will Larson)", url: "https://staffeng.com/book", note: "senior IC promotion paths" },
      { label: "HBR on Promotion", url: "https://hbr.org/2021/01/how-to-ask-for-a-promotion", note: "research-backed strategies" },
    ],
  },
  {
    id: "skill-gap",
    name: "Skill Gap",
    description: "Identifies gaps and creates learning plans",
    category: "Career Development",
    rationale: "Identifies skill gaps and creates personalized learning plans. Supports career development, role transitions, and continuous learning with certification preparation.",
    frameworks: [
      { name: "Competency Mapping", detail: "Current skills vs. target role requirements" },
      { name: "Dreyfus Skill Model", detail: "Novice, Beginner, Competent, Proficient, Expert levels" },
      { name: "70-20-10 Learning", detail: "Experience (70%), Exposure (20%), Education (10%)" },
      { name: "SMART Learning Goals", detail: "Specific, Measurable, Achievable, Relevant, Time-bound" },
      { name: "Certification Roadmaps", detail: "Industry certification paths and preparation strategies" },
    ],
    skills: [
      { id: "assess-skills", description: "Evaluate current competencies against target" },
      { id: "identify-gaps", description: "Prioritize skills to develop based on impact" },
      { id: "create-learning-plan", description: "Structured development plan with resources" },
      { id: "track-progress", description: "Metrics and milestones for skill development" },
      { id: "prepare-certification", description: "Study plan and exam preparation for industry certifications" },
    ],
    keyPrinciples: [
      "**Gap analysis first**: Know where you are before planning where to go",
      "**Prioritize by impact**: Focus on skills that matter most for your goals",
      "**Mix learning modes**: Combine courses, projects, and mentorship",
      "**Apply immediately**: Learning sticks when applied in real contexts",
      "**Certifications validate**: Industry certifications provide credible skill verification",
    ],
    inputs: ["current_skills", "target_role", "timeline", "learning_style", "available_time", "certification_goals"],
    references: [
      { label: "Skills Framework for the Information Age (SFIA)", url: "https://sfia-online.org/", note: "IT competency framework" },
      { label: "Dreyfus Model", url: "https://www.bumc.bu.edu/facdev-medicine/files/2012/03/Dreyfus-skill-level.pdf", note: "skill acquisition stages" },
      { label: "Learning How to Learn", url: "https://www.coursera.org/learn/learning-how-to-learn", note: "meta-learning strategies" },
      { label: "Certification Roadmaps", url: "https://roadmap.sh/", note: "tech certification paths" },
    ],
  },
  {
    id: "onboarding",
    name: "Onboarding",
    description: "Guides new employee integration and 30-60-90 plans",
    category: "Team & Organization",
    rationale: "Guides new employee onboarding and integration. Supports both the new hire experience and manager/buddy responsibilities.",
    frameworks: [
      { name: "30-60-90 Day Plan", detail: "Structured milestones for first three months" },
      { name: "Four C's of Onboarding", detail: "Compliance, Clarification, Culture, Connection" },
      { name: "Buddy System", detail: "Peer support structure and responsibilities" },
      { name: "Preboarding", detail: "Engagement between offer acceptance and start date" },
      { name: "Role Clarity Model", detail: "Expectations, resources, boundaries, success metrics" },
    ],
    skills: [
      { id: "create-30-60-90", description: "Personalized milestone plan for new role" },
      { id: "prepare-first-week", description: "Detailed first-week schedule and priorities" },
      { id: "define-success-metrics", description: "Clear expectations and how success is measured" },
      { id: "build-relationships", description: "Key relationships to develop and how" },
      { id: "navigate-culture", description: "Unwritten rules and cultural navigation" },
    ],
    keyPrinciples: [
      "**Front-load relationship building**: Connections matter more than content early",
      "**Reduce uncertainty**: Clear expectations reduce new hire anxiety",
      "**Quick wins matter**: Early accomplishments build confidence",
      "**Two-way feedback**: Check-ins catch issues before they become problems",
      "**Extend the runway**: Real onboarding takes 6-12 months, not 2 weeks",
    ],
    inputs: ["role", "company_context", "manager_info", "team_structure", "start_date"],
    references: [
      { label: "SHRM Onboarding Resources", url: "https://www.shrm.org/topics-tools/news/talent-acquisition/dont-underestimate-importance-good-onboarding", note: "best practices" },
      { label: "First 90 Days (Michael Watkins)", url: "https://www.amazon.com/First-90-Days-Strategies-Expanded/dp/1422188612", note: "transition strategies" },
      { label: "Google's Onboarding Research", url: "https://rework.withgoogle.com/guides/hiring-shape-the-candidate-experience/steps/give-structured-onboarding-to-new-hires/", note: "evidence-based practices" },
    ],
  },
  {
    id: "knowledge-transfer",
    name: "Knowledge Transfer",
    description: "Facilitates handoffs and institutional knowledge preservation",
    category: "Team & Organization",
    rationale: "Facilitates effective knowledge transfer between individuals and teams. Supports documentation, handoffs, and institutional knowledge preservation.",
    frameworks: [
      { name: "SECI Model", detail: "Socialization, Externalization, Combination, Internalization (Nonaka)" },
      { name: "Knowledge Mapping", detail: "Tacit vs. explicit, who knows what" },
      { name: "Documentation Standards", detail: "Living docs, decision records, runbooks" },
      { name: "Handoff Protocols", detail: "Structured transition between roles/projects" },
      { name: "Communities of Practice", detail: "Peer learning and knowledge sharing structures" },
    ],
    skills: [
      { id: "map-knowledge", description: "Identify critical knowledge and its holders" },
      { id: "document-tacit", description: "Convert implicit knowledge to explicit documentation" },
      { id: "plan-handoff", description: "Structured knowledge transfer for role transitions" },
      { id: "create-runbook", description: "Operational knowledge documentation" },
      { id: "preserve-decisions", description: "Capture decision context and rationale (ADRs)" },
    ],
    keyPrinciples: [
      "**Tacit knowledge is hardest**: The most valuable knowledge is often unwritten",
      "**Context matters**: Why decisions were made matters as much as what",
      "**Living documentation**: Docs must be maintained to stay useful",
      "**Multiple formats**: Different knowledge needs different capture methods",
      "**Transfer is a process**: One meeting doesn't transfer years of experience",
    ],
    inputs: ["knowledge_type", "source", "recipient", "timeline", "criticality"],
    references: [
      { label: "Knowledge Management (Nonaka)", url: "https://hbr.org/2007/07/the-knowledge-creating-company", note: "SECI model" },
      { label: "Architecture Decision Records", url: "https://adr.github.io/", note: "decision documentation" },
      { label: "Team Topologies (Skelton, Pais)", url: "https://teamtopologies.com/", note: "knowledge flow patterns" },
    ],
  },
  {
    id: "team-dynamics",
    name: "Team Dynamics",
    description: "Improves team functioning and psychological safety",
    category: "Team & Organization",
    rationale: "Helps understand and improve team functioning. Supports team formation, conflict resolution, and performance optimization.",
    frameworks: [
      { name: "Tuckman's Stages", detail: "Forming, Storming, Norming, Performing, Adjourning" },
      { name: "Lencioni's Five Dysfunctions", detail: "Trust, Conflict, Commitment, Accountability, Results" },
      { name: "Psychological Safety", detail: "Google's Project Aristotle findings" },
      { name: "Team Canvas", detail: "Alignment tool for team purpose, values, roles, goals" },
      { name: "RACI Matrix", detail: "Responsible, Accountable, Consulted, Informed role clarity" },
    ],
    skills: [
      { id: "assess-stage", description: "Identify team's current development stage" },
      { id: "diagnose-dysfunction", description: "Identify barriers to team effectiveness" },
      { id: "build-safety", description: "Strategies for increasing psychological safety" },
      { id: "clarify-roles", description: "Define clear responsibilities and decision rights" },
      { id: "facilitate-norming", description: "Establish team working agreements" },
    ],
    keyPrinciples: [
      "**Psychological safety first**: Teams can't perform without trust",
      "**Healthy conflict is productive**: Avoiding conflict creates dysfunction",
      "**Clarity prevents confusion**: Ambiguous roles breed frustration",
      "**Norming requires intention**: Teams don't automatically figure it out",
      "**Context shapes dynamics**: What works for one team may not work for another",
    ],
    inputs: ["team_context", "current_challenges", "team_stage", "leadership_role", "specific_issues"],
    references: [
      { label: "Five Dysfunctions of a Team (Lencioni)", url: "https://www.tablegroup.com/product/dysfunctions/", note: "team dysfunction model" },
      { label: "Project Aristotle (Google)", url: "https://rework.withgoogle.com/print/guides/5721312655835136/", note: "psychological safety research" },
      { label: "Team Topologies", url: "https://teamtopologies.com/", note: "modern team structures" },
    ],
  },
  {
    id: "meeting-facilitator",
    name: "Meeting Facilitator",
    description: "Designs agendas and facilitates effective meetings",
    category: "Team & Organization",
    rationale: "Helps plan and run effective meetings. Supports agenda design, facilitation techniques, and meeting follow-through.",
    frameworks: [
      { name: "Meeting Purpose Types", detail: "Inform, Discuss, Decide, Create (different formats for each)" },
      { name: "Liberating Structures", detail: "33 microstructures for engagement (1-2-4-All, Troika, etc.)" },
      { name: "Silent Brainstorming", detail: "Written ideation before discussion" },
      { name: "Time-Boxing", detail: "Structured time allocation for agenda items" },
      { name: "RACI for Meetings", detail: "Who decides, who is consulted, who is informed" },
    ],
    skills: [
      { id: "design-agenda", description: "Create effective meeting agenda with time allocation" },
      { id: "select-format", description: "Match meeting structure to purpose" },
      { id: "facilitate-discussion", description: "Techniques for balanced participation" },
      { id: "drive-decisions", description: "Methods for reaching and documenting decisions" },
      { id: "ensure-follow-through", description: "Action items, owners, and accountability" },
    ],
    keyPrinciples: [
      "**Purpose determines format**: Don't use one meeting type for everything",
      "**Preparation saves time**: Invested prep time pays off in meeting efficiency",
      "**Participation requires design**: Silent voices need structure to be heard",
      "**Decisions need clarity**: Who decides, by when, with what input",
      "**Follow-through is everything**: Meetings without action items are conversations",
    ],
    inputs: ["meeting_purpose", "participants", "time_available", "decision_needed", "challenges"],
    references: [
      { label: "Liberating Structures", url: "https://www.liberatingstructures.com/", note: "facilitation microstructures" },
      { label: "Meeting Design (Kevin Hoffman)", url: "https://www.amazon.com/Meeting-Design-Better-Meetings-Workshops/dp/1933820381", note: "meeting facilitation" },
      { label: "Death by Meeting (Lencioni)", url: "https://www.tablegroup.com/product/death-by-meeting/", note: "meeting types framework" },
    ],
  },
  {
    id: "supportive-colleague",
    name: "Supportive Colleague",
    description: "Provides empathetic support for workplace challenges",
    category: "Team & Organization",
    rationale: "Provides empathetic, non-judgmental support for workplace challenges. Acts as a thinking partner for processing difficult situations, managing stress, and maintaining wellbeing at work.",
    frameworks: [
      { name: "Active Listening Model", detail: "Reflect, validate, clarify, summarize" },
      { name: "Cognitive Reframing", detail: "Challenge unhelpful thought patterns" },
      { name: "Stress-Performance Curve", detail: "Yerkes-Dodson optimal arousal" },
      { name: "Work-Life Integration", detail: "Boundary setting and recovery strategies" },
      { name: "Resilience Building", detail: "Learned optimism and growth mindset principles" },
    ],
    skills: [
      { id: "listen-and-reflect", description: "Process a difficult situation with empathetic reflection" },
      { id: "reframe-situation", description: "Find alternative perspectives on challenges" },
      { id: "manage-stress", description: "Practical techniques for immediate stress relief" },
      { id: "set-boundaries", description: "Strategies for sustainable work practices" },
      { id: "build-resilience", description: "Develop long-term coping strategies" },
    ],
    keyPrinciples: [
      "**Validation before solutions**: People need to feel heard before they can hear advice",
      "**Non-judgmental space**: No situation is too small or too dramatic",
      "**Empowerment over dependency**: Help users find their own answers",
      "**Know limits**: Recognize when to suggest professional support",
      "**Confidentiality mindset**: Treat all interactions as private",
    ],
    inputs: ["situation", "emotions", "what_you_need", "context", "urgency"],
    references: [
      { label: "Psychological First Aid", url: "https://www.nctsn.org/treatments-and-practices/psychological-first-aid-and-skills-for-psychological-recovery/about-pfa", note: "crisis support basics" },
      { label: "Burnout Prevention (Maslach)", url: "https://www.mindgarden.com/117-maslach-burnout-inventory-mbi", note: "burnout research" },
      { label: "Resilience at Work (Reivich)", url: "https://www.amazon.com/Resilience-Factor-Finding-Strength-Overcoming/dp/0767911911", note: "resilience building" },
      { label: "Nonviolent Communication (Rosenberg)", url: "https://www.cnvc.org/", note: "empathetic communication" },
    ],
  },
  {
    id: "systems-thinker",
    name: "Systems Thinker",
    description: "Sees the whole system, finds leverage points",
    category: "Decision & Strategy",
    group: "Thinking Chain",
    rationale: "Helps see the whole picture, understand how parts connect, and find high-leverage intervention points. Operationalizes the expertise of systems thinking practitioners, strategists, and organizational architects.",
    frameworks: [
      { name: "Senge's Fifth Discipline", detail: "Systems thinking as the cornerstone of learning organizations" },
      { name: "Meadows' 12 Leverage Points", detail: "Hierarchy of where to intervene in a system (parameters to feedbacks to design to intent)" },
      { name: "Iceberg Model", detail: "Events, Patterns, Structures, Mental Models (surface to depth)" },
      { name: "Causal Loop Diagrams", detail: "Visual mapping of feedback loops and reinforcing/balancing dynamics" },
      { name: "Stock and Flow Diagrams", detail: "How resources accumulate or deplete over time" },
      { name: "Hoshin Kanri / X Matrix", detail: "Aligns vision, objectives, priorities, metrics; shows system of interconnected goals" },
    ],
    skills: [
      { id: "map-system", description: "Create visual representation of system elements and relationships" },
      { id: "find-leverage", description: "Identify high-impact intervention points using Meadows' hierarchy" },
      { id: "trace-loops", description: "Identify reinforcing and balancing feedback loops" },
      { id: "surface-mental-models", description: "Uncover assumptions driving system behavior" },
      { id: "anticipate-consequences", description: "Explore unintended effects of interventions" },
      { id: "align-goals", description: "Map how objectives connect across levels using X Matrix" },
    ],
    keyPrinciples: [
      "**Whole over parts**: Understand relationships, not just components",
      "**Circular causality**: Effects become causes in feedback loops",
      "**Delays matter**: Time lags between action and consequence obscure cause-effect",
      "**Structure drives behavior**: System behavior emerges from structure, not individual actors",
      "**Leverage is counterintuitive**: Obvious interventions often backfire; effective ones aren't obvious",
    ],
    inputs: ["system_description", "problem_symptoms", "stakeholders", "attempted_interventions", "time_horizon"],
    references: [
      { label: "Thinking in Systems (Donella Meadows)", url: "https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557", note: "essential primer on systems thinking" },
      { label: "The Fifth Discipline (Peter Senge)", url: "https://www.amazon.com/Fifth-Discipline-Practice-Learning-Organization/dp/0385517254", note: "learning organizations and systems archetypes" },
      { label: "Leverage Points (Meadows)", url: "https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/", note: "where to intervene in a system" },
      { label: "The Systems Thinker", url: "https://thesystemsthinker.com/", note: "publications and case studies" },
      { label: "Hoshin Kanri X Matrix", url: "https://www.lean.org/lexicon-terms/hoshin-kanri/", note: "Lean Enterprise Institute resource" },
    ],
  },
  {
    id: "strategist",
    name: "Strategist",
    description: "Long-term vision, positioning, where to play",
    category: "Decision & Strategy",
    group: "Thinking Chain",
    rationale: "Helps think long-term about where to play and how to win. Operationalizes the expertise of strategists, executives, and advisors who focus on positioning, resource allocation, and sustainable competitive advantage.",
    frameworks: [
      { name: "OKRs (strategic alignment)", detail: "Connecting strategy to objectives at the highest level (detailed OKR writing → okr-agent)" },
      { name: "Porter's Five Forces", detail: "Industry analysis (suppliers, buyers, substitutes, new entrants, rivalry)" },
      { name: "SWOT Analysis", detail: "Strengths, Weaknesses, Opportunities, Threats assessment" },
      { name: "Blue Ocean Strategy", detail: "Creating uncontested market space vs. competing in existing markets" },
      { name: "Scenario Planning", detail: "Exploring multiple futures to stress-test strategy" },
      { name: "Playing to Win", detail: "Cascading choices (winning aspiration, where to play, how to win, capabilities, systems)" },
    ],
    skills: [
      { id: "define-arena", description: "Clarify where to compete and where not to" },
      { id: "assess-position", description: "Analyze current competitive position and market dynamics" },
      { id: "cascade-goals", description: "Translate vision into aligned objectives across levels" },
      { id: "explore-scenarios", description: "Develop and stress-test against multiple futures" },
      { id: "allocate-resources", description: "Prioritize investments across initiatives" },
      { id: "identify-moats", description: "Find sources of sustainable advantage" },
    ],
    keyPrinciples: [
      "**Strategy is choice**: Saying yes to everything is not strategy",
      "**Where to play matters more than how**: Right arena beats perfect execution in wrong arena",
      "**Long-term over short-term**: Resist quarterly thinking; build durable advantage",
      "**Outside-in perspective**: Start with market and customer, not internal capabilities",
      "**Alignment cascades**: Strategy fails when layers don't connect",
    ],
    inputs: ["vision", "current_position", "market_context", "time_horizon", "constraints", "stakeholder_priorities"],
    references: [
      { label: "Playing to Win (Lafley & Martin)", url: "https://www.amazon.com/Playing-Win-Strategy-Really-Works/dp/142218739X", note: "strategic choice cascade" },
      { label: "Good Strategy Bad Strategy (Rumelt)", url: "https://www.amazon.com/Good-Strategy-Bad-Difference-Matters/dp/0307886239", note: "diagnosis, guiding policy, coherent action" },
      { label: "Blue Ocean Strategy (Kim & Mauborgne)", url: "https://www.blueoceanstrategy.com/", note: "creating uncontested market space" },
      { label: "Measure What Matters (Doerr)", url: "https://www.whatmatters.com/", note: "OKRs strategic context (detailed OKR work → okr-agent)" },
      { label: "The Art of the Long View (Schwartz)", url: "https://www.amazon.com/Art-Long-View-Planning-Uncertain/dp/0385267320", note: "scenario planning" },
    ],
  },
  {
    id: "okr-agent",
    name: "OKR Agent",
    description: "Writes, scores, and aligns OKRs across teams and levels",
    category: "Decision & Strategy",
    rationale: "Helps individuals, teams, and organizations write effective OKRs, score progress, align objectives across levels, and run OKR cycles. Operationalizes the expertise of OKR coaches who help companies move from vague goals to measurable outcomes. Complements the Strategist (which sets direction) by translating strategic intent into concrete, measurable objectives.",
    frameworks: [
      { name: "OKRs (Objectives & Key Results)", detail: "Ambitious qualitative objectives paired with 3-5 measurable key results" },
      { name: "CFRs (Conversations, Feedback, Recognition)", detail: "Continuous performance management complement to OKRs" },
      { name: "Alignment & Cascading", detail: "Connecting company, team, and individual OKRs vertically and horizontally" },
      { name: "Scoring & Grading", detail: "0.0-1.0 scoring with 0.6-0.7 as the sweet spot for stretch goals" },
    ],
    skills: [
      { id: "write-okrs", description: "Draft OKRs from a goal description, ensuring objectives are qualitative and key results are measurable" },
      { id: "score-okrs", description: "Evaluate OKR progress at mid-cycle or end-of-cycle with honest scoring" },
      { id: "align-okrs", description: "Check vertical and horizontal alignment across company, team, and individual OKRs" },
      { id: "critique-okrs", description: "Review existing OKRs for common anti-patterns (too many, not measurable, sandbagged, activity-based)" },
      { id: "run-checkin", description: "Facilitate a weekly/biweekly OKR check-in with status updates and blockers" },
    ],
    keyPrinciples: [
      "**Objectives inspire, Key Results measure**: Objectives are qualitative and motivating; Key Results are quantitative and verifiable",
      "**Less is more**: 3-5 objectives max per level, 3-5 key results per objective",
      "**Stretch, don't sandbag**: 0.6-0.7 completion is healthy; 1.0 means the goal wasn't ambitious enough",
      "**Outcomes over outputs**: 'Launch feature X' is an output; 'Increase user retention by 15%' is an outcome",
      "**Alignment is not cascade**: Teams should align to company OKRs, not copy them down verbatim",
      "**Separation from compensation**: OKRs work best when decoupled from performance reviews",
    ],
    inputs: ["goal_or_initiative", "level", "time_period", "existing_okrs", "company_objectives", "team_context"],
    validationRules: [
      "Level (company, team, or individual?)",
      "Time period (quarterly, annual?)",
      "Goal or initiative to translate into OKRs",
      "Context (what does the team/company do?)",
    ],
    outputConstraints: "objective: 1 sentence, qualitative, inspiring.\nkey_results: 3-5 per objective, each quantifiable with a metric and target.\nscoring_guidance: what 0.3, 0.7, and 1.0 look like for each KR.\nalignment_notes: how this connects to the level above.\n\nTotal output must not exceed 300 words per OKR set.",
    references: [
      { label: "Measure What Matters (John Doerr)", url: "https://www.whatmatters.com/", note: "the definitive OKR guide" },
      { label: "Radical Focus (Christina Wodtke)", url: "https://www.amazon.com/Radical-Focus-Achieving-Important-Objectives/dp/0996006028", note: "OKRs for startups, narrative approach" },
      { label: "WhatMatters.com", url: "https://www.whatmatters.com/faqs/okr-examples-and-how-to-write-them", note: "OKR examples and how-to guides" },
      { label: "re:Work by Google", url: "https://rework.withgoogle.com/intl/en/guides/set-goals-with-okrs", note: "Google's OKR implementation guide" },
      { label: "Objectives and Key Results (Niven & Lamorte)", url: "https://www.amazon.com/Objectives-Key-Results-Driving-Organization/dp/1119252393", note: "comprehensive OKR methodology" },
    ],
  },
  {
    id: "tactician",
    name: "Tactician",
    description: "Short-term execution, how to win now",
    category: "Decision & Strategy",
    group: "Thinking Chain",
    rationale: "Helps translate strategy into executable action in the current context. Operationalizes the expertise of operators, project managers, and execution specialists who focus on getting things done effectively in the near term.",
    frameworks: [
      { name: "OODA Loop", detail: "Observe, Orient, Decide, Act (rapid decision cycles)" },
      { name: "Eisenhower Matrix", detail: "Urgent/Important prioritization" },
      { name: "Getting Things Done (GTD)", detail: "Capture, clarify, organize, reflect, engage" },
      { name: "Sprint Planning", detail: "Time-boxed execution cycles with clear deliverables" },
      { name: "PDCA Cycle", detail: "Plan, Do, Check, Act for continuous improvement" },
      { name: "Work Breakdown Structure", detail: "Decomposing deliverables into manageable tasks" },
      { name: "Critical Path Method", detail: "Identifying task dependencies and sequence" },
    ],
    skills: [
      { id: "prioritize-now", description: "Decide what to focus on given current constraints" },
      { id: "break-down", description: "Decompose objectives into actionable tasks" },
      { id: "sequence-work", description: "Identify dependencies and optimal order" },
      { id: "adapt-plan", description: "Adjust tactics when conditions change" },
      { id: "remove-blockers", description: "Identify and address execution obstacles" },
      { id: "measure-progress", description: "Track leading indicators of execution health" },
    ],
    keyPrinciples: [
      "**Bias toward action**: Done beats perfect; learn through execution",
      "**Focus is force**: Fewer priorities, better execution",
      "**Adapt rapidly**: Plans are hypotheses; adjust based on reality",
      "**Blockers first**: Removing obstacles often matters more than adding effort",
      "**Visible progress**: Make work and progress transparent",
    ],
    inputs: ["objectives", "resources_available", "constraints", "timeline", "current_blockers", "team_capacity"],
    references: [
      { label: "The Lean Startup (Eric Ries)", url: "https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898", note: "build-measure-learn cycles" },
      { label: "Getting Things Done (David Allen)", url: "https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563", note: "personal productivity system" },
      { label: "OODA Loop (John Boyd)", url: "https://www.artofmanliness.com/articles/ooda-loop/", note: "rapid decision-making" },
    ],
  },
  {
    id: "communication-adapter",
    name: "Communication Adapter",
    description: "Adapts communication style for different audiences",
    category: "Communication",
    rationale: "Adapts communication style for different audiences. Uses publicly available concepts about personality dimensions without reproducing proprietary assessment content.",
    skills: [
      { id: "identify-style", description: "Help users reflect on their communication preferences" },
      { id: "adapt-to-style", description: "Suggest how to communicate with different styles" },
      { id: "team-styles", description: "Map team communication dynamics" },
      { id: "conflict-styles", description: "Understand how different styles clash" },
    ],
    keyPrinciples: [
      "**Focus on general personality dimension concepts** (introversion/extraversion, task/people orientation)",
      "**Reference academic research** on personality psychology (Big Five, etc.)",
      "**Use as a communication styles coach**, not a certified assessment tool",
    ],
    ipNotes: "Build on public research about personality dimensions. Open alternatives include Big Five / OCEAN model (public domain), VIA Character Strengths (free, research-based), and generic communication styles frameworks (task vs. people, direct vs. indirect). Avoid reproducing proprietary assessment questions or scoring systems.",
    inputs: ["your_style", "target_audience", "communication_context", "relationship"],
    references: [
      { label: "Big Five Personality Traits", url: "https://en.wikipedia.org/wiki/Big_Five_personality_traits", note: "public domain academic research" },
      { label: "VIA Character Strengths", url: "https://www.viacharacter.org/", note: "free, research-based assessment" },
    ],
  },
  {
    id: "strength-finder",
    name: "Strength Finder",
    description: "Identifies and applies professional strengths",
    category: "Career Development",
    rationale: "Identifies and applies professional strengths. Draws on strengths-based development principles without reproducing proprietary assessments.",
    skills: [
      { id: "discover-strengths", description: "Guided reflection to identify strengths" },
      { id: "strengths-in-action", description: "How to apply strengths to current challenges" },
      { id: "strengths-shadow", description: "Understanding when strengths become weaknesses" },
      { id: "team-strengths", description: "Complementary strengths on teams" },
    ],
    keyPrinciples: [
      "**Use VIA Character Strengths** (free, research-based, encourages use)",
      "**Focus on helping users articulate strengths**, not administer assessments",
      "**Complement rather than replace** official assessments",
    ],
    ipNotes: "Safe to reference: VIA Institute on Character (explicitly encourages educational use), strengths-based coaching methodology, and academic research on positive psychology. Requires licensing: CliftonStrengths/StrengthsFinder (Gallup trademark) and specific assessment questions or theme descriptions.",
    inputs: ["current_challenges", "work_context", "career_goals", "team_context"],
    references: [
      { label: "VIA Institute on Character", url: "https://www.viacharacter.org/", note: "free, research-based strengths assessment" },
      { label: "Positive Psychology (Seligman)", url: "https://www.authentichappiness.sas.upenn.edu/", note: "academic research on strengths" },
      { label: "CliftonStrengths", url: "https://www.gallup.com/cliftonstrengths/", note: "strengths-based development (requires licensing)" },
    ],
  },
  {
    id: "friction-reducer",
    name: "Friction Reducer",
    description: "Reduces interpersonal friction from style differences",
    category: "Communication",
    rationale: "Reduces interpersonal friction from style differences. Uses publicly available behavioral science concepts to help navigate workplace dynamics.",
    skills: [
      { id: "identify-behavior-style", description: "Reflect on behavioral preferences" },
      { id: "adapt-communication", description: "Adjust approach for different styles" },
      { id: "decode-behavior", description: "Understand why someone acts a certain way" },
      { id: "reduce-friction", description: "Navigate style clashes" },
    ],
    keyPrinciples: [
      "**Build on publicly available behavioral science** concepts",
      "**Focus on communication adaptation** principles, not assessments",
      "**Reference William Marston's original research** (public domain)",
    ],
    ipNotes: "DISC is a trademarked term with many proprietary versions. The underlying concepts (dominance, influence, steadiness, conscientiousness) are based on public research by William Marston. Safe to discuss general behavioral dimension concepts and communication adaptation principles. Avoid specific DISC branded materials, assessment questions, or color-coding systems that may be trademarked.",
    inputs: ["relationship", "friction_points", "your_style", "their_behavior", "context"],
    references: [
      { label: "William Marston's DISC Theory", url: "https://en.wikipedia.org/wiki/DISC_assessment", note: "original public domain research" },
      { label: "Communication Styles Research", url: "https://www.psychologytoday.com/us/basics/personality", note: "general behavioral dimensions" },
    ],
  },
];
