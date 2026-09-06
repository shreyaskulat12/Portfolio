import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, MessageCircle, Mail, Download, ArrowDown, ExternalLink } from 'lucide-react';
import Button from '../ui/Button';
import type { PersonalInfo } from '../../types';

interface HeroProps {
  info: PersonalInfo;
}

const ROLES = ['Senior Frontend Developer', 'React Specialist', 'UI/UX Engineer', 'Open Source Contributor'];

function FloatingShape({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full opacity-20 blur-3xl pointer-events-none ${className}`}
      animate={{ y: [0, -20, 0], scale: [1, 1.05, 1] }}
      transition={{ duration: 6 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  );
}

export default function Hero({ info }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const socialIcons = [
    { icon: <Code2 size={20} />, href: info.socialLinks.find(s => s.platform === 'github')?.url || '#', label: 'GitHub' },
    { icon: <Briefcase size={20} />, href: info.socialLinks.find(s => s.platform === 'linkedin')?.url || '#', label: 'LinkedIn' },
    { icon: <MessageCircle size={20} />, href: info.socialLinks.find(s => s.platform === 'twitter')?.url || '#', label: 'Twitter' },
    { icon: <Mail size={20} />, href: `mailto:${info.email}`, label: 'Email' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950">
      {/* Animated background */}
      <FloatingShape className="w-96 h-96 bg-violet-500 -top-20 -left-20" delay={0} />
      <FloatingShape className="w-80 h-80 bg-fuchsia-500 top-1/4 -right-20" delay={2} />
      <FloatingShape className="w-64 h-64 bg-indigo-500 bottom-1/4 left-1/4" delay={4} />

      {/* Grid dots background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(139,92,246,0.15)_1px,transparent_0)] [background-size:32px_32px] dark:opacity-40 opacity-60 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Available badge */}
          {info.availableForWork && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">Available for work</span>
            </motion.div>
          )}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-500 dark:text-gray-400 font-medium mb-2"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-4"
          >
            {info.firstName}{' '}
            <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">
              {info.lastName}
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-xl sm:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-6 h-8"
          >
            <span>{displayText}</span>
            <span className="animate-pulse text-violet-500">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed mb-8"
          >
            {info.tagline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
          >
            <Button
              variant="primary"
              size="lg"
              icon={<ExternalLink size={18} />}
              iconPosition="right"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            {info.resumeUrl && (
              <Button
                variant="outline"
                size="lg"
                icon={<Download size={18} />}
                iconPosition="right"
                href={info.resumeUrl}
                download
              >
                Download CV
              </Button>
            )}
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center gap-3 justify-center lg:justify-start"
          >
            {socialIcons.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-violet-900/40 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Avatar side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, type: 'spring' }}
          className="flex-shrink-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80">
            {/* Spinning ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 p-[3px]"
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-950" />
            </motion.div>
            {/* Avatar */}
            <div className="absolute inset-[3px] rounded-full overflow-hidden bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/40 dark:to-fuchsia-900/40 flex items-center justify-center">
              <img
                src={info.avatarUrl}
                alt={info.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <span className="text-6xl font-bold text-violet-500 absolute">{info.firstName[0]}{info.lastName[0]}</span>
            </div>
            {/* Floating stat badges */}
            <motion.div
              className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl px-4 py-2 shadow-xl border border-gray-100 dark:border-gray-700"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">5+ Years</p>
            </motion.div>
            <motion.div
              className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl px-4 py-2 shadow-xl border border-gray-100 dark:border-gray-700"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            >
              <p className="text-xs text-gray-500 dark:text-gray-400">Projects</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">40+</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-violet-500 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <span className="text-xs font-medium">Scroll</span>
        <ArrowDown size={18} />
      </motion.button>
    </section>
  );
}
