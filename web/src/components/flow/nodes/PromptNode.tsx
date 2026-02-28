"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { BookOpen } from "lucide-react";

function PromptNodeComponent({ data }: NodeProps) {
  const { promptKey, stepNumber, description, colors } = data as {
    promptKey: string;
    stepNumber: number;
    description: string;
    input: string;
    colors: { bg: string; border: string; icon: string; light: string };
  };

  return (
    <div className="bg-white border border-dashed border-stone-300 rounded-lg px-3 py-2 shadow-sm min-w-48 max-w-72 cursor-pointer">
      <Handle type="target" position={Position.Top} className="!bg-stone-400" />
      <Handle type="source" position={Position.Bottom} className="!bg-stone-400" />

      <div className="flex items-center gap-1.5 mb-0.5">
        <span className={`text-[9px] font-mono ${colors.icon} font-bold shrink-0`}>{stepNumber}</span>
        <BookOpen className="w-3 h-3 text-stone-400 shrink-0" />
        <span className="font-medium text-stone-700 text-[11px]">{promptKey}</span>
      </div>
      <p className="text-[10px] text-stone-400 leading-tight">{description}</p>
    </div>
  );
}

export const PromptNode = memo(PromptNodeComponent);
