// university-profile.js - Tab Switching Functionality

// Get all tab buttons and panels
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

// Add click event to each tab button
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Get the target tab from data-tab attribute
        const targetTab = btn.getAttribute('data-tab');
        
        // Remove active class from all buttons and panels
        tabBtns.forEach(b => b.classList.remove('active'));
        tabPanels.forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked button
        btn.classList.add('active');
        
        // Add active class to corresponding panel
        document.getElementById(targetTab).classList.add('active');
        
        // Optional: Smooth scroll to tabs (for mobile)
        document.querySelector('.profile-tabs').scrollIntoView({ 
            behavior: 'smooth',
            block: 'nearest'
        });
    });
});

// Mobile menu toggle (hamburger)
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Smooth scrolling for anchor links
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
