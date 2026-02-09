// ============================================
// SCHOLARSHIPS DATABASE
// Add new scholarships here easily!
// ============================================
// ============================================
// ENHANCED COUNTDOWN SYSTEM
// ============================================

function calculateDaysLeft(deadlineDate) {
    const today = new Date();
    const deadline = new Date(deadlineDate);
    const timeDiff = deadline - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return daysLeft > 0 ? daysLeft : 0;
}

// NEW: Get detailed time remaining
function getDetailedTimeLeft(deadlineDate) {
    const now = new Date();
    const deadline = new Date(deadlineDate);
    const timeDiff = deadline - now;
    
    if (timeDiff <= 0) {
        return { expired: true, days: 0, hours: 0, minutes: 0 };
    }
    
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    
    return { expired: false, days, hours, minutes };
}

// NEW: Format countdown text based on urgency
function formatCountdownText(deadlineDate) {
    const timeLeft = getDetailedTimeLeft(deadlineDate);
    
    if (timeLeft.expired) {
        return '❌ Expired';
    }
    
    // Less than 1 day - show hours
    if (timeLeft.days === 0) {
        return `⚠️ ${timeLeft.hours}h ${timeLeft.minutes}m left`;
    }
    
    // Less than 7 days - show days + hours
    if (timeLeft.days < 7) {
        return `🔥 ${timeLeft.days}d ${timeLeft.hours}h left`;
    }
    
    // Less than 30 days - show days only
    if (timeLeft.days < 30) {
        return `⏰ ${timeLeft.days} days left`;
    }
    
    // More than 30 days - show days only
    return `📅 ${timeLeft.days} days left`;
}

// NEW: Get urgency class for styling
function getUrgencyClass(deadlineDate) {
    const daysLeft = calculateDaysLeft(deadlineDate);
    
    if (daysLeft === 0) return 'expired';
    if (daysLeft <= 7) return 'critical';
    if (daysLeft <= 30) return 'closing-soon';
    return 'open';
}

// NEW: Update all countdowns in real-time
function updateAllCountdowns() {
    const cards = document.querySelectorAll('.scholarship-card-horizontal');
    
    cards.forEach(card => {
        const deadlineAttr = card.getAttribute('data-deadline');
        if (!deadlineAttr) return;
        
        const badge = card.querySelector('.countdown-badge');
        if (badge) {
            badge.textContent = formatCountdownText(deadlineAttr);
            badge.className = 'countdown-badge ' + getUrgencyClass(deadlineAttr);
        }
        
        const daysLeftEl = card.querySelector('.deadline-days-left');
        if (daysLeftEl) {
            const timeLeft = getDetailedTimeLeft(deadlineAttr);
            if (timeLeft.expired) {
                daysLeftEl.textContent = '❌ Application Closed';
                daysLeftEl.className = 'deadline-days-left expired';
            } else {
                daysLeftEl.textContent = `⏰ ${timeLeft.days} days, ${timeLeft.hours} hours remaining`;
                daysLeftEl.className = 'deadline-days-left ' + getUrgencyClass(deadlineAttr);
            }
        }
    });
}
function createScholarshipCard(scholarship) {
    const daysLeft = calculateDaysLeft(scholarship.deadline);
    const urgencyClass = getUrgencyClass(scholarship.deadline);
    const countdownText = formatCountdownText(scholarship.deadline);
    const timeLeft = getDetailedTimeLeft(scholarship.deadline);
    
    return `
        <div class="scholarship-card-horizontal" data-deadline="${scholarship.deadline}">
            <div class="card-image">
                <img src="${scholarship.image}" alt="${scholarship.name}">
                <div class="card-flag">${scholarship.flag}</div>
                <div class="countdown-badge ${urgencyClass}">${countdownText}</div>
            </div>
            
            <div class="card-main-content">
                <div class="card-header-info">
                    <span class="card-category ${scholarship.category}">${scholarship.category}</span>
                    <h3 class="card-title">${scholarship.name}</h3>
                    <p class="card-organization">${scholarship.organization}</p>
                </div>
                
                <p class="card-description">${scholarship.description}</p>
                
                <div class="card-highlights">
                    ${scholarship.highlights.map(h => `<span class="highlight-tag">${h}</span>`).join('')}
                </div>
                
                <div class="card-tags">
                    ${scholarship.tags.map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
            </div>
            
            <div class="card-sidebar">
                <div class="card-amount-section">
                    <div class="amount-label">Funding Amount</div>
                    <div class="amount-value">${scholarship.amount}</div>
                    <div class="amount-period">${scholarship.period}</div>
                </div>
                
                <div class="card-deadline-section">
                    <div class="deadline-label">Application Deadline</div>
                    <div class="deadline-date">${formatDate(scholarship.deadline)}</div>
                    <div class="deadline-days-left ${urgencyClass}">
                        ${timeLeft.expired ? '❌ Application Closed' : `⏰ ${daysLeft} days, ${timeLeft.hours} hours remaining`}
                    </div>
                </div>
                
                <a href="${scholarship.link}" class="view-details-btn" ${timeLeft.expired ? 'style="opacity:0.5; pointer-events:none;"' : ''}>
                    <span>${timeLeft.expired ? 'Closed' : 'View Details'}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" stroke-width="2"/>
                    </svg>
                </a>
            </div>
        </div>
    `;
}

