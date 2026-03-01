"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";

function VariantDetailNodeComponent({ data }: NodeProps) {
  const { description, colors } = data as {
    description: string;
    colors: { bg: string; border: string; icon: string; light: string };
  };

  return (
    <div className={`border border-stone-200 rounded-lg px-3 py-2.5 shadow-sm min-w-44 max-w-56 ${colors.light}`}>
      <Handle type="target" position={Position.Left} className="!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent" />

      <p className="text-[9px] font-medium text-stone-400 uppercase tracking-wide mb-1">When to choose</p>
      {description && (
        <p className="text-[10px] text-stone-500 leading-snug">{description}</p>
      )}
    </div>
  );
}

export const VariantDetailNode = memo(VariantDetailNodeComponent);
