---
title: "Reproduction of General Graph Random Features"
date: 2025-12-01
tags: ["图深度学习", "复现", "Numba", "优化"]
projectCategory: "academic"
description: "General Graph Random Features 的复现项目。"
summary: "图深度学习复现项目，复现 General Graph Random Features 的实验结果。"
editPost:
    URL: "https://github.com/ANKer661/g-GRFs-reproduce"
    Text: "GitHub repository"
cover:
    image: "kernerl_approx.png"
    alt: "Kernel approximation results of g-GRFs reproduction"
    relative: true
showToc: false
disableAnchoredHeadings: true
translationKey: "g-grfs"
---

图深度学习课程中的可复现性挑战项目。

合作者：Weiye Wang, Xingqiao Hu.

- 复现了 *General Graph Random Features* (ICLR 2024) 中的五组实验。
- 在仅包含Experiment 1 的部分实现的原始代码基础上补充了完整的实验实现，并通过 Numba JIT 编译和缓存优化将 Experiment 1 的运行速度提升超过 10 倍。

##### 链接

- [代码](https://github.com/ANKer661/g-GRFs-reproduce)
