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
  type NodeChange,
  Handle,
  Position,
  ReactFlowProvider,
  useReactFlow,
  applyNodeChanges,
} from "@xyflow/react";
import ELK from "elkjs/lib/elk.bundled.js";
import { ArrowLeft, ArrowRight, User, List, GitBranch, ChevronDown, ChevronRight } from "lucide-react";
import { agents } from "@/data/agents";
import type { BundledAgentDefinition } from "@/lib/sandbox/definition-types";
import { buildHandoffRegistry, type Handoff, type HandoffType, type HandoffStats } from "@/lib/handoff-registry";

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

const typeConfig: Record<HandoffType, { label: string; color: string; bg: string }> = {
  delegation: { label: "Delegation", color: "#6366f1", bg: "#e0e7ff" },
  "data-sharing": { label: "Data Sharing", color: "#10b981", bg: "#d1fae5" },
  escalation: { label: "Escalation", color: "#f59e0b", bg: "#fef3c7" },
};

// ── Lean agent node ──

const hiddenHandle = "!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent";

function AgentNodeComponent({ data }: NodeProps) {
  const { label, color, flowCount, isHuman } = data as {
    label: string;
    color: string;
    flowCount: number;
    isHuman: boolean;
  };
  const hex = accentHex[color] ?? "#78716c";

  return (
    <div
      className="rounded-lg px-4 py-3 shadow-sm min-w-[160px] max-w-[200px] cursor-pointer bg-white border hover:shadow-md transition-all"
      style={{ borderColor: hex }}
    >
      <Handle type="target" position={Position.Left} className={hiddenHandle} />
      <Handle type="source" position={Position.Right} className={hiddenHandle} />

      <div className="flex items-center gap-2">
        {isHuman ? (
          <User size={14} className="shrink-0" style={{ color: hex }} />
        ) : (
          <GitBranch size={14} className="shrink-0" style={{ color: hex }} />
        )}
        <div>
          <span className="font-medium text-xs text-stone-800 leading-tight">{label}</span>
          {!isHuman && (
            <p className="text-[10px] text-stone-400">{flowCount} flows</p>
          )}
        </div>
      </div>
    </div>
  );
}

const AgentNode = memo(AgentNodeComponent);
const nodeTypes: NodeTypes = { agentNode: AgentNode };

// ── ELK layout (better crossing minimization) ──

const NODE_W = 180;
const NODE_H = 70;
const elk = new ELK();

async function layoutGraph(nodes: Node[], edges: Edge[]): Promise<Node[]> {
  const elkGraph = {
    id: "root",
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": "RIGHT",
      "elk.layered.spacing.nodeNodeBetweenLayers": "220",
      "elk.spacing.nodeNode": "60",
      "elk.layered.crossingMinimization.strategy": "LAYER_SWEEP",
      "elk.layered.nodePlacement.strategy": "NETWORK_SIMPLEX",
      "elk.layered.thoroughness": "100",
    },
    children: nodes.map((n) => ({ id: n.id, width: NODE_W, height: NODE_H })),
    edges: edges.map((e) => ({ id: e.id, sources: [e.source], targets: [e.target] })),
  };

  const result = await elk.layout(elkGraph);

  return nodes.map((node) => {
    const elkNode = result.children?.find((c) => c.id === node.id);
    return {
      ...node,
      position: { x: elkNode?.x ?? 0, y: elkNode?.y ?? 0 },
    };
  });
}

// ── Build graph from handoffs ──

