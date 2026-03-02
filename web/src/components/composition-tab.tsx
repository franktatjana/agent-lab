"use client";

import { useState, useEffect, useMemo, useCallback, memo } from "react";
import Link from "next/link";
import {
  ReactFlow,
  Background,
  Controls,
  type Node,
  type Edge,
  type NodeTypes,
  type NodeProps,
  Handle,
  Position,
  ReactFlowProvider,
  useReactFlow,
} from "@xyflow/react";
import dagre from "@dagrejs/dagre";
import { Bot, User, ShieldCheck, ArrowRight, ArrowLeftRight, X, ChevronDown } from "lucide-react";
import { agents } from "@/data/agents";
import type { BundledAgentDefinition } from "@/lib/sandbox/definition-types";
import { buildHandoffRegistry, type Handoff, type HandoffType } from "@/lib/handoff-registry";

const accentHex: Record<string, string> = {
  blue: "#3b82f6", emerald: "#10b981", orange: "#f97316",
  violet: "#8b5cf6", rose: "#f43f5e", amber: "#f59e0b",
  cyan: "#06b6d4", indigo: "#6366f1", teal: "#14b8a6",
  pink: "#ec4899", red: "#ef4444", lime: "#84cc16",
  sky: "#0ea5e9", purple: "#a855f7", slate: "#64748b",
  stone: "#78716c",
};

const bgHex: Record<string, string> = {
  blue: "#dbeafe", emerald: "#d1fae5", orange: "#ffedd5",
  violet: "#ede9fe", rose: "#ffe4e6", amber: "#fef3c7",
  cyan: "#cffafe", indigo: "#e0e7ff", teal: "#ccfbf1",
  pink: "#fce7f3", sky: "#e0f2fe", purple: "#f3e8ff",
  slate: "#f1f5f9", stone: "#f5f5f4", lime: "#ecfccb",
  red: "#fee2e2",
};

const typeConfig: Record<HandoffType, { label: string; color: string }> = {
  delegation: { label: "Delegation", color: "#6366f1" },
  "data-sharing": { label: "Data Sharing", color: "#10b981" },
  escalation: { label: "Escalation", color: "#f59e0b" },
};

// ── Center agent node with spread handles ──

function CenterNodeComponent({ data }: NodeProps) {
  const { name, description, humanInTheLoop, color } = data as {
    name: string; description: string; humanInTheLoop: boolean; color: string;
  };
  const hex = accentHex[color] ?? "#78716c";
  const bg = bgHex[color] ?? "#f5f5f4";

  return (
    <div
      className="rounded-xl px-5 py-4 shadow-md min-w-64 max-w-80 text-center border-2"
      style={{ backgroundColor: bg, borderColor: hex }}
    >
      <Handle type="target" position={Position.Left} className="!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent" />
      <Handle type="source" position={Position.Right} className="!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent" />

      <div className="flex items-center justify-center gap-2 mb-2">
        <Bot className="w-5 h-5" style={{ color: hex }} />
        <span className="font-semibold text-stone-900 text-sm">{name}</span>
      </div>
      <p className="text-xs text-stone-500 leading-relaxed mb-2 line-clamp-2">{description}</p>
      {humanInTheLoop && (
        <span className="text-[10px] bg-white/60 border border-stone-200 rounded px-1.5 py-0.5 text-stone-500 inline-flex items-center gap-0.5">
          <ShieldCheck className="w-3 h-3" /> HITL
        </span>
      )}
    </div>
  );
}

// ── Peer agent node ──

function PeerNodeComponent({ data }: NodeProps) {
  const { name, color } = data as {
    name: string; color: string; direction: "outgoing" | "incoming";
  };
  const hex = accentHex[color] ?? "#78716c";

  return (
    <div
      className="rounded-lg px-4 py-3 shadow-sm min-w-48 max-w-64 cursor-pointer border bg-white hover:shadow-md transition-all"
      style={{ borderColor: hex }}
    >
      <Handle type="target" position={Position.Left} className="!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent" />
      <Handle type="source" position={Position.Right} className="!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent" />

      <div className="flex items-center gap-2">
        <Bot className="w-4 h-4 shrink-0" style={{ color: hex }} />
        <span className="font-medium text-xs text-stone-800">{name}</span>
      </div>
    </div>
  );
}

