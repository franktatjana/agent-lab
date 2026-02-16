# Bookmarks

Curated links for designing, building, and operating AI agents.

---

## Contents

- [Foundations](#foundations)
- [Agent Design](#agent-design)
- [Prompt Engineering](#prompt-engineering)
- [Context Engineering](#context-engineering)
- [Tools and Frameworks](#tools-and-frameworks)
- [Orchestration and Composition](#orchestration-and-composition)
- [Evaluation and Testing](#evaluation-and-testing)
- [Production Operations](#production-operations)
- [Papers](#papers)
- [Community](#community)
- [To Sort](#to-sort)

---

## Foundations

What agents are, why they matter, industry perspectives.

- [What are AI agents?](https://cloud.google.com/discover/what-are-ai-agents) - Google Cloud overview of agent definitions, types, and examples
- [AI Agents](https://www.ibm.com/think/topics/ai-agents) - IBM enterprise perspective on agents
- [What is AI Agents?](https://aws.amazon.com/what-is/ai-agents/) - AWS explanation of agent concepts

---

## Agent Design

Identity, responsibility, boundaries, and architecture patterns.

- [Building Effective AI Agents](https://www.anthropic.com/research/building-effective-agents) - Anthropic's guide: workflows vs agents, five workflow patterns, when to use agents (Dec 2024)
- [How We Built Our Multi-Agent Research System](https://www.anthropic.com/engineering/how-we-built-our-multi-agent-research-system) - Engineering challenges from deploying multiple Claude agents (Jun 2025)
- [Writing Effective Tools for Agents](https://www.anthropic.com/engineering/writing-effective-tools-for-agents-with-agents) - Optimizing tool quality and having Claude improve its own tools (Sep 2025)
- [Claude Code: Best Practices for Agentic Coding](https://www.anthropic.com/engineering/claude-code-best-practices-for-agentic-coding) - Patterns for using Claude Code across codebases (Apr 2025)
- [Building agents with the Claude Agent SDK](https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk) - Anthropic's SDK design principles
- [Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview) - Anthropic's loadable capability packages
- [Equipping Agents with Agent Skills](https://claude.com/blog/equipping-agents-for-the-real-world-with-agent-skills) - Progressive disclosure, skill isolation, design best practices
- [OpenAI Agents SDK](https://openai.github.io/openai-agents-python/) - OpenAI's lightweight multi-agent framework
- [OpenAI Agents Guide](https://platform.openai.com/docs/guides/agents-sdk) - Official SDK documentation
- [New tools for building agents](https://openai.com/index/new-tools-for-building-agents/) - OpenAI's agent tooling overview

---

## Prompt Engineering

Prompt design, structure, versioning, and drift prevention.

- [Claude 4 Best Practices](https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-4-best-practices) - Anthropic's official prompting techniques for Claude 4.x
- [Prompt Engineering Overview](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview) - Anthropic's comprehensive prompt engineering guide
- [OpenAI Prompt Engineering](https://platform.openai.com/docs/guides/prompt-engineering) - OpenAI's official prompt engineering guide
- [GPT-5 Prompting Guide](https://cookbook.openai.com/examples/gpt-5/gpt-5_prompting_guide) - OpenAI Cookbook for agentic prompting
- [LangChain Prompt Templates](https://python.langchain.com/docs/concepts/prompt_templates/) - Composable, modular prompt templates
- [Prompt Templates Guide](https://latenode.com/blog/ai-frameworks-technical-infrastructure/langchain-setup-tools-agents-memory/langchain-prompt-templates-complete-guide-with-examples) - Complete guide with composable patterns
- [Claude Skills Deep Dive](https://leehanchung.github.io/blogs/2025/10/26/claude-skills-deep-dive/) - First principles analysis of Claude's skill architecture
- [XML Tag-Based Prompt Construction](https://kloss.xyz/blog/prompt-building) - Structured prompt building with role, mission, rules, constraints, discovery, evaluation, and fallback patterns

---

## Context Engineering

Memory, retrieval, context window management, and dynamic assembly.

- [Effective Context Engineering for AI Agents](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) - Anthropic's guide: compaction, just-in-time loading, structured note-taking
- [Claude Memory Deep Dive](https://skywork.ai/blog/claude-memory-a-deep-dive-into-anthropics-persistent-context-solution/) - Analysis of Anthropic's CLAUDE.md-based memory system
- [Memory Tool](https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool) - Anthropic's official memory tool documentation
- [Context Engineering from Claude](https://01.me/en/2025/12/context-engineering-from-claude/) - Best practices learned from Anthropic's approaches
- [How Claude Code Protects Context](https://hyperdev.matsuoka.com/p/how-claude-code-got-better-by-protecting) - Analysis of context preservation strategies

---

## Tools and Frameworks

Frameworks, SDKs, and platforms for building agents.

- [e2b-dev/awesome-ai-agents](https://github.com/e2b-dev/awesome-ai-agents) - Comprehensive list of AI agent projects
- [LangChain Agents](https://www.langchain.com/agents) - LangChain agent framework
- [LangGraph](https://www.langchain.com/langgraph) - Graph-based agent orchestration
- [LangChain Agents Complete Guide](https://www.leanware.co/insights/langchain-agents-complete-guide-in-2025) - Tutorial and overview
- [openai-agents-python](https://github.com/openai/openai-agents-python) - OpenAI Agents SDK source
- [Introducing AgentKit](https://openai.com/index/introducing-agentkit/) - OpenAI's visual workflow builder

---

## Interfaces and Protocols

Standards, protocols, and patterns for agent boundaries and communication.

- [Building Effective Agents: ACI Design](https://www.anthropic.com/research/building-effective-agents) - Anthropic's Agent-Computer Interface principles: tool design, poka-yoke, iterative testing
- [Model Context Protocol (MCP)](https://modelcontextprotocol.io/specification/2025-11-25) - Anthropic's standard for agent-to-tool integration (Nov 2025 spec)
- [MCP's Impact on 2025](https://www.thoughtworks.com/en-us/insights/blog/generative-ai/model-context-protocol-mcp-impact-2025) - ThoughtWorks analysis of MCP adoption and implications
- [Agent2Agent Protocol (A2A)](https://developers.googleblog.com/en/a2a-a-new-era-of-agent-interoperability/) - Google's protocol for agent-to-agent discovery and communication via Agent Cards
- [A2A Protocol Specification](https://a2a-protocol.org/latest/specification/) - Full protocol specification with Agent Card schema
- [AG-UI: Agent-User Interaction Protocol](https://docs.ag-ui.com/) - Bidirectional agent-to-frontend communication (streaming, events, interrupts)
- [A Survey of Agent Interoperability Protocols](https://arxiv.org/html/2505.02279v1) - Academic survey comparing MCP, ACP, A2A, and ANP
- [Agent Communication Protocols Landscape](https://generativeprogrammer.com/p/agent-communication-protocols-landscape) - Visual comparison of protocol layers and overlaps
- [What Are AI Agent Protocols?](https://www.ibm.com/think/topics/ai-agent-protocols) - IBM overview of protocol standards and interoperability
- [Agent Contracts: Formal Framework](https://arxiv.org/html/2601.08815) - Academic framework for resource-bounded agent contracts with conservation laws

---

## Orchestration and Composition

Multi-agent systems, pipelines, routing, coordination patterns.

- [Choosing the Right Multi-Agent Architecture](https://www.blog.langchain.com/choosing-the-right-multi-agent-architecture/) - LangChain's four patterns (subagents, skills, handoffs, routers) with benchmarking data
- [Benchmarking Multi-Agent Architectures](https://blog.langchain.com/benchmarking-multi-agent-architectures/) - Single Agent vs. Swarm vs. Supervisor on tau-bench: token costs, scalability, domain isolation
- [How and When to Build Multi-Agent Systems](https://blog.langchain.com/how-and-when-to-build-multi-agent-systems/) - LangChain guidance: "multi-agent systems work mainly because they help spend enough tokens"
- [LangGraph Multi-Agent Workflows](https://blog.langchain.com/langgraph-multi-agent-workflows/) - Supervisor and swarm patterns with `Command(goto=...)` routing
- [Building LangGraph from first principles](https://www.blog.langchain.com/building-langgraph/) - Runtime design decisions
- [Deep Agents](https://www.blog.langchain.com/deep-agents/) - Advanced agent patterns
- [Build a Supervisor Agent](https://docs.langchain.com/oss/python/langchain/supervisor) - LangGraph supervisor docs: structured output routing, tool-calling routing, three-layer architecture
- [LangGraph Router Pattern](https://docs.langchain.com/oss/python/langchain/multi-agent/router) - Router vs. supervisor distinction, `Command` for single-agent and `Send` for parallel fan-out
- [langgraph-supervisor-py](https://github.com/langchain-ai/langgraph-supervisor-py) - LangGraph supervisor reference implementation
- [langgraph-swarm-py](https://github.com/langchain-ai/langgraph-swarm-py) - LangGraph swarm (peer-to-peer handoff) reference implementation
- [Orchestrator-Worker Agents Comparison](https://arize.com/blog/orchestrator-worker-agents-a-practical-comparison-of-common-agent-frameworks/) - Arize AI comparison of CrewAI, AutoGen, and other frameworks
- [CrewAI](https://github.com/crewAIInc/crewAI) - Framework for orchestrating role-playing, autonomous AI agents
- [CrewAI Hierarchical Process](https://docs.crewai.com/en/learn/hierarchical-process) - Manager agent delegation via tool calls, result validation
- [CrewAI Collaboration](https://docs.crewai.com/en/concepts/collaboration) - Delegation tools: `Delegate work to coworker` and `Ask question to coworker`
- [CrewAI Planning](https://docs.crewai.com/en/concepts/planning) - AgentPlanner generates step-by-step plans before execution
- [Hierarchical AI Agents with CrewAI](https://activewizards.com/blog/hierarchical-ai-agents-a-guide-to-crewai-delegation) - Guide to manager-worker delegation patterns
- [OpenAI Agents SDK Handoffs](https://openai.github.io/openai-agents-python/handoffs/) - Handoff-as-tool-call pattern: `transfer_to_<agent_name>`, input types, context filtering
- [OpenAI Cookbook: Orchestrating Agents](https://developers.openai.com/cookbook/examples/orchestrating_agents) - Handoff implementation from experimental Swarm to production SDK
- [AutoGen SelectorGroupChat](https://microsoft.github.io/autogen/stable//user-guide/agentchat-user-guide/selector-group-chat.html) - LLM-based speaker selection: selector prompts, candidate_func, selector_func
- [How We Built Our Multi-Agent Research System](https://www.anthropic.com/engineering/multi-agent-research-system) - Anthropic's production orchestrator-workers with dynamic effort scaling
- [Multi-Agent AI Systems Enterprise Guide](https://neomanex.com/posts/multi-agent-ai-systems-orchestration) - Coordinator-specialist patterns for enterprise
- [AI Agent Routing: Tutorial & Best Practices](https://www.patronus.ai/ai-agent-development/ai-agent-routing) - Patronus AI guide to static vs. dynamic routing, semantic routing
- [AWS: Routing Dynamic Dispatch Patterns](https://docs.aws.amazon.com/prescriptive-guidance/latest/agentic-ai-patterns/routing-dynamic-dispatch-patterns.html) - Agentic routing as "dynamic cognitive dispatching" replacing rigid rules

---

## Evaluation and Testing

Testing strategies, evaluation frameworks, benchmarks.

- [Demystifying Evals for AI Agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents) - Anthropic's comprehensive guide: grader types, pass@k vs pass^k metrics, agent-specific approaches, implementation roadmap (Jan 2026)
- [Test Cases, Goldens, and Datasets](https://www.confident-ai.com/docs/llm-evaluation/core-concepts/test-cases-goldens-datasets) - Confident AI's guide to golden datasets as ground truth for LLM evaluation
- [Building a Golden Dataset for AI Evaluation](https://www.getmaxim.ai/articles/building-a-golden-dataset-for-ai-evaluation-a-step-by-step-guide/) - Step-by-step guide to creating evaluation datasets
- [Testing for LLM Applications](https://langfuse.com/blog/2025-10-21-testing-llm-applications) - Langfuse practical guide to LLM testing strategies
- [How to Test Your LLM Prompts](https://www.helicone.ai/blog/test-your-llm-prompts) - Helicone guide with examples
- [Golden Dataset Creation Guidance](https://github.com/microsoft/promptflow-resource-hub/blob/main/sample_gallery/golden_dataset/copilot-golden-dataset-creation-guidance.md) - Microsoft's guidance for Copilot golden datasets
- [How to Write a Good Spec for AI Agents](https://addyosmani.com/blog/good-spec/) - Addy Osmani on specs, conformance suites, and input/output examples

---

## Production Operations

Deployment, monitoring, cost management, guardrails.

- [Effective Harnesses for Long-Running Agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents) - Two-agent architecture, feature lists, incremental progress, git integration

---

## Industry Trends

Market analysis, emerging patterns, and the evolving landscape.

- [7 Agentic AI Trends to Watch in 2026](https://machinelearningmastery.com/7-agentic-ai-trends-to-watch-in-2026/) - Multi-agent orchestration, MCP/A2A protocols, governance, FinOps for agents
- [The State of AI Agents & Agent Teams (Oct 2025)](https://medium.com/@fahey_james/the-state-of-ai-agents-agent-teams-oct-2025-27d7dac01667) - Reasoning models, orchestration frameworks, enterprise platforms
- [Micro-AI Agents: The Future of One-Task Automation](https://aicompetence.org/micro-ai-agents-future-of-one-task-automation/) - Single-purpose agents, agent mesh architecture
- [Taming AI Agents: The Autonomous Workforce of 2026](https://www.cio.com/article/4064998/taming-ai-agents-the-autonomous-workforce-of-2026.html) - Enterprise adoption, blended human-agent teams
- [AI at Scale: Agent-Driven Enterprise Reinvention](https://kpmg.com/us/en/media/news/q4-ai-pulse.html) - KPMG analysis of enterprise agent adoption

---

## Papers

Academic and industry research on agents.

---

## Community

Discussions, forums, newsletters.

---

## To Sort

Links to categorize.

---

## Contributing

Add resources via pull request. Each entry: `[Name](url) - one-line description`
