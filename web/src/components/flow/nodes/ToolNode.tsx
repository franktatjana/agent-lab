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
  const { name, description, risk } = data as {
    name: string;
    description: string;
    risk: string;
    colors: { bg: string; border: string; icon: string; light: string };
  };

  return (
    <div className="bg-white border border-stone-200 rounded-lg px-3 py-2 shadow-sm min-w-44 max-w-64" title={description}>
      <Handle type="target" position={Position.Right} className="!bg-stone-400" />

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
