# Skill: Match Archetype

Find the mythological archetype that best mirrors a workplace situation, drawing from world traditions.

## Description

Given a workplace challenge, this skill searches across mythological traditions (Greek, Norse, Slavic, Japanese, Hindu) to find the archetype whose narrative structure most genuinely mirrors the user's situation. The match is evaluated on emotional resonance, not surface similarity. A strong match produces instant recognition: the user sees themselves in the myth without needing extensive explanation.

## References

- [match-archetype](../prompts/match-archetype.md): Core matching prompt with tradition-specific guidance
- [mythological-frameworks](../references/mythological-frameworks.md): Archetype taxonomy and cross-cultural parallels

## Workflow

1. **Parse the situation:** Extract the core pattern from the user's challenge, stripping surface details to find the archetypal shape (repetition, threshold, impossible choice, transformation, etc.)
2. **Apply tradition filter:** If the user specified a tradition, search within it. If "any," search across all traditions for the best fit.
3. **Run match-archetype prompt:** Evaluate candidates on emotional resonance, structural parallel, and recognition potential.
4. **Score confidence:** Rate the match 0.0-1.0 based on how naturally the parallel maps.
5. **Generate alternatives:** Identify 1-2 alternative archetypes from different traditions.
6. **Return archetype_match and alternative_matches.**

## Inputs

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| situation | string | yes | The workplace challenge to match |
| context | string | yes | Stakes, constraints, relationships |
| tradition | string | no | Preferred tradition (default: any) |

## Outputs

| Field | Type | Description |
|-------|------|-------------|
| archetype_match | object | Primary archetype with tradition, summary, recognition moment, confidence |
| alternative_matches | array | 1-2 alternatives from different traditions |

## When to Use

- User describes a challenge and wants to understand the pattern beneath it
- First step in the full mythic-counsel pipeline
- When another agent hands off a situation that needs reframing
- When a user's pattern feels familiar but they cannot name it

## Error Handling

- **No strong match found:** Present the two closest matches with honest confidence scores (below 0.6) and ask the user for more context about what the situation feels like, not just what happened.
- **Tradition requested has no good match:** Explain that the requested tradition does not have a strong parallel, offer the best match from another tradition, and ask if the user wants to explore it.
- **Situation too vague:** Ask for specific details about what makes the situation feel stuck, repeated, or difficult. The emotional texture is more useful than the facts for matching.
