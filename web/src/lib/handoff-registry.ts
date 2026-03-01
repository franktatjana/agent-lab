import type { BundledAgentDefinition } from "./sandbox/definition-types";

export type HandoffType = "delegation" | "data-sharing" | "escalation";

export interface Handoff {
  id: string;
  type: HandoffType;
  sourceId: string;
  sourceName: string;
  sourceColor: string;
  targetId: string | null;
  targetName: string;
  targetColor: string;
  trigger: string;
  payload: string;
  isBuilt: boolean;
}

export interface HandoffStats {
  total: number;
  delegations: number;
  dataSharing: number;
  escalations: number;
  agentsInvolved: number;
}

const roleMapping: Record<string, string[]> = {
  "research agent": ["research-agent"],
  "research agents": ["research-agent"],
  "writing agent": ["storytelling-agent", "generation-agent"],
  "writing agents": ["storytelling-agent", "generation-agent"],
  "communication agent": ["storytelling-agent", "generation-agent"],
  "communication agents": ["storytelling-agent", "generation-agent"],
  "coordination agent": ["corporate-navigator-agent"],
  "coordination agents": ["corporate-navigator-agent"],
  "planning agent": ["corporate-navigator-agent"],
  "planning agents": ["corporate-navigator-agent"],
  "strategy agent": ["corporate-navigator-agent"],
  "strategy agents": ["corporate-navigator-agent"],
  "presentation agent": ["storytelling-agent"],
  "presentation agents": ["storytelling-agent"],
  "team-building agent": ["leadership-coach-agent"],
  "team-building agents": ["leadership-coach-agent"],
};

function buildSharedMemoryIndex(
  definitions: Record<string, BundledAgentDefinition>,
): Map<string, string> {
  // Key: "sourceId::targetNameLower" → value: the shared memory entry
  const index = new Map<string, string>();
  for (const [agentId, bundled] of Object.entries(definitions)) {
    const shared = bundled.definition["x-agentlab"]?.memory?.shared ?? [];
    for (const entry of shared) {
      const lower = entry.toLowerCase();
      for (const [, other] of Object.entries(definitions)) {
        const name = other.definition.name.toLowerCase().replace(" agent", "");
        if (lower.includes(name)) {
          index.set(`${agentId}::${name}`, entry);
        }
      }
    }
  }
  return index;
}

function parseDelegations(
  definitions: Record<string, BundledAgentDefinition>,
  colorMap: Map<string, string>,
): Handoff[] {
  const nameToId = new Map<string, string>();
  for (const [id, bundled] of Object.entries(definitions)) {
    nameToId.set(bundled.definition.name.toLowerCase(), id);
    nameToId.set(bundled.definition.name.toLowerCase().replace(" agent", ""), id);
  }

  const sharedIndex = buildSharedMemoryIndex(definitions);

  const handoffs: Handoff[] = [];
  for (const [agentId, bundled] of Object.entries(definitions)) {
    const boundaries = bundled.definition["x-agentlab"]?.boundaries ?? [];
    for (const b of boundaries) {
      const matchFor = b.match(/[Hh]andoff to (.+?) for (.+)/i);
      const matchWhen = b.match(/[Hh]andoff to (.+?) when (.+)/i);
      const matchParen = b.match(/\(handoff to (.+?)\)/i);

      let targetName: string | null = null;
      let trigger: string | null = null;

      if (matchFor) {
        targetName = matchFor[1].trim();
        trigger = matchFor[2].trim();
      } else if (matchWhen) {
        targetName = matchWhen[1].trim();
        trigger = matchWhen[2].trim();
      } else if (matchParen) {
        targetName = matchParen[1].trim();
        const reason = b.replace(/\(handoff to .+?\)/i, "").trim().replace(/^-\s*/, "").replace(/\s*$/, "");
        trigger = reason || `Delegated to ${targetName}`;
      }

      if (!targetName || !trigger) continue;

      const targetKey = targetName.toLowerCase();
      const targetId = nameToId.get(targetKey) ?? nameToId.get(targetKey.replace(" agent", "")) ?? null;

      // Enrich: cross-reference with memory.shared for data contract
      const sharedKey = `${agentId}::${targetKey.replace(" agent", "")}`;
      const sharedEntry = sharedIndex.get(sharedKey);
      let payload = `Context and analysis for ${trigger.toLowerCase()}`;

      if (sharedEntry) {
        // Combine constraint with data contract
        trigger = `${trigger} → ${sharedEntry}`;
        payload = sharedEntry;
      }

      handoffs.push({
        id: `del-${agentId}-${targetId ?? targetName.replace(/\s+/g, "-").toLowerCase()}`,
        type: "delegation",
        sourceId: agentId,
        sourceName: bundled.definition.name,
        sourceColor: colorMap.get(agentId) ?? "slate",
        targetId,
        targetName,
        targetColor: targetId ? (colorMap.get(targetId) ?? "slate") : "stone",
        trigger,
        payload,
        isBuilt: targetId !== null,
      });
    }
  }
  return handoffs;
}

