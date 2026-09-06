import { motion } from 'framer-motion';
import { Award, ExternalLink, Star, Trophy, Medal } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
import { achievements } from '../../data/achievements';
import type { Achievement } from '../../types';
import { cn } from '../../utils/cn';

const categoryIcons = {
  certification: Medal,
  award: Trophy,
  recognition: Star,
};

function AchievementCard({ achievement, index }: { achievement: Achievement; index: number }) {
  const Icon = categoryIcons[achievement.category];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.01 }}
      className="glass-card rounded-2xl p-6 relative overflow-hidden group"
    >
      {/* Gradient accent */}
      <div className={cn('absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 bg-gradient-to-br', achievement.badgeColor)} />

      {/* Badge icon */}
      <div className={cn('inline-flex p-3 rounded-2xl bg-gradient-to-br text-white mb-4 shadow-lg', achievement.badgeColor)}>
        <Icon className="w-5 h-5" />
      </div>

      <div className="flex items-start justify-between gap-2 mb-2">
        <h3 className="font-bold text-gray-900 dark:text-white text-base leading-snug">{achievement.title}</h3>
        {achievement.credentialUrl && (
          <a
            href={achievement.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View credential"
            className="text-gray-400 hover:text-violet-500 transition-colors flex-shrink-0"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
      </div>

      <p className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-2">{achievement.issuer}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{achievement.description}</p>

      <div className="flex items-center justify-between mt-auto">
        <span className="text-xs font-mono text-gray-400">{achievement.date}</span>
        <span className={cn(
          'px-2.5 py-1 rounded-full text-xs font-semibold capitalize',
          achievement.category === 'certification' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' :
          achievement.category === 'award' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300' :
          'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300',
        )}>
          {achievement.category}
        </span>
      </div>
    </motion.article>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="section-padding" aria-labelledby="achievements-heading">
      <div className="container-max">
        <SectionHeading
          id="achievements-heading"
          eyebrow="Milestones"
          title="Highlights &"
          titleAccent="Recognitions"
          description="Academic highlights, public repositories and innovation milestones as a Computer Science & Engineering student."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => (
            <AchievementCard key={a.id} achievement={a} index={i} />
          ))}
        </div>

        {/* Overall award banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 glass-card rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/30 flex-shrink-0">
            <Award className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white text-lg">Driven by Practical Engineering</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Focused on solving real-world challenges through AI/ML exploration, desktop utility applications, web technology and smart governance hackathon concepts.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
