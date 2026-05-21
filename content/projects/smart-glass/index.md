---
title: "Cross-User Generalization and Personalization for Multimodal Smart-Glass Data"
date: 2026-03-01
tags: ["multimodal learning", "representation learning", "self-supervised learning", "personalization", "human-centered sensing"]
projectCategory: "academic"
description: "Research project on data-efficient personalization for multimodal smart-glass sensor data."
summary: "A research project at USI studying cross-user domain shift and low-label personalization for multimodal smart-glass sensor data."
showToc: false
disableAnchoredHeadings: true
translationKey: "smart-glass"
---

Research assistant project at the People-Centered Computing Lab, USI, advised by Dr. Martin Gjoreski.

- Identified inter-subject domain shift as a key challenge in multimodal smart-glass sensor data, causing significant performance degradation when models generalize to unseen users.
- Pretrained a ViT model with masked autoencoding on multimodal sensor data augmented with Euler angle features.
- Used user identity as a zero-cost supervision signal to study cross-user generalizability.
- Fine-tuned the pretrained model with only 5% labeled data and achieved comparable or superior performance to a fully supervised baseline trained with 100% labeled data across two downstream tasks.
