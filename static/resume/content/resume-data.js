window.RESUME_DATA = {
  name: "Zhengtao Gao",
  contact: [
    "Email: gzhengtao@qq.com",
    { label: "Website: https://anker661.github.io", href: "https://anker661.github.io" },
    { label: "GitHub: https://github.com/ANKer661", href: "https://github.com/ANKer661" },
  ],
  summary:
    "MSc student in Artificial Intelligence, ranked first in the program. Research and engineering experience around foundation-model algorithms and systems, with a focus on representation learning, self-supervised pretraining, distributed LLM training, and agent runtimes.",
  education: [
    {
      school: "Università della Svizzera italiana (USI), Lugano, Switzerland",
      date: "Sep 2024 - Feb 2027",
      degree: "MSc in Artificial Intelligence",
      gpa: "GPA: 9.5/10 (#rank 1)",
      award: "Foundation for the Lugano Faculties Scholarship x 2",
    },
    {
      school: "Nankai University, Tianjin, China",
      date: "Sep 2019 - Jun 2023",
      degree: "BSc in Chemical Biology",
      gpa: "GPA: 3.7/4",
      award: "Academic Excellence Scholarship x 2",
    },
  ],
  interests: [
    "Representation Learning",
    "Foundation Models",
    "Self-supervised Learning",
    "Distributed Training",
    "Multimodal Learning",
  ],
  publications: [
    {
      title: "Towards Practical Reproduction of Stochastic Concept Bottleneck Models",
      meta: "First author | Under review at TMLR",
      bullets: [
        "Reformulated the key constrained optimization problem in SCBM into a vectorized GPU-friendly solver, and optimized model definitions, batched execution, and evaluation pipelines to achieve about 20x end-to-end acceleration (1200h -> 60h).",
      ],
    },
    {
      title:
        "BALM: Bio-inspired Antibody Language Model for Therapeutic Antibody Design",
      meta: "Second author | Briefings in Bioinformatics",
      bullets: [
        "Processed 1B+ antibody sequences, built a 336M non-redundant training corpus, and contributed to distributed pretraining; designed domain-specific positional encoding and masking strategies to inject antibody structural priors into pretraining.",
      ],
    },
  ],
  projects: [
    {
      number: "1",
      icon: "RL",
      title: "Efficient Multimodal Representation Learning and Cross-user Generalization",
      tech: "PyTorch, ViT, MAE",
      date: "Jul 2025 - Mar 2026",
      bullets: [
        "Designed and implemented a <strong>self-supervised representation learning framework</strong> for multimodal time-series sensor data, targeting cross-user generalization and personalized adaptation; industry collaboration between USI and Emteq Labs.",
        "Built a native multimodal architecture that maps heterogeneous sensor streams into a <strong>shared representation space</strong>, and pretrained a ViT backbone with <strong>MAE</strong>; designed modality-aware embeddings and masking strategies.",
        "Injected Euler angles as task-relevant priors into the representation learning process; proposed a <strong>user library and user routing mechanism</strong> that uses user identity as a zero-cost weak supervision signal for both generalization and personalization.",
        "Under user-level 5-fold cross-validation simulating cold-start users, fine-tuning the pretrained model with only <strong>5% labeled data</strong> matched or surpassed the <strong>100% labeled-data from-scratch baseline</strong> on both expression recognition and cognitive-load estimation.",
      ],
    },
    {
      number: "2",
      icon: "TP",
      title: "Mini-Megatron: Distributed Training Extensions for MiniMind",
      tech: "LLM, Distributed Training",
      date: "May 2026 - Jun 2026",
      bullets: [
        "Built a <strong>Megatron-style distributed training framework</strong> on top of the open-source MiniMind LLM, supporting Tensor / Sequence / Vocab / Pipeline Parallelism and <strong>TP x PP two-dimensional parallel training</strong>.",
        "Implemented communication primitives with torch.autograd.Function, including AllReduce, AllGather, and ReduceScatter, and built parallel Linear layers, GQA Attention, SwiGLU MLP, Transformer Blocks, Pipeline Stages, and P2P communication modules.",
        "Implemented <strong>distributed Cross Entropy</strong> to avoid gathering full logits for loss computation; built sequence-parallel data flow, activation recomputation, <strong>PP 1F1B scheduling</strong>, and asynchronous linear layers that overlap input-gradient communication with weight-gradient GEMM.",
        "Constructed end-to-end consistency tests between the original and parallelized models, keeping all maximum errors below <strong>1e-5</strong>. Two-GPU TP reduced peak memory by about <strong>44%</strong> compared with single-GPU training, while asynchronous communication improved throughput by about <strong>9%</strong>; SP and VP further reduced activation memory by about <strong>14%</strong> on top of TP.",
      ],
    },
    {
      number: "3",
      icon: "AG",
      title: "State-driven LLM Agent Harness for Long-horizon Tasks",
      tech: "Agent, RAG, LangGraph",
      date: "Oct 2025 - Dec 2025",
      bullets: [
        "Designed a <strong>state-driven LLM Agent Harness</strong> that decouples runtime execution from task-specific logic through Runtime and TaskSpec abstractions, improving state consistency and context scalability in long-horizon tasks.",
        "Abstracted <strong>AgentRuntime and TaskSpec</strong> as the two core components, separating generic execution loops, tool use, state updates, and task logic; supported plugin-style TaskSpec integration, with deterministic task-side state transitions for robust multi-turn state management.",
        "Validated the framework with a cooking-assistant scenario covering intent recognition, RAG-based recipe retrieval, step progression, help QA, progress checking, and completion detection; used conversation summaries to compress long-term task state instead of concatenating full history.",
        "Generated 20 multi-turn trajectories across three interaction scenarios with Gemma4-31B, and used GPT-5.5 as an LLM-as-a-Judge to compare Harness against a stateless RAG baseline. The Harness agent won <strong>18/20</strong> cases; state-management score improved from <strong>1.0 to 4.30</strong>, and multi-turn interaction quality improved from <strong>1.0 to 4.6</strong>.",
      ],
    },
  ],
  skills: [
    "Familiar with deep learning methods including representation learning, self-supervised learning, Transformers, graph neural networks, and multimodal learning, with a focus on high-quality representations for foundation models.",
    "Experienced with PyTorch model development and experimental workflows; able to use Python, pandas / NumPy, Linux, and Git for data processing, model training, and evaluation.",
    "Familiar with distributed training methods for large language models, including Data Parallelism, Tensor Parallelism, Pipeline Parallelism, Sequence Parallelism, and Vocab Parallelism.",
    "Familiar with LangChain / LangGraph agent development, RAG, tool use, harness design, memory, and LLM-as-a-Judge evaluation.",
    "English: TOEFL 100; comfortable reading papers and technical documentation and writing technical project materials in English.",
  ],
};
