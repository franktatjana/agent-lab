"use client";

import { useState, useEffect } from "react";
import type { BundledAgentDefinition } from "@/lib/sandbox/definition-types";
import type { FlowDef, ToolDef, SpecializedAgentDef } from "@/lib/sandbox/definition-types";
import { validateSpec } from "@/lib/sandbox/spec-validator";
import type { ValidationCheck } from "@/lib/sandbox/spec-validator";
import { ValidationReport } from "./validation-report";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import JSZip from "jszip";
import {
  FileCheck,
  Download,
  ChevronDown,
  ChevronRight,
  Info,
  Workflow,
  Wrench,
  Users,
  BookOpen,
  Shield,
  CheckCircle,
  XCircle,
  AlertTriangle,
  ArrowRight,
  Copy,
  Check,
  Package,
} from "lucide-react";

type Section = "overview" | "flows" | "variants" | "tools" | "prompts" | "guardrails";

const sectionItems: { id: Section; label: string; icon: typeof Workflow }[] = [
  { id: "overview", label: "Overview", icon: Info },
  { id: "flows", label: "Flows", icon: Workflow },
  { id: "variants", label: "Variants", icon: Users },
  { id: "tools", label: "Tools", icon: Wrench },
  { id: "prompts", label: "Prompts", icon: BookOpen },
  { id: "guardrails", label: "Guardrails", icon: Shield },
];

interface ColorProps {
  colors: { bg: string; border: string; icon: string; light: string };
}

