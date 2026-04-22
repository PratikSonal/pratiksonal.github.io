// =========================================
// PORTFOLIO DATA — edit this file to update content
// =========================================

export const PERSONAL = {
  name:         'Pratik Sonal',
  title:        'Frontend Developer',
  taglineLine1: 'Code Crafted',
  taglineLine2: 'Into Experiences',
  subtitle:     'From pixel-perfect interfaces to scalable web apps — I build things that are fast, accessible, and genuinely delightful to use.',
  email:        'sonalpratik99@gmail.com',
  location:     'Bhubaneswar, India',
  github:       'https://github.com/PratikSonal',
  linkedin:     'https://www.linkedin.com/in/PratikSonal/',
  twitter:      'https://twitter.com/PratikSonal',
  resumeUrl:    '/Resume.pdf',
}

export const TYPEWRITER_STRINGS = [
  'Frontend Developer',
  'UI/UX Designer',
  'React Specialist',
  'Full Stack Dev',
]

export const ABOUT = {
  intro:
    "I'm a Computer Science undergrad at ITER, Bhubaneswar with a passion for crafting interfaces that feel effortless. I care deeply about the intersection of design and engineering.",
  bio: [
    "I believe great software is invisible — it gets out of the way and lets people do what they came to do. That philosophy drives every decision I make, from component architecture to colour contrast.",
    "When I'm not shipping code, you'll find me gaming, reading, or planning my next trip. I think diverse experiences make for better designers.",
  ],
  skills: [
    'JavaScript (ES2024)',
    'TypeScript',
    'React & Next.js',
    'Node.js',
    'Python',
    'Flutter',
    'Figma & Adobe XD',
    'Git & CI/CD',
  ],
}

export const EXPERIENCE = [
  {
    id: 1,
    role:        'Frontend Developer Intern',
    company:     'TechCorp Solutions',
    period:      'Jun 2024 – Dec 2024',
    location:    'Remote',
    description: 'Built and maintained React component libraries used across 3 product lines. Reduced bundle size by 28% through code splitting and lazy loading.',
    highlights: [
      'Developed 40+ reusable UI components with full Storybook documentation',
      'Implemented real-time dashboards using WebSockets and React Query',
      'Improved Lighthouse performance scores from 62 → 94 across key pages',
    ],
    tags: ['React', 'TypeScript', 'Tailwind', 'Storybook'],
  },
  {
    id: 2,
    role:        'UI/UX Design Intern',
    company:     'DesignHub Agency',
    period:      'Jan 2024 – May 2024',
    location:    'Bhubaneswar, India',
    description: 'Designed and prototyped end-to-end user flows for SaaS products. Ran usability tests and iterated on designs based on research findings.',
    highlights: [
      'Redesigned onboarding flow, reducing drop-off by 35%',
      'Created a design system with 200+ components in Figma',
      'Conducted 20+ user interviews to inform product decisions',
    ],
    tags: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
  },
  {
    id: 3,
    role:        'Freelance Web Developer',
    company:     'Self-employed',
    period:      '2022 – Present',
    location:    'Remote',
    description: 'Delivered custom websites and web apps for clients across e-commerce, healthcare, and education sectors.',
    highlights: [
      'Built 10+ client websites with React, Next.js and headless CMS',
      'Integrated payment gateways (Razorpay, Stripe) for e-commerce clients',
      'Maintained 100% on-time delivery across all client projects',
    ],
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 4,
    role:        'Open Source Contributor',
    company:     'Various Projects',
    period:      '2023 – Present',
    location:    'Remote',
    description: 'Active contributor to open-source projects, focusing on developer tooling and UI component libraries.',
    highlights: [
      'Contributed to 5+ open-source repositories on GitHub',
      'Authored a React hooks library with 300+ GitHub stars',
      'Mentored junior developers through code reviews and documentation',
    ],
    tags: ['React', 'Open Source', 'Mentoring'],
  },
]

export const PROJECTS = [
  {
    id:          1,
    title:       'MetaCopy',
    category:    'Desktop App',
    description: 'A cross-platform Python application using Google Tesseract-OCR and OpenCV to extract and copy text from any image instantly.',
    tags:        ['Python', 'OpenCV', 'Tesseract', 'PIL'],
    link:        'https://github.com/PratikSonal/MetaCopy',
    year:        '2023',
  },
  {
    id:          2,
    title:       'COVID-19 WorldView',
    category:    'Web App',
    description: 'A real-time pandemic tracker with interactive charts showing confirmed cases, recoveries, and progression curves per country.',
    tags:        ['React', 'REST API', 'Chart.js', 'CSS'],
    link:        'https://github.com/PratikSonal/COVID-19-WorldView',
    year:        '2022',
  },
  {
    id:          3,
    title:       'DevBoard',
    category:    'Web App',
    description: 'A developer productivity dashboard aggregating GitHub activity, Jira tickets, and calendar events in a unified kanban interface.',
    tags:        ['React', 'TypeScript', 'GitHub API', 'WebSockets'],
    link:        'https://github.com/PratikSonal',
    year:        '2024',
  },
  {
    id:          4,
    title:       'Palette AI',
    category:    'Tool',
    description: 'AI-powered colour palette generator that derives harmonious design tokens from a single seed image or URL.',
    tags:        ['Next.js', 'OpenAI', 'Tailwind', 'Vercel'],
    link:        'https://github.com/PratikSonal',
    year:        '2024',
  },
]
