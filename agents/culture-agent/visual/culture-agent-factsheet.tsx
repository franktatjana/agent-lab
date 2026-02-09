/**
 * Culture Agent Factsheet - Visual Card Component
 *
 * Single-file, inline styles, no build step required.
 * Data source: ../culture-agent.md (the spec is the single source of truth)
 * Design prompt: ./design-prompt.md
 *
 * HOW TO RENDER:
 *   v0.dev:      Paste this file, screenshot at 1400px width
 *   StackBlitz:  New React+TS project → replace App.tsx → preview → screenshot
 *   Local:       npx create-vite factsheet --template react-ts → replace App.tsx → npm run dev
 *
 * HOW TO UPDATE:
 *   1. Edit the AGENT data object below to match spec changes
 *   2. Re-render and screenshot → save as culture-agent-factsheet.png
 *   3. Commit TSX + PNG together
 *
 * SECTION MAPPING (spec → AGENT field):
 *   Identity            → identity
 *   Skills              → skills[]
 *   Personality Variants→ personalities[]
 *   Inputs / Outputs    → inputs[], outputs[]
 *   How It Works        → flow{}
 *   Frameworks          → frameworks[]
 *   Connections         → connections[]
 *   Mutual Learning     → mutualLearning{}
 *   Guardrails          → guardrails[]
 *   When to Use         → scenarios[]
 *   Case Study          → caseStudy{}
 *   Version             → version, type, maturity
 */

// ─── DATA (edit this when the spec changes) ──────────────────────────────────

const AGENT = {
  name: "Culture Agent",
  subtitle: "Cross-cultural communication bridge",
  version: "0.2.0",
  type: "Communication / Advisory",
  maturity: "Complete",
  identity:
    "Translates communication between parties from different cultural backgrounds. Ensures messages land with intended meaning while respecting cultural codes and norms. Helps parties understand each other, not change each other.",
  skills: [
    {
      name: "Cultural Bridge",
      description: "Adapt message for target culture",
      prompts: ["identify-dimensions", "detect-friction", "reframe-message"],
    },
    {
      name: "Culture Comparison",
      description: "Compare cultures across dimensions",
      prompts: ["identify-dimensions", "find-gaps", "suggest-adaptations"],
    },
    {
      name: "Meeting Prep",
      description: "Prepare for cross-cultural meetings",
      prompts: ["identify-dimensions", "anticipate-dynamics", "coach-behavior"],
    },
    {
      name: "Conflict Mediation",
      description: "Resolve cultural misunderstandings",
      prompts: ["diagnose-misunderstanding", "explain-perspectives", "suggest-resolution"],
    },
  ],
  personalities: [
    { name: "business", focus: "Etiquette, decision-making, commitment interpretation" },
    { name: "diplomatic", focus: "Common ground, careful framing, face-saving" },
    { name: "casual", focus: "Humor, social cues, relationship building" },
  ],
  inputs: [
    "source_culture", "target_culture", "message", "context", "situation",
    "meeting_type", "relationship", "personality", "output_format",
  ],
  outputs: [
    "cultural_context", "potential_friction", "recommendations", "reframed_message",
    "diagnosis", "resolution_path", "confidence", "caveats",
    "learning_opportunities", "enrichment_angle", "awareness_flags",
  ],
  flow: {
    input: ["source_culture", "target_culture", "message", "context"],
    process: ["Map dimensions", "Detect friction", "Reframe", "Surface learning", "Add caveats"],
    output: ["cultural_context", "friction", "recommendations", "reframed_message", "learning"],
  },
  frameworks: [
    { name: "Hofstede Cultural Dimensions", author: "G. Hofstede" },
    { name: "Erin Meyer Culture Map", author: "E. Meyer" },
    { name: "Edward Hall Context Model", author: "E. Hall" },
    { name: "Daniel Coyle Culture Code", author: "D. Coyle" },
  ],
  connections: [
    { from: "Research Agent", to: "Culture Agent", arrow: "→" },
    { from: "Culture Agent", to: "Writing Agent", arrow: "→" },
    { from: "Culture Agent", to: "Strategy Agent", arrow: "→" },
    { from: "Culture Agent", to: "Generation Agent", arrow: "↔" },
  ],
  mutualLearning: {
    title: "Every output includes mutual learning",
    dimensions: [
      { pair: "Direct ↔ Indirect", left: '"surface disagreement"', right: '"preserve relationships"' },
      { pair: "Hierarchical ↔ Egalitarian", left: '"clear authority"', right: '"ideas from every level"' },
      { pair: "Task ↔ Relationship", left: '"move quickly"', right: '"build lasting trust"' },
    ],
    outputs: ["Friction points", "Learning opportunities", "Enrichment angle", "Awareness flags"],
    flags: "Flags: tourist learning, deficit framing, power asymmetry",
  },
  guardrails: ["No stereotyping", "No cultural judgment", "No legal/HR advice", "Flags power asymmetry"],
  scenarios: [
    "International meetings", "Message adaptation", "Collaboration friction",
    "Misunderstanding resolution", "Onboarding", "Cultural intelligence training",
  ],
  caseStudy: {
    title: "German-US Product Launch",
    summary:
      "Meeting-prep turned a failing partnership into the company's strongest cross-Atlantic collaboration. Germans gained iteration speed, Americans gained commitment precision. Shipped on time.",
    link: "case-studies/german-us-product-launch.md",
  },
};

