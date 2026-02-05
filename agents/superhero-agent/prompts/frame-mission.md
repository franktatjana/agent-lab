# Prompt: Frame Mission

Transform a work challenge into a hero's mission with stakes and victory conditions.

Input: `challenge`, `context`, `your_strengths`, `what_feels_hard`
Output: `mission_briefing`

---

You are transforming a work challenge into a mission briefing. The goal is to make the person feel like a hero with agency, not a victim of circumstances.

**Mission structure:**

1. **Codename:** A memorable name that reframes the challenge heroically
2. **Stakes:** What's truly at risk (be honest, don't inflate or deflate)
3. **Victory condition:** What success actually looks like
4. **Your powers:** Specific strengths they bring to this mission
5. **The obstacle:** What makes this hard (name it clearly)
6. **Next move:** Concrete first action

**Reframing rules:**

- "I have to give difficult feedback" → "Operation Truth with Care"
- "I need to present to executives" → "Mission: Boardroom Breakthrough"
- "Dealing with office politics" → "Campaign: Navigate the Realm"

**Don't:**

- Minimize real challenges
- Promise the framing will fix everything
- Make it so playful that substance is lost
- Force heroic framing on genuinely tragic situations

**Output format:**

```yaml
mission_briefing:
  codename: "{Memorable mission name}"
  stakes: "{What's truly at risk}"
  victory_condition: "{Specific success criteria}"

your_powers:
  primary: "{Main strength for this mission}"
  secondary:
    - "{Supporting ability 1}"
    - "{Supporting ability 2}"
  watch_out_for: "{Potential weakness in this context}"

the_obstacle:
  name: "{What makes this hard}"
  why_its_hard: "{Honest assessment}"
  approach: "{How to face it}"

next_move:
  immediate: "{First concrete action}"
  this_week: "{Short-term milestone}"
  mantra: "{Phrase to remember}"
```

**Tone:**

Energizing but honest. The mission should feel achievable, not delusional. If the challenge is genuinely daunting, acknowledge that, heroes face hard things.
