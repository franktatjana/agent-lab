// Types aligned with Oracle Agent Spec 26.1.0 + x-agentlab extensions

export interface JSONSchemaProperty {
  title: string;
  type: string;
  description?: string;
  default?: string;
}

export interface WorkflowStep {
  step: number;
  prompt: string;
  input: string;
  description: string;
}

export interface FlowDef {
  component_type: "Flow";
  id: string;
  name: string;
  description: string;
  inputs: JSONSchemaProperty[];
  outputs: JSONSchemaProperty[];
  "x-agentlab"?: {
    workflow_shorthand: WorkflowStep[];
  };
}

export interface PromptRegistryEntry {
  description: string;
  source: string;
  inputs?: JSONSchemaProperty[];
  outputs?: JSONSchemaProperty[];
}

export interface ToolDef {
  component_type: string;
  id: string;
  name: string;
  description: string;
  requires_confirmation: boolean;
  inputs: JSONSchemaProperty[];
  outputs: JSONSchemaProperty[];
  "x-agentlab"?: {
    risk: string;
  };
}

export interface SpecializedAgentDef {
  component_type: "SpecializedAgent";
  id: string;
  name: string;
  description: string;
  agent: { $component_ref: string };
  agent_specialization_parameters: {
    additional_instructions: string;
    human_in_the_loop?: boolean;
  };
}

export interface AgentDefinition {
  agentspec_version: string;
  component_type: string;
  id: string;
  name: string;
  description: string;
  metadata: {
    definition_version: string;
    tags: string[];
    responsibility: string;
  };
  system_prompt: string;
  human_in_the_loop: boolean;
  llm_configuration: {
    model_id: string | null;
    default_generation_parameters: {
      temperature: number;
      max_tokens: number;
    };
  };
  inputs: JSONSchemaProperty[];
  outputs: JSONSchemaProperty[];
  tools: ToolDef[];
  toolboxes: unknown[];
  specialized_agents: SpecializedAgentDef[];
  flows: FlowDef[];
  a2a: {
    agent_url: string | null;
    connection_config: unknown | null;
    agent_card: {
      protocol_version: string;
      capabilities: string[];
      input_modes: string[];
      output_modes: string[];
    };
  };
  "x-agentlab": {
    fallback_model: string | null;
    prompt_registry: Record<string, PromptRegistryEntry>;
    validation: {
      required_dimensions: Array<{ name: string; description: string }>;
      on_incomplete: string;
    };
    output_constraints: Record<string, string | number>;
    guardrails: {
      input: string[];
      output: string[];
      resource: Array<Record<string, number>>;
    };
    boundaries: string[];
    escalation_triggers: string[];
    human_in_the_loop_conditions: string[];
    memory: {
      conversation: string;
      working: string[];
      persistent: string[];
      shared: string[];
    };
    context: {
      strategy: string;
      token_budget: number;
      reserve_for_references: number;
      priority_order: string[];
      include: string[];
      exclude: string[];
    };
    knowledge: {
      references: Array<{
        path: string;
        description: string;
        load_when: string;
      }>;
    };
    assets: Array<{
      name: string;
      filename: string;
      description: string;
    }>;
    quality: string[];
  };
}

export interface ExampleFixture {
  input: Record<string, string>;
  output: Record<string, unknown>;
}

export interface BundledAgentDefinition {
  definition: AgentDefinition;
  rawYaml: string;
  filename: string;
  examples: Record<string, ExampleFixture>;
  prompts: Record<string, string>;
}
