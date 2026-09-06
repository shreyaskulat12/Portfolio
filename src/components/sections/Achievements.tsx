import { motion } from 'framer-motion';
import { Award, BookOpen, Mic, Trophy, ExternalLink, Code2 } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import type { Achievement, AchievementType } from '../../types';

interface AchievementsProps {
  achievements: Achievement[];
}

const typeConfig: Record<AchievementType, { icon: React.ReactNode; color: string; bg: string }> = {
  certification: { icon: <Award size={20} />, color: 'text-blue-600 dark:text-blue-400', bg: 'bg-blue-100 dark:bg-blue-900/30' },
  award: { icon: <Trophy size={20} />, color: 'text-yellow-600 dark:text-yellow-400', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
  publication: { icon: <BookOpen size={20} />, color: 'text-green-600 dark:text-green-400', bg: 'bg-green-100 dark:bg-green-900/30' },
  speaking: { icon: <Mic size={20} />, color: 'text-purple-600 dark:text-purple-400', bg: 'bg-purple-100 dark:bg-purple-900/30' },
  'open-source': { icon: <Code2 size={20} />, color: 'text-orange-600 dark:text-orange-400', bg: 'bg-orange-100 dark:bg-orange-900/30' },
  hackathon: { icon: <Trophy size={20} />, color: 'text-fuchsia-600 dark:text-fuchsia-400', bg: 'bg-fuchsia-100 dark:bg-fuchsia-900/30' },
};

export default function Achievements({ achievements }: AchievementsProps) {
  const formatDate = (d: string) => {
    const [y, m] = d.split('-');
    return `${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][parseInt(m)-1]} ${y}`;
  };

  return (
    <section id="achievements" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Achievements & Certifications" subtitle="Recognition" accentWord="Achievements" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((a, i) => {
            const config = typeConfig[a.type];
            return (
              <motion.div
                key={a.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${config.bg}`}>
                    <span className={config.color}>{config.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-gray-900 dark:text-white text-sm leading-tight">{a.title}</h3>
                      {a.credentialUrl && (
                        <a href={a.credentialUrl} target="_blank" rel="noopener noreferrer"
                          className="flex-shrink-0 text-gray-400 hover:text-violet-500 transition-colors">
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    <p className="text-xs text-violet-600 dark:text-violet-400 font-medium mt-0.5">{a.issuer}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{formatDate(a.date)}</p>
                    {a.description && (
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{a.description}</p>
                    )}
                    {a.credentialId && (
                      <p className="text-xs text-gray-400 mt-1.5 font-mono">ID: {a.credentialId}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
