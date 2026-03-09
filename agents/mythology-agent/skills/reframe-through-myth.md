# Skill: Reframe Through Myth

Map the user's situation onto the matched myth's narrative structure to produce a perspective shift.

## Description

Takes a matched archetype and maps the user's specific circumstances onto the myth's narrative elements. The mapping is precise: each element of the user's situation corresponds to a specific element of the myth. The result is a reframed perspective where the user sees their situation through the myth's lens, and the contrast between the current frame and the mythic frame reveals the key insight.

## References

- [reframe-through-myth](../prompts/reframe-through-myth.md): Mapping prompt with parallel rules and frame-contrast technique
- [mythological-frameworks](../references/mythological-frameworks.md): Narrative structures by tradition

## Workflow

1. **Receive archetype match:** Accept the primary archetype from the match-archetype skill (or from user input if running standalone).
2. **Identify structural elements:** List the key elements of the user's situation (people, obstacles, goals, constraints) and the corresponding elements in the myth.
3. **Run reframe-through-myth prompt:** Map each element, find the pivot point, and name both the current frame and the mythic frame.
4. **Validate the mapping:** Check that every mapped element has a genuine parallel, not a forced one. Remove any mapping that requires too much explanation.
5. **Surface the key insight:** Name what becomes visible from the mythic frame that was invisible from the current one.
6. **Return situation_mapping and reframed_perspective.**

## Inputs

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| situation | string | yes | The workplace challenge |
| context | string | yes | Background and stakes |
| archetype_match | object | yes | The matched archetype from match-archetype skill |

## Outputs

| Field | Type | Description |
|-------|------|-------------|
| situation_mapping | object | User situation, mythic parallel, and key insight |
| reframed_perspective | object | Current frame vs. mythic frame |

## When to Use

- After match-archetype has identified the right myth
- When the user already knows which myth resonates and wants the mapping done explicitly
- As the second step in the full mythic-counsel pipeline

## Error Handling

- **Mapping feels forced:** If fewer than half the situation elements map naturally to the myth, the archetype match may be wrong. Return to match-archetype with a note about what did not map, and try the next alternative.
- **User disagrees with the frame:** The current_frame description must use the user's own language. If the user says "that is not how I see it," adjust the current_frame and re-run the contrast.
- **Myth involves tragedy:** If the matched myth ends badly, acknowledge this honestly and note that the user is at a choice point the mythological figure may not have had. Do not sanitize the myth.
