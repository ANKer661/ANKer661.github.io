window.RESUME_DATA = {
  name: "高正韬",
  contact: [
    "电话: ****",
    "邮箱: gzhengtao@qq.com",
    { label: "个人主页: https://anker661.github.io", href: "https://anker661.github.io" },
    "微信: ****",
  ],
  summary:
    "人工智能硕士在读，专业排名第一，研究与工程经历主要围绕基础模型相关算法与系统展开，涵盖表示学习、自监督预训练、分布式 LLM 训练及 Agent Runtime，兼具模型设计、系统实现与性能优化经验。",
  education: [
    {
      school: "卢加诺大学（瑞士，Lugano）",
      date: "2024.09 - 2027.02",
      degree: "理学硕士，人工智能",
      gpa: "GPA: 9.5/10 (#rank 1)",
      award: "Foundation for the Lugano Faculties Scholarship × 2",
    },
    {
      school: "南开大学（中国，天津）",
      date: "2019.09 - 2023.06",
      degree: "理学学士，化学生物学",
      gpa: "GPA: 3.7/4",
      award: "学业优秀奖学金 × 2",
    },
  ],
  interests: [
    "表示学习（Representation Learning）",
    "基础模型（Foundation Models）",
    "自监督学习（Self-supervised Learning）",
    "分布式训练（Distributed Training）",
    "多模态学习（Multimodal Learning）",
  ],
  publications: [
    {
      title: "Towards Practical Reproduction of Stochastic Concept Bottleneck Models",
      meta: "第一作者 | Under review at TMLR",
      bullets: [
        "将 SCBM 中关键约束优化问题重构为向量化 GPU 求解形式，并优化模型定义、批量执行与评测流程，实现约 20× 端到端加速（1200h → 60h）。",
      ],
    },
    {
      title:
        "BALM: Bio-inspired Antibody Language Model for Therapeutic Antibody Design",
      meta: "第二作者 | Briefings in Bioinformatics (CCF-B)",
      bullets: [
        "完成 10 亿+ 抗体序列预处理，构建 3.36 亿非冗余训练样本，并参与分布式预训练；设计领域特定位置编码与 Mask 策略，将抗体结构先验融入预训练。",
        "BALM 在抗原结合位点预测任务上 AUPR 达到 76.2，较 Meta FAIR 的 ESM-2 提升 2.7%；在抗体冗余度预测任务上 AUPR 达到 76.1，较 ESM-2 提升 27.9%。基于 BALM 表征构建的 BALMFold 在配对抗体基准测试中实现 CDR H3 环高精度预测（197 个目标中 70 个 RMSD ≤ 2Å），较次优方法提升 49%。",
      ],
    },
  ],
  projects: [
    {
      number: "1",
      icon: "RL",
      title: "高效多模态表示学习与跨用户泛化",
      tech: "PyTorch, ViT, MAE, 表征学习",
      date: "2025.07 - 2026.03",
      bullets: [
        "设计并实现面向多模态时序传感数据的<strong>自监督表示学习框架</strong>，实现跨用户泛化与个性化适配；项目为卢加诺大学 & Emteq Labs 校企合作。",
        "构建原生多模态架构，将多源传感器信号映射至<strong>统一表示空间</strong>，并基于 <strong>MAE</strong> 对 ViT 进行预训练；设计模态感知 embedding 策略和掩码策略。",
        "将欧拉角作为任务相关先验融入表示学习过程；提出<strong>用户库与用户路由机制</strong>，利用用户身份作为零成本弱监督信号，在提升跨用户泛化能力的同时实现用户个性化适配。",
        "在用户级别划分的 5-fold 交叉验证下模拟新用户冷启动场景，仅使用 <strong>5% 标注数据</strong>微调预训练模型，在表情识别和认知负荷估计两项任务上均达到或超越 <strong>100% 数据从头训练 baseline</strong>。",
      ],
    },
    {
      number: "2",
      icon: "TP",
      title: "Mini-Megatron：基于 MiniMind 的分布式训练扩展",
      tech: "PyTorch, LLM, 分布式训练",
      date: "2026.05 - 2026.06",
      bullets: [
        "基于开源 LLM MiniMind，实现 <strong>Megatron 风格分布式训练框架</strong>，支持 Tensor / Sequence / Vocab / Pipeline Parallelism 及 <strong>TP×PP 二维并行训练</strong>。",
        "基于 torch.autograd.Function 实现通信原语（AllReduce、AllGather、ReduceScatter），并构建并行 Linear、GQA Attention、SwiGLU MLP、Transformer Block、Pipeline Stage 与 P2P 通信模块。",
        "实现<strong>分布式 Cross Entropy 计算</strong>，避免在计算 loss 时 gather 完整 logits；构建序列并行数据流、激活值重计算机制与 <strong>PP 1F1B 调度</strong>；实现异步线性层，将输入梯度通信与权重梯度 GEMM 重叠。",
        "构建原始模型与并行版本的端到端一致性测试，前向 logits、反向梯度及 100 步 AdamW 后参数最大误差分别控制在 <strong>1e-6、1e-8 和 1e-5</strong> 以内。双卡 TP 相比单卡降低约 <strong>44%</strong> 峰值显存，异步通信进一步提升约 <strong>9%</strong> 训练吞吐；SP 与 VP 在基础 TP 上额外降低约 <strong>14%</strong> 激活显存。",
      ],
    },
    {
      number: "3",
      icon: "AG",
      title: "面向长流程任务的状态驱动 LLM Agent Harness",
      tech: "Agent, RAG, LangGraph",
      date: "2025.10 - 2025.12",
      bullets: [
        "设计<strong>状态驱动的 LLM Agent Harness</strong>，通过 Runtime 与 TaskSpec 解耦执行流程与任务逻辑，提升长流程任务中的状态一致性与上下文可扩展性。",
        "抽象 <strong>AgentRuntime 与 TaskSpec</strong> 两大核心组件，将通用执行循环、Tool-use、状态更新与具体任务逻辑解耦；支持通过插件化 TaskSpec 快速接入不同任务，并由任务侧定义的确定性状态转移逻辑统一管理任务状态。",
        "以“烹饪助手”为验证场景接入 Harness 框架，实现意图识别、RAG 工具菜谱检索、步骤推进、帮助问答、进度检查与完成判断等完整交互流程；使用 conversation summary 压缩长期任务状态，避免直接拼接完整历史，提高长对话下的上下文可扩展性。",
        "使用 Gemma4-31B 生成 3 类交互场景下的 20 条多轮交互轨迹，并使用 GPT-5.5 作为 LLM-as-a-Judge 对 Harness 与无状态 RAG baseline 进行对比。接入 Harness 的 Agent 在 <strong>18/20</strong> 个案例中胜出，状态管理评分由 <strong>1.0 提升至 4.30</strong>，多轮交互质量由 <strong>1.0 提升至 4.6</strong>。",
      ],
    },
  ],
  skills: [
    "熟悉表示学习、自监督学习、Transformer、图神经网络和多模态学习等深度学习方法，关注基础模型中的高质量表征学习问题。",
    "熟悉 PyTorch 模型开发与实验流程，能够使用 Python、pandas / NumPy、Linux 和 Git 完成数据处理、模型训练与实验评估。",
    "了解大模型分布式训练中的数据并行、张量并行、流水线并行、Sequence / Vocab Parallel 等方法，具备分布式学习相关实践经验。",
    "了解 LangChain / LangGraph Agent 开发框架，了解 RAG、Tool-use、Harness、Memory 和 LLM-as-a-Judge 等 Agent 相关技术。",
    "英语能力良好（TOEFL 100），可阅读英文论文、技术文档并进行英文项目写作与交流。",
  ],
};
