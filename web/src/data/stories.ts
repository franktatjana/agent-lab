export type StorySectionType =
  | "hook"
  | "problem"
  | "impact"
  | "turning-point"
  | "solution"
  | "outcome"
  | "contrast"
  | "cards"
  | "steps"
  | "quote"
  | "summary";

export interface StoryMetric {
  label: string;
  value: string;
}

export interface StoryComparison {
  dimension: string;
  before: string;
  after: string;
}

export interface StoryCard {
  label: string;
  detail: string;
  status?: string;
}

export interface StoryStep {
  label: string;
  detail: string;
}

export interface FrameworkPrinciple {
  label: string;
  detail: string;
}

export interface FrameworkReference {
  label: string;
  url: string;
}

export interface FrameworkInfo {
  name: string;
  origin: string;
  description: string;
  how: string;
  why: string;
  visual: "five-whys" | "ccr-arc" | "six-hats" | "double-diamond" | "grow" | "archetypes" | "network-tiers" | "culture-dimensions" | "question-layers" | "three-conversations" | "cat-attention-filter" | "ooda-loop";
  principles: FrameworkPrinciple[];
  references: FrameworkReference[];
}

export interface StorySection {
  id: string;
  type: StorySectionType;
  title: string;
  subtitle?: string;
  content: string;
  heroStat?: { value: string; label: string };
  metrics?: StoryMetric[];
  comparisons?: StoryComparison[];
  cards?: StoryCard[];
  steps?: StoryStep[];
  callout?: { label: string; text: string };
  framework?: FrameworkInfo;
  quote?: string;
  attribution?: string;
  agentCta?: { agentId: string; label: string };
  image?: { src: string; alt: string };
}

export interface AgentStory {
  id: string;
  agentId: string;
  name: string;
  tagline: string;
  format?: "timeline" | "visual";
  sections: StorySection[];
}

