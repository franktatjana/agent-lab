export interface CaseStudyIdea {
  id: string;
  title: string;
  surface: string;
  rootCause?: string;
  agentId: string;
  category?: string;
}

export interface CrossAgentScenario {
  id: string;
  agents: string[];
  title: string;
  description: string;
}

export function getIdeasForAgent(agentId: string): CaseStudyIdea[] {
  return caseStudyIdeas.filter((idea) => idea.agentId === agentId);
}

export function buildIdeaFlyoutContent(idea: CaseStudyIdea): string {
  const lines: string[] = [];
  if (idea.category) {
    lines.push(`**Category:** ${idea.category}`);
    lines.push("");
  }
  lines.push(`**Surface issue:** ${idea.surface}`);
  if (idea.rootCause) {
    lines.push("");
    lines.push(`**Root cause journey:** ${idea.rootCause}`);
  }
  return lines.join("\n");
}

export function buildScenarioFlyoutContent(scenario: CrossAgentScenario): string {
  return `**Agents involved:** ${scenario.agents.join(", ")}\n\n${scenario.description}`;
}

const agentLabel: Record<string, string> = {
  "why-agent": "Why-Agent",
  "culture-agent": "Culture-Agent",
  "generation-agent": "Generation-Agent",
  "research-agent": "Research-Agent",
};

export function getAgentLabel(agentId: string): string {
  return agentLabel[agentId] ?? agentId;
}

export const caseStudyAgentOrder = [
  "why-agent",
  "culture-agent",
  "generation-agent",
  "research-agent",
];

