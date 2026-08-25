export interface Grant {
  id: string;
  projectTitle: string;
  agency: string;
  agencyLogo?: string;
  amount: string;
  period: string;
  role: 'Principal Investigator (PI)' | 'Co-Principal Investigator (Co-PI)';
  status: 'Active' | 'Completed';
  category: 'Federal Government' | 'Industry Sponsored' | 'International Collaboration';
}

export interface LabFacility {
  title: string;
  description: string;
  specs: string;
  iconName: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  type: 'Journal' | 'Conference' | 'Book Chapter';
  citations: number;
  doi: string;
  pdfUrl: string;
  abstract: string;
  tags: string[];
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  iconName: string;
  activeProjects: number;
  grantTotal: string;
  keyTopics: string[];
}

export interface Course {
  code: string;
  name: string;
  level: 'Undergraduate' | 'Postgraduate' | 'Doctoral';
  semester: string;
  students: number;
  description: string;
}

export interface Achievement {
  year: string;
  title: string;
  organization: string;
  description: string;
  category: 'Award' | 'Fellowship' | 'Grant' | 'Recognition';
}

export interface TimelineItem {
  period: string;
  role: string;
  institution: string;
  location: string;
  description: string;
  highlights: string[];
  type?: 'Leadership' | 'Teaching' | 'Research';
}

export interface Student {
  name: string;
  degree: 'Ph.D.' | 'M.Tech' | 'B.Tech Honors';
  thesisTitle: string;
  year: string;
  status: 'Ongoing' | 'Graduated';
  currentRole?: string;
}

export interface NewsPressItem {
  id: string;
  date: string;
  publisher: string;
  title: string;
  summary: string;
  category: 'Media Feature' | 'Keynote Talk' | 'Press Release' | 'Panel Discussion';
  location?: string;
  linkUrl: string;
}

export interface VideoLectureItem {
  id: string;
  title: string;
  courseCode: string;
  duration: string;
  views: string;
  rating: string;
  topic: string;
  youtubeId: string;
  slidesUrl: string;
}

export interface AlumniTestimonialItem {
  id: string;
  name: string;
  degreeYear: string;
  currentRole: string;
  organization: string;
  location: string;
  quote: string;
  avatarInitials: string;
}

