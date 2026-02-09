// Career Discovery Quiz - JavaScript
// Quiz Data
const quizQuestions = [
    {
        id: 1,
        icon: "🤔",
        question: "What excites you the most?",
        answers: [
            { text: "🔧 Building & Creating Things", value: "tech", icon: "🔧" },
            { text: "👥 Helping People Directly", value: "people", icon: "👥" },
            { text: "📊 Analyzing Data & Solving Problems", value: "analytical", icon: "📊" },
            { text: "🎨 Creative Design & Arts", value: "creative", icon: "🎨" }
        ]
    },
    {
        id: 2,
        icon: "💼",
        question: "What's your ideal work environment?",
        answers: [
            { text: "💻 Office / Remote (Computer Work)", value: "tech", icon: "💻" },
            { text: "🏥 Hospital / Clinic / Community", value: "people", icon: "🏥" },
            { text: "🏢 Corporate Office / Business Center", value: "business", icon: "🏢" },
            { text: "🎭 Creative Studio / Flexible Space", value: "creative", icon: "🎭" }
        ]
    },
    {
        id: 3,
        icon: "🎯",
        question: "Which skill comes naturally to you?",
        answers: [
            { text: "🧮 Math & Logic", value: "tech", icon: "🧮" },
            { text: "💬 Communication & Empathy", value: "people", icon: "💬" },
            { text: "📈 Strategy & Planning", value: "business", icon: "📈" },
            { text: "✏️ Design & Innovation", value: "creative", icon: "✏️" }
        ]
    },
    {
        id: 4,
        icon: "⭐",
        question: "What motivates you most?",
        answers: [
            { text: "💡 Innovation & Technology", value: "tech", icon: "💡" },
            { text: "❤️ Making a Difference in Lives", value: "people", icon: "❤️" },
            { text: "💰 Financial Success & Growth", value: "business", icon: "💰" },
            { text: "🌈 Self-Expression & Beauty", value: "creative", icon: "🌈" }
        ]
    },
    {
        id: 5,
        icon: "📚",
        question: "Which subject did you enjoy most in school?",
        answers: [
            { text: "💻 Math / Physics / Computer", value: "tech", icon: "💻" },
            { text: "🧬 Biology / Chemistry / Science", value: "people", icon: "🧬" },
            { text: "📊 Economics / Business Studies", value: "business", icon: "📊" },
            { text: "🎨 Art / Literature / Design", value: "creative", icon: "🎨" }
        ]
    },
    {
        id: 6,
        icon: "🌍",
        question: "Where do you see yourself working?",
        answers: [
            { text: "🇲🇲 In Myanmar (Serving my country)", value: "local", icon: "🇲🇲" },
            { text: "✈️ Abroad (International opportunities)", value: "abroad", icon: "✈️" },
            { text: "🌐 Remote (Work from anywhere)", value: "tech", icon: "🌐" },
            { text: "🤝 Both (Flexible between locations)", value: "flexible", icon: "🤝" }
        ]
    },
    {
        id: 7,
        icon: "⚙️",
        question: "How do you prefer to work?",
        answers: [
            { text: "🧑‍💻 Independently (Solo projects)", value: "tech", icon: "🧑‍💻" },
            { text: "👥 With people (Team collaboration)", value: "people", icon: "👥" },
            { text: "👔 Leading teams (Management)", value: "business", icon: "👔" },
            { text: "🎨 Creative collaboration", value: "creative", icon: "🎨" }
        ]
    },
    {
        id: 8,
        icon: "💪",
        question: "What's your biggest strength?",
        answers: [
            { text: "🧠 Problem-solving & Logic", value: "tech", icon: "🧠" },
            { text: "💝 Empathy & Caring for others", value: "people", icon: "💝" },
            { text: "📊 Strategic thinking", value: "business", icon: "📊" },
            { text: "💭 Imagination & Creativity", value: "creative", icon: "💭" }
        ]
    },
    {
        id: 9,
        icon: "🎓",
        question: "What type of education appeals to you?",
        answers: [
            { text: "💻 Technical / Engineering", value: "tech", icon: "💻" },
            { text: "🏥 Medical / Healthcare", value: "people", icon: "🏥" },
            { text: "📈 Business / Economics", value: "business", icon: "📈" },
            { text: "🎨 Arts / Design / Media", value: "creative", icon: "🎨" }
        ]
    },
    {
        id: 10,
        icon: "🚀",
        question: "Your dream impact on the world?",
        answers: [
            { text: "💻 Build technology that helps millions", value: "tech", icon: "💻" },
            { text: "❤️ Save lives & improve health", value: "people", icon: "❤️" },
            { text: "🌍 Create jobs & economic growth", value: "business", icon: "🌍" },
            { text: "🎭 Inspire through art & culture", value: "creative", icon: "🎭" }
        ]
    }
];

