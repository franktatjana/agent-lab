"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Workflow } from "lucide-react";

function FlowNodeComponent({ data }: NodeProps) {
  const { name, stepCount, isExpanded, isDimmed, colors } = data as {
    name: string;
    description: string;
    stepCount: number;
    isExpanded: boolean;
    isDimmed: boolean;
    colors: { bg: string; border: string; icon: string; light: string };
  };

  return (
    <div
      className={`bg-white border rounded-lg px-4 py-3 shadow-sm min-w-48 max-w-64 cursor-pointer transition-all
        ${isExpanded ? `${colors.border} border-2 shadow-md` : "border-stone-200"}
        ${isDimmed ? "opacity-40" : "opacity-100"}
      `}
    >
      <Handle type="target" position={Position.Top} className="!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent" />
      <Handle type="source" position={Position.Bottom} id="prompts" className="!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent" />

      <div className="flex items-center gap-2 mb-1">
        <Workflow className={`w-4 h-4 ${colors.icon}`} />
        <span className="font-medium text-stone-800 text-xs">{name}</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-stone-400">
          {stepCount} {stepCount === 1 ? "step" : "steps"}
        </span>
        {isExpanded && (
          <span className={`text-[10px] ${colors.icon} font-medium`}>expanded</span>
        )}
      </div>
    </div>
  );
}

export const FlowNode = memo(FlowNodeComponent);
