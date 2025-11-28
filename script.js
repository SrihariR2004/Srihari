// Load Content from Config
document.addEventListener('DOMContentLoaded', () => {
    loadPersonalData();
    loadConversation();
    // loadResume(); // Removed resume section
    loadProjects();
    loadSkills();
    loadSocialLinks();
    updateColors();
    
    // Initialize interactions after content is loaded
    initInteractions();
    
    // Initialize scroll animations
    initScrollAnimations();
});

// Enhanced Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add fade-in class to elements
    const elementsToAnimate = document.querySelectorAll(
        '.project-card, .skill-category, .conversation-container, .resume-container, .contact-content'
    );
    
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('fade-in');
        el.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(el);
    });
}

function loadPersonalData() {
    const p = config.personal;
    
    // Meta & Title
    document.getElementById('page-title').textContent = p.title;
    document.getElementById('meta-description').setAttribute('content', p.description);
    
    // Hero Section
    const heroName = document.getElementById('hero-name');
    heroName.setAttribute('data-text', p.name);
    heroName.querySelector('span').textContent = p.name;
    document.getElementById('hero-subtitle').textContent = p.subtitle;
    document.getElementById('hero-description').textContent = p.description;
    
    // Contact & Footer
    document.getElementById('contact-email').href = `mailto:${p.email}`;
    document.getElementById('footer-name').textContent = p.footerText;
}

