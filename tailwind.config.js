/** @type {import('tailwindcss').Config} */
// NOTE: Tailwind v4 is config-first via CSS (@theme in index.css).
// This file is kept for IDE tooling / migration reference only.
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        accent: {
          50:  '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono:    ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in':      'fadeIn 0.5s ease-in-out',
        'slide-up':     'slideUp 0.6s ease-out',
        'slide-down':   'slideDown 0.6s ease-out',
        'scale-in':     'scaleIn 0.4s ease-out',
        'float':        'float 3s ease-in-out infinite',
        'gradient-x':   'gradientX 4s ease infinite',
        'spin-slow':    'spin 8s linear infinite',
        'pulse-glow':   'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn:      { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp:     { '0%': { transform: 'translateY(20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        slideDown:   { '0%': { transform: 'translateY(-20px)', opacity: '0' }, '100%': { transform: 'translateY(0)', opacity: '1' } },
        scaleIn:     { '0%': { transform: 'scale(0.95)', opacity: '0' }, '100%': { transform: 'scale(1)', opacity: '1' } },
        float:       { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-10px)' } },
        gradientX:   { '0%,100%': { backgroundSize: '200% 200%', backgroundPosition: 'left center' }, '50%': { backgroundSize: '200% 200%', backgroundPosition: 'right center' } },
        pulseGlow:   { '0%,100%': { boxShadow: '0 0 20px rgba(99,102,241,0.4)' }, '50%': { boxShadow: '0 0 40px rgba(99,102,241,0.8)' } },
      },
      backgroundImage: {
        'gradient-primary':   'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        'gradient-dark':      'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)',
        'gradient-mesh':      'radial-gradient(at 40% 20%, #6366f1 0px, transparent 50%), radial-gradient(at 80% 0%, #a855f7 0px, transparent 50%), radial-gradient(at 0% 50%, #818cf8 0px, transparent 50%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glow':       '0 0 20px rgba(99, 102, 241, 0.4)',
        'glow-lg':    '0 0 40px rgba(99, 102, 241, 0.6)',
        'glow-purple':'0 0 20px rgba(168, 85, 247, 0.4)',
        'glass':      '0 8px 32px rgba(0, 0, 0, 0.12)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
}
