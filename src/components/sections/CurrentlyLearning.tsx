import { motion } from 'framer-motion';
import { Brain, Code2, Globe, Wrench, Layers, Cpu } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const learningAreas = [
  {
    icon: Brain,
    title: 'Artificial Intelligence & Machine Learning',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50 dark:bg-violet-900/20',
    border: 'border-violet-200 dark:border-violet-800',
    items: [
      'Machine learning fundamentals',
      'AI application development',
      'Data-driven problem solving',
      'Neural network concepts',
    ],
  },
  {
    icon: Globe,
    title: 'Web Development',
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50 dark:bg-cyan-900/20',
    border: 'border-cyan-200 dark:border-cyan-800',
    items: [
      'React & modern frontend',
      'Responsive UI design',
      'API integration concepts',
      'Tailwind CSS',
    ],
  },
  {
    icon: Code2,
    title: 'Software Development',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-200 dark:border-emerald-800',
    items: [
      'Python & Java',
      'Object-oriented design',
      'Application architecture',
      'Clean code practices',
    ],
  },
  {
    icon: Wrench,
    title: 'Engineering Tools',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-200 dark:border-amber-800',
    items: [
      'Git & GitHub workflows',
      'VS Code & productivity',
      'Jira project management',
      'AI-assisted development',
    ],
  },
  {
    icon: Cpu,
    title: 'Data Science & Analysis',
    color: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    border: 'border-rose-200 dark:border-rose-800',
    items: [
      'Data analysis concepts',
      'Practical data applications',
      'Statistical thinking',
      'Visualization basics',
    ],
  },
  {
    icon: Layers,
    title: 'Emerging Technologies',
    color: 'from-indigo-500 to-violet-600',
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    border: 'border-indigo-200 dark:border-indigo-800',
    items: [
      '3D visualisation',
      'Geospatial technology',
      'Smart governance tech',
      'Modern UI/UX concepts',
    ],
  },
];

export function CurrentlyLearning() {
  return (
    <section id="learning" className="section-padding" aria-labelledby="learning-heading">
      <div className="container-max">
        <SectionHeading
          id="learning-heading"
          eyebrow="Currently Learning"
          title="Continuously"
          titleAccent="Growing"
          description="Engineering is best learned by building. Here's what I'm actively exploring and developing skills in."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {learningAreas.map(({ icon: Icon, title, color, bg, border, items }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 * i }}
              className={`${bg} border ${border} rounded-2xl p-6 hover-lift group`}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-sm leading-snug">{title}</h3>
              <ul className="space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${color} flex-shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Philosophy quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-8 text-center border border-violet-500/20">
            <div className="text-4xl mb-4">⚡</div>
            <blockquote className="font-display text-2xl font-bold gradient-text mb-3">
              "Learn. Build. Experiment. Improve."
            </blockquote>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              I believe engineering is best learned by building. Every project is an opportunity to understand a problem, experiment with technology, make mistakes and create something useful.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
