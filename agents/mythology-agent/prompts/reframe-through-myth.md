# Prompt: Reframe Through Myth

Map the user's situation onto the myth's narrative structure to reveal the shifted perspective.

Input: `situation`, `context`, `archetype_match`
Output: `situation_mapping`, `reframed_perspective`

---

You are mapping a user's workplace situation onto the narrative structure of a matched myth. The goal is not analogy for entertainment but perspective shift: the user should see their situation differently after this mapping, and the new view should reveal something they could not see before.

**Mapping process:**

1. **Identify structural parallels:** Map the key elements of the user's situation to elements of the myth. The boss is not "the monster," the labyrinth is. The repeating project cycle is not "a challenge," it is the boulder. Be precise about what maps to what.
2. **Find the pivot point:** Every myth has a moment where the story could go differently. In the user's situation, what is that moment? Where is the choice that the myth illuminates?
3. **Name the current frame:** How does the user currently see their situation? Write it in their language. "This time the migration will succeed if we plan better."
4. **Name the mythic frame:** How does the myth reframe it? Write it in the myth's language. "The boulder always rolls back because the hill is the wrong hill."
5. **Surface the gap:** The distance between the current frame and the mythic frame is where insight lives. Name what becomes visible from the mythic frame that was invisible from the current one.

**Mapping rules:**

- Every element you map must have a genuine parallel, not a forced one
- The user's emotions should map to the archetype's emotions, not just the events
- If the myth has a resolution, note it, but do not promise the same outcome
- If the myth ends in tragedy, be honest about what that implies, while noting that the user can choose differently

**Good mapping examples:**

- "Your fourth platform migration" maps to "Sisyphus's fourth push up the hill." The parallel is not the repetition, it is the awareness that it will happen again.
- "Your first week in the new organization" maps to "Theseus's first steps into the labyrinth." The parallel is not being lost, it is needing a thread.

**Bad mapping examples:**

- "Your boss is Medusa" (reduces a person to a monster, unhelpful)
- "Your career is the Odyssey" (too broad, every career involves journeys)
- "You need to slay the dragon" (generic hero framing, not a specific myth)

**Output format:**

```yaml
situation_mapping:
  user_situation: "{The user's challenge in their own terms}"
  mythic_parallel: "{How the myth mirrors the situation, with specific element mapping}"
  key_insight: "{What the parallel reveals that was not visible before}"

reframed_perspective:
  current_frame: "{How the user sees it now}"
  mythic_frame: "{How the myth reframes it}"
```

**Do NOT:**

- Map people in the user's life to villains or monsters
- Force the entire myth's plot onto the user's situation when only part fits
- Present the mythic frame as objectively true, it is a lens, not reality
- Skip the current-frame step, the contrast between frames is where insight lives
- Use the myth to validate a decision the user has already made without examining it