function buildGraphData(
  handoffs: Handoff[],
  definitions: Record<string, BundledAgentDefinition>,
): { nodes: Node[]; edges: Edge[] } {
  const agentNodes = new Map<string, { label: string; color: string; flowCount: number }>();
  const unbuiltNodes = new Map<string, { label: string }>();
  let hasHuman = false;

  for (const h of handoffs) {
    if (!agentNodes.has(h.sourceId)) {
      agentNodes.set(h.sourceId, {
        label: h.sourceName,
        color: h.sourceColor,
        flowCount: definitions[h.sourceId]?.definition.flows?.length ?? 0,
      });
    }
    if (h.targetId && !agentNodes.has(h.targetId)) {
      agentNodes.set(h.targetId, {
        label: h.targetName,
        color: h.targetColor,
        flowCount: definitions[h.targetId]?.definition.flows?.length ?? 0,
      });
    }
    if (!h.targetId) {
      if (h.type === "escalation") {
        hasHuman = true;
      } else {
        const unbuiltId = `__unbuilt__${h.targetName.replace(/\s+/g, "-").toLowerCase()}`;
        if (!unbuiltNodes.has(unbuiltId)) {
          unbuiltNodes.set(unbuiltId, { label: h.targetName });
        }
      }
    }
  }

  const nodes: Node[] = [...agentNodes.entries()].map(([id, data]) => ({
    id,
    type: "agentNode",
    position: { x: 0, y: 0 },
    data: { ...data, isHuman: false },
  }));

  for (const [id, data] of unbuiltNodes) {
    nodes.push({
      id,
      type: "agentNode",
      position: { x: 0, y: 0 },
      data: { label: data.label, color: "stone", flowCount: 0, isHuman: false },
    });
  }

  if (hasHuman) {
    nodes.push({
      id: "__human__",
      type: "agentNode",
      position: { x: 0, y: 0 },
      data: { label: "Human Expert", color: "stone", flowCount: 0, isHuman: true },
    });
  }

  // Aggregate edges: group handoffs between same source→target
  const edgeMap = new Map<string, { handoffs: Handoff[]; source: string; target: string }>();
  for (const h of handoffs) {
    let target: string;
    if (h.targetId) {
      target = h.targetId;
    } else if (h.type === "escalation") {
      target = "__human__";
    } else {
      target = `__unbuilt__${h.targetName.replace(/\s+/g, "-").toLowerCase()}`;
    }
    const key = `${h.sourceId}->${target}`;
    if (!edgeMap.has(key)) {
      edgeMap.set(key, { handoffs: [], source: h.sourceId, target });
    }
    edgeMap.get(key)!.handoffs.push(h);
  }

  const edges: Edge[] = [...edgeMap.entries()].map(([key, { handoffs: hs, source, target }]) => {
    const primary = hs[0];
    const config = typeConfig[primary.type];
    const isEscalation = primary.type === "escalation";
    return {
      id: key,
      source,
      target,
      type: "default",
      animated: false,
      style: {
        stroke: config.color,
        strokeWidth: 1.5,
        strokeDasharray: isEscalation ? "6 4" : undefined,
      },
      data: { triggers: hs.map((h) => h.trigger), type: primary.type, count: hs.length },
    };
  });

  return { nodes, edges };
}

// ── Edge tooltip ──

interface EdgeTooltipData {
  triggers: string[];
  type: HandoffType;
  position: { x: number; y: number };
}

