export type StorySectionType =
  | "hook"
  | "problem"
  | "impact"
  | "turning-point"
  | "solution"
  | "outcome"
  | "contrast"
  | "cards"
  | "steps";

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
  visual: "five-whys" | "ccr-arc" | "six-hats";
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
    ],
  },
];

export function getStoriesForAgent(agentId: string): AgentStory[] {
  return stories.filter((s) => s.agentId === agentId);
}

export function getStory(agentId: string, storyId: string): AgentStory | undefined {
  return stories.find((s) => s.agentId === agentId && s.id === storyId);
}
