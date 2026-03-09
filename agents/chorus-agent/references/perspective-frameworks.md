# Perspective Frameworks

The Chorus Agent draws from four interconnected traditions of multi-perspective analysis. Each contributes a different capability: de Bono's Six Hats provides the foundation of structured parallel thinking, stakeholder mapping identifies who has a stake in a decision, dramaturgical analysis treats social situations as performances with roles and audiences, and perspective-taking theory explains how humans model the mental states of others. Together, they enable the agent to generate contextually specific voices that feel like real people with real concerns.

## When to Load

Always available as baseline reference. Load when explaining the methodology to users, when the cast needs deeper grounding in established frameworks, or when selecting the right approach for a specific situation type.

## de Bono's Six Thinking Hats (Foundation)

Edward de Bono's Six Thinking Hats framework is the direct ancestor of the Chorus Agent. The core insight is that separating perspectives into distinct modes produces better analysis than mixing them in a single stream. The Six Hats Agent applies this through fixed categories (White for facts, Red for emotions, Black for risks, Yellow for benefits, Green for creativity, Blue for process). The Chorus Agent evolves this by replacing fixed categories with situation-specific voices, but the principle remains: separate before synthesizing.

**What the Chorus Agent borrows:** The discipline of exploring one perspective at a time and the insight that synthesis is a separate act from analysis.

**Where the Chorus Agent diverges:** Fixed hats apply the same lens to every situation. The chorus generates lenses from the situation itself. A technical architecture decision and a hiring decision should not use the same set of perspectives.

**Source:** Edward de Bono, "Six Thinking Hats" (1985, revised 2016). Published methodology.

## Stakeholder Mapping

Stakeholder mapping identifies everyone who has an interest in, is affected by, or can influence a decision or project. The most widely used model organizes stakeholders by power (ability to influence the outcome) and interest (degree to which they are affected). Mitchell, Agle, and Wood's salience model adds urgency as a third dimension, which helps prioritize which stakeholders need attention now versus later.

**What the Chorus Agent borrows:** The systematic identification of who has a stake in the outcome. Stakeholder mapping ensures the cast does not accidentally omit a critical perspective. The power-interest grid helps the agent decide which voices to amplify (high interest, regardless of power) and which voices are easy to overlook (low power, high impact).

**Where the Chorus Agent diverges:** Traditional stakeholder mapping produces a static map. The Chorus Agent turns stakeholders into speaking characters with emotions, opinions, and a distinct voice. A stakeholder map tells you who matters. The chorus tells you what they would say.

**Source:** R. Edward Freeman, "Strategic Management: A Stakeholder Approach" (1984). Mitchell, Agle & Wood, "Toward a Theory of Stakeholder Identification and Salience" (1997). Published academic work.

## Dramaturgical Analysis

Erving Goffman's dramaturgical analysis treats social life as a theatrical performance. People present different "fronts" depending on the situation: the version of yourself you show in a board meeting is not the version you show at a team retrospective. Goffman distinguished between "front stage" behavior (what people perform publicly) and "backstage" behavior (what they think privately). This framework explains why people say one thing in meetings and another in the hallway.

**What the Chorus Agent borrows:** The insight that every voice has a front-stage position and a backstage reality. The agent generates voices that speak from both: the CFO's front-stage concern is budget discipline, but their backstage fear might be losing credibility with the board if costs spike. By surfacing backstage motivations, the chorus reveals what formal stakeholder analysis misses.

**Where the Chorus Agent diverges:** Goffman analyzed naturally occurring social behavior. The chorus creates synthetic performances for analytical purposes. The voices are not observed but constructed, which means the agent must avoid creating caricatures while still making voices feel authentic.

**Source:** Erving Goffman, "The Presentation of Self in Everyday Life" (1956). Published academic work.

## Perspective-Taking Theory

Perspective-taking is the cognitive ability to adopt another person's viewpoint, understanding what they see, think, feel, and value. Developmental psychologists (Piaget, Selman) mapped how this ability develops in children, but the relevant application for the Chorus Agent is the adult form: the ability to model how someone with different information, values, and incentives would perceive the same situation.

Research distinguishes between cognitive perspective-taking (understanding what someone thinks) and affective perspective-taking (understanding what someone feels). The Chorus Agent generates voices that operate on both levels: each voice has a position (cognitive) and an emotion driving that position (affective).

**What the Chorus Agent borrows:** The framework for generating psychologically plausible voices. Each voice in the chorus must pass a perspective-taking test: given this person's information, values, and incentives, would they plausibly say this? The emotion field in the dialogue output is a direct application of affective perspective-taking.

**Where the Chorus Agent diverges:** Perspective-taking theory describes a human cognitive process. The agent performs synthetic perspective-taking, which means it constructs viewpoints rather than truly experiencing them. The agent must be transparent about this limitation: generated voices are useful approximations, not accurate simulations of real people.

**Source:** Robert Selman, "The Growth of Interpersonal Understanding" (1980). Adam Galinsky et al., "Why It Pays to Get Inside the Head of Your Opponent" (2008). Published academic work.

## IP Notes

Six Thinking Hats is Edward de Bono's published concept (1985). Stakeholder mapping originates from R. Edward Freeman's published academic work (1984). Dramaturgical analysis is Erving Goffman's published sociological framework (1956). Perspective-taking theory draws from published developmental and social psychology. This agent is an educational reference design applying these published concepts, not a commercial implementation of any proprietary methodology.