// Start countdown updates every minute
setInterval(updateAllCountdowns, 60000); // Update every 1 minute

const scholarshipsData = [
    {
        id: "daad",
        name: "DAAD Scholarship Programme",
        organization: "German Academic Exchange Service",
        country: "germany",
        flag: "🇩🇪",
        image: "daad-card.jpg",
        amount: "€1,200 - €2,000",
        amountValue: 2000, // For sorting
        period: "per month",
        description: "Study in Germany or ASEAN countries with full funding covering tuition, living expenses, travel, and insurance for Master's, PhD, and Postdoctoral programs.",
        category: "government",
        degreeLevel: ["master", "phd", "postdoc"],
        deadline: "2026-03-31", // YYYY-MM-DD format
        link: "scholarship-post-daad.html",
        highlights: [
            "Full tuition coverage",
            "Monthly stipend €1,200-€2,760",
            "Health insurance included",
            "Flight tickets provided"
        ],
        tags: ["International", "Full Funding", "Europe", "Research"]
    },
    {
        id: "chevening",
        name: "Chevening Scholarship",
        organization: "UK Government",
        country: "uk",
        flag: "🇬🇧",
        image: "chevening-card.jpg",
        amount: "Full Funding",
        amountValue: 30000,
        period: "for 1 year",
        description: "UK government's prestigious scholarship for outstanding emerging leaders to pursue one-year master's degrees at any UK university with full financial support.",
        category: "government",
        degreeLevel: ["master"],
        deadline: "2026-11-02",
        link: "scholarship-post-chevening.html",
        highlights: [
            "Any UK university",
            "Full tuition + living costs",
            "Return flights",
            "Leadership development"
        ],
        tags: ["International", "Leadership", "Full Funding", "UK"]
    },
    {
        id: "mext",
        name: "MEXT Scholarship",
        organization: "Japanese Government",
        country: "japan",
        flag: "🇯🇵",
        image: "mext-card.jpg",
        amount: "¥144,000 - ¥145,000",
        amountValue: 1200,
        period: "per month",
        description: "Japanese government scholarship for undergraduate and graduate studies in Japan, including language training, tuition waiver, and generous monthly stipend.",
        category: "government",
        degreeLevel: ["bachelor", "master", "phd"],
        deadline: "2026-06-15",
        link: "scholarship-post-mext.html",
        highlights: [
            "Japanese language training",
            "Zero tuition fees",
            "Monthly allowance ¥144,000",
            "Round-trip airfare"
        ],
        tags: ["International", "Japan", "Full Funding", "Language Training"]
    },
    {
        id: "australia-awards",
        name: "Australia Awards Scholarship",
        organization: "Australian Government",
        country: "australia",
        flag: "🇦🇺",
        image: "australia-awards-card.jpg",
        amount: "Full Funding",
        amountValue: 35000,
        period: "for program duration",
        description: "Long-term development awards targeting future leaders from developing countries to undertake full-time undergraduate or postgraduate study at Australian universities.",
        category: "government",
        degreeLevel: ["bachelor", "master"],
        deadline: "2026-04-30",
        link: "scholarship-post-australia-awards.html",
        highlights: [
            "Full tuition coverage",
            "Return air travel",
            "Living allowance",
            "Health insurance"
        ],
        tags: ["International", "Australia", "Full Funding", "Development"]
    },
    {
        id: "fulbright",
        name: "Fulbright Foreign Student Program",
        organization: "US Department of State",
        country: "usa",
        flag: "🇺🇸",
        image: "fulbright-card.jpg",
        amount: "Full Funding",
        amountValue: 40000,
        period: "for program duration",
        description: "Prestigious program enabling graduate students, young professionals and artists from abroad to study and conduct research in the United States.",
        category: "government",
        degreeLevel: ["master", "phd"],
        deadline: "2026-05-31",
        link: "scholarship-post-fulbright.html",
        highlights: [
            "Study at top US universities",
            "Tuition + living expenses",
            "Health insurance",
            "Professional development"
        ],
        tags: ["International", "USA", "Full Funding", "Research"]
    },
    {
        id: "chinese-government",
        name: "Chinese Government Scholarship",
        organization: "Chinese Ministry of Education",
        country: "china",
        flag: "🇨🇳",
        image: "csc-card.jpg",
        amount: "¥3,000 - ¥3,500",
        amountValue: 450,
        period: "per month",
        description: "Comprehensive scholarship for international students to pursue Bachelor's, Master's or PhD programs at designated Chinese universities with full or partial funding.",
        category: "government",
        degreeLevel: ["bachelor", "master", "phd"],
        deadline: "2026-04-30",
        link: "scholarship-post-chinese-government.html",
        highlights: [
            "Tuition waiver",
            "Accommodation provided",
            "Monthly stipend",
            "Chinese language courses"
        ],
        tags: ["International", "China", "Full Funding", "Multiple Levels"]
    },
    {
        id: "kgsp",
        name: "Korean Government Scholarship (KGSP)",
        organization: "Korean Government",
        country: "korea",
        flag: "🇰🇷",
        image: "kgsp-card.jpg",
        amount: "₩900,000 - ₩1,000,000",
        amountValue: 750,
        period: "per month",
        description: "Korean government scholarship program offering opportunities to study at Korean universities with language training, full tuition, and monthly allowance.",
        category: "government",
        degreeLevel: ["bachelor", "master", "phd"],
        deadline: "2026-03-20",
        link: "scholarship-post-kgsp.html",
        highlights: [
            "1 year Korean language course",
            "Full tuition waiver",
            "Monthly allowance",
            "Settlement allowance"
        ],
        tags: ["International", "Korea", "Full Funding", "Language Training"]
    },
    {
        id: "asean-scholarship",
        name: "ASEAN Undergraduate Scholarship",
        organization: "Singapore Government",
        country: "singapore",
        flag: "🇸🇬",
        image: "asean-scholarship-card.jpg",
        amount: "Full Funding",
        amountValue: 25000,
        period: "for 4 years",
        description: "Singapore government scholarship for ASEAN nationals to pursue undergraduate studies at top Singaporean universities with full financial support.",
        category: "government",
        degreeLevel: ["bachelor"],
        deadline: "2026-02-28",
        link: "scholarship-post-asean.html",
        highlights: [
            "Top Singapore universities",
            "Full tuition + allowance",
            "Pre-university course",
            "4-year program"
        ],
        tags: ["International", "Singapore", "ASEAN", "Undergraduate"]
    },
    {
        id: "erasmus-mundus",
        name: "Erasmus Mundus Joint Masters",
        organization: "European Commission",
        country: "asean",
        flag: "🇪🇺",
        image: "erasmus-card.jpg",
        amount: "€1,400",
        amountValue: 1400,
        period: "per month",
        description: "Study in multiple European countries with this prestigious EU scholarship covering tuition, travel, and living costs for joint master's programs.",
        category: "government",
        degreeLevel: ["master"],
        deadline: "2026-01-15",
        link: "scholarship-post-erasmus.html",
        highlights: [
            "Study in 2-3 EU countries",
            "Full tuition waiver",
            "€1,400 monthly stipend",
            "Travel allowance"
        ],
        tags: ["International", "Europe", "Full Funding", "Multi-country"]
    },
    {
        id: "ait-fellowship",
        name: "AIT Fellowship Programme",
        organization: "Asian Institute of Technology",
        country: "asean",
        flag: "🇹🇭",
        image: "ait-card.jpg",
        amount: "$500 - $1,000",
        amountValue: 1000,
        period: "per month",
        description: "Fellowships for master's and doctoral students to study at AIT in Thailand, with partial to full funding depending on academic merit and financial need.",
        category: "university",
        degreeLevel: ["master", "phd"],
        deadline: "2026-03-15",
        link: "scholarship-post-ait.html",
        highlights: [
            "Study in Thailand",
            "Tuition waiver",
            "Monthly stipend",
            "Regional networking"
        ],
        tags: ["ASEAN", "Thailand", "Engineering", "Partial/Full Funding"]
    },
    {
        id: "ucst-merit",
        name: "UCST Excellence Scholarship",
        organization: "University of Computer Studies, Taunggyi",
        country: "myanmar",
        flag: "🇲🇲",
        image: "ucst-scholarship-card.jpg",
        amount: "500,000 MMK",
        amountValue: 250,
        period: "per year",
        description: "Merit-based scholarship for outstanding students enrolling in Computer Science or Computer Technology programs at UCST with full tuition coverage.",
        category: "university",
        degreeLevel: ["bachelor"],
        deadline: "2026-07-31",
        link: "scholarship-post-ucst.html",
        highlights: [
            "Full tuition waiver",
            "4-year renewable",
            "For CS/CT majors",
            "Local scholarship"
        ],
        tags: ["Local", "Myanmar", "Merit-Based", "Technology"]
    },
    {
        id: "myanmar-government",
        name: "Myanmar Government Scholarship",
        organization: "Ministry of Education, Myanmar",
        country: "myanmar",
        flag: "🇲🇲",
        image: "myanmar-gov-scholarship-card.jpg",
        amount: "300,000 MMK",
        amountValue: 150,
        period: "per year",
        description: "Government financial aid for students from low-income families to access higher education at Myanmar public universities with tuition and living support.",
        category: "government",
        degreeLevel: ["bachelor"],
        deadline: "2026-08-15",
        link: "scholarship-post-myanmar-gov.html",
        highlights: [
            "Need-based",
            "Myanmar citizens only",
            "Tuition + stipend",
            "All public universities"
        ],
        tags: ["Local", "Myanmar", "Need-Based", "Government"]
    }
];

// Make it globally accessible
window.scholarshipsData = scholarshipsData;
