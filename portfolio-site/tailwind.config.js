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
        // New design palette from PortfolioDesign.json
        mint: {
          DEFAULT: '#6B9B8E',
          light: '#8AB5A9',
          dark: '#4A7A6D',
        },
        sage: {
          DEFAULT: '#E8F0ED',
          light: '#F5F9F7',
          dark: '#D1DDD8',
        },
        charcoal: {
          DEFAULT: '#2C3E50',
          light: '#3D5166',
          dark: '#1A252F',
        },
        amber: {
          DEFAULT: '#F2B544',
          light: '#F5C76A',
          dark: '#D99F2D',
        },
        cream: {
          DEFAULT: '#FAF9F6',
          dark: '#F0EDE6',
        },
        // Dark mode colors (maintaining dark theme)
        dark: {
          bg: '#0a0f1a',            // Deep dark
          'bg-secondary': '#111827', // Darker surface
          surface: '#1a2332',        // Card backgrounds
          'surface-hover': '#243044', // Hover state
          text: '#f1f5f9',           // Light text
          'text-secondary': '#cbd5e1', // Muted text
          'text-muted': '#94a3b8',   // More muted
          border: '#2d3a4f',         // Border color
        },
        // Light mode colors (from design JSON)
        light: {
          bg: '#FAF9F6',             // Cream
          'bg-secondary': '#E8F0ED', // Sage
          surface: '#ffffff',
          text: '#2C3E50',           // Charcoal
          'text-secondary': '#4A5568',
          'text-muted': '#718096',
          border: '#D1DDD8',
        },
        // Accent colors - mint/amber theme
        accent: {
          primary: '#6B9B8E',        // Mint
          'primary-hover': '#4A7A6D', // Mint dark
          secondary: '#F2B544',       // Amber
          'secondary-hover': '#D99F2D', // Amber dark
          gradient: {
            from: '#6B9B8E',
            via: '#8AB5A9',
            to: '#F2B544',
          }
        },
        // Status colors
        status: {
          success: '#6B9B8E',        // Mint
          warning: '#F2B544',        // Amber
          error: '#E57373',
          info: '#64B5F6',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['DM Sans', 'Inter', '-apple-system', 'sans-serif'],
        mono: ['Space Grotesk', 'JetBrains Mono', 'monospace'],
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
