# OpenLeaf-Style Resume Customization Guide

## Overview
Your portfolio now features an OpenLeaf-style resume template - clean, professional, and easy to customize!

## Structure

### Left Sidebar (Dark Blue)
- **Name & Title** - Your name and professional title
- **Contact** - Email, phone, location, website, LinkedIn, GitHub
- **Skills** - Organized by category
- **Languages** - Language proficiency levels
- **Certifications** - Professional certifications

### Main Content (White)
- **Professional Summary** - Brief overview
- **Work Experience** - Detailed job history with achievements
- **Education** - Academic background
- **Key Projects** - Top 3 featured projects
- **Publications** - Research papers (optional)
- **Awards** - Honors and awards (optional)

## Customization in config.js

### 1. Personal Information
```javascript
personal: {
    name: "SRIHARI RAVI",  // Your name (appears in sidebar header)
    subtitle: "NLP & LLM Specialist",  // Your title
    // ...
}
```

### 2. Resume Details
All resume data is in the `resume` object:

#### Contact Information
```javascript
resume: {
    contact: {
        email: "your.email@example.com",
        phone: "+1 (555) 123-4567",
        location: "Your City, Country",
        website: "https://yourwebsite.com",
        linkedin: "https://linkedin.com/in/yourprofile",
        github: "https://github.com/yourusername"
    }
}
```

#### Work Experience
```javascript
experience: [
    {
        title: "Senior Data Scientist",
        company: "Company Name",
        location: "City, Country",
        startDate: "2022",
        endDate: "Present",
        description: "Brief description...",
        achievements: [
            "Achievement 1",
            "Achievement 2"
        ],
        technologies: ["Python", "PyTorch", "FastAPI"]
    }
]
```

#### Education
```javascript
education: [
    {
        degree: "Master of Science in Data Science",
        institution: "University Name",
        location: "City, Country",
        year: "2020",
        gpa: "3.8/4.0",
        coursework: ["Machine Learning", "NLP", "Deep Learning"]
    }
]
```

#### Skills
```javascript
skills: {
    "Programming Languages": ["Python", "SQL", "R"],
    "ML/DL Frameworks": ["PyTorch", "TensorFlow"],
    "NLP Tools": ["BERT", "GPT Models", "PydanticAI"],
    // Add more categories as needed
}
```

## Color Customization

### Sidebar Colors
Edit in `styles.css`:
- Background: `#2c3e50` (dark blue)
- Text: `#ffffff` (white)
- Accents: `#3498db` (blue)

### Main Content Colors
- Background: `#ffffff` (white)
- Text: `#2c3e50` (dark blue)
- Accents: `#3498db` (blue)

## Print-Friendly
The resume is designed to be print-friendly. Use browser's Print function (Ctrl+P) to save as PDF.

## Responsive Design
- Desktop: Two-column layout (sidebar + main)
- Mobile/Tablet: Single column, sidebar stacks on top

## Tips
1. Keep descriptions concise and achievement-focused
2. Use bullet points for achievements
3. List technologies used for each role
4. Update dates regularly
5. Keep skills relevant and current

