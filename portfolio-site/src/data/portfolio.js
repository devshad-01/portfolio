/**
 * Portfolio Data
 * 
 * This file contains all portfolio content.
 * When Sanity CMS is configured, this data serves as fallback.
 * 
 * Data Schema designed for easy Sanity migration:
 * - Each section has consistent field naming
 * - Dates use ISO format strings
 * - References use slug patterns
 */

// ==================== PROJECTS ====================
export const projectsData = [
  {
    id: 'hms',
    slug: 'hms',
    featured: true,
    title: 'HMS',
    description: 'Hospital management application for healthcare facilities',
    longDescription: 'A comprehensive hospital management system designed to streamline patient records, appointments, billing, and medical staff coordination. Features real-time updates and role-based access control.',
    problem: 'Healthcare facilities struggle with paper-based records and disconnected systems, leading to inefficiencies and potential errors in patient care.',
    solution: 'Built a unified platform that digitizes all hospital operations, from patient registration to discharge, with secure data handling and intuitive interfaces for medical staff.',
    techStack: ['React', 'Spring Boot', 'Docker', 'PostgreSQL'],
    learnings: 'Gained deep understanding of healthcare domain requirements, HIPAA considerations, and building scalable enterprise applications.',
    githubUrl: 'https://github.com/mutinda',
    thumbnail: '/projects/hms.png',
    year: '2024',
    category: 'fullstack'
  },
  {
    id: 'safelife',
    slug: 'safelife',
    featured: true,
    title: 'SafeLife',
    description: 'Urban security application for community safety',
    longDescription: 'A community-driven urban security platform that enables real-time incident reporting, emergency alerts, and neighborhood watch coordination.',
    problem: 'Urban communities lack effective tools for coordinating safety efforts and sharing real-time security information.',
    solution: 'Developed a mobile-first application with geolocation-based incident reporting, push notifications for nearby alerts, and community forums.',
    techStack: ['Next.js', 'Laravel', 'MySQL', 'Redis'],
    learnings: 'Learned about real-time systems, geospatial data handling, and building applications that serve community needs.',
    githubUrl: 'https://github.com/mutinda',
    thumbnail: '/projects/safelife.png',
    year: '2024',
    category: 'fullstack'
  },
  {
    id: 'pro-sales',
    slug: 'pro-sales',
    featured: true,
    title: 'Pro Sales',
    description: 'Commercial management application for sales teams',
    longDescription: 'An all-in-one commercial management solution for tracking sales pipelines, customer relationships, inventory, and generating business intelligence reports.',
    problem: 'Sales teams often use multiple disconnected tools, making it difficult to get a unified view of commercial operations.',
    solution: 'Created an integrated platform combining CRM, inventory management, and analytics with a focus on user experience and actionable insights.',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'MongoDB'],
    learnings: 'Understanding of business operations, sales workflows, and building data-driven applications.',
    githubUrl: 'https://github.com/mutinda',
    thumbnail: '/projects/prosales.png',
    year: '2024',
    category: 'fullstack'
  },
  {
    id: 'ci-cd-pipeline',
    slug: 'ci-cd-pipeline',
    featured: false,
    title: 'Automated CI/CD Pipeline',
    description: 'Deployment pipeline for streamlined development workflows',
    longDescription: 'Created an automated CI/CD pipeline using GitHub Actions and Docker to streamline deployment processes. Reduced deployment time from 30 minutes to under 2 minutes.',
    techStack: ['GitHub Actions', 'Docker', 'Bash', 'DigitalOcean'],
    githubUrl: 'https://github.com/mutinda',
    thumbnail: '/projects/cicd.png',
    year: '2024',
    category: 'devops'
  },
  {
    id: 'task-api',
    slug: 'task-api',
    featured: false,
    title: 'Task Management API',
    description: 'RESTful API built with Python and FastAPI',
    longDescription: 'A REST API for managing tasks and projects with JWT authentication, database relationships, and comprehensive error handling.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'JWT'],
    githubUrl: 'https://github.com/mutinda',
    liveUrl: 'https://api-demo.example.com',
    thumbnail: '/projects/api.png',
    year: '2024',
    category: 'backend'
  },
  {
    id: 'monitoring-dashboard',
    slug: 'monitoring-dashboard',
    featured: false,
    title: 'Server Monitoring Dashboard',
    description: 'Real-time dashboard to monitor server metrics',
    techStack: ['Node.js', 'Express', 'Chart.js', 'SQLite'],
    githubUrl: 'https://github.com/mutinda',
    thumbnail: '/projects/dashboard.png',
    year: '2024',
    category: 'devops'
  },
];

