---
title: "Interactive Cooking Agent"
date: 2025-12-01
tags: ["retrieval augmented generation", "large language models", "LangGraph", "natural language processing"]
projectCategory: "academic"
description: "RAG and LangGraph agent for conversational cooking assistance."
summary: "A Natural Language Processing course project building a RAG-based interactive cooking assistant."
cover:
    image: "arch.png"
    alt: "Agent architecture diagram"
    relative: true
showToc: false
disableAnchoredHeadings: true
translationKey: "cooking-agent"
---

Course project for Natural Language Processing.

- Built a RAG pipeline indexing 2.2M recipes with FAISS IVF quantization and sentence transformers.
- Powered semantic retrieval for a locally deployed Qwen3-8B model via Ollama.
- Designed a multi-node LangGraph agent with intent classification, context-aware memory summarization, and step-by-step interactive guidance.
- Conducted a qualitative LLM-as-judge evaluation using Gemini 3 Pro; the agent scored 5/5 in interactive experience versus 1/5 for a naive retrieval-only baseline.
