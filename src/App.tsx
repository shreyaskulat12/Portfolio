import { ThemeProvider } from './context/ThemeContext';
import { AnimatedBackground } from './components/effects/AnimatedBackground';
import { CustomCursor } from './components/effects/CustomCursor';
import { Navbar } from './components/layout/Navbar';
import { ScrollProgress } from './components/layout/ScrollProgress';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { ResumeSection } from './components/sections/ResumeSection';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Achievements } from './components/sections/Achievements';
import { Education } from './components/sections/Education';
import { GitHubStats } from './components/sections/GitHubStats';
import { Services } from './components/sections/Services';
import { CurrentlyLearning } from './components/sections/CurrentlyLearning';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      {/* Global effects */}
      <CustomCursor />
      <ScrollProgress />
      <AnimatedBackground />

      {/* Layout */}
      <Navbar />

      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <ResumeSection />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
        <GitHubStats />
        <Services />
        <CurrentlyLearning />
        <Contact />
      </main>

      <Footer />
    </ThemeProvider>
  );
}

export default App;