// Career Database
const careers = {
    tech: [
        {
            icon: "💻",
            title: "Software Engineer",
            description: "Design, develop, and maintain software applications, websites, and systems that power the digital world.",
            salary: "$70k - $150k USD",
            demand: "Very High 🔥",
            education: "4 years",
            myanmarUnis: [
                "University of Computer Studies (UCS)",
                "University of Information Technology (UIT)",
                "Myanmar Institute of Information Technology (MIIT)"
            ],
            abroadUnis: [
                { name: "National University of Singapore (NUS)", link: "asean-scholarship.html" },
                { name: "Massachusetts Institute of Technology (MIT)", link: "#" },
                { name: "Stanford University", link: "#" }
            ]
        },
        {
            icon: "📊",
            title: "Data Scientist",
            description: "Analyze complex data sets using AI and machine learning to help companies make better decisions.",
            salary: "$80k - $160k USD",
            demand: "Extremely High 🔥🔥",
            education: "4 years + Masters",
            myanmarUnis: [
                "University of Computer Studies (UCS)",
                "University of Information Technology (UIT)"
            ],
            abroadUnis: [
                { name: "National University of Singapore (NUS)", link: "asean-scholarship.html" },
                { name: "Carnegie Mellon University", link: "#" },
                { name: "UC Berkeley", link: "#" }
            ]
        }
    ],
    people: [
        {
            icon: "🏥",
            title: "Medical Doctor",
            description: "Diagnose and treat illnesses, perform surgeries, and improve the health and wellbeing of patients.",
            salary: "$60k - $200k USD",
            demand: "Very High 🔥",
            education: "6-7 years",
            myanmarUnis: [
                "University of Medicine",
                "University of Dental Medicine",
                "University of Pharmacy"
            ],
            abroadUnis: [
                { name: "Mahidol University (Thailand)", link: "thailand-scholarship.html" },
                { name: "National University of Singapore (Medicine)", link: "asean-scholarship.html" },
                { name: "Johns Hopkins University", link: "#" }
            ]
        },
        {
            icon: "🧑‍🏫",
            title: "Teacher / Educator",
            description: "Shape young minds, inspire students, and contribute to Myanmar's education development.",
            salary: "$20k - $60k USD",
            demand: "High 🔥",
            education: "4 years",
            myanmarUnis: [
                "Yangon University of Education",
                "Mandalay University of Education",
                "Sagaing University of Education"
            ],
            abroadUnis: [
                { name: "Nanyang Technological University (NIE)", link: "asean-scholarship.html" },
                { name: "University of Melbourne", link: "australia-scholarship.html" },
                { name: "Teachers College Columbia", link: "#" }
            ]
        }
    ],
    business: [
        {
            icon: "💼",
            title: "Business Analyst",
            description: "Help companies improve processes, make strategic decisions, and solve business challenges using data.",
            salary: "$50k - $120k USD",
            demand: "High 🔥",
            education: "4 years",
            myanmarUnis: [
                "Yangon University of Economics (YUE)",
                "University of Commerce",
                "Yangon University"
            ],
            abroadUnis: [
                { name: "National University of Singapore (Business)", link: "asean-scholarship.html" },
                { name: "London Business School", link: "uk-scholarship.html" },
                { name: "INSEAD", link: "france-scholarship.html" }
            ]
        },
        {
            icon: "💰",
            title: "Financial Analyst",
            description: "Analyze financial data, investment opportunities, and help businesses make smart money decisions.",
            salary: "$55k - $130k USD",
            demand: "High 🔥",
            education: "4 years",
            myanmarUnis: [
                "Yangon University of Economics (YUE)",
                "University of Commerce"
            ],
            abroadUnis: [
                { name: "National University of Singapore", link: "asean-scholarship.html" },
                { name: "London School of Economics", link: "uk-scholarship.html" },
                { name: "Wharton School", link: "#" }
            ]
        }
    ],
    creative: [
        {
            icon: "🎨",
            title: "UX/UI Designer",
            description: "Design beautiful, user-friendly interfaces for apps, websites, and digital products.",
            salary: "$50k - $120k USD",
            demand: "Very High 🔥",
            education: "4 years",
            myanmarUnis: [
                "University of Culture (Yangon)",
                "National University of Arts and Culture",
                "University of Computer Studies (UCS)"
            ],
            abroadUnis: [
                { name: "LASALLE College of the Arts (Singapore)", link: "asean-scholarship.html" },
                { name: "Royal College of Art (UK)", link: "uk-scholarship.html" },
                { name: "Parsons School of Design", link: "#" }
            ]
        },
        {
            icon: "📹",
            title: "Content Creator / Digital Marketer",
            description: "Create engaging content for social media, videos, and digital campaigns that reach millions.",
            salary: "$40k - $100k USD",
            demand: "High 🔥",
            education: "4 years",
            myanmarUnis: [
                "University of Culture (Yangon)",
                "Yangon University (Mass Communication)"
            ],
            abroadUnis: [
                { name: "Nanyang Technological University", link: "asean-scholarship.html" },
                { name: "New York Film Academy", link: "#" },
                { name: "University of Southern California", link: "#" }
            ]
        }
    ]
};

