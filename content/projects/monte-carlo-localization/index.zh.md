---
title: "Monte Carlo Localization 模拟器"
date: 2025-05-01
tags: ["机器人", "Python", "Monte Carlo localization", "NumPy"]
projectCategory: "academic"
description: "基于粒子滤波的 Python 概率机器人定位模拟器。"
summary: "机器人课程项目，实现基于粒子滤波的 Monte Carlo Localization 模拟器，并通过向量化射线求交显著提升性能。"
cover:
    image: "cover.png"
    alt: "Monte Carlo Localization simulator visualization"
    relative: true
editPost:
    URL: "https://github.com/ANKer661/MCL-Simulator"
    Text: "GitHub repository"
showToc: false
disableAnchoredHeadings: true
translationKey: "monte-carlo-localization"
---

机器人课程项目。

- 构建基于粒子滤波的 Monte Carlo Localization 模拟器，集成差速驱动运动模型、距离估计、粒子重采样和模拟渲染等模块。
- 使用 NumPy 向量化计算替代传统几何库 Shapely 调用，将射线求交模块加速约 10x，并将整体渲染时间减少约 50%。
- 结合低方差重采样与随机采样的重采样策略，并使用带 EMA 的权重更新策略，缓解粒子退化问题。
- 在复杂运动场景下提升定位稳定性，使模拟器更适合用于调试和可视化概率定位算法。

##### Links

- [Code](https://github.com/ANKer661/MCL-Simulator)
