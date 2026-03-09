# Skill: Mythic Counsel

Full pipeline: match archetype, reframe through myth, reveal options, and synthesize into cohesive mythological counsel.

## Description

The complete mythic reframing experience. Takes a workplace challenge from raw situation through archetype matching, narrative mapping, option discovery, and narrative synthesis. Produces a cohesive piece of counsel that the user can carry with them: a myth that mirrors their situation, a perspective shift that reveals new options, and a concrete path forward.

## References

- [match-archetype](../prompts/match-archetype.md): Archetype identification prompt
- [reframe-through-myth](../prompts/reframe-through-myth.md): Situation mapping prompt
- [reveal-options](../prompts/reveal-options.md): Option discovery prompt
- [craft-mythic-counsel](../prompts/craft-mythic-counsel.md): Narrative synthesis prompt

## Workflow

1. **Match archetype:** Run the match-archetype prompt to find the best mythological parallel for the user's situation. If the user specified a tradition, constrain the search. If "any," search across all traditions.
2. **Reframe through myth:** Map the user's specific circumstances onto the matched myth's narrative structure. Identify the current frame, the mythic frame, and the key insight in the gap between them.
3. **Reveal options:** Use the myth's internal logic to surface 2-4 options invisible from the user's current perspective. Ensure at least one challenges the user's fundamental assumption.
4. **Craft mythic counsel:** Synthesize everything into a cohesive narrative using the craft-mythic-counsel prompt. Match the personality variant (oracle for precision, sage for depth, bard for story). Produce both the narrative and the counsel summary.

## Inputs

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| situation | string | yes | The workplace challenge |
| context | string | yes | Background, stakes, constraints |
| tradition | string | no | Preferred tradition (default: any) |
| personality | string | no | oracle, sage, or bard (default: oracle) |

## Outputs

| Field | Type | Description |
|-------|------|-------------|
| archetype_match | object | Matched archetype with tradition and confidence |
| situation_mapping | object | Parallel between situation and myth |
| reframed_perspective | object | Current frame, mythic frame, options revealed |
| narrative | string | Cohesive mythic counsel narrative |

## When to Use

- When the user wants the full reframing experience, not just a quick archetype match
- For complex situations that benefit from the complete pipeline
- When another agent hands off a situation marked as "needs perspective shift"
- For presentations or team sessions where the full narrative has impact

## Error Handling

- **Weak archetype match (confidence < 0.6):** Present the match honestly, offer alternatives, and ask the user to share more about what the situation feels like. Do not proceed with a forced match.
- **Mapping breaks down mid-pipeline:** If the reframe-through-myth step reveals the archetype match was wrong, loop back to match-archetype with the new understanding. This is not a failure; the mapping attempt itself produces better matching criteria.
- **User wants to change tradition mid-session:** Restart from match-archetype with the new tradition constraint. The situation mapping and options will differ with a different myth, so the pipeline must run fresh.
- **Narrative does not land:** If the user says the counsel feels abstract or disconnected, ask which part felt closest to their experience. Use that as the anchor and re-synthesize with the personality variant that best matches their engagement style.
