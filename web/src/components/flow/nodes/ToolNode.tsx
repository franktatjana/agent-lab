"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Wrench } from "lucide-react";

const riskColor: Record<string, string> = {
  low: "bg-emerald-100 text-emerald-700",
  medium: "bg-amber-100 text-amber-700",
  high: "bg-red-100 text-red-700",
};

function ToolNodeComponent({ data }: NodeProps) {
  const { name, risk, isExpanded, isDimmed, colors } = data as {
    name: string;
    risk: string;
    isExpanded?: boolean;
    isDimmed?: boolean;
    colors: { bg: string; border: string; icon: string; light: string };
  };

  return (
    <div
      className={`bg-white border rounded-lg px-3 py-2 shadow-sm min-w-44 max-w-64 cursor-pointer transition-all
        ${isExpanded ? `${colors.border} border-2 shadow-md` : "border-stone-200"}
        ${isDimmed ? "opacity-40" : "opacity-100"}
      `}
    >
      <Handle type="target" position={Position.Right} className="!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent" />
      <Handle type="source" position={Position.Left} id="detail" className="!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent" />

      <div className="flex items-center gap-2">
        <Wrench className="w-3.5 h-3.5 text-stone-400 shrink-0" />
        <span className="font-medium text-stone-700 text-xs">{name}</span>
        <span
          className={`text-[9px] rounded px-1 py-0.5 ml-auto shrink-0 ${riskColor[risk] ?? riskColor.low}`}
        >
          {risk}
        </span>
      </div>
    </div>
  );
}

export const ToolNode = memo(ToolNodeComponent);
