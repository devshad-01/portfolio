/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          bg: '#fafafa',
          'bg-secondary': '#f0f0f0',
          surface: '#ffffff',
          text: '#1a1a2e',
          'text-secondary': '#4a4a5a',
          'text-muted': '#6b6b7b',
          border: '#e2e2e8',
        },
        // Dark mode colors (deep navy/slate, not pure black)
        dark: {
          bg: '#0f172a',           // Deep navy
          'bg-secondary': '#1e293b', // Slate 800
          surface: '#1e293b',       // Card backgrounds
          'surface-hover': '#334155', // Hover state
          text: '#f1f5f9',          // Slate 100
          'text-secondary': '#cbd5e1', // Slate 300
          'text-muted': '#94a3b8',  // Slate 400
          border: '#334155',        // Slate 700
        },
        // Accent colors - vibrant blue theme
        accent: {
          primary: '#3b82f6',       // Blue 500
          'primary-hover': '#2563eb', // Blue 600
          secondary: '#06b6d4',     // Cyan 500
          gradient: {
            from: '#3b82f6',
            via: '#8b5cf6',         // Violet
            to: '#06b6d4',          // Cyan
          }
        },
        // Status colors
        status: {
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          info: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.05', fontWeight: '800', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.75rem', { lineHeight: '1.1', fontWeight: '800', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '-0.01em' }],
        'h1-mobile': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h2-mobile': ['1.5rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'xs': ['0.75rem', { lineHeight: '1.4', fontWeight: '500' }],
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '800px',
      },
      borderRadius: {
        'sm': '6px',
        'md': '10px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '32px',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.08)',
        'hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'glow': '0 0 40px rgba(59, 130, 246, 0.15)',
        'glow-strong': '0 0 60px rgba(59, 130, 246, 0.25)',
        'dark-soft': '0 2px 8px rgba(0, 0, 0, 0.3)',
        'dark-medium': '0 4px 16px rgba(0, 0, 0, 0.4)',
        'dark-hover': '0 8px 24px rgba(0, 0, 0, 0.5)',
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
        'section': '5rem',
        'section-lg': '8rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%)',
      },
    },
  },
  plugins: [],
}
