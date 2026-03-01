import { AgentNode } from "./AgentNode";
import { FlowNode } from "./FlowNode";
import { ToolNode } from "./ToolNode";
import { ToolDetailNode } from "./ToolDetailNode";
import { VariantNode } from "./VariantNode";
import { VariantDetailNode } from "./VariantDetailNode";
import { PromptNode } from "./PromptNode";

export const nodeTypes = {
  agentNode: AgentNode,
  flowNode: FlowNode,
  toolNode: ToolNode,
  toolDetailNode: ToolDetailNode,
  variantNode: VariantNode,
  variantDetailNode: VariantDetailNode,
  promptNode: PromptNode,
} as const;