function EdgeTooltip({ data, onClose }: { data: EdgeTooltipData; onClose: () => void }) {
  const config = typeConfig[data.type];
  return (
    <div
      className="absolute z-50 bg-white rounded-lg shadow-lg border border-stone-200 p-3 max-w-xs"
      style={{ left: data.position.x, top: data.position.y, transform: "translate(-50%, 8px)" }}
    >
      <div className="flex items-center justify-between gap-3 mb-2">
        <span className="rounded px-1.5 py-0.5 text-[9px] font-medium text-white" style={{ backgroundColor: config.color }}>
          {config.label}
        </span>
        <button type="button" onClick={onClose} className="text-stone-300 hover:text-stone-500 text-xs">✕</button>
      </div>
      <ul className="space-y-1">
        {data.triggers.map((t, i) => (
          <li key={i} className="text-xs text-stone-600 leading-snug flex gap-1.5">
            <span className="text-stone-300 shrink-0 mt-0.5">&#8226;</span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ── Graph view ──

function CompositionGraph({
  handoffs,
  definitions,
}: {
  handoffs: Handoff[];
  definitions: Record<string, BundledAgentDefinition>;
}) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [tooltip, setTooltip] = useState<EdgeTooltipData | null>(null);

  const { fitView } = useReactFlow();

  useEffect(() => {
    const { nodes: rawNodes, edges: rawEdges } = buildGraphData(handoffs, definitions);
    let cancelled = false;
    layoutGraph(rawNodes, rawEdges).then((laidOut) => {
      if (cancelled) return;
      setNodes(laidOut);
      setEdges(rawEdges);
      setTimeout(() => fitView({ padding: 0.2 }), 50);
    });
    return () => { cancelled = true; };
  }, [handoffs, definitions, fitView]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );

  const onNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    if (node.id !== "__human__" && !node.id.startsWith("__unbuilt__")) {
      window.location.href = `/agent/${node.id}`;
    }
  }, []);

  const onEdgeClick = useCallback((event: React.MouseEvent, edge: Edge) => {
    const d = edge.data as { triggers: string[]; type: HandoffType; count: number } | undefined;
    if (!d) return;
    const container = (event.target as HTMLElement).closest(".react-flow");
    if (!container) return;
    const rect = container.getBoundingClientRect();
    setTooltip({
      triggers: d.triggers,
      type: d.type,
      position: { x: event.clientX - rect.left, y: event.clientY - rect.top },
    });
  }, []);

  const onPaneClick = useCallback(() => setTooltip(null), []);

  return (
    <div className="relative w-full h-full">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onNodeClick={onNodeClick}
        onEdgeClick={onEdgeClick}
        onPaneClick={onPaneClick}
        nodesDraggable
        fitView
        fitViewOptions={{ padding: 0.2 }}
        minZoom={0.3}
        maxZoom={1.5}
        proOptions={{ hideAttribution: true }}
      >
        <Background gap={20} size={1} color="#e7e5e4" />
        <Controls showInteractive={false} />
      </ReactFlow>
      {tooltip && <EdgeTooltip data={tooltip} onClose={() => setTooltip(null)} />}
    </div>
  );
}

// ── List view components ──

function AgentPill({ id, name, color }: { id: string | null; name: string; color: string }) {
  const hex = accentHex[color] ?? "#78716c";
  const bg = bgHex[color] ?? "#f5f5f4";

  if (!id) {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium" style={{ backgroundColor: bg, color: hex }}>
        <User size={11} />
        {name}
      </span>
    );
  }

  return (
    <Link
      href={`/agent/${id}`}
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium hover:opacity-80 transition-opacity"
      style={{ backgroundColor: bg, color: hex }}
    >
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: hex }} />
      {name}
    </Link>
  );
}

function HandoffCard({ handoff }: { handoff: Handoff }) {
  const config = typeConfig[handoff.type];
  return (
    <div className="bg-white rounded-lg border border-stone-200 p-4 hover:border-stone-300 transition-colors">
      <div className="flex items-center gap-3 mb-3">
        <AgentPill id={handoff.sourceId} name={handoff.sourceName} color={handoff.sourceColor} />
        <ArrowRight size={14} className="text-stone-300 shrink-0" />
        <AgentPill id={handoff.targetId} name={handoff.targetName} color={handoff.targetColor} />
        {!handoff.isBuilt && handoff.type !== "escalation" && (
          <span className="text-[10px] text-stone-400 bg-stone-100 rounded px-1.5 py-0.5">not built</span>
        )}
      </div>
      <p className="text-sm text-stone-700 leading-relaxed">{handoff.trigger}</p>
      {handoff.type !== "escalation" && (
        <p className="text-xs text-stone-400 mt-1.5">
          <span className="font-medium" style={{ color: config.color }}>Passes:</span> {handoff.payload}
        </p>
      )}
    </div>
  );
}

