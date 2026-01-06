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
        // Neobrutalist palette
        nb: {
          black: '#222222',
          white: '#ffffff',
          blue: '#3b82f6',
          'blue-dark': '#1e40af',
          pink: '#f472b6',
          orange: '#fb923c',
          cyan: '#22d3ee',
          gray: '#f1f5f9',
          'gray-dark': '#1f2937',
        },
        // Dark mode colors
        dark: {
          bg: '#1f2937',
          'bg-secondary': '#111827',
          surface: '#374151',
          'surface-hover': '#4b5563',
          text: '#f9fafb',
          'text-secondary': '#e5e7eb',
          'text-muted': '#9ca3af',
          border: '#222222',
        },
        // Light mode colors
        light: {
          bg: '#ffffff',
          'bg-secondary': '#f8fafc',
          surface: '#ffffff',
          text: '#222222',
          'text-secondary': '#374151',
          'text-muted': '#6b7280',
          border: '#222222',
        },
        // Accent colors
        accent: {
          primary: '#3b82f6',
          'primary-hover': '#2563eb',
          secondary: '#f472b6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', fontWeight: '900' }],
        'hero-mobile': ['3rem', { lineHeight: '1.1', fontWeight: '900' }],
        'h1': ['2.5rem', { lineHeight: '1.2', fontWeight: '900' }],
        'h1-mobile': ['2rem', { lineHeight: '1.2', fontWeight: '900' }],
        'h2': ['1.75rem', { lineHeight: '1.3', fontWeight: '900' }],
        'h2-mobile': ['1.5rem', { lineHeight: '1.3', fontWeight: '900' }],
        'h3': ['1.25rem', { lineHeight: '1.4', fontWeight: '900' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['0.875rem', { lineHeight: '1.5', fontWeight: '700' }],
        'xs': ['0.75rem', { lineHeight: '1.4', fontWeight: '700' }],
      },
      maxWidth: {
        'content': '1200px',
        'narrow': '1000px',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
      },
      borderRadius: {
        'nb': '24px',
        'nb-sm': '16px',
        'nb-lg': '32px',
      },
      boxShadow: {
        // Neobrutalist shadows
        'brutal': '8px 8px 0px 0px #222222',
        'brutal-sm': '4px 4px 0px 0px #222222',
        'brutal-lg': '12px 12px 0px 0px #222222',
        'brutal-hover': '6px 6px 0px 0px #222222',
        'brutal-press': '2px 2px 0px 0px #222222',
        // Dark mode brutal shadows
        'brutal-dark': '8px 8px 0px 0px #000000',
        'brutal-sm-dark': '4px 4px 0px 0px #000000',
        'brutal-hover-dark': '6px 6px 0px 0px #000000',
        'brutal-press-dark': '2px 2px 0px 0px #000000',
      },
      spacing: {
        'section': '5rem',
        'section-lg': '6rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
