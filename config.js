const config = {
    // =================================================================================
    // PERSONAL INFORMATION
    // =================================================================================
    personal: {
        name: "SRIHARI R",
        title: "Srihari R | AI Engineer & Data Science Engineer",
        subtitle: "AI Engineer",
        description: "As an aspiring AI Engineer, I'm driven by the idea of using machine learning and AI to solve real-world problems. With hands-on experience in data science, deep learning, and NLP, I'm passionate about building smarter systems that make a difference.",
        email: "Srihari842800@gmail.com",
        footerText: "Srihari R"
    },

    // =================================================================================
    // SOCIAL LINKS
    // =================================================================================
    social: {
        github: "https://github.com/SrihariR2004",
        linkedin: "https://www.linkedin.com/in/srihariravi",
        twitter: "",
        kaggle: ""
    },

    // =================================================================================
    // COLORS (CSS Variables)
    // Tesla-inspired Dark Tech Design
    // Change these codes to modify the site's color scheme
    // =================================================================================
    theme: {
        primary: "#FF3B5C",      // Professional Red (Main accent)
        secondary: "#0A0E27",     // Deep Navy
        accent: "#FFFFFF",        // Pure White
        background: "#0A0E27",    // Deep Navy Background
        text: "#FFFFFF"          // White Text
    },

    // =================================================================================
    // SKILLS
    // =================================================================================
    skills: [
        {
            category: "Large Language Models & AI",
            items: [
                { name: "Ollama", level: 95 },
                { name: "LLM Fine-tuning", level: 92 },
                { name: "DeepSeek", level: 90 },
                { name: "VLLM", level: 88 },
                { name: "Transformers", level: 93 }
            ]
        },
        {
            category: "Machine Learning & Deep Learning",
            items: [
                { name: "PyTorch", level: 95 },
                { name: "Reinforcement Learning", level: 85 },
                { name: "Self-Instruction Models", level: 88 },
                { name: "Knowledge Graphs", level: 90 },
                { name: "Gliner", level: 87 }
            ]
        },
        {
            category: "Development & APIs",
            items: [
                { name: "Python", level: 98 },
                { name: "FastAPI", level: 92 },
                { name: "Flask", level: 90 },
                { name: "Hyperdimensional Computation", level: 85 }
            ]
        }
    ],

    // =================================================================================
    // PROJECTS
    // =================================================================================
    projects: [
        {
            title: "Education Analyzer and Doubt Rectifier",
            description: "Developed an innovative web application that tracks student tasks and marks, incorporating a chatbot that significantly improved student engagement and query resolution efficiency by 40%. Utilized advanced analytics to personalize learning experiences, identifying student interests based on test performance and video engagement, resulting in a 30% improvement.",
            icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
            tech: ["HTML", "CSS", "Flask", "RAG", "Ollama API"],
            date: "June 2024 – July 2024",
            links: {
                demo: "#",
                github: "#"
            }
        },
        {
            title: "Patent Search Application",
            description: "Designed a cutting-edge search application that performs comprehensive market analysis on patents, connecting industry insights with educational trends to uncover key market opportunities, increasing relevant search results by 50%. Leveraged large language models to enhance search accuracy, reducing analysis time by 60%.",
            icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
            tech: ["Flask", "LLM", "RAG"],
            date: "May 2024 – June 2024",
            links: {
                demo: "#",
                github: "#"
            }
        },
        {
            title: "Passenger Counting Using OpenCV",
            description: "Implemented a computer vision model to count passengers in a given area, improving data accuracy for transit systems using advanced object detection techniques.",
            icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
            tech: ["OpenCV", "Fast-RCNN", "Faster-RCNN", "YOLO"],
            date: "February 2024",
            links: {
                demo: "#",
                github: "#"
            }
        },
        {
            title: "Bengaluru City Home Price Prediction",
            description: "Designed a predictive model for real estate prices in Bengaluru, providing valuable insights that helped buyers and sellers make informed decisions, reducing time on market by 15%. Applied advanced data analysis and machine learning techniques to forecast market trends, achieving a prediction accuracy of 85%.",
            icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
            tech: ["Python", "Jupyter Notebook", "Data Analysis", "Machine Learning"],
            date: "August 2023",
            links: {
                demo: "#",
                github: "#"
            }
        }
    ],

    // =================================================================================
    // ABOUT SECTION - Conversational Style ONLY
    // =================================================================================
    about: {
        conversation: [
            { speaker: "system", message: "Hello! I'm Srihari R 👋" },
            { speaker: "user", message: "Tell me about yourself" },
            { speaker: "system", message: "I'm an AI Engineer and Data Science Engineer at Encipher Health. I'm driven by the idea of using machine learning and AI to solve real-world problems. With hands-on experience in data science, deep learning, and NLP, I'm passionate about building smarter systems that make a difference." },
            { speaker: "user", message: "What do you specialize in?" },
            { speaker: "system", message: "My areas of interest include Machine Learning, Reinforcement Learning models, Self-Instruction models, Gen AI, and AI development. I work extensively with Large Language Models like Ollama, DeepSeek, VLLM, and transformers. I also specialize in Knowledge Graphs, PyTorch, FastAPI, Flask, and Hyperdimensional Computation." },
            { speaker: "user", message: "What's your current role?" },
            { speaker: "system", message: "I'm currently working as a Data Science Engineer 1 at Encipher Health. I work on optimizing healthcare data analysis models, fine-tuning DeepSeek, KG Graph, and Gliner models, deploying models on AWS EC2 with multiple GPUs, and developing APIs for production systems. I've been contributing to better healthcare decision-making through AI-driven insights." },
            { speaker: "user", message: "Tell me about your achievements" },
            { speaker: "system", message: "I published a paper at ICCCAI conference and won the Best Paper award at Taylor's University! I've also solved 2500+ problems on Skill Rack and ranked among the top 3 performers in college. I'm always pushing myself to learn and grow! 🏆" },
            { speaker: "user", message: "What projects have you worked on?" },
            { speaker: "system", message: "I've built an Education Analyzer with a chatbot that improved engagement by 40%, a Patent Search Application using LLMs that increased search accuracy by 50%, a Passenger Counting system using OpenCV and YOLO, and a Bengaluru Home Price Prediction model with 85% accuracy. Check out my projects section for more details! 🚀" }
        ],
        // Area of Interest / Technologies
        technologies: [
            "Machine Learning",
            "Reinforcement Learning",
            "Self-Instruction Models",
            "AI Development",
            "Gen AI",
            "Large Language Models",
            "Ollama",
            "DeepSeek",
            "VLLM",
            "Transformers",
            "Knowledge Graphs",
            "PyTorch",
            "FastAPI",
            "Flask",
            "Hyperdimensional Computation",
            "Computer Vision",
            "OpenCV",
            "YOLO",
            "Python"
        ]
    },

    // =================================================================================
    // RESUME DETAILS - Full Resume Information
    // =================================================================================
    resume: {
        // Contact Information
        contact: {
            email: "Srihari842800@gmail.com",
            phone: "+91 8428005548",
            location: "TamilNadu, India",
            website: "",
            linkedin: "https://www.linkedin.com/in/srihariravi",
            github: "https://github.com/SrihariR2004"
        },

        // Professional Summary
        summary: "As an aspiring AI Engineer, I'm driven by the idea of using machine learning and AI to solve real-world problems. With hands-on experience in data science, deep learning, and NLP, I'm passionate about building smarter systems that make a difference. I'm eager to dive into challenging projects where I can learn, grow, and push the limits of what's possible with data. Ultimately, my goal is to help shape the future of AI and build innovative solutions that have a tangible impact on industries and people's lives.",

        // Work Experience
        experience: [
            {
                title: "Data Science Engineer 1",
                company: "Encipher Health",
                location: "India",
                startDate: "June 2024",
                endDate: "Present",
                description: "Working on optimizing healthcare data analysis models and improving decision-making processes using AI and machine learning.",
                achievements: [
                    "Collaborated with the data science team to fine-tune DeepSeek, KG Graph, and Gliner models, boosting prediction accuracy and improving AI-driven insights for healthcare systems",
                    "Utilized NLP models for extracting actionable insights from unstructured healthcare data, contributing to better understanding patient trends and needs",
                    "Supported the deployment of models on AWS EC2 instances with multiple GPUs, ensuring fast, scalable data processing and training for deep learning applications",
                    "Developed APIs to integrate machine learning models into production systems, enabling real-time data analysis for healthcare decision-making",
                    "Enhanced the KG Graph framework by applying advanced graph algorithms to extract relationships from complex healthcare data, improving diagnostic and treatment recommendations"
                ],
                technologies: ["Python", "DeepSeek", "KG Graph", "Gliner", "AWS EC2", "NLP", "PyTorch", "FastAPI"]
            },
            {
                title: "Data Analysis Intern",
                company: "Encipher Health",
                location: "India",
                startDate: "October 2023",
                endDate: "June 2024",
                description: "Internship focused on healthcare data analysis and AI model optimization.",
                achievements: [
                    "Worked on optimizing healthcare data analysis models",
                    "Assisted in fine-tuning AI models for healthcare applications",
                    "Contributed to improving decision-making processes using AI and machine learning"
                ],
                technologies: ["Python", "Machine Learning", "Data Analysis", "AI"]
            }
        ],

        // Education
        education: [
            {
                degree: "B.Tech in Artificial Intelligence and Data Science",
                institution: "St.Joseph's Institute of Technology",
                location: "Chennai, India",
                year: "2021 - 2025",
                gpa: "",
                coursework: ["Machine Learning", "Deep Learning", "Artificial Intelligence", "Data Science", "NLP", "Computer Vision"]
            }
        ],

        // Certifications
        certifications: [
            {
                name: "IBM Data Analyst Specialisation",
                issuer: "IBM",
                date: ""
            },
            {
                name: "Python for Data Science, AI, and Development",
                issuer: "Coursera",
                date: ""
            },
            {
                name: "Data Analysis with Python",
                issuer: "Coursera",
                date: ""
            },
            {
                name: "Excel Basics for Data Analysis",
                issuer: "Coursera",
                date: ""
            }
        ],

        // Skills (Detailed)
        skills: {
            "Large Language Models": ["Ollama", "DeepSeek", "VLLM", "Transformers", "LLM Fine-tuning"],
            "Machine Learning": ["PyTorch", "Reinforcement Learning", "Self-Instruction Models", "Knowledge Graphs", "Gliner"],
            "Programming & APIs": ["Python", "FastAPI", "Flask"],
            "Specialized": ["Hyperdimensional Computation", "Computer Vision", "OpenCV", "YOLO", "Fast-RCNN", "Faster-RCNN"],
            "Data Analysis": ["Data Analysis", "Python", "Jupyter Notebook", "Excel"]
        },

        // Publications (if any)
        publications: [
            {
                title: "Developing an Intelligent Passenger Counting System for Bus Routes to Optimize Taxi Aggregator Recommendations",
                authors: "Srihari R",
                venue: "International Conference on Computing, Communication and Artificial Intelligence (ICCCAI)",
                year: "May 2024",
                link: "",
                description: "Developed a system to optimize taxi aggregator recommendations using intelligent passenger counting on bus routes. Won Best Paper award at Taylor's University conducted by Sathyabama University at Chennai."
            }
        ],

        // Projects (Detailed - already in projects section, but can add more details)
        // Languages
        languages: [
            { language: "Python", proficiency: "Fluent" }
        ],

        // Awards & Honors
        awards: [
            {
                title: "Best Paper Award - ICCCAI Conference",
                issuer: "Taylor's University (conducted by Sathyabama University)",
                year: "May 2024",
                description: "Won Best Paper award for 'Developing an Intelligent Passenger Counting System for Bus Routes to Optimize Taxi Aggregator Recommendations'"
            },
            {
                title: "Skill Rack Top Performer",
                issuer: "Skill Rack Platform",
                year: "",
                description: "Solved 2500+ problems and ranked among the top 3 performers in college"
            }
        ]
    }
};

