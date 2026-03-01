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
const ROW_GAP = 70;
const SIDE_GAP = 60;
const PROMPT_GAP = 90;
const DETAIL_W = 240;
const DETAIL_GAP = 20;

const accentHex: Record<string, string> = {
  "text-blue-500": "#3b82f6", "text-emerald-500": "#10b981", "text-orange-500": "#f97316",
  "text-violet-500": "#8b5cf6", "text-rose-500": "#f43f5e", "text-amber-500": "#f59e0b",
  "text-cyan-500": "#06b6d4", "text-indigo-500": "#6366f1", "text-teal-500": "#14b8a6",
  "text-pink-500": "#ec4899", "text-red-500": "#ef4444", "text-lime-500": "#84cc16",
  "text-sky-500": "#0ea5e9", "text-purple-500": "#a855f7", "text-slate-500": "#64748b",
};

function centerRow(count: number, gap: number, y: number): { x: number; y: number }[] {
  const totalWidth = (count - 1) * gap;
  const startX = -totalWidth / 2;
  return Array.from({ length: count }, (_, i) => ({ x: startX + i * gap, y }));
}

export function buildFlowGraph(
  bundled: BundledAgentDefinition,
  colors: FlowGraphColors,
  expandedFlowId: string | null,
  expandedToolId: string | null = null,
  expandedVariantId: string | null = null,
): { nodes: Node[]; edges: Edge[] } {
  const def = bundled.definition;
  const nodes: Node[] = [];
  const edges: Edge[] = [];

  const flows = def.flows ?? [];
  const tools = def.tools ?? [];
  const variants = def.specialized_agents ?? [];

  // Dynamic flow gap: shrink for many flows but never below NODE_W to prevent overlap
  const flowGap = Math.max(NODE_W, FLOW_GAP - Math.max(0, flows.length - 3) * 20);
  const flowHalfSpread = flows.length > 1 ? ((flows.length - 1) * flowGap) / 2 : 0;

  // Pre-compute tool positions (cumulative Y to leave room for expanded detail)
  const DETAIL_EXTRA = 110;
  const toolYOffsets: number[] = [];
  let toolAccum = 0;
  tools.forEach((tool, i) => {
    toolYOffsets.push(toolAccum);
    if (i < tools.length - 1) {
      toolAccum += expandedToolId === tool.id ? SIDE_GAP + DETAIL_EXTRA : SIDE_GAP;
    }
  });
  const toolTotalH = toolAccum;
  const toolStartY = -toolTotalH / 2;
  const toolX = -Math.max(NODE_W / 2 + FLOW_GAP, flowHalfSpread + NODE_W / 2 + 60);

  // Pre-compute variant positions (cumulative Y to leave room for expanded detail)
  const VARIANT_DETAIL_EXTRA = 50;
  const variantYOffsets: number[] = [];
  let variantAccum = 0;
  variants.forEach((variant, i) => {
    variantYOffsets.push(variantAccum);
    if (i < variants.length - 1) {
      variantAccum += expandedVariantId === variant.id ? SIDE_GAP + VARIANT_DETAIL_EXTRA : SIDE_GAP;
    }
  });
  const variantTotalH = variantAccum;
  const variantStartY = -variantTotalH / 2;
  const variantX = Math.max(NODE_W / 2 + FLOW_GAP - 60, flowHalfSpread + 60);

  const edgeStyle = { stroke: "#d6d3d1", strokeWidth: 1.5 };
  const detailEdgeStyle = { stroke: accentHex[colors.icon] ?? "#78716c", strokeWidth: 1.5 };

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

  // Flows spread horizontally below agent (dynamic Y to clear side stacks)
  const toolBottomY = tools.length > 0
    ? toolStartY + toolTotalH + 48
    : 0;
  const variantBottomY = variants.length > 0
    ? variantStartY + variantTotalH + 48
    : 0;
  const flowY = Math.max(AGENT_H / 2, toolBottomY, variantBottomY) + ROW_GAP;
  const flowPositions = centerRow(flows.length, flowGap, flowY);
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
      target: flow.id,
      type: "default",
      style: edgeStyle,
    });

    if (isExpanded && steps.length > 0) {
      steps.forEach((step, si) => {
        const promptId = `${flow.id}__prompt__${step.prompt}__${step.step}`;
        const registry = def["x-agentlab"]?.prompt_registry?.[step.prompt];

        nodes.push({
          id: promptId,
          type: "promptNode",
          position: {
            x: pos.x + 10,
            y: pos.y + 80 + si * PROMPT_GAP,
          },
          data: {
            promptKey: step.prompt,
            stepNumber: step.step,
            description: registry?.description ?? step.description,
            input: step.input,
            colors,
            isFirst: si === 0,
            isLast: si === steps.length - 1,
          },
        });

        const sourceId = si === 0 ? flow.id : `${flow.id}__prompt__${steps[si - 1].prompt}__${steps[si - 1].step}`;
        edges.push({
          id: `${sourceId}->${promptId}`,
          source: sourceId,
          target: promptId,
          type: "straight",
          style: detailEdgeStyle,
        });
      });
    }
  });

  // Tools flanking left of agent, centered vertically around agent
  tools.forEach((tool, i) => {
    const isExpanded = expandedToolId === tool.id;
    const toolY = toolStartY + toolYOffsets[i];

    nodes.push({
      id: tool.id,
      type: "toolNode",
      position: {
        x: toolX,
        y: toolY,
      },
      data: {
        name: tool.name,
        description: tool.description,
        risk: tool["x-agentlab"]?.risk ?? "low",
        isExpanded,
        isDimmed: expandedToolId !== null && !isExpanded,
        colors,
      },
    });

    edges.push({
      id: `${def.id}->${tool.id}`,
      source: def.id,
      sourceHandle: "tools",
      target: tool.id,
      type: "default",
      style: edgeStyle,
    });

    if (isExpanded) {
      const detailId = `${tool.id}__detail`;
      nodes.push({
        id: detailId,
        type: "toolDetailNode",
        position: {
          x: toolX - DETAIL_W - DETAIL_GAP,
          y: toolY - 10,
        },
        data: {
          description: tool.description,
          risk: tool["x-agentlab"]?.risk ?? "low",
          howToUse: tool["x-agentlab"]?.how_to_use,
          inputs: tool.inputs ?? [],
          outputs: tool.outputs ?? [],
          colors,
        },
      });

      edges.push({
        id: `${tool.id}->${detailId}`,
        source: tool.id,
        sourceHandle: "detail",
        target: detailId,
        type: "straight",
        style: detailEdgeStyle,
      });
    }
  });

  // Variants flanking right of agent, centered vertically around agent
  variants.forEach((variant, i) => {
    const isExpanded = expandedVariantId === variant.id;
    const vY = variantStartY + variantYOffsets[i];

    nodes.push({
      id: variant.id,
      type: "variantNode",
      position: {
        x: variantX,
        y: vY,
      },
      data: {
        name: variant.name,
        isExpanded,
        isDimmed: expandedVariantId !== null && !isExpanded,
        colors,
      },
    });

    edges.push({
      id: `${def.id}->${variant.id}`,
      source: def.id,
      sourceHandle: "variants",
      target: variant.id,
      type: "default",
      style: edgeStyle,
    });

    if (isExpanded) {
      const detailId = `${variant.id}__detail`;
      nodes.push({
        id: detailId,
        type: "variantDetailNode",
        position: {
          x: variantX + NODE_W + DETAIL_GAP,
          y: vY - 10,
        },
        data: {
          description: variant.description,
          colors,
        },
      });

      edges.push({
        id: `${variant.id}->${detailId}`,
        source: variant.id,
        sourceHandle: "detail",
        target: detailId,
        type: "straight",
        style: detailEdgeStyle,
      });
    }
  });

  return { nodes, edges };
}
