# Origin Story

Craft a personal or company origin story that connects founding moments to present identity and future vision. Origin stories answer the question every audience asks: "Why do you exist, and why should I care?"

## References

Load these knowledge base files into context before executing:

- `references/storytelling-frameworks.md`: Hero's Journey and Brand Narrative are most relevant
- `references/glossary-and-resources.md`: Key terms and external references

## Workflow

1. **Find hook**: Use `find-hook` to find the defining moment, the scene or decision that started everything
2. **Craft narrative**: Use `craft-narrative` to build the origin arc from founding moment through mission to present
3. **Connect audience**: Use `connect-audience` to connect the origin to the audience's values and aspirations

## Inputs

```yaml
topic: string               # Whose origin story (person, company, product, team)
audience: string             # Who will hear it (customers, talent, investors, internal team)
origin_elements: string      # Key moments, founding details, turning points, motivations
context: string              # Where this story will be used (website, pitch, about page, talk)
values: string               # Optional: core values to thread through the narrative
```

## Outputs

```yaml
narrative_framework: string   # Framework used (typically Hero's Journey or Brand Narrative)
story_elements:
  defining_moment: string     # The scene that started everything
  struggle: string            # What was hard, what was at stake
  insight: string             # The realization that changed the path
  mission: string             # What the protagonist set out to do
  present: string             # Where things stand today
brand_throughline: string     # The thread connecting origin to present identity
narrative: string             # The complete origin story
delivery_notes: list          # How to tell it effectively
confidence: string            # high | medium | low
caveats: list                 # Adaptation notes for different audiences
```

## When to Use

- Writing an "About" page for a company or personal website
- Preparing a founder's pitch for investors or partners
- Onboarding new team members with the company story
- Building personal brand narrative for career transitions or public speaking

## Error Handling

- If origin elements are vague: Ask for specific scenes, dates, and decisions
- If the story lacks a clear struggle: Probe for what was difficult or uncertain
- If the origin doesn't connect to the present: Build the bridge explicitly
- If multiple founding moments compete: Help the user choose based on audience relevance

## Human Review

Origin stories shape identity. They should be reviewed by the subject before external use, especially for personal narratives where vulnerability is involved.
