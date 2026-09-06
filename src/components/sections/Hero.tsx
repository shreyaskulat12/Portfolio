import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';
import { MagneticButton } from '../effects/MagneticButton';

const roles = [
  'Engineer',
  'AI/ML Enthusiast',
  'Software Developer',
  'Problem Solver',
  'Open Source Explorer',
  'CSE Student — AI & ML',
];

export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
    } else {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIdx]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Decorative shapes */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 70, repeat: Infinity, ease: 'linear' }}
          className="absolute top-20 right-10 w-72 h-72 rounded-full border border-violet-500/10"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
          className="absolute top-28 right-14 w-52 h-52 rounded-full border border-cyan-500/10"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-36 left-16 w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-44 left-10 w-8 h-8 rounded-full bg-violet-500/30"
        />
        {/* Floating code snippet */}
        <motion.div
          animate={{ y: [-10, 10, -10], rotate: [-2, 2, -2] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-8 md:right-24 hidden lg:block glass rounded-xl p-4 text-xs font-mono text-violet-400 dark:text-violet-300 shadow-xl"
        >
          <div><span className="text-pink-400">class</span> <span className="text-cyan-400">Engineer</span>:</div>
          <div className="pl-4"><span className="text-green-400">passion</span> = <span className="text-yellow-400">"AI/ML"</span></div>
          <div className="pl-4"><span className="text-green-400">coffee</span> = <span className="text-yellow-400">"∞"</span></div>
          <div className="pl-4"><span className="text-green-400">learning</span> = <span className="text-yellow-400">True</span></div>
        </motion.div>
      </div>

      <div className="container-max section-padding text-center z-10 relative">
        {/* Profile Avatar Badge */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="mx-auto mb-6 w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-br from-violet-500 via-purple-500 to-cyan-500 shadow-xl shadow-violet-500/25 relative group"
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 border-2 border-white dark:border-gray-900">
            <img
              src="/shreyas.jpg"
              alt="Shreyas Kulat"
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-violet-500/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Open to internship &amp; collaboration opportunities
          </span>
          <Sparkles className="w-4 h-4 text-yellow-500" />
        </motion.div>

        {/* Name */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 dark:text-white mb-4 leading-[1.05]"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Shreyas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="text-xl sm:text-2xl font-semibold text-gray-500 dark:text-gray-400 mb-4"
        >
          Shreyas Vijay Kulat
        </motion.p>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl sm:text-2xl md:text-3xl text-violet-600 dark:text-violet-400 mb-6 h-10 font-semibold"
          aria-live="polite"
        >
          {displayed}
          <span className="inline-block w-0.5 h-7 bg-violet-500 ml-0.5 align-middle animate-pulse" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I'm a Computer Science Engineering student specializing in{' '}
          <strong className="text-gray-900 dark:text-white">Artificial Intelligence & Machine Learning</strong>,
          passionate about building practical software solutions and exploring modern technologies.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <MagneticButton
            as="a"
            href="#projects"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            size="lg"
            variant="primary"
          >
            Explore My Work
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#contact"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            size="lg"
            variant="outline"
          >
            Contact Me
          </MagneticButton>
          <MagneticButton
            as="a"
            href="/resume.html"
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            variant="ghost"
            icon={<Download className="w-5 h-5" />}
          >
            Resume
          </MagneticButton>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center gap-4 mb-16"
        >
          {[
            { icon: GithubIcon, href: 'https://github.com/shreyaskulat12', label: 'GitHub — shreyaskulat12' },
            { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/shreyas-kulat-789a6332b/', label: 'LinkedIn — Shreyas Kulat' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full glass border border-gray-200/30 dark:border-gray-700/30 text-gray-600 dark:text-gray-400 hover:text-violet-500 dark:hover:text-violet-400 hover:border-violet-500/30 transition-all duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
          <span className="text-sm text-gray-400">11+ Public Repositories</span>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-gray-400 uppercase tracking-widest">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="p-2 rounded-full glass"
          >
            <ArrowDown className="w-4 h-4 text-violet-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