// ==================== WORK EXPERIENCE ====================
export const workExperienceData = [
  {
    id: 'bracongo-2024',
    company: 'BRACONGO SA',
    role: 'Software Engineer',
    type: 'Mission',
    startDate: '2024-01-01',
    endDate: null,
    current: true,
    description: 'Leading development of enterprise solutions, collaborating with cross-functional teams to deliver scalable applications.',
    technologies: ['React', 'Spring Boot', 'Docker', 'PostgreSQL'],
    location: 'Kinshasa, DRC'
  },
  {
    id: 'boissons-2023',
    company: 'Boissons du Cameroun SA',
    role: 'Software Engineer',
    type: 'Mission',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    current: false,
    description: 'Developed and maintained internal tools and applications, improving operational efficiency across departments.',
    technologies: ['Node.js', 'React', 'MySQL', 'AWS'],
    location: 'Douala, Cameroon'
  },
  {
    id: 'boissons-2022',
    company: 'Boissons du Cameroun SA',
    role: 'Software Developer',
    type: 'Mission',
    startDate: '2022-01-01',
    endDate: '2022-12-31',
    current: false,
    description: 'Started as a developer, contributing to various projects and learning enterprise development practices.',
    technologies: ['Python', 'Django', 'PostgreSQL'],
    location: 'Douala, Cameroon'
  }
];

// ==================== EDUCATION ====================
export const educationData = [
  {
    id: 'university-cs',
    institution: 'University of Nairobi',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    startDate: '2020-09-01',
    endDate: '2024-06-30',
    current: false,
    description: 'Focused on software engineering, algorithms, and distributed systems.',
    achievements: [
      'Dean\'s List - Academic Excellence',
      'Led university coding club',
      'Completed capstone project on distributed systems'
    ]
  }
];

// ==================== CERTIFICATIONS ====================
export const certificationsData = [
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024-03-15',
    expiryDate: '2027-03-15',
    credentialId: 'AWS-CP-2024',
    credentialUrl: 'https://aws.amazon.com/verification',
    image: '/certifications/aws-cp.png'
  },
  {
    id: 'docker-certified',
    name: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: '2024-01-20',
    expiryDate: '2026-01-20',
    credentialId: 'DCA-2024',
    credentialUrl: 'https://docker.com/verification',
    image: '/certifications/docker.png'
  },
  {
    id: 'kubernetes-ckad',
    name: 'Kubernetes CKAD',
    issuer: 'Cloud Native Computing Foundation',
    date: '2023-11-10',
    expiryDate: '2026-11-10',
    credentialId: 'CKAD-2023',
    credentialUrl: 'https://cncf.io/verification',
    image: '/certifications/ckad.png'
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions Certified',
    issuer: 'GitHub',
    date: '2023-08-05',
    expiryDate: null,
    credentialId: 'GH-ACTIONS-2023',
    credentialUrl: 'https://github.com/verification',
    image: '/certifications/github.png'
  }
];

// ==================== SKILLS ====================
export const skillsData = {
  'Backend': [
    'Python',
    'Node.js',
    'Java',
    'FastAPI',
    'Spring Boot',
    'Express',
    'REST APIs',
    'GraphQL',
  ],
  'Frontend': [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
  ],
  'DevOps & Cloud': [
    'Docker',
    'Kubernetes',
    'GitHub Actions',
    'AWS',
    'Linux',
    'Nginx',
  ],
  'Databases': [
    'PostgreSQL',
    'MongoDB',
    'MySQL',
    'Redis',
  ],
};

// ==================== ABOUT ====================
export const aboutData = {
  name: 'Shadrack Mutinda',
  title: 'Full-Stack Web Developer',
  intro: "I'm a Full-Stack Developer passionate about building robust, scalable applications. With experience across the entire development stack, I bring ideas to life through clean code and thoughtful architecture.",
  journey: "My journey in tech started with curiosity about how things work behind the scenes. That curiosity led me from building simple scripts to architecting enterprise-level applications for companies across Africa.",
  current: "Currently focused on building scalable web applications and exploring cloud-native technologies. Always looking for opportunities to solve complex problems with elegant solutions.",
  interests: "When not coding, I enjoy exploring new technologies, contributing to open source, and mentoring aspiring developers in my community.",
  avatar: '/images/avatar.jpg',
  resume: '/resume.pdf',
};

// ==================== CONTACT ====================
export const contactInfo = {
  email: 'mutinda.shadrack@example.com',
  github: 'https://github.com/mutinda',
  linkedin: 'https://linkedin.com/in/mutinda',
  twitter: 'https://twitter.com/mutinda',
  location: 'Nairobi, Kenya',
  availability: 'Available for new opportunities',
};

// ==================== SITE CONFIG ====================
export const siteConfig = {
  name: 'Shadrack Mutinda',
  title: 'Full-Stack Web Developer',
  description: 'Full-Stack Developer building scalable web applications',
  url: 'https://shadrack.dev',
  ogImage: '/og-image.png',
  links: {
    github: 'https://github.com/mutinda',
    linkedin: 'https://linkedin.com/in/mutinda',
    twitter: 'https://twitter.com/mutinda',
  }
};
