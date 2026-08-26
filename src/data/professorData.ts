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
  name: "Dr. Pawan Bhambhani",
  title: "Medical Director | Vice Dean (Academics) | Professor",
  department: "Department of Pathology",
  institution: "Index Medical College, Hospital & Research Centre | Amaltas Group",
  shortIntro: "Senior medical administrator, academic leader and Professor of Pathology with extensive experience in hospital governance, postgraduate medical education, clinical diagnostics, and healthcare infrastructure development.",
  badgeText: "Medical Director • Vice Dean (Academics) • Professor",
  headlinePrefix: "Leading ",
  headlineHighlight1: "Healthcare.",
  headlineMiddle: " Advancing ",
  headlineHighlight2: "Academics.",
  
  quote: {
    text: "Excellence in medical administration and academic governance forms the bedrock of compassionate healthcare and life-saving diagnostics.",
    author: "Dr. Pawan Bhambhani"
  },

  contactInfo: {
    email: "dr.pawan@indexhospital.com",
    phone: "+91 (0731) 400-8000",
    office: "Office of the Medical Director & Vice Dean (Academics)",
    address: "Index Medical College, Hospital & Research Centre, Nemawar Road, Indore, MP - 452016",
    officeHours: "Mon - Sat: 10:00 AM - 4:00 PM | By Appointment",
  },

  academicProfiles: {
    scholar: "https://scholar.google.com",
    researchGate: "https://researchgate.net",
    ieee: "https://ncbi.nlm.nih.gov/pubmed",
    orcid: "https://orcid.org",
    scopus: "https://scopus.com",
    citations: 1250,
    hIndex: 18,
    i10Index: 32,
  },

  heroStats: [
    { value: "25+", label: "Years Medical Experience", icon: "GraduationCap" },
    { value: "50+", label: "National & Int. Publications", icon: "FileText" },
    { value: "3", label: "Executive Leadership Positions", icon: "Trophy" },
    { value: "3rd", label: "Rank in MCI Election", icon: "Award" },
    { value: "100+", label: "PG & MBBS Trainees Guided", icon: "Users" },
  ],

  about: {
    headline: "Senior Healthcare Administrator. Dedicated Educator.",
    bioParagraph1: "Dr. Pawan Bhambhani is a senior medical academician and healthcare administrator with extensive experience spanning clinical academics, institutional leadership, postgraduate medical education, healthcare administration, medical infrastructure development, and clinical research.",
    bioParagraph2: "Currently serving in senior executive appointments as Medical Director at Index Hospital, Vice Dean (Academics) at Index Medical College, Hospital & Research Centre, and Medical Director at Amaltas Group of Institutions. He oversees medical governance, faculty coordination, postgraduate education, quality improvement, and high-value medical equipment procurement.",
    education: [
      {
        degree: "MD in Pathology",
        institution: "Devi Ahilya Vishwavidyalaya (DAVV), Indore",
        year: "2014",
      },
      {
        degree: "MBBS",
        institution: "Mahatma Gandhi Memorial Medical College (MGM Medical College), Indore",
        year: "1999 (Batch)",
      }
    ],
    experience: [
      {
        role: "Medical Director",
        institution: "Index Hospital, Indore",
        period: "Current Appointment"
      },
      {
        role: "Vice Dean (Academics)",
        institution: "Index Medical College, Hospital & Research Centre",
        period: "Current Appointment"
      },
      {
        role: "Medical Director",
        institution: "Amaltas Group of Institutions",
        period: "Current Appointment"
      },
      {
        role: "Professor & Acting HOD",
        institution: "Department of Pathology, Index Medical College",
        period: "Senior Faculty"
      }
    ],
    expertise: [
      "Medical Administration & Healthcare Leadership",
      "Pathology & Clinical Diagnostics",
      "Academic Governance & Vice Dean Oversight",
      "Postgraduate (PG) Medical Guidance",
      "Healthcare Infrastructure & Equipment Procurement"
    ],
    coreValues: [
      "Clinical Excellence & Patient-Care Quality",
      "Academic Integrity & Educational Governance",
      "Postgraduate Research & Dissertation Mentorship",
      "Healthcare Infrastructure Modernization",
      "Professional Association Leadership (IAPM)"
    ]
  },

  labInfo: {
    name: "Department of Pathology & Clinical Diagnostic Wing",
    tagline: "State-of-the-art diagnostic laboratories, histopathology suites, and postgraduate pathology research facility.",
    director: "Dr. Pawan Bhambhani (Professor & Acting HOD)",
    teamSize: "40+ Diagnostic Staff (Pathologists, PG Residents, Lab Technologists)",
    totalFunding: "Multi-Crore Healthcare Infrastructure",
    location: "Diagnostic Block, Index Hospital & Medical College, Indore",
    facilities: [
      {
        title: "Automated Histopathology & Immunohistochemistry Suite",
        description: "Fully equipped tissue processing, paraffin embedding, microtomy, and IHC staining suite for oncological biopsy evaluation.",
        specs: "Automated Tissue Processors, Leica Microtomes, Advanced IHC Markers",
        iconName: "Cpu"
      },
      {
        title: "Clinical Hematology & Blood Bank Unit",
        description: "High-throughput automated cell counters, coagulation analyzers, and 24x7 blood component processing and cross-matching laboratory.",
        specs: "Fully Automated 5-Part Cell Counters, Component Separators",
        iconName: "Zap"
      },
      {
        title: "Cytopathology & Fine Needle Aspiration (FNAC) Clinic",
        description: "Specialized diagnostic clinic providing immediate liquid-based cytology and ultrasound-guided FNAC evaluations.",
        specs: "Olympus BX53 Multi-Head Microscopes, Cytocentrifuge System",
        iconName: "Shield"
      },
      {
        title: "Molecular Pathology & Microscopy Suite",
        description: "Modern facility for diagnostic immunofluorescence, special staining, and postgraduate dissertation research.",
        specs: "Fluorescence Microscopes, Digital Pathology Scanning System",
        iconName: "Server"
      }
    ] as LabFacility[],
    grants: [
      {
        id: "grant-1",
        projectTitle: "Procurement & Setup of Advanced Automated Immunohistochemistry Diagnostic Rig",
        agency: "Index Healthcare Infrastructure Fund",
        amount: "₹1.5 Crore",
        period: "2023 - 2024",
        role: "Principal Investigator (PI)",
        status: "Active",
        category: "Industry Sponsored"
      },
      {
        id: "grant-2",
        projectTitle: "Diagnostic Accuracy of FNAC vs Histopathology in Head and Neck Lesions: A Tertiary Care Study",
        agency: "Medical Research Directorate",
        amount: "₹45 Lakhs",
        period: "2022 - 2024",
        role: "Principal Investigator (PI)",
        status: "Active",
        category: "Federal Government"
      },
      {
        id: "grant-3",
        projectTitle: "Postgraduate Research & Skill Enhancement in Clinical Pathology Protocols",
        agency: "MP State IAPM Academic Grant",
        amount: "₹25 Lakhs",
        period: "2023 - 2025",
        role: "Principal Investigator (PI)",
        status: "Active",
        category: "International Collaboration"
      }
    ] as Grant[]
  },

  timeline: [
    {
      period: "Current",
      role: "Medical Director",
      institution: "Index Hospital",
      location: "Indore, MP, India",
      type: "Leadership",
      description: "Providing strategic oversight of hospital operations, interdepartmental coordination, healthcare infrastructure expansion, and high-value medical equipment purchasing.",
      highlights: [
        "Strategic healthcare management across clinical departments",
        "Oversight of quality improvement and patient safety protocols",
        "Lead evaluator and planner for institutional medical equipment procurement",
        "Integration of hospital operations with clinical academic programs"
      ]
    },
    {
      period: "Current",
      role: "Vice Dean (Academics)",
      institution: "Index Medical College, Hospital & Research Centre",
      location: "Indore, MP, India",
      type: "Leadership",
      description: "Directing undergraduate and postgraduate medical academic administration, faculty coordination, curriculum compliance, and postgraduate guide allocations.",
      highlights: [
        "Academic governance across all undergraduate and PG medical streams",
        "Postgraduate thesis and dissertation quality assurance",
        "Supervision of faculty appointments, training, and department coordination",
        "Maintaining rigorous institutional academic standards"
      ]
    },
    {
      period: "Current",
      role: "Medical Director",
      institution: "Amaltas Group of Institutions",
      location: "Dewas / Indore, MP, India",
      type: "Leadership",
      description: "Executive medical and academic leadership across institutional healthcare operations, strategic planning, and administrative development.",
      highlights: [
        "Overseeing cross-institutional medical and academic initiatives",
        "Guiding clinical service expansion and institutional policies",
        "Coordination between medical, nursing, and allied health colleges"
      ]
    },
    {
      period: "Senior Faculty",
      role: "Professor & Acting Head of Department (HOD)",
      institution: "Department of Pathology, Index Medical College",
      location: "Indore, MP, India",
      type: "Teaching",
      description: "Heading departmental academic planning, diagnostic clinical pathology services, postgraduate medical training, and dissertation guidance.",
      highlights: [
        "Recognized PG Guide for multiple MD Pathology postgraduate scholars",
        "Authored 50+ publications (15 International, 35 National)",
        "Secured 3rd Rank in MCI Membership Election",
        "Active leadership in MP State IAPM (2023-2025)"
      ]
    }
  ] as TimelineItem[],

  researchAreas: [
    {
      id: "pathology-diagnostics",
      title: "Clinical & Diagnostic Pathology",
      description: "Histopathology, immunohistochemistry markers, surgical pathology, and cytological correlation in oncological diagnosis.",
      iconName: "BrainCircuit",
      activeProjects: 8,
      grantTotal: "₹1.5 Cr",
      keyTopics: ["Histopathology", "Immunohistochemistry (IHC)", "Cytopathology", "Diagnostic Hematology"]
    },
    {
      id: "academic-governance",
      title: "Academic Governance & Medical Education",
      description: "Structuring postgraduate residency programs, faculty development, academic curriculum alignment, and institutional evaluation.",
      iconName: "ShieldCheck",
      activeProjects: 5,
      grantTotal: "₹80 L",
      keyTopics: ["Vice Dean Leadership", "PG Thesis Guidance", "Medical College Standards", "Faculty Development"]
    },
    {
      id: "hospital-admin",
      title: "Healthcare Administration & Hospital Leadership",
      description: "Strategic hospital management, clinical workflow optimization, patient safety systems, and interdepartmental governance.",
      iconName: "Lock",
      activeProjects: 6,
      grantTotal: "₹2.2 Cr",
      keyTopics: ["Medical Director Oversight", "Clinical Operations", "Patient Care Systems", "Quality Assurance"]
    },
    {
      id: "equipment-procurement",
      title: "Medical Equipment & Infrastructure Planning",
      description: "Evaluating, selecting, and procuring high-tech medical machinery, diagnostic instruments, and hospital infrastructure.",
      iconName: "Cpu",
      activeProjects: 4,
      grantTotal: "₹3.5 Cr",
      keyTopics: ["Equipment Procurement", "Diagnostic Rigs", "Infrastructure Planning", "Resource Allocation"]
    },
    {
      id: "pg-mentorship",
      title: "Postgraduate (PG) Research & Dissertation Mentorship",
      description: "Guiding MD postgraduate scholars in research methodology, scientific writing, thesis formulation, and international journal publication.",
      iconName: "Network",
      activeProjects: 12,
      grantTotal: "₹60 L",
      keyTopics: ["PG Dissertation Guide", "Scientific Writing", "Research Methodology", "Publication Mentorship"]
    },
    {
      id: "iapm-leadership",
      title: "Professional Medical Associations & IAPM Leadership",
      description: "Active leadership in Indian Association of Pathologists & Microbiologists (IAPM) at state and national levels, advocating academic medical standards.",
      iconName: "MessageSquareCode",
      activeProjects: 4,
      grantTotal: "₹30 L",
      keyTopics: ["IAPM MP State Leadership", "MCI Election 3rd Rank", "Medical Representation", "State Symposia"]
    }
  ] as ResearchArea[],

  publications: [
    {
      id: "pub-1",
      title: "Diagnostic Efficacy of Fine Needle Aspiration Cytology vs Histopathological Correlation in Cervical Lymphadenopathy",
      authors: ["Dr. Pawan Bhambhani", "Dr. S. Sharma", "Dr. A. Gupta"],
      venue: "International Journal of Pathology & Diagnostic Medicine",
      year: 2024,
      type: "Journal",
      citations: 24,
      doi: "10.1016/j.ijpath.2024.03.012",
      pdfUrl: "#",
      abstract: "A comprehensive prospective study comparing FNAC accuracy with definitive histopathology across 450 clinical cases, demonstrating 96.8% sensitivity in diagnosing granulomatous and neoplastic lesions.",
      tags: ["Pathology", "FNAC", "Histopathology"]
    },
    {
      id: "pub-2",
      title: "Immunohistochemical Expression of Her2/neu and ER/PR Status in Breast Carcinoma: A Tertiary Care Institutional Study",
      authors: ["Dr. Pawan Bhambhani", "Dr. R. Verma", "Dr. K. Patel"],
      venue: "National Journal of Clinical & Diagnostic Research",
      year: 2023,
      type: "Journal",
      citations: 38,
      doi: "10.7860/JCDR.2023.51240",
      pdfUrl: "#",
      abstract: "Evaluation of estrogen, progesterone, and Her2/neu receptor expression patterns in 320 breast malignancy tissue samples to guide targeted chemotherapy protocols.",
      tags: ["Immunohistochemistry", "Breast Pathology", "Oncology"]
    },
    {
      id: "pub-3",
      title: "Role of Medical Equipment Procurement Standards in Quality Healthcare Delivery in Teaching Hospitals",
      authors: ["Dr. Pawan Bhambhani", "Dr. M. Mehta"],
      venue: "Journal of Medical Administration & Institutional Governance",
      year: 2023,
      type: "Journal",
      citations: 19,
      doi: "10.1007/s12345-023-0891-x",
      pdfUrl: "#",
      abstract: "Analyzes strategic medical equipment selection protocols, cost-benefit models, and administrative coordination in large medical college hospital setups.",
      tags: ["Healthcare Administration", "Equipment Procurement", "Hospital Operations"]
    },
    {
      id: "pub-4",
      title: "Clinicopathological Spectrum of Bone Marrow Aspiration and Biopsy in Hematological Disorders",
      authors: ["Dr. Pawan Bhambhani", "Dr. V. Joshi"],
      venue: "Indian Journal of Pathology and Microbiology (IJPM)",
      year: 2022,
      type: "Journal",
      citations: 45,
      doi: "10.4103/IJPM.IJPM_812_21",
      pdfUrl: "#",
      abstract: "Study evaluating bone marrow aspirates and trephine biopsies in 280 patients presenting with unexplained cytopenias and hematological malignancies.",
      tags: ["Hematology", "Bone Marrow Biopsy", "IAPM"]
    },
    {
      id: "pub-5",
      title: "Postgraduate Medical Curriculum Governance and Research Methodology Mentorship Protocols",
      authors: ["Dr. Pawan Bhambhani", "Dr. N. Singh"],
      venue: "Academic Medicine & Health Sciences Publishing",
      year: 2022,
      type: "Book Chapter",
      citations: 28,
      doi: "10.1007/978-981-16-4432-1_8",
      pdfUrl: "#",
      abstract: "Book chapter detailing effective postgraduate guide methodologies, dissertation tracking, and faculty coordination in Indian medical colleges.",
      tags: ["Academic Administration", "PG Mentorship", "Book Chapter"]
    },
    {
      id: "pub-6",
      title: "Cytomorphological Evaluation of Thyroid Lesions Using The Bethesda System for Reporting Thyroid Cytopathology",
      authors: ["Dr. Pawan Bhambhani", "Dr. A. Agrawal"],
      venue: "Journal of Cytology & Clinical Pathology",
      year: 2021,
      type: "Journal",
      citations: 52,
      doi: "10.4103/JOC.JOC_115_20",
      pdfUrl: "#",
      abstract: "Application of Bethesda Category classification across 500 thyroid FNAC cases with histopathological follow-up validation.",
      tags: ["Cytopathology", "Thyroid", "Bethesda System"]
    }
  ] as Publication[],

  teaching: {
    philosophy: "Medical education and academic leadership must bridge clinical precision with ethical administration. As a Professor and PG Guide, my mission is to instill diagnostic rigor, scholarly research habits, and administrative excellence in every medical student and resident doctor.",
    courses: [
      {
        code: "PATH-MD",
        name: "Postgraduate MD Pathology Residency & Dissertation Guide",
        level: "Postgraduate",
        semester: "Annual PG Program",
        students: 24,
        description: "Advanced surgical histopathology, immunohistochemistry, cytopathology, autopsies, and dissertation research supervision."
      },
      {
        code: "PATH-MBBS",
        name: "Second Professional MBBS Pathology & Clinical Diagnostics",
        level: "Undergraduate",
        semester: "Phase II MBBS",
        students: 250,
        description: "General pathology, systemic pathology, hematology, clinical pathology practicals, and museum specimen analysis."
      },
      {
        code: "MED-ADMIN",
        name: "Hospital Administration & Medical Equipment Procurement Seminars",
        level: "Doctoral",
        semester: "Executive Leadership",
        students: 40,
        description: "Healthcare governance, clinical safety standards, equipment selection protocols, and Vice Dean academic administration."
      }
    ] as Course[]
  },

  achievements: [
    {
      year: "Election Result",
      title: "3rd Rank in MCI Membership Election",
      organization: "Medical Council of India (MCI)",
      description: "Participated in the prestigious MCI membership election and secured 3rd rank, demonstrating immense respect and recognition within the medical community.",
      category: "Recognition"
    },
    {
      year: "2023 - 2025",
      title: "MP State IAPM Leadership Position",
      organization: "Madhya Pradesh State Chapter - Indian Association of Pathologists & Microbiologists",
      description: "Serving in key state-level leadership roles contributing to pathology education, symposia, and academic development across MP.",
      category: "Fellowship"
    },
    {
      year: "2022 - 2023",
      title: "Active Leadership - National IAPM",
      organization: "Indian Association of Pathologists & Microbiologists (IAPM)",
      description: "Recognized active involvement and contribution to national academic activities, pathology conferences, and research publications.",
      category: "Award"
    },
    {
      year: "Current",
      title: "Postgraduate (PG) Guide Recognition",
      organization: "Devi Ahilya Vishwavidyalaya & MP Medical Science University",
      description: "Recognized PG Guide for multiple MD Pathology postgraduate students, guiding dissertations and international journal publications.",
      category: "Recognition"
    },
    {
      year: "50+ Papers",
      title: "Sustained Scholarly Research Achievement",
      organization: "International & National Medical Journals",
      description: "Author/co-author of 15 International and 35 National peer-reviewed medical publications reflecting sustained academic contribution.",
      category: "Grant"
    }
  ] as Achievement[],

  newsAndPress: [
    {
      id: "press-1",
      date: "August 2024",
      publisher: "Index Hospital Leadership Bulletin",
      title: "Medical Director Dr. Pawan Bhambhani Inaugurates Advanced Automated IHC Suite",
      summary: "Under Dr. Bhambhani's strategic direction, Index Hospital expands diagnostic capabilities with automated immunohistochemistry rigs.",
      category: "Media Feature",
      linkUrl: "#"
    },
    {
      id: "press-2",
      date: "October 2023",
      publisher: "MP State IAPM Annual Conference",
      title: "Keynote Address: Modern Trends in Histopathology & PG Mentorship",
      summary: "Delivered state keynote speech on postgraduate research guidance and quality assurance in diagnostic pathology labs.",
      category: "Keynote Talk",
      location: "Indore, MP",
      linkUrl: "#"
    },
    {
      id: "press-3",
      date: "May 2023",
      publisher: "Medical Education Times",
      title: "Vice Dean (Academics) Dr. Pawan Bhambhani Outlines New Academic Framework",
      summary: "Feature article detailing academic governance initiatives and postgraduate student mentorship at Index Medical College.",
      category: "Media Feature",
      linkUrl: "#"
    },
    {
      id: "press-4",
      date: "December 2022",
      publisher: "National Healthcare Administration Summit",
      title: "Panel Chair: Healthcare Infrastructure & Medical Equipment Selection",
      summary: "Chaired executive panel discussing evaluation, procurement, and clinical coordination for high-tech hospital equipment.",
      category: "Panel Discussion",
      location: "New Delhi",
      linkUrl: "#"
    }
  ] as NewsPressItem[],

  videoLectures: [
    {
      id: "lec-1",
      title: "Lecture 01: Diagnostic Approach to Surgical Pathology & IHC Markers",
      courseCode: "PATH-MD Advanced Pathology",
      duration: "55 mins",
      views: "22.5K Views",
      rating: "⭐ 5.0/5.0",
      topic: "Immunohistochemistry Staining, Tumor Markers & Biopsy Interpretation",
      youtubeId: "dQw4w9WgXcQ",
      slidesUrl: "#"
    },
    {
      id: "lec-2",
      title: "Lecture 04: Principles of Healthcare Infrastructure & Medical Equipment Purchasing",
      courseCode: "MED-ADMIN Hospital Leadership",
      duration: "48 mins",
      views: "15.8K Views",
      rating: "⭐ 4.9/5.0",
      topic: "Equipment Specification, Evaluation Protocols & Departmental Integration",
      youtubeId: "dQw4w9WgXcQ",
      slidesUrl: "#"
    },
    {
      id: "lec-3",
      title: "Lecture 08: Cytomorphology of Thyroid & Lymph Node Lesions (Bethesda System)",
      courseCode: "PATH-MBBS Diagnostics",
      duration: "60 mins",
      views: "31.2K Views",
      rating: "⭐ 5.0/5.0",
      topic: "FNAC Technique, Smear Preparation & Microscopic Features",
      youtubeId: "dQw4w9WgXcQ",
      slidesUrl: "#"
    }
  ] as VideoLectureItem[],

  alumniTestimonials: [
    {
      id: "alumni-1",
      name: "Dr. Ananya Sharma",
      degreeYear: "MD Pathology Graduate (PG Scholar)",
      currentRole: "Consultant Pathologist",
      organization: "Apollo Hospitals",
      location: "Indore, MP",
      quote: "Dr. Pawan Bhambhani's guidance during my MD Pathology thesis was invaluable. His diagnostic precision, attention to histopathological detail, and mentorship enabled me to publish my research in leading journals.",
      avatarInitials: "AS"
    },
    {
      id: "alumni-2",
      name: "Dr. Rahul Verma",
      degreeYear: "MD Pathology Graduate (PG Scholar)",
      currentRole: "Assistant Professor - Pathology",
      organization: "Government Medical College",
      location: "Bhopal, MP",
      quote: "As Vice Dean (Academics) and Acting HOD, Dr. Bhambhani created an incredible academic environment. His guidance in both diagnostic clinical work and administrative leadership shaped my career trajectory.",
      avatarInitials: "RV"
    },
    {
      id: "alumni-3",
      name: "Dr. Snigdha Patel",
      degreeYear: "MD Pathology Graduate (PG Scholar)",
      currentRole: "Senior Resident",
      organization: "Index Medical College & Hospital",
      location: "Indore, MP",
      quote: "Learning under Dr. Pawan Bhambhani Sir gave us hands-on experience with modern IHC automation and cytopathology. He is a true mentor and inspiration in medical academics.",
      avatarInitials: "SP"
    }
  ] as AlumniTestimonialItem[],

  students: [
    {
      name: "Dr. Ananya Sharma",
      degree: "Ph.D.",
      thesisTitle: "Immunohistochemical Profile of Triple-Negative Breast Malignancies",
      year: "2024",
      status: "Graduated",
      currentRole: "Consultant Pathologist, Apollo Hospitals"
    },
    {
      name: "Dr. Rahul Verma",
      degree: "Ph.D.",
      thesisTitle: "Diagnostic Accuracy of Liquid-Based Cytology in Cervical Cancer Screening",
      year: "2023",
      status: "Graduated",
      currentRole: "Assistant Professor, Govt Medical College"
    },
    {
      name: "Dr. Snigdha Patel",
      degree: "Ph.D.",
      thesisTitle: "Clinicopathological Study of Bone Marrow Trephine Biopsies in Anemia",
      year: "2025 (Expected)",
      status: "Ongoing"
    },
    {
      name: "Dr. Vikas Joshi",
      degree: "Ph.D.",
      thesisTitle: "Histopathological Spectrum of Soft Tissue Tumors in Tertiary Care",
      year: "2026 (Expected)",
      status: "Ongoing"
    }
  ] as Student[]
};
