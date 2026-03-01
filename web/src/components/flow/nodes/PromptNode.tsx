"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";
import { BookOpen } from "lucide-react";

const accentHex: Record<string, string> = {
  "text-blue-500": "#3b82f6", "text-emerald-500": "#10b981", "text-orange-500": "#f97316",
  "text-violet-500": "#8b5cf6", "text-rose-500": "#f43f5e", "text-amber-500": "#f59e0b",
  "text-cyan-500": "#06b6d4", "text-indigo-500": "#6366f1", "text-teal-500": "#14b8a6",
  "text-pink-500": "#ec4899", "text-red-500": "#ef4444", "text-lime-500": "#84cc16",
  "text-sky-500": "#0ea5e9", "text-purple-500": "#a855f7", "text-slate-500": "#64748b",
};

function PromptNodeComponent({ data }: NodeProps) {
  const { promptKey, stepNumber, description, colors, isLast } = data as {
    promptKey: string;
    stepNumber: number;
    description: string;
    input: string;
    colors: { bg: string; border: string; icon: string; light: string };
    isFirst: boolean;
    isLast: boolean;
  };

  const hex = accentHex[colors.icon] ?? "#78716c";

  return (
    <div
      className="bg-white rounded-lg px-3 py-2 shadow-sm min-w-48 max-w-72 cursor-pointer border border-stone-200"
      style={{ borderLeft: `3px solid ${hex}` }}
    >
      <Handle type="target" position={Position.Top} className="!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent" />
      {!isLast && <Handle type="source" position={Position.Bottom} className="!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent" />}

      <div className="flex items-center gap-1.5 mb-0.5">
        <span
          className="text-[9px] font-mono font-bold shrink-0 rounded-full w-4 h-4 flex items-center justify-center text-white"
          style={{ background: hex }}
        >
          {stepNumber}
        </span>
        <BookOpen className="w-3 h-3 text-stone-400 shrink-0" />
        <span className="font-medium text-stone-700 text-[11px]">{promptKey}</span>
      </div>
      <p className="text-[10px] text-stone-400 leading-tight">{description}</p>
    </div>
  );
}

export const PromptNode = memo(PromptNodeComponent);
