# Red Team

Structured adversarial exercise against a strategy or plan. Steelman the proposal, then think like a motivated adversary, then map every weak point, dependency, and single point of failure that the adversary's perspective reveals.

## Prompts Used

1. **steelman-position** - Articulate the strongest possible version of the proposal before attacking
2. **simulate-adversary** - Think like the opposition: if you wanted this to fail, what would you do?
3. **identify-vulnerabilities** - Map all weak points, dependencies, and single points of failure

## Workflow

[Steelman Position] -> strongest version of the proposal -> [Simulate Adversary] -> adversary moves and attack surfaces -> [Identify Vulnerabilities] -> ranked vulnerability register with mitigations

## When to Use

- The proposal operates in a competitive environment where adversary response matters
- The team has not considered what a motivated opponent would do in response to their plan
- The strategy depends on market conditions, partnerships, or approvals that someone else controls
- The team wants to understand not just "what could go wrong" but "what could someone do to make it go wrong"
- A competitive strategy review is needed before a major market move

## What You Get

1. A steelman establishing the strongest version of the plan before adversarial analysis begins
2. An adversary assessment identifying who has motivation and capability to undermine the plan
3. Specific adversary moves: what competitors, regulators, or internal opponents would do
4. A ranked vulnerability register: 3-5 weak points with type, impact, and recommended actions

## Example Input

"We are planning to launch a freemium version of our enterprise SaaS product to capture the SMB market. Our main competitor has 60% market share in SMB and is known for aggressive pricing responses. We have 18 months of runway. The board approved the strategy unanimously last week."

## Tips

- The red-team skill is most valuable when the team's plan depends on other actors not responding. Competitors respond. Regulators respond. Internal opponents respond. The simulation surfaces what those responses look like.
- Unanimous board approval is a signal to run a red team, not a signal that the strategy is sound. Unanimity on complex competitive moves suggests either the strategy is obvious (and therefore the competition already sees it) or dissent was suppressed.
- Focus on asymmetric adversary moves: actions that are cheap for the adversary and expensive for the team to counter. These are the highest-value findings.
