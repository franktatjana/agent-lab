import type { AgentDefinition, BundledAgentDefinition } from "./definition-types";

export interface ValidationCheck {
  name: string;
  category: "structure" | "completeness" | "integrity";
  passed: boolean;
  message: string;
  severity: "error" | "warning";
}

function check(
  name: string,
  category: ValidationCheck["category"],
  passed: boolean,
  message: string,
  severity: ValidationCheck["severity"] = "error",
): ValidationCheck {
  return { name, category, passed, message, severity };
}

function nonEmpty(val: unknown): boolean {
  if (val === null || val === undefined) return false;
  if (typeof val === "string") return val.trim().length > 0;
  if (Array.isArray(val)) return val.length > 0;
  if (typeof val === "object") return Object.keys(val).length > 0;
  return true;
}

function structureChecks(def: AgentDefinition): ValidationCheck[] {
  const checks: ValidationCheck[] = [];

  checks.push(check("Spec version", "structure", nonEmpty(def.agentspec_version), def.agentspec_version ? `Agent Spec ${def.agentspec_version}` : "No spec version declared"));
  checks.push(check("Component type", "structure", def.component_type === "Agent", def.component_type === "Agent" ? "Agent" : `Expected Agent, got "${def.component_type}"`));
  checks.push(check("Agent ID", "structure", nonEmpty(def.id), def.id ? def.id : "Missing"));
  checks.push(check("Display name", "structure", nonEmpty(def.name), def.name ? def.name : "Missing"));
  checks.push(check("Description", "structure", nonEmpty(def.description), nonEmpty(def.description) ? "Provided" : "Missing"));
  checks.push(check("System prompt", "structure", nonEmpty(def.system_prompt), nonEmpty(def.system_prompt) ? `${def.system_prompt.length} characters` : "Missing"));

  const meta = def.metadata;
  checks.push(check("Definition version", "structure", nonEmpty(meta?.definition_version), meta?.definition_version ? `v${meta.definition_version}` : "Missing"));
  checks.push(check("Tags", "structure", nonEmpty(meta?.tags), meta?.tags?.length ? meta.tags.join(", ") : "Missing"));
  checks.push(check("Responsibility statement", "structure", nonEmpty(meta?.responsibility), nonEmpty(meta?.responsibility) ? "Defined" : "Missing"));

  const llm = def.llm_configuration;
  const genParams = llm?.default_generation_parameters;
  checks.push(check("Temperature", "structure", genParams?.temperature !== undefined, genParams?.temperature !== undefined ? `${genParams.temperature}` : "Missing"));
  checks.push(check("Max tokens", "structure", genParams?.max_tokens !== undefined, genParams?.max_tokens !== undefined ? `${genParams.max_tokens}` : "Missing"));

  checks.push(check("Inputs", "structure", nonEmpty(def.inputs), def.inputs?.length ? `${def.inputs.length} defined` : "None"));
  checks.push(check("Outputs", "structure", nonEmpty(def.outputs), def.outputs?.length ? `${def.outputs.length} defined` : "None"));

  for (const input of def.inputs ?? []) {
    const valid = nonEmpty(input.title) && nonEmpty(input.type);
    checks.push(check(`Input: ${input.title}`, "structure", valid, valid ? input.type : "Missing title or type", "warning"));
  }

  for (const output of def.outputs ?? []) {
    const valid = nonEmpty(output.title) && nonEmpty(output.type);
    checks.push(check(`Output: ${output.title}`, "structure", valid, valid ? output.type : "Missing title or type", "warning"));
  }

  for (const tool of def.tools ?? []) {
    const valid = nonEmpty(tool.component_type) && nonEmpty(tool.id) && nonEmpty(tool.name) && tool.requires_confirmation !== undefined;
    checks.push(check(`Tool: ${tool.name || tool.id}`, "structure", valid, valid ? tool.component_type : "Incomplete tool definition", "warning"));
  }

  for (const sa of def.specialized_agents ?? []) {
    const hasRef = nonEmpty(sa.agent?.$component_ref);
    const hasInstructions = nonEmpty(sa.agent_specialization_parameters?.additional_instructions);
    checks.push(check(`Variant: ${sa.name || sa.id}`, "structure", hasRef && hasInstructions, hasRef && hasInstructions ? "Has base reference and instructions" : "Missing base reference or instructions", "warning"));
  }

  for (const flow of def.flows ?? []) {
    const valid = flow.component_type === "Flow" && nonEmpty(flow.id) && nonEmpty(flow.name) && nonEmpty(flow.inputs) && nonEmpty(flow.outputs);
    checks.push(check(`Flow: ${flow.name || flow.id}`, "structure", valid, valid ? `${flow.inputs.length} inputs, ${flow.outputs.length} outputs` : "Incomplete flow definition", "warning"));
  }

  return checks;
}

