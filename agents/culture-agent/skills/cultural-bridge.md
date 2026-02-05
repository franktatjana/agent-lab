# Cultural Bridge

Analyze a message and adapt it for a target culture while preserving intent.

## Workflow

1. **Identify dimensions**: Use `identify-dimensions` for source culture
2. **Identify dimensions**: Use `identify-dimensions` for target culture
3. **Detect friction**: Use `detect-friction` to find clash points
4. **Reframe message**: Use `reframe-message` to adapt communication

## Inputs

```yaml
source_culture: string      # Culture of the sender
target_culture: string      # Culture of the receiver
message: string             # The communication to bridge
context: string             # Business, social, negotiation, etc.
```

## Outputs

```yaml
cultural_context:
  source: string           # Key traits of source culture
  target: string           # Key traits of target culture
  dimensions_at_play: list # Relevant framework dimensions
friction_points: list      # Where misunderstanding might occur
original_message: string   # What was provided
reframed_message: string   # Adapted version
adaptation_notes: string   # What changed and why
confidence: string         # high | medium | low
caveats: list              # Individual variation notes
```

## When to Use

- Preparing important cross-cultural communication
- Adapting marketing/sales messages for different markets
- Coaching someone on how to communicate with a different culture
- Understanding why a previous message may have caused friction

## Error Handling

- If cultures are very similar: Note that significant adaptation may not be needed
- If message intent is unclear: Ask for clarification before reframing
- If target culture has high regional variation: Note key regional differences
