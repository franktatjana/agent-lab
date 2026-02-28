"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Bot, ShieldCheck } from "lucide-react";

function AgentNodeComponent({ data }: NodeProps) {
  const { name, description, modelId, humanInTheLoop, colors } = data as {
    name: string;
    description: string;
    modelId: string | null;
    humanInTheLoop: boolean;
    colors: { bg: string; border: string; icon: string; light: string };
  };

  return (
    <div
      className={`${colors.bg} ${colors.border} border-2 rounded-xl px-5 py-4 shadow-md min-w-64 max-w-80 text-center`}
    >
      <Handle type="source" position={Position.Bottom} className="!bg-stone-400" />
      <Handle type="source" position={Position.Left} id="tools" className="!bg-stone-400" />
      <Handle type="source" position={Position.Right} id="variants" className="!bg-stone-400" />

      <div className="flex items-center justify-center gap-2 mb-2">
        <Bot className={`w-5 h-5 ${colors.icon}`} />
        <span className="font-semibold text-stone-900 text-sm">{name}</span>
      </div>
      <p className="text-xs text-stone-500 leading-relaxed mb-2">
        {description}
      </p>
      <div className="flex items-center justify-center gap-2">
        {modelId && (
          <span className="text-[10px] bg-white/60 border border-stone-200 rounded px-1.5 py-0.5 text-stone-500">
            {modelId}
          </span>
        )}
        {humanInTheLoop && (
          <span className="text-[10px] bg-white/60 border border-stone-200 rounded px-1.5 py-0.5 text-stone-500 flex items-center gap-0.5">
            <ShieldCheck className="w-3 h-3" /> HITL
          </span>
        )}
      </div>
    </div>
  );
}

export const AgentNode = memo(AgentNodeComponent);
