---
title: "Stochastic Concept Bottleneck Models 复现与优化"
date: 2026-05-01
tags: ["概念瓶颈模型（CBMs）", "可解释机器学习", "复现", "优化", "PyTorch"]
projectCategory: "academic"
description: "随机概念瓶颈模型（SCBM）的复现与工程优化。"
summary: "围绕 SCBM（NeurIPS 2024）的复现与优化项目，重点关注实验可复现性、模块化代码设计和高效实现。"
editPost:
    URL: "https://github.com/ANKer661/SCBM"
    Text: "GitHub repository"
cover:
    image: "cover.png"
    alt: "Speedup comparison of original and optimized code"
    relative: true
showToc: false
disableAnchoredHeadings: true
translationKey: "scbm"
---

研究项目 / 复现

Collaborators: Xingqiao Hu, Yiran Wang, Kangyue Xu.

- 在合成数据、CUB 和 CIFAR-10 数据集上复现 CBM、CEM、Autoregressive CBM 和 SCBM，分析各模型的概念预测和目标预测的准确性，对概念预测的校准进行评估，并分析干预下模型的行为变化。
- 将原始研究代码重构为模块化的训练和干预流程，并通过更高效的编码器实现、向量化蒙特卡洛采样、优化数据加载、优化干预循环实现以及 GPU 友好的 SCBM intervention solvers 提升实验效率。
- 在保持实验语义一致的前提下，将完整实验运行时间从约 1,200 小时降低到约 60 小时，提升未来CBMs相关研究的可行性和效率。

##### Links

- [Code](https://github.com/ANKer661/SCBM)
