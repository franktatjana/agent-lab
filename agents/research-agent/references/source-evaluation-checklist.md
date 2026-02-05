# Source Evaluation Checklist

Framework for assessing the quality and reliability of information sources.

## When to Load

- Evaluating sources for inclusion in research
- Assessing credibility of conflicting information
- Building bibliography with quality indicators

## The CRAAP Test

### Currency

How recent is the information?

- [ ] Publication date is visible and recent enough for the topic
- [ ] Information has been revised or updated if topic evolves quickly
- [ ] Links and references are functional (not broken/outdated)
- [ ] For historical topics: primary sources from the relevant period

**Questions to ask:**
- When was this published/updated?
- Is currency important for this topic?
- Are there more recent sources that supersede this?

### Relevance

Does the information fit the research need?

- [ ] Content directly addresses the research question
- [ ] Depth matches need (overview vs. deep dive)
- [ ] Intended audience is appropriate (academic, professional, general)
- [ ] Scope covers the geographic/demographic context needed

**Questions to ask:**
- Does this answer what I'm actually asking?
- Is this the right level of detail?
- Who was this written for?

### Authority

Who is responsible for the information?

- [ ] Author is identified with credentials
- [ ] Author has expertise in the subject area
- [ ] Publisher/organization is reputable
- [ ] Contact information is provided
- [ ] Domain is appropriate (.edu, .gov, established organizations)

**Questions to ask:**
- Who wrote this? What are their qualifications?
- Is the publisher known and respected in this field?
- Can I verify the author's credentials elsewhere?

### Accuracy

Is the information reliable and correct?

- [ ] Claims are supported by evidence
- [ ] Sources and references are cited
- [ ] Information can be verified in other sources
- [ ] Writing is free of obvious errors
- [ ] Methodology is described (for research)
- [ ] Data sources are identified

**Questions to ask:**
- Where does this information come from?
- Can I verify these claims elsewhere?
- Does this match what other reliable sources say?

### Purpose

Why does this information exist?

- [ ] Purpose is clear (inform, teach, sell, entertain, persuade)
- [ ] Bias is disclosed or detectable
- [ ] Advertising is clearly distinguished from content
- [ ] Language is objective, not emotionally manipulative
- [ ] Funding sources are disclosed (if applicable)

**Questions to ask:**
- What is the author/publisher trying to achieve?
- Is there a financial or ideological motive?
- Are alternative viewpoints acknowledged?

## Source Type Hierarchy

### Tier 1: Primary Sources

Original data, documents, or firsthand accounts.

- Academic research papers (peer-reviewed)
- Official government data and statistics
- Court documents, legislation, patents
- Original interviews with principals
- Company filings (10-K, annual reports)

### Tier 2: Secondary Sources

Analysis and interpretation of primary sources.

- Systematic reviews and meta-analyses
- Reputable news organizations (reporting, not opinion)
- Academic textbooks and handbooks
- Industry analyst reports (Gartner, McKinsey, etc.)
- Established reference works

### Tier 3: Tertiary Sources

Compilations and overviews.

- Encyclopedias (including Wikipedia for orientation)
- Fact sheets and summaries
- Bibliographies and indexes
- Textbooks (for background)

### Use with Caution

- Opinion pieces and editorials
- Blog posts without citations
- Social media posts
- Sources with clear commercial interest
- Anonymous or unverifiable sources

### Generally Avoid

- Content farms and SEO-optimized articles
- Sources with history of inaccuracy
- Heavily biased advocacy without disclosure
- Outdated sources on evolving topics
- Single-source claims on important facts

## Red Flags

### Content Red Flags

- [ ] Extraordinary claims without extraordinary evidence
- [ ] Emotional language designed to provoke
- [ ] Absence of citations or references
- [ ] Claims that can't be verified elsewhere
- [ ] Conflicts with established consensus without explanation

### Source Red Flags

- [ ] Anonymous authorship on serious topics
- [ ] No "About" page or organizational transparency
- [ ] Domain designed to mimic legitimate sources
- [ ] Heavy advertising or sponsored content
- [ ] History of corrections or retractions

## Recording Source Quality

When citing sources, note:

```yaml
source:
  url: "https://..."
  title: "..."
  author: "..."
  date: "..."
  type: primary | secondary | tertiary
  credibility: high | medium | low | uncertain
  limitations: "..."
  verified_via: "..." # How was this cross-checked
```

## Cross-Verification Protocol

1. **Single source**: Flag as unverified; seek confirmation
2. **Two sources (same origin)**: Still risky; may share bias
3. **Two+ independent sources**: More reliable
4. **Expert consensus**: High confidence unless contested
5. **Conflicting sources**: Document disagreement; explain reasoning
