"use client";

import type { ValidationCheck } from "@/lib/sandbox/spec-validator";
import { CheckCircle, XCircle, AlertTriangle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function CheckRow({ check }: { check: ValidationCheck }) {
  return (
    <div className="flex items-start gap-2 py-1.5">
      {check.passed ? (
        <CheckCircle size={14} className="text-emerald-500 mt-0.5 shrink-0" />
      ) : check.severity === "error" ? (
        <XCircle size={14} className="text-red-500 mt-0.5 shrink-0" />
      ) : (
        <AlertTriangle size={14} className="text-amber-500 mt-0.5 shrink-0" />
      )}
      <div className="flex-1 min-w-0">
        <span className="text-sm text-stone-700">{check.name}</span>
        <p className="text-xs text-stone-500">{check.message}</p>
      </div>
    </div>
  );
}

export function ValidationReport({ checks }: { checks: ValidationCheck[] }) {
  const passed = checks.filter((c) => c.passed).length;
  const total = checks.length;
  const allPassed = passed === total;

  const schemaChecks = checks.filter((c) => c.category === "schema");
  const completenessChecks = checks.filter((c) => c.category === "completeness");
  const crossRefChecks = checks.filter((c) => c.category === "cross-reference");

  return (
    <div className="mt-4 rounded-lg border border-stone-200 bg-white overflow-hidden">
      <div className="p-4 border-b border-stone-200 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-stone-900">Validation Report</h3>
        <div className="flex items-center gap-2">
          <Badge
            variant="secondary"
            className={`text-xs ${allPassed ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}
          >
            {passed}/{total} passed
          </Badge>
        </div>
      </div>

      <div className="divide-y divide-stone-100">
        {schemaChecks.length > 0 && (
          <div className="p-4">
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Schema</h4>
            {schemaChecks.map((check) => (
              <CheckRow key={check.name} check={check} />
            ))}
          </div>
        )}

        {completenessChecks.length > 0 && (
          <div className="p-4">
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Completeness</h4>
            {completenessChecks.map((check) => (
              <CheckRow key={check.name} check={check} />
            ))}
          </div>
        )}

        {crossRefChecks.length > 0 && (
          <div className="p-4">
            <h4 className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">Cross-References</h4>
            {crossRefChecks.map((check) => (
              <CheckRow key={check.name} check={check} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
