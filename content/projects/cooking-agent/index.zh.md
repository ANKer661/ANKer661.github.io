---
title: "交互式烹饪 Agent"
date: 2025-12-01
tags: ["检索增强生成 (RAG)", "大语言模型", "LangGraph", "自然语言处理", "Agent"]
projectCategory: "academic"
description: "基于 RAG、LangGraph 和本地大语言模型的实时烹饪辅助系统。"
summary: "基于 RAG、LangGraph 和本地 Qwen3-8B 构建可多轮对话的交互式烹饪 Agent。"
cover:
    image: "arch.png"
    alt: "Agent architecture diagram"
    relative: true
showToc: false
disableAnchoredHeadings: true
translationKey: "cooking-agent"
---

自然语言处理课程项目。

- 构建 RAG 管线，使用 FAISS 与 Sentence Transformers 对 220 万份食谱进行向量索引，并驱动本地部署的 Qwen3-8B 模型实现高效语义检索。
- 基于 LangGraph 设计多节点 Agent 架构，集成意图分类、上下文记忆摘要和分步交互引导模块。
- 实现支持多轮对话、上下文连续性和实时交互的烹饪辅助系统。
- 引入 Gemini 3 Pro 进行 LLM-as-judge 定性评估，Agent 交互体验得分达到 5/5，显著优于仅使用 RAG 的 baseline。
