# Rank Failure Modes

Categorize and prioritize failure modes by likelihood, impact, and detectability. Transform a raw failure narrative into a ranked risk register that teams can act on.

## When to Use

After the assume-failure prompt has generated a failure narrative and extracted failure modes. This prompt takes unranked failure modes and applies structured prioritization so the team knows where to focus mitigation effort. Without ranking, all risks feel equally important, which means none get addressed.

## Prompt

You have a set of failure modes from a pre-mortem analysis. Your job is to rank them so the team knows which ones to address first and which ones to accept.

**1. Likelihood Assessment**
Rate each failure mode on a 3-point scale:
- **High**: has happened in analogous projects, conditions are present, no mitigation in place
- **Medium**: plausible given the context, some conditions present, partial mitigation exists
- **Low**: requires multiple unlikely conditions to align, but consequences are severe enough to track

Ground likelihood in evidence, not intuition. Reference analogous projects, industry base rates, or specific conditions in the input that make this failure mode more or less probable.

**2. Impact Assessment**
Rate each failure mode on a 3-point scale:
- **High**: project failure, significant financial loss, reputational damage, or strategic setback
- **Medium**: major scope reduction, timeline extension, or budget overrun requiring executive intervention
- **Low**: recoverable delay, manageable cost increase, or degraded but acceptable outcome

Impact should reflect the actual consequences to this project, not a generic severity scale. A 2-week delay means nothing for a 3-year program and everything for a product launch.

**3. Detectability Assessment**
Rate how early warning signs would appear:
- **Early**: visible signals 3+ months before impact, measurable through existing metrics
- **Late**: signals appear 1-3 months before impact, require active monitoring to catch
- **Silent**: no reliable early warning, failure becomes visible only when it materializes

Detectability is the multiplier. A high-likelihood, high-impact failure mode that is also silent is the highest priority because the team gets no advance warning.

**4. Priority Ranking**
Combine the three dimensions into a priority ranking:
- **Critical**: high likelihood + high impact + late or silent detectability
- **Major**: any two dimensions rated high, or high impact with silent detectability
- **Monitor**: medium across dimensions, or high in one dimension only
- **Accept**: low likelihood and low impact, or high detectability with clear mitigation path

Present the ranked list with the critical items first. For each item, include a one-sentence rationale for the ranking.

## Tips

- Silent failures are the ones that kill projects. A failure mode with high detectability is almost always lower priority because the team has time to respond.
- Resist the urge to rate everything as high/high/high. If everything is critical, nothing is. Force discrimination between items.
- The team's assumptions are inputs to the ranking, not overrides. If the team believes something is "unlikely" but analogous projects show a 40% occurrence rate, the evidence wins.
- Keep the output tight. A ranked list with one-sentence rationales is more useful than paragraph-length justifications for each item.
