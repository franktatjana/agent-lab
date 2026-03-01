"use client";

import { useState, useCallback } from "react";
import * as Popover from "@radix-ui/react-popover";

export const agentResources: Record<string, { references: string[]; visualImage?: string }> = {
  "culture-agent": {
    references: ["communication-playbook.md", "culture-profiles.md", "frameworks.md", "glossary-and-resources.md"],
    visualImage: "/agents/culture-agent.png",
  },
  "research-agent": {
    references: ["glossary-and-resources.md", "research-quality-framework.md", "source-evaluation-checklist.md", "synthesis-framework.md"],
  },
  "why-agent": {
    references: ["fishbone-categories.md", "five-whys-guide.md", "glossary-and-resources.md", "root-cause-verification.md"],
  },
  "generation-agent": {
    references: ["generational-patterns.md"],
  },
  "superhero-agent": {
    references: ["glossary-and-resources.md", "hero-archetypes.md", "villain-archetypes.md"],
  },
  "storytelling-agent": {
    references: ["glossary-and-resources.md", "storytelling-frameworks.md"],
  },
  "question-decoder-agent": {
    references: ["audience-frameworks.md", "glossary-and-resources.md"],
  },
  "six-hats-agent": {
    references: ["glossary-and-resources.md", "six-hats-framework.md", "hat-sequencing-guide.md"],
  },
  "corporate-navigator-agent": {
    references: ["glossary-and-resources.md", "stakeholder-mapping-frameworks.md", "career-coaching-frameworks.md"],
  },
  "design-thinking-agent": {
    references: ["design-thinking-frameworks.md", "glossary-and-resources.md"],
  },
  "leadership-coach-agent": {
    references: ["leadership-frameworks.md", "leadership-archetypes.md", "glossary-and-resources.md"],
  },
  "networking-agent": {
    references: ["networking-frameworks.md", "glossary-and-resources.md"],
  },
};

export function FrameworkBadge({ name, agentId, onOpenFlyout }: { name: string; agentId: string; onOpenFlyout: (f: { title: string; content: string }) => void }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [fullContent, setFullContent] = useState<string>("");
  const [open, setOpen] = useState(false);

  const loadContent = useCallback(async () => {
    if (summary !== null) return;
    const refs = agentResources[agentId]?.references;
    if (!refs) return;
    try {
      const res = await fetch("/references.json");
      const data: Record<string, string> = await res.json();
      const searchWords = name.split("(")[0].trim().toLowerCase().split(/\s+/);
      const matchesAll = (text: string) => { const t = text.toLowerCase(); return searchWords.every((w) => t.includes(w)); };
      const stripMd = (s: string) => s
        .replace(/#{1,6}\s+/g, "")
        .replace(/\*\*(.+?)\*\*/g, "$1")
        .replace(/\*(.+?)\*/g, "$1")
        .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
        .replace(/\s+/g, " ")
        .trim();
      const extractSection = (text: string) => {
        const lines = text.split("\n");
        // Try ## heading match first
        const h2Idx = lines.findIndex((l) => l.startsWith("## ") && matchesAll(l));
        if (h2Idx >= 0) {
          const nextIdx = lines.findIndex((l, i) => i > h2Idx && l.startsWith("## "));
          return lines.slice(h2Idx + 1, nextIdx > 0 ? nextIdx : undefined).join("\n").trim();
        }
        // Fall back to # heading (file title) match, return content after title
        const h1Idx = lines.findIndex((l) => l.startsWith("# ") && !l.startsWith("## ") && matchesAll(l));
        if (h1Idx >= 0) {
          const firstH2 = lines.findIndex((l, i) => i > h1Idx && l.startsWith("## "));
          // Return intro text between h1 and first h2, or full file content after h1
          const contentAfterH1 = lines.slice(h1Idx + 1).join("\n").trim();
          if (firstH2 >= 0) {
            const intro = lines.slice(h1Idx + 1, firstH2).join("\n").trim();
            return intro || contentAfterH1;
          }
          return contentAfterH1;
        }
        return null;
      };
      const extractSummary = (section: string) => {
        const sectionLines = section.split("\n");
        const paragraphLines: string[] = [];
        for (const sl of sectionLines) {
          const t = sl.trim();
          if (!t && paragraphLines.length > 0) break;
          if (t.startsWith("#") || t.startsWith("|") || t.startsWith("```")) continue;
          if (t.startsWith("- ") && paragraphLines.length > 0) break;
          if (t.startsWith("- ")) continue;
          if (t.startsWith("**") && t.endsWith("**")) continue;
          if (t) paragraphLines.push(t);
        }
        const plain = stripMd(paragraphLines.join(" "));
        return plain || stripMd(sectionLines.filter((l) => l.trim()).slice(0, 3).join(" "));
      };
      // Search non-glossary files first, then glossary as fallback
      const sortedRefs = [...refs].sort((a, b) => {
        const aGloss = a.includes("glossary") ? 1 : 0;
        const bGloss = b.includes("glossary") ? 1 : 0;
        return aGloss - bGloss;
      });
      for (const file of sortedRefs) {
        const key = `${agentId}/${file}`;
        const text = data[key];
        if (!text) continue;
        const section = extractSection(text);
        if (section) {
          setFullContent(section);
          setSummary(extractSummary(section));
          return;
        }
      }
      setSummary("");
    } catch { setSummary(""); }
  }, [name, agentId, summary]);

  const handleClick = () => {
    setOpen(false);
    if (fullContent) {
      const searchTerm = name.split("(")[0].trim();
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
      const withLink = fullContent + `\n\n[Learn more](${searchUrl})`;
      onOpenFlyout({ title: name, content: withLink });
    }
  };

  return (
    <Popover.Root open={open} onOpenChange={setOpen}>
      <Popover.Trigger asChild>
        <button
          type="button"
          className="text-xs bg-white/60 text-stone-600 border border-stone-200 rounded px-2 py-1 hover:border-stone-400 hover:text-stone-800 hover:shadow-sm transition-all cursor-pointer"
          onMouseEnter={() => { loadContent(); setOpen(true); }}
          onMouseLeave={() => setOpen(false)}
          onClick={handleClick}
        >
          {name}
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="bottom"
          align="start"
          sideOffset={6}
          className="z-50 max-w-sm rounded-lg border border-stone-200 bg-white p-4 shadow-lg"
          onPointerEnter={() => setOpen(true)}
          onPointerLeave={() => setOpen(false)}
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <p className="text-xs font-semibold text-stone-800 mb-2">{name}</p>
          {summary === null ? (
            <p className="text-xs text-stone-400">Loading...</p>
          ) : summary === "" ? (
            <p className="text-xs text-stone-400">No details available.</p>
          ) : (
            <p className="text-xs text-stone-600 leading-relaxed">{summary}</p>
          )}
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
