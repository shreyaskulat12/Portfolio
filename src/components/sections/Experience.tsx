import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import type { Experience } from '../../types';

interface ExperienceProps {
  experience: Experience[];
}

function TimelineItem({ exp, index }: { exp: Experience; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;

  const formatDate = (d: string) => {
    const [y, m] = d.split('-');
    return `${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][parseInt(m)-1]} ${y}`;
  };

  const typeColors: Record<string, string> = {
    'full-time': 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400',
    'freelance': 'bg-fuchsia-100 dark:bg-fuchsia-900/30 text-fuchsia-700 dark:text-fuchsia-400',
    'contract': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
    'internship': 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
  };

  return (
    <div ref={ref} className={`relative grid grid-cols-1 md:grid-cols-[1fr_48px_1fr] gap-4 mb-12`}>
      {/* Left column (desktop) */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`${isLeft ? 'md:pr-8' : 'md:col-start-3 md:pl-8'} hidden md:flex flex-col ${isLeft ? 'items-end text-right' : 'items-start'}`}
      >
        {isLeft && <ExperienceCard exp={exp} typeColors={typeColors} formatDate={formatDate} />}
        {!isLeft && (
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            <div className="font-semibold text-gray-700 dark:text-gray-300">{formatDate(exp.startDate)} — {exp.endDate ? formatDate(exp.endDate) : 'Present'}</div>
            <div className="flex items-center gap-1 justify-start mt-1">
              <MapPin size={12} />
              <span>{exp.location}</span>
            </div>
          </div>
        )}
      </motion.div>

      {/* Center dot */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.3, type: 'spring' }}
          className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 ring-4 ring-white dark:ring-gray-950 mt-6 z-10 flex-shrink-0"
        />
        <div className="w-0.5 flex-1 bg-gradient-to-b from-violet-200 dark:from-violet-900/50 to-transparent mt-1" />
      </div>

      {/* Right column (desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        className={`${!isLeft ? 'md:pl-8' : 'md:col-start-1 md:pr-8 md:row-start-1'} hidden md:flex flex-col ${!isLeft ? 'items-start' : 'items-end text-right'}`}
      >
        {!isLeft && <ExperienceCard exp={exp} typeColors={typeColors} formatDate={formatDate} />}
        {isLeft && (
          <div className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            <div className="font-semibold text-gray-700 dark:text-gray-300">{formatDate(exp.startDate)} — {exp.endDate ? formatDate(exp.endDate) : 'Present'}</div>
            <div className="flex items-center gap-1 justify-end mt-1">
              <MapPin size={12} />
              <span>{exp.location}</span>
            </div>
          </div>
        )}
      </motion.div>

      {/* Mobile: full-width card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="md:hidden col-span-full"
      >
        <ExperienceCard exp={exp} typeColors={typeColors} formatDate={formatDate} />
      </motion.div>
    </div>
  );
}

function ExperienceCard({ exp, typeColors, formatDate }: { exp: Experience; typeColors: Record<string, string>; formatDate: (d: string) => string }) {
  return (
    <div className="w-full bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-300">
      <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</span>
            {!exp.endDate && <span className="px-2 py-0.5 text-xs rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 font-medium">Current</span>}
          </div>
          <div className="flex items-center gap-2 mt-1">
            {exp.companyUrl ? (
              <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-violet-600 dark:text-violet-400 font-semibold hover:underline flex items-center gap-1 text-sm">
                {exp.company} <ExternalLink size={12} />
              </a>
            ) : (
              <span className="text-violet-600 dark:text-violet-400 font-semibold text-sm">{exp.company}</span>
            )}
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium capitalize ${typeColors[exp.type] || ''}`}>{exp.type}</span>
          </div>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 shrink-0">
          <Calendar size={12} />
          <span>{formatDate(exp.startDate)} — {exp.endDate ? formatDate(exp.endDate) : 'Present'}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
      <ul className="space-y-1.5 mb-4">
        {exp.responsibilities.slice(0, 3).map((r, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-500 mt-1.5 flex-shrink-0" />
            {r}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {exp.techStack.map((t) => (
          <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 font-medium">{t}</span>
        ))}
      </div>
    </div>
  );
}

export default function ExperienceSection({ experience }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Work Experience" subtitle="My Journey" accentWord="Experience" />
        <div className="relative">
          {/* Desktop center line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-200 via-fuchsia-200 to-transparent dark:from-violet-900/50 dark:via-fuchsia-900/50" />
          {experience.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