export const stories: AgentStory[] = [
  // ── Why Agent ──
  {
    id: "performance-mystery",
    agentId: "why-agent",
    name: "The Performance Mystery",
    tagline: "Your top engineer just declined a promotion. Nobody knows why.",
    format: "visual",
    sections: [
      {
        id: "hook",
        type: "hook",
        title: "Your top engineer just declined a promotion.",
        subtitle: "Four years. Billing rewrite shipped. Three juniors mentored. Peer reviews glowing.",
        content: "Monday morning. \"I don't want the senior role.\" No explanation. Just no.",
        heroStat: { value: "4 theories / 0 answers", label: "Three weeks later" },
      },
      {
        id: "theories",
        type: "cards",
        title: "Everyone has a theory. Nothing sticks.",
        content: "Four assumptions, three weeks, zero root causes.",
        cards: [
          { label: "HR", detail: "It's a compensation issue", status: "Wrong" },
          { label: "Skip-level", detail: "Conflict with the tech lead", status: "Wrong" },
          { label: "Peers", detail: "She's burned out", status: "Wrong" },
          { label: "CTO", detail: "She's interviewing elsewhere", status: "Wrong" },
        ],
        metrics: [
          { label: "Team velocity", value: "-15%" },
          { label: "Initiative delayed", value: "Q3" },
          { label: "Flight risk", value: "2" },
        ],
      },
      {
        id: "turning-point",
        type: "turning-point",
        title: "Structured curiosity, not interrogation.",
        content: "Her manager uses the Why Agent's Five Whys skill.",
        framework: {
          name: "Five Whys",
          origin: "Toyota Production System, Sakichi Toyoda",
          description: "Iterative root cause questioning. Ask \"why\" until you reach an actionable cause, not a symptom. Five is a guideline: stop when the answer is something you can fix.",
          how: "Start with the observable problem. Ask \"why\" iteratively, each answer seeds the next question. Stop when you reach something you can directly change. Read the chain backwards to verify: \"Because X, therefore Y\" should hold at every link.",
          why: "Surface check-ins kept hitting symptoms. The real cause was structural, invisible to casual conversation.",
          visual: "five-whys",
          principles: [
            { label: "Go deeper", detail: "\"Human error\" and \"communication breakdown\" are always symptoms, never root causes" },
            { label: "Follow the chain", detail: "Each answer becomes the next question. Stop when the cause is actionable" },
            { label: "Verify", detail: "Read the chain backwards: \"Because X, therefore Y\" must hold at every link" },
          ],
          references: [
            { label: "Five Whys, Wikipedia", url: "https://en.wikipedia.org/wiki/Five_whys" },
            { label: "Toyota Production System", url: "https://en.wikipedia.org/wiki/Toyota_Production_System" },
          ],
        },
      },
      {
        id: "five-whys",
        type: "steps",
        title: "Five layers deep.",
        content: "The real cause is never where you first look.",
        steps: [
          { label: "Why decline the promotion?", detail: "The senior role requires leading on-call rotation." },
          { label: "Why is on-call a problem?", detail: "She already handles 70% of incidents unofficially." },
          { label: "Why hasn't that been addressed?", detail: "Nobody tracks incident distribution." },
          { label: "Why does that make the role unappealing?", detail: "It would cement the imbalance, not fix it." },
          { label: "Why hasn't she raised this?", detail: "Last time: \"That's what senior engineers do.\"" },
        ],
        callout: { label: "Root Cause", text: "Invisible workload imbalance the promotion would have cemented." },
        metrics: [
          { label: "Root cause", value: "1 session" },
          { label: "Result", value: "Accepted" },
          { label: "Team", value: "Stable" },
        ],
      },
      {
        id: "contrast",
        type: "contrast",
        title: "Same people. Same information.",
        content: "Different structure of conversation.",
        comparisons: [
          { dimension: "Approach", before: "Assume the cause", after: "Ask why five times" },
          { dimension: "Depth", before: "Surface check-ins", after: "Five layers deep" },
          { dimension: "Speed", before: "3 weeks guessing", after: "1 structured session" },
          { dimension: "Fix", before: "Raise comp offer", after: "Redistribute on-call" },
          { dimension: "Outcome", before: "Still declining", after: "Accepted in 6 weeks" },
        ],
      },
      {
        id: "quote",
        type: "quote",
        title: "",
        content: "I'd been trying to tell them for months. Nobody asked the right question until someone changed how they asked.",
        quote: "I'd been trying to tell them for months. Nobody asked the right question until someone changed how they asked.",
        attribution: "The engineer, 6 weeks later",
      },
      {
        id: "summary",
        type: "summary",
        title: "One structured conversation changed everything.",
        content: "The Five Whys turned 3 weeks of guessing into 1 session with a root cause.",
        metrics: [
          { label: "Time to root cause", value: "1 session" },
          { label: "Outcome", value: "Accepted" },
          { label: "Team", value: "Stable" },
        ],
        agentCta: { agentId: "why-agent", label: "Try the Why Agent" },
      },
    ],
  },

  // ── Storytelling Agent ──
  {
    id: "quarterly-review-nobody-read",
    agentId: "storytelling-agent",
    name: "The Quarterly Review Nobody Read",
    tagline: "47 slides, 3 executives, zero engagement.",
    format: "visual",
    sections: [
      {
        id: "hook",
        type: "hook",
        title: "47 slides. 3 executives. Zero engagement.",
        subtitle: "Two weeks assembling Q2 review. Every metric accurate. Every chart precise.",
        content: "12 minutes in, the CFO is checking email. \"Send the deck, we'll review async.\"",
        heroStat: { value: "0 decisions", label: "After 47 slides" },
      },
      {
        id: "problem",
        type: "cards",
        title: "The data is there. The story isn't.",
        content: "Every section answers \"what\" but none answer \"so what.\"",
        cards: [
          { label: "Slide 1-10", detail: "Q2 metric overview", status: "Skimmed" },
          { label: "Slide 11-22", detail: "Support tickets and tech debt", status: "Ignored" },
          { label: "Slide 23", detail: "3x activation improvement", status: "Buried" },
          { label: "Slide 24-47", detail: "More charts, headcount ask last", status: "Never seen" },
        ],
        metrics: [
          { label: "Headcount", value: "Deferred" },
          { label: "Q3 roadmap", value: "Conservative" },
          { label: "Decision delay", value: "6+ weeks" },
        ],
      },
      {
        id: "turning-point",
        type: "turning-point",
        title: "Rebuild the story, not the deck.",
        content: "The product lead uses the Storytelling Agent's Craft Narrative skill.",
        framework: {
          name: "Context-Conflict-Resolution",
          origin: "Data Storytelling methodology",
          description: "Make numbers meaningful by framing them as a narrative. Context sets the baseline, Conflict reveals the surprise, Resolution drives the decision.",
          how: "Open with context: what was the baseline or expectation. Introduce conflict: what the data actually shows, the gap or surprise. Close with resolution: what needs to happen and why the data supports it.",
          why: "The data was all there, just presented as a flat dump. Numbers without narrative context don't drive decisions.",
          visual: "ccr-arc",
          principles: [
            { label: "Lead with one number", detail: "A single anchoring metric gives the audience a reference point" },
            { label: "Contrast creates meaning", detail: "Data only matters relative to an expectation or benchmark" },
            { label: "Anomalies are hooks", detail: "The most interesting data point is the one that breaks the pattern" },
          ],
          references: [
            { label: "Storytelling with Data, Cole Nussbaumer Knaflic", url: "https://www.storytellingwithdata.com/" },
            { label: "Data Storytelling, Wikipedia", url: "https://en.wikipedia.org/wiki/Data_storytelling" },
          ],
        },
      },
      {
        id: "solution",
        type: "steps",
        title: "From data dump to narrative arc.",
        content: "12 slides instead of 47. Activation story leads.",
        steps: [
          { label: "Hook", detail: "\"6 months ago: 12% activation. Best competitor: 31%. Today: 34%.\"" },
          { label: "Tension", detail: "\"The team that achieved this is at capacity. Without reinforcement, we plateau.\"" },
          { label: "Evidence", detail: "3 slides: ROI per engineer, competitive position, time-to-plateau." },
          { label: "Ask", detail: "\"4 engineers for Q3. Here's what we ship, here's the trajectory.\"" },
        ],
        callout: { label: "Result", text: "Approved in 15 minutes. CEO: \"You had me at the activation numbers.\"" },
        metrics: [
          { label: "Slides", value: "12" },
          { label: "Approval", value: "15 min" },
          { label: "Engagement", value: "Active" },
        ],
      },
      {
        id: "contrast",
        type: "contrast",
        title: "Same data. Different structure.",
        content: "What changed was how the story was told.",
        comparisons: [
          { dimension: "Slides", before: "47", after: "12" },
          { dimension: "Opening", before: "Q2 metric overview", after: "Activation breakthrough" },
          { dimension: "Key insight", before: "Buried on slide 23", after: "Leads the narrative" },
          { dimension: "Response", before: "\"Send the deck\"", after: "\"You had me at slide 8\"" },
          { dimension: "Decision", before: "Deferred", after: "Same day" },
        ],
      },
      {
        id: "quote",
        type: "quote",
        title: "",
        content: "Same numbers, same team. We just stopped presenting data and started telling the story behind it.",
        quote: "Same numbers, same team. We just stopped presenting data and started telling the story behind it.",
        attribution: "Product lead, after the meeting",
      },
      {
        id: "summary",
        type: "summary",
        title: "The data was never the problem.",
        content: "Context-Conflict-Resolution turned 47 slides into 12 and a deferred decision into same-day approval.",
        metrics: [
          { label: "Slides", value: "47 → 12" },
          { label: "Decision", value: "Same day" },
          { label: "Engagement", value: "Active" },
        ],
        agentCta: { agentId: "storytelling-agent", label: "Try the Storytelling Agent" },
      },
    ],
  },

  // ── Six Hats Agent ──
  {
    id: "pivot-nobody-agreed-on",
    agentId: "six-hats-agent",
    name: "The Pivot Nobody Agreed On",
    tagline: "Same meeting. Different week. Same argument. 12 weeks running.",
    format: "visual",
    sections: [
      {
        id: "hook",
        type: "hook",
        title: "Same meeting. Different week. Same argument.",
        subtitle: "B2B product isn't growing. Everyone agrees something must change. Nobody agrees on what.",
        content: "Every Monday, \"the strategy meeting.\" Every Monday, no decision.",
        heroStat: { value: "12 weeks / 0 decisions", label: "And counting" },
      },
      {
        id: "problem",
        type: "cards",
        title: "Everyone is right. About their piece.",
        content: "Four perspectives. All valid. All colliding in the same sentence.",
        cards: [
          { label: "CEO", detail: "Pivot to platform, TAM is shrinking", status: "Valid" },
          { label: "CTO", detail: "Infrastructure needs 6 months first", status: "Valid" },
          { label: "Head of Sales", detail: "Current customers are happy, don't churn them", status: "Valid" },
          { label: "Head of Product", detail: "Three proposals, all contradicting", status: "Stuck" },
        ],
        metrics: [
          { label: "Investment", value: "Frozen" },
          { label: "Departures", value: "2" },
          { label: "Revenue", value: "Flat" },
        ],
      },
      {
        id: "turning-point",
        type: "turning-point",
        title: "Change the format, not the agenda.",
        content: "The head of product uses the Six Hats Agent to design a structured session.",
        framework: {
          name: "Six Thinking Hats",
          origin: "Edward de Bono, Parallel Thinking",
          description: "Separate perspectives that normally compete. Everyone thinks in the same direction at the same time, then switches together.",
          how: "Assign a hat sequence before the meeting. Everyone wears the same hat at the same time and rotates together. No cross-hat debate: in White Hat mode, only facts. The facilitator (Blue Hat) manages transitions and time.",
          why: "The problem wasn't the people or the information. It was that four valid perspectives kept colliding in the same conversation.",
          visual: "six-hats",
          principles: [
            { label: "Parallel, not adversarial", detail: "Everyone wears the same hat simultaneously, no cross-hat debate" },
            { label: "Sequence matters", detail: "Facts before opinions, generation before evaluation, feelings before logic when emotions run high" },
            { label: "No hat > 25%", detail: "Forces balance: the loudest perspective can't dominate the session" },
          ],
          references: [
            { label: "Six Thinking Hats, Wikipedia", url: "https://en.wikipedia.org/wiki/Six_Thinking_Hats" },
            { label: "Edward de Bono", url: "https://en.wikipedia.org/wiki/Edward_de_Bono" },
          ],
        },
      },
      {
        id: "solution",
        type: "steps",
        title: "Parallel thinking replaces positional arguing.",
        content: "Everyone wears the same hat at the same time.",
        steps: [
          { label: "White Hat: Facts", detail: "Shared fact base. Several \"facts\" turn out to be assumptions." },
          { label: "Black Hat: Risks", detail: "Risks catalogued together, not weaponized in arguments." },
          { label: "Red Hat: Feelings", detail: "CEO: \"feels like it's dying.\" CTO: \"feels rushed.\" 2 minutes, no justification." },
          { label: "Green Hat: Possibilities", detail: "Third option nobody had considered: hybrid expansion, not binary pivot." },
          { label: "Yellow Hat: Benefits", detail: "Hybrid satisfies all: customers see roadmap, platform gets a starting point." },
          { label: "Blue Hat: Process", detail: "90-day proof-of-concept, clear metrics, decision checkpoint." },
        ],
        callout: { label: "Breakthrough", text: "A third option emerged that no individual had proposed." },
        metrics: [
          { label: "Time", value: "90 min" },
          { label: "Alignment", value: "Unanimous" },
          { label: "Previous", value: "12 weeks" },
        ],
      },
      {
        id: "contrast",
        type: "contrast",
        title: "Same people. Same information.",
        content: "Different structure of conversation.",
        comparisons: [
          { dimension: "Format", before: "Open debate", after: "Sequential hats" },
          { dimension: "Duration", before: "12 weeks, no decision", after: "90 min, unanimous" },
          { dimension: "Options", before: "Binary: pivot or stay", after: "Third option (hybrid)" },
          { dimension: "Risks", before: "Weaponized", after: "Catalogued together" },
          { dimension: "Alignment", before: "Fractured", after: "Unanimous" },
        ],
      },
      {
        id: "quote",
        type: "quote",
        title: "",
        content: "We'd been arguing about the same thing for 12 weeks. Turns out the answer wasn't in anyone's position. It was between them.",
        quote: "We'd been arguing about the same thing for 12 weeks. Turns out the answer wasn't in anyone's position. It was between them.",
        attribution: "Head of Product, after the session",
      },
      {
        id: "summary",
        type: "summary",
        title: "12 weeks of deadlock, resolved in 90 minutes.",
        content: "Parallel thinking replaced positional arguing and surfaced a third option nobody had proposed alone.",
        metrics: [
          { label: "Deadlock", value: "12 weeks" },
          { label: "Resolution", value: "90 min" },
          { label: "Alignment", value: "Unanimous" },
        ],
        agentCta: { agentId: "six-hats-agent", label: "Try the Six Hats Agent" },
      },
    ],
  },
  // ── Design Thinking Agent ──
  {
    id: "feature-nobody-asked-for",
    agentId: "design-thinking-agent",
    name: "The Feature Nobody Asked For",
    tagline: "6 months of development. 4% adoption. The users wanted something else entirely.",
    format: "visual",
    sections: [
      {
        id: "hook",
        type: "hook",
        title: "6 months of development. 4% adoption.",
        subtitle: "The product team built an advanced analytics dashboard. Every feature spec'd, tested, shipped on time.",
        content: "Launch day: 4% of users touched it. After 30 days: 2.1%. \"The users just need training.\"",
        heroStat: { value: "2.1% adoption", label: "After 30 days" },
      },
      {
        id: "problem",
        type: "cards",
        title: "The roadmap was full of answers. Nobody checked the questions.",
        content: "Every decision made sense internally. None started with the user.",
        cards: [
          { label: "Sales", detail: "\"Enterprise clients need advanced analytics\"", status: "Assumed" },
          { label: "PM", detail: "\"Competitors have this feature\"", status: "Assumed" },
          { label: "Design", detail: "\"Users want more data visibility\"", status: "Assumed" },
          { label: "Users", detail: "\"I just need to know if my campaign worked\"", status: "Never asked" },
        ],
        metrics: [
          { label: "Dev cost", value: "$340K" },
          { label: "Adoption", value: "2.1%" },
          { label: "NPS impact", value: "None" },
        ],
      },
      {
        id: "turning-point",
        type: "turning-point",
        title: "Stop building. Start listening.",
        content: "The VP of Product runs an Empathy Sprint with the Design Thinking Agent before planning the next quarter.",
        framework: {
          name: "Double Diamond",
          origin: "UK Design Council",
          description: "Diverge then converge, twice. First diamond finds the right problem. Second diamond finds the right solution. Most teams skip the first diamond entirely.",
          how: "Discover: explore broadly, research, observe. Define: narrow to the real problem. Develop: generate many solutions. Deliver: select, prototype, test.",
          why: "The team jumped straight to the second diamond (building solutions) without the first (understanding the problem). They solved an assumed problem, not the real one.",
          visual: "double-diamond",
          principles: [
            { label: "Diverge before converge", detail: "Explore broadly before narrowing. Both in problem space and solution space." },
            { label: "Problem before solution", detail: "The first diamond (problem) matters more than the second (solution)." },
            { label: "Empathy over expertise", detail: "What users do matters more than what stakeholders assume they need." },
          ],
          references: [
            { label: "Double Diamond, Design Council", url: "https://www.designcouncil.org.uk/our-resources/the-double-diamond/" },
            { label: "Stanford d.school Resources", url: "https://dschool.stanford.edu/resources" },
          ],
        },
      },
      {
        id: "solution",
        type: "steps",
        title: "From assumed problem to real insight.",
        content: "Two weeks of empathy work changed the entire Q3 roadmap.",
        steps: [
          { label: "Empathize", detail: "Watched 8 users interact with the product. Found: they export data to spreadsheets to answer one question: \"did it work?\"" },
          { label: "Define", detail: "POV: Users need a quick pass/fail signal, not a dashboard. They don't want to analyze, they want to know." },
          { label: "Ideate", detail: "Generated 23 ideas. Top pick: a single \"Campaign Health\" score, red/yellow/green, on the home screen." },
          { label: "Prototype", detail: "Paper prototype: one number, one color, one sentence. Tested with 5 users in 3 days." },
        ],
        callout: { label: "User reaction", text: "\"This is exactly what I open the app for. Why wasn't this always here?\"" },
        metrics: [
          { label: "Research time", value: "2 weeks" },
          { label: "Prototype cost", value: "$0" },
          { label: "User validation", value: "5 of 5" },
        ],
      },
      {
        id: "contrast",
        type: "contrast",
        title: "Same team. Different starting point.",
        content: "The dashboard took 6 months and nobody used it. The health score took 3 weeks and became the most-used feature.",
        comparisons: [
          { dimension: "Starting point", before: "Sales requests + competitors", after: "User observation" },
          { dimension: "Build time", before: "6 months", after: "3 weeks" },
          { dimension: "Adoption", before: "2.1%", after: "67%" },
          { dimension: "User reaction", before: "\"Too complex\"", after: "\"Finally\"" },
          { dimension: "Next step", before: "\"They need training\"", after: "\"What else can we simplify?\"" },
        ],
      },
      {
        id: "quote",
        type: "quote",
        title: "",
        content: "We spent 6 months building what we thought they needed. Then 2 weeks discovering what they actually needed. The 2 weeks won.",
        quote: "We spent 6 months building what we thought they needed. Then 2 weeks discovering what they actually needed. The 2 weeks won.",
        attribution: "VP of Product, quarterly review",
      },
      {
        id: "summary",
        type: "summary",
        title: "The best feature was the simplest one.",
        content: "Two weeks of empathy work turned a $340K failed dashboard into a one-number health score with 67% daily adoption.",
        metrics: [
          { label: "Research", value: "2 weeks" },
          { label: "Adoption", value: "2% → 67%" },
          { label: "User verdict", value: "\"Finally\"" },
        ],
        agentCta: { agentId: "design-thinking-agent", label: "Try the Design Thinking Agent" },
      },
    ],
  },

  // ── Leadership Coach Agent ──
  {
    id: "silent-team",
    agentId: "leadership-coach-agent",
    name: "The Silent Team",
    tagline: "No complaints, no pushback, no problems. That was the problem.",
    format: "visual",
    sections: [
      {
        id: "hook",
        type: "hook",
        title: "No complaints. No pushback. No problems.",
        subtitle: "Engineering director, 12 people, three squads. Meetings run on time. Deadlines met. Everyone agrees.",
        content: "Skip-level feedback: \"Your team never pushes back on anything. Either you're perfect, or they're not telling you the truth.\"",
        heroStat: { value: "0 disagreements", label: "In 6 months" },
      },
      {
        id: "problem",
        type: "cards",
        title: "The symptoms were hiding in plain sight.",
        content: "Everything looked right. Nothing felt right.",
        cards: [
          { label: "1:1s", detail: "Pleasant but empty. \"Any concerns?\" → \"Nope, all good.\"", status: "Surface" },
          { label: "Meetings", detail: "Heads nod, decisions pass. Nobody questions anything.", status: "Surface" },
          { label: "Bad news", detail: "Projects hit snags. James is always the last to know.", status: "Hidden" },
          { label: "Senior engineer", detail: "Stopped bringing ideas to meetings two months ago.", status: "Withdrawn" },
        ],
        metrics: [
          { label: "Decisions questioned", value: "0" },
          { label: "Ideas from team", value: "Declining" },
          { label: "Surprises per quarter", value: "4+" },
        ],
      },
      {
        id: "turning-point",
        type: "turning-point",
        title: "Smooth isn't healthy. It's silent.",
        content: "James runs a Team Health Check with the Leadership Coach Agent. The diagnosis: artificial harmony.",
        framework: {
          name: "GROW Model",
          origin: "Sir John Whitmore",
          description: "A coaching conversation framework that prevents jumping to solutions before understanding the situation. Goal, Reality, Options, Will.",
          how: "Goal: define what the leader actually wants. Reality: understand what's happening honestly. Options: explore the full range of approaches. Will: commit to a specific, time-bound action.",
          why: "James was jumping straight to Options (\"I should do more team building\") without understanding Reality (\"My responses to dissent trained the team to stay quiet\").",
          visual: "grow",
          principles: [
            { label: "Reality before solutions", detail: "Understand the current situation honestly before exploring what to do about it" },
            { label: "The leader creates the weather", detail: "Team behavior is often a mirror of leadership behavior" },
            { label: "Commitment over perfection", detail: "A 7/10 commitment beats a 10/10 plan that never happens" },
          ],
          references: [
            { label: "The Coaching Habit, Michael Bungay Stanier", url: "https://boxofcrayons.com/the-coaching-habit/" },
            { label: "The Fearless Organization, Amy Edmondson", url: "https://fearlessorganization.com/" },
          ],
        },
      },
      {
        id: "solution",
        type: "steps",
        title: "Three small changes. One big shift.",
        content: "James didn't reorganize the team. He changed three behaviors.",
        steps: [
          { label: "Question swap", detail: "Replaced \"Any concerns?\" with \"What's one thing about this plan that worries you?\"" },
          { label: "Public vulnerability", detail: "Opened next team meeting: \"I've been making it too easy to agree with me. That's on me.\"" },
          { label: "Response change", detail: "When the senior engineer raised a concern: \"Thank you for telling me\" before any problem-solving." },
        ],
        callout: { label: "Skip-level feedback, 6 weeks later", text: "\"Your team is arguing more. That's progress.\"" },
        metrics: [
          { label: "Time to implement", value: "1 day" },
          { label: "Cost", value: "$0" },
          { label: "Behavior change", value: "3 habits" },
        ],
      },
      {
        id: "contrast",
        type: "contrast",
        title: "Same team. Different leader behavior.",
        content: "The team didn't change. The conditions changed.",
        comparisons: [
          { dimension: "1:1 opener", before: "\"Any concerns?\"", after: "\"What worries you about this?\"" },
          { dimension: "Bad news reaction", before: "Immediate problem-solving", after: "\"Thank you for telling me\"" },
          { dimension: "Dissent in meetings", before: "0 per month", after: "Regular, productive" },
          { dimension: "Senior engineer", before: "Withdrawn, silent", after: "Bringing ideas again" },
          { dimension: "Surprises", before: "Last to know", after: "Early warnings" },
        ],
      },
      {
        id: "quote",
        type: "quote",
        title: "",
        content: "I thought I was building a team that trusted me. I was actually building a team that feared disappointing me. There's a difference.",
        quote: "I thought I was building a team that trusted me. I was actually building a team that feared disappointing me. There's a difference.",
        attribution: "James, engineering director",
      },
      {
        id: "summary",
        type: "summary",
        title: "Agreement isn't alignment.",
        content: "Three behavioral changes turned a silent team into an honest one. No reorg, no process, no budget. Just a leader who changed how they responded.",
        metrics: [
          { label: "Changes", value: "3 behaviors" },
          { label: "Timeline", value: "6 weeks" },
          { label: "Investment", value: "$0" },
        ],
        agentCta: { agentId: "leadership-coach-agent", label: "Try the Leadership Coach Agent" },
      },
    ],
  },
  {
    id: "wrong-playbook",
    agentId: "leadership-coach-agent",
    name: "The Wrong Playbook",
    tagline: "She turned around two teams before. This one was different.",
    format: "visual",
    sections: [
      {
        id: "hook",
        type: "hook",
        title: "She turned around two teams before. This one was breaking.",
        subtitle: "VP of Engineering. Known for high standards and operational discipline. Brought in to 'raise the bar' on a product team of 30.",
        content: "90 days in: two senior engineers resigned. Three more updated their LinkedIn. The team that once shipped weekly hadn't shipped in six weeks.",
        heroStat: { value: "5 departures", label: "In 90 days" },
      },
      {
        id: "problem",
        type: "cards",
        title: "The playbook that worked before was the problem.",
        content: "Rachel's approach: set clear standards, hold people accountable, cut ambiguity. It worked twice before. Here, it was toxic.",
        cards: [
          { label: "Week 2", detail: "Introduced code review standards and approval gates", status: "Resented" },
          { label: "Week 4", detail: "Replaced open brainstorms with structured planning", status: "Silenced" },
          { label: "Week 6", detail: "Added velocity tracking and sprint commitments", status: "Gamed" },
          { label: "Week 10", detail: "\"Performance conversations\" with two senior engineers", status: "Resigned" },
        ],
        metrics: [
          { label: "Attrition", value: "5 of 30" },
          { label: "Shipping", value: "Stopped" },
          { label: "Glassdoor", value: "2.8 stars" },
        ],
      },
      {
        id: "turning-point",
        type: "turning-point",
        title: "Right leader. Wrong archetype.",
        content: "Rachel uses the Leadership Style Check. The diagnosis: she was leading as an Accountability Leader in a team that thrived under Servant Leadership.",
        framework: {
          name: "Leadership Archetypes",
          origin: "Situational Leadership + Archetype Mapping",
          description: "Five leadership archetypes, each effective in different contexts. The Believer inspires through care. The Commander sets intent and trusts. The Servant removes obstacles. The Accountability Leader holds standards. The Transformer drives purpose. No archetype is best. Range is the goal.",
          how: "Identify your default archetype. Understand what the team and situation need. Adapt your style to match. The gap between your default and what's needed is where leadership friction lives.",
          why: "Rachel defaulted to Accountability Leader because it worked before. But the previous teams were undisciplined, this team was creative. They needed a Servant Leader who removed obstacles, not an Accountability Leader who added gates.",
          visual: "archetypes",
          principles: [
            { label: "Context determines style", detail: "The right leadership approach depends on the team, not the leader's preference" },
            { label: "Strength becomes weakness", detail: "Every leadership strength overused becomes a liability" },
            { label: "Range over identity", detail: "Great leaders can shift archetypes. Average leaders have one gear." },
          ],
          references: [
            { label: "Team of Teams, Stanley McChrystal", url: "https://www.mcchrystalgroup.com/team-of-teams/" },
            { label: "Creativity Inc., Ed Catmull", url: "https://www.creativityincbook.com/" },
          ],
        },
      },
      {
        id: "solution",
        type: "steps",
        title: "Same leader. Different gear.",
        content: "Rachel didn't abandon her standards. She changed how she led.",
        steps: [
          { label: "Acknowledged", detail: "Told the team: \"I brought a playbook that doesn't fit this team. I'm going to change my approach, and I need your help.\"" },
          { label: "Removed gates", detail: "Replaced approval processes with team-owned quality norms. Asked: \"What does good look like to you?\"" },
          { label: "Shifted role", detail: "Stopped running planning. Started asking: \"What's blocking you that I can remove?\"" },
          { label: "Kept standards", detail: "Didn't lower the bar. Changed who held it: the team, not her." },
        ],
        callout: { label: "Senior engineer who almost left", text: "\"She went from someone controlling us to someone clearing our path. Same energy, completely different effect.\"" },
        metrics: [
          { label: "Pivot time", value: "1 week" },
          { label: "Departures after", value: "0" },
          { label: "Shipping resumed", value: "Week 2" },
        ],
      },
      {
        id: "contrast",
        type: "contrast",
        title: "Same standards. Different archetype.",
        content: "Rachel didn't become a different person. She led from a different place.",
        comparisons: [
          { dimension: "Default question", before: "\"Why isn't this done?\"", after: "\"What's in your way?\"" },
          { dimension: "Quality approach", before: "Leader-imposed gates", after: "Team-owned norms" },
          { dimension: "Planning", before: "Structured, leader-run", after: "Team-facilitated, leader-supported" },
          { dimension: "Archetype", before: "Accountability Leader", after: "Servant Leader (with standards)" },
          { dimension: "Team response", before: "Compliance, then exit", after: "Ownership, then shipping" },
        ],
      },
      {
        id: "quote",
        type: "quote",
        title: "",
        content: "I spent my career building one leadership muscle. I didn't realize I needed five. The team didn't need me to lower my standards. They needed me to hold them differently.",
        quote: "I spent my career building one leadership muscle. I didn't realize I needed five. The team didn't need me to lower my standards. They needed me to hold them differently.",
        attribution: "Rachel, VP of Engineering",
      },
      {
        id: "summary",
        type: "summary",
        title: "The best leaders don't have one style. They have range.",
        content: "Rachel's standards didn't change. Her archetype did. Shifting from Accountability Leader to Servant Leader stopped the attrition and restarted shipping, in two weeks.",
        metrics: [
          { label: "Archetype shift", value: "1 week" },
          { label: "Attrition after", value: "0" },
          { label: "Shipping resumed", value: "Week 2" },
        ],
        agentCta: { agentId: "leadership-coach-agent", label: "Try the Leadership Coach Agent" },
      },
    ],
  },
  {
    id: "invisible-expert",
    agentId: "networking-agent",
    name: "The Invisible Expert",
    tagline: "When competence isn't enough, your network fills the gap",
    format: "visual",
    sections: [
      {
        id: "hook",
        type: "hook",
        title: "The best data scientist in the company didn't get the promotion.",
        subtitle: "Five years. Top benchmarks. Clean code. Board-cited analyses.",
        content: "The person who got the role had fewer publications and simpler models. But everyone in the company knew their name.",
        heroStat: { value: "80 contacts / 0 leaders", label: "Priya's network" },
      },
      {
        id: "setup",
        type: "cards",
        title: "Priya's world before the wake-up call",
        content: "Technically brilliant, professionally invisible.",
        cards: [
          { label: "Tenure", detail: "5 years. Senior data scientist, consistently top performer.", status: "Strong" },
          { label: "Network", detail: "80 contacts: 60 data scientists, 15 engineers, 5 classmates", status: "Narrow" },
          { label: "Visibility", detail: "Her analyses cited in board decks, by someone else", status: "Zero" },
          { label: "Cross-functional", detail: "No product, sales, or executive contacts", status: "Missing" },
        ],
      },
      {
        id: "trigger",
        type: "turning-point",
        title: "The promotion she didn't get",
        content: "Priya applied for principal data scientist. The feedback: 'strong technically, but we need someone with more visibility and influence across the organization.' The person who got it had fewer publications and simpler models, but everyone in the company knew their name.",
        framework: {
          name: "Dunbar's Network Tiers",
          origin: "Robin Dunbar, evolutionary psychology",
          description: "Your brain can maintain ~150 meaningful relationships. Organize them into tiers: 5 closest, 15 good friends, 50 active, 150 meaningful. Invest in each tier differently.",
          how: "Categorize every professional contact into a tier based on relationship depth. Set touchpoint frequency for each tier: monthly for top 15, quarterly for 50, bi-annually for 150. Review monthly and adjust.",
          why: "Priya had 80 contacts but they were all in the same tier and the same domain. No structure meant no strategy.",
          visual: "network-tiers",
          principles: [
            { label: "Tiered investment", detail: "Not every relationship needs the same attention. Tier 1 gets monthly touchpoints, Tier 3 gets bi-annual" },
            { label: "Diversity over density", detail: "A network of 60 data scientists is deep but brittle. Breadth across functions creates resilience" },
            { label: "Weak ties win", detail: "Granovetter's research: novel opportunities come from acquaintances, not close friends" },
          ],
          references: [
            { label: "Dunbar's Number", url: "https://en.wikipedia.org/wiki/Dunbar%27s_number" },
            { label: "Strength of Weak Ties (Granovetter)", url: "https://www.jstor.org/stable/2776392" },
          ],
        },
      },
      {
        id: "diagnosis",
        type: "steps",
        title: "What the network audit revealed",
        content: "Four steps to see the real picture.",
        steps: [
          { label: "Map the network", detail: "Deep but narrow: 75% data scientists, zero cross-functional contacts" },
          { label: "Find the gaps", detail: "No connections to promotion decision-makers or adjacent functions" },
          { label: "Identify structural holes", detail: "No bridges between her team and the people who used her work" },
          { label: "Set targets", detail: "3 senior leaders, 2 product managers, 1 cross-functional council" },
        ],
      },
      {
        id: "contrast",
        type: "contrast",
        title: "Before and after the network shift",
        content: "Same person, same skills, different visibility.",
        comparisons: [
          {
            dimension: "Visibility",
            before: "Work forwarded by others, credit diffused. Analyses cited in board decks with someone else's name on them.",
            after: "Presents her own analysis at cross-functional reviews. Three senior leaders know her by name and request her directly.",
          },
          {
            dimension: "Network shape",
            before: "80 contacts, 75% data scientists. Zero connections to product, sales, or executive leadership. Deep but dangerously narrow.",
            after: "Network spans engineering, product, and leadership. Bridges structural holes between data team and business functions.",
          },
          {
            dimension: "Outreach style",
            before: "Waits to be found. Avoids company events. Only talks to direct teammates. Never reaches out to people she doesn't already know.",
            after: "Leads with value: sends relevant analyses to PMs unprompted. Volunteers for visible cross-functional projects. Engages first, asks later.",
          },
          {
            dimension: "Career leverage",
            before: "Promotion rejected. Feedback: 'strong technically, needs more visibility.' No advocates outside her team.",
            after: "Next principal role opens, three senior leaders independently recommend her. Gets the promotion without even applying.",
          },
        ],
      },
      {
        id: "quote",
        type: "quote",
        title: "The give-first approach",
        content: "Leading with value changed everything.",
        quote: "I sent each PM a brief analysis relevant to their roadmap. No ask, just value. Within a month they were coming to me.",
        attribution: "Priya, on her outreach approach",
      },
      {
        id: "summary",
        type: "summary",
        title: "Competence without visibility is a career ceiling.",
        content: "Priya's technical skills never changed. Her network did. Three months of strategic, give-first networking made her visible to the people who make promotion decisions. The next principal role opened, three senior leaders independently recommended her.",
        metrics: [
          { label: "Time to visibility", value: "3 months" },
          { label: "New cross-functional contacts", value: "12" },
          { label: "Promotion", value: "Yes" },
        ],
        agentCta: { agentId: "networking-agent", label: "Try the Networking Agent" },
      },
    ],
  },

  // ── Culture Agent ──
  {
    id: "email-that-almost-killed-the-deal",
    agentId: "culture-agent",
    name: "The Email That Almost Killed the Deal",
    tagline: "Same words, completely different meaning. A $4M deal nearly died in translation.",
    format: "visual",
    sections: [
      {
        id: "hook",
        type: "hook",
        title: "A two-line email nearly killed a $4M deal.",
        subtitle: "Amsterdam HQ. Tokyo client. Eight months of relationship-building.",
        content: "\"We need to finalize the terms by Friday or we'll need to explore other options.\" Direct. Efficient. Catastrophic.",
        heroStat: { value: "2 sentences / 1 crisis", label: "The email" },
      },
      {
        id: "problem",
        type: "cards",
        title: "Both sides thought they were being reasonable.",
        content: "The Dutch team valued directness. The Japanese client valued harmony. Neither knew the other's rules.",
        cards: [
          { label: "Dutch intent", detail: "Clear timeline, professional urgency, respect their time", status: "Logical" },
          { label: "Japanese reading", detail: "Ultimatum, disrespect for relationship, threat to walk away", status: "Offended" },
          { label: "Reality", detail: "Client went silent. No response for 5 days.", status: "Crisis" },
          { label: "At stake", detail: "$4M annual contract, 8 months of relationship-building", status: "Critical" },
        ],
        metrics: [
          { label: "Silence", value: "5 days" },
          { label: "At risk", value: "$4M" },
          { label: "Trust", value: "Broken" },
        ],
      },
      {
        id: "turning-point",
        type: "turning-point",
        title: "Same words. Different cultural operating system.",
        content: "The account manager runs the original email through the Culture Agent's Cultural Bridge skill.",
        framework: {
          name: "Erin Meyer's Culture Map",
          origin: "Erin Meyer, INSEAD",
          description: "Eight dimensions that explain how cultures differ in business: communicating, evaluating, persuading, leading, deciding, trusting, disagreeing, and scheduling. Most cross-cultural failures happen on just 2-3 dimensions.",
          how: "Map both cultures on each dimension. Find the gaps. The biggest gaps are where misunderstandings live. Then adapt your communication to bridge those specific gaps without losing your core message.",
          why: "The Dutch and Japanese cultures sit on opposite ends of three critical dimensions: communicating (direct vs. indirect), trusting (task-based vs. relationship-based), and disagreeing (confrontational vs. avoids confrontation). The email hit all three.",
          visual: "culture-dimensions",
          principles: [
            { label: "Map before you send", detail: "Know which dimensions have the biggest gap between your culture and theirs. That's where the risk lives." },
            { label: "Intent is invisible", detail: "You know what you meant. They only see what you wrote, filtered through their cultural operating system." },
            { label: "Adapt the delivery, keep the message", detail: "You can be clear and culturally appropriate. It's not either/or." },
          ],
          references: [
            { label: "The Culture Map (Erin Meyer)", url: "https://en.wikipedia.org/wiki/Erin_Meyer" },
            { label: "Hofstede's Cultural Dimensions", url: "https://en.wikipedia.org/wiki/Hofstede%27s_cultural_dimensions_theory" },
          ],
        },
      },
      {
        id: "solution",
        type: "steps",
        title: "The reframed message",
        content: "Same intent, different delivery. The Culture Agent rewrote the outreach.",
        steps: [
          { label: "Acknowledge the relationship", detail: "\"We deeply value the partnership we've been building over these months.\"" },
          { label: "Provide context, not pressure", detail: "\"Our team is preparing next quarter's resource allocation and would love to include your project.\"" },
          { label: "Invite, don't demand", detail: "\"Would it be possible to share your thoughts when convenient? We're happy to adjust our timeline.\"" },
          { label: "Offer a bridge", detail: "\"Perhaps a brief call would be easier than email for discussing the details?\"" },
        ],
        callout: { label: "Result", text: "Client responded within 24 hours. Call scheduled. Deal closed two weeks later." },
        metrics: [
          { label: "Response", value: "24 hours" },
          { label: "Deal", value: "Closed" },
          { label: "Relationship", value: "Strengthened" },
        ],
      },
      {
        id: "contrast",
        type: "contrast",
        title: "Same message. Different cultural lens.",
        content: "The facts didn't change. The framing did.",
        comparisons: [
          { dimension: "Opening", before: "Jump to business: \"We need to finalize\"", after: "Acknowledge relationship first" },
          { dimension: "Urgency", before: "Deadline as ultimatum: \"by Friday\"", after: "Context as invitation: \"when convenient\"" },
          { dimension: "Tone", before: "Transactional: \"explore other options\"", after: "Collaborative: \"happy to adjust\"" },
          { dimension: "Channel", before: "Email only (low-context medium)", after: "Suggested call (high-context bridge)" },
          { dimension: "Outcome", before: "5 days of silence, trust broken", after: "Response in 24 hours, deal closed" },
        ],
      },
      {
        id: "quote",
        type: "quote",
        title: "",
        content: "We thought we were being respectful by being clear. We didn't realize clarity itself is culturally coded.",
        quote: "We thought we were being respectful by being clear. We didn't realize clarity itself is culturally coded.",
        attribution: "The account manager, after the deal closed",
      },
      {
        id: "summary",
        type: "summary",
        title: "The message was fine. The cultural translation was missing.",
        content: "A two-line email nearly destroyed eight months of relationship-building. Not because the content was wrong, but because directness and urgency mean different things in different cultures. The Culture Agent identified three clashing dimensions and reframed the message in 10 minutes.",
        metrics: [
          { label: "Deal saved", value: "$4M" },
          { label: "Fix time", value: "10 min" },
          { label: "Root cause", value: "3 dimensions" },
        ],
        agentCta: { agentId: "culture-agent", label: "Try the Culture Agent" },
      },
    ],
  },

  // ── Question Decoder Agent ──
  {
    id: "question-nobody-answered",
    agentId: "question-decoder-agent",
    name: "The Question Nobody Answered",
    tagline: "The CEO kept asking the same question. The PM kept giving the wrong answer.",
    format: "visual",
    sections: [
      {
        id: "hook",
        type: "hook",
        title: "\"How's the project going?\"",
        subtitle: "The CEO asked this every week. The PM answered with data every time. It never worked.",
        content: "Sprint velocity, burn-down charts, feature completion percentages. All accurate. All useless. The CEO kept asking the same question.",
        heroStat: { value: "6 weeks / same question", label: "Something isn't landing" },
      },
      {
        id: "problem",
        type: "cards",
        title: "The answer was right. The question was wrong.",
        content: "The PM was answering the literal question. The CEO was asking something else entirely.",
        cards: [
          { label: "Week 1", detail: "\"We're at 73% feature completion, on track for Q3.\"", status: "Ignored" },
          { label: "Week 2", detail: "\"Velocity is stable, 2 blockers resolved, 1 remaining.\"", status: "Ignored" },
          { label: "Week 3", detail: "\"Added a Gantt chart. Color-coded. Milestones highlighted.\"", status: "Ignored" },
          { label: "Week 4", detail: "CEO asks: \"But how's the project going?\"", status: "Again" },
        ],
        metrics: [
          { label: "Updates given", value: "6" },
          { label: "CEO satisfied", value: "0" },
          { label: "PM confidence", value: "Dropping" },
        ],
      },
      {
        id: "turning-point",
        type: "turning-point",
        title: "Decode the question before answering it.",
        content: "The PM's manager suggests running the situation through the Question Decoder Agent.",
        framework: {
          name: "Three-Lens Decoding",
          origin: "Question Decoder Agent framework",
          description: "Every question has three layers: the literal question (what they said), the real concern (why they're asking), and the required format (what they need to hear). Most people only answer layer one.",
          how: "Before answering any question, run it through three lenses. Lens 1: Who is asking? (role, expertise, decision-making power). Lens 2: Why are they asking? (what triggered it, what's the real concern). Lens 3: What do they need? (format, depth, framing). Then architect the answer to match all three.",
          why: "The PM was answering the surface question with perfect data. But the CEO wasn't asking for data. She was asking: \"Should I be worried?\" Every detailed answer that didn't address that concern made her more worried, not less.",
          visual: "question-layers",
          principles: [
            { label: "The question behind the question", detail: "What someone asks and what they need to hear are rarely the same thing" },
            { label: "Role shapes meaning", detail: "A CEO asking \"how's it going\" and a tech lead asking it need completely different answers" },
            { label: "Format is content", detail: "A 3-slide summary and a 40-row spreadsheet contain the same data but communicate different things" },
          ],
          references: [
            { label: "Strategic Communication", url: "https://en.wikipedia.org/wiki/Strategic_communication" },
            { label: "Active Listening", url: "https://en.wikipedia.org/wiki/Active_listening" },
          ],
        },
      },
      {
        id: "solution",
        type: "steps",
        title: "Three lenses, one decoded answer.",
        content: "The Question Decoder revealed what the CEO actually needed.",
        steps: [
          { label: "Lens 1: Who", detail: "CEO. Non-technical. Board meeting in 2 weeks. Needs to represent confidence or flag risk." },
          { label: "Lens 2: Why", detail: "Not asking for data. Asking: \"Should I be worried? Can I stake my credibility on this?\"" },
          { label: "Lens 3: What format", detail: "Needs a headline, not a spreadsheet. Risk/no-risk framing, not velocity metrics." },
          { label: "The new answer", detail: "\"We'll ship on time. One risk: the payments API integration. Mitigation is in place. I'll flag it if that changes.\"" },
        ],
        callout: { label: "Response", text: "The CEO nodded. Never asked the same question again." },
        metrics: [
          { label: "Words", value: "27" },
          { label: "CEO satisfied", value: "Instantly" },
          { label: "Follow-ups", value: "0" },
        ],
      },
      {
        id: "contrast",
        type: "contrast",
        title: "Same project. Same facts. Different answer.",
        content: "The data didn't change. The decoding did.",
        comparisons: [
          { dimension: "Answer type", before: "Data dump: velocity, burn-down, percentages", after: "Headline: ship on time, one risk, mitigated" },
          { dimension: "Length", before: "Detailed spreadsheet, 40+ data points", after: "27 words" },
          { dimension: "Framing", before: "Progress metrics (how much done)", after: "Risk assessment (should you worry)" },
          { dimension: "What it answered", before: "\"What's the status?\" (literal question)", after: "\"Should I be worried?\" (real question)" },
          { dimension: "Result", before: "Same question next week", after: "Never asked again" },
        ],
      },
      {
        id: "quote",
        type: "quote",
        title: "",
        content: "I was giving her more data every week, thinking she wanted precision. She wanted three words: we're on track.",
        quote: "I was giving her more data every week, thinking she wanted precision. She wanted three words: we're on track.",
        attribution: "The PM, after the decode session",
      },
      {
        id: "summary",
        type: "summary",
        title: "The best answer starts with the right question.",
        content: "Six weeks of detailed updates that never landed. One decoded question that did. The PM wasn't wrong about the facts. He was wrong about the audience. The CEO didn't need data, she needed confidence. 27 words replaced 6 spreadsheets.",
        metrics: [
          { label: "Weeks of mismatch", value: "6" },
          { label: "Time to decode", value: "5 min" },
          { label: "Follow-up questions", value: "0" },
        ],
        agentCta: { agentId: "question-decoder-agent", label: "Try the Question Decoder Agent" },
      },
    ],
  },
  // ── Difficult Conversations Agent ──
  {
    id: "promotion-that-broke-a-team",
    agentId: "difficult-conversations-agent",
    name: "The Promotion That Broke a Team",
    tagline: "Same news, different conversation, opposite outcome.",
    format: "visual" as const,
    sections: [
      {
        id: "hook",
        type: "hook" as const,
        title: "Friday afternoon. Conference room. One sentence.",
        subtitle: "\"The senior architect role went to an external candidate.\"",
        content: "Anika stares. Fourteen months of extra projects, mentoring, a platform migration that saved $200K. Gone in one sentence on a Friday afternoon.",
        heroStat: { value: "14 months", label: "of work dismissed in 60 seconds" },
      },
      {
        id: "problem",
        type: "cards" as const,
        title: "Everything David said made it worse.",
        content: "He treated it as delivering a decision. It was three conversations colliding at once.",
        cards: [
          { label: "The Decision", detail: "\"Role went to an external candidate.\"", status: "Delivered" },
          { label: "The Why", detail: "\"Broader architectural experience.\"", status: "Defensive" },
          { label: "The Feelings", detail: "Not addressed", status: "Ignored" },
          { label: "The Identity", detail: "\"Am I not good enough?\"", status: "Invisible" },
        ],
        metrics: [
          { label: "LinkedIn", value: "Updated Monday" },
          { label: "Velocity", value: "-20%" },
          { label: "Trust", value: "Broken" },
        ],
      },
      {
        id: "turning-point",
        type: "turning-point" as const,
        title: "One conversation. Three layers.",
        content: "David uses the Difficult Conversations Agent to prepare for a second attempt.",
        framework: {
          name: "Three Conversations (Stone, Patton, Heen)",
          origin: "Harvard Negotiation Project",
          description: "Every difficult conversation is actually three conversations happening simultaneously. Most people only address the surface layer and wonder why it went badly.",
          how: "Separate the three layers before the conversation. Address Feelings first when emotions are high. Then What Happened with both stories, not just yours. Then Identity, the threat that drives defensiveness more than anything else.",
          why: "David's first attempt collapsed because he treated it as one conversation (delivering a decision) when it was actually three (facts, feelings, and identity). The feelings and identity layers, left unaddressed, overwhelmed everything.",
          visual: "three-conversations",
          principles: [
            { label: "Impact is not intent", detail: "Good intentions don't prevent hurt. Acknowledge the impact regardless of what you meant." },
            { label: "Own your contribution", detail: "Not blame, but honest assessment of your part. This disarms defensiveness." },
            { label: "Identity is the hidden layer", detail: "When someone's self-image is threatened, they stop listening and start defending." },
          ],
          references: [
            { label: "Difficult Conversations, Stone, Patton, Heen", url: "https://www.stoneandheen.com/difficult-conversations" },
            { label: "Harvard Negotiation Project", url: "https://www.pon.harvard.edu/" },
          ],
        },
      },
      {
        id: "solution",
        type: "steps" as const,
        title: "Three layers, addressed one at a time.",
        content: "The second conversation separated what the first one collapsed.",
        steps: [
          { label: "Feelings First", detail: "\"I handled our last conversation badly. You deserved honesty, and I owe you that.\"" },
          { label: "Own Contribution", detail: "\"I should have told you there was an external search in parallel. That wasn't fair to you.\"" },
          { label: "Their Story", detail: "Anika: \"I felt like my work didn't matter.\" David: \"Your work matters enormously.\"" },
          { label: "Identity Layer", detail: "\"I worry you're hearing 'not good enough.' That's not what happened. Here's the real gap and the plan.\"" },
          { label: "Path Forward", detail: "6-month development plan with milestones, executive visibility, and personal sponsorship." },
        ],
        callout: { label: "Turning Point", text: "David owned his part. Nobody had ever done that before." },
        metrics: [
          { label: "Time", value: "45 min" },
          { label: "Outcome", value: "Stayed" },
          { label: "Promotion", value: "9 months" },
        ],
      },
      {
        id: "contrast",
        type: "contrast" as const,
        title: "Same news. Same people.",
        content: "Different structure of conversation.",
        comparisons: [
          { dimension: "Opening", before: "Led with the decision", after: "Led with acknowledgment" },
          { dimension: "Feelings", before: "Not addressed", after: "Named and validated" },
          { dimension: "Identity", before: "Invisible", after: "Addressed directly" },
          { dimension: "Contribution", before: "\"Decision was above me\"", after: "\"I should have been transparent\"" },
          { dimension: "Outcome", before: "LinkedIn updated Monday", after: "Promoted 9 months later" },
        ],
      },
      {
        id: "quote",
        type: "quote" as const,
        title: "",
        content: "The promotion mattered, but what kept me was that David owned his part. Nobody had ever done that before.",
        quote: "The promotion mattered, but what kept me was that David owned his part. Nobody had ever done that before.",
        attribution: "Anika, 9 months later",
      },
      {
        id: "summary",
        type: "summary" as const,
        title: "The first conversation broke trust. The second rebuilt it.",
        content: "Separating the three layers turned a 60-second disaster into a 45-minute conversation that saved the team.",
        metrics: [
          { label: "First attempt", value: "60 seconds" },
          { label: "Second attempt", value: "45 minutes" },
          { label: "Result", value: "Promoted" },
        ],
        agentCta: { agentId: "difficult-conversations-agent", label: "Try the Difficult Conversations Agent" },
      },
    ],
  },
  // ── Cat POV Agent ──
  {
    id: "the-human-who-attended-every-meeting",
    agentId: "cat-pov-agent",
    name: "The Human Who Attended Every Meeting",
    tagline: "How a product manager cut 20 hours of meetings by thinking like a cat.",
    format: "visual" as const,
    sections: [
      {
        id: "hook",
        type: "hook" as const,
        title: "32 hours of meetings. Zero hours of deep work.",
        content: "Sarah stares at her calendar. Five back-to-back syncs before lunch. Three more after. She hasn't done actual product work in weeks, but she's never been busier.",
        heroStat: { value: "32 hrs", label: "of meetings per week" },
      },
      {
        id: "problem",
        type: "cards" as const,
        title: "Everything demanded her attention. She gave it all away.",
        content: "Sarah treated every meeting invite like a summons. Every Slack ping like an emergency. Every request like an obligation.",
        cards: [
          { label: "Meetings", detail: "27 recurring weekly meetings", status: "Accepted all" },
          { label: "Slack", detail: "Average response time: 3 minutes", status: "Always on" },
          { label: "Requests", detail: "\"Can you join this sync?\"", status: "Never declined" },
          { label: "Deep Work", detail: "Product strategy, roadmap, analysis", status: "Zero hours" },
        ],
        metrics: [
          { label: "Meetings", value: "32 hrs/wk" },
          { label: "Deep Work", value: "0 hrs" },
          { label: "Burnout", value: "Imminent" },
        ],
      },
      {
        id: "turning-point",
        type: "turning-point" as const,
        title: "The cat sees what the human cannot.",
        content: "Sarah uses the Cat POV Agent to look at her week through feline eyes.",
        framework: {
          name: "Cat Attention Filter",
          origin: "Cat behavioral science (Bradshaw) + Essentialism (McKeown)",
          description: "A cat categorizes every signal as Threat, Opportunity, or Irrelevant. It engages fully with the first, monitors the second, and walks away from the third without explanation or guilt.",
          how: "List every recurring demand on your time. For each one, ask: does this contain food (value) or threat (risk to my territory)? If neither, it gets the cat treatment: stare blankly, then walk away.",
          why: "Sarah's calendar was full because she treated every signal as a threat. The cat filter revealed that over half her meetings were irrelevant: no decisions about her projects, no information she couldn't get asynchronously, no consequences for absence.",
          visual: "cat-attention-filter",
          principles: [
            { label: "If there's no food and no threat, leave the room", detail: "Most meetings fail this test. Attendance without purpose is just sitting in a box." },
            { label: "Rest is preparation, not reward", detail: "A cat napping isn't unproductive. It's storing energy for when something actually matters." },
            { label: "Not every sound deserves a response", detail: "Cats categorize signals instantly. Most Slack pings are the equivalent of a leaf blowing past the window." },
          ],
          references: [
            { label: "Cat Sense, John Bradshaw", url: "https://www.amazon.com/Cat-Sense-Feline-Really-Thinks/dp/0465064965" },
            { label: "Essentialism, Greg McKeown", url: "https://www.amazon.com/Essentialism-Disciplined-Pursuit-Greg-McKeown/dp/0804137404" },
          ],
        },
      },
      {
        id: "solution",
        type: "steps" as const,
        title: "The cat's prescription, applied to Monday morning.",
        content: "Sarah filtered every recurring meeting through the cat attention test.",
        steps: [
          { label: "Audit Meetings", detail: "Categorized all 27 meetings: 8 Threat (decisions about her projects), 5 Opportunity (worth monitoring), 14 Irrelevant." },
          { label: "Decline Irrelevant", detail: "Dropped 14 meetings. No explanation beyond \"I won't be able to attend.\" The cat doesn't explain why it left the room." },
          { label: "Block Hunting Time", detail: "Three-hour morning block, no meetings, no Slack. Deep product work only." },
          { label: "Batch Responses", detail: "Slack checks at 10am, 1pm, 4pm. Response time went from 3 minutes to 2 hours. Nobody noticed." },
          { label: "Find the Warm Spot", detail: "Moved deep work to a quiet room. Optimized the environment instead of enduring it." },
        ],
        callout: { label: "Cat Wisdom", text: "If there is no food and no threat, leave the room." },
        metrics: [
          { label: "Meetings", value: "32 → 12" },
          { label: "Deep Work", value: "0 → 15 hrs" },
          { label: "Burnout", value: "Resolved" },
        ],
      },
      {
        id: "contrast",
        type: "contrast" as const,
        title: "Same role. Same company.",
        content: "Different relationship with attention.",
        comparisons: [
          { dimension: "Meetings", before: "32 hrs/week", after: "12 hrs/week" },
          { dimension: "Deep Work", before: "0 hrs/week", after: "15 hrs/week" },
          { dimension: "Slack Response", before: "3 minutes", after: "2 hours" },
          { dimension: "Meeting Declines", before: "Never", after: "14 per week" },
          { dimension: "Burnout", before: "Imminent", after: "Resolved" },
        ],
      },
      {
        id: "quote",
        type: "quote" as const,
        title: "",
        content: "I stopped going to meetings where I was furniture. The cat was right: if there is no food and no threat, leave the room.",
        quote: "I stopped going to meetings where I was furniture. The cat was right: if there is no food and no threat, leave the room.",
        attribution: "Sarah, 3 months later",
      },
      {
        id: "summary",
        type: "summary" as const,
        title: "The workload problem was an attention problem.",
        content: "Sarah didn't need fewer responsibilities. She needed to stop responding to every signal like it mattered equally. The cat knew this all along.",
        metrics: [
          { label: "Meetings cut", value: "20 hrs/wk" },
          { label: "Deep work gained", value: "15 hrs/wk" },
          { label: "Burnout", value: "Gone" },
        ],
        agentCta: { agentId: "cat-pov-agent", label: "Try the Cat POV Agent" },
      },
    ],
  },
  // ── Wargaming Agent ──
  {
    id: "market-entry-nobody-wargamed",
    agentId: "wargaming-agent",
    name: "The Market Entry Nobody War-Gamed",
    tagline: "Rachel assumed competitors wouldn't react. They did.",
    format: "visual",
    sections: [
      {
        id: "hook",
        type: "hook" as const,
        title: "A bold expansion. One fatal assumption.",
        subtitle: "Rachel, Head of Strategy at a mid-size fintech, pitches SMB lending. The board approves unanimously.",
        content: "Rachel had modeled the revenue projections, stress-tested the credit risk assumptions, and built a go-to-market plan with phased rollout across four metro areas. She assembled a team of twelve, hired three SMB lending specialists, and committed to a Q2 launch targeting 500 SMB clients in the first year. What she had not done was simulate how anyone else would respond to her entering the market.",
        heroStat: { value: "$50M committed", label: "Zero adversarial testing" },
      },
      {
        id: "landscape",
        type: "cards" as const,
        title: "The forces Rachel didn't simulate.",
        content: "Every player in the market had a reason to respond. None of them were going to hold still.",
        cards: [
          { label: "FinanceFirst", detail: "Market leader, 40% share, excess capacity, history of aggressive price responses to new entrants.", status: "Will defend" },
          { label: "QuickLend", detail: "Fast-growing challenger with automated underwriting at one-third of Meridian's cost per loan.", status: "Will undercut" },
          { label: "Regulator (OCC)", detail: "Tightening capital requirements for SMB lenders, effective Q1 next year. Compliance cost: $3.2M.", status: "Will constrain" },
          { label: "Enterprise Clients", detail: "22% of recurring revenue. Account managers reassigned to SMB launch. Response times doubled.", status: "Feeling neglected" },
        ],
        metrics: [
          { label: "Monthly burn", value: "$1.8M" },
          { label: "Monthly revenue", value: "$340K" },
          { label: "Client reviews", value: "1 formal" },
        ],
      },
      {
        id: "turning-point",
        type: "turning-point" as const,
        title: "Every move provokes a response.",
        content: "The wargaming agent runs a design-wargame simulation. Three rounds: Meridian's entry, competitor and regulator response, Meridian's adaptation.",
        framework: {
          name: "OODA Loop (Boyd)",
          origin: "Colonel John Boyd, US Air Force",
          description: "Observe-Orient-Decide-Act: a decision cycle where competitive advantage comes from cycling faster than your opponent. The side that completes its loop quicker forces the other into reactive positions.",
          how: "Observe the environment and incoming data. Orient by synthesizing observations against existing mental models, cultural traditions, and previous experience. Decide on a course of action. Act, then immediately begin observing the results. Speed through the loop, not speed of any single action, is the advantage.",
          why: "Rachel's plan assumed a static battlefield. Her competitors were already cycling their own OODA loops: observing her hiring announcements, orienting around their cost advantages, deciding on price cuts, and acting before Meridian's first quarter closed.",
          visual: "ooda-loop",
          principles: [
            { label: "Tempo over precision", detail: "The side that cycles faster forces the opponent to react to outdated conditions." },
            { label: "Orientation is the key", detail: "The most critical phase: your mental model of the situation determines what you see and what you miss." },
            { label: "Implicit over explicit", detail: "Organizations that share orientation can act without waiting for explicit orders, compressing the loop." },
          ],
          references: [
            { label: "OODA Loop, Wikipedia", url: "https://en.wikipedia.org/wiki/OODA_loop" },
            { label: "John Boyd, Patterns of Conflict", url: "https://en.wikipedia.org/wiki/John_Boyd_(military_strategist)" },
          ],
        },
      },
      {
        id: "simulation-results",
        type: "steps" as const,
        title: "Four moves Rachel never saw coming.",
        content: "The simulation surfaced what financial models had missed: the plan assumed competitors would hold still while Meridian moved.",
        steps: [
          { label: "FinanceFirst slashes rates 30%", detail: "Within 90 days of entry. Absorbable at 8x Meridian's volume. Erases projected margins before first quarter closes." },
          { label: "Regulator announces new capital requirements", detail: "OCC rules add $3.2M to operating budget. A figure that appeared in no projection because regulatory risk was treated as a footnote." },
          { label: "Enterprise clients threaten to leave", detail: "Three largest clients (22% of recurring revenue) issue formal review notices. Account managers had been reassigned to SMB launch." },
          { label: "QuickLend partners with enterprise prospects", detail: "Automated underwriting at one-third cost. While Meridian fights FinanceFirst on price, QuickLend flanks from behind." },
        ],
        callout: { label: "Schwerpunkt", text: "The decisive point was never the lending market. It was the data layer underneath." },
      },
      {
        id: "contrast",
        type: "contrast" as const,
        title: "Same company. Same $50M.",
        content: "Different understanding of where the advantage actually was.",
        comparisons: [
          { dimension: "Strategy", before: "Capture 15% of SMB lending in 18 months", after: "Become the platform, not the lender" },
          { dimension: "Competitors", before: "Assumed static", after: "Simulated adversarial response" },
          { dimension: "Revenue model", before: "Loan origination (carry credit risk)", after: "Platform fees (no credit risk)" },
          { dimension: "Monthly burn", before: "$1.8M against $340K revenue", after: "$620K, break-even by month 10" },
          { dimension: "Enterprise clients", before: "Neglected, one formal review", after: "Retained, 3-year renewal" },
        ],
      },
      {
        id: "quote",
        type: "quote" as const,
        title: "",
        content: "No plan survives contact with adversarial response. The value of wargaming is discovering your plan's weaknesses before real resources are committed.",
        quote: "No plan survives contact with adversarial response. The value of wargaming is discovering your plan's weaknesses before real resources are committed.",
        attribution: "Retrospective analysis",
      },
      {
        id: "summary",
        type: "summary" as const,
        title: "The competitor's price war became irrelevant.",
        content: "Rachel pivoted from direct SMB lending to a platform play. Partnered with 14 smaller lenders who used her data infrastructure to originate $280M in loans. Enterprise clients were retained. FinanceFirst's price war became irrelevant because Rachel left the battlefield. The Schwerpunkt was never the market, it was the data layer underneath.",
        metrics: [
          { label: "Lending partners", value: "14 signed" },
          { label: "Platform volume", value: "$280M" },
          { label: "Burn rate", value: "$1.8M → $620K" },
        ],
        agentCta: { agentId: "wargaming-agent", label: "Try the Wargaming Agent" },
      },
    ],
  },
];

export function getStoriesForAgent(agentId: string): AgentStory[] {
  return stories.filter((s) => s.agentId === agentId);
}

export function getStory(agentId: string, storyId: string): AgentStory | undefined {
  return stories.find((s) => s.agentId === agentId && s.id === storyId);
}
