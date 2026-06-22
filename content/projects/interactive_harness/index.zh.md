---
title: "长流程交互任务 Agent Harness 框架"
date: 2025-12-01
tags: ["大语言模型", "Agent Harness", "状态管理", "检索增强生成 (RAG)", "自然语言处理"]
projectCategory: "academic"
description: "面向长流程交互任务的状态驱动 Agent Harness 框架。"
summary: "将一次性问答式 LLM 扩展为可追踪进度、可管理状态、可逐步推进任务的交互式 Agent Harness。"
cover:
    image: "arch.png"
    alt: "Agent architecture diagram"
    relative: true
showToc: false
disableAnchoredHeadings: true
translationKey: "cooking-agent"
---

2025.10 - 2025.12。

- 针对长流程任务中 LLM 难以稳定维护任务状态的问题，设计并实现面向任务执行场景的状态驱动 Agent Harness 框架，将一次性问答式 LLM 扩展为可追踪进度、可管理状态、可逐步推进任务的交互式 Agent。
- 抽象 `AgentRuntime` 与 `TaskSpec` 两大核心组件，将通用执行循环、Tool-use、状态更新与具体任务逻辑解耦。
- 支持通过插件化 `TaskSpec` 快速接入不同任务，并由任务侧定义的确定性状态转移逻辑统一管理任务状态，降低多轮交互中的状态漂移。
- 以“烹饪助手”为验证场景接入 Harness 框架，实现意图识别、RAG 工具菜谱检索、步骤推进、帮助问答、进度检查与完成判断等完整交互流程。
- 使用 conversation summary 压缩长期任务状态，避免直接拼接完整历史，提高长对话下的上下文可扩展性。
- 使用 Gemma4-31B 生成 3 类交互场景下的 20 条多轮交互轨迹，并使用 GPT-5.5 作为 LLM-as-a-Judge 对 Harness 与无状态 RAG baseline 进行对比。
- 结果显示接入 Harness 的 Agent 在 18/20 个案例中胜出，状态管理评分由 1.0 提升至 4.30，多轮交互质量由 1.0 提升至 4.6；同时量化了多轮生成带来的准确性 trade-off，食谱复述准确性评分由 4.1 略微降低至 3.8。
