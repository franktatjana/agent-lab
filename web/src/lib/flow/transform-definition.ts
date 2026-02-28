import type { Node, Edge } from "@xyflow/react";
import type { BundledAgentDefinition } from "@/lib/sandbox/definition-types";

export interface FlowGraphColors {
  bg: string;
  border: string;
  icon: string;
  light: string;
}

const NODE_W = 210;
const AGENT_H = 180;
const FLOW_GAP = 240;
const ROW_GAP = 160;
const SIDE_GAP = 110;
const PROMPT_GAP = 90;

function centerRow(count: number, gap: number, y: number): { x: number; y: number }[] {
  const totalWidth = (count - 1) * gap;
  const startX = -totalWidth / 2;
  return Array.from({ length: count }, (_, i) => ({ x: startX + i * gap, y }));
}

export function buildFlowGraph(
  bundled: BundledAgentDefinition,
  colors: FlowGraphColors,
  expandedFlowId: string | null,
): { nodes: Node[]; edges: Edge[] } {
  const def = bundled.definition;
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const flows = def.flows ?? [];
  const tools = def.tools ?? [];
  const variants = def.specialized_agents ?? [];

  // Agent centered between left/right flanks
  nodes.push({
    id: def.id,
    type: "agentNode",
    position: { x: -NODE_W / 2, y: -AGENT_H / 2 },
    data: {
      name: def.name,
      description: def.description,
      modelId: def.llm_configuration?.model_id,
      humanInTheLoop: def.human_in_the_loop,
      colors,
    },
  });

  // Flows spread horizontally below agent
  const flowY = AGENT_H / 2 + ROW_GAP;
  const flowPositions = centerRow(flows.length, FLOW_GAP, flowY);
  flows.forEach((flow, i) => {
    const pos = flowPositions[i];
    const steps = flow["x-agentlab"]?.workflow_shorthand ?? [];
    const isExpanded = expandedFlowId === flow.id;

    nodes.push({
      id: flow.id,
      type: "flowNode",
      position: pos,
      data: {
        name: flow.name,
        description: flow.description,
        stepCount: steps.length,
        isExpanded,
        isDimmed: expandedFlowId !== null && !isExpanded,
        colors,
      },
    });

    edges.push({
      id: `${def.id}->${flow.id}`,
      source: def.id,
      sourceHandle: "prompts",
      target: flow.id,
      type: "smoothstep",
      style: { stroke: "#d6d3d1", strokeWidth: 1.5 },
    });

    // Expanded: prompt chain below this flow
    if (isExpanded && steps.length > 0) {
      steps.forEach((step, si) => {
        const promptId = `${flow.id}__prompt__${step.prompt}__${step.step}`;
        const registry = def["x-agentlab"]?.prompt_registry?.[step.prompt];

        nodes.push({
          id: promptId,
          type: "promptNode",
          position: {
            x: pos.x,
            y: pos.y + 80 + si * PROMPT_GAP,
          },
          data: {
            promptKey: step.prompt,
            stepNumber: step.step,
            description: registry?.description ?? step.description,
            input: step.input,
            colors,
          },
        });

        const sourceId = si === 0 ? flow.id : `${flow.id}__prompt__${steps[si - 1].prompt}__${steps[si - 1].step}`;
        edges.push({
          id: `${sourceId}->${promptId}`,
          source: sourceId,
          target: promptId,
          type: "smoothstep",
          animated: true,
          style: { stroke: "#78716c", strokeWidth: 2 },
        });
      });
    }
  });

  // Tools flanking left of agent, centered vertically around agent
  const toolStackHeight = (tools.length - 1) * SIDE_GAP;
  const toolStartY = -toolStackHeight / 2;
  const toolX = -NODE_W / 2 - FLOW_GAP;

  tools.forEach((tool, i) => {
    nodes.push({
      id: tool.id,
      type: "toolNode",
      position: {
        x: toolX,
        y: toolStartY + i * SIDE_GAP,
      },
      data: {
        name: tool.name,
        description: tool.description,
        risk: tool["x-agentlab"]?.risk ?? "low",
        colors,
      },
    });

    edges.push({
      id: `${def.id}->${tool.id}`,
      source: def.id,
      sourceHandle: "tools",
      target: tool.id,
      type: "smoothstep",
      style: { stroke: "#d6d3d1", strokeWidth: 1.5 },
    });
  });

  // Variants flanking right of agent, centered vertically around agent
  const variantStackHeight = (variants.length - 1) * SIDE_GAP;
  const variantStartY = -variantStackHeight / 2;
  const variantX = NODE_W / 2 + FLOW_GAP - 60;

  variants.forEach((variant, i) => {
    nodes.push({
      id: variant.id,
      type: "variantNode",
      position: {
        x: variantX,
        y: variantStartY + i * SIDE_GAP,
      },
      data: {
        name: variant.name,
        description: variant.description,
        componentRef: variant.agent?.$component_ref,
        colors,
      },
    });

    edges.push({
      id: `${def.id}->${variant.id}`,
      source: def.id,
      sourceHandle: "variants",
      target: variant.id,
      type: "smoothstep",
      style: { stroke: "#d6d3d1", strokeWidth: 1.5 },
    });
  });

  return { nodes, edges };
}
