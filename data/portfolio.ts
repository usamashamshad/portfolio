export const personalInfo = {
  name: "Usama Shamshad",
  title: "AI Engineer | Machine Learning Specialist",
  subtitle: "Blockchain & Autonomous Systems",
  location: "Islamabad, Pakistan",
  email: "usamashamshad984@gmail.com",
  phone: "+92 317 0758338",
  github: "https://github.com/usamashamshad",
  linkedin: "https://www.linkedin.com/in/usama-shamshad-383023143/",
  summary:
    "Electrical Engineer with an MS in Artificial Intelligence and Autonomous Systems from NUST, with over three years of hands-on experience building production-grade AI and machine learning systems. Currently working on integrating large language models and NLP capabilities into enterprise Content Management and Retrieval infrastructure, turning routine business workflows into intelligent, self-directing pipelines. Alongside that, I have contributed to robotics research, autonomous navigation and blockchain protocol optimization, including an MS thesis examining Bitcoin's UTXO scalability problem.",
};

export const experience = [
  {
    role: "AI Programmer",
    company: "MM Pakistan Pvt. Ltd.",
    location: "Lahore, Pakistan",
    period: "Mar 2026 – Present",
    highlights: [
      "Designed and deployed a multi-agent orchestration layer using LangChain enabling the CRMS to conduct multi-step reasoning tasks, use external tools, retain conversation memory, and coordinate across specialized sub-agents.",
      "Built a production RAG pipeline combining semantic vector search (Pinecone, FAISS) with GPT-4 and Claude 3 API calls for context-rich queries over millions of CRMS records in near real-time.",
      "Implemented NLP modules covering NER, intent classification, sentiment analysis, and automatic summarization using fine-tuned BERT, KeyBERT, and LLaMA-3.",
      "Developed structured prompting frameworks using chain-of-thought and few-shot patterns, reducing hallucination rates in business-critical responses.",
      "Exposed AI capabilities through FastAPI microservices containerized with Docker and deployed on AWS (EC2, S3, Lambda).",
      "Introduced model versioning using MLflow, automated evaluation pipelines, and A/B testing protocols for safe production deployments.",
    ],
    tags: ["LangChain", "RAG", "GPT-4", "Claude 3", "FastAPI", "Docker", "AWS", "MLflow"],
  },
  {
    role: "Coding Fellow",
    company: "SEECS, NUST",
    location: "Islamabad, Pakistan",
    period: "Sep 2024 – Mar 2026",
    highlights: [
      "Design and deliver technical bootcamps and workshops covering LLMs, blockchain architecture, AI safety, functional safety standards, and digital twin systems.",
      "Structure training programs around real industry problems, giving participants direct experience with production tools and workflows.",
      "Developed a dedicated track on LLM application development and generative AI, covering prompt engineering, RAG systems, and agent frameworks.",
    ],
    tags: ["LLMs", "Blockchain", "AI Safety", "Digital Twins", "Teaching"],
  },
  {
    role: "Machine Learning Engineer",
    company: "ROMI Lab, SEECS - NUST",
    location: "Islamabad, Pakistan",
    period: "Sep 2022 – Jun 2023",
    highlights: [
      "Worked on AI and autonomous systems research, contributing to algorithmic design and engineering implementation of multiple robotics projects.",
      "Implemented SLAM-2 with loop closure detection for mobile robot localization; integrated MINOS simulation with real-world SLAM pipelines.",
      "Built deep learning pipelines in PyTorch and TensorFlow for object detection, image segmentation, and classification tasks.",
      "Contributed to dataset curation, bias analysis, and model benchmarking across multiple problem domains.",
    ],
    tags: ["SLAM", "PyTorch", "TensorFlow", "Computer Vision", "Robotics"],
  },
  {
    role: "Engineering Trainee",
    company: "Watt Tech Pvt. Ltd.",
    location: "Faisalabad, Pakistan",
    period: "Feb 2021 – May 2021",
    highlights: [
      "Gained practical exposure to solar PV system installation, routine maintenance procedures, and power electronics workflows.",
      "Complemented academic coursework in electrical power systems with direct field experience.",
    ],
    tags: ["Solar PV", "Power Electronics", "Maintenance"],
  },
  {
    role: "Engineering Intern",
    company: "Thermal Power Complex",
    location: "Faisalabad, Pakistan",
    period: "Jun 2019 – Jul 2019",
    highlights: [
      "Observed and participated in thermal electricity generation operations, turbine maintenance, and power station overhauling.",
      "Built foundational knowledge of large-scale power systems engineering.",
    ],
    tags: ["Thermal Power", "Turbines", "Power Systems"],
  },
];

