import { motion } from 'framer-motion';
import { Star, GitFork, Users, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../ui/SocialIcons';
import { SectionHeading } from '../ui/SectionHeading';

const GITHUB_USERNAME = 'shreyaskulat12';
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

const pinnedRepos = [
  {
    name: 'Contact-Manager',
    description: 'Python/Tkinter desktop app for managing client information and billing with UPI QR-code generation.',
    stars: 0,
    forks: 0,
    language: 'Python',
  },
  {
    name: 'Snake-Game',
    description: 'Browser-based Snake Game with score tracking, speed control, sound effects and custom background.',
    stars: 0,
    forks: 0,
    language: 'JavaScript',
  },
  {
    name: 'Weather-Forecasting',
    description: 'A weather-focused Python application exploring weather data and forecasting concepts.',
    stars: 0,
    forks: 0,
    language: 'Python',
  },
  {
    name: 'Portfolio',
    description: 'My personal portfolio — this site is the next-generation version built with React & Vite.',
    stars: 0,
    forks: 0,
    language: 'HTML',
  },
];

const langColors: Record<string, string> = {
  Python: 'bg-blue-500',
  JavaScript: 'bg-yellow-400',
  TypeScript: 'bg-blue-400',
  HTML: 'bg-orange-500',
  CSS: 'bg-pink-500',
};

const githubStats = [
  { label: 'Public Repos', value: '11+', icon: GithubIcon },
  { label: 'Followers', value: '—', icon: Users },
  { label: 'Stars Earned', value: '—', icon: Star },
  { label: 'Forks', value: '—', icon: GitFork },
];

export function GitHubStats() {
  return (
    <section id="github" className="section-padding bg-gray-50 dark:bg-gray-900/50" aria-labelledby="github-heading">
      <div className="container-max">
        <SectionHeading
          id="github-heading"
          eyebrow="GitHub"
          title="Explore My"
          titleAccent="Code"
          description="I believe building projects is one of the best ways to learn engineering. Explore my public repositories."
        />

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
          {githubStats.map(({ label, value, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i }}
              className="glass-card rounded-2xl p-5 text-center hover-lift"
            >
              <Icon className="w-5 h-5 text-violet-500 mx-auto mb-2" />
              <div className="font-display text-2xl font-bold gradient-text">{value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{label}</div>
            </motion.div>
          ))}
        </div>

        {/* GitHub stat card images */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12 max-w-4xl mx-auto">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=8b5cf6&icon_color=06b6d4&text_color=94a3b8`}
            alt="Shreyas Kulat GitHub stats"
            className="rounded-2xl max-w-full"
            loading="lazy"
          />
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=8b5cf6&text_color=94a3b8`}
            alt="Shreyas Kulat top languages"
            className="rounded-2xl max-w-full"
            loading="lazy"
          />
        </div>

        {/* Pinned repos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
          {pinnedRepos.map((repo, i) => (
            <motion.a
              key={repo.name}
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.07 * i }}
              className="glass-card rounded-2xl p-5 hover:border-violet-500/30 transition-all duration-200 group"
            >
              <div className="flex items-center gap-2 mb-2">
                <GithubIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span className="font-mono text-sm font-semibold text-violet-600 dark:text-violet-400 group-hover:underline">
                  {GITHUB_USERNAME}/{repo.name}
                </span>
                <ExternalLink className="w-3 h-3 text-gray-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">{repo.description}</p>
              <div className="flex items-center gap-4 text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                  <span className={`w-3 h-3 rounded-full ${langColors[repo.language] ?? 'bg-gray-500'}`} />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1"><Star className="w-3 h-3" />{repo.stars}</span>
                <span className="flex items-center gap-1"><GitFork className="w-3 h-3" />{repo.forks}</span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:border-violet-500 hover:text-violet-600 transition-all duration-200"
          >
            <GithubIcon className="w-4 h-4" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
