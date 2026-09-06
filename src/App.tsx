import { ThemeProvider, useTheme } from './context/ThemeContext';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import ExperienceSection from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Achievements from './components/sections/Achievements';
import EducationSection from './components/sections/Education';
import Services from './components/sections/Services';
import Testimonials from './components/sections/Testimonials';
import GitHubStats from './components/sections/GitHubStats';
import Contact from './components/sections/Contact';
import {
  personalInfo,
  projects,
  skills,
  experience,
  education,
  achievements,
  services,
  testimonials,
  stats,
} from './data/portfolio';
import './App.css';

function AppContent() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <CustomCursor />
      <Navbar isDark={isDark} onThemeToggle={toggleTheme} name="AM" />
      <main>
        <Hero info={personalInfo} />
        <About info={personalInfo} stats={stats} />
        <Skills skills={skills} />
        <ExperienceSection experience={experience} />
        <Projects projects={projects} />
        <GitHubStats username="shreyaskulat12" />
        <Achievements achievements={achievements} />
        <EducationSection education={education} />
        <Services services={services} />
        <Testimonials testimonials={testimonials} />
        <Contact info={personalInfo} />
      </main>
      <Footer
        name={personalInfo.name}
        tagline={personalInfo.tagline}
        email={personalInfo.email}
        githubUrl={personalInfo.socialLinks.find(s => s.platform === 'github')?.url}
        linkedinUrl={personalInfo.socialLinks.find(s => s.platform === 'linkedin')?.url}
        twitterUrl={personalInfo.socialLinks.find(s => s.platform === 'twitter')?.url}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