function parseDataSharing(
  definitions: Record<string, BundledAgentDefinition>,
  colorMap: Map<string, string>,
): Handoff[] {
  const builtIds = new Set(Object.keys(definitions));
  const nameToId = new Map<string, string>();
  for (const [id, bundled] of Object.entries(definitions)) {
    nameToId.set(bundled.definition.name.toLowerCase(), id);
    nameToId.set(bundled.definition.name.toLowerCase().replace(" agent", ""), id);
  }

  const handoffs: Handoff[] = [];
  const seen = new Set<string>();

  for (const [agentId, bundled] of Object.entries(definitions)) {
    const shared = bundled.definition["x-agentlab"]?.memory?.shared ?? [];
    for (const entry of shared) {
      const lower = entry.toLowerCase();
      const payload = entry.split(" passed ")[0] || entry.split(" shared ")[0] || entry;

      // Direct agent name matching
      for (const targetId of builtIds) {
        if (targetId === agentId) continue;
        const targetName = definitions[targetId].definition.name.toLowerCase().replace(" agent", "");
        if (lower.includes(targetName)) {
          const key = `ds-${agentId}->${targetId}`;
          if (!seen.has(key)) {
            seen.add(key);
            handoffs.push({
              id: key,
              type: "data-sharing",
              sourceId: agentId,
              sourceName: bundled.definition.name,
              sourceColor: colorMap.get(agentId) ?? "slate",
              targetId,
              targetName: definitions[targetId].definition.name,
              targetColor: colorMap.get(targetId) ?? "slate",
              trigger: entry,
              payload,
              isBuilt: true,
            });
          }
        }
      }

      // Role-based matching
      for (const [role, targetIds] of Object.entries(roleMapping)) {
        if (lower.includes(role)) {
          for (const tid of targetIds) {
            if (tid === agentId || !builtIds.has(tid)) continue;
            const key = `ds-${agentId}->${tid}`;
            if (!seen.has(key)) {
              seen.add(key);
              handoffs.push({
                id: key,
                type: "data-sharing",
                sourceId: agentId,
                sourceName: bundled.definition.name,
                sourceColor: colorMap.get(agentId) ?? "slate",
                targetId: tid,
                targetName: definitions[tid].definition.name,
                targetColor: colorMap.get(tid) ?? "slate",
                trigger: entry,
                payload,
                isBuilt: true,
              });
            }
          }
        }
      }
    }
  }
  return handoffs;
}

function parseEscalations(
  definitions: Record<string, BundledAgentDefinition>,
  colorMap: Map<string, string>,
): Handoff[] {
  const handoffs: Handoff[] = [];
  for (const [agentId, bundled] of Object.entries(definitions)) {
    const triggers = bundled.definition["x-agentlab"]?.escalation_triggers ?? [];
    for (const trigger of triggers) {
      handoffs.push({
        id: `esc-${agentId}-${handoffs.length}`,
        type: "escalation",
        sourceId: agentId,
        sourceName: bundled.definition.name,
        sourceColor: colorMap.get(agentId) ?? "slate",
        targetId: null,
        targetName: "Human Expert",
        targetColor: "stone",
        trigger,
        payload: "Context and findings for human review",
        isBuilt: false,
      });
    }
  }
  return handoffs;
}

export function buildHandoffRegistry(
  definitions: Record<string, BundledAgentDefinition>,
  agentColors: Map<string, string>,
): { handoffs: Handoff[]; stats: HandoffStats } {
  const delegations = parseDelegations(definitions, agentColors);
  const dataSharing = parseDataSharing(definitions, agentColors);
  const escalations = parseEscalations(definitions, agentColors);

  const all = [...delegations, ...dataSharing, ...escalations];
  const agentIds = new Set([
    ...all.map((h) => h.sourceId),
    ...all.filter((h) => h.targetId).map((h) => h.targetId!),
  ]);

  return {
    handoffs: all,
    stats: {
      total: all.length,
      delegations: delegations.length,
      dataSharing: dataSharing.length,
      escalations: escalations.length,
      agentsInvolved: agentIds.size,
    },
  };
}
