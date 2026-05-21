---
title: "Monte Carlo Localization Simulator"
date: 2025-05-01
tags: ["robotics", "Python", "Monte Carlo localization", "NumPy"]
projectCategory: "academic"
description: "Python simulator for probabilistic robot localization with vectorized ray sensing."
summary: "A Robotics course project implementing a configurable Monte Carlo Localization simulator."
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

Course project for Robotics.

- Implemented a configurable Monte Carlo Localization simulator in Python with differential drive kinematics, ray-casting distance sensing, and Gaussian likelihood weighting.
- Accelerated ray intersection computation by 10x and reduced rendering time by 50% by replacing Shapely API calls with custom vectorized NumPy cross-product logic.
- Improved tracking robustness during sharp turns with a hybrid Low-Variance resampling strategy and exponential moving average weight smoothing.

##### Links

- [Code](https://github.com/ANKer661/MCL-Simulator)
