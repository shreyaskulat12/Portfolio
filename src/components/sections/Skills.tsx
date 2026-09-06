import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { skills, categoryLabels } from '../../data/skills';
import type { Skill } from '../../types';
import { cn } from '../../utils/cn';

const categories = ['all', ...Object.keys(categoryLabels)] as const;
type CategoryFilter = typeof categories[number];

function SkillBar({ skill, delay }: { skill: Skill; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card rounded-xl p-4 hover-lift group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-xl" role="img" aria-label={skill.name}>{skill.icon}</span>
          <span className="font-medium text-gray-800 dark:text-gray-200 text-sm">{skill.name}</span>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500"
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filtered = filter === 'all' ? skills : skills.filter((s) => s.category === filter);

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900/50" aria-labelledby="skills-heading">
      <div className="container-max">
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills & Tech"
          title="My Technical"
          titleAccent="Toolkit"
          description="Technologies I work with day-to-day, and a few I'm exploring on the side."
        />

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
                filter === cat
                  ? 'bg-violet-600 text-white shadow-md shadow-violet-500/25'
                  : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400',
              )}
            >
              {cat === 'all' ? 'All' : categoryLabels[cat as Skill['category']]}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {filtered.map((skill, i) => (
            <SkillBar key={skill.name} skill={skill} delay={i * 0.04} />
          ))}
        </motion.div>

        {/* Technology cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 glass-card rounded-2xl text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 font-medium uppercase tracking-wider">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'Tkinter', 'JavaScript', 'HTML5/CSS3', 'React Basics', 'Tailwind CSS', 'Java', 'Git & GitHub', 'Jira', 'Kiro AI', 'SAP Fundamentals', 'ERP Concepts', 'Geospatial Tech', '3D Visualisation', 'Data Analysis'].map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-violet-500 hover:text-violet-600 dark:hover:text-violet-400 transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