export const education = [
  {
    degree: "MS Electrical Engineering (AI & Autonomous Systems)",
    institution: "National University of Science and Technology (NUST)",
    location: "Islamabad, Pakistan",
    period: "2021 – 2025",
    details: "Specialization: AI, Robotics, Blockchain | CGPA: 3.25 / 4.00",
  },
  {
    degree: "BSc Electrical Engineering",
    institution: "University of Engineering and Technology (UET), Lahore",
    location: "Lahore, Pakistan",
    period: "2016 – 2020",
    details: "Specialization: Power Electronics, Control Systems | CGPA: 3.11 / 4.00",
  },
  {
    degree: "F.Sc Pre-Engineering",
    institution: "Punjab College, Faisalabad",
    location: "Faisalabad, Pakistan",
    period: "2014 – 2016",
    details: "89%",
  },
  {
    degree: "Matriculation",
    institution: "Fazaia Degree College Rafiqui, Shorkot Cantt",
    location: "Shorkot Cantt, Pakistan",
    period: "2012 – 2014",
    details: "94%",
  },
];

export const skills = [
  {
    category: "AI & Machine Learning",
    items: [
      "Large Language Models (GPT-4, Claude 3, LLaMA-3)",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain & LlamaIndex",
      "Agentic AI & Prompt Engineering",
      "Deep Learning & Reinforcement Learning",
      "Generative AI & Neural Networks",
    ],
  },
  {
    category: "Natural Language Processing",
    items: [
      "BERT & RoBERTa",
      "Named Entity Recognition (NER)",
      "Intent Classification & Sentiment Analysis",
      "Text Summarization & Semantic Search",
      "Vector Embeddings & NLP Pipelines",
    ],
  },
  {
    category: "Computer Vision",
    items: [
      "Object Detection (YOLO)",
      "Image Segmentation & Classification",
      "CNNs & Pix2Pix GAN",
      "OpenCV & Feature Extraction",
    ],
  },
  {
    category: "Robotics & Autonomous Systems",
    items: [
      "SLAM & Loop Closure Detection",
      "Mobile Robotics & Navigation",
      "MINOS Simulation",
      "Sensor Fusion & Autonomous Agents",
    ],
  },
  {
    category: "Blockchain & Cryptocurrency",
    items: [
      "Bitcoin Protocol & UTXO Architecture",
      "Smart Contracts (Solidity)",
      "Ethereum & DApps",
      "Blockchain Scalability",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS (EC2, S3, Lambda, SageMaker)",
      "Google Cloud Platform",
      "Docker & Containerization",
      "FastAPI & REST APIs",
      "MLOps, MLflow & CI/CD",
    ],
  },
  {
    category: "Programming & Data",
    items: [
      "Python (TensorFlow, PyTorch, NumPy, Pandas)",
      "C++ & C",
      "MATLAB & SQL",
      "Pinecone & FAISS",
      "Data Analytics",
    ],
  },
  {
    category: "Power Engineering",
    items: [
      "Power Electronics",
      "Solid-State Transformer Design",
      "Solar PV Systems",
      "Thermal Power & Control Systems",
    ],
  },
];

