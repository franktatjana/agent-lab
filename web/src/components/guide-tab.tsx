"use client";

import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Zap,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface GuideData {
  name: string;
  identity: string;
  problem: string;
  trap: string;
  reframe: string;
  story: string;
  skills: { name: string; description: string; whenToUse: string }[];
  personalities: { name: string; bestFor: string; energy: string }[];
  escalations: { trigger: string; target: string; agentId: string | null }[];
  quickRef: Record<string, string>;
}

function SectionCard({
  icon: Icon,
  label,
  accent,
  children,
}: {
  icon: LucideIcon;
  label: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl border border-stone-200 p-5 flex flex-col">
      <div className="flex items-center gap-2 mb-3">
        <div className={`p-1.5 rounded-md ${accent}`}>
          <Icon size={14} className="text-white" />
        </div>
        <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">{label}</span>
      </div>
      {children}
    </div>
  );
}

export function GuideTab({
  guide,
  colors,
}: {
  guide: GuideData;
  colors: { bg: string; border: string; icon: string; light: string };
}) {
  return (
    <div className="space-y-6">
      {/* Problem / Trap / Reframe strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SectionCard icon={AlertTriangle} label="The Problem" accent="bg-red-400">
          <p className="text-sm text-stone-600 leading-relaxed">{guide.problem}</p>
        </SectionCard>
        <SectionCard icon={AlertTriangle} label="The Trap" accent="bg-amber-400">
          <p className="text-sm text-stone-600 leading-relaxed">{guide.trap}</p>
        </SectionCard>
        <SectionCard icon={Lightbulb} label="The Shift" accent="bg-emerald-500">
          <p className="text-sm text-stone-600 leading-relaxed">{guide.reframe}</p>
        </SectionCard>
      </div>

      {/* Story */}
      {guide.story && (
        <div className={`rounded-xl border ${colors.border} ${colors.bg} px-6 py-5`}>
          <div className="flex items-center gap-2 mb-2">
            <BookOpen size={14} className={colors.icon} />
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">In Practice</span>
          </div>
          <p className="text-sm text-stone-700 leading-relaxed italic">{guide.story}</p>
        </div>
      )}

      {/* Skills grid */}
      {guide.skills.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-3">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {guide.skills.map((skill) => (
              <div key={skill.name} className="bg-white rounded-xl border border-stone-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className={`p-1 rounded-md ${colors.light}`}>
                    <Zap size={12} className={colors.icon} />
                  </div>
                  <span className="text-sm font-semibold text-stone-900">{skill.name}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed mb-2">{skill.description}</p>
                <p className="text-[11px] text-stone-400">{skill.whenToUse}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Personalities */}
      {guide.personalities.length > 0 && (
        <div>
          <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-3">Personalities</h3>
          <div className="flex flex-wrap gap-3">
            {guide.personalities.map((p) => (
              <div key={p.name} className="bg-white rounded-xl border border-stone-200 px-4 py-3 flex-1 min-w-[180px]">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className={`p-1 rounded-md ${colors.light}`}>
                    <Users size={12} className={colors.icon} />
                  </div>
                  <span className="text-sm font-semibold text-stone-900">{p.name}</span>
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">{p.bestFor}</p>
                <p className="text-[11px] text-stone-400 mt-1">{p.energy}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Escalations + Quick Reference side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Escalation paths */}
        {guide.escalations.length > 0 && (
          <div className="bg-white rounded-xl border border-stone-200 p-5">
            <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-3">When to Use Another Agent</h3>
            <div className="space-y-2">
              {guide.escalations.map((esc) => (
                <div key={esc.trigger} className="flex items-start gap-2 text-xs">
                  <ArrowRight size={12} className="text-stone-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-stone-700">{esc.trigger}</span>
                    {esc.agentId ? (
                      <Link
                        href={`/agent/${esc.agentId}`}
                        className="ml-1.5 text-stone-500 hover:text-stone-700 underline"
                      >
                        {esc.target}
                      </Link>
                    ) : (
                      <span className="ml-1.5 text-stone-400">{esc.target}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quick Reference */}
        {Object.keys(guide.quickRef).length > 0 && (
          <div className="bg-white rounded-xl border border-stone-200 p-5">
            <h3 className="text-xs font-semibold text-stone-500 uppercase tracking-wide mb-3">Quick Reference</h3>
            <div className="space-y-2">
              {Object.entries(guide.quickRef).map(([key, value]) => (
                <div key={key} className="flex gap-2 text-xs">
                  <span className="font-medium text-stone-500 shrink-0 w-28 capitalize">{key.replace(/_/g, " ")}</span>
                  <span className="text-stone-600">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Handbook link */}
      <div className="pt-2">
        <Link
          href="/handbook"
          className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
        >
          Find the right agent for your situation &rarr;
        </Link>
      </div>
    </div>
  );
}
