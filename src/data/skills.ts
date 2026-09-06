import type { Skill } from '../types';

export const skills: Skill[] = [
  // Programming & Backend
  { name: 'Python', level: 85, icon: '🐍', category: 'backend' },
  { name: 'C++', level: 75, icon: '⚙️', category: 'backend' },
  { name: 'R Language', level: 65, icon: '📊', category: 'backend' },
  { name: 'MySQL', level: 72, icon: '🗄️', category: 'backend' },
  { name: 'PHP', level: 60, icon: '🐘', category: 'backend' },
  { name: 'OOP & File Handling', level: 78, icon: '📁', category: 'backend' },

  // Web & UI/UX
  { name: 'HTML5', level: 88, icon: '🌐', category: 'frontend' },
  { name: 'CSS3', level: 85, icon: '🎨', category: 'frontend' },
  { name: 'JavaScript', level: 75, icon: '⚡', category: 'frontend' },
  { name: 'UI/UX Design', level: 80, icon: '✏️', category: 'frontend' },
  { name: 'Figma & Prototyping', level: 82, icon: '🎨', category: 'frontend' },
  { name: 'React & Tailwind', level: 60, icon: '⚛️', category: 'frontend' },

  // AI & Data
  { name: 'Artificial Intelligence', level: 70, icon: '🤖', category: 'design' },
  { name: 'Machine Learning', level: 68, icon: '🧠', category: 'design' },
  { name: 'Exploratory Data Analysis', level: 72, icon: '📈', category: 'design' },
  { name: 'Process Mining', level: 65, icon: '⚙️', category: 'design' },

  // Tools & Collaboration
  { name: 'Git & GitHub', level: 78, icon: '🐙', category: 'tools' },
  { name: 'VS Code', level: 85, icon: '💻', category: 'tools' },
  { name: 'Amazon Alexa / Voice AI', level: 62, icon: '🎙️', category: 'tools' },
  { name: 'Jira & Kiro AI', level: 65, icon: '📋', category: 'tools' },

  // Languages & Soft Skills
  { name: 'Communication Skills', level: 85, icon: '💬', category: 'cloud' },
  { name: 'English (Fluent)', level: 80, icon: '🗣️', category: 'cloud' },
  { name: 'Hindi (Fluent)', level: 90, icon: '🇮🇳', category: 'cloud' },
  { name: 'Marathi (Native)', level: 95, icon: '🚩', category: 'cloud' },
];

export const categoryLabels: Record<Skill['category'], string> = {
  frontend: 'Web & Design',
  backend: 'Programming & DB',
  design: 'AI & Data Science',
  tools: 'Tools & Platforms',
  cloud: 'Languages & Communication',
  mobile: 'Mobile',
};

export function getProficiencyLabel(level: number): string {
  if (level >= 80) return 'Proficient';
  if (level >= 65) return 'Intermediate';
  return 'Learning';
}