export const projects = [
  {
    title: "Agentic CRMS AI Platform",
    description:
      "Full-stack agentic AI system integrating LLMs, RAG, NLP, and autonomous agent workflows into enterprise content management and retrieval service (CRMS). Transforms routine business workflows into intelligent, self-directing pipelines.",
    technologies: ["LangChain", "LlamaIndex", "GPT-4", "Claude 3", "Pinecone", "FastAPI", "Docker", "AWS"],
    category: "AI/ML",
    featured: true,
    github: null,
    period: "2026",
  },
  {
    title: "Bitcoin UTXO Optimization",
    description:
      "MS Thesis research on UTXO set pruning, consolidation algorithms, and dust reduction strategies for Bitcoin network scalability. Built Python simulation frameworks modeling UTXO growth and spending behavior using Perfect Cuckoo Filters with false positive rate under 0.001%.",
    technologies: ["Python", "C++", "Bitcoin Protocol", "Cuckoo Filters", "Simulation"],
    category: "Blockchain",
    featured: true,
    github: "https://github.com/usamashamshad/CuckooUTXO",
    period: "2021–2025",
  },
  {
    title: "Document Tracking System (DTS)",
    description:
      "PHP web application for project file management, document previews, team CVs, and Google Drive synchronization. Supports XAMPP, LAN deployment, and Docker containerization for enterprise document workflows.",
    technologies: ["PHP", "CSS", "Docker", "XAMPP", "Google Drive API"],
    category: "Web Dev",
    featured: true,
    github: "https://github.com/usamashamshad/dts",
    period: "2026",
  },
  {
    title: "CAPTCHA Solving via Pix2Pix GAN",
    description:
      "Conditional generative adversarial network trained to recognize and solve image-based CAPTCHAs using the Pix2Pix architecture for computer vision challenges.",
    technologies: ["PyTorch", "Pix2Pix", "GAN", "Computer Vision"],
    category: "Computer Vision",
    featured: false,
    github: null,
    period: "2023",
  },
  {
    title: "Bot Detection on Twitter",
    description:
      "Machine learning classifier distinguishing bot accounts from organic users using behavioral signals, network graph features, and NLP-based tweet analysis.",
    technologies: ["Python", "NLP", "Graph Analysis", "Scikit-learn"],
    category: "AI/ML",
    featured: false,
    github: null,
    period: "2023",
  },
  {
    title: "SLAM-2 with Loop Closure Detection",
    description:
      "Implemented and benchmarked SLAM-2 algorithm with improved loop closure for accurate long-range mobile robot localization in autonomous navigation systems.",
    technologies: ["SLAM", "C++", "Robotics", "Sensor Fusion"],
    category: "Robotics",
    featured: true,
    github: null,
    period: "2022–2023",
  },
  {
    title: "SLAM & MINOS Environment Merger",
    description:
      "Bridged the MINOS 3D simulation environment with real-world SLAM pipelines to validate navigation algorithms before hardware deployment.",
    technologies: ["MINOS", "SLAM", "Simulation", "Robotics"],
    category: "Robotics",
    featured: false,
    github: null,
    period: "2022–2023",
  },
  {
    title: "Decentralized Autonomous Games",
    description:
      "Smart contract-based game logic deployed on Ethereum, handling in-game economy, ownership, and rule enforcement fully on-chain via Solidity and NFTs.",
    technologies: ["Solidity", "Ethereum", "Smart Contracts", "NFTs"],
    category: "Blockchain",
    featured: true,
    github: null,
    period: "Feb 2023 – Jun 2023",
  },
  {
    title: "Datacenter Network Simulation",
    description:
      "Modeled cloud datacenter topology in OMNeT++ to analyze resource utilization, latency, and throughput under varying load conditions.",
    technologies: ["OMNeT++", "Network Simulation", "C++"],
    category: "Systems",
    featured: false,
    github: null,
    period: "2022",
  },
  {
    title: "Solid State Transformer (FYP)",
    description:
      "Designed and simulated a high-efficiency solid-state transformer in power electronics for smart grid applications, addressing limitations of conventional transformer technology.",
    technologies: ["MATLAB", "Power Electronics", "Simulink", "Control Systems"],
    category: "Power Engineering",
    featured: true,
    github: null,
    period: "Sep 2019 – Jul 2020",
  },
  {
    title: "3 DOF Robotic Arm",
    description:
      "Semester project designing and implementing a 3-degree-of-freedom robotic arm with control systems for precise manipulation tasks.",
    technologies: ["MATLAB", "Control Systems", "Robotics"],
    category: "Robotics",
    featured: false,
    github: null,
    period: "2020",
  },
  {
    title: "Dataset Bias Analysis",
    description:
      "Systematic evaluation of bias in training datasets used for ML classification tasks, with mitigation strategies to improve model fairness and generalization.",
    technologies: ["Python", "PyTorch", "Data Analysis", "Fairness ML"],
    category: "AI/ML",
    featured: false,
    github: null,
    period: "2023",
  },
  {
    title: "KNN Image Classification",
    description:
      "Implementation of K-Nearest Neighbour algorithm for image classification tasks, exploring distance metrics and feature extraction techniques.",
    technologies: ["Python", "Jupyter", "KNN", "Scikit-learn"],
    category: "AI/ML",
    featured: false,
    github: "https://github.com/usamashamshad/KNN-Classification-of-Image",
    period: "2022",
  },
  {
    title: "Property Site Web Scraping",
    description:
      "Web scraping pipeline for extracting and analyzing property listing data from real estate websites for market analysis.",
    technologies: ["Python", "Jupyter", "Web Scraping", "BeautifulSoup"],
    category: "Data",
    featured: false,
    github: "https://github.com/usamashamshad/Web-Scraping-of-Property-Site",
    period: "2023",
  },
  {
    title: "Bitcoin Core Integration",
    description:
      "Contributed to Bitcoin Core integration and staging tree, gaining deep understanding of Bitcoin protocol internals and node operations.",
    technologies: ["C++", "Bitcoin Protocol", "Cryptocurrency"],
    category: "Blockchain",
    featured: false,
    github: "https://github.com/usamashamshad/bitcoin",
    period: "2024",
  },
];

