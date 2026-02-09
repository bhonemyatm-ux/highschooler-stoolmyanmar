// university-profile.js - Dynamically load university data

// Get university ID from URL
const urlParams = new URLSearchParams(window.location.search);
const universityId = urlParams.get('id');

// Check if university exists
if (!universityId || !universitiesData[universityId]) {
    document.body.innerHTML = `
        <div style="text-align: center; padding: 100px 20px;">
            <h1>University Not Found</h1>
            <p>The university you're looking for doesn't exist.</p>
            <a href="universities.html" style="color: #667eea;">← Back to Universities</a>
        </div>
    `;
} else {
    const uni = universitiesData[universityId];
    
    // Update page title
    document.title = `${uni.name} - High Schooler's Tool`;
    
    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = uni.subtitle;
    }
    
    // Update breadcrumb
    document.querySelector('.breadcrumb span').textContent = uni.name;
    
    // Update hero section
    document.querySelector('.hero-bg').style.backgroundImage = `url(${uni.image})`;
    document.querySelector('.uni-logo img').src = uni.logo;
    document.querySelector('.uni-logo img').alt = `${uni.name} Logo`;
    document.querySelector('.uni-title h1').textContent = uni.name;
    document.querySelector('.uni-subtitle').textContent = uni.subtitle;
    
    // Update meta info
    const metaSpans = document.querySelectorAll('.uni-meta span');
    metaSpans[0].innerHTML = `<i>📍</i> ${uni.location}`;
    metaSpans[1].innerHTML = `<i>🏛️</i> ${uni.type}`;
    metaSpans[2].innerHTML = `<i>📅</i> Founded ${uni.founded}`;
    
    // Update stats
    const statInfos = document.querySelectorAll('.stat-info');
    statInfos[0].querySelector('h3').textContent = uni.stats.students;
    statInfos[1].querySelector('h3').textContent = uni.stats.programs;
    statInfos[2].querySelector('h3').textContent = uni.stats.faculty;
    statInfos[3].querySelector('h3').textContent = uni.stats.projects;
    
    // Update quick info sidebar
    const infoItems = document.querySelectorAll('.info-item');
    infoItems[0].querySelector('span').textContent = uni.quickInfo.type;
    infoItems[1].querySelector('span').textContent = uni.quickInfo.location;
    infoItems[2].querySelector('span').textContent = uni.quickInfo.campusSize;
    infoItems[3].querySelector('span').textContent = uni.quickInfo.language;
    
    // Update entrance requirements
    document.querySelector('.req-value').textContent = uni.minMarks;
    
    // Update required subjects
    const subjectTags = document.querySelector('.subject-tags');
    subjectTags.innerHTML = '';
    uni.requiredSubjects.forEach(subject => {
        const tag = document.createElement('span');
        tag.className = 'subject-tag';
        tag.textContent = subject;
        subjectTags.appendChild(tag);
    });
    
    // Update contact info
    document.querySelector('.contact-info').innerHTML = `
        <p><i>📞</i> ${uni.contact.phone}</p>
        <p><i>📧</i> ${uni.contact.email}</p>
        <p><i>🌐</i> ${uni.contact.website}</p>
    `;
    
    // Update about section
    const aboutParagraphs = document.querySelectorAll('#overview .content-card p');
    aboutParagraphs[0].textContent = uni.about;
    
    // Update "Why Choose" features
    const featuresList = document.querySelector('.features-list');
    featuresList.innerHTML = '';
    uni.whyChoose.forEach(feature => {
        featuresList.innerHTML += `
            <div class="feature-item">
                <div class="feature-icon">${feature.icon}</div>
                <div>
                    <h4>${feature.title}</h4>
                    <p>${feature.description}</p>
                </div>
            </div>
        `;
    });
    
    // Update majors
    const majorsList = document.querySelector('.majors-list');
    majorsList.innerHTML = '';
    uni.majors.forEach(major => {
        majorsList.innerHTML += `
            <div class="major-card">
                <div class="major-header">
                    <div class="major-icon">${major.icon}</div>
                    <div>
                        <h3>${major.name}</h3>
                        <span class="major-degree">${major.degree}</span>
                    </div>
                </div>
                <p class="major-desc">${major.description}</p>
                <div class="major-details">
                    <div class="detail-row">
                        <strong>Duration:</strong>
                        <span>${major.duration}</span>
                    </div>
                    <div class="detail-row">
                        <strong>Min. Marks:</strong>
                        <span>${major.minMarks}</span>
                    </div>
                    <div class="detail-row">
                        <strong>Prerequisites:</strong>
                        <span>${major.prerequisites}</span>
                    </div>
                </div>
                <div class="major-subjects">
                    ${major.subjects.map(s => `<span>${s}</span>`).join('')}
                </div>
            </div>
        `;
    });
    
    // Update projects
    const projectsTimeline = document.querySelector('.projects-timeline');
    projectsTimeline.innerHTML = '';
    uni.projects.forEach(project => {
        projectsTimeline.innerHTML += `
            <div class="project-item">
                <div class="project-year">${project.year}</div>
                <div class="project-content">
                    <div class="project-badge ${project.badge}">${project.type}</div>
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;
    });
    
    // Update campus life
    const campusFeatures = document.querySelector('.campus-features');
    campusFeatures.innerHTML = '';
    uni.campusLife.forEach(feature => {
        campusFeatures.innerHTML += `
            <div class="campus-card">
                <div class="campus-img">
                    <img src="${feature.image}" alt="${feature.title}">
                </div>
                <h3>${feature.title}</h3>
                <p>${feature.description}</p>
            </div>
        `;
    });
    
    // Update testimonials
    const testimonialGrid = document.querySelector('.testimonial-grid');
    testimonialGrid.innerHTML = '';
    uni.testimonials.forEach(test => {
        testimonialGrid.innerHTML += `
            <div class="testimonial-card">
                <p>"${test.quote}"</p>
                <div class="testimonial-author">
                    <strong>${test.author}</strong>
                    <span>${test.role}</span>
                </div>
            </div>
        `;
    });
    
    // Update careers
    const careerPaths = document.querySelector('.career-paths');
    careerPaths.innerHTML = '';
    uni.careers.forEach(career => {
        careerPaths.innerHTML += `
            <div class="career-card">
                <div class="career-icon">${career.icon}</div>
                <h3>${career.title}</h3>
                <p>${career.description}</p>
                <span class="salary-range">Average: ${career.salary}</span>
            </div>
        `;
    });
    
    // Update employers
    const logoGrid = document.querySelector('.logo-grid');
    logoGrid.innerHTML = '';
    uni.employers.forEach(employer => {
        logoGrid.innerHTML += `<div class="employer-logo">${employer}</div>`;
    });
}

// Tab functionality (keep existing tab code)
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetTab = btn.getAttribute('data-tab');
        
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));
        
        btn.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
        
        document.querySelector('.profile-tabs').scrollIntoView({ 
            behavior: 'smooth',
            block: 'nearest'
        });
    });
});
