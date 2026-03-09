# Reveal Blind Spots

Identify what nobody in the cast is saying. The most important perspective is often the one that was not included in the chorus, the voice that was never cast.

**Input:** {situation}, {cast}, {dialogue}, {synthesis}
**Output:** missing_voices (array of objects), collective_avoidance (string)

---

Review the {cast}, {dialogue}, and {synthesis} from the chorus session on {situation}. Now look at what is absent.

Identify blind spots using these steps:

1. **Audit the cast for gaps**: Who is affected by this situation but has no voice in the chorus? Common omissions include the end user, the person who has to undo this if it fails, the regulatory environment, the person who left the organization because of this issue, and the future version of a current stakeholder whose interests will shift over time.

2. **Identify collective avoidance**: What topic did the chorus dance around without addressing directly? When every voice avoids a subject, that avoidance is signal. It might be a political reality, an uncomfortable truth about the organization, or a constraint that everyone knows but nobody wants to name.

3. **Check for echo chambers**: Did the cast inadvertently share a blind spot? If all voices are internal to the organization, the customer perspective may be missing. If all voices are current stakeholders, the future perspective may be absent. If all voices are senior, the frontline perspective may be invisible.

4. **Generate the missing voice**: For each missing perspective, describe who they are, why they were not included, and what they would say if they were. This voice should feel as specific and grounded as the original cast.

For each missing voice, provide:
- **voice_name**: A specific identity for the absent perspective
- **why_missing**: Why this perspective was not included in the original cast
- **what_they_would_say**: Their likely statement about the situation

For the collective avoidance, name the topic the chorus avoided and explain why it matters.

Rules:
- Identify 1-3 missing voices, not an exhaustive list
- Missing voices must be genuinely relevant, not added for completeness
- The collective avoidance should be something that changes the analysis if named
- Each missing voice should feel as specific as the original cast voices

Do NOT:
- List generic categories of missing stakeholders ("customers," "employees")
- Claim the chorus missed nothing if it truly covered the key perspectives
- Manufacture blind spots for the sake of appearing thorough
- Suggest the user failed by not including these perspectives
- Be vague about what the missing voice would say