function HandoffGroup({ type, handoffs, defaultOpen = true }: { type: HandoffType; handoffs: Handoff[]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const config = typeConfig[type];
  if (handoffs.length === 0) return null;

  return (
    <div>
      <button onClick={() => setOpen(!open)} className="flex items-center gap-2 mb-3">
        {open ? <ChevronDown size={16} className="text-stone-400" /> : <ChevronRight size={16} className="text-stone-400" />}
        <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: config.color }}>{config.label}</span>
        <span className="text-xs font-medium rounded-full px-2 py-0.5" style={{ backgroundColor: config.bg, color: config.color }}>{handoffs.length}</span>
      </button>
      {open && (
        <div className="grid gap-2 mb-6">
          {handoffs.map((h) => <HandoffCard key={h.id} handoff={h} />)}
        </div>
      )}
    </div>
  );
}

// ── Main page ──

export default function CompositionPage() {
  const [registry, setRegistry] = useState<{ handoffs: Handoff[]; stats: HandoffStats } | null>(null);
  const [definitions, setDefinitions] = useState<Record<string, BundledAgentDefinition>>({});
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState<"graph" | "list">("graph");
  const [typeFilter, setTypeFilter] = useState<HandoffType | "all">("all");
  const [sourceFilter, setSourceFilter] = useState("all");
  const [targetFilter, setTargetFilter] = useState("all");

  const colorMap = useMemo(() => new Map(agents.map((a) => [a.id, a.color])), []);

  useEffect(() => {
    fetch("/definitions.json")
      .then((res) => res.json())
      .then((data: Record<string, BundledAgentDefinition>) => {
        setDefinitions(data);
        setRegistry(buildHandoffRegistry(data, colorMap));
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [colorMap]);

  const filtered = useMemo(() => {
    if (!registry) return [];
    return registry.handoffs.filter((h) => {
      if (typeFilter !== "all" && h.type !== typeFilter) return false;
      if (sourceFilter !== "all" && h.sourceId !== sourceFilter) return false;
      if (targetFilter !== "all") {
        if (targetFilter === "human" && h.targetId !== null) return false;
        if (targetFilter !== "human" && h.targetId !== targetFilter) return false;
      }
      return true;
    });
  }, [registry, typeFilter, sourceFilter, targetFilter]);

  const grouped = useMemo(() => ({
    delegation: filtered.filter((h) => h.type === "delegation"),
    "data-sharing": filtered.filter((h) => h.type === "data-sharing"),
    escalation: filtered.filter((h) => h.type === "escalation"),
  }), [filtered]);

  const sourceAgents = useMemo(() => {
    if (!registry) return [];
    const ids = [...new Set(registry.handoffs.map((h) => h.sourceId))];
    return ids.map((id) => ({ id, name: registry.handoffs.find((h) => h.sourceId === id)!.sourceName })).sort((a, b) => a.name.localeCompare(b.name));
  }, [registry]);

  const targetAgents = useMemo(() => {
    if (!registry) return [];
    const map = new Map<string, string>();
    for (const h of registry.handoffs) {
      const key = h.targetId ?? "human";
      if (!map.has(key)) map.set(key, h.targetName);
    }
    return [...map.entries()].map(([id, name]) => ({ id, name })).sort((a, b) => a.name.localeCompare(b.name));
  }, [registry]);

  if (loading) {
    return <div className="flex items-center justify-center py-20"><p className="text-sm text-stone-400">Loading handoff registry...</p></div>;
  }

  if (!registry) {
    return <div className="flex items-center justify-center py-20"><p className="text-sm text-stone-400">Could not load definitions.</p></div>;
  }

  const { stats } = registry;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-stone-400 hover:text-stone-600 transition-colors">
            <ArrowLeft size={18} />
          </Link>
          <div>
            <h1 className="text-lg font-semibold text-stone-900">Agent Composition</h1>
            <p className="text-sm text-stone-500">How agents hand off context, delegate tasks, and escalate to humans.</p>
          </div>
        </div>
        <div className="flex gap-1 bg-stone-100 rounded-lg p-0.5">
          <button
            onClick={() => setView("graph")}
            className={`flex items-center gap-1.5 text-xs font-medium rounded-md px-3 py-1.5 transition-colors ${view === "graph" ? "bg-white text-stone-800 shadow-sm" : "text-stone-500 hover:text-stone-700"}`}
          >
            <GitBranch size={12} /> Graph
          </button>
          <button
            onClick={() => setView("list")}
            className={`flex items-center gap-1.5 text-xs font-medium rounded-md px-3 py-1.5 transition-colors ${view === "list" ? "bg-white text-stone-800 shadow-sm" : "text-stone-500 hover:text-stone-700"}`}
          >
            <List size={12} /> List
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-white rounded-lg border border-stone-200 p-3 text-center">
          <p className="text-2xl font-bold text-stone-800">{stats.total}</p>
          <p className="text-xs text-stone-500">Total handoffs</p>
        </div>
        <div className="bg-white rounded-lg border border-stone-200 p-3 text-center">
          <p className="text-2xl font-bold" style={{ color: typeConfig.delegation.color }}>{stats.delegations}</p>
          <p className="text-xs text-stone-500">Delegations</p>
        </div>
        <div className="bg-white rounded-lg border border-stone-200 p-3 text-center">
          <p className="text-2xl font-bold" style={{ color: typeConfig["data-sharing"].color }}>{stats.dataSharing}</p>
          <p className="text-xs text-stone-500">Data sharing</p>
        </div>
        <div className="bg-white rounded-lg border border-stone-200 p-3 text-center">
          <p className="text-2xl font-bold" style={{ color: typeConfig.escalation.color }}>{stats.escalations}</p>
          <p className="text-xs text-stone-500">Escalations</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex gap-1">
          {(["all", "delegation", "data-sharing", "escalation"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`text-xs font-medium rounded-full px-3 py-1.5 transition-colors ${typeFilter === t ? "bg-stone-800 text-white" : "bg-stone-100 text-stone-500 hover:bg-stone-200"}`}
            >
              {t === "all" ? "All" : typeConfig[t].label}
            </button>
          ))}
        </div>
        <select value={sourceFilter} onChange={(e) => setSourceFilter(e.target.value)} className="text-xs border border-stone-200 rounded-lg px-2.5 py-1.5 text-stone-600 bg-white">
          <option value="all">All sources</option>
          {sourceAgents.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
        </select>
        <select value={targetFilter} onChange={(e) => setTargetFilter(e.target.value)} className="text-xs border border-stone-200 rounded-lg px-2.5 py-1.5 text-stone-600 bg-white">
          <option value="all">All targets</option>
          {targetAgents.map((a) => <option key={a.id} value={a.id}>{a.name}</option>)}
        </select>
        {(typeFilter !== "all" || sourceFilter !== "all" || targetFilter !== "all") && (
          <button onClick={() => { setTypeFilter("all"); setSourceFilter("all"); setTargetFilter("all"); }} className="text-xs text-stone-400 hover:text-stone-600 underline">
            Clear filters
          </button>
        )}
      </div>

      {/* Graph view */}
      {view === "graph" && (
        <div className="w-full h-[600px] rounded-xl border border-stone-200 bg-white overflow-hidden">
          <ReactFlowProvider>
            <CompositionGraph handoffs={filtered} definitions={definitions} />
          </ReactFlowProvider>
        </div>
      )}

      {/* List view */}
      {view === "list" && (
        <>
          <HandoffGroup type="delegation" handoffs={grouped.delegation} />
          <HandoffGroup type="data-sharing" handoffs={grouped["data-sharing"]} />
          <HandoffGroup type="escalation" handoffs={grouped.escalation} defaultOpen={false} />
          {filtered.length === 0 && (
            <p className="text-sm text-stone-400 text-center py-8">No handoffs match the current filters.</p>
          )}
        </>
      )}

      {/* Legend */}
      {view === "graph" && (
        <div className="flex items-center gap-6 mt-4 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="w-6 h-0.5 rounded" style={{ backgroundColor: typeConfig.delegation.color }} />
            <span>Delegation</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-0.5 rounded" style={{ backgroundColor: typeConfig["data-sharing"].color }} />
            <span>Data sharing</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-6 h-0.5 rounded border-b border-dashed" style={{ borderColor: typeConfig.escalation.color }} />
            <span>Escalation (dashed)</span>
          </div>
        </div>
      )}
    </div>
  );
}
