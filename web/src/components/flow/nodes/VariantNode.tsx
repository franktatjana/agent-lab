"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { Users } from "lucide-react";

function VariantNodeComponent({ data }: NodeProps) {
  const { name, description, colors } = data as {
    name: string;
    description: string;
    componentRef: string;
    colors: { bg: string; border: string; icon: string; light: string };
  };

  return (
    <div className={`${colors.light} border border-stone-200 rounded-lg px-3 py-2 shadow-sm min-w-48 max-w-64`} title={description}>
      <Handle type="target" position={Position.Left} className="!bg-stone-400" />

      <div className="flex items-center gap-2">
        <Users className={`w-3.5 h-3.5 ${colors.icon} shrink-0`} />
        <span className="font-medium text-stone-700 text-xs">{name}</span>
      </div>
    </div>
  );
}

export const VariantNode = memo(VariantNodeComponent);
