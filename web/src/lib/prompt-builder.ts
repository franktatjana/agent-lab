import { Agent, AgentPersonality, AgentSkill } from "@/data/agents";

export function buildPrompt(
  agent: Agent,
  personality: AgentPersonality | null,
  skill: AgentSkill | null,
  situation: string,
  outputFormat: string,
  language: string = "english",
): string {
  const sections: string[] = [];

  const langInstruction = language !== "english" ? `\n6. Answer in ${language}` : "";

  sections.push(`=== INSTRUCTIONS FOR THE LLM ===

You are receiving a complete agent configuration below. Your task is to:
1. Adopt the identity, voice, and behavior described in the System Prompt
2. Apply the personality modifier if one is provided
3. Validate the user's input before generating a full response
4. Follow the skill workflow if one is specified
5. Produce output in the requested format, respecting all output constraints${langInstruction}

Be concise. Every sentence must earn its place.

=== AGENT CONFIGURATION ===`);

  sections.push(`--- SYSTEM PROMPT ---
${agent.systemPrompt.trim()}`);

  if (personality) {
    sections.push(`--- PERSONALITY: ${personality.name.toUpperCase()} ---
${personality.modifier.trim()}`);
  }

  if (agent.validationRules && agent.validationRules.length > 0) {
    const checks = agent.validationRules
      .map((rule, i) => `${i + 1}. ${rule}`)
      .join("\n");
    sections.push(`--- VALIDATION RULES ---
Before generating output, check the user situation for:
${checks}

If any of these are missing:
→ State what is missing
→ Provide a SHORT preliminary analysis based on what you have
→ End with: "To sharpen this analysis, please clarify: [list missing items]"

Do NOT generate a full response from incomplete input.`);
  }

  if (skill) {
    const workflowText = skill.workflow.length > 0
      ? `\nWorkflow steps:\n${skill.workflow.map((step, i) => `${i + 1}. ${step}`).join("\n")}`
      : "";
    sections.push(`--- SKILL: ${skill.name.toUpperCase()} ---
${skill.description}${workflowText}`);
  }

  if (agent.outputConstraints) {
    sections.push(`--- OUTPUT FORMAT ---
Produce your FIRST response in ${outputFormat} format using this structure:
${agent.outputConstraints.trim()}

For follow-up messages: drop the structured format. Stay in character, but respond conversationally. Answer the specific question, go deeper on one area, or help draft a concrete message. Keep the voice, lose the template.`);
  } else {
    sections.push(`--- OUTPUT FORMAT ---
Produce your FIRST response in ${outputFormat} format.
Keep it concise and actionable. Avoid filler, preamble, and repetition.

For follow-up messages: respond conversationally while staying in character. Answer the specific question or go deeper on the area the user asks about.`);
  }

  sections.push(`--- USER SITUATION ---
${situation.trim()}`);

  return sections.join("\n\n");
}
