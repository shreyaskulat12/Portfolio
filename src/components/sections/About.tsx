import { motion } from 'framer-motion';
import { MapPin, Calendar, BookOpen, Cpu, Code2, Target } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const stats = [
  { label: 'Year of Study', value: '3rd', icon: BookOpen },
  { label: 'Public Repos', value: '11+', icon: Code2 },
  { label: 'Projects Built', value: '5+', icon: Target },
  { label: 'Graduation', value: '2028', icon: Calendar },
];

const interests = [
  'Artificial Intelligence',
  'Machine Learning',
  'Software Engineering',
  'Web Development',
  'Data Science',
  'Application Development',
  'Problem Solving',
  '3D Visualisation',
  'Geospatial Technology',
  'Smart Governance',
];

export function About() {
  return (
    <section id="about" className="section-padding" aria-labelledby="about-heading">
      <div className="container-max">
        <SectionHeading
          id="about-heading"
          eyebrow="About Me"
          title="The Engineer"
          titleAccent="Behind the Code"
          description="A third-year engineering student who believes in learning by building."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left — avatar + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            <div className="relative">
              <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-3xl bg-gradient-to-br from-violet-500 via-purple-600 to-cyan-500 p-1.5 shadow-2xl shadow-violet-500/20">
                <div className="w-full h-full rounded-[20px] bg-gray-900 overflow-hidden">
                  <img
                    src="/shreyas.jpg"
                    alt="Shreyas Kulat — Engineer & CSE Student"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              {/* Badge */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass rounded-xl px-3 py-2 flex items-center gap-2 border border-violet-500/20"
              >
                <Cpu className="w-4 h-4 text-violet-500" />
                <span className="text-xs font-semibold text-gray-800 dark:text-white">AI & ML</span>
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -left-4 glass rounded-xl px-3 py-2 flex items-center gap-2 border border-cyan-500/20"
              >
                <MapPin className="w-4 h-4 text-cyan-500" />
                <span className="text-xs font-semibold text-gray-800 dark:text-white">Maharashtra, India</span>
              </motion.div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {stats.map(({ label, value, icon: Icon }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="glass-card rounded-2xl p-4 text-center hover-lift"
                >
                  <Icon className="w-4 h-4 text-violet-500 mx-auto mb-1" />
                  <div className="font-display text-2xl font-bold gradient-text">{value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p className="text-lg">
                I'm <strong className="text-gray-900 dark:text-white">Shreyas Vijay Kulat</strong>, a third-year B.Tech Computer Science and Engineering student specializing in{' '}
                <strong className="text-violet-600 dark:text-violet-400">Artificial Intelligence and Machine Learning</strong> at Sanjivani University, with an expected graduation in 2028.
              </p>
              <p>
                I'm interested in software engineering, artificial intelligence, machine learning, data science and modern web application development.
              </p>
              <p>
                My approach to learning is strongly <strong className="text-gray-900 dark:text-white">project-oriented</strong>. Rather than limiting myself to theory, I like experimenting with technologies by building working applications and exploring how software can solve practical problems.
              </p>
              <p>
                I've worked on projects involving Python, JavaScript, HTML, desktop GUI applications, web games and weather applications — while continuing to explore AI/ML and modern software development.
              </p>
              <p>
                My goal is to continuously improve as an engineer by learning new technologies, building meaningful projects and turning ideas into reliable software solutions.
              </p>
            </div>

            {/* Current status badge */}
            <div className="mt-6 p-4 glass-card rounded-2xl border-l-4 border-violet-500">
              <div className="text-sm font-semibold text-violet-600 dark:text-violet-400 mb-1">Current Status</div>
              <div className="text-sm text-gray-700 dark:text-gray-300">
                Engineering Student & Independent Developer — Sanjivani University · 3rd Year B.Tech CSE (AI & ML)
              </div>
            </div>

            {/* Interests */}
            <div className="mt-6">
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Areas of Interest</p>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
