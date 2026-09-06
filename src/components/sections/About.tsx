import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Mail, Download, Briefcase, Code2, Users, Star } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import type { PersonalInfo } from '../../types';

interface AboutProps {
  info: PersonalInfo;
  stats: { label: string; value: string }[];
}

export default function About({ info, stats }: AboutProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const statIcons = [Briefcase, Code2, Star, Users];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Who I Am" accentWord="Me" />

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + badges */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80">
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-violet-500 to-fuchsia-500 p-1">
                <div className="w-full h-full rounded-3xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <img
                    src={info.avatarUrl}
                    alt={info.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                  />
                  <span className="text-7xl font-bold text-violet-300 absolute">{info.firstName[0]}{info.lastName[0]}</span>
                </div>
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl bg-violet-100 dark:bg-violet-900/20 -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-2xl bg-fuchsia-100 dark:bg-fuchsia-900/20 -z-10" />
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{info.name}</h3>
              <p className="text-violet-600 dark:text-violet-400 font-semibold">{info.role}</p>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{info.bio}</p>

            <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-violet-500" />
                {info.location}
              </span>
              <span className="flex items-center gap-2">
                <Mail size={16} className="text-violet-500" />
                {info.email}
              </span>
            </div>

            <div className="flex gap-4">
              <Button
                variant="primary"
                size="md"
                icon={<Download size={16} />}
                href={info.resumeUrl || '#'}
                download
              >
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20">
          {stats.map((stat, i) => {
            const Icon = statIcons[i % statIcons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 group hover:border-violet-300 dark:hover:border-violet-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center mx-auto mb-3 group-hover:bg-violet-200 dark:group-hover:bg-violet-900/60 transition-colors">
                  <Icon size={20} className="text-violet-600 dark:text-violet-400" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
