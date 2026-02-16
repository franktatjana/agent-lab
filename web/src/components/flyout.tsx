"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

export function formatInlineText(text: string): React.ReactNode {
  const regex = /(\*\*(.+?)\*\*)|(\*(.+?)\*)|(\[([^\]]+)\]\(([^)]+)\))|("([^"]{20,})")/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;
  let hasMatch = false;
  while ((match = regex.exec(text)) !== null) {
    hasMatch = true;
    if (match.index > lastIndex) parts.push(text.slice(lastIndex, match.index));
    if (match[2]) {
      parts.push(<strong key={key++} className="font-semibold text-stone-900">{match[2]}</strong>);
    } else if (match[4]) {
      parts.push(<em key={key++} className="italic text-stone-600">{match[4]}</em>);
    } else if (match[6] && match[7]) {
      parts.push(<a key={key++} href={match[7]} target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900">{match[6]}</a>);
    } else if (match[9]) {
      parts.push(<span key={key++} className="text-stone-800 italic">&ldquo;{match[9]}&rdquo;</span>);
    }
    lastIndex = regex.lastIndex;
  }
  if (!hasMatch) return text;
  if (lastIndex < text.length) parts.push(text.slice(lastIndex));
  return parts;
}

export function renderReadableContent(raw: string) {
  const lines = raw.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  const indent = (line: string) => line.length - line.trimStart().length;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trimStart();

    if (!trimmed) { i++; continue; }

    if (trimmed.startsWith("```")) {
      i++;
      const codeLines: string[] = [];
      while (i < lines.length && !lines[i].trimStart().startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++;
      elements.push(
        <pre key={`code-${i}`} className="text-sm text-stone-700 leading-relaxed whitespace-pre-wrap bg-stone-50 rounded-lg p-3 mt-2 mb-3 font-mono">
          {formatInlineText(codeLines.join("\n").trim())}
        </pre>,
      );
      continue;
    }

    if (trimmed.startsWith("### ")) {
      elements.push(
        <h4 key={i} className="text-sm font-semibold text-stone-800 mt-8 mb-2 uppercase tracking-wide">
          {formatInlineText(trimmed.slice(4))}
        </h4>,
      );
      i++;
      continue;
    }
    if (trimmed.startsWith("## ")) {
      elements.push(
        <h3 key={i} className="text-lg font-bold text-stone-900 mt-10 mb-3 border-b border-stone-200 pb-2">
          {formatInlineText(trimmed.slice(3))}
        </h3>,
      );
      i++;
      continue;
    }
    if (trimmed.startsWith("# ")) {
      elements.push(
        <h2 key={i} className="text-xl font-bold text-stone-900 mt-10 mb-4 border-b border-stone-200 pb-2">
          {formatInlineText(trimmed.slice(2))}
        </h2>,
      );
      i++;
      continue;
    }

    const yamlKeyMatch = trimmed.match(/^([a-z_A-Z][\w_-]*)\s*:\s*(.*)$/);
    if (yamlKeyMatch && indent(line) === 0) {
      const label = yamlKeyMatch[1].replace(/[_-]/g, " ");
      const inlineValue = yamlKeyMatch[2].replace(/^["']|["']$/g, "");

      if (inlineValue === "|" || inlineValue === ">") {
        const blockLines: string[] = [];
        i++;
        while (i < lines.length && (lines[i].startsWith("    ") || lines[i].startsWith("  ") || lines[i].trim() === "")) {
          if (lines[i].trim() === "" && i + 1 < lines.length && !lines[i + 1].startsWith("  ")) break;
          blockLines.push(lines[i].replace(/^ {2,4}/, ""));
          i++;
        }
        elements.push(
          <div key={`${i}-block`} className="mt-5">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-2">{label}</h3>
            <p className="text-sm text-stone-700 leading-relaxed whitespace-pre-wrap bg-stone-50 rounded-lg p-3">
              {formatInlineText(blockLines.join("\n").trim())}
            </p>
          </div>,
        );
        continue;
      }

      if (inlineValue) {
        elements.push(
          <div key={i} className="mt-4">
            <h3 className="text-sm font-bold text-stone-900 uppercase tracking-wide mb-0.5">{label}</h3>
            <p className="text-sm text-stone-700 leading-relaxed">{formatInlineText(inlineValue.replace(/^["']|["']$/g, ""))}</p>
          </div>,
        );
        i++;
        continue;
      }

      const cardChildren: React.ReactNode[] = [];
      const cardStart = i;
      i++;
      while (i < lines.length) {
        const cl = lines[i];
        const ct = cl.trimStart();
        const ci = cl.length - ct.length;
        if (!ct) { i++; continue; }
        if (ci === 0) break;

        const nkv = ct.match(/^([a-z_A-Z][\w_-]*)\s*:\s*["']?(.+?)["']?\s*$/);
        if (nkv) {
          cardChildren.push(
            <div key={i} className="mt-3">
              <span className="text-xs font-semibold text-stone-400 uppercase tracking-wide">{nkv[1].replace(/[_-]/g, " ")}</span>
              <p className="text-[15px] text-stone-600 leading-7 mt-0.5">{formatInlineText(nkv[2].replace(/^["']|["']$/g, ""))}</p>
            </div>,
          );
          i++;
          continue;
        }

        const nko = ct.match(/^([a-z_A-Z][\w_-]*)\s*:\s*$/);
        if (nko) {
          cardChildren.push(
            <div key={i} className="mt-4 pt-3 border-t border-stone-200 first:mt-0 first:pt-0 first:border-t-0">
              <span className="text-xs font-semibold text-stone-500 uppercase tracking-wide">{nko[1].replace(/[_-]/g, " ")}</span>
            </div>,
          );
          i++;
          continue;
        }

        if (ct.startsWith("- ")) {
          const cardListItems: string[] = [];
          while (i < lines.length && lines[i].trimStart().startsWith("- ") && indent(lines[i]) >= ci) {
            cardListItems.push(lines[i].trimStart().slice(2).replace(/^["']|["']$/g, ""));
            i++;
          }
          cardChildren.push(
            <ul key={`cl-${i}`} className="space-y-1.5 mt-2">
              {cardListItems.map((item, idx) => (
                <li key={idx} className="flex gap-2 text-[15px] text-stone-600">
                  <span className="text-stone-400 shrink-0 leading-7">&#8226;</span>
                  <span className="leading-7">{formatInlineText(item)}</span>
                </li>
              ))}
            </ul>,
          );
          continue;
        }

        cardChildren.push(
          <p key={i} className="text-[15px] text-stone-600 leading-7 mt-2">{formatInlineText(ct)}</p>,
        );
        i++;
      }

      if (cardChildren.length > 0) {
        elements.push(
          <div key={`card-${cardStart}`} className="mt-6 rounded-xl bg-stone-50 border border-stone-100 px-5 py-4">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-stone-500 bg-white border border-stone-200 px-2.5 py-1 rounded-md mb-2">{label}</span>
            {cardChildren}
          </div>,
        );
      } else {
        elements.push(
          <div key={cardStart} className="mt-8 mb-2">
            <span className="inline-block text-xs font-semibold uppercase tracking-wider text-stone-500 bg-stone-100 px-2.5 py-1 rounded-md">{label}</span>
          </div>,
        );
      }
      continue;
    }

    const nestedKeyOnly = trimmed.match(/^([a-z_A-Z][\w_-]*)\s*:\s*$/);
    if (nestedKeyOnly && indent(line) >= 2 && indent(line) <= 4) {
      const label = nestedKeyOnly[1].replace(/[_-]/g, " ");
      elements.push(
        <div key={i} className="mt-4 mb-1">
          <h4 className="text-sm font-bold text-stone-800">{label}</h4>
        </div>,
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("- ")) {
      const listItems: string[] = [];
      const listIndent = indent(line);
      while (i < lines.length) {
        const cur = lines[i];
        if (cur.trimStart().startsWith("- ") && indent(cur) === listIndent) {
          let item = cur.trimStart().slice(2).replace(/^["']|["']$/g, "");
          i++;
          while (i < lines.length && indent(lines[i]) > listIndent && !lines[i].trimStart().startsWith("- ")) {
            item += " " + lines[i].trim();
            i++;
          }
          listItems.push(item);
        } else {
          break;
        }
      }
      elements.push(
        <ul key={`list-${i}`} className="space-y-2.5 mt-3 mb-4 ml-1">
          {listItems.map((item, idx) => (
            <li key={idx} className="flex gap-2.5 text-[15px] text-stone-600">
              <span className="text-stone-400 shrink-0 leading-7">&#8226;</span>
              <span className="leading-7">{formatInlineText(item)}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    const nestedMatch = trimmed.match(/^([a-z_A-Z][\w_-]*)\s*:\s*["']?(.+?)["']?\s*$/);
    if (nestedMatch && indent(line) >= 2) {
      const label = nestedMatch[1].replace(/[_-]/g, " ");
      const value = nestedMatch[2];
      elements.push(
        <div key={i} className="flex gap-2 text-[15px] mt-2 ml-1">
          <span className="text-stone-500 font-semibold shrink-0">{label}:</span>
          <span className="text-stone-600 leading-7">{formatInlineText(value)}</span>
        </div>,
      );
      i++;
      continue;
    }

    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      const tableRows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|") && lines[i].trim().endsWith("|")) {
        const row = lines[i].trim();
        if (/^\|[\s\-:|]+\|$/.test(row)) {
          i++;
          continue;
        }
        const cells = row.split("|").slice(1, -1).map((c) => c.trim());
        tableRows.push(cells);
        i++;
      }
      if (tableRows.length > 0) {
        const [header, ...body] = tableRows;
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto mt-3 mb-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-stone-200">
                  {header.map((cell, ci) => (
                    <th key={ci} className="text-left py-2 px-3 font-semibold text-stone-800 text-xs uppercase tracking-wide">
                      {formatInlineText(cell)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, ri) => (
                  <tr key={ri} className="border-b border-stone-100">
                    {row.map((cell, ci) => (
                      <td key={ci} className="py-2 px-3 text-stone-700">
                        {formatInlineText(cell)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>,
        );
      }
      continue;
    }

    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      elements.push(
        <img key={i} src={imgMatch[2]} alt={imgMatch[1]} className="w-full rounded-lg mt-2" />,
      );
      i++;
      continue;
    }

    const standaloneBold = trimmed.match(/^\*\*(.+?)\*\*$/);
    if (standaloneBold) {
      elements.push(
        <p key={i} className="text-[15px] font-semibold text-stone-900 mt-8 mb-1">
          {standaloneBold[1]}
        </p>,
      );
      i++;
      continue;
    }

    const boldLeadMatch = trimmed.match(/^\*\*(.+?)\*\*\s+(.+)$/);
    if (boldLeadMatch) {
      elements.push(
        <p key={i} className="text-[15px] text-stone-600 leading-7 mt-4">
          <strong className="font-semibold text-stone-900">{boldLeadMatch[1]}</strong>{" "}
          <span>{formatInlineText(boldLeadMatch[2])}</span>
        </p>,
      );
      i++;
      continue;
    }

    elements.push(
      <p key={i} className="text-[15px] text-stone-600 leading-7 mt-4">
        {formatInlineText(trimmed)}
      </p>,
    );
    i++;
  }

  return elements;
}

export function Flyout({
  open,
  title,
  content,
  onClose,
}: {
  open: boolean;
  title: string;
  content: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white shadow-2xl border-l border-stone-200 flex flex-col animate-in slide-in-from-right duration-200">
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 shrink-0">
          <h2 className="text-base font-semibold text-stone-900 truncate pr-4">{title}</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-stone-100 text-stone-400 hover:text-stone-600 transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <div className="max-w-[60ch]">
            {renderReadableContent(content)}
          </div>
        </div>
      </div>
    </div>
  );
}
