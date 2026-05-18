---
title: "Accurate prediction of antibody function and structure using bio-inspired antibody language model"
date: 2024-05-26
tags: ["bioinformatics", "protein language models", "antibody modeling", "self-supervised learning"]
author: [Hongtai Jing, Zhengtao Gao, Sheng Xu, Tao Shen, Zhangzhi Peng, Shwai He, Tao You, Shuang Ye, Wei Lin, Siqi Sun]
description: "Bio-inspired antibody language model for function and structure prediction. Published in Briefings in Bioinformatics, 2024."
summary: "We developed BALM, a bio-inspired antibody language model with antibody-specific inductive biases for accurate prediction of antibody function and structure."
editPost:
    URL: "https://doi.org/10.1093/bib/bbae245"
    Text: "Briefings in Bioinformatics"
showToc: false
disableAnchoredHeadings: true
---

##### Abstract

In recent decades, antibodies have emerged as indispensable therapeutics for combating diseases, particularly viral infections. However, their development has been hindered by limited structural information and labor-intensive engineering processes. Fortunately, significant advancements in deep learning methods have facilitated the precise prediction of protein structure and function by leveraging co-evolution information from homologous proteins. Despite these advances, predicting the conformation of antibodies remains challenging due to their unique evolution and the high flexibility of their antigen-binding regions. Here, to address this challenge, we present the Bio-inspired Antibody Language Model (BALM). This model is trained on a vast dataset comprising 336 million 40% nonredundant unlabeled antibody sequences, capturing both unique and conserved properties specific to antibodies. Notably, BALM showcases exceptional performance across four antigen-binding prediction tasks. Moreover, we introduce BALMFold, an end-to-end method derived from BALM, capable of swiftly predicting full atomic antibody structures from individual sequences. Remarkably, BALMFold outperforms those well-established methods like AlphaFold2, IgFold, ESMFold and OmegaFold in the antibody benchmark, demonstrating significant potential to advance innovative engineering and streamline therapeutic antibody development by reducing the need for unnecessary trials. The BALMFold structure prediction server is freely available at https://beamlab-sh.com/models/BALMFold.
