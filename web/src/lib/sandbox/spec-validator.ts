import type { AgentDefinition, BundledAgentDefinition } from "./definition-types";

export interface ValidationCheck {
  name: string;
  category: "schema" | "completeness" | "cross-reference";
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

function schemaChecks(def: AgentDefinition): ValidationCheck[] {
  const checks: ValidationCheck[] = [];

  checks.push(check("agentspec_version", "schema", nonEmpty(def.agentspec_version), def.agentspec_version ? `Version: ${def.agentspec_version}` : "Missing agentspec_version."));
  checks.push(check("component_type is Agent", "schema", def.component_type === "Agent", def.component_type === "Agent" ? "Correct." : `Expected "Agent", got "${def.component_type}".`));
  checks.push(check("id", "schema", nonEmpty(def.id), def.id ? `ID: ${def.id}` : "Missing id."));
  checks.push(check("name", "schema", nonEmpty(def.name), def.name ? `Name: ${def.name}` : "Missing name."));
  checks.push(check("description", "schema", nonEmpty(def.description), nonEmpty(def.description) ? "Present." : "Missing description."));
  checks.push(check("system_prompt", "schema", nonEmpty(def.system_prompt), nonEmpty(def.system_prompt) ? `${def.system_prompt.length} characters.` : "Missing system_prompt."));

  // Metadata
  const meta = def.metadata;
  checks.push(check("metadata.definition_version", "schema", nonEmpty(meta?.definition_version), meta?.definition_version ? `v${meta.definition_version}` : "Missing definition_version."));
  checks.push(check("metadata.tags", "schema", nonEmpty(meta?.tags), meta?.tags?.length ? `${meta.tags.length} tag(s).` : "Missing tags."));
  checks.push(check("metadata.responsibility", "schema", nonEmpty(meta?.responsibility), nonEmpty(meta?.responsibility) ? "Present." : "Missing responsibility."));

  // LLM configuration
  const llm = def.llm_configuration;
  const genParams = llm?.default_generation_parameters;
  checks.push(check("llm_configuration.temperature", "schema", genParams?.temperature !== undefined, genParams?.temperature !== undefined ? `Temperature: ${genParams.temperature}` : "Missing temperature."));
  checks.push(check("llm_configuration.max_tokens", "schema", genParams?.max_tokens !== undefined, genParams?.max_tokens !== undefined ? `Max tokens: ${genParams.max_tokens}` : "Missing max_tokens."));

  // Inputs and outputs
  checks.push(check("inputs defined", "schema", nonEmpty(def.inputs), def.inputs?.length ? `${def.inputs.length} input(s).` : "No inputs defined."));
  checks.push(check("outputs defined", "schema", nonEmpty(def.outputs), def.outputs?.length ? `${def.outputs.length} output(s).` : "No outputs defined."));

  for (const input of def.inputs ?? []) {
    const valid = nonEmpty(input.title) && nonEmpty(input.type);
    checks.push(check(`input "${input.title}" has title and type`, "schema", valid, valid ? `Type: ${input.type}` : "Missing title or type.", "warning"));
  }

  for (const output of def.outputs ?? []) {
    const valid = nonEmpty(output.title) && nonEmpty(output.type);
    checks.push(check(`output "${output.title}" has title and type`, "schema", valid, valid ? `Type: ${output.type}` : "Missing title or type.", "warning"));
  }

  // Tools
  for (const tool of def.tools ?? []) {
    const valid = nonEmpty(tool.component_type) && nonEmpty(tool.id) && nonEmpty(tool.name) && tool.requires_confirmation !== undefined;
    checks.push(check(`tool "${tool.id}"`, "schema", valid, valid ? `${tool.name} (${tool.component_type})` : "Missing required tool fields.", "warning"));
  }

  // Specialized agents
  for (const sa of def.specialized_agents ?? []) {
    const hasRef = nonEmpty(sa.agent?.$component_ref);
    const hasInstructions = nonEmpty(sa.agent_specialization_parameters?.additional_instructions);
    checks.push(check(`specialized_agent "${sa.id}"`, "schema", hasRef && hasInstructions, hasRef && hasInstructions ? `Ref: ${sa.agent.$component_ref}` : "Missing $component_ref or additional_instructions.", "warning"));
  }

  // Flows
  for (const flow of def.flows ?? []) {
    const valid = flow.component_type === "Flow" && nonEmpty(flow.id) && nonEmpty(flow.name) && nonEmpty(flow.inputs) && nonEmpty(flow.outputs);
    checks.push(check(`flow "${flow.id}"`, "schema", valid, valid ? `${flow.name}: ${flow.inputs.length} inputs, ${flow.outputs.length} outputs` : "Missing required flow fields.", "warning"));
  }

  return checks;
}

function completenessChecks(def: AgentDefinition): ValidationCheck[] {
  const checks: ValidationCheck[] = [];
  const ext = def["x-agentlab"];

  checks.push(check("at least 1 flow", "completeness", (def.flows?.length ?? 0) > 0, def.flows?.length ? `${def.flows.length} flow(s).` : "No flows defined."));
  checks.push(check("at least 1 tool", "completeness", (def.tools?.length ?? 0) > 0, def.tools?.length ? `${def.tools.length} tool(s).` : "No tools defined."));

  // x-agentlab sections
  const registry = ext?.prompt_registry ?? {};
  checks.push(check("prompt_registry", "completeness", nonEmpty(registry), nonEmpty(registry) ? `${Object.keys(registry).length} prompt(s) registered.` : "Empty prompt registry.", "warning"));
  checks.push(check("guardrails.input", "completeness", nonEmpty(ext?.guardrails?.input), nonEmpty(ext?.guardrails?.input) ? `${ext.guardrails.input.length} input guardrail(s).` : "No input guardrails.", "warning"));
  checks.push(check("guardrails.output", "completeness", nonEmpty(ext?.guardrails?.output), nonEmpty(ext?.guardrails?.output) ? `${ext.guardrails.output.length} output guardrail(s).` : "No output guardrails.", "warning"));
  checks.push(check("boundaries", "completeness", nonEmpty(ext?.boundaries), nonEmpty(ext?.boundaries) ? `${ext.boundaries.length} boundary(ies).` : "No boundaries defined.", "warning"));
  checks.push(check("quality criteria", "completeness", nonEmpty(ext?.quality), nonEmpty(ext?.quality) ? `${ext.quality.length} criterion(ia).` : "No quality criteria.", "warning"));

  const mem = ext?.memory;
  const memComplete = nonEmpty(mem?.conversation) && nonEmpty(mem?.working) && nonEmpty(mem?.persistent) && nonEmpty(mem?.shared);
  checks.push(check("memory (all 4 sections)", "completeness", memComplete, memComplete ? "Conversation, working, persistent, shared all defined." : "Incomplete memory configuration.", "warning"));

  const ctx = ext?.context;
  checks.push(check("context strategy", "completeness", nonEmpty(ctx?.strategy) && nonEmpty(ctx?.priority_order), nonEmpty(ctx?.strategy) ? `Strategy: ${ctx.strategy}` : "Missing context strategy.", "warning"));
  checks.push(check("knowledge references", "completeness", nonEmpty(ext?.knowledge?.references), nonEmpty(ext?.knowledge?.references) ? `${ext.knowledge.references.length} reference(s).` : "No knowledge references.", "warning"));
  checks.push(check("output_constraints", "completeness", nonEmpty(ext?.output_constraints), nonEmpty(ext?.output_constraints) ? `${Object.keys(ext.output_constraints).length} constraint(s).` : "No output constraints.", "warning"));

  return checks;
}

function crossReferenceChecks(def: AgentDefinition, bundled: BundledAgentDefinition): ValidationCheck[] {
  const checks: ValidationCheck[] = [];
  const ext = def["x-agentlab"];
  const registry = ext?.prompt_registry ?? {};
  const registryKeys = new Set(Object.keys(registry));

  // Specialized agents reference the correct base agent
  for (const sa of def.specialized_agents ?? []) {
    const refMatch = sa.agent?.$component_ref === def.id;
    checks.push(check(`${sa.id} refs ${def.id}`, "cross-reference", refMatch, refMatch ? "Correct reference." : `References "${sa.agent?.$component_ref}", expected "${def.id}".`));
  }

  // Flow workflow steps reference registered prompts
  for (const flow of def.flows ?? []) {
    const steps = flow["x-agentlab"]?.workflow_shorthand ?? [];
    for (const step of steps) {
      const inRegistry = registryKeys.has(step.prompt);
      checks.push(check(`${flow.id} step ${step.step} → ${step.prompt}`, "cross-reference", inRegistry, inRegistry ? "Prompt registered." : `Prompt "${step.prompt}" not found in prompt_registry.`, "warning"));
    }

    // Sequential step numbers
    const numbers = steps.map((s) => s.step);
    const sequential = numbers.every((n, i) => n === i + 1);
    if (steps.length > 0) {
      checks.push(check(`${flow.id} step numbering`, "cross-reference", sequential, sequential ? "Steps are sequential." : `Step numbers [${numbers.join(",")}] are not sequential.`, "warning"));
    }
  }

  // A2A capabilities match flow IDs
  const flowIds = new Set(def.flows?.map((f) => f.id) ?? []);
  for (const cap of def.a2a?.agent_card?.capabilities ?? []) {
    const matches = flowIds.has(cap);
    checks.push(check(`a2a capability "${cap}"`, "cross-reference", matches, matches ? "Matches a flow." : `No flow with id "${cap}".`, "warning"));
  }

  // Bundled prompts match registry
  const bundledKeys = new Set(Object.keys(bundled.prompts));
  for (const key of registryKeys) {
    const hasBundled = bundledKeys.has(key);
    checks.push(check(`prompt file "${key}"`, "cross-reference", hasBundled, hasBundled ? "Bundled." : `Registered but no prompt file bundled for "${key}".`, "warning"));
  }

  return checks;
}

export function validateSpec(bundled: BundledAgentDefinition): ValidationCheck[] {
  const def = bundled.definition;
  return [
    ...schemaChecks(def),
    ...completenessChecks(def),
    ...crossReferenceChecks(def, bundled),
  ];
}
