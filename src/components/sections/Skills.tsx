import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import type { Skill, SkillCategory } from '../../types';

interface SkillsProps {
  skills: Skill[];
}

const CATEGORIES: { id: SkillCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'languages', label: 'Languages' },
  { id: 'frameworks', label: 'Frameworks' },
  { id: 'tools', label: 'Tools & Cloud' },
  { id: 'design', label: 'Design' },
  { id: 'testing', label: 'Testing' },
];

function SkillBar({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="group p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-700 transition-all duration-300 hover:shadow-md"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">{skill.name}</span>
        <span className="text-xs font-bold text-violet-600 dark:text-violet-400">{skill.proficiency}%</span>
      </div>
      <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.proficiency}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05 + 0.2, ease: 'easeOut' }}
        />
      </div>
      {skill.yearsOfExperience && (
        <p className="text-xs text-gray-400 mt-1">{skill.yearsOfExperience}+ years</p>
      )}
    </motion.div>
  );
}

export default function Skills({ skills }: SkillsProps) {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');

  const filtered = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.category === activeCategory || (activeCategory === 'tools' && (s.category === 'cloud' || s.category === 'tools')));

  return (
    <section id="skills" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Skills & Technologies" subtitle="What I Work With" accentWord="Technologies" />

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((skill, i) => (
              <SkillBar key={skill.id} skill={skill} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Tech badges cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium uppercase tracking-widest">Also familiar with</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {['Redis', 'Kubernetes', 'Prisma', 'tRPC', 'Zustand', 'TanStack Query', 'Turborepo', 'Zod', 'Radix UI', 'shadcn/ui', 'Three.js', 'WebGL'].map((tech) => (
              <motion.span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                whileHover={{ scale: 1.1, backgroundColor: 'rgb(139 92 246 / 0.15)', borderColor: 'rgb(139 92 246)' }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