// ── Human node ──

function HumanNodeComponent({ data }: NodeProps) {
  return (
    <div className="rounded-lg px-4 py-3 shadow-sm min-w-48 max-w-64 border border-stone-200 bg-stone-50">
      <Handle type="target" position={Position.Left} className="!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent" />
      <div className="flex items-center gap-2">
        <User className="w-4 h-4 text-stone-400" />
        <span className="font-medium text-xs text-stone-600">Human Expert</span>
      </div>
    </div>
  );
}

const CenterNode = memo(CenterNodeComponent);
const PeerNode = memo(PeerNodeComponent);
const HumanNode = memo(HumanNodeComponent);
const nodeTypes: NodeTypes = { centerNode: CenterNode, peerNode: PeerNode, humanNode: HumanNode };

// ── Layout ──

const CENTER_W = 280;
const CENTER_H = 120;
const PEER_W = 200;
const PEER_H = 48;

function layoutNodes(nodes: Node[], edges: Edge[]): Node[] {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: "LR", ranksep: 220, nodesep: 60 });

  for (const node of nodes) {
    const isCenter = node.type === "centerNode";
    g.setNode(node.id, { width: isCenter ? CENTER_W : PEER_W, height: isCenter ? CENTER_H : PEER_H });
  }
  for (const edge of edges) g.setEdge(edge.source, edge.target);

  dagre.layout(g);

  return nodes.map((node) => {
    const pos = g.node(node.id);
    const isCenter = node.type === "centerNode";
    const w = isCenter ? CENTER_W : PEER_W;
    const h = isCenter ? CENTER_H : PEER_H;
    return { ...node, position: { x: pos.x - w / 2, y: pos.y - h / 2 } };
  });
}

// ── Edge detail lookup ──

interface EdgeMeta {
  triggers: string[];
  type: HandoffType;
  sourceName: string;
  targetName: string;
}

// ── Build agent-centric graph ──

