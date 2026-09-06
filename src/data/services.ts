import type { Service } from '../types';

// Repurposed as "Areas of Interest" for student context
export const services: Service[] = [
  {
    id: 'software-dev',
    title: 'Software Development',
    description: 'Building functional, practical applications using Python, JavaScript and modern web technologies. From desktop GUI apps to interactive browser experiences.',
    icon: 'Monitor',
    features: ['Python applications', 'JavaScript / HTML / CSS', 'GUI development', 'Application logic'],
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Designing and building responsive web interfaces using modern frontend technologies. Learning and exploring React, Tailwind CSS and modern web patterns.',
    icon: 'Layers',
    features: ['HTML5 & CSS3', 'JavaScript', 'Responsive layouts', 'React (learning)'],
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Exploring artificial intelligence and machine learning fundamentals as part of my B.Tech specialization, with a focus on building practical AI applications.',
    icon: 'Zap',
    features: ['Machine learning fundamentals', 'Data analysis', 'AI application concepts', 'Data science'],
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving',
    description: 'Approaching real-world challenges by designing technology-driven solutions. Exploring hackathon-style problem solving, smart governance and emerging technologies.',
    icon: 'GitBranch',
    features: ['Analytical thinking', 'Hackathon concepts', 'Smart governance', 'Creative engineering'],
    gradient: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'geospatial',
    title: '3D & Geospatial Tech',
    description: 'Exploring geospatial technology, 3D visualisation and location-based applications as part of my 3D ULPIN land-information platform concept.',
    icon: 'Users',
    features: ['3D visualisation concepts', 'Geospatial data', 'ULPIN / land systems', 'Interactive mapping'],
    gradient: 'from-pink-500 to-rose-600',
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    description: 'Committed to expanding technical skills through hands-on projects, experimentation and self-directed learning in software engineering and AI/ML.',
    icon: 'Mic',
    features: ['Project-oriented learning', 'Technology exploration', 'Open-source development', 'Engineering growth'],
    gradient: 'from-indigo-500 to-violet-600',
  },
];
