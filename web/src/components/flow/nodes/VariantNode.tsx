"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Users } from "lucide-react";

function VariantNodeComponent({ data }: NodeProps) {
  const { name, isExpanded, isDimmed, colors } = data as {
    name: string;
    isExpanded?: boolean;
    isDimmed?: boolean;
    colors: { bg: string; border: string; icon: string; light: string };
  };

  return (
    <div
      className={`border rounded-lg px-3 py-2 shadow-sm min-w-48 max-w-64 cursor-pointer transition-all
        ${isExpanded ? `${colors.border} border-2 shadow-md ${colors.light}` : `${colors.light} border-stone-200`}
        ${isDimmed ? "opacity-40" : "opacity-100"}
      `}
    >
      <Handle type="target" position={Position.Left} className="!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent" />
      <Handle type="source" position={Position.Right} id="detail" className="!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent" />

      <div className="flex items-center gap-2">
        <Users className={`w-3.5 h-3.5 ${colors.icon} shrink-0`} />
        <span className="font-medium text-stone-700 text-xs">{name}</span>
      </div>
    </div>
  );
}

export const VariantNode = memo(VariantNodeComponent);