function buildAgentGraph(
  agentId: string,
  handoffs: Handoff[],
  definitions: Record<string, BundledAgentDefinition>,
  colorMap: Map<string, string>,
): { nodes: Node[]; edges: Edge[]; edgeMeta: Map<string, EdgeMeta> } {
  const relevant = handoffs.filter((h) => h.sourceId === agentId || h.targetId === agentId);
  if (relevant.length === 0) return { nodes: [], edges: [], edgeMeta: new Map() };

  const currentDef = definitions[agentId];
  const nodes: Node[] = [];

  const addedPeers = new Set<string>();
  let hasHuman = false;

  for (const h of relevant) {
    if (h.sourceId !== agentId && !addedPeers.has(h.sourceId)) {
      addedPeers.add(h.sourceId);
      nodes.push({
        id: h.sourceId,
        type: "peerNode",
        position: { x: 0, y: 0 },
        data: { name: h.sourceName, color: h.sourceColor, direction: "incoming" },
      });
    }

    if (h.sourceId === agentId) {
      if (h.type === "escalation") {
        if (!hasHuman) hasHuman = true;
      } else if (h.targetId && h.targetId !== agentId && !addedPeers.has(h.targetId)) {
        addedPeers.add(h.targetId);
        nodes.push({
          id: h.targetId,
          type: "peerNode",
          position: { x: 0, y: 0 },
          data: { name: h.targetName, color: h.targetColor, direction: "outgoing" },
        });
      } else if (!h.targetId) {
        const unbuiltId = `__unbuilt__${h.targetName.replace(/\s+/g, "-").toLowerCase()}`;
        if (!addedPeers.has(unbuiltId)) {
          addedPeers.add(unbuiltId);
          nodes.push({
            id: unbuiltId,
            type: "peerNode",
            position: { x: 0, y: 0 },
            data: { name: h.targetName, color: "stone", direction: "outgoing" },
          });
        }
      }
    }
  }

  if (hasHuman) {
    nodes.push({
      id: "__human__",
      type: "humanNode",
      position: { x: 0, y: 0 },
      data: {},
    });
  }

  nodes.unshift({
    id: agentId,
    type: "centerNode",
    position: { x: 0, y: 0 },
    data: {
      name: currentDef?.definition.name ?? agentId,
      description: currentDef?.definition.description ?? "",
      humanInTheLoop: currentDef?.definition.human_in_the_loop ?? false,
      color: colorMap.get(agentId) ?? "slate",
    },
  });

  // Group handoffs into edges
  const edgeMap = new Map<string, { hs: Handoff[]; source: string; target: string; type: HandoffType }>();
  for (const h of relevant) {
    let target: string;
    if (h.type === "escalation" && h.sourceId === agentId) {
      target = "__human__";
    } else if (h.targetId) {
      target = h.targetId;
    } else {
      target = `__unbuilt__${h.targetName.replace(/\s+/g, "-").toLowerCase()}`;
    }
    const key = `${h.sourceId}->${target}::${h.type}`;
    if (!edgeMap.has(key)) edgeMap.set(key, { hs: [], source: h.sourceId, target, type: h.type });
    edgeMap.get(key)!.hs.push(h);
  }

  // Layout with dagre
  const simpleEdges: Edge[] = [...edgeMap.entries()].map(([key, { source, target }]) => ({
    id: key, source, target,
  }));
  const laidOut = layoutNodes(nodes, simpleEdges);

  // Position map to detect back-edges (right-to-left)
  const xPos = new Map(laidOut.map((n) => [n.id, n.position.x]));

  const edgeMeta = new Map<string, EdgeMeta>();

  const edges: Edge[] = [...edgeMap.entries()]
    .filter(([, { source, target }]) => (xPos.get(source) ?? 0) <= (xPos.get(target) ?? 0))
    .map(([key, { hs, source, target, type }]) => {
      const isEscalation = type === "escalation";
      const config = typeConfig[type];
      const label = hs.length === 1 ? config.label : `${config.label} (${hs.length})`;

      edgeMeta.set(key, {
        triggers: hs.map((h) => h.trigger),
        type,
        sourceName: hs[0].sourceName,
        targetName: hs[0].targetName,
      });

      return {
        id: key,
        source,
        target,
        type: "default",
        animated: true,
        label,
        labelStyle: { fontSize: 9, fill: config.color, fontWeight: 500, cursor: "pointer" },
        labelBgStyle: { fill: "#ffffff", fillOpacity: 0.9, cursor: "pointer" },
        labelBgPadding: [4, 2] as [number, number],
        labelBgBorderRadius: 3,
        style: {
          stroke: config.color,
          strokeWidth: 1.5,
          strokeDasharray: isEscalation ? "6 4" : undefined,
        },
      };
    });

  return { nodes: laidOut, edges, edgeMeta };
}

// ── Tooltip ──

