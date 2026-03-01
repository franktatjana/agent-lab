import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync, statSync } from "fs";
import { join, resolve } from "path";
import yaml from "js-yaml";

const agentsDir = resolve(import.meta.dirname, "..", "..", "agents");
const outFile = resolve(import.meta.dirname, "..", "public", "definitions.json");

const definitions = {};

for (const agentFolder of readdirSync(agentsDir)) {
  const agentPath = join(agentsDir, agentFolder);
  if (!statSync(agentPath).isDirectory()) continue;

  // Find *-definition.yaml
  const defFiles = readdirSync(agentPath).filter((f) => f.endsWith("-definition.yaml"));
  if (!defFiles || defFiles.length === 0) continue;

  const defContent = readFileSync(join(agentPath, defFiles[0]), "utf-8");
  const definition = yaml.load(defContent);

  // Collect examples
  const examples = {};
  const examplesDir = join(agentPath, "examples");
  if (existsSync(examplesDir)) {
    for (const file of readdirSync(examplesDir)) {
      if (!file.endsWith(".yaml") && !file.endsWith(".yml")) continue;
      const content = readFileSync(join(examplesDir, file), "utf-8");
      const name = file.replace(/\.(yaml|yml)$/, "");
      const docs = yaml.loadAll(content);
      examples[name] = docs.length === 1 ? docs[0] : docs;
    }
  }

  // Collect prompts
  const prompts = {};
  const promptsDir = join(agentPath, "prompts");
  if (existsSync(promptsDir)) {
    for (const file of readdirSync(promptsDir)) {
      if (!file.endsWith(".md")) continue;
      const content = readFileSync(join(promptsDir, file), "utf-8");
      const name = file.replace(/\.md$/, "");
      prompts[name] = content;
    }
  }

  // Collect design prompts from visual/
  const designPrompts = {};
  const visualDir = join(agentPath, "visual");
  if (existsSync(visualDir)) {
    for (const file of readdirSync(visualDir)) {
      if (!file.endsWith(".md")) continue;
      const content = readFileSync(join(visualDir, file), "utf-8");
      const name = file.replace(/\.md$/, "");
      designPrompts[name] = content;
    }
  }

  definitions[agentFolder] = { definition, rawYaml: defContent, filename: defFiles[0], examples, prompts, designPrompts };
}

const outDir = resolve(import.meta.dirname, "..", "public");
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

writeFileSync(outFile, JSON.stringify(definitions));
console.log(`Bundled definitions for ${Object.keys(definitions).length} agent(s) into public/definitions.json`);
