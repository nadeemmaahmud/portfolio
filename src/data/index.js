export const NAV_LINKS = ["About", "Experience", "Skills", "Projects", "Achievements", "Contact"];

export const EXPERIENCES = [
  {
    role: "Jr. Backend Developer",
    company: "Join Venture AI",
    location: "Dhaka, Bangladesh",
    period: "Oct 2025 – Present",
    points: [
      "Designed, developed, and maintained scalable RESTful backend services using Python and Django REST Framework for AI-powered business applications.",
      "Integrated third-party APIs and internal AI microservices; implemented JWT-based authentication and role-based access control for secure, production-ready systems.",
      "Optimized system performance, scalability, and reliability through PostgreSQL query tuning, Redis-based API caching, efficient schema design, and implementing rate limiting/throttling.",
      "Built reliable, non-blocking backend workflows using asynchronous programming and Celery/Redis background task processing, integrated with machine learning pipelines.",
      "Wrote and maintained comprehensive unit and integration tests to ensure the stability and reliability of REST APIs and backend processes.",
      "Collaborated with product and engineering teams using Docker and AWS-based cloud deployment workflows, following clean architecture and scalable coding practices.",
    ],
  },
  {
    role: "Team Leader",
    company: "Vcube Soft and Tech Limited",
    location: "Dhaka, Bangladesh",
    period: "Jun 2019 – Oct 2024",
    points: [
      "Promoted from Operator to Project Quality Checker, Mentor, and Team Leader through consistent performance.",
      "Managed team coordination, quality assurance, and workflow optimization for 2D/3D building floor plan projects.",
      "Mentored new team members and maintained productive communication across remote and in-office teams.",
    ],
  },
];

export const SKILLS = [
  { category: "Languages", color: "indigo", items: ["Python", "JavaScript"] },
  { category: "Frameworks & Libraries", color: "violet", items: ["Django", "DRF", "React", "Redux", "FastAPI (learning)"] },
  { category: "Design & Styling", color: "amber", items: ["HTML", "CSS", "Tailwind", "Bootstrap"] },
  { category: "Databases", color: "cyan", items: ["PostgreSQL", "MySQL", "SQLite"] },
  { category: "Brokers & Cache", color: "emerald", items: ["Redis", "RabbitMQ", "Celery"] },
  { 
    category: "Backend & Architecture", 
    color: "amber", 
    items: ["RESTful API", "WebSocket", "JWT & RBAC", "API Caching", "Throttling", "Asynchronous Programming", "AI Microservices", "System Optimization"] 
  },
  { category: "Tools & DevOps", color: "red", items: ["Git", "Docker", "VPS", "AWS", "CI/CD", "Postman"] },
];

export const PROJECTS = [
  {
    name: "AI Powered Insurance App",
    sub: "Clamea",
    client: "🇸🇪 Swedish Client",
    gradient: "from-indigo-500 to-violet-500",
    description: "Freemium insurance platform featuring a real-time AI chatbot via WebSocket, Firebase social auth, JWT authentication with API throttling, cursor-based pagination, and automated weekly claim reminders via Celery/Redis and Firebase Push Notifications.",
    stack: ["Django", "DRF", "WebSocket", "Django Channels", "AI Microservice", "Celery", "Redis", "API Throttling", "In-App Purchases", "Firebase Push Notifications", "PostgreSQL"],
  },
  {
    name: "Eat At Home",
    sub: "Nutrition Analytics",
    client: "🇺🇸 US Client",
    gradient: "from-cyan-500 to-blue-500",
    description: "Meal tracking and nutrition analytics platform integrating Plaid API for bank transactions. Includes an AI microservice for food photo analysis, with Redis caching for AI responses to significantly reduce API latency.",
    stack: ["Django", "DRF", "Plaid API", "PostgreSQL", "AI Microservice", "Redis Caching", "Celery", "Redis", "Firebase", "CI/CD", "AWS EC2"],
  },
  {
    name: "RnD Taxbot",
    sub: "Tax Automation",
    client: "🇦🇺 Australian Client",
    gradient: "from-emerald-500 to-cyan-500",
    description: "Tax rebate automation platform with an AI-powered multi-turn WebSocket interview flow. Features secure document access control and optimized PostgreSQL schemas for complex multi-stage approval workflows.",
    stack: ["Django", "DRF", "WebSocket", "Django Channels", "AI Microservice", "Celery", "Redis", "PostgreSQL", "RBAC", "VPS"],
  },
  {
    name: "Animal Service",
    sub: "Pet E-commerce",
    client: "🇸🇦 KSA Client",
    gradient: "from-amber-500 to-red-500",
    description: "Pet marketplace with listings, auctions, and vet bookings. Integrates Google Maps API for proximity-based transport matching, real-time push notifications, Telr payment, and Redis caching for high-traffic marketplace queries.",
    stack: ["Django", "DRF", "Celery", "Redis Caching", "RabbitMQ", "Telr Payment", "Socket.IO", "Google Maps API", "OneSignal", "PostgreSQL", "Docker", "RBAC", "VPS"],
  },
];

export const ACHIEVEMENTS = [
  { value: "600+", label: "Problems Solved", sub: "Codeforces · LeetCode · HackerRank", color: "text-indigo-400" },
  { value: "38th", label: "CodeChef Weekly", sub: "All problems solved, June 2025", color: "text-cyan-400" },
  { value: "11th", label: "Inter Polytechnic", sub: "Programming Contest at IUBAT", color: "text-emerald-400" },
  { value: "4", label: "Live Projects", sub: "3 international clients", color: "text-amber-400" },
];

export const PROBLEM_SOLVING_PROFILES = [
  {
    platform: "LeetCode",
    username: "nadeemmaahmud",
    url: "https://leetcode.com/nadeemmaahmud/",
    color: "text-[#FFA116] border-[#FFA116]/30 bg-[#FFA116]/5 hover:bg-[#FFA116]/10",
  },
  {
    platform: "Codeforces",
    username: "nadeemmaahmud",
    url: "https://codeforces.com/profile/nadeemmaahmud/",
    color: "text-[#3B82F6] border-[#3B82F6]/30 bg-[#3B82F6]/5 hover:bg-[#3B82F6]/10",
  },
  {
    platform: "CodeChef",
    username: "nadeemmaahmud",
    url: "https://www.codechef.com/users/nadeemmaahmud/",
    color: "text-[#905a37] border-[#905a37]/30 bg-[#905a37]/5 hover:bg-[#905a37]/10",
  },
  {
    platform: "HackerRank",
    username: "nadeemmaahmud",
    url: "https://www.hackerrank.com/nadeemmaahmud/",
    color: "text-[#2EC866] border-[#2EC866]/30 bg-[#2EC866]/5 hover:bg-[#2EC866]/10",
  },
  {
    platform: "InterviewBit",
    username: "nadeemmaahmud",
    url: "https://www.interviewbit.com/profile/nadeemmaahmud/",
    color: "text-[#007AFF] border-[#007AFF]/30 bg-[#007AFF]/5 hover:bg-[#007AFF]/10",
  },
];