export const professorData = {
  name: "Dr. Arvind Sharma",
  title: "Professor of Computer Science",
  department: "Department of Computer Science",
  institution: "Global Institute of Technology",
  shortIntro: "Dedicated to innovative research, quality education and mentoring the next generation of thinkers and problem solvers.",
  badgeText: "Educator • Researcher • Mentor",
  headlinePrefix: "Inspiring ",
  headlineHighlight1: "Minds.",
  headlineMiddle: " Advancing ",
  headlineHighlight2: "Knowledge.",
  
  quote: {
    text: "Education is not the learning of facts, but the training of the mind to think.",
    author: "Albert Einstein"
  },

  contactInfo: {
    email: "arvind.sharma@git.edu",
    phone: "+91 (011) 2765-8900",
    office: "Room 402, Turing Academic Block",
    address: "Global Institute of Technology Campus, Tech City, New Delhi - 110078",
    officeHours: "Mon & Wed: 2:00 PM - 4:00 PM | Fri: By Appointment",
  },

  academicProfiles: {
    scholar: "https://scholar.google.com",
    researchGate: "https://researchgate.net",
    ieee: "https://ieeexplore.ieee.org",
    orcid: "https://orcid.org/0000-0002-1823-4591",
    scopus: "https://scopus.com",
    citations: 3480,
    hIndex: 28,
    i10Index: 54,
  },

  heroStats: [
    { value: "20+", label: "Years of Teaching Experience", icon: "GraduationCap" },
    { value: "75+", label: "Research Publications", icon: "FileText" },
    { value: "15+", label: "PhD Students Guided", icon: "Users" },
    { value: "25+", label: "Awards & Recognitions", icon: "Trophy" },
    { value: "10+", label: "International Collaborations", icon: "Globe" },
  ],

  about: {
    headline: "Passionate Educator. Dedicated Researcher.",
    bioParagraph1: "I am a Professor in the Department of Computer Science with a strong commitment to academic excellence, innovative research, and student development. With over two decades of experience in teaching and research, I strive to bridge the gap between theory and real-world applications.",
    bioParagraph2: "My work focuses on solving complex problems through technology and inspiring students to think critically, innovate, and contribute to society.",
    education: [
      {
        degree: "Ph.D. in Computer Science",
        institution: "Indian Institute of Technology (IIT), Delhi",
        year: "2006",
      },
      {
        degree: "M.Tech. in Computer Science",
        institution: "Indian Institute of Technology (IIT), Kanpur",
        year: "2001",
      },
      {
        degree: "B.Tech. in Computer Science",
        institution: "University Institute of Engineering & Technology, CSJMU, Kanpur",
        year: "1999",
      }
    ],
    experience: [
      {
        role: "Professor",
        institution: "Department of Computer Science, Global Institute of Technology",
        period: "2018 - Present"
      },
      {
        role: "Associate Professor",
        institution: "Department of Computer Science, Global Institute of Technology",
        period: "2012 - 2018"
      },
      {
        role: "Assistant Professor",
        institution: "Department of Computer Science, Global Institute of Technology",
        period: "2006 - 2012"
      }
    ],
    expertise: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Computer Vision",
      "Big Data Analytics"
    ],
    coreValues: [
      "Academic Integrity",
      "Continuous Learning",
      "Innovation",
      "Mentorship",
      "Social Responsibility"
    ]
  },

  labInfo: {
    name: "AI & Quantum Intelligence Systems Lab (AI-QIS Lab)",
    tagline: "Pioneering foundational algorithms at the intersection of Deep Learning, Quantum Computing, and Resilient Systems.",
    director: "Dr. Arvind Sharma (Lab Director)",
    teamSize: "14 Active Researchers (8 PhD Scholars, 4 Postdocs, 2 Engineers)",
    totalFunding: "$3.4M+ (₹28+ Crore)",
    location: "Block C, 4th Floor, Advanced Computing Wing, GIT",
    facilities: [
      {
        title: "High-Performance AI Compute Cluster",
        description: "Dedicated deep learning server rack equipped for large model training, multi-node distributed gradient scaling, and LLM fine-tuning.",
        specs: "8x NVIDIA H100 Tensor Core GPUs, 512GB VRAM, 100Gbps InfiniBand",
        iconName: "Cpu"
      },
      {
        title: "Hybrid Quantum Computing Testbed",
        description: "Direct cloud hardware interface for executing variational quantum circuits and benchmarking post-quantum cryptographic primitives.",
        specs: "127-Qubit IBM Quantum Eagle Access, Qiskit Runtime & Rigetti QPUs",
        iconName: "Zap"
      },
      {
        title: "Cyber-Physical Test Bench & IoT Sandbox",
        description: "Hardware-in-the-loop experimental grid for testing real-time zero-knowledge intrusion detection against smart grid threats.",
        specs: "OPAL-RT Real-Time Simulator, SCADA Test Rigs, Industrial IoT Nodes",
        iconName: "Shield"
      },
      {
        title: "Multilingual NLP & Speech Annotation Suite",
        description: "Curated dataset processing pipeline for low-resource Indic languages and factual verification model alignment.",
        specs: "300TB NVMe Distributed Storage, Automated Annotation Hardware",
        iconName: "Server"
      }
    ] as LabFacility[],
    grants: [
      {
        id: "grant-1",
        projectTitle: "Development of Energy-Efficient Deep Transformer Architectures for Edge Devices",
        agency: "Department of Science & Technology (DST), Govt. of India",
        amount: "₹1.45 Crore ($175,000)",
        period: "2024 - 2027",
        role: "Principal Investigator (PI)",
        status: "Active",
        category: "Federal Government"
      },
      {
        id: "grant-2",
        projectTitle: "Hybrid Quantum-Classical Optimization for Smart Power Grid Reliability",
        agency: "Science & Engineering Research Board (SERB)",
        amount: "₹2.10 Crore ($250,000)",
        period: "2023 - 2026",
        role: "Principal Investigator (PI)",
        status: "Active",
        category: "Federal Government"
      },
      {
        id: "grant-3",
        projectTitle: "Fact-Aligned Large Language Models for Healthcare and Diagnostics",
        agency: "Google AI Academic Research Award",
        amount: "$120,000 (USD)",
        period: "2024 - 2025",
        role: "Principal Investigator (PI)",
        status: "Active",
        category: "Industry Sponsored"
      },
      {
        id: "grant-4",
        projectTitle: "Zero-Trust State Estimation in Cyber-Physical Industrial Control Systems",
        agency: "DRDO & Defence R&D Directorate",
        amount: "₹1.85 Crore ($220,000)",
        period: "2022 - 2025",
        role: "Co-Principal Investigator (Co-PI)",
        status: "Active",
        category: "Federal Government"
      },
      {
        id: "grant-5",
        projectTitle: "Communication-Efficient Differential Privacy in Heterogeneous IoT Rigs",
        agency: "IEEE Computer Society Research Grant",
        amount: "$65,000 (USD)",
        period: "2021 - 2023",
        role: "Principal Investigator (PI)",
        status: "Completed",
        category: "International Collaboration"
      },
      {
        id: "grant-6",
        projectTitle: "Post-Quantum Cryptographic Protocols for Distributed Financial Networks",
        agency: "IBM Quantum Systems Research Sponsorship",
        amount: "$95,000 (USD)",
        period: "2020 - 2022",
        role: "Principal Investigator (PI)",
        status: "Completed",
        category: "Industry Sponsored"
      }
    ] as Grant[]
  },

  timeline: [
    {
      period: "2018 - Present",
      role: "Full Professor & Head of CS Department",
      institution: "Department of Computer Science, Global Institute of Technology",
      location: "New Delhi, India",
      type: "Leadership",
      description: "Directing department research strategy, managing $3.4M+ in sponsored grants, chairing academic curriculum board, and advising 8 ongoing Ph.D. scholars.",
      highlights: [
        "Established AI & Quantum Intelligence Systems Lab",
        "Supervised 15+ Ph.D. scholars to graduation",
        "Published 35+ IEEE Transactions & ACM Journal papers",
        "Curated M.Tech Deep Learning & Data Science Curriculum"
      ]
    },
    {
      period: "2012 - 2018",
      role: "Associate Professor",
      institution: "Department of Computer Science, Global Institute of Technology",
      location: "New Delhi, India",
      type: "Teaching",
      description: "Led core postgraduate instruction in deep learning and theory of computation. Secured major extramural research grants from DST & SERB.",
      highlights: [
        "Conferred National Outstanding Educator Award",
        "Co-authored textbook on Distributed Neural Systems",
        "Pioneered university-wide AI & Data Analytics specialization",
        "Secured $800K+ in federal research grants"
      ]
    },
    {
      period: "2006 - 2012",
      role: "Assistant Professor",
      institution: "Department of Computer Science, Global Institute of Technology",
      location: "New Delhi, India",
      type: "Teaching",
      description: "Taught core undergraduate courses in data structures, algorithmic analysis, and machine learning. Initiated early-career research in cyber security.",
      highlights: [
        "Awarded Early Career Faculty Research Fellowship",
        "Supervised 30+ M.Tech thesis capstone projects",
        "Authored 15 peer-reviewed conference publications",
        "Established university high-performance computing lab"
      ]
    },
    {
      period: "2004 - 2006",
      role: "Senior Postdoctoral Research Fellow",
      institution: "MIT CSAIL (Computer Science & Artificial Intelligence Lab)",
      location: "Cambridge, MA, USA",
      type: "Research",
      description: "Researched high-dimensional statistical learning, automated reasoning, and robotics vision with Prof. Leslie Kaelbling.",
      highlights: [
        "Published 4 NeurIPS and ICML papers",
        "Invited Keynote Speaker at MIT AI Symposium",
        "Collaborated with DARPA Autonomous Systems Initiative"
      ]
    }
  ] as TimelineItem[],

  researchAreas: [
    {
      id: "ai-dl",
      title: "Artificial Intelligence & Deep Learning",
      description: "Developing robust, energy-efficient deep neural architectures capable of real-time multi-modal reasoning and dynamic adaptivity.",
      iconName: "BrainCircuit",
      activeProjects: 4,
      grantTotal: "$1.2M",
      keyTopics: ["Transformer Networks", "Self-Supervised Learning", "Model Distillation", "Edge AI"]
    },
    {
      id: "quantum",
      title: "Quantum Computing & Algorithms",
      description: "Exploring hybrid quantum-classical algorithms for combinatorial optimization, neural network acceleration, and cryptographic safety.",
      iconName: "Cpu",
      activeProjects: 3,
      grantTotal: "$850K",
      keyTopics: ["Quantum Neural Networks", "QAOA Optimization", "Error Mitigation", "Post-Quantum Crypto"]
    },
    {
      id: "nlp",
      title: "Natural Language Processing",
      description: "Building multilingual, domain-specific Large Language Models with enhanced reasoning, factual verification, and reduced hallucination.",
      iconName: "MessageSquareCode",
      activeProjects: 5,
      grantTotal: "$950K",
      keyTopics: ["Multilingual LLMs", "Retrieval-Augmented Generation", "Fact Alignment", "Token Efficiency"]
    },
    {
      id: "trustworthy-ai",
      title: "Trustworthy & Explainable AI",
      description: "Formulating mathematical guarantees for model interpretability, fairness constraints, and adversarial defense in high-stakes domains.",
      iconName: "ShieldCheck",
      activeProjects: 3,
      grantTotal: "$600K",
      keyTopics: ["SHAP & LIME Enhancements", "Fairness Constraints", "Adversarial Robustness", "Causal AI"]
    },
    {
      id: "cyber-security",
      title: "Cyber-Physical System Security",
      description: "Designing intrusion detection frameworks and resilient state estimation protocols for smart grids, IoT networks, and industrial systems.",
      iconName: "Lock",
      activeProjects: 2,
      grantTotal: "$500K",
      keyTopics: ["IoT Intrusion Detection", "Zero Trust Architecture", "Zero-Knowledge Proofs", "State Estimation"]
    },
    {
      id: "federated-learning",
      title: "Federated Learning & Privacy",
      description: "Investigating decentralized training methodologies with differential privacy guarantees for distributed healthcare and mobile devices.",
      iconName: "Network",
      activeProjects: 3,
      grantTotal: "$720K",
      keyTopics: ["Differential Privacy", "Secure Aggregation", "Non-IID Data Convergence", "Communication-Efficient FL"]
    }
  ] as ResearchArea[],

  publications: [
    {
      id: "pub-1",
      title: "Adaptive Transformer Networks for Resource-Constrained Edge Inference",
      authors: ["Dr. Arvind Sharma", "Rohan Mehta", "Dr. Sarah Jenkins"],
      venue: "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
      year: 2024,
      type: "Journal",
      citations: 42,
      doi: "10.1109/TPAMI.2024.3398102",
      pdfUrl: "#",
      abstract: "We introduce a novel dynamic attention pruning technique that dynamically allocates computational budgets per token layer, resulting in a 4.2x speedup with negligible accuracy degradation across benchmark datasets.",
      tags: ["Deep Learning", "Edge AI", "Transformers"]
    },
    {
      id: "pub-2",
      title: "Hybrid Quantum-Classical Neural Architectures for Combinatorial Optimization",
      authors: ["Dr. Arvind Sharma", "Priya Verma", "Prof. David Miller"],
      venue: "ACM Conference on Neural Information Processing Systems (NeurIPS)",
      year: 2023,
      type: "Conference",
      citations: 88,
      doi: "10.1145/3571234.3571290",
      pdfUrl: "#",
      abstract: "This paper presents a hybrid variational quantum eigensolver combined with graph neural networks to solve NP-hard routing problems with low-qubit noisy intermediate-scale quantum (NISQ) devices.",
      tags: ["Quantum Computing", "Graph Neural Networks", "Optimization"]
    },
    {
      id: "pub-3",
      title: "Fact-Grounded Retrieval Augmented Generation for Medical Diagnostics",
      authors: ["Vikramaditya Rao", "Dr. Arvind Sharma", "Dr. Ananya Gupta"],
      venue: "Journal of Artificial Intelligence Research (JAIR)",
      year: 2023,
      type: "Journal",
      citations: 115,
      doi: "10.1613/jair.1.14205",
      pdfUrl: "#",
      abstract: "We present a factual consistency checker integrated into RAG pipelines that evaluates cross-document references before generating diagnostic summaries, reducing clinical hallucination rates by 68%.",
      tags: ["NLP", "LLM", "Healthcare AI"]
    },
    {
      id: "pub-4",
      title: "Communication-Efficient Differential Privacy in Heterogeneous Federated Networks",
      authors: ["Dr. Arvind Sharma", "Kavita Singhania"],
      venue: "IEEE International Conference on Data Engineering (ICDE)",
      year: 2022,
      type: "Conference",
      citations: 134,
      doi: "10.1109/ICDE53745.2022.00112",
      pdfUrl: "#",
      abstract: "Federated learning on non-IID mobile datasets often suffers from bandwidth bottlenecks. Our adaptive quantization scheme with Laplace noise guarantees strict privacy with 60% lower communication payload.",
      tags: ["Federated Learning", "Privacy", "Distributed Systems"]
    },
    {
      id: "pub-5",
      title: "Principles of Explainable AI in High-Stakes Decision Making",
      authors: ["Dr. Arvind Sharma", "Prof. Marcus Thorne"],
      venue: "Springer Academic Press - Series in Computer Science",
      year: 2022,
      type: "Book Chapter",
      citations: 76,
      doi: "10.1007/978-3-030-99881-2_4",
      pdfUrl: "#",
      abstract: "A comprehensive treatise on mathematical interpretability, gradient-based attribution, post-hoc explanations, and regulatory compliance standards for AI systems in healthcare and aviation.",
      tags: ["Explainable AI", "Ethics", "Book Chapter"]
    },
    {
      id: "pub-6",
      title: "Zero-Trust Security Protocols for Cyber-Physical Power Grids",
      authors: ["Siddharth Sen", "Dr. Arvind Sharma"],
      venue: "IEEE Transactions on Smart Grid",
      year: 2021,
      type: "Journal",
      citations: 210,
      doi: "10.1109/TSG.2021.3089421",
      pdfUrl: "#",
      abstract: "We design a lightweight zero-knowledge state estimation protocol that detects false data injection attacks in real-time across wide-area monitoring networks.",
      tags: ["Cyber Security", "Smart Grid", "Cryptography"]
    }
  ] as Publication[],

  teaching: {
    philosophy: "I believe that true education goes beyond passive absorption of code and formulas. It requires instilling analytical curiosity, mathematical rigor, and ethical responsibility. My classroom is an interactive laboratory where foundational principles meet real-world impact.",
    courses: [
      {
        code: "CS-501",
        name: "Advanced Deep Learning Architectures",
        level: "Postgraduate",
        semester: "Autumn 2026",
        students: 65,
        description: "Covers CNNs, Transformers, Generative Adversarial Networks, Diffusion Models, and optimization techniques for large-scale AI."
      },
      {
        code: "CS-302",
        name: "Data Structures & Algorithmic Analysis",
        level: "Undergraduate",
        semester: "Spring 2026",
        students: 140,
        description: "Fundamental trees, graphs, dynamic programming, NP-completeness, and space-time complexity bounds."
      },
      {
        code: "CS-704",
        name: "Quantum Computing & Information Theory",
        level: "Doctoral",
        semester: "Autumn 2025",
        students: 22,
        description: "Qubits, quantum gates, Shor's & Grover's algorithms, quantum neural networks, and error correction codes."
      },
      {
        code: "CS-412",
        name: "Trustworthy Artificial Intelligence & Ethics",
        level: "Undergraduate",
        semester: "Spring 2025",
        students: 85,
        description: "Model interpretability, fairness metrics, bias mitigation, privacy mechanisms, and regulatory guidelines."
      }
    ] as Course[]
  },

  achievements: [
    {
      year: "2024",
      title: "National Outstanding Educator Award",
      organization: "Ministry of Education & Higher Learning",
      description: "Conferred for exceptional pedagogy, research mentorship, and pioneering curriculum modernization in Computer Science.",
      category: "Award"
    },
    {
      year: "2023",
      title: "Stanford Top 2% Global Scientist List",
      organization: "Stanford University / Elsevier",
      description: "Ranked among the top globally cited researchers in Artificial Intelligence and Neural Computation.",
      category: "Recognition"
    },
    {
      year: "2022",
      title: "IEEE Senior Member Fellowship",
      organization: "IEEE Computer Society",
      description: "Elevated to Senior Member status in recognition of significant professional maturity and contributions to computer science.",
      category: "Fellowship"
    },
    {
      year: "2021",
      title: "Best Research Paper Award",
      organization: "International Joint Conference on Artificial Intelligence (IJCAI)",
      description: "Awarded for groundbreaking work on dynamic inference pruning in edge computing models.",
      category: "Award"
    },
    {
      year: "2019",
      title: "National Science Foundation Research Grant ($1.5M)",
      organization: "National Science & Tech Council",
      description: "Principal Investigator grant for developing scalable quantum-classical hybrid algorithms.",
      category: "Grant"
    }
  ] as Achievement[],

  newsAndPress: [
    {
      id: "press-1",
      date: "August 2024",
      publisher: "MIT Technology Review",
      title: "Scaling Edge AI Transformers Without Sacrificing Precision",
      summary: "Feature article highlighting Dr. Sharma's research lab breakthroughs in dynamic attention pruning for low-power edge microprocessors.",
      category: "Media Feature",
      linkUrl: "https://technologyreview.com"
    },
    {
      id: "press-2",
      date: "July 2024",
      publisher: "IJCAI 2024 Tokyo, Japan",
      title: "Invited Keynote: Next-Generation Quantum Machine Learning Primitives",
      summary: "Delivered opening plenary lecture on hybrid quantum-classical optimization algorithms to 2,500+ global AI delegates.",
      category: "Keynote Talk",
      location: "Tokyo, Japan",
      linkUrl: "https://ijcai.org"
    },
    {
      id: "press-3",
      date: "February 2024",
      publisher: "Times Higher Education",
      title: "Pioneering Quantum Computing Education in Asian Universities",
      summary: "Interview discussing curriculum innovation and establishing state-of-the-art quantum computing hardware labs for undergraduate students.",
      category: "Media Feature",
      linkUrl: "https://timeshighereducation.com"
    },
    {
      id: "press-4",
      date: "November 2023",
      publisher: "Stanford Quantum AI Summit",
      title: "Panel Chair: Post-Quantum Cryptographic Safety in Distributed Systems",
      summary: "Chaired expert academic panel on zero-trust state estimation and lattice-based cryptography standards.",
      category: "Panel Discussion",
      location: "Palo Alto, CA, USA",
      linkUrl: "https://stanford.edu"
    }
  ] as NewsPressItem[],

  videoLectures: [
    {
      id: "lec-1",
      title: "Lecture 01: Attention Mechanisms & Transformer Architectures",
      courseCode: "CS-501 Advanced Deep Learning",
      duration: "52 mins",
      views: "18.4K Views",
      rating: "⭐ 4.9/5.0",
      topic: "Self-Attention Math, Positional Encodings & Multi-Head Scaling",
      youtubeId: "dQw4w9WgXcQ",
      slidesUrl: "#"
    },
    {
      id: "lec-2",
      title: "Lecture 04: Qubits, Superposition & Quantum Circuit Design",
      courseCode: "CS-704 Quantum Computing",
      duration: "48 mins",
      views: "12.1K Views",
      rating: "⭐ 5.0/5.0",
      topic: "Bloch Sphere Representation, Hadamard Gates & Entanglement",
      youtubeId: "dQw4w9WgXcQ",
      slidesUrl: "#"
    },
    {
      id: "lec-3",
      title: "Lecture 08: Interpretability via SHAP, LIME & Integrated Gradients",
      courseCode: "CS-412 Trustworthy AI",
      duration: "60 mins",
      views: "24.6K Views",
      rating: "⭐ 4.9/5.0",
      topic: "Shapley Values in Game Theory & Model Attribution Bounds",
      youtubeId: "dQw4w9WgXcQ",
      slidesUrl: "#"
    }
  ] as VideoLectureItem[],

  alumniTestimonials: [
    {
      id: "alumni-1",
      name: "Dr. Vikramaditya Rao",
      degreeYear: "Ph.D. Graduate (2024)",
      currentRole: "Senior AI Scientist",
      organization: "Google DeepMind",
      location: "London, UK",
      quote: "Dr. Sharma's mentorship during my doctoral research was transformative. His relentless insistence on mathematical rigor combined with high-impact applications gave me the confidence to publish in top-tier journals and lead AI research at DeepMind.",
      avatarInitials: "VR"
    },
    {
      id: "alumni-2",
      name: "Dr. Kavita Singhania",
      degreeYear: "Ph.D. Graduate (2023)",
      currentRole: "Assistant Professor",
      organization: "Indian Institute of Technology (IIT), Bombay",
      location: "Mumbai, India",
      quote: "Professor Sharma is not just a world-class researcher; he is a master educator. Learning how to structure complex theoretical proofs and guide young researchers under his supervision laid the foundation for my academic career as a faculty member.",
      avatarInitials: "KS"
    },
    {
      id: "alumni-3",
      name: "Siddharth Sen",
      degreeYear: "M.Tech Alumni (2023)",
      currentRole: "Security Engineer & Researcher",
      organization: "Microsoft Research",
      location: "Redmond, WA, USA",
      quote: "The hands-on experience I gained in the AI-QIS Lab working on zero-knowledge smart grid protocols under Dr. Sharma was directly applicable to my research work at Microsoft. His guidance opens doors globally.",
      avatarInitials: "SS"
    }
  ] as AlumniTestimonialItem[],

  students: [
    {
      name: "Dr. Vikramaditya Rao",
      degree: "Ph.D.",
      thesisTitle: "Fact-Grounded Reasoning Systems in Large-Scale Language Models",
      year: "2024",
      status: "Graduated",
      currentRole: "Senior AI Scientist, Google DeepMind"
    },
    {
      name: "Dr. Kavita Singhania",
      degree: "Ph.D.",
      thesisTitle: "Differential Privacy Boundaries in Decentralized Federated Learning",
      year: "2023",
      status: "Graduated",
      currentRole: "Assistant Professor, IIT Bombay"
    },
    {
      name: "Rohan Mehta",
      degree: "Ph.D.",
      thesisTitle: "Dynamic Attention Pruning Techniques for Edge Neural Architectures",
      year: "2025 (Expected)",
      status: "Ongoing"
    },
    {
      name: "Priya Verma",
      degree: "Ph.D.",
      thesisTitle: "Variational Quantum Algorithms for High-Dimensional Graph Optimization",
      year: "2026 (Expected)",
      status: "Ongoing"
    },
    {
      name: "Siddharth Sen",
      degree: "M.Tech",
      thesisTitle: "Zero-Knowledge State Estimation Protocols in Industrial IoT",
      year: "2023",
      status: "Graduated",
      currentRole: "Security Engineer, Microsoft Research"
    }
  ] as Student[]
};
