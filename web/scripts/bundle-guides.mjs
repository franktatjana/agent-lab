import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "fs";
import { join, resolve } from "path";

const guidesDir = resolve(import.meta.dirname, "..", "..", "docs", "guides");
const outFile = resolve(import.meta.dirname, "..", "public", "guides.json");

function splitSections(content) {
  const map = {};
  const parts = content.split(/\n## /);
  for (const part of parts) {
    const nl = part.indexOf("\n");
    if (nl === -1) continue;
    const heading = part.slice(0, nl).trim();
    const body = part.slice(nl + 1).trim();
    map[heading] = body;
  }
  return map;
}

function extractTable(section) {
  const rows = [];
  const lines = section.split("\n");
  let headers = [];
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed.startsWith("|") || !trimmed.endsWith("|")) continue;
    if (/^\|[\s\-:|]+\|$/.test(trimmed)) continue;
    const cells = trimmed.split("|").slice(1, -1).map((c) => c.trim());
    if (headers.length === 0) {
      headers = cells.map((h) => h.toLowerCase().replace(/\s+/g, "_"));
    } else {
      const row = {};
      cells.forEach((cell, i) => { row[headers[i] || `col${i}`] = cell; });
      rows.push(row);
    }
  }
  return rows;
}

function condenseParagraph(section, maxSentences = 3) {
  if (!section) return "";
  const text = section
    .split("\n")
    .filter((l) => l.trim() && !l.startsWith("#") && !l.startsWith("|") && !l.startsWith("---") && !l.startsWith("1.") && !l.match(/^-\s/))
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  return sentences.slice(0, maxSentences).join(" ").trim();
}

function extractEscalations(section) {
  if (!section) return [];
  const items = [];
  for (const line of section.split("\n")) {
    const match = line.match(/^-\s+\*\*(.+?)\*\*[:\s]*(.+)/);
    if (match) {
      const linkMatch = match[2].match(/\[(.+?)\]\((.+?)\)/);
      items.push({
        trigger: match[1],
        target: linkMatch ? linkMatch[1].replace(" Agent", "") : match[2].replace(/hand off to /i, "").replace(/\[|\]/g, "").trim(),
        agentId: linkMatch ? linkMatch[2].replace(/-guide\.md$/, "").replace(/.*\//, "") : null,
      });
    }
  }
  return items;
}

function parseGuide(content) {
  const nameMatch = content.match(/^# (.+)/m);
  const identityMatch = content.match(/^\*(.+)\*$/m);
  const sections = splitSections(content);
  const reframeKey = Object.keys(sections).find((k) => k.startsWith("How "));

  return {
    name: nameMatch ? nameMatch[1].trim() : "",
    identity: identityMatch ? identityMatch[1].trim() : "",
    problem: condenseParagraph(sections["The Problem"], 3),
    trap: condenseParagraph(sections["The Trap"], 3),
    reframe: condenseParagraph(sections[reframeKey] || "", 3),
    story: condenseParagraph(sections["A Story"], 4),
    skills: extractTable(sections["Skills at a Glance"] || "").map((r) => ({
      name: r.skill || "",
      description: r.what_it_does || "",
      whenToUse: r.when_to_use || "",
    })),
    personalities: extractTable(sections["Choosing a Personality"] || "").map((r) => ({
      name: r.personality || "",
      bestFor: r.best_for || "",
      energy: r.energy || "",
    })),
    escalations: extractEscalations(sections["When to Use Another Agent"] || ""),
    quickRef: Object.fromEntries(
      extractTable(sections["Quick Reference"] || "").map((r) => [
        (r.field || "").toLowerCase().replace(/\s+/g, "_"),
        r.value || "",
      ]).filter(([k]) => k)
    ),
  };
}

const guides = {};

if (existsSync(guidesDir)) {
  for (const file of readdirSync(guidesDir)) {
    if (!file.endsWith("-guide.md")) continue;
    const agentId = file.replace("-guide.md", "");
    const content = readFileSync(join(guidesDir, file), "utf-8");
    guides[agentId] = parseGuide(content);
  }
}

const outDir = resolve(import.meta.dirname, "..", "public");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

writeFileSync(outFile, JSON.stringify({ guides }));
console.log(`Bundled ${Object.keys(guides).length} agent guide(s) into public/guides.json`);
