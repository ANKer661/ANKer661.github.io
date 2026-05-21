---
title: "多模态智能眼镜数据的跨用户泛化与个性化"
date: 2026-03-01
tags: ["多模态学习", "表征学习", "自监督学习", "个性化", "人本感知"]
projectCategory: "academic"
description: "围绕多模态智能眼镜传感数据的跨用户泛化与个性化适配研究。"
summary: "USI 研究项目，探索基于自监督预训练的多模态传感器数据跨用户泛化与低标注个性化适配方法。"
showToc: false
disableAnchoredHeadings: true
translationKey: "smart-glass"
---

研究助理项目，People-Centered Computing Lab, Università della Svizzera italiana。

- 研究多模态智能眼镜传感器数据中用户间个体差异导致模型跨用户泛化能力退化的问题，探索基于自监督预训练的泛化与个性化适配方法。
- 基于 masked autoencoding 对多模态传感器数据预训练 ViT，设计模态感知的 embedding 策略与掩码策略，并引入欧拉角信息增强数据质量。
- 设计用户库与用户路由机制，利用用户身份作为零成本弱监督信号，学习用户表征以建模个体差异。
- 在用户级别划分的 5-fold 交叉验证下模拟新用户冷启动场景；仅使用 5% 标注数据微调预训练模型，在两项下游任务上达到或超过 100% 标注数据从头训练的基线性能。
