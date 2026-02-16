import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "fs";
import { join, resolve } from "path";

const agentsDir = resolve(import.meta.dirname, "..", "..", "agents");
const outFile = resolve(import.meta.dirname, "..", "public", "references.json");

const references = {};

for (const agentFolder of readdirSync(agentsDir)) {
  const refsDir = join(agentsDir, agentFolder, "references");
  if (!existsSync(refsDir)) continue;

  for (const file of readdirSync(refsDir)) {
    if (!file.endsWith(".md")) continue;
    const content = readFileSync(join(refsDir, file), "utf-8");
    const key = `${agentFolder}/${file}`;
    references[key] = content;
  }
}

const outDir = resolve(import.meta.dirname, "..", "public");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

writeFileSync(outFile, JSON.stringify(references));
console.log(`Bundled ${Object.keys(references).length} reference files into public/references.json`);