function completenessChecks(def: AgentDefinition): ValidationCheck[] {
  const checks: ValidationCheck[] = [];
  const ext = def["x-agentlab"];

  checks.push(check("Has flows", "completeness", (def.flows?.length ?? 0) > 0, def.flows?.length ? `${def.flows.length} flows` : "No flows defined"));
  checks.push(check("Has tools", "completeness", (def.tools?.length ?? 0) > 0, def.tools?.length ? `${def.tools.length} tools` : "No tools defined"));

  const registry = ext?.prompt_registry ?? {};
  checks.push(check("Prompt registry", "completeness", nonEmpty(registry), nonEmpty(registry) ? `${Object.keys(registry).length} prompts registered` : "Empty", "warning"));
  checks.push(check("Input guardrails", "completeness", nonEmpty(ext?.guardrails?.input), nonEmpty(ext?.guardrails?.input) ? `${ext.guardrails.input.length} rules` : "None defined", "warning"));
  checks.push(check("Output guardrails", "completeness", nonEmpty(ext?.guardrails?.output), nonEmpty(ext?.guardrails?.output) ? `${ext.guardrails.output.length} rules` : "None defined", "warning"));
  checks.push(check("Boundaries", "completeness", nonEmpty(ext?.boundaries), nonEmpty(ext?.boundaries) ? `${ext.boundaries.length} defined` : "None defined", "warning"));
  checks.push(check("Quality criteria", "completeness", nonEmpty(ext?.quality), nonEmpty(ext?.quality) ? `${ext.quality.length} criteria` : "None defined", "warning"));

  const mem = ext?.memory;
  const memComplete = nonEmpty(mem?.conversation) && nonEmpty(mem?.working) && nonEmpty(mem?.persistent) && nonEmpty(mem?.shared);
  checks.push(check("Memory model", "completeness", memComplete, memComplete ? "All 4 tiers defined" : "Some tiers missing", "warning"));

  const ctx = ext?.context;
  checks.push(check("Context strategy", "completeness", nonEmpty(ctx?.strategy) && nonEmpty(ctx?.priority_order), nonEmpty(ctx?.strategy) ? ctx.strategy : "Not defined", "warning"));
  checks.push(check("Knowledge references", "completeness", nonEmpty(ext?.knowledge?.references), nonEmpty(ext?.knowledge?.references) ? `${ext.knowledge.references.length} references` : "None defined", "warning"));
  checks.push(check("Output constraints", "completeness", nonEmpty(ext?.output_constraints), nonEmpty(ext?.output_constraints) ? `${Object.keys(ext.output_constraints).length} constraints` : "None defined", "warning"));

  return checks;
}

function integrityChecks(def: AgentDefinition, bundled: BundledAgentDefinition): ValidationCheck[] {
  const checks: ValidationCheck[] = [];
  const ext = def["x-agentlab"];
  const registry = ext?.prompt_registry ?? {};
  const registryKeys = new Set(Object.keys(registry));

  for (const sa of def.specialized_agents ?? []) {
    const refMatch = sa.agent?.$component_ref === def.id;
    checks.push(check(`${sa.name || sa.id} references base agent`, "integrity", refMatch, refMatch ? "Correct" : `Points to "${sa.agent?.$component_ref}" instead of "${def.id}"`));
  }

  for (const flow of def.flows ?? []) {
    const steps = flow["x-agentlab"]?.workflow_shorthand ?? [];
    for (const step of steps) {
      const inRegistry = registryKeys.has(step.prompt);
      checks.push(check(`${flow.name || flow.id} step ${step.step} uses ${step.prompt}`, "integrity", inRegistry, inRegistry ? "Prompt found in registry" : `Prompt "${step.prompt}" not in registry`, "warning"));
    }

    const numbers = steps.map((s) => s.step);
    const sequential = numbers.every((n, i) => n === i + 1);
    if (steps.length > 0) {
      checks.push(check(`${flow.name || flow.id} step order`, "integrity", sequential, sequential ? "Sequential" : `Out of order: ${numbers.join(", ")}`, "warning"));
    }
  }

  const flowIds = new Set(def.flows?.map((f) => f.id) ?? []);
  for (const cap of def.a2a?.agent_card?.capabilities ?? []) {
    const matches = flowIds.has(cap);
    checks.push(check(`A2A capability "${cap}"`, "integrity", matches, matches ? "Maps to a flow" : "No matching flow", "warning"));
  }

  const bundledKeys = new Set(Object.keys(bundled.prompts));
  for (const key of registryKeys) {
    const hasBundled = bundledKeys.has(key);
    checks.push(check(`Prompt file: ${key}`, "integrity", hasBundled, hasBundled ? "Bundled" : "Registered but file missing", "warning"));
  }

  return checks;
}

export function validateSpec(bundled: BundledAgentDefinition): ValidationCheck[] {
  const def = bundled.definition;
  return [
    ...structureChecks(def),
    ...completenessChecks(def),
    ...integrityChecks(def, bundled),
  ];
}
