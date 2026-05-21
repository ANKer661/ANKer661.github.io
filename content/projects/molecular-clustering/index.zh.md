---
title: "基于对比学习的分子聚类"
date: 2023-05-01
tags: ["图神经网络", "对比学习", "分子动力学", "表征学习"]
projectCategory: "academic"
description: "从分子动力学轨迹的原始 3D 坐标中学习结构表征的本科毕业论文项目。"
summary: "本科毕业论文项目，将 SwAV 对比学习方法与 GNN 表征用于分子动力学轨迹中的构象建模与聚类。"
cover:
    image: "cover.png"
    alt: "CoLMoC graph neural network encoder architecture"
    relative: true
editPost:
    URL: "https://github.com/ANKer661/CoLMoC"
    Text: "GitHub repository"
showToc: false
disableAnchoredHeadings: true
translationKey: "molecular-clustering"
---

本科毕业论文项目，化学信息学实验室，南开大学。

- 研究如何在分子动力学轨迹中直接从原始 3D 坐标学习结构表征，减少对手工特征的依赖，并提升模型对分子构象特征的刻画能力。
- 设计端到端表征学习框架，将 SwAV 对比学习引入分子建模任务，并使用 GNN 直接处理分子 3D 坐标。
- 通过零中心化与 SO(3) 数据增强近似实现分子表征的平移与旋转不变性。
- 在丙氨酸二肽数据上验证模型表征能力，结果表明该方法能够捕捉并区分自由能景观中的亚稳态结构，实现对分子构象的有效建模。

##### Links

- [Code](https://github.com/ANKer661/CoLMoC)