export const caseStudyIdeas: CaseStudyIdea[] = [
  // Why-Agent: Interpersonal/Team Dynamics
  {
    id: "why-high-performer",
    title: "High performer suddenly disengaged",
    surface: "Burnout",
    rootCause: "Promotion went to someone else \u2192 feels invisible \u2192 manager didn't explain decision \u2192 no career path clarity \u2192 organization has no transparent promotion criteria",
    agentId: "why-agent",
    category: "Interpersonal/Team Dynamics",
  },
  {
    id: "why-colleagues-friction",
    title: "Two colleagues in constant friction",
    surface: "Personality clash",
    rootCause: "Every interaction tense \u2192 started after reorg \u2192 unclear who owns what \u2192 manager hasn't clarified boundaries \u2192 reorg was rushed without role definition",
    agentId: "why-agent",
    category: "Interpersonal/Team Dynamics",
  },
  {
    id: "why-feedback-not-landing",
    title: "Feedback not landing",
    surface: "Employee doesn't listen",
    rootCause: "Same feedback repeatedly \u2192 behavior doesn't change \u2192 employee doesn't see it as priority \u2192 competing priorities from other stakeholders \u2192 no aligned goals",
    agentId: "why-agent",
    category: "Interpersonal/Team Dynamics",
  },
  // Why-Agent: Organizational/Process
  {
    id: "why-new-hires-leaving",
    title: "New hires keep leaving at 6 months",
    surface: "Culture fit",
    rootCause: "Expectations from interviews don't match reality \u2192 recruiters incentivized on hires not retention \u2192 no feedback loop to hiring",
    agentId: "why-agent",
    category: "Organizational/Process",
  },
  {
    id: "why-meetings-decide-nothing",
    title: "Meetings that decide nothing",
    surface: "Inefficient meetings",
    rootCause: "Decisions get revisited \u2192 people not in room when decided \u2192 unclear authority \u2192 fear of accountability",
    agentId: "why-agent",
    category: "Organizational/Process",
  },
  {
    id: "why-knowledge-hoarding",
    title: "Knowledge hoarding",
    surface: "One person won't share",
    rootCause: "Feels job security tied to being needed \u2192 was almost laid off before \u2192 organization rewards heroes not systems",
    agentId: "why-agent",
    category: "Organizational/Process",
  },
  // Why-Agent: Leadership/Communication
  {
    id: "why-team-wont-speak-up",
    title: "Team won't speak up",
    surface: "Quiet team",
    rootCause: "Last person who challenged was shut down \u2192 leader says they want honesty but reacts defensively \u2192 no psychological safety",
    agentId: "why-agent",
    category: "Leadership/Communication",
  },
  {
    id: "why-cross-team-blame",
    title: "Cross-team blame cycles",
    surface: "Teams don't collaborate",
    rootCause: "Each team optimizes for their metrics \u2192 metrics conflict \u2192 leadership evaluates teams in isolation",
    agentId: "why-agent",
    category: "Leadership/Communication",
  },
  // Why-Agent: Personal/Career
  {
    id: "why-stuck-despite-performance",
    title: "Stuck despite good performance",
    surface: "No growth",
    rootCause: "Not visible to decision-makers \u2192 manager doesn't advocate \u2192 manager also stuck \u2192 frozen hierarchy",
    agentId: "why-agent",
    category: "Personal/Career",
  },
  {
    id: "why-dreading-work",
    title: "Dreading work despite 'good job'",
    surface: "Just stressed",
    rootCause: "Values mismatch with daily work \u2192 took job for wrong reasons \u2192 never defined what matters",
    agentId: "why-agent",
    category: "Personal/Career",
  },
  // Culture-Agent
  {
    id: "culture-remote-timezones",
    title: "Remote team across time zones",
    surface: "US/Europe/Asia async friction. Who accommodates whose schedule? Power dynamics in 'flexible' arrangements.",
    agentId: "culture-agent",
  },
  {
    id: "culture-immigrant-fitting-in",
    title: "Immigrant employee 'not fitting in'",
    surface: "High performer struggles with informal culture. Different norms for self-promotion, disagreement, hierarchy.",
    agentId: "culture-agent",
  },
  {
    id: "culture-merger",
    title: "Merger of two company cultures",
    surface: "Startup acquired by enterprise, 'us vs. them.' Speed vs. process, risk vs. compliance, flat vs. hierarchy.",
    agentId: "culture-agent",
  },
  {
    id: "culture-client-relationship",
    title: "Client relationship breaking down",
    surface: "German precision vs. Brazilian relationship-first approach. Professional norms are cultural, not universal.",
    agentId: "culture-agent",
  },
  {
    id: "culture-expat-manager",
    title: "Expat manager struggling abroad",
    surface: "American manager in Japan, team seems disengaged. Direct feedback creating face-loss situations.",
    agentId: "culture-agent",
  },
  // Generation-Agent
  {
    id: "gen-millennial-sandwich",
    title: "Millennial sandwich manager",
    surface: "Managing Boomers and Gen Z simultaneously. Middle managers translate in both directions.",
    agentId: "generation-agent",
  },
  {
    id: "gen-x-invisible",
    title: "Gen X leader feeling invisible",
    surface: "'Forgotten generation' in leadership pipeline. Generational narratives skip Gen X.",
    agentId: "generation-agent",
  },
  {
    id: "gen-intern-boardroom",
    title: "Intern cohort struggling with senior leadership",
    surface: "Gen Z brilliant in async, lost in boardroom. Training assumes skills they never developed.",
    agentId: "generation-agent",
  },
  {
    id: "gen-reverse-mentoring",
    title: "Reverse mentoring gone wrong",
    surface: "Gen Z teaching Boomer exec about social media. Power dynamics complicate 'equal' exchange.",
    agentId: "generation-agent",
  },
  {
    id: "gen-remote-divide",
    title: "Remote work generational divide",
    surface: "Boomers want everyone back, Gen Z threatens to quit. Same words mean different things.",
    agentId: "generation-agent",
  },
  {
    id: "gen-family-business",
    title: "Family business succession",
    surface: "Boomer founder, Millennial child taking over. Identity tied to business, not just operations.",
    agentId: "generation-agent",
  },
  // Research-Agent
  {
    id: "research-career-change",
    title: "Career change research",
    surface: "Mid-career professional exploring pivot. What to research, how to evaluate fit, hidden requirements.",
    agentId: "research-agent",
  },
  {
    id: "research-due-diligence",
    title: "Due diligence on potential employer",
    surface: "Candidate researching company before offer. Culture signals, financial health, leadership stability.",
    agentId: "research-agent",
  },
  {
    id: "research-competitor-nonprofit",
    title: "Competitor analysis for nonprofit",
    surface: "Foundation researching peer organizations. Different norms than commercial competitive intel.",
    agentId: "research-agent",
  },
  {
    id: "research-health-decision",
    title: "Personal health decision research",
    surface: "Patient researching treatment options. Medical literature vs. patient forums vs. doctor recommendations.",
    agentId: "research-agent",
  },
  {
    id: "research-salary-negotiation",
    title: "Salary negotiation preparation",
    surface: "Employee researching market rates. Data sources, confidence levels, presentation framing.",
    agentId: "research-agent",
  },
  {
    id: "research-vendor-evaluation",
    title: "Vendor evaluation for small business",
    surface: "Founder comparing software options. Signal vs. noise, hidden costs, integration complexity.",
    agentId: "research-agent",
  },
];

export const crossAgentScenarios: CrossAgentScenario[] = [
  {
    id: "cross-why-culture",
    agents: ["Why-Agent", "Culture-Agent"],
    title: "Cross-cultural team dysfunction",
    description: "Why-Agent finds patterns; Culture-Agent explains cultural factors driving the dysfunction.",
  },
  {
    id: "cross-why-generation",
    agents: ["Why-Agent", "Generation-Agent"],
    title: "Mentorship not working",
    description: "Why-Agent finds fear of obsolescence; Generation-Agent explains different career models across generations.",
  },
  {
    id: "cross-research-culture",
    agents: ["Research-Agent", "Culture-Agent"],
    title: "International expansion",
    description: "Research-Agent gathers market data; Culture-Agent prepares the team for cultural adaptation.",
  },
  {
    id: "cross-generation-culture",
    agents: ["Generation-Agent", "Culture-Agent"],
    title: "Global multigenerational team",
    description: "Both dimensions matter, neither alone explains the friction. Generational and cultural lenses combine for deeper understanding.",
  },
];
