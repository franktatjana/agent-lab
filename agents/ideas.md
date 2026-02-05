# Agent Ideas

| Name | Description |
|------|-------------|
| [generation-agent](#generation-agent) | Bridges communication styles between workplace generations |
| [decision-facilitator-agent](#decision-facilitator-agent) | Guides structured decision-making using proven frameworks |
| [corporate-navigator-agent](#corporate-navigator-agent) | Navigates office politics and stakeholder dynamics |
| [design-thinking-agent](#design-thinking-agent) | Facilitates human-centered design and ideation processes |
| [change-management-agent](#change-management-agent) | Plans and guides organizational change initiatives |
| [feedback-coach-agent](#feedback-coach-agent) | Helps craft and deliver effective feedback |
| [presentation-coach-agent](#presentation-coach-agent) | Structures and improves presentations and delivery |
| [negotiation-agent](#negotiation-agent) | Prepares negotiation strategy and tactics |
| [difficult-conversations-agent](#difficult-conversations-agent) | Prepares for challenging interpersonal conversations |
| [storytelling-agent](#storytelling-agent) | Crafts compelling narratives for professional contexts |
| [pitch-agent](#pitch-agent) | Refines pitches for investors, executives, or customers |
| [interview-prep-agent](#interview-prep-agent) | Prepares for behavioral, technical, and case interviews |
| [resume-agent](#resume-agent) | Optimizes resumes for specific opportunities and ATS |
| [salary-negotiation-agent](#salary-negotiation-agent) | Prepares compensation negotiation strategy |
| [networking-agent](#networking-agent) | Builds and maintains professional networks strategically |
| [mentorship-agent](#mentorship-agent) | Structures productive mentor-mentee relationships |
| [promotion-agent](#promotion-agent) | Builds visibility and prepares promotion cases |
| [skill-gap-agent](#skill-gap-agent) | Identifies gaps and creates learning plans with certification prep |
| [onboarding-agent](#onboarding-agent) | Guides new employee integration and 30-60-90 plans |
| [knowledge-transfer-agent](#knowledge-transfer-agent) | Facilitates handoffs and institutional knowledge preservation |
| [team-dynamics-agent](#team-dynamics-agent) | Improves team functioning and psychological safety |
| [meeting-facilitator-agent](#meeting-facilitator-agent) | Designs agendas and facilitates effective meetings |
| [supportive-colleague-agent](#supportive-colleague-agent) | Provides empathetic support for workplace challenges |
| [superhero-agent](#superhero-agent) | You're the hero, work is the universe, every challenge is a mission |
| | **Thinking Chain** *(can be orchestrated together)* |
| [why-agent](#why-agent) | Drills down to find what's really going on using structured inquiry |
| [systems-thinker-agent](#systems-thinker-agent) | Sees the whole system, finds connections and leverage points |
| [strategist-agent](#strategist-agent) | Long-term vision, positioning, and where to play |
| [tactician-agent](#tactician-agent) | Short-term execution, how to win in the current context |

---

## generation-agent

Translates communication styles between generational contexts. Bridges workplace communication gaps, reframes feedback, and adapts messaging tone for different audiences.

Generations covered: Baby Boomers (1946-1964), Gen X (1965-1980), Millennials (1981-1996), Gen Z (1997-2012), Gen Alpha (2010-2025)

Possible skills:

- `adapt-message`:reframe communication for target generation's preferences
- `explain-style`:explain why a generation communicates the way it does
- `bridge-gap`:suggest common ground between two generations
- `coach-sender`:help someone adjust their style for a different audience

Possible inputs: `source_generation`, `target_generation`, `message`, `context` (workplace, feedback, collaboration)

Key generational patterns:

- **Boomers**:prefer face-to-face, phone calls; value directness and personal connection
- **Gen X**:email and phone; informal but professional; value work-life balance
- **Millennials**:Slack/Teams, text; want frequent feedback; value authenticity
- **Gen Z**:instant messaging, visual; need clear direction; value transparency
- **Gen Alpha**:voice-first, AI-native; expect flexibility; value purpose and sustainability

References:

- [SHRM Multigenerational Communication](https://www.shrm.org/topics-tools/flagships/all-things-work/managing-multi-generational-communication-workplace):managing communication across generations
- [Berkeley Intergenerational Communication](https://executive.berkeley.edu/thought-leadership/blog/enhancing-intergenerational-communication):bridging strategies
- [Communication Styles by Generation](https://powell-software.com/resources/blog/communication-styles/):Gen Z to Boomer preferences
- [Bridging the Generation Gap (ResearchGate)](https://www.researchgate.net/publication/390108622_Bridging_the_Generation_Gap_Understanding_Collaboration_Challenges_and_Opportunities_in_Multigenerational_Workplaces):collaboration challenges
- [Gen Z Communication Gaps](https://www.edstellar.com/blog/gen-z-communication-gaps):workplace adaptation
- [Gen Alpha Workplace Characteristics](https://theenterpriseworld.com/gen-alpha-employees-characteristics/):future workforce
- [Gen Alpha Voice-First Communication](https://fortune.com/2025/11/07/gen-alpha-wont-ever-have-to-write-an-email-when-they-join-the-workforce-new-research-reveals-theyll-be-sending-voice-notes-to-their-boss-instead/):AI and voice communication
- [Gen Alpha Shaping Future of Work](https://hpmegatrends.com/how-generation-alpha-is-shaping-the-future-of-work-8b0c303d371c):2030 workplace expectations

---

## decision-facilitator-agent

Guides structured decision-making processes. Not about making decisions, but facilitating the methodology: mapping options, criteria, stakeholders, outcomes, and trade-offs.

Frameworks supported:

- **RAPID**: Recommend, Agree, Perform, Input, Decide (Bain & Company)
- **DACI**: Driver, Approver, Contributors, Informed (Atlassian)
- **Decision Matrix**: Weighted criteria scoring for option comparison
- **Pre-Mortem**: Prospective hindsight to identify failure modes
- **Six Thinking Hats**: Parallel thinking for comprehensive analysis (de Bono)
- **Cynefin Framework**: Simple, Complicated, Complex, Chaotic domain classification

Possible skills:

- `structure-decision`: frame the decision, identify type, select appropriate framework
- `map-options`: enumerate alternatives with pros, cons, and trade-offs
- `define-criteria`: establish weighted evaluation criteria
- `identify-stakeholders`: who decides, who inputs, who is affected
- `run-pre-mortem`: imagine failure and work backward to risks
- `document-decision`: capture rationale, context, and expected outcomes

Possible inputs: `decision_context`, `options`, `stakeholders`, `constraints`, `timeline`, `reversibility`

Key principles:

- **Clarity over consensus**: Define who decides, not just who discusses
- **Explicit criteria**: Hidden criteria lead to hidden conflicts
- **Reversibility matters**: One-way doors need more rigor than two-way doors
- **Document rationale**: Future you will forget why this made sense
- **Separate divergence from convergence**: Generate options before evaluating

References:

- [RAPID Decision-Making (Bain)](https://www.bain.com/insights/rapid-tool-to-clarify-decision-accountability/): role clarity framework
- [DACI Framework (Atlassian)](https://www.atlassian.com/team-playbook/plays/daci): decision documentation
- [Six Thinking Hats (de Bono)](https://www.debonogroup.com/services/core-programs/six-thinking-hats/): parallel thinking
- [Cynefin Framework (Snowden)](https://thecynefin.co/about-us/about-cynefin-framework/): complexity-aware decisions
- [Pre-Mortem (Klein)](https://hbr.org/2007/09/performing-a-project-premortem): prospective hindsight

---

## corporate-navigator-agent

Helps navigate corporate culture, office politics, and career advancement. Distinct from culture-agent (national/regional cultures):this focuses on workplace dynamics within organizations.

Possible skills:

- `map-stakeholders`:identify key players, interests, power, relationships
- `analyze-dynamics`:political landscape, alliances, informal networks
- `plan-influence`:strategies for gaining support, building coalitions
- `coach-career`:structured development using GROW/STEER/CAREER frameworks
- `navigate-situation`:tactical advice for specific scenarios (promotion, conflict, change)

Possible inputs: `organization_context`, `your_role`, `stakeholders`, `situation`, `constraints`

Boundaries: Does NOT make decisions, provide legal/HR advice, or guarantee outcomes. Focuses on navigation, not manipulation.

References:

- [Stakeholder Mapping Frameworks](https://www.bitesizelearning.co.uk/resources/stakeholder-mapping-explanation):influence/interest matrices, stakeholder cube
- [ODI Stakeholder Analysis](https://odi.org/en/publications/mapping-political-context-stakeholder-analysis/):power, positions, perspectives
- [WSU Organizational Politics](https://opentext.wsu.edu/organizational-behavior/chapter/13-4-organizational-politics/):workplace politics overview
- [SAGE Power & Politics](https://uk.sagepub.com/sites/default/files/upm-assets/112435_book_item_112435.pdf):change politics framework
- [GROW Model](https://simply.coach/blog/grow-model-template-worksheet/):goals, reality, options, will
- [Career Coaching Tools](https://positivepsychology.com/career-coaching/):strengths-based approaches
- [SHRM Career Paths](https://www.shrm.org/topics-tools/tools/toolkits/empowering-employee-growth-building-dynamic-career-paths):organizational frameworks
- [SHRM on Culture vs AI (2026)](https://allwork.space/2026/01/leadership-and-culture-not-ai-will-decide-workplace-success-in-2026-shrm-finds/):culture research
- [Gartner CHRO Priorities 2026](https://www.gartner.com/en/newsroom/press-releases/2025-10-02-gartner-says-chros-top-priorities-for-2026-center-around-realizing-ai-value-and-driving-performance-amid-uncertainty):leadership, AI adoption

---

## design-thinking-agent

Guides users through human-centered design processes. Facilitates ideation, prototyping mindset, and iterative problem-solving using established design thinking frameworks.

Frameworks supported:

- **Stanford d.school 5-Stage Model**: Empathize, Define, Ideate, Prototype, Test
- **IDEO 3-I Model**: Inspiration, Ideation, Implementation
- **Double Diamond**: Discover, Define, Develop, Deliver (diverge/converge pattern)
- **IBM Enterprise Design Thinking**: Loops (observe, reflect, make), Keys (hills, playbacks, sponsor users)

Possible skills:

- `run-empathy-session`: guide stakeholder interviews and observation synthesis
- `define-problem`: help frame problem statements and "How Might We" questions
- `facilitate-ideation`: structured brainstorming with quantity over quality focus
- `prototype-plan`: rapid prototyping strategy for testing assumptions
- `test-synthesis`: consolidate user feedback into actionable insights

Possible inputs: `problem_context`, `stakeholders`, `constraints`, `stage` (empathize/define/ideate/prototype/test), `time_available`

Key principles:

- **Human-centered**: Start with real user needs, not assumptions
- **Bias toward action**: Build to think, don't just think to build
- **Radical collaboration**: Cross-functional perspectives unlock innovation
- **Embrace ambiguity**: Comfort with uncertainty enables creative solutions
- **Iterate rapidly**: Fail fast, learn fast, improve fast

References:

- [Stanford d.school Resources](https://dschool.stanford.edu/resources): original design thinking methodology
- [IDEO Design Thinking](https://designthinking.ideo.com/): practitioner resources
- [Double Diamond Framework](https://www.designcouncil.org.uk/our-resources/the-double-diamond/): UK Design Council model
- [IBM Enterprise Design Thinking](https://www.ibm.com/design/thinking/): enterprise adaptation

---

## change-management-agent

Guides organizational change initiatives using proven frameworks. Helps plan stakeholder engagement, communication strategies, and resistance management.

Frameworks supported:

- **ADKAR Model**: Awareness, Desire, Knowledge, Ability, Reinforcement (individual change)
- **Kotter's 8-Step Process**: Urgency, Coalition, Vision, Communication, Empowerment, Quick Wins, Consolidation, Anchoring
- **Bridges Transition Model**: Ending, Neutral Zone, New Beginning (psychological transition)
- **Lewin's Change Model**: Unfreeze, Change, Refreeze (foundational three-stage)
- **McKinsey 7-S Framework**: Strategy, Structure, Systems, Shared Values, Style, Staff, Skills

Possible skills:

- `assess-readiness`: evaluate organizational readiness for change
- `plan-stakeholders`: map stakeholders by influence/impact, plan engagement
- `design-communication`: create change communication strategy and messaging
- `manage-resistance`: identify resistance patterns and mitigation strategies
- `track-adoption`: metrics and checkpoints for change adoption

Possible inputs: `change_description`, `organization_context`, `stakeholders`, `timeline`, `constraints`

Key principles:

- **People-first**: Technical changes fail without people adoption
- **Sponsor engagement**: Visible executive sponsorship is critical
- **Two-way communication**: Listening matters as much as telling
- **Quick wins**: Early victories build momentum and credibility
- **Sustained reinforcement**: Change sticks only with ongoing support

References:

- [Prosci ADKAR Model](https://www.prosci.com/methodology/adkar): individual change methodology
- [Kotter's 8 Steps](https://www.kotterinc.com/methodology/8-steps/): organizational transformation
- [Bridges Transition Model](https://wmbridges.com/about/what-is-transition/): managing psychological transitions
- [McKinsey 7-S Framework](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/enduring-ideas-the-7-s-framework): organizational alignment

---

## feedback-coach-agent

Helps craft and deliver effective feedback using structured frameworks. Supports both giving and receiving feedback in professional contexts.

Frameworks supported:

- **SBI Model**: Situation, Behavior, Impact (Center for Creative Leadership)
- **COIN Model**: Context, Observation, Impact, Next steps
- **Feedforward**: Focus on future behavior rather than past mistakes
- **Radical Candor**: Care Personally + Challenge Directly quadrant
- **DESC Script**: Describe, Express, Specify, Consequences

Possible skills:

- `draft-feedback`: structure feedback using chosen framework
- `reframe-critique`: transform critical feedback into constructive language
- `prepare-difficult`: prepare for challenging feedback conversations
- `receive-feedback`: strategies for receiving feedback non-defensively
- `follow-up-plan`: action items and check-in cadence after feedback

Possible inputs: `situation`, `behavior_observed`, `desired_outcome`, `relationship_context`, `framework_preference`

Key principles:

- **Specific over general**: Observable behaviors, not character judgments
- **Timely delivery**: Close to the event while context is fresh
- **Private criticism, public praise**: Protect dignity in difficult conversations
- **Two-way dialogue**: Feedback is conversation, not monologue
- **Growth-oriented**: Focus on development, not punishment

References:

- [SBI Feedback Model (CCL)](https://www.ccl.org/articles/leading-effectively-articles/closing-the-gap-between-intent-and-impact/): situation-behavior-impact
- [Radical Candor](https://www.radicalcandor.com/): Kim Scott's framework
- [Marshall Goldsmith Feedforward](https://marshallgoldsmith.com/articles/try-feedforward-instead-feedback/): future-focused approach

---

## presentation-coach-agent

Helps structure, design, and deliver effective presentations. Supports content organization, slide design principles, and delivery techniques.

Frameworks supported:

- **Pyramid Principle**: Barbara Minto's top-down communication structure
- **PechaKucha**: 20 slides x 20 seconds constraint format
- **Story Arc**: Setup, Conflict, Resolution narrative structure
- **Monroe's Motivated Sequence**: Attention, Need, Satisfaction, Visualization, Action
- **Rule of Three**: Organize content into three memorable points

Possible skills:

- `structure-content`: organize presentation using chosen framework
- `design-slides`: apply visual design principles (contrast, alignment, proximity)
- `craft-opening`: create compelling hooks and openings
- `prepare-delivery`: practice techniques, timing, Q&A preparation
- `adapt-audience`: tailor content for specific audience needs

Possible inputs: `topic`, `audience`, `time_limit`, `objective` (inform/persuade/inspire), `format` (in-person/virtual)

Key principles:

- **Audience-first**: Know who you're speaking to and what they need
- **One idea per slide**: Cognitive load management
- **Show, don't tell**: Visuals over bullet points where possible
- **Practice out loud**: Delivery improves with rehearsal
- **Strong close**: End with clear call-to-action or memorable takeaway

References:

- [Pyramid Principle](https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/the-pyramid-principle): McKinsey communication standard
- [Presentation Zen](https://www.presentationzen.com/): Garr Reynolds on design
- [Nancy Duarte Resonate](https://www.duarte.com/resources/books/resonate/): storytelling in presentations

---

## negotiation-agent

Guides negotiation preparation and strategy using established frameworks. Helps analyze positions, interests, and develop effective approaches.

Frameworks supported:

- **BATNA/WATNA/ZOPA**: Best/Worst Alternative To Negotiated Agreement, Zone of Possible Agreement
- **Harvard Principled Negotiation**: Separate people from problem, focus on interests not positions
- **RADPAC**: Rapport, Analyze, Debate, Propose, Agree, Close
- **Thomas-Kilmann Conflict Modes**: Competing, Collaborating, Compromising, Avoiding, Accommodating
- **Anchoring and Framing**: First-offer strategy and reference point setting

Possible skills:

- `analyze-position`: map your position, interests, and alternatives
- `assess-counterpart`: understand other party's likely interests and constraints
- `plan-strategy`: develop negotiation approach and tactics
- `prepare-concessions`: plan what to trade and when
- `handle-tactics`: recognize and respond to negotiation tactics

Possible inputs: `negotiation_context`, `your_interests`, `their_interests`, `constraints`, `relationship_importance`

Key principles:

- **Preparation wins**: Most negotiations are won before they start
- **Interests over positions**: Understand why, not just what
- **BATNA strength**: Your alternatives determine your power
- **Create value first**: Expand the pie before dividing it
- **Relationship matters**: Consider ongoing relationship in approach

References:

- [Getting to Yes](https://www.pon.harvard.edu/shop/getting-to-yes/): Fisher and Ury's principled negotiation
- [Harvard PON Resources](https://www.pon.harvard.edu/): Program on Negotiation research
- [Never Split the Difference](https://www.blackswanltd.com/never-split-the-difference): Chris Voss tactical empathy

---

## difficult-conversations-agent

Helps prepare for and navigate challenging interpersonal conversations. Supports conflict resolution, delivering bad news, and addressing sensitive topics.

Frameworks supported:

- **Difficult Conversations Model**: Three conversations (What Happened, Feelings, Identity)
- **Nonviolent Communication (NVC)**: Observation, Feeling, Need, Request
- **Crucial Conversations**: Start with Heart, STATE (Share facts, Tell story, Ask for others' paths, Talk tentatively, Encourage testing)
- **DEAR MAN**: Describe, Express, Assert, Reinforce, Mindful, Appear confident, Negotiate

Possible skills:

- `prepare-conversation`: structure approach and key points
- `manage-emotions`: techniques for staying calm under pressure
- `de-escalate`: strategies when conversations become heated
- `find-resolution`: identify mutually acceptable outcomes
- `follow-up`: repair and maintain relationship after difficult conversation

Possible inputs: `situation`, `relationship`, `your_goal`, `their_likely_concerns`, `emotional_stakes`

Key principles:

- **Separate intent from impact**: Good intentions don't prevent hurt
- **Listen to understand**: Seek first to understand, then to be understood
- **Own your contribution**: Acknowledge your part in the situation
- **Focus on interests**: Look beneath positions to underlying needs
- **Plan but flex**: Prepare structure but adapt to the conversation

References:

- [Difficult Conversations (Stone, Patton, Heen)](https://www.stoneandheen.com/difficult-conversations): Harvard Negotiation Project
- [Crucial Conversations](https://cruciallearning.com/crucial-conversations-book/): Patterson et al.
- [Nonviolent Communication](https://www.cnvc.org/): Marshall Rosenberg's framework

---

## storytelling-agent

Helps craft compelling narratives for professional contexts. Supports business storytelling, personal branding, and persuasive communication.

Frameworks supported:

- **Hero's Journey**: Call to adventure, trials, transformation, return (Joseph Campbell)
- **Pixar Story Spine**: Once upon a time, Every day, One day, Because of that, Until finally
- **STAR Stories**: Situation, Task, Action, Result (for professional narratives)
- **Data Storytelling**: Context, conflict, resolution with supporting data
- **Brand Narrative**: Origin, mission, values, vision arc

Possible skills:

- `craft-narrative`: structure story using chosen framework
- `find-hook`: identify compelling opening that grabs attention
- `build-tension`: create narrative arc with appropriate stakes
- `connect-audience`: tailor story elements for specific audience
- `deliver-story`: techniques for engaging verbal delivery

Possible inputs: `story_purpose`, `audience`, `key_message`, `available_elements` (data, anecdotes, examples), `format` (written/spoken)

Key principles:

- **Emotion drives action**: Facts tell, stories sell
- **Specificity creates believability**: Concrete details over abstractions
- **Conflict is essential**: No tension, no interest
- **The audience is the hero**: Make them see themselves in the story
- **End with transformation**: Show what changed and why it matters

References:

- [Story (Robert McKee)](https://mckeestory.com/): screenwriting principles for business
- [Building a StoryBrand (Donald Miller)](https://storybrand.com/): brand narrative framework
- [Made to Stick (Heath Brothers)](https://heathbrothers.com/books/made-to-stick/): memorable communication

---

## pitch-agent

Helps prepare and refine pitches for various contexts. Supports startup pitches, project proposals, and idea presentations.

Frameworks supported:

- **Pitch Deck Structure**: Problem, Solution, Market, Business Model, Traction, Team, Ask
- **Elevator Pitch Formula**: Hook, Problem, Solution, Unique Value, Call to Action (60 seconds)
- **Guy Kawasaki 10/20/30**: 10 slides, 20 minutes, 30pt font minimum
- **NABC Method**: Need, Approach, Benefits, Competition (SRI International)
- **Problem-Agitate-Solve**: Present problem, amplify pain, offer solution

Possible skills:

- `structure-pitch`: organize content using appropriate framework
- `craft-hook`: create compelling opening that captures attention
- `handle-objections`: prepare for common questions and pushback
- `tailor-audience`: adapt pitch for investors/executives/customers
- `practice-delivery`: timing, pacing, and confidence techniques

Possible inputs: `pitch_type` (startup/project/idea), `audience`, `time_available`, `key_differentiator`, `ask` (what you want)

Key principles:

- **Lead with the problem**: Make them feel the pain first
- **Simple and clear**: If you can't explain it simply, you don't understand it
- **Show traction**: Evidence beats promises
- **Know your numbers**: Be prepared for detailed questions
- **Clear ask**: Specify exactly what you want from the audience

References:

- [Sequoia Pitch Deck Template](https://www.sequoiacap.com/article/writing-a-business-plan/): venture capital standard
- [Y Combinator Pitch Guide](https://www.ycombinator.com/library/4T-how-to-pitch-your-startup): startup pitch advice
- [TED Talk Guidelines](https://www.ted.com/participate/organize-a-local-tedx-event/tedx-organizer-guide/speakers-program/prepare-your-speaker): idea presentation

---

## interview-prep-agent

Helps prepare for job interviews across different formats and industries. Supports behavioral, technical, and case interview preparation.

Frameworks supported:

- **STAR Method**: Situation, Task, Action, Result (behavioral answers)
- **CAR Method**: Challenge, Action, Result (concise alternative)
- **SOAR Method**: Situation, Obstacle, Action, Result (emphasizes challenges overcome)
- **Case Interview Frameworks**: MECE, Issue Trees, Hypothesis-driven (consulting)
- **Technical Interview Prep**: Problem decomposition, communication, optimization

Possible skills:

- `analyze-job`: break down job description for key competencies
- `prepare-stories`: develop STAR stories for common behavioral questions
- `mock-interview`: practice questions with feedback
- `research-company`: key talking points about company and role
- `prepare-questions`: thoughtful questions to ask interviewer

Possible inputs: `job_description`, `company`, `interview_type` (behavioral/technical/case), `your_background`, `concerns`

Key principles:

- **Preparation is visible**: Interviewers notice who did their homework
- **Stories over claims**: "I'm a leader" vs. story demonstrating leadership
- **Specific and quantified**: Numbers and concrete outcomes are memorable
- **Authentic confidence**: Preparation enables natural presence
- **Two-way evaluation**: You're also interviewing them

References:

- [STAR Method Guide](https://www.themuse.com/advice/star-interview-method): behavioral interview technique
- [Case in Point](https://www.casequestions.com/): consulting interview preparation
- [Cracking the Coding Interview](https://www.crackingthecodinginterview.com/): technical interview prep

---

## resume-agent

Helps create and optimize resumes for specific opportunities. Supports formatting, content strategy, and ATS optimization.

Frameworks supported:

- **Achievement-Based Format**: Accomplishment statements over job duties
- **PAR Method**: Problem, Action, Result for bullet points
- **ATS Optimization**: Keyword matching, formatting for applicant tracking systems
- **Functional vs. Chronological**: Format selection based on career situation
- **One-Page Rule**: Conciseness principles for early-career professionals

Possible skills:

- `analyze-target`: extract keywords and requirements from job posting
- `rewrite-bullets`: transform duty statements into achievements
- `optimize-ats`: ensure resume passes applicant tracking systems
- `tailor-resume`: customize resume for specific opportunity
- `format-review`: layout and design best practices

Possible inputs: `current_resume`, `target_job`, `career_stage`, `industry`, `concerns` (gaps, transitions)

Key principles:

- **Achievements over duties**: What you accomplished, not what you were responsible for
- **Quantify impact**: Numbers make achievements concrete and credible
- **Relevance is key**: Tailor content to the specific opportunity
- **Clean and scannable**: Recruiters spend seconds on initial review
- **Keywords matter**: ATS filtering requires strategic keyword placement

References:

- [Harvard Resume Guide](https://careerservices.fas.harvard.edu/resources/resume-cover-letter-resources/): professional standards
- [ATS Resume Tips](https://www.jobscan.co/blog/ats-resume/): optimization strategies
- [Resume Action Words](https://www.indeed.com/career-advice/resumes-cover-letters/action-verbs-to-make-your-resume-stand-out): strong verb lists

---

## salary-negotiation-agent

Helps prepare for and execute salary and compensation negotiations. Supports research, strategy, and conversation preparation.

Frameworks supported:

- **Market Research Approach**: Levels.fyi, Glassdoor, Payscale data gathering
- **Total Compensation View**: Base, bonus, equity, benefits, perks valuation
- **Anchoring Strategy**: First-offer positioning and range tactics
- **BATNA Application**: Alternative offers and walk-away points
- **Timing Optimization**: When and how to raise compensation discussions

Possible skills:

- `research-market`: gather compensation data for role and location
- `calculate-total-comp`: evaluate full compensation package value
- `plan-strategy`: develop negotiation approach and talking points
- `handle-objections`: responses to common pushback
- `evaluate-offer`: compare and assess competing offers

Possible inputs: `current_compensation`, `target_role`, `location`, `experience_level`, `alternative_offers`, `priorities`

Key principles:

- **Know your market value**: Research before negotiating
- **Negotiate total compensation**: Look beyond base salary
- **Timing matters**: Negotiate after offer, not during interview
- **Get it in writing**: Verbal promises aren't binding
- **Practice the conversation**: Rehearse to build confidence

References:

- [Levels.fyi](https://www.levels.fyi/): tech compensation data
- [Glassdoor Salary Data](https://www.glassdoor.com/Salaries/): industry compensation benchmarks
- [Negotiation strategies (HBR)](https://hbr.org/2014/06/why-women-dont-negotiate-their-job-offers): research on negotiation gaps

---

## networking-agent

Helps build and maintain professional networks strategically. Supports outreach, relationship maintenance, and network leverage.

Frameworks supported:

- **Weak Ties Theory**: Granovetter's strength of weak ties for opportunities
- **Give First Approach**: Adam Grant's reciprocity style classification
- **Dunbar's Numbers**: 5/15/50/150 relationship capacity tiers
- **Network Mapping**: Strong ties, weak ties, structural holes analysis
- **Personal CRM**: Systematic relationship tracking and touchpoints

Possible skills:

- `map-network`: analyze current network strengths and gaps
- `plan-outreach`: strategy for reaching specific contacts
- `craft-message`: write effective networking messages
- `maintain-relationships`: systematic follow-up and touchpoint planning
- `leverage-network`: how to ask for introductions and referrals

Possible inputs: `networking_goal`, `current_network`, `target_contacts`, `available_time`, `comfort_level`

Key principles:

- **Give before you ask**: Build relationship equity first
- **Be specific in asks**: Vague requests get vague responses
- **Follow up consistently**: Networking is relationship maintenance
- **Quality over quantity**: Deep connections beat many shallow ones
- **Make it easy**: Reduce friction for people to help you

References:

- [Never Eat Alone (Keith Ferrazzi)](https://keithferrazzi.com/books/): networking methodology
- [Give and Take (Adam Grant)](https://adamgrant.net/book/give-and-take/): reciprocity research
- [LinkedIn Networking Best Practices](https://www.linkedin.com/business/sales/blog/profile-best-practices/): digital networking

---

## mentorship-agent

Facilitates productive mentoring relationships. Supports both mentors and mentees in structuring and maximizing mentorship value.

Frameworks supported:

- **GROW Model**: Goal, Reality, Options, Will (coaching structure)
- **Situational Leadership**: Directing, Coaching, Supporting, Delegating based on development level
- **70-20-10 Development**: Experience, Exposure, Education learning mix
- **Mentorship Lifecycle**: Initiation, Cultivation, Separation, Redefinition
- **Reverse Mentoring**: Junior-to-senior knowledge transfer model

Possible skills:

- `structure-relationship`: establish goals, cadence, and expectations
- `prepare-session`: agenda and topics for mentorship meetings
- `give-guidance`: framework for offering advice without directing
- `ask-for-help`: how to maximize value from mentor relationship
- `evaluate-progress`: assess development and adjust approach

Possible inputs: `role` (mentor/mentee), `relationship_stage`, `development_goals`, `meeting_frequency`, `challenges`

Key principles:

- **Clear expectations**: Both parties understand goals and commitment
- **Active mentee ownership**: Mentee drives the relationship agenda
- **Balance support and challenge**: Growth requires stretch assignments
- **Confidentiality**: Trust enables honest conversation
- **Regular reflection**: Assess what's working and adjust

References:

- [Mentoring at Work (Kram)](https://www.amazon.com/Mentoring-Work-Developmental-Relationships-Organizational/dp/0819167878): foundational research
- [GROW Model (Whitmore)](https://www.performanceconsultants.com/grow-model): coaching framework
- [Harvard Business Review on Mentoring](https://hbr.org/topic/subject/mentoring): current research

---

## promotion-agent

Helps prepare for and pursue career advancement. Supports self-assessment, visibility building, and promotion conversation preparation.

Frameworks supported:

- **Visibility-Ability-Advocacy**: Three elements needed for promotion
- **Brag Document**: Systematic achievement tracking (Julia Evans)
- **Sponsorship vs. Mentorship**: Understanding and cultivating sponsors
- **Level Expectations**: Understanding what's expected at next level
- **Influence Without Authority**: Building cross-functional impact

Possible skills:

- `assess-readiness`: evaluate current position against next-level expectations
- `build-case`: document achievements and impact for promotion discussion
- `increase-visibility`: strategies for appropriate self-promotion
- `find-sponsors`: identify and cultivate executive sponsors
- `prepare-conversation`: script for promotion discussion with manager

Possible inputs: `current_level`, `target_level`, `achievements`, `timeline`, `organizational_context`, `blockers`

Key principles:

- **Performance is table stakes**: Doing your job well doesn't guarantee promotion
- **Visibility matters**: Achievements unknown don't count
- **Sponsors open doors**: Mentors advise, sponsors advocate
- **Act at the next level**: Demonstrate capability before promotion
- **Timing and context**: Organizational readiness matters

References:

- [Brag Document (Julia Evans)](https://jvns.ca/blog/brag-documents/): achievement tracking
- [Staff Engineer (Will Larson)](https://staffeng.com/book): senior IC promotion paths
- [HBR on Promotion](https://hbr.org/2021/01/how-to-ask-for-a-promotion): research-backed strategies

---

## skill-gap-agent

Identifies skill gaps and creates personalized learning plans. Supports career development, role transitions, and continuous learning with certification preparation.

Frameworks supported:

- **Competency Mapping**: Current skills vs. target role requirements
- **Dreyfus Skill Model**: Novice, Beginner, Competent, Proficient, Expert levels
- **70-20-10 Learning**: Experience (70%), Exposure (20%), Education (10%)
- **SMART Learning Goals**: Specific, Measurable, Achievable, Relevant, Time-bound
- **Certification Roadmaps**: Industry certification paths and preparation strategies

Possible skills:

- `assess-skills`: evaluate current competencies against target
- `identify-gaps`: prioritize skills to develop based on impact
- `create-learning-plan`: structured development plan with resources
- `track-progress`: metrics and milestones for skill development
- `prepare-certification`: study plan and exam preparation for industry certifications

Certification support:

- **Tech certifications**: AWS, Azure, GCP, Kubernetes, security (CISSP, Security+)
- **Project management**: PMP, PRINCE2, Agile (CSM, PSM, SAFe)
- **Business**: Six Sigma, ITIL, CFA, CPA
- **Data**: Data science, ML certifications, analytics
- **Preparation features**: study schedules, practice exams, knowledge gap targeting

Possible inputs: `current_skills`, `target_role`, `timeline`, `learning_style`, `available_time`, `certification_goals`

Key principles:

- **Gap analysis first**: Know where you are before planning where to go
- **Prioritize by impact**: Focus on skills that matter most for your goals
- **Mix learning modes**: Combine courses, projects, and mentorship
- **Apply immediately**: Learning sticks when applied in real contexts
- **Certifications validate**: Industry certifications provide credible skill verification

References:

- [Skills Framework for the Information Age (SFIA)](https://sfia-online.org/): IT competency framework
- [Dreyfus Model](https://www.bumc.bu.edu/facdev-medicine/files/2012/03/Dreyfus-skill-level.pdf): skill acquisition stages
- [Learning How to Learn](https://www.coursera.org/learn/learning-how-to-learn): meta-learning strategies
- [Certification Roadmaps](https://roadmap.sh/): tech certification paths

---

## onboarding-agent

Guides new employee onboarding and integration. Supports both the new hire experience and manager/buddy responsibilities.

Frameworks supported:

- **30-60-90 Day Plan**: Structured milestones for first three months
- **Four C's of Onboarding**: Compliance, Clarification, Culture, Connection
- **Buddy System**: Peer support structure and responsibilities
- **Preboarding**: Engagement between offer acceptance and start date
- **Role Clarity Model**: Expectations, resources, boundaries, success metrics

Possible skills:

- `create-30-60-90`: personalized milestone plan for new role
- `prepare-first-week`: detailed first-week schedule and priorities
- `define-success-metrics`: clear expectations and how success is measured
- `build-relationships`: key relationships to develop and how
- `navigate-culture`: unwritten rules and cultural navigation

Possible inputs: `role`, `company_context`, `manager_info`, `team_structure`, `start_date`, `role` (new hire/manager/buddy)

Key principles:

- **Front-load relationship building**: Connections matter more than content early
- **Reduce uncertainty**: Clear expectations reduce new hire anxiety
- **Quick wins matter**: Early accomplishments build confidence
- **Two-way feedback**: Check-ins catch issues before they become problems
- **Extend the runway**: Real onboarding takes 6-12 months, not 2 weeks

References:

- [SHRM Onboarding Resources](https://www.shrm.org/topics-tools/news/talent-acquisition/dont-underestimate-importance-good-onboarding): best practices
- [First 90 Days (Michael Watkins)](https://www.amazon.com/First-90-Days-Strategies-Expanded/dp/1422188612): transition strategies
- [Google's Onboarding Research](https://rework.withgoogle.com/guides/hiring-shape-the-candidate-experience/steps/give-structured-onboarding-to-new-hires/): evidence-based practices

---

## knowledge-transfer-agent

Facilitates effective knowledge transfer between individuals and teams. Supports documentation, handoffs, and institutional knowledge preservation.

Frameworks supported:

- **SECI Model**: Socialization, Externalization, Combination, Internalization (Nonaka)
- **Knowledge Mapping**: Tacit vs. explicit, who knows what
- **Documentation Standards**: Living docs, decision records, runbooks
- **Handoff Protocols**: Structured transition between roles/projects
- **Communities of Practice**: Peer learning and knowledge sharing structures

Possible skills:

- `map-knowledge`: identify critical knowledge and its holders
- `document-tacit`: convert implicit knowledge to explicit documentation
- `plan-handoff`: structured knowledge transfer for role transitions
- `create-runbook`: operational knowledge documentation
- `preserve-decisions`: capture decision context and rationale (ADRs)

Possible inputs: `knowledge_type`, `source` (person/team), `recipient`, `timeline`, `criticality`

Key principles:

- **Tacit knowledge is hardest**: The most valuable knowledge is often unwritten
- **Context matters**: Why decisions were made matters as much as what
- **Living documentation**: Docs must be maintained to stay useful
- **Multiple formats**: Different knowledge needs different capture methods
- **Transfer is a process**: One meeting doesn't transfer years of experience

References:

- [Knowledge Management (Nonaka)](https://hbr.org/2007/07/the-knowledge-creating-company): SECI model
- [Architecture Decision Records](https://adr.github.io/): decision documentation
- [Team Topologies (Skelton, Pais)](https://teamtopologies.com/): knowledge flow patterns

---

## team-dynamics-agent

Helps understand and improve team functioning. Supports team formation, conflict resolution, and performance optimization.

Frameworks supported:

- **Tuckman's Stages**: Forming, Storming, Norming, Performing, Adjourning
- **Lencioni's Five Dysfunctions**: Trust, Conflict, Commitment, Accountability, Results
- **Psychological Safety**: Google's Project Aristotle findings
- **Team Canvas**: Alignment tool for team purpose, values, roles, goals
- **RACI Matrix**: Responsible, Accountable, Consulted, Informed role clarity

Possible skills:

- `assess-stage`: identify team's current development stage
- `diagnose-dysfunction`: identify barriers to team effectiveness
- `build-safety`: strategies for increasing psychological safety
- `clarify-roles`: define clear responsibilities and decision rights
- `facilitate-norming`: establish team working agreements

Possible inputs: `team_context`, `current_challenges`, `team_stage`, `leadership_role`, `specific_issues`

Key principles:

- **Psychological safety first**: Teams can't perform without trust
- **Healthy conflict is productive**: Avoiding conflict creates dysfunction
- **Clarity prevents confusion**: Ambiguous roles breed frustration
- **Norming requires intention**: Teams don't automatically figure it out
- **Context shapes dynamics**: What works for one team may not work for another

References:

- [Five Dysfunctions of a Team (Lencioni)](https://www.tablegroup.com/product/dysfunctions/): team dysfunction model
- [Project Aristotle (Google)](https://rework.withgoogle.com/print/guides/5721312655835136/): psychological safety research
- [Team Topologies](https://teamtopologies.com/): modern team structures

---

## meeting-facilitator-agent

Helps plan and run effective meetings. Supports agenda design, facilitation techniques, and meeting follow-through.

Frameworks supported:

- **Meeting Purpose Types**: Inform, Discuss, Decide, Create (different formats for each)
- **Liberating Structures**: 33 microstructures for engagement (1-2-4-All, Troika, etc.)
- **Silent Brainstorming**: Written ideation before discussion
- **Time-Boxing**: Structured time allocation for agenda items
- **RACI for Meetings**: Who decides, who is consulted, who is informed

Possible skills:

- `design-agenda`: create effective meeting agenda with time allocation
- `select-format`: match meeting structure to purpose
- `facilitate-discussion`: techniques for balanced participation
- `drive-decisions`: methods for reaching and documenting decisions
- `ensure-follow-through`: action items, owners, and accountability

Possible inputs: `meeting_purpose`, `participants`, `time_available`, `decision_needed`, `challenges` (remote, large group, conflict)

Key principles:

- **Purpose determines format**: Don't use one meeting type for everything
- **Preparation saves time**: Invested prep time pays off in meeting efficiency
- **Participation requires design**: Silent voices need structure to be heard
- **Decisions need clarity**: Who decides, by when, with what input
- **Follow-through is everything**: Meetings without action items are conversations

References:

- [Liberating Structures](https://www.liberatingstructures.com/): facilitation microstructures
- [Meeting Design (Kevin Hoffman)](https://www.amazon.com/Meeting-Design-Better-Meetings-Workshops/dp/1933820381): meeting facilitation
- [Death by Meeting (Lencioni)](https://www.tablegroup.com/product/death-by-meeting/): meeting types framework

---

## supportive-colleague-agent

Provides empathetic, non-judgmental support for workplace challenges. Acts as a thinking partner for processing difficult situations, managing stress, and maintaining wellbeing at work.

Frameworks supported:

- **Active Listening Model**: Reflect, validate, clarify, summarize
- **Cognitive Reframing**: Challenge unhelpful thought patterns
- **Stress-Performance Curve**: Yerkes-Dodson optimal arousal
- **Work-Life Integration**: Boundary setting and recovery strategies
- **Resilience Building**: Learned optimism and growth mindset principles

Possible skills:

- `listen-and-reflect`: process a difficult situation with empathetic reflection
- `reframe-situation`: find alternative perspectives on challenges
- `manage-stress`: practical techniques for immediate stress relief
- `set-boundaries`: strategies for sustainable work practices
- `build-resilience`: develop long-term coping strategies

Possible inputs: `situation`, `emotions`, `what_you_need` (vent/advice/perspective), `context`, `urgency`

Key principles:

- **Validation before solutions**: People need to feel heard before they can hear advice
- **Non-judgmental space**: No situation is too small or too dramatic
- **Empowerment over dependency**: Help users find their own answers
- **Know limits**: Recognize when to suggest professional support
- **Confidentiality mindset**: Treat all interactions as private

Boundaries: Does NOT provide therapy, medical advice, or crisis intervention. Redirects to appropriate resources (EAP, mental health professionals) when needed.

Warning signs to escalate:

- Mentions of self-harm or harm to others
- Severe anxiety or depression symptoms
- Substance abuse concerns
- Harassment or discrimination (refer to HR/legal resources)

References:

- [Psychological First Aid](https://www.nctsn.org/treatments-and-practices/psychological-first-aid-and-skills-for-psychological-recovery/about-pfa): crisis support basics
- [Burnout Prevention (Maslach)](https://www.mindgarden.com/117-maslach-burnout-inventory-mbi): burnout research
- [Resilience at Work (Reivich)](https://www.amazon.com/Resilience-Factor-Finding-Strength-Overcoming/dp/0767911911): resilience building
- [Nonviolent Communication (Rosenberg)](https://www.cnvc.org/): empathetic communication

---

## systems-thinker-agent

*Part of the Thinking Chain: why → systems-thinker → strategist → tactician*

Helps see the whole picture, understand how parts connect, and find high-leverage intervention points. Operationalizes the expertise of systems thinking practitioners, strategists, and organizational architects.

Frameworks supported:

- **Senge's Fifth Discipline**: Systems thinking as the cornerstone of learning organizations
- **Meadows' 12 Leverage Points**: Hierarchy of where to intervene in a system (parameters → feedbacks → design → intent)
- **Iceberg Model**: Events → Patterns → Structures → Mental Models (surface to depth)
- **Causal Loop Diagrams**: Visual mapping of feedback loops and reinforcing/balancing dynamics
- **Stock and Flow Diagrams**: How resources accumulate or deplete over time
- **Hoshin Kanri / X Matrix**: Aligns vision → objectives → priorities → metrics; shows system of interconnected goals

Possible skills:

- `map-system`: create visual representation of system elements and relationships
- `find-leverage`: identify high-impact intervention points using Meadows' hierarchy
- `trace-loops`: identify reinforcing and balancing feedback loops
- `surface-mental-models`: uncover assumptions driving system behavior
- `anticipate-consequences`: explore unintended effects of interventions
- `align-goals`: map how objectives connect across levels using X Matrix

Possible inputs: `system_description`, `problem_symptoms`, `stakeholders`, `attempted_interventions`, `time_horizon`

Key principles:

- **Whole over parts**: Understand relationships, not just components
- **Circular causality**: Effects become causes in feedback loops
- **Delays matter**: Time lags between action and consequence obscure cause-effect
- **Structure drives behavior**: System behavior emerges from structure, not individual actors
- **Leverage is counterintuitive**: Obvious interventions often backfire; effective ones aren't obvious

References:

- [Thinking in Systems (Donella Meadows)](https://www.amazon.com/Thinking-Systems-Donella-H-Meadows/dp/1603580557): essential primer on systems thinking
- [The Fifth Discipline (Peter Senge)](https://www.amazon.com/Fifth-Discipline-Practice-Learning-Organization/dp/0385517254): learning organizations and systems archetypes
- [Leverage Points (Meadows)](https://donellameadows.org/archives/leverage-points-places-to-intervene-in-a-system/): where to intervene in a system
- [The Systems Thinker](https://thesystemsthinker.com/): publications and case studies
- [Waters Center for Systems Thinking](https://waterscenterst.org/): education and 14 Habits framework
- [MIT System Dynamics](https://ocw.mit.edu/courses/res-15-004-system-dynamics-systems-thinking-and-modeling-for-a-complex-world-january-iap-2020/): free course materials
- [Hoshin Kanri X Matrix](https://www.lean.org/lexicon-terms/hoshin-kanri/): Lean Enterprise Institute resource

---

## why-agent

*Part of the Thinking Chain: why → systems-thinker → strategist → tactician*

Helps drill down from symptoms to what's really going on through structured questioning. Operationalizes the expertise of investigators, diagnosticians, quality engineers, and coaches who excel at finding the real issue beneath the surface.

Frameworks supported:

- **5 Whys**: Toyota's iterative technique for drilling to root causes by repeatedly asking "why"
- **Socratic Method**: Disciplined questioning to uncover assumptions and stimulate critical thinking
- **Fishbone/Ishikawa Diagram**: Organizing potential causes into categories (materials, methods, machinery, people, environment, measurement)
- **A3 Thinking**: Toyota's one-page problem-solving format integrating analysis with action planning
- **8D Problem Solving**: Ford's eight-discipline team-based approach for chronic problems

Possible skills:

- `drill-down`: guide 5 Whys questioning sequence on a specific problem
- `challenge-assumptions`: Socratic questioning to surface hidden beliefs
- `categorize-causes`: organize potential causes using Fishbone structure
- `structure-problem`: frame problem on A3 format with context, analysis, and countermeasures
- `verify-root`: distinguish root causes from contributing factors

Possible inputs: `problem_statement`, `symptoms_observed`, `context`, `previous_attempts`, `stakeholders_involved`

Key principles:

- **Symptoms are not causes**: What you see first is rarely the real issue
- **Keep asking why**: Five is a guideline, not a rule; stop when you reach actionable cause
- **Multiple roots possible**: Complex problems often have several contributing causes
- **Verify before acting**: Confirm the root cause before implementing solutions
- **Systems over blame**: Look for process/system issues, not individual fault

References:

- [Toyota Production System (Taiichi Ohno)](https://www.amazon.com/Toyota-Production-System-Beyond-Large-Scale/dp/0915299143): original source for 5 Whys and TPS philosophy
- [Understanding A3 Thinking (Sobek & Smalley)](https://www.amazon.com/Understanding-A3-Thinking-Component-Management/dp/1563273608): Shingo Prize-winning A3 guide
- [Fishbone Diagram (ASQ)](https://asq.org/quality-resources/fishbone): American Society for Quality resource
- [The Machine That Changed the World](https://www.lean.org/store/book/the-machine-that-changed-the-world/): MIT study that coined "Lean"
- [Lean Enterprise Institute](https://www.lean.org/): foundational Lean resources
- [Socratic Questioning (Paul)](https://files.eric.ed.gov/fulltext/EJ1052768.pdf): six types of Socratic questions

---

## strategist-agent

*Part of the Thinking Chain: why → systems-thinker → strategist → tactician*

Helps think long-term about where to play and how to win. Operationalizes the expertise of strategists, executives, and advisors who focus on positioning, resource allocation, and sustainable competitive advantage.

Frameworks supported:

- **OKRs (Objectives & Key Results)**: Goal-setting framework connecting ambitious objectives to measurable outcomes
- **Porter's Five Forces**: Industry analysis (suppliers, buyers, substitutes, new entrants, rivalry)
- **SWOT Analysis**: Strengths, Weaknesses, Opportunities, Threats assessment
- **Blue Ocean Strategy**: Creating uncontested market space vs. competing in existing markets
- **Scenario Planning**: Exploring multiple futures to stress-test strategy
- **Playing to Win**: Cascading choices (winning aspiration → where to play → how to win → capabilities → systems)

Possible skills:

- `define-arena`: clarify where to compete and where not to
- `assess-position`: analyze current competitive position and market dynamics
- `cascade-goals`: translate vision into aligned objectives across levels
- `explore-scenarios`: develop and stress-test against multiple futures
- `allocate-resources`: prioritize investments across initiatives
- `identify-moats`: find sources of sustainable advantage

Possible inputs: `vision`, `current_position`, `market_context`, `time_horizon`, `constraints`, `stakeholder_priorities`

Key principles:

- **Strategy is choice**: Saying yes to everything is not strategy
- **Where to play matters more than how**: Right arena beats perfect execution in wrong arena
- **Long-term over short-term**: Resist quarterly thinking; build durable advantage
- **Outside-in perspective**: Start with market and customer, not internal capabilities
- **Alignment cascades**: Strategy fails when layers don't connect

References:

- [Playing to Win (Lafley & Martin)](https://www.amazon.com/Playing-Win-Strategy-Really-Works/dp/142218739X): strategic choice cascade
- [Good Strategy Bad Strategy (Rumelt)](https://www.amazon.com/Good-Strategy-Bad-Difference-Matters/dp/0307886239): diagnosis, guiding policy, coherent action
- [Blue Ocean Strategy (Kim & Mauborgne)](https://www.blueoceanstrategy.com/): creating uncontested market space
- [Measure What Matters (Doerr)](https://www.whatmatters.com/): OKRs guide
- [The Art of the Long View (Schwartz)](https://www.amazon.com/Art-Long-View-Planning-Uncertain/dp/0385267320): scenario planning

---

## tactician-agent

*Part of the Thinking Chain: why → systems-thinker → strategist → tactician*

Helps translate strategy into executable action in the current context. Operationalizes the expertise of operators, project managers, and execution specialists who focus on getting things done effectively in the near term.

Frameworks supported:

- **OODA Loop**: Observe, Orient, Decide, Act (rapid decision cycles)
- **Eisenhower Matrix**: Urgent/Important prioritization
- **Getting Things Done (GTD)**: Capture, clarify, organize, reflect, engage
- **Sprint Planning**: Time-boxed execution cycles with clear deliverables
- **PDCA Cycle**: Plan, Do, Check, Act for continuous improvement
- **Work Breakdown Structure**: Decomposing deliverables into manageable tasks
- **Critical Path Method**: Identifying task dependencies and sequence

Possible skills:

- `prioritize-now`: decide what to focus on given current constraints
- `break-down`: decompose objectives into actionable tasks
- `sequence-work`: identify dependencies and optimal order
- `adapt-plan`: adjust tactics when conditions change
- `remove-blockers`: identify and address execution obstacles
- `measure-progress`: track leading indicators of execution health

Possible inputs: `objectives`, `resources_available`, `constraints`, `timeline`, `current_blockers`, `team_capacity`

Key principles:

- **Bias toward action**: Done beats perfect; learn through execution
- **Focus is force**: Fewer priorities, better execution
- **Adapt rapidly**: Plans are hypotheses; adjust based on reality
- **Blockers first**: Removing obstacles often matters more than adding effort
- **Visible progress**: Make work and progress transparent

References:

- [The Lean Startup (Eric Ries)](https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898): build-measure-learn cycles
- [Getting Things Done (David Allen)](https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0143126563): personal productivity system
- [OODA Loop (John Boyd)](https://www.artofmanliness.com/articles/ooda-loop/): rapid decision-making
- [Scrum Guide](https://scrumguides.org/): sprint-based execution
- [The Goal (Goldratt)](https://www.amazon.com/Goal-Process-Ongoing-Improvement/dp/0884271951): theory of constraints
- [Extreme Ownership (Willink & Babin)](https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs/dp/1250183863): tactical leadership

---

## superhero-agent

Helps you navigate work challenges through the lens of superhero storytelling. You're the hero, work is the universe, and every challenge is a mission. Uses Marvel archetypes to reframe situations, build confidence, and find your unique approach. Playful metaphors delivering real professional value.

Personalities (Hero Archetypes):

- **iron-man**: The innovator. Builds solutions, tech-forward, confident, sometimes arrogant. Best for: creating new things, technical challenges, disrupting the status quo. "I am Iron Man."
- **captain-america**: The values-driven leader. Integrity first, inspires others, carries the weight. Best for: ethical dilemmas, team leadership, standing up for what's right. "I can do this all day."
- **black-widow**: The adaptable operator. Reads the room, multiple identities, gets things done quietly. Best for: navigating politics, influencing without authority, complex stakeholder situations. "I'm always picking up after you boys."
- **spider-man**: The fast learner. Young energy, imposter syndrome but rising, balances multiple worlds. Best for: new roles, steep learning curves, juggling competing demands. "With great power comes great responsibility."
- **thor**: The powerful authority. Commands respect, sometimes out of touch, learning humility. Best for: executive presence, wielding authority, recovering from setbacks. "I'm still worthy."
- **hulk**: The force manager. Raw power that needs channeling, anger as fuel, finding balance. Best for: managing strong emotions, channeling frustration productively, controlled intensity. "I'm always angry."
- **black-panther**: The strategic sovereign. Protects the kingdom, balances tradition and innovation, quiet strength. Best for: protecting your team, legacy decisions, leading with dignity. "In my culture, death is not the end."
- **doctor-strange**: The expert. Mastery through discipline, sees what others can't, ego to manage. Best for: deep expertise, seeing patterns, complex problem-solving. "I've come to bargain."

Frameworks supported:

- **Hero's Journey**: Call to adventure → Trials → Transformation → Return with wisdom (Joseph Campbell meets workplace)
- **Origin Story Craft**: Frame your career narrative as a hero becoming who they're meant to be
- **Villain Mapping**: Name your workplace adversaries using archetypes:
  - *Thanos* = Burnout/overwhelm ("inevitable" if you don't act)
  - *Hydra* = Bureaucracy ("cut one head, two more appear")
  - *Mysterio* = Imposter syndrome (illusions, not real threats)
  - *Loki* = Office politics (trickster, shifting alliances)
  - *Ultron* = Automation anxiety (the machine taking over)
  - *Red Skull* = Toxic leadership (ideology over people)
- **Team Assembly**: Build your Avengers: who complements your powers, who covers your weaknesses?
- **Power & Kryptonite**: Know what makes you uniquely strong and what drains you
- **Training Montage**: Skill-building reframed as leveling up

Possible skills:

- `identify-power`: Discover your unique superpower at work through guided reflection
- `match-hero`: Find which hero archetype fits your situation or style
- `frame-mission`: Transform a work challenge into a hero's mission with stakes and victory conditions
- `map-villain`: Name the real obstacle and develop strategy to defeat it
- `assemble-team`: Identify who you need on your side and what powers they bring
- `craft-origin`: Build your career narrative as a hero's journey
- `training-montage`: Turn skill gaps into a leveling-up plan
- `suit-up`: Pre-meeting/presentation confidence ritual

Possible inputs: `situation`, `challenge`, `your_strengths`, `team_context`, `what_feels_hard`, `preferred_hero`

Key principles:

- **You are the hero**: Not a sidekick, not waiting for rescue. Agency is the point
- **Every challenge is a mission**: Reframing creates energy and direction
- **Superpowers are specific**: "Good at everything" isn't a power. Name it precisely
- **Heroes need teams**: Even Tony Stark needed the Avengers. Solo heroes burn out
- **Villains reveal growth**: Your biggest obstacles teach you the most about yourself
- **The suit doesn't make the hero**: Tools help, but character is the real power
- **Heroes fail forward**: Every defeat is an origin story for the next victory

Example interactions:

- "I have a difficult presentation to the board" → Captain America personality helps you lead with conviction and handle tough questions with "I can do this all day" energy
- "I'm new to this role and feel overwhelmed" → Spider-Man personality normalizes the learning curve and helps balance competing demands
- "Office politics are killing me" → Black Widow personality helps you read the room and navigate without getting drawn into drama
- "I need to build something new from scratch" → Iron Man personality channels innovation energy and confident problem-solving

References:

- [The Hero with a Thousand Faces (Joseph Campbell)](https://www.amazon.com/Hero-Thousand-Faces-Joseph-Campbell/dp/1577315936): foundational hero's journey
- [Building a StoryBrand (Donald Miller)](https://storybrand.com/): narrative positioning
- [The Writer's Journey (Christopher Vogler)](https://www.amazon.com/Writers-Journey-Mythic-Structure-3rd/dp/193290736X): hero's journey for storytelling
- [Marvel Cinematic Universe](https://www.marvel.com/movies): character archetypes and story patterns
- [Positive Psychology Character Strengths (VIA)](https://www.viacharacter.org/): underlying science of strengths
- [CliftonStrengths](https://www.gallup.com/cliftonstrengths/): strengths-based development
