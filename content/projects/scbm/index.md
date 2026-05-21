---
title: "Stochastic Concept Bottleneck Model Reproduction and Optimization"
date: 2026-05-01
tags: ["concept bottleneck models", "interpretable machine learning", "reproducibility", "optimization", "PyTorch"]
projectCategory: "academic"
description: "Reproduction and optimization of Stochastic Concept Bottleneck Models."
summary: "A reproduction and optimization project for SCBM (NeurIPS 2024), focusing reproducibility, modular code design, and efficient implementation."
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

Research project / reproduction study.

Collaborators: Xingqiao Hu, Yiran Wang, Kangyue Xu.

- Reproduced CBM, CEM, Autoregressive CBM, and SCBM on synthetic, CUB, and CIFAR-10 benchmarks, analyzing concept prediction, target accuracy, calibration, and intervention behavior.
- Refactored the original research codebase into modular training and intervention pipelines, and optimized bottlenecks with vectorized concept modules, batched Monte Carlo sampling, efficient data loading, optimized intervention loops and GPU-friendly SCBM intervention solvers.
- Reduced estimated full experimental runtime from over 1,200 hours to around 60 hours while preserving experimental semantics, making future research on CBMs much more accessible and efficient.

##### Links

- [Code](https://github.com/ANKer661/SCBM)
