"use client";

import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  type Node,
} from "@xyflow/react";
import { GitBranch, Workflow, Wrench, Users } from "lucide-react";

import type { BundledAgentDefinition } from "@/lib/sandbox/definition-types";
import { buildFlowGraph } from "@/lib/flow/transform-definition";
import { nodeTypes } from "./nodes";

interface FlowTabProps {
  agentId: string;
  colors: { bg: string; border: string; icon: string; light: string };
  onOpenFlyout?: (flyout: { title: string; content: string }) => void;
}

function FlowGraph({ bundled, colors, onOpenFlyout }: {
  bundled: BundledAgentDefinition;
  colors: FlowTabProps["colors"];
  onOpenFlyout?: FlowTabProps["onOpenFlyout"];
}) {
  const [expandedFlowId, setExpandedFlowId] = useState<string | null>(null);
  const { fitView } = useReactFlow();
  const draggedPositions = useRef<Record<string, { x: number; y: number }>>({});

  const { nodes: initialNodes, edges: initialEdges } = useMemo(
    () => buildFlowGraph(bundled, colors, expandedFlowId),
    [bundled, colors, expandedFlowId],
  );

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const handleNodesChange: typeof onNodesChange = useCallback(
    (changes) => {
      onNodesChange(changes);
      for (const change of changes) {
        if (change.type === "position" && change.position) {
          draggedPositions.current[change.id] = change.position;
        }
      }
    },
    [onNodesChange],
  );

  useEffect(() => {
    const merged = initialNodes.map((node) => {
      const dragged = draggedPositions.current[node.id];
      return dragged ? { ...node, position: dragged } : node;
    });
    setNodes(merged);
    setEdges(initialEdges);
    setTimeout(() => fitView({ padding: 0.2, duration: 300 }), 50);
  }, [initialNodes, initialEdges, setNodes, setEdges, fitView]);

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      if (node.type === "flowNode") {
        setExpandedFlowId((prev) => (prev === node.id ? null : node.id));
      } else if (node.type === "promptNode" && onOpenFlyout) {
        const promptKey = (node.data as { promptKey: string }).promptKey;
        const content = bundled.prompts[promptKey];
        if (content) {
          onOpenFlyout({ title: promptKey, content });
        }
      }
    },
    [bundled, onOpenFlyout],
  );

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={handleNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={onNodeClick}
      nodeTypes={nodeTypes}
      fitView
      fitViewOptions={{ padding: 0.2 }}
      nodesDraggable
      nodesConnectable={false}
      elementsSelectable
      zoomOnScroll
      panOnDrag
      minZoom={0.3}
      maxZoom={2}
      proOptions={{ hideAttribution: false }}
    >
      <Background gap={20} size={1} color="#e7e5e4" />
      <Controls showInteractive={false} />
    </ReactFlow>
  );
}

export function FlowTab({ agentId, colors, onOpenFlyout }: FlowTabProps) {
  const [bundled, setBundled] = useState<BundledAgentDefinition | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/definitions.json")
      .then((res) => res.json())
      .then((data) => {
        if (data[agentId]) {
          setBundled(data[agentId]);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [agentId]);

  if (loading) {
    return (
      <div className="rounded-lg border border-dashed border-stone-300 p-12 text-center">
        <p className="text-sm text-stone-400">Loading flow visualization...</p>
      </div>
    );
  }

  if (!bundled) {
    return (
      <div className="rounded-lg border border-dashed border-stone-300 p-12 text-center">
        <GitBranch size={32} className="mx-auto text-stone-300 mb-3" />
        <h3 className="text-lg font-semibold text-stone-700 mb-2">No Flow Available</h3>
        <p className="text-sm text-stone-500 max-w-md mx-auto">
          This agent does not have a portable specification yet. Once a definition is added,
          you can explore its architecture as an interactive flow graph.
        </p>
      </div>
    );
  }

  const def = bundled.definition;
  const flowCount = def.flows?.length ?? 0;
  const toolCount = def.tools?.length ?? 0;
  const variantCount = def.specialized_agents?.length ?? 0;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-medium text-stone-700">Agent Architecture</h3>
          <div className="flex items-center gap-3 text-[11px] text-stone-400">
            <span className="flex items-center gap-1"><Workflow size={11} /> {flowCount} {flowCount === 1 ? "flow" : "flows"}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Wrench size={11} /> {toolCount} {toolCount === 1 ? "tool" : "tools"}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Users size={11} /> {variantCount} {variantCount === 1 ? "variant" : "variants"}</span>
          </div>
        </div>
        <span className="text-[11px] text-stone-400">Click a flow to expand its prompt chain</span>
      </div>
      <div className="w-full h-[600px] rounded-xl border border-stone-200 bg-white overflow-hidden">
        <ReactFlowProvider>
          <FlowGraph bundled={bundled} colors={colors} onOpenFlyout={onOpenFlyout} />
        </ReactFlowProvider>
      </div>
    </div>
  );
}
