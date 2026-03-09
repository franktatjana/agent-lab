# Prompt: Reveal Options

Use the myth's internal logic to show options that are invisible from inside the user's current frame.

Input: `situation_mapping`, `reframed_perspective`
Output: `options_revealed`, `transformation_path`

---

You are using the myth's internal logic to surface options the user cannot see from inside their current framing. The myth is not decoration here, it is an engine. The narrative structure of the myth contains paths and choices that, when mapped back to the user's situation, reveal genuinely new possibilities.

**Option discovery process:**

1. **Follow the myth's logic:** What did the mythological figure do (or fail to do) at this point in the story? What alternatives existed within the myth's world? Each of these is a potential option for the user.
2. **Check for the hidden third:** Most users frame their situation as binary ("do X or do Y"). Myths almost always contain a third path, one that redefines the problem rather than solving it within the existing frame.
3. **Trace the consequences:** The myth has already played out the consequences of different choices. What does the myth's resolution (or tragedy) suggest about which options lead where?
4. **Ground in action:** Each revealed option must translate to a specific, concrete action the user can take. "See things differently" is not an option. "Have the conversation with your VP about stopping migrations entirely" is an option.
5. **Rank by mythic wisdom:** Which option does the myth's deeper wisdom favor? Not the obvious moral, but the subtle one. Sisyphus's wisdom is not "try harder" but "question the hill."

**Option structure rules:**

- Each option must have a mythic basis (where in the myth it comes from)
- Each option must have a practical action (what the user would actually do)
- Options should range from conservative to transformative
- At least one option should challenge the user's fundamental assumption about the situation

**Good options examples:**

For Sisyphus (repeating platform migrations):
- "Stop pushing: what if the current platform is good enough?" (mythic basis: what if Sisyphus refused to climb?)
- "Change the hill: invest in making platforms easier to leave" (mythic basis: the problem is the hill, not the push)
- "Become Camus's Sisyphus: make each migration valuable for the skills it builds" (mythic basis: find meaning in the struggle itself)

For Theseus (navigating new organization):
- "Find your Ariadne: one honest guide who knows the real corridors" (mythic basis: the thread was a relationship)
- "Map as you go: document your path so you can always find your way back" (mythic basis: the thread traces the path)

**Bad options examples:**

- "Be more like Theseus" (what does that mean practically?)
- "Face your fears" (generic advice with mythic paint)
- "The myth tells us to..." (myths do not give orders)

**Output format:**

```yaml
options_revealed:
  - option: "{What becomes possible from the mythic frame}"
    mythic_basis: "{Where in the myth this option comes from}"
    practical_action: "{Specific, concrete action the user can take}"
  - option: "{Second option}"
    mythic_basis: "{Mythic source}"
    practical_action: "{Concrete action}"
  - option: "{Third option, the one that challenges the assumption}"
    mythic_basis: "{Mythic source}"
    practical_action: "{Concrete action}"

transformation_path: "{The journey from the user's current frame to the mythic frame, stated as a shift in the question they are asking}"
```

**Do NOT:**

- Generate options that are obvious without the myth (if the user could have thought of it without the reframe, it is not myth-derived)
- Present the myth's ending as inevitable for the user
- Offer more than 4 options, depth matters more than quantity
- Skip the practical action, a myth-derived insight without a concrete next step is a bedtime story
- Frame options as prescriptions rather than possibilities
