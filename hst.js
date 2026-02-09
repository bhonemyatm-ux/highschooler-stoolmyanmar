// ============================================
// HIGH SCHOOLER'S TOOL - MAIN SCRIPT
// Optimized for fast loading
// ============================================

// ============================================
// MOBILE MENU TOGGLE
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        // Toggle menu
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });

        // Close menu when clicking on a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // ============================================
    // ACTIVE NAV LINK HIGHLIGHT
    // ============================================
    const currentPage = window.location.pathname.split('/').pop() || 'hst.html';
    const navLinksAll = document.querySelectorAll('.nav-links a');
    
    navLinksAll.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'hst.html') ||
            (currentPage === 'index.html' && linkPage === 'hst.html')) {
            link.classList.add('active');
        }
    });

    // ============================================
    // CTA BUTTON FUNCTIONALITY
    // ============================================
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', () => {
            window.location.href = 'uni.html';
        });
    }

    // ============================================
    // SCROLL ANIMATIONS - Lightweight version
    // ============================================
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        }, observerOptions);

        // Only animate if elements exist
        const animatedElements = document.querySelectorAll('.feature-card, .region-card');
        if (animatedElements.length > 0) {
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
        }
    }
});

// ============================================
// SMOOTH SCROLLING
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ============================================
// HOMEPAGE SEARCH FUNCTIONALITY
// ============================================

// Main search function
function searchUniversities(event) {
    event.preventDefault();
    
    const searchInput = document.getElementById('homeSearch');
    if (!searchInput) return false;
    
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm === '') {
        searchInput.focus();
        searchInput.placeholder = 'Please enter a search term...';
        searchInput.style.borderColor = '#f5576c';
        setTimeout(() => {
            searchInput.style.borderColor = '';
            searchInput.placeholder = 'Search by university name, major, or location...';
        }, 2000);
        return false;
    }
    
    // Redirect to universities page with search query
    window.location.href = `uni.html?search=${encodeURIComponent(searchTerm)}`;
    return false;
}

// Quick search function for filter chips
function quickSearch(term) {
    if (term && term.trim()) {
        window.location.href = `uni.html?search=${encodeURIComponent(term)}`;
    }
}

// Initialize search functionality
document.addEventListener('DOMContentLoaded', function() {
    // Homepage search input
    const homeSearchInput = document.getElementById('homeSearch');
    if (homeSearchInput) {
        homeSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchUniversities(e);
            }
        });
    }

    // Modern filter chips
    const filterChips = document.querySelectorAll('.filter-chip');
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            const searchTerm = this.textContent.trim();
            if (searchTerm && searchTerm !== 'Popular searches:') {
                quickSearch(searchTerm);
            }
        });
    });
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Show loading indicator
function showLoading() {
    if (document.getElementById('page-loader')) return; // Prevent duplicates
    
    const loader = document.createElement('div');
    loader.id = 'page-loader';
    loader.innerHTML = `
        <div style="
            width: 50px;
            height: 50px;
            border: 5px solid #f3f3f3;
            border-top: 5px solid #667eea;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        "></div>
    `;
    loader.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(255,255,255,0.95);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
    `;
    
    // Add spin animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(loader);
}

// Hide loading indicator
function hideLoading() {
    const loader = document.getElementById('page-loader');
    if (loader) {
        loader.remove();
    }
}

// Performance optimization - Preload critical pages
window.addEventListener('load', function() {
    // Preload universities page for faster navigation
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'prefetch';
    preloadLink.href = 'uni.html';
    document.head.appendChild(preloadLink);
});

// Log for debugging (remove in production)
console.log('%c🎓 High Schooler\'s Tool', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cScript loaded successfully!', 'color: #764ba2; font-size: 14px;');
console.log('%cVersion: 1.0.0 | Date: December 2025', 'color: #999; font-size: 12px;');
// Promo banner slider

new Swiper(".promo-swiper", {
  loop: true,
  autoplay: { delay: 2500, disableOnInteraction: false },
  pagination: { el: ".promo-wrap .swiper-pagination", clickable: true }
});
if (window.Swiper) {
  new Swiper(".promo-swiper", {
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    pagination: { el: ".promo-wrap .swiper-pagination", clickable: true }
  });
} else {
  console.error("Swiper not loaded. Check the CDN script tag.");
}
