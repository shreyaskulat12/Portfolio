import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, ChevronDown, ExternalLink, MapPin } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { experiences } from '../../data/experience';
import { cn } from '../../utils/cn';

const typeColors = {
  'full-time': 'violet',
  'part-time': 'cyan',
  'contract': 'yellow',
  'internship': 'green',
} as const;

export function Experience() {
  if (experiences.length === 0) return null;

  const [expanded, setExpanded] = useState<string>(experiences[0]?.id ?? '');

  return (
    <section id="experience" className="section-padding" aria-labelledby="experience-heading">
      <div className="container-max">
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Where I've"
          titleAccent="Worked"
          description="A timeline of roles where I shipped high-impact features at world-class companies."
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-500/40 to-transparent hidden sm:block" aria-hidden="true" />

          <div className="space-y-4">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative sm:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-5 top-6 w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 hidden sm:flex items-center justify-center shadow-md shadow-violet-500/30">
                  <Briefcase className="w-3 h-3 text-white" />
                </div>

                {/* Card */}
                <div
                  className={cn(
                    'glass-card rounded-2xl overflow-hidden transition-all duration-300',
                    expanded === exp.id ? 'shadow-lg shadow-violet-500/10' : '',
                  )}
                >
                  {/* Header */}
                  <button
                    onClick={() => setExpanded(expanded === exp.id ? '' : exp.id)}
                    className="w-full text-left p-5 flex items-start justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                    aria-expanded={expanded === exp.id}
                    aria-controls={`exp-body-${exp.id}`}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight">
                          {exp.role}
                        </h3>
                        <Badge variant={typeColors[exp.type]}>{exp.type}</Badge>
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold text-violet-600 dark:text-violet-400">
                          {exp.companyUrl ? (
                            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center gap-1" onClick={(e) => e.stopPropagation()}>
                              {exp.company} <ExternalLink className="w-3 h-3" />
                            </a>
                          ) : exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                        <span className="font-mono text-xs">
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>
                    </div>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300',
                        expanded === exp.id ? 'rotate-180' : '',
                      )}
                    />
                  </button>

                  {/* Body */}
                  <AnimatePresence>
                    {expanded === exp.id && (
                      <motion.div
                        id={`exp-body-${exp.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 border-t border-gray-200/50 dark:border-gray-700/50 pt-4">
                          <ul className="space-y-2 mb-4">
                            {exp.description.map((point, j) => (
                              <li key={j} className="flex gap-2 text-gray-600 dark:text-gray-400 text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0 mt-1.5" />
                                {point}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.tags.map((tag) => (
                              <Badge key={tag} variant="violet" size="sm">{tag}</Badge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
