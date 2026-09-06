import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'ai-refrigerator',
    title: 'AI Assistance Refrigerator',
    description:
      'An intelligent smart appliance system combining computer vision, ML inventory prediction, voice assistant integration, and automated temperature control.',
    longDescription: `An innovative AI-driven smart refrigerator system concept designed to modernize food management and reduce household food waste.\n\nKey System Modules:\n• Cameras & Sensors: Monitors fridge contents, recognizes food items, and tracks freshness and expiration dates.\n• Machine Learning Engine: Analyzes consumption patterns, predicts inventory needs, and suggests custom recipes based on available ingredients.\n• Voice Assistant Integration: Integrates with Amazon Alexa and Google Assistant for hands-free inventory checks and voice reminders.\n• Smartphone App Control: Allows remote monitoring of fridge contents, shopping list management, and temperature adjustments.\n• Temperature Control Optimization: Automatically adjusts temperature settings for different food types to ensure maximum freshness and energy efficiency.`,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80',
    tags: ['AI / ML', 'Python', 'Computer Vision', 'Alexa / Voice AI', 'IoT Concept', 'UI/UX'],
    githubUrl: 'https://github.com/shreyaskulat12',
    featured: true,
    year: 2024,
  },
  {
    id: 'contact-manager-payments',
    title: 'Contact Manager with Payment System',
    description:
      'A Python application designed to manage contact information, categorize clients, add notes, and handle secure payment transactions.',
    longDescription: `A Python desktop application built to streamline client management and transaction processing for small businesses or individuals.\n\nKey Features:\n• Contact & Client Storage: Securely store contact details, addresses, and notes.\n• Contact Categorization: Organize contacts into custom categories.\n• Integrated Payment System: Generate payment links and UPI QR codes for instant payment processing.\n• Clean User Interface: Simple, intuitive navigation built using Python GUI libraries.\n• Local Data Handling: Efficient file storage and data persistence.`,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    tags: ['Python', 'GUI', 'Payment Integration', 'File Handling', 'MySQL'],
    githubUrl: 'https://github.com/shreyaskulat12',
    featured: true,
    year: 2024,
  },
  {
    id: 'web-clones',
    title: 'Amazon Clone & Zomato Clone',
    description:
      'Web application clones replicating the structure, layouts, and responsive interfaces of Amazon and Zomato using HTML5 and CSS3.',
    longDescription: `Front-end web development projects focused on recreating complex e-commerce and food delivery platforms.\n\nKey Highlights:\n• Amazon Clone: Pixel-perfect header, hero banner, multi-column grid product listings, and cart UI using HTML & CSS.\n• Zomato Clone: Interactive restaurant listing cards, search hero section, filtering tags, and responsive layout.\n• Front-End Mastery: Applied core CSS Grid, Flexbox, media queries, and semantic HTML structure without external frameworks.`,
    image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&q=80',
    tags: ['HTML5', 'CSS3', 'Front-End', 'Responsive Design', 'Web Clones'],
    githubUrl: 'https://github.com/shreyaskulat12',
    featured: true,
    year: 2024,
  },
  {
    id: 'figma-uiux',
    title: 'Figma UI/UX Designs & Prototypes',
    description:
      'Interactive user interface designs and wireframes created in Figma for web applications, mobile apps, and digital experiences.',
    longDescription: `A collection of cloud-based design prototypes and UI/UX projects created using Figma.\n\nKey Capabilities:\n• High-Fidelity Wireframes: Designed modern web interfaces and mobile app screens.\n• Interactive Prototyping: Built clickable user flow transitions and micro-interactions.\n• Design Systems: Created reusable color palettes, typography scales, and component libraries.\n• User-Centric Design: Focused on accessibility, visual hierarchy, and intuitive user navigation.`,
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&q=80',
    tags: ['Figma', 'UI/UX Design', 'Prototyping', 'Wireframing', 'User Flows'],
    githubUrl: 'https://github.com/shreyaskulat12',
    featured: false,
    year: 2024,
  },
  {
    id: 'portfolio-v2',
    title: 'Developer Portfolio Website',
    description:
      'An interactive portfolio website built with React, Vite, TypeScript, Tailwind CSS, and Framer Motion to showcase skills, resume, and projects.',
    longDescription: `A high-performance personal portfolio web application designed for a modern developer aesthetic.\n\nFeatures:\n• Glassmorphism dark/light design system\n• Framer Motion micro-animations and scroll reveals\n• Interactive skill progress and project filter modals\n• Contact form with Zod schema validation\n• Integrated PDF resume viewer and download system`,
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    githubUrl: 'https://github.com/shreyaskulat12',
    featured: true,
    year: 2025,
  },
];

export const allTags = [...new Set(projects.flatMap((p) => p.tags))].sort();