// Quiz State
let currentQuestionIndex = 0;
let userAnswers = {};
let scores = { tech: 0, people: 0, business: 0, creative: 0 };

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎯 Career Quiz Ready!');
});

// Start Quiz
function startQuiz() {
    document.getElementById('welcomeSection').style.display = 'none';
    document.getElementById('quizSection').classList.add('active');
    loadQuestion(0);
}

// Load Question
function loadQuestion(index) {
    const question = quizQuestions[index];

    document.getElementById('questionIcon').textContent = question.icon;
    document.getElementById('questionText').textContent = question.question;
    document.getElementById('currentQuestion').textContent = index + 1;
    document.getElementById('progressPercent').textContent = ((index + 1) * 10) + '%';
    document.getElementById('progressBar').style.width = ((index + 1) * 10) + '%';

    // Load answers
    const answersGrid = document.getElementById('answersGrid');
    answersGrid.innerHTML = '';

    question.answers.forEach((answer, i) => {
        const answerBtn = document.createElement('button');
        answerBtn.className = 'answer-btn';
        answerBtn.onclick = () => selectAnswer(index, answer.value, answerBtn);

        // Check if previously selected
        if (userAnswers[index] === answer.value) {
            answerBtn.classList.add('selected');
            document.getElementById('nextBtn').disabled = false;
        }

        answerBtn.innerHTML = `
            <div class="answer-icon">${answer.icon}</div>
            <div class="answer-text">${answer.text}</div>
        `;

        answersGrid.appendChild(answerBtn);
    });

    // Update navigation buttons
    document.getElementById('prevBtn').style.display = index > 0 ? 'block' : 'none';
    document.getElementById('nextBtn').textContent = index === 9 ? 'See Results 🎉' : 'Next →';
}

// Select Answer
function selectAnswer(questionIndex, value, button) {
    // Remove previous selection
    document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('selected');
    });

    // Mark as selected
    button.classList.add('selected');
    userAnswers[questionIndex] = value;

    // Enable next button
    document.getElementById('nextBtn').disabled = false;

    // Update scores
    scores[value] = (scores[value] || 0) + 1;
}

