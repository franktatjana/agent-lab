"use client";

import { useState } from "react";
import type { ValidationCheck } from "@/lib/sandbox/spec-validator";
import { CheckCircle, XCircle, AlertTriangle, ChevronDown, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const categoryMeta: Record<string, { label: string; description: string }> = {
  structure: { label: "Structure", description: "Required fields and typed definitions" },
  completeness: { label: "Completeness", description: "Guardrails, memory, context, and quality" },
  integrity: { label: "Integrity", description: "Cross-references between flows, prompts, and variants" },
};

function CategoryCard({ category, checks }: { category: string; checks: ValidationCheck[] }) {
  const [expanded, setExpanded] = useState(false);
  const passed = checks.filter((c) => c.passed).length;
  const total = checks.length;
  const allPassed = passed === total;
  const failures = checks.filter((c) => !c.passed);
  const meta = categoryMeta[category] ?? { label: category, description: "" };

  return (
    <div className={`rounded-lg border ${allPassed ? "border-emerald-200 bg-emerald-50/50" : "border-amber-200 bg-amber-50/50"}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3 flex items-center gap-3 text-left"
      >
        {allPassed ? (
          <CheckCircle size={18} className="text-emerald-500 shrink-0" />
        ) : (
          <AlertTriangle size={18} className="text-amber-500 shrink-0" />
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-stone-800">{meta.label}</span>
            <span className={`text-xs font-medium ${allPassed ? "text-emerald-600" : "text-amber-600"}`}>
              {passed}/{total}
            </span>
          </div>
          <p className="text-xs text-stone-500">{meta.description}</p>
        </div>
        {expanded ? (
          <ChevronDown size={14} className="text-stone-400 shrink-0" />
        ) : (
          <ChevronRight size={14} className="text-stone-400 shrink-0" />
        )}
      </button>

      {/* Always show failures inline */}
      {!expanded && failures.length > 0 && (
        <div className="px-4 pb-3 space-y-1">
          {failures.map((c) => (
            <div key={c.name} className="flex items-start gap-2 text-xs">
              {c.severity === "error" ? (
                <XCircle size={12} className="text-red-500 mt-0.5 shrink-0" />
              ) : (
                <AlertTriangle size={12} className="text-amber-500 mt-0.5 shrink-0" />
              )}
              <span className="text-stone-600">{c.name}: <span className="text-stone-400">{c.message}</span></span>
            </div>
          ))}
        </div>
      )}

      {/* Expanded: show all checks */}
      {expanded && (
        <div className="px-4 pb-3 border-t border-stone-200/50 pt-2 space-y-1">
          {checks.map((c) => (
            <div key={c.name} className="flex items-start gap-2 text-xs py-0.5">
              {c.passed ? (
                <CheckCircle size={12} className="text-emerald-500 mt-0.5 shrink-0" />
              ) : c.severity === "error" ? (
                <XCircle size={12} className="text-red-500 mt-0.5 shrink-0" />
              ) : (
                <AlertTriangle size={12} className="text-amber-500 mt-0.5 shrink-0" />
              )}
              <span className="text-stone-600">{c.name}</span>
              <span className="text-stone-400 ml-auto shrink-0">{c.message}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function ValidationReport({ checks }: { checks: ValidationCheck[] }) {
  const passed = checks.filter((c) => c.passed).length;
  const total = checks.length;
  const allPassed = passed === total;

  const groups = [
    { key: "structure", checks: checks.filter((c) => c.category === "structure") },
    { key: "completeness", checks: checks.filter((c) => c.category === "completeness") },
    { key: "integrity", checks: checks.filter((c) => c.category === "integrity") },
  ].filter((g) => g.checks.length > 0);

  return (
    <div className="mt-4 rounded-lg border border-stone-200 bg-white overflow-hidden">
      <div className="p-4 border-b border-stone-200 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-stone-900">Validation Report</h3>
        <Badge
          variant="secondary"
          className={`text-xs ${allPassed ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}
        >
          {passed}/{total} passed
        </Badge>
      </div>

      <div className="p-4 space-y-3">
        {groups.map((group) => (
          <CategoryCard key={group.key} category={group.key} checks={group.checks} />
        ))}
      </div>
    </div>
  );
}
