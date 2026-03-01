"use client";

import { memo } from "react";
import { Handle, Position, type NodeProps } from "@xyflow/react";

interface ToolParam {
  title: string;
  type: string;
  description?: string;
}

const riskLabel: Record<string, string> = {
  low: "No approval needed",
  medium: "May ask for approval",
  high: "Always asks for approval",
};

function buildUsageSentence(inputs: ToolParam[], outputs: ToolParam[]): string | null {
  if (inputs.length === 0 && outputs.length === 0) return null;
  const inPart = inputs.map((p) => p.title).join(", ");
  const outPart = outputs.map((p) => p.title).join(", ");
  if (inPart && outPart) return `Provide ${inPart}, receive ${outPart}`;
  if (inPart) return `Provide ${inPart}`;
  if (outPart) return `Returns ${outPart}`;
  return null;
}

function ToolDetailNodeComponent({ data }: NodeProps) {
  const { description, risk, howToUse, inputs, outputs, colors } = data as {
    description: string;
    risk: string;
    howToUse?: string;
    inputs: ToolParam[];
    outputs: ToolParam[];
    colors: { bg: string; border: string; icon: string; light: string };
  };

  const fallback = buildUsageSentence(inputs, outputs);
  const usage = howToUse ?? fallback;

  return (
    <div className={`border border-stone-200 rounded-lg px-3 py-2.5 shadow-sm min-w-48 max-w-60 ${colors.light}`}>
      <Handle type="target" position={Position.Right} className="!w-0 !h-0 !min-w-0 !min-h-0 !border-0 !bg-transparent" />

      <p className="text-[9px] font-medium text-stone-400 uppercase tracking-wide mb-1">How to use</p>
      {usage && (
        <p className="text-[10px] text-stone-500 leading-snug mb-1.5">{usage}</p>
      )}
      {riskLabel[risk] && (
        <p className="text-[9px] text-stone-400 italic">{riskLabel[risk]}</p>
      )}
    </div>
  );
}

export const ToolDetailNode = memo(ToolDetailNodeComponent);
