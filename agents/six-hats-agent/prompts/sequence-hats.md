# Sequence Hats

Determine the optimal hat order for a given situation. Different problems benefit from different sequences.

**Input:** {topic}, {context}, {goal}
**Output:** Recommended hat sequence with rationale

---

Determine the optimal Six Thinking Hats sequence for analyzing {topic} in the context of {context} with the goal of {goal}.

Common sequences:

**Exploration (default):** Blue > White > Green > Yellow > Black > Red > Blue
Use when: Starting fresh, no strong position yet

**Decision:** Blue > White > Yellow > Black > Red > Blue
Use when: Evaluating a specific option or choice

**Improvement:** Blue > White > Black > Green > Yellow > Blue
Use when: Something exists and needs to be made better

**Crisis:** Blue > Red > White > Black > Green > Yellow > Blue
Use when: Emotions are high, need to acknowledge feelings first

**Innovation:** Blue > White > Green > Red > Yellow > Black > Blue
Use when: Generating new ideas, creativity is the priority

Rules:
- Blue Hat always starts (sets the process) and ends (synthesizes)
- White Hat typically comes early (establish facts before opinions)
- Red Hat placement depends on emotional intensity of the topic
- Green Hat before Black Hat when creativity is the priority
- Black Hat before Green Hat when risk management is the priority

Output the recommended sequence with a one-sentence rationale for the ordering.
