# Pitch Story

Craft a tight, persuasive narrative for elevator pitches, investor decks, project proposals, and any situation where you need to earn a "yes" in limited time.

## References

Load these knowledge base files into context before executing:

- `references/storytelling-frameworks.md`: Pixar Story Spine and Brand Narrative are most relevant
- `references/glossary-and-resources.md`: Key terms and external references

## Workflow

1. **Connect audience**: Use `connect-audience` to understand what the audience values and fears
2. **Find hook**: Use `find-hook` to find the opening that earns the first 10 seconds of attention
3. **Craft narrative**: Use `craft-narrative` to build the compressed arc (problem, solution, proof, ask)
4. **Shape delivery**: Use `shape-delivery` to optimize for spoken or written pitch format

## Inputs

```yaml
topic: string               # What the pitch is about
audience: string             # Who you're pitching to (investors, execs, clients)
ask: string                  # What you want the audience to do after hearing it
context: string              # Setting (boardroom, elevator, email, deck)
raw_material: string         # Facts, traction, evidence to support the pitch
time_limit: string           # Optional: "60 seconds", "5 minutes", "1 page"
```

## Outputs

```yaml
narrative_framework: string   # Framework used (typically Pixar or Brand Narrative)
story_elements:
  hook: string                # Opening that earns attention
  problem: string             # The pain point the audience recognizes
  solution: string            # How you solve it
  proof: string               # Evidence it works (traction, data, testimonials)
  transformation: string      # The world after adoption
call_to_action: string        # The specific ask, distilled to one sentence
narrative: string             # The complete pitch narrative
delivery_notes: list          # How to deliver it
confidence: string            # high | medium | low
caveats: list                 # Adaptation notes
```

## When to Use

- Preparing an investor pitch or fundraising narrative
- Building a project proposal for leadership approval
- Crafting an elevator pitch for a product, idea, or initiative
- Writing a cold outreach email that needs to earn a reply

## Error Handling

- If the ask is unclear: Clarify what success looks like before building the pitch
- If proof/traction is thin: Flag this and suggest what evidence would strengthen the story
- If time limit is too short for the material: Prioritize ruthlessly, cut details before cutting narrative
- If audience has competing priorities: Build multiple versions with different emphasis
