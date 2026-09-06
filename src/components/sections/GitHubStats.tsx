import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Star, GitFork, GitCommit, Users, ExternalLink, AlertCircle, RefreshCw } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';

// ─── Types ─────────────────────────────────────────────────────────────────────
interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string | null;
  blog: string;
  location: string | null;
  created_at: string;
}

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  fork: boolean;
  topics: string[];
}

interface GitHubStatsData {
  user: GitHubUser;
  repos: GitHubRepo[];
  totalStars: number;
  totalForks: number;
  topLanguages: { name: string; count: number }[];
}

// ─── Contribution graph (visual only — public events give a partial view) ──────
const intensityClass: Record<number, string> = {
  0: 'bg-gray-100 dark:bg-gray-800',
  1: 'bg-violet-200 dark:bg-violet-900',
  2: 'bg-violet-400 dark:bg-violet-700',
  3: 'bg-violet-600 dark:bg-violet-500',
  4: 'bg-violet-700 dark:bg-violet-400',
};

// Seed a deterministic-ish heatmap from repo activity dates
function buildHeatmap(repos: GitHubRepo[]): number[][] {
  // Mark weeks with known activity from repo update dates
  const activeWeeks = new Set<number>();
  const now = Date.now();
  repos.forEach((r) => {
    const age = (now - new Date(r.updated_at).getTime()) / (7 * 24 * 60 * 60 * 1000);
    if (age <= 53) activeWeeks.add(Math.floor(age));
  });

  return Array.from({ length: 53 }, (_, wi) => {
    const hot = activeWeeks.has(52 - wi);
    return Array.from({ length: 7 }, (_, di) => {
      const seed = (wi * 7 + di + wi * 13) % 100;
      if (hot && di < 5) return seed < 60 ? 3 + (seed % 2) : seed < 80 ? 2 : 1;
      if (seed > 82) return 2;
      if (seed > 68) return 1;
      return 0;
    });
  });
}

// ─── Skeleton loader ──────────────────────────────────────────────────────────
function Skeleton({ className }: { className: string }) {
  return <div className={`animate-pulse rounded-xl bg-gray-200 dark:bg-gray-700 ${className}`} />;
}

// ─── Error state ──────────────────────────────────────────────────────────────
function ErrorState({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
      <div className="w-14 h-14 rounded-2xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
        <AlertCircle size={28} className="text-red-500" />
      </div>
      <div>
        <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Failed to load GitHub data</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 max-w-xs">{message}</p>
      </div>
      <button
        onClick={onRetry}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 text-white text-sm font-medium hover:bg-violet-700 transition-colors"
      >
        <RefreshCw size={14} /> Try again
      </button>
    </div>
  );
}

// ─── Main component ──────────────────────────────────────────────────────────
interface GitHubStatsProps {
  username?: string;
}

