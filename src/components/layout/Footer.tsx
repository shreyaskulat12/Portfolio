import { ArrowUp, Code2, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../ui/SocialIcons';

const socials = [
  { icon: GithubIcon, href: 'https://github.com/shreyaskulat12', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/shreyas-kulat-789a6332b/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:shreyas.kulat1101@gmail.com', label: 'Email' },
];

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="relative border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 pt-16 pb-8">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#hero" className="inline-flex items-center gap-2 font-display font-bold text-xl text-gray-900 dark:text-white mb-4">
              <span className="p-1.5 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 text-white">
                <Code2 className="w-4 h-4" />
              </span>
              Shreyas<span className="gradient-text">.dev</span>
            </a>
            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed max-w-xs">
              Engineering student passionate about AI, ML and building practical software solutions. Open to internships and collaborations.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Navigation</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
            <div className="flex gap-3 mb-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-violet-100 dark:hover:bg-violet-900/40 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Open to internship &amp; collaboration opportunities
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {new Date().getFullYear()} Shreyas Vijay Kulat. Built with React, Vite &amp; ❤️
          </p>
          <button
            onClick={scrollTop}
            aria-label="Back to top"
            className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
          >
            Back to top
            <span className="p-1.5 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-violet-100 dark:group-hover:bg-violet-900/40 transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
