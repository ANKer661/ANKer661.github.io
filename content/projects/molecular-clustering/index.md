---
title: "Contrastive Learning based Molecular Clustering"
date: 2023-05-01
tags: ["graph neural networks", "contrastive learning", "molecular dynamics", "representation learning"]
projectCategory: "academic"
description: "Graduation thesis on contrastive representation learning for molecular dynamics trajectories."
summary: "A thesis project adapting SwAV-style contrastive learning and GNN representations to molecular dynamics trajectories."
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

Graduation thesis at the Laboratory of Chemoinformatics, Nankai University, advised by Prof. Wensheng Cai.

- Adapted the SwAV contrastive framework to molecular dynamics and designed a GNN to learn representations directly from raw 3D coordinates.
- Enforced translational invariance through zero-centering and empirical rotational invariance via SO(3) data augmentation.
- Benchmarked on alanine dipeptide trajectories and showed that the learned representations capture distinct metastable states in the classical free-energy landscape.

##### Links

- [Code](https://github.com/ANKer661/CoLMoC)