export const certifications = [
  {
    title: "Machine Learning with Python",
    issuer: "Coursera / IBM",
    url: "https://coursera.org/account/accomplishments/certificate/7E6KC64D898Q",
  },
  {
    title: "AWS Cloud Technical Essentials",
    issuer: "Amazon Web Services",
    url: "https://coursera.org/account/accomplishments/certificate/AWGUEWP5HX6C",
  },
  {
    title: "Introduction to Computer Vision and Image Processing",
    issuer: "IBM",
    url: "https://coursera.org/account/accomplishments/certificate/ZSN6HEU3AJ8B",
  },
  {
    title: "Natural Language Processing with Classification and Vector Spaces",
    issuer: "Coursera / DeepLearning.AI",
    url: "https://coursera.org/account/accomplishments/certificate/DJP8EKK73P9N",
  },
  {
    title: "What is Data Science?",
    issuer: "Coursera",
    url: "https://coursera.org/account/accomplishments/certificate/8WECDV3SN6T2",
  },
  {
    title: "Microsoft Office Specialist (MOS)",
    issuer: "Official Microsoft Certification - Certiport",
    url: null,
  },
];

export const thesis = {
  title: "Optimization of Bitcoin's UTXO Set",
  institution: "NUST",
  period: "2021–2025",
  area: "Cryptocurrency & Blockchain Protocol Engineering",
  description:
    "Bitcoin's UTXO set grows continuously, placing increasing memory and storage demands on every full node. This thesis examined UTXO lifecycle patterns, identified structural inefficiencies including dust accumulation and unbatched low-value transactions, and proposed pruning heuristics and consolidation algorithms grounded in game-theoretic fee market models.",
  contributions: [
    "Analyzed UTXO lifecycle patterns and identified structural inefficiencies",
    "Proposed pruning heuristics and UTXO consolidation algorithms",
    "Built Python simulation frameworks for quantitative strategy comparison",
    "Offers UTXO set size reduction without modifying Bitcoin's consensus rules",
  ],
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];