function OverviewSection({ bundled, validationChecks, colors, onNavigate }: { bundled: BundledAgentDefinition; validationChecks: ValidationCheck[] | null; onNavigate: (section: Section) => void } & ColorProps) {
  const { definition } = bundled;
  const ext = definition["x-agentlab"];
  const passed = validationChecks?.filter((c) => c.passed).length ?? 0;
  const total = validationChecks?.length ?? 0;

  return (
    <div className="space-y-4">
      {/* Disclaimer */}
      {definition.metadata.disclaimer && (
        <p className="text-xs text-stone-400 italic">{definition.metadata.disclaimer}</p>
      )}

      {/* Identity | Responsibility */}
      <div className="grid grid-cols-2 gap-3">
        <div className={`bg-white rounded-lg border-l-4 ${colors.border} border border-stone-200 p-4`}>
          <h4 className={`text-xs font-semibold ${colors.icon} uppercase tracking-wider mb-2`}>Identity</h4>
          <p className="text-sm text-stone-700 leading-relaxed mb-3">{definition.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {definition.metadata.tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
            ))}
          </div>
        </div>
        {definition.metadata.responsibility && (
          <div className={`bg-white rounded-lg border-l-4 ${colors.border} border border-stone-200 p-4`}>
            <h4 className={`text-xs font-semibold ${colors.icon} uppercase tracking-wider mb-2`}>Responsibility</h4>
            <p className="text-sm text-stone-700 leading-relaxed">{definition.metadata.responsibility}</p>
          </div>
        )}
      </div>

      {/* I/O Schema */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-lg border border-stone-200 p-4">
          <h4 className={`text-xs font-semibold ${colors.icon} uppercase tracking-wider mb-2`}>Inputs</h4>
          <div className="space-y-1.5">
            {definition.inputs?.map((input) => (
              <div key={input.title} className="flex items-center gap-2">
                <ArrowRight size={10} className="text-stone-300 shrink-0" />
                <span className="text-sm text-stone-700">{input.title}</span>
                <span className="text-xs text-stone-400 font-mono">{input.type}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-lg border border-stone-200 p-4">
          <h4 className={`text-xs font-semibold ${colors.icon} uppercase tracking-wider mb-2`}>Outputs</h4>
          <div className="space-y-1.5">
            {definition.outputs?.map((output) => (
              <div key={output.title} className="flex items-center gap-2">
                <ArrowRight size={10} className="text-stone-300 shrink-0" />
                <span className="text-sm text-stone-700">{output.title}</span>
                <span className="text-xs text-stone-400 font-mono">{output.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LLM Config | Spec Metadata */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white rounded-lg border border-stone-200 p-4">
          <h4 className={`text-xs font-semibold ${colors.icon} uppercase tracking-wider mb-2`}>LLM Configuration</h4>
          <div className="space-y-2 text-sm text-stone-700">
            <div className="flex items-center justify-between">
              <span className="text-stone-500">Temperature</span>
              <span className="font-mono font-medium">{definition.llm_configuration?.default_generation_parameters?.temperature ?? "—"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-stone-500">Max tokens</span>
              <span className="font-mono font-medium">{definition.llm_configuration?.default_generation_parameters?.max_tokens ?? "—"}</span>
            </div>
            {definition.llm_configuration?.model_id && (
              <div className="flex items-center justify-between">
                <span className="text-stone-500">Model</span>
                <span className="font-mono font-medium">{definition.llm_configuration.model_id}</span>
              </div>
            )}
          </div>
        </div>
        <div className="bg-white rounded-lg border border-stone-200 p-4">
          <h4 className={`text-xs font-semibold ${colors.icon} uppercase tracking-wider mb-2`}>Spec Metadata</h4>
          <div className="space-y-2 text-sm text-stone-700">
            <div className="flex items-center justify-between">
              <span className="text-stone-500">Agent Spec</span>
              <span className="font-mono font-medium">{definition.agentspec_version}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-stone-500">Definition</span>
              <span className="font-mono font-medium">v{definition.metadata.definition_version}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-stone-500">Human-in-the-loop</span>
              <Badge variant="secondary" className={`text-[10px] ${definition.human_in_the_loop ? "bg-emerald-50 text-emerald-700" : "bg-stone-100 text-stone-500"}`}>
                {definition.human_in_the_loop ? "enabled" : "disabled"}
              </Badge>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

function FlowsSection({ bundled, colors }: { bundled: BundledAgentDefinition } & ColorProps) {
  const { definition } = bundled;
  const [selectedFlowId, setSelectedFlowId] = useState<string | null>(
    definition.flows.length > 0 ? definition.flows[0].id : null
  );

  const selectedFlow = definition.flows.find((f) => f.id === selectedFlowId) ?? null;
  const steps = selectedFlow?.["x-agentlab"]?.workflow_shorthand ?? [];

  if (definition.flows.length === 0) {
    return <p className="text-sm text-stone-400 text-center py-8">No flows defined in this specification.</p>;
  }

  return (
    <div className="space-y-4">
      {/* Flow selector */}
      <div className="flex flex-wrap gap-2">
        {definition.flows.map((flow) => (
          <button
            key={flow.id}
            type="button"
            onClick={() => setSelectedFlowId(flow.id)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedFlowId === flow.id
                ? `${colors.light} ${colors.border} border ${colors.icon} font-semibold`
                : "bg-white border border-stone-200 text-stone-600 hover:border-stone-300 hover:bg-stone-50"
            }`}
          >
            {flow.name}
          </button>
        ))}
      </div>

      {/* Selected flow detail */}
      {selectedFlow && (
        <div className="bg-white rounded-lg border border-stone-200 overflow-hidden">
          <div className="p-4 border-b border-stone-100">
            <h4 className="text-sm font-semibold text-stone-900">{selectedFlow.name}</h4>
            <p className="text-xs text-stone-500 mt-0.5">{selectedFlow.description}</p>
          </div>

          {/* I/O cards */}
          <div className="grid grid-cols-2 border-b border-stone-100">
            <div className="p-4 md:border-r md:border-stone-100">
              <h5 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Inputs</h5>
              <div className="space-y-1.5">
                {selectedFlow.inputs.map((input) => (
                  <div key={input.title} className="rounded bg-stone-50 px-2.5 py-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-stone-700">{input.title}</span>
                      <span className="text-[10px] text-stone-400 font-mono bg-stone-100 rounded px-1">{input.type}</span>
                    </div>
                    {input.description && <p className="text-xs text-stone-500 mt-0.5">{input.description}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4">
              <h5 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Outputs</h5>
              <div className="space-y-1.5">
                {selectedFlow.outputs.map((output) => (
                  <div key={output.title} className="rounded bg-stone-50 px-2.5 py-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-stone-700">{output.title}</span>
                      <span className="text-[10px] text-stone-400 font-mono bg-stone-100 rounded px-1">{output.type}</span>
                    </div>
                    {output.description && <p className="text-xs text-stone-500 mt-0.5">{output.description}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Workflow steps as visual pipeline */}
          {steps.length > 0 && (
            <div className="p-4">
              <h5 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-3">Workflow</h5>
              <div className="space-y-0">
                {steps.map((step, idx) => (
                  <div key={step.step} className="flex items-stretch gap-3">
                    {/* Step indicator with connecting line */}
                    <div className="flex flex-col items-center w-7 shrink-0">
                      <div className={`w-7 h-7 rounded-full ${colors.light} ${colors.icon} flex items-center justify-center text-xs font-bold shrink-0`}>
                        {step.step}
                      </div>
                      {idx < steps.length - 1 && (
                        <div className="w-px flex-1 bg-stone-200 my-1" />
                      )}
                    </div>
                    {/* Step content */}
                    <div className={`flex-1 ${idx < steps.length - 1 ? "pb-4" : ""}`}>
                      <p className="text-sm font-medium text-stone-800">{step.prompt}</p>
                      <p className="text-xs text-stone-500 mt-0.5">{step.description}</p>
                      <p className="text-[10px] text-stone-400 mt-1 font-mono">input: {step.input}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function VariantsSection({ bundled, colors }: { bundled: BundledAgentDefinition } & ColorProps) {
  const { definition } = bundled;
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);

  const variants = definition.specialized_agents ?? [];

  if (variants.length === 0) {
    return <p className="text-sm text-stone-400 text-center py-8">No variants defined in this specification.</p>;
  }

  const selectedVariant = variants.find((v) => v.id === selectedVariantId) ?? null;

  return (
    <div className="space-y-4">
      <p className="text-xs text-stone-500">
        Variants adapt the agent&apos;s behavior for different contexts. Each inherits the base agent and adds specialized instructions.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {variants.map((variant) => {
          const isSelected = selectedVariantId === variant.id;
          return (
            <button
              key={variant.id}
              type="button"
              onClick={() => setSelectedVariantId(isSelected ? null : variant.id)}
              className={`text-left rounded-lg border p-4 transition-all ${
                isSelected
                  ? `${colors.border} ${colors.bg} ring-1 ring-offset-0`
                  : "border-stone-200 bg-white hover:border-stone-300 hover:shadow-sm"
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Users size={14} className={isSelected ? colors.icon : "text-stone-400"} />
                <h4 className="text-sm font-semibold text-stone-900">{variant.name}</h4>
              </div>
              <p className="text-xs text-stone-500 leading-relaxed">{variant.description}</p>
              {variant.agent_specialization_parameters?.human_in_the_loop && (
                <Badge variant="secondary" className="mt-2 text-[10px]">Human-in-the-loop</Badge>
              )}
            </button>
          );
        })}
      </div>

      {/* Expanded variant details */}
      {selectedVariant && (
        <div className="bg-white rounded-lg border border-stone-200 overflow-hidden">
          <div className="p-4 border-b border-stone-100">
            <h4 className="text-sm font-semibold text-stone-900">{selectedVariant.name}</h4>
            <p className="text-xs text-stone-400 font-mono mt-0.5">ref: {selectedVariant.agent.$component_ref}</p>
          </div>
          <div className="p-4">
            <h5 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Additional Instructions</h5>
            <p className="text-sm text-stone-700 leading-relaxed whitespace-pre-wrap">
              {selectedVariant.agent_specialization_parameters.additional_instructions}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

function ToolsSection({ bundled }: { bundled: BundledAgentDefinition }) {
  const { definition } = bundled;
  const [expandedTool, setExpandedTool] = useState<string | null>(null);
  const tools = definition.tools ?? [];

  if (tools.length === 0) {
    return <p className="text-sm text-stone-400 text-center py-8">No tools defined in this specification.</p>;
  }

  return (
    <div className="space-y-3">
      {tools.map((tool) => {
        const isExpanded = expandedTool === tool.id;
        const risk = tool["x-agentlab"]?.risk;
        return (
          <div key={tool.id} className="bg-white rounded-lg border border-stone-200 overflow-hidden">
            <button
              type="button"
              onClick={() => setExpandedTool(isExpanded ? null : tool.id)}
              className="w-full flex items-center gap-3 p-3 text-left hover:bg-stone-50 transition-colors"
            >
              {isExpanded ? <ChevronDown size={14} className="text-stone-400 shrink-0" /> : <ChevronRight size={14} className="text-stone-400 shrink-0" />}
              <Wrench size={14} className="text-stone-400 shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium text-stone-700">{tool.name}</span>
                <p className="text-xs text-stone-500 truncate">{tool.description}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {tool.requires_confirmation && (
                  <Badge variant="secondary" className="text-[10px] bg-amber-50 text-amber-700 border-amber-200">confirmation</Badge>
                )}
                {risk && (
                  <Badge variant="secondary" className={`text-[10px] ${risk === "low" ? "bg-emerald-50 text-emerald-700" : risk === "medium" ? "bg-amber-50 text-amber-700" : "bg-red-50 text-red-700"}`}>
                    {risk} risk
                  </Badge>
                )}
              </div>
            </button>
            {isExpanded && (
              <div className="border-t border-stone-100 p-3 bg-stone-50">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <h5 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1.5">Inputs</h5>
                    {tool.inputs?.map((input) => (
                      <div key={input.title} className="flex items-center gap-2 py-0.5">
                        <span className="text-xs text-stone-600">{input.title}</span>
                        <span className="text-[10px] text-stone-400 font-mono">{input.type}</span>
                      </div>
                    ))}
                    {(!tool.inputs || tool.inputs.length === 0) && <p className="text-xs text-stone-400">None</p>}
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1.5">Outputs</h5>
                    {tool.outputs?.map((output) => (
                      <div key={output.title} className="flex items-center gap-2 py-0.5">
                        <span className="text-xs text-stone-600">{output.title}</span>
                        <span className="text-[10px] text-stone-400 font-mono">{output.type}</span>
                      </div>
                    ))}
                    {(!tool.outputs || tool.outputs.length === 0) && <p className="text-xs text-stone-400">None</p>}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function PromptsSection({ bundled }: { bundled: BundledAgentDefinition }) {
  const registry = bundled.definition["x-agentlab"]?.prompt_registry ?? {};
  const entries = Object.entries(registry);
  const [expandedPrompt, setExpandedPrompt] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (entries.length === 0) {
    return <p className="text-sm text-stone-400 text-center py-8">No prompts registered in this specification.</p>;
  }

  return (
    <div className="space-y-3">
      <p className="text-xs text-stone-500">
        Click a prompt to view its bundled content. Prompts are referenced by flow workflow steps.
      </p>
      {entries.map(([key, entry]) => {
        const isExpanded = expandedPrompt === key;
        const hasContent = bundled.prompts[key];
        return (
          <div key={key} className="bg-white rounded-lg border border-stone-200 overflow-hidden">
            <button
              type="button"
              onClick={() => setExpandedPrompt(isExpanded ? null : key)}
              className="w-full flex items-center gap-3 p-3 text-left hover:bg-stone-50 transition-colors"
            >
              {isExpanded ? <ChevronDown size={14} className="text-stone-400 shrink-0" /> : <ChevronRight size={14} className="text-stone-400 shrink-0" />}
              <BookOpen size={14} className="text-stone-400 shrink-0" />
              <div className="flex-1 min-w-0">
                <span className="text-sm font-medium text-stone-700">{key}</span>
                <p className="text-xs text-stone-500 truncate">{entry.description}</p>
              </div>
              <span className="text-[10px] text-stone-400 font-mono shrink-0">{entry.source}</span>
            </button>
            {isExpanded && (
              <div className="border-t border-stone-100 bg-stone-50">
                {/* I/O for this prompt */}
                {(entry.inputs?.length || entry.outputs?.length) && (
                  <div className="grid grid-cols-2 gap-3 p-3 border-b border-stone-100">
                    {entry.inputs && entry.inputs.length > 0 && (
                      <div>
                        <h5 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Inputs</h5>
                        {entry.inputs.map((input) => (
                          <div key={input.title} className="flex items-center gap-2 py-0.5">
                            <span className="text-xs text-stone-600">{input.title}</span>
                            <span className="text-[10px] text-stone-400 font-mono">{input.type}</span>
                          </div>
                        ))}
                      </div>
                    )}
                    {entry.outputs && entry.outputs.length > 0 && (
                      <div>
                        <h5 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-1">Outputs</h5>
                        {entry.outputs.map((output) => (
                          <div key={output.title} className="flex items-center gap-2 py-0.5">
                            <span className="text-xs text-stone-600">{output.title}</span>
                            <span className="text-[10px] text-stone-400 font-mono">{output.type}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                {/* Prompt content */}
                <div className="p-3">
                  {hasContent ? (
                    <div className="relative">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigator.clipboard.writeText(hasContent);
                          setCopiedKey(key);
                          setTimeout(() => setCopiedKey(null), 2000);
                        }}
                        className="absolute top-2 right-2 p-1.5 rounded bg-stone-100 hover:bg-stone-200 transition-colors"
                        title="Copy prompt"
                      >
                        {copiedKey === key
                          ? <Check size={12} className="text-emerald-500" />
                          : <Copy size={12} className="text-stone-400" />}
                      </button>
                      <pre className="text-xs text-stone-700 whitespace-pre-wrap font-mono leading-relaxed max-h-64 overflow-y-auto bg-white border border-stone-200 rounded p-3 pr-10">
                        {hasContent}
                      </pre>
                    </div>
                  ) : (
                    <p className="text-xs text-stone-400">No bundled content available for this prompt.</p>
                  )}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function GuardrailsSection({ bundled }: { bundled: BundledAgentDefinition }) {
  const ext = bundled.definition["x-agentlab"];
  const hasInput = (ext?.guardrails?.input?.length ?? 0) > 0;
  const hasOutput = (ext?.guardrails?.output?.length ?? 0) > 0;
  const hasBoundaries = (ext?.boundaries?.length ?? 0) > 0;
  const hasPermissions = (ext?.permissions?.length ?? 0) > 0;
  const hasQuality = (ext?.quality?.length ?? 0) > 0;
  const hasEscalation = (ext?.escalation_triggers?.length ?? 0) > 0;
  const hasConstraints = ext?.output_constraints && Object.keys(ext.output_constraints).length > 0;

  if (!hasInput && !hasOutput && !hasBoundaries && !hasQuality) {
    return <p className="text-sm text-stone-400 text-center py-8">No guardrails defined in this specification.</p>;
  }

  return (
    <div className="space-y-4">
      {/* Input & Output guardrails side by side */}
      {(hasInput || hasOutput) && (
        <div className="grid grid-cols-2 gap-4">
          {hasInput && (
            <div className="bg-white rounded-lg border border-stone-200 p-4">
              <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Shield size={12} />
                Input Guardrails
              </h4>
              <ul className="space-y-1.5">
                {ext.guardrails.input.map((rule, idx) => (
                  <li key={idx} className="flex gap-2 items-start text-sm text-stone-700">
                    <span className="text-stone-300 shrink-0 mt-0.5">&#8226;</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {hasOutput && (
            <div className="bg-white rounded-lg border border-stone-200 p-4">
              <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Shield size={12} />
                Output Guardrails
              </h4>
              <ul className="space-y-1.5">
                {ext.guardrails.output.map((rule, idx) => (
                  <li key={idx} className="flex gap-2 items-start text-sm text-stone-700">
                    <span className="text-stone-300 shrink-0 mt-0.5">&#8226;</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Boundaries & Permissions side by side */}
      {(hasBoundaries || hasPermissions) && (
        <div className="grid grid-cols-2 gap-4">
          {hasBoundaries && (
            <div className="bg-white rounded-lg border border-stone-200 p-4">
              <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Boundaries</h4>
              <ul className="space-y-1.5">
                {ext.boundaries.map((b, idx) => (
                  <li key={idx} className="flex gap-2 items-start text-sm text-stone-700">
                    <XCircle size={14} className="text-red-500 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {hasPermissions && (
            <div className="bg-white rounded-lg border border-stone-200 p-4">
              <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Permissions</h4>
              <ul className="space-y-1.5">
                {ext.permissions.map((p, idx) => (
                  <li key={idx} className="flex gap-2 items-start text-sm text-stone-700">
                    <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Quality criteria & Escalation triggers side by side */}
      {(hasQuality || hasEscalation) && (
        <div className="grid grid-cols-2 gap-4">
          {hasQuality && (
            <div className="bg-white rounded-lg border border-stone-200 p-4">
              <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Quality Criteria</h4>
              <ul className="space-y-1.5">
                {ext.quality.map((q, idx) => (
                  <li key={idx} className="flex gap-2 items-start text-sm text-stone-700">
                    <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {hasEscalation && (
            <div className="bg-white rounded-lg border border-stone-200 p-4">
              <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Escalation Triggers</h4>
              <ul className="space-y-1.5">
                {ext.escalation_triggers.map((t, idx) => (
                  <li key={idx} className="flex gap-2 items-start text-sm text-stone-700">
                    <AlertTriangle size={12} className="text-amber-400 shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Output constraints */}
      {hasConstraints && (
        <div className="bg-white rounded-lg border border-stone-200 p-4">
          <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Output Constraints</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {Object.entries(ext.output_constraints).map(([key, value]) => (
              <div key={key} className="rounded bg-stone-50 px-2.5 py-1.5">
                <span className="text-xs text-stone-500">{key}</span>
                <p className="text-sm font-mono font-medium text-stone-800">{String(value)}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function sectionCount(id: Section, bundled: BundledAgentDefinition): number | null {
  const def = bundled.definition;
  const ext = def["x-agentlab"];
  switch (id) {
    case "flows": return def.flows?.length ?? 0;
    case "variants": return def.specialized_agents?.length ?? 0;
    case "tools": return def.tools?.length ?? 0;
    case "prompts": return Object.keys(ext?.prompt_registry ?? {}).length;
    case "guardrails": {
      const g = ext?.guardrails;
      return (g?.input?.length ?? 0) + (g?.output?.length ?? 0)
        + (ext?.boundaries?.length ?? 0) + (ext?.permissions?.length ?? 0)
        + (ext?.quality?.length ?? 0) + (ext?.escalation_triggers?.length ?? 0);
    }
    default: return null;
  }
}

function InstructionsBanner({ agentspecVersion }: { agentspecVersion: string }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-lg bg-stone-50 border border-stone-200 mb-4">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center gap-2 px-3 py-2.5 text-left hover:bg-stone-100 transition-colors"
      >
        <Info size={14} className="text-stone-400 shrink-0" />
        <span className="text-xs text-stone-600 flex-1">
          Framework-agnostic agent definition, Oracle Agent Spec {agentspecVersion}. Browse, validate, and download.
        </span>
        {expanded ? <ChevronDown size={12} className="text-stone-400 shrink-0" /> : <ChevronRight size={12} className="text-stone-400 shrink-0" />}
      </button>
      {expanded && (
        <div className="px-3 pb-3 space-y-1.5 text-xs text-stone-600 border-t border-stone-200 pt-2.5">
          <div className="flex items-start gap-1.5">
            <Workflow size={11} className="text-stone-400 mt-0.5 shrink-0" />
            <span><strong>Browse</strong> flows, tools, variants, prompts, and guardrails to understand the agent before wiring it into your pipeline</span>
          </div>
          <div className="flex items-start gap-1.5">
            <FileCheck size={11} className="text-stone-400 mt-0.5 shrink-0" />
            <span><strong>Validate</strong> structure, completeness, and integrity by clicking the check badge</span>
          </div>
          <div className="flex items-start gap-1.5">
            <Download size={11} className="text-stone-400 mt-0.5 shrink-0" />
            <span><strong>Download</strong> the YAML and feed it to an agent runtime (OpenAI Agents SDK, LangGraph, CrewAI, Claude Agent SDK, Oracle Agent Runtime) as the configuration source</span>
          </div>
        </div>
      )}
    </div>
  );
}

export function SandboxTab({
  agentId,
  colors,
}: {
  agentId: string;
  colors: { bg: string; border: string; icon: string; light: string };
}) {
  const [bundled, setBundled] = useState<BundledAgentDefinition | null>(null);
  const [loading, setLoading] = useState(true);
  const [validationChecks, setValidationChecks] = useState<ValidationCheck[] | null>(null);
  const [activeSection, setActiveSection] = useState<Section>("overview");
  const [showValidationDetails, setShowValidationDetails] = useState(false);

  useEffect(() => {
    fetch("/definitions.json")
      .then((res) => res.json())
      .then((data) => {
        if (data[agentId]) {
          setBundled(data[agentId]);
          const checks = validateSpec(data[agentId]);
          setValidationChecks(checks);
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [agentId]);

  if (loading) {
    return (
      <div className="rounded-lg border border-dashed border-stone-300 p-12 text-center">
        <p className="text-sm text-stone-400">Loading specification...</p>
      </div>
    );
  }

  if (!bundled) {
    return (
      <div className="rounded-lg border border-dashed border-stone-300 p-12 text-center">
        <FileCheck size={32} className="mx-auto text-stone-300 mb-3" />
        <h3 className="text-lg font-semibold text-stone-700 mb-2">No Specification Available</h3>
        <p className="text-sm text-stone-500 max-w-md mx-auto">
          This agent does not have a portable specification yet. Once a definition is added,
          you can validate it, browse its flows, and download the YAML.
        </p>
      </div>
    );
  }

  function handleDownloadSpec() {
    if (!bundled) return;
    const blob = new Blob([bundled.rawYaml], { type: "application/x-yaml" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = bundled.filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  async function handleDownloadZip() {
    if (!bundled) return;
    const zip = new JSZip();
    const agentId = bundled.definition.id;
    const folder = zip.folder(agentId)!;
    folder.file(bundled.filename, bundled.rawYaml);
    const promptFolder = folder.folder("prompts")!;
    for (const [key, content] of Object.entries(bundled.prompts)) {
      promptFolder.file(`${key}.md`, content);
    }
    if (Object.keys(bundled.examples).length > 0) {
      const exampleFolder = folder.folder("examples")!;
      for (const [key, fixture] of Object.entries(bundled.examples)) {
        exampleFolder.file(`${key}.json`, JSON.stringify(fixture, null, 2));
      }
    }
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${agentId}.zip`;
    a.click();
    URL.revokeObjectURL(url);
  }

  const passed = validationChecks?.filter((c) => c.passed).length ?? 0;
  const total = validationChecks?.length ?? 0;

  // Filter sections based on available data
  const ext = bundled.definition["x-agentlab"];
  const visibleSections = sectionItems.filter((s) => {
    if (s.id === "variants" && (!bundled.definition.specialized_agents || bundled.definition.specialized_agents.length === 0)) return false;
    if (s.id === "tools" && (!bundled.definition.tools || bundled.definition.tools.length === 0)) return false;
    return true;
  });

  return (
    <div>
      {/* Section navigation grid */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mb-4">
        {visibleSections.map((section) => {
          const SectionIcon = section.icon;
          const count = sectionCount(section.id, bundled);
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => setActiveSection(section.id)}
              className={`rounded-lg border p-2.5 text-center transition-all ${
                isActive
                  ? `${colors.bg} ${colors.border} shadow-md`
                  : "bg-white border-stone-200 hover:border-stone-300 hover:shadow-sm"
              }`}
            >
              <SectionIcon size={14} className={`mx-auto mb-1 ${isActive ? colors.icon : "text-stone-400"}`} />
              {count !== null ? (
                <p className={`text-lg font-bold ${isActive ? colors.icon : "text-stone-600"}`}>{count}</p>
              ) : (
                <p className={`text-lg font-bold ${isActive ? colors.icon : "text-stone-600"}`}>&mdash;</p>
              )}
              <p className="text-[10px] text-stone-500">{section.label}</p>
            </button>
          );
        })}
      </div>

      {/* Actions row: validation + downloads */}
      <div className="flex items-center gap-2 mb-4">
        {validationChecks && (
          <button
            type="button"
            onClick={() => setShowValidationDetails(!showValidationDetails)}
            className="inline-flex items-center gap-1"
          >
            <Badge
              variant="secondary"
              className={`text-xs cursor-pointer ${passed === total ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200" : "bg-amber-100 text-amber-700 hover:bg-amber-200"}`}
            >
              {passed === total ? <CheckCircle size={10} className="mr-1" /> : <AlertTriangle size={10} className="mr-1" />}
              {passed}/{total} checks
            </Badge>
          </button>
        )}
        <div className="flex items-center gap-2 ml-auto">
          <Button variant="outline" size="sm" onClick={handleDownloadSpec}>
            <Download size={14} className="mr-1.5" />
            YAML
          </Button>
          <Button variant="outline" size="sm" onClick={handleDownloadZip}>
            <Package size={14} className="mr-1.5" />
            ZIP
          </Button>
        </div>
      </div>

      {/* Validation details (collapsible) */}
      {showValidationDetails && validationChecks && (
        <div className="mb-4">
          <ValidationReport checks={validationChecks} />
        </div>
      )}

      {/* Section content */}
      {activeSection === "overview" && <OverviewSection bundled={bundled} validationChecks={validationChecks} colors={colors} onNavigate={setActiveSection} />}
      {activeSection === "flows" && <FlowsSection bundled={bundled} colors={colors} />}
      {activeSection === "variants" && <VariantsSection bundled={bundled} colors={colors} />}
      {activeSection === "tools" && <ToolsSection bundled={bundled} />}
      {activeSection === "prompts" && <PromptsSection bundled={bundled} />}
      {activeSection === "guardrails" && <GuardrailsSection bundled={bundled} />}
    </div>
  );
}