function loadConversation() {
    const container = document.getElementById('conversation-container');
    const conversation = config.about.conversation;
    
    conversation.forEach((msg, index) => {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${msg.speaker}`;
        
        const bubble = document.createElement('div');
        bubble.className = 'message-bubble';
        bubble.textContent = msg.message;
        
        msgDiv.appendChild(bubble);
        container.appendChild(msgDiv);
        
        // Animate messages appearing
        setTimeout(() => {
            msgDiv.style.opacity = '1';
            msgDiv.style.transform = 'translateY(0)';
        }, index * 500);
    });
    
    // Load Technologies list
    const techList = document.getElementById('tech-list');
    if (techList && config.about.technologies) {
        config.about.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            techList.appendChild(li);
        });
    }
}

function loadResume() {
    const r = config.resume;
    const p = config.personal;
    
    // Resume Header (Sidebar)
    document.getElementById('resume-name').textContent = p.name;
    document.getElementById('resume-title').textContent = p.subtitle;
    
    // Contact Information (Sidebar)
    const contactInfoSidebar = document.getElementById('contact-info-sidebar');
    contactInfoSidebar.innerHTML = `
        <div class="contact-item">
            <strong>Email</strong>
            <a href="mailto:${r.contact.email}">${r.contact.email}</a>
        </div>
        <div class="contact-item">
            <strong>Phone</strong>
            ${r.contact.phone}
        </div>
        <div class="contact-item">
            <strong>Location</strong>
            ${r.contact.location}
        </div>
        ${r.contact.website ? `
        <div class="contact-item">
            <strong>Website</strong>
            <a href="${r.contact.website}" target="_blank">${r.contact.website.replace('https://', '').replace('http://', '')}</a>
        </div>
        ` : ''}
        <div class="contact-item">
            <strong>LinkedIn</strong>
            <a href="${r.contact.linkedin}" target="_blank">Profile</a>
        </div>
        <div class="contact-item">
            <strong>GitHub</strong>
            <a href="${r.contact.github}" target="_blank">Profile</a>
        </div>
    `;
    
    // Summary (Main Content)
    document.getElementById('summary-text').textContent = r.summary;
    
    // Experience
    const expList = document.getElementById('experience-list');
    r.experience.forEach(exp => {
        const expDiv = document.createElement('div');
        expDiv.className = 'experience-item';
        const achievementsHtml = exp.achievements.map(a => `<li>${a}</li>`).join('');
        const techHtml = exp.technologies.map(t => `<span class="tech-tag">${t}</span>`).join('');
        expDiv.innerHTML = `
            <div class="exp-header">
                <h4>${exp.title}</h4>
                <div class="exp-company">${exp.company} - ${exp.location}</div>
                <div class="exp-date">${exp.startDate} - ${exp.endDate}</div>
            </div>
            <p class="exp-description">${exp.description}</p>
            <ul class="exp-achievements">${achievementsHtml}</ul>
            <div class="exp-technologies">${techHtml}</div>
        `;
        expList.appendChild(expDiv);
    });
    
    // Education
    const eduList = document.getElementById('education-list');
    r.education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.className = 'education-item';
        const courseworkHtml = edu.coursework ? `<div class="coursework"><strong>Relevant Coursework:</strong> ${edu.coursework.join(', ')}</div>` : '';
        eduDiv.innerHTML = `
            <h4>${edu.degree}</h4>
            <div class="edu-institution">${edu.institution} - ${edu.location}</div>
            <div class="edu-date">${edu.year} ${edu.gpa ? `| GPA: ${edu.gpa}` : ''}</div>
            ${courseworkHtml}
        `;
        eduList.appendChild(eduDiv);
    });
    
    // Certifications (Sidebar)
    const certSidebar = document.getElementById('certifications-sidebar');
    r.certifications.forEach(cert => {
        const certDiv = document.createElement('div');
        certDiv.className = 'certification-item-sidebar';
        certDiv.innerHTML = `
            <h4>${cert.name}</h4>
            <div class="cert-issuer-sidebar">${cert.issuer}<br>${cert.date} ${cert.credentialId ? `<br>ID: ${cert.credentialId}` : ''}</div>
        `;
        certSidebar.appendChild(certDiv);
    });
    
    // Certifications (Main - for detailed view if needed)
    const certList = document.getElementById('certifications-list');
    if (certList) {
        r.certifications.forEach(cert => {
            const certDiv = document.createElement('div');
            certDiv.className = 'certification-item';
            certDiv.innerHTML = `
                <h4>${cert.name}</h4>
                <div class="cert-issuer">${cert.issuer} | ${cert.date} ${cert.credentialId ? `| Credential ID: ${cert.credentialId}` : ''}</div>
            `;
            certList.appendChild(certDiv);
        });
    }
    
    // Skills (Sidebar)
    const skillsSidebar = document.getElementById('skills-sidebar');
    Object.keys(r.skills).forEach(category => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category-sidebar';
        categoryDiv.innerHTML = `
            <h4>${category}</h4>
            <div class="skill-tags-sidebar">${r.skills[category].map(s => `<span class="skill-tag-sidebar">${s}</span>`).join('')}</div>
        `;
        skillsSidebar.appendChild(categoryDiv);
    });
    
    // Publications (Main Content)
    if (r.publications && r.publications.length > 0) {
        const pubSection = document.getElementById('publications-section');
        if (pubSection) {
            pubSection.style.display = 'block';
            const pubList = document.getElementById('publications-list');
            r.publications.forEach(pub => {
                const pubDiv = document.createElement('div');
                pubDiv.className = 'publication-item';
                pubDiv.innerHTML = `
                    <h4>${pub.title}</h4>
                    <div class="pub-authors">${pub.authors}</div>
                    <div class="pub-venue">${pub.venue} | ${pub.year}</div>
                    ${pub.description ? `<p class="pub-description">${pub.description}</p>` : ''}
                    ${pub.link ? `<a href="${pub.link}" target="_blank" class="pub-link">View Publication</a>` : ''}
                `;
                pubList.appendChild(pubDiv);
            });
        }
    }
    
    // Languages (Sidebar)
    const langSidebar = document.getElementById('languages-sidebar');
    r.languages.forEach(lang => {
        const langDiv = document.createElement('div');
        langDiv.className = 'language-item-sidebar';
        langDiv.innerHTML = `
            <span class="lang-name-sidebar">${lang.language}</span>
            <span class="lang-proficiency-sidebar">${lang.proficiency}</span>
        `;
        langSidebar.appendChild(langDiv);
    });
    
    // Languages (Main - if exists)
    const langList = document.getElementById('languages-list');
    if (langList) {
        r.languages.forEach(lang => {
            const langDiv = document.createElement('div');
            langDiv.className = 'language-item';
            langDiv.innerHTML = `
                <span class="lang-name">${lang.language}</span>
                <span class="lang-proficiency">${lang.proficiency}</span>
            `;
            langList.appendChild(langDiv);
        });
    }
    
    // Awards (Main Content)
    if (r.awards && r.awards.length > 0) {
        const awardsSection = document.getElementById('awards-section');
        if (awardsSection) {
            awardsSection.style.display = 'block';
            const awardsList = document.getElementById('awards-list');
            r.awards.forEach(award => {
                const awardDiv = document.createElement('div');
                awardDiv.className = 'award-item';
                awardDiv.innerHTML = `
                    <h4>${award.title}</h4>
                    <div class="award-issuer">${award.issuer}${award.year ? ` | ${award.year}` : ''}</div>
                    ${award.description ? `<p class="award-description">${award.description}</p>` : ''}
                `;
                awardsList.appendChild(awardDiv);
            });
        }
    }
    
    // Resume Projects (from projects section)
    const resumeProjectsList = document.getElementById('resume-projects-list');
    if (resumeProjectsList) {
        config.projects.slice(0, 3).forEach(project => { // Show top 3 projects
            const projectDiv = document.createElement('div');
            projectDiv.className = 'resume-project-item';
            const techHtml = project.tech.map(t => `<span>${t}</span>`).join('');
            const dateHtml = project.date ? `<div class="resume-project-date">${project.date}</div>` : '';
            projectDiv.innerHTML = `
                <h4>${project.title}</h4>
                ${dateHtml}
                <p>${project.description}</p>
                <div class="resume-project-tech">${techHtml}</div>
            `;
            resumeProjectsList.appendChild(projectDiv);
        });
    }
}

function loadProjects() {
    const grid = document.getElementById('projects-grid');
    
    config.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Create Tech Stack HTML
        const techHtml = project.tech.map(t => `<li>${t}</li>`).join('');
        
        const iconHtml = project.icon.startsWith('http') 
            ? `<img src="${project.icon}" alt="${project.title}" class="project-icon-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';"><span class="project-icon-fallback" style="display:none;">💻</span>`
            : `<span class="project-icon">${project.icon}</span>`;
        
        const dateHtml = project.date ? `<div class="project-date">${project.date}</div>` : '';
        card.innerHTML = `
            <div class="project-header">
                <div class="project-icon-container">${iconHtml}</div>
                <div class="project-links">
                    <a href="${project.links.demo}" class="project-link" aria-label="Demo">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                    </a>
                    <a href="${project.links.github}" class="project-link" aria-label="GitHub">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <h3 class="project-title">${project.title}</h3>
            ${dateHtml}
            <p class="project-description">${project.description}</p>
            <ul class="project-tech">${techHtml}</ul>
        `;
        grid.appendChild(card);
    });
}

function loadSkills() {
    const grid = document.getElementById('skills-grid');
    
    config.skills.forEach(category => {
        const catDiv = document.createElement('div');
        catDiv.className = 'skill-category';
        
        const itemsHtml = category.items.map(item => `
            <div class="skill-item">
                <span class="skill-name">${item.name}</span>
                <div class="skill-bar">
                    <div class="skill-progress" style="--width: ${item.level}%"></div>
                </div>
            </div>
        `).join('');
        
        catDiv.innerHTML = `
            <h3>${category.category}</h3>
            <div class="skill-items">${itemsHtml}</div>
        `;
        grid.appendChild(catDiv);
    });
}

function loadSocialLinks() {
    const container = document.getElementById('social-links');
    const s = config.social;
    
    // Helper to create SVG icons (simplified paths for brevity)
    const icons = {
        github: '<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>',
        linkedin: '<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>',
        twitter: '<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>',
        kaggle: '<path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.49-.141l-5.178-2.859c-.117-.063-.351-.063-.351-.234v-5.641c0-.129.117-.141.234-.234l5.178-2.859c.117-.063.351-.063.49-.141h3.139c.187 0 .281.063.281.141v11.625zm-11.625 0c-.022.092-.117.141-.281.141H3.656c-.187 0-.351-.082-.49-.141L.234 21.141c-.117-.063-.234-.129-.234-.234V7.547c0-.129.117-.141.234-.234L3.656 4.547c.117-.063.351-.063.49-.141h3.139c.187 0 .281.063.281.141v16.172zm5.859-17.953c-.022.092-.117.141-.281.141H9.515c-.187 0-.351-.082-.49-.141L3.656 3.188c-.117-.063-.234-.129-.234-.234V.141c0-.129.117-.141.234-.234L9.234 0c.117-.063.351-.063.49-.141h3.139c.187 0 .281.063.281.141v5.766z"/>'
    };

    Object.keys(s).forEach(key => {
        if (s[key] && s[key] !== "#") {
            const a = document.createElement('a');
            a.href = s[key];
            a.target = "_blank";
            a.rel = "noopener noreferrer";
            a.className = "social-link";
            a.setAttribute("aria-label", key.charAt(0).toUpperCase() + key.slice(1));
            a.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor">${icons[key]}</svg>`;
            container.appendChild(a);
        }
    });
}

function updateColors() {
    const r = document.querySelector(':root');
    const t = config.theme;
    
    // Apply Tesla Dark Tech theme colors from config.js
    if (t.primary) {
        r.style.setProperty('--primary-color', t.primary);
        r.style.setProperty('--tesla-red', t.primary);
    }
    if (t.secondary) {
        r.style.setProperty('--secondary-color', t.secondary);
        r.style.setProperty('--tesla-black', t.secondary);
    }
    if (t.accent) {
        r.style.setProperty('--accent-color', t.accent);
        r.style.setProperty('--tesla-white', t.accent);
    }
    if (t.background) {
        r.style.setProperty('--bg-dark', t.background);
        r.style.setProperty('--bg-gradient', `linear-gradient(135deg, ${t.background} 0%, #1a1a1a 50%, ${t.background} 100%)`);
    }
    if (t.text) {
        r.style.setProperty('--text-primary', t.text);
    }
}

function initInteractions() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation link on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe new elements
    document.querySelectorAll('.project-card, .skill-category, .about-content').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroVisual = document.querySelector('.hero-visual');
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.5}px)`;
            heroVisual.style.opacity = 1 - scrolled / 500;
        }
    });
}