function EdgeTooltip({
  meta,
  position,
  onClose,
}: {
  meta: EdgeMeta;
  position: { x: number; y: number };
  onClose: () => void;
}) {
  const config = typeConfig[meta.type];
  return (
    <div
      className="absolute z-50 bg-white rounded-lg shadow-lg border border-stone-200 p-3 max-w-xs"
      style={{ left: position.x, top: position.y, transform: "translate(-50%, 8px)" }}
    >
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-1.5">
          <span className="rounded px-1.5 py-0.5 text-[9px] font-medium text-white" style={{ backgroundColor: config.color }}>
            {config.label}
          </span>
          <span className="text-[10px] text-stone-400">
            {meta.sourceName} → {meta.targetName}
          </span>
        </div>
        <button type="button" onClick={onClose} className="text-stone-300 hover:text-stone-500">
          <X className="w-3 h-3" />
        </button>
      </div>
      <ul className="space-y-1">
        {meta.triggers.map((t, i) => (
          <li key={i} className="text-xs text-stone-600 leading-snug flex gap-1.5">
            <span className="text-stone-300 shrink-0 mt-0.5">&#8226;</span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Graph component ──

function CompositionGraph({
  agentId,
  handoffs,
  definitions,
  colorMap,
}: {
  agentId: string;
  handoffs: Handoff[];
  definitions: Record<string, BundledAgentDefinition>;
  colorMap: Map<string, string>;
}) {
  const { nodes, edges, edgeMeta } = useMemo(
    () => buildAgentGraph(agentId, handoffs, definitions, colorMap),
    [agentId, handoffs, definitions, colorMap],
  );

  const [tooltip, setTooltip] = useState<{ meta: EdgeMeta; position: { x: number; y: number } } | null>(null);

  const { fitView } = useReactFlow();
  useEffect(() => { setTimeout(() => fitView({ padding: 0.25, maxZoom: 0.85 }), 50); }, [nodes, edges, fitView]);

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    if (node.id !== "__human__" && node.id !== agentId && !node.id.startsWith("__unbuilt__")) {
      window.location.href = `/agent/${node.id}`;
    }
  }, [agentId]);

  const onEdgeClick = useCallback((event: React.MouseEvent, edge: Edge) => {
    const meta = edgeMeta.get(edge.id);
    if (!meta) return;
    const container = (event.target as HTMLElement).closest(".react-flow");
    if (!container) return;
    const rect = container.getBoundingClientRect();
    setTooltip({
      meta,
      position: { x: event.clientX - rect.left, y: event.clientY - rect.top },
    });
  }, [edgeMeta]);

  const onPaneClick = useCallback(() => setTooltip(null), []);

  return (
    <div className="relative w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        onEdgeClick={onEdgeClick}
        onPaneClick={onPaneClick}
        fitView
        fitViewOptions={{ padding: 0.25, maxZoom: 0.85 }}
        minZoom={0.3}
        maxZoom={1.5}
        nodesDraggable
        proOptions={{ hideAttribution: true }}
      >
        <Background gap={20} size={1} color="#e7e5e4" />
        <Controls showInteractive={false} />
      </ReactFlow>
      {tooltip && (
        <EdgeTooltip meta={tooltip.meta} position={tooltip.position} onClose={() => setTooltip(null)} />
      )}
    </div>
  );
}

// ── Main tab ──

export function CompositionTab({
  agentId,
  colors,
}: {
  agentId: string;
  colors: { bg: string; border: string; icon: string; light: string };
}) {
  const [handoffs, setHandoffs] = useState<Handoff[]>([]);
  const [definitions, setDefinitions] = useState<Record<string, BundledAgentDefinition>>({});
  const [loading, setLoading] = useState(true);
  const [detailsOpen, setDetailsOpen] = useState(false);

  const colorMap = useMemo(() => new Map(agents.map((a) => [a.id, a.color])), []);

  useEffect(() => {
    fetch("/definitions.json")
      .then((res) => res.json())
      .then((data: Record<string, BundledAgentDefinition>) => {
        setDefinitions(data);
        const registry = buildHandoffRegistry(data, colorMap);
        setHandoffs(registry.handoffs);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [colorMap]);

  const outgoing = useMemo(() => handoffs.filter((h) => h.sourceId === agentId), [handoffs, agentId]);
  const incoming = useMemo(() => handoffs.filter((h) => h.targetId === agentId), [handoffs, agentId]);

  if (loading) {
    return <div className="flex items-center justify-center py-12"><p className="text-sm text-stone-400">Loading...</p></div>;
  }

  const total = outgoing.length + incoming.length;

  if (total === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-sm text-stone-400">No handoffs defined for this agent.</p>
        <Link href="/composition" className="text-xs text-stone-500 hover:text-stone-700 underline mt-2 inline-block">
          View full composition registry
        </Link>
      </div>
    );
  }

  const delegationCount = outgoing.filter((h) => h.type === "delegation").length;
  const dataSharingCount = outgoing.filter((h) => h.type === "data-sharing").length + incoming.length;
  const escalationCount = outgoing.filter((h) => h.type === "escalation").length;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-medium text-stone-700">Agent Composition</h3>
          <div className="flex items-center gap-3 text-[11px] text-stone-400">
            <span className="flex items-center gap-1"><ArrowRight size={11} /> {delegationCount} {delegationCount === 1 ? "delegation" : "delegations"}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><ArrowLeftRight size={11} /> {dataSharingCount} data</span>
            <span>·</span>
            <span className="flex items-center gap-1"><User size={11} /> {escalationCount} {escalationCount === 1 ? "escalation" : "escalations"}</span>
          </div>
        </div>
        <span className="text-[11px] text-stone-400">Click an edge to see handoff details</span>
      </div>

      <div className="rounded-lg border border-stone-200 bg-white">
        <button
          type="button"
          onClick={() => setDetailsOpen((v) => !v)}
          className="w-full flex items-center gap-4 px-4 py-2.5 hover:bg-stone-50 transition-colors rounded-lg"
        >
          <div className="flex items-center gap-6 text-[11px] text-stone-400">
            <span><strong className="text-stone-700">{incoming.length}</strong> incoming</span>
            <span><strong className="text-stone-700">{outgoing.length}</strong> outgoing</span>
          </div>
          {!detailsOpen && (
            <span className="text-[10px] text-stone-300 ml-auto">Click to unfold for more details</span>
          )}
          <Link href="/composition" className={`text-[11px] text-stone-400 hover:text-stone-600 underline ${detailsOpen ? "ml-auto" : ""}`} onClick={(e) => e.stopPropagation()}>
            Full registry
          </Link>
          <ChevronDown className={`w-3.5 h-3.5 text-stone-400 transition-transform ${detailsOpen ? "rotate-180" : ""}`} />
        </button>

        {detailsOpen && (
          <div className="px-4 pb-3 space-y-3 border-t border-stone-100">
            {incoming.length > 0 && (
              <div className="space-y-2 pt-3">
                <p className="text-[11px] font-medium text-stone-500 uppercase tracking-wide">Incoming</p>
                {incoming.map((h, i) => {
                  const config = typeConfig[h.type];
                  return (
                    <div key={`in-${i}`} className="rounded border border-stone-100 px-3 py-2">
                      <div className="flex items-center gap-2 text-xs mb-1">
                        <span className="shrink-0 rounded px-1.5 py-0.5 text-[9px] font-medium text-white" style={{ backgroundColor: config.color }}>
                          {config.label}
                        </span>
                        <span className="font-medium text-stone-700">{h.sourceName}</span>
                        <ArrowRight className="w-3 h-3 text-stone-300 shrink-0" />
                      </div>
                      <p className="text-[11px] text-stone-500 leading-snug"><span className="text-stone-400">When:</span> {h.trigger}</p>
                      {h.payload !== h.trigger && (
                        <p className="text-[11px] text-stone-500 leading-snug"><span className="text-stone-400">Passes:</span> {h.payload}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
            {outgoing.length > 0 && (
              <div className="space-y-2 pt-3">
                <p className="text-[11px] font-medium text-stone-500 uppercase tracking-wide">Outgoing</p>
                {outgoing.map((h, i) => {
                  const config = typeConfig[h.type];
                  return (
                    <div key={`out-${i}`} className="rounded border border-stone-100 px-3 py-2">
                      <div className="flex items-center gap-2 text-xs mb-1">
                        <span className="shrink-0 rounded px-1.5 py-0.5 text-[9px] font-medium text-white" style={{ backgroundColor: config.color }}>
                          {config.label}
                        </span>
                        <ArrowRight className="w-3 h-3 text-stone-300 shrink-0" />
                        <span className="font-medium text-stone-700">{h.targetName}</span>
                        {!h.isBuilt && <span className="text-[9px] text-stone-400 border border-stone-200 rounded px-1 py-px">unbuilt</span>}
                      </div>
                      <p className="text-[11px] text-stone-500 leading-snug"><span className="text-stone-400">When:</span> {h.trigger}</p>
                      {h.payload !== h.trigger && (
                        <p className="text-[11px] text-stone-500 leading-snug"><span className="text-stone-400">Passes:</span> {h.payload}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="w-full h-[600px] rounded-xl border border-stone-200 bg-white overflow-hidden">
        <ReactFlowProvider>
          <CompositionGraph agentId={agentId} handoffs={handoffs} definitions={definitions} colorMap={colorMap} />
        </ReactFlowProvider>
      </div>
    </div>
  );
}