// ─── COLOR TOKENS (adjust accent for other agents) ──────────────────────────

const c = {
  bg: "#FFFFFF",
  surface: "#F4F6F8",
  surfaceAlt: "#E8ECF0",
  border: "#D1D8E0",
  borderLight: "#E2E8EE",
  text: "#1E2A3A",
  textSecondary: "#3D4F5F",
  textMuted: "#8899A6",
  accent: "#4A90D9",
  accentBg: "#EBF3FB",
  accentBorder: "rgba(74, 144, 217, 0.2)",
  dark: "#1E2A3A",
  darkText: "#F0F4F8",
  darkMuted: "#8899A6",
  mono: "'JetBrains Mono', 'Fira Code', 'SF Mono', 'Consolas', monospace",
  sans: "'Inter', 'SF Pro Display', system-ui, -apple-system, sans-serif",
};

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function CultureAgentFactsheet() {
  const sectionLabel = (text: string): React.CSSProperties => ({
    fontFamily: c.mono,
    fontSize: "9px",
    fontWeight: 700,
    color: c.textMuted,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "8px",
  });

  const cellBorder = `1px solid ${c.border}`;
  const sectionPad = "12px 16px";

  return (
    <div
      style={{
        width: "1400px",
        fontFamily: c.sans,
        color: c.text,
        background: c.bg,
        border: `2px solid ${c.border}`,
        borderRadius: "4px",
        overflow: "hidden",
        fontSize: "11px",
        lineHeight: "1.4",
      }}
    >
      {/* ═══ HEADER ═══ */}
      <div
        style={{
          borderBottom: `2px solid ${c.accent}`,
          background: c.surfaceAlt,
          padding: "12px 20px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
        }}
      >
        <div>
          <h1 style={{ fontFamily: c.sans, fontSize: "24px", fontWeight: 800, margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            {AGENT.name}
          </h1>
          <p style={{ fontFamily: c.sans, fontSize: "13px", color: c.textMuted, margin: "2px 0 0" }}>
            {AGENT.subtitle}
          </p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          {[`v${AGENT.version}`, AGENT.type, AGENT.maturity].map((label) => (
            <span
              key={label}
              style={{
                fontFamily: c.mono,
                fontSize: "10px",
                fontWeight: 600,
                padding: "3px 10px",
                border: cellBorder,
                borderRadius: "2px",
                background: c.bg,
                color: c.textSecondary,
                whiteSpace: "nowrap" as const,
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* ═══ 3-COLUMN GRID ═══ */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: cellBorder }}>

        {/* ─── LEFT COLUMN ─── */}
        <div style={{ borderRight: cellBorder }}>

          {/* IDENTITY */}
          <div style={{ padding: sectionPad, borderBottom: cellBorder, background: c.bg }}>
            <div style={sectionLabel("Identity")}>Identity</div>
            <p style={{ fontFamily: c.sans, fontSize: "10.5px", color: c.textSecondary, margin: 0, lineHeight: "16px" }}>
              {AGENT.identity}
            </p>
          </div>

          {/* SKILLS */}
          <div style={{ padding: sectionPad, borderBottom: cellBorder, background: c.surfaceAlt }}>
            <div style={sectionLabel("Skills")}>Skills</div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "10px" }}>
              {AGENT.skills.map((skill) => (
                <div key={skill.name}>
                  <div style={{ fontFamily: c.sans, fontSize: "12px", fontWeight: 700 }}>{skill.name}</div>
                  <div style={{ fontFamily: c.sans, fontSize: "10.5px", color: c.textMuted, marginBottom: "4px" }}>
                    {skill.description}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "4px" }}>
                    {skill.prompts.map((p) => (
                      <span
                        key={p}
                        style={{
                          fontFamily: c.mono,
                          fontSize: "9px",
                          color: c.textMuted,
                          background: c.bg,
                          border: `1px solid ${c.borderLight}`,
                          padding: "1px 6px",
                          borderRadius: "2px",
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PERSONALITIES */}
          <div style={{ padding: sectionPad, background: c.bg }}>
            <div style={sectionLabel("Personalities")}>Personalities</div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px" }}>
              {AGENT.personalities.map((p) => (
                <div key={p.name}>
                  <div
                    style={{
                      fontFamily: c.mono,
                      fontSize: "11px",
                      fontWeight: 700,
                      color: c.dark,
                      background: c.accentBg,
                      border: `1px solid ${c.accentBorder}`,
                      padding: "4px 12px",
                      borderRadius: "2px",
                      display: "inline-block",
                      marginBottom: "2px",
                    }}
                  >
                    {p.name}
                  </div>
                  <div style={{ fontFamily: c.sans, fontSize: "10px", color: c.textMuted, paddingLeft: "2px" }}>
                    {p.focus}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── MIDDLE COLUMN ─── */}
        <div style={{ borderRight: cellBorder }}>

          {/* INPUTS */}
          <div style={{ padding: sectionPad, borderBottom: cellBorder, background: c.bg }}>
            <div style={sectionLabel("Inputs")}>Inputs</div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "2px" }}>
              {AGENT.inputs.map((i) => (
                <span key={i} style={{ fontFamily: c.mono, fontSize: "10px", color: c.textSecondary, lineHeight: "17px" }}>
                  {i}
                </span>
              ))}
            </div>
          </div>

          {/* OUTPUTS */}
          <div style={{ padding: sectionPad, borderBottom: cellBorder, background: c.bg }}>
            <div style={sectionLabel("Outputs")}>Outputs</div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "2px" }}>
              {AGENT.outputs.map((o) => (
                <span key={o} style={{ fontFamily: c.mono, fontSize: "10px", color: c.textSecondary, lineHeight: "17px" }}>
                  {o}
                </span>
              ))}
            </div>
          </div>

          {/* FLOW */}
          <div style={{ padding: sectionPad, borderBottom: cellBorder, background: c.surfaceAlt }}>
            <div style={sectionLabel("Flow")}>Flow</div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 24px auto 24px auto", alignItems: "center", gap: "0" }}>
              {/* Input block */}
              <div style={{ border: cellBorder, borderRadius: "2px", padding: "6px 8px", background: c.bg }}>
                <div style={{ fontFamily: c.mono, fontSize: "8px", fontWeight: 700, color: c.textMuted, marginBottom: "4px", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Input</div>
                {AGENT.flow.input.map((i) => (
                  <div key={i} style={{ fontFamily: c.mono, fontSize: "9px", color: c.textSecondary, lineHeight: "14px" }}>{i}</div>
                ))}
              </div>
              {/* Arrow */}
              <div style={{ textAlign: "center" as const, fontFamily: c.mono, fontSize: "14px", color: c.textMuted }}>→</div>
              {/* Process block */}
              <div style={{ border: cellBorder, borderRadius: "2px", padding: "6px 8px", background: c.bg }}>
                <div style={{ fontFamily: c.mono, fontSize: "8px", fontWeight: 700, color: c.textMuted, marginBottom: "4px", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Process</div>
                {AGENT.flow.process.map((step) => (
                  <div key={step} style={{ fontFamily: c.mono, fontSize: "9px", color: c.accent, lineHeight: "14px" }}>{step}</div>
                ))}
              </div>
              {/* Arrow */}
              <div style={{ textAlign: "center" as const, fontFamily: c.mono, fontSize: "14px", color: c.textMuted }}>→</div>
              {/* Output block */}
              <div style={{ border: cellBorder, borderRadius: "2px", padding: "6px 8px", background: c.bg }}>
                <div style={{ fontFamily: c.mono, fontSize: "8px", fontWeight: 700, color: c.textMuted, marginBottom: "4px", letterSpacing: "0.08em", textTransform: "uppercase" as const }}>Output</div>
                {AGENT.flow.output.map((o) => (
                  <div key={o} style={{ fontFamily: c.mono, fontSize: "9px", color: c.textSecondary, lineHeight: "14px" }}>{o}</div>
                ))}
              </div>
            </div>
          </div>

          {/* FRAMEWORKS */}
          <div style={{ padding: sectionPad, borderBottom: cellBorder, background: c.bg }}>
            <div style={sectionLabel("Frameworks")}>Frameworks</div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "4px" }}>
              {AGENT.frameworks.map((f) => (
                <div key={f.name}>
                  <span style={{ fontFamily: c.sans, fontSize: "11px", fontWeight: 700 }}>{f.name}</span>
                  <span style={{ fontFamily: c.sans, fontSize: "10px", color: c.textMuted, marginLeft: "6px" }}>({f.author})</span>
                </div>
              ))}
            </div>
          </div>

          {/* CONNECTIONS */}
          <div style={{ padding: sectionPad, background: c.bg }}>
            <div style={sectionLabel("Connections")}>Connections</div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "6px" }}>
              {AGENT.connections.map((conn, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span
                    style={{
                      fontFamily: c.mono,
                      fontSize: "10px",
                      fontWeight: 600,
                      padding: "3px 8px",
                      border: conn.from === "Culture Agent" ? `2px solid ${c.accent}` : cellBorder,
                      borderRadius: "2px",
                      background: conn.from === "Culture Agent" ? c.accentBg : c.bg,
                      whiteSpace: "nowrap" as const,
                    }}
                  >
                    {conn.from}
                  </span>
                  <span style={{ fontFamily: c.mono, fontSize: "12px", color: c.textMuted }}>{conn.arrow}</span>
                  <span
                    style={{
                      fontFamily: c.mono,
                      fontSize: "10px",
                      fontWeight: 600,
                      padding: "3px 8px",
                      border: conn.to === "Culture Agent" ? `2px solid ${c.accent}` : cellBorder,
                      borderRadius: "2px",
                      background: conn.to === "Culture Agent" ? c.accentBg : c.bg,
                      whiteSpace: "nowrap" as const,
                    }}
                  >
                    {conn.to}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── RIGHT COLUMN ─── */}
        <div>

          {/* MUTUAL LEARNING */}
          <div style={{ padding: sectionPad, borderBottom: cellBorder, background: c.bg }}>
            <div style={{ ...sectionLabel("Mutual Learning"), marginBottom: "10px" }}>
              {AGENT.mutualLearning.title}
            </div>
            <div style={{ display: "flex", flexDirection: "column" as const, gap: "8px", marginBottom: "12px" }}>
              {AGENT.mutualLearning.dimensions.map((d) => (
                <div key={d.pair}>
                  <span style={{ fontFamily: c.sans, fontSize: "11px", fontWeight: 700 }}>{d.pair}</span>
                  <span style={{ fontFamily: c.sans, fontSize: "10px", color: c.textMuted, marginLeft: "8px" }}>
                    {d.left} ↔ {d.right}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px", marginBottom: "8px" }}>
              {AGENT.mutualLearning.outputs.map((o) => (
                <span
                  key={o}
                  style={{
                    fontFamily: c.mono,
                    fontSize: "9px",
                    fontWeight: 600,
                    color: c.accent,
                    background: c.accentBg,
                    border: `1px solid ${c.accentBorder}`,
                    padding: "4px 8px",
                    borderRadius: "2px",
                    textAlign: "center" as const,
                    textTransform: "uppercase" as const,
                    letterSpacing: "0.04em",
                  }}
                >
                  {o}
                </span>
              ))}
            </div>
            <div style={{ fontFamily: c.mono, fontSize: "9px", color: c.textMuted }}>
              {AGENT.mutualLearning.flags}
            </div>
          </div>

          {/* GUARDRAILS */}
          <div style={{ padding: sectionPad, borderBottom: cellBorder, background: c.bg }}>
            <div style={sectionLabel("Guardrails")}>Guardrails</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
              {AGENT.guardrails.map((g) => (
                <div
                  key={g}
                  style={{
                    fontFamily: c.mono,
                    fontSize: "10px",
                    color: c.textSecondary,
                    background: c.surface,
                    border: `1px solid ${c.borderLight}`,
                    borderRadius: "2px",
                    padding: "4px 8px",
                  }}
                >
                  ⚠ {g}
                </div>
              ))}
            </div>
          </div>

          {/* WHEN TO USE */}
          <div style={{ padding: sectionPad, borderBottom: cellBorder, background: c.bg }}>
            <div style={sectionLabel("When to Use")}>When to Use</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
              {AGENT.scenarios.map((s) => (
                <div
                  key={s}
                  style={{
                    fontFamily: c.mono,
                    fontSize: "10px",
                    color: c.textSecondary,
                    background: c.surface,
                    border: `1px solid ${c.borderLight}`,
                    borderRadius: "2px",
                    padding: "4px 8px",
                  }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* CASE STUDY */}
          <div style={{ padding: sectionPad, background: c.dark }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
              <div style={{ fontFamily: c.mono, fontSize: "9px", color: c.textMuted, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                Case Study
              </div>
              <div style={{ fontFamily: c.mono, fontSize: "11px", fontWeight: 700, color: c.accent }}>
                {AGENT.caseStudy.title}
              </div>
            </div>
            <p style={{ fontFamily: c.sans, fontSize: "10.5px", color: c.darkMuted, margin: "0 0 6px", lineHeight: "16px" }}>
              {AGENT.caseStudy.summary}
            </p>
            <div style={{ fontFamily: c.mono, fontSize: "9px", color: c.darkMuted }}>
              → {AGENT.caseStudy.link}
            </div>
          </div>
        </div>
      </div>

      {/* ═══ FOOTER ═══ */}
      <div
        style={{
          background: c.dark,
          padding: "8px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontFamily: c.mono, fontSize: "9px", color: c.accent }}>
          Source of truth: culture-agent.md
        </span>
        <span style={{ fontFamily: c.mono, fontSize: "9px", color: c.darkMuted }}>
          v{AGENT.version}
        </span>
      </div>
    </div>
  );
}
