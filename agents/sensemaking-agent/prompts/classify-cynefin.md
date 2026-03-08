# Classify Cynefin

Classify the situation using Snowden's Cynefin framework to determine whether the domain is clear, complicated, complex, chaotic, or in disorder. The classification determines the response approach: the wrong approach in the wrong domain produces worse outcomes than no approach at all.

## When to Use

After signals have been gathered and organized, or when a situation needs domain classification before the team selects an action strategy. This prompt is used in both the classify-domain and design-probe skills. Getting the domain right is critical because each domain requires a fundamentally different response. Applying expert analysis (complicated-domain tool) to a complex situation produces confident wrong answers. Running experiments (complex-domain tool) in a clear situation wastes resources. The classification must come before the approach.

## Prompt

You are classifying a situation using the Cynefin framework. Your job is to determine which domain the situation belongs to and what that means for how the team should respond. The classification must be evidence-based, not intuitive.

**1. Domain Definitions**
Apply these definitions to the situation:

**Clear** (formerly "Simple" or "Obvious"):
- Cause and effect are obvious to everyone
- Best practice exists and is well-established
- The right answer is knowable in advance
- Response: Sense-Categorize-Respond
- Danger: complacency, treating clear situations as simpler than they are

**Complicated**:
- Cause and effect are discoverable through analysis or expertise
- Good practice exists but requires expert judgment to apply
- Multiple right answers may exist
- Response: Sense-Analyze-Respond
- Danger: analysis paralysis, over-reliance on experts who disagree

**Complex**:
- Cause and effect are only coherent in retrospect, not predictable in advance
- No amount of analysis will produce the right answer before acting
- The system is adaptive: it responds to your interventions
- Response: Probe-Sense-Respond
- Danger: demanding certainty before acting, applying complicated-domain tools

**Chaotic**:
- No perceivable cause and effect relationships
- The situation is turbulent and requires immediate action to establish order
- Any practice that creates stability is appropriate
- Response: Act-Sense-Respond
- Danger: paralysis by analysis when immediate action is needed

**Disorder**:
- You do not know which domain you are in
- Different parts of the situation may belong to different domains
- The most dangerous state because people default to their comfort zone
- Response: break the situation into constituent parts and classify each part separately

**2. Classification Evidence**
For the situation, evaluate:
- **Predictability**: can you predict the outcome of interventions? (clear/complicated) Or will outcomes emerge unpredictably? (complex/chaotic)
- **Expert agreement**: do experts agree on the diagnosis and treatment? (clear/complicated) Or do experts disagree fundamentally? (complex)
- **Repeatability**: has this situation been resolved successfully before using known methods? (clear/complicated) Or is this genuinely novel? (complex/chaotic)
- **System behavior**: is the system stable and responsive to linear intervention? (clear/complicated) Or is it adaptive, responding to your intervention in ways that change the dynamics? (complex)
- **Time pressure**: is the situation deteriorating faster than analysis can proceed? (possibly chaotic)

For each dimension, cite specific signals from the input that support the classification.

**3. Boundary Conditions**
Check for domain boundary conditions:
- **Complicated-Complex boundary**: the most common misclassification. Key question: would more analysis produce a better answer, or would analysis produce a more confident wrong answer? If experts disagree not on details but on fundamentals, you are in complex, not complicated
- **Clear-Complicated boundary**: is this truly best practice, or does it require judgment? If it requires judgment, it is complicated, not clear
- **Complex-Chaotic boundary**: is there time to probe, or must you act immediately to stabilize? If the building is on fire, act first. If the organization is dysfunctional but stable, probe first
- **Mixed domains**: many real situations span domains. The market response may be complex while the technical implementation is complicated. Classify each component separately

**4. Classification Output**
Deliver:
- **Domain**: one of clear, complicated, complex, chaotic, or disorder (with component breakdown if mixed)
- **Evidence**: 3-5 specific signals that support this classification
- **Response approach**: the appropriate response pattern for this domain
- **Misclassification risk**: what would happen if the team treats this as a different domain?
- **Recommended action**: 1-2 sentences on what to do next, matched to the domain

## Tips

- The complicated-complex boundary is where most teams get it wrong. Engineers and analysts default to complicated because their training is in analysis. Complicated feels productive: you gather data, build models, find the answer. Complex requires a different discipline: run small experiments, observe what emerges, adapt. The skills feel opposite.
- Disorder is more common than people admit. When the team cannot agree on what kind of problem they are facing, they are in disorder. The first move is to decompose the situation and classify the parts.
- Domain classification is not permanent. Situations move between domains. A crisis (chaotic) stabilizes (complex), gets understood (complicated), and eventually becomes routine (clear). The classification is a snapshot.
- The misclassification risk is the most actionable output. Telling a team "you are in complex" is useful. Telling them "if you treat this as complicated and commission a 6-month analysis, the situation will have changed by the time you finish and the analysis will be obsolete" changes behavior.
