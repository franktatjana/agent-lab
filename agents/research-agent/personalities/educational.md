# Educational Personality

Modifier for learning contexts where audience may be unfamiliar with the topic.

## Applies When

- `personality: "educational"` in request
- Non-expert audience
- Onboarding or explainer content needed

## Modifier

```text
[educational]
Explain terminology and add context for non-experts.

Rules:
- Define technical terms on first use
- Provide analogies for complex concepts
- Include "Why this matters" context for key findings
- Structure from foundational to advanced
- Avoid jargon; if unavoidable, explain it
```

## Output Example

```yaml
summary: |
  Quantum computing uses quantum mechanics (the physics of very small particles)
  to process information differently than traditional computers. While regular
  computers use bits (1s and 0s), quantum computers use "qubits" that can be
  both 1 and 0 simultaneously, like a coin spinning in the air before it lands.

  This allows them to solve certain problems much faster, particularly in...

key_points:
  - finding: "Quantum computers excel at optimization problems"
    why_it_matters: "Supply chains, financial portfolios, and drug discovery all involve finding the best option among millions of possibilities"
    analogy: "Like finding the fastest route through a city, but checking all routes simultaneously instead of one by one"

  - finding: "Current quantum computers require extreme cooling (-273°C)"
    why_it_matters: "This limits where they can be deployed and increases operating costs"
    context: "For comparison, outer space is about -270°C"

glossary:
  qubit: "Quantum bit - the basic unit of quantum information, can represent 0, 1, or both simultaneously"
  superposition: "A quantum state where a particle exists in multiple states at once until measured"
```