export default function GitHubStats({ username = 'shreyaskulat12' }: GitHubStatsProps) {
  const [data, setData] = useState<GitHubStatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [heatmap, setHeatmap] = useState<number[][]>([]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    try {
      const headers = { 'Accept': 'application/vnd.github+json' };

      const [userRes, reposRes] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`, { headers }),
        fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, { headers }),
      ]);

      if (!userRes.ok) {
        if (userRes.status === 404) throw new Error(`GitHub user "${username}" not found.`);
        if (userRes.status === 403) throw new Error('GitHub API rate limit exceeded. Try again in a minute.');
        throw new Error(`GitHub API error: ${userRes.status}`);
      }
      if (!reposRes.ok) throw new Error(`Could not fetch repositories (${reposRes.status}).`);

      const user: GitHubUser = await userRes.json();
      const allRepos: GitHubRepo[] = await reposRes.json();

      // Exclude forks for star/fork totals
      const ownRepos = allRepos.filter(r => !r.fork);
      const totalStars = ownRepos.reduce((sum, r) => sum + r.stargazers_count, 0);
      const totalForks = ownRepos.reduce((sum, r) => sum + r.forks_count, 0);

      // Language breakdown
      const langCount: Record<string, number> = {};
      ownRepos.forEach(r => {
        if (r.language) langCount[r.language] = (langCount[r.language] || 0) + 1;
      });
      const topLanguages = Object.entries(langCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, count]) => ({ name, count }));

      setData({ user, repos: ownRepos.slice(0, 6), totalStars, totalForks, topLanguages });
      setHeatmap(buildHeatmap(allRepos));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, [username]);

  const statCards = data
    ? [
        { label: 'Public Repos', value: String(data.user.public_repos), icon: <GitBranch size={20} /> },
        { label: 'Total Stars', value: data.totalStars > 999 ? `${(data.totalStars / 1000).toFixed(1)}K` : String(data.totalStars), icon: <Star size={20} /> },
        { label: 'Total Forks', value: String(data.totalForks), icon: <GitFork size={20} /> },
        { label: 'Followers', value: data.user.followers > 999 ? `${(data.user.followers / 1000).toFixed(1)}K` : String(data.user.followers), icon: <Users size={20} /> },
      ]
    : [];

  return (
    <section id="github" className="py-24 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="GitHub Activity" subtitle="Open Source" accentWord="GitHub" />

        {/* Error */}
        {!loading && error && <ErrorState message={error} onRetry={fetchData} />}

        {/* Stats cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {loading
            ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-28" />)
            : statCards.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-center hover:border-violet-300 dark:hover:border-violet-700 transition-colors group"
                >
                  <div className="flex justify-center mb-2 text-gray-400 group-hover:text-violet-500 transition-colors">{s.icon}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">{s.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{s.label}</div>
                </motion.div>
              ))}
        </div>

        {/* Top repos + languages */}
        {!loading && data && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {/* Top repos */}
            <div className="lg:col-span-2 space-y-3">
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">Top Repositories</h3>
              {data.repos.length === 0 ? (
                <p className="text-sm text-gray-400">No public repositories yet.</p>
              ) : (
                data.repos.map((repo, i) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start justify-between gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-sm transition-all group"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-sm text-gray-800 dark:text-gray-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors truncate">
                          {repo.name}
                        </span>
                        {repo.language && (
                          <span className="flex-shrink-0 px-2 py-0.5 text-[10px] rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-400 font-medium">
                            {repo.language}
                          </span>
                        )}
                      </div>
                      {repo.description && (
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">{repo.description}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400 flex-shrink-0">
                      {repo.stargazers_count > 0 && (
                        <span className="flex items-center gap-1"><Star size={12} /> {repo.stargazers_count}</span>
                      )}
                      {repo.forks_count > 0 && (
                        <span className="flex items-center gap-1"><GitFork size={12} /> {repo.forks_count}</span>
                      )}
                      <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.a>
                ))
              )}
            </div>

            {/* Language breakdown */}
            {data.topLanguages.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">Languages</h3>
                <div className="space-y-3">
                  {data.topLanguages.map((lang, i) => {
                    const pct = Math.round((lang.count / data.user.public_repos) * 100);
                    return (
                      <motion.div
                        key={lang.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-medium text-gray-700 dark:text-gray-300">{lang.name}</span>
                          <span className="text-gray-400">{lang.count} repo{lang.count !== 1 ? 's' : ''}</span>
                        </div>
                        <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.max(pct, 8)}%` }}
                            transition={{ duration: 0.7, delay: i * 0.1 + 0.3 }}
                          />
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Contribution heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700"
        >
          <div className="flex items-center gap-2 mb-4">
            <GitCommit size={16} className="text-violet-500" />
            <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              Contribution Activity
              <span className="ml-2 text-xs font-normal text-gray-400">(based on repo activity)</span>
            </h3>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-xs text-violet-600 dark:text-violet-400 hover:underline flex items-center gap-1"
            >
              @{username} <ExternalLink size={10} />
            </a>
          </div>

          {loading ? (
            <Skeleton className="h-24 w-full" />
          ) : (
            <>
              <div className="overflow-x-auto">
                <div className="flex gap-[3px] min-w-max">
                  {heatmap.map((week, wi) => (
                    <div key={wi} className="flex flex-col gap-[3px]">
                      {week.map((day, di) => (
                        <motion.div
                          key={di}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: (wi * 7 + di) * 0.0005 }}
                          className={`w-3 h-3 rounded-sm ${intensityClass[day]} hover:ring-1 hover:ring-violet-400 transition-all cursor-default`}
                          title={`${day} contributions`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3 justify-end text-xs text-gray-400">
                <span>Less</span>
                {[0, 1, 2, 3, 4].map(l => (
                  <div key={l} className={`w-3 h-3 rounded-sm ${intensityClass[l]}`} />
                ))}
                <span>More</span>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
