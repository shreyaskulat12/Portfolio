// ─── Core entity types for the portfolio ─────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: ProjectCategory;
  startDate: string;
  endDate?: string;
  highlights?: string[];
  metrics?: ProjectMetric[];
}

export type ProjectCategory =
  | 'frontend'
  | 'fullstack'
  | 'mobile'
  | 'open-source'
  | 'design-system'
  | 'other';

export interface ProjectMetric {
  label: string;
  value: string;
  icon?: string;
}

// ─── Skills ──────────────────────────────────────────────────────────────────

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  proficiency: number; // 0–100
  icon?: string;
  yearsOfExperience?: number;
  featured?: boolean;
}

export type SkillCategory =
  | 'languages'
  | 'frameworks'
  | 'tools'
  | 'cloud'
  | 'testing'
  | 'design'
  | 'soft-skills';

export interface SkillGroup {
  category: SkillCategory;
  label: string;
  skills: Skill[];
}

// ─── Experience ──────────────────────────────────────────────────────────────

export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  companyLogo?: string;
  role: string;
  type: EmploymentType;
  location: string;
  remote: boolean;
  startDate: string;
  endDate?: string; // undefined = current
  description: string;
  responsibilities: string[];
  achievements: string[];
  techStack: string[];
}

export type EmploymentType =
  | 'full-time'
  | 'part-time'
  | 'contract'
  | 'freelance'
  | 'internship';

// ─── Education ───────────────────────────────────────────────────────────────

export interface Education {
  id: string;
  institution: string;
  institutionUrl?: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
  honors?: string;
  activities?: string[];
  courses?: string[];
}

// ─── Achievements / Certifications ───────────────────────────────────────────

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  issuerUrl?: string;
  date: string;
  credentialUrl?: string;
  credentialId?: string;
  type: AchievementType;
  description?: string;
  imageUrl?: string;
}

export type AchievementType =
  | 'certification'
  | 'award'
  | 'publication'
  | 'speaking'
  | 'open-source'
  | 'hackathon';

// ─── Testimonials ─────────────────────────────────────────────────────────────

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  companyUrl?: string;
  avatarUrl?: string;
  content: string;
  rating: number; // 1–5
  date: string;
  projectRef?: string; // Project.id
  relationship: TestimonialRelationship;
}

export type TestimonialRelationship =
  | 'manager'
  | 'colleague'
  | 'client'
  | 'mentor'
  | 'mentee';

// ─── Services ────────────────────────────────────────────────────────────────

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  startingPrice?: string;
  deliverables?: string[];
  turnaround?: string;
}

// ─── Social / Contact ─────────────────────────────────────────────────────────

export interface SocialLink {
  id: string;
  platform: SocialPlatform;
  url: string;
  username?: string;
  icon: string;
  label: string;
  primary?: boolean;
}

export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'dribbble'
  | 'behance'
  | 'devto'
  | 'medium'
  | 'youtube'
  | 'email'
  | 'website';

// ─── Portfolio owner profile ──────────────────────────────────────────────────

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  role: string;
  tagline: string;
  bio: string;
  email: string;
  phone?: string;
  location: string;
  timezone: string;
  avatarUrl: string;
  resumeUrl?: string;
  availableForWork: boolean;
  yearsOfExperience: number;
  socialLinks: SocialLink[];
}

// ─── Navigation ───────────────────────────────────────────────────────────────

export interface NavItem {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

// ─── Theme ────────────────────────────────────────────────────────────────────

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  isDark: boolean;
}

// ─── Animation helpers ────────────────────────────────────────────────────────

export interface AnimationVariants {
  hidden: object;
  visible: object;
  exit?: object;
}

export interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}