// Next Question
function nextQuestion() {
    if (currentQuestionIndex < 9) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
        document.getElementById('nextBtn').disabled = !userAnswers[currentQuestionIndex];
    } else {
        showResults();
    }
}

// Previous Question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

// Show Results
function showResults() {
    document.getElementById('quizSection').classList.remove('active');
    document.getElementById('resultsSection').classList.add('active');

    // Calculate top categories
    const sortedCategories = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 2); // Top 2 categories

    const careerResultsDiv = document.getElementById('careerResults');
    careerResultsDiv.innerHTML = '';

    // Show careers from top categories
    sortedCategories.forEach(([category, score]) => {
        const categoryCareers = careers[category];

        categoryCareers.forEach((career, index) => {
            const matchPercentage = Math.round((score / 10) * 100);
            const careerCard = createCareerCard(career, matchPercentage, category + index);
            careerResultsDiv.appendChild(careerCard);
        });
    });
}

// Create Career Card
function createCareerCard(career, matchPercent, id) {
    const card = document.createElement('div');
    card.className = 'career-card';
    card.id = `career-${id}`;

    card.innerHTML = `
        <div class="career-header">
            <div class="career-title-section">
                <div class="career-icon">${career.icon}</div>
                <div class="career-title">${career.title}</div>
                <span class="match-badge">${matchPercent}% Match</span>
            </div>
        </div>

        <div class="career-description">${career.description}</div>

        <div class="career-stats">
            <div class="stat-item">
                <div class="stat-label">Salary Range</div>
                <div class="stat-value">${career.salary}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Job Demand</div>
                <div class="stat-value">${career.demand}</div>
            </div>
            <div class="stat-item">
                <div class="stat-label">Education</div>
                <div class="stat-value">${career.education}</div>
            </div>
        </div>

        <button class="explore-btn" onclick="toggleUniversities('${id}')">
            📚 Explore Universities ⬇️
        </button>

        <div class="universities-dropdown" id="uni-${id}">
            <div class="uni-section">
                <div class="uni-section-title">🇲🇲 Study in Myanmar:</div>
                <div class="uni-list">
                    ${career.myanmarUnis.map(uni => `
                        <div class="uni-item">
                            <div class="uni-name">${uni}</div>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="uni-section">
                <div class="uni-section-title">🌍 Study Abroad (Scholarships Available):</div>
                <div class="uni-list">
                    ${career.abroadUnis.map(uni => `
                        <div class="uni-item" onclick="window.location.href='${uni.link}'">
                            <div class="uni-name">
                                ${uni.name}
                                <span class="uni-tag abroad">Scholarship</span>
                            </div>
                            <a href="${uni.link}" class="scholarship-link">View Scholarship Details →</a>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    return card;
}

// Toggle Universities Dropdown
function toggleUniversities(careerId) {
    const dropdown = document.getElementById(`uni-${careerId}`);
    const button = document.querySelector(`#career-${careerId} .explore-btn`);

    if (dropdown.classList.contains('expanded')) {
        dropdown.classList.remove('expanded');
        button.innerHTML = '📚 Explore Universities ⬇️';
        button.classList.remove('active');
    } else {
        // Close all other dropdowns
        document.querySelectorAll('.universities-dropdown').forEach(d => {
            d.classList.remove('expanded');
        });
        document.querySelectorAll('.explore-btn').forEach(b => {
            b.innerHTML = '📚 Explore Universities ⬇️';
            b.classList.remove('active');
        });

        // Open this dropdown
        dropdown.classList.add('expanded');
        button.innerHTML = '⬆️ Hide Universities';
        button.classList.add('active');
    }
}

// Retake Quiz
function retakeQuiz() {
    currentQuestionIndex = 0;
    userAnswers = {};
    scores = { tech: 0, people: 0, business: 0, creative: 0 };

    document.getElementById('resultsSection').classList.remove('active');
    document.getElementById('quizSection').classList.add('active');
    loadQuestion(0);
}

console.log('✅ Career Quiz JavaScript Loaded!');
