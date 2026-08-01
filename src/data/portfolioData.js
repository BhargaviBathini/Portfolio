export const portfolioData = {
  hero: {
    name: "Bhargavi Bathini",
    title: "AI & Machine Learning Enthusiast",
    tagline: "Bridging Cutting-Edge Research with Production-Grade Intelligent Systems.",
    aboutParagraphs: [
      "I am an AI & Machine Learning Enthusiast passionate about transforming cutting-edge research into intelligent, scalable solutions. My work spans machine learning, computer vision, large language models, retrieval-augmented generation (RAG), and agentic AI, with a focus on building systems that solve real-world problems through practical engineering.",
      "From developing hyperbolic neural networks for medical image analysis to architecting enterprise AI platforms, multilingual language technologies, and intelligent AI applications, I enjoy designing solutions that bridge research and production.",
      "Beyond development, I actively explore emerging AI technologies through research, hackathons, cloud platforms, open-source contributions, and continuous learning."
    ],
    actionButtons: [
      { label: "Get In Touch", href: "#contact", variant: "primary" },
      { label: "Explore Projects", href: "#projects", variant: "outline" }
    ]
  },

  skills: {
    categories: [
      { id: "all", label: "All Skills" },
      { id: "languages", label: "Programming Languages" },
      { id: "aiml", label: "AI / ML / Deep Learning" },
      { id: "webdev", label: "Web Development" },
      { id: "databases", label: "Databases" },
      { id: "cloudtools", label: "Cloud & Tools" },
      { id: "datavis", label: "Data Visualization" },
      { id: "coursework", label: "Core Coursework" }
    ],
    items: [
      // Programming Languages
      { name: "Python", category: "languages", icon: "Code2", context: "Primary language for PyTorch, Whisper ASR, DenseNet121, and Viswam.AI LLM pipelines." },
      { name: "Java", category: "languages", icon: "Coffee", context: "Built OOP data structures & algorithmic problem solving applications." },
      { name: "C++", category: "languages", icon: "Cpu", context: "Optimized core DSA performance and solved 200+ LeetCode problems." },
      { name: "C", category: "languages", icon: "Terminal", context: "Used for foundational low-level programming & memory management." },
      { name: "R", category: "languages", icon: "Binary", context: "Performed statistical data modeling and exploratory analysis." },

      // AI / ML / Deep Learning
      { name: "Large Language Models (LLMs)", category: "aiml", icon: "Brain", context: "Architected Telugu-centric NLU & ASR transformer pipelines at Viswam.AI." },
      { name: "Natural Language Processing (NLP)", category: "aiml", icon: "MessageSquareText", context: "Fine-tuned multilingual transformer models, boosting F1-score by 4%." },
      { name: "Retrieval-Augmented Generation (RAG)", category: "aiml", icon: "SearchCode", context: "Engineered Vibe Navigator travel engine with 80% personalization accuracy." },
      { name: "Agentic AI", category: "aiml", icon: "Bot", context: "Orchestrated multi-agent decision intelligence in Catalyst AI platform." },
      { name: "LangChain", category: "aiml", icon: "Workflow", context: "Built LLM chain orchestration for multi-agent financial co-pilot." },
      { name: "LangGraph", category: "aiml", icon: "GitFork", context: "Orchestrated multi-agent decision intelligence in Catalyst AI." },
      { name: "CrewAI", category: "aiml", icon: "Users", context: "Designed multi-agent role collaboration for enterprise forecasting." },
      { name: "n8n", category: "aiml", icon: "Zap", context: "Built automated workflow integrations for AI payload routing." },
      { name: "PyTorch", category: "aiml", icon: "Flame", context: "Implemented Lorentz model hyperbolic embeddings for chest abnormality classification." },
      { name: "TensorFlow", category: "aiml", icon: "Layers", context: "Trained ML models for Crop Care Management disease diagnosis (92% accuracy)." },
      { name: "Computer Vision", category: "aiml", icon: "Eye", context: "Integrated DenseNet121 & Grad-CAM for clinical interpretability on chest X-rays." },

      // Web Development
      { name: "React.js", category: "webdev", icon: "Atom", context: "Engineered interactive spatial glass UI for Catalyst AI & Crop Care System." },
      { name: "Next.js", category: "webdev", icon: "Globe", context: "Built Vibe Navigator intelligent discovery platform with shadcn/ui." },
      { name: "Node.js", category: "webdev", icon: "Server", context: "Developed backend microservices for Blood Bank & Finance Agent systems." },
      { name: "Express.js", category: "webdev", icon: "Network", context: "Built RESTful API endpoints and authentication for full-stack platforms." },
      { name: "JavaScript", category: "webdev", icon: "FileCode", context: "Built interactive web applications and e-commerce sustainability extension." },
      { name: "HTML", category: "webdev", icon: "Layout", context: "Structured semantic accessibility across web applications." },
      { name: "CSS", category: "webdev", icon: "Palette", context: "Designed custom Glassmorphism UI tokens and spatial responsiveness." },
      { name: "Bootstrap", category: "webdev", icon: "Component", context: "Created responsive grid layouts for web applications." },

      // Databases
      { name: "PostgreSQL", category: "databases", icon: "Database", context: "Engineered relational schema and transactional data storage." },
      { name: "MySQL", category: "databases", icon: "HardDrive", context: "Designed relational database models and optimized SQL queries." },
      { name: "MongoDB", category: "databases", icon: "FileSpreadsheet", context: "Configured document database schemas for Finance Agent co-pilot." },
      { name: "VectorDB (Pinecone)", category: "databases", icon: "Boxes", context: "Engineered semantic search engine doubling doc processing at Viswam.AI." },

      // Cloud & Tools
      { name: "Google Cloud Platform (GCP)", category: "cloudtools", icon: "Cloud", context: "Earned 10+ Skill Badges and accumulated 9,000+ points in cloud architecture labs." },
      { name: "Google Agent Development Kit", category: "cloudtools", icon: "Wrench", context: "Explored generative AI agents and Vertex AI API integrations." },
      { name: "Git", category: "cloudtools", icon: "GitBranch", context: "Maintained clean commit history and version control across repositories." },
      { name: "GitHub", category: "cloudtools", icon: "Github", context: "Contributed open-source code across 2x GSSoC editions & maintained 10+ repos." },
      { name: "Postman", category: "cloudtools", icon: "Send", context: "Tested RESTful API endpoints and multi-agent payload responses." },
      { name: "Firebase", category: "cloudtools", icon: "Flame", context: "Configured real-time authentication and database synchronization." },
      { name: "Figma", category: "cloudtools", icon: "Figma", context: "Designed spatial Glassmorphism UI wireframes and component layouts." },

      // Data Visualization
      { name: "Matplotlib", category: "datavis", icon: "BarChart3", context: "Visualized training loss curves and medical AUROC performance charts." },
      { name: "Seaborn", category: "datavis", icon: "LineChart", context: "Plotted statistical heatmaps for multi-label abnormality correlation." },
      { name: "Plotly", category: "datavis", icon: "PieChart", context: "Created interactive 3D spatial data visualizations and analytical plots." },
      { name: "Tableau", category: "datavis", icon: "AreaChart", context: "Built executive dashboards for data-driven analytics." },
      { name: "PowerBI", category: "datavis", icon: "TrendingUp", context: "Designed corporate analytics report dashboards." },
      { name: "Grafana", category: "datavis", icon: "Activity", context: "Monitored real-time system throughput and model latency metrics." },

      // Core Coursework
      { name: "Data Structures & Algorithms", category: "coursework", icon: "BookOpen", context: "Solved 200+ algorithmic problems on LeetCode with optimal space/time complexity." },
      { name: "Machine Learning & Deep Learning", category: "coursework", icon: "Sparkles", context: "Selected among Top 2.23% candidates in Amazon ML Summer School." },
      { name: "Object-Oriented Programming", category: "coursework", icon: "Box", context: "Applied SOLID principles and modular software architecture design." },
      { name: "Database Management Systems", category: "coursework", icon: "Database", context: "Designed ACID-compliant schemas and optimized query indexing." },
      { name: "Computer Networks", category: "coursework", icon: "Wifi", context: "Understood TCP/IP networking, HTTP protocols, and OAuth2 security." },
      { name: "Operating Systems", category: "coursework", icon: "Terminal", context: "Studied process concurrency, multi-threading, and memory allocation." },
      { name: "Big Data & Analytics", category: "coursework", icon: "BarChart4", context: "Analyzed large-scale dataset pipelines and parallel processing." }
    ]
  },

  codePhilosophy: [
    {
      letter: "C",
      title: "Communicate & Collaborate",
      quote: "Great innovation is never built alone. I believe in clear communication, active listening, and collaborative problem-solving to create stronger, more impactful solutions.",
      gradient: "from-cyan-500 to-blue-600",
      accent: "cyan"
    },
    {
      letter: "O",
      title: "Own the Outcome",
      quote: "I believe ownership means more than completing tasks—it means taking responsibility for decisions, learning from setbacks, and ensuring every commitment is fulfilled with integrity.",
      gradient: "from-purple-500 to-indigo-600",
      accent: "purple"
    },
    {
      letter: "D",
      title: "Dare to Solve",
      quote: "I embrace complex challenges with confidence, curiosity, and adaptability, turning uncertainty into opportunities for innovation.",
      gradient: "from-emerald-500 to-teal-600",
      accent: "emerald"
    },
    {
      letter: "E",
      title: "Evolve Every Day",
      quote: "Technology never stands still, and neither do I. I continuously learn, experiment, and grow through research, hands-on building, and real-world experiences.",
      gradient: "from-amber-500 to-rose-600",
      accent: "amber"
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Information Technology",
      duration: "2023 – 2027",
      institution: "VNR Vignana Jyothi Institute of Engineering & Technology",
      location: "Hyderabad, India",
      metricLabel: "CGPA",
      metricValue: "9.25 / 10.0",
      badge: "B.Tech IT",
      icon: "GraduationCap"
    },
    {
      degree: "Telangana State Board of Intermediate Education",
      duration: "2021 – 2023",
      institution: "SR Junior College",
      location: "Warangal, India",
      metricLabel: "Percentage",
      metricValue: "98.9%",
      badge: "Intermediate (10+2)",
      icon: "School"
    },
    {
      degree: "Telangana State Board of Secondary Education",
      duration: "2021",
      institution: "Shine High School",
      location: "Warangal, India",
      metricLabel: "CGPA",
      metricValue: "10.0 / 10.0",
      badge: "Class X SSC",
      icon: "Award"
    }
  ],

  projects: [
    {
      category: "ML Related Projects",
      items: [
        {
          title: "Hyperbolic Deep Neural Networks for Chest Abnormalities Classification",
          description: "Developed an AI-assisted diagnostic pipeline leveraging DenseNet121 and Lorentz hyperbolic space embeddings to accurately classify multi-label thoracic abnormalities from chest X-rays, significantly improving minority-class detection.",
          highlights: [
            "Euclidean Baseline Accuracy: 92.2%",
            "AUROC boosted from 0.7301 → 0.7627",
            "Recall improved from 18.75% → 37.50%",
            "F1-Score improved from 0.1712 → 0.1929",
            "Grad-CAM integration for clinical interpretability",
            "Interactive Streamlit deployment"
          ],
          techStack: ["PyTorch", "DenseNet121", "Hyperbolic Embeddings (Lorentz Model)", "Grad-CAM", "Streamlit", "Python"],
          links: [
            { type: "github", label: "GitHub Repository", url: "https://github.com/BhargaviBathini/Hyperbolic-Deep-Neural-Networks/" }
          ]
        },
        {
          title: "Crop Care Management System",
          tagline: "Smart Agriculture & Sustainable Future",
          description: "Developed an AI-powered crop management application using MERN stack with Machine Learning-based disease detection, real-time weather tracking, and yield predictive modeling.",
          highlights: [
            "Achieved 92% accuracy on ML-based crop disease diagnosis",
            "Real-time weather tracking and yield predictive modeling",
            "Seamless MERN stack + Python ML integration"
          ],
          techStack: ["React.js", "Tailwind CSS", "TensorFlow.js", "Flask", "Google Cloud API", "Machine Learning Models"],
          links: [
            { type: "github", label: "GitHub Repository", url: "https://github.com/BhargaviBathini/Crop-care" },
            { type: "demo", label: "Demo Video", url: "https://drive.google.com/file/d/1k8C0zdBnh8V4ZpSxK52ROaPtrg2-xiMh/view?usp=drive_link" }
          ]
        }
      ]
    },
    {
      category: "AI Related Projects",
      items: [
        {
          title: "Catalyst AI | Enterprise Agentic Decision Intelligence Platform",
          description: "Production-grade enterprise platform orchestrating multi-agent decision intelligence workflows to automate operational research and corporate forecasting.",
          techStack: ["LangGraph", "Agentic AI", "React.js", "Node.js", "Python", "Vector DB", "Render"],
          links: [
            { type: "live", label: "Live Platform", url: "https://catalyst-ai-frontend.onrender.com/" },
            { type: "github", label: "GitHub Repository", url: "https://github.com/BhargaviBathini/Enterprise-Decision-Intelligence-Platform" },
            { type: "docs", label: "Documentation", url: "https://docs.google.com/document/d/1O6ABBCV75ecZHhpNmfKc7glwhO6DewdWO2vvZa9aJG4/edit?usp=sharing" },
            { type: "architecture", label: "Architecture Diagram", url: "https://drive.google.com/file/d/1u6himv9s0vxrseh_eytOqRAqanBsbSU4/view?usp=drive_link" }
          ]
        },
        {
          title: "Vibe Navigator — Discover Places That Match Your Vibe",
          description: "Intelligent travel discovery platform that analyzes user context and crowd-sourced insights to deliver highly relevant recommendations, improving personalization accuracy by 80% using a custom Vibe Match algorithm.",
          techStack: ["Next.js", "Gemini LLM", "RAG", "Sentiment Analysis", "BeautifulSoup", "Google Places API", "Distance Matrix API", "Geocoding API", "shadcn/ui"],
          links: [
            { type: "github", label: "GitHub Repository", url: "https://github.com/BhargaviBathini/vibeNavigator" },
            { type: "demo", label: "Demo Video", url: "https://drive.google.com/file/d/1lScMLxuPdP2WOVRZpRvc8Z-6Yi462dJx/view?usp=sharing" }
          ]
        },
        {
          title: "Finance Agent — Secure AI Financial Co-Pilot",
          description: "Autonomous multi-agent system integrating 10+ financial data streams across banking and investments, performing real-time transaction analysis, anomaly detection, and predictive financial forecasting to deliver intelligent, personalized money insights.",
          techStack: ["LangGraph", "React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "OpenAI", "FinGPT", "PyTorch", "Plaid API", "OAuth2", "JWT", "AES-256", "D3.js/Chart.js", "Twilio", "Firebase"],
          links: [
            { type: "github", label: "GitHub Repository", url: "https://github.com/BhargaviBathini/FinanceAgent" },
            { type: "demo", label: "Demo Video", url: "https://drive.google.com/file/d/1V5jkNbjYZpbwClxIGsIOXNgjS9dPdFer/view?usp=drivesdk" }
          ]
        }
      ]
    },
    {
      category: "Full Stack Projects",
      items: [
        {
          title: "Blood Donation Management System",
          description: "Comprehensive web application designed to connect blood donors directly with local emergency requests, managing donor registries, location tracking, and real-time inventory updates.",
          techStack: ["Node.js", "Express.js", "MongoDB", "JavaScript", "HTML/CSS"],
          links: [
            { type: "github", label: "GitHub Repository", url: "https://github.com/BhargaviBathini/Blood-Bank-Webathon" },
            { type: "demo", label: "Demo Video", url: "https://drive.google.com/file/d/1oHXr3N5LtxFE0u9S3h9Hr2YpBcN5sZmQ/view?usp=drive_link" }
          ]
        },
        {
          title: "EcoMart — Local Sustainability Scoring System",
          description: "Sustainability scoring platform that calculates real-time environmental impact metrics for products during e-commerce browsing.",
          techStack: ["JavaScript", "Python", "JSON Mapping", "Node.js", "HTML/CSS"],
          links: [
            { type: "github", label: "GitHub Repository", url: "https://github.com/BhargaviBathini/ecoMart" }
          ]
        }
      ]
    },
    {
      category: "Python Projects",
      items: [
        {
          title: "Multilingual Audio and Video Dubbing System",
          tagline: "Unifying Sounds, Amplifying Reach",
          description: "Engineered multilingual AI dubbing system that automatically translates and synchronizes audio/video content across 200+ languages with support for multiple media formats.",
          techStack: ["Python", "Whisper ASR", "NLLB-200", "gTTS", "FFmpeg", "Pydub", "Hugging Face Hub", "Gradio"],
          links: [
            { type: "github", label: "GitHub Repository", url: "https://github.com/BhargaviBathini/AI-DUBBING" },
            { type: "demo", label: "Demo Video", url: "https://drive.google.com/file/d/1fq1l186QdEy9iAlZrgJOBIbkz1Tu2jkk/view?usp=sharing" }
          ]
        }
      ]
    }
  ],

  internship: {
    role: "AI Developer Intern",
    company: "Viswam.AI",
    duration: "May 2025 – October 2025",
    metrics: [
      { label: "Data Latency Reduced", value: 40, suffix: "%" },
      { label: "Query Response Boost", value: 20, suffix: "%" },
      { label: "Doc Processing Rate", value: 2, suffix: "x" },
      { label: "Sentiment F1-Score", value: 4, suffix: "%", prefix: "+" }
    ],
    responsibilities: [
      "Architected Telugu-centric LLM pipelines integrating NLU, ASR, and transformer models, reducing data preprocessing latency by 40% and improving multilingual throughput across 5+ datasets.",
      "Engineered high-performance semantic search with Pinecone vector databases, improving query response time by 20% and doubling daily document processing for large-scale NLP research.",
      "Improved sentiment analysis F1-score by 4% via data augmentation and fine-tuning of multilingual transformer models for production-grade AI systems."
    ]
  },

  certifications: [
    {
      category: "AI & Machine Learning Certifications & Skill Badges",
      items: [
        { title: "GenAI with AWS", issuer: "Udacity", url: "https://www.udacity.com/certificate/e/b0959c26-6405-11f0-a478-bbff68360a56", type: "Certificate" },
        { title: "Become AI Engineer", issuer: "Google Cloud & Hack2Skill", url: "https://certificate.hack2skill.com/legacy/2025H2S04GENAI-A1000508", type: "Certificate" },
        { title: "Inspect Rich Documents with Gemini Multimodality & Multimodal RAG", issuer: "Google Cloud", url: "https://www.credly.com/badges/d95398fb-cddd-4dd8-a59e-d12f80ed00ec/linked_in_profile", type: "Skill Badge" },
        { title: "Explore Generative AI with the Vertex AI Gemini API", issuer: "Google Cloud", url: "https://www.credly.com/badges/9aa5c072-b447-44f9-80d5-dfb80381981f/linked_in_profile", type: "Skill Badge" },
        { title: "Build Real World AI Applications with Gemini and Imagen", issuer: "Google Cloud", url: "https://www.credly.com/badges/4df311de-d7c1-4126-9d6b-d5ce3a325b48/linked_in_profile", type: "Skill Badge" },
        { title: "Develop GenAI Apps with Gemini and Streamlit", issuer: "Google Cloud", url: "https://www.credly.com/badges/dee3c120-1a47-4214-9a57-165f9103cac8/linked_in_profile", type: "Skill Badge" },
        { title: "Prompt Design in Vertex AI", issuer: "Google Cloud", url: "https://www.credly.com/badges/c2e804ad-cd35-4552-b7f0-b7d0ee779d68/linked_in_profile", type: "Skill Badge" },
        { title: "Supervised Machine Learning", issuer: "Andrew Ng & Coursera", url: "https://www.coursera.org/account/accomplishments/verify/KCYC8PXGD37R", type: "Certificate" },
        { title: "AWS Educate Machine Learning Foundations", issuer: "AWS", url: "https://www.credly.com/badges/0637f69c-6112-4a32-b90b-54b3e9e44ce5/linked_in_profile", type: "Badge" },
        { title: "Maths for Machine Learning", issuer: "Coursera", url: "https://www.coursera.org/account/accomplishments/verify/2KP6L2NJFPWG", type: "Certificate" }
      ]
    },
    {
      category: "Programming Essentials",
      items: [
        { title: "PCAP - Programming Essentials in Python", issuer: "Cisco Networking Academy", url: "https://www.netacad.com/certificates?issuanceId=4abea1b0-55e4-40d5-adec-b904d377c54d", type: "Certificate" },
        { title: "JavaScript Essentials 1", issuer: "Cisco Networking Academy", url: "https://www.netacad.com/certificates?issuanceId=8d440c59-f8ec-40f3-8dfe-13c68ba4f4c9", type: "Certificate" },
        { title: "JavaScript Essentials 2", issuer: "Cisco Networking Academy", url: "https://www.netacad.com/certificates?issuanceId=9e88d74b-fbac-4d8e-9a02-f366137a6305", type: "Certificate" }
      ]
    },
    {
      category: "CyberSecurity Certifications",
      items: [
        { title: "Fundamentals of Cybersecurity", issuer: "Zscaler", url: "https://verify.skilljar.com/c/k8dkcpdn6we3", type: "Certificate" },
        { title: "Introduction to Networking by Cybersecurity Professional Course", issuer: "Zscaler", url: "https://verify.skilljar.com/c/2obkefy6pzjn", type: "Certificate" }
      ]
    },
    {
      category: "Oracle Certifications",
      items: [
        { title: "Oracle Cloud Developer Certified Professional", issuer: "Oracle", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=9B92799866DA15138B9A8880DCDED4588461D249702484DA95A45D6CA688C025", type: "Badge" },
        { title: "Oracle Certified Architect Associate", issuer: "Oracle", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=41A18A5A674C33F8FA562C41F169E184B5DFC21B48C8DFEC82280BC20E9A53E2", type: "Badge" },
        { title: "Oracle Foundations Associate", issuer: "Oracle", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=29B8E23DA446CC69ACA3D4F1916CA18AC236DE46FBCCC0BE836A14DC7995BB67", type: "Badge" }
      ]
    }
  ],

  achievements: [
    {
      icon: "Trophy",
      title: "Amazon ML Summer School Mentee",
      description: "Selected among 3,000 top candidates nationwide from 1,34,421 registered applicants.",
      tag: "Top 2.23%",
      accent: "from-amber-400 to-orange-500"
    },
    {
      icon: "Rocket",
      title: "AWS AI & ML Scholar",
      description: "Selected for the prestigious global scholar cohort.",
      tag: "Global Scholar",
      accent: "from-purple-500 to-indigo-500"
    },
    {
      icon: "Medal",
      title: "Top 20 Nationwide & Best Girls Team Winner — VJ Hackathon",
      description: "Rank #20 among 5,118 teams across India for engineering an intelligent financial analytics platform (Wealth Navigator).",
      tag: "Rank #20 / 5,118",
      accent: "from-emerald-400 to-teal-500"
    },
    {
      icon: "Cloud",
      title: "Google Cloud Skills Boost Leader",
      description: "Earned 10+ official Skill Badges and accumulated 9,000+ points through hands-on cloud architecture labs.",
      tag: "9,000+ Points",
      accent: "from-blue-400 to-cyan-500"
    },
    {
      icon: "Globe",
      title: "2x Open Source Contributor — GirlScript Summer of Code (GSSoC)",
      description: "Contributed code across two consecutive editions.",
      tag: "Open Source",
      accent: "from-pink-500 to-rose-500"
    },
    {
      icon: "Code",
      title: "Algorithmic Problem Solver",
      description: "200+ algorithmic problems solved on LeetCode.",
      tag: "200+ LeetCode",
      accent: "from-violet-500 to-purple-600"
    }
  ],

  coCurriculars: [
    {
      category: "Workshops & Learning Programs",
      items: [
        { title: "Agentic AI Workshop", url: "https://drive.google.com/file/d/1J9zKSJHwNYCwYCy-FcvEFCza31CiSj_5/view?usp=sharing" },
        { title: "Android Studio Technical Workshop", url: "https://drive.google.com/file/d/1zzdZ3O8RunEouyGnv-9kTNeL70M41v0w/view?usp=sharing" },
        { title: "FlutterFlow App Development Workshop", url: "https://drive.google.com/file/d/1vtFAPai9hpG3xtom4vU8NUZZkTNZ3b45/view?usp=sharing" },
        { title: "LangVision | LLMs & Multimodal Architecture Workshop", url: "https://drive.google.com/file/d/1c55uuIHeF8B8iUSjIH3fu0bp6P2ZuFHL/view?usp=drive_link" },
        { title: "AI Immersion Program", description: "1-month intensive deep dive into foundational and advanced AI/ML algorithms", url: "https://drive.google.com/file/d/15OCB4E0mYbX5UCmiih0wKUNthY9wpiXG/view?usp=drive_link" }
      ]
    },
    {
      category: "Hackathons & Competitions",
      items: [
        { title: "VJ Hackathon", description: "Built Wealth Navigator — an intelligent financial co-pilot managing personal savings and spendings", url: "https://www.linkedin.com/posts/shreya-b-27521734a_vjhackathon-vnrvjiet-csi-ugcPost-7386799572481835008-OY8Q", type: "LinkedIn Highlight" },
        { title: "Google Solution Challenge", description: "Built ML-Powered Crop Care Management System", url: "https://drive.google.com/file/d/1GDHP9Z5aHow_q5nSZkad7F3MWwPFdZOx/view?usp=drive_link", type: "Submission" },
        { title: "Webathon", description: "Built Blood Bank Management System", url: "https://drive.google.com/file/d/1dZljlxpZo52gtddNzaTZsATGvtn_l4A3/view?usp=drive_link", type: "Submission" },
        { title: "Convergence Hackathon", description: "Built EcoMart e-commerce extension for real-time product sustainability scores", url: "https://drive.google.com/file/d/12cgbALFMG8voyxDlouGPQFPTvIDWYoLK/view?usp=drive_link" },
        { title: "National Project Contest", description: "Presented AI-Powered Travel Planner", url: "https://drive.google.com/file/d/1BLPGA4uJ79x6Bm-ElCnJbpDe2263-SWG/view" },
        { title: "Build and Break Competition", description: "Presented smart IoT + AI urban traffic system prioritizing ambulance routes in metropolitan cities", url: "https://drive.google.com/file/d/1nkKoYvTATmenQt4QthpQoV1HjJDEMmMm/view?usp=drive_link", type: "Document" }
      ]
    }
  ],

  leadership: [
    {
      role: "Technical Team Lead & Documentation Head",
      organization: "ISTE VNRVJIET",
      description: "Mentored 200+ learners, directly increasing student participation in national hackathons and emerging AI/ML research domains. Spearheaded operational planning and technical documentation for 10+ programs.",
      badge: "Leadership & Mentorship",
      highlight: "Mentored 200+ learners"
    },
    {
      role: "Member",
      organization: "Google Women Techmakers (WTM)",
      description: "Active community member empowering women in technology through cloud tech workshops and AI initiatives.",
      badge: "Community"
    },
    {
      role: "Mentee",
      organization: "Microsoft Code Without Barriers",
      description: "Selected mentee in Microsoft's initiative to bridge gender gap in AI and Cloud development.",
      badge: "Mentorship"
    },
    {
      role: "Mentee",
      organization: "Codess Cafe Community",
      description: "Participating in technical mentorship, mock interviews, and career guidance network.",
      badge: "Community"
    },
    {
      role: "Member",
      organization: "ACM VNRVJIET Student Chapter",
      description: "Contributing to computing research, student workshops, and algorithmic problem solving events.",
      badge: "Academic Chapter"
    },
    {
      role: "Scholar",
      organization: "SheFi Scholar",
      description: "Recipients of financial tech and decentralized system learning grant.",
      badge: "Global Scholar"
    }
  ],

  contact: {
    email: "bathinibhargavi2904@gmail.com",
    phone: "+91 9014246475",
    profiles: [
      { name: "LinkedIn", url: "https://www.linkedin.com/in/bhargavibathini/", icon: "Linkedin" },
      { name: "GitHub", url: "https://github.com/BhargaviBathini", icon: "Github" },
      { name: "Google Cloud Skills Boost", url: "https://www.skills.google/public_profiles/d69b142c-c696-490a-8399-f2c56d5cf9ab", icon: "Cloud" },
      { name: "Credly Profile", url: "https://www.credly.com/users/bathini-bhargavi/badges/credly", icon: "Award" }
    ]
  }
};
