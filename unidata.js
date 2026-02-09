// universities-data.js - All University Data
const universitiesData = {
    
    // University of Computer Studies, Taunggyi
    "ucst": {
        name: "University of Computer Studies, Taunggyi",
        subtitle: "Leading Technology Education in Shan State",
        location: "Taunggyi, Shan State",
        region: "Shan State",
        type: "Technology University",
        founded: "1998",
        image: "images/ucst-campus.jpg",
        logo: "images/ucst-logo.png",
        stats: {
            students: "2,500+",
            programs: "5",
            faculty: "120+",
            projects: "15+"
        },
        quickInfo: {
            type: "Government",
            location: "Taunggyi, Shan State",
            campusSize: "25 Acres",
            language: "Myanmar, English"
        },
        minMarks: "380+",
        requiredSubjects: ["Mathematics", "Physics", "English"],
        contact: {
            phone: "+95 81 212 xxxx",
            email: "info@ucst.edu.mm",
            website: "www.ucst.edu.mm"
        },
        about: "The University of Computer Studies, Taunggyi (UCST) is a leading technology institution in Shan State, established in 1998. The university focuses on producing skilled IT professionals and computer scientists who contribute to Myanmar's digital transformation.",
        whyChoose: [
            {
                icon: "💻",
                title: "Modern Facilities",
                description: "Well-equipped computer labs with latest technology"
            },
            {
                icon: "👥",
                title: "Experienced Faculty",
                description: "Learn from industry experts and PhD holders"
            },
            {
                icon: "🌟",
                title: "Strong Alumni Network",
                description: "Connect with successful graduates across tech industry"
            },
            {
                icon: "🚀",
                title: "Innovation Hub",
                description: "Active research and student project initiatives"
            }
        ],
        majors: [
            {
                name: "Computer Science (CS)",
                degree: "B.C.Sc / M.C.Sc",
                icon: "💻",
                description: "Core computer science principles, algorithms, software development, and system design.",
                duration: "4 Years (Bachelor)",
                minMarks: "380",
                prerequisites: "Math, Physics, English",
                subjects: ["Data Structures", "Algorithms", "Java/C++", "Database"]
            },
            {
                name: "Computer Technology (CT)",
                degree: "B.C.Tech",
                icon: "🌐",
                description: "Focus on hardware, networking, system administration, and technical infrastructure.",
                duration: "4 Years",
                minMarks: "360",
                prerequisites: "Math, Physics",
                subjects: ["Networking", "Hardware", "System Admin", "Cloud Computing"]
            },
            {
                name: "Information Technology (IT)",
                degree: "B.I.T",
                icon: "📊",
                description: "Business applications, information systems, and enterprise technology solutions.",
                duration: "4 Years",
                minMarks: "370",
                prerequisites: "Math, English",
                subjects: ["IT Management", "Web Development", "Mobile Apps", "E-Commerce"]
            }
        ],
        projects: [
            {
                year: "2025",
                type: "Research",
                badge: "research",
                title: "AI-Powered Myanmar Language Processing",
                description: "Developed advanced NLP models for Myanmar language translation and text analysis, improving accuracy by 40%.",
                tags: ["AI/ML", "NLP", "Research"]
            },
            {
                year: "2024",
                type: "Award",
                badge: "award",
                title: "Smart Campus Management System",
                description: "Won national competition with innovative campus management platform integrating attendance, scheduling, and student services.",
                tags: ["Web App", "Database", "Award Winner"]
            }
        ],
        campusLife: [
            {
                title: "Student Organizations",
                image: "images/clubs.jpg",
                description: "Active tech clubs, coding competitions, hackathons, and student-led initiatives fostering innovation and teamwork."
            },
            {
                title: "Modern Facilities",
                image: "images/facilities.jpg",
                description: "24/7 computer labs, high-speed internet, modern library, cafeteria, sports grounds, and student common areas."
            },
            {
                title: "Events & Activities",
                image: "images/events.jpg",
                description: "Annual tech fest, cultural events, sports tournaments, guest lectures from industry professionals."
            }
        ],
        testimonials: [
            {
                quote: "UCST gave me the skills and confidence to pursue my dream career in software development. The faculty support is amazing!",
                author: "Mg Kyaw Thu",
                role: "CS Graduate, 2024"
            },
            {
                quote: "The project-based learning approach helped me build a strong portfolio. I landed a job even before graduation!",
                author: "Su Myat Mon",
                role: "IT Graduate, 2024"
            }
        ],
        careers: [
            {
                icon: "👨‍💻",
                title: "Software Developer",
                description: "Build applications, websites, and software systems for local and international companies.",
                salary: "400,000 - 1,500,000 MMK/month"
            },
            {
                icon: "🔒",
                title: "Cybersecurity Specialist",
                description: "Protect systems and networks from cyber threats in banking, government, and tech sectors.",
                salary: "500,000 - 2,000,000 MMK/month"
            },
            {
                icon: "📊",
                title: "Data Analyst",
                description: "Analyze data to drive business decisions in telecommunications, e-commerce, and finance.",
                salary: "450,000 - 1,800,000 MMK/month"
            }
        ],
        employers: ["Wave Money", "KBZ Bank", "Ooredoo", "Telenor", "Government IT", "Tech Startups"]
    },
    
    // Yangon Technological University
    "ytu": {
        name: "Yangon Technological University",
        subtitle: "Myanmar's Premier Engineering Institution",
        location: "Yangon Region",
        region: "Yangon",
        type: "Engineering University",
        founded: "1952",
        image: "images/ytu-campus.jpg",
        logo: "images/ytu-logo.png",
        stats: {
            students: "8,000+",
            programs: "10",
            faculty: "300+",
            projects: "25+"
        },
        quickInfo: {
            type: "Government",
            location: "Insein, Yangon Region",
            campusSize: "100 Acres",
            language: "Myanmar, English"
        },
        minMarks: "420+",
        requiredSubjects: ["Mathematics", "Physics", "Chemistry"],
        contact: {
            phone: "+95 1 664 240",
            email: "info@ytu.edu.mm",
            website: "www.ytu.edu.mm"
        },
        about: "Yangon Technological University (YTU) is Myanmar's oldest and most prestigious engineering institution, founded in 1952. As the flagship technological university, YTU has produced generations of engineers who have contributed significantly to Myanmar's infrastructure, industrial development, and technological advancement. The university offers comprehensive engineering programs and maintains strong partnerships with international universities and industry leaders.",
        whyChoose: [
            {
                icon: "🏆",
                title: "Top Ranked",
                description: "Myanmar's #1 engineering university with 70+ years of excellence"
            },
            {
                icon: "🔬",
                title: "Advanced Labs",
                description: "State-of-the-art engineering labs and research facilities"
            },
            {
                icon: "🌍",
                title: "International Partners",
                description: "Collaborations with universities in Japan, Germany, USA, and more"
            },
            {
                icon: "💼",
                title: "Industry Connections",
                description: "Strong ties with major engineering companies and government projects"
            }
        ],
        majors: [
            {
                name: "Civil Engineering",
                degree: "B.E (Civil) / M.E (Civil)",
                icon: "🏗️",
                description: "Design and construction of infrastructure including bridges, buildings, roads, and water systems.",
                duration: "5 Years (Bachelor)",
                minMarks: "420",
                prerequisites: "Math, Physics, Chemistry",
                subjects: ["Structural Engineering", "Geotechnical", "Transportation", "Hydraulics"]
            },
            {
                name: "Mechanical Engineering",
                degree: "B.E (Mech) / M.E (Mech)",
                icon: "⚙️",
                description: "Design, analysis, and manufacturing of mechanical systems, machinery, and energy systems.",
                duration: "5 Years",
                minMarks: "430",
                prerequisites: "Math, Physics, Chemistry",
                subjects: ["Thermodynamics", "Machine Design", "Manufacturing", "Robotics"]
            },
            {
                name: "Electrical Power Engineering",
                degree: "B.E (EP) / M.E (Power)",
                icon: "⚡",
                description: "Generation, transmission, distribution of electrical power and renewable energy systems.",
                duration: "5 Years",
                minMarks: "425",
                prerequisites: "Math, Physics",
                subjects: ["Power Systems", "Electrical Machines", "Grid Management", "Renewable Energy"]
            },
            {
                name: "Electronic Engineering",
                degree: "B.E (EC) / M.E (EC)",
                icon: "📡",
                description: "Design and development of electronic circuits, communication systems, and embedded systems.",
                duration: "5 Years",
                minMarks: "415",
                prerequisites: "Math, Physics",
                subjects: ["Digital Electronics", "Microcontrollers", "Signal Processing", "IoT"]
            },
            {
                name: "Chemical Engineering",
                degree: "B.E (Chem) / M.E (Chem)",
                icon: "⚗️",
                description: "Chemical processes, plant design, petroleum refining, and industrial production.",
                duration: "5 Years",
                minMarks: "410",
                prerequisites: "Math, Physics, Chemistry",
                subjects: ["Process Control", "Thermodynamics", "Reaction Engineering", "Industrial Chemistry"]
            },
            {
                name: "Mechatronic Engineering",
                degree: "B.E (Mechatronic)",
                icon: "🤖",
                description: "Integration of mechanical, electronic, and computer engineering for automation and robotics.",
                duration: "5 Years",
                minMarks: "420",
                prerequisites: "Math, Physics",
                subjects: ["Robotics", "Automation", "Control Systems", "AI for Engineering"]
            }
        ],
        projects: [
            {
                year: "2025",
                type: "Infrastructure",
                badge: "research",
                title: "Smart Bridge Monitoring System",
                description: "Developed IoT-based structural health monitoring system for Yangon's major bridges, improving safety and maintenance efficiency.",
                tags: ["Civil Engineering", "IoT", "Infrastructure"]
            },
            {
                year: "2024",
                type: "Award",
                badge: "award",
                title: "Solar Power Micro-Grid for Rural Areas",
                description: "Won ASEAN Engineering Innovation Award for designing affordable solar micro-grid systems serving 20+ villages.",
                tags: ["Renewable Energy", "Power Systems", "Social Impact"]
            },
            {
                year: "2024",
                type: "Innovation",
                badge: "research",
                title: "Automated Rice Milling System",
                description: "Created AI-powered automated rice processing system improving efficiency by 60% for local agricultural industry.",
                tags: ["Mechanical", "Automation", "Agriculture"]
            },
            {
                year: "2023",
                type: "Research",
                badge: "research",
                title: "Earthquake-Resistant Building Design",
                description: "Research on cost-effective earthquake-resistant construction methods suitable for Myanmar's seismic zones.",
                tags: ["Civil Engineering", "Research", "Safety"]
            },
            {
                year: "2023",
                type: "Innovation",
                badge: "research",
                title: "Electric Vehicle Charging Infrastructure",
                description: "Pilot project designing EV charging station network for Yangon metropolitan area.",
                tags: ["Electrical", "Sustainability", "Urban Planning"]
            }
        ],
        campusLife: [
            {
                title: "Engineering Societies",
                image: "images/ytu-societies.jpg",
                description: "Active student chapters of IEEE, ASCE, ASME with regular workshops, competitions, and industry visits. Annual engineering exhibitions and innovation challenges."
            },
            {
                title: "World-Class Facilities",
                image: "images/ytu-facilities.jpg",
                description: "Advanced engineering labs, CAD centers, machine workshops, materials testing labs, power systems lab, and extensive library with 100,000+ technical books."
            },
            {
                title: "Campus Culture",
                image: "images/ytu-events.jpg",
                description: "Engineering Week celebrations, sports tournaments, cultural festivals, and regular guest lectures from industry leaders and international experts."
            }
        ],
        testimonials: [
            {
                quote: "YTU's rigorous training and hands-on projects prepared me perfectly for real-world engineering challenges. I'm now working on major infrastructure projects across Myanmar.",
                author: "Eng. Zaw Min Oo",
                role: "Civil Engineering Graduate, 2023"
            },
            {
                quote: "The faculty's industry experience and the university's partnerships gave me opportunities to work on cutting-edge renewable energy projects during my studies.",
                author: "Ma Thin Thin Aye",
                role: "Electrical Power Graduate, 2024"
            }
        ],
        careers: [
            {
                icon: "🏗️",
                title: "Civil Engineer",
                description: "Design and manage construction of buildings, bridges, roads, and infrastructure projects.",
                salary: "500,000 - 2,500,000 MMK/month"
            },
            {
                icon: "⚡",
                title: "Power Systems Engineer",
                description: "Work on power generation, transmission, and distribution projects including renewable energy.",
                salary: "600,000 - 2,800,000 MMK/month"
            },
            {
                icon: "⚙️",
                title: "Mechanical Design Engineer",
                description: "Design machinery, industrial equipment, and manufacturing systems for various industries.",
                salary: "550,000 - 2,500,000 MMK/month"
            },
            {
                icon: "🤖",
                title: "Automation Engineer",
                description: "Develop automated systems and robotics for manufacturing and industrial applications.",
                salary: "700,000 - 3,000,000 MMK/month"
            },
            {
                icon: "🏭",
                title: "Project Engineer",
                description: "Lead engineering projects for construction companies, oil & gas, and manufacturing sectors.",
                salary: "800,000 - 3,500,000 MMK/month"
            },
            {
                icon: "🔬",
                title: "R&D Engineer",
                description: "Conduct research and development in engineering firms and government institutions.",
                salary: "600,000 - 2,000,000 MMK/month"
            }
        ],
        employers: ["Max Myanmar", "Asia World", "MEPE", "Shwe Taung Group", "Government Engineering Dept", "International Engineering Firms"]
    },
    
    // Mandalay Technological University
    "mtu": {
        name: "Mandalay Technological University",
        subtitle: "Excellence in Engineering Education",
        location: "Mandalay Region",
        region: "Mandalay",
        type: "Engineering University",
        founded: "1991",
        image: "images/mtu-campus.jpg",
        logo: "images/mtu-logo.png",
        stats: {
            students: "6,000+",
            programs: "9",
            faculty: "250+",
            projects: "20+"
        },
        quickInfo: {
            type: "Government",
            location: "Patheingyi, Mandalay Region",
            campusSize: "80 Acres",
            language: "Myanmar, English"
        },
        minMarks: "410+",
        requiredSubjects: ["Mathematics", "Physics", "Chemistry"],
        contact: {
            phone: "+95 2 90451",
            email: "info@mtu.edu.mm",
            website: "www.mtu.edu.mm"
        },
        about: "Mandalay Technological University (MTU) was established in 1991 as Upper Myanmar's premier engineering institution. Located in Mandalay, the country's second-largest city, MTU serves as the engineering education hub for the northern and central regions. The university is known for its strong focus on aerospace engineering, mechatronics, and industrial engineering, producing highly skilled engineers who contribute to Myanmar's technological and industrial development.",
        whyChoose: [
            {
                icon: "✈️",
                title: "Aerospace Hub",
                description: "Only university in Myanmar offering Aerospace Engineering program"
            },
            {
                icon: "🎯",
                title: "Industry Focus",
                description: "Strong emphasis on practical training and industry partnerships"
            },
            {
                icon: "🏙️",
                title: "Strategic Location",
                description: "Located in Mandalay, gateway to Upper Myanmar's industrial zones"
            },
            {
                icon: "👨‍🏫",
                title: "Expert Faculty",
                description: "Experienced professors with international qualifications and industry experience"
            }
        ],
        majors: [
            {
                name: "Aerospace Engineering",
                degree: "B.E (Aerospace)",
                icon: "✈️",
                description: "Design, development, and maintenance of aircraft, spacecraft, and aviation systems.",
                duration: "5 Years",
                minMarks: "430",
                prerequisites: "Math, Physics, Chemistry",
                subjects: ["Aerodynamics", "Aircraft Structures", "Propulsion Systems", "Flight Mechanics"]
            },
            {
                name: "Mechanical Engineering",
                degree: "B.E (Mech) / M.E (Mech)",
                icon: "⚙️",
                description: "Mechanical systems design, manufacturing processes, and industrial machinery.",
                duration: "5 Years",
                minMarks: "415",
                prerequisites: "Math, Physics, Chemistry",
                subjects: ["Machine Design", "Manufacturing", "CAD/CAM", "Materials Science"]
            },
            {
                name: "Electrical Power Engineering",
                degree: "B.E (EP) / M.E (Power)",
                icon: "⚡",
                description: "Power generation, transmission systems, and electrical infrastructure.",
                duration: "5 Years",
                minMarks: "420",
                prerequisites: "Math, Physics",
                subjects: ["Power Systems", "High Voltage", "Power Electronics", "Smart Grids"]
            },
            {
                name: "Electronics Engineering",
                degree: "B.E (EC) / M.E (EC)",
                icon: "📡",
                description: "Electronic systems, telecommunications, and embedded technology.",
                duration: "5 Years",
                minMarks: "410",
                prerequisites: "Math, Physics",
                subjects: ["Digital Systems", "Communications", "VLSI Design", "Embedded Systems"]
            },
            {
                name: "Civil Engineering",
                degree: "B.E (Civil)",
                icon: "🏗️",
                description: "Infrastructure development, construction management, and structural design.",
                duration: "5 Years",
                minMarks: "410",
                prerequisites: "Math, Physics, Chemistry",
                subjects: ["Structural Analysis", "Construction Management", "Highway Engineering", "Water Resources"]
            },
            {
                name: "Mechatronic Engineering",
                degree: "B.E (Mechatronic)",
                icon: "🤖",
                description: "Integration of mechanics, electronics, and computing for intelligent systems.",
                duration: "5 Years",
                minMarks: "425",
                prerequisites: "Math, Physics",
                subjects: ["Robotics", "Control Engineering", "Sensors & Actuators", "Industrial Automation"]
            },
            {
                name: "Industrial Engineering",
                degree: "B.E (Ind)",
                icon: "🏭",
                description: "Optimization of production systems, quality management, and operations research.",
                duration: "5 Years",
                minMarks: "400",
                prerequisites: "Math, Physics",
                subjects: ["Production Planning", "Quality Control", "Operations Research", "Supply Chain"]
            }
        ],
        projects: [
            {
                year: "2025",
                type: "Innovation",
                badge: "research",
                title: "Drone Technology for Agriculture",
                description: "Developed agricultural monitoring drones for crop health assessment and precision farming, serving farmers in Mandalay and Sagaing regions.",
                tags: ["Aerospace", "Agriculture", "Drones"]
            },
            {
                year: "2024",
                type: "Award",
                badge: "award",
                title: "Smart Manufacturing System",
                description: "Won National Innovation Award for developing IoT-based smart manufacturing system for local garment industry.",
                tags: ["Industrial Engineering", "IoT", "Manufacturing"]
            },
            {
                year: "2024",
                type: "Research",
                badge: "research",
                title: "Renewable Energy Integration",
                description: "Research on integrating solar and wind energy into Mandalay's power grid for sustainable energy transition.",
                tags: ["Power Systems", "Renewable Energy", "Research"]
            },
            {
                year: "2023",
                type: "Innovation",
                badge: "research",
                title: "Automated Quality Control System",
                description: "Machine vision-based quality inspection system for manufacturing industries, reducing defects by 75%.",
                tags: ["Mechatronics", "AI", "Quality Control"]
            },
            {
                year: "2023",
                type: "Infrastructure",
                badge: "research",
                title: "Traffic Management AI System",
                description: "AI-powered traffic flow optimization system piloted at major Mandalay intersections.",
                tags: ["Civil Engineering", "AI", "Urban Planning"]
            }
        ],
        campusLife: [
            {
                title: "Engineering Clubs",
                image: "images/mtu-clubs.jpg",
                description: "Aerospace club, robotics club, electronics society, and industrial engineering association. Regular competitions, workshops, and industry visits to Mandalay's industrial zones."
            },
            {
                title: "Modern Infrastructure",
                image: "images/mtu-labs.jpg",
                description: "Aerospace lab with wind tunnel, advanced manufacturing workshop, robotics lab, electronics prototyping center, and comprehensive engineering library."
            },
            {
                title: "Student Life",
                image: "images/mtu-life.jpg",
                description: "Annual engineering expo, inter-university competitions, cultural celebrations, sports facilities, and vibrant student organizations fostering leadership."
            }
        ],
        testimonials: [
            {
                quote: "MTU's aerospace program is unique in Myanmar. The hands-on training with drones and aircraft systems prepared me for my career in aviation engineering.",
                author: "Eng. Aung Ko Ko",
                role: "Aerospace Engineering Graduate, 2024"
            },
            {
                quote: "The industrial engineering program's focus on real factory problems helped me immediately contribute when I joined a manufacturing company.",
                author: "Ma Hnin Wai Lwin",
                role: "Industrial Engineering Graduate, 2023"
            }
        ],
        careers: [
            {
                icon: "✈️",
                title: "Aerospace Engineer",
                description: "Work in aviation industry on aircraft maintenance, design, and aerospace systems.",
                salary: "800,000 - 3,500,000 MMK/month"
            },
            {
                icon: "🤖",
                title: "Robotics Engineer",
                description: "Design and program robots for manufacturing, healthcare, and industrial automation.",
                salary: "700,000 - 3,000,000 MMK/month"
            },
            {
                icon: "🏭",
                title: "Industrial Engineer",
                description: "Optimize production processes in manufacturing, garment, and food processing industries.",
                salary: "500,000 - 2,200,000 MMK/month"
            },
            {
                icon: "⚡",
                title: "Electrical Engineer",
                description: "Design power systems, work on grid infrastructure, and renewable energy projects.",
                salary: "600,000 - 2,500,000 MMK/month"
            },
            {
                icon: "🔧",
                title: "Maintenance Engineer",
                description: "Manage maintenance of industrial equipment, factories, and power plants.",
                salary: "550,000 - 2,000,000 MMK/month"
            },
            {
                icon: "📊",
                title: "Quality Assurance Engineer",
                description: "Ensure product quality and process optimization in manufacturing sectors.",
                salary: "500,000 - 1,800,000 MMK/month"
            }
        ],
        employers: ["Myanmar Airways", "Mann Group", "CG Myanmar", "Ace Agribusiness", "Mandalay Industrial Zones", "Engineering Consultancies"]
    }
    
    // You can add more universities here following the same format
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = universitiesData;
}
