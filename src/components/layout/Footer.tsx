import { motion } from 'framer-motion';
import { Code2, Briefcase, MessageCircle, Mail, ArrowUp, Heart } from 'lucide-react';

interface FooterProps {
  name?: string;
  tagline?: string;
  email?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
}

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer({
  name = 'Alex Morgan',
  tagline = 'Building things that matter.',
  email = 'alex@alexmorgan.dev',
  githubUrl = 'https://github.com/alexmorgan',
  linkedinUrl = 'https://linkedin.com/in/alexmorgan',
  twitterUrl = 'https://twitter.com/alexmorgan_dev',
}: FooterProps) {
  const year = new Date().getFullYear();

  const socialLinks = [
    { label: 'GitHub', href: githubUrl, icon: <Code2 size={18} /> },
    { label: 'LinkedIn', href: linkedinUrl, icon: <Briefcase size={18} /> },
    { label: 'Twitter', href: twitterUrl, icon: <MessageCircle size={18} /> },
    { label: 'Email', href: `mailto:${email}`, icon: <Mail size={18} /> },
  ];

  const handleNavClick = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-fuchsia-600/10 rounded-full blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">{name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{tagline}</p>
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="p-2 rounded-full bg-gray-800 hover:bg-violet-600 text-gray-400 hover:text-white transition-all duration-200"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <motion.button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-gray-400 hover:text-violet-400 transition-colors duration-200"
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
                  </motion.button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Get In Touch</h4>
            <p className="text-sm text-gray-400 mb-3">Open to opportunities and collaborations.</p>
            <motion.a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-sm text-violet-400 hover:text-violet-300 font-medium" whileHover={{ x: 4 }}>
              <Mail size={14} />
              {email}
            </motion.a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 flex items-center gap-1">
            © {year} {name}. Built with <Heart size={12} className="text-pink-500 fill-pink-500" /> and React.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs text-gray-400 hover:text-violet-400 transition-colors group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <span>Back to top</span>
            <span className="p-1.5 rounded-full bg-gray-800 group-hover:bg-violet-600 transition-colors">
              <ArrowUp size={12} />
            </span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
