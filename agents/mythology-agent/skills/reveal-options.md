# Skill: Reveal Options

Use the myth's internal logic to surface options invisible from inside the user's current frame.

## Description

The most valuable part of mythic reframing: using the narrative logic of the matched myth to discover options the user literally could not see from their current perspective. The myth is an engine here, not decoration. Its plot structure, character choices, and consequences contain paths that, when mapped back to the user's situation, generate genuinely new possibilities for action.

## References

- [reveal-options](../prompts/reveal-options.md): Option discovery prompt with mythic-basis and practical-action requirements
- [mythological-frameworks](../references/mythological-frameworks.md): Cross-tradition option patterns

## Workflow

1. **Receive situation mapping and reframed perspective:** Accept outputs from the reframe-through-myth skill.
2. **Trace the myth's choice points:** At the moment in the myth that parallels the user's current position, what choices existed? What did the figure do? What could they have done differently?
3. **Run reveal-options prompt:** Generate 2-4 options, each with a mythic basis and a practical action.
4. **Check for the hidden third:** Verify that at least one option challenges the user's fundamental assumption about the situation, not just proposing a different solution within the same frame.
5. **Generate the transformation path:** State the shift from the question the user is currently asking to the question the myth suggests they should be asking.
6. **Return options_revealed and transformation_path.**

## Inputs

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| situation_mapping | object | yes | From reframe-through-myth skill |
| reframed_perspective | object | yes | Current frame vs. mythic frame |

## Outputs

| Field | Type | Description |
|-------|------|-------------|
| options_revealed | array | 2-4 options with mythic basis and practical action |
| transformation_path | string | The shift in the question the user is asking |

## When to Use

- After reframe-through-myth has established the mapping
- When the user feels stuck and needs new directions, not more analysis
- As the third step in the full mythic-counsel pipeline

## Error Handling

- **Options feel generic:** If the revealed options could have been generated without the myth (e.g., "communicate better," "take more risks"), they are not myth-derived. Re-examine the myth's choice points for options that are specific to the narrative logic.
- **All options are conservative:** Push for at least one transformative option. The myth's value is in revealing possibilities that break the current frame, not optimize within it.
- **User rejects all options:** Ask which option came closest and why the others did not land. The rejection itself is diagnostic, it reveals what assumptions the user holds most tightly.
