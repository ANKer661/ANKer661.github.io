---
title: "Long-Horizon Interactive Agent Harness"
date: 2025-12-01
tags: ["large language models", "agent harness", "state management", "retrieval augmented generation", "natural language processing"]
projectCategory: "academic"
description: "A state-driven Agent Harness framework for long-horizon interactive task execution."
summary: "A state-driven Agent Harness that turns one-shot LLM interactions into trackable, state-managed, step-by-step task execution."
cover:
    image: "arch.png"
    alt: "Agent architecture diagram"
    relative: true
showToc: false
disableAnchoredHeadings: true
translationKey: "cooking-agent"
---

October 2025 - December 2025.

- Designed and implemented a state-driven Agent Harness framework for long-horizon interactive tasks, addressing the difficulty of maintaining stable task state across extended LLM interactions.
- Abstracted two core components, `AgentRuntime` and `TaskSpec`, to decouple the general execution loop, tool use, and state updates from task-specific logic.
- Supported plugin-style task integration through `TaskSpec`, with deterministic task-side state transitions for managing progress and reducing state drift in multi-turn interactions.
- Validated the framework with a cooking assistant task, covering intent recognition, RAG-based recipe retrieval, step progression, help QA, progress checks, and completion detection.
- Used conversation summaries to compress long-running task state instead of directly appending full dialogue history, improving context scalability for extended conversations.
- Generated 20 multi-turn interaction trajectories across three scenarios with Gemma4-31B, and compared the Harness agent against a stateless RAG baseline using GPT-5.5 as an LLM-as-a-Judge.
- The Harness agent won 18 out of 20 cases; state management improved from 1.0 to 4.30, multi-turn interaction quality improved from 1.0 to 4.6, while recipe restatement accuracy showed a measured trade-off, decreasing from 4.1 to 3.8.